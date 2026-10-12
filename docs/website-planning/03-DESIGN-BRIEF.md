# Freelance Services Website — Design Brief

> Current implementation update — 6 October 2026: the preview now uses ManaCircle, the approved cream/green refinement and ten services. Android apps, Meta Ads, logo/brand identity, QR menus and Telugu content/voiceovers extend the original scope below. See [current service catalogue](../SERVICE-CATALOGUE.md), [visual refinement](../DESIGN-REFINEMENT.md) and [implementation status](../IMPLEMENTATION.md). Contact details remain unconfigured; the project brief downloads locally. The original research is retained as the decision record.

Version: 0.1 — 6 October 2026  
Confirmed direction: clean, professional, premium  
Audience: businesses across India; public website in English  
Business: eight-member team; brand name undecided; no existing logo or Instagram account; samples need preparation  
Target launch: 31 October 2026

Related documents: [PRD](01-PRD.md), [Feature list](02-FEATURE-LIST.md), [Implementation plan](04-IMPLEMENTATION-PLAN.md).

## 1. Design objective

Make a business owner comfortable starting a conversation about a website, marketing, Instagram content, or video scripts. The design should make the work easy to assess, the service boundaries easy to understand, and the next step obvious.

Visitors should be able to answer:

1. What can this team do for my business?
2. Can they help if I already have a website?
3. What does their work look like?
4. What do I need to supply?
5. How do I request a quotation?

“Premium” here means thoughtful typography, good work samples, consistent spacing, and clear communication. It does not require a complex animated introduction.

### Telugu quick read

Clean premium look: light background, dark readable text, deep-green buttons, real work samples. Website chusina ventane services enti, client footage tho reels ela chestamu, quote ela request cheyyali anedi clear ga undali.

## 2. Chosen direction and alternatives

| Direction | Character | Tradeoff | Decision |
| --- | --- | --- | --- |
| Warm professional studio | Warm off-white, dark ink, restrained green, generous spacing | Needs strong copy and good samples | Recommended within the owner's confirmed preference |
| Crisp monochrome studio | White/black, larger typography, strong imagery | Can feel impersonal without team/process content | Valid alternate treatment |
| Bright creative agency | Multiple saturated colours, energetic layouts/motion | More visual competition with business information | Not the current chosen direction |

These are original design proposals. Competitor research assessed page content and structure, not verified screenshots, visual quality, or interaction performance.

## 3. Brand foundation

### Identity

- Use the final business name as a carefully typeset wordmark for the first release if a symbol/logo is not ready.
- Do not use the workspace name as the public brand without confirmation.
- Define a small identity set: wordmark, favicon, colour tokens, type styles, button styles, and one social-preview template.
- Keep the identity usable in proposals, invoices, and future Instagram content.
- The owner must confirm naming/domain availability before domain purchase or public launch. No accounts or domains have been created in this task.

### Voice

Plain English, specific, approachable, and commercially clear. Use “we” for the confirmed team. Describe what the team does before using words such as growth or strategy.

| Prefer | Avoid |
| --- | --- |
| “We edit your footage into clear, engaging reels.” | “We guarantee viral content.” |
| “Improve your website's enquiry journey.” | “Guaranteed 10x sales.” |
| “Discuss your project” | “Unlock limitless digital transformation.” |
| “Advertising spend is quoted separately.” | “Everything included” without limits |
| “Serving businesses across India.” | Unverified offices or city-specific claims |

## 4. Proposed visual system

### Colour tokens

| Token | Value | Intended use |
| --- | --- | --- |
| Page | `#F7F5EF` | Main warm background |
| Surface | `#FFFFFF` | Form, selected panels, content surfaces |
| Ink | `#172B2A` | Headings and main text |
| Muted text | `#5D6864` | Supporting readable copy |
| Brand action | `#146356` | Primary buttons, links, selected controls |
| Brand action hover | `#0E4A40` | Hover/pressed background |
| Accent | `#D6B875` | Small decorative highlights, never default small text |
| Soft border | `#D8DDD5` | Decorative dividers and surface separation |
| Control border | `#75827C` | Input boundaries where contrast is required |
| Error | `#B42318` | Form errors with text/icon, not colour alone |

Use white text on green buttons and dark text on light surfaces. Decorative pale borders do not substitute for discernible interactive boundaries. Verify actual component states, overlays and focus rings in implementation.

Planning palette calculations: ink/page 13.61:1, muted/page 5.31:1, white/action 7.12:1, control-border/white 4.01:1, and error/white 6.57:1, rounded for display. These are calculations of the proposed flat colours, not a rendered-interface accessibility test.

W3C's minimum contrast is 4.5:1 for ordinary text and 3:1 for qualifying large text. [W3C contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)

### Typography

- Proposed family: Manrope with a system sans-serif fallback; verify licensing and supported weights before asset use.
- Use one family initially, with regular and semibold/bold emphasis. Avoid loading several ornamental families.
- Body: 17–18 px desktop, 16–17 px mobile, roughly 1.55–1.7 line height.
- Main headline: roughly 56–72 px desktop and 36–44 px mobile; adjust to actual brand copy.
- Section titles: roughly 32–44 px desktop and 28–34 px mobile.
- Keep reading text around 60–70 characters per line. Avoid justified paragraphs and very small uppercase labels.

### Layout and surfaces

- Maximum content width around 1,200 px, with 20 px mobile and 32–48 px desktop side padding.
- Use a consistent 8 px spacing scale, with smaller 4 px adjustments where needed.
- Section spacing: approximately 80–112 px desktop and 48–64 px mobile.
- Use fine dividers and a limited number of bordered panels. Give each section the structure its content needs.
- Corners: approximately 10–16 px for media and panels; buttons should look intentional and consistent.
- Shadows should be subtle and functional. Avoid layered glass effects, excessive gradients, and decorative dashboard graphics unrelated to the service.

## 5. Homepage composition

### 1. Header

Wordmark left; Services, Work, About, Contact; primary button “Discuss your project.” On small screens, use a labelled menu button with a clear open/close state. The menu must be fully usable by keyboard.

### 2. Hero

Two columns on desktop. Left: positioning and two actions. Right: a restrained composition showing an actual or explicitly labelled concept website and a reel/post example. Do not imply that a concept belongs to a real client.

**Draft eyebrow:** “Websites · Marketing · Content”  
**Draft headline:** “Make your next business move online.”  
**Draft supporting copy:** “We build websites, improve existing ones, and create campaigns, Instagram content and video scripts for businesses across India.”  
**Primary CTA:** “Discuss your project”  
**Secondary CTA:** “See our work”

If enough work is not ready, use a single labelled concept image with explanatory text. Do not fill the space with an invented logo wall or fabricated statistics.

### 3. Choose what you need

Three prominent problem-led links:

- “I need a website” → Website Design.
- “I want more from my current website” → Website Improvement, with a relevant Marketing cross-link.
- “I need content for my business” → Instagram and Content Writing options.

All five services remain discoverable on the Services page. Do not make users complete a quiz to find them.

### 4. Selected work

Prepare a small set of labelled concept samples for the initial launch because the owner does not yet have samples ready. Aim for three to four coherent examples rather than filling a large empty grid. Use large visual previews, a service label and a short explanation of the team's role. Keep scripts as readable excerpts, not screenshots of tiny text. Replace/add client work later with permission.

### 5. Services

Five editorial rows with a numbered label, service name, one-sentence benefit, representative deliverable, and detail link. Use restrained imagery and ample spacing. Avoid five identical cards filled with vague marketing phrases.

### 6. How a project works

Four clear steps: Enquiry → Discussion and quotation → Creation and review → Delivery and agreed follow-up. State what happens next without promising unconfirmed turnaround times.

### 7. The team

Introduce the eight-member team with an honest paragraph. Add named roles or real portraits only when supplied and approved. A concise founder/lead introduction can launch before full biographies are ready.

### 8. FAQs

Answer practical questions: existing website work, footage supply, ad budget, deliverables, revisions, pricing approach, and how to begin. Use confirmed answers. Do not imply that all website platforms or all marketing channels are supported.

### 9. Closing contact invitation

Short heading, one sentence, “Discuss your project,” and secondary WhatsApp link. Footer includes service links, contact details, privacy, and only active business social accounts. The Instagram account does not currently exist, so no fake or empty profile link appears.

### Low-fidelity layout

```text
DESKTOP
[Wordmark]                 Services  Work  About  Contact  [Discuss]

[Small service label]                   [Approved website sample]
[Clear two-line headline]               [Post/reel sample]
[Short supporting copy]
[Discuss your project] [See our work]

[Need a website] [Improve my website] [Need content]
[Selected work: large readable examples]
[Five service rows]
[Four process steps]
[Team introduction]
[FAQs]
[Final enquiry invitation]
[Footer]

MOBILE
[Wordmark]                                      [Menu]
[Headline]
[Short supporting copy]
[Discuss your project]
[See our work]
[One prioritised work preview]
[Problem links stacked]
[Work, services, process, team, FAQs]
[Contact and footer]
```

## 6. Service and portfolio templates

### Service detail page

1. Breadcrumb and specific service title.
2. A short explanation of who it helps.
3. One visible enquiry CTA and a relevant example.
4. Deliverables and scope limits.
5. Inputs required from the client.
6. Process and review stages.
7. Evidence/sample gallery.
8. Service FAQs and related services.
9. Contact CTA with the service preselected.

For Website Improvement, distinguish the review from paid implementation and explain how Marketing can complement site changes. For Instagram, state “You provide the footage; we help with scripts, editing and posts/reels.” Add “Posting available as part of your agreed scope.” Do not imply comment/DM management. The writing page should clearly advertise English and Telugu scripts while keeping the website navigation and service copy in English.

### Work page

Begin with an understandable overview and a small, curated set of examples. Add category filters only when there are enough examples to make filtering useful. Each item should state what was done and why; avoid oversized decorative mockups that hide the work.

When a before/after is used, provide equivalent views and text descriptions so the difference is understandable without a draggable control. Only report real client outcomes with evidence and permission.

### Script sample

Use a short fictional business brief, hook, main beats and closing action. Include English and Telugu examples, with readable Telugu font support for the sample content and correct language markup. Label them as demonstrations. Let a visitor judge writing quality without downloading a file or submitting an email. This is bilingual portfolio content within an English website, not a second site language.

## 7. Contact experience

Use a calm single-column form with clear labels. On wider screens, place direct contact details and a brief process explanation beside it. On phones, place them below the form.

- “Discuss your project” is the default primary action across the site.
- “Send enquiry” is the form submit label.
- Show WhatsApp as a genuine alternative, not an unavoidable popup.
- Use “Request a quote” where context specifically concerns scope/cost.
- Do not label the action “Book now” because payment and confirmed booking do not happen on the site.
- State a response window only after the owner confirms staffing and hours.

Detailed fields and state copy live in the [feature list](02-FEATURE-LIST.md). Keep that document as the source of truth for form behaviour.

## 8. Media and movement

### Images

Use actual work, cropped for readability. Export suitable responsive sizes, reserve dimensions, and write descriptive alternative text. Decorative textures should not add unnecessary downloads.

### Reels/video

Display a poster and labelled play button. Download video after deliberate interaction, provide player controls and captions/transcript, and avoid autoplay audio. A small curated gallery is preferable to embedding a live Instagram feed at launch.

The confirmed offer is editing client footage. Website sample assets also need clear permissions and suitable music rights. Meta's music guidance distinguishes business/commercial usage; account access to a track should not be treated as universal permission to reuse it on a separate website. Verify rights for the actual intended channels. [Instagram music guidance](https://www.facebook.com/help/instagram/402084904469945) — indexed excerpt reviewed; full content required login.

### Motion

Use brief hover/focus transitions, typically 120–200 ms. If section entrances are used, keep them subtle and avoid hiding content until JavaScript runs. Respect reduced-motion preferences. No scroll hijacking, animated cursor, compulsory intro, or continuous carousel is needed.

## 9. Accessibility and responsive behaviour

- Design important controls at least 44 px high as a project touch target. WCAG 2.2 AA specifies a 24-by-24 CSS px minimum with exceptions; the larger project target improves ease of use. [W3C target-size guidance](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- Use semantic headings, landmarks, a skip link, visible focus and meaningful link names.
- Form labels remain visible after typing; errors explain how to fix the issue and are announced.
- Menus and accordions expose their expanded state. Focus must not disappear behind overlays.
- Content must reflow at narrow widths and remain useful at browser zoom. Avoid text inside images for essential service information.
- Check 320, 375/390, 768, 1,024 and 1,440 px layouts; these are test widths, not mandatory CSS breakpoints.
- Avoid persistent floating controls that cover inputs, captions or the footer.

These are design requirements. Conformance must be assessed on the actual implementation.

## 10. Asset checklist and ownership

| Asset | Status | Suggested owner | Launch handling |
| --- | --- | --- | --- |
| Business name and domain | Pending | Business lead | Must be resolved before final identity/domain setup |
| Logo | Not available | Designer + business lead | A refined wordmark can satisfy initial identity |
| Team description/roles | Eight members confirmed; details pending | Business lead | Use only approved facts |
| Portfolio/work samples | Need preparation | Project leads | Create clearly labelled concept examples; omit unprovided client reviews |
| Reel sample footage | Pending | Video editor | Use supplied/licensed demonstration footage |
| Script samples | Need preparation | Content writer | Prepare English and Telugu examples with appropriate font support |
| Instagram account | Not available | Business/marketing lead | Optional for website launch; omit link until active |
| Business email/WhatsApp | Pending | Business lead | Verify before launching conversion actions |
| Final service scope/FAQ | Core scope confirmed | Service leads | Detail per-client ad channels, optional posting and revision policies |

## 11. Design review checklist

- [ ] The first screen explains the business in clear English.
- [ ] Both new-website and existing-website customers find a clear path.
- [ ] Creative samples are readable and correctly labelled.
- [ ] The page feels professional at phone and desktop sizes without relying on animation.
- [ ] Reels copy states client-supplied footage and does not imply shooting.
- [ ] Enquiry, discussion and quotation are the visible commercial journey.
- [ ] All interactive states, media controls and form errors are designed.
- [ ] Empty social accounts, fabricated reviews, unverified metrics and placeholder claims are absent.
- [ ] Content length, colour contrast, keyboard focus and media loading are verified during build.

The next design artifact would be a home/service/contact wireframe and a small component sheet. Producing those visuals or website code is outside this Markdown planning task.
