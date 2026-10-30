// Verifies the R3F primitives on the temporary /three-preview route. Run from the repo root with the dev server up.
const path = require('node:path');
const { chromium } = require(path.join(process.cwd(), 'node_modules', 'playwright'));
const scratch = 'C:/Users/NGC/AppData/Local/Temp/claude/C--Users-NGC-Desktop-ManaCircle-mana-cricle/fc3a3128-7f50-4721-a324-fdcb9eeb5c59/scratchpad';
const origin = process.env.TEST_BASE_URL || 'http://127.0.0.1:3000';
const results = [];
const check = (ok, message) => { results.push({ ok, message }); console.log((ok ? 'PASS ' : 'FAIL ') + message); };
const attrs = async locator => ({ inview: await locator.getAttribute('data-inview'), frameloop: await locator.getAttribute('data-frameloop'), motion: await locator.getAttribute('data-motion') });
const pixelDiff = (a, b) => { let diff = 0; for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) diff++; return diff / a.length; };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    const consoleErrors = [], consoleWarnings = [], pageErrors = [];
    page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); if (message.type() === 'warning') consoleWarnings.push(message.text()); });
    page.on('pageerror', error => pageErrors.push(error.message));

    const response = await page.goto(origin + '/three-preview', { waitUntil: 'networkidle', timeout: 120000 });
    check(response.status() === 200, 'route returns 200');
    const first = page.locator('[data-scene="preview"]');
    const second = page.locator('[data-scene="preview-offscreen"]');
    await first.locator('canvas').waitFor({ timeout: 90000 });
    await sleep(2500); // let software GL settle a few frames
    check(await page.locator('canvas').count() >= 1, 'a canvas exists (' + await page.locator('canvas').count() + ' found)');
    let a = await attrs(first), b = await attrs(second);
    console.log('first', JSON.stringify(a), 'second', JSON.stringify(b));
    check(a.inview === 'true' && a.frameloop === 'always', 'first scene is in view and frameloop=always');
    check(b.inview === 'false' && b.frameloop === 'demand', 'offscreen scene is out of view and frameloop=demand');
    check(a.motion === 'full', 'first scene reports data-motion=full');

    // Motion check: two captures a moment apart must differ while the loop runs.
    const shotA = await first.screenshot({ path: path.join(scratch, 'three-preview.png') });
    await sleep(700);
    const shotB = await first.screenshot();
    const movingDiff = pixelDiff(shotA, shotB);
    check(movingDiff > 0.001, 'first scene is animating (png byte diff ratio ' + movingDiff.toFixed(4) + ')');

    // Scroll the second scene into view: it must start, and the first must pause.
    await second.scrollIntoViewIfNeeded();
    await sleep(800);
    a = await attrs(first); b = await attrs(second);
    console.log('after scroll: first', JSON.stringify(a), 'second', JSON.stringify(b));
    check(b.inview === 'true' && b.frameloop === 'always', 'second scene switches to inview/always when scrolled to');
    check(a.inview === 'false' && a.frameloop === 'demand', 'first scene pauses (demand) once offscreen');
    await second.locator('canvas').waitFor({ timeout: 30000 });
    await sleep(1500);
    await second.screenshot({ path: path.join(scratch, 'three-preview-second.png') });
    await page.evaluate(() => window.scrollTo(0, 0));
    await sleep(800);
    a = await attrs(first);
    check(a.inview === 'true' && a.frameloop === 'always', 'first scene resumes after scrolling back');

    // Reduced motion: container flags it and the scene holds still.
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.reload({ waitUntil: 'networkidle', timeout: 120000 });
    await first.locator('canvas').waitFor({ timeout: 90000 });
    await sleep(2500);
    a = await attrs(first);
    console.log('reduced motion: first', JSON.stringify(a));
    check(a.motion === 'reduced', 'container shows data-motion=reduced');
    check(a.frameloop === 'demand', 'reduced motion keeps frameloop=demand even in view');
    const stillA = await first.screenshot({ path: path.join(scratch, 'three-preview-reduced.png') });
    await sleep(700);
    const stillB = await first.screenshot();
    const stillDiff = pixelDiff(stillA, stillB);
    check(stillDiff === 0, 'reduced-motion scene is static (png byte diff ratio ' + stillDiff.toFixed(4) + ')');

    check(pageErrors.length === 0, 'zero page errors' + (pageErrors.length ? ': ' + pageErrors.join(' | ') : ''));
    check(consoleErrors.length === 0, 'zero console errors' + (consoleErrors.length ? ': ' + consoleErrors.join(' | ') : ''));
    console.log('console warnings (' + consoleWarnings.length + '):', JSON.stringify([...new Set(consoleWarnings)]));
  } finally {
    await browser.close();
  }
  const failed = results.filter(result => !result.ok);
  console.log(failed.length ? failed.length + ' check(s) failed' : 'all ' + results.length + ' checks passed');
  process.exitCode = failed.length ? 1 : 0;
})().catch(error => { console.error(error); process.exitCode = 1; });
