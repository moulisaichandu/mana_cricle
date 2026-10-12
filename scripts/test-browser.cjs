const { chromium } = require('playwright');
const fs = require('node:fs');
const vm = require('node:vm');
(async () => {
  const browser = await chromium.launch({ channel: 'msedge' });
  try {
    const page = await browser.newPage();
    const run = vm.runInThisContext('(' + fs.readFileSync('tests/browser-checks.cjs', 'utf8') + ')');
    const result = await run(page, { root: process.cwd(), origin: process.env.TEST_BASE_URL });
    fs.mkdirSync('.artifacts', { recursive: true });
    fs.writeFileSync('.artifacts/browser-results.json', JSON.stringify(result, null, 2));
    console.log(JSON.stringify(result, null, 2));
    if (result.routes.some(route => route.accessibility.length)) process.exitCode = 1;
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
