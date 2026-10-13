export type Guide = { slug: string; title: string; description: string; category: string; answer: string; sections: { id: string; title: string; paragraphs: string[]; bullets?: string[]; example?: string }[]; service: string; serviceLabel: string };
export const guides: Guide[] = [
  {
    "slug": "business-website-brief",
    "title": "What to include in a business website brief",
    "category": "Website planning",
    "description": "A practical website brief checklist: goals, pages, content, enquiries, ownership and separate costs. Prepare the details that make a quotation useful.",
    "answer": "A useful website brief explains who the website is for, what visitors should do, which pages and features you need, what content is available, and who will manage it after launch. You can start before every detail is settled.",
    "service": "website-design",
    "serviceLabel": "Website design & development",
    "sections": [
      {
        "id": "goal",
        "title": "Start with one main visitor action",
        "paragraphs": [
          "An enquiry website, a restaurant menu and an online shop need different structures. Start by describing the action that matters most: calling your business, submitting a project enquiry, browsing a menu or completing a purchase.",
          "Name your audience and service area. A company working across India can say so. A business that only serves a particular area should make that limit clear. Avoid listing locations where the service is not actually available."
        ],
        "example": "Illustrative brief: We run an interior design business. The website should help homeowners understand our services, view approved project images and request a consultation. We need an enquiry journey that is easy to use on a phone."
      },
      {
        "id": "scope",
        "title": "Separate pages from features",
        "paragraphs": [
          "A page list describes the content. A feature list describes what the site has to do. Both affect the project scope, and neither is replaced by saying you want a modern website."
        ],
        "bullets": [
          "Pages: Home, Services, individual service pages, About, Work and Contact as relevant.",
          "Features: enquiry form, WhatsApp link, booking system, payment flow, customer sign-in or content editor.",
          "Content: approved copy, logo files, product or project images, menu information and genuine reviews if available.",
          "Connections: any existing systems that need to receive enquiries or supply information."
        ],
        "example": "Four information pages with a contact form are a different scope from four pages plus appointment availability, payments, reminders and an admin dashboard. Include those actions explicitly in the brief."
      },
      {
        "id": "content",
        "title": "List what you have, and what needs creating",
        "paragraphs": [
          "A folder of usable assets makes planning easier. Label what is approved, what is a draft and what is missing. A designer needs to know whether copywriting, logo work, photography or video editing is part of the request.",
          "Use images and claims you have permission to publish. If you have no client projects yet, a clearly labelled concept can show a design approach. It should not appear to be a real commission or evidence of results."
        ],
        "bullets": [
          "Business name, offer, audience and contact details.",
          "Logo variations and any existing colour or typography guidelines.",
          "Approved service descriptions, prices if displayed, and relevant terms.",
          "Images with permission to use them and an explanation of what each image shows."
        ]
      },
      {
        "id": "launch",
        "title": "Agree the launch and ownership details",
        "paragraphs": [
          "Identify who owns the domain, hosting and business accounts, and who will pay renewals. Ask what is handed over, what updates are included and whether ongoing maintenance needs a separate agreement.",
          "Include checks for your most important pages and enquiry journey on phones and desktops. A form should tell the visitor whether an enquiry was actually received; a demonstration form should not pretend to send.",
          "Search setup can include useful titles, descriptions, internal links, a sitemap and checks that the production site is accessible to search engines. These steps support discovery; they do not guarantee rankings."
        ],
        "bullets": [
          "Preferred launch date and any event that makes it important.",
          "Your available budget or a request to compare different scopes.",
          "Who reviews content and designs, and how feedback is collected.",
          "Separate costs: domain, hosting, paid tools, maintenance and additional production."
        ]
      },
      {
        "id": "send",
        "title": "Turn the brief into a useful quotation",
        "paragraphs": [
          "Ask for a quotation that names the deliverables, revisions, review points, responsibilities and separate costs. If an item is undecided, identify it as an open decision rather than assuming it is included.",
          "ManaCircle starts website projects with a discussion and a custom quotation. The project brief form helps organise your details."
        ]
      }
    ]
  },
  {
    "slug": "qr-menu-vs-pdf",
    "title": "QR digital menu or PDF: what does your café need?",
    "category": "Restaurant & café planning",
    "description": "Compare a mobile web menu and a PDF menu. Understand the QR link, phone readability, menu updates, printing checks and separately scoped ordering features.",
    "answer": "A QR code opens a destination; it is not the menu itself. That destination can be a PDF or a mobile web menu. Choose the format based on how easy it is to read on a phone and how your business will keep dishes and prices current.",
    "service": "qr-digital-menus",
    "serviceLabel": "QR menus for restaurants & cafés",
    "sections": [
      {
        "id": "difference",
        "title": "The QR code and the menu do different jobs",
        "paragraphs": [
          "The printed code takes a guest to a web address. The page or file at that address contains the menu. This distinction matters when you make changes: replacing content at the same stable destination can avoid reprinting every table card.",
          "If the destination address changes, the printed code may need to change too. Agree who owns the destination and how it will be kept available. A link that depends on a paid service may also depend on keeping that subscription active."
        ]
      },
      {
        "id": "choose",
        "title": "Choose for the guest’s phone",
        "paragraphs": [
          "A PDF can be a reasonable starting point if you already have an approved, readable menu and it is easy to keep up to date. A large print-layout PDF may require zooming and sideways scrolling on a small phone.",
          "A responsive web menu can rearrange categories and text for the screen size. It also lets you plan dishes, prices and navigation around phone browsing. That comes with website setup and a decision about hosting and updates."
        ],
        "bullets": [
          "Choose a PDF when the existing file is clear on phones and simple replacement is enough.",
          "Consider a web menu when you need phone-friendly categories, individual descriptions and a layout designed for scrolling.",
          "For either format, check contrast, readable type, image size and how quickly guests can reach the information.",
          "Keep an alternative available for guests who cannot access the digital menu."
        ]
      },
      {
        "id": "prepare",
        "title": "Prepare one approved menu source",
        "paragraphs": [
          "Before design begins, collect the menu in an editable document or spreadsheet. Each dish should have its name, category, description and approved price. Include sizes or variants so guests do not need to guess.",
          "The restaurant supplies and approves dietary and allergen information. Design work cannot establish whether a dish is suitable for a particular dietary need. Agree the wording and responsibility before publishing."
        ],
        "example": "Illustrative item: Classic cappuccino | Coffee | Espresso with steamed milk | Regular ₹160 | Milk information supplied and approved by the café. This is a sample format, not a real menu or pricing recommendation."
      },
      {
        "id": "updates",
        "title": "Decide who updates it after launch",
        "paragraphs": [
          "A menu can become inaccurate when the team that knows about price changes cannot update the published version. Choose a managed update arrangement or an editing tool as part of the scope.",
          "The same menu link can be used on the table card and in an Instagram bio. Check both after changing the content. Avoid maintaining several separate copies unless someone is responsible for keeping them consistent."
        ],
        "bullets": [
          "Who approves a price or dish change?",
          "Who makes the edit, and what does an update cost?",
          "Who owns and renews the domain or hosting?",
          "How will you check the published change?"
        ]
      },
      {
        "id": "features",
        "title": "A browsing menu does not automatically take orders",
        "paragraphs": [
          "Ordering, payment, delivery and point-of-sale integrations are separate features. They introduce their own business rules, costs, access requirements and testing. Write them into the brief if guests need to complete those actions.",
          "ManaCircle’s core QR menu service covers the agreed browsing menu, a QR code linked to the published destination and table-card design. Menu size, languages, hosting, updates and additional features are discussed in the quotation."
        ]
      },
      {
        "id": "test",
        "title": "Test the printed result at the table",
        "paragraphs": [
          "Scan a final-size printed proof using more than one phone. Test in the lighting guests will actually use and confirm that the destination opens, prices are current and text can be read comfortably.",
          "The QR graphic shown in ManaCircle’s service illustration is a visual example, not a working code. A production code is generated for the actual published menu link and should be checked before a print run."
        ]
      }
    ]
  },
  {
    "slug": "instagram-reel-brief",
    "title": "How to brief an Instagram reel in English or Telugu",
    "category": "Content planning",
    "description": "Plan a business reel with one message, usable footage, an approved script, voice direction, subtitles and a clear publishing scope.",
    "answer": "A good reel brief identifies the audience, one main message, the language, the footage available and the action viewers should take. Agree the script, voiceover, subtitles, editing and posting responsibilities before production.",
    "service": "instagram-content",
    "serviceLabel": "Instagram posts & reels",
    "sections": [
      {
        "id": "message",
        "title": "Give the reel one job",
        "paragraphs": [
          "A product demonstration, an offer announcement and an introduction to your business are different stories. Choose the one job this reel needs to do. Then decide what the viewer should understand and what they can do next.",
          "Supply the exact offer, valid dates and important conditions if the reel promotes a sale or event. Avoid claims that your business cannot support. Keep the next action consistent with the destination you plan to use."
        ],
        "example": "Illustrative café brief: Introduce the new breakfast menu to nearby customers. Show the food and the menu, use conversational Telugu, and finish by inviting viewers to open the menu link in our profile."
      },
      {
        "id": "footage",
        "title": "Describe the footage you can supply",
        "paragraphs": [
          "List the clips you already have and what each one shows. Clear product views, a simple demonstration and relevant context give the edit something concrete to work with. Share usable originals where possible rather than repeatedly compressed copies.",
          "Make sure your business has permission to use the footage, visible people, music and any other supplied assets. The final content scope should identify who checks those permissions.",
          "ManaCircle edits client-supplied footage. On-location filming is outside the current service. If a script needs shots you do not have, agree who will record them before the editing schedule is set."
        ]
      },
      {
        "id": "language",
        "title": "Choose the language and the voice",
        "paragraphs": [
          "English and Telugu versions should carry the same approved facts while sounding natural to their audiences. Explain whether the tone should be conversational, formal or suited to a particular regional audience.",
          "For Telugu voiceover work, agree the voice, dialect, pronunciation notes, duration and usage rights. Approve the script before recording. A brand name or technical word may need a specific pronunciation."
        ],
        "example": "Illustrative opening: “A cup of coffee. A little time for you.” Telugu adaptation: “ఒక కప్పు కాఫీ. కాస్త మీ కోసం.” This is a sample creative line. The final wording should match your offer, audience and footage."
      },
      {
        "id": "deliverables",
        "title": "Name the production deliverables",
        "paragraphs": [
          "A request for one reel can mean very different amounts of work. Specify which parts are needed, including whether a second language version is a separate edit. Scope the duration, revision rounds and approval process together."
        ],
        "bullets": [
          "Idea and script, including the opening hook and closing action.",
          "Editing of the supplied footage and any agreed graphic elements.",
          "Voiceover recording if required, with an approved script.",
          "Timed subtitles or burned-in captions, including the language.",
          "Cover image, social caption and final export requirements.",
          "An additional ad version if the creative will support a separately scoped campaign."
        ]
      },
      {
        "id": "posting",
        "title": "Agree who posts and who replies",
        "paragraphs": [
          "Delivering a video file and publishing a reel are separate responsibilities. If posting is included, agree the account permissions, schedule, approval deadline and the caption to publish.",
          "Comment replies and direct messages are not automatically included in content production. A clear responsibility for enquiries is useful when a reel or an ad invites people to contact the business.",
          "ManaCircle offers scripts, editing, posts and reels, with posting when included in the quotation. Telugu voiceovers and regional ad creatives can be scoped alongside that work. Meta Ads management and advertising spend are separate."
        ]
      }
    ]
  },
  {
    "slug": "website-project-costs",
    "title": "What should a website quotation include?",
    "description": "Compare website quotes by pages, features, content, ownership, launch checks and recurring costs. A practical checklist before you approve the work.",
    "category": "Budget & scope",
    "service": "website-design",
    "serviceLabel": "Website design & development",
    "answer": "A useful website quotation separates design and development from content, integrations and ongoing costs. It names the pages, features, revisions, delivery milestones, account ownership and post-launch support. Compare the included work before comparing the total.",
    "sections": [
      {
        "id": "scope",
        "title": "Compare the same pages and features",
        "paragraphs": [
          "A five-page brochure website and a five-page booking website are different projects. One presents information; the other also needs availability, confirmations, customer data and operational decisions. Ask each supplier to quote against the same brief."
        ],
        "bullets": [
          "Name the pages and identify layouts that can be reused.",
          "List forms, bookings, payments, accounts and integrations separately.",
          "State who supplies the copy, translations, photos and brand files.",
          "Agree the devices, browsers and important journeys to check."
        ]
      },
      {
        "id": "content",
        "title": "Make content part of the schedule",
        "paragraphs": [
          "A project can be ready for development while still waiting for service descriptions or approved photographs. The quote should explain whether content writing is included, who approves factual claims and when final material is needed.",
          "For a redesign, list existing URLs that must remain available and any redirects that may be required. Search setup is more useful when it is connected to the actual pages and audience."
        ]
      },
      {
        "id": "recurring",
        "title": "Separate one-time work from recurring costs",
        "paragraphs": [
          "Design and development are usually scoped as project work. Domain renewals, hosting, paid tools, maintenance and content updates may continue after launch. Ask for the billing frequency, account owner and what happens if you change supplier."
        ],
        "bullets": [
          "Domain and hosting ownership and renewal responsibilities.",
          "Paid fonts, imagery, plugins or external services, where applicable.",
          "Maintenance scope, response arrangements and content-update limits.",
          "Currency, applicable taxes and payment milestones in the written quote."
        ]
      },
      {
        "id": "handover",
        "title": "Define what finished means",
        "paragraphs": [
          "Approval should include the agreed pages and working user journeys, not just a screenshot of the homepage. Identify who checks the enquiry destination, account access, mobile layouts and final content.",
          "Your handover should name the files, access, documentation and support included. Store credentials in an agreed secure channel, rather than in a public brief or email thread with broad access."
        ],
        "example": "Example scope: Home, three service pages, About and Contact; responsive design; approved client-supplied copy; one enquiry integration; page titles and descriptions; two agreed review rounds; launch checks and access handover. Booking, payments and ongoing content work would be listed separately."
      }
    ]
  },
  {
    "slug": "telugu-marketing-brief",
    "title": "How to plan a Telugu digital marketing campaign",
    "description": "A Telugu marketing brief covering audience, dialect, offer, scripts, creative, campaign destination and measurement—for local and overseas audiences.",
    "category": "Telugu-first marketing",
    "service": "digital-marketing",
    "serviceLabel": "Digital marketing",
    "answer": "A Telugu campaign starts with the audience’s location, context and offer—not a word-for-word translation. Agree the tone, approved facts, script, creative format, enquiry destination and measurement before production. Telugu-speaking audiences in different markets may need different messages.",
    "sections": [
      {
        "id": "audience",
        "title": "Name the audience and the market",
        "paragraphs": [
          "A restaurant reaching nearby diners and a service reaching Telugu families overseas have different customer journeys. Specify where the business can serve people, which locations the campaign targets and what the audience should recognise in the message.",
          "Choose conversational or formal Telugu deliberately. Include dialect and pronunciation preferences for brand names, places and specialist terms. If English words are familiar to the audience, agree how they will appear in the script."
        ]
      },
      {
        "id": "offer",
        "title": "Give the campaign one clear offer",
        "paragraphs": [
          "Write down the actual product or service, who it helps, what is included and what a customer should do next. Keep availability, dates, prices and conditions attached to the offer wherever they are relevant.",
          "A warm voiceover cannot fix an unclear offer. Approve the facts and next action before making the video or designing the ad."
        ],
        "example": "Example: A restaurant introduces a weekday lunch menu to nearby Telugu-speaking diners. The reel shows the dishes, explains when the menu is available and directs viewers to a readable menu page. The restaurant confirms prices and availability before publishing."
      },
      {
        "id": "creative",
        "title": "Plan the script, edit and language versions",
        "paragraphs": [
          "Agree the opening, key message, visual beats and closing action. Then identify the footage, voice, subtitles, cover and caption that need to be produced. A Telugu version and an English version should share approved facts while sounding natural in each language."
        ],
        "bullets": [
          "Supply original footage and confirm permission to use it.",
          "Approve the script and pronunciation before voice recording.",
          "Check subtitles on a phone and keep essential text easy to read.",
          "List each format, duration, language version and revision round."
        ]
      },
      {
        "id": "destination",
        "title": "Keep the enquiry journey in the same conversation",
        "paragraphs": [
          "An ad in Telugu should lead to an experience the audience can understand. Check the landing page or messaging flow, important offer details and who will respond to enquiries.",
          "For overseas audiences, account for service availability, time zones, contact methods and the details customers need before making a decision. Language alone is not a substitute for market fit."
        ]
      },
      {
        "id": "measurement",
        "title": "Agree what you will review",
        "paragraphs": [
          "Separate content production costs, campaign management and advertising spend. Choose measures that match the campaign’s job, and distinguish platform activity from enquiries that the business can actually follow up.",
          "ManaCircle prioritises Telugu audiences in regional digital marketing and can coordinate scripts, voiceovers, reels and Meta Ads. Campaign scope, access and reporting are agreed before work starts; reach, enquiries and sales are not guaranteed."
        ]
      }
    ]
  }
];
