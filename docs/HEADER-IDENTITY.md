# ManaCircle header identity and service navigation

## Direction

The first impression should introduce a recognisable creative team and make its services easy to find. Keep the agreed warm white and deep green. Replace the overlapping circles with an original circular `m` monogram: the connected arches represent people working together, and the enclosing circle refers directly to ManaCircle.

- Colours: warm white `#faf9f5`, forest `#173e35`, supporting green `#24624e`, muted text `#59665d`, divider `#d6ddd4`.
- Type: the existing locally hosted Geist; a lowercase wordmark with carefully spaced letters and a quieter “Creative & digital” descriptor. No additional font download.
- Layout: left-aligned compact identity; navigation and project CTA on the right. A three-column services panel aligns to the header container. On phones it expands inside the navigation and scrolls within the available viewport.
- Restraint: the logo is the visual focus. The dropdown uses real service names, quiet separators and familiar links; no promotional imagery or extra marketing copy.

```text
[m  manacircle]   Home   Services v   Sample work   How it works   About us   [Start your project]
   Creative & digital     | Websites & apps | Marketing & ads | Brand & content |
                         | 4 service links | 2 service links | 4 service links |
                         |                           View all services       |
```

The circular monogram is specific to the business name. Keep the cream/green palette because it is the user's chosen direction; avoid introducing another decorative accent or a generic stock logo.

## Required behaviour

- Home is the first navigation link on every page, on desktop and inside the mobile menu. It returns to `/`, closes open navigation and is marked current only on the homepage. Added 9 October 2026.
- Hover Services to reveal the panel; allow moving into it without flicker.
- Clicking the Services text navigates directly to `/services`.
- A separate labelled chevron button opens/closes the list for keyboard and touch users.
- Native links remain reachable with Tab. Escape closes the panel; focus returns to its toggle when leaving a submenu link.
- Close on navigation, outside interaction or leaving the navigation with keyboard focus.
- Preserve the approved order: Websites & apps, Marketing & ads, Brand & content.
- Use the same original vector mark in the header, compact footer identity, favicon and social preview.

## Asset provenance

The monogram is an original code-drawn SVG made for this project. It uses no stock image, external trademark or paid font. Editable copies: `src/components/icon.tsx`, `public/brand-mark.svg`, `src/app/icon.svg`.

## Verification — 8 October 2026

- TypeScript and production build passed.
- Production preview at `http://127.0.0.1:3100`: hover entry, slow movement into the dropdown, pointer exit, direct Services navigation, individual service navigation, outside click, Tab, Enter, Space and Escape passed.
- Touch checks confirmed the independent toggle, individual service selection, direct Services navigation and menu closure after navigation.
- Widths 320, 390, 600, 768, 900, 901, 1024 and 1440 passed without horizontal overflow; the last service remains reachable. A 1024 × 400 landscape viewport also passed.
- Header accessibility scans at 390 and 1440 reported zero WCAG A/AA violations in the tested rules. Existing browser regression passed across 24 routes, including page accessibility, responsive layouts, project filters and project-brief download.
- Rendered-site audit passed for 24 pages and their internal destinations, metadata, structured data and image assets.
- Evidence: `.artifacts/header-navigation-checks.json`, `.artifacts/header-site-regression.json`; screenshots: `.playwright-mcp/header-verified-1440.png`, `.playwright-mcp/header-verified-390.png`.
