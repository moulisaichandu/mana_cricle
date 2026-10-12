# Homepage clarity and visual rework

## Request and findings

On 8 October 2026, the owner reported that visitors find the homepage confusing. They confirmed that the services/next step and the professional appearance both need improvement.

The existing desktop page is 7,668 pixels tall at 1440 pixels wide. Its eleven sections repeat broad messages about a connected team, business goals and project planning. Several headings do not name the section's purpose. Portfolio labels emphasise fictional brand names before explaining what the sample demonstrates.

## Design decision before implementation

- Keep the approved warm white/deep green identity and the requested photograph with live text over it.
- Palette: warm white `#FAF9F5`, forest green `#173E35`, white `#FFFFFF`, sage `#EDF1E9`, secondary text `#526057`, divider `#D7DFD5`.
- Type: existing locally served Geist, with a 40–76px main heading, 32–48px section headings and readable 15–17px body copy. Sentence case, short lines and left alignment.
- Lead with actual services: websites, branding and marketing for businesses. Describe the team and India-wide coverage in plain language.
- Show all ten services under three familiar groups. Each group gets a restrained visual, a short explanation and descriptive links. Do not require tabs, carousels or hidden menus to discover services.
- Present samples by deliverable first. Label fictional projects and generated imagery clearly, without implying client relationships or results.
- Combine team context and the process; replace separate goal-selection and guide sections with direct guidance where it is needed.
- Use the consistent primary action “Start your project”, opening the existing project-brief page. No unconfigured WhatsApp or email links.

```
Navigation                         Start your project
Photo hero: what we do + who for    Primary action / services anchor
Three practical facts
Services: Websites & apps | Marketing & ads | Branding & content
Two clearly labelled design samples
English/Telugu content feature
Who we are + three steps from brief to delivery
Practical FAQs + optional project guides link
Final project action
Compact existing footer
```

An alternative based mainly on bigger portfolio imagery would still make visitors infer the services from fictional brands. The chosen direction makes the service catalogue the first section after the hero. Visuals support the explanation; each section answers a distinct visitor question.

## Acceptance criteria

- A visitor can identify the offer, service area and next action from the first screen.
- All ten services remain visible and link to their existing detail pages.
- Samples are distinguishable from client work; no invented testimonials, results or staff photographs.
- No horizontal overflow at 320–1920px; readable text, keyboard focus, mobile navigation and usable FAQ controls.
- Preserve page metadata, heading hierarchy, static readable copy and existing enquiry behaviour.
- Aim to substantially reduce the desktop page's height without hiding necessary content.
- Verify the homepage and affected navigation in the browser, build successfully, and restart the existing local production preview.

Scope is the homepage and the navigation labels needed to support it. Existing service detail pages, form delivery configuration and hosting remain as configured.

## Verification

- Replaced eleven homepage sections with seven focused sections. At 1440px, the full page measured 4,817px high versus 7,668px before the rework: approximately 37% shorter.
- Verified widths 320, 390, 600, 700, 768, 820, 900, 901, 1024, 1440 and 1920px: no horizontal overflow, exactly one H1, ten service links, consistent project destinations and no oversized footer signature.
- Full-main-content Axe checks returned no WCAG A/AA violations at 390, 768 and 1440px. Visually inspected the hero, service catalogue, sample previews, mobile layout and page rhythm; refined the sample artwork after inspection.
- Verified the hero's services anchor, the process anchor both on the homepage and from `/contact`, mobile menu closure, FAQ toggling with Enter, visible focus and keyboard activation of the final project button. Reduced-motion preference switches smooth scrolling off.
- Navigation uses “Sample work” and “Start your project”; the menu breakpoint was moved to 900px so the clearer labels have sufficient space.
- Existing illustrations were reused. The social preview is lazy loaded, no new dependencies were installed, and homepage CSS is scoped to its own elements.
- Detailed browser evidence: `.artifacts/clarity-home-checks.json`. Before/after captures: `.playwright-mcp/home-before-clarity.png` and `.playwright-mcp/clarity-{width}.png`.

- `npm run build` passed, including TypeScript and all static pages. Restarted the existing local production preview on port 3100.
- Reused the existing `tests/browser-checks.cjs` suite with installed Chromium: 24 pages passed accessibility checks, all interactions passed, responsive checks passed at 320/390/768/1440px and no runtime errors were recorded. Evidence: `.artifacts/clarity-browser-regression.json`. This includes work filters, sample interactions, the enquiry brief download and mobile navigation.
- `node scripts/check-rendered-site.cjs` passed for 24 pages and 24 internal destinations, checking metadata, canonical URLs, structured data, preview indexing controls, missing routes and image assets. The first attempt ran before the server was ready; the retry completed successfully after startup.
- Final production captures: `.playwright-mcp/clarity-production-1440.png`, `.playwright-mcp/clarity-production-390.png` and the corresponding `clarity-production-top-{width}.png` images. Local preview remains `http://127.0.0.1:3100/`.

These checks establish rendering, navigation and technical accessibility. Whether the new hierarchy resolves visitor confusion should be confirmed with fresh feedback from the owner's users.
