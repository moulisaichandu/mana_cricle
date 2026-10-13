export type ServiceDetail = { headline: string; description: string; intro: string; fit: string; guide: string; example: string; questions: { question: string; answer: string }[] };
export const serviceDetails: Record<string, ServiceDetail> = {
  "website-design": {
    "headline": "A website that makes your business clear.",
    "description": "Custom website design and development for businesses worldwide. Clear service pages, responsive layouts, enquiry forms and a practical launch handover.",
    "intro": "ManaCircle plans, designs and builds business websites around one question: what does your customer need to do next? We connect your offer, content and enquiry journey in a website that works on phones and desktops.",
    "fit": "A new business launching its first website, a service provider who needs clearer enquiries, or a brand whose current site no longer represents it. Start with the action you want visitors to take; that decision shapes the page structure and content.",
    "guide": "business-website-brief",
    "example": "For a local service business, a focused scope might include Home, Services, About and Contact, with a mobile enquiry form and clear service-area copy. Booking systems, payments or a content editor change that scope.",
    "questions": [
      {
        "question": "Will my new website rank on Google?",
        "answer": "We can include page titles, descriptions, crawlable page structure and launch checks in the project. Rankings depend on many factors and are not guaranteed. Your final content, production domain and ongoing work matter; an attractive design alone is not an SEO strategy."
      },
      {
        "question": "Who pays for the domain and hosting?",
        "answer": "Domain registration, hosting and paid third-party tools are separate costs unless your quotation includes them. We agree who owns the accounts, renews them and handles changes before launch."
      }
    ]
  },
  "website-improvement": {
    "headline": "Make your existing website easier to use.",
    "description": "Improve your website’s content, mobile layout, speed and enquiry journey. ManaCircle scopes practical fixes around the site you already have.",
    "intro": "A redesign starts with the friction a visitor encounters: an unclear offer, a slow page, a confusing menu or a form that asks too much. ManaCircle reviews your existing website and prioritises the changes worth making.",
    "fit": "Businesses with outdated pages, difficult mobile navigation, unclear service information or forms that get in the way. A focused improvement can suit an otherwise useful website; platform limitations may make a rebuild worth discussing.",
    "guide": "business-website-brief",
    "example": "For a service page with several competing buttons, the work could be a clearer headline, a shorter enquiry form, stronger mobile spacing and one primary contact action. Measure enquiries before and after when reliable tracking is available.",
    "questions": [
      {
        "question": "Can you improve sales on an existing website?",
        "answer": "We can work on the information and actions that help a visitor decide: product or service clarity, mobile usability and the enquiry path. Sales also depend on traffic, price, the offer and follow-up. We do not promise a fixed sales increase."
      },
      {
        "question": "What access do you need?",
        "answer": "We can begin a visible-page review from the public URL. Implementing changes may need appropriate access to your website platform, hosting or code. We agree the access and change scope after the initial discussion."
      }
    ]
  },
  "logo-branding": {
    "headline": "A brand people can recognise anywhere.",
    "description": "Logo design and brand identity for businesses worldwide: visual direction, colours, typography, agreed brand applications and usable final files.",
    "intro": "Your logo is one part of how people recognise your business. ManaCircle brings the mark, colours, typography and everyday materials into a consistent identity, designed for the places your customers actually see it.",
    "fit": "A new business with a settled name, an existing brand whose materials feel inconsistent, or a café or shop preparing to launch. Tell us where your identity needs to appear so the agreed formats suit those uses.",
    "guide": "business-website-brief",
    "example": "A café launch might need a primary logo, a compact profile mark, a colour palette and templates for menu announcements. Packaging artwork, signage production and print coordination are separate items to include if needed.",
    "questions": [
      {
        "question": "What logo files will I receive?",
        "answer": "We agree the handover in your quotation, including the logo variations and file formats needed for digital use and any printing. Ask for the formats your printer or website team requires before the scope is finalised."
      }
    ]
  },
  "android-app-development": {
    "headline": "An Android app with a useful job to do.",
    "description": "Android app design and development for customer and business workflows. Plan screens, integrations, testing and release support with ManaCircle.",
    "intro": "ManaCircle develops Android apps for repeat tasks that customers or staff need to complete. We define the journey first, then design and build the screens, integrations and testing included in your project.",
    "fit": "Businesses with a useful repeat task for customers or staff: accessing services, viewing products or completing an agreed workflow. If a mobile website already solves the task, compare the maintenance and scope before investing in a separate app.",
    "guide": "business-website-brief",
    "example": "An initial app could help customers browse a service catalogue and make an enquiry. Sign-in, payments, notifications and an admin dashboard each add decisions about data, backend work, testing and maintenance.",
    "questions": [
      {
        "question": "Are the backend and admin panel included?",
        "answer": "Only when they are part of the agreed scope. App screens, backend services, account access, admin tools and integrations are separate decisions. Your quotation should identify each included component."
      },
      {
        "question": "Do you also build iPhone apps?",
        "answer": "The current app service listed by ManaCircle is Android development. iOS development is not included in this offer."
      }
    ]
  },
  "digital-marketing": {
    "headline": "A global outlook. A Telugu-first approach.",
    "description": "Digital marketing strategy, content and campaign support with Telugu audiences as a priority. Connect your offer, creative and customer journey.",
    "intro": "ManaCircle plans digital marketing for businesses worldwide, with Telugu-speaking audiences as a first priority in regional campaigns. We align the offer, language, creative and enquiry destination before choosing what to publish or promote.",
    "fit": "Businesses reaching Telugu-speaking customers in Andhra Pradesh, Telangana or overseas, and brands that need coordinated English and Telugu communication. Start with where your customers live, what they need and how your business can serve them.",
    "guide": "instagram-reel-brief",
    "example": "A launch plan might combine one offer page, a set of Instagram posts, Telugu reel scripts and a separately scoped Meta Ads campaign. Content production, media spend and reporting responsibilities need their own line items.",
    "questions": [
      {
        "question": "Does digital marketing include SEO or Google Ads?",
        "answer": "SEO, Google Ads and other channels are included only when specifically agreed. We first discuss the audience, existing website and priorities, then identify what fits the project and budget."
      },
      {
        "question": "What will the reports show?",
        "answer": "We agree the measures before starting, such as platform spend, enquiries or other relevant actions that can be measured with available access. The report should distinguish activity from actual business outcomes."
      }
    ]
  },
  "meta-ads": {
    "headline": "Your offer. The right audience. A clear next step.",
    "description": "Facebook and Instagram campaign planning and management, with Telugu-first creative when relevant. Clear objectives, account ownership and separate ad spend.",
    "intro": "ManaCircle plans and manages Facebook and Instagram advertising around your offer and customer journey. For Telugu audiences, we plan the message in their language from the start, then align the creative, location and campaign destination.",
    "fit": "Businesses with a defined offer, an advertising budget and a way to respond to enquiries. Campaigns need a destination that matches the message, whether that is a website, an enquiry form or an agreed messaging journey.",
    "guide": "instagram-reel-brief",
    "example": "For a café introducing a seasonal menu, the scope could combine regional ad copy, supplied product footage, a menu destination and a campaign for the agreed locations. This is a planning example, not a promise of reach or sales.",
    "questions": [
      {
        "question": "Can you run ads in Telugu?",
        "answer": "Telugu ad copy, voiceovers and regional creative can be scoped alongside campaign management. We agree the language, target locations and production needs separately from the advertising budget."
      },
      {
        "question": "Do I keep ownership of my ad accounts?",
        "answer": "Use business accounts your business owns and grant the permissions needed for the agreed work. We discuss account readiness and access before setup; do not share passwords in an enquiry form."
      }
    ]
  },
  "instagram-content": {
    "headline": "Turn everyday footage into content worth watching.",
    "description": "Instagram posts and reel editing from your footage: ideas, English or Telugu scripts, captions, covers and agreed publishing support from ManaCircle.",
    "intro": "A product being used, a service explained or a new offer introduced—your business already has stories to tell. ManaCircle shapes supplied footage into posts and reels with a clear opening, useful detail and an appropriate next step.",
    "fit": "Business owners with product clips, service footage or regular updates who need help turning them into a consistent content plan. It suits restaurants, shops and service brands that can supply footage and approve content.",
    "guide": "instagram-reel-brief",
    "example": "For one product reel, you could supply a clear product close-up, a clip of it being used and the offer details. We can scope an opening hook, edit, subtitles, cover and caption. A batch or monthly schedule is quoted around the agreed quantity.",
    "questions": [
      {
        "question": "Are voiceovers and subtitles included?",
        "answer": "They can be included in the content scope. Tell us the language, intended duration and whether you need a voiceover, timed subtitles or burned-in captions so the production work is clear."
      },
      {
        "question": "Will you reply to comments and messages?",
        "answer": "Comment and direct-message management are not automatically included. Posting, approvals and any community-management responsibilities need to be agreed separately."
      }
    ]
  },
  "content-writing": {
    "headline": "Say the useful thing. Say it well.",
    "description": "English and Telugu scripts, video hooks, captions and business content. Give your message a clear structure before you record, edit or publish.",
    "intro": "ManaCircle writes English and Telugu scripts and content around what your audience needs to understand. We work with your approved facts, shape the opening and story, and make the next action clear.",
    "fit": "Businesses with something to explain, launch or demonstrate, and creators who need a script before filming or editing. The script can be planned around new shots or adapted to footage you already have.",
    "guide": "instagram-reel-brief",
    "example": "A product demonstration script can introduce one customer problem, show the product solving it and finish with where to enquire. The brand supplies accurate product facts; the script keeps the message focused.",
    "questions": [
      {
        "question": "What is included in a script handover?",
        "answer": "We agree the script language, length, opening hook, visual notes, caption needs and revision rounds. Voice recording and video editing are separate production tasks unless included."
      }
    ]
  },
  "qr-digital-menus": {
    "headline": "Less pinching. More finding what looks good.",
    "description": "Mobile-friendly QR menus for restaurants and cafés: categories, readable prices, stable QR links, table-card designs and an agreed update process.",
    "intro": "ManaCircle creates digital menus that guests open by scanning a QR code. We organise dishes, drinks, descriptions and prices for small screens, then prepare the link, QR code and table artwork needed to put the menu in use.",
    "fit": "Restaurants and cafés that want readable menus on guests’ phones, a menu link for Instagram, or a stable destination that can be updated as dishes change. It is a browsing menu unless ordering and payment features are separately scoped.",
    "guide": "qr-menu-vs-pdf",
    "example": "A café menu could group coffee, cold drinks and food, with approved photos, prices and dietary notes. The same published menu link can be shared in an Instagram bio and encoded in a printed table QR.",
    "questions": [
      {
        "question": "Do guests need to install an app?",
        "answer": "No app installation is needed for a web-based menu. The QR code opens the published menu link in a phone’s browser; guests need internet access."
      },
      {
        "question": "Do you print the QR table cards?",
        "answer": "The agreed deliverable includes the QR code and table-card design. Printing is separate. Test the final printed QR code on several phones before placing the cards on tables."
      }
    ]
  },
  "telugu-content-voiceovers": {
    "headline": "Telugu that sounds like a conversation.",
    "description": "Natural Telugu scripts, voiceovers, subtitles and campaign content for Andhra Pradesh, Telangana and Telugu-speaking audiences worldwide.",
    "intro": "ManaCircle creates Telugu scripts, voiceovers, subtitles and regional campaign content. We plan for the audience’s language, context and pronunciation, with English versions available when your campaign needs both.",
    "fit": "Brands speaking to Telugu communities locally or overseas, businesses adapting an English campaign, and teams with footage that needs a natural Telugu voice. We agree the tone, dialect, duration and usage before production.",
    "guide": "instagram-reel-brief",
    "example": "An English café caption can become a conversational Telugu reel script, a recorded voiceover and subtitles over client-supplied footage. Script approval should come before recording so wording and pronunciation are settled.",
    "questions": [
      {
        "question": "Can we choose the Telugu tone or dialect?",
        "answer": "Yes. Share the intended audience, preferred tone and pronunciation notes during the brief. We agree the voice, wording and language variant before recording or producing the final content."
      },
      {
        "question": "Can you deliver English and Telugu versions?",
        "answer": "Yes. We scope both versions, including script adaptation, subtitle languages, recording and any separate edits. A second language version is a production deliverable to include in the quotation."
      }
    ]
  }
};
