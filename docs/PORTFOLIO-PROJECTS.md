# Team portfolio - 9 October 2026

The portfolio contains five projects supplied by the owner. The homepage shows four featured previews; /work shows up to four projects per page. Each project has a detail page. At the owner's request, the Design samples section, its category filters, fictional concept cards and disclosure have been removed from /work.

| Public name | Detail page | Public external link |
| --- | --- | --- |
| Abacus Experts | /work/abacus-experts | https://abacusexperts.com/ |
| Public Speaking | /work/public-speaking | https://publicspeakingclasses.in/ |
| Chess Learning Platform | /work/chess-learning | https://chessmastersapp.com/ |
| Exam Preparation Platform | /work/exam-preparation | None, at the owner's request |
| Voice Agent | /work/voice-agent | None, at the owner's request |

## Naming and link requirements

The owner asked for the company brand to be absent everywhere on this website, including screenshots and URLs. Project names, route slugs, image filenames, alt text, browser-frame labels, metadata and structured data use neutral descriptions. The exam website URL was removed because it contains the excluded brand. Voice Agent has no repository link or GitHub label. Projects without an external destination retain their internal View project link; no disabled or empty external link is rendered.

The supplied repositories and live pages were read to describe actual capabilities. Private repository source is not embedded in this website. No calls or campaigns were initiated. No client relationship, performance result, user count or app-store publication is claimed.

## Screenshots and visual direction

Public pages were visited without signing in, granting microphone access or submitting forms. Screenshots are real UI captures, not AI-generated images. For the chess and exam projects, new browser captures show relevant interface regions without the company name or logo. The pixels were not retouched. The visible capture regions were checked for the excluded name and visually reviewed.

| Served asset | Dimensions | Bytes |
| --- | --- | ---: |
| public/images/projects/abacus-experts.webp | 1440 x 1050 | 103,888 |
| public/images/projects/public-speaking.webp | 1440 x 1050 | 98,148 |
| public/images/projects/chess-learning.webp | 1200 x 875 | 50,508 |
| public/images/projects/exam-preparation.webp | 1440 x 1050 | 63,230 |

PNG capture originals stay in the local .artifacts/project-previews directory. WebP encoding uses quality 88. Retired branded assets and their known optimized cache entries are moved out of publicly served locations into a local archive.

Voice Agent uses an original HTML/CSS/SVG campaign-to-conversation-to-transcript illustration. Its accessible label and detail caption identify the illustration; it is not presented as a live application screenshot.

The gallery retains the warm white/deep green palette and local Geist font. Desktop uses two columns; mobile uses one. Explicit card widths prevent minimum image heights from widening cards beyond small phone screens. No new trackers, embeds, fonts or dependencies were introduced.

Implementation is in src/lib/portfolio.ts, src/components/portfolio-gallery.tsx, src/components/portfolio-detail.tsx and src/app/portfolio.css. Metadata, breadcrumbs and the production sitemap include the five project detail routes. Local previews remain noindex.

## Verification

- Production build passed, including TypeScript and all five project detail routes.
- The rendered-site audit passed all 30 page URLs: metadata, headings, canonical URLs, JSON-LD, internal destinations, screenshots and preview indexing rules.
- No excluded company name or Voice Agent repository URL appears in the rendered HTML. Retired branded project routes and image URLs return 404.
- Chromium browser checks passed all 30 page URLs with zero reported WCAG A/AA violations in the audited main content and zero browser runtime errors. Project links, image loading, pagination, navigation and the local enquiry download passed.
- Responsive checks passed at 320, 390, 768 and 1440 pixels. Final desktop and mobile screenshots were visually reviewed.
- Evidence: .artifacts/abacus-pagination-browser-results.json, .artifacts/rework-route-audit.json, .artifacts/portfolio-pagination-production-checks.json, .artifacts/portfolio-pagination-desktop.png and .artifacts/portfolio-pagination-mobile.png.
- Updated local production preview is running at http://127.0.0.1:3100/.


## Design samples removal - 9 October 2026

Removed the complete fictional design gallery, filters, introductory copy and disclosure from /work. The page now contains the four team projects followed by the contact section. Updated the About page portfolio description and removed obsolete gallery filter steps from the existing browser checks.

Validation: production build and 28-page rendered audit passed. Targeted browser checks at 320, 390 and 1440 pixels confirmed four projects, no concept gallery or quoted sample content, no horizontal overflow and no runtime errors. The work page accessibility audit reported no violations. Evidence: .artifacts/work-without-samples-check.json and .artifacts/work-without-samples-desktop.png.


## Abacus and paginated browsing - 9 October 2026

Abacus Experts was added from the owner-supplied live website and private repository. The public homepage was viewed without signing in or submitting the demo form. The original 1440 x 1050 screenshot is .artifacts/project-previews/abacus-original.png; its WebP copy uses quality 88. The visible preview contains no excluded company name. Copy describes programme pages, admissions, lessons, practice and progress; no performance metrics or private student data are used. The repository link is not published.

The current page-size constant is four. The homepage uses the first four entries, including Abacus. /work uses server-rendered query pagination with Next/Previous links above and below the cards, a visible project range and a page count. Cards retain the existing warm white (#faf9f5), forest (#173e35), green (#24624e), muted (#59665d) and border (#d6ddd4) palette with local Geist. Pagination controls are at least 44 pixels high and wrap on narrow screens.

Each gallery page has a shareable URL and its own canonical metadata. Invalid page values redirect to the first page; values beyond the last page redirect to the last page. A project detail page returns to the gallery page containing that project. Native links keep pagination usable without client-side JavaScript. All five detail pages stay in the production sitemap, including projects outside the first gallery page. Adding future data entries automatically changes the total and page count.

Validation: the final production build and 30-URL rendered audit passed. Chromium checked all 30 URLs with no reported accessibility violations in main content or runtime errors. Responsive checks passed at 320, 390, 768 and 1440 pixels. The homepage remains limited to four cards; the gallery shows four cards on page one and Voice Agent on page two. Next/Previous, refresh and returning from a detail page passed on the production preview. A separate check with JavaScript disabled passed keyboard navigation, the detail round trip, browser Back/Forward and five invalid-page redirects. Native anchors are used for pagination and the detail backlink to preserve the query and fragment exactly. Final desktop and mobile gallery screenshots were reviewed. The updated production preview runs at http://127.0.0.1:3100/.
