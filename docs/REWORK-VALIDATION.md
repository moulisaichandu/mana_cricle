# Rework validation — 13 October 2026

Development: [127.0.0.1:3000](http://127.0.0.1:3000). Production preview: [127.0.0.1:3100](http://127.0.0.1:3100). Both bind to loopback. Changes are local on `design/clear-premium-studio`; no commit, push or deployment was performed for this iteration.

## Current result

The owner's Patnam Pakodi reference informed a clearer sans-serif direction with strong brand-colour sections. The homepage now leads with “Branding & websites. Made to connect.” and an original Eightfold brand presentation. Compact service rows, category anchors, Telugu content, team/process disclosures, FAQs and one closing CTA replace the repeated editorial sections. At 1440px, measured homepage height fell from 7,174px to 4,439px; the service section starts at approximately 774px.

Shared typography, spacing, header, footer, catalogue cards, detail-page introductions, About, Contact and Guides use the same sage/forest system. The approved Eightfold logo, ten original service illustrations, established routes, actual portfolio and local brief-download behavior remain. The social image now matches the sans-serif heading. No new dependencies were added.

## Passed checks

| Check | Result |
| --- | --- |
| `npm.cmd run typecheck` | Exit 0 |
| `npm.cmd test` | Exit 0; 15/15 enquiry validation and receiver tests |
| `npm.cmd run build` | Exit 0; production compilation, TypeScript, static generation and social image |
| `npm.cmd run test:e2e`, `TEST_BASE_URL=http://127.0.0.1:3100` | Exit 0; 32 route variants, no reported main-content axe violations, all interactions passed, no runtime errors |
| `node scripts/check-rendered-site.cjs` on port 3100 | Exit 0; 32 content routes, 27 internal destinations, 12 expected 404 routes/assets, metadata and image checks |
| Additional production visual review | Exit 0; 12 page/viewport combinations, loaded images, no whole-document axe violations or horizontal overflow |
| Additional interaction review | Exit 0; homepage/catalogue anchors, keyboard process/menu, reduced motion and no-JavaScript content |
| `git diff --check` | Exit 0; Windows line-ending notices only |

The browser suite uses installed Microsoft Edge through Playwright. It exercises service/guide discovery, absence of homepage project previews, portfolio pagination and return navigation, before/after controls, Telugu script switching, captioned video playback, service-specific enquiry links, invalid/collapsed form fields, actual brief download, absence of form submission/storage in local mode, mobile menu and Escape behavior. Responsive checks cover 320, 390, 768 and 1440px.

Whole-document axe and image/layout review covers Home, Services, website-design, About and Contact at 1440px and 390px, plus Home at 320px and 768px. Separate checks confirm edge-aligned header layout without logo/menu overlap at 901, 1024 and 1440px. Desktop services open by keyboard; Escape closes the panel and restores focus. Homepage and catalogue category destinations remain below the sticky header.

Reduced-motion preferences remove hero and section movement. With JavaScript disabled, the homepage heading and all ten service links remain available and native process disclosures work. The 1200 × 630 social image was visually inspected.

The rendered-site check verifies unique titles/descriptions, one H1, canonical paths, JSON-LD, visible service descriptions, worldwide provider relationships, guide authorship/dates, breadcrumb targets, preview indexing controls, internal links and local image responses. Retired logo alternatives and `/brand-preview` return 404.

## Verification correction

The first whole-document scan found insufficient contrast in the decorative concept browser's small label. Its text colour was darkened from `#61725f` to `#4c604c`. The subsequent production scan passed at all inspected widths.

## Evidence

- `.artifacts/browser-results.json`: complete 32-route and interaction results.
- `.artifacts/rework-route-audit.json`: production HTTP/metadata/link results.
- `.artifacts/redesign-20261013/visual-audit.json`: production whole-document accessibility, dimensions and runtime results.
- `.artifacts/redesign-20261013/interaction-audit.json`: category anchors, desktop menu, keyboard process, reduced motion and no-JavaScript checks.
- `.artifacts/redesign-20261013/{home,services,website,about,contact}-{1440,390}-{top,full}.png`: initial viewport and scrolled, fully loaded captures.
- `.artifacts/redesign-20261013/home-{320,768}-{top,full}.png`: smaller homepage widths.
- `.artifacts/redesign-20261013/social-preview.png`: generated sharing image.

Evidence is local and ignored by Git. The repository's `.workflow/wf.ps1` runner is not configured; package scripts and existing HTTP/browser checks were used directly. PowerShell blocks `npm.ps1` in this environment, so commands use `npm.cmd` without changing system execution policy.

## Limits and launch inputs

Automated axe results are not a complete accessibility certification. Safari, Firefox, physical devices, assistive technology and deployed performance were not tested. No Lighthouse score, field Core Web Vitals, ranking, traffic or AI-citation result is claimed. The unit runner emits its existing module-type warning; all tests pass.

The public domain, confirmed contact details and enquiry receiver remain launch inputs. The form currently downloads an unsent project brief to the visitor's device. Indexing is intentionally disabled in this preview. No live receiver, analytics or cloud service was provisioned or contacted.
