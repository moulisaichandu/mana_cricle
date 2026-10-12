# Visual assets and provenance

## Team project previews — 9 October 2026

The four images in `public/images/projects/` are actual UI captures from the owner-supplied Abacus Experts, Public Speaking, chess learning and exam preparation websites. Chess and exam previews show interface regions without the excluded company name or logo. Voice Agent uses an original HTML/CSS/SVG workflow illustration. See [portfolio sources, asset dimensions and verification](PORTFOLIO-PROJECTS.md). The fictional concept disclosures below apply to the earlier design samples, not these team projects.

The service catalogue now includes six new service-specific generated images and four existing images. See [service image paths, final prompts and usage notes](SERVICE-IMAGE-PROMPTS.md) for the complete set.

The header, compact footer, favicon and social preview use the new original circular `m` monogram. See [header identity and navigation direction](HEADER-IDENTITY.md).

Created for this ManaCircle website on 6 October 2026.

## Image hero revision — 8 October 2026

- Created with the built-in ChatGPT image-generation tool in response to the owner's request for a photographic homepage hero with live text over the image.
- Original: `public/images/creative-studio-hero.png`; served derivative: `public/images/creative-studio-hero.webp`, 1672 × 941, 136,252 bytes, WebP quality 86.
- The scene is illustrative and AI-generated; it does not claim to depict ManaCircle's actual office. A visible caption identifies it. The background image has empty alt text because the live HTML provides the message and the image is decorative.
- The workspace photograph was visually inspected before integration. The photograph is cropped responsively, with a separate dark readability overlay; the headline, description and links remain selectable HTML.
- The Terra image appears in the branding service and the homepage branding/content service card. The workspace image is used in the hero and the websites/apps service card.

Final generation prompt:

> Use case: photorealistic-natural. Asset: cinematic full-width homepage hero photograph for ManaCircle, a creative and digital services studio in India. Create a refined, believable design workspace, landscape 16:9, ideally 2560x1440. Composition is crucial: the LEFT 52 percent is mostly a quiet deep forest-green painted wall and dim natural shadow, with generous uncluttered negative space for live website text. The RIGHT half contains a real walnut desk beside a tall window: an open thin silver laptop angled toward camera showing a tasteful cream-and-green website layout with understated geometric content blocks and no legible text; a small collection of cream brand-design boards, paper colour swatches, an open sketchbook, pencil and ceramic coffee cup. A small mirrorless camera rests naturally at the far right of the table. A leafy indoor plant and sheer warm ivory curtain soften the window edge. The desk and objects occupy the right middle/lower part, with the laptop fully visible. Photographed at desk height from a natural three-quarter perspective, 35mm lens, premium architectural/editorial photography. Late-afternoon window light falls across the work surface, real soft highlights on metal, textured paper, slightly worn wood, rich dark green shadows and warm neutral whites. Calm, creative, intentional, real photographic detail and subtle grain; sophisticated realistic studio, not glossy CGI or an impossibly perfect showroom. Leave all left-side copy space quiet and genuinely dark enough for white headline text, without a painted-on gradient. No people, hands, faces, logos, watermarks, typography, slogans, floating objects, neon, sci-fi graphics, mockup borders or text overlays. This is an illustrative workspace scene, not a claimed real office.

## 8 October rework assets

Generated with the built-in ChatGPT image tool, then copied into this workspace and visually inspected.

| New asset | Use and provenance |
| --- | --- |
| `public/images/terra-brand-concept.webp` | 1536 × 1024, 168,718 bytes. Original fictional Terra café identity still life. Used in the branding service and homepage branding/content service card. The hero uses the workspace image. Source PNG retained alongside it. |
| `public/images/nila-product-v2.webp` | 1536 × 1024, 215,238 bytes. Original fictional Nila branded tea tin and glass still life. Used in the HTML Nila website concept. Source PNG retained alongside it. |
| `public/images/studio-interior.webp` | Optimised derivative of the existing generated interior. Used in the website mockup and Studio Form portfolio cover. |
| `public/brand-mark.svg` and `src/app/icon.svg` | Original two-circle brand geometry matching the header wordmark; SVG with 512 × 512 intrinsic dimensions. Used for organization identity and favicon. |

Generation prompt briefs:

- Terra: landscape editorial café packaging photography; forest-green matte coffee bag and cup bearing the fictional word “terra”, cream menu stationery, ceramic cappuccino, pale stone counter, green plaster backdrop and realistic natural window shadows. Tactile paper and ceramics, no people, CGI gloss, UI or watermarks.
- Nila: landscape editorial tea product photography; ivory tin with a forest-green “NILA” label, clear glass of amber tea, stone plinth, cream linen and natural leaves. Realistic window light, photographic texture and imperfect materials; no people, floating objects, screens or watermarks.

Both are fictional illustrative scenes. They are not evidence of a commissioned brand identity, a physical product, an owned studio or a real client. The homepage discloses the AI-generated imagery, and project/service previews retain concept labels. Brand layouts, all website text and the surrounding interfaces remain real HTML/CSS. The previously generated tea still remains in the social-motion concept so its poster and video stay consistent.

| Asset | Origin and use |
| --- | --- |
| `public/images/botanical-tea.png` | Original image generated with the built-in image-generation tool for this project. An unbranded olive glass teacup, pale tea tin, linen and foliage in a warm studio still life. Used in the fictional Nila website and social concepts. |
| `public/images/studio-interior.png` | Original AI-generated interior image for the fictional Studio Form concept: warm daylight, natural materials and a contemporary living room. Used only inside clearly labelled concept work. |
| `public/images/creative-worktable.webp` | Created with the built-in ChatGPT image tool for the homepage: a natural-light creative worktable with notebook, swatches and coffee. Illustrative scenery, not a photograph of ManaCircle’s actual office. Original retained as `creative-worktable.png`. |
| `public/images/cafe-morning.webp` | Created with the built-in ChatGPT image tool: cappuccino and croissant with natural café textures and window light. Used in the fictional Terra brand and QR-menu previews. Original retained as `cafe-morning.png`. |
| `public/images/voiceover-studio.webp` | Created with the built-in ChatGPT image tool: microphone, pop filter and headphones in a natural recording setup. Used in the Telugu service concept; not evidence of owned equipment or an audio sample. Original retained as `voiceover-studio.png`. |
| `public/fonts/geist-latin.woff2` | Locally served Geist variable font, distributed with Next.js. Copyright 2024 The Geist Project Authors; SIL Open Font License 1.1. License retained in `public/fonts/OFL.txt`; [upstream licence](https://github.com/vercel/geist-font/blob/main/OFL.txt). |
| `public/images/reel-poster.jpg` | Poster frame of the original motion composition. |
| `public/media/nila-motion.webm` | Original eight-second, silent canvas motion study: slow movement of the generated still with three text beats. Recorded locally with browser MediaRecorder. No music, voice or stock footage. |
| `public/media/nila-motion.vtt` | English text equivalents for the three motion beats. |
| `src/app/icon.svg`, `public/brand-mark.svg` | Original circular `m` monogram, matching the revised ManaCircle header and footer identity. |
| ManaCircle wordmark and UI icons | Text and original simple SVG geometry in `src/components/icon.tsx`. |
| Nila website, social layouts and Studio Form website layout | Original HTML/CSS concept designs in `src/components/concept-art.tsx` and the shared stylesheet. |
| Brand, menu and Telugu service previews | Original HTML/CSS/SVG compositions in `src/components/service-art.tsx`, now combined with generated photographic scenes. Terra is a fictional café identity. The QR symbol is explicitly illustrative and not scannable; no voice recording is claimed. |
| Eight-part circle artwork | Original SVG geometry in `src/components/circle-art.tsx`, representing the confirmed eight-person team. |
| English/Telugu script samples | Original illustrative copy for the fictional tea concept. Timing requires a read-through before any real recording. |
| Android service preview | Original HTML/CSS phone illustration for the fictional Nila app, in `src/components/android-app-art.tsx`. Reuses the generated tea still and is explicitly labelled as a design concept. |

These are self-initiated samples, not real client projects or registered brand claims. No customer logos, portraits, testimonials or performance statistics are used. The product visual is identified as AI-generated on the social concept page. Geist is served locally; the Telugu samples use available system fallback fonts. There are no remote font requests. The generated interior is disclosed on the Studio Form concept page.

The motion recipe is preserved in `scripts/create-motion.cjs` for local browser-tool execution. The final assets are already included; normal development and production do not regenerate them or depend on a generation service. The brief supplied to image generation described the visual direction only, without customer information.

## Photographic direction

The additional three images use natural window light, believable everyday materials, restrained cream/olive tones and irregular surface details. They are AI-generated photographic illustrations, not documentary photos. No staff identities or client premises are represented. Source PNGs remain in the workspace; WebP derivatives keep their full 1448 × 1086 dimensions and use quality 86 compression. The three consumed source assets total approximately 453 KiB before Next.js responsive image optimisation. Images have reserved aspect ratios and descriptive alt text, or an enclosing accessible concept description when decorative. No external image host is required.
