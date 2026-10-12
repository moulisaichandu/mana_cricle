# Rework validation — 8 October 2026

Current preview: [http://127.0.0.1:3100](http://127.0.0.1:3100). Next.js production server, bound to loopback. The redesign is local; it has not been deployed publicly.

## Passed

- Standalone TypeScript check.
- All 15 existing enquiry validation/receiver tests.
- Final production build, including all ten service pages and the three new guide pages.
- Production HTTP audit of **24 content routes** and **24 internal destinations**.
- Every audited page returns 200, has one H1, a distinct title and description, the appropriate canonical path, and preview noindex metadata.
- JSON-LD parses successfully. Organization and WebSite are present; each service identifies its provider and India service area, with the same description present in visible page text. Service and guide breadcrumb destinations match their pages.
- All service pages expose a contact link carrying the correct service slug.
- Four unknown paths return 404, including unknown service, guide and concept slugs.
- Preview robots disallow indexing; the preview sitemap is intentionally empty.
- Social-sharing image returns a PNG successfully.
- New local WebP assets return 200.
- Read-only browser navigation and screenshots inspected the homepage, selected work, branding service, QR menu service, About, website-planning guide and production contact page.
- Available browser console checks on inspected routes reported no warnings or errors.
- Production contact snapshot confirms Telugu service preselection and the clearly stated local-download flow.

Automated route evidence: `.artifacts/rework-route-audit.json`.
Reproduce: `node scripts/check-rendered-site.cjs`; override `TEST_BASE_URL` if needed.

## Visual corrections from inspection

- Removed dark headline text placed over the Studio Form photo to preserve readability.
- Fixed the active contact-navigation button text colour after the production screenshot revealed it blended into the background.
- Refined form heading sizes and shortened the About headline after screenshot review.
- Aligned the favicon and structured-data logo with the two-circle header mark.
- Adjusted the smallest hero typography for narrow screens.
- Extended collapsed navigation through 700px to avoid crowding after adding Guides.
- Replaced the earlier hero layout and its tab interaction with the new photographic composition.
- Kept dimensions reserved for images and lazy loading below the fold; a full-page screenshot taken without scrolling can show unloaded lower images. A subsequent section navigation verified the work image loads.

Screenshots are in `.playwright-mcp/rework-*.png`. The browser viewport available in this session was 1280 × 720. A filename containing “desktop” does not imply a separate 1440px verification.

## Not verified in this environment

The full Playwright/axe/responsive/interaction suite could not run on the redesign. Local Edge launch returned `spawn EPERM`. Automatic approval review rejected Playwright code execution, evaluation, resize and click tools because the current approval policy is “never”. Read-only navigation, snapshots, screenshots and console inspection were available.

The suite in `tests/browser-checks.cjs` has been updated for 24 pages and the new service/guide discovery flow. Run it on an environment with browser-control permission:

```powershell
$env:TEST_BASE_URL='http://127.0.0.1:3100'
npm run test:e2e
```

Do not reuse earlier-version zero-violation or mobile-width results as evidence for this rework. Mobile browser execution, keyboard/form interactions and axe results remain unverified for the current design. Existing unit tests still cover form validation and receiver semantics.

Safari, Firefox, physical devices, assistive technology, live enquiry delivery and deployed performance remain unverified. No search ranking, traffic or external AI-answer citation measurements exist for this local site.

## Launch inputs still needed

The final public domain, actual email/WhatsApp, enquiry delivery destination and production privacy details are not supplied. The form downloads a brief and does not send it to the team. Configure and verify these before enabling live lead capture and public indexing. See [SEO and launch notes](SEO-CONTENT-STRATEGY.md).
