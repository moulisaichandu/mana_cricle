# Visual assets and provenance

## Current direction — 13 October 2026

The homepage uses an original HTML/CSS presentation of Eightfold stationery and a concept browser with real workspace photography. The figure is explicitly labelled illustrative. Real microphone photography supports the Telugu section; About uses the real desk photograph. Project screenshots remain on Our work. The service catalogue, detail pages and homepage previews use the owner's preferred earlier illustrations. Stock photographs illustrate creative work; they are not represented as ManaCircle's own office, equipment or staff. Photo credit links appear in the footer and beside the microphone and About photographs.

| Asset | Source and usage |
| --- | --- |
| `public/images/photography/bright-workspace.webp` | Alpha En, [modern sunlit workspace](https://www.pexels.com/photo/modern-sunlit-home-office-desk-setup-31213668/), under the [Pexels licence](https://www.pexels.com/license/), checked 12 October 2026. Downloaded from the official CDN as a 1600 × 1067 WebP, 105,432 bytes. Used inside the homepage concept browser; credited in the footer, not described as ManaCircle's premises. |
| `public/images/photography/sunlit-studio.webp` | Gaku Suyama, [sunlit art studio](https://unsplash.com/photos/sunlit-art-studio-with-tables-and-artwork-kc6ZgQddb2M). Free Unsplash-licensed photo, checked 12 October 2026 and downloaded from its official CDN as WebP, 491,608 bytes. Retained from the earlier exploration; no active page displays it. |
| `public/images/photography/creative-desk.webp` | Kelly Sikkema, [notebook, pen, headphones and coffee](https://unsplash.com/photos/notebook-pen-headphones-and-coffee-on-a-wooden-desk-wl2qQ2JHMXA). Downloaded from the official Unsplash CDN as a 1600 × 1067 WebP, 210,916 bytes. Used on About. |
| `public/images/photography/recording-microphone.webp` | Hrayr Movsisyan, [condenser microphone](https://unsplash.com/photos/black-and-gray-condenser-microphone-pfhld_5yQrs). Downloaded from the official Unsplash CDN as a 1200 × 800 WebP, 29,886 bytes. Used in the homepage Telugu feature. |
| `public/images/projects/*.webp` | Actual UI captures from the owner-supplied Abacus Experts, Public Speaking, chess-learning and exam-preparation sites. See [portfolio provenance](PORTFOLIO-PROJECTS.md). Used on the portfolio pages. |
| `src/components/brand.tsx`, `public/brand/eightfold.svg` | Original native SVG Eightfold mark selected by the owner. This is the only active ManaCircle identity. See [identity specification](HEADER-IDENTITY.md). |
| `public/brand-mark.svg`, `src/app/icon.svg`, `src/app/opengraph-image.tsx` | The same Eightfold geometry for organization identity, browser icon and generated social preview. Earlier logo alternatives and the supplied JPEG website copy have been removed. |
| `public/fonts/geist-latin.woff2`, `geist-regular.ttf` | Locally served Geist, distributed with Next.js. The TTF is copied from Next.js's bundled OG renderer for the social image's wordmark and supporting text. SIL Open Font License 1.1 retained in `public/fonts/OFL.txt`; [upstream licence](https://github.com/vercel/geist-font/blob/main/OFL.txt). |
| `public/fonts/InstrumentSerif-Regular.ttf`, `InstrumentSerif-Italic.ttf` | Instrument Serif by Rodrigo Fuenzalida with direction from the Instrument team. [Author's repository and licence](https://github.com/Instrument/instrument-serif), downloaded from the Google Fonts repository. Original SIL Open Font License retained as `InstrumentSerif-OFL.txt`. Retained from the earlier exploration; no active page or social image loads these faces. |

The three real-photo source pages were checked on 12 October 2026 and offered free downloads under the [Unsplash licence](https://unsplash.com/license). These are stock-image licences, not claims of an exclusive image commission. Responsive crops and sizes are served locally by Next.js; browsers do not contact Unsplash to display them.

## Motion and interface artwork

`src/components/reveal.tsx` adds a one-time 500ms arrival movement to service articles and the Telugu section. The original hero presentation has a one-time 700ms transform/opacity entrance. Nothing auto-advances or loops. Content and native process/FAQ disclosures work without JavaScript. Reduced-motion preferences skip animations. Fine-pointer hover shifts link arrows. The old homepage tab component was removed.

UI icons, Voice Agent workflow artwork and concept interfaces are original HTML/CSS/SVG in this repository. They are not photographs or evidence of campaign outcomes.

## Restored service illustrations and retained concept assets

The following files were generated for earlier service explorations or clearly labelled fictional studies. The owner preferred the service images and requested their restoration. Service hero captions and the homepage service section identify the illustrations as AI-generated. Existing concept URLs are preserved.

| Asset family | Provenance and remaining context |
| --- | --- |
| `nila-product-v2.webp`, `botanical-tea.png` | AI-generated, fictional Nila product scenes. Used in the Nila website and social-motion concepts. Source PNGs remain alongside derivatives. |
| `studio-interior.png`, `studio-interior.webp` | AI-generated interior for the fictional Studio Form study, explicitly disclosed on the concept page. |
| `terra-brand-concept.*`, `cafe-morning.*` | AI-generated fictional café identity/menu scenes. Terra is used in the branding service and homepage service preview; no actual café client is claimed. |
| `creative-studio-hero.*`, `creative-worktable.*`, `voiceover-studio.*`, `service-*.webp` | Restored service-specific illustrations for websites, website review, Android, QR menus, marketing planning, Meta Ads, Instagram editing, writing and Telugu production. The source-to-service map is `src/lib/service-images.ts`; earlier provenance is in `SERVICE-IMAGE-PROMPTS.md`. These are illustrative scenes, not the team's premises, equipment or measured campaigns. |
| `reel-poster.jpg`, `media/nila-motion.webm`, `media/nila-motion.vtt` | Original eight-second silent motion study using the generated tea scene and three text beats. The concept provides user-controlled playback and captions. No recorded voice, music or client film is claimed. |
| `src/components/service-art.tsx`, `android-app-art.tsx`, `concept-art.tsx` | Original illustrative interfaces. Terra and Nila are fictional. Sample QR artwork is not a live ordering system. |
| `src/components/circle-art.tsx` | Earlier eight-part decorative artwork, not the current brand logo. |

No stock portraits, invented team photographs, testimonials or numerical performance claims were added. Telugu content uses system fallback fonts; no external font request is required.
