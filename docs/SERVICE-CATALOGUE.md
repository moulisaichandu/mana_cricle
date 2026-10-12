# ManaCircle — current service catalogue

Updated 6 October 2026. This record incorporates the owner’s service additions and supersedes the original five-service scope in the planning documents.

| Family | Public service name | Route |
| --- | --- | --- |
| Build | Website design & development | `/services/website-design` |
| Build | Website improvement | `/services/website-improvement` |
| Build | Android app development | `/services/android-app-development` |
| Build | QR menus for restaurants & cafés | `/services/qr-digital-menus` |
| Grow | Digital marketing | `/services/digital-marketing` |
| Grow | Meta Ads | `/services/meta-ads` |
| Create | Logo & brand identity | `/services/logo-branding` |
| Create | Instagram posts & reels | `/services/instagram-content` |
| Create | Video scripts & content | `/services/content-writing` |
| Create | Telugu content & voiceovers | `/services/telugu-content-voiceovers` |

## New service scope

**Logo & brand identity** brings together a logo, colour and type direction, agreed social assets and a practical guide. Social uses include profile images, highlight covers, reel covers and offer templates. Concept count, revisions, exports and applications are quoted. Naming, trademark checks, printing and paid font licences are separate unless included.

**QR menus for restaurants & cafés** offers a mobile menu with clear categories, client-approved prices and descriptions, a QR code for the published URL, and a table-card design. The menu link also works in an Instagram bio or Story. Menu languages, editing access, hosting, domain, maintenance and printing are scoped. Ordering, payments and POS integrations are additional requirements. The website’s sample is a fictional visual concept; its QR symbol cannot be scanned.

**Telugu content & voiceovers** offers scripts, agreed voiceover recording, timed subtitles or burned-in captions, social captions and regional ad creatives. Intended uses include Instagram Reels, YouTube Shorts, launch or festival posts, and Facebook/Instagram ads. Voice, dialect, recording rights, duration, outputs and revisions are agreed. Campaign management and ad spend are separate from creative production. The generated recording-setup image and Telugu card represent a visual direction; no audio sample is claimed.

## Website acceptance criteria

- All ten services appear in the home groups, catalogue, footer and project-brief selector.
- Each has its own page, descriptive metadata, scope, deliverables, inputs, FAQs and service-specific enquiry link.
- The three newest services include concrete social and business use cases and original, explicitly labelled concept visuals.
- Invalid optional form fields expand their disclosure before showing errors; hero tabs support arrow keys, Home and End.
- Public-facing copy stays English. Scripts and content can be scoped in English/Telugu; specialist voiceover scope is Telugu.
- No invented clients, testimonials, delivery contacts, campaign results or completed live apps are presented.

## Practical implementation

The service data lives in `src/lib/content.ts`; enquiry choices and validation are in `src/lib/enquiry.ts`. `src/components/service-families.tsx` controls the Build/Grow/Create order. Service routes and sitemap use the shared service data. Contact methods and online receipt behavior remain configuration-dependent; this local preview downloads a brief without sending it.
