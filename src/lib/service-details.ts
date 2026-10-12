export type ServiceDetail = { headline: string; description: string; intro: string; fit: string; guide: string; example: string; questions: { question: string; answer: string }[] };
export const serviceDetails: Record<string, ServiceDetail> = {
  "website-design": {
    headline: "Website design for businesses ready to be seen.",
    description: "Custom website design and development for businesses across India. Mobile layouts, clear service pages, enquiry forms and essential search setup.",
    intro: "ManaCircle designs and builds business websites that explain your offer and make it easy to enquire. We plan the pages, shape the visual direction and develop a responsive experience for customers on phones and desktops.",
    fit: "A new business launching its first website, a service provider who needs clearer enquiries, or a brand whose current site no longer represents it. Start with the action you want visitors to take; that decision shapes the page structure and content.",
    guide: "business-website-brief",
    example: "For a local service business, a focused scope might include Home, Services, About and Contact, with a mobile enquiry form and clear service-area copy. Booking systems, payments or a content editor change that scope.",
    questions: [{question:"Will my new website rank on Google?",answer:"We can include page titles, descriptions, crawlable page structure and launch checks in the project. Rankings depend on many factors and are not guaranteed. Your final content, production domain and ongoing work matter; an attractive design alone is not an SEO strategy."},{question:"Who pays for the domain and hosting?",answer:"Domain registration, hosting and paid third-party tools are separate costs unless your quotation includes them. We agree who owns the accounts, renews them and handles changes before launch."}]
  },
  "website-improvement": {
    headline: "Website redesign & improvements that start with your customers.",
    description: "Improve an existing business website with clearer content, mobile layouts, performance fixes and better enquiry paths. Scope a review with ManaCircle.",
    intro: "Already have a website, but visitors struggle to understand your services or contact you? ManaCircle reviews the pages and enquiry journey, then scopes content, design and technical improvements around the problems we find.",
    fit: "Businesses with outdated pages, difficult mobile navigation, unclear service information or forms that get in the way. A focused improvement can suit an otherwise useful website; platform limitations may make a rebuild worth discussing.",
    guide: "business-website-brief",
    example: "For a service page with several competing buttons, the work could be a clearer headline, a shorter enquiry form, stronger mobile spacing and one primary contact action. Measure enquiries before and after when reliable tracking is available.",
    questions: [{question:"Can you improve sales on an existing website?",answer:"We can work on the information and actions that help a visitor decide: product or service clarity, mobile usability and the enquiry path. Sales also depend on traffic, price, the offer and follow-up. We do not promise a fixed sales increase."},{question:"What access do you need?",answer:"We can begin a visible-page review from the public URL. Implementing changes may need appropriate access to your website platform, hosting or code. We agree the access and change scope after the initial discussion."}]
  },
  "logo-branding": {
    headline: "Logo design & brand identity, made to work everywhere.",
    description: "Logo design, colour palettes, typography and social brand templates for Indian businesses. Create a consistent identity with ManaCircle.",
    intro: "ManaCircle creates logos and visual identities for businesses across India. We connect the logo, colours, type and agreed brand materials so your Instagram profile, website, menu and packaging belong to the same business.",
    fit: "A new business with a settled name, an existing brand whose materials feel inconsistent, or a café or shop preparing to launch. Tell us where your identity needs to appear so the agreed formats suit those uses.",
    guide: "business-website-brief",
    example: "A café launch might need a primary logo, a compact profile mark, a colour palette and templates for menu announcements. Packaging artwork, signage production and print coordination are separate items to include if needed.",
    questions: [{question:"What logo files will I receive?",answer:"We agree the handover in your quotation, including the logo variations and file formats needed for digital use and any printing. Ask for the formats your printer or website team requires before the scope is finalised."}]
  },
  "android-app-development": {
    headline: "Android app development around a clear business need.",
    description: "Android app planning, screen design, development, integrations and release preparation for businesses in India. Define your app scope with ManaCircle.",
    intro: "ManaCircle plans, designs and develops Android apps for the features your business needs. We start with the user journey, agree the screens and integrations, and prepare the app for testing and an agreed release handover.",
    fit: "Businesses with a useful repeat task for customers or staff: accessing services, viewing products or completing an agreed workflow. If a mobile website already solves the task, compare the maintenance and scope before investing in a separate app.",
    guide: "business-website-brief",
    example: "An initial app could help customers browse a service catalogue and make an enquiry. Sign-in, payments, notifications and an admin dashboard each add decisions about data, backend work, testing and maintenance.",
    questions: [{question:"Are the backend and admin panel included?",answer:"Only when they are part of the agreed scope. App screens, backend services, account access, admin tools and integrations are separate decisions. Your quotation should identify each included component."},{question:"Do you also build iPhone apps?",answer:"The current app service listed by ManaCircle is Android development. iOS development is not included in this offer."}]
  },
  "digital-marketing": {
    headline: "Digital marketing with a clear offer and a practical plan.",
    description: "Digital marketing planning, content and campaign support for Indian businesses. Connect your offer, audience and landing page with ManaCircle.",
    intro: "ManaCircle helps businesses across India plan digital marketing around a defined audience, a clear offer and an enquiry journey. We coordinate the agreed channels, creative work and reporting instead of treating every business as the same campaign.",
    fit: "Businesses that know what they sell but need a coordinated plan for how to present it online. It also suits a launch where the website, content and ads need to be prepared together.",
    guide: "instagram-reel-brief",
    example: "A launch plan might combine one offer page, a set of Instagram posts, Telugu reel scripts and a separately scoped Meta Ads campaign. Content production, media spend and reporting responsibilities need their own line items.",
    questions: [{question:"Does digital marketing include SEO or Google Ads?",answer:"SEO, Google Ads and other channels are included only when specifically agreed. We first discuss the audience, existing website and priorities, then identify what fits the project and budget."},{question:"What will the reports show?",answer:"We agree the measures before starting, such as platform spend, enquiries or other relevant actions that can be measured with available access. The report should distinguish activity from actual business outcomes."}]
  },
  "meta-ads": {
    headline: "Meta Ads for Facebook & Instagram, built around your offer.",
    description: "Facebook and Instagram ad planning, setup and management for businesses in India. Clear campaign scope, creative coordination and separate ad spend.",
    intro: "ManaCircle plans and manages Facebook and Instagram advertising for businesses across India. We define the audience and objective, coordinate the agreed ad creative and review campaign performance against the measures set for your project.",
    fit: "Businesses with a defined offer, an advertising budget and a way to respond to enquiries. Campaigns need a destination that matches the message, whether that is a website, an enquiry form or an agreed messaging journey.",
    guide: "instagram-reel-brief",
    example: "For a café introducing a seasonal menu, the scope could combine regional ad copy, supplied product footage, a menu destination and a campaign for the agreed locations. This is a planning example, not a promise of reach or sales.",
    questions: [{question:"Can you run ads in Telugu?",answer:"Telugu ad copy, voiceovers and regional creative can be scoped alongside campaign management. We agree the language, target locations and production needs separately from the advertising budget."},{question:"Do I keep ownership of my ad accounts?",answer:"Use business accounts your business owns and grant the permissions needed for the agreed work. We discuss account readiness and access before setup; do not share passwords in an enquiry form."}]
  },
  "instagram-content": {
    headline: "Instagram posts & reel editing, with your business in the frame.",
    description: "Instagram post design, reel editing, English/Telugu scripts, captions and optional posting. ManaCircle creates content from client-supplied footage.",
    intro: "ManaCircle turns your footage and business updates into Instagram posts and reels. We plan ideas, write English or Telugu scripts, edit supplied video and prepare captions and covers. Posting is available when included in your scope.",
    fit: "Business owners with product clips, service footage or regular updates who need help turning them into a consistent content plan. It suits restaurants, shops and service brands that can supply footage and approve content.",
    guide: "instagram-reel-brief",
    example: "For one product reel, you could supply a clear product close-up, a clip of it being used and the offer details. We can scope an opening hook, edit, subtitles, cover and caption. A batch or monthly schedule is quoted around the agreed quantity.",
    questions: [{question:"Are voiceovers and subtitles included?",answer:"They can be included in the content scope. Tell us the language, intended duration and whether you need a voiceover, timed subtitles or burned-in captions so the production work is clear."},{question:"Will you reply to comments and messages?",answer:"Comment and direct-message management are not automatically included. Posting, approvals and any community-management responsibilities need to be agreed separately."}]
  },
  "content-writing": {
    headline: "Video scripts & content writing in English and Telugu.",
    description: "English and Telugu video scripts, reel hooks, captions and calls to action for business content. Plan a clear story with ManaCircle.",
    intro: "ManaCircle writes English and Telugu scripts for business reels and videos. We turn the audience, offer and approved facts into a clear opening, a useful story and a next step the viewer can understand.",
    fit: "Businesses with something to explain, launch or demonstrate, and creators who need a script before filming or editing. The script can be planned around new shots or adapted to footage you already have.",
    guide: "instagram-reel-brief",
    example: "A product demonstration script can introduce one customer problem, show the product solving it and finish with where to enquire. The brand supplies accurate product facts; the script keeps the message focused.",
    questions: [{question:"What is included in a script handover?",answer:"We agree the script language, length, opening hook, visual notes, caption needs and revision rounds. Voice recording and video editing are separate production tasks unless included."}]
  },
  "qr-digital-menus": {
    headline: "QR digital menus for restaurants & cafés.",
    description: "Mobile-friendly digital menus, QR codes and table-card designs for restaurants and cafés in India. Categories, prices and menu updates clearly scoped.",
    intro: "ManaCircle creates digital menus that guests can open by scanning a QR code. We organise dishes, drinks, descriptions and prices for a phone-friendly browsing experience, then prepare the QR link and agreed table-card artwork.",
    fit: "Restaurants and cafés that want readable menus on guests’ phones, a menu link for Instagram, or a stable destination that can be updated as dishes change. It is a browsing menu unless ordering and payment features are separately scoped.",
    guide: "qr-menu-vs-pdf",
    example: "A café menu could group coffee, cold drinks and food, with approved photos, prices and dietary notes. The same published menu link can be shared in an Instagram bio and encoded in a printed table QR.",
    questions: [{question:"Do guests need to install an app?",answer:"No app installation is needed for a web-based menu. The QR code opens the published menu link in a phone’s browser; guests need internet access."},{question:"Do you print the QR table cards?",answer:"The agreed deliverable includes the QR code and table-card design. Printing is separate. Test the final printed QR code on several phones before placing the cards on tables."}]
  },
  "telugu-content-voiceovers": {
    headline: "Telugu content, voiceovers & regional ad creatives.",
    description: "Telugu scripts, voiceovers, subtitles, captions and regional ad creatives for Andhra Pradesh, Telangana and Telugu-speaking audiences across India.",
    intro: "ManaCircle creates Telugu scripts, voiceovers, subtitles and captions for business reels, videos and regional ads. We adapt the message for audiences in Andhra Pradesh, Telangana and across India, with the tone and dialect agreed before production.",
    fit: "Businesses whose customers are more comfortable with Telugu, or brands adapting an English campaign for a regional audience. It can support product explanations, café launches, service videos and offer announcements.",
    guide: "instagram-reel-brief",
    example: "An English café caption can become a conversational Telugu reel script, a recorded voiceover and subtitles over client-supplied footage. Script approval should come before recording so wording and pronunciation are settled.",
    questions: [{question:"Can we choose the Telugu tone or dialect?",answer:"Yes. Share the intended audience, preferred tone and pronunciation notes during the brief. We agree the voice, wording and language variant before recording or producing the final content."},{question:"Can you deliver English and Telugu versions?",answer:"Yes. We scope both versions, including script adaptation, subtitle languages, recording and any separate edits. A second language version is a production deliverable to include in the quotation."}]
  }
};
