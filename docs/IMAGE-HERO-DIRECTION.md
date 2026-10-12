# Homepage image hero — 8 October 2026

The later [homepage clarity rework](HOMEPAGE-CLARITY-REWORK.md) supersedes this hero's copy and layout. The generated workspace image is retained.

The owner rejected the previous large text block followed by two concept cards and explicitly requested a strong image with the website content over it.

## Direction before implementation

- A single full-width editorial workspace photograph immediately below the cream navigation.
- Keep the existing warm white and forest green identity: background #173E35, white text #FFFEFA, quieter text #E3EADF, solid warm-white primary button.
- Generate a believable creative workspace with the desk, laptop and design materials on the right, leaving natural dark negative space on the left. No fictional employees or implied client work.
- Live HTML headline: “Your business. Built to stand out.” The supporting text names the actual website, app, brand, marketing and English/Telugu content services.
- Keep real links for discussing a project and exploring services. Keep the illustration disclosure unobtrusive but visible.
- Desktop: left-aligned copy over a darkened left area; workspace remains visible on the right. Mobile: subject crop and a stronger lower shade so the copy and buttons remain readable.
- Preserve existing service sections, search metadata and the owner's removal of the oversized footer wordmark.

This replaces the earlier standalone typography and two-panel hero. The subject is relevant to the creative/digital offer, while the image is explicitly illustrative rather than a claim about the actual team's premises.

## Verification

- Implemented the full-width workspace hero with selectable HTML copy and working project/services links. The original generated PNG and a 136,252-byte WebP derivative are retained; the complete prompt and provenance are recorded in `ASSETS.md`.
- Browser checks passed at widths 320, 390, 600, 601, 768, 1024, 1440 and 1920 pixels: no horizontal overflow, exactly one H1, all ten service links retained and no oversized footer wordmark.
- Inspected screenshots at 320, 390, 768 and 1440 pixels. Increased the image source size for portrait crops to avoid stretching a low-resolution mobile source. White text remains readable over the dark overlay.
- Axe reported zero WCAG A/AA violations in the hero at 390 and 1440 pixels. Image-background readability was also reviewed visually.
- Verified the primary button by keyboard (visible focus, Enter opens `/contact`) and the services link (`/services`). The mobile navigation opens and closes with Escape. No browser JavaScript errors were recorded.
- Evidence: `.artifacts/image-hero-browser-checks.json` and `.playwright-mcp/image-hero-{width}.png`.
- `npm run build` passed, including TypeScript and static page generation. Restarted the production preview at `http://127.0.0.1:3100` and verified HTTP 200, the new heading, a loaded hero image and zero JavaScript errors in Chromium. Production evidence: `.artifacts/image-hero-production-check.json` and `.playwright-mcp/image-hero-production.png`.
