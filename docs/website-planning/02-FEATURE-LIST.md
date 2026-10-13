# Freelance Services Website — Feature List

> Current implementation update — 13 October 2026: the preview uses the final Eightfold identity, ten services and five guides, with worldwide positioning and Telugu marketing priority. The current redesign follows the owner's Patnam Pakodi reference for readable type, direct service discovery and strong green section contrast. Actual project previews live on Our work. See [current brief](../REWORK-BRIEF.md), [service catalogue](../SERVICE-CATALOGUE.md) and [implementation status](../IMPLEMENTATION.md). Contact details remain unconfigured; the project brief downloads locally. The original research below is retained as a historical decision record.

Version: 0.1 — planning draft, 6 October 2026  
Audience: businesses across India, including Andhra Pradesh and Telangana  
Public language: English  
Booking: WhatsApp/enquiry → discussion → custom quotation

Team: eight members · Style: clean, professional, premium · Target launch: 31 October 2026  
Starting assets: brand name undecided; logo, Instagram account and work samples still to be created.

Related documents: [PRD and research](01-PRD.md), [Design brief](03-DESIGN-BRIEF.md), [Implementation plan](04-IMPLEMENTATION-PLAN.md).

## 1. How to read the priorities

- **P0 — launch:** required for the agreed service website or its reliable operation.
- **P1 — next:** useful after the basic website is working and content/capacity justify it.
- **P2 — later:** consider only when business evidence or an explicit new requirement supports it.

Business services describe what clients can buy. Website features describe how the website explains those services and receives enquiries. Offering Instagram content and optional posting does not require building an Instagram management application.

## 2. Services displayed on the website

| ID | Service | Confirmed direction | Content needed before publication |
| --- | --- | --- | --- |
| S01 | Website Design & Development | Help businesses get a website | Supported site types, page/functionality limits, example work, inputs, handover |
| S02 | Website Improvement | Improve an existing site to support leads/sales | Review approach, kinds of fixes, platform limitations, measurement boundaries |
| S03 | Digital Marketing | Ads/marketing selected per client requirements; Meta Ads discussed | Exact channels, service fee/ad spend distinction, reporting, access requirements |
| S04 | Instagram Posts & Reels | Scripts, client footage editing, posts/reels creation; optional posting per client request | Sample formats, supplied-footage requirements, revisions, turnaround, quoted publishing scope |
| S05 | Video Scripts & Content Writing | English and Telugu content/scripts for videos | Samples in both languages, length/research limits, output format |

S04 does not include on-location shooting. Instagram posting is available as a separately scoped client option; full account management and responding to comments/DMs are not confirmed. Google Ads/SEO are not blanket inclusions in S03. The website stays English while client scripts are available in English and Telugu.

## 3. Launch feature backlog

| ID | Feature | Priority | Acceptance criteria | Dependency |
| --- | --- | --- | --- | --- |
| F01 | Responsive navigation and footer | P0 | Home, Services, Work, About, Contact reachable; keyboard/mobile menu works; contact and privacy links valid | Brand and routes |
| F02 | Clear homepage | P0 | Explains the offer and India-wide coverage; primary enquiry and secondary work CTAs; no invented claims | Final English copy |
| F03 | Service overview | P0 | Five distinguishable services; each has a concrete summary and working detail link | S01–S05 copy |
| F04 | Five service detail pages | P0 | Each shows problem, deliverables, client inputs, boundaries, examples, FAQ, enquiry CTA | Owner-confirmed scope |
| F05 | Existing-website journey | P0 | Website Improvement links to Marketing and vice versa; contact can preselect either service; public URL optional | C02/C03 in PRD |
| F06 | Work gallery | P0 | Approved samples with service labels and owner role; all concept work labelled; no fake reviews or metrics | Approved work/assets |
| F07 | Reels and script samples | P0 | Poster before playback; deliberate play action; captions/transcript; script excerpt readable without video | Permission and licensed media |
| F08 | About and process | P0 | Real identity/capability description; enquiry → scope → delivery/review → handover; no fictional team | Owner information |
| F09 | Service FAQs | P0 | Answers footage, ad spend, revisions, ownership, timing, and next-step questions using confirmed policies | Business rules |
| F10 | Enquiry form | P0 | Validates relevant contact detail; meaningful success/error states; owner can retrieve submitted test lead | Selected receiving service |
| F11 | WhatsApp and contact alternatives | P0 | Opens the correct business chat with editable generic text; email/form fallback present; no automatic send | Verified business contact |
| F12 | Receipt and failure experience | P0 | Success follows receiver acceptance; errors preserve inputs; direct thank-you visits are not leads | F10 |
| F13 | Private lead handling | P0 | Named owner can read leads, detect spam, follow up, export/delete where appropriate; no public lead listing | Inbox/provider and ownership |
| F14 | Search and share foundations | P0 | Descriptive titles, canonical URLs, sitemap, social preview, useful link text; no empty service pages | Domain and final content |
| F15 | Accessibility | P0 | Keyboard flow, visible focus, labels, error announcement, contrast, captions, reduced motion checked | Design and content |
| F16 | Performance | P0 | Responsive images, bounded media, reserved dimensions, on-demand video; representative mobile audit recorded | Production-like build |
| F17 | Privacy and spam controls | P0 | Notice matches actual collection/tools; anti-spam works; no personal content in analytics or URLs | Provider and owner policy |
| F18 | Content maintenance | P0 | Owner knows how to request/update service, work, contact and FAQ content; content is backed up | Chosen editing approach |
| F19 | Contact/lead measurement | P0 | Lead records distinguish enquiries from clicks; optional analytics choice documented; test traffic excluded | Measurement decision |
| F20 | Error page and link integrity | P0 | Unknown URL returns proper 404; internal links and social/contact targets checked | Route implementation |

P0 measurement does not require installing an analytics SDK. A maintained private lead tracker is sufficient to start. Visitor conversion-rate reporting requires a valid visitor measurement source.

## 4. Form specification

Prefer one short form on `/contact`, with the service preselected from referring pages. Avoid separate inconsistent forms on every service page.

| Field | Required? | Behaviour |
| --- | --- | --- |
| Name | Yes | Unicode text, trimmed, proposed max 100 characters |
| Service | Yes | S01–S05 plus “Not sure yet”; allow additional services in the brief |
| Preferred contact method | Yes | WhatsApp or email; show only its corresponding required contact field |
| WhatsApp number | When WhatsApp selected | Accept readable input, validate/normalise to international format; India can be the default country |
| Email | When email selected | Validate format; do not claim validation proves ownership |
| Project brief | Yes | Proposed 20–2,000 characters; explain useful details without requesting secrets |
| Business name | Optional | Proposed max 150 characters |
| Website/Instagram URL | Optional | Public HTTP(S) URL; proposed max 500 characters; never automatically fetch arbitrary URLs in MVP |
| Budget band | Optional | Owner-defined ranges plus “Need guidance”; omit until ranges are decided |
| Target timing | Optional | Flexible, owner-approved choices; no implicit delivery commitment |

Place a brief explanation of how the enquiry will be used beside the submit button, with a privacy link. Do not make newsletter/advertising consent a condition of asking for a quote. If promotional subscriptions are later offered, collect them separately.

No public file upload, password, ad-account credential, payment detail, or government identifier is needed. Files can be shared after the discussion through an agreed client channel.

### Required form states

| State | What the visitor sees | Required behaviour |
| --- | --- | --- |
| Empty | Labels and concise examples | No unexplained required fields |
| Invalid | Specific field errors and an accessible summary | Focus/announcement leads to the issue; entered content preserved |
| Submitting | “Sending your enquiry…” | Guard against repeated taps; retain the brief |
| Accepted | “Thanks — your enquiry has been received.” | Only after receiver acknowledgement; response window only if confirmed |
| Rejected/unavailable | “We couldn't send your enquiry. Please try again or contact us directly.” | Preserve inputs and provide fallback |
| Timeout/unknown | “We couldn't confirm receipt.” | Avoid false success; explain retry/fallback without claiming certain failure |
| Spam/rate limited | Clear retry/contact alternative | Do not reveal internal filtering rules or strand a legitimate visitor |

The receiving system must enforce appropriate request limits and data handling. A managed form product's exact server-side validation capabilities must be verified; HTML validation alone is not abuse protection.

### Enquiry acceptance and retry rules

1. An accepted HTTP response is necessary for success UI. The production acceptance check must additionally verify a test record in the owner's inbox/provider storage.
2. A notification email is a convenience. The lead should remain available if that notification fails.
3. Guard the browser against duplicate taps. If the chosen provider lacks request deduplication, document that limitation and deduplicate repeated leads in the private tracker.
4. Capture only useful, allowlisted source metadata. Never put the brief, email, phone, or name in query strings, analytics events, or routine error logs.
5. Provide a no-JavaScript form path if supported by the selected host, otherwise ensure a visible direct-contact fallback.

## 5. WhatsApp behaviour

- Place a visible WhatsApp action on Contact and a secondary link beside important enquiry CTAs.
- Use the verified business number in international format, with generic URL-encoded service text.
- Example draft: “Hi, I'd like to discuss website improvement for my business.”
- A user deliberately opens the link and decides whether to send. Do not trigger outreach automatically.
- Do not label a WhatsApp click as a lead or completed booking.
- Test app-installed mobile, desktop, and fallback behaviour. Show email or the enquiry form when chat is inconvenient.

Link construction follows [WhatsApp's official click-to-chat guidance](https://faq.whatsapp.com/5913398998672934). Access during research was limited to indexed official guidance, so test the final configured link on real devices.

## 6. Portfolio and content models

### Service record

Stable ID, slug, name, short description, intended client problem, deliverables, inputs, scope limits, process, related samples, FAQs, and CTA. Prices remain absent unless explicitly approved.

### Work record

Title, service, industry label, type (`client` or `concept`), problem, owner's contribution, deliverables, images/video/script, accessibility text, publication permission, and outcome explanation. Any numerical outcome needs its period, baseline, source and client permission. A concept has no client endorsement or commercial-result claim.

### Lead record

Receiver ID, creation time, chosen service, contact method/detail, brief, optional business/URL, safe source metadata, and owner status. Suggested private statuses: New → Contacted → Qualified → Proposal → Won/Lost. These are operating stages; a custom dashboard is not required.

### Content delivery definition

Each quotation should define the number of posts/reels/scripts, reel length, raw-footage limits, aspect ratios, subtitle language, revisions, final file types, editable/source-file handover, approval dates, and asset responsibility. Confirm English or Telugu and whether the team will publish the content. For publishing work, use client-granted account roles after onboarding, an agreed approval calendar, and a clear end-of-engagement access handover; never request passwords in the public form.

For vertical ad creative, Meta's guidance highlights 9:16 video, audio, and safe-zone placement. Recheck the relevant placement before export rather than treating one specification as permanent for all videos. [Meta Reels ads](https://www.facebook.com/business/ads/facebook-instagram-reels-ads)

## 7. Later features and triggers

| ID | Feature | Priority | Add when |
| --- | --- | --- | --- |
| F21 | Individual case-study routes | P1 | At least two substantial, approved stories support them |
| F22 | Public package comparison | P1 | Service delivery and capacity are repeatable; owner wants public starting prices |
| F23 | Booking-calendar link | P1 | Calls are frequent and owner availability can be maintained |
| F24 | CMS/editor interface | P1 | Nontechnical updates occur often enough to justify extra operations |
| F25 | FAQ/content expansion | P1 | Real enquiries reveal repeated questions |
| F26 | Consent-aware journey analytics | P1 | Owner chooses a provider and has a defined question to measure |
| F27 | Articles/resources | P2 | A named writer can maintain useful original material |
| F28 | CRM automation | P2 | Manual follow-up is losing leads or consuming measurable time |
| F29 | Client portal and approval workflow | P2 | Active clients need a shared system beyond existing tools |
| F30 | Payments/deposits | P2 | Owner explicitly changes booking scope and commercial terms are ready |
| F31 | Additional website languages | P2 | Audience evidence and translation ownership justify them |

Excluded from this website build: freelance bidding marketplace, escrow, automated lead promises, website resale, social-platform cloning, and a custom social-posting automation system. The team's optional client posting service remains available through its separately agreed operating process.

## 8. End-to-end acceptance scenarios

| Scenario | Pass condition |
| --- | --- |
| New website lead from a phone | Visitor understands S01, sees a sample, submits with the right service, and owner retrieves the brief |
| Existing website lead | Visitor finds both improvement and marketing, shares an optional public URL, and reaches the confirmed quotation flow |
| Reels enquiry | Client-supplied footage and optional posting are clear; shooting is not implied; English/Telugu writing is discoverable |
| Email preference | Only email is required; WhatsApp number is not forced |
| WhatsApp intent | Correct recipient opens; visitor controls sending; analytics does not report a completed lead |
| Receiver failure | No success state; brief remains; fallback contact is visible |
| Notification failure | Accepted test record still exists in the receiver; owner can find it |
| Keyboard/screen-reader journey | Navigation, forms, errors and media can be used without a mouse |
| First-launch portfolio | Prepared concept samples appear with explicit labels; fabricated reviews/case-study metrics do not |
| Media unavailable | Poster/text sample keeps the service comprehensible and the enquiry action available |
| Direct thank-you URL | Page visit does not emit a successful-enquiry conversion |

These are future implementation checks. No website or live enquiry integration has been built or tested as part of this documentation task.
