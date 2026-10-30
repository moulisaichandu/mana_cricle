# Daylight Atelier

A warm-paper, museum-catalogue website where forest green is the ink, one gold hairline is the jewellery, Instrument Serif headlines reveal letter by letter, and the Eightfold symbol exists as a small, exquisitely lit ceramic object floating in front of frosted glass.

Signature: The homepage hero: "Branding & websites." in large Instrument Serif ink, then "Made to connect." arriving in italic forest green one letter at a time, while to the right the eight ceramic bars of the Eightfold symbol float in soft north-window daylight in front of a tilted frosted-glass disc with a single gold rim, casting a real contact shadow onto the paper. It turns the logo into a studio object you want to pick up, and the serif reveal makes the page feel typeset rather than templated.

## Palette
- --paper: #F5F1E8 — Page canvas on every route; the warm paper everything sits on (12.4:1 with --ink)
- --cream: #FBF8F1 — Raised surfaces: contact form, plates behind images, dropdown panel, posters' mat
- --parchment: #EBE4D5 — The only tinted band: Telugu section, scope panels, pull-quotes, contact aside (use --ink-soft for body text here)
- --ink: #14312A — Headlines, body text, 1px ink rules, menu toggle border, footer background is --forest-deep not ink
- --ink-soft: #2F4A40 — Body text on --parchment and inside dense lists (7.6:1 on parchment)
- --moss: #4F6B5C — Muted text, captions (min 12px), descriptions on --paper/--cream (5.2:1 on paper)
- --forest: #1E5A43 — Brand green: buttons, italic headline line, eyebrows, wordmark period, focus ring, link hover (7.2:1 on paper)
- --forest-deep: #123D30 — Footer and Voice Agent cover background, button hover, 3D shadow tint reference
- --sage: #DDE4D8 — Frosted-glass tint, decorative frames, selection background, footer link colour on forest-deep (9.3:1)
- --line: #D8D1C2 — All decorative 1px hairlines and plate frames on paper/cream
- --line-ui: #6F7F75 — Form input and control borders (4.0:1 on cream, meets 3:1 non-text)
- --gold: #C9A961 — Ceramic gold glaze in 3D, gold rim torus, embossed footer Eightfold; never used as text on light surfaces
- --gold-deep: #B8903F — 1px gold hairline at the very top of the header and guide example rule on paper (decorative only, 2.6:1)
- --gold-on-ink: #D6B875 — Gold text/rules only on --forest-deep or --ink (6.3:1 on forest-deep): footer period, footer top rule, wave bars
- --error: #9F2B1E — Form errors and error summary rule (7.0:1 on cream)

## 3D moments
- Home hero, right column (5 of 12 columns, 1:1 stage with 24px mat and 1px --line frame); component src/components/three/eightfold-ceramic.tsx mounted through src/components/three/stage.tsx: The Eightfold symbol as eight RoundedBox bars (0.25 x 0.62 x 0.25, radius 0.115, smoothness 3) at radius 0.72, rotated in 45-degree steps, floating 0.35 units in front of a frosted-glass disc (Cylinder r 1.25, 0.08 thick, 72 segments) tilted back 12 degrees with a gold rim torus (1.25, 0.012) | Cream matte ceramic MeshPhysicalMaterial #EFE8DA roughness .62 clearcoat .35 clearcoatRoughness .55 sheen .3; glass MeshPhysicalMaterial transmission .92 roughness .48 thickness .6 ior 1.45 attenuation #DDE4D8 (lite mode: StandardMaterial opacity .55); gold rim metalness .6 roughness .35 #C9A961. Shared Daylight rig: Environment resolution 64 frames 1 with three Lightformers (warm window rect top-left 3.2, sage fill right 1.4, warm ring bounce below .9), ambient .25, ContactShadows opacity .34 blur 2.8 resolution 256 colour #2E463C. ACES tone mapping exposure 1.05, dpr [1,1.5], transmissionResolutionScale .5 | Float speed 1.1 rotation .25 float .45 range +-0.06; pointer parallax over the whole hero section (eventSource) rotating the group max 0.14 rad y / 0.08 rad x damped lambda 4; idle z rotation one turn per 90s; CSS scroll-driven drift of the stage -28px over the first 60vh; entrance: canvas opacity 0 to 1 and scale .96 to 1 over 480ms once the first frame renders, poster fades out | fallback: Poster public/images/3d/eightfold-ceramic-1200.webp (and -720) captured from the same camera, rendered server-side as next/image priority with className image-hero-photo inside a figure with caption 'Eightfold, the ManaCircle symbol, in ceramic / Illustrative rendering'. Shown on mobile (<760px or coarse pointer or deviceMemory <4 or saveData), reduced motion, no WebGL, no JS, context loss, or while the chunk loads
- Home Telugu section (.home-telugu, parchment band), left column, 4:3 stage; component src/components/three/voice-bars.tsx: Five upright ceramic capsules (RoundedBox 0.26 wide, heights 0.5/0.9/1.3/0.8/0.6, spacing 0.42) standing on a frosted-glass slab 2.2 x 0.12 x 1.0 over a thin gold plate 2.3 x 0.01 x 1.08; reads as a quiet waveform for scripts and voiceovers | Alternating cream ceramic #EFE8DA and sage ceramic #D7DFD2 (same physical material recipe), frosted slab same glass recipe, gold plate gold glaze; Daylight rig; ContactShadows onto the parchment band (canvas alpha) | Each bar breathes in height (scale.y +-8%, sin(t*0.9 + i*0.8), pivot at base); group Float rotationIntensity .12; the bar nearest the pointer x rises +6% damped; no audio, no autoplay sound, purely visual | fallback: Poster public/images/3d/voice-bars-1200.webp (1200x900) in a figure with caption 'Scripts, voiceovers and captions / Illustrative rendering'; mobile, reduced motion and no-WebGL always get the poster; the recording-microphone photo is retired from this section (credit stays in the footer)
- /services, full-container 2.4:1 stage directly under the split page-intro and above the category chips; component src/components/three/service-still-life.tsx: Three objects on one frosted-glass shelf (3.6 x 0.08 x 1.1): a ceramic tablet 1.1 x 0.75 x 0.08 leaning 8 degrees with a recessed sage screen (Websites & apps); a ceramic seal disc r .48 with the Eightfold embossed as eight 0.03-high miniature bars (Brand & content); an upright ceramic torus major .45 minor .12 with a tiny gold sphere r .06 resting inside it (Marketing & ads) | Cream ceramic for all three bodies, sage recess, gold sphere glaze; Daylight rig with the window Lightformer widened to 5 x 3 so the shelf reads as one long still life; ContactShadows scale 7 | Hover or keyboard focus on a .service-category-nav chip lifts its object 0.08 units and settles the others (damped 300ms); objects idle on Float floatIntensity .2; camera never moves, chips stay plain anchor links | fallback: Poster public/images/3d/services-still-life-1600.webp (1600x680) as a plate with 1px ink frame; on mobile cropped to 2:1 with object-position centre; reduced motion and no-WebGL use the poster
- /about split page-intro, right column next to 'Eight people. One creative team.', 6:5 stage; component src/components/three/eight-pebbles.tsx: Eight ceramic pebbles (Icosahedron detail 3, scaled about [1, .78, .9] with per-pebble +-8% variation, radii .26 to .34) in a loose ring of radius .95 on a frosted-glass disc r 1.4 whose edge carries an inset gold hairline ring | Six cream and two sage ceramic pebbles, same glass and gold recipes; Daylight rig; camera [0, 2.6, 4.2] looking down at the disc so the ring reads as a table of eight | Pebbles breathe (scale +-2%, phase offsets); the ring rotates one turn per 120s; pebbles drift up to .05 units away from the pointer and return (gentle repulsion, damped) | fallback: Poster public/images/3d/eight-pebbles-1200.webp (1200x1000) with caption 'Eight people, one circle / Illustrative rendering'; the Kelly Sikkema desk photo stays in .about-lead with its credit
- 404 page (src/app/not-found.tsx), 320px square stage above the h1; reuses eightfold-ceramic.tsx with a displaced prop: The ceramic Eightfold with bar index 5 moved outward 0.35 units and rotated 22 degrees, slowly drifting but never snapping back into place | Same ceramic and Daylight rig, no glass disc, ContactShadows resolution 128 | Idle drift only; Float with floatIntensity .3 | fallback: Poster public/images/3d/lost-bar-800.webp; error.tsx uses no 3D at all, only the static SVG BrandSymbol

## Risks
- Looking plain or under-designed: mitigated by the catalogue system (numbered sections, ink rules that draw in, serif scale up to 84px, paper grain, gold hairline) and by letting 3D objects overlap their frames; implementer must not drop the mat/frame details or the section numerals.
- 3D reading as a sticker: the Daylight rig's key light comes from top-left to match CSS shadow direction, ContactShadows land on the page paper, objects break the 1px frame, and posters are captured from the same camera so the fallback is indistinguishable in composition.
- Transmission (frosted glass) cost on mid-range GPUs: PerformanceMonitor onDecline switches to lite glass (opacity material), transmissionResolutionScale .5, dpr capped at 1.5, mobile never mounts WebGL.
- More than one canvas on a route: a module-level single-canvas manager (use-single-canvas.ts) only mounts the stage closest to the viewport and demotes the others to posters; headless Playwright and context loss fall back to posters, so tests/browser-checks.cjs still finds .image-hero-photo.
- LCP regression from the hero: line one of the h1 is never faded, only the italic line animates; the three/R3F chunk imports after requestIdleCallback; posters are priority next/image with explicit sizes; measure with the lighthouse-audit skill after implementation.
- Instrument Serif TTFs (70KB each) causing FOUT or shifted metrics: load both via next/font/local with adjustFontFallback 'Times New Roman' and display swap; keep headline line-height .96 to .98 so fallback and real fonts occupy similar height.
- CSS cascade: header.css, refinement.css and home.css are currently unlayered and override the layered files; the redesign must consolidate into one @layer order (reset, tokens, base, components, pages, motion, responsive) or new tokens will silently lose to old overrides.
- Scroll-driven animations and ::details-content are Chromium-first: every scroll-linked effect must have an IntersectionObserver or no-animation fallback so Safari and Firefox get the static, still-beautiful state.
- Posters must be produced from the real scenes (one-time capture with preserveDrawingBuffer on a dev page); shipping without them leaves mobile with an empty stage, which is the single biggest way this direction fails.
- Telugu text has no local serif: it falls back to Nirmala UI / Noto Sans Telugu; keep it at 30px in forest so the weight difference reads as deliberate, and never fake-italicise it.

---

# Daylight Atelier — Angle B direction for ManaCircle

## 1. Concept

ManaCircle becomes a light atelier: a warm paper canvas on every route, forest green used the way a printer uses ink, and a single gold hairline as the only jewellery. The layout borrows from a museum catalogue: generous margins, numbered sections (01–04), fine 1px rules that draw themselves as you arrive, Instrument Serif for every headline and Geist for everything that must be read quickly. Richness comes from finish, not from quantity: paper grain, matte ceramic, frosted glass, soft daylight shadows, letter-by-letter serif reveals.

The 3D is a set of small studio objects, all derived from the brand: the Eightfold symbol cast in cream ceramic; five ceramic bars standing in for voice; three objects on a shelf for the three service families; eight pebbles for eight people. They are lit by one shared "Daylight" rig so they look like they were photographed on the same table as the website. They are never full-screen and never block reading; each has a poster twin captured from the same camera so the fallback looks like a photograph of the same object.

Reference feel: Monocle's catalogue pages, Kinfolk's calm, Aēsop-adjacent print, the product stillness of Teenage Engineering. The danger (plain, or 3D that looks stuck on) is handled by three rules: every section has a visible typographic structure (index numeral, eyebrow, rule, serif heading); every object overlaps its frame and casts a shadow onto the page; every surface is paper or cream, never pure white.

Everything below keeps the data in `src/lib/*.ts` untouched. Only presentation changes.

## 2. Palette tokens

Declared on `:root` in the `tokens` layer. Contrast figures are against the named background (WCAG 2.2 AA needs 4.5:1 for text, 3:1 for large text and UI boundaries).

| Token | Hex | Use | Contrast |
| --- | --- | --- | --- |
| `--paper` | #F5F1E8 | Page background everywhere | ink on paper 12.4:1 |
| `--cream` | #FBF8F1 | Raised surfaces: form, plates, dropdown, poster mats | ink 13.1:1, moss 5.5:1 |
| `--parchment` | #EBE4D5 | The one tinted band (Telugu section), scope panels, pull quotes, contact aside | ink 11.0:1, ink-soft 7.6:1, forest 6.4:1 |
| `--ink` | #14312A | Headlines, body, ink rules, borders of toggles | — |
| `--ink-soft` | #2F4A40 | Body text on parchment, dense lists | 7.6:1 on parchment |
| `--moss` | #4F6B5C | Muted text, captions (12px minimum) on paper/cream | 5.2:1 on paper |
| `--forest` | #1E5A43 | Buttons, italic headline line, eyebrows, wordmark period, focus ring | 7.2:1 on paper; cream text on forest 7.6:1 |
| `--forest-deep` | #123D30 | Footer, Voice Agent cover, button hover | cream on forest-deep 11.4:1 |
| `--sage` | #DDE4D8 | Glass tint, selection background, footer links | 9.3:1 on forest-deep |
| `--line` | #D8D1C2 | Decorative hairlines, plate frames | decorative |
| `--line-ui` | #6F7F75 | Input and control borders | 4.0:1 on cream |
| `--gold` | #C9A961 | Ceramic gold glaze, gold rim, embossed footer symbol | never text on light |
| `--gold-deep` | #B8903F | 1px hairline at top of header, guide example rule | decorative only |
| `--gold-on-ink` | #D6B875 | Gold text and rules on forest-deep/ink only | 6.3:1 on forest-deep |
| `--error` | #9F2B1E | Field errors, error summary rule | 7.0:1 on cream |

Rules: gold is never used for text on paper, cream or parchment. Muted text on parchment uses `--ink-soft`, not `--moss`. Placeholders use `#5F7167` (4.9:1 on cream). Selection: `--sage` background, `--ink` text. Focus: `outline: 2px solid var(--forest); outline-offset: 3px`; on forest-deep surfaces `outline-color: var(--cream)`.

Brand continuity: `--forest` and `--forest-deep` are the existing #2f6749/#173d2e family moved one step deeper; `--paper` is the existing #f8faf5 moved from cool-green to warm. The lockup stays exactly as in `src/components/brand.tsx`: `BrandSymbol` in `--ink`, `mana` 600 / `circle` 400, period `--forest`.

## 3. Typography

Fonts stay local. Add `src/app/fonts.ts`:

```ts
import localFont from "next/font/local";
export const studio = localFont({ src: "../../public/fonts/geist-latin.woff2", variable: "--font-studio", display: "swap", weight: "100 900" });
export const serif = localFont({ src: [
  { path: "../../public/fonts/InstrumentSerif-Regular.ttf", weight: "400", style: "normal" },
  { path: "../../public/fonts/InstrumentSerif-Italic.ttf", weight: "400", style: "italic" }],
  variable: "--font-serif", display: "swap", adjustFontFallback: "Times New Roman" });
```

Apply both variables on `<body>` in `layout.tsx`. Instrument Serif has only weight 400 and italic; never synthesise bold (`font-synthesis: none` on headings).

| Role | Font | Size | Line-height / tracking |
| --- | --- | --- | --- |
| Display (home h1) | Serif 400 | `clamp(40px, 5.6vw, 84px)` | .96 / -.015em |
| H1 (inner pages) | Serif 400 | `clamp(38px, 4.8vw, 68px)` | 1.0 / -.012em |
| H2 | Serif 400 | `clamp(32px, 3.6vw, 52px)` | 1.04 / -.01em |
| H3 | Serif 400 | `clamp(24px, 2.2vw, 32px)` | 1.1 / 0 |
| Pull quote / guide answer | Serif italic | `clamp(22px, 2vw, 26px)` | 1.35 |
| Lead paragraph | Geist 400 | `clamp(17px, 1.25vw, 19px)` | 1.6, `--moss` |
| Body | Geist 400 | 16px (17px ≥1100px) | 1.65 |
| Small / list | Geist 400 | 14px | 1.6 |
| Caption | Geist 400 | 12px | 1.5, `--moss` |
| Eyebrow (`.section-label`) | Geist 500 | 11px uppercase | .14em tracking, `--forest` |
| Section index numeral | Serif italic | 14px | sits before the eyebrow: "01 — What we do" |
| Nav | Geist 500 | 13px | .01em |
| Button | Geist 550 | 14px | .01em |
| Telugu line (`lang="te"`) | "Nirmala UI", "Noto Sans Telugu", sans-serif | 30px | 1.5, `--forest` |

The italic line convention: every h1 has one line set in italic `--forest` (home: "Made to connect."; services: "Content & marketing."; about: "One creative team."; contact: "you're building."; work: "Try the experience."; guides: "content or campaign."). That italic line is the only text that animates letter by letter.

Headings use `text-wrap: balance`; paragraphs `text-wrap: pretty`; measure 46–62ch.

## 4. Spacing, grid, rules, surfaces

- Container: `width: min(1240px, 100% - 2 * clamp(20px, 5vw, 72px))`. 12-column grid, 24px gap (16px below 760px).
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128. Section rhythm `--section: clamp(72px, 9vw, 128px)`. Heading to content 32px; eyebrow to heading 16px.
- Rules: `.hairline` 1px `--line`; `.ink-rule` 1px `--ink` at the start of every numbered section, drawn left to right on entry (Section 9). Catalogue rows (services, FAQs, deliverables) are separated by hairlines, never boxed.
- Radii: 2px on buttons, inputs and chips; 4px on image plates; 999px only for the 3px current-page dot. No large rounded cards.
- Plates: images sit on a `--cream` plate with a 1px `--line` frame and a 12px mat (16px on hero/services stage), shadow `0 1px 0 rgba(20,49,42,.06), 0 24px 48px -28px rgba(20,49,42,.22)`.
- Paper grain: `body::before` fixed full-viewport pseudo-element, `pointer-events:none`, background an inline SVG `feTurbulence` data URI (baseFrequency .9, 2 octaves, grayscale) at `opacity:.035`, enabled only at `min-width: 900px`. No blend mode (keeps scrolling cheap).
- Shadows direction always down-right, matching the 3D key light from top-left.

## 5. Header and footer

Header (`.site-header`, 84px desktop / 68px ≤900px), sticky, `background: color-mix(in srgb, var(--paper) 90%, transparent)`, `backdrop-filter: blur(12px)`, 1px `--gold-deep` hairline across the very top (replaces the 3px green bar), 1px `--line` below that becomes `rgba(20,49,42,.18)` after 24px of scroll via `animation-timeline: scroll(root)` (static `--line` where unsupported). Left: `BrandLockup`, symbol 34px, wordmark 26px. Right: Home, Services (with chevron toggle, 44px hit area), Our work, How it works, About us, then the CTA `Start your project ↗` as a 44px `--forest` button, 2px radius. Current page: a 3px `--gold` dot centred 6px under the link plus `aria-current` (already in `header.tsx`); hover draws a 1px ink underline. Services dropdown: paper panel with 1px ink top rule, three groups with serif 22px headings, Geist 13px links 44px tall, bottom row with "View all services". Mobile: 44px square toggle with 1px ink border; the panel is full-width paper with hairlines, serif group headings, CTA at the bottom. `header.tsx` logic stays; only classes/CSS change.

Footer (`Footer` in `shared.tsx`): `--forest-deep`, 1px `--gold-on-ink` rule at the top, lockup in cream with `--gold-on-ink` period, intro line "A clearer brand. A useful website. Content that connects." in serif italic 26px cream, four columns (Explore; What we do with all 10 services; Let's connect), links `--sage` 13px 36px tall, embossed 160px `BrandSymbol` at 8% cream in the bottom-right corner, bottom bar with ©, Privacy, "Global outlook. Telugu at heart." in serif italic, Back to top. Photo-credit row stays exactly as now (11px, `#BFCDC1`).

## 6. Homepage, section by section

Wrapper stays `div.home-page.studio-home`; the `home.css` import moves to the `pages` layer.

### 6.1 Hero (`section.home-hero`)
Grid 12 columns, `min-height: 640px`, `padding-block: 56px 72px`. Left, columns 1–7 (`.home-hero-copy`): eyebrow "Creative & digital studio · Working worldwide"; `h1#home-heading` as `<SerifReveal>`: line 1 "Branding & websites." (ink, rendered plain, never faded), line 2 `<span class="is-italic">Made to connect.</span>` (forest italic, letter reveal). Lead paragraph (max 46ch). Actions row (gap 24px): `.button` "Explore our services →" (54px, forest, cream text), `.text-link` "Start your project ↗" with the ink-draw underline. Note row: `BrandSymbol` 28px + "Eight people. Design, development and content in one team." 13px moss.

Right, columns 8–12 (`figure.hero-stage`): a 1:1 stage, 1px `--line` frame with a 16px mat of `--cream`, containing `<Stage id="hero" scene="eightfold">` (Section 8). The ceramic symbol overlaps the frame by about 6% on the right and top so it reads as an object on the page rather than an image in a box. `figcaption` below, two columns, 12px moss: left "Eightfold — the ManaCircle symbol, in ceramic", right "Illustrative rendering". The server-rendered poster carries `className="image-hero-photo"` (keeps the browser check) and stays in the DOM at opacity 0 after the canvas takes over.

Mobile (≤760px): single column, copy first, stage second at 86vw square, display 40px, caption stacked.

### 6.2 Catalogue index (`nav.home-service-strip`, aria-label "Service categories")
No longer a dark band. A hairline-bounded row 72px tall on paper: "01 Websites & apps", `BrandSymbol` 14px, "02 Brand & content", symbol, "03 Marketing & ads"; numerals serif italic 14px forest, labels Geist 15px ink; anchors `#build #create #grow` unchanged. Hover draws the underline. At ≤760px the three links wrap to a 2+1 layout, 44px targets.

### 6.3 What we do (`section#services.home-services`)
`.ink-rule` then heading row: left eyebrow "01 — What we do" and h2 "Find the right service for your business." (serif 52px max); right the supporting paragraph (lead size, moss). Then `.home-service-list`: three `article.home-service-row` rendered as catalogue plates separated by hairlines, each a grid `280px 1fr 1fr` (gap 40px): image plate (4:3, `TiltCard`, uses the existing `serviceGroups` images), summary (numeral "01" serif italic 14px forest, h3 serif 34px, description 15px moss), and `.home-service-links` with the family's service links as 52px hairline rows with `↗` icons (all ten links stay, so `.home-service-links a` still counts 10). Foot row: "Service illustrations are AI-generated." 12px moss left, "Compare all services →" right. ≤760px: image plate full width 3:2, then summary, then links.

### 6.4 Telugu (`section.home-telugu`)
Full-bleed `--parchment` band, `padding-block: var(--section)`. Grid 5/7: left the voice-bars stage (4:3, Section 8.3) with caption "Scripts, voiceovers and captions · Illustrative rendering"; right `Reveal.home-telugu-copy`: eyebrow "02 — Telugu comes naturally", h2 "Your audience. Their language." (second line italic forest, letter reveal), `p.home-telugu-native lang="te"` మీ కథ. మన భాష. at 30px forest, paragraph in `--ink-soft`, link "Explore Telugu content ↗". The microphone photo is retired here; its credit stays in the footer. ≤760px: copy first, stage second.

### 6.5 How it works (`section#how-it-works.home-process`)
`.ink-rule`; grid 5/7. Left: eyebrow "03 — How it works", h2 "A small team. A clear process.", paragraph, "Meet ManaCircle ↗". Right `.home-process-list`: the four native `<details name="project-process">` exactly as in `page.tsx` (first open; the `name` attribute keeps exactly one open). Summary 76px tall: numeral serif italic 14px forest, h3 serif 26px, plus icon rotating 45° when open. Open panel text 15px moss with a 1px `--forest` rule on its left edge that draws in 220ms. Hairlines between items.

### 6.6 Before you begin (`section.home-questions`)
Paper. Grid 5/7. Left: eyebrow "04 — Before you begin", h2 "A few useful answers.", paragraph, link "Read our project guides ↗" to `/guides` (test relies on this name). Right: `FAQ` with `homeFaq`, summaries 16px Geist 550, 64px tall, hairlines, answers 15px moss.

### 6.7 Contact banner (`ContactBanner`)
Parchment panel, 1px ink rule on top, padding 56px, two columns: "A brand, a website or your next campaign." 15px ink-soft, h2 serif 44px "Let's plan your project." ; right the forest button "Start your project ↗" and "Clear scope. Custom quotation." 12px. Decorative 120px `BrandSymbol` in `--gold` at 18% opacity top-right. No 3D.

### 6.8 Footer as in Section 5.

Section order is therefore: hero, catalogue index, what we do, Telugu, how it works, before you begin, contact banner, footer. No project previews on home.

## 7. Other routes

**/services (`services/page.tsx`)**: split page-intro (eyebrow "Our services", h1 with "Content & marketing." italic; paragraph right). The still-life stage, 2.4:1, full container width, with caption "Three families of work · Illustrative rendering". `nav.service-category-nav` as hairline index tabs ("01 Websites & apps" …) 48px tall, 2px radius, hover lifts the matching object. Catalogue: per `catalogue-family` an ink rule, serif family title 44px with description right; each article a hairline row `240px 1fr .8fr` with image plate (4:3, tilt), serif h2 30px + 15px description + "Explore this service ↗", and the first three deliverables as a numbered list (serif italic numerals). `.engagement` as parchment panel. `Process` as four hairline columns with serif italic numerals 40px in forest. `ContactBanner`.

**/services/[slug]**: breadcrumb 12px moss; `.service-hero` grid 6/6: eyebrow, serif h1 (service title), intro, `ButtonLink` "Discuss your project" (name preserved), factline 12px; right the AI illustration on a plate with 16px mat and caption (kept from `serviceImages`), `TiltCard`. `dl.service-at-a-glance` as a three-column hairline table (dt serif italic 18px, dd 15px). `.service-fit` two columns. Deliverables as numbered hairline list (01–05). `.scope-panel` parchment, two columns. Applications as three columns with numerals instead of icons. FAQ native. `.service-reading` parchment strip. Related services as 2px-radius hairline chips. No WebGL on detail pages.

**/work**: page-intro with "Try the experience." italic; `.portfolio-browse-bar` hairline; grid two columns; `.portfolio-window` becomes a plate with 1px ink frame and 8px mat, `TiltCard`; the Voice Agent cover uses `--forest-deep` with serif cream title and `--gold-on-ink` wave bars. Pagination buttons are 44px hairline squares with the existing aria names. Concept pages keep `concept-art.tsx` but their `Georgia` declarations switch to `var(--font-serif)`.

**/work/[slug]**: `portfolio-detail-heading` serif h1 `clamp(42px,5vw,72px)`; figure as plate with ink frame; body two columns; features as numbered hairline list; `Discuss a similar project` secondary button (transparent, 1px ink border).

**/about**: split-intro with the pebbles stage in the right column (6:5) next to "Eight people. One creative team." (second line italic). `.about-lead`: story + `StudioPhoto` plate with its credit. `.values-grid`: three hairline columns, serif italic numerals, serif h2 28px, no cards. `.about-scope` parchment. `ContactBanner`.

**/contact**: split-intro ("you're building." italic). `.contact-aside` parchment panel: serif h2 32px, numbered steps, direct links, location line. `.contact-form` cream surface, 1px `--line` border, 2px radius, 40px padding; inputs 48px, 1px `--line-ui`, focus ring forest; labels 13px Geist 550; `.form-notice` parchment with gold-deep left rule; `.form-error-summary` with 2px error left rule; all ids/classes unchanged so validation and download tests pass. No 3D.

**/guides**: page-intro; `.guide-grid` three hairline-top entries (`.guide-card` class kept, five cards): category eyebrow, serif h3 28px, description, "Read the guide ↗". **/guides/[slug]**: sticky `.guide-toc` hairline list (desktop), `.guide-answer` as parchment pull quote in serif italic 24px, serif h2 34px, body 17px/1.85, `.guide-example` with 1px gold-deep left rule.

**/privacy**: prose at 62ch, serif h2. **/thank-you**: `.simple-page` with serif h1 and button. **404**: 320px lost-bar stage centred above "Let's get you back in the circle." (h1 keeps the word circle) with both buttons. **error.tsx**: static `BrandSymbol` 48px, serif h1, "Try again" button; no 3D.

## 8. 3D system

### 8.1 Mounting and the single-canvas rule
`src/components/three/stage.tsx` (client) renders the poster `figure` (SSR, `next/image`, `alt=""`) and, after mount, decides whether to enhance: `matchMedia('(prefers-reduced-motion: no-preference)')`, `(min-width: 760px)`, `(pointer: fine)`, `navigator.deviceMemory` undefined or ≥4, `navigator.connection?.saveData !== true`, WebGL2 context creatable. If yes it asks `use-single-canvas.ts` (module-level store) for the slot: each stage registers an `IntersectionObserver` with `rootMargin: '25% 0px'`; the intersecting stage nearest the viewport centre owns the slot; losing stages unmount their canvas and show the poster. The scene chunk is `dynamic(() => import('./scene-root'), { ssr: false })` inside this client component (Next 16 requires `ssr:false` in client components) and the import is scheduled with `requestIdleCallback` (1200ms timeout fallback). A tiny class `StageErrorBoundary` and a `webglcontextlost` listener restore the poster. `frameloop` is `'always'` only while intersecting and `document.visibilityState === 'visible'`, otherwise `'never'`.

Canvas props: `dpr={[1, 1.5]}`, `gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}`, `onCreated={({ gl }) => { gl.transmissionResolutionScale = .5; gl.toneMapping = ACESFilmicToneMapping; gl.toneMappingExposure = 1.05; }}`, `eventSource` set to the surrounding section so pointer parallax works over the whole hero, `<AdaptiveDpr />`, `<PerformanceMonitor onDecline={() => setLite(true)} />`.

### 8.2 Daylight rig (`daylight.tsx`) and materials (`ceramic-materials.ts`)
`<Environment resolution={64} frames={1}>` with `<Lightformer form="rect" scale={[4,3,1]} position={[-3,3.5,2.5]} target={[0,0,0]} color="#FFF4E0" intensity={3.2} />` (north window), `<Lightformer form="rect" scale={[3,3,1]} position={[3.5,1.5,1]} color="#E6EEE8" intensity={1.4} />` (sage fill), `<Lightformer form="ring" scale={1.5} position={[0,-2.5,3]} color="#F2E3BE" intensity={.9} />` (warm bounce from the paper), plus `<ambientLight intensity={.25} />`. `<ContactShadows opacity={.34} scale={5} blur={2.8} far={2.2} resolution={256} color="#2E463C" frames={lite ? 1 : Infinity} />`. Materials: `ceramicCream` MeshPhysicalMaterial color #EFE8DA, roughness .62, clearcoat .35, clearcoatRoughness .55, sheen .3, sheenColor #FFF6E6; `ceramicSage` same with #D7DFD2; `goldGlaze` #C9A961 metalness .6 roughness .35 clearcoat .4; `frostedGlass` color #E8EEE4 transmission .92 roughness .48 thickness .6 ior 1.45 attenuationColor #DDE4D8 attenuationDistance 2.2 (lite: MeshStandardMaterial #E3EAE0 transparent opacity .55 roughness .6). No textures, no post-processing.

### 8.3 The five moments
1. **Ceramic Eightfold (home hero)**: eight `RoundedBox args={[.25,.62,.25]} radius={.115} smoothness={3}` at radius .72, rotated i×45° about z, 0.35 in front of a frosted disc (Cylinder 1.25 × .08, 72 segments) tilted back 12° with a gold torus rim (1.25, .012, 12, 96). Camera [0, 1.1, 5.2] looking at [0, .1, 0], fov 28. `Float speed={1.1} rotationIntensity={.25} floatIntensity={.45} floatingRange={[-.06,.06]}`; pointer parallax rotation.y → pointer.x × .14 rad, rotation.x → −pointer.y × .08 rad via `MathUtils.damp(…, 4, delta)`; idle z rotation 2π/90s. Entrance 480ms opacity and scale .96→1. Poster `public/images/3d/eightfold-ceramic-1200.webp` (+720). About 12k triangles.
2. **Voice bars (home Telugu)**: five upright `RoundedBox` .26 wide, heights .5/.9/1.3/.8/.6, spacing .42, alternating cream and sage ceramic, on a frosted slab 2.2×.12×1.0 over a gold plate 2.3×.01×1.08. Camera [.6, 1.3, 4.4] → [0, .45, 0], fov 26. Bars scale.y ±8% with `sin(t*.9 + i*.8)` pivoting at the base; nearest bar to pointer x rises +6%. Poster `voice-bars-1200.webp` (1200×900).
3. **Three objects, one shelf (/services)**: ceramic tablet 1.1×.75×.08 leaning 8° with recessed sage screen; seal disc r .48 with the Eightfold embossed as eight .03-high miniature bars; upright torus (.45, .12) with a gold sphere r .06 inside; frosted shelf 3.6×.08×1.1. Camera [0, 1.2, 5.6], fov 26. Chip hover/focus lifts its object .08. Poster `services-still-life-1600.webp` (1600×680). About 20k triangles.
4. **Eight pebbles (/about)**: eight `Icosahedron detail 3` pebbles scaled about [1,.78,.9] ±8%, radii .26–.34, six cream and two sage, ring radius .95 on a frosted disc r 1.4 with inset gold hairline ring. Camera [0, 2.6, 4.2] → origin, fov 28. Breathe ±2%, ring 2π/120s, pointer repulsion ≤ .05. Poster `eight-pebbles-1200.webp`.
5. **One bar out of place (404)**: the hero component with `displaced` moving bar 5 outward .35 and rotating 22°, drifting, never snapping in. 320px stage, ContactShadows 128. Poster `lost-bar-800.webp`.

Posters are produced once by a dev-only capture (`preserveDrawingBuffer: true` in a local capture page under `NODE_ENV !== 'production'`, exported with `canvas.toBlob`), converted to WebP, and committed. Every poster is captured with the identical camera, so composition is unchanged when WebGL is absent.

### 8.4 Mobile and reduced motion
Below 760px, coarse pointers, low memory, save-data, reduced motion and no-JS all get the poster inside the same frame and mat. Nothing else changes in layout, so there is no CLS between poster and canvas.

## 9. Motion system

Tokens: `--ease-out: cubic-bezier(.2,.7,.2,1)`, `--ease-in-out: cubic-bezier(.65,0,.35,1)`, `--dur-1: 160ms` (hover), `--dur-2: 260ms` (underline, icons), `--dur-3: 480ms` (entrances), `--dur-4: 900ms` (rule draws).

- **Letter reveal** (`serif-reveal.tsx`, server component): splits the italic line into `<span aria-hidden="true" style="--i: n">` letters inside a wrapper with the full text in an `sr-only` span (so no-JS, screen readers and SEO read whole words). CSS: `translateY(.35em) → 0`, opacity 0→1, 520ms `--ease-out`, delay `calc(150ms + var(--i) * 22ms)`. Only the italic line animates; line one and the poster paint immediately so LCP is unaffected.
- **Ink line draws** (`ink-rule.tsx`): `transform: scaleX(0)→1`, origin left, 900ms, using `animation-timeline: view(); animation-range: entry 10% entry 60%` under `@supports (animation-timeline: view())`, else the existing `Reveal` IntersectionObserver adds `.is-in`. Process open-panel left rule draws 220ms.
- **Gentle parallax**: hero stage drifts −28px and hero copy −10px over the first 60vh with `animation-timeline: scroll(root)`; 3D pointer parallax as above. Maximum translation anywhere is 28px.
- **Entrances**: `Reveal` (kept, WAAPI 500ms) on service rows, Telugu copy, plates; stagger 60ms between rows. Canvas crossfade 480ms.
- **Hover**: buttons forest→forest-deep 160ms; arrows translate 2px −2px; links draw a 1px ink underline via `background-size 0→100%` 260ms; `TiltCard` (`tilt-card.tsx`, client) perspective 1200px, max 3.5° rotation, shadow shifts, pointer:fine only; guide cards lift 4px.
- **Disclosures**: plus icon rotates 45° 220ms; `::details-content` height transition with `interpolate-size: allow-keywords` where supported.
- **Page transitions**: `layout.tsx` wraps `{children}` in `<ViewTransition default="mc-page">` and the header in `<ViewTransition name="mc-header">` (works in Next 16 with no config). CSS: `::view-transition-old(.mc-page) { animation: 180ms ease-in both mc-fade-out }`, `::view-transition-new(.mc-page) { animation: 320ms var(--ease-out) both mc-rise-in }` (opacity + 10px rise).
- **Reduced motion**: `@media (prefers-reduced-motion: reduce)` sets all optional animations and transitions to none, disables tilt and parallax, disables view-transition animations, and the stage never mounts WebGL. Native focus, hover colour changes and details toggling remain.

No scroll hijacking, no autoplay audio, no looping decoration other than the slow 3D idle, which exists only when motion is allowed.

## 10. Component inventory and CSS architecture

New or changed files:
- `src/app/fonts.ts` — Geist + Instrument Serif via `next/font/local`.
- `src/app/layout.tsx` — body classes for both fonts, `ViewTransition` wrappers, imports `globals.css`, `header.css`, `home.css` only where needed.
- `src/app/globals.css` — single layer order `@layer reset, tokens, base, components, pages, motion, responsive;` tokens from Section 2, base typography, components (buttons, links, rules, plates, header, footer, dropdown, forms, FAQ, catalogue rows). `studio.css`, `refinement.css`, `photography.css` are dissolved into it; `header.css` moves into `components`; `home.css` and `portfolio.css` into `pages`; new `src/app/motion.css` into `motion`; new `src/app/three.css` (stage frame, mat, poster/canvas crossfade) into `components`. No unlayered CSS remains.
- `src/components/serif-reveal.tsx`, `src/components/ink-rule.tsx` (server), `src/components/tilt-card.tsx` (client), `src/components/reveal.tsx` (kept).
- `src/components/three/stage.tsx`, `use-single-canvas.ts`, `scene-root.tsx` (Canvas + rig + scene switch), `daylight.tsx`, `ceramic-materials.ts`, `eightfold-ceramic.tsx`, `voice-bars.tsx`, `service-still-life.tsx`, `eight-pebbles.tsx`, `stage-error-boundary.tsx`.
- `src/components/shared.tsx` — `SectionLabel` gains an optional `index` prop ("01"); `ContactBanner`, `Footer`, `Process` restyled.
- `src/app/page.tsx` — `BrandScene` replaced by `<Stage id="hero" scene="eightfold" poster=… />`; section markup otherwise as Section 6.
- `src/app/services/page.tsx`, `about/page.tsx`, `not-found.tsx` — add their stages.
- `public/images/3d/*.webp` — five posters (two sizes for the hero).
- `tests/browser-checks.cjs` — unchanged; class names are preserved.

## 11. Performance plan

- Initial JS for `/` stays free of three.js: the only client code in the first chunk is `header.tsx`, `reveal.tsx`, `tilt-card.tsx` and the `stage.tsx` shell. The three/R3F/drei chunk (about 190–230KB gzip) loads after `requestIdleCallback`, only when a stage is intersecting and the device passes the checks.
- LCP candidates are the h1 (fonts preloaded by `next/font`) and the hero poster (`priority`, `sizes="(max-width: 760px) 86vw, 40vw"`, ~45KB WebP). Target LCP ≤ 2.0s desktop, ≤ 2.6s mobile (poster only); CLS ≤ .02 (fixed aspect-ratio stages, posters with dimensions); TBT ≤ 150ms.
- GPU: dpr [1, 1.5], one canvas per route, `transmissionResolutionScale .5`, environment 64px rendered once, ContactShadows 256 (128 on 404), geometry under 30k triangles per scene, no textures, `powerPreference: 'low-power'`, loop paused offscreen and when the tab is hidden, `AdaptiveDpr` plus `PerformanceMonitor` demoting to lite glass and baked shadows.
- Paper grain only ≥900px, no blend mode; backdrop blur only on the header.
- Verify with the `lighthouse-audit` skill (mobile and desktop) and the existing `tests/browser-checks.cjs`; record results in `docs/REWORK-VALIDATION.md`.

## 12. Accessibility and test compatibility

All content is server HTML; stages are `figure` elements with real captions and decorative posters (`alt=""`), canvases `aria-hidden="true"`. Letter spans are `aria-hidden` with an `sr-only` full line. Contrast pairs in Section 2 all meet AA; gold never appears as text on light surfaces. Focus rings 2px forest with 3px offset (cream on dark). Every control is ≥44px: nav links, chips, pagination, summary rows, menu toggle. Keyboard: the services chips lift objects on focus too; details and FAQs are native. No horizontal overflow: objects overlap only their inner mat, never the container; posters are `object-fit: cover`. Preserved behaviours: `.image-hero-photo` visible (poster stays in DOM), ten `.home-service-links a`, no `/work/` links on home, exactly one open `details` in `.home-process-list`, "Read our project guides" link, five `.guide-card`, `.portfolio-section`/`.portfolio-card` pagination, `.service-hero` "Discuss your project" link, contact form ids and `.form-error-summary`, 404 h1 containing "circle".

## 13. Risks and mitigations

See the structured `risks` list: plainness (catalogue system, overlaps, grain), sticker-3D (shared rig, shadows on paper, matched posters), transmission cost (lite mode), canvas exclusivity (manager), LCP (line one never fades, idle import), serif FOUT (adjustFontFallback), CSS cascade (one layer order), Chromium-first CSS (fallbacks), posters must exist, Telugu fallback font.

## 14. Implementation order

1. Fonts, tokens and the layer consolidation (the whole site re-skins at this step). 2. Header, footer, buttons, rules, plates, catalogue rows. 3. Homepage sections with `SerifReveal`, `InkRule`, `TiltCard`. 4. `Stage` shell with posters as placeholders (capture real posters once scenes exist). 5. Daylight rig and the hero scene; then voice bars, still life, pebbles, lost bar. 6. Motion layer and view transitions. 7. Inner routes. 8. Browser checks, axe, Lighthouse, reduced-motion and no-JS passes.