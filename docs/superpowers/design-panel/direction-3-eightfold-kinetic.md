# Eightfold Kinetic

Mana logo lo unna eight bars ye site hero avuthayi: forest-green glazed 3D bars oka row (eight people) nunchi manacircle mark ga assemble ayyi, cursor ki tilt, scroll ki unfold avuthayi — deep forest, warm cream, charcoal ink, konchem gold glint, Geist big type + Instrument Serif italic accents, anni 3D moments progressive enhancement tho, simple and classic finish.

Signature: The hero: eight glazed forest-ceramic bars rest in a quiet row ("eight people"), then roll and rise into the Eightfold mark catching a single gold glint; it tilts a few degrees toward the cursor, and as you scroll it unfolds back into a row — and the same eight bars return later as the Process Dial, lighting up two bars per step.

## Palette
- --cream: #F4F1E8 — Page background (light tone). Replaces #f8faf5; warmer, richer paper feel.
- --paper: #FBF9F3 — Cards, rail panels, form surface, hero spotlight centre.
- --sage-100: #E9EFE2 — Sage band backgrounds (FAQ, contact aside, family-stage insets).
- --sage-200: #D8E3D0 — Hairlines on light, rail progress track, secondary text on forest-900 (11.5:1).
- --forest-500: #2F6749 — Brand green: wordmark period, eyebrows on cream (5.9:1), serif accent words, focus ring, links hover.
- --forest-700: #173D2E — Primary button fill, contact banner, service-fit panel, guide answer callout. Cream text on it = 10.6:1.
- --forest-900: #0F2A21 — Telugu block and footer background (dark tone). Cream text 15:1, gold text 8:1.
- --ink: #15231E — Charcoal-forest headline and body text on cream/paper (15:1).
- --muted: #566359 — Secondary text on cream/paper (5.6:1, holds AA under the 3.5% grain).
- --muted-dark: #B9C7B6 — Secondary text on forest-900/700 (8.7:1).
- --gold: #C9A961 — 3D glint (sheen/lightformer), hairlines on dark blocks, eyebrow labels on dark (#D6B875 variant, 8:1). Never body text on cream.
- --gold-soft: #D6B875 — Eyebrow text and focus ring on dark blocks; existing brand gold retained.
- --line: #D9E0D3 — Borders and dividers on light tones.
- --line-dark: #2E4C40 — Borders and dividers on dark tones.
- --error: #B42318 — Form errors (5.8:1 on cream).

## 3D moments
- Home hero, right stage (cols 7–12 desktop; 280px square centred on mobile) — figure.hero-stage: The Eightfold in 3D: eight capsules (CapsuleGeometry radius 0.25, length 1.25, capSegments 4, radialSegments 12), centres 1.125 units from origin at 45° steps, exactly the 6×15 rx3 proportions of brand.tsx | forestGlaze MeshPhysicalMaterial (#2A5F45, roughness .38, clearcoat 1, clearcoatRoughness .12, sheen .25 sheenColor #C9A961). Procedural drei Environment frames=1 resolution=128 with Lightformers: soft cream rect key, small gold ring glint, sage fill from below; hemisphere + one directional, no shadow maps. Camera fov 32 at [0,.6,7.5]. | Load: bars start as a horizontal row (x=(i−3.5)·0.62) and assemble into the radial mark, 1100ms each, 55ms stagger, cubic-bezier(.22,1,.36,1). Cursor (fine pointer only): group tilts ±8°, bars within 0.9 units are pushed outward up to 0.22 units (spring back). Scroll: hero progress 0→0.7 unfolds the mark back into the row and scales the group to 0.85 — scroll-linked, never hijacked. Paused when offscreen or tab hidden. | fallback: Server-rendered inline SVG Eightfold (same geometry) with a glaze gradient (#3A7A58→#1E4D3B), a 40%-width cream highlight rect per bar at 18% opacity, feDropShadow (dy 12, blur 14, #0F2A21 22%), on a paper radial spotlight. Non-reduced-motion no-WebGL: one-time CSS assembly via @property --t (1200ms). Reduced motion or low-end device: static assembled pose. Mobile: lighter scene (dpr 1, MeshStandardMaterial, env 64, no pointer) or this fallback when deviceMemory<4 / saveData.
- Home service rail — figure.family-stage inside each of the three article.home-service-row panels (WebGL only ≥900px with hover:hover): Three family objects: Slab (RoundedBox 1.6×1.1×0.08 r.06 + floating phone slab 0.5×1.0×0.06) for Websites & apps; Seal (cylinder r.75 h.18, 48 seg, with eight 0.02-deep capsule embossings on its face) for Brand & content; Signal (three tori r .45/.75/1.05, tube .05, 12×48 seg, tilted 18°) for Marketing & ads | creamCeramic (#F1EDE1, roughness .45, clearcoat .6) for slabs and outer ring; forestGlaze for the Seal and middle ring; brushedGold (#C9A961, metalness .9, roughness .32) only for the Seal's centre pin and the inner torus. Same shared Environment; rendered as drei <View>s into one fixed canvas. | Idle Float (speed 1.2, rotationIntensity .25, floatIntensity .4; amplitude ≤0.08 units). Pointer over the panel tilts the object ≤12° toward the cursor; keyboard focus-within lifts it 0.1 units (parity). Rail horizontal scroll progress adds rotation.y up to 0.4 rad. Signal rings rotate at ≤0.6 rpm. | fallback: Three 2-tone isometric SVG illustrations of the same objects (cream fill, forest shading, 1px sage outline, gold pin) rendered in server HTML; shown on mobile, touch, no-WebGL and reduced motion. Panel layout identical either way.
- /services index — the 260px square at the start of each section.catalogue-family header (one canvas, three Views): The same Slab / Seal / Signal objects reused from the home rail (shared module src/components/three/family-objects.tsx) | Identical materials and Environment; camera fov 28 at [0,.4,5] | Idle Float only; object turns 15° toward the pointer when hovering the family header; scroll-spy nav highlight is DOM-only | fallback: Same isometric SVGs; mobile always uses SVG
- /about — right column of section.about-lead (replaces the photo position; StudioPhoto moves down to about-scope): Circle of Eight: eight capsules standing upright (length 1.4, radius .22) on a 2.2-radius circle, like a stone circle — literally a 'mana circle' for 'Eight people. One creative team.' | forestGlaze bars; floor shadow is a DOM radial-gradient ellipse under the canvas (no shadow passes); camera fov 30 at [0,1.6,7.2] looking slightly down; same Environment | Entrance: bars rise from y−1.6 to 0 in sequence (80ms stagger, 900ms) when the section enters view. Pointer x rotates the circle ±20° (spring); scroll inside the section adds a slow 0→30° turn. Keyboard focus on the adjacent 'Explore our work' button lifts the whole circle 0.08 units. | fallback: Static isometric SVG of eight standing bars with the gradient glaze and a soft ellipse shadow; used on mobile, reduced motion and no-WebGL
- Home process section — the Process Dial inside the sticky left column of section.home-process (CSS 3D, no WebGL): The Eightfold as eight CSS bars in perspective(900px) rotateX(58deg); 220px wide desktop, 160px mobile (not sticky on mobile) | CSS only: lit bars use the glaze gradient + inset highlight + box-shadow 0 10px 18px #0F2A2130; unlit bars are 1px sage-200 outlines on transparent | Listens to native toggle events on .home-process-list details (name=project-process keeps one open). Step n lights bars 2n−1 and 2n and rotates the dial 45°·(n−1), transition 520ms cubic-bezier(.22,1,.36,1). Fully keyboard operable because it is driven by the native disclosures. | fallback: Without JS the dial shows step 1 (first details open). Reduced motion: state changes instantly, no rotation transition.
- CSS-3D tilt cards: service detail figure.service-visual, /work .portfolio-visual-link, guide-card, values-grid article, related-services chips: Existing content (AI illustration with its 'AI-generated' caption, portfolio browser windows, cards) wrapped in TiltCard | perspective 1400px; max tilt 5° (service visual) / 4° (cards); a ::after sheen (linear-gradient 115deg, white 0→14%→0) follows --mx/--my; shadow deepens from 0 8px 18px #0F2A2114 to 0 24px 48px #0F2A2122 | Pointer-tracked custom properties --rx/--ry/--mx/--my set by a 1.2KB useTilt hook, only under (hover:hover) and (pointer:fine); focus-visible applies the lifted shadow state without tilt | fallback: Flat card with the resting shadow; reduced motion disables tilt and sheen
- 404 and error pages — the Eightfold above the headline 'Let’s get you back in the circle.': Inline SVG Eightfold with bar 3 rotated 20° out of place | Glaze gradient fill, one displaced bar at 70% opacity | Hovering or focusing the 'Back to home' button snaps the bar back into place (360ms) — purely decorative, aria-hidden | fallback: Static displaced bar

## Risks
- WebGL bundle weight (three + r3f + drei) — mitigate with ssr:false dynamic import from a client wrapper, deep imports from @react-three/drei/core/*, loading only after hydration and only on routes that mount SceneHost (home, services, about), and a measured budget of ≤220KB gz for the 3D chunk.
- Fixed-canvas + drei <View> scissor rendering can flicker on Safari and complicates z-indexing — mitigate by keeping the canvas pointer-events:none behind text layers, reading the pointer from DOM stage elements not the canvas, and keeping a per-route switch to fall back to a single hero-only canvas if Views misbehave in QA.
- Horizontal service rail may hide the third family from users who do not scroll sideways — mitigate with a visible peek of the next panel, prev/next buttons, a 01—03 counter and progress bar, keyboard focus auto-scrolling, and the services strip of ten links remaining in the footer and services dropdown.
- tests/browser-checks.cjs asserts .image-hero-photo on the homepage, which the new hero no longer has — update that assertion to .hero-stage visibility and .home-telugu-photo img load in the same change; all other tested selectors (.home-service-links a ×10, .home-process-list details[open] ×1, 'Read our project guides', .guide-card ×5, portfolio pagination names, contact form ids) are preserved by design.
- CSS scroll-driven animations (animation-timeline) are not in Firefox stable — every scroll-linked CSS effect is wrapped in @supports and degrades to a static state; nothing functional depends on it.
- Instrument Serif ships only as TTF (no woff2) — load both faces via next/font/local with display:swap and limit it to accent words and numerals so a late swap never reflows body copy.
- Grain overlay slightly lowers effective contrast — tokens were chosen with margin (muted 5.6:1, forest-500 5.9:1) and the grain is capped at 3.5% multiply; verify with axe at 1440 and 390.
- GPU heat and battery on laptops/phones — frameloop runs only while a View intersects and the tab is visible, dpr capped at 1.5 (1 on mobile), PerformanceMonitor drops dpr to 1 under 50fps, no shadow maps, no transmission, no post-processing.
- Motion sickness and usability — tilt ≤8° hero / ≤5° cards, parallax ≤24px, idle float ≤0.08 units, no infinite spin above 0.6 rpm, no scroll hijacking, native cursor never hidden; all optional motion off under prefers-reduced-motion and the WebGL pose is static.
- Owner's 'simple and classic' finish can be lost by stacking too many effects — the spec limits each section to one kinetic idea and keeps copy, spacing and typography restrained; the design-review step should remove anything that reads as a gimmick.

---

# Direction C — "Eightfold Kinetic"

## 0. Owner summary (Tinglish)

Mouli, idhi **Eightfold Kinetic** direction. Mana logo lo unna **eight bars ye site motham ki hero**. Hero lo aa eight bars oka row la start ayyi (eight people), forest-green glazed ceramic 3D lo assemble ayyi manacircle mark ga form avuthayi; cursor move chesthe konchem tilt, scroll chesthe malli bars ga unfold avuthayi. Services oka horizontal rail lo 3 families, prathi family ki oka 3D object (slab, seal, signal). Process section lo same eight bars "dial" la step by step light avuthayi. Colours: deep forest, warm cream, charcoal ink, konchem gold glint. Fonts: Geist pedda ga confident ga, Instrument Serif italic accent words ki. Antha 3D progressive enhancement — JS lekapoyina, reduced motion lo kuda site full ga readable and premium ga untundi. Content (services, FAQs, process, Telugu section) anta same; presentation matrame marutundi.

## 1. Concept

The Eightfold symbol is already a kinetic idea: eight identical rounded bars sharing one centre. This direction treats the mark as a physical object and as the site's rhythm. Eight glazed forest-ceramic bars appear in the hero, assemble into the mark, react to the cursor, unfold on scroll, and return in the process section as a dial that lights two bars per step (4 steps × 2 bars = 8). Everything else is disciplined: large Geist headlines with one Instrument Serif italic accent per heading, three colour blocks (cream, sage, deep forest), a 3.5% paper grain, generous space, hairlines instead of boxes. Reference feel: Locomotive/Resn energy delivered with Aesop/Linear restraint.

Rules that keep it classic: one kinetic idea per section; motion is scroll-linked or pointer-linked, never time-looped in the DOM (only the WebGL idle floats, and it pauses offscreen); nothing hijacks scroll; the native cursor stays; every 3D moment has a server-rendered fallback that looks finished on its own.

## 2. Palette tokens (CSS custom properties in `@layer base :root`)

| Token | Hex | Use | Contrast pairs (checked) |
| --- | --- | --- | --- |
| `--cream` | #F4F1E8 | page background (light tone) | ink 15:1, muted 5.6:1, forest-500 5.9:1 |
| `--paper` | #FBF9F3 | cards, rail panels, form | same or better than cream |
| `--sage-100` | #E9EFE2 | sage band (FAQ, contact aside, stage insets) | ink 13.9:1, muted 5.2:1 (use ink for small text here) |
| `--sage-200` | #D8E3D0 | hairlines on light; secondary text on forest-900 | on forest-900 11.5:1 |
| `--forest-500` | #2F6749 | brand green: period, eyebrows, accent words, focus ring | on cream 5.9:1 |
| `--forest-700` | #173D2E | primary button, banner, fit panel, callouts | cream text 10.6:1 |
| `--forest-900` | #0F2A21 | Telugu block, footer (dark tone) | cream 15:1, gold-soft 8:1, muted-dark 8.7:1 |
| `--ink` | #15231E | headlines + body on light | 15:1 on cream |
| `--muted` | #566359 | secondary text on light | 5.6:1 on cream |
| `--muted-dark` | #B9C7B6 | secondary text on dark | 8.7:1 on forest-900 |
| `--gold` | #C9A961 | 3D glint, hairlines on dark | decorative only on light |
| `--gold-soft` | #D6B875 | eyebrows + focus ring on dark blocks | 8:1 on forest-900 |
| `--line` / `--line-dark` | #D9E0D3 / #2E4C40 | dividers | decorative |
| `--error` | #B42318 | form errors | 5.8:1 on cream |

Tone attributes: `data-tone="cream" | "sage" | "forest"` on sections swap `--bg`, `--fg`, `--fg-muted`, `--hairline`, `--focus` so components are written once. Focus: `outline: 3px solid var(--focus); outline-offset: 3px;` with `--focus` = forest-500 on light, gold-soft on dark. Selection: `#D8E3D0` / ink.

Grain: `body::after { position: fixed; inset: 0; pointer-events: none; z-index: 60; opacity: .035; mix-blend-mode: multiply; background-image: url("data:image/svg+xml,...feTurbulence baseFrequency=.9 numOctaves=2..."); background-size: 180px; }` — hidden under `forced-colors: active`.

## 3. Typography

Fonts stay local. `layout.tsx` adds `localFont({ src: [{ path: "../../public/fonts/InstrumentSerif-Regular.ttf", style: "normal" }, { path: "../../public/fonts/InstrumentSerif-Italic.ttf", style: "italic" }], variable: "--font-accent", display: "swap" })` alongside the existing Geist `--font-studio`.

| Role | Face | Size | Line / tracking / weight |
| --- | --- | --- | --- |
| Display (home h1) | Geist | `clamp(48px, 7.2vw, 112px)` | 0.98 / −0.04em / 560 |
| Page h1 | Geist | `clamp(42px, 5.6vw, 84px)` | 1.0 / −0.035em / 540 |
| h2 | Geist | `clamp(34px, 3.8vw, 60px)` | 1.04 / −0.03em / 540 |
| h3 | Geist | `clamp(22px, 1.9vw, 30px)` | 1.15 / −0.02em / 540 |
| Lead | Geist | `clamp(17px, 1.3vw, 20px)` | 1.6 / 0 / 400 |
| Body | Geist | 16px | 1.65 / 0 / 400 |
| Small / meta | Geist | 14px / 12px | 1.5; eyebrows uppercase, .12em, 560 |
| Accent word | Instrument Serif Italic | 1.08× parent | weight 400, −0.01em, colour forest-500 on light / gold-soft on dark |
| Numerals ("01") | Instrument Serif Regular | `clamp(64px, 8vw, 140px)` | 0.9, colour sage-200 on light, line-dark on dark |

Accent rule: exactly one italic phrase per heading, always the last line or final two words, marked up as `<em class="accent">` (no new component). Examples: "Branding & websites. / Made to *connect.*", "Your audience. / *Their language.*", "A small team. / *A clear process.*", "A few useful / *answers.*", "Eight people. / *One creative team.*", "Tell us what / *you're building.*". Telugu line keeps `lang="te"` and the system Telugu fallback (`"Nirmala UI", "Noto Sans Telugu", sans-serif`) at `clamp(26px, 2.4vw, 34px)`, line 1.5.

## 4. Spacing, grid, surfaces

- Container: `width: min(1360px, 100% - 2 * clamp(16px, 5vw, 72px))` (16px gutters at 320/390; the tests' no-overflow checks at 320/390/768/1024/1440 stay green because every full-bleed block uses `width: 100%` and inner containers, never negative margins).
- 12-column grid, `gap: clamp(16px, 2vw, 32px)`.
- Vertical rhythm: `--space-section: clamp(72px, 10vw, 160px)`, `--space-block: clamp(40px, 5vw, 72px)`, `--space-stack: 24px`.
- Radii: 8px buttons/inputs, 14px cards, 20px rail panels/figures, 24px banner. Hairlines 1px.
- Shadows (light tone only): rest `0 8px 18px #0F2A2114`, lifted `0 24px 48px #0F2A2122`. Dark tones use no shadows.
- Section numerals sit top-left of each home section, parallax ±24px via `animation-timeline: view()` inside `@supports`.

## 5. Header and footer

**Header** (`src/components/header.tsx` logic unchanged — Escape, outside close, focus return, mobile menu are all tested; restyle only). Height 80px desktop / 68px mobile, `position: sticky; top: 0; z-index: 40`. On `/` the header starts transparent over the cream hero; a 1px sentinel at the top of `<main>` observed by a tiny client hook toggles `data-scrolled` on the header, which fades in `background: color-mix(in srgb, var(--cream) 86%, transparent)`, `backdrop-filter: blur(14px)` and a hairline (220ms). Other routes start in the scrolled state. Nav: Geist 14px/560, 24px gaps, current page underlined with a 1px forest-500 rule 6px below. Services dropdown keeps its three-column grid; each family heading gets a 24px two-tone SVG badge of its object (Slab/Seal/Signal). CTA "Start your project" is the magnetic primary button (section 11). Logo: `BrandLockup` unchanged (symbol 36px, wordmark 26px desktop / 22px mobile). Mobile menu: full-width cream panel below the header, 16px links at 48px rows, services as a native `<details>`-like expanded group (existing markup).

**Footer** (`Footer` in `shared.tsx`, structure preserved including all ten service links and photo credits). Forest-900 block with grain, 96px top padding. Four columns as today, column headings 12px uppercase sage-200, links 14px cream at 40px rows. Right edge: a 420px outlined Eightfold (1px sage-200 at 28%) whose eight bars rotate from 0° to their 45° positions as the footer enters view (`animation-timeline: view(); animation-range: entry 0% entry 100%`; static when unsupported). Bottom row: "© year ManaCircle.", Privacy policy, "Global outlook. *Telugu at heart.*" in serif italic gold-soft, Back to top. Photo credits remain, 11px muted-dark.

## 6. Homepage — exact composition (`src/app/page.tsx`)

Order: Hero → Services rail → Telugu → Process (pinned) → Useful answers (FAQ) → Contact banner → Footer. The old `.home-service-strip` dark band is removed (its anchors `#build #create #grow` move to the rail panels). No `/work/` links anywhere in `<main>`.

### 6.1 Hero — `section.home-hero[data-tone=cream]`
- `min-height: min(calc(100svh - 80px), 860px)`, padding-block `clamp(40px, 6vw, 96px)`. Behind the stage a paper radial spotlight (`radial-gradient(60% 60% at 70% 45%, var(--paper), transparent)`).
- Grid: copy cols 1–6, stage cols 7–12 (stage bleeds 40px past the container on the right at ≥1200px).
- Copy column, top to bottom: eyebrow `SectionLabel` "Creative & digital studio · Working worldwide" (12px caps, preceded by a 24px gold hairline); `h1#home-heading` "Branding & websites.<br/>Made to <em class=accent>connect.</em>" at display size; lead paragraph (existing copy) 20px, `max-width: 34ch`, colour muted; actions row: primary magnetic `Link.button` "Explore our services →" (href `#services`) and `text-link` "Start your project ↗" (`/contact`); note row: `BrandSymbol` 28px + "Eight people. Design, development and content in one team." 14px muted.
- Stage: `figure.hero-stage` with `aspect-ratio: 1; max-width: 620px; justify-self: end; position: relative`. Children: (1) `EightfoldFallback` inline SVG, 100% size (server HTML — this and the headline are the LCP candidates); (2) `SceneHost` slot `div.scene-slot[data-view=hero]` absolutely positioned over it; when the first WebGL frame renders, the SVG fades to 0 over 400ms. `figcaption` 12px muted: "Eightfold · the ManaCircle mark".
- Scroll cue bottom-left: 1px × 48px sage-200 line with a 4px forest dot travelling down (CSS 1.8s, two iterations only, hidden on mobile and under reduced motion).
- Mobile (≤760): single column: eyebrow, h1 `clamp(44px, 11vw, 56px)`, stage 280px square centred (lighter scene or SVG), lead 17px, full-width primary button + text link, note. ≤390: stage 240px.

### 6.2 Services heading + rail — `section#services.home-services[data-tone=cream]`
- Heading row (grid 7/5): left eyebrow "What we do" + `h2#services-heading` "Find the right service<br/>for your <em class=accent>business.</em>"; right: intro paragraph (existing) and, below it, the rail controls: two 44px round buttons (prev/next, `aria-controls="service-rail"`, disabled at the ends) and a counter "01 — 03" in serif.
- `div#service-rail.service-rail[role=region][aria-label="Service families"][tabindex=0][data-cursor=drag]`: `display: grid; grid-auto-flow: column; grid-auto-columns: min(640px, 85vw); gap: 24px; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-inline: var(--gutter); padding-inline: var(--gutter); scrollbar-width: none;` — the rail breaks out of the container to the viewport edge so the next panel peeks. Native scrolling only (wheel with shift, trackpad, touch, arrow keys when focused, buttons). Below: 2px progress track (sage-200) with forest fill driven by `scroll-timeline: --rail x` on the rail and `timeline-scope` on the section; JS fallback via `useScroll({ container })` only if `@supports` fails.
- Three `article.home-service-row#build|#create|#grow` (class kept for tests): paper panel, radius 20px, padding 40px, `scroll-snap-align: start`, grid 45/55. Left `figure.family-stage`: sage-100 inset, radius 14px, aspect 1, containing the isometric SVG fallback and the `scene-slot[data-view=family-build|create|grow]`. Right: serif numeral "01/02/03" (72px sage-200), `h3` family title 30px, description 16px muted, then `div.home-service-links` with 4 / 4 / 2 `Link`s (`/services/[slug]`, exact service titles from `services`), each a 56px row with hairline and diagonal icon — ten links total.
- Foot: `div.home-services-foot` right-aligned `text-link` "Compare all services →" (`/services`). The AI-illustration note leaves the homepage because no illustration is shown here (labels stay where illustrations appear).
- Mobile: panels `calc(100vw - 32px)`, snap center, figure 200px tall, links 48px rows; controls hidden, counter + progress remain.

### 6.3 Telugu — `section.home-telugu[data-tone=forest]` (forest-900, full-bleed, grain)
- Grid 5/7, padding-block `--space-section`. Left `figure.home-telugu-photo`: `recording-microphone.webp` recropped 4:5 (object-position 35% center), radius 20px, caption badge "Editorial photo · Hrayr Movsisyan / Unsplash" (11px). The frame is a `TiltCard` (max 4°). Overlapping bottom-right: a paper "script card" (220px, rotate −4°) printed with the Telugu line, rising 16px on `view()` timeline.
- Right: eyebrow gold-soft "Telugu comes naturally"; `h2#telugu-heading` cream "Your audience.<br/><em class=accent>Their language.</em>"; `p.home-telugu-native[lang=te]` "మీ కథ. మన భాష." 32px cream; paragraph (existing) muted-dark 17px max 52ch; `text-link` cream "Explore Telugu content ↗" (`/services/telugu-content-voiceovers`).
- Mobile: photo 3:2 first, then copy; script card shrinks to 160px.

### 6.4 Process (pinned storytelling) — `section#how-it-works.home-process[data-tone=cream]`
- Grid 5/7, `align-items: start`. Left column `position: sticky; top: 112px` (desktop only): eyebrow "How it works", `h2#process-heading` "A small team.<br/><em class=accent>A clear process.</em>", paragraph (existing), `text-link` "Meet ManaCircle ↗" (`/about`), then the **Process Dial** (220px, CSS 3D, section 9.5).
- Right `div.home-process-list`: four native `details[name=project-process]` (first `open`, exactly one open — unchanged markup so the test passes). `summary` 72px row: serif numeral "01", `h3` 19px/560, plus icon rotating 45° when open; `p` 16px muted. The `toggle` listener in `process-dial.tsx` sets `data-step` on the dial.
- Mobile: dial 160px, static above the list, not sticky.

### 6.5 Useful answers — `section.home-questions[data-tone=sage]`
- Grid 5/7. Left: eyebrow "Before you begin", `h2` "A few useful<br/><em class=accent>answers.</em>", paragraph, `text-link` with the exact text "Read our project guides" (`/guides`). Right: `FAQ items={homeFaq}` — summaries 18px/560 at 76px rows, answers 16px muted, hairlines.

### 6.6 Contact banner — `ContactBanner` (shared)
- Forest-700 block, radius 24px, padding `clamp(40px, 6vw, 72px)`, margin-block `--space-block` so cream separates it from the footer. Left: small line "A brand, a website or your next campaign." (14px muted-dark) + `h2` "Let’s plan your project." 60px cream. Right: cream magnetic button "Start your project ↗" (`/contact`) + "Clear scope. Custom quotation." 12px. Background right: 480px outlined Eightfold (1px sage-200 25%) cropped by the radius, turning 22.5° over the section's `view()` timeline.

## 7. Other routes

### 7.1 /services (index)
`page-intro split-intro`: eyebrow "Our services", h1 "Design. Development.<br/><em class=accent>Content & marketing.</em>", intro right-aligned bottom. `nav.service-category-nav` becomes three pill tabs in a sticky bar (`top: 80px`, cream 86% + blur) with IntersectionObserver scroll-spy highlighting the current family. Each `section.catalogue-family` opens with a header grid: 260px `figure.family-stage` (3D View / SVG fallback) + family title 48px + description, hairline below. Services as a ledger: each `article` is a row (grid 72px / 1fr / 280px / 120px): serif number, `h2` 28px + description + "Explore this service ↗", three deliverables with check icons, and the AI illustration at 120px square radius 12px with `figcaption` "AI-generated". Then `engagement` (two-column statement), shared `Process` (four columns, serif numerals, hairline tops), `ContactBanner`.

### 7.2 /services/[slug]
Hero grid 6/6: breadcrumb (12px), eyebrow "Creative & digital services", `h1` = service title, intro 18px, `ButtonLink` "Discuss your project" (text preserved for tests, href `/contact?service=slug`), factline. Right `figure.service-visual` as a `TiltCard` (max 5°, sheen) holding the illustration (`next/image`, preload) with caption "Illustrative service scene · AI-generated". `dl.service-at-a-glance`: three paper cells with serif numerals, hairline dividers. `service-fit`: forest-700 panel, cream h2 + text. Deliverables: list rows 56px, check icons draw in on reveal (stroke-dashoffset 240ms, 40ms stagger). `scope-panel`: sage two-column. Applications: example paragraph 20px in serif italic as a pull-quote; `application-grid` three rows with diagonal icons. FAQ, reading aside (paper, radius 14px), related services as three tilt chips, `ContactBanner`.

### 7.3 /work (index)
`page-intro`: eyebrow "Our work", h1 "Explore the work.<br/><em class=accent>Try the experience.</em>", intro. `portfolio-browse-bar` + `PortfolioPagination` unchanged (aria-labels "Project pages, top/bottom", "Next page, page 2", "Previous page, page 1"). `portfolio-grid` two columns, gap 48/32; each `.portfolio-card` keeps its markup; `.portfolio-visual-link` wrapped in `TiltCard` (4°) with `data-cursor=view`; `.portfolio-window` wrapped in `<ViewTransition name={`work-${slug}`}>`. Voice Agent cover keeps the wave but recoloured sage-200 on forest-900. Meta labels "Live website / Project overview" preserved.

### 7.4 /work/[slug]
`PortfolioDetail`: back link, heading grid, toolbar (tags as hairline chips, "Visit website" button when `liveUrl`), `figure.portfolio-detail-figure` wrapped in the matching `<ViewTransition name>` so the window grows into the figure (360ms). Body two columns. Concept projects keep `ProjectArt`, `BeforeAfter`, `ScriptReader` and the video (user-controlled); `project-stage` gets a paper frame with 20px radius and the rest shadow. Labels "Concept project" and disclosure paragraph unchanged.

### 7.5 /about
`page-intro split-intro`: h1 "Eight people.<br/><em class=accent>One creative team.</em>". `about-lead` grid 6/6: story left (existing paragraphs + globe foot line), right `figure.circle-stage` with the **Circle of Eight** (3D) over its SVG fallback and a DOM radial shadow. `values-grid`: three paper `TiltCard`s with serif numerals, h2 24px, text 15px. `about-scope` grid 5/7: `StudioPhoto` (creative desk, credit kept) left, copy + "Explore our work" secondary button right. `ContactBanner`.

### 7.6 /contact
`page-intro split-intro`: h1 "Tell us what<br/><em class=accent>you’re building.</em>". Grid 5/7. `aside.contact-aside` (sage-100, radius 20px, padding 40px): h2 "A conversation.<br/>Then a clear plan.", intro, the CSS-3D **brief sheet** (paper card in `perspective(1200px) rotateX(18deg) rotateZ(-6deg)` listing the three `contact-steps` with serif numerals; its thin progress rule fills as required fields validate — decorative, `aria-hidden`), `direct-contact` links, location line. `ContactForm` logic untouched: paper card radius 20px, inputs 52px with 1px `#7E8C83` borders, 2px forest-500 focus border + ring, labels 14px/560, `form-error-summary` forest-700 text on `#FBECEA`, `form-success` sage; the submit stays "Download project brief" with the download icon when no receiver is configured.

### 7.7 /guides and /guides/[slug]
Index: h1 "Plan your website,<br/><em class=accent>content or campaign.</em>"; `.guide-grid` of five `.guide-card` (class kept) as paper `TiltCard`s with serif numerals 01–05, category 12px caps, title 24px, description 15px, "Read the guide ↗"; `ContactBanner`. Detail: `page-intro` with breadcrumb, eyebrow category, h1, meta; `guide-layout` 3/9 with sticky `guide-toc` (`top: 112px`) and a 2px reading-progress rule under the header via `animation-timeline: scroll(root)` (static if unsupported); `guide-answer` as a forest-700 callout with cream 20px text; examples as sage asides; closing section with the service link and `ButtonLink`.

### 7.8 404 / error / privacy / thank-you
`simple-page`: 110px padding, max-width 780px. 404 shows the displaced-bar Eightfold (section 9.6) above "Let’s get you<br/>back in the <em class=accent>circle.</em>" (h1 text still contains "circle" for the test), paragraph, primary + secondary buttons. Error page: same layout, "Try again" button; being a client component it imports no 3D. Privacy and thank-you: typographic only, serif accent on the h1.

## 8. 3D system and scene architecture

- `src/components/three/scene-host.tsx` ("use client"): decides capability (WebGL2 via a probe canvas, `prefers-reduced-motion`, viewport width, `navigator.deviceMemory`, `hardwareConcurrency`, `connection.saveData`), registers `scene-slot` elements by `data-view`, and `next/dynamic(() => import("./scene-canvas"), { ssr: false })` mounts **one** fixed, full-viewport, `pointer-events: none` `<Canvas>` per route (mounted only on `/`, `/services`, `/about`). Routes without a host have no canvas.
- `scene-canvas.tsx`: `<Canvas dpr={[1, 1.5]} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }} frameloop={active ? "always" : "never"}>` with drei `<View track={slotRef}>` per registered slot, shared `<Environment frames={1} resolution={128}>` of `<Lightformer>`s (no files, no network), `<PerformanceMonitor onDecline={() => setDpr(1)}>`, and `<Preload all />`. `active` is true only while any slot intersects the viewport and `document.visibilityState === "visible"`. Reduced motion: `frameloop="demand"`, static poses, a single `invalidate()`.
- `eightfold-mark.tsx` (hero), `family-objects.tsx` (Slab, Seal, Signal), `circle-of-eight.tsx` (About), `materials.ts` (forestGlaze, creamCeramic, sageMatte, brushedGold + palette constants), `use-scene-capability.ts`.
- Pointer and scroll inputs come from the DOM: the stage element's `pointermove` writes a normalised `MotionValue` pair; `useScroll({ target })` from `motion/react` writes progress; the scene reads them in `useFrame` with `1 - exp(-6·dt)` smoothing. No pointer events on the canvas.
- Geometry budget per route ≤ 12k triangles (hero ≈ 3.2k, rail ≈ 6k, About ≈ 4k). No shadow maps, no transmission, no post-processing, deep imports from `@react-three/drei/core/*` only.
- First-frame handoff: `onCreated` → after the first rendered frame set `data-ready` on the stage; CSS fades the SVG fallback out over 400ms. CLS is zero because the stage has a fixed aspect-ratio box.

## 9. The 3D moments (placement · object · material · interaction · mobile · fallback)

### 9.1 Hero — the Eightfold assembles (WebGL)
Object: eight `CapsuleGeometry(0.25, 1.25, 4, 12)` bars, centres 1.125 units from origin at 0°, 45°, … 315°, long axis radial — the exact 6×15 rx3 proportions of `brand.tsx`. Material forestGlaze; camera fov 32 at [0, 0.6, 7.5]; lights per section 8. Entrance: bars begin in a row (`x = (i − 3.5) · 0.62, y = −0.3, rotZ 0`) and move to their radial pose over 1100ms each with 55ms stagger, `cubic-bezier(.22,1,.36,1)`, starting 120ms after the first frame; no bounce. Cursor (fine pointer only): group `rotation.x = −py·0.14`, `rotation.y = px·0.14` (±8°); any bar whose centre is within 0.9 units of the projected pointer is pushed outward by `(0.9 − d) · 0.25` (max 0.22) and springs back. Scroll: hero progress 0→0.7 interpolates bars back to the row and scales the group to 0.85; the DOM slot fades via CSS (`opacity` from `view()` timeline). Mobile: lighter scene (dpr 1, `MeshStandardMaterial`, Environment 64, no pointer, scroll coupling kept) if `deviceMemory ≥ 4`, `hardwareConcurrency ≥ 4` and no `saveData`; otherwise fallback. Fallback: server-rendered inline SVG Eightfold with glaze gradient, per-bar highlight, `feDropShadow`, paper spotlight; without WebGL but with motion allowed, a one-time CSS assembly using a registered `@property --t` (0→1, 1200ms) composes `translate(calc((1 − var(--t)) · (var(--i) − 3.5) · 7px), calc((1 − var(--t)) · 10px)) rotate(calc(var(--t) · var(--i) · 45deg))`; reduced motion shows the assembled pose.

### 9.2 Home rail — three family objects (WebGL Views, ≥900px + hover)
Slab (Websites & apps): RoundedBox 1.6×1.1×0.08 r.06 creamCeramic with a forest inset plane, plus a floating phone slab 0.5×1.0×0.06. Seal (Brand & content): cylinder r.75 h.18, 48 segments, forestGlaze, eight 0.02-deep capsule embossings on the face, brushedGold centre pin. Signal (Marketing & ads): tori r .45/.75/1.05, tube .05, 12×48 segments, tilted 18°, inner gold, middle forest, outer cream; rotation ≤0.6 rpm. Interaction: `<Float speed={1.2} rotationIntensity={.25} floatIntensity={.4}>`; panel hover tilts ≤12°; `:focus-within` lifts 0.1 units; rail progress adds `rotation.y` ≤0.4 rad. Mobile/touch/no-WebGL/reduced motion: the isometric two-tone SVGs rendered in server HTML.

### 9.3 /services — the same objects as family headers (WebGL)
One canvas, three Views at 260px; idle Float only; 15° turn toward the pointer over the family header. Mobile always SVG.

### 9.4 /about — Circle of Eight (WebGL)
Eight upright capsules (length 1.4, radius .22) on a 2.2-radius circle, forestGlaze; camera fov 30 at [0, 1.6, 7.2]; shadow is a DOM radial-gradient ellipse. Entrance: bars rise from y −1.6 with 80ms stagger over 900ms when the section enters view; pointer x rotates ±20° (spring); section scroll adds 0→30°; focus on "Explore our work" lifts the circle 0.08 units. Mobile/reduced motion: static isometric SVG.

### 9.5 Process Dial (CSS 3D)
Eight CSS bars (28×80px desktop) inside `perspective(900px) rotateX(58deg)`; step n lights bars 2n−1 and 2n with the glaze gradient, inset highlight and `0 10px 18px #0F2A2130`; unlit bars are 1px sage-200 outlines; the dial rotates 45°·(n−1), transition 520ms `cubic-bezier(.22,1,.36,1)`. Driven by native `toggle` events — fully keyboard operable. No JS: step 1 lit. Reduced motion: instant state.

### 9.6 Cheap CSS treatments
`TiltCard` (perspective 1400px, ≤5°, sheen `::after`, lifted shadow; `useTilt` hook writes `--rx --ry --mx --my`; focus-visible gets the lifted shadow without tilt). Contact brief sheet (static CSS 3D). Footer and banner outlined Eightfolds (view-timeline rotation). 404 displaced bar snapping back on button hover/focus. All disabled under reduced motion; cards stay flat with the rest shadow.

## 10. Motion system

- Easings: `--ease-out: cubic-bezier(.22,1,.36,1)`, `--ease-in-out: cubic-bezier(.65,0,.35,1)`; springs (motion/react) `stiffness 120, damping 16, mass .4` for magnetic and cursor ring; scene smoothing `1 − exp(−6·dt)`.
- Durations: hover 160ms; card reveal 280ms; section reveal 520ms; hero assembly 1100ms + 55ms stagger; dial 520ms; page transition 220ms out / 320ms in; shared element 360ms.
- Entrance: `Reveal` keeps its WAAPI approach (content visible in server HTML; animates `translateY(24px) → 0` plus opacity 0→1 **only after** IntersectionObserver fires, so no-JS never hides content), adds `--i` stagger of 60ms for children and a `variant="rise" | "fade"` prop. The hero headline is never animated (it is the LCP).
- Scroll-linked (CSS, `@supports (animation-timeline: view())`): header tone, section numerals parallax ±24px, footer/banner Eightfold rotation, rail progress bar, guide reading progress, Telugu script card rise. JS scroll coupling only for WebGL.
- Hover: magnetic primary buttons (section 11), link arrows `translate(2px, −2px)`, tilt cards, rail links sliding 4px.
- Page transitions: `layout.tsx` wraps `{children}` in `<ViewTransition default="page">` (import from `react`, confirmed exported in this React build); CSS `::view-transition-old(page)` fades out 220ms, `::view-transition-new(page)` fades in and rises 12px over 320ms; shared names `work-${slug}` (portfolio window → detail figure) and `guide-${slug}` (card title → h1). Reduced motion: `::view-transition-group(*) { animation-duration: .01ms }`.
- Reduced motion: `MotionConfig reducedMotion="user"`; WebGL static poses and `frameloop="demand"`; Float off; no cursor ring, no magnetic, no tilt, no scroll cue; existing global `animation: none !important` rule kept inside `@layer motion` with the view-transition exception above.

## 11. Magnetic buttons and cursor states

- `MagneticButton` (client) wraps `.button` and the header CTA: within a 56px halo the button translates toward the pointer up to 6px (spring), the label counter-translates by one third; `(hover: hover) and (pointer: fine)` only; `:focus-visible` applies the same lift state (`translateY(−1px)` + lifted shadow) so keyboard users get parity; `:active` presses 1px.
- `CursorRing` (client, mounted in `layout.tsx`): a 36px 1px ring (forest-500 at 70%, cream on `[data-tone=forest]`) lagging the pointer with the spring; grows to 48px over `a, button, summary`; shows a 12px label "Drag" over `[data-cursor=drag]` (rail) and "View" over `[data-cursor=view]` (portfolio). It is `aria-hidden`, `pointer-events: none`, never hides the native cursor, and is removed on touch, reduced motion and `forced-colors`.
- Touch targets: every link row, button and control ≥44px (rail buttons 44px, nav rows 48px, FAQ/process summaries ≥72px).

## 12. Component inventory (proposed files)

- `src/app/tokens.css` (new, `@layer base`: palette, tones, type scale, spacing, radii, shadows); `src/app/kinetic.css` (new, `@layer components`: buttons, links, labels, cards, rail, dial, tilt, banner, footer, forms); `src/app/motion.css` (new, `@layer motion`: reveal, scroll-driven, view transitions, reduced motion); `src/app/home.css` (rewritten); `src/app/header.css` (restyled); `src/app/globals.css` keeps `@layer reset, base, components, motion, responsive`; `studio.css`, `refinement.css`, `photography.css` are folded into the new files and removed from `layout.tsx` imports.
- `src/components/three/scene-host.tsx`, `scene-canvas.tsx`, `eightfold-mark.tsx`, `family-objects.tsx`, `circle-of-eight.tsx`, `materials.ts`, `use-scene-capability.ts`.
- `src/components/hero/kinetic-hero.tsx` (server composition), `src/components/hero/eightfold-fallback.tsx` (SVG + CSS assembly), `src/components/family-illustrations.tsx` (isometric SVG fallbacks), `src/components/service-rail.tsx` (server panels) + `service-rail-controls.tsx` (client buttons/counter), `src/components/process-dial.tsx` (client, toggle listener), `src/components/magnetic.tsx`, `src/components/cursor-ring.tsx`, `src/components/tilt-card.tsx` + `src/lib/use-tilt.ts`, `src/components/reveal.tsx` (extended), `src/components/page-transition.tsx`.
- Updated: `src/components/shared.tsx` (ButtonLink → magnetic, SectionLabel hairline, ContactBanner, Footer, Process), `src/components/header.tsx` (classes + scrolled sentinel only), `src/app/layout.tsx` (Instrument Serif var, ViewTransition, CursorRing), `src/app/page.tsx`, `src/app/services/page.tsx`, `src/app/services/[slug]/page.tsx`, `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/work/page.tsx`, `src/components/portfolio-gallery.tsx`, `portfolio-detail.tsx`, `guide-cards.tsx`, `src/app/not-found.tsx`, `src/app/error.tsx`.
- `src/components/brand.tsx` unchanged; add `BrandSymbolBars` (same geometry, per-bar `--i` and class hooks) for the CSS fallback, dial, footer and 404.
- Tests: `tests/browser-checks.cjs` replaces the `.image-hero-photo` assertion with `.hero-stage` visible and `.home-telugu-photo img` loaded; adds a reduced-motion emulation check (`canvas` absent or `[data-paused=true]`) and a no-JS context check that `h1`, ten service links and the fallback SVG render. Everything else keeps its selectors.

## 13. Performance plan

- LCP is the hero headline text (server HTML, local Geist with `display: swap`) with the inline SVG fallback painted in the same frame; WebGL arrives after hydration and only fades the SVG when its first frame exists.
- 3D chunk ≤220KB gz target, loaded lazily per route; `three` imported as needed; no HDR, no textures, procedural lights only.
- One canvas per route, dpr [1, 1.5] (1 on mobile), frameloop active only while a View intersects and the tab is visible; PerformanceMonitor degrades dpr; mobile gets the lighter hero and SVG elsewhere; low-end devices get SVG everywhere.
- Images: existing WebP via `next/image` with correct `sizes`; the microphone photo recropped via `object-position`, no new assets required (optional: generate 2-tone SVG illustrations by hand, no AI images).
- CSS budget: total authored CSS ≤60KB; scroll-driven animations instead of JS scroll listeners wherever possible; `content-visibility: auto` on below-fold sections with `contain-intrinsic-size`.
- Targets: Lighthouse mobile performance ≥90, LCP <2.5s on a mid-tier phone, TBT <200ms, CLS 0, no horizontal overflow at 320/390/768/1024/1440, zero axe WCAG A/AA violations, `npm run typecheck`, `npm run build`, `npm test`, `npm run test:e2e` all green before review-pr and ship.

## 14. Acceptance checklist

Content unchanged in `src/lib/*.ts`; ten service links on home; no `/work/` links in home `<main>`; one open process disclosure; "Read our project guides" link; five guide cards; portfolio pagination and labels; contact validation and brief download; Eightfold the only logo; no fabricated proof; AI illustrations labelled where shown; photo credits in footer; all 3D moments have fallbacks and reduced-motion behaviour; keyboard parity for every pointer effect; one WebGL canvas per route, paused offscreen.