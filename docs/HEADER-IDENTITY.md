# ManaCircle identity — 13 October 2026

The owner selected **Eightfold** as the final identity. Eight rounded strokes share one centre, referring to the confirmed eight-person team. The lowercase `manacircle.` wordmark combines a stronger “mana” with a lighter “circle”. The website keeps its warm white and deep green palette.

The shared symbol and lockup live in `src/components/brand.tsx`. Header, footer, homepage illustrative brand presentation and About photo use this component. All public routes therefore show the same identity, including error pages. The header spans the viewport with modest edge padding: logo at the left, desktop navigation and project CTA at the right. Every page uses a light header with a forest-green top rule and solid project CTA. Mobile uses the same mark with a collapsible menu.

The standalone symbol is `public/brand/eightfold.svg`. `public/brand-mark.svg` and `src/app/icon.svg` use the same eight strokes on a light rounded background for organization metadata and browser tabs. `src/app/opengraph-image.tsx` draws the same geometry with intrinsic SVG elements supported by the social-image renderer.

Open Circle, Monogram, the earlier supplied JPEG copy and `/brand-preview` have been removed from the website. The source image in the owner's Downloads folder is untouched. Alternative identities are not selectable or publicly served.

The symbol is native SVG geometry created for this project. It needs no remote image service or paid font. The wordmark uses the existing locally served Geist font under its retained SIL Open Font License. Logo links have the accessible name “ManaCircle home”; the decorative SVG is hidden from assistive technology.

Verification is recorded in [rework validation](REWORK-VALIDATION.md).
