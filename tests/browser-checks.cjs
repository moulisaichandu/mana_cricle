async (page, options = {}) => {
  const origin = options.origin || 'http://127.0.0.1:3000';
  const root = options.root || 'C:/Users/mouli/OneDrive/Documents/Desktop/ManaCircle';
  const results = [];
  page._manaResults = results;
  const assert = (value, message) => { if (!value) throw new Error(message); };
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  const routes = ['/', '/services', '/services/logo-branding', '/services/qr-digital-menus', '/services/telugu-content-voiceovers', '/services/website-design', '/services/website-improvement', '/services/android-app-development', '/services/meta-ads', '/services/digital-marketing', '/services/instagram-content', '/services/content-writing', '/work', '/work?page=2', '/work/abacus-experts', '/work/public-speaking', '/work/chess-learning', '/work/exam-preparation', '/work/voice-agent', '/work/nila', '/work/slow-social', '/work/studio-form', '/work/words-in-motion', '/about', '/contact', '/privacy', '/guides', '/guides/business-website-brief', '/guides/qr-menu-vs-pdf', '/guides/instagram-reel-brief'];
  for (const route of routes) {
    const response = await page.goto(origin + route);
    await page.locator('h1').waitFor();
    assert(response.status() === 200, route + ' must return 200');
    assert(await page.locator('h1').count() === 1, route + ' needs one h1');
    assert(await page.title(), route + ' needs a title');
    assert(await page.locator('meta[name="description"]').getAttribute('content'), route + ' needs a description');
    assert(await page.locator('meta[name="robots"]').getAttribute('content').then(x => x.includes('noindex')), 'Preview must be noindex');
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), route + ' must not overflow');
    await page.addScriptTag({ path: root + '/node_modules/axe-core/axe.min.js' });
    const audit = await page.evaluate(async () => (await window.axe.run(document.querySelector('main'), { runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] } })).violations.map(v => ({ id: v.id, impact: v.impact, nodes: v.nodes.map(n => n.target) })));
    results.push({ route, status: 200, accessibility: audit });
  }
  await page.goto(origin);
  assert(await page.locator('.image-hero-photo').isVisible(), 'Homepage hero image must render');
  assert(await page.locator('.home-service-links a').count() === 10, 'All ten services must be discoverable');
  assert(await page.locator('.home-portfolio .portfolio-card').count() === 4, 'Homepage must stay limited to four featured projects');
  await page.getByRole('link', { name: 'Read our project guides' }).click();
  await page.waitForURL('**/guides');
  assert(await page.locator('.guide-card').count() === 3, 'All project guides must be discoverable');
  await page.goto(origin + '/work');
  const portfolio = page.locator('.portfolio-section');
  assert(await portfolio.locator('.portfolio-card').count() === 4, 'Our work must show four team projects');
  assert(await portfolio.getByRole('heading', { name: 'Abacus Experts', exact: true }).count() === 1, 'New Abacus project must appear on the first page');
  await page.getByRole('navigation', { name: 'Project pages, top' }).getByRole('link', { name: 'Next page, page 2' }).click();
  await page.waitForURL('**/work?page=2#projects');
  assert(await portfolio.locator('.portfolio-card').count() === 1, 'Second page must show the remaining project without duplicating the first page');
  assert(await portfolio.getByRole('heading', { name: 'Voice Agent', exact: true }).count() === 1, 'Second page must keep the existing Voice Agent project discoverable');
  await page.reload();
  assert(await portfolio.locator('.portfolio-card').count() === 1, 'Refreshing must preserve the selected project page');
  await portfolio.getByRole('link', { name: 'View project: Voice Agent', exact: true }).click();
  await page.waitForURL('**/work/voice-agent');
  await page.getByRole('link', { name: 'All projects', exact: true }).click();
  await page.waitForURL('**/work?page=2#projects');
  assert(await portfolio.locator('.portfolio-card').count() === 1, 'Returning from a project must restore its gallery page');
  await page.getByRole('navigation', { name: 'Project pages, top' }).getByRole('link', { name: 'Previous page, page 1' }).click();
  await page.waitForURL('**/work#projects');
  assert(await portfolio.locator('.portfolio-card').count() === 4, 'Previous must return to the first four projects');
  const teamProjects = [
    ['abacus-experts', 'https://abacusexperts.com/'],
    ['public-speaking', 'https://publicspeakingclasses.in/'],
    ['chess-learning', 'https://chessmastersapp.com/'],
    ['exam-preparation', null],
    ['voice-agent', null],
  ];
  for (const [slug, url] of teamProjects) {
    if (url) {
      assert(await portfolio.locator(`a[href="${url}"]`).count() === 1, slug + ' needs its correct external link');
      assert(await portfolio.locator(`a[href="${url}"]`).getAttribute('target') === '_blank', slug + ' must open externally');
    }
    await page.goto(origin + '/work/' + slug);
    if (url) assert(await page.locator(`.portfolio-detail-toolbar a[href="${url}"]`).count() === 1, slug + ' detail needs its external link');
    else assert(await page.locator('.portfolio-detail-toolbar a').count() === 0, slug + ' must not expose an external link');
    if (slug !== 'voice-agent') {
      await page.waitForFunction(() => { const img = document.querySelector('.portfolio-detail-figure img'); return img && img.complete && img.naturalWidth > 0; });
    }
    await page.goto(origin + '/work');
  }
  assert(await page.locator('a[href*="github.com"]').count() === 0, 'Portfolio must not expose repository links');
  await page.goto(origin + '/work/studio-form');
  await page.getByRole('button', { name: 'Before concept', exact: true }).click();
  assert(await page.locator('.before-art').count() === 1, 'Before toggle must change the layout');
  await page.getByRole('button', { name: 'Improved concept', exact: true }).click();
  assert(await page.locator('.before-art').count() === 0, 'After toggle must change the layout');
  await page.goto(origin + '/work/words-in-motion');
  await page.getByRole('button', { name: /Telugu/ }).click();
  assert(await page.locator('.script-beat p[lang="te"]').count() === 3, 'Telugu script must be available');
  await page.goto(origin + '/work/slow-social');
  await page.locator('video').evaluate(async video => { await video.play(); });
  await page.waitForFunction(() => document.querySelector('video').currentTime > .1);
  await page.locator('video').evaluate(video => video.pause());
  assert(await page.locator('video track').count() === 1, 'Motion study must have captions');
  await page.goto(origin + '/contact?service=instagram-content');
  assert(await page.locator('#service').inputValue() === 'instagram-content', 'Service must be preselected');
  let posts = 0;
  const countPosts = req => { if (req.method() === 'POST' && req.url().includes('/api/enquiries')) posts++; };
  page.on('request', countPosts);
  await page.getByRole('button', { name: 'Download project brief', exact: true }).click();
  await page.locator('.form-error-summary').waitFor();
  assert(await page.locator('#name').getAttribute('aria-invalid') === 'true', 'Missing name must be explained');
  assert(await page.locator('.form-error-summary').evaluate(e => e === document.activeElement), 'Errors must receive focus');
  await page.getByLabel('Your name', { exact: false }).fill('Test Person');
  await page.getByLabel('Email address', { exact: false }).fill('test@example.com');
  await page.getByLabel('Tell us what you have in mind', { exact: false }).fill('We need website and Instagram content for a sample business.');
  await page.locator('.form-optional summary').click();
  await page.locator('#website').fill('not-a-url');
  await page.locator('.form-optional summary').click();
  await page.getByRole('button', { name: 'Download project brief', exact: true }).click();
  assert(await page.locator('.form-optional').getAttribute('open') !== null, 'Invalid optional field must open its section');
  assert(await page.locator('#website-error').isVisible(), 'Optional field error must be visible');
  await page.locator('#website').fill('https://example.com');
  const downloadEvent = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download project brief', exact: true }).click();
  const download = await downloadEvent;
  assert(download.suggestedFilename() === 'ManaCircle-project-brief.txt', 'Brief must download');
  await page.getByRole('status').filter({ hasText: 'Nothing has been sent' }).waitFor();
  assert(posts === 0, 'Local download must not submit personal data');
  assert(await page.evaluate(() => localStorage.length === 0 && sessionStorage.length === 0), 'Form must not persist browser data');
  page.off('request', countPosts);
  for (const [slug, name] of [['logo-branding', 'Logo & brand identity'], ['qr-digital-menus', 'QR menus for restaurants & cafés'], ['telugu-content-voiceovers', 'Telugu content & voiceovers']]) {
    await page.goto(origin + '/services/' + slug);
    await page.locator('.service-hero').getByRole('link', { name: 'Discuss your project' }).click();
    await page.waitForURL('**/contact?service=' + slug);
    assert(await page.locator('#service').inputValue() === slug, 'New service CTA must preselect ' + slug);
    assert(await page.locator('#service option:checked').textContent() === name, 'New service must use its public name');
  }
  for (const width of [320, 390, 768]) {
    await page.setViewportSize({ width, height: 844 });
    for (const route of ['/', '/services', '/work', '/work?page=2', '/about', '/contact', '/services/instagram-content', '/services/logo-branding', '/services/qr-digital-menus', '/services/telugu-content-voiceovers', '/work/words-in-motion', '/work/abacus-experts', '/work/public-speaking', '/work/chess-learning', '/work/exam-preparation', '/work/voice-agent', '/guides/business-website-brief']) {
      await page.goto(origin + route); await page.locator('h1').waitFor();
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${route} overflows at ${width}`);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(origin);
  await page.getByRole('button', { name: 'Open menu', exact: true }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Our work', exact: true }).waitFor({ state: 'visible' });
  await page.keyboard.press('Escape');
  assert(await page.getByRole('button', { name: 'Open menu', exact: true }).evaluate(e => e === document.activeElement), 'Escape must return menu focus');
  await page.getByRole('button', { name: 'Open menu', exact: true }).click();
  await page.getByRole('navigation').getByRole('link', { name: 'Our work', exact: true }).click();
  await page.waitForURL('**/work');
  assert(await page.getByRole('button', { name: 'Open menu', exact: true }).count() === 1, 'Navigation must close the menu');
  await page.goto(origin + '/missing-page');
  assert(await page.getByRole('heading', { level: 1 }).innerText().then(t => t.includes('circle')), '404 must be helpful');
  assert(errors.length === 0, 'Browser runtime errors: ' + errors.join('; '));
  return { routes: results, interactions: 'passed', responsiveWidths: [320,390,768,1440], runtimeErrors: errors };
}
