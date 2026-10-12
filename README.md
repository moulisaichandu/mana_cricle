# ManaCircle

A responsive English website for an eight-person creative team serving businesses across India. Built with Next.js App Router, React, TypeScript and native CSS.

## Run locally

Use Node.js 24 or later for the included TypeScript unit-test command.

```powershell
npm ci --legacy-peer-deps
npm run dev
```

Open <http://127.0.0.1:3000>. Dependencies are already installed in this workspace. The local development script runs Next in one process with webpack, avoiding the child-process restriction encountered in this Windows environment. It binds to loopback only. Restart it after changing environment values or `next.config.ts`.

The current production preview is at <http://127.0.0.1:3100> (`npm start -- --port 3100`); port 3000 could not be rebound during the latest verification session.

```powershell
npm run typecheck
npm test
npm run build
npm start
```

Stop the development server before starting production on the same port. `npm start` serves the production build on loopback. Configure a production host or reverse proxy separately when deployment is approved.

## What is included

- Homepage, service catalogue and ten detailed service pages, including Android apps, Meta Ads, logo/brand identity, restaurant/café QR menus and Telugu content/voiceovers.
- Work gallery with category filters and four clearly labelled fictional concepts.
- Interactive before/after website example, English/Telugu script reader, captioned motion sample.
- About page, contact page, privacy preview, useful 404 and error states.
- Warm-white/deep-green redesign, bold local Geist typography, photographic concept hero, grouped services, Telugu content feature and responsive footer.
- Three practical project guides covering website briefs, QR menus and English/Telugu reels.
- Accessible mobile navigation, native FAQ disclosures, optional form details and reduced-motion support.
- Validated project brief with local text download. No contact details are invented.
- Conditional WhatsApp, email and Instagram links when configured.
- Optional server-side enquiry delivery with an explicit receipt contract.
- Per-page search/social metadata and canonicals, Organization/WebSite/Service/breadcrumb JSON-LD, sharing image, favicon, preview noindex protection and gated sitemap/robots.

The gallery is self-initiated concept work, not a record of paying clients, testimonials or measured results. The brand name is ManaCircle for this design; the circle symbol and wordmark are provisional original artwork.

## Contact configuration

Copy `.env.example` to `.env.local` and enter only confirmed values. Leave unavailable values empty. Variables beginning with `NEXT_PUBLIC_` are public and are embedded at build time; rebuild after changing them. Never place tokens in those variables.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Full visitor-facing HTTPS origin at launch; loopback in this preview. Enquiry origin validation uses this value; redirect alternate domains to this canonical host. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Confirmed public business email |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Confirmed business number, country code and digits only |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Confirmed HTTPS Instagram profile URL |
| `SITE_INDEXABLE` | Keep `false` for previews; enable only on the verified production domain |
| `ENQUIRY_WEBHOOK_URL` | Server-only HTTPS receiver, optional |
| `ENQUIRY_WEBHOOK_TOKEN` | Server-only bearer token for that receiver |

With no receiver, the form downloads a text brief to the visitor’s device. It does not send an enquiry, create a lead, persist browser storage or notify the team. The page and downloaded file explain this. With a valid HTTPS receiver, the form offers submission with explicit contact consent and retains download as an alternative.

### Receiver contract

`POST /api/enquiries` validates the body, origin, byte limit, allowed fields, contact consent, honeypot and UUID request ID. It sends the following to the configured receiver with `Content-Type: application/json`, `Idempotency-Key: <UUID>` and optional bearer authentication:

```json
{
  "requestId": "7d75b1cc-8216-4b53-99a2-6096b94219ac",
  "source": "manacircle-website",
  "enquiry": {
    "name": "Example Person",
    "business": "Example business",
    "service": "website-design",
    "contactMethod": "email",
    "contact": "example@example.com",
    "website": "",
    "description": "A description of the proposed project.",
    "timing": "",
    "budget": "",
    "consent": true
  }
}
```

The receiver must save the lead durably before returning HTTP 2xx with:

```json
{ "accepted": true, "id": "lead-123" }
```

IDs may contain letters, digits, underscores or hyphens, up to 100 characters. A bare HTTP 200, missing acknowledgement, malformed response, timeout or rejected response never produces a success message. A retry of unchanged form data reuses its request ID. The receiver must deduplicate that ID and return the same saved record; the Next route itself does not provide durable deduplication. An upstream timeout may occur after persistence, so the UI accurately says receipt could not be confirmed.

Provisioning the receiver is a remaining launch task. The planned server can use authenticated HTTPS FastAPI with PostgreSQL lead storage and shared abuse controls; the browser talks only to the API. No database, hosting account or external service has been provisioned by this implementation. Before enabling public submissions, provide receiver-side authentication, rate limits, retention/deletion procedures and operational monitoring without logging personal form content. Publish the corresponding privacy details. A honeypot and origin check alone are not rate limiting.

## Verification

`npm test` runs 15 server/validation tests without external network requests. `npm run test:e2e` uses installed Microsoft Edge, expects the local server to be running and writes `.artifacts/browser-results.json`. Set `TEST_BASE_URL` to use another loopback port. In restricted environments where launching Edge from Node is blocked, the same `tests/browser-checks.cjs` function can run using the Playwright MCP `browser_run_code_unsafe` filename option; its fallback paths refer to this workspace.

The browser checks now cover 24 routes, metadata, preview indexing, axe WCAG A/AA checks of each main content area, service/guide discovery, filters, before/after controls, Telugu scripts, video playback, form validation including collapsed optional fields, service enquiry links, actual brief download, no background submission/storage, mobile menu and responsive widths. They require permission to launch/control the browser. During the 8 October rework, Edge launch was blocked and automatic approval review rejected browser code, resize and click controls; the complete suite was not rerun. Older browser pass results do not validate the redesign.

Run `node scripts/check-rendered-site.cjs` against the production preview for HTTP, metadata, canonical, JSON-LD, internal-link, noindex, image and 404 checks. Set `TEST_BASE_URL` if the port differs from 3100. This check does not measure visual accessibility or execute client interactions. Current evidence and limitations are in [rework validation](docs/REWORK-VALIDATION.md).

See [implementation and verification](docs/IMPLEMENTATION.md) for the recorded results and remaining launch dependencies. No live receiver was contacted during testing.

## Editing

- Service, FAQ and concept copy: `src/lib/content.ts`
- Detailed service copy: `src/lib/service-details.ts`
- Project guides: `src/lib/guides.ts`
- Shared search/social metadata and entity data: `src/lib/seo.ts`
- Colours, spacing and responsive styles: `src/app/globals.css` and `src/app/studio.css`
- Public contact configuration: `src/lib/site.ts` and environment variables
- Form validation and brief formatting: `src/lib/enquiry.ts`
- Enquiry receiver adapter: `src/lib/enquiry-server.ts`
- Visual provenance: [assets](docs/ASSETS.md)

The dependency lockfile and exact transitive overrides preserve the versions available in this environment. This is not a claim of a completed dependency vulnerability audit. Review and update dependencies deliberately before public deployment.

## Planning documents

- [PRD](docs/website-planning/01-PRD.md)
- [Feature list](docs/website-planning/02-FEATURE-LIST.md)
- [Design brief](docs/website-planning/03-DESIGN-BRIEF.md)
- [Implementation plan](docs/website-planning/04-IMPLEMENTATION-PLAN.md)

Those documents retain the original research, with a current-scope note linking to [service additions](docs/SERVICE-CATALOGUE.md). The current rework supersedes the earlier visual refinement: see [rework brief](docs/REWORK-BRIEF.md), [SEO/content research](docs/SEO-CONTENT-STRATEGY.md) and [validation](docs/REWORK-VALIDATION.md).
