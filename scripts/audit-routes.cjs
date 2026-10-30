// Multi-route visual + a11y + perf audit using the repo's Playwright + Edge.
// Usage: node audit.cjs <outDir> <origin> [routesCommaSeparated] [widths=1440,390]
const path = require('path'); const fs = require('fs');
const repo = process.cwd();
const { chromium } = require(path.join(repo, 'node_modules', 'playwright'));
const axePath = path.join(repo, 'node_modules', 'axe-core', 'axe.min.js');
(async () => {
  const [outDir, origin = 'http://127.0.0.1:3000', routesArg, widthsArg] = process.argv.slice(2);
  const routes = (routesArg || '/,/services,/services/website-design,/work,/work/abacus-experts,/about,/contact,/guides,/guides/business-website-brief,/privacy,/does-not-exist').split(',');
  const widths = (widthsArg || '1440,390').split(',').map(Number);
  fs.mkdirSync(outDir, { recursive: true });
  let browser;
  try { browser = await chromium.launch({ channel: 'msedge', headless: true }); } catch { browser = await chromium.launch({ headless: true }); }
  const report = [];
  for (const width of widths) {
    const context = await browser.newContext({ viewport: { width, height: width < 700 ? 844 : 900 }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    for (const route of routes) {
      const errors = []; const warnings = [];
      const onErr = e => errors.push('pageerror: ' + e.message);
      const onCon = m => { if (m.type() === 'error') errors.push('console: ' + m.text().slice(0, 300)); else if (m.type() === 'warning') warnings.push(m.text().slice(0, 200)); };
      page.on('pageerror', onErr); page.on('console', onCon);
      const t0 = Date.now();
      let status = 0;
      try {
        const res = await page.goto(origin + route, { waitUntil: 'networkidle', timeout: 90000 });
        status = res ? res.status() : 0;
      } catch (e) { errors.push('goto: ' + e.message.split('\n')[0]); }
      const loadMs = Date.now() - t0;
      await page.waitForTimeout(900);
      const metrics = await page.evaluate(async () => {
        const lcp = await new Promise(resolve => { let v = 0; try { const po = new PerformanceObserver(l => { for (const e of l.getEntries()) v = e.renderTime || e.loadTime || v; }); po.observe({ type: 'largest-contentful-paint', buffered: true }); setTimeout(() => { po.disconnect(); resolve(Math.round(v)); }, 300); } catch { resolve(-1); } });
        const cls = (() => { try { let s = 0; const po = new PerformanceObserver(l => { for (const e of l.getEntries()) if (!e.hadRecentInput) s += e.value; }); po.observe({ type: 'layout-shift', buffered: true }); return Math.round(s * 1000) / 1000; } catch { return -1; } })();
        return {
          h1: document.querySelectorAll('h1').length,
          title: document.title,
          overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth,
          canvases: document.querySelectorAll('canvas').length,
          images: document.images.length, brokenImages: [...document.images].filter(i => i.complete && i.naturalWidth === 0 && i.src).length,
          lcp, cls, height: document.body.scrollHeight,
          reducedMotionHook: !!document.querySelector('[data-reduced-motion]'),
        };
      });
      // scroll through for lazy content, then top
      await page.evaluate(async () => { const h = document.body.scrollHeight; for (let y = 0; y < h; y += 700) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 70)); } window.scrollTo(0, 0); });
      await page.waitForTimeout(500);
      const slug = route === '/' ? 'home' : route.replace(/^\//, '').replace(/[^a-z0-9]+/gi, '-');
      const shot = path.join(outDir, `${slug}-${width}.png`);
      try { await page.screenshot({ path: shot, fullPage: true }); } catch (e) { errors.push('screenshot: ' + e.message.split('\n')[0]); }
      let axe = null;
      try {
        await page.addScriptTag({ path: axePath });
        axe = await page.evaluate(async () => (await window.axe.run(document, { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'] } })).violations.map(v => ({ id: v.id, impact: v.impact, help: v.help, nodes: v.nodes.slice(0, 5).map(n => n.target.join(' ')) })));
      } catch (e) { axe = [{ id: 'axe-failed', help: e.message.split('\n')[0] }]; }
      const overflowers = metrics.overflow ? await page.evaluate(() => [...document.querySelectorAll('body *')].filter(el => el.getBoundingClientRect().right > document.documentElement.clientWidth + 1).slice(0, 8).map(el => el.tagName.toLowerCase() + (el.className && typeof el.className === 'string' ? '.' + el.className.split(' ').slice(0, 2).join('.') : ''))) : [];
      report.push({ route, width, status, loadMs, ...metrics, overflowers, axeViolations: axe, errors: [...new Set(errors)].slice(0, 10), warnings: [...new Set(warnings)].slice(0, 5), screenshot: shot });
      page.off('pageerror', onErr); page.off('console', onCon);
    }
    await context.close();
  }
  await browser.close();
  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(report, null, 2));
  const problems = report.filter(r => r.status !== 200 && !r.route.includes('does-not-exist') || r.overflow || r.h1 !== 1 || r.errors.length || (r.axeViolations && r.axeViolations.length) || r.canvases > 1);
  console.log(JSON.stringify({ routes: report.length, problems: problems.map(p => ({ route: p.route, width: p.width, status: p.status, h1: p.h1, overflow: p.overflow, overflowers: p.overflowers, canvases: p.canvases, errors: p.errors, axe: p.axeViolations })), summary: report.map(r => `${r.route}@${r.width}: ${r.status} h1=${r.h1} canvas=${r.canvases} lcp=${r.lcp}ms cls=${r.cls} load=${r.loadMs}ms axe=${r.axeViolations ? r.axeViolations.length : 'n/a'} err=${r.errors.length}`) }, null, 2));
})().catch(e => { console.error(e); process.exit(1); });
