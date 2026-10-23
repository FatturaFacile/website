import type { SiteTranslations } from '../types';

export const en: SiteTranslations = {
  common: {
    siteName: 'FatturaFacile',
    tagline: 'Simple invoices, offline & cloud',
    nav: {
      product: 'Product',
      whyUs: 'Why Us',
      featuresModules: 'Features & Modules',
      offlineVsCloud: 'Offline vs Cloud',
      communitySocial: 'Community & Social',
      requestModulesFree: 'Request Modules (Free)',
      contribute: 'How to Contribute',
      schoolsSocial: 'Schools & Education',
      sponsors: 'Sponsors & Support',
      networkSupport: 'Network & Support',
      localSupport: 'Local Support (IT/CH)',
      faq: 'FAQ',
      about: 'About Us',
      story: 'Our Story',
      team: 'Team & Contributors',
      privacy: 'Privacy & Compliance',
    },
    actions: {
      downloadDesktop: 'Download Desktop Edition (Free)',
      exploreCloud: 'Explore Cloud Edition',
      requestModule: 'Request Free Module',
      joinCommunity: 'Join Telegram Community',
      becomePartner: 'Become a Local Partner',
      contactUs: 'Email Us',
      learnMore: 'Learn More',
      understood: 'Understood',
      filterAll: 'All',
      backToHome: 'Back to Home',
    },
    footer: {
      description:
        'The lightweight and independent invoicing system created specifically for tradespeople, micro-businesses, and freelancers in Italy and Switzerland. Built with local SQLite architecture and self-hosted cloud option.',
      emailLabel: 'Email Contact:',
      productColTitle: 'Product',
      legalColTitle: 'Privacy & Legal',
      marketsColTitle: 'Regional Markets',
      italyMarketDesc:
        'Italy 🇮🇹: Compatible with FatturaPA XML, payment tracking, and flat-rate/standard tax schemes.',
      swissMarketDesc:
        'Switzerland 🇨🇭: Compliant with QR-Bill (SIX standard) and federal VAT rates (standard, reduced, accommodation).',
      copyright: 'Fattura Facile. Open initiative with zero subscription fees.',
      telegramCommunity: 'Telegram Community',
      githubRepo: 'GitHub Repository',
    },
    privacyModal: {
      title: 'Privacy Policy & Regulatory Compliance',
      subtitle: 'EU GDPR (Regulation 2016/679) & Swiss nLPA / FADP',
      calloutTitle: 'Core Engineering Principle:',
      calloutDesc:
        'At Fattura Facile, privacy is not a legal afterthought; it is the fundamental architectural foundation of our software.',
      section1Title: '1. Standalone Desktop Edition (Local SQLite)',
      section1Text: 'When utilizing the portable USB or desktop version:',
      section1Bullets: [
        'Zero Data Transmission: Billing records, customer databases, tax IDs, and bank account numbers reside exclusively inside the local SQLite file on your device.',
        'No Intermediary Servers: We do not collect telemetry, usage metrics, or analytical data regarding issued invoices.',
        'Full Data Sovereignty: The business operator acts as the sole Data Controller. No data crosses national borders, and no third-party Data Processing Agreement (DPA) is needed for local operations.',
      ],
      section2Title: '2. Self-Hosted Cloud Edition (Hosting managed by user)',
      section2Text: 'Even when deploying the multi-user networked edition:',
      section2Bullets: [
        'Client-Owned Infrastructure: The software is deployed on your private server or VPS (Docker / PostgreSQL). The Fattura Facile core team has zero access to your database.',
        'Direct Compliance: GDPR and FADP compliance remains entirely under your internal governance, avoiding third-party SaaS breach risks.',
        'Transparent Communication: For technical inquiries and architecture questions, our direct team contact is info@fatturafacile.eu.',
      ],
      section3Title: '3. Data Subject Rights',
      section3Text:
        'Under Articles 15-22 of EU GDPR and Articles 25-29 of the Swiss FADP, individuals retain full rights of access, rectification, portability, and erasure. With the desktop edition, you already maintain direct physical custody of the raw database file.',
      closeBtn: 'Close Privacy Sheet',
    },
  },
  home: {
    seo: {
      title: 'Fattura Facile | Simple Invoicing for Tradespeople & SMBs',
      description:
        'Free and offline invoicing software with SQLite or self-hosted Cloud. Compliant with Italian FatturaPA SDI and Swiss QR-Bill SIX. Zero monthly fees.',
      keywords:
        'fattura facile, invoicing software tradespeople, offline invoices, portable usb invoicing, sqlite invoice software, free electronic invoice sdi, fatturapa, swiss qr-bill, qr-invoice, ticino invoicing, gdpr invoicing, swiss fadp, wpf billing, free invoicing software',
    },
    hero: {
      badgeGeo: 'Tailored for Italy 🇮🇹 (FatturaPA / SDI) & Switzerland 🇨🇭 (QR-Bill SIX)',
      badgePrivacy: 'Privacy Compliant: EU GDPR & Swiss FADP',
      titlePart1: 'Invoicing made simple, quick and',
      titlePart2: 'under your complete control.',
      subtitle:
        'Stop struggling with bloated and slow ERP software. Issue invoices in 30 seconds straight from your PC or USB flash drive with local SQLite, 100% free with no monthly subscriptions, or host your own multi-user private cloud.',
      ctaPrimary: 'Download Desktop Edition (Free)',
      ctaSecondary: 'Explore Cloud Edition',
      badges: {
        zeroSubTitle: 'Zero Subscription',
        zeroSubDesc: 'Desktop free forever',
        portableTitle: 'Portable on USB',
        portableDesc: 'No installation required',
        offlineTitle: '100% Offline',
        offlineDesc: 'Works without Internet',
        dataOwnershipTitle: 'Your Data is Yours',
        dataOwnershipDesc: 'No intermediary servers',
      },
    },
    quickSummary: {
      eyebrow: 'Lean Engineering',
      heading: 'A fast instrument built for professionals on the field',
      lead: 'Electricians, plumbers, installers, landscapers, and solo freelancers issue an average of 10-20 invoices a month. They do not need complex enterprise logistics—they just need to get paid promptly and securely.',
    },
  },
  perche: {
    seo: {
      title: 'Why Choose Fattura Facile | Our Philosophy',
      description:
        'Discover the anti-bloatware philosophy: lightweight software, 1-minute estimates, 1-click invoice conversion, and freedom from recurring subscriptions.',
      keywords:
        'why fattura facile, lightweight invoicing software, erp alternative, quick tradesman quote, zero subscription billing',
    },
    eyebrow: 'The Fattura Facile Philosophy',
    heading: 'Not a 500-button monster ERP, but your lightweight everyday companion',
    lead: 'We eliminated enterprise overhead to focus exclusively on what truly matters: operational speed, absolute fiscal compliance, and instantaneous execution.',
    pillars: [
      {
        title: 'Estimate in 1 minute, Invoice in 1 click',
        description:
          'Draft quotes directly on the job site. Once approved by the client, convert them into an official invoice with a single click while maintaining strict sequential numbering.',
      },
      {
        title: 'Dual-Market Ready: Italy 🇮🇹 & Switzerland 🇨🇭',
        description:
          'Built-in support for Italian FatturaPA electronic XML (SDI via PEC or recipient code) alongside the Swiss QR-Bill standard with valid SIX payment codes and VAT calculations.',
      },
      {
        title: 'One-Click Portable Encrypted Backup',
        description:
          'Create compressed, password-protected snapshots of your database onto a secondary USB flash drive, network NAS, or synced folder. Never lose a record even when switching computers.',
      },
    ],
    antiErpHeading: 'No mandatory monthly fees just to issue a few invoices',
    antiErpText:
      'Modern subscription SaaS tools charge escalating recurring fees, locking access to your own historical records if a renewal is missed. With Fattura Facile, the desktop engine belongs entirely to you, free of contract lock-ins and network outages.',
    quoteToInvoiceHeading: 'Seamless workflow between job sites and office desk',
    quoteToInvoiceText:
      'Forget double entries and messy spreadsheets. Reusable customer books and catalog items allow you to complete compliant invoices in under 60 seconds, freeing up time for your trade.',
  },
  versioni: {
    seo: {
      title: 'Offline Standalone vs Private Cloud | Fattura Facile',
      description:
        'Detailed comparison between our portable C# WPF desktop edition with SQLite and our multi-user private cloud Docker edition.',
      keywords:
        'fattura facile versions, offline usb sqlite invoicing, private cloud invoicing docker, wpf sqlite billing',
    },
    eyebrow: 'Architectural Freedom',
    heading: 'Two engines, 100% free for everyone',
    lead: 'No software licensing fees paid to our team. Work in total autonomy: offline on your desk or self-hosted on your private infrastructure.',
    desktopCard: {
      tag: 'Standalone / USB',
      badge: '100% Free',
      title: 'Fattura Facile Desktop',
      subtitle:
        'Engineered in native C#/.NET WPF with an embedded zero-configuration SQLite database.',
      features: [
        'Zero installation: portable folder runnable from any USB stick or portable SSD.',
        'Total data privacy: zero financial data leaves your personal computer (Privacy by Design).',
        'Works anywhere: on job sites, in service vans, or workshops without Wi-Fi.',
        'Instantaneous speed: sub-second boot times and immediate record saving.',
      ],
      limitation: 'Single concurrent operator per file (local SQLite file lock constraint).',
      cta: 'Download Portable ZIP (Win 10/11)',
    },
    cloudCard: {
      tag: 'Multi-User & Self-Hosted',
      badge: 'Free Software (Hosting managed by you)',
      title: 'Fattura Facile Private Cloud',
      subtitle:
        'Deploy it on your VPS, company server, or local office NAS using Docker containers.',
      features: [
        'Concurrent multi-user access: team members and accountants connected simultaneously.',
        'Zero per-seat license fees: no monthly subscriptions scaled on invoice counts.',
        'Legal sovereignty: since you host the server, third-party data processor liabilities are eliminated.',
        'Seamless migration: export and import your local SQLite file directly to the cloud instance.',
      ],
      migrationNote:
        'Requires basic system administration skills to orchestrate Docker containers.',
      cta: 'View Self-Hosted Guide on GitHub',
    },
    comparisonTable: {
      title: 'Technical Comparison Matrix',
      headers: ['Feature', 'Standalone Desktop', 'Private Cloud'],
      rows: [
        {
          feature: 'Software License',
          desktop: 'Free forever (Open-Source)',
          cloud: 'Free forever (Open-Source)',
        },
        { feature: 'Subscription Cost', desktop: 'None (€0 / CHF 0)', cloud: 'None (€0 / CHF 0)' },
        {
          feature: 'Internet Connection',
          desktop: 'Not required (100% offline)',
          cloud: 'Required for remote access',
        },
        {
          feature: 'Database Engine',
          desktop: 'Local SQLite (on disk or USB)',
          cloud: 'PostgreSQL / SQL Server',
        },
        {
          feature: 'Concurrent Users',
          desktop: '1 operator per database file',
          cloud: 'Multi-user concurrent',
        },
        {
          feature: 'Tax Compliance',
          desktop: 'Italy (SDI) & Switzerland (QR-Bill)',
          cloud: 'Italy (SDI) & Switzerland (QR-Bill)',
        },
        {
          feature: 'System Footprint',
          desktop: 'Zero install (Portable executable)',
          cloud: 'Docker Container / VPS',
        },
      ],
    },
  },
  moduli: {
    seo: {
      title: 'Module Catalog & Public Roadmap | Fattura Facile',
      description:
        'Explore active Fattura Facile modules for Italy and Switzerland. Review our transparent development roadmap and vote on free community modules.',
      keywords:
        'fattura facile modules, invoicing software roadmap, fatturapa module, qr-bill module, free payment scheduler',
    },
    eyebrow: 'Modular & Transparent Ecosystem',
    heading: 'Production-ready modules and community-driven development',
    lead: 'Fattura Facile provides essential billing tools out of the box and expands based on practical community needs. Every approved module is developed free of charge and shipped in official public releases.',
    availableSectionTitle: 'Available Modules',
    roadmapSectionTitle: 'Transparent Development Roadmap',
    roadmapStages: {
      inDevelopment: 'In Active Development',
      planned: 'Next Up (Planned)',
      backlog: 'Community Ideas Backlog',
    },
    requestForm: {
      badge: 'Community-Driven & 100% Free',
      title: 'Need a specific feature or missing trade module?',
      description:
        'Tell us about your business workflow or regional regulatory requirements. If the feature benefits the community, our team will program it free of charge and include it in upcoming open releases.',
      nameLabel: 'Full Name / Company Name',
      emailLabel: 'Contact Email Address',
      marketLabel: 'Target Market',
      tradeLabel: 'Trade or Industry (e.g. Electrician, Plumber, Construction, Accounting)',
      detailsLabel: 'Feature Requirements and Operational Problem to Solve',
      submitBtn: 'Submit Free Module Proposal',
      disclaimer:
        'Our core development team reviews submissions directly to draft open architectural specifications.',
    },
  },
  team: {
    seo: {
      title: 'The Team & Contributors | Fattura Facile',
      description:
        'Meet the architects, software engineers, and tax advisors driving Fattura Facile across Switzerland and Italy.',
      keywords:
        'fattura facile team, davide nava, net open source engineers, swiss italian tax consultants, contributors',
    },
    eyebrow: 'Open & Non-Profit Initiative',
    heading: 'The people behind Fattura Facile',
    lead: 'A dedicated group of software architects, tax consultants, and educators united by the belief that essential everyday business software should remain free from recurring paywalls.',
    regions: {
      switzerland: 'Switzerland 🇨🇭 (Canton Ticino & Grisons)',
      italy: 'Italy 🇮🇹 (Lombardy & Other Regions)',
    },
    coreMaintainerBadge: 'Core Maintainer',
    joinCta: {
      title: 'Want to join our team or contribute?',
      description:
        'We actively welcome C#/.NET developers, Astro frontend specialists, tax consultants for specification reviews, and translators for national European languages.',
      githubBtn: 'Contribute on GitHub',
      telegramBtn: 'Chat on Telegram',
    },
  },
  scuoleSociale: {
    seo: {
      title: 'Schools, Academic Programs & Social Impact | Fattura Facile',
      description:
        'Educational initiatives for technical and commercial schools. Real-world .NET codebase for learning and free billing software for enterprise simulations.',
      keywords:
        'fattura facile schools, net apprenticeships, commercial simulation free software, academic invoicing, social impact',
    },
    hero: {
      badge: 'Education & Social Responsibility',
      heading: 'Bringing real-world enterprise software to schools and communities',
      lead: 'No more toy examples or disconnected syntax snippets. We provide schools and vocational institutes with an active, compliant, professional software suite to train the specialists of tomorrow.',
      ctaApply: 'Request Partnership for Your School',
      ctaGithub: 'Explore the Academic Codebase',
    },
    technicalTrack: {
      badge: 'For Technical & IT Institutes (High Schools / Universities / Apprenticeships)',
      title: 'Learning Software Engineering on a Real-World Application',
      lead: 'A modern codebase built on Clean Architecture and SOLID design patterns, ideal for educators and students who want to bridge theory with production code.',
      bullets: [
        {
          title: 'Clean Architecture & CQRS Patterns',
          desc: 'Practical exploration of bounded contexts, domain commands, queries, and presentation decoupling in C# .NET.',
        },
        {
          title: 'Embedded Databases & ACID Transactions',
          desc: 'Hands-on practice with local SQLite persistence, indexing, relational constraints, and schema migrations without server overhead.',
        },
        {
          title: 'CI/CD Pipelines & Quality Standards',
          desc: 'Real workflow experience using GitHub Actions, SonarQube quality gates, Qodana static analysis, and automated release packaging.',
        },
        {
          title: 'Internships, Capstones & Student Theses',
          desc: 'Opportunities for students to build real modules and publish them under their own names in the official open-source distribution.',
        },
      ],
    },
    commercialTrack: {
      badge: 'For Business, Commercial & Accounting Schools',
      title: 'Zero-Cost Business Simulation & Bookkeeping Practice',
      lead: 'An authentic tool identical to the software deployed by real local businesses, with zero licensing overhead or workstation caps.',
      bullets: [
        {
          title: 'Real FatturaPA (SDI) Generation',
          desc: 'Practical exercises generating and validating authentic XML invoice schemas for the Italian Revenue Agency.',
        },
        {
          title: 'Swiss SIX QR-Bill Standards',
          desc: 'Creating and processing official Swiss QR payment slips compliant with interbank standards and federal VAT requirements.',
        },
        {
          title: 'Zero Licensing Fees for Classrooms',
          desc: 'Installable across all computer labs without per-seat charges, or portable on USB drives for student homework assignments.',
        },
      ],
    },
    socialMission: {
      badge: 'Digital Inclusion & Access',
      title: 'Our Ethical and Social Mission',
      description:
        'We believe digital tools and the ability to start an independent micro-business should be accessible to anyone without financial barriers.',
      points: [
        'Tangible support for trade apprentices, graduates, and young artisans launching their business.',
        'Closing the technology divide for micro-businesses with limited capital.',
        'Absolute protection of personal financial privacy and business accounting records.',
      ],
    },
    teacherContact: {
      title: 'Are you an educator, coordinator, or school director?',
      lead: 'Contact us to arrange complimentary educational toolkits, curricular guidelines, and practical assignment materials for your classes.',
      btnLabel: 'Request Academic Kit',
    },
  },
  supportoLocale: {
    seo: {
      title: 'Partner Network & Regional Support (IT/CH) | Fattura Facile',
      description:
        'Find accredited local IT consultants, fiduciaries, and technicians for workstation setup, assistance, and training across Italy and Switzerland.',
      keywords:
        'fattura facile local support, ticino billing partner, varese como invoice support, qr-bill sdi consulting',
    },
    eyebrow: 'Regional Proximity',
    heading: 'Consultants, technicians, and fiduciaries by your side on the ground',
    lead: 'While the software is 100% free, if you require customized on-site deployment, network setups, or team training, you can rely on accredited local professionals in your area.',
    regions: {
      switzerland: 'Switzerland 🇨🇭 (Canton Ticino & Grisons)',
      italy: 'Italy 🇮🇹 (Lombardy, Piedmont & Other Regions)',
    },
    partnerForm: {
      badge: 'Open Professional Directory',
      title: 'Apply to Become an Accredited Regional Partner',
      lead: 'Are you an IT technician, web agency, or accounting studio? Join the Fattura Facile directory for free and offer your professional services to users in your territory.',
      companyLabel: 'Company Name or Studio Name',
      contactLabel: 'Contact Person',
      emailLabel: 'Business Email',
      phoneLabel: 'Phone / Mobile',
      countryLabel: 'Country (Italy or Switzerland)',
      regionLabel: 'Region or Canton of Operation',
      servicesLabel: 'Offered Services (On-site setup, Server/Cloud, Backup, Training, Accounting)',
      notesLabel: 'Brief Summary of Field Experience',
      submitBtn: 'Submit Free Partner Application',
    },
  },
  faq: {
    seo: {
      title: 'Frequently Asked Questions (FAQ) | Fattura Facile',
      description:
        'Detailed answers regarding offline usage, SQLite security, FatturaPA, Swiss QR-Bills, our free model, and local support.',
      keywords:
        'faq fattura facile, invoicing faq, sqlite invoice security, free fatturapa support',
    },
    eyebrow: 'Answers & Clarity',
    heading: 'Frequently Asked Questions',
    lead: 'Everything you need to know about our technology, fiscal compliance, and the open development philosophy of the project.',
    searchPlaceholder: 'Search for answers (e.g., USB, backup, SDI, QR-Bill)...',
    categories: {
      general: 'General & Philosophy',
      technical: 'Architecture & Storage',
      compliance: 'Regulations & Tax',
      partners: 'Support & Community',
    },
    items: [
      {
        id: 'faq-usb',
        category: 'technical',
        question: 'How does the USB drive version work? Is it really portable without installing?',
        answer:
          'Yes! Simply download the .ZIP folder, extract it to any USB stick or portable SSD, and launch the primary executable. The software does not modify Windows system registries and stores all documents in the local SQLite database on the drive itself. Plug it into any Windows 10 or 11 computer and resume working.',
      },
      {
        id: 'faq-backup-loss',
        category: 'technical',
        question: 'What happens if I lose the flash drive or my computer breaks down?',
        answer:
          'Because your data remains strictly local for privacy, regular backups are essential. Fattura Facile includes a single-click "Create Encrypted Backup" feature that packages your data into a protected archive you can copy to a secondary drive, office NAS, or synced cloud folder.',
      },
      {
        id: 'faq-compliance-it-ch',
        category: 'compliance',
        question: 'How do you handle Italian Electronic Invoicing and Swiss QR-Bills?',
        answer:
          'For Italy, the software generates certified FatturaPA XML files for the Revenue Agency (SDI) with digital signature support and transmission options. For Switzerland, it formats official Swiss QR-Bills compliant with SIX Interbank Clearing specifications and federal VAT rates.',
      },
      {
        id: 'faq-free-model',
        category: 'general',
        question: 'How is the software completely free? Are there hidden costs or invoice caps?',
        answer:
          'There are zero hidden costs, no time-limited trial periods, and no caps on the number of invoices you can create. The project is created and maintained by experienced software professionals with a non-profit open-source mindset to deliver an accessible, ethical tool.',
      },
      {
        id: 'faq-custom-requests',
        category: 'partners',
        question: 'How can I request custom features or modules for my specific trade?',
        answer:
          'You can submit a proposal through our website form, email info@fatturafacile.eu, or discuss it directly in our Telegram group. If the requested feature provides practical value to users, we develop it free of charge and roll it into upcoming official releases.',
      },
      {
        id: 'faq-support-types',
        category: 'partners',
        question: 'What is the difference between community support and accredited local support?',
        answer:
          'Community support (via GitHub and Telegram) is always free and addresses software usage, feature questions, and bug reports. Local support is provided by independent regional professionals (IT consultants, fiduciaries) for hands-on, on-site services like network setup, hardware configuration, and tailored staff training.',
      },
    ],
  },
  sponsor: {
    seo: {
      title: 'Sponsors & Project Support | Fattura Facile',
      description:
        'Support independent development of Fattura Facile. Learn how funds are transparently allocated to code signing and infrastructure.',
      keywords:
        'sponsor fattura facile, open source donation, windows code signing certificate, support free software',
    },
    eyebrow: 'Transparency & Sustainability',
    heading: 'Help us keep the software independent, free, and secure',
    lead: 'Fattura Facile does not sell data or charge subscription fees. Donations and sponsorships directly cover unavoidable technical operational costs to guarantee continuity and safety.',
    transparencyTitle: 'Total Transparency on Operating Costs',
    transparencyText:
      'Every financial contribution collected through GitHub Sponsors or community platforms goes directly to documented technical expenses:',
    costsList: [
      {
        item: 'Code Signing Certificates (Windows Authenticode)',
        description:
          'Required to eliminate untrusted warnings on Windows SmartScreen when users first launch the application executable.',
      },
      {
        item: 'Testing Infrastructure & CI/CD Runners',
        description:
          'Automated build runners and virtual environments for continuous unit testing, SonarQube security checks, and release packaging.',
      },
      {
        item: 'Domain Maintenance & Documentation Resources',
        description:
          'Registration and renewal costs for official domain names (.eu, .ch) and hosting resources for school guides and community wikis.',
      },
    ],
    tiers: {
      individualTitle: 'Individual Supporter',
      individualDesc:
        'A symbolic coffee to support the development hours invested in open-source engineering.',
      corporateTitle: 'Corporate Sponsor',
      corporateDesc:
        'Company logo and backlink featured on our homepage, footer, and the official GitHub repository.',
      technicalTitle: 'Technical Partner',
      technicalDesc:
        'Direct provision of cloud infrastructure, connectivity, digital certificates, or developer software licenses.',
    },
    actions: {
      kofiBtn: 'Support Us on Ko-fi',
      githubSponsorsBtn: 'Become a Sponsor on GitHub',
    },
  },
  storia: {
    seo: {
      title: 'Our Story & Genesis of the Project | Fattura Facile',
      description:
        'The origin of Fattura Facile: from watching tradespeople struggle with complex billing software to creating an independent, no-lock-in platform.',
      keywords:
        'story fattura facile, origin invoicing software, alternative subscription software, ethical software ticino lombardy',
    },
    eyebrow: 'Roots & Vision',
    heading: 'From listening on job sites to the freedom of open software',
    lead: 'Fattura Facile was not conceived in a corporate boardroom to maximize recurring ARR, but by observing the daily struggles of plumbers, electricians, and independent contractors battling bloated, slow, and expensive software.',
    problemTitle: 'The Problem with Monolithic ERPs',
    problemText:
      'In recent years, the business software market forced an aggressive shift toward continuous subscription SaaS models. For enterprise supply chains with extensive warehousing, this overhead may be justifiable; for solo contractors and local service providers, it introduced disproportionate costs, confusing menus filled with unused buttons, and constant anxiety over losing access to records when offline or unsubscribed.',
    philosophyTitle: 'Our Four Architectural Pillars',
    philosophyBullets: [
      {
        title: 'Radical Simplicity',
        desc: 'A straightforward workflow that gets straight to business: customer details, work description, accurate tax calculations, and one-click PDF generation.',
      },
      {
        title: 'Personal Data Sovereignty',
        desc: 'The database is a single file residing in your hands. No behavioral tracking, zero telemetry, and no storage on unverified third-party servers.',
      },
      {
        title: 'Cross-Border Engineering',
        desc: 'Engineered from day one for the Italian-Swiss border region, with full native compliance for Italian SDI FatturaPA and Swiss QR-Bill.',
      },
      {
        title: 'Community Contribution',
        desc: 'Code and executable binaries remain entirely free so that apprentices and new entrepreneurs can launch their businesses without operational software debt.',
      },
    ],
    timeline: [
      {
        year: '2025',
        title: 'First Field Prototypes',
        desc: 'Initial C# prototype utilizing embedded SQLite to address the need for fast, offline, USB-portable billing on construction sites.',
      },
      {
        year: '2026',
        title: 'Full Dual-Market Compliance',
        desc: 'Integration of certified XML generation for Italian FatturaPA (SDI) and official Swiss SIX QR-Bill standards with dedicated VAT rates.',
      },
      {
        year: '2026',
        title: 'Public Open-Source Release & Educational Initiative',
        desc: 'Public launch of the GitHub repository, rollout of academic partnerships with vocational schools, and establishment of the regional partner directory.',
      },
    ],
  },
  privacy: {
    seo: {
      title: 'Privacy Policy & Regulatory Compliance (GDPR & Swiss FADP) | Fattura Facile',
      description:
        'Complete personal data protection disclosure: EU GDPR 2016/679 compliance, Swiss Federal Act on Data Protection (FADP/nLPD), and Privacy by Design with local SQLite.',
      keywords:
        'privacy fattura facile, gdpr invoicing software, swiss fadp billing, sqlite privacy by design, zero telemetry invoicing',
    },
    eyebrow: 'Regulatory Framework & Data Protection',
    headingPart1: 'Privacy Policy &',
    headingPart2: 'Regulatory Compliance',
    subtitle:
      'EU General Data Protection Regulation (GDPR 2016/679) and the revised Swiss Federal Act on Data Protection (FADP / nLPD).',
    calloutTitle: 'Core Engineering Principle:',
    calloutText:
      'In Fattura Facile, accounting data confidentiality is not an afterthought or bureaucratic hurdle, but the foundational engineering pillar upon which the entire software architecture rests.',
    section1Title: '1. Standalone Desktop Architecture (Local SQLite)',
    section1Intro:
      'When using the portable Fattura Facile Desktop application (distributed as a self-contained executable without system installers):',
    section1Bullets: [
      {
        title: 'Zero Outbound Data Transmission',
        desc: 'All customer records, invoices, line amounts, VAT rates, IBAN bank details, and tax IDs reside exclusively inside the local SQLite database file stored in the application folder or USB flash drive.',
      },
      {
        title: 'No Telemetry or Behavioral Tracking',
        desc: 'The software contains zero behavioral trackers, background analytics, or hidden API calls back to Fattura Facile servers.',
      },
      {
        title: 'Full Controller Sovereignty',
        desc: 'The business user acts as the sole and exclusive Data Controller under Art. 4 GDPR. No cross-border data transfers occur and no external Data Processing Agreement (DPA) with Fattura Facile is required.',
      },
    ],
    section2Title: '2. Self-Hosted Cloud Edition (Customer Infrastructure)',
    section2Intro:
      'When deploying the multi-user containerized edition on an on-premise server or Virtual Private Server (VPS):',
    section2Bullets: [
      {
        title: 'Direct Infrastructure Ownership',
        desc: 'Docker containers and relational databases (PostgreSQL or Microsoft SQL Server) run on hardware or cloud accounts directly owned and administered by the customer.',
      },
      {
        title: 'Zero Developer Access',
        desc: 'Fattura Facile maintainers hold no access keys, root credentials, or visibility into customer databases.',
      },
      {
        title: 'Legal & Operational Isolation',
        desc: 'Compliance with technical and organizational security measures (Art. 32 GDPR) and Swiss FADP provisions remains entirely within the customer IT governance perimeter.',
      },
    ],
    section3Title: '3. Data Subject Rights & Statutory Retention',
    section3Intro:
      'In accordance with Articles 15–22 of EU Regulation 2016/679 (GDPR) and Articles 25–29 of the Swiss Federal Act on Data Protection (FADP):',
    section3Bullets: [
      {
        title: 'Right of Access & Data Portability',
        desc: 'Because the database uses the open industry-standard SQLite format, the data controller can inspect, query, or export the entire archive without proprietary decryption tools.',
      },
      {
        title: 'Rectification & Erasure',
        desc: 'Every customer record or draft quote can be modified or permanently deleted directly through the user interface in real time.',
      },
      {
        title: 'Statutory Tax Archiving',
        desc: 'Certified legal retention of XML electronic invoices submitted to the Italian SDI must be carried out through official Italian Revenue Agency portals or accredited preservation providers in compliance with 10-year statutory requirements.',
      },
    ],
    section4Title: '4. Contact & Security Disclosures',
    section4Text:
      'For any questions regarding our security architecture or to propose technical privacy enhancements:',
    contactLabel: 'Email:',
  },
};
