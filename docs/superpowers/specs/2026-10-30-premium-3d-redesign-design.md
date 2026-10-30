# ManaCircle — Eightfold Atelier: final design specification

**Date:** 30 October 2026 · **Status:** implementation-ready (synthesis of three directions and three judge verdicts) · **Branch:** `design/clear-premium-studio` · **Runs at:** http://127.0.0.1:3000

**Base direction:** Direction 1 "Eightfold Atelier — cinematic editorial luxury" (ranked first by the owner, art-director and engineer judges).
**Grafted in:** the "eight people" assembly story, the Process Dial, the `data-tone` token system and the glazed SVG fallback from Direction 3 "Eightfold Kinetic"; the renderer discipline, matte ceramic tier, single-canvas slot manager, catalogue finishing cues and header view-transition from Direction 2 "Daylight Atelier".
**Scope:** presentation, structure, motion and 3D only. Every string in `src/lib/*.ts`, every route, every owner decision (no project previews on home, all ten services discoverable from home, no fabricated proof, AI illustrations labelled, photo credits in footer, Eightfold as the only logo) is unchanged.

---

## 0. Mouli kosam, short ga (Tinglish)

Final direction peru **Eightfold Atelier**. Site rendu surfaces tho untundi: **deep forest cinema bands** (hero, Telugu section, closing plate, footer) and **warm cream paper** (services, process, FAQ, anni reading pages). Headlines **Instrument Serif** (second line italic), text and buttons **Geist**. Gold ni **1px hairlines** ki matrame vadatham — loud ga kaadu.

Hero madhyalo mana **Eightfold mark**: page load ayina ventane eight bars oka row nunchi (eight people) mark ga assemble avutayi — idi SVG + CSS tho, so prathi device lo, JS lekapoyina kuda kanipistundi. Tarvata capable desktops lo **glass-and-brass 3D object** la product-shot lighting lo slow ga tirugutundi, mouse vaipu lean avutundi, scroll chesthe bars malli vidipotayi. Process section lo oka **CSS 3D dial** — prathi step ki rendu bars light avutayi (4 steps × 2 = 8 people). About page lo same mark 8 pieces ga vidipoyi scroll tho assemble avutundi ("Eight people. One creative team."). Voice Agent project ki brass waveform, 404 ki oka bar missing ayina mark.

Phones ki: glazed SVG + CSS assembly (WebGL ledu, kani story kanipistundi). Reduced motion lo anni static. Content, 10 services, process, FAQ, footer — anni same. Rendu phases: mundu homepage + services + contact + chrome; tarvata About/Voice Agent/404 scenes and shared-element transitions. Serif headlines and band-following dark header — idi 13 Oct decisions ni supersede chestundi, kani meeru "do it however you want" annaru kabatti builders wait cheyyakunda ee direction lo proceed avutaru (design lead's call). Phase 1 lo homepage + header ready ayyaka 1440 and 390 screenshots meeku share chestam — nachakapothe oka token switch tho Geist headings + light header ki revert cheyyachu (§17.5, §17.6). Builder ki ee doc lo prathi decision ready ga undi; owner answer kosam edi block avvadu.

---

## 1. Synthesis record

### 1.1 What came from where

| Element | Source | Why it won |
| --- | --- | --- |
| Two-surface system (forest cinema + cream paper), serif-speaks/sans-works typography, gold-as-hairline rule, bronze on cream, plates with hairline frames, Telugu band with the microphone photograph, 3D moments (hero, About assembly, Voice Agent waveform, 404 missing bar), legacy CSS layered rather than rewritten | Direction 1 | Highest total from all judges; best fit to "rich look, simple and classic finishing" |
| Universal entrance: eight bars in a row assemble into the mark (1100 ms, 55 ms stagger, no bounce); glazed inline SVG with per-bar `--i` hooks; CSS assembly without WebGL | Direction 3 | Tells "eight people, one team" in the first second on every device; removes the poster dependency; keeps LCP as text |
| Process Dial (CSS 3D, two bars lit per step, driven by native `toggle`) | Direction 3 | Second brand-true 3D moment on Home with no second canvas; keyboard-operable by construction |
| `data-tone` attribute swapping `--bg/--fg/--fg-muted/--hairline/--focus` | Direction 3 | Components written once; focus rings and gold-text rules enforced in CSS |
| Telugu script card overlapping the photograph | Direction 3 (owner judge graft) | Makes the Telugu line a physical object for Hyderabad/Vijayawada clients; CSS only |
| Renderer discipline: `powerPreference: "low-power"`, `transmissionResolutionScale = 0.5`, ACES tone mapping, Environment 64–128 rendered once, `AdaptiveDpr` + `PerformanceMonitor`, tab-visibility pause, error boundary + `webglcontextlost` restore | Direction 2 | Halves the cost of transmission; protects the owner's Intel UHD-class laptop and mid-range Android |
| Matte ceramic material family as the lite tier and for About/404 | Direction 2 | Fake frosted glass looks cheap; ceramic reads finished at a fraction of the cost |
| Single-canvas slot manager, camera-matched optional poster | Direction 2 | Guarantees one canvas per route even if a second stage is added later |
| Section index numerals in eyebrows, rules that draw left-to-right, shadows fall down-right to match the 3D key light | Direction 2 | Cheap classic cues that make DOM and WebGL feel lit by one lamp |
| `<ViewTransition name="mc-header">`, 180 ms out / 320 ms rise-in page transition | Direction 2 | Header no longer flashes between dark and light during navigation |

### 1.2 Judge must-fixes and how this spec resolves them

| Must-fix | Resolution (section) |
| --- | --- |
| Hero entrance fades the H1 and poster from opacity 0, delaying LCP | H1 line one, the Telugu line and every stage fallback never animate opacity; they are painted at full opacity from the first frame and move with transform only. Only eyebrow, lead, actions and note fade (§7.1, §10) |
| Transmission on a transparent canvas renders muddy glass | A procedural shader backdrop plane carrying the band gradient sits behind the mark in the glass tier so refraction bends the gradient. It is an **opaque** material (`transparent: false`, premultiplied alpha written by the shader) because three r186's transmission pass renders only the opaque list into the transmission buffer (§9.5) |
| Poster `eightfold-glass-poster.webp` does not exist | The glazed inline SVG is the final-quality fallback and ships first; the WebP poster is optional Phase 2 polish captured from an optional dev-only `/three-preview` route that does not exist yet and is created only if the poster is pursued (§9.9, §11) |
| Header tone from pathname alone is wrong | Tone follows the band under the header through an IntersectionObserver on full-bleed bands only (`main [data-tone="dark"][data-band="full"]`; inset plates carry no `data-band`); initial SSR tone from pathname (exact `/`, `/about`, `/work`, `/services`); colours transition 200 ms; header has its own view-transition name; the opening band is pulled under the sticky header with `.under-header` so the transparent header never sits on a cream strip (§6.1) |
| Dark tail: closing plate + footer become ~900 px of dark; microphone black never matches the band | Closing plate is an inset forest-900 plate on a cream section with margins; the photograph is framed honestly as a hairline plate (§7.6, §7.3) |
| Phones never see the mark in the first viewport | On ≤760 px the stage follows the H1 directly at 56 vw (max 280 px) (§7.1 mobile) |
| Too much scope for one session | Two phases with gates; Phase 2 starts only after typecheck, build and browser checks pass (§16) |
| Grain with `mix-blend-mode` and blur everywhere | Opacity-only pre-tinted noise, ≥900 px only, no blend mode; blur on the header only and only ≥760 px (§5.6, §6.1) |
| About `ContactShadows frames={Infinity}` | The About scene uses a DOM radial shadow; no ContactShadows at all (§9.6) |
| Service illustrations fight the forest/cream frames | Same 4:3 focal crop, light CSS harmonisation, AI label kept (§7.2) |
| Cascade: legacy files unlayered | Every stylesheet is inside a named layer; `atelier` and `motion` come after `responsive`; `tokens.css` is the only unlayered file and holds custom properties only. Step 0 wraps the still-legacy `home.css`, `header.css` and `portfolio.css` in `@layer refinement { … }` unchanged, so from Step 0 on no legacy rule can beat `atelier`; Phase 1 rewrites them into `@layer atelier` (§12, §16) |
| Serif scale and owner memory (13 Oct "oversized serif superseded") | Display capped at 88 px; serif only for headings, titles, straplines and pull lines ≥24 px and numerals ≥20 px; body, navigation, controls, forms, captions and chips are Geist. **No owner gate:** the owner's newest brief ("do it however you want") supersedes 13 Oct, builders proceed on this direction, and a non-blocking screenshot review follows Phase 1 tracks A + C; a one-token revert (`--font-heading`, `FORCE_LIGHT_HEADER`) exists if the owner rejects it (§4, §16, §17.5, §17.6) |
| Quality tiers too generous; reduced motion still downloads 3D | No WebGL under reduced motion, below 760 px, with save-data, `deviceMemory < 4` or without WebGL2; unknown `deviceMemory` (Safari, Firefox) starts ceramic unless the machine is clearly desktop-class, and a promotion to glass is applied only while the stage is out of view so no material swap is ever visible; `onDecline` demotes glass→ceramic and dpr (§9.2) |
| 11 px eyebrows and chips | 12 px minimum everywhere, including both photo credits (footer and Telugu figcaption) — zero exceptions (§4, §6.2, §7.5) |
| Telugu line at 320 px | `clamp(28px, 8.5vw, 40px)` on phones with the system Telugu stack plus `overflow-wrap: anywhere` as a guard; no Telugu face ships locally, so glyph widths on Linux/older Android fallbacks are a documented limitation (§4.1, §7.5) |
| Header blur on phones; dropdown animation with `hidden` | Solid background below 760 px; `@starting-style` + `transition-behavior: allow-discrete` for the dropdown (§6.1) |
| Build on the existing three scaffold | `scene-canvas.tsx`, `lazy.tsx`, `eightfold.tsx`, `studio-lights.tsx` are extended, not replaced (§9.1, §11) |
| Test hooks | Preserved list in §15 plus new assertions: `canvas` ≤ 1 per route, reduced-motion pass, no-JS pass, dial step |

---

## 2. Concept and rules

ManaCircle is an eight-person studio selling judgement: clarity, restraint, finish. The website behaves like a product photographed in a studio: a deep forest stage, one hero object lit like jewellery, then long calm cream pages where information is easy to read. Reference feel: Aesop (dark-room product shots, serif voice, hairline rules), Apple design pages (one object, weighty motion, negative space), Linear (discipline), never a cluttered agency template.

Four rules hold everything together:

1. **Two surfaces, one family.** Dark = forest-900/950 with cream text and gold hairlines. Light = cream/paper with ink text and forest-600 accents. Both are the existing forest-green + warm-cream brand, pushed to their cinematic ends. Cream is the majority by page height (about 60 %).
2. **One object.** The Eightfold mark is the only 3D protagonist: glass and brass on Home, exploded-and-assembled ceramic on About, missing a bar on 404. The brass family extends once, to the Voice Agent waveform. Everything else is CSS 3D (plates, dial, script card) or photography.
3. **Serif speaks, sans works.** Instrument Serif carries headings, titles, straplines and pull lines at ≥24 px and numerals at ≥20 px — including a card title that happens to wrap a link, because it is a heading first. Geist carries body, lead, navigation (desktop and the mobile sheet), controls, forms, captions, chips and eyebrows: everything you operate or read at length.
4. **One kinetic idea per section.** Motion is scroll-linked or pointer-linked, never a DOM loop (only the WebGL idle turns, and it pauses offscreen). No scroll hijacking, no custom cursor, no magnetic buttons, no carousels, no hidden-scrollbar rails, no autoplay audio.

Cliché guard: gold is a line, never a fill — 1 px hairlines, the 12 px eyebrows on dark, the H1 full stop on dark surfaces only. No gold glows, gold large text or gold buttons. Dark surfaces are forest-900 `#11291F` with a warm radial gradient; `#0B1F18` is reserved for the footer and the 404 page.

---

## 3. Tokens — `src/app/tokens.css` (unlayered, custom properties only)

### 3.1 Palette

Contrast ratios computed with WCAG 2.x relative luminance. AA needs 4.5:1 for text, 3:1 for large text (≥24 px or ≥19 px bold) and UI boundaries.

| Token | Hex | Use | Verified contrast pairs |
| --- | --- | --- | --- |
| `--forest-950` | `#0B1F18` | Footer, 404 page base | cream 15.4:1 · mist 9.7:1 · gold 9.0:1 |
| `--forest-900` | `#11291F` | Hero band, Telugu band, closing plate, Voice Agent cover, mobile menu sheet | cream 13.8:1 · mist 8.8:1 · gold 8.1:1 |
| `--forest-850` | `#16342A` | Radial-gradient highlight inside dark bands | cream 12.1:1 · mist 7.6:1 · gold 7.0:1 |
| `--forest-800` | `#173D2E` | Primary button on cream; raised surfaces on dark | cream text 10.8:1 |
| `--forest-600` | `#2F6749` | Eyebrows, links, focus ring, wordmark period on light | on cream 5.9:1 · on cream-deep 5.5:1 |
| `--mist` | `#B8C7B9` | Secondary text on dark | on forest-900 8.8:1 |
| `--cream` | `#F6F2E8` | Content background; text on dark | — |
| `--paper` | `#FDFBF6` | Plates, form card, dropdown panel | ink on paper 11.7:1 |
| `--cream-deep` | `#EFE9DC` | Alternate light band (FAQ, scope panels, pull blocks) | ink 10.0:1 · muted 4.9:1 · bronze 5.0:1 |
| `--ink` | `#193C30` | Headings and body on light | on cream 10.9:1 |
| `--muted` | `#58685C` | Secondary text on light | on cream 5.3:1 |
| `--line` | `#D9E2D5` | Structural dividers on light (decorative) | n/a |
| `--line-strong` | `#75827C` | Input borders, secondary button border | on paper 3.9:1 (UI boundary ≥3:1) |
| `--gold` | `#D6B875` | Hairlines on both surfaces; eyebrows, numerals, underlines, H1 period and focus ring on dark only | on forest-900 8.1:1 · **never text on cream (1.7:1)** |
| `--bronze` | `#7A5F25` | Gold voice on light: numerals, guide categories, chips | on cream 5.4:1 · on cream-deep 5.0:1 · on paper 5.8:1 |
| `--period-light` | `#2F6749` | Wordmark period on light surfaces (identity: green period) | decorative |
| `--period-dark` | `#C8DBA9` | Wordmark period on dark surfaces (current footer value) | decorative |
| `--error` | `#B42318` | Form errors | on paper 6.4:1 |
| `--glass-tint` | `#DFE9DC` | 3D glass colour (attenuation `#9FBFA6`) | n/a |
| `--brass-3d` | `#C9A961` | 3D brass material | n/a |
| `--ceramic-cream` / `--ceramic-sage` | `#EFE8DA` / `#D7DFD2` | 3D ceramic materials | n/a |

Legacy aliases (so untouched legacy selectors inherit the palette): `--page: var(--cream); --surface: var(--paper); --green: var(--forest-600); --green-dark: var(--forest-800); --olive: var(--cream-deep);` `--ink`, `--muted`, `--line`, `--gold`, `--error` keep their names with the new values.

### 3.2 Tone system

Sections, the header and the footer carry `data-tone="light" | "deep" | "dark"`. Tone blocks live in `tokens.css` and redefine the semantic variables every component uses:

```css
:root, [data-tone="light"] { --bg: var(--cream); --bg-raised: var(--paper); --fg: var(--ink); --fg-muted: var(--muted);
  --accent: var(--forest-600); --numeral: var(--bronze); --hairline: var(--gold); --divider: var(--line);
  --focus: var(--forest-600); --period: var(--period-light); --button-bg: var(--forest-800); --button-fg: var(--cream);
  --link-underline: var(--forest-600); color-scheme: light; }
[data-tone="deep"] { --bg: var(--cream-deep); --bg-raised: var(--paper); }
[data-tone="dark"] { --bg: var(--forest-900); --bg-raised: var(--forest-800); --fg: var(--cream); --fg-muted: var(--mist);
  --accent: var(--gold); --numeral: var(--gold); --hairline: rgba(214,184,117,.32); --divider: rgba(246,242,232,.14);
  --focus: var(--gold); --period: var(--period-dark); --button-bg: var(--cream); --button-fg: var(--ink);
  --link-underline: var(--gold); color-scheme: dark; }
```

Rule: components never reference palette tokens directly for text; they use `--fg`, `--fg-muted`, `--accent`, `--numeral`, `--hairline`, `--focus`. This is what makes "gold is text only on dark" and "bronze is the gold voice on cream" automatic.

### 3.3 Derived, spacing, radius, motion and layout tokens

| Token | Value | Use |
| --- | --- | --- |
| `--gradient-dark` | `radial-gradient(120% 90% at 68% 42%, var(--forest-850) 0%, var(--forest-900) 62%)` | Every dark band |
| `--grain` | `url("data:image/svg+xml,…")` 400-byte `feTurbulence baseFrequency=.9 numOctaves=2` + `feColorMatrix` to light speckles on transparent | Dark bands ≥900 px, opacity .05, normal blend |
| `--shadow-rest` | `0 1px 0 var(--divider)` | Plates at rest |
| `--shadow-plate` | `6px 24px 48px -24px rgba(11,31,24,.35)` | Lifted plates (falls down-right, matching the key light from top-left) |
| `--space-1 … --space-10` | 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px | Spacing scale |
| `--section-dark` | `clamp(80px, 11vw, 160px)` | Padding-block of dark bands |
| `--section-light` | `clamp(72px, 9vw, 128px)` | Padding-block of light sections |
| `--gutter` | `clamp(20px, 5vw, 72px)` | Container side gutter |
| `--container` | `min(1320px, 100% - 2 * var(--gutter))` | Container width (280 px of content at 320 px viewport) |
| `--grid-gap` | `clamp(16px, 2vw, 24px)` | 12-column gap |
| `--radius-plate` | `3px` | Images and plates |
| `--radius-control` | `6px` | Buttons, inputs, chips |
| `--radius-panel` | `8px` | Dropdown panel |
| `--header-h` | `84px` (72 px ≤760 px) | Header height, scroll padding, sentinel maths, `.under-header` pull (§6.1) |
| `--font-heading` | `var(--font-display)` | Family of every serif heading/title/strapline/numeral; the one-token revert to Geist headings is `--font-heading: var(--font-studio)` plus `.heading-revert` weights (§17.5) |
| `--ease-out-expo` | `cubic-bezier(.16, 1, .3, 1)` | Entrances, tilt return, assembly |
| `--ease-in-out-quart` | `cubic-bezier(.76, 0, .24, 1)` | Dial rotation, details height |
| `--ease-standard` | `cubic-bezier(.2, .7, .2, 1)` | UI state, page transitions |
| `--dur-xs` | `160ms` | Hover colour |
| `--dur-s` | `320ms` | UI state, details, dropdown |
| `--dur-m` | `600ms` | Section reveals, tilt return |
| `--dur-l` | `900ms` | Hero copy entrance, canvas crossfade |
| `--dur-xl` | `1400ms` | 3D settle |
| `--dur-assembly` | `1100ms` | Duration of one bar's SVG/CSS assembly keyframe and of the 3D assembly |
| `--stagger-assembly` | `55ms` | Per-bar delay step (`animation-delay: calc(var(--delay-assembly) + var(--i) * var(--stagger-assembly))`) |
| `--delay-assembly` | `150ms` | Start of the first bar after mount; total assembly = 150 + 7 × 55 + 1100 = 1635 ms, so the WebGL hand-off timer is 1750 ms (§7.3) |
| `--z-header` | `40` | Sticky header |

Selection: `::selection { background: rgba(214,184,117,.4); color: var(--ink) }`; inside `[data-tone="dark"]`: `background: rgba(246,242,232,.2); color: #fff`.

---

## 4. Typography

### 4.1 Fonts (local only)

`src/app/layout.tsx` already declares both faces through `next/font/local`; keep the variable names and add the metric-compatible fallback:

```ts
const studioFont  = localFont({ src: "../../public/fonts/geist-latin.woff2", variable: "--font-studio", display: "swap", weight: "100 900" });
const displayFont = localFont({ src: [
  { path: "../../public/fonts/InstrumentSerif-Regular.ttf", weight: "400", style: "normal" },
  { path: "../../public/fonts/InstrumentSerif-Italic.ttf",  weight: "400", style: "italic" }],
  variable: "--font-display", display: "swap", adjustFontFallback: "Times New Roman" });
```

Both TTFs (~70 KB each) ship as-is; convert to WOFF2 only if a local converter already exists. `font-synthesis: none` on every serif element (the face has no bold). Every serif rule reads `font-family: var(--font-heading)` (token in §3.3, default `var(--font-display)`), never `--font-display` directly, so the owner revert in §17.5 is one declaration. Telugu: `--font-telugu: "Nirmala UI", "Noto Sans Telugu", "Telugu Sangam MN", sans-serif`. **Known limitation:** no Telugu face ships locally ("local fonts only"), so the Telugu line renders in whatever the OS provides; on Linux or older Android fallbacks glyph widths differ, so the Telugu line and the script card carry `overflow-wrap: anywhere` as a guard against 320 px overflow, and the 320 px overflow check in §15 is the acceptance test.

### 4.2 Roles

- **Instrument Serif Regular:** first line of every H1/H2; family and card titles ≥26 px.
- **Instrument Serif Italic:** the second, emotional line of every two-line heading (`<span class="line-2">`), section numerals, pull-quote lines, the footer strapline, the FAQ/closing-plate second lines.
- **Geist 400–560:** body, lead, UI, forms, desktop nav, mobile-sheet links (24 px), dropdown family titles (15 px), eyebrows, captions, chips, h3-utility, buttons, body links, the Telugu line's Latin neighbours.
- Instrument Serif is never set below 24 px except numerals (≥20 px). The only 24 px uses are the footer strapline (§6.2) and the `.service-example` pull line (§8.2); everything else serif is ≥26 px. Serif appears on a link only when that link is a heading or title (portfolio card title 32 px, guide card title 28 px, §8.3/§8.7); navigation, buttons, inputs, chips and in-copy links are always Geist.

### 4.3 Scale (fluid)

| Role | Size | Line-height | Tracking | Face / weight |
| --- | --- | --- | --- | --- |
| display-1 (home H1) | `clamp(44px, 5.8vw, 88px)`; ≤760 px `clamp(40px, 11vw, 52px)` | 0.96 | −0.015em | Serif; line 2 italic |
| display-2 (page-intro H1, service title) | `clamp(40px, 5.2vw, 76px)`; ≤760 px `clamp(36px, 10vw, 48px)` | 1.0 | −0.012em | Serif; line 2 italic where two lines exist |
| h2 | `clamp(32px, 4vw, 56px)`; ≤760 px `clamp(30px, 8vw, 40px)` | 1.04 | −0.01em | Serif; line 2 italic |
| h3-editorial (family titles, card titles, values) | `clamp(26px, 2.2vw, 32px)` | 1.12 | −0.005em | Serif |
| h3-utility (process steps, form H2 in Geist, footer headings) | 19px | 1.35 | −0.02em | Geist 550 |
| numeral-xl (service rows, services index families) | `clamp(40px, 4.5vw, 64px)` | 1 | 0 | Serif italic, `--numeral` |
| numeral-m (process summaries, contact steps, deliverables) | 28px | 1 | 0 | Serif italic, `--numeral` |
| numeral-s (section index in eyebrows) | 12px | 1 | 0.02em | Geist 500 (same as eyebrow) |
| lead | `clamp(17px, 1.3vw, 20px)` | 1.65 | 0 | Geist 400, `--fg-muted` |
| body | 16px (17px ≥1100 px) | 1.7 | 0 | Geist 400 |
| small (list links, meta) | 14px | 1.6 | 0 | Geist 400–500 |
| caption | 12px | 1.5 | 0.01em | Geist 450, `--fg-muted` |
| eyebrow (`.section-label`) | 12px | 1 | 0.14em uppercase | Geist 500, `--accent` |
| nav | 13px | 1 | 0.02em | Geist 500 |
| button | 14px | 1 | 0.01em | Geist 550 |
| Telugu feature line (`lang="te"`) | `clamp(32px, 4vw, 52px)`; phones `clamp(28px, 8.5vw, 40px)` | 1.35 | 0 | `--font-telugu` |
| footer strapline | 24px | 1.3 | 0 | Serif italic (one of the two 24 px serif uses) |
| pull line (`.service-example`) | 24px | 1.3 | 0 | Serif italic (the other 24 px serif use) |
| mobile sheet link | 24px | 1 | −0.01em | Geist 500, 56 px rows |

Headings use `text-wrap: balance` except the home hero H1 (`text-wrap: wrap`, so the explicit `<br />` governs line one). The ≤760 px clamps in the table are the single source for mobile heading sizes: one `@media (max-width: 760px)` rule per role in `atelier.css`, so every page's two-line display-2 (About, Work, Services, Contact, Guides) shrinks with the home H1 and fits at 320 px. Paragraphs `text-wrap: pretty`; body measure 60–72 ch; lead `max-width: 34em`.

### 4.4 Two-line heading markup

Every two-line heading keeps its current copy and `<br />`; the second line is wrapped so it can be italic: `<h2>Find the right service<br /><span className="line-2">for your business.</span></h2>`. On the home hero and About hero (dark) the final full stop is wrapped `<span className="period">.</span>` and coloured `--accent` (gold on dark). The `.period` span renders only on dark surfaces.

---

## 5. Spacing, grid, surfaces

- **Container:** `.container { width: var(--container); margin-inline: auto }`. Full-bleed bands use `width: 100%` with an inner container — never negative margins — so `scrollWidth <= innerWidth` holds at 320/390/768/1024/1440.
- **Grid:** `.grid-12 { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); gap: var(--grid-gap) }` at ≥1024 px; children get `min-width: 0`. Editorial asymmetry is the default (copy 7/12 + stage 5/12; 4/12 summary + 4/12 plate + 4/12 links; 5/12 copy + 7/12 list). Below 760 px everything stacks in source order, with one declared exception: the home hero orders its stage between the H1 and the lead through `display: contents` on `.home-hero-copy` plus `order` values (§7.3); the DOM stays copy-then-stage.
- **Rhythm:** dark bands `padding-block: var(--section-dark)`; light sections `var(--section-light)`; never below 64 px on phones. Eyebrow → heading 16 px; heading → lead 24 px; lead → actions 36 px.
- **Radii:** plates and images 3 px, controls 6 px, dropdown 8 px, mobile sheet 0. No pills, no glass UI panels, no gradient cards.
- **Hairlines:** 1 px. `.hairline` is a `--hairline`-coloured rule that draws in on view (§10). `--divider` for structural separators inside lists. Plates carry a hairline frame 8 px outside their edge (`.plate::before { inset: -8px; border: 1px solid var(--hairline) }`).
- **Plates (`.plate`):** `background: var(--bg-raised); border-radius: var(--radius-plate); box-shadow: var(--shadow-rest)`; hover/focus-within lifts with `--shadow-plate`. Photos inside plates: `filter: saturate(.92)`; a cream vignette `::after { box-shadow: inset 0 0 0 1px rgba(246,242,232,.18), inset 0 0 48px rgba(246,242,232,.12) }` harmonises the three warm AI illustrations with the frames.
- **Grain (`.band-dark::before`):** absolute, `inset: 0`, `pointer-events: none`, `background-image: var(--grain); background-size: 180px; opacity: .05`; enabled only `@media (min-width: 900px)`; removed under `(prefers-reduced-data: reduce)` and `(forced-colors: active)`. No blend mode.
- **Shadows** always fall down-right (`6px 24px …`) to match the 3D key light from the top-left.

---

## 6. Header and footer

### 6.1 Header — `src/components/header.tsx` + `src/app/header.css`

Behaviour, structure, ids and accessible names stay exactly as implemented (Home, Services + dropdown trigger "Show services"/"Hide services", Our work, How it works, About us, CTA; `aria-label` "Open menu"/"Close menu"; Escape returns focus; closes on navigation and outside pointer). The additions are: presentation; `data-tone` and `data-scrolled` from the new hook; a new body-scroll-lock effect while the mobile sheet is open; the bar switching to the dark tone while that sheet is open; and, at layout level, the `<ViewTransition name="mc-header">` wrapper. Nothing else in the component changes.

- **Geometry:** `position: sticky; top: 0; z-index: var(--z-header)`; height `var(--header-h)` (84 px desktop, 72 px ≤760 px). Wordmark: `BrandIdentity` (the existing wrapper in `src/components/icon.tsx` around `BrandLockup`, kept as rendered), symbol 36 px, wordmark 28 px ("mana" 600, "circle" 400, period `--period`); 32/25 px on phones. Nav 13 px Geist 500, gap 28 px; every nav link is a flex item with `min-height: 44px` and `padding-block` filling it (target ≥44 × 44, the visible underline sits on the text box); the existing `.services-toggle` becomes 44 × 44 (`width: 44px; min-height: 44px`, same chevron); active link 1 px underline in `--link-underline` offset 8 px; hover underline grows from the left over 240 ms.
- **Tone:** the header reads `data-tone`. New hook `src/components/use-band-tone.ts`: initial SSR tone is `dark` when `path === "/" || path === "/about" || path === "/work" || path === "/services"` (routes that open with a dark band), else `light`. After mount it observes every `main [data-tone="dark"][data-band="full"]` element — full-bleed bands only: hero, Telugu band, the dark page intros, the 404 page — with `rootMargin: "0px 0px -${innerHeight - headerHeight}px 0px"` (the root becomes the header strip); tone is `dark` while any such band intersects. Inset dark plates (closing plate §7.8, `.service-fit` §8.2, the Voice Agent cover §8.3, concept `.project-stage` §8.4) carry `data-tone="dark"` for their tokens but **no `data-band`**, so the header stays in the page's tone while they pass beneath it and the cream edges beside them never fight a dark bar. Observer is re-created on resize (debounced 150 ms) and on pathname change. Colours (`background`, `color`, `border-color`) transition `--dur-xs`×1.25 = 200 ms.
- **Scrolled state:** a 1 px `<div data-header-sentinel aria-hidden="true" />` placed in `layout.tsx` immediately before `<main>`; observed with `rootMargin: "-${headerHeight}px 0px 0px 0px"`; not intersecting → `data-scrolled="true"`. Dark tone scrolled: `background: rgba(17,41,31,.88)`, bottom hairline `--hairline`; light tone scrolled: `rgba(246,242,232,.92)`, bottom `--line`. `backdrop-filter: blur(14px)` only `@media (min-width: 760px)`; phones get the solid colours. Unscrolled: transparent over the band.
- **Under-header mechanism (so "transparent over the band" is true):** the header stays `position: sticky` in normal flow (84/72 px), and the opening full-bleed band of a dark route carries the class `under-header`: `.under-header { margin-top: calc(-1 * var(--header-h)); padding-top: calc(var(--header-h) + var(--band-pad-top)) }` where `--band-pad-top` is that band's own top padding (hero 64 px, intros `clamp(72px, 9vw, 128px)`, 404 `var(--section-dark)`). The negative margin collapses through `.page` and the route wrapper (neither may set `overflow` other than `visible`), so the band starts at the viewport top and the cream header strip never exists; light routes keep the header in flow over cream. Re-checked maths: the sticky header still covers the top 84 px when scrolled, so `html { scroll-padding-top: var(--header-h) }`, the 112 px (`84 + 28`) `scroll-margin-top` on anchors and the band-tone `rootMargin` are unchanged; the scrolled sentinel sits in flow at y = header height and still flips after 1 px of scroll; the hero `min-height` becomes `min(86svh, 800px)` (§7.3) because the band now includes the 84 px under the header; the 404 page's `min-height` becomes `100svh` (§8.8).
- **CTA "Start your project":** dark = 1 px `rgba(246,242,232,.6)` border, cream text, fills cream/ink on hover (160 ms); light = solid forest-800, cream text. `min-height: 46px`, radius 6 px. `:focus-visible` = 2 px `--focus` outline offset 3 px.
- **Dropdown (`.services-dropdown`):** paper panel, 1 px gold hairline across the top, radius 0 0 8px 8px, shadow `--shadow-plate`; three columns, family titles Geist 15 px 550 with the existing 19 px icon (a UI panel, so sans — no serif below 24 px), links Geist 14 px `min-height: 44px` with `--cream-deep` hover; bottom row keeps "One team. From first idea to launch." + "View all services". Open/close animation works with the `hidden` attribute: `transition: opacity var(--dur-s) var(--ease-standard), translate var(--dur-s) var(--ease-standard), display var(--dur-s) allow-discrete; [hidden] { opacity: 0; translate: 0 -8px }` and `@starting-style { .services-dropdown:not([hidden]) { opacity: 0; translate: 0 -8px } }`.
- **Mobile sheet (≤900 px, existing breakpoint):** `.main-nav.is-open` becomes a forest-900 sheet under the header (`data-tone="dark"` on the nav): links Geist 24 px 500 cream with `--divider` separators, 56 px rows (navigation is sans by rule 3); services as the existing accordion in Geist 16 px; CTA pinned at the bottom as a cream button; `overscroll-behavior: contain`. **Scroll lock:** header.tsx gains one new `useEffect` keyed on `[open]`: when `open` it stores `document.documentElement.style.overflow`, sets it to `hidden`, and the cleanup restores the stored value (so Escape, navigation, outside pointer and unmount all release it). **Bar tone while open:** the `<header>` renders `data-tone="dark"` whenever `open` is true, overriding the band tone, so the bar and the sheet read as one forest-900 surface on light pages; on close the band tone returns (200 ms transition).
- **View transition:** `layout.tsx` wraps `<Header …/>` in `<ViewTransition name="mc-header">` so it persists across page fades.

### 6.2 Footer — `Footer` in `src/components/shared.tsx`

Structure, links, all ten services and photo credits unchanged. `<footer class="site-footer" data-tone="dark">` on forest-950 with a 1 px `--hairline` top rule and grain. Four columns `1.4fr .8fr 1.2fr 1fr` (two columns ≤760 px, intro full width). Strapline "A clearer brand. A useful website. Content that connects." in Instrument Serif italic 24 px cream. Column headings Geist 12 px uppercase tracked `--accent` (gold). Links cream at 90 % opacity, 14 px, `min-height: 44px` (brief constraint; rows are `display: flex; align-items: center`), hover underline gold. Location line with globe icon in mist. Footer bottom 12 px mist. Photo credits 12 px mist with underlines — kept as content, lifted from 11 px so the 12 px minimum has no exception; credit links inherit `min-height: 44px` through padding. No oversized wordmark (standing owner decision).

---

## 7. Homepage — `src/app/page.tsx` + `src/app/home.css`

Section order: Hero (dark, with family nav as its last row) → Services (light) → Telugu (dark) → Process (light) → FAQ (deep) → Closing plate (light section, dark inset plate) → Footer (dark). Eyebrow indices: "01 — What we do", "02 — Telugu comes naturally", "03 — How it works", "04 — Before you begin" — the index and the dash are rendered by `SectionLabel index="01"` as `<span class="section-index" aria-hidden="true">01 —</span>` before the existing label text, so the accessible string of every eyebrow is unchanged (§17.16).

### 7.1 Desktop sketch (1440 × 900, container 1320)

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ ✳ manacircle.            Home  Services ▾  Our work  How it works  About us  [Start ▸]│ 84px, dark tone, transparent
├──────────────────────────────────────────────────────────────────────────────────────┤
│ FOREST-900 BAND + radial glow + grain                                                 │
│  CREATIVE & DIGITAL STUDIO · WORKING WORLDWIDE          (gold eyebrow 12px)           │
│                                                                                      │
│  Branding & websites.           (serif 84px cream)       ┌────────────────────────┐  │
│  Made to connect.               (serif italic, gold .)   │   glazed SVG / WebGL   │  │
│                                                          │  ✳ Eightfold assembles │  │  stage 520×520, cols 8–12
│  We build brands, websites and digital                   │   from a row of eight  │  │
│  experiences, with Telugu-first marketing…  (mist 19px)  │   bars into the mark   │  │
│                                                          │        ▁▂▃ contact shadow│  │
│  [ Explore our services → ]   Start your project ↗       └────────────────────────┘  │
│                                                            Eightfold — the ManaCircle │
│  ✳ Eight people. Design, development and content…         mark.            (12px)    │
│ ─────────────────────────── gold hairline (draws in) ──────────────────────────────── │
│   WEBSITES & APPS      ✳      BRAND & CONTENT      ✳      MARKETING & ADS   (48px)   │  nav.home-service-strip
├──────────────────────────────────────────────────────────────────────────────────────┤
│ CREAM                                                                                 │
│  01 — WHAT WE DO                                   Start with one service or bring   │
│  Find the right service                            a few together. Each page explains│
│  for your business.  (serif, line 2 italic)        the scope…  (lead, cols 9–12)     │
│ ── gold hairline ─────────────────────────────────────────────────────────────────── │
│  01 (serif italic   ┌──────────────────┐   Website design & development          ↗   │
│   bronze 56px)      │  plate 4:3 tilt  │   Website improvement                   ↗   │
│  Websites & apps    │  AI-generated ·  │   Android app development               ↗   │
│  (serif 32px)       │  illustrative    │   QR menus for restaurants & cafés      ↗   │
│  description…       └──────────────────┘   (48px rows, --divider)                    │
│ ── gold hairline ─────────────────────────────────────────────────────────────────── │
│  ┌──────────────────┐  02  Brand & content          Logo & brand identity        ↗   │  plate side alternates
│  │  plate (Terra)   │      description…             Instagram posts & reels      ↗   │
│  └──────────────────┘                               Video scripts & content      ↗   │
│                                                     Telugu content & voiceovers  ↗   │
│ ── gold hairline ─────────────────────────────────────────────────────────────────── │
│  03  Marketing & ads   ┌──────────────┐             Digital marketing            ↗   │
│      description…      │ plate        │             Meta Ads                     ↗   │
│                        └──────────────┘                                              │
│  Service illustrations are AI-generated.                      Compare all services → │
├──────────────────────────────────────────────────────────────────────────────────────┤
│ FOREST-900 BAND                                                                       │
│  ┌─────────────────────┐        02 — TELUGU COMES NATURALLY  (gold)                   │
│  │ microphone photo    │        Your audience.                                       │
│  │ 4:5, hairline plate │        Their language.        (serif, italic line 2, cream) │
│  │                     │        మీ కథ. మన భాష.          (52px cream, lang="te")        │
│  │ Editorial photo ·   │╲ paper  Scripts, voiceovers, reels and campaigns…  (mist)    │
│  │ Hrayr Movsisyan     │ ╲card   Explore Telugu content ↗                             │
│  └─────────────────────┘  (−4°)                                                      │
├──────────────────────────────────────────────────────────────────────────────────────┤
│ CREAM                                                                                 │
│  03 — HOW IT WORKS                    01  Share your brief                       ×   │
│  A small team.                            Tell us what your business does…           │
│  A clear process.  (serif)            ── gold hairline ──                            │
│  We're an independent team of eight…  02  Agree the scope                        +   │
│  Meet ManaCircle ↗                    ── gold hairline ──                            │
│                                       03  Review the work                        +   │
│     ╭ Process Dial ╮                  ── gold hairline ──                            │
│     │ 8 bars, 2 lit│ 220px CSS 3D     04  Launch & handover                      +   │
│     ╰──────────────╯                                                                 │
├──────────────────────────────────────────────────────────────────────────────────────┤
│ CREAM-DEEP                                                                            │
│  04 — BEFORE YOU BEGIN                What does ManaCircle do?                    +  │
│  A few useful                         Can we work together from another country?  +  │
│  answers.  (serif italic line 2)      Do you prioritise Telugu audiences…?         +  │
│  Scope, pricing, languages…           How much will my project cost?               +  │
│  Read our project guides ↗            Do you shoot videos or edit the footage…?    +  │
│                                       What should we prepare before getting started?+│
├──────────────────────────────────────────────────────────────────────────────────────┤
│ CREAM section, inset FOREST-900 plate with hairline frame                             │
│  ┌──────────────────────────────────────────────────────────────────────────────┐   │
│  │ A brand, a website or your next campaign.                [ Start your project ↗ ]│   │
│  │ Let's plan your project. (serif italic cream 56px)   ◯    Clear scope. Custom quotation.│
│  └──────────────────────────────────────────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────────────────────────────────┤
│ FOOTER forest-950 — lockup, strapline (serif italic), Explore / What we do (10) /     │
│ Let's connect, bottom row, photo credits                                              │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

### 7.2 Mobile sketch (390 px)

```
┌──────────────────────────────┐
│ ✳ manacircle.            ☰  │ 72px, solid tone colour
├──────────────────────────────┤
│ FOREST-900                   │
│ CREATIVE & DIGITAL STUDIO ·  │
│ WORKING WORLDWIDE            │
│ Branding &                   │ serif clamp(40px,11vw,52px)
│ websites.                    │
│ Made to connect.  (italic)   │
│      ┌──────────────┐        │
│      │ glazed SVG   │ 56vw   │ stage directly after H1
│      │ assembles    │ ≤280px │ (CSS assembly, no WebGL)
│      └──────────────┘        │
│ We build brands, websites…   │ 17px mist
│ [ Explore our services  → ]  │ full width
│ Start your project ↗         │
│ ✳ Eight people. Design…      │
│ ───────── hairline ───────── │
│ WEBSITES & APPS              │ 44px rows, dividers
│ BRAND & CONTENT              │
│ MARKETING & ADS              │
├──────────────────────────────┤
│ CREAM                        │
│ 01 — WHAT WE DO              │
│ Find the right service       │
│ for your business.           │
│ Start with one service…      │
│ ── hairline ──               │
│ 01  Websites & apps          │ numeral 40px
│ description…                 │
│ ┌──────────────────────────┐ │ plate 3:2 full width
│ │ illustration · AI label  │ │
│ └──────────────────────────┘ │
│ Website design & development↗│ 48px rows
│ Website improvement        ↗ │
│ Android app development    ↗ │
│ QR menus for restaurants…  ↗ │
│ ── hairline ── (rows 02, 03) │
│ Service illustrations are    │
│ AI-generated.                │
│ Compare all services →       │
├──────────────────────────────┤
│ FOREST-900                   │
│ ┌──────────────────────────┐ │ photo 4:3 first
│ │ microphone  ╲ paper card │ │ card 160px
│ └──────────────────────────┘ │
│ 02 — TELUGU COMES NATURALLY  │
│ Your audience.               │
│ Their language.              │
│ మీ కథ. మన భాష.  (≤40px)      │
│ Scripts, voiceovers…         │
│ Explore Telugu content ↗     │
├──────────────────────────────┤
│ CREAM  03 — HOW IT WORKS     │
│ A small team. A clear process│
│ paragraph · Meet ManaCircle ↗│
│     ╭ dial 160px ╮           │ static above list
│ 01 Share your brief       ×  │
│ 02 Agree the scope        +  │
│ 03 Review the work        +  │
│ 04 Launch & handover      +  │
├──────────────────────────────┤
│ CREAM-DEEP 04 — BEFORE YOU…  │
│ A few useful answers.        │
│ Read our project guides ↗    │
│ FAQ (6 details, 64px rows)   │
├──────────────────────────────┤
│ CREAM  ┌──────────────────┐  │
│        │ Let's plan your  │  │ inset dark plate
│        │ project.         │  │
│        │ [Start your pr.] │  │
│        └──────────────────┘  │
├──────────────────────────────┤
│ FOOTER (2 columns)           │
└──────────────────────────────┘
```

### 7.3 Hero — `<section class="home-hero band-dark under-header" data-tone="dark" data-band="full" data-scene-anchor aria-labelledby="home-heading">`

- Background `var(--gradient-dark)` + grain. The band is pulled under the sticky header by `.under-header` (§6.1): `margin-top: calc(-1 * var(--header-h)); padding-top: calc(var(--header-h) + 64px); padding-bottom: 0; min-height: min(86svh, 800px)` (774 px at 1440 × 900, i.e. the same visual band end as the old 78svh below an in-flow header). The last row inside the section is the family nav, so services are within reach of the first screen at 1440 × 900. `overflow: hidden` stays on the section only; `.page` and `.home-page` never clip.
- Grid `.home-hero-grid.grid-12`: copy columns 1–7 (`.home-hero-copy`), stage columns 8–12 (`<HeroStage />`), `align-items: center`.
- Copy, top to bottom: `SectionLabel` "Creative & digital studio · Working worldwide" (gold); `h1#home-heading` "Branding & websites.<br /><span class="line-2">Made to connect<span class="period">.</span></span>" at display-1, no `max-width` (the 7/12 column bounds it; line one "Branding & websites." is 20 characters ≈ 49 vw at 5.8 vw type, inside the ≈52 vw column at every width ≥1024 px, so the `<br />` is the only break), `text-wrap: wrap`; lead (existing copy) mist, `max-width: 34em`, `margin-top: 28px`; actions (`.home-hero-actions`): `.button` "Explore our services →" (`#services`, cream bg, ink text, 54 px) and `.text-link` "Start your project ↗" (`/contact`, cream, 1 px gold underline offset 8 px), gap 28 px, `margin-top: 36px`; note (`.home-hero-note`): `BrandSymbol` 28 px gold + "Eight people. Design, development and content in one team." 13 px mist, `margin-top: 40px`.
- **Stage** — `src/components/hero-stage.tsx` (server):

  ```tsx
  <figure className="hero-stage">
    <Stage scene="hero" label="hero" className="hero-stage-inner" couple="scroll">
      <EightfoldArt variant="assembly" className="hero-fallback" />   {/* server HTML, final quality */}
    </Stage>
    <figcaption>Eightfold — the ManaCircle mark.</figcaption>
  </figure>
  ```

  `hero-stage.tsx` imports `Stage` from `@/components/three/stage` (never from the `@/components/three` barrel, §9.1) and `EightfoldArt` from `@/components/brand`. `.hero-stage-inner { aspect-ratio: 1; max-width: 520px; width: 100%; position: relative }`. A CSS contact shadow (`::after`, radial ellipse `rgba(6,22,17,.55)` → transparent, 70 % × 14 %, bottom −6 %) sits under the fallback so the SVG also reads as an object; it belongs to the fallback, so it fades with it: `.scene-stage[data-ready="true"]::after { opacity: 0; transition: opacity var(--dur-l) }` — after hand-off only the baked `SoftFloorShadow` in the canvas remains (no double shadow). The caption is 12 px mist.
- **Entrance choreography (all tiers):** eyebrow, lead, actions and note rise 24 px + fade, 900 ms `--ease-out-expo`, 90 ms stagger, `animation-fill-mode: both`. H1 lines rise 24 px with **transform only** (opacity 1 from first paint). The fallback SVG plays the assembly (§9.8) from t = `--delay-assembly` (150 ms): eight bars in a row become the mark, each over `--dur-assembly` (1100 ms) with a `--stagger-assembly` (55 ms) step, so the last bar settles at 1635 ms. No element that can be the LCP candidate ever has opacity < 1.
- **WebGL hand-off:** when the lazy scene has rendered its first frame *and* the SVG assembly has finished (`animationend` on the bar with `--i: 7`, or the fallback timer `ASSEMBLY_TOTAL_MS = 1750` after mount — 150 + 7 × 55 + 1100 = 1635 ms plus ~100 ms slack, a constant in `stage.tsx` mirroring the §3.3 tokens, with a comment naming them), the stage sets `data-ready`; CSS fades the SVG to opacity 0 over `--dur-l` while the canvas fades in. The SVG stays in the DOM (visible to Playwright, hidden to the eye) so the hook `.hero-fallback` stays valid. The 3D mark starts in the assembled pose and begins its idle turn.
- **Family nav:** `<nav class="home-service-strip" aria-label="Service categories">` as the hero's last row: 1 px `--hairline` on top, three anchors `#build`, `#create`, `#grow` in Geist 13 px uppercase cream, 48 px tall, 14 px gold `BrandSymbol` separators; ≤480 px it becomes a 3-row list with `--divider` separators and 44 px rows.
- **Mobile (≤760 px):** single column in this visual order: eyebrow, H1 (`clamp(40px, 11vw, 52px)`), stage (`width: 56vw; max-width: 280px; margin: 24px auto 28px`), lead 17 px, actions stacked (full-width button, then text link, gap 16 px), note, family nav. **Mechanism (decided):** the DOM stays `.home-hero-copy` (eyebrow, H1, lead, actions, note) followed by the sibling `<HeroStage />`; at ≤760 px `.home-hero-grid { display: flex; flex-direction: column }`, `.home-hero-copy { display: contents }` and `order` values eyebrow 1, H1 2, `.hero-stage` 3, lead 4, actions 5, note 6. `[data-scene-anchor]` is on the section, so the §9.1 anchor lookup is unaffected, and reading order for assistive tech stays the logical source order. `min-height: auto; padding-top: calc(var(--header-h) + 40px)`. The stage never mounts WebGL below 760 px; the CSS assembly still plays.

### 7.4 Services — `<section class="home-services container" id="services" data-tone="light" aria-labelledby="services-heading">`

- Heading row (`.home-section-heading`, grid 8/4): `SectionLabel index="01"` "What we do" and `h2#services-heading` "Find the right service<br /><span class="line-2">for your business.</span>" in columns 1–8; intro paragraph (existing copy) in columns 9–12 at lead size, bottom-aligned.
- `.home-service-list`: three `article.home-service-row` (ids `build`, `create`, `grow`, `scroll-margin-top: 112px`), each wrapped in `<Reveal>`, separated by `.hairline` rules that draw in on view.
  - Row grid at ≥1024 px: summary columns 1–4 (`.home-service-summary`: numeral-xl "01" in serif italic bronze on a short gold hairline, title in serif h3-editorial, description body muted), plate columns 5–8 (`<TiltCard className="plate home-service-image">` with the existing `<Image>`, `aspect-ratio: 4/3`, `object-position` tuned per image: `65% center`, `center`, `center 40%`), links columns 9–12 (`.home-service-links a`, Geist 15 px rows, `min-height: 48px`, `--divider` separators, diagonal icon slides 2 px up-right on hover). Row 2 swaps plate and summary (plate 1–4, summary 5–8). Row 3 returns to the first arrangement.
  - Each plate shows a **12 px** caption chip in muted on a cream chip, bottom-left inside the frame (owner disclosure stays visible). Its text is the existing string **"Illustrative service scene · AI-generated"**, exported once from `src/lib/service-images.ts` as `AI_SCENE_CAPTION` and used by the home chips and the service pages alike — no new disclosure wording (§17.16).
  - Exactly ten `.home-service-links a` across the three rows (4 + 4 + 2) — the test counts them.
- Foot (`.home-services-foot`): "Service illustrations are AI-generated." 12 px muted left; "Compare all services →" `.text-link` right.
- Mobile: numeral 40 px, summary, plate (full width, 3:2), links; the row hairline remains.

### 7.5 Telugu — `<section class="home-telugu band-dark" data-tone="dark" data-band="full" aria-labelledby="telugu-heading">`

- Forest-900 + gradient + grain, `padding-block: var(--section-dark)`. Grid 5/7.
- `figure.home-telugu-photo` (columns 1–5): `.plate` on dark (hairline frame 8 px outside, radius 3 px), `aspect-ratio: 4/5`, `max-height: 560px`, the existing `recording-microphone.webp` with `object-fit: cover; object-position: 30% center`. The figure is framed honestly; no attempt to bleed black into the band. The credit `figcaption` "Editorial photo · Hrayr Movsisyan / Unsplash" stays bottom-left, 12 px cream on `rgba(11,31,24,.7)` (12 px minimum, no exceptions).
- **Script card** (`.home-telugu-card`, `aria-hidden="true"`): a 220 px paper card (`--paper`, 1 px `--line`, radius 3 px, `--shadow-plate`), rotated −4°, overlapping the plate's bottom-right by 32 px; it prints only the existing Telugu line in `--font-telugu` 22 px ink above a 24 px gold hairline and a 16 px `BrandSymbol` in forest-600 — no new copy. It rises 16 px over a `view()` timeline (§10). 160 px on phones.
- Copy (columns 7–12, `<Reveal className="home-telugu-copy">`): `SectionLabel index="02"` "Telugu comes naturally" (gold); `h2#telugu-heading` "Your audience.<br /><span class="line-2">Their language.</span>" cream; `<p class="home-telugu-native" lang="te">మీ కథ. మన భాష.</p>` at the Telugu feature size, cream, opacity 1 always; body (existing copy) mist, `max-width: 52ch`; `.text-link` "Explore Telugu content ↗" cream with gold underline.
- Mobile: photo first (4:3), card 160 px; copy second; the Telugu line at `clamp(28px, 8.5vw, 40px)` keeps "మీ కథ. మన భాష." on one line at 320 px with Nirmala UI / Noto Sans Telugu / Telugu Sangam MN (28 px × ~9.5 em-units ≈ 266 px inside the 280 px content width). Because no Telugu face ships locally, wider OS fallbacks may wrap the line at the space between the two sentences — acceptable — and `overflow-wrap: anywhere` on `.home-telugu-native` and `.home-telugu-card` guarantees no horizontal overflow (§4.1 limitation).

### 7.6 Process — `<section class="home-process container grid-12" id="how-it-works" data-tone="light" aria-labelledby="process-heading">`

- Left columns 1–5: `SectionLabel index="03"` "How it works"; `h2#process-heading` "A small team.<br /><span class="line-2">A clear process.</span>"; paragraph (existing); `.text-link` "Meet ManaCircle ↗"; then `<ProcessDial />` (§9.7) with `margin-top: 40px`, 220 px, left-aligned.
- Right columns 6–12 `.home-process-list`: the four native `<details name="project-process">` exactly as today (first `open`; markup untouched). Summary 76 px: numeral-m "01" serif italic bronze (`width: 48px`), title Geist 19 px 550, plus icon (rotates 45° when open, 220 ms). Items separated by `.hairline` rules. `::details-content { transition: height var(--dur-s) var(--ease-in-out-quart), content-visibility var(--dur-s) allow-discrete; height: 0; overflow: clip } details[open]::details-content { height: auto }` with `interpolate-size: allow-keywords` on the list (progressive enhancement). Open answer body muted, 48 px left inset.
- Mobile: dial 160 px centred between the copy and the list, not sticky; summaries 72 px.

### 7.7 FAQ — `<section class="home-questions" data-tone="deep">`

Cream-deep band, `padding-block: var(--section-light)`. Grid 5/7. Left: `SectionLabel index="04"` "Before you begin"; `h2` "A few useful<br /><span class="line-2">answers.</span>"; paragraph; `.text-link` with the exact text **"Read our project guides"** (`/guides`). Right: the existing `FAQ` component: summaries Geist 16 px 500, 64 px, `--divider` separators, answers 15 px muted.

### 7.8 Closing plate — `ContactBanner` in `shared.tsx`

`<section class="contact-banner-section" data-tone="light"><div class="container"><div class="contact-banner plate band-dark" data-tone="dark">…</div></div></section>`. The plate has **no `data-band`** (it is inset), so the header tone ignores it (§6.1). The light section has `padding-block: clamp(64px, 8vw, 112px)` so cream separates the plate from the footer. The plate: forest-900 + gradient + grain, radius 3 px, hairline frame 8 px outside, `padding: clamp(40px, 5vw, 72px)`, two columns. Left: "A brand, a website or your next campaign." mist 14 px; `h2` "Let's plan your project." serif italic cream at h2 size. Right: cream primary button "Start your project ↗" and "Clear scope. Custom quotation." mist 12 px. Behind the text a static 720 px SVG circle, 1 px gold at 20 % opacity, offset right (no WebGL). Same component on every route that has it today. Mobile: stacked, padding 32 px.

### 7.9 Homepage behaviours preserved

Ten `.home-service-links a`; zero `main a[href^="/work/"]`; one `.home-process-list details[open]` at load and after clicking "Agree the scope"; link "Read our project guides"; `.hero-fallback` visible; `[data-stage="hero"]` present with `data-tier`; `#services`, `#how-it-works`, `#build/#create/#grow` anchors (scroll-margin-top 112 px); "Start your project" CTA to `/contact`; "Service illustrations are AI-generated." visible.

---

## 8. Other routes

Shared page scaffold: `section.page-intro` (and `.split-intro`) gets `data-tone`, a `SectionLabel`, a display-2 H1 with the second line italic, and the lead right-aligned at the bottom of the grid in `.split-intro`. Routes that open dark (`/about`, `/work`, `/services`) use a `.band-dark` intro with `padding-block: clamp(72px, 9vw, 128px) clamp(56px, 7vw, 96px)`.

### 8.1 `/services` — `src/app/services/page.tsx` + new `src/app/services.css`

- Dark intro band: eyebrow "Our services"; H1 "Design. Development.<br /><span class="line-2">Content & marketing.</span>"; lead right-aligned.
- `nav.service-category-nav` renders inside the band's last row as a gold-hairline tab row: three anchors (`#build`, `#grow`, `#create` in the existing `serviceFamilies` order), cream 13 px uppercase, 48 px tall, arrow icons; sticky below the header (`top: var(--header-h)`) with the dark scrolled background; an IntersectionObserver scroll-spy adds `aria-current="true"` to the family in view (client component `src/components/category-spy.tsx`, decorative, ≤40 lines).
- Cream catalogue (`.service-catalogue`): each `section.catalogue-family` opens with a `.hairline`, numeral-xl "01/02/03" bronze, family title (`.catalogue-family-intro > p`) serif h3-editorial 32 px, description muted. Each service `article` is a `.plate`-free 12-column row with `--divider` separators: illustration columns 1–3 in `<TiltCard className="plate catalogue-service-photo">` (4:3, 250 px wide, hairline frame; `<ViewTransition name={`service-art-${slug}`}>` in Phase 2), title serif 28 px + description body + "Explore this service ↗" columns 4–8, three deliverables with gold check icons Geist 14 px columns 9–12. Mobile: plate full width 3:2, then text, then deliverables.
- `.engagement` as a cream-deep two-column band with the `ButtonLink`; `Process` (shared) restyled as four columns with serif numerals on gold hairlines in a cream-deep band; `ContactBanner`.
- No WebGL on this route. 3D presence comes from tilt plates and, in Phase 2, shared-element morphs into the detail pages.

### 8.2 `/services/[slug]` — `src/app/services/[slug]/page.tsx` + `services.css`

- Cream throughout. `.service-hero` grid 6/6: breadcrumb 12 px muted; eyebrow; H1 = service title at display-2 serif; intro lead; `ButtonLink` "Discuss your project" (text and `href="/contact?service=slug"` preserved — the test clicks it inside `.service-hero`); `.service-factline` 12 px muted. Right: `figure.service-visual` → `<TiltCard className="plate">` → `.service-real-image` (`aspect-ratio: 4/5` desktop, 4:3 mobile, `preload`), `figcaption.service-image-caption` "Illustrative service scene · AI-generated" kept as a 12 px chip.
- `dl.service-at-a-glance`: three columns separated by gold hairlines, `dt` Geist 12 px uppercase forest-600, `dd` 15 px.
- `.service-fit`: forest-900 inset plate (like the closing plate) with H2 "Is this the right<br /><span class="line-2">fit for your business?</span>" serif cream and the paragraph in mist.
- `.deliverables`: 5/7 grid; `.deliverable-list li` 56 px rows with numeral-m serif italic bronze instead of check icons, `--divider` separators.
- `.scope-panel`: cream-deep two columns, H2 serif 28 px. `.service-applications`: `.service-example` as a serif italic 24 px pull line on a gold hairline; `.application-grid` three rows with diagonal icons. FAQ (shared). `.service-reading` as a paper plate. `.related-services` as hairline-framed links (6 px radius, 48 px). `ContactBanner`.

### 8.3 `/work` — `src/app/work/page.tsx` + `src/app/portfolio.css` (rewritten, selectors kept)

- Dark intro band: H1 "Explore the work.<br /><span class="line-2">Try the experience.</span>" + lead.
- Cream `.portfolio-section` keeps `id="projects"`, `tabIndex={-1}`, `.portfolio-browse-bar` and both `PortfolioPagination` navs untouched (aria-labels "Project pages, top/bottom"; link names "Next page, page 2", "Previous page, page 1"); pagination links are 44 px hairline-bordered squares with 6 px radius.
- `.portfolio-grid` two columns ≥760 px. Each `.portfolio-card`: `.portfolio-visual-link` → `<TiltCard className="plate">` → the existing `.portfolio-window` (cream bar, 1 px `--line`, 4:3) wrapped in `<ViewTransition name={`work-figure-${slug}`}>` (Phase 2); `.portfolio-card-meta` Geist 12 px (category muted, "Live website"/"Project overview" forest-600); title serif 32 px; summary muted; links row with 44 px targets. The Voice Agent cover keeps its SVG wave and `role="img"` label, recoloured gold on forest-900.

### 8.4 `/work/[slug]`

- Team projects (`PortfolioDetail`): cream; `.portfolio-detail-heading` with serif display-2 H1 and lead; `.portfolio-detail-toolbar` unchanged (tags as hairline chips 6 px, "Visit website" button when `liveUrl`); `.portfolio-detail-figure` framed as a plate, the `<ViewTransition>` partner in Phase 2. For `voice-agent` the figure hosts `<Stage scene="waveform">` with the existing `PortfolioVisual` SVG cover as its server-rendered fallback (Phase 2). `.portfolio-detail-body` two columns, features as numbered hairline rows, "Discuss a similar project" secondary button.
- Concept projects: `.project-stage` becomes a forest-900 plate with a hairline frame around the existing concept art (`NilaWindow`, `SocialPoster`, `FormArt`, `ScriptArt` untouched); `BeforeAfter` buttons and `.before-art`, `ScriptReader` with `.script-beat p[lang="te"]`, and the captioned `<video controls>` all stay; `.concept-disclosure` visible in muted 14 px. Concept-art typography switches `Georgia` to `var(--font-display), Georgia, serif` via overrides in `atelier.css`.

### 8.5 `/about` — `src/app/about/page.tsx` + `src/app/pages.css`

- Dark intro band with the assembly stage (§9.6) in columns 8–12: eyebrow "About ManaCircle"; H1 "Eight people.<br /><span class="line-2">One creative team<span class="period">.</span></span>"; lead. Phase 1 ships the band with `EightfoldArt variant="exploded"` (CSS assembles on view); Phase 2 adds WebGL.
- Cream `.about-lead` grid 6/6: `.about-story` with serif H2 and body; `StudioPhoto` (credit kept) inside `<TiltCard className="plate">`.
- `.values-grid`: three paper plates with gold hairline tops, serif 28 px titles, body 15 px; icons stay at 24 px in forest-600.
- `.about-scope`: cream-deep band, two columns, secondary button "Explore our work". `ContactBanner`.

### 8.6 `/contact` — `src/app/contact/page.tsx` + `pages.css`

- Cream throughout. `.split-intro` with H1 "Tell us what<br /><span class="line-2">you're building.</span>".
- `.contact-grid` `.78fr 1.22fr`: `aside.contact-aside` on cream-deep (radius 3 px, padding 40 px): H2 serif 28 px; `.contact-steps` with numeral-m serif italic bronze + Geist 15 px; a static 96 px line-art Eightfold (`EightfoldArt variant="mark"` outlined, gold 60 %) above the steps; `.direct-contact` links when configured; `.contact-location`.
- `ContactForm` keeps every id, label, button text ("Download project brief"), notice, `.form-error-summary` focus behaviour, `.form-optional`, `#website-error` and the status text — styled only: paper card, 1 px `--line`, radius 3 px, gold hairline under the H2 (Geist 24 px 550 here, because it is a form heading), inputs 52 px, radius 6 px, `--line-strong` borders, focus ring 2 px forest-600 offset 2 px, `[aria-invalid="true"]` border `--error`, error summary with 2 px `--error` left rule, success block cream-deep.

### 8.7 `/guides` and `/guides/[slug]`

- Index: cream `.page-intro` with H1 "Plan your website,<br /><span class="line-2">content or campaign.</span>". `.guide-grid` 3 + 2: five `.guide-card` (class and count preserved) as `<TiltCard className="plate guide-card">`: category eyebrow bronze 12 px, title serif 28 px, description muted 15 px, "Read the guide ↗"; gold hairline top.
- Detail: `.page-intro` with breadcrumb, category eyebrow, serif H1, `.guide-meta`; `.guide-layout` 240 px sticky `.guide-toc` (`top: calc(var(--header-h) + 24px)`, Geist 13 px, hairline separators) + `.guide-body` 72 ch; `.guide-answer` as a cream-deep pull block in Geist 20 px/1.6; section H2 serif 32 px; `.guide-example` with a 2 px forest-600 left rule on cream-deep; closing `ButtonLink` "Prepare your project brief".

### 8.8 `/privacy`, `/thank-you`, 404, error

- `/privacy`: `.privacy-content` on cream, serif H1 and H2, body 17 px/1.75, `max-width: 70ch`.
- `/thank-you`: `.simple-page` on cream: serif H1, body 18 px, button.
- `not-found.tsx`: full dark page (`data-tone="dark"`, forest-950 base + gradient + grain, `min-height: calc(100svh - var(--header-h))`), the missing-bar stage centred (§9.6, Phase 2; Phase 1 ships `EightfoldArt variant="missing"`), eyebrow "404 · A small detour" gold, H1 "Let's get you<br /><span class="line-2">back in the circle.</span>" (contains "circle"), paragraph mist, cream primary + outlined secondary buttons. `not-found` cannot export `viewport`; the header tone is `dark` through the band observer.
- `error.tsx`: cream `.simple-page`, serif H1 "A small interruption.", "Try again" button; no 3D, no new imports.

---

## 9. 3D system

### 9.1 Architecture (built on the existing scaffold)

Existing files are extended, never duplicated: `src/components/three/scene-canvas.tsx`, `lazy.tsx`, `eightfold.tsx`, `studio-lights.tsx`, `index.ts`.

```
hero-stage.tsx (server)  ──►  Stage (client, SSR-safe shell)  ──►  lazyScene(() => import("./scenes/hero-scene"))
  └ EightfoldArt (SVG, server HTML)      ├ useSceneQuality()  → "off" | "ceramic" | "glass"
                                          ├ useCanvasSlot()    → owns the single canvas on this route
                                          ├ idle scheduling    → requestIdleCallback (1200 ms timeout) after hydration
                                          ├ entrance gate      → waits for the SVG assembly to finish
                                          └ StageErrorBoundary + webglcontextlost → fallback stays, data-lost="true"
```

- **`src/components/three/stage.tsx`** ("use client"). Props: `scene: "hero" | "assembly" | "waveform" | "missing-bar"`, `children` (the server-rendered fallback), `className`, `label`, `couple?: "scroll" | "view"`, `priority?: number`. Renders `<div class="scene-stage" data-scene={label} data-tier data-ready data-lost>` → `{children}` + `<div class="scene-slot" aria-hidden="true">` (absolute, `inset: 0`, `pointer-events: none`). The slot mounts the lazy scene only when `tier !== "off" && ownsSlot && idleReached && entranceDone`. It passes `anchor` (the nearest `[data-scene-anchor]` ancestor) and `tier` to the scene. First rendered frame (`onReady` from `EightfoldMark`/scene) → `data-ready="true"`; CSS crossfades (`.scene-stage[data-ready="true"] > :not(.scene-slot) { opacity: 0; transition: opacity var(--dur-l) }`, `.scene-slot { opacity: 0 } [data-ready="true"] .scene-slot { opacity: 1; transition: opacity var(--dur-l) }`). The fallback stays in the DOM.
- **`scene-canvas.tsx` changes:** `gl: { antialias: true, alpha: true, powerPreference: "low-power" }`; `onCreated`: `gl.transmissionResolutionScale = 0.5; gl.toneMapping = ACESFilmicToneMapping; gl.toneMappingExposure = 1.05`; new `eventSource?: RefObject<HTMLElement>` prop — pointer is tracked from that element (the hero section) with a native `pointermove` listener instead of the canvas container, so copy and buttons stay directly clickable; `frameloop` becomes `"never"` when not in view or tab hidden (was `"demand"`), `"demand"` only under reduced motion (which this spec never mounts); `webglcontextlost` on the canvas → `setLost(true)` unmounts the Canvas and sets `data-lost` on the stage; `dpr` stays `[1, 1.5]`; `<AdaptiveDpr pixelated={false} />` and `<PerformanceMonitor onDecline onIncline />` are added inside the Canvas by each scene.
- **`stage-error-boundary.tsx`** (class component): catches render errors inside the slot, renders nothing (fallback remains), reports to `console.warn` once. Required because the e2e suite asserts zero `pageerror`.
- **`use-scene-quality.ts`** → `"off" | "ceramic" | "glass"` (§9.2). **`use-single-canvas.ts`**: module store; each stage registers `{ id, element, priority }` and an IntersectionObserver (`rootMargin: "25% 0px"`); the intersecting stage nearest the viewport centre (ties → higher `priority`) owns the slot; losers unmount their canvas and show the fallback. Routes in this spec mount at most one stage, so this is insurance for the future, not a per-scroll context churn.
- **Scenes** (`src/components/three/scenes/*.tsx`, each a default export wrapped by `lazyScene` inside `stage.tsx` with a static import specifier per scene): `hero-scene.tsx`, `assembly-scene.tsx`, `waveform-scene.tsx`, `missing-bar-scene.tsx`. They import from the barrel `@/components/three`. Three, R3F and drei therefore live only in the lazy chunks; `motion/react` is imported only inside scenes and client wrappers, never in `layout.tsx`.
- **Geometry** is built in code only: `RoundedBox`, `CapsuleGeometry`, `CylinderGeometry`, `TorusGeometry`, `BoxGeometry`, `PlaneGeometry`. No models, no textures, no HDRIs, no post-processing package. drei imports by name (`Environment, Lightformer, ContactShadows, Float, PerformanceMonitor, AdaptiveDpr, RoundedBox`; `sideEffects: false` confirmed, so they tree-shake).

### 9.2 Quality tiers — `use-scene-quality.ts`

| Tier | Conditions | What renders |
| --- | --- | --- |
| `off` | `prefers-reduced-motion: reduce`, `forced-colors: active`, `navigator.connection?.saveData`, `navigator.deviceMemory < 4`, no WebGL2, viewport `< 760px`, or `data-lost` | Fallback only; the 3D chunk is never requested |
| `ceramic` | pointer `coarse`; viewport 760–1023 px; `hardwareConcurrency < 6`; `deviceMemory` undefined (unknown) | Matte ceramic materials, Environment 64, no transmission, no backdrop, contact shadow 256 baked once, dpr `[1, 1.25]` |
| `glass` | otherwise (≥1024 px, fine pointer, memory ≥4) | Glass + brass, Environment 128, backdrop plane, contact shadow 512 baked once, dpr `[1, 1.5]` |

`PerformanceMonitor onDecline` (sustained drops) demotes `glass → ceramic` and dpr to 1; `onIncline` after ≥2 s of steady frames promotes an *unknown-memory* `ceramic` start to `glass` once. A demotion is never reversed. The tier is exposed as `data-tier` for tests.

### 9.3 Lighting — `studio-lights.tsx` (extended)

`StudioLights` keeps its `preset` prop and gains `tier`. Forest preset, final values:

- `<Environment resolution={tier === "glass" ? 128 : 64} frames={1} environmentIntensity={1.15}>` with `<color attach="background" args={["#6a736c"]} />` and Lightformers: warm key rect `#FFF1D6` intensity 3 at `[-3, 4, 3]` scale `[5, 2.5, 1]` (top-left, so DOM shadows fall down-right); sage fill rect `#D7E6D4` 1.2 at `[4, 1, -2]` scale `[3, 6, 1]`; gold ring `#D6B875` 0.9 at `[0, -3, 2]` scale 4; top strip white 1.6 at `[0, 6, -2]` scale `[8, 1.5, 1]`; dark floor card `#2e2a26` at `[0, -6, 0]`.
- `<spotLight position={[3, 5, 4]} angle={0.45} penumbra={0.7} intensity={2} color="#FFF0D2" />`, `<pointLight position={[-4, -1, 2]} intensity={0.6} color="#B9D1BC" />`, `<ambientLight intensity={0.3} color="#9fbf9a" />`. No shadow maps anywhere.
- `SoftFloorShadow` defaults change to `frames={1}` and `resolution={tier === "glass" ? 512 : 256}`.

### 9.4 Materials — `src/components/three/materials.ts`

The `presets` map moves out of `eightfold.tsx` into this file and is extended:

```ts
export const materials = {
  glass:         { color: "#DFE9DC", transmission: 0.95, roughness: 0.06, thickness: 1.4, ior: 1.46, attenuationColor: "#9FBFA6", attenuationDistance: 2.2, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.2, specularIntensity: 1 },
  brass:         { color: "#C9A961", metalness: 1, roughness: 0.28, envMapIntensity: 1.4 },
  ceramicCream:  { color: "#EFE8DA", roughness: 0.62, clearcoat: 0.35, clearcoatRoughness: 0.55, sheen: 0.3, sheenColor: "#FFF6E6" },
  ceramicSage:   { color: "#D7DFD2", roughness: 0.62, clearcoat: 0.35, clearcoatRoughness: 0.55, sheen: 0.3, sheenColor: "#FFF6E6" },
  ceramicForest: { color: "#173D2E", roughness: 0.3, clearcoat: 0.8, clearcoatRoughness: 0.15 },
  plinth:        { color: "#0F2A20", roughness: 0.5 },
} satisfies Record<string, THREE.MeshPhysicalMaterialParameters>;
```

Bars get two brass collars each (`TorusGeometry(width * 0.56, width * 0.07, 8, 24)` at ±(length/2 − width × 0.7) along the bar axis) in every tier. Triangle budget: hero ≤ 20 k, About ≤ 20 k, waveform ≤ 6 k, 404 ≤ 16 k (RoundedBox `smoothness` 6 in glass, 4 in ceramic).

### 9.5 Home hero — glass-and-brass Eightfold (`scenes/hero-scene.tsx`)

- Canvas camera `{ position: [0, 0.4, 7], fov: 32 }`, `eventSource` = the hero section (`anchor`). `<StudioLights preset="forest" tier />`. In the glass tier a **backdrop plane** (`src/components/three/backdrop.tsx`): `PlaneGeometry(12, 12)` at `z = -6`, `ShaderMaterial` (`transparent`, `depthWrite: false`, `toneMapped: false`) painting the band's radial pool — `inner #1A3B2E → outer #11291F` over `smoothstep(.05, .62, d)` from uv `(.58, .56)`, alpha `1 − smoothstep(.45, .75, d)` — so transmission refracts the gradient and the canvas edges stay transparent. Not mounted in the ceramic tier.
- `<EightfoldMark size={3} variant={tier === "glass" ? "glass" : "ceramicSage"} spin={2π / 48} spinAxis="z" float parallax={0.4} spread={spread} onReady />` plus `<SoftFloorShadow y={-1.9} opacity={0.4} blur={2.6} scale={8} far={3} color="#061611" frames={1} />` (baked product-shot shadow).
- Entrance (after the SVG assembly has finished and the canvas crossfades in): scale 0.96 → 1 and `rotation.y −0.2 → 0` over `--dur-xl` expo. Idle: `rotation.z += delta × 2π/48`; `Float speed={1} rotationIntensity={0.15} floatIntensity={0.3}` (existing `float` path). Pointer (fine pointers only): the existing damp toward `pointer × PARALLAX_TILT`.
- Scroll (`couple="scroll"`): `useScroll({ target: anchor, offset: ["start start", "end start"] })` from `motion/react` → in `useFrame`: `spread = progress × 0.6` (bars unfold outward, telling the story backwards as the hero leaves), `rotation.z += progress × 0.35`, `position.y += progress × 0.6`. The slot's opacity 1 → 0 over progress 0.7 → 1 is CSS (`animation-timeline: view()` on `.home-hero .scene-slot`, range `exit 0% exit 100%`). `frameloop` is `"never"` once the stage leaves the viewport (existing `inView` logic).
- Mobile: never mounts (tier `off` below 760 px). Tablets/coarse pointers: ceramic sage, no pointer parallax, idle turn + scroll unfold.
- Fallback: `EightfoldArt variant="assembly"` (§9.8) under the canvas, permanently in the DOM.

### 9.6 About assembly, Voice Agent waveform, 404 missing bar (Phase 2)

- **About (`scenes/assembly-scene.tsx`, ceramic cream + brass collars in every tier):** `EightfoldMark size={3.2} variant="ceramicCream" spread={spread} spin={2π/60}`; camera `[0, 1.2, 7.5]`. The existing `spread` prop (0 = mark, 1 = +40 % radius) is extended to `spreadTravel` 1.6 and per-bar rotation jitter `spread × ±0.35 rad` (seeded by index). `spread` 1 → 0 is scroll-linked through `useScroll({ target: anchor, offset: ["start start", "end start"] })` with easeOutExpo, finishing at 60 % of the band's exit; on coarse pointers, keyboard-only sessions (no `pointermove` within 2 s of mount) and tablets it auto-assembles over 1600 ms when in view and then holds. Shadow is a DOM radial ellipse under the stage (no `ContactShadows`), so nothing re-renders per frame except the bars. Fallback: `EightfoldArt variant="exploded"` that assembles with CSS on view (Reveal adds `.is-in`); static mark under reduced motion.
- **Voice Agent (`scenes/waveform-scene.tsx`, mounted only on `/work/voice-agent` inside `.portfolio-detail-figure`):** 24 `CylinderGeometry(0.09, 0.09, h, 6)` rods in brass, heights = the existing wave array `/ 60`, 0.3 units apart on a `BoxGeometry(8, 0.15, 1.4)` plinth (`materials.plinth`); camera `[0, 1.6, 6]` fov 30; `StudioLights preset="forest"` without a contact shadow; key light x lerps ±1.5 toward the pointer. Rise on view: `scale.y 0 → 1`, 40 ms stagger, 900 ms expo. Glass tier idle: `h × (1 + 0.06 × sin(t·π + i × 0.4))`; ceramic tier: rise, then hold. Fallback: the existing `PortfolioVisual` SVG wave with its `role="img"` label, recoloured gold on forest-900.
- **404 (`scenes/missing-bar-scene.tsx`):** `EightfoldMark missing={5} variant="ceramicCream"`; the absent bar renders as `ceramicCream` with `transparent: true, opacity: 0.18`; idle 1 turn / 60 s; entrance fade 900 ms; no pointer or scroll coupling; always the ceramic tier (never transmission); no shadow. Fallback: `EightfoldArt variant="missing"` (bar 5 at 20 % opacity with a gold dashed outline).
- `eightfold.tsx` gains `missing?: number`, `spreadTravel?: number` (default 0.4), `jitter?: boolean`, and brass collars; all existing props keep their behaviour. `three-preview` keeps working (dev-only, `noindex`).

### 9.7 CSS 3D — TiltCard, Process Dial, script card

- **`src/components/tilt-card.tsx`** ("use client"): `<TiltCard as="div" className max={5} gloss={false}>`; wrapper `perspective: 1200px`; inner `.plate` `transform: rotateX(var(--rx)) rotateY(var(--ry))`, max 5°, custom properties written in `requestAnimationFrame` from the pointer position; hairline frame pseudo-element at `translateZ(20px)`; leave transition `--dur-m --ease-out-expo`; shadow from `--shadow-rest` to `--shadow-plate`; dark plates with `gloss` add a pointer-following highlight `radial-gradient(400px at var(--mx) var(--my), rgba(255,241,214,.14), transparent 60%)`. Active only under `(hover: hover) and (pointer: fine)` and not under reduced motion. `:focus-within` applies the lifted shadow without tilt (keyboard parity). On the server it renders the plain plate.
- **`src/components/process-dial.tsx`** ("use client"): renders `<div class="process-dial" data-step="1" aria-hidden="true"><div class="dial-plane">{8 × <i style="--i:n" />}</div></div>`. CSS: 220 px square (160 px ≤760 px); `.dial-plane { transform: perspective(900px) rotateX(58deg) rotate(calc((var(--step) - 1) * -45deg)); transition: transform 520ms var(--ease-in-out-quart) }`; bars 22 × 64 px (16 × 46 px mobile) at `rotate(calc(var(--i) * 45deg)) translateY(-68px)`, radius 11 px; unlit bars 1 px `--hairline` outline at 45 % on transparent; lit bars `linear-gradient(160deg, #E4CD8E, #C9A961 55%, #9E7F3C)` with `inset 0 1px 0 rgba(255,246,222,.6)` and `6px 10px 18px rgba(11,31,24,.18)`, 320 ms fade. Step *n* lights bars `2n − 2` and `2n − 1` (0-indexed): 4 steps × 2 bars = 8 people. Behaviour: `useEffect` attaches `list.addEventListener("toggle", handler, true)` (capture, because `toggle` does not bubble) on `.home-process-list`; the handler finds the open `<details>` index and sets `data-step`. No JS: server renders `data-step="1"` (the first disclosure is `open`). Reduced motion: transitions off, instant state.
- **Telugu script card:** CSS only (§7.5).

### 9.8 The SVG fallback — `EightfoldArt` in `src/components/brand.tsx`

`BrandSymbol` and `BrandLockup` stay byte-identical. New export:

```tsx
export function EightfoldArt({ variant = "mark", missing = 5, className = "" }:
  { variant?: "mark" | "assembly" | "exploded" | "missing"; missing?: number; className?: string })
```

- Same 48 × 48 geometry: eight `<rect x="21" y="3" width="6" height="15" rx="3">`, each with `style={{ "--i": i }}` and `class="bar"`, `transform-box: view-box; transform-origin: 24px 24px`, final transform `rotate(calc(var(--i) * 45deg))`. Ids are prefixed with `useId()` so several instances can coexist.
- Finish: `<defs>` with a glass gradient (`#E6EFE3 → #BBD0BF`, 20° ), a top highlight gradient (white 55 % → 0), a brass collar gradient (`#E4CD8E → #9E7F3C`) applied to two 1 × 6 rects per bar, and `<filter><feDropShadow dx="0.6" dy="1.2" stdDeviation="1.1" flood-color="#061611" flood-opacity=".4" /></filter>`. About 3 KB.
- `variant="assembly"`: when motion is allowed (`@media (prefers-reduced-motion: no-preference)`), each bar runs `eightfold-assemble var(--dur-assembly) var(--ease-out-expo) both` with `animation-delay: calc(150ms + var(--i) * 55ms)`:

  ```css
  @keyframes eightfold-assemble {
    from { transform: translate(calc((var(--i) - 3.5) * 7px), 10px) rotate(0turn); }
    to   { transform: translate(0, 0) rotate(calc(var(--i) * 45deg)); }
  }
  ```

  The `from` pose is eight upright bars in a row through the centre (eight people); the `to` pose is the mark. Both keyframes use the same transform-function list, so interpolation needs no `@property`. Under reduced motion the bars sit in the `to` pose. The `.hero-fallback` wrapper itself never animates opacity.
- `variant="exploded"`: bars at `rotate(i × 45deg) translateY(-10px)` → `translateY(0)` when `.is-in` is present (About, Reveal-driven). `variant="missing"`: bar `missing` at opacity .2 with a gold `stroke-dasharray: 2 2` outline. `variant="mark"`: static, used in the contact aside and as the dial's reference.

### 9.9 Optional poster (Phase 2 polish, not a dependency)

A camera-matched WebP (`public/images/brand/eightfold-glass-poster.webp`, ≤120 KB, 1400 × 1400) may be captured once from `/three-preview?variant=glass&preset=forest` with `preserveDrawingBuffer` in a dev-only branch and committed, documented in `docs/ASSETS.md` as original 3D artwork. If present it is layered between the SVG and the canvas as `<Image alt="" fill sizes="(max-width: 760px) 56vw, 40vw" />` (no `preload` below 760 px). The site is complete without it.

### 9.10 Performance rules for every scene

One `SceneCanvas` per route; `dpr` capped at `[1, 1.5]` (1 below 1024 px); `frameloop="never"` when the stage is <10 % visible or the tab is hidden; `Environment frames={1}`; contact shadows `frames={1}`; `transmissionResolutionScale = 0.5`; `powerPreference: "low-power"`; geometry under the budgets in §9.4; no transmission outside the glass tier; the 3D chunk loads after hydration + idle and only when the tier is not `off`; canvases are `aria-hidden` with no focusable children; nothing in WebGL is ever the LCP candidate.

---

## 10. Motion system — `src/app/motion.css` (`@layer motion`) + `src/components/reveal.tsx`

- **Entrance.** Hero copy: CSS keyframes (`hero-rise`: `translateY(24px) → 0` + opacity for eyebrow/lead/actions/note; `hero-rise-solid`: transform only for the H1 lines). Below the fold: `Reveal` keeps its WAAPI approach (content visible in server HTML; animates `translateY(20px) → 0` only after the IntersectionObserver fires, never opacity before JS) and gains `delay?: number`, `distance?: number`, `as?: "div" | "section"`, `className`, plus child stagger via `--i` (60 ms). It also adds the class `is-in` for CSS-driven children (About exploded SVG).
- **Scroll-linked (CSS only, `@supports (animation-timeline: view())`).** `.hairline` draws in (`scaleX 0 → 1`, `transform-origin: left`, `animation-range: entry 0% entry 60%`); numeral-xl drifts −12 px → 12 px; plate images parallax ±16 px inside their frame; the Telugu photo scales 1.04 → 1; the script card rises 16 px; the hero `.scene-slot` fades out over `exit 0% exit 100%`. All transform/opacity only; none on touch devices (`@media (hover: none)` disables parallax). The two WebGL scroll couplings use `useScroll` from `motion/react` inside the scenes.
- **Hover/press.** Buttons: background `--dur-xs`, arrow icon `translate(2px, -2px)` 180 ms (existing rule kept), `:active translateY(1px)`; links: underline colour `--dur-xs`; plates: tilt + lift (§9.7); nav underline grows from the left 240 ms; details plus icon rotates 45° 220 ms.
- **Page transitions.** `src/components/page-transition.tsx` ("use client"): `const path = usePathname(); return <ViewTransition default="vt-page"><div className="page" key={path}>{children}</div></ViewTransition>` (`import { ViewTransition } from "react"`, exported by this React build; Next 16 App Router needs no config). `layout.tsx` renders `<main id="main-content"><PageTransition>{children}</PageTransition></main>` and `<ViewTransition name="mc-header"><Header …/></ViewTransition>`. CSS: `::view-transition-old(.vt-page) { animation: 180ms ease-in both vt-fade-out } ::view-transition-new(.vt-page) { animation: 320ms var(--ease-standard) both vt-rise-in }` (opacity + 10 px rise). Shared elements in Phase 2: `service-art-${slug}` (services ↔ detail), `work-figure-${slug}` (work ↔ detail), 360 ms. Nothing slides; durations never exceed 400 ms.
- **Reduced motion.** `@media (prefers-reduced-motion: reduce)`: the existing `*, *::before, *::after { animation: none !important; transition: none !important }` rule stays (it now lives in the `refinement` layer; `!important` in a lower layer wins, which is the intended kill switch), `html { scroll-behavior: auto }`, scroll-driven animations off, tilt off, `::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*) { animation: none !important }`, and the quality hook returns `off` so no canvas mounts. Motion-based wrappers use `useReducedMotion()` from `motion/react` as a second guard. Native focus, hover colour changes and details toggling remain.

---

## 11. Component inventory and file plan

| Path | Action | Purpose |
| --- | --- | --- |
| `src/app/tokens.css` | create | Palette, tone blocks, derived/spacing/radius/motion tokens, legacy aliases (unlayered, custom properties only) |
| `src/app/atelier.css` | create | `@layer atelier`: type scale, two-line headings, surfaces, bands, grain, plates, hairlines, numerals, buttons, links, eyebrows with index, forms, stages, closing plate, footer, concept-art serif overrides, page-intro, simple-page |
| `src/app/motion.css` | create | `@layer motion`: keyframes, scroll-driven rules, view transitions, reduced-motion exceptions |
| `src/app/services.css` | create | `@layer atelier`: `/services` and `/services/[slug]` (imported by both pages) |
| `src/app/pages.css` | create | `@layer atelier`: About, Contact, Guides, Privacy, Thank-you, 404, error (imported by `layout.tsx`) |
| `src/app/home.css` | modify (rewrite) | `@layer atelier`: §7 sections, dial, script card, hero stage |
| `src/app/header.css` | modify (rewrite) | `@layer atelier`: header tones, scrolled state, dropdown, mobile sheet |
| `src/app/portfolio.css` | modify (rewrite) | `@layer atelier`: work index/detail, Voice Agent cover; selectors preserved |
| `src/app/globals.css` | modify | First line becomes `@layer reset, base, components, responsive, studio, photography, refinement, atelier, motion;`; body font-family set to `var(--font-studio)`; nothing else changes in Phase 1 |
| `src/app/refinement.css` | modify | Wrap entire content in `@layer refinement { … }` |
| `src/app/studio.css`, `src/app/photography.css` | keep | Already layered; dead selectors removed in a later cleanup |
| `src/app/layout.tsx` | modify | `adjustFontFallback` on the serif; import `tokens.css`, `atelier.css`, `pages.css`, `motion.css` (order: globals, studio, photography, refinement, tokens, atelier, header, pages, motion); `<ViewTransition name="mc-header">` around `Header`; `<div data-header-sentinel aria-hidden="true" />` before `<main>`; `<PageTransition>` inside `<main>`; `themeColor: "#F6F2E8"` |
| `src/app/page.tsx` | modify | Remove `BrandScene`; add `HeroStage`, `ProcessDial`, `TiltCard`, `line-2`/`period` spans, `SectionLabel index`, `data-tone` attributes, Telugu plate + card; copy unchanged |
| `src/app/page.tsx` → `export const viewport = { themeColor: "#11291F" }` | modify | Also on `about/page.tsx`, `work/page.tsx`, `services/page.tsx` |
| `src/app/services/page.tsx`, `src/app/services/[slug]/page.tsx` | modify | §8.1–8.2 markup (tones, TiltCard, numerals, spans); import `services.css` |
| `src/app/work/page.tsx` | modify | Dark intro band; imports unchanged |
| `src/app/about/page.tsx`, `contact/page.tsx`, `guides/page.tsx`, `guides/[slug]/page.tsx`, `privacy/page.tsx`, `thank-you/page.tsx`, `not-found.tsx`, `error.tsx` | modify | §8.5–8.8 markup only |
| `src/app/work/[slug]/page.tsx` | modify | Concept `project-stage` plate; `data-tone`; Phase 2 waveform stage in `portfolio-detail.tsx` |
| `src/components/hero-stage.tsx` | create | Server figure: `Stage` + `EightfoldArt` fallback + caption |
| `src/components/tilt-card.tsx` | create | CSS-3D plate with keyboard parity |
| `src/components/process-dial.tsx` | create | CSS-3D dial driven by native `toggle` |
| `src/components/page-transition.tsx` | create | `ViewTransition` wrapper keyed by pathname |
| `src/components/category-spy.tsx` | create | Scroll-spy for `/services` category tabs (decorative) |
| `src/components/use-band-tone.ts` | create | Header tone + scrolled state observers |
| `src/components/reveal.tsx` | modify | `delay`, `distance`, `as`, `is-in` class, child stagger |
| `src/components/brand.tsx` | modify | Add `EightfoldArt`; `BrandSymbol`/`BrandLockup` unchanged |
| `src/components/shared.tsx` | modify | `SectionLabel` gains `index`; `ContactBanner` inset plate markup; `Footer` tone + classes; `Process` numerals; `ButtonLink`/`FAQ` unchanged |
| `src/components/header.tsx` | modify | `data-tone`/`data-scrolled` from the hook; body scroll lock while open; behaviour unchanged |
| `src/components/portfolio-gallery.tsx`, `portfolio-detail.tsx`, `guide-cards.tsx`, `studio-photo.tsx` | modify | Wrap visuals in `TiltCard`; Phase 2 `ViewTransition` names and waveform stage |
| `src/components/three/stage.tsx` | create | Client shell: quality gate, slot, idle, entrance gate, crossfade, error boundary |
| `src/components/three/stage-error-boundary.tsx` | create | Class error boundary |
| `src/components/three/use-scene-quality.ts` | create | Tier detection |
| `src/components/three/use-single-canvas.ts` | create | Slot manager |
| `src/components/three/materials.ts` | create | Material presets (moved from `eightfold.tsx`) |
| `src/components/three/backdrop.tsx` | create | Shader gradient plane for the glass tier |
| `src/components/three/waveform.tsx` | create (Phase 2) | Brass rods + plinth |
| `src/components/three/scenes/hero-scene.tsx` | create | Home hero scene |
| `src/components/three/scenes/assembly-scene.tsx`, `waveform-scene.tsx`, `missing-bar-scene.tsx` | create (Phase 2) | About, Voice Agent, 404 scenes |
| `src/components/three/scene-canvas.tsx` | modify | low-power, tone mapping, `transmissionResolutionScale`, `eventSource`, `frameloop: never`, context-lost handling |
| `src/components/three/eightfold.tsx` | modify | `missing`, `spreadTravel`, `jitter`, brass collars, presets from `materials.ts` |
| `src/components/three/studio-lights.tsx` | modify | `tier` prop, final light values, shadow defaults |
| `src/components/three/index.ts`, `lazy.tsx` | modify / keep | Export new modules; `lazyScene` unchanged |
| `src/app/three-preview/*` | keep | Dev-only preview (noindex); remove before public launch (open question) |
| `src/components/studio-showcase.tsx`, `circle-art.tsx`, `service-art.tsx`, `work-gallery.tsx`, `android-app-art.tsx` | keep (unused) | No importers today; delete in the cleanup follow-up after verification |
| `tests/browser-checks.cjs` | modify | §15 |
| `docs/ASSETS.md`, `docs/REWORK-VALIDATION.md` | modify | Record the SVG artwork, optional poster, and fresh verification results |
| `docs/superpowers/specs/2026-10-30-premium-3d-redesign-design.md` | create | This document |

---

## 12. CSS architecture

- **Layer order (declared once, first line of `globals.css`):** `@layer reset, base, components, responsive, studio, photography, refinement, atelier, motion;`
- **Every file is layered.** `globals.css` (reset/base/components/responsive, legacy), `studio.css` (`studio`), `photography.css` (`photography`), `refinement.css` (wrapped in `refinement`), `atelier.css`/`header.css`/`home.css`/`portfolio.css`/`services.css`/`pages.css` (all `@layer atelier { … }`), `motion.css` (`motion`). The only unlayered file is `tokens.css`, and it contains custom properties only — so its `:root` palette aliases beat the legacy `:root` blocks in `base`, `studio` and `refinement`, while no unlayered rule can beat `atelier`.
- **Why `atelier` sits after `responsive`:** legacy breakpoint rules for shared selectors (`.contact-banner`, `.site-footer`, `.page-intro`, `.service-hero`, `.portfolio-*`) must not override the new design; `atelier` owns its breakpoints (1100, 1024, 900, 760, 480, 390, 320) inside each file.
- **Files imported from pages** (`home.css`, `portfolio.css`, `services.css`) still slot into the global order because the layer list is established by `globals.css`, which `layout.tsx` imports first.
- **`!important` inversion:** the reduced-motion kill switch in `refinement` uses `!important`; important declarations in lower layers win, which is desired. No other `!important` is allowed in new CSS.
- **Budget:** new authored CSS ≤ 70 KB uncompressed; legacy dead selectors are removed in a follow-up once the new pages are verified (not in this pass).
- **Pure CSS**: no Tailwind, no CSS modules, no preprocessors. Custom properties for every value that appears twice.

---

## 13. Accessibility requirements per component

| Component | Requirements |
| --- | --- |
| Header | Existing behaviours and names unchanged; tone colours all ≥4.5:1 in both tones; focus ring 2 px `--focus` offset 3 px; dropdown links ≥44 px; menu toggle 44 × 44; Escape returns focus; body scroll lock released on close |
| Hero stage | `.scene-slot` and canvas `aria-hidden="true"`, no focusable children; `EightfoldArt` `aria-hidden="true"` (the figcaption carries the meaning); figcaption 12 px mist ≥4.5:1; no element in the hero animates opacity if it can be LCP |
| Buttons / links | ≥44 px targets (`.button` 54 px, nav CTA 46 px, list links 48 px, pagination 44 px); arrows decorative; underline on hover and focus; `:focus-visible` lifted state on `TiltCard` wrappers |
| Eyebrows / numerals | Eyebrow 12 px minimum; numerals bronze on light (5.4:1) and gold on dark (8.1:1); never lighter; if a decorative numeral is ever lightened it must be `aria-hidden` |
| Two-line headings | `.line-2` is a plain span inside the heading (one accessible name); `.period` only on dark |
| Service rows | Ten real links with visible text; plate images keep their `alt`; AI chip is visible text, not a tooltip |
| Telugu section | `lang="te"` kept on the line; script card `aria-hidden="true"`; photo `alt` kept; credit kept |
| Process | Native `<details name="project-process">` untouched; summary text is the accessible name; dial `aria-hidden="true"` and purely reactive |
| FAQ | Native `<details>`; summaries ≥64 px; 16 px text |
| Closing plate | Button cream on forest-900 (13.8:1); decorative ring `aria-hidden` |
| Footer | Links ≥40 px tall; 11 px credits are the one exception (existing, links underlined); focus ring gold |
| TiltCard | Pointer-only tilt; focus-within lift; never traps focus; contents remain real links |
| Contact form | All ids/labels/ARIA unchanged; inputs 52 px; error text `--error` on paper 6.6:1; error summary keeps `tabIndex={-1}` focus behaviour |
| View transitions | Disabled under reduced motion; no content depends on them |
| Canvas routes | axe runs on `<main>` with WebGL on: canvases hidden, Voice Agent SVG keeps `role="img"`, no colour-only state |
| Overflow | `.container` maths, `min-width: 0` on grid children, Telugu clamp, stage `max-width: 100%`, rail-free layout → `scrollWidth <= innerWidth` at 320/390/768/1024/1440 |

---

## 14. Performance plan and budgets

- **LCP:** the H1 (server HTML, `display: swap`, metric-matched fallback) on every viewport; the SVG fallback is inline and paints in the same frame. No `preload` on any below-fold image at 390 px. Target lab LCP < 2.0 s desktop, < 2.5 s mobile.
- **JavaScript:** first-party JS before idle ≤ 150 KB gz (`header`, `reveal`, `tilt-card`, `process-dial`, `page-transition`, the `stage` shell); 3D chunk ≤ 250 KB gz (three core alone is ~170 KB gz), loaded only from `Stage` after hydration + `requestIdleCallback` and only when the tier is not `off`; `motion/react` only inside client wrappers and scenes. Verify from `next build --webpack` output.
- **Rendering:** §9.10 rules; `PerformanceMonitor` steps dpr and tier down; the hero loop stops when the stage scrolls out.
- **CSS:** scroll-driven animations and tilt use transform/opacity only; grain is a 400-byte data URI at ≥900 px with no blend mode; `backdrop-filter` only on the header at ≥760 px; `content-visibility` is **not** used (it fights the `#services`/`#how-it-works` anchors).
- **Images:** existing WebPs reused; below-the-fold lazy; illustrations 4:3 at ≤ 900 px wide; microphone photo at 1200 px.
- **Fonts:** Geist 28 KB + two Instrument Serif TTFs ~142 KB, `swap` + `adjustFontFallback`.
- **Budgets:** LCP as above, CLS < 0.05 (fixed `aspect-ratio` stages, font metrics), INP < 200 ms, TBT < 200 ms, Lighthouse mobile performance ≥ 90, zero axe A/AA violations in `<main>`. Measure with the `lighthouse-audit` skill before Step 0 and after Phase 1; record in `docs/REWORK-VALIDATION.md`.

---

## 15. Tests — `tests/browser-checks.cjs`

Preserved hooks (do not rename): `.home-service-links a` (= 10), `main a[href^="/work/"]` (= 0), `.home-process-list details[open]` (= 1 before and after clicking "Agree the scope"), link "Read our project guides", `.guide-card` (= 5), `.portfolio-section`/`.portfolio-card`, pagination navs and link names, "View project: Voice Agent", "All projects", `.portfolio-detail-toolbar a`, `.portfolio-detail-figure img`, `.before-art`, `.script-beat p[lang="te"]` (= 3), `video track`, `#service`, "Download project brief", `.form-error-summary`, `#name[aria-invalid]`, `.form-optional`, `#website-error`, status "Nothing has been sent", `.service-hero` "Discuss your project", "Open menu", 404 H1 containing "circle", zero `pageerror`.

Changes:

1. Line 25 `.image-hero-photo` → `assert(await page.locator('.hero-stage .hero-fallback').isVisible(), 'Homepage hero artwork must render')` plus `await page.waitForFunction(() => { const img = document.querySelector('.home-telugu-photo img'); return img && img.complete && img.naturalWidth > 0; })`.
2. Inside the route loop after `h1` waits: `assert(await page.locator('canvas').count() <= 1, route + ' must mount at most one canvas')`.
3. After the homepage interactions: `assert(await page.locator('.process-dial').getAttribute('data-step') === '2', 'Process dial must follow the open step')`.
4. Reduced-motion pass: `await page.emulateMedia({ reducedMotion: 'reduce' }); await page.goto(origin); await page.waitForTimeout(1500); assert(await page.locator('canvas').count() === 0, 'Reduced motion must not mount WebGL'); await page.emulateMedia({ reducedMotion: null });`
5. No-JS pass: `const ctx = await page.context().browser().newContext({ javaScriptEnabled: false }); const p2 = await ctx.newPage(); await p2.goto(origin); assert(await p2.locator('h1').count() === 1 && await p2.locator('.home-service-links a').count() === 10 && await p2.locator('.hero-fallback svg').count() === 1 && await p2.locator('.home-process-list details[open]').count() === 1, 'Content must render without JavaScript'); await ctx.close();`
6. Add `'/work/voice-agent'` canvas check implicitly through item 2; add `/three-preview` to nothing (dev-only).

Gates: `npm run typecheck`, `npm run build`, `npm test`, `npm run test:e2e` (with `TEST_BASE_URL` pointing at the running server), `node scripts/check-rendered-site.cjs` — all exit 0 before Phase 2 and again before review-pr/ship.

---

## 16. Implementation order

### Step 0 — shared foundation (one engineer; blocks everything else; ~half a day)

1. `tokens.css`, `atelier.css` (foundation sections only: tones, type, headings, buttons, links, eyebrow + index, numerals, hairlines, plates, bands, grain, forms, stage/scene-slot styles, concept-art serif overrides).
2. `globals.css` layer line; `refinement.css` wrapped in `@layer refinement`; `layout.tsx` (fonts, imports, sentinel, `PageTransition`, header `ViewTransition`, themeColor); `motion.css` skeleton (keyframes, reduced-motion exceptions).
3. `shared.tsx` (`SectionLabel index`, `ContactBanner` inset plate, `Footer` tone, `Process` numerals), `brand.tsx` (`EightfoldArt`), `tilt-card.tsx`, `reveal.tsx` extension, `page-transition.tsx`.
4. The `Stage` **contract** (props and data attributes in §9.1) is written into `stage.tsx` as a shell that renders only the fallback, so tracks A and B can start without waiting for each other.
5. Typecheck + build green. **Owner checkpoint:** screenshot the re-skinned homepage at 1440 and 390 for Mouli before building further (serif headlines and dark header tone supersede the 13 Oct decisions; see §17).

### Phase 1 — parallel tracks on disjoint files

| Track | Files | Depends on |
| --- | --- | --- |
| A — Home | `page.tsx`, `home.css`, `hero-stage.tsx`, `process-dial.tsx` | Step 0 |
| B — 3D hero | `three/stage.tsx` (full), `stage-error-boundary.tsx`, `use-scene-quality.ts`, `use-single-canvas.ts`, `materials.ts`, `backdrop.tsx`, `scenes/hero-scene.tsx`, modifications to `scene-canvas.tsx`, `eightfold.tsx`, `studio-lights.tsx`, `index.ts` | Step 0 contract |
| C — Chrome | `header.tsx`, `header.css`, `use-band-tone.ts` | Step 0 |
| D — Services | `services.css`, `services/page.tsx`, `services/[slug]/page.tsx`, `category-spy.tsx` | Step 0 |
| E — Work | `portfolio.css`, `portfolio-gallery.tsx`, `work/page.tsx`, `work/[slug]/page.tsx` (concept plate) | Step 0 |
| F — Pages | `pages.css`, `about`, `contact`, `guides`, `guides/[slug]`, `privacy`, `thank-you`, `not-found.tsx`, `error.tsx`, `guide-cards.tsx`, `studio-photo.tsx` | Step 0 |
| G — Motion + tests + docs | `motion.css` (scroll-driven rules, view transitions), `tests/browser-checks.cjs`, `docs/ASSETS.md`, validation notes | Step 0; runs the suite as tracks land |

Integration gate: typecheck, build, unit tests, browser checks, rendered-site check, Lighthouse mobile/desktop on `/`; fix regressions before Phase 2.

### Phase 2 — second wave (after the gate)

1. About assembly scene (`scenes/assembly-scene.tsx`, `eightfold.tsx` `jitter`/`spreadTravel`), About page stage wiring.
2. Voice Agent waveform (`waveform.tsx`, `scenes/waveform-scene.tsx`, `portfolio-detail.tsx` stage).
3. 404 missing-bar scene (`scenes/missing-bar-scene.tsx`, `not-found.tsx`).
4. Shared-element view transitions (`service-art-${slug}`, `work-figure-${slug}`).
5. Optional poster capture (§9.9) and `docs/ASSETS.md` entry.
6. Legacy CSS cleanup: remove dead selectors from `globals.css`/`studio.css`/`refinement.css` once every route is verified; re-run the full gate.

Every phase ends with review-pr and ship under this repository's policy (local branch; no automatic publishing, merge or deployment).

---

## 17. Decisions log

1. **Name:** Eightfold Atelier. The mark is the protagonist; the site is its studio.
2. **Dark surfaces** are forest-900 `#11291F` with the warm radial gradient and grain; `#0B1F18` only for the footer and 404. Cream is the majority by height.
3. **Gold is a line, not a fill.** Text in gold only on dark (eyebrows, numerals, H1 full stop); bronze `#7A5F25` is the gold voice on cream.
4. **Identity fidelity:** the wordmark period stays green on both surfaces (`#2F6749` light, `#C8DBA9` dark — the current footer value). Direction 1's gold period was dropped to honour the "green period" identity rule. The Eightfold symbol geometry is untouched; `EightfoldArt` only adds finish and variants.
5. **Typography supersedes 13 Oct:** Instrument Serif for H1/H2/family titles ≥26 px and numerals; Geist for everything read, clicked or typed; display capped at 88 px. This consciously replaces "Geist for headings"; the guardrails above distinguish it from the rejected oversized-editorial look. Owner confirms at the Step 0 checkpoint.
6. **Header tone supersedes 13 Oct** ("light header with forest-green top rule"): the header follows the band under it; on cream pages it is still a light header. The 3 px green top rule becomes a 1 px gold hairline below the header when scrolled.
7. **Universal entrance** is SVG + CSS (row → mark) for every device and no-JS; WebGL adds material, light, parallax and scroll unfold afterwards. The WebGL mark starts assembled.
8. **Four WebGL moments** (home hero, About assembly, Voice Agent waveform, 404) + CSS 3D (plates, dial, script card). Never two canvases on one route; no canvas on `/services`, `/contact`, `/guides`, `/work` index, `/privacy`, `/thank-you`, error.
9. **Phones never mount WebGL**; they get the glazed SVG with the CSS assembly. Tablets and coarse pointers get ceramic.
10. **Telugu section** uses the existing microphone photograph, framed honestly as a hairline plate, plus a decorative script card printing only the existing Telugu line.
11. **Closing plate** is an inset dark plate on a cream section, not a full-bleed band, so the page never ends in ~900 px of dark.
12. **Buttons** are 6 px rectangles, plates 3 px; no pills, glass UI panels, gradient cards, magnetic buttons, custom cursors, rails or pinned storytelling.
13. **Copy, data, services, routes, disclosures, credits and the footer service list are unchanged.**
14. **Legacy CSS is layered, not deleted** in this pass; cleanup is Phase 2 step 6.
15. **`.image-hero-photo` is retired** from the test in favour of `.hero-fallback`, because the hero no longer contains a photograph; the Telugu photograph's load is asserted instead.

---

## 18. Open questions for the owner

1. Serif headlines and the band-following header tone supersede two 13 October decisions — confirm after the Step 0 screenshot (1440 and 390).
2. Phones: default is the glazed SVG with CSS assembly, no WebGL. Do you want ceramic WebGL on capable phones as an opt-in later?
3. Closing plate: inset dark plate on cream (spec) versus full-bleed dark band — confirm the inset.
4. Telugu script card duplicating the Telugu line as a decorative prop — keep or drop?
5. `/three-preview` route: keep until public launch (useful for tuning and the optional poster), then remove?
6. `/services` index has no WebGL by design (restraint); do you want family objects there in a Phase 3?
7. Optional glass poster capture: proceed only if the dev-only capture is quick; the site is complete without it.
