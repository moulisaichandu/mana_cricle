# ManaCircle premium redesign — continuation prompt (handover, 2026-10-30)

> Mouli / friend kosam short note (Tinglish): ee project paused ayyi vere person continue chestunnaru. Ee file lo
> (1) repo ippudu ye state lo undo, (2) foundation engineer ki ichina **complete brief**, (3) analysis lo already
> teeskunna decisions, (4) token names, component APIs, page checklist anni unnayi. Foundation code (tokens.css,
> atelier.css, header/footer restyle, enquiry modal, motion primitives) **inka start avvaledu** — analysis matrame
> jarigindi. Kindha unna prompt ni as-is Claude Code / Codex ki ivvochu; design authority files `docs/superpowers/design-panel/` and `docs/superpowers/specs/` lo unnayi.

---

## 1. State of the repository at handover (facts)

- Branch `design/clear-premium-studio` (pushed; `main` fast-forwarded to the same commit at handover).
- Last commits: `421f7cd wip(design): premium 3D redesign handoff — spec, 3D primitives, quick-enquiry API`,
  `b5efeac feat(site): refresh ManaCircle identity, design and worldwide content`.
- Verified at handover: `npm run typecheck` → exit 0. `npm test` → 21 pass, 0 fail. Dev server: `npm run dev`
  (runs `scripts/dev.cjs`, http://127.0.0.1:3000). E2E: `npm run test:e2e` (Playwright, Edge channel, `tests/browser-checks.cjs`).
- Already in the tree (done before the foundation work):
  - `src/components/three/`: `SceneCanvas` + `useSceneMotion` (`scene-canvas.tsx`), `lazyScene` (`lazy.tsx`, import it from
    `@/components/three/lazy`, never from the barrel), `EightfoldMark` (`eightfold.tsx`, variants glass/brass/ceramic/ink/sage,
    props size/spread/spin/spinAxis/float/parallax/onReady), `StudioLights preset cream|forest` + `SoftFloorShadow` (`studio-lights.tsx`).
  - `src/lib/enquiry.ts`: `serviceOptions`, `QuickEnquiry`, `QuickErrors`, `emptyQuickEnquiry`, `validateQuickEnquiry`,
    `formatQuickEnquiry`, `isQuickEnquiryPayload`. `src/lib/enquiry-server.ts`: `validReceiver`, `handleEnquiry` accepts
    `kind: "quick"` payloads (README "Receiver contract" documents both shapes). 21 unit tests in `tests/enquiry.test.ts`.
  - `src/app/layout.tsx`: Geist (`--font-studio`) and Instrument Serif 400 normal+italic (`--font-display`) via `next/font/local`.
- **Not started**: everything in section 3 (CSS layers, tokens.css, atelier.css, motion.css, enquiry.css, header/footer/shared
  restyle, enquiry modal, motion primitives, verification script). No file outside the list above was changed for it.
- Design authority (read in this order): `docs/superpowers/design-panel/direction-1-eightfold-atelier-WINNER.md` (direction), `docs/superpowers/design-panel/judges.json`
  (three judges; apply every `must_fix` and the foundation `graft_ideas`), then
  `docs/superpowers/specs/2026-10-30-premium-3d-redesign-design.md` (synthesised spec, 835 lines — it EXISTS and OVERRIDES the direction where they differ). Related: `docs/HANDOFF-2026-10-30.md` (coordinator handoff), `docs/superpowers/design-panel/direction-2-*.md`, `direction-3-*.md` (rejected directions, for context only).

### Stack facts (verified in node_modules)

- Next.js 16.3.8 App Router, webpack (`next build --webpack`), React 19.3.0 (`import { ViewTransition } from "react"` exists and is
  typed in `@types/react` 19.3: props `name`, `default`, `enter`, `exit`, `share`, `update`), TypeScript 5.9 strict, pure CSS with
  `@layer` (no Tailwind), local fonts only (`public/fonts`).
- three 0.186.0, @react-three/fiber 9.8.2, @react-three/drei 10.7.9, motion 14.8.0 (`motion/react` exports `MotionConfig`,
  `useInView`, `useReducedMotion`, `useScroll`, `LazyMotion`, `domAnimation`). **Install nothing.**
- Playwright 1.63 (`require(path.join(process.cwd(),'node_modules','playwright'))`, `chromium.launch({ channel: 'msedge', headless: true })`),
  axe-core at `node_modules/axe-core/axe.min.js`. Edge is at `C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe`.
- Line endings are mixed (CRLF majority, `core.autocrlf=true`). Preserve each file's existing endings.
- Next docs for this version live in `node_modules/next/dist/docs/` (read `01-app/02-guides/view-transitions.md`,
  `01-app/01-getting-started/11-css.md` before touching CSS order / view transitions).

---

## 2. The brief for the foundation engineer (reproduced in full)

You are the foundation engineer for the ManaCircle premium redesign. Repo: `C:\Users\NGC\Desktop\ManaCircle\mana_cricle`
(Windows; use forward slashes in tool paths). Next.js 16.3.8 App Router (webpack; dev server at http://127.0.0.1:3000 — it
hot-reloads), React 19.3, TypeScript strict, pure CSS with `@layer` (no Tailwind), local fonts only. Installed: three 0.186,
@react-three/fiber 9.8.2, @react-three/drei 10.7.9, motion 14.8 (import from `"motion/react"`). Install nothing.

### Read first (in this order)

1. The winning design direction: `docs/superpowers/design-panel/direction-1-eightfold-atelier-WINNER.md` — "Eightfold Atelier: cinematic editorial luxury".
   Design authority for tokens, type scale, header/footer, buttons, bands, motion system.
2. Judges' verdicts: `docs/superpowers/design-panel/judges.json` — three judges (owner, art director, engineer). Apply every `must_fix` and the
   `graft_ideas` that concern the foundation (data-tone on sections, header tone from the band under it, solid header background
   on mobile, grain only ≥900px without blend mode, `MotionConfig reducedMotion="user"`, keyboard parity for pointer effects,
   `SectionLabel` index prop, quality gate that does not mount WebGL under reduced motion / <760px / coarse pointer / saveData /
   deviceMemory<4, `StageErrorBoundary` + `webglcontextlost` → poster).
3. Final synthesised spec: `docs/superpowers/specs/2026-10-30-premium-3d-redesign-design.md` (exists). It OVERRIDES the
   direction file wherever they differ (tokens/type/header/footer/motion names) — reconcile token, type, header, footer and motion names with it.
4. Existing code you will replace or restyle: `src/app/layout.tsx`, `src/app/globals.css`, `src/app/studio.css`,
   `src/app/refinement.css`, `src/app/header.css`, `src/app/photography.css`, `src/components/header.tsx`,
   `src/components/shared.tsx`, `src/components/brand.tsx`, `src/components/icon.tsx`, `src/components/reveal.tsx`,
   `src/lib/enquiry.ts` (quick-enquiry exports), `src/lib/site.ts`, `tests/browser-checks.cjs` (hooks to preserve),
   README "Receiver contract".
5. Already-built 3D primitives in `src/components/three/` (read them; do not rewrite): `SceneCanvas` (props children, className,
   fallback, camera default `{position:[0,0,7],fov:32}`, dpr default `[1,1.5]` forced 1 under 760px, shadows, style, label →
   `data-scene/data-motion/data-inview/data-frameloop`; frameloop "always" only when ≥10% in view + tab visible + motion allowed,
   else "demand"); `useSceneMotion()` → `{reducedMotion,inView,isMobile,pointer ref}`; `lazyScene(() => import('./x-scene'), fallback)`
   (call at module scope of a "use client" file; import from `@/components/three/lazy`, NOT the barrel, so three/drei never enter
   page chunks); `EightfoldMark` (variants glass/brass/ceramic/ink/sage, spread, spin, float, parallax); `StudioLights preset cream|forest`;
   `SoftFloorShadow`. Fonts `--font-studio` (Geist variable) and `--font-display` (Instrument Serif 400 normal+italic) are on `<body>`.

### Scope (the foundation OWNS these files; page agents build pages afterwards and must not need to touch them)

**A. CSS architecture.** One deterministic layer order at the top of `src/app/globals.css`:
`@layer reset, legacy, tokens, atelier, pages, motion;`. Move EVERY existing rule from globals.css (its base/components/responsive
layers), studio.css, refinement.css, header.css and photography.css into `@layer legacy { … }` (keep the files, wrap them; delete
nothing yet — page agents retire legacy chunks route by route; a final cleanup deletes the legacy layer). Create `src/app/tokens.css`
(`@layer tokens`): all colour tokens from the direction (forest-950/900/800/600, mist, cream, paper, cream-deep, ink, muted, line,
line-strong, gold, bronze, error) plus semantic aliases `--bg/--fg/--fg-muted/--hairline/--focus/--link` that swap under
`[data-tone="cream"|"sage"|"forest"]`; the type scale (Instrument Serif only for headings ≥28px and numerals; Geist for all
reading/UI text; `clamp()` sizes per spec), spacing scale, radii, shadows, motion tokens (`--ease-out-expo`, `--dur-slow`… named per
spec), z-index scale. Create `src/app/atelier.css` (`@layer atelier`): base typography, selection/focus, `.container`/grid, bands
(`.band[data-tone]`), hairlines, buttons (primary/secondary/text-link incl. hover/press/focus-visible with keyboard parity),
`.section-label` (optional index), FAQ/details disclosures (native, animated open via grid-template-rows or `@starting-style`),
process list, forms (inputs/select/textarea/checkbox/error states — used by the contact page and the modal), plates/`.tilt-card`
frame (gold hairline pseudo-element 8px outside, `translateZ(20px)`, hover shadow deepen, gloss only on dark plates), grain overlay
(pre-tinted SVG noise, normal blend, low opacity, only ≥900px), skip link, `sr-only`, header + footer + closing plate styles.
Create `src/app/motion.css` (`@layer motion`): `@media (prefers-reduced-motion: reduce)` kill-switch for all optional motion,
view-transition CSS (`::view-transition-*` for page crossfade and the shared-element classes the spec names), `@supports` guards.
Import tokens.css, atelier.css, motion.css from layout.tsx after the legacy imports.

**B. Layout shell (`src/app/layout.tsx`).** Keep metadata/structured data/fonts; body gets `data-tone` default cream; render Header,
`<main id="main-content">`, Footer, the grain overlay element, and `<EnquiryProvider>` (see E) around everything; wrap `{children}` in
React `<ViewTransition default="page-cross">` only if it compiles cleanly with React 19.3 (it does: the export and types exist);
otherwise fall back to CSS `@view-transition { navigation: auto }` guarded by `@supports` and say so.

**C. Header (`src/components/header.tsx` + styles in atelier.css).** The spec's dark/light tone header. Tone comes from the band
under the header (IntersectionObserver over `[data-tone="forest"]` bands, or a `<ToneSentinel tone="forest">` per dark band),
colours transition over 200ms; translucent blur only ≥760px (solid background below); keep ALL existing behaviour and accessibility:
services dropdown (hover intent on mouse, click toggle, Escape, outside click, focus-out), mobile menu with aria-expanded/aria-controls,
"Open menu"/"Close menu" names, Escape focus return, aria-current. The nav CTA "Start your project" opens the enquiry modal (E) and
remains a real link to /contact for no-JS.

**D. Shared components (`src/components/shared.tsx`).** `ButtonLink` (opens the enquiry modal for /contact hrefs, reading `?service=`
for preselection; still renders `<a href>` for no-JS — see the decision in 3.6), `SectionLabel` (optional `index` → "01 — What we do"),
`FAQ`, `Process`, `ContactBanner` (dark closing plate: forest-900 with gradient + grain, cream margin per the judge fix, Instrument
Serif headline, primary action opens the modal), `Footer` (dark footer per spec: wordmark, explore/services/connect columns, bottom
row, photo credits preserved verbatim). Also `BrandSymbolBars` in brand.tsx: same geometry as `BrandSymbol`, each bar gets
`style={{'--i': i}}` and a class hook (for the SVG exploded/missing-bar/assembly variants and the process dial). Switch the concept-art
Georgia declarations to `var(--font-display)` only if trivial (they are: 11 declarations in globals.css, 2 in photography.css,
3 in studio.css — a search/replace `Georgia, serif` → `var(--font-display), Georgia, serif`).

**E. Enquiry modal (new; owner explicitly asked: "Start your project" opens a beautiful modal with Full name, Phone number, Email,
Our services dropdown, submit).** `src/components/enquiry/enquiry-provider.tsx` ("use client": context with `open(service?)`/`close`;
renders the modal once), `src/components/enquiry/enquiry-modal.tsx`, `src/components/enquiry/enquiry-link.tsx` (client `<a>` that
intercepts click when JS is present — used by ButtonLink and the header CTA), `src/app/enquiry.css` (`@layer atelier`). Native
`<dialog>` with `showModal()`, close on Escape/backdrop click/close button, focus to the first field on open and back to the trigger on
close, `aria-labelledby` the dialog heading, body scroll lock, entry/exit animation with `@starting-style` +
`transition-behavior: allow-discrete` (fallback instant) using the motion tokens, reduced motion → no transform animation. Design:
two-panel on desktop (left narrow forest-950 brand panel with the Eightfold mark as a CSS-3D rotating `BrandSymbolBars` under a gold
hairline, serif line "Let's plan your project." and three quiet reassurance lines from existing copy — "Clear scope. Custom quotation.",
"Eight people. One creative & digital team.", "Worldwide collaboration. English & Telugu content."; right: paper form card) and a
bottom-sheet on ≤760px (full width, rounded top, slides up). Fields: Full name, Phone number (tel, placeholder "+91 …"), Email,
"What do you need?" native `<select>` with custom chevron listing `serviceOptions` (preselect from the trigger), compact consent
checkbox ("I agree to ManaCircle contacting me about this enquiry."), honeypot. Validation: `validateQuickEnquiry`; inline errors
with `aria-describedby`; error summary focus like the existing `ContactForm`. Submit: when a receiver is configured (`canSend`
computed in layout.tsx with `validReceiver({ url: process.env.ENQUIRY_WEBHOOK_URL })` and passed to EnquiryProvider) POST
`/api/enquiries` with `Content-Type: application/json` and `Idempotency-Key: crypto.randomUUID()` (reuse the same id on retry of
unchanged data), body `{ kind: "quick", name, phone, email, service, consent, honeypot }`; 201 → success state (animated check,
heading "Request received.", the server message); 422 → field errors; 503/502/network → honest failure state offering "Save my
request" (downloads `formatQuickEnquiry` text as `ManaCircle-call-back-request.txt`), WhatsApp/email links only if
`site.whatsapp`/`site.email` are configured, and a link to the full form at /contact. When no receiver is configured (current preview
state) the primary button reads "Save my request", downloads the text and shows "Saved on your device. Nothing has been sent to
ManaCircle yet." — never claim a request was sent when it was not. Keep copy factual: no response-time promises. Key UI copy off
status codes, not server message text (the 503/502 messages mention "project brief").

**F. Motion primitives (`src/components/motion/`).** `MotionProvider` (`MotionConfig reducedMotion="user"`) mounted in layout;
`Reveal` (replaces `src/components/reveal.tsx` usage — keep that path re-exporting; SSR-visible, motion `useInView` once, transform +
opacity for non-LCP content only, props delay/y/as); `RevealLines` for serif headlines (`lines: string[]` wrapped server-side, each
line slides up with a clip — the first H1 line must stay at opacity 1 from first paint, transform-only, per the LCP must-fix);
`TiltCard` (CSS-3D plate: pointer tilt ≤5° via CSS custom properties in rAF, only under `(hover:hover) and (pointer:fine)`, returns
over 600ms, focus-visible shows the lifted state, inert under reduced motion); `useQualityTier()` → "off" | "lite" | "full" (off under
reduced motion, <760px, coarse pointer, saveData, deviceMemory<4, no WebGL; lite when hardwareConcurrency<6 or deviceMemory<8;
treat undefined deviceMemory as unknown → lite, never full); `SceneFrame` ("use client": `poster: ReactNode` always server-rendered,
keeps the `.image-hero-photo` hook on home; `scene: ComponentType<{ tier; onReady }>` from lazyScene; `tier` override; `className`;
`label`; renders poster, mounts the scene only when tier !== "off" after hydration + requestIdleCallback, crossfades poster→canvas
over the spec's duration once the scene calls `onReady`, wraps in a `StageErrorBoundary` class component plus a capture-phase
`webglcontextlost` listener that restore the poster permanently; `data-tier` attribute for tests).

**G. Preserve every test hook in `tests/browser-checks.cjs`:** `.image-hero-photo` visible, `.home-service-links a` ×10, no
`main a[href^="/work/"]` on home, `.home-process-list details[open]` exactly one with `name="project-process"`, link text "Read our
project guides", `.guide-card` ×5, pagination aria-labels ("Project pages, top/bottom", "Next page, page 2", "Previous page, page 1"),
`.portfolio-section`/`.portfolio-card`, `.portfolio-detail-toolbar`, `.before-art`, `.script-beat p[lang=te]`, "Open menu" button +
Escape focus return, contact form ids/texts (`#name`, `#service`, `#website`, `#website-error`, `.form-error-summary`,
`.form-optional`, "Download project brief", "Nothing has been sent"), `.service-hero` "Discuss your project" →
`/contact?service=slug`, 404 H1 containing "circle".

### Rules

- Do NOT edit page files (`src/app/**/page.tsx` other than layout.tsx), home.css, portfolio.css, contact-form.tsx, portfolio-*,
  concept-art, project-demos, service-*, guide-cards, studio-*, circle-art, `lib/*.ts`, `tests/*`, README. Write requests for the
  page agents into the report instead.
- Content/data untouched; new labels only from existing sentences; nothing fabricated (no testimonials, metrics, prices, response times).
- No external assets. Strict types, no `any`. No setState inside rAF loops at scale. Clean up listeners/observers.
- Accessibility: WCAG 2.2 AA with the spec's pairs (gold never as text on cream; bronze for gold-family text on cream), visible
  focus, 44px targets, keyboard parity. Preserve CRLF line endings where the file has them.

### Verification (mandatory; report exact outputs)

1. `npm run typecheck` → pass. `npm test` → 21 pass.
2. Load `/`, `/services`, `/contact`, `/about` in headless Edge via a Playwright script (zero console/page errors; header renders in
   both tones — scroll past a dark band; mobile menu opens/closes at 390px with Escape focus return; nav CTA opens the modal, focus
   lands in the first field, Escape closes and returns focus, backdrop click closes, validation errors on empty submit, a valid quick
   enquiry in the unconfigured state downloads a .txt (intercept the download) and shows "Saved on your device"; axe
   (wcag2a wcag2aa wcag21aa wcag22aa) on the open modal and on header/footer → zero violations; no horizontal overflow at 320/390/1440).
3. Screenshots: header light + dark tone, footer, closing plate, modal desktop, modal mobile, modal saved state. Look at them and
   iterate until they match the direction's richness (hairlines, serif, spacing).
4. Legacy pages must still render (mixed look is expected).

Return: files created/modified/wrapped, the public API of every shared component, the token names, the per-route page-agent
checklist, exact verification outputs, screenshot paths, deviations from direction/judges with reasons.

---

## 3. Analysis already done and decisions taken (reuse; do not redo)

### 3.1 Legacy CSS inventory and effective cascade today

| File | Lines | Layered? | Imported from |
| --- | --- | --- | --- |
| `src/app/globals.css` | 693 | `@layer reset, base, components, responsive;` | layout.tsx |
| `src/app/studio.css` | 483 | `@layer studio { … }` | layout.tsx |
| `src/app/photography.css` | 71 | `@layer photography { … }` | layout.tsx |
| `src/app/header.css` | 99 | unlayered | layout.tsx |
| `src/app/refinement.css` | 228 | unlayered (`:root` tokens on line 2) | layout.tsx |
| `src/app/home.css` | 192 | unlayered | `src/app/page.tsx` (page agents own it) |
| `src/app/portfolio.css` | 103 | unlayered | `src/components/portfolio-gallery.tsx` (page agents own it) |

Effective order today: `reset < base < components < responsive < studio < photography < unlayered(header.css, refinement.css,
then home.css / portfolio.css by import order)`. Unlayered CSS beats every layer, so wrapping is mandatory.

**Wrapping recipe** (preserves the old relative order inside `legacy`):
- globals.css line 1 → `@layer reset, legacy, tokens, atelier, pages, motion;` followed by
  `@layer legacy { @layer base, components, responsive, studio, photography, header, refinement; }`; keep `@layer reset {…}` as is;
  wrap the `base`, `components`, `responsive` blocks in one `@layer legacy { … }` (nested layers become `legacy.base` etc.).
- studio.css → `@layer legacy { @layer studio { … } }`; photography.css → `@layer legacy { @layer photography { … } }`.
- header.css → `@layer legacy { @layer header { … } }`; refinement.css → `@layer legacy { @layer refinement { … } }`.
- home.css and portfolio.css stay unlayered until the page agents rewrite them **inside `@layer pages`** (until then those two files
  still beat `atelier`; e.g. `.studio-home .contact-banner { margin-block:55px }` and the `.studio-home h1/h2/h3 { font-family: var(--font-studio) }`
  rules will override the shell on home — expected in the mixed state).
- `!important` in legacy (important declarations in EARLIER layers win): the reduced-motion kill-switches in globals.css:691,
  studio.css:482, refinement.css:228, home.css:192 (`animation:none!important; transition:none!important`) and `.menu-note { font-size:7px!important }`.
  They are compatible with the new motion kill-switch; `::view-transition-*` pseudo-elements are not matched by `*`, so add
  `animation-duration: 0s !important` for them under reduced motion in motion.css.

### 3.2 Legacy declarations the atelier layer must explicitly neutralise on shell selectors

Because a later layer only wins for properties it sets, re-declare these (set them to the new values or `0`/`none`):
- `.site-header`: globals `position: relative; z-index: 30`; studio `position: sticky; top: 0; background:#faf9f5f5; border-bottom; backdrop-filter: blur(16px)`;
  refinement `background:#f8faf5fa; border-top:3px solid #214d3b; border-bottom:1px solid var(--line)`.
- `.header-inner`: globals `display:flex; align-items:center; justify-content:space-between; min-height:100px; gap:28px; border-bottom:1px solid rgba(23,43,42,.09)`;
  header.css `.site-header .header-inner { position:relative; min-height:106px; width:calc(100% - 2*clamp(16px,2vw,40px)) }` (+ `position:static` ≤900px).
- `.main-nav` (desktop): globals `display:flex; gap:37px; font-size:14px; font-weight:500`, `> a:not(.button) { padding-block:12px; border-bottom:1px solid transparent }`,
  `> a[aria-current="page"], > a:not(.button):hover { color: var(--green); border-color: var(--green) }`; studio `.main-nav > .button[aria-current] { background: var(--green) … }`.
- `.main-nav` (≤900px): globals/studio/header/refinement all set `display:none; position:absolute; top:…; left/right; background; padding; border; border-radius; box-shadow; max-height; overflow-y`,
  `.main-nav.is-open { display:flex; flex-direction:column; gap:0/6px }`, `.main-nav > a:not(.button) { padding-block:15px; border-bottom:1px solid var(--line); font-size:16px }`, `.nav-cta { margin-top:16px }`.
- `.menu-toggle`: `display:none` desktop; mobile `display:grid; width/height:44px; border:1px solid var(--line); border-radius:6px|50%; background:transparent`.
- `.services-trigger > a { padding-block:15px; border-bottom:1px solid transparent }` + `.is-current > a, > a:hover { border-bottom-color: var(--green) }`;
  `.services-toggle` (30px wide, 44 tall; hover/expanded `background: var(--olive)`).
- `.services-dropdown` (header.css): `position:absolute; top:calc(100% - 1px); right:0; width:min(930px,100%); padding:29px 28px 0; background:var(--page);
  border:1px solid var(--line); border-radius:0 0 18px 18px; box-shadow; max-height:calc(100svh - 107px); overflow-y:auto`; `[hidden] { display:none }`;
  grid `1.12fr .88fr 1.12fr`; group `h2` 15px/650 with a 33px olive circle icon span; `li a` 13px muted, hover `color:var(--ink); background:var(--olive)`;
  mobile: `position:static; padding:19px 18px 0; margin-block:6px 12px; border-radius:10px; background:#f0f2ec`.
- `.brand-lockup` (header.css gap 11px, refinement gap 9px, `.brand-symbol` 40px, `.brand-wordmark` 30px/630 letter-spacing -1.5px, `.brand-period { color: var(--green) }`).
- `.button` (globals: flex, gap 24px, min-height 54, padding 14px 23px, border 1px var(--green), radius 7px, background var(--green), white text, 14px/550, transition;
  studio: `border-radius:999px; background:var(--ink)`; refinement: radius 7px, min-height 52, padding 15px 23px, 600, gap 20px, background var(--green-dark)),
  `.button-small`, `.button-secondary` (border #75827c / #9fac98), `.button:disabled`, `.text-link` (gap 13px, min-height 44, 14px/550-600, hover underline offset 6px).
- `.section-label` (globals: flex, gap 9px, 13px/500, `> span { 6px circle border }`; studio/refinement: 11–13px uppercase tracked, `> span { display:none }`).
- `.faq-list` (`details` borders, `summary` 64–72px tall, `details[open] summary svg { rotate 45deg }`, `details > p` muted).
- `.process-section` (`border-top`, background `var(--olive)`/`#edf2e7`), `.process-grid` (4 cols), `.step-number` (flex row with bottom border, icon colour var(--green)).
- `.contact-banner` (globals: flex, padding 65px, `background:#184f43; color:#fff; border-radius:12px`; studio: `background:var(--ink); color:var(--page); margin-block:35px 70px`;
  refinement: `background:#e1ebd6; color:var(--ink); padding:45px 48px; margin-block:55px`), `.banner-copy`, `.banner-action`, `.contact-banner .button`, `.banner-art`.
- `.site-footer` (globals `padding-top:78px`; studio `padding:20px 0 0; border:0`; refinement `border-top:3px solid #b6cc91; padding-top:48px; background:#173c2d; color:#f7faef`),
  `.footer-grid` (columns `1.6fr .9fr 1.4fr 1.1fr` / `1.3fr .65fr 1fr .7fr`, gaps, padding-bottom), `.footer-intro > p`, `.location`, `.footer-grid h2`,
  `.footer-grid > div:not(.footer-intro) > a` (12–13px, min-height 33–40px), `.footer-small`, `.footer-bottom`, `.photo-credits`, `.site-footer .brand-*`, `.site-footer :focus-visible`.
- Forms: `.contact-form` (card), `.form-row`, `.form-field label/input/select/textarea` (min-height 47px, border #8c978c, radius 5–7px), `.field-help`, `.field-error`,
  `.form-error-summary`, `.form-success`, `.form-notice`, `.form-footer-copy`, `.form-action-row`, `.form-optional`, `.checkbox-label`, `.honeypot { display:none }`.
- Base: `html { scroll-padding-top: 30px | 108px | 110px }`, `body` font stacks, `::selection`, `:focus-visible { outline:3px solid var(--green); outline-offset:5px }`,
  `h1,h2,h3` (weights 500–650, `font-family: var(--font-studio)`), `.container` widths (`min(1200|1280|1320px, calc(100% - 96|112px))`), `.section` padding, `.skip-link`, `.sr-only`, `.page-intro`, `.simple-page`.

### 3.3 Header decisions

- Keep the header **in flow, sticky** (no overlap of the first band): dark tone uses a solid `--forest-950` background at rest, so the
  hero band must start with forest-950 at its top edge (page agents tune the hero gradient); scrolled state ≥760px adds
  `rgba(11,31,24,.86)` + `backdrop-filter: blur(14px)` + bottom hairline `--hairline-dark`; light tone `--cream` at rest,
  `rgba(246,242,232,.9)` + blur when scrolled + bottom line `--line`; below 760px the background stays solid (judge must-fix).
  Heights: `--header-h: 84px` desktop, 72px ≤760px. Tone colour transition 200ms.
- **Tone source, SSR-correct**: render `<header>` without `data-tone` on the server and resolve the initial tone in CSS with
  `.site-header:not([data-tone]):has(+ main > [data-tone="forest"]:first-child, + main > :first-child > [data-tone="forest"]:first-child)`
  (put the forest token set behind the selector list `[data-tone="forest"], .site-header:not([data-tone]):has(…)` in tokens.css). After hydration
  an IntersectionObserver over `main [data-tone="forest"]:not([data-tone-ignore])` with `rootMargin: "0px 0px -(innerHeight - headerHeight - 8)px 0px"`
  (rebuilt on resize and on `usePathname()` change, state reset to `null` on route change) sets `data-tone="forest"|"cream"`.
  Only bands/plates may carry `data-tone="forest"`; small badges must not. A 1px `.header-sentinel` (absolute, top of document, rendered
  in layout before the header) observed by IO toggles `.is-scrolled` — no scroll listeners.
- `<ViewTransition name="mc-header" default="none">` around `<Header>` (Header must return a single `<header>` root) so its
  aria-current/tone mutations never mark the root as affected; `<ViewTransition default="page-cross">` around `<main>`.
  Verified in `react-dom` 19.3: when only named boundaries change, React cancels `::view-transition-group(root)` and sets
  `view-transition-name: none` on the document element, so header/footer stay live while `main` crossfades.
- Mobile sheet ≤900px: `.main-nav.is-open { position:absolute; top:100%; left:0; right:0; height: calc(100svh - var(--header-h)); background: var(--forest-950) }`
  inside the sticky header (its containing block), nav links Instrument Serif 30px cream with hairline separators, services as the
  existing accordion (Geist 16px), CTA pinned with `margin-top:auto`; give the `<nav>` `data-tone={open ? "forest" : undefined}` and the
  dropdown `data-tone={open ? "forest" : "cream"}` so tokens follow; reset `open` when `(min-width: 901px)` becomes true. Body scroll lock
  with `@media (max-width: 900px) { html:has(.main-nav.is-open) { overflow: hidden } }` plus `html { scrollbar-gutter: stable }` (no layout shift).
- Dropdown animation with the `hidden` attribute: `.services-dropdown { transition: opacity 320ms, translate 320ms, display 320ms allow-discrete }`,
  `.services-dropdown[hidden] { display:none; opacity:0; translate:0 8px; transition-duration:200ms }`,
  `@starting-style { .services-dropdown:not([hidden]) { opacity:0; translate:0 8px } }`. Panel: `--paper`, 1px gold hairline top,
  radius 0 0 8px 8px, three columns, family titles Instrument Serif 22px, links Geist 14px min-height 44px hover `--cream-deep`.
- Nav links: Geist 13px 500 `letter-spacing:.02em`, min-height 44px, underline drawn by `::after` (`scaleX 0→1`, 240ms, origin left) at
  `bottom: calc(50% - .5em - 8px)`; active = `[aria-current="page"]`. CTA dark tone = 1px `rgba(246,242,232,.6)` border, cream text,
  fills cream/ink on hover; light tone = solid `--forest-800`; min-height 46px.

### 3.4 Tokens (names to use verbatim; values from the direction)

Palette: `--forest-950 #0B1F18`, `--forest-900 #11291F`, `--forest-800 #173D2E`, `--forest-600 #2F6749`, `--mist #B8C7B9`,
`--cream #F6F2E8`, `--paper #FDFBF6`, `--cream-deep #EFE9DC`, `--sage #DFE9DC` (band colour; verified: muted 4.73:1, bronze 4.82:1,
forest-600 5.32:1 on it), `--ink #193C30`, `--muted #58685C`, `--line #D9E2D5`, `--line-strong #75827C`, `--gold #D6B875`,
`--bronze #7A5F25`, `--brass-3d #C9A961`, `--glass-tint #DFE9DC`, `--error #B42318`, `--hairline-dark rgba(214,184,117,.32)`,
`--hairline-light #D6B875`. Legacy aliases kept for the mixed state: `--page: var(--cream)`, `--surface: var(--paper)`,
`--green: var(--forest-600)`, `--green-dark: var(--forest-800)`, `--olive: var(--cream-deep)`, `--ease-out: var(--ease-out-expo)`.

Semantic (swap per tone): `--bg`, `--bg-raised`, `--fg`, `--fg-muted`, `--fg-accent` (forest-600 on cream, gold on forest),
`--fg-numeral` (bronze on cream, gold on forest), `--hairline` (gold on cream, hairline-dark on forest), `--divider` (line on cream,
`rgba(246,242,232,.14)` on forest), `--focus` (forest-600 / gold), `--link`, `--link-underline`, `--btn-bg`, `--btn-fg`, `--btn-border`,
`--btn-hover-bg`, `--btn-secondary-border`, `--selection-bg`, `--selection-fg`, `--control-bg`, `--control-border`, `--header-bg`,
`--header-bg-scrolled`, `--header-line`. Tones: `[data-tone="cream"]` (default on body), `[data-tone="cream-deep"]`, `[data-tone="sage"]`, `[data-tone="forest"]`.

Type: `--font-text: var(--font-studio), "Segoe UI", system-ui, sans-serif`, `--font-serif: var(--font-display), "Times New Roman", serif`,
`--font-telugu: "Nirmala UI", "Noto Sans Telugu", "Telugu Sangam MN", sans-serif`; sizes `--text-display-1: clamp(46px, 7vw, 96px)`
(judge cap 88–96px, not 108px), `--text-display-2: clamp(42px, 5.6vw, 84px)`, `--text-h2: clamp(34px, 4.2vw, 60px)`,
`--text-h3: clamp(26px, 2.4vw, 34px)`, `--text-h3-utility: 19px`, `--text-numeral: clamp(40px, 5vw, 72px)`,
`--text-lead: clamp(17px, 1.3vw, 20px)`, `--text-body: 17px`, `--text-body-s: 16px`, `--text-small: 14px`, `--text-micro: 12px`,
`--text-eyebrow: 12px` (judge: 11px eyebrows raised to 12px), `--text-telugu: clamp(32px, 4vw, 56px)`; leading `--leading-display .95`,
`--leading-h2 1.04`, `--leading-h3 1.12`, `--leading-lead 1.65`, `--leading-body 1.7`; tracking `--tracking-display -.015em`,
`--tracking-h2 -.01em`, `--tracking-eyebrow .14em`. Utility classes planned: `.t-display-1 .t-display-2 .t-h2 .t-h3 .t-h3-utility
.t-numeral .t-lead .t-body .t-small .t-micro .t-eyebrow .t-telugu .t-italic .t-serif .period .measure`. Global rule: only `h1` becomes
serif site-wide (every h1 is ≥38px); `h2` stays class-driven because legacy h2s include 13–15px ones.

Spacing/layout: `--space-1 4px … --space-40 160px` (4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160), `--band-pad-dark: clamp(80px, 11vw, 160px)`,
`--band-pad-light: clamp(72px, 9vw, 128px)`, `--gutter: clamp(20px, 5vw, 72px)`, `--container-max: 1320px`, `--grid-gap: clamp(16px, 2vw, 32px)`,
`--header-h`. Radii `--radius-plate 3px`, `--radius-control 6px`, `--radius-panel 8px` (no pills). Shadows `--shadow-rest: 0 1px 0 var(--line)`,
`--shadow-plate: 0 24px 48px -24px rgba(11,31,24,.35)`, `--shadow-dropdown`, `--shadow-dialog`. Motion `--ease-out-expo: cubic-bezier(.16,1,.3,1)`,
`--ease-in-out-quart: cubic-bezier(.76,0,.24,1)`, `--ease-standard: cubic-bezier(.2,.7,.2,1)`, `--dur-xs 160ms`, `--dur-s 320ms`,
`--dur-m 600ms`, `--dur-l 900ms`, `--dur-xl 1400ms`. Z: `--z-header 30`, `--z-grain 40`, `--z-skip 100` (dialog uses the top layer).

### 3.5 Planned shared/motion component APIs

- `ButtonLink({ href = "/contact", children = "Discuss your project", secondary = false, className = "", modal?: boolean, icon?: string | null, service?: string })`
- `SectionLabel({ children, index?: string, className? })` → `<p class="section-label"><span class="section-label-index">01</span><span class="section-label-dash">—</span><span class="section-label-text">…</span></p>`
  (index rendered as a 20px serif italic numeral in `--fg-numeral`; eyebrow text Geist 12px uppercase `.14em`).
- `FAQ({ items, className? })` (native `<details>`, animated with `interpolate-size: allow-keywords` + `::details-content { height: 0 → auto }`),
  `Process()`, `ContactBanner()` (outer `.closing-band.band[data-tone="cream"]` → `.container` → `.contact-banner[data-tone="forest"]`
  forest-900 plate with gradient, grain ≥900px, gold hairline ring SVG, `ButtonLink modal` "Start your project"), `Footer()` (`.site-footer.band[data-tone="forest"]`,
  strapline serif italic 24px cream, headings Geist 12px uppercase gold, links cream 90% 14px min-height 40px, bottom row 12px mist, credits verbatim).
- `BrandSymbolBars({ className?, missing?: number, spread?: number })` → 8 `<g class="brand-bar" style="--i:i" transform="rotate(i*45 24 24)"><rect …/></g>`;
  CSS moves the rect radially with `translateY(calc(var(--spread,0) * -9px))`, `.is-missing` draws a dashed outline at 35%.
- `src/components/reveal.tsx` → `export { Reveal } from "./motion/reveal"` (home/page.tsx keeps importing it).
- `Reveal({ children, className?, delay = 0, y = 20, as = "div", id?, style? })` — arms `data-reveal="waiting"` only for elements
  off-screen at hydration (pre-check with `getBoundingClientRect`, so in-view content never flashes), `useInView(ref, { once: true, amount: .08 })`
  flips to `"shown"`, CSS transitions opacity/transform (`--reveal-delay`, `--reveal-y`); inert when `useReducedMotion()`.
- `RevealLines({ lines: (string | { text, italic?, lang?, className? })[], as = "h1", className?, id?, delay = 0, stagger = 90 })` — pure
  CSS keyframes, line 1 `.reveal-line-first` uses a transform-only "settle" (no clip, no opacity: LCP-safe), lines 2+ clip + rise + fade;
  clip wrappers need `padding: .06em .08em .16em; margin: -.06em -.08em -.16em` so italic serif descenders/overhangs are not cut.
- `TiltCard({ children, className?, as = "div", dark = false, maxTilt = 5, frame = true, …rest })` → `.tilt-card` (perspective 1200px,
  `--rx/--ry/--mx/--my`) › `.tilt-card-inner` (rotateX/rotateY, `::before` hairline frame at inset -8px `translateZ(20px)`, gloss `::after`
  for dark); listeners only when `(hover:hover) and (pointer:fine)` and not reduced motion; rAF writes CSS vars (no setState); `is-returning`
  class gives the 600ms return; `.tilt-card:has(:focus-visible) .tilt-card-inner { box-shadow: var(--shadow-plate) }`.
- `useQualityTier(override?)` and `computeQualityTier()`; SSR value "off"; re-evaluates on `(prefers-reduced-motion)`, `(max-width: 759px)`,
  `(pointer: coarse)` changes; duplicates the WebGL probe (do not import `scene-canvas.tsx` into page chunks).
- `SceneFrame({ poster, scene, tier?, className?, label? })` with `type SceneProps = { tier: "lite" | "full"; onReady: () => void }`;
  states `data-scene-state="poster|mounting|live|failed"`; mount after `requestIdleCallback` (timeout 1500ms, fallback 300ms);
  `.scene-frame-poster` stays in the DOM at opacity 0 after handoff (Playwright still counts it visible). Because `scene` is a component
  reference, `SceneFrame` must be rendered from a client wrapper (e.g. `HeroStage` "use client") that receives the server-rendered `poster`.
- `MotionProvider` = `MotionConfig reducedMotion="user"`. Enquiry: `EnquiryProvider({ canSend, children })` (context `{ open(service?, trigger?), close(), canSend, isOpen }`,
  closes on `usePathname()` change), `EnquiryLink({ href = "/contact", service?, …anchorProps })` (plain link without a provider or with
  modifier keys), `EnquiryModal` (ids `enquiry-name|phone|email|service|consent|honeypot`).

### 3.6 Enquiry/ButtonLink decisions that protect the e2e suite

- `tests/browser-checks.cjs` clicks `.service-hero` "Discuss your project" and waits for `/contact?service=slug`, and reads `#service` on
  /contact. Therefore: `ButtonLink` opens the modal by default only for the plain href `/contact` (no query/hash); hrefs with `?service=`
  keep navigating to the full brief form; `modal={true|false}` overrides either way. Header CTA and ContactBanner use the modal.
- The modal lives on every page, including /contact: its field ids must be prefixed (`enquiry-*`, never `#service`/`#name`), its labels must not
  contain "Your name", "Email address" or "Tell us what you have in mind" (Playwright `getByLabel` strict-mode collisions), it must not
  contain an `<h1>` (one-h1 assertion), must not use localStorage/sessionStorage, and its "Saved on your device. Nothing has been sent to
  ManaCircle yet." status must only render after a save (the contact test filters `role=status` by "Nothing has been sent").
- Consent checkbox only when `canSend` (same precedent as `ContactForm`; asking consent when nothing is sent is misleading) — if the
  spec says otherwise, follow the spec and note it.
- Scroll lock: `html:has(.enquiry-dialog[open]) { overflow: hidden }` + `scrollbar-gutter: stable`. Dialog entry/exit:
  `transition: opacity, translate, overlay allow-discrete, display allow-discrete` + `@starting-style`; mobile sheet `translate: 0 100% → 0`.
- Failure copy (ours, keyed off status): "We couldn’t confirm your request reached us. Your details are still here." with "Try again"
  (same idempotency key while data is unchanged), "Save my request", WhatsApp/email links if configured, and "Open the full project brief form" (/contact).

### 3.7 Grain, plates, bands

- One fixed `.grain` element in layout (`position: fixed; inset: 0; z-index: var(--z-grain); pointer-events: none; opacity: ~.06`),
  shown only `@media (min-width: 900px)`, hidden under `(prefers-reduced-data: reduce)`, pre-tinted warm noise SVG
  (`feTurbulence baseFrequency .85 numOctaves 2` + `feColorMatrix` mapping to cream RGB with alpha) at normal blend — invisible on cream,
  film grain on dark bands. The modal's brand panel gets its own `::before` grain.
- `.band { background: var(--bg); color: var(--fg) }`, `.band-pad` adds `--band-pad-dark|light` padding by tone; `.grid-12` 12 columns ≥1024px.

### 3.8 Page-agent checklist (after the foundation lands)

For every route: wrap the route stylesheet in `@layer pages { … }` (home.css, portfolio.css), put `data-tone="forest"` on dark bands
and `data-tone="cream"|"cream-deep"|"sage"` on light bands (the header follows them), retire the legacy classes listed in 3.2 as each
section is rebuilt, use `SectionLabel index="01"` … `"04"` on home, `RevealLines` only for the hero H1 (line 1 LCP-safe), `Reveal` for
below-the-fold blocks, `TiltCard` around every photo/screenshot plate (`dark` on forest plates), `SceneFrame` from a client wrapper with
the server-rendered poster carrying `.image-hero-photo` on home, `ButtonLink` plain `/contact` for quick-modal CTAs and `?service=` for
the full form, one canvas per route, and keep every hook in section G. Home must keep the hero gradient starting at forest-950 under
the dark header, ten `.home-service-links a`, the AI-illustration disclosure, `details name="project-process"` with the first open.
