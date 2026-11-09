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
    tryDemo: string;
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

export interface TitleDesc {
  title: string;
  desc: string;
}

export type TeamDomainKey =
  | 'core_architecture'
  | 'cloud_devops'
  | 'swiss_compliance'
  | 'italian_compliance'
  | 'web_frontend'
  | 'docs_translation'
  | 'community_advocacy';

export type SchoolTypeKey = 'Technical' | 'Commercial' | 'Vocational' | 'University';

export type SchoolProgramKey =
  'real_codebase_lab' | 'enterprise_simulation' | 'internship_pcto' | 'thesis_project';

export type SchoolIdKey = 'ch-cpt' | 'ch-sam' | 'ch-supsi' | 'ch-usi';

export type ServiceKey =
  | 'on_site_setup'
  | 'network_cloud_setup'
  | 'backup_strategy'
  | 'staff_training'
  | 'tax_accounting_sync'
  | 'custom_integration';

export type ModuleStatusKey = 'available' | 'in_development' | 'planned' | 'community_backlog';

export type ModuleIdKey =
  | 'mod-core-invoicing'
  | 'mod-sdi-fatturapa'
  | 'mod-six-qrbill'
  | 'mod-encrypted-backup'
  | 'mod-payments-schedule'
  | 'mod-stock-simplified'
  | 'mod-advanced-address-book'
  | 'mod-cash-register';

export interface CommunityRequestsTranslations {
  seo: SeoMetadata;
  hero: {
    badge: string;
    title: string;
    descPre: string;
    descPost: string;
    descStrong: string;
    descEnd: string;
  };
  steps: { badge: string; title: string; items: TitleDesc[] };
  roles: {
    badge: string;
    title: string;
    lead: string;
    items: Array<{ title: string; badge: string; desc: string; action: string }>;
  };
  team: {
    badge: string;
    title: string;
    lead: string;
    items: Array<{ label: string; text: string }>;
  };
  join: {
    title: string;
    lead: string;
    emailBtn: string;
    emailBtnTitle: string;
    telegramBtn: string;
    telegramTitle: string;
    githubBtn: string;
    hint: string;
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
    ctaCommunity: string;
  };
  pillars: TitleDesc[];
  philosophy: {
    badge: string;
    heading: string;
    lead: string;
    features: TitleDesc[];
    more: string;
  };
  platforms: {
    badge: string;
    heading: string;
    lead: string;
    available: string;
    inDevelopment: string;
    items: Array<{ name: string; stack: string; desc: string }>;
    compareCta: string;
    modulesCta: string;
  };
  comingSoon: {
    badge: string;
    heading: string;
    lead: string;
    items: TitleDesc[];
    cta: string;
  };
  territory: {
    local: { badge: string; title: string; desc: string; cta: string };
    schools: { badge: string; title: string; desc: string; cta: string };
  };
  demoCta: {
    badge: string;
    title: string;
    lead: string;
    primary: string;
    secondary: string;
    notes: string[];
  };
}

export interface ContributeTranslations {
  seo: SeoMetadata;
  eyebrow: string;
  heading: string;
  lead: string;
  ctaTelegram: string;
  ctaIssues: string;
  ways: { badge: string; title: string; items: TitleDesc[] };
  flow: { badge: string; title: string; lead: string; steps: TitleDesc[] };
  repos: { badge: string; title: string; items: Array<{ desc: string }> };
  resources: {
    title: string;
    guide: string;
    codeOfConduct: string;
    security: string;
    roadmap: string;
  };
}

export interface PercheTranslations {
  seo: SeoMetadata;
  eyebrow: string;
  headingPre: string;
  headingHighlight: string;
  lead: string;
  points: TitleDesc[];
  story: {
    badge: string;
    title: string;
    p1Pre: string;
    p1Post: string;
    askPre: string;
    quote: string;
    p3: string;
  };
  team: {
    title: string;
    lead: string;
    joinBtn: string;
    githubBtn: string;
  };
  cta: {
    title: string;
    lead: string;
    features: string;
  };
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
    headers: string[];
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
  pillars: TitleDesc[];
  status: Record<ModuleStatusKey, string>;
  markets: Record<'ALL' | 'IT' | 'CH', string>;
  milestoneTbd: string;
  modules: Record<ModuleIdKey, { title: string; description: string; features: string[] }>;
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
  emptyRegion: {
    text: string;
    cta: string;
  };
  domains: Record<TeamDomainKey, string>;
}

export interface ScuoleSocialeTranslations {
  seo: SeoMetadata;
  schema: {
    orgDescription: string;
    offerDescription: string;
    technicalName: string;
    technicalDescription: string;
    commercialName: string;
    commercialDescription: string;
  };
  hero: {
    badge: string;
    headingPre: string;
    headingHighlight: string;
    lead: string;
    ctaApply: string;
    ctaGithub: string;
  };
  tracks: {
    badge: string;
    title: string;
    lead: string;
    items: Array<{
      badge: string;
      schools: string;
      title: string;
      description: string;
      linkText: string;
      items: Array<{ title: string; body: string }>;
    }>;
  };
  schools: {
    badge: string;
    title: string;
    lead: string;
    filterAll: string;
    filterCH: string;
    filterIT: string;
    programsLabel: string;
    website: string;
    types: Record<SchoolTypeKey, string>;
    programs: Record<SchoolProgramKey, { label: string; summary: string }>;
    items: Record<SchoolIdKey, { department: string; description: string }>;
  };
  mission: {
    badge: string;
    title: string;
    lead: string;
    pillars: Array<{ title: string; body: string }>;
  };
  contact: {
    badge: string;
    title: string;
    lead: string;
    emailBtn: string;
    telegramBtn: string;
    note: string;
    mailtoBody: string[];
    mailtoFooter: string;
  };
}

export interface SupportoLocaleTranslations {
  seo: SeoMetadata;
  hero: {
    badge: string;
    headingPre: string;
    headingHighlight: string;
    lead: string;
  };
  directory: {
    filterLabel: string;
    all: string;
    ch: string;
    it: string;
    verified: string;
    emptyTitle: string;
    emptyText: string;
    emptyCta: string;
    contactPerson: string;
    verifiedTitle: string;
    servicesLabel: string;
    website: string;
  };
  services: Record<ServiceKey, string>;
  roles: {
    itConsultant: string;
    systemIntegrator: string;
    fiduciaria: string;
    softwareHouse: string;
  };
  form: {
    badge: string;
    title: string;
    lead: string;
    companyLabel: string;
    companyPlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    countryLabel: string;
    countryPlaceholder: string;
    switzerland: string;
    italy: string;
    regionLabel: string;
    regionPlaceholder: string;
    roleLabel: string;
    servicesLabel: string;
    notesLabel: string;
    notesPlaceholder: string;
    note: string;
    submit: string;
    sending: string;
    validation: string;
    success: string;
    errorGeneric: string;
    errorConnection: string;
  };
}

export interface FaqTranslations {
  seo: SeoMetadata;
  eyebrow: string;
  heading: string;
  lead: string;
  searchPlaceholder: string;
  noResults: {
    text: string;
    link: string;
  };
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
  hero: {
    badge: string;
    headingPre: string;
    headingHighlight: string;
    lead: string;
  };
  costs: {
    title: string;
    lead: string;
    items: Array<TitleDesc & { priority: string }>;
  };
  tiers: {
    title: string;
    lead: string;
    recommended: string;
    items: Array<{
      audience: string;
      name: string;
      price: string;
      priceNote: string;
      desc: string;
      perks: string[];
      cta: string;
    }>;
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

export interface CommunityTranslations {
  seo: SeoMetadata;
  eyebrow: string;
  heading: string;
  lead: string;
  educationSection: {
    badge: string;
    title: string;
    lead: string;
    institutionsBadge: string;
    regionTag: string;
    institutionFooter: string;

    institutions: {
      name: string;
      role: string;
      desc: string;
    }[];
  };
  participationSection: {
    badge: string;
    title: string;
    lead: string;
    profiles: {
      title: string;
      badge: string;
      desc: string;
      action: string;
    }[];
  };
  transparencySection: {
    badge: string;
    title: string;
    lead: string;
    points: {
      title: string;
      desc: string;
    }[];
  };
  actions: {
    githubBtn: string;
    telegramBtn: string;
    requestBtn: string;
  };
}

export interface SiteTranslations {
  common: CommonTranslations;
  home: HomeTranslations;
  perche: PercheTranslations;
  versioni: VersioniTranslations;
  moduli: ModuliTranslations;
  community: CommunityTranslations;
  communityRequests: CommunityRequestsTranslations;
  contribute: ContributeTranslations;
  team: TeamTranslations;
  scuoleSociale: ScuoleSocialeTranslations;
  supportoLocale: SupportoLocaleTranslations;
  faq: FaqTranslations;
  sponsor: SponsorTranslations;
  storia: StoriaTranslations;
  privacy: PrivacyTranslations;
}
