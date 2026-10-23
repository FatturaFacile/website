export type Locale = 'it' | 'en' | 'fr' | 'de';

export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string;
}

export interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

export interface CommonTranslations {
  siteName: string;
  tagline: string;
  nav: {
    product: string;
    whyUs: string;
    featuresModules: string;
    offlineVsCloud: string;
    communitySocial: string;
    requestModulesFree: string;
    contribute: string;
    schoolsSocial: string;
    sponsors: string;
    networkSupport: string;
    localSupport: string;
    faq: string;
    about: string;
    story: string;
    team: string;
    privacy: string;
  };
  actions: {
    downloadDesktop: string;
    exploreCloud: string;
    requestModule: string;
    joinCommunity: string;
    becomePartner: string;
    contactUs: string;
    learnMore: string;
    understood: string;
    filterAll: string;
    backToHome: string;
  };
  footer: {
    description: string;
    emailLabel: string;
    productColTitle: string;
    legalColTitle: string;
    marketsColTitle: string;
    italyMarketDesc: string;
    swissMarketDesc: string;
    copyright: string;
    telegramCommunity: string;
    githubRepo: string;
  };
  privacyModal: {
    title: string;
    subtitle: string;
    calloutTitle: string;
    calloutDesc: string;
    section1Title: string;
    section1Text: string;
    section1Bullets: string[];
    section2Title: string;
    section2Text: string;
    section2Bullets: string[];
    section3Title: string;
    section3Text: string;
    closeBtn: string;
  };
}

export interface HomeTranslations {
  seo: SeoMetadata;
  hero: {
    badgeGeo: string;
    badgePrivacy: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    badges: {
      zeroSubTitle: string;
      zeroSubDesc: string;
      portableTitle: string;
      portableDesc: string;
      offlineTitle: string;
      offlineDesc: string;
      dataOwnershipTitle: string;
      dataOwnershipDesc: string;
    };
  };
  quickSummary: {
    eyebrow: string;
    heading: string;
    lead: string;
  };
}

export interface PercheTranslations {
  seo: SeoMetadata;
  eyebrow: string;
  heading: string;
  lead: string;
  pillars: {
    title: string;
    description: string;
  }[];
  antiErpHeading: string;
  antiErpText: string;
  quoteToInvoiceHeading: string;
  quoteToInvoiceText: string;
}

export interface VersioniTranslations {
  seo: SeoMetadata;
  eyebrow: string;
  heading: string;
  lead: string;
  desktopCard: {
    tag: string;
    badge: string;
    title: string;
    subtitle: string;
    features: string[];
    limitation: string;
    cta: string;
  };
  cloudCard: {
    tag: string;
    badge: string;
    title: string;
    subtitle: string;
    features: string[];
    migrationNote: string;
    cta: string;
  };
  comparisonTable: {
    title: string;
    headers: [string, string, string];
    rows: {
      feature: string;
      desktop: string;
      cloud: string;
    }[];
  };
}

export interface ModuliTranslations {
  seo: SeoMetadata;
  eyebrow: string;
  heading: string;
  lead: string;
  availableSectionTitle: string;
  roadmapSectionTitle: string;
  roadmapStages: {
    inDevelopment: string;
    planned: string;
    backlog: string;
  };
  requestForm: {
    badge: string;
    title: string;
    description: string;
    nameLabel: string;
    emailLabel: string;
    marketLabel: string;
    tradeLabel: string;
    detailsLabel: string;
    submitBtn: string;
    disclaimer: string;
  };
}

export interface TeamTranslations {
  seo: SeoMetadata;
  eyebrow: string;
  heading: string;
  lead: string;
  regions: {
    switzerland: string;
    italy: string;
  };
  coreMaintainerBadge: string;
  joinCta: {
    title: string;
    description: string;
    githubBtn: string;
    telegramBtn: string;
  };
}

export interface ScuoleSocialeTranslations {
  seo: SeoMetadata;
  hero: {
    badge: string;
    heading: string;
    lead: string;
    ctaApply: string;
    ctaGithub: string;
  };
  technicalTrack: {
    badge: string;
    title: string;
    lead: string;
    bullets: {
      title: string;
      desc: string;
    }[];
  };
  commercialTrack: {
    badge: string;
    title: string;
    lead: string;
    bullets: {
      title: string;
      desc: string;
    }[];
  };
  socialMission: {
    badge: string;
    title: string;
    description: string;
    points: string[];
  };
  teacherContact: {
    title: string;
    lead: string;
    btnLabel: string;
  };
}

export interface SupportoLocaleTranslations {
  seo: SeoMetadata;
  eyebrow: string;
  heading: string;
  lead: string;
  regions: {
    switzerland: string;
    italy: string;
  };
  partnerForm: {
    badge: string;
    title: string;
    lead: string;
    companyLabel: string;
    contactLabel: string;
    emailLabel: string;
    phoneLabel: string;
    countryLabel: string;
    regionLabel: string;
    servicesLabel: string;
    notesLabel: string;
    submitBtn: string;
  };
}

export interface FaqTranslations {
  seo: SeoMetadata;
  eyebrow: string;
  heading: string;
  lead: string;
  searchPlaceholder: string;
  categories: {
    general: string;
    technical: string;
    compliance: string;
    partners: string;
  };
  items: {
    id: string;
    category: string;
    question: string;
    answer: string;
  }[];
}

export interface SponsorTranslations {
  seo: SeoMetadata;
  eyebrow: string;
  heading: string;
  lead: string;
  transparencyTitle: string;
  transparencyText: string;
  costsList: {
    item: string;
    description: string;
  }[];
  tiers: {
    individualTitle: string;
    individualDesc: string;
    corporateTitle: string;
    corporateDesc: string;
    technicalTitle: string;
    technicalDesc: string;
  };
  actions: {
    kofiBtn: string;
    githubSponsorsBtn: string;
  };
}

export interface StoriaTranslations {
  seo: SeoMetadata;
  eyebrow: string;
  heading: string;
  lead: string;
  problemTitle: string;
  problemText: string;
  philosophyTitle: string;
  philosophyBullets: {
    title: string;
    desc: string;
  }[];
  timeline: {
    year: string;
    title: string;
    desc: string;
  }[];
}

export interface PrivacyTranslations {
  seo: SeoMetadata;
  eyebrow: string;
  headingPart1: string;
  headingPart2: string;
  subtitle: string;
  calloutTitle: string;
  calloutText: string;
  section1Title: string;
  section1Intro: string;
  section1Bullets: {
    title: string;
    desc: string;
  }[];
  section2Title: string;
  section2Intro: string;
  section2Bullets: {
    title: string;
    desc: string;
  }[];
  section3Title: string;
  section3Intro: string;
  section3Bullets: {
    title: string;
    desc: string;
  }[];
  section4Title: string;
  section4Text: string;
  contactLabel: string;
}

export interface SiteTranslations {
  common: CommonTranslations;
  home: HomeTranslations;
  perche: PercheTranslations;
  versioni: VersioniTranslations;
  moduli: ModuliTranslations;
  team: TeamTranslations;
  scuoleSociale: ScuoleSocialeTranslations;
  supportoLocale: SupportoLocaleTranslations;
  faq: FaqTranslations;
  sponsor: SponsorTranslations;
  storia: StoriaTranslations;
  privacy: PrivacyTranslations;
}
