# ManaCircle implementation and handover

Updated: 13 October 2026.

## Current rework — supersedes the earlier visual version

The latest local redesign uses the owner-supplied Patnam Pakodi reference for clear hierarchy, bold sans-serif type and strong brand-colour sections. Home now has an original Eightfold brand presentation, compact service rows, Telugu feature and combined team/process content. Shared styles align the catalogue, service details, About, Contact and Guides. The oversized serif exploration is superseded. The approved Eightfold mark and original service illustrations remain.

The application includes ten detailed services, five practical guides, five actual team projects and four earlier labelled concepts. Project previews live on Our work. The browser suite covers 32 route variants. Service and guide metadata, Organization/WebSite/Service/Article entities and breadcrumbs use visible content and confirmed facts. The audience is worldwide, with Telugu marketing priority. Public indexing remains disabled and the unconfigured contact form downloads an unsent brief locally.

Read [the rework brief](REWORK-BRIEF.md), [SEO/content strategy with sources](SEO-CONTENT-STRATEGY.md) and [current validation](REWORK-VALIDATION.md). The remaining sections retain earlier implementation history; their scope and check counts do not override the current brief or latest validation record. Changes remain local on `design/clear-premium-studio`.

## Confirmed direction

The user selected ManaCircle for the current design and said public contact details are not ready. The website is English, aimed at businesses across India including Andhra Pradesh and Telangana. The eight-person team now offers ten services: website creation, website improvements, Android apps, QR menus, digital marketing, Meta Ads, logo/brand identity, Instagram content, English/Telugu scripts and specialist Telugu content/voiceovers. Reels use client-supplied footage; posting is scoped per client. Enquiry, discussion and a custom quotation form the booking journey. The launch target remains the end of October; budget is undecided.

The existing planning documents remain the research record. This implementation chooses their Next.js option and supplies original concept samples because client portfolio material was not provided. No global workflow hooks or external project infrastructure were installed.

## Implemented acceptance map

The service catalogue now also includes Android app development and a dedicated Meta Ads service, as requested after the initial build. Both have detailed pages, homepage/catalogue/footer entries, enquiry selections and correctly named downloaded briefs. Meta Ads covers Facebook/Instagram campaign work, with ad spend scoped separately. The Android illustration is a fictional design concept, not a shipped client app.

| Requirement | Implemented behavior |
| --- | --- |
| Clean, premium presentation | Approved cream/green refinement, local Geist typography, interactive hero, grouped services, original concept visuals and eight-part team artwork |
| Ten services | Catalogue and individual routes with deliverables, client inputs, scope boundaries and FAQs |
| Existing website and sales support | Website improvement service plus separate marketing scope; no guaranteed sales claims |
| Marketing according to need | Meta Ads when agreed; other channels and ad spend explicitly scoped |
| Instagram posts/reels | Scripts, supplied-footage editing, designs and captions; optional posting |
| Bilingual scripts | English website with English/Telugu interactive script example |
| Portfolio without false proof | Four fictional concepts; clear labels; no fabricated reviews, logos or metrics |
| Custom quotation | Service-linked contact entry and explanation of the discussion/quotation process |
| Contact details absent | No fabricated phone/email/social links; brief downloads locally with explicit unsent status |
| Future enquiry delivery | Same-origin API adapter with bounded input, server validation and explicit durable-receipt contract |
| Trust and process | Eight-person team description, four steps, honest scope and FAQ content |
| Responsive and accessible | Mobile menu, labelled controls, error focus, native disclosures, reduced motion |
| Search and sharing | Canonicals, metadata, icon, generated sharing image, preview noindex and gated sitemap |

## Cream/green refinement and current scope

The owner approved refinement of the existing palette. The homepage now groups all ten offers into Build, Grow and Create; the catalogue provides matching category anchors. New detailed pages cover Logo & brand identity, QR menus for restaurants & cafés, and Telugu content & voiceovers. Each new page includes specific business/social use cases, deliverables, required inputs, scope boundaries, related services and a preselected enquiry CTA. All are available in the footer and brief selector.

The visual refresh includes local Geist typography, a keyboard-operated website/app/content showcase, asymmetric featured work with a generated interior, eight-part circle artwork, sticky navigation, larger reading text and refined contact/footer layouts. Website, timing and budget fields are grouped in an optional disclosure that automatically opens when those fields contain errors. The Telugu preview is a visual concept; no recorded voice sample is claimed. The QR symbol is explicitly illustrative.

See [service scope](SERVICE-CATALOGUE.md), [design decisions](DESIGN-REFINEMENT.md) and [asset provenance](ASSETS.md).

## Verification record

- `npm run typecheck`: passed.
- `npm test`: 15 tests passed, including invalid contact data, missing consent, malformed/oversize requests, origin mismatch, unconfigured delivery, request ID forwarding, malformed receipts and upstream failures. Production smoke testing exposed NextRequest loopback-host normalization; the adapter now validates against the configured public origin, with a regression test covering normalized internal URLs and forged forwarded headers.
- `npm run build`: production build passed. A dynamic-font warning in the first social-sharing image was addressed by replacing symbol glyphs with inline SVG.
- Playwright: 15 public content routes returned 200 with one h1, title, description and preview noindex metadata. Unknown route returned the custom 404.
- axe: zero WCAG 2 A/AA and 2.1 AA violations in the main content of all 15 checked pages. Separate whole-document homepage scan also returned zero violations, including shared header/footer.
- Responsive checks: no horizontal overflow at 320, 390, 768 and 1440 CSS pixels for checked routes. Desktop and mobile screenshots were visually inspected; footer heading sizes and concept-poster image placement were corrected.
- Interactive checks passed: gallery filters, before/after layout, Telugu script selection, motion-video playback, contact service preselection, field errors and error focus, actual project-brief download, menu navigation and Escape focus restoration.
- The downloaded brief was inspected. It contains the entered example details, selected service and an explicit statement that it was not sent. No enquiry request or browser storage write occurred during download.
- Browser test run recorded zero uncaught page errors. An early development screenshot triggered a caret-style hydration warning from the browser screenshot instrumentation; the application run did not produce an uncaught runtime error.
- Social-sharing route returned a valid PNG response.
- Final production smoke checks passed for the homepage, contact page, motion concept, robots, sitemap and sharing image. The production form downloaded a brief successfully. A same-origin API request correctly returned the documented 503 unavailable state while no receiver is configured; zero uncaught runtime errors were recorded.

Evidence is local in `.playwright-mcp/` and intentionally excluded from source delivery by `.gitignore`. Browser checks are reproducible through `tests/browser-checks.cjs`. Tests used invented example details only.

### Android and Meta Ads addition

TypeScript, the production build and all 15 existing tests passed after expanding the catalogue. Browser checks verified seven service entries, both new routes and canonicals, both service-to-contact links, and the exact service names inside downloaded briefs. Whole-document axe scans found no violations on the homepage, service catalogue or either new service page. Checked widths of 320, 390, 768, 1024 and 1440 pixels showed no horizontal overflow. New Android preview screenshots are `.playwright-mcp/android-service-desktop.png` and `.playwright-mcp/android-service-mobile.png`.

### Premium refinement and three further services

After the final code changes, `npm run build` completed with all ten service paths; its TypeScript stage passed. The standalone TypeScript check and all 15 validation/receiver tests also passed. Production browser checks covered 20 content routes, each returning HTTP 200 with a single h1, page title, description and preview noindex. axe WCAG 2 A/AA and 2.1 AA checks reported zero violations on all 20 main content areas and the entire shared homepage. These are automated checks, not accessibility certification.

Verified interactions include the hero’s Arrow/Home/End keyboard controls, gallery filters, before/after preview, Telugu script selection, video playback, form errors and focus, automatic opening of invalid optional fields, actual brief download, no background POST or browser storage, the three new service-to-enquiry links, mobile menu/Escape and custom 404. No uncaught browser errors occurred. Selected home, services, work, about, contact and new-service pages had no horizontal overflow at 320, 390, 768 and 1440 pixels. Additional homepage checks passed at 580, 600, 640, 700, 900 and 1024 pixels.

Desktop/mobile screenshots were inspected for the homepage, all three new services and contact page; both alternate hero previews were inspected on mobile. Evidence includes `.playwright-mcp/polish-verification.json` and `final-*.png` screenshots. The production preview is running at `http://127.0.0.1:3100` because Windows rejected rebinding port 3000 during this session. Reproduce with `npm start -- --port 3100`; for browser checks set `TEST_BASE_URL` accordingly. The unconfigured preview’s canonical origin still defaults to port 3000; set the verified public domain before release.

### Natural photographic imagery

Three further built-in ChatGPT image assets were added at the owner’s request: a creative worktable on the homepage, a café still life in the logo/brand and QR-menu previews, and recording equipment in the Telugu service preview. These remain illustrative concepts; no actual premises, staff or clients are implied. The original PNGs and optimised WebP copies are in `public/images`; visual direction, usage and provenance are documented in [assets](ASSETS.md). The eight-part team graphic remains on About.

The affected four routes returned 200 and loaded all new images at 320, 390, 768 and 1440 pixels without horizontal overflow. Desktop and mobile crops were visually reviewed. Main-content axe checks at 390 and 1440 found zero WCAG 2 A/AA or 2.1 AA violations; no uncaught page errors were recorded during these checks. TypeScript passed after the development type files finished regenerating. The production build also passed, and the production preview was restarted at `http://127.0.0.1:3100`; all four affected routes and their image loads passed the final production smoke check. Screenshots are saved as `.playwright-mcp/workspace-desktop.png`, `*-photo-desktop.png` and `photo-*-mobile.png`. Service hero images load eagerly; the lower homepage image stays lazy-loaded with reserved dimensions.

## Practical limits

This is a working local website, not a published service. Contact submission has no configured recipient. The ready-to-connect API has been tested with stub responses; durable lead storage, notifications and real provider delivery have not been provisioned or tested end to end. Preview search indexing is disabled.

Accessibility automation covers selected WCAG rules, not a certification. Browser verification used Chromium; Safari, Firefox, physical devices, assistive technology and production performance measurements remain release checks. The concept reel is an eight-second silent WebM animation from an AI-generated still, not evidence of a client footage edit.

## Remaining launch inputs and work

1. Confirm the final name/mark, domain and public business email/WhatsApp. Add Instagram only once the real profile exists.
2. Decide the production host and configure HTTPS. Public deployment was not requested in this implementation turn.
3. Provide a durable enquiry receiver and privacy owner/contact. Validate persistence, deduplication, rate limits, notification behavior and failure recovery with the actual service.
4. Replace the preview privacy policy with actual providers, retention period and request-handling details. Keep personal content out of application logs and analytics.
5. Approve the website copy and original concepts; replace them with authorised client work as it becomes available.
6. Rebuild with the verified public origin/contact variables; perform production smoke, mobile-device and performance checks. Enable indexing only after these are complete.

Analytics is not installed. If measurement is later added, use the agreed Firebase Analytics direction with consent and no personal form content. Lead records belong in the server data store, not analytics.
