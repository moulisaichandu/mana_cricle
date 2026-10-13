const fs = require('node:fs');
const assert = require('node:assert/strict');
const origin = process.env.TEST_BASE_URL || 'http://127.0.0.1:3100';
const serviceSlugs = ['logo-branding','qr-digital-menus','telugu-content-voiceovers','website-design','website-improvement','android-app-development','digital-marketing','meta-ads','instagram-content','content-writing'];
const routes = ['/', '/services', '/about', '/contact', '/work', '/work?page=2', '/privacy', '/guides', ...serviceSlugs.map(s=>'/services/'+s), ...['abacus-experts','public-speaking','chess-learning','exam-preparation','voice-agent','nila','studio-form','slow-social','words-in-motion'].map(s=>'/work/'+s), ...['business-website-brief','qr-menu-vs-pdf','instagram-reel-brief','website-project-costs','telugu-marketing-brief'].map(s=>'/guides/'+s)];
const unescape = text => text.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#x27;/g,"'");
const getMeta = (html, name) => unescape(html.match(new RegExp('<meta (?:name|property)="'+name+'" content="([^"]*)"'))?.[1] || '');
(async () => {
  const results = [], links = new Set(), titles = new Set(), descriptions = new Set();
  for (const route of routes) {
    const response = await fetch(origin+route);
    assert.equal(response.status,200,route+' status');
    const html = await response.text();
    assert(!/brolly|github\.com\/moulisaichandu\/voice-agent/i.test(html), route+' must not expose excluded company branding or repository links');
    const title = unescape(html.match(/<title>(.*?)<\/title>/s)?.[1] || '');
    const description = getMeta(html,'description');
    assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length,1,route+' one H1');
    assert(title.includes('ManaCircle'),route+' brand title');
    assert(description.length>30,route+' useful description');
    assert(!titles.has(title),route+' unique title');
    assert(!descriptions.has(description),route+' unique description');
    titles.add(title); descriptions.add(description);
    assert(getMeta(html,'robots').includes('noindex'),route+' preview remains noindex');
    const canonical = unescape(html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] || '');
    assert(canonical && new URL(canonical).pathname+new URL(canonical).search===route,route+' canonical');
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
    assert(schemas.some(s=>s['@type']==='Organization' && s.name==='ManaCircle'),route+' organization');
    assert(schemas.some(s=>s['@type']==='WebSite'),route+' website schema');
    if (route.startsWith('/services/')) {
      const service = schemas.find(s=>s['@type']==='Service');
      assert(service && service.areaServed==='Worldwide' && service.provider['@id'],route+' provider and service area');
      assert(html.includes(service.description),route+' schema description must be visible');
      assert(html.includes('/contact?service='+route.split('/').pop()),route+' service-specific CTA');
    }
    if (route.startsWith('/guides/')) {
      const article = schemas.find(s=>s['@type']==='Article');
      assert(article && article.author.name==='ManaCircle' && article.dateModified==='2026-10-12',route+' attributed, reviewed article');
      assert(html.includes(article.headline) && html.includes('Reviewed 12 October 2026'),route+' visible article title and review date');
    }
    if (route.startsWith('/services/') || route.startsWith('/guides/') || ['/work/abacus-experts','/work/public-speaking','/work/chess-learning','/work/exam-preparation','/work/voice-agent'].includes(route)) {
      const breadcrumb = schemas.find(s=>s['@type']==='BreadcrumbList');
      assert(breadcrumb && new URL(breadcrumb.itemListElement.at(-1).item).pathname===route,route+' breadcrumb destination');
    }
    for (const match of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      const href=unescape(match[1]);
      if(href.startsWith('/')&&!href.startsWith('//')) links.add(new URL(href,origin).pathname);
    }
    results.push({route,status:response.status,title,canonical,schemas:schemas.map(s=>s['@type'])});
  }
  for (const path of links) assert(routes.includes(path),path+' internal destination covered');
  for (const path of ['/services/unknown-service','/guides/unknown-guide','/work/unknown-concept','/missing-page','/work/brolly-chess','/work/brolly-exam-prep','/images/projects/brolly-chess.webp','/images/projects/brolly-exam-prep.webp','/brand-preview','/brand/open-circle.svg','/brand/monogram.svg','/brand/manacircle-logo.jpeg']) {
    assert.equal((await fetch(origin+path)).status,404,path+' 404 status');
  }
  assert((await (await fetch(origin+'/robots.txt')).text()).includes('Disallow: /'),'preview robots');
  assert(!(await (await fetch(origin+'/sitemap.xml')).text()).includes('<loc>'),'preview sitemap stays empty');
  const og=await fetch(origin+'/opengraph-image');
  assert.equal(og.status,200,'social image status');
  assert(og.headers.get('content-type').includes('image/png'),'social image type');
  for(const path of ['/images/projects/abacus-experts.webp','/images/projects/public-speaking.webp','/images/projects/chess-learning.webp','/images/projects/exam-preparation.webp','/images/terra-brand-concept.webp','/images/nila-product-v2.webp','/images/studio-interior.webp','/images/photography/creative-desk.webp','/images/photography/recording-microphone.webp','/brand/eightfold.svg','/brand-mark.svg','/icon.svg']) assert.equal((await fetch(origin+path)).status,200,path+' local image');
  fs.mkdirSync('.artifacts',{recursive:true});
  fs.writeFileSync('.artifacts/rework-route-audit.json',JSON.stringify({origin,checkedAt:new Date().toISOString(),results,internalDestinations:links.size},null,2));
  console.log(JSON.stringify({passed:true,pages:results.length,internalDestinations:links.size,checks:['HTTP responses','unique titles and descriptions','one H1','canonicals','parseable JSON-LD and visible service descriptions','provider relationships','guide authorship and dates','breadcrumb targets','internal destinations','preview noindex/robots/sitemap','twelve 404 routes/assets including retired branding','excluded branding and repository links absent','social image','local image assets']},null,2));
})().catch(error=>{console.error(error);process.exitCode=1;});
