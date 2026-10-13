export type Service = {
  slug: string; title: string; short: string; icon: string; description: string;
  headline: string; intro: string; deliverables: string[]; inputs: string[];
  boundary: string; applications?: string[]; faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    "slug": "logo-branding",
    "title": "Logo & brand identity",
    "short": "A look people remember. A brand that feels like you.",
    "icon": "brand",
    "description": "Logo design and brand identity for businesses worldwide: visual direction, colours, typography, agreed brand applications and usable final files.",
    "headline": "A brand people can recognise anywhere.",
    "intro": "Your logo is one part of how people recognise your business. ManaCircle brings the mark, colours, typography and everyday materials into a consistent identity, designed for the places your customers actually see it.",
    "deliverables": [
      "Brand discovery and an agreed visual direction",
      "Logo design and agreed logo variations",
      "A colour palette and typography recommendations",
      "Social profile image and agreed post or story templates",
      "Final logo files and a practical brand guide"
    ],
    "inputs": [
      "Your business name, audience and what makes you different",
      "Styles you like and where the identity will be used",
      "Existing assets, required formats and target timing"
    ],
    "applications": [
      "An Instagram profile and highlight covers that feel consistent",
      "Branded reel covers, launch posts and offer announcements",
      "A recognisable identity across your website, menu and packaging"
    ],
    "boundary": "Logo concepts, revision rounds, file formats and brand applications are agreed in your quotation. Naming, trademark checks, printing and paid font licences are separate unless included.",
    "faq": [
      {
        "question": "Can you help a completely new business?",
        "answer": "Yes. Once your business name is settled, we can develop the logo and core visual identity. Tell us where you plan to use it so we can prepare the right formats."
      },
      {
        "question": "Can we use the design on Instagram?",
        "answer": "Yes. Profile artwork, highlight covers and post or reel-cover templates can be included. We agree the exact assets and quantities before starting."
      }
    ]
  },
  {
    "slug": "qr-digital-menus",
    "title": "QR menus for restaurants & cafés",
    "short": "Your menu, one scan away.",
    "icon": "qr",
    "description": "Mobile-friendly QR menus for restaurants and cafés: categories, readable prices, stable QR links, table-card designs and an agreed update process.",
    "headline": "Less pinching. More finding what looks good.",
    "intro": "ManaCircle creates digital menus that guests open by scanning a QR code. We organise dishes, drinks, descriptions and prices for small screens, then prepare the link, QR code and table artwork needed to put the menu in use.",
    "deliverables": [
      "Menu structure with agreed food and drink categories",
      "A responsive digital menu with descriptions and prices",
      "Food photos and dietary information supplied by you",
      "A QR code linked to the published menu and a table-card design",
      "Phone checks and an agreed menu-update handover"
    ],
    "inputs": [
      "Your latest menu, prices and approved descriptions",
      "Logo, food photos and any dietary or allergen information",
      "Your domain or hosting needs and who will update the menu"
    ],
    "applications": [
      "QR table cards that open the menu on a guest’s phone",
      "A menu link for your Instagram bio and Stories",
      "A convenient menu destination for takeaway packaging and flyers"
    ],
    "boundary": "Menu size, languages, hosting, domain and future updates are scoped separately. Ordering, payments, delivery and POS integrations are additional features. Printing is separate; you approve prices and food information before launch.",
    "faq": [
      {
        "question": "Can we change dishes and prices later?",
        "answer": "Yes. We agree whether updates are managed by our team or through an editing tool included in your project. A stable menu link means the same QR code can continue to work after content changes."
      },
      {
        "question": "Can customers order or pay through the menu?",
        "answer": "The core service is a menu for browsing. Ordering, payments and restaurant-system integrations can be discussed as additional project requirements."
      },
      {
        "question": "Can we share the menu on Instagram too?",
        "answer": "Yes. The published menu link can be used in your bio, Stories and other channels, alongside the QR code used at your restaurant or café."
      }
    ]
  },
  {
    "slug": "telugu-content-voiceovers",
    "title": "Telugu content & voiceovers",
    "short": "A familiar language. A stronger connection.",
    "icon": "mic",
    "description": "Natural Telugu scripts, voiceovers, subtitles and campaign content for Andhra Pradesh, Telangana and Telugu-speaking audiences worldwide.",
    "headline": "Telugu that sounds like a conversation.",
    "intro": "ManaCircle creates Telugu scripts, voiceovers, subtitles and regional campaign content. We plan for the audience’s language, context and pronunciation, with English versions available when your campaign needs both.",
    "deliverables": [
      "Telugu reel and video scripts with clear opening hooks",
      "Voiceover recording for the agreed script, voice and duration",
      "Timed subtitles or burned-in captions for supplied video",
      "Telugu social captions and calls to action",
      "Regional ad copy and agreed creative adaptations"
    ],
    "inputs": [
      "Your audience, offer and preferred Telugu tone or dialect",
      "Approved facts, footage and any existing English script",
      "Required formats, duration, voice direction and deadlines"
    ],
    "applications": [
      "Telugu voiceovers and subtitles for Instagram Reels and YouTube Shorts",
      "Local-language captions for product launches, festivals and offers",
      "Regional Facebook and Instagram ad creatives that match your audience"
    ],
    "boundary": "We agree language variants, voice, recording rights, duration, content quantity and revisions in the quotation. Filming and campaign management are separate. Meta Ads setup and ad spend can be discussed alongside your creative work.",
    "faq": [
      {
        "question": "Can you adapt an English script into natural Telugu?",
        "answer": "Yes. We adapt the message for your audience and platform, then agree the wording and tone with you before recording or editing."
      },
      {
        "question": "Can you add voiceover and subtitles to our footage?",
        "answer": "Yes. Share the footage and intended video length. We scope the script, voiceover, subtitle language, timing and editing together."
      },
      {
        "question": "Does regional ad creative include running the ads?",
        "answer": "This service covers the agreed content and creative. Campaign setup and management are available through our Meta Ads service, with advertising spend quoted separately from our work."
      }
    ]
  },
  {
    "slug": "website-design",
    "title": "Website design & development",
    "short": "A good first impression. A clear next step.",
    "icon": "window",
    "description": "Custom website design and development for businesses worldwide. Clear service pages, responsive layouts, enquiry forms and a practical launch handover.",
    "headline": "A website that makes your business clear.",
    "intro": "ManaCircle plans, designs and builds business websites around one question: what does your customer need to do next? We connect your offer, content and enquiry journey in a website that works on phones and desktops.",
    "deliverables": [
      "Page planning and a clear content structure",
      "Custom responsive design for phone and desktop",
      "Website development and contact integration",
      "Essential search and social-sharing setup",
      "Launch checks and a practical handover"
    ],
    "inputs": [
      "Your business, audience and main goal",
      "Brand assets and available content",
      "Examples you like, budget and target timing"
    ],
    "boundary": "Page count, copywriting, hosting, domains, online payments and ongoing maintenance are scoped in your quotation. We agree what you receive before we start.",
    "faq": [
      {
        "question": "Can you help if we don't have a logo or content?",
        "answer": "Tell us what you already have. We can discuss the additional content and design work needed, and include the agreed work in your quotation."
      },
      {
        "question": "Will the website work on phones?",
        "answer": "Yes. We design and check the key pages and enquiry journey for both mobile and desktop."
      }
    ]
  },
  {
    "slug": "website-improvement",
    "title": "Website improvement",
    "short": "Keep what works. Make the rest work harder.",
    "icon": "spark",
    "description": "Improve your website’s content, mobile layout, speed and enquiry journey. ManaCircle scopes practical fixes around the site you already have.",
    "headline": "Make your existing website easier to use.",
    "intro": "A redesign starts with the friction a visitor encounters: an unclear offer, a slow page, a confusing menu or a form that asks too much. ManaCircle reviews your existing website and prioritises the changes worth making.",
    "deliverables": [
      "A review of your current pages and customer journey",
      "A prioritised list of practical improvements",
      "Agreed layout, content and mobile fixes",
      "Contact-flow and page-performance improvements",
      "A comparison of the agreed changes"
    ],
    "inputs": [
      "Your public website address and platform",
      "What visitors struggle with today",
      "Available performance information and your priorities"
    ],
    "boundary": "Implementation depends on your platform and access. The review and the resulting fixes are scoped separately. We do not guarantee a particular increase in sales.",
    "faq": [
      {
        "question": "Do you have to rebuild my whole website?",
        "answer": "Not necessarily. We first look at the platform, content and enquiry journey. We recommend a rebuild only if the agreed goals need one."
      },
      {
        "question": "Can you also help bring people to the site?",
        "answer": "Yes. Marketing can complement the website changes. We scope the channels, creative work and advertising budget separately."
      }
    ]
  },
  {
    "slug": "android-app-development",
    "title": "Android app development",
    "short": "Your business, a little closer to your customers.",
    "icon": "phone",
    "description": "Android app design and development for customer and business workflows. Plan screens, integrations, testing and release support with ManaCircle.",
    "headline": "An Android app with a useful job to do.",
    "intro": "ManaCircle develops Android apps for repeat tasks that customers or staff need to complete. We define the journey first, then design and build the screens, integrations and testing included in your project.",
    "deliverables": [
      "App feature planning and user journeys",
      "Custom Android screen design",
      "Android app development for the agreed scope",
      "API integrations when included in your quotation",
      "Device testing, release preparation and handover"
    ],
    "inputs": [
      "Your business goal and the people who will use the app",
      "The features, content and brand assets you have in mind",
      "Any existing systems, target timing and budget"
    ],
    "boundary": "Features, backend services, admin tools, integrations, Play Store submission support and ongoing maintenance are scoped in your quotation. Hosting, developer account fees and third-party charges are separate. Store approval is subject to platform review.",
    "faq": [
      {
        "question": "Can you build an app for my existing business?",
        "answer": "Yes. We discuss how an Android app can support your customers or team, then agree the screens, features and integrations that fit the project."
      },
      {
        "question": "Can you help with the Play Store release?",
        "answer": "Release preparation and submission support can be included in your scope. You own the developer account, and final approval depends on the platform’s review."
      }
    ]
  },
  {
    "slug": "digital-marketing",
    "title": "Digital marketing",
    "short": "Connect your offer with the right people.",
    "icon": "target",
    "description": "Digital marketing strategy, content and campaign support with Telugu audiences as a priority. Connect your offer, creative and customer journey.",
    "headline": "A global outlook. A Telugu-first approach.",
    "intro": "ManaCircle plans digital marketing for businesses worldwide, with Telugu-speaking audiences as a first priority in regional campaigns. We align the offer, language, creative and enquiry destination before choosing what to publish or promote.",
    "deliverables": [
      "Audience, offer and campaign planning",
      "Channel selection for your requirements",
      "Campaign creative and content coordination",
      "Landing-page and enquiry-journey coordination",
      "Reporting on the agreed campaign measures"
    ],
    "inputs": [
      "Your offer, audience and target locations",
      "Campaign goals and advertising budget",
      "Existing brand assets and authorised account access"
    ],
    "boundary": "Advertising spend is separate from our service fee. Google Ads, SEO and other channels are included only when specifically agreed. Results depend on the offer, market and budget.",
    "faq": [
      {
        "question": "Is advertising spend included in your fee?",
        "answer": "No. Your quotation separates our work from the money paid to advertising platforms, so you can see both clearly."
      },
      {
        "question": "Do you guarantee leads or sales?",
        "answer": "No fixed result is guaranteed. We agree the objectives and measurement approach, then review performance honestly."
      }
    ]
  },
  {
    "slug": "meta-ads",
    "title": "Meta Ads",
    "short": "Put your offer in front of the right audience.",
    "icon": "megaphone",
    "description": "Facebook and Instagram campaign planning and management, with Telugu-first creative when relevant. Clear objectives, account ownership and separate ad spend.",
    "headline": "Your offer. The right audience. A clear next step.",
    "intro": "ManaCircle plans and manages Facebook and Instagram advertising around your offer and customer journey. For Telugu audiences, we plan the message in their language from the start, then align the creative, location and campaign destination.",
    "deliverables": [
      "Campaign goals, audience and budget planning",
      "Facebook and Instagram campaign setup",
      "Ad copy and creative coordination",
      "Campaign monitoring and agreed improvements",
      "Reports on spend and the agreed campaign measures"
    ],
    "inputs": [
      "Your offer, audience, target locations and goal",
      "Your advertising budget and available creative assets",
      "Authorised access to the relevant business accounts"
    ],
    "boundary": "Ad spend is paid separately from our service fee. Creative production, landing pages and conversion tracking are included only when agreed. Campaigns are subject to platform review; we do not promise a fixed number of leads or sales.",
    "faq": [
      {
        "question": "Does this cover both Facebook and Instagram?",
        "answer": "Yes. We choose Facebook, Instagram or both according to your audience and the agreed campaign plan."
      },
      {
        "question": "Is the advertising budget included in your service fee?",
        "answer": "No. The quotation separates campaign management and any creative work from the money paid to the advertising platform."
      },
      {
        "question": "Do you guarantee sales or leads?",
        "answer": "No. Results depend on the offer, audience, budget and market. We agree what to measure and report the campaign’s performance honestly."
      }
    ]
  },
  {
    "slug": "instagram-content",
    "title": "Instagram posts & reels",
    "short": "Your everyday moments, thoughtfully edited.",
    "icon": "reel",
    "description": "Instagram posts and reel editing from your footage: ideas, English or Telugu scripts, captions, covers and agreed publishing support from ManaCircle.",
    "headline": "Turn everyday footage into content worth watching.",
    "intro": "A product being used, a service explained or a new offer introduced—your business already has stories to tell. ManaCircle shapes supplied footage into posts and reels with a clear opening, useful detail and an appropriate next step.",
    "deliverables": [
      "Content ideas and an agreed content plan",
      "English or Telugu scripts",
      "Editing of client-supplied footage",
      "Post designs, captions and reel covers",
      "Instagram posting when included in your scope"
    ],
    "inputs": [
      "Your brand, audience and preferred language",
      "Usable footage you have permission to share",
      "Offers, approval dates and examples of your style"
    ],
    "boundary": "On-location shooting is not part of this service. We agree content quantity, footage length, revisions and publishing responsibilities. Comment and DM management are not automatically included.",
    "faq": [
      {
        "question": "Who records the videos?",
        "answer": "You supply the footage. We can discuss the shots your script needs, then edit the footage you provide. On-location filming is outside the current service."
      },
      {
        "question": "Can you post the content for us?",
        "answer": "Yes, if you need it. We include the publishing schedule, approval process and account permissions in the agreed quotation."
      }
    ]
  },
  {
    "slug": "content-writing",
    "title": "Video scripts & content",
    "short": "The right words, in your voice.",
    "icon": "pen",
    "description": "English and Telugu scripts, video hooks, captions and business content. Give your message a clear structure before you record, edit or publish.",
    "headline": "Say the useful thing. Say it well.",
    "intro": "ManaCircle writes English and Telugu scripts and content around what your audience needs to understand. We work with your approved facts, shape the opening and story, and make the next action clear.",
    "deliverables": [
      "Ideas and opening hooks",
      "English or Telugu video scripts",
      "Story beats and suggested visual direction",
      "Captions and calls to action where agreed",
      "An agreed round of copy revisions"
    ],
    "inputs": [
      "Your topic, offer and intended audience",
      "Preferred language, format and video length",
      "Facts, references and your brand's tone"
    ],
    "boundary": "We agree the script count, length, research needs and revisions. Filming, voiceover and specialist factual review are separate. Reel editing can be added through our Instagram service.",
    "faq": [
      {
        "question": "Can we get scripts in Telugu?",
        "answer": "Yes. We write scripts in English and Telugu. Tell us which language suits your audience, and whether you want a conversational or more formal voice."
      },
      {
        "question": "Can you write a script for footage we already have?",
        "answer": "Yes. Share the context and the footage description during our discussion, and we can scope a script around it."
      }
    ]
  }
];

export const projects = [
  {
    "slug": "nila",
    "name": "Nila",
    "type": "Website design",
    "category": "Websites",
    "style": "tea",
    "description": "A calmer online home for an everyday tea ritual.",
    "detail": "An original website concept for a fictional botanical tea business. Clear product storytelling, quiet typography and an obvious route to explore the collection.",
    "deliverables": [
      "Homepage direction",
      "Responsive visual system",
      "Product storytelling"
    ],
    "service": "website-design"
  },
  {
    "slug": "slow-social",
    "name": "The slower side of social",
    "type": "Posts & reels",
    "category": "Content",
    "style": "social",
    "description": "One simple idea, made for a few different moments.",
    "detail": "A self-initiated social concept exploring how a tea ritual becomes a post, a short motion study and a caption. The product visual is AI-generated. This is concept work, not a client campaign.",
    "deliverables": [
      "Post concept",
      "Reel motion study",
      "Caption and creative direction"
    ],
    "service": "instagram-content"
  },
  {
    "slug": "studio-form",
    "name": "Studio Form",
    "type": "Website improvement",
    "category": "Websites",
    "style": "form",
    "description": "A clearer enquiry journey for a fictional design studio.",
    "detail": "An original before-and-after layout study. The improved direction puts the service, selected work and a single enquiry action first. The interior image is AI-generated. It illustrates design decisions, not measured client results.",
    "deliverables": [
      "Page hierarchy review",
      "Before/after concept",
      "Enquiry journey"
    ],
    "service": "website-improvement"
  },
  {
    "slug": "words-in-motion",
    "name": "Words into motion",
    "type": "English & Telugu scripts",
    "category": "Content",
    "style": "script",
    "description": "A small story, told naturally in two languages.",
    "detail": "A demonstration script for the fictional Nila tea concept, written in English and Telugu. The structure connects a recognisable everyday moment to a simple invitation.",
    "deliverables": [
      "Opening hook",
      "English and Telugu scripts",
      "Visual beats and closing line"
    ],
    "service": "content-writing"
  }
];

export const homeFaq = [
  {
    "question": "What does ManaCircle do?",
    "answer": "ManaCircle is an eight-person creative and digital team offering brand identity, websites, Android apps, QR menus, digital marketing, Meta Ads and English/Telugu content. You can commission one service or combine them in a single scope."
  },
  {
    "question": "Can we work together from another country?",
    "answer": "Yes. We welcome projects from businesses worldwide and plan the work remotely. Before starting, we agree your audience, deliverables, communication schedule, review points, currency and payment terms."
  },
  {
    "question": "Do you prioritise Telugu audiences for digital marketing?",
    "answer": "Yes. Telugu audiences are a first priority in our regional marketing approach. We plan scripts, reels, voiceovers and Meta Ads for Andhra Pradesh, Telangana and Telugu-speaking communities overseas. English creative can be included too."
  },
  {
    "question": "How much will my project cost?",
    "answer": "The quote depends on the deliverables, content, features, revisions and ongoing support you need. We provide a written scope and identify separate costs such as advertising spend, domains, hosting or paid assets. There is no single price for every project."
  },
  {
    "question": "Do you shoot videos or edit the footage we provide?",
    "answer": "You supply the footage; we can handle the agreed ideas, scripts, editing, covers and captions. Telugu voiceovers, subtitles and posting can be scoped alongside the edit. On-location filming is not part of the current offer."
  },
  {
    "question": "What should we prepare before getting started?",
    "answer": "Share your business, audience, main goal, available brand assets and target timing. If you have an existing website or campaign, include its public link and what you want to improve. We can clarify the remaining decisions in the project scope."
  }
];

export const processSteps = [
  {
    "title": "Start a conversation",
    "text": "Tell us about your business, what you need and where you want to go."
  },
  {
    "title": "Make a clear plan",
    "text": "We discuss the scope, deliverables and a custom quotation. You know what to expect."
  },
  {
    "title": "Create, then refine",
    "text": "We bring the work to life and review it with you at the agreed milestones."
  },
  {
    "title": "Hand over, thoughtfully",
    "text": "Receive the agreed files, website or content, with practical next steps."
  }
];
