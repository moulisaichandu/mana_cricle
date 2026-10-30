# Eightfold Atelier — cinematic editorial luxury

Hero antha deep forest-green cinema la untundi, madhyalo mana Eightfold mark glass-and-brass 3D object ga product-shot lighting lo slow ga tirugutundi; migatha site warm cream paper meeda Instrument Serif italic headlines, Geist text, sanna gold hairlines tho rich-but-classic (Aesop / Apple feel) — identity, content, services anni same.

Signature: The glass-and-brass Eightfold mark turning slowly under a warm key light over near-black forest green: the static poster crossfades into live 3D a beat after the serif headline settles, the mark leans toward the cursor and, as you scroll, lifts and turns out of frame — and the same object returns on About, where its eight bars drift apart and reassemble as you scroll ("Eight people. One creative team.").

## Palette
- --forest-950: #0B1F18 — Hero, Telugu band, closing plate and footer background; 404 page
- --forest-900: #11291F — Radial-gradient partner of forest-950; dark plinths, Voice Agent cover, 'fit' band on service pages
- --forest-800: #173D2E — Primary button on cream; raised surfaces and dropdown hover on dark (existing green-dark)
- --forest-600: #2F6749 — Eyebrows, text links and focus ring on cream; wordmark period on cream (existing green)
- --mist: #B8C7B9 — Secondary/body text on dark (9.7:1 on forest-950)
- --cream: #F6F2E8 — Page background for content sections; primary text colour on dark (15.4:1)
- --paper: #FDFBF6 — Raised plates, form card, services dropdown, hovered button on dark
- --cream-deep: #EFE9DC — Alternate cream band (FAQ, scope panels, engagement band, guide answer)
- --ink: #193C30 — Headings and body on cream (10.9:1 on cream, 10.0:1 on cream-deep) — existing ink
- --muted: #58685C — Secondary text on cream (5.2:1) and cream-deep (4.8:1) — existing muted
- --line: #D9E2D5 — Structural dividers on cream (decorative, existing line)
- --line-strong: #75827C — Form input borders (3.9:1 on paper) and secondary button borders
- --gold: #D6B875 — Hairlines everywhere; eyebrows, numerals, underlines and focus ring on dark only (9.0:1 on forest-950); never text on cream
- --bronze: #7A5F25 — Gold-family text on cream: section numerals, guide categories (5.4:1 on cream, 5.0:1 on cream-deep)
- --brass-3d: #C9A961 — 3D brass material base colour (ferrules, rods); not a UI colour
- --glass-tint: #DFE9DC — 3D glass material colour; attenuation colour #9FBFA6; not a UI colour
- --error: #B42318 — Form validation text and borders (existing)

## 3D moments
- Home hero, right 6 of 12 columns at ≥1024px (stage 560×560 at 1440, min 420px); below the copy at 300px tall on tablets; phones get the poster unless the device passes the quality gate (deviceMemory ≥4, hardwareConcurrency ≥6, no saveData). Mounted by <HeroStage> → <SceneFrame scene="eightfold" variant="hero">.: The Eightfold mark rebuilt as eight glass capsules (CapsuleGeometry r=0.22, length 1.1, 4 cap × 12 radial segments) placed 1.55 units from centre at 45° steps, each with a short brushed-brass ferrule (CylinderGeometry r=0.235, h=0.12) at its inner end — a glass-and-brass sculpture, like a luxury pen's fittings, that reads exactly as the 2D logo from the camera's default angle. | Glass: MeshPhysicalMaterial color #DFE9DC, transmission 0.95, roughness 0.06, thickness 1.4, ior 1.46, attenuationColor #9FBFA6, attenuationDistance 2.2, clearcoat 1, clearcoatRoughness 0.08, envMapIntensity 1.2. Brass: MeshStandardMaterial color #C9A961, metalness 1, roughness 0.28, envMapIntensity 1.4. Lighting: procedural <Environment resolution={256} frames={1}> with three <Lightformer>s — warm rect softbox (#FFF1D6, intensity 3, position [2,4,3], scale [5,2.5,1]), cool sage rim rect (#D7E6D4, 1.2, [-4,1,-2], scale [3,6,1]), gold ring from below (#D6B875, 0.9, [0,-3,2], scale 4); plus a warm spotLight key ([3,5,4], angle 0.45, penumbra 0.7, #FFF0D2) and a sage pointLight fill ([-4,-1,2], #B9D1BC). ContactShadows baked once (frames 1, opacity 0.4, blur 2.6, resolution 512, colour #061611) under the mark. Transparent canvas over a CSS radial gradient (#16342A → #0B1F18) with a 3.5% SVG grain overlay. | Entrance: scale 0.92→1 and rotation.y −0.35→0 over 1400ms expo while the poster crossfades out (900ms). Idle: one full Y turn every 48s plus drei <Float speed 1, rotationIntensity 0.15, floatIntensity 0.3>. Pointer (fine pointers only): the mark leans toward the cursor, max ±0.14 rad X / ±0.18 rad Y, damped with MathUtils.damp(λ=4) for a 600–800ms settle. Scroll (motion useScroll on the hero): rotation.z +0.35 rad and position.y +0.6 as the hero leaves; canvas opacity 1→0 across progress 0.7→1, then frameloop='never'. dpr [1,1.5]; render loop paused when the stage is offscreen (IntersectionObserver, rootMargin 10%). Lite tier: transmission 0 (frosted, opacity 0.85), no ContactShadows, Environment 128, idle rotation only. Reduced motion: single static frame at the poster pose, no entrance, no parallax. | fallback: public/images/brand/eightfold-glass-poster.webp (1400×1400, ≤120KB) rendered once from the same scene via a dev-only `?poster=1` query and Playwright Chromium, served as <Image className="image-hero-photo" preload sizes="(max-width:760px) 72vw, 40vw"> — it is the LCP candidate, the no-JS view, the reduced-motion view and the failed-WebGL view. Beneath it sits an inline SVG of the mark (gold hairline outline, sage gradient fills) so the hero is composed even before the poster bytes arrive.
- About page hero (dark band, full width): the stage sits right of the H1 'Eight people. One creative team.' at ≥1024px (6 of 12 columns, 520px tall), below it on smaller screens (320px tall). Mounted by <SceneFrame scene="eightfold" variant="assembly">.: The same glass-and-brass Eightfold, exploded: each bar starts 1.6× further from centre with ±0.35 rad rotational jitter and assembles into the exact mark — eight pieces becoming one shape, the literal meaning of the brand. | Identical materials and procedural studio environment as the hero (shared <StudioLighting>), camera raised to [0,1.2,7.5] fov 32 looking at origin so the assembly is seen slightly from above; ContactShadows frames=Infinity on the full tier only (the shadow must follow the moving pieces), omitted on lite. | Scroll-linked: motion useScroll on the hero section (offset ['start start','end start']) drives spread 1→0 through easeOutExpo over the first 60% of the section's exit, so the mark is fully assembled by the time the story section arrives; scrolling back up lets it drift apart again (no hijack, no snapping). Phones/tablets and keyboard-only sessions: auto-assemble over 1600ms once in view, then hold. Reduced motion: assembled static pose. Idle after assembly: 1 turn / 60s. | fallback: Inline SVG of the exploded mark (bars at 1.5× radius, gold hairline strokes, sage glass gradients) crossfading to the assembled SVG via CSS @keyframes on view when motion is allowed — otherwise the assembled SVG, static. Shares the hero poster's gradient/grain backdrop so the band is finished without WebGL.
- Work detail page for the one project without a screenshot: /work/voice-agent, inside <figure class="portfolio-detail-figure portfolio-detail-voice"> (aspect 2.4:1, min 350px; 4:3 on phones). Mounted by <SceneFrame scene="waveform">. The /work index card keeps the existing SVG wave (gold on forest-900) so the index has no canvas.: A brass waveform sculpture: 24 vertical brushed-brass rods (CylinderGeometry r=0.09, 6 radial segments) whose heights are the existing wave data [22,34,52,…]/60, standing on a near-black green plinth (BoxGeometry 8×0.15×1.4, #0F2A20, roughness 0.5). It replaces the flat CSS wave with an object that belongs to the same brass family as the hero. | Rods: MeshStandardMaterial #C9A961, metalness 1, roughness 0.3. Shared <StudioLighting> procedural environment; warm spotLight key whose X position lerps ±1.5 units toward the pointer (a travelling studio light, not a camera move); no shadows (reflections carry the depth). Camera [0,1.6,6] fov 30. | Rods rise from the plinth on entering view (scaleY 0→1, 40ms stagger, 900ms expo). Idle on the full tier: ±6% sine height modulation at 0.5Hz with per-rod phase offset — it reads as a voice without audio. Pointer moves only the key light. Lite tier: rise then hold, no modulation. Reduced motion: rods at final height, static light. | fallback: The existing <PortfolioVisual> SVG wave restyled: 24 gold (#D6B875) strokes on a forest-900 panel with the 'Campaign → Conversation → Transcript' flow row, retaining its role="img" label — already in the server HTML, so no-JS and reduced-data visitors see a finished cover.
- 404 page (src/app/not-found.tsx): full-height dark page, mark centred above the copy at 360px (240px on phones). Mounted by <SceneFrame scene="eightfold" variant="missing-bar">.: The glass-and-brass Eightfold with bar index 5 (225°, lower-left) absent; its place is held by a faint brass outline (same capsule at opacity 0.18, no transmission). The headline keeps the existing copy 'Let's get you back in the circle.' — the object and the sentence say the same thing. | Hero materials and the shared procedural environment; key light slightly cooler (#F3EBDC) so the page feels quieter than home; no ContactShadows (the page is short, keep it cheap). | Slow idle rotation only (1 turn / 60s), no pointer or scroll coupling; entrance fade 900ms. Lite tier: frosted glass. Reduced motion: static frame. | fallback: Inline SVG mark with bar 5 at 20% opacity and a gold dashed outline, on the forest gradient — present in the server HTML, so the page is complete without JavaScript (the error.tsx boundary uses no 3D at all).
- CSS-3D (no WebGL) perspective plates wherever a photo or screenshot is the content: the three service illustration plates on Home, the 10 catalogue plates on /services, the service-detail hero figure, the 4+1 portfolio cards on /work and the 5 guide cards. Implemented once as <TiltCard>.: The existing image or window-chrome card, framed with a 1px gold hairline 8px outside its edge (pseudo-element) that sits at translateZ(20px) so it shifts against the image in parallax — a mounted print, not a floating UI card. | Pure CSS: perspective 1200px on the wrapper; depth communicated by a shadow that deepens on hover from '0 1px 0 var(--line)' to '0 24px 48px -24px rgba(11,31,24,.35)'; on dark plates a soft gloss radial-gradient follows the pointer at 14% warm cream; on cream plates no gloss (photos stay honest). | Pointer-tracked tilt ≤5° via CSS custom properties updated in requestAnimationFrame, returning over 600ms expo on leave; only under (hover:hover) and (pointer:fine), never on touch, disabled under prefers-reduced-motion; the plates are also the shared elements for React <ViewTransition> morphs (services → service detail, work → work detail). | fallback: The static framed plate with hairline and resting shadow — the same markup with the interaction class inert; nothing depends on JavaScript.

## Risks
- Gloom / low contrast: dark bands could make the site feel heavy. Mitigation: dark surfaces are limited to the hero, the Telugu band, the closing plate and footer (≈35% of homepage height); all long reading happens on cream; text on dark uses --cream (15.4:1) or --mist (9.7:1), never below 7:1; the hero backdrop is a warm radial gradient with a product-shot key light, not flat black; gold is restricted to hairlines on cream so it never fails contrast as text.
- Hero LCP and main-thread cost from three/R3F/drei (~150KB gz): the poster <Image preload> and the H1 are the LCP candidates; the 3D chunk is imported only from a client wrapper via next/dynamic ssr:false after hydration + idle, gated by a quality hook; dpr capped at 1.5; one canvas per route; render loop paused offscreen. Budget: LCP < 2.0s mobile lab, CLS < 0.05, TBT < 200ms — verify with the lighthouse-audit skill before and after.
- MeshPhysicalMaterial transmission doubles render cost and is fragile on Intel/old Android GPUs: the 'lite' tier switches to frosted glass (transmission 0), drops ContactShadows and halves environment resolution; the quality hook also returns 'off' (poster) for saveData, deviceMemory < 4 or a lost WebGL context; drei <PerformanceMonitor> can step dpr from 1.5 to 1 if frames drop.
- Instrument Serif legibility: the serif is used only for headings ≥28px and numerals ≥20px; body, UI, forms and the Telugu line stay in Geist/system fonts; TTFs are 70KB each and load with display:swap and adjustFontFallback to limit CLS — convert to WOFF2 only if a local converter exists (no network tooling assumed).
- CSS layering: refinement.css is unlayered and currently overrides everything. The new atelier.css must either be unlayered and loaded last or (preferred) refinement.css and studio.css get wrapped in named layers below a new 'atelier' layer; otherwise half the redesign will silently lose specificity battles.
- Test-suite coupling: tests/browser-checks.cjs depends on .image-hero-photo visibility, 10 .home-service-links a, no /work/ links in main, one open .home-process-list details, the 'Read our project guides' link, 5 .guide-card, pagination aria-labels, .portfolio-detail-toolbar, .before-art, .script-beat p[lang=te], 'Open menu' + Escape focus return, and the contact form ids/texts. The spec keeps every one of these hooks; any renamed class must be changed in the test in the same commit.
- The static poster needs a WebGL-capable headless render (Playwright Chromium with --use-angle=swiftshader) — if that fails in the restricted Windows workspace, ship the inline SVG fallback as the permanent poster; it is designed to look finished on its own.
- View transitions and scroll-driven animations are progressive (Chromium 125+/131+, partial Safari): everything is wrapped in @supports and reduced-motion guards so unsupported browsers simply get the static design; QA must include Firefox and Safari to confirm no half-applied states.
- Telugu rendering relies on system fonts (Nirmala UI / Noto Sans Telugu / Telugu Sangam MN) because no external fonts are allowed; set font-synthesis:none and test the lang="te" line at 320px so the large size never overflows.
- Scope creep into copy: the owner's data in src/lib/*.ts is presentation-only in this direction; only the About/Home note reuse existing sentences. Any new label (eyebrows, captions) must be factual and must not introduce testimonials, metrics, prices or response times.

---

# Eightfold Atelier — Direction A: Cinematic editorial luxury

## 0. Mouli kosam, short ga (Tinglish)

Ee direction lo site rendu moods lo untundi: **deep forest green (near-black) cinema sections** — hero, Telugu section, closing "Let's plan your project" plate, footer — and **warm cream paper sections** — services, process, FAQ, anni reading content. Headlines **Instrument Serif** (italic second line), text and buttons **Geist**. Gold ni **sanna hairlines** ki matrame vadatham, loud ga kaadu. Hero madhyalo mana **Eightfold mark glass + brass 3D object** la product-shot lighting lo slow ga tirugutundi, mouse vaipu konchem lean avutundi, scroll chesthe paiki lift ayyi tirigi vellipotundi. Same object About page lo 8 pieces ga vidipoyi scroll tho okkati ga assemble avutundi ("Eight people. One creative team."). Voice Agent project ki brass waveform sculpture, 404 ki oka bar missing ayina mark. Content, 10 services, process, FAQ, footer credits — anni same; presentation matrame marutundi. Mobile lo poster image + light scene, slow devices lo poster only. Ippudu detail spec English lo, implementer kosam.

## 1. Concept

ManaCircle is an eight-person studio selling judgement: clarity, restraint, finish. The current site is honest but generic bold-sans. This direction treats the website like a product photographed in a studio: a deep forest stage, one hero object lit like jewellery, and then long, calm cream pages where the actual information is easy to read. Reference feel: Aesop (dark-room product shots, serif voice, hairline rules), Apple design pages (one object, weighty motion, enormous negative space), high-end architecture studios (editorial numerals, plates, captions).

Three rules hold the whole thing together:

1. **Two surfaces, one family.** Dark = forest-950/900 with cream text and gold hairlines; light = cream/paper with ink text and forest-600 accents. Both are the existing brand family (forest green + warm cream), only pushed to their cinematic ends.
2. **One object.** The Eightfold mark is the only 3D protagonist. It appears as glass-and-brass sculpture on Home, exploded-and-assembled on About, missing a bar on 404. The brass family extends once, to the Voice Agent waveform. Nothing else is 3D in WebGL; photos and screenshots get cheap CSS-3D plates.
3. **Serif speaks, sans works.** Instrument Serif carries headlines (≥28px) and numerals; Geist carries everything you read, click or type.

Danger list from the brief, answered up front: no gloom (cream majority, warm key light, 15:1 text on dark), no low contrast (every text pair ≥4.5:1, most ≥9:1), no slow LCP (poster + text are the LCP candidates; WebGL is a deferred enhancement).

## 2. Palette tokens

All tokens live in a new `src/app/tokens.css` (unlayered `:root` only). Hex values and the contrast pairs the implementer must keep.

| Token | Hex | Use | Contrast pairs (WCAG) |
| --- | --- | --- | --- |
| `--forest-950` | `#0B1F18` | Hero, Telugu band, closing plate, footer, 404 | cream on it 15.4:1 · mist on it 9.7:1 · gold on it 9.0:1 |
| `--forest-900` | `#11291F` | Gradient partner, plinths, Voice Agent cover, service "fit" band | cream 14.7:1 · gold 8.1:1 |
| `--forest-800` | `#173D2E` | Primary button on cream; raised surfaces on dark | cream text 10.8:1 |
| `--forest-600` | `#2F6749` | Eyebrows, links, focus ring and wordmark period on cream | on cream 5.9:1 · on cream-deep 5.4:1 |
| `--mist` | `#B8C7B9` | Secondary text on dark | on forest-950 9.7:1 |
| `--cream` | `#F6F2E8` | Content background; text on dark | — |
| `--paper` | `#FDFBF6` | Plates, form card, dropdown | ink on paper 11.9:1 |
| `--cream-deep` | `#EFE9DC` | Alternate cream band | ink 10.0:1 · muted 4.8:1 · bronze 5.0:1 |
| `--ink` | `#193C30` | Headings/body on cream | on cream 10.9:1 |
| `--muted` | `#58685C` | Secondary text on cream | on cream 5.2:1 |
| `--line` | `#D9E2D5` | Structural dividers on cream (decorative) | n/a |
| `--line-strong` | `#75827C` | Input borders, secondary button border | on paper 3.9:1 (≥3:1 for UI boundaries) |
| `--gold` | `#D6B875` | Hairlines on both surfaces; eyebrows, numerals, underlines, focus ring on dark only | on forest-950 9.0:1; **never text on cream (1.7:1)** |
| `--bronze` | `#7A5F25` | Gold-family text on cream (numerals, guide categories) | on cream 5.4:1 |
| `--brass-3d` | `#C9A961` | 3D brass material only | n/a |
| `--glass-tint` | `#DFE9DC` | 3D glass colour; attenuation `#9FBFA6` | n/a |
| `--error` | `#B42318` | Form errors (existing) | on paper 6.6:1 |

Derived tokens: `--hairline-dark: rgba(214,184,117,.32)` (gold at 32% on dark), `--hairline-light: #D6B875` (full gold hairline on cream, 1px, decorative), `--shadow-plate: 0 24px 48px -24px rgba(11,31,24,.35)`, `--grain: url("data:image/svg+xml,…feTurbulence baseFrequency=.9 numOctaves=2…")` applied at `opacity:.035; mix-blend-mode:overlay` on dark bands only.

Selection colour: `::selection { background:#D6B87566; color:var(--ink) }` on cream; on dark bands `background:#F6F2E833; color:#fff`.

## 3. Typography

**Fonts (local only).** Geist variable stays as `--font-studio` from `public/fonts/geist-latin.woff2` (28KB). Add Instrument Serif through `next/font/local` in `layout.tsx`:

```ts
const displayFont = localFont({
  src: [
    { path: "../../public/fonts/InstrumentSerif-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/InstrumentSerif-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-display", display: "swap", adjustFontFallback: "Times New Roman",
});
```

Both TTFs are ~70KB; acceptable. Convert to WOFF2 (~35KB each) only if a local converter is already available; do not add network tooling. Telugu stays on system fonts: `--font-telugu: "Nirmala UI", "Noto Sans Telugu", "Telugu Sangam MN", sans-serif; font-synthesis: none`.

**Roles.**
- Instrument Serif Regular: first line of every H1/H2; family and card titles ≥28px.
- Instrument Serif Italic: the second, emotional line of a heading ("Made to connect.", "for your business.", "One creative team."), pull-quote lines, section numerals, the footer strapline.
- Geist 400–560: body, UI, forms, nav, eyebrows, captions, footnotes, the Telugu line (system font).
- Never set Instrument Serif below 28px, except numerals (≥20px) and the mobile H3 floor of 26px.

**Scale (fluid, `clamp(min, preferred, max)`).**

| Role | Size | Line-height | Tracking | Face |
| --- | --- | --- | --- | --- |
| display-1 (home H1) | `clamp(46px, 7.4vw, 108px)` | 0.95 | −0.015em | Serif (line 2 italic) |
| display-2 (page-intro H1) | `clamp(42px, 5.6vw, 84px)` | 1.0 | −0.012em | Serif |
| h2 | `clamp(34px, 4.2vw, 60px)` | 1.04 | −0.01em | Serif |
| h3 editorial (family/card titles) | `clamp(26px, 2.4vw, 34px)` | 1.12 | −0.005em | Serif |
| h3 utility (process steps, FAQ-adjacent) | 19px | 1.35 | −0.02em | Geist 550 |
| numerals | `clamp(40px, 5vw, 72px)` | 1 | 0 | Serif italic |
| lead | `clamp(17px, 1.3vw, 20px)` | 1.65 | 0 | Geist 400 |
| body | 16–17px | 1.7 | 0 | Geist 400 |
| small | 14px | 1.6 | 0 | Geist 400–500 |
| micro / caption | 12px | 1.5 | 0.01em | Geist 450 |
| eyebrow | 11px | 1 | 0.14em, uppercase | Geist 500 |
| Telugu feature line | `clamp(32px, 4vw, 56px)` | 1.35 | 0 | system Telugu |

Headings use `text-wrap: balance`; paragraphs `text-wrap: pretty`; measure for body 60–72ch; lead max-width 34em.

## 4. Spacing, grid, surfaces

- Base unit 4px; scale 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- Section padding: dark bands `clamp(80px, 11vw, 160px)`; cream sections `clamp(72px, 9vw, 128px)`; phones never below 64px.
- Container: `width: min(1320px, 100% - 2 * clamp(20px, 5vw, 72px))` (at 320px that is 280px of content, so the no-overflow tests hold).
- Grid: 12 columns at ≥1024px, `gap: clamp(16px, 2vw, 32px)`; editorial asymmetry is the default (copy 5/12, visual 7/12, or 4/12 label + 8/12 content). Below 760px everything stacks in source order.
- Radii: images and plates 3px, buttons and inputs 6px, dropdown 8px, mobile sheet 0. No pills.
- Hairlines: 1px. Gold on cream for editorial rules (section openers, plate frames, numerals' baseline); `--line` for structural dividers inside lists; gold at 32% on dark.
- Depth: plates rest flat with a 1px hairline frame 8px outside their edge; hover lifts them with `--shadow-plate`. No glassmorphism panels, no gradient cards.
- Dark bands get the grain overlay (`::before`, pointer-events none) to avoid gradient banding and to add the film feel; removed under `prefers-reduced-data: reduce`.

## 5. Header (`src/components/header.tsx`, `src/app/header.css`)

Structure, behaviour and accessibility of the existing component stay (Home, Services + dropdown, Our work, How it works, About us, CTA; Escape returns focus; closes on navigation; `aria-label` "Open menu"/"Close menu"; dropdown trigger behaviours). Only presentation changes:

- Height 84px desktop, 72px below 760px. `position: sticky; top: 0`.
- **Tone by route.** The header derives `data-tone` from `usePathname()`: `dark` on `/`, `/about`, `/services`, `/work` (routes that open with a dark band) and on 404; `light` elsewhere. Dark tone: transparent over the band, cream wordmark, gold period, cream nav at 13px Geist 500 `letter-spacing: .02em`, active link 1px gold underline (offset 8px). Light tone: cream, ink wordmark, forest-600 period, ink nav, forest underline.
- **Scrolled state.** A 1px sentinel above `<main>` observed by IntersectionObserver toggles `.is-scrolled`: background `rgba(11,31,24,.86)` + `backdrop-filter: blur(14px)` + bottom hairline `--hairline-dark` on dark tone; `rgba(246,242,232,.9)` + `--line` on light. No scroll listeners.
- Wordmark: existing `BrandLockup`; 36px symbol, 28px wordmark on desktop, 32/25 on phones.
- CTA "Start your project": dark tone = 1px `rgba(246,242,232,.6)` border, cream text, fills cream/ink on hover (160ms); light tone = solid forest-800, cream text. Min-height 46px.
- Dropdown: `--paper` panel, 1px gold hairline across the top, three columns with family titles in Instrument Serif 22px and links in Geist 14px (min-height 44px, hover `--cream-deep`), bottom row "One team. From first idea to launch." + "View all services". Opens with 320ms fade + 8px rise; closes 200ms.
- Mobile sheet (≤900px, matching the existing breakpoint): full-height forest-950 sheet under the header, nav links in Instrument Serif 30px cream with hairline separators, services as the existing accordion (Geist 16px), CTA pinned at the bottom (cream button). Body scroll locked while open.

## 6. Footer (`Footer` in `src/components/shared.tsx`)

Forest-950, separated from the closing plate above by a 1px `--hairline-dark`. Four columns `1.4fr .8fr 1.2fr 1fr` (two columns below 760px, intro full width). The strapline "A clearer brand. A useful website. Content that connects." is set in Instrument Serif italic 24px cream. Column headings in Geist 12px uppercase tracked gold; links cream at 90% opacity, 14px, min-height 40px, hover underline gold. All ten services listed (existing map). Location line with the globe icon in mist. Footer bottom 12px mist (© year, Privacy policy, "Global outlook. Telugu at heart.", Back to top). Photo credits stay, 11px mist with underlines. No oversized wordmark (an earlier owner decision stands).

## 7. Homepage, section by section (`src/app/page.tsx`, `src/app/home.css` rewritten)

Order: Hero (dark) → family hairline nav (dark, bottom of hero) → Services (cream) → Telugu (dark) → Process (cream) → FAQ (cream-deep) → Closing plate (dark) → Footer (dark). Dark : light ratio by height ≈ 35 : 65.

### 7.1 Hero — `<section class="home-hero" aria-labelledby="home-heading">`

Full-bleed forest band: background `radial-gradient(120% 90% at 68% 42%, #16342A 0%, #0B1F18 62%)` + grain. `min-height: min(calc(100svh - 84px), 860px)`; padding-block 72px top / 48px bottom.

```
|  1–6 (copy)                                  |  7–12 (stage)                      |
|  eyebrow                                     |                                    |
|  Branding & websites.           (serif)      |      [ glass-and-brass Eightfold ] |
|  Made to connect.               (italic)     |      560×560 stage, contact shadow |
|  lead paragraph (mist, 34em)                 |                                    |
|  [Explore our services]  Start your project ↗|                                    |
|  ✳ Eight people. Design, development…        |   caption: "Eightfold, our mark"   |
|-------------------------- gold hairline --------------------------------------------|
|  Websites & apps   ✳   Brand & content   ✳   Marketing & ads   (family anchors)    |
```

- Eyebrow (existing `SectionLabel`, restyled): "Creative & digital studio · Working worldwide", gold, 11px uppercase.
- H1 keeps its copy and structure: line 1 "Branding & websites." in Instrument Serif Regular cream; line 2 `<span>Made to connect.</span>` in Instrument Serif Italic cream, the final full stop in gold (`::after`-free: wrap the period in `<span class="period">`). display-1 size, max-width 11ch.
- Lead paragraph (existing copy) in mist, lead size, max-width 34em, margin-top 28px.
- Actions: primary `.button` on dark = cream background, ink text ("Explore our services" → `#services`, arrow icon); `.text-link` "Start your project" cream with 1px gold underline offset 8px. Min-height 54px, gap 28px, margin-top 36px.
- Note: `BrandSymbol` at 28px in gold + "Eight people. Design, development and content in one team." 13px mist, margin-top 40px.
- Stage (`<HeroStage>`): right six columns, square, `aspect-ratio: 1`, max 560px, vertically centred. Contents, bottom to top: inline SVG mark (instant), `<Image className="image-hero-photo" src="/images/brand/eightfold-glass-poster.webp" alt="ManaCircle's Eightfold symbol rendered as glass bars with brass fittings" fill preload sizes="(max-width:760px) 72vw, 40vw">`, then the `<SceneFrame>` canvas, which fades in over 900ms after its first frame while the poster fades to opacity 0 (it remains in the DOM and counts as visible for the existing `.image-hero-photo` assertion). Caption under the stage, 12px mist: "Eightfold — our studio mark, rendered in glass and brass." (factual; no client claim).
- Entrance: eyebrow, H1 line 1, line 2, lead, actions, note rise 24px + fade, 900ms `--ease-out-expo`, 90ms stagger, CSS keyframes with `animation-fill-mode: both`; the stage's SVG/poster fades in at 300ms. Reduced motion: no animation, everything at rest.
- Family nav: keep `<nav class="home-service-strip" aria-label="Service categories">` but render it as the hero's last row — a 1px `--hairline-dark` on top, three anchors (`#build`, `#create`, `#grow`) in Geist 13px uppercase cream, 48px tall, with 14px gold `BrandSymbol` separators; wraps to a 3-row list under 480px.
- Mobile (≤760px): single column; copy first, stage second at 72vw (max 320px) with the poster (lite WebGL only if the quality hook allows); H1 `clamp(40px, 11vw, 56px)`; actions stack with 16px gap; min-height auto.

### 7.2 Services — `<section class="home-services container" id="services">`

Cream. Heading row: eyebrow "What we do" (forest-600), H2 "Find the right service" + italic "for your business." (serif), intro paragraph (existing copy) right-aligned in a 4-column cell. Then the three families as **editorial plates** (`.home-service-row` articles keep ids `build`, `create`, `grow` and the `Reveal` wrapper):

- Row layout at ≥1024px: columns 1–4 summary (numeral "01" in serif italic bronze at 56px on a gold hairline, title in serif h3-editorial, description in body muted), columns 5–8 the illustration in a `<TiltCard>` (aspect 4:3, 3px radius, hairline frame), columns 9–12 the four links (`.home-service-links a`, exactly ten across the three rows — the test counts them) as Geist 15px rows, min-height 48px, `--line` separators, arrow icon that slides 2px on hover.
- Rows are separated by a full-width gold hairline that draws in on scroll (scaleX 0→1 over `animation-range: entry 0% entry 60%`).
- Alternate the plate side on row 2 (plate on columns 1–4, summary 5–8) for editorial rhythm; row 3 returns to the first arrangement.
- Illustrations: keep the owner's preferred images (`creative-studio-hero.webp`, `terra-brand-concept.webp`, `service-marketing-plan.webp`); the Terra scene in particular already carries the forest-and-cream palette. Each plate carries a 11px caption "Illustrative scene · AI-generated" in muted, bottom-left inside the frame on a cream chip — the disclosure stays visible per owner decision, and the existing footer line "Service illustrations are AI-generated." + "Compare all services" link remain in `.home-services-foot`.
- Mobile: summary, plate (full width, 3:2), links, in that order; numerals 40px.

### 7.3 Telugu feature — `<section class="home-telugu" aria-labelledby="telugu-heading">`

Dark band (forest-950 + grain). The existing `recording-microphone.webp` (a gold microphone on black negative space) becomes the cinematic image: `<figure class="home-telugu-photo">` spans columns 1–6 at 520px tall, `object-position: 30% center` so the mic sits left and the black bleeds into the band seamlessly; the photo credit `figcaption` stays ("Editorial photo · Hrayr Movsisyan / Unsplash", 11px mist) at the figure's bottom-left. Copy in columns 7–12: eyebrow "Telugu comes naturally" in gold; H2 "Your audience." / italic "Their language." cream; the Telugu line `<p class="home-telugu-native" lang="te">మీ కథ. మన భాష.</p>` at the Telugu feature size in cream; body (existing copy) in mist; "Explore Telugu content" text link cream with gold underline. On phones the photo comes first at 4:3, and the Telugu line is `clamp(30px, 8.5vw, 40px)` so it never wraps mid-word at 320px. Reveal: copy rises once (600ms), photo scale 1.04→1 via `view()` timeline.

### 7.4 Process — `<section class="home-process container" id="how-it-works">`

Cream. Left 5 columns: eyebrow "How it works", H2 "A small team." / italic "A clear process.", paragraph, "Meet ManaCircle" link. Right 7 columns: the four native `<details name="project-process">` kept exactly (first one `open`; the test clicks "Agree the scope" and expects one open). Summary rows: numeral "01" in serif italic bronze 28px, title in Geist 19px 550, plus icon; 76px tall; gold hairline between items; `::details-content` height transition 320ms with `interpolate-size: allow-keywords` as progressive enhancement. The open answer is body muted with 48px left inset.

### 7.5 FAQ — `<section class="home-questions">`

Cream-deep band. Left: eyebrow "Before you begin", H2 "A few useful" / italic "answers.", paragraph, and the link **"Read our project guides"** (exact text — the test clicks it). Right: the existing `FAQ` component; summaries Geist 16px 500, 72px tall, `--line` separators, answers muted 15px.

### 7.6 Closing plate — `ContactBanner`

Replace the rounded card with a full-bleed forest-950 band (`.contact-banner` keeps its class and content). Left: "A brand, a website or your next campaign." in mist 14px, H2 "Let's plan your project." in serif italic cream at h2 size. Right: cream primary button "Start your project" and the line "Clear scope. Custom quotation." in mist 12px. Behind the text, a static gold hairline ring (SVG circle, 720px, 1px, 20% opacity) offset to the right — no WebGL. Used on every route that has it today.

### 7.7 Homepage behaviours preserved

Ten `.home-service-links a`; zero `main a[href^="/work/"]`; one `.home-process-list details[open]` at load and after clicking; "Read our project guides" link; `.image-hero-photo` visible; `#services`, `#how-it-works`, `#build/#create/#grow` anchors; "Start your project" CTA to `/contact`.

## 8. Other routes

**/services (index).** Dark intro band: eyebrow "Our services", display-2 H1 "Design. Development." / italic "Content & marketing.", lead right-aligned. The `.service-category-nav` becomes a gold-hairline tab row inside the band (cream text, 48px tall). Cream catalogue: each `catalogue-family` opens with a serif numeral (01/02/03 bronze) + family title serif h3-editorial + description, under a gold hairline. Each service `<article>` is a 12-column plate row: illustration `<TiltCard>` (250px, 4:3, hairline frame, `<ViewTransition name={`service-art-${slug}`}>`), title serif 30px, description body, "Explore this service" link, three deliverables with gold check icons in Geist 14px. `--line` separators. Engagement band in cream-deep, `Process` component restyled as four columns with serif numerals on a gold hairline, then the closing plate.

**/services/[slug].** Cream. Breadcrumb 12px muted; eyebrow; H1 serif display-2 (the service title, as today); intro lead; the `ButtonLink` "Discuss your project" stays inside `.service-hero` (the test clicks it by name and expects `?service=slug`); factline 12px. Visual: `.service-real-image` inside a `<TiltCard>` with the matching `<ViewTransition name>`, 4:5 at desktop, caption "Illustrative service scene · AI-generated" kept. `service-at-a-glance` `<dl>` as three columns divided by gold hairlines, terms in Geist 12px uppercase forest-600. "Is this the right fit for your business?" becomes a forest-900 band with the H2 in serif italic cream and the paragraph in mist. Deliverables as a hairline list with serif numerals; scope panel in cream-deep two columns; applications grid; FAQ; reading aside as a paper plate; related services as hairline-framed links; closing plate.

**/work (index).** Dark intro band with H1 "Explore the work." / italic "Try the experience." and the lead. Cream `.portfolio-section` keeps its id, `tabIndex`, browse bar and both `PortfolioPagination` navs untouched (aria-labels "Project pages, top/bottom", link names "Next page, page 2", "Previous page, page 1"). Cards: `<TiltCard>` around the existing window chrome (bar in cream, 1px `--line`, 4:3), `<ViewTransition name={`work-figure-${slug}`}>`; meta row Geist 12px (category in muted, "Live website"/"Project overview" in forest-600); title serif 34px; summary muted; links row with 44px targets. Voice Agent card keeps the SVG wave cover, recoloured gold on forest-900. Two columns at ≥760px, one below.

**/work/[slug].** Team projects (`PortfolioDetail`): cream; heading grid with serif H1 and lead; `.portfolio-detail-toolbar` unchanged (tag chips with hairline borders, external "Visit website" button); figure framed with a hairline, `<ViewTransition>` partner; for `voice-agent` the figure hosts the waveform `<SceneFrame>` with the SVG cover as its server-rendered fallback. Concept projects: the `project-stage` becomes a forest-900 plate with a hairline frame around the existing concept art (`NilaWindow`, `SocialPoster`, `FormArt`, `ScriptArt` untouched); `BeforeAfter` buttons and `.before-art`, `ScriptReader` with `.script-beat p[lang="te"]`, and the captioned `<video>` all stay; the concept disclosure paragraph stays visible in muted 14px.

**/about.** Dark hero with the assembly scene (section 9.3): eyebrow "About ManaCircle", H1 "Eight people." / italic "One creative team.", lead. Cream story section: `about-story` with serif H2 and body; `StudioPhoto` (credit kept) in a `<TiltCard>`. Values as three paper plates with serif 28px titles and gold hairline tops. `about-scope` as a cream-deep band with the secondary button. Closing plate.

**/contact.** Cream throughout for legibility. H1 "Tell us what" / italic "you're building." Grid `.78fr 1.22fr`: aside with the three steps as serif numerals + Geist 15px, a static gold line-art Eightfold "seal" (SVG, 96px) above "A conversation. Then a clear plan.", direct-contact links when configured. The `ContactForm` keeps every id, label, button text ("Download project brief"), notice, `.form-error-summary` focus behaviour, `.form-optional`, `#website-error` and the status text "Nothing has been sent…" — only styled: paper card, 1px `--line` border, gold hairline under the H2, inputs 52px tall, 6px radius, `--line-strong` borders, focus ring 2px forest-600 offset 2px, error state `--error` border + text.

**/guides.** Cream. H1 "Plan your website," / italic "content or campaign." Five `.guide-card` plates (count preserved) in a 3 + 2 grid: category eyebrow in bronze, title serif 28px, description muted, "Read the guide" link; gold hairline top; optional `<TiltCard>`.

**/guides/[slug].** Reading layout 240px sticky TOC (Geist 13px, hairline separators) + article max-width 72ch. `guide-answer` as a cream-deep pull block in Geist 20px/1.6 (readability over flourish); section H2s serif; examples with a 2px forest-600 left rule; the closing "Prepare your project brief" button.

**/privacy, /thank-you.** `simple-page` on cream: serif H1, body 17px/1.75, max-width 70ch.

**404 (`not-found.tsx`).** Full dark page (forest gradient + grain), the missing-bar scene centred (section 9.5), eyebrow "404 · A small detour" gold, H1 "Let's get you" / italic "back in the circle." (the test requires "circle" in the H1), paragraph mist, cream primary + outlined secondary buttons.

**error.tsx.** Cream `simple-page`, serif H1 "A small interruption.", "Try again" button; no 3D, no fonts beyond what the layout already loaded.

## 9. 3D system

### 9.1 Architecture (shared by all moments)

- `src/components/three/scene-frame.tsx` (client). Owns the capability gate, the fallback and the loop control. Renders the children fallback (poster/SVG) from the server HTML, then `useEffect` → `useSceneQuality()` → if not `off`, `next/dynamic(() => import("./eightfold-scene"), { ssr: false })` (allowed only because this wrapper is a client component). Wraps `<Canvas dpr={[1, 1.5]} frameloop={inView ? "always" : "never"} gl={{ antialias: true, alpha: true, powerPreference: "default" }} camera={{ fov: 32, position: [0, 0.4, 7] }} onCreated={…first-frame → fade-in…}>`. IntersectionObserver with `rootMargin: "10%"` drives `inView`. Listens to `webglcontextlost` → shows the fallback permanently. Exactly one `SceneFrame` is ever mounted per route.
- `src/components/three/use-scene-quality.ts`: returns `"off" | "lite" | "full"`. `off` when `prefers-reduced-motion`, `navigator.connection.saveData`, `deviceMemory < 4`, WebGL2 unavailable or width < 760 and (`deviceMemory < 4` or `hardwareConcurrency < 6`). `lite` for 760–1023px or coarse pointers; `full` otherwise. Reduced motion with WebGL available still renders one static frame (`frameloop="demand"`, a single `invalidate()`), satisfying "static pose or fallback".
- `src/components/three/eightfold-mesh.tsx`: the eight capsules + ferrules, props `spread` (0–1), `missing` (index | null), `frosted` (bool). Geometry: `CapsuleGeometry(0.22, 1.1, 4, 12)` and `CylinderGeometry(0.235, 0.235, 0.12, 24)`, instanced per bar; total under 6k triangles.
- `src/components/three/studio-lighting.tsx`: `<Environment resolution={256|128} frames={1}>` with the three `<Lightformer>`s (warm softbox `#FFF1D6` intensity 3 at `[2,4,3]` scale `[5,2.5,1]`; sage rim `#D7E6D4` 1.2 at `[-4,1,-2]` scale `[3,6,1]`; gold ring `#D6B875` 0.9 at `[0,-3,2]` scale 4), `<spotLight position={[3,5,4]} angle={0.45} penumbra={0.7} color="#FFF0D2" />`, `<pointLight position={[-4,-1,2]} color="#B9D1BC" />`; optional `<ContactShadows>`; `<PerformanceMonitor onDecline>` steps dpr 1.5 → 1.
- Materials: glass `MeshPhysicalMaterial { color: "#DFE9DC", transmission: 0.95, roughness: 0.06, thickness: 1.4, ior: 1.46, attenuationColor: "#9FBFA6", attenuationDistance: 2.2, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1.2 }`; lite = `transmission: 0, transparent: true, opacity: 0.85, roughness: 0.25`. Brass `MeshStandardMaterial { color: "#C9A961", metalness: 1, roughness: 0.28, envMapIntensity: 1.4 }`.

### 9.2 Home hero — glass-and-brass Eightfold (`variant="hero"`)

Placement, object, materials and lighting as in 9.1, with `ContactShadows frames={1} opacity={0.4} blur={2.6} scale={8} far={3} resolution={512} color="#061611" position={[0,-1.9,0]}` (baked once: a classic product-shot shadow). Entrance 1400ms (`scale 0.92→1`, `rotation.y −0.35→0`, expo) as the poster crossfades out over 900ms. Idle: `rotation.y += delta * (2π/48)`; `<Float speed={1} rotationIntensity={0.15} floatIntensity={0.3}>`. Pointer (fine pointers only): target `rotation.x = pointer.y * 0.14`, `rotation.y offset = pointer.x * 0.18`, applied with `MathUtils.damp(current, target, 4, delta)`. Scroll (motion `useScroll` on the hero element): `rotation.z += progress * 0.35`, `position.y += progress * 0.6`, canvas opacity 1→0 over progress 0.7→1, then `frameloop="never"`. Lite: frosted glass, no ContactShadows, Environment 128, idle rotation only. Static fallback: the poster `eightfold-glass-poster.webp` plus the inline SVG beneath it.

### 9.3 About — assembly (`variant="assembly"`)

Each bar's position is `base * (1 + spread * 1.6)` with rotation jitter `spread * ±0.35 rad` (seeded per index). Scroll-linked `spread` 1→0 via `useScroll({ target: hero, offset: ["start start", "end start"] })` through easeOutExpo, finishing at 60% of the section's exit. Camera `[0, 1.2, 7.5]`. `ContactShadows frames={Infinity}` on full only. Phones/tablets and keyboard-only: auto-assemble over 1600ms when in view, then hold; idle 1 turn / 60s. Fallback: inline exploded SVG crossfading to the assembled SVG on view (CSS), static assembled SVG under reduced motion.

### 9.4 Voice Agent — brass waveform (`scene="waveform"`)

24 `CylinderGeometry(0.09, 0.09, h, 6)` rods, heights from the existing array divided by 60, 0.3 units apart on a `BoxGeometry(8, 0.15, 1.4)` plinth (`#0F2A20`, roughness 0.5); camera `[0,1.6,6]` fov 30; studio lighting without shadows; key light X lerps ±1.5 toward the pointer. Rise on view: `scale.y 0→1`, 40ms stagger, 900ms expo. Full-tier idle: `h * (1 + 0.06 * sin(t * π + i * 0.4))`. Lite: rise then hold. Fallback: the existing SVG wave in `PortfolioVisual`, recoloured gold on forest-900, with its `role="img"` label.

### 9.5 404 — missing bar (`variant="missing-bar"`)

`missing={5}`; the absent bar drawn as a brass outline at opacity 0.18. Idle 1 turn / 60s; entrance fade 900ms; no pointer/scroll coupling; cooler key `#F3EBDC`; no shadows. Fallback: SVG with bar 5 at 20% opacity and a gold dashed outline.

### 9.6 CSS-3D plates (`src/components/tilt-card.tsx`)

Wrapper `perspective: 1200px`; inner `transform: rotateX(var(--rx)) rotateY(var(--ry))`, max 5°, custom properties set in rAF from pointer position; frame pseudo-element at `translateZ(20px)` with a 1px gold hairline 8px outside the content; leave transition 600ms `--ease-out-expo`; shadow from `0 1px 0 var(--line)` to `--shadow-plate` on hover; dark plates add a pointer-following gloss (`radial-gradient(400px at var(--mx) var(--my), rgba(255,241,214,.14), transparent 60%)`). Active only under `(hover: hover) and (pointer: fine)` and not under reduced motion. The plate markup is the `<ViewTransition>` shared element.

## 10. Motion system

Tokens in `tokens.css`: `--ease-out-expo: cubic-bezier(.16,1,.3,1)`, `--ease-in-out-quart: cubic-bezier(.76,0,.24,1)`, `--ease-standard: cubic-bezier(.2,.7,.2,1)`; `--dur-xs: 160ms` (hover colour), `--dur-s: 320ms` (UI state, details, dropdown), `--dur-m: 600ms` (section reveals, tilt return), `--dur-l: 900ms` (hero entrance, poster crossfade), `--dur-xl: 1400ms` (3D settle).

- **Entrance.** Hero: CSS keyframes, 900ms expo, 90ms stagger, translateY 24px + opacity. Everything below the fold: the existing `Reveal` component upgraded to accept `delay` and `distance` (default 20px, 600ms expo, once, threshold .08); content remains in the server HTML and is only transformed, never hidden before JS.
- **Scroll-linked (CSS only, `@supports (animation-timeline: view())`).** Gold hairlines draw in (`scaleX 0→1`, range `entry 0% entry 60%`); serif numerals drift −12px→12px; plate images parallax ±16px; Telugu photo scale 1.04→1. All transform/opacity only. The two 3D scroll couplings use motion's `useScroll` inside the client wrappers.
- **Hover.** Buttons: background 160ms, arrow icon `translate(2px,-2px)` 180ms (existing rule kept); links underline colour 160ms; plates tilt and lift (section 9.6); nav underline grows from left 240ms.
- **Page transitions.** `import { ViewTransition } from "react"` in `layout.tsx` wrapping `{children}` with `default="vt-page"`; CSS `::view-transition-old(root)` 240ms fade-out, `::view-transition-new(root)` 320ms fade-in `--ease-standard`. Shared elements: `service-art-${slug}` (services ↔ detail), `work-figure-${slug}` (work ↔ detail). Durations never exceed 400ms so navigation stays snappy; under reduced motion `::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*) { animation: none !important }`.
- **Reduced motion.** `@media (prefers-reduced-motion: reduce)`: all keyframes and transitions off (existing global rule stays), scroll-driven animations off, tilt off, view transitions off, smooth scroll off, 3D renders one static frame or the fallback. Nothing autoplays audio or video; the Nila motion study keeps user controls.

## 11. Component inventory and file paths

- `src/app/tokens.css` (new, unlayered `:root` tokens: palette, type, spacing, motion).
- `src/app/atelier.css` (new, `@layer atelier`: surfaces, header/footer tones, buttons, plates, hairlines, numerals, bands, page-intro, forms, 404). `globals.css` gains `@layer reset, base, components, studio, photography, refinement, atelier, responsive;` and `refinement.css` / `studio.css` are wrapped in `@layer refinement {}` / `@layer studio {}` so the new layer wins deterministically.
- `src/app/home.css` (rewritten for sections 7.1–7.6), `src/app/portfolio.css` (restyled, selectors kept), `src/app/header.css` (tones, sheet, dropdown).
- `src/app/layout.tsx`: add `displayFont` (`--font-display`), `tokens.css` + `atelier.css` imports, `<ViewTransition>` around `{children}`, header sentinel `<div data-header-sentinel aria-hidden />`, `themeColor` → `#0B1F18` for dark routes via per-route `viewport` export where applicable (home, about, services, work, 404).
- `src/components/hero-stage.tsx` (server: SVG + poster `<Image className="image-hero-photo">` + `<SceneFrame>`).
- `src/components/three/scene-frame.tsx`, `use-scene-quality.ts`, `eightfold-scene.tsx` (Canvas + variants), `eightfold-mesh.tsx`, `studio-lighting.tsx`, `waveform-scene.tsx`, `materials.ts`.
- `src/components/tilt-card.tsx`, `src/components/hairline.tsx`, `src/components/section-number.tsx`, `src/components/reveal.tsx` (extended), `src/components/brand.tsx` (unchanged geometry; add `EightfoldOutline` SVG variants for fallbacks: `exploded`, `missing`).
- `src/components/header.tsx` (tone + scrolled state; behaviour unchanged), `src/components/shared.tsx` (`ContactBanner`, `Footer`, `Process`, `SectionLabel` restyled; same exports).
- `public/images/brand/eightfold-glass-poster.webp` (rendered once via a dev-only `?poster=1` branch in `HeroStage` that mounts the scene at dpr 2, 1400×1400, and a Playwright snippet saving `canvas.toDataURL("image/webp", .9)`; documented in `docs/ASSETS.md` as original 3D artwork).
- `docs/DIRECTION-EIGHTFOLD-ATELIER.md` (this spec, decisions) and an update to `docs/ASSETS.md`.
- `tests/browser-checks.cjs`: no selector changes required by this spec; add assertions that `canvas` count ≤ 1 per route and that the hero poster is in the server HTML.

## 12. Performance plan

- **LCP.** Candidates are the H1 (server-rendered, `display: swap`, metric-matched fallback) and the poster (`preload`, ≤120KB WebP, exact `sizes`). WebGL never participates in LCP. Target < 2.0s on a throttled mobile lab run; measure with the `lighthouse-audit` skill before and after.
- **JavaScript.** three + R3F + drei (~150KB gzipped) load only from `SceneFrame` via `next/dynamic` after hydration and `requestIdleCallback` (or 300ms timeout), and only when the quality hook is not `off`. Import drei modules by name (`Environment, Lightformer, ContactShadows, Float, PerformanceMonitor`) so tree-shaking applies. motion is imported where used (header, scene wrappers, tilt), not in the root layout.
- **Rendering.** dpr `[1, 1.5]`; antialias on; `frameloop` switched to `"never"` when offscreen and after the hero fades; `Environment frames={1}` (PMREM computed once); `ContactShadows frames={1}` in the hero; geometry under 6k triangles per scene; no post-processing packages; transmission only on the full tier. `PerformanceMonitor` steps dpr down on sustained frame drops.
- **One canvas per route.** Home: hero only (Telugu section is photography). About: hero only. Work detail: Voice Agent only. 404: one. Services, contact, guides, work index: none.
- **CSS.** Scroll-driven animations and tilt use transform/opacity only; grain is a 400-byte data URI; fonts total ~168KB (Geist 28KB + two TTFs ~70KB) with swap.
- **Images.** Existing WebPs reused; below-the-fold images lazy; illustrations 4:3 at ≤ 900px wide; the microphone photo served at 1200px.
- **Budgets.** LCP < 2.0s, CLS < 0.05 (fixed aspect-ratio stages, font fallback metrics), INP < 200ms, TBT < 200ms, total JS on home < 450KB gz including 3D, 3D chunk deferred so the first-party JS before idle stays under 150KB gz.

## 13. Accessibility and preserved behaviours

- Contrast: every text pair in section 2 is ≥ 4.5:1; large headings on dark ≥ 14:1; UI boundaries ≥ 3:1 (`--line-strong`). Focus ring: 2px forest-600 offset 2px on cream; 2px gold offset 2px on dark (both ≥ 3:1 against their surface, satisfying WCAG 2.2 focus appearance).
- Keyboard: unchanged header behaviours, native `<details>`, buttons ≥ 44×44, links ≥ 44px tall in lists, skip link restyled (forest-800 on cream, cream on dark).
- Motion: no scroll hijacking, no autoplay audio, no parallax on touch, reduced-motion handled at three levels (CSS, motion `useReducedMotion`, scene quality hook).
- Semantics: 3D stages are decorative (`aria-hidden` on canvases); the poster `alt` describes the mark; the SVG fallbacks carry `role="img"` labels only where they are the content (Voice Agent).
- No horizontal overflow at 320/390/768/1024/1440: container math above, `min-width: 0` on grid children, Telugu line clamp, stage `max-width: 100%`.
- Test hooks preserved as listed in 7.7 and section 8 (pagination names, toolbar, `.before-art`, `.script-beat p[lang="te"]`, contact form ids and texts, menu button names, 404 heading text).

## 14. Risks and mitigations

See the structured `risks` list; the headline items are gloom (cream majority, warm key, 15:1 text), LCP (poster + deferred 3D), transmission cost (quality tiers), serif legibility (≥28px rule), CSS layering (wrap legacy files in layers), test coupling (hooks preserved), poster production in a restricted workspace (SVG fallback is final-quality), progressive browser features (guards + cross-browser QA), Telugu system fonts (320px check) and copy scope (presentation only).

## 15. Decisions log

1. Name: Eightfold Atelier. The mark is the protagonist; the site is its studio.
2. Dark surfaces are forest-950 `#0B1F18`, not black; always with the warm radial gradient and grain.
3. Gold is a line, not a fill: hairlines everywhere, text only on dark; bronze `#7A5F25` is the gold voice on cream.
4. Instrument Serif for headings ≥ 28px and numerals; italic for the second line of every two-line heading; Geist for everything else.
5. Four WebGL moments (home hero, about assembly, Voice Agent waveform, 404) plus CSS-3D plates; never two canvases on one route.
6. The poster stays in the DOM beneath the canvas and fades to opacity 0, so the hero works without JS, under reduced motion, on weak devices and in the existing test.
7. Phones get WebGL only when the quality hook says so; the poster is the default phone experience.
8. The Telugu section uses the existing microphone photograph instead of 3D — it is already a product shot in this palette.
9. Buttons are 6px-radius rectangles, plates 3px; no pills, no glass UI panels, no gradient cards.
10. Copy, data, services, routes, disclosures, credits and the footer service list are unchanged; only presentation changes.
11. The `ContactBanner` becomes a full-bleed dark plate, used on every route that has it today.
12. Page transitions are short fades with two shared-element morphs; nothing slides.
13. The footer keeps its current structure and photo credits and does not get an oversized wordmark.
14. Legacy CSS is layered rather than deleted in this pass; dead selectors are removed in a follow-up once the new pages are verified.