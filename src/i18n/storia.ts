import type { Locale, SeoMetadata, StoriaTranslations } from './types';

export interface StoriaArchitecturePillar {
  id: 'sqlite' | 'dual_market' | 'clean_arch';
  tag: string;
  title: string;
  desc: string;
  highlights: string[];
}

export interface StoriaEthicalCard {
  id: 'free_forever' | 'community_modules' | 'schools_social';
  badge: string;
  title: string;
  desc: string;
  linkHref: string;
  linkLabel: string;
}

export interface StoriaMilestone {
  year: string;
  phase: string;
  title: string;
  desc: string;
  badge: string;
}

export interface DetailedStoriaTranslations extends StoriaTranslations {
  seo: SeoMetadata;
  hero: {
    eyebrow: string;
    headingPart1: string;
    headingHighlight: string;
    lead: string;
    badgeDualMarket: string;
    badgeOpenSource: string;
    ctaModules: string;
    ctaCommunity: string;
    ctaDownload: string;
  };
  origin: {
    badge: string;
    heading: string;
    lead: string;
    problemTitle: string;
    problemText: string;
    antiSaasTitle: string;
    antiSaasText: string;
    quote: {
      text: string;
      author: string;
      role: string;
    };
    comparison: {
      erpTitle: string;
      erpPoints: string[];
      ffTitle: string;
      ffPoints: string[];
    };
  };
  architecture: {
    badge: string;
    heading: string;
    lead: string;
    pillars: StoriaArchitecturePillar[];
  };
  ethics: {
    badge: string;
    heading: string;
    lead: string;
    cards: StoriaEthicalCard[];
  };
  chronicle: {
    badge: string;
    heading: string;
    lead: string;
    milestones: StoriaMilestone[];
  };
  ctaBanner: {
    heading: string;
    subtitle: string;
    btnModules: string;
    btnCommunity: string;
    btnDownload: string;
  };
}

export const STORIA_ALTERNATES: Record<Locale | 'x-default', string> = {
  it: 'https://fatturafacile.eu/storia/',
  en: 'https://fatturafacile.eu/en/storia/',
  fr: 'https://fatturafacile.eu/fr/storia/',
  de: 'https://fatturafacile.eu/de/storia/',
  'x-default': 'https://fatturafacile.eu/storia/',
};

export const STORIA_OG_LOCALES: Record<Locale, string> = {
  it: 'it_IT',
  en: 'en_US',
  fr: 'fr_CH',
  de: 'de_CH',
};

export const STORIA_TRANSLATIONS: Record<Locale, DetailedStoriaTranslations> = {
  it: {
    seo: {
      title: 'La Nostra Storia & Visione Architetturale | Fattura Facile',
      description:
        'Scopri come è nato Fattura Facile: dalla frustrazione verso gli ERP complessi e gli abbonamenti SaaS a un software di fatturazione libero, offline con SQLite per Italia e Svizzera.',
      keywords:
        'storia fattura facile, filosofia anti-erp, software fatturazione open source, sqlite locale, fatturapa sdi, qr-bill svizzera, clean architecture dotnet',
    },
    eyebrow: 'Le Nostre Radici & Visione',
    heading: 'Dalla frustrazione sul cantiere al software libero per tutti',
    lead: 'Fattura Facile nasce tra la Lombardia e il Canton Ticino con una missione chiara: restituire ad artigiani, micro-imprese e professionisti uno strumento di fatturazione veloce, gratuito e realmente di loro proprietà.',
    problemTitle: 'Il Problema: Perché un artigiano dovrebbe usare un ERP da 500 bottoni?',
    problemText:
      'Idraulici, elettricisti, serramentisti, posatori e liberi professionisti emettono in media dalle 10 alle 20 fatture al mese. Eppure il mercato offre loro quasi solo gestionali pensati per grandi aziende manifatturiere: lenti, pieni di menu contabili indecifrabili e vincolati a canoni mensili perpetui.',
    philosophyTitle: 'I Tre Pilastri della Nostra Architettura',
    philosophyBullets: [
      {
        title: 'SQLite Locale & Zero Telemetria',
        desc: 'Sovranità assoluta sui dati: nessun server intermedio, nessun tracciamento, pieno controllo fisico dei propri archivi fiscali.',
      },
      {
        title: 'Fondazione Dual-Market (IT & CH)',
        desc: 'Progettato fin dal primo giorno per gestire nativamente sia il tracciato XML FatturaPA SDI italiano sia la QR-Bill standard SIX svizzera.',
      },
      {
        title: 'Clean Architecture & C# .NET',
        desc: 'Ingegneria del software rigorosa (SOLID, CQRS, MVVM nativo) invece di fragili wrapper web lenti ad avviarsi.',
      },
    ],
    timeline: [
      {
        year: 'Fase 1 • Genesi',
        title: 'L’Ascolto sul Campo tra Italia e Ticino',
        desc: 'Raccogliamo lo sfogo di artigiani e piccoli professionisti stanchi di pagare abbonamenti annuali per emettere poche decine di fatture e di restare bloccati nei cantieri senza internet.',
      },
      {
        year: 'Fase 2 • Prototipo',
        title: 'Il Primo Motore Portabile C# WPF & SQLite su USB',
        desc: 'Nasce il primo eseguibile standalone su chiavetta USB: avvio in meno di un secondo, zero scrittura nel registro di Windows e database SQLite autocontenuto.',
      },
      {
        year: 'Fase 3 • Dual-Market',
        title: 'Integrazione Nativa FatturaPA SDI & Swiss QR-Bill SIX',
        desc: 'Implementazione dei validatori ufficiali per l’Agenzia delle Entrate italiana (XML v1.2, regimi forfettario/ordinario) e per gli standard bancari elvetici SIX (QR-IBAN, aliquote IVA federali).',
      },
      {
        year: 'Fase 4 • Ecosistema Aperto',
        title: 'Lancio Open-Source, Scuole & Rete Partner Locale',
        desc: 'Apertura totale del codice sorgente, avvio del modello di sviluppo gratuito dei moduli su richiesta e creazione dei programmi didattici per istituti tecnici e commerciali.',
      },
    ],
    hero: {
      eyebrow: 'La Nostra Storia & Manifesto',
      headingPart1: 'Dalla frustrazione sul cantiere al',
      headingHighlight: 'software libero per tutti.',
      lead: 'Fattura Facile nasce tra la Lombardia e il Canton Ticino con una missione chiara: liberare artigiani, micro-imprese e professionisti da gestionali sovradimensionati e abbonamenti SaaS perpetui.',
      badgeDualMarket: 'Nato tra Italia 🇮🇹 e Svizzera 🇨🇭',
      badgeOpenSource: '100% Gratuito, Offline & Open Source',
      ctaModules: 'Esplora i Moduli',
      ctaCommunity: 'Unisciti alla Community',
      ctaDownload: 'Scarica Gratis',
    },
    origin: {
      badge: '1. La Genesi & Il Problema',
      heading: 'Perché chi emette 15 fatture al mese deve pagare un ERP da 500 bottoni?',
      lead: 'Tutto è iniziato davanti a un banco da lavoro, osservando colleghi e amici artigiani lottare la sera tardi con portali web lenti e complicati solo per incassare il proprio lavoro.',
      problemTitle: 'La Frustrazione verso gli ERP Elefantiaci',
      problemText:
        'Un elettricista, un idraulico, un giardiniere o un consulente indipendente non ha bisogno di gestire una catena logistica multinazionale o la contabilità analitica a partita doppia. Ha bisogno di creare un preventivo chiaro in 60 secondi mentre è ancora dal cliente e trasformarlo in una fattura conforme in un solo click.',
      antiSaasTitle: 'Filosofia Anti-SaaS: I Tuoi Dati Non Devono Essere in Ostaggio',
      antiSaasText:
        'Negli ultimi anni il software per piccole attività si è trasformato in un affitto infinito: se smetti di pagare il canone mensile o annuale, perdi la possibilità di operare o persino di consultare comodamente il tuo storico clienti. Noi crediamo che lo strumento di lavoro e i dati contabili debbano appartenere al 100% a chi lavora, senza scadenze e senza ricatti.',
      quote: {
        text: '“Un software per artigiani dovrebbe comportarsi come un buon cacciavite nella cassetta degli attrezzi: è lì quando ti serve, non chiede un abbonamento ogni mese per girare una vite e funziona anche in un seminterrato senza segnale.”',
        author: 'Team Fondatore Fattura Facile',
        role: 'Manifesto Architetturale Italo-Svizzero',
      },
      comparison: {
        erpTitle: 'Gestionali SaaS / ERP Tradizionali',
        erpPoints: [
          'Canoni mensili o annuali obbligatori che aumentano ad ogni rinnovo',
          'Interfacce affollate da centinaia di pulsanti inutili per le micro-imprese',
          'Dipendenza totale da internet e caricamenti lenti in cantiere',
          'Archivi clienti e fatture custoditi su server di terze parti',
        ],
        ffTitle: 'Il Modello Fattura Facile',
        ffPoints: [
          '0 € per sempre sulla versione Desktop, senza limiti di documenti',
          'Interfaccia essenziale: preventivo in 1 minuto, fattura in 1 click',
          '100% Offline su PC o chiavetta USB con avvio istantaneo (< 1 secondo)',
          'Database SQLite locale di tua esclusiva proprietà fisica e legale',
        ],
      },
    },
    architecture: {
      badge: '2. Filosofia Architetturale',
      heading: 'Ingegneria Solida al Servizio della Semplicità',
      lead: 'Sotto un’interfaccia volutamente minimale batte un cuore tecnologico progettato secondo i più alti standard di sicurezza, velocità e manutenibilità.',
      pillars: [
        {
          id: 'sqlite',
          tag: 'Privacy by Design',
          title: 'SQLite Locale & Zero Telemetria',
          desc: 'Nessun dato fiscale, IBAN o anagrafica cliente lascia mai il tuo computer. L’imprenditore resta l’unico Titolare del Trattamento (Data Controller) ai sensi del GDPR UE e della nLPD svizzera, azzerando il rischio di data breach esterni.',
          highlights: [
            'Singolo file database SQLite transazionale ACID',
            'Zero chiamate di telemetria o tracker pubblicitari',
            'Backup crittografati ZIP in 1 click su USB o NAS',
          ],
        },
        {
          id: 'dual_market',
          tag: 'Nativo Transfrontaliero',
          title: 'Fondazione Dual-Market: Italia & Svizzera',
          desc: 'A differenza dei software adattati in seguito con traduzioni approssimative, Fattura Facile è stato ingegnerizzato fin dal primo giorno per soddisfare i requisiti normativi di entrambi i lati del confine italo-svizzero.',
          highlights: [
            'Italia 🇮🇹: Generatore XML FatturaPA v1.2 certificato per SDI, PEC e bollo virtuale',
            'Svizzera 🇨🇭: Polizze QR-Bill standard SIX con croce elvetica, QR-IBAN e IVA federale (8.1%, 2.6%, 3.8%)',
            'Supporto multivaluta nativo EUR e CHF',
          ],
        },
        {
          id: 'clean_arch',
          tag: 'Qualità del Codice',
          title: 'Clean Architecture & C# .NET Nativo',
          desc: 'Abbiamo rifiutato i pesanti wrapper web che consumano gigabyte di RAM. Fattura Facile è scritto in C# .NET con pattern CQRS e principi SOLID, garantendo reattività immediata anche su portatili d’officina meno recenti.',
          highlights: [
            'Separazione rigorosa Domain, Application, Infrastructure e UI',
            'Qualità verificata con pipeline CI/CD SonarQube e Qodana',
            'Opzione multi-utente Docker Self-Hosted per chi cresce in team',
          ],
        },
      ],
    },
    ethics: {
      badge: '3. Etica Open-Source & Impatto Sociale',
      heading: 'Un Bene Comune per Artigiani, Studenti e Territorio',
      lead: 'Fattura Facile non è una startup a caccia di venture capital, ma un progetto civico e tecnologico costruito insieme a chi lavora e insegna.',
      cards: [
        {
          id: 'free_forever',
          badge: 'Impegno Perpetuo',
          title: 'Core Desktop 100% Gratuito per Sempre',
          desc: 'La versione desktop portabile non diventerà mai a pagamento e non introdurrà mai blocchi artificiali sul numero di fatture o clienti. Chi inizia un mestiere non deve avere barriere d’ingresso.',
          linkHref: '/versioni/',
          linkLabel: 'Scopri le Versioni →',
        },
        {
          id: 'community_modules',
          badge: 'Sviluppo Condiviso',
          title: 'Moduli su Richiesta a Costo Zero (0 €)',
          desc: 'Quando un artigiano ci segnala un’esigenza reale per il suo mestiere, il nostro team sviluppa il modulo gratuitamente e lo rilascia pubblicamente a beneficio di tutta la categoria.',
          linkHref: '/community-richieste/',
          linkLabel: 'Richiedi un Modulo Gratis →',
        },
        {
          id: 'schools_social',
          badge: 'Futuro & Formazione',
          title: 'Responsabilità verso Scuole e Apprendisti',
          desc: 'Offriamo il nostro codice sorgente agli istituti tecnici informatici per studiare un’architettura reale e forniamo il gestionale agli istituti commerciali per simulazioni contabili senza costi di licenza.',
          linkHref: '/scuole-e-sociale/',
          linkLabel: 'Programma Scuole & Sociale →',
        },
      ],
    },
    chronicle: {
      badge: '4. Cronistoria & Tappe',
      heading: 'Il Nostro Percorso Evolutivo',
      lead: 'Dalla prima riga di codice scritta per aiutare gli artigiani locali fino alla creazione di un ecosistema aperto tra Italia e Svizzera.',
      milestones: [
        {
          year: 'Tappa 01',
          phase: 'L’Idea Originaria',
          title: 'L’Ascolto sul Campo tra Lombardia e Ticino',
          desc: 'Nasce l’idea osservando idraulici, elettricisti e piccoli professionisti penalizzati da software in abbonamento troppo complessi e inutilizzabili offline nei cantieri.',
          badge: 'Visione Anti-ERP',
        },
        {
          year: 'Tappa 02',
          phase: 'Il Primo Prototipo',
          title: 'Motore Portabile C# WPF & SQLite su Chiavetta USB',
          desc: 'Sviluppo del nucleo standalone senza installazione: un unico archivio eseguibile con database SQLite integrato, capace di avviarsi in una frazione di secondo su qualsiasi PC Windows.',
          badge: '100% Offline & USB',
        },
        {
          year: 'Tappa 03',
          phase: 'Conformità Bivalente',
          title: 'Integrazione FatturaPA SDI (IT) & QR-Bill SIX (CH)',
          desc: 'Costruzione dei moduli fiscali certificati per il Sistema di Interscambio dell’Agenzia delle Entrate italiana e per lo standard bancario svizzero QR-Fattura con calcolo IVA multi-aliquota.',
          badge: 'Dual-Market IT/CH',
        },
        {
          year: 'Tappa 04',
          phase: 'Comunità & Istruzione',
          title: 'Apertura Open-Source, Scuole & Partner Territoriali',
          desc: 'Pubblicazione del progetto aperto, lancio dei laboratori didattici per gli istituti tecnici/commerciali e nascita della rete di tecnici e fiduciarie locali per il supporto sul posto.',
          badge: 'Ecosistema Aperto',
        },
      ],
    },
    ctaBanner: {
      heading: 'Fai parte anche tu della storia di Fattura Facile',
      subtitle:
        'Scarica il software gratuito, esplora i moduli disponibili o proponi la prossima funzionalità per il tuo settore.',
      btnModules: 'Esplora i Moduli',
      btnCommunity: 'Unisciti alla Community',
      btnDownload: 'Scarica Gratis',
    },
  },

  en: {
    seo: {
      title: 'Our Story & Architectural Vision | Fattura Facile',
      description:
        'Discover the story behind Fattura Facile: born from frustration with bloated ERPs and recurring SaaS fees to deliver free, offline SQLite invoicing for Italy and Switzerland.',
      keywords:
        'fattura facile story, anti-erp philosophy, open source invoicing software, local sqlite billing, italian fatturapa sdi, swiss qr-bill six, clean architecture dotnet',
    },
    eyebrow: 'Our Roots & Vision',
    heading: 'From job-site frustration to free software for everyone',
    lead: 'Born across Northern Italy and Swiss Canton Ticino, Fattura Facile has a single mission: giving tradespeople, micro-businesses, and freelancers a fast, free invoicing tool they truly own.',
    problemTitle: 'The Problem: Why should a tradesperson use a 500-button enterprise ERP?',
    problemText:
      'Plumbers, electricians, installers, and solo freelancers typically issue 10 to 20 invoices a month. Yet the software market pushes bloated enterprise ERPs designed for large corporations—slow, cluttered with obscure accounting menus, and locked behind perpetual monthly subscriptions.',
    philosophyTitle: 'The Three Pillars of Our Architecture',
    philosophyBullets: [
      {
        title: 'Local SQLite & Zero Telemetry',
        desc: 'Absolute data sovereignty: no intermediary servers, zero tracking, and full physical control over your financial records.',
      },
      {
        title: 'Dual-Market Foundation (IT & CH)',
        desc: 'Engineered from day one to natively handle both Italian FatturaPA SDI XML e-invoicing and Swiss SIX standard QR-Bills.',
      },
      {
        title: 'Clean Architecture & C# .NET',
        desc: 'Built with rigorous software engineering standards (SOLID, CQRS, native WPF) rather than fragile, memory-hungry web wrappers.',
      },
    ],
    timeline: [
      {
        year: 'Phase 1 • Genesis',
        title: 'Listening to Tradespeople in Italy & Switzerland',
        desc: 'Hearing first-hand from electricians, plumbers, and freelancers tired of paying recurring fees just to issue a dozen invoices—and getting stuck on job sites with no internet.',
      },
      {
        year: 'Phase 2 • Prototype',
        title: 'First Portable C# WPF & SQLite Engine on USB',
        desc: 'Creation of the first zero-install standalone executable on a USB flash drive: sub-second startup, zero Windows registry clutter, and a self-contained SQLite database.',
      },
      {
        year: 'Phase 3 • Dual-Market',
        title: 'Native Italian SDI & Swiss QR-Bill Integration',
        desc: 'Implementation of compliant XML FatturaPA generators for the Italian Revenue Agency and vector SIX QR-Bill payment slips with federal VAT rates for Switzerland.',
      },
      {
        year: 'Phase 4 • Open Ecosystem',
        title: 'Open-Source Launch, Schools & Regional Partners',
        desc: 'Opening the codebase to the public, launching the zero-cost community module workflow, and establishing partnerships with technical and commercial schools.',
      },
    ],
    hero: {
      eyebrow: 'Our Story & Manifesto',
      headingPart1: 'From job-site frustration to',
      headingHighlight: 'free software for everyone.',
      lead: 'Fattura Facile was born between Lombardy and Swiss Canton Ticino with a clear purpose: freeing tradespeople, micro-businesses, and solo professionals from bloated ERPs and unending SaaS subscriptions.',
      badgeDualMarket: 'Born across Italy 🇮🇹 & Switzerland 🇨🇭',
      badgeOpenSource: '100% Free, Offline & Open Source',
      ctaModules: 'Explore Modules',
      ctaCommunity: 'Join the Community',
      ctaDownload: 'Download Free',
    },
    origin: {
      badge: '1. The Origin & Problem Statement',
      heading: 'Why should someone issuing 15 invoices a month pay for a 500-button ERP?',
      lead: 'It all started at a workbench, watching fellow tradespeople and small business owners struggle late at night with sluggish, over-complicated web portals just to get paid for their craft.',
      problemTitle: 'The Frustration with Over-Engineered Enterprise Software',
      problemText:
        'An electrician, plumber, carpenter, or independent consultant does not need to manage a multinational supply chain or complex double-entry corporate ledgers. They need to draft a clean quote in 60 seconds while still on-site with the client and convert it into a legally compliant invoice in a single click.',
      antiSaasTitle: 'The Anti-SaaS Philosophy: Your Data Shouldn’t Be Held Hostage',
      antiSaasText:
        'In recent years, small-business software has turned into a permanent rental trap: stop paying the monthly fee, and you lose the ability to operate or even access your own customer history. We believe your tools and financial records must belong 100% to you—with no expiration dates and no vendor lock-in.',
      quote: {
        text: '“Invoicing software for tradespeople should work like a reliable screwdriver in your toolbox: ready the instant you need it, never asking for a monthly subscription to turn a screw, and working flawlessly in a basement with zero cell reception.”',
        author: 'Fattura Facile Founding Team',
        role: 'Italian-Swiss Architectural Manifesto',
      },
      comparison: {
        erpTitle: 'Traditional SaaS / Enterprise ERPs',
        erpPoints: [
          'Mandatory monthly or annual subscriptions that increase every renewal cycle',
          'Cluttered dashboards with hundreds of buttons micro-businesses never touch',
          'Complete dependence on internet connectivity and slow cloud page loads',
          'Customer lists and sensitive billing data stored on third-party servers',
        ],
        ffTitle: 'The Fattura Facile Approach',
        ffPoints: [
          '€0 forever for the Desktop edition, with unlimited invoices and clients',
          'Streamlined workflow: 1-minute on-site quote, 1-click invoice conversion',
          '100% Offline on PC or USB drive with instant startup (< 1 second)',
          'Local SQLite database under your exclusive physical and legal ownership',
        ],
      },
    },
    architecture: {
      badge: '2. Core Architectural Philosophy',
      heading: 'Rock-Solid Engineering Serving Everyday Simplicity',
      lead: 'Beneath a deliberately minimalist interface lies a software architecture built to the highest standards of data sovereignty, speed, and reliability.',
      pillars: [
        {
          id: 'sqlite',
          tag: 'Privacy by Design',
          title: 'Local SQLite & Zero Telemetry',
          desc: 'No tax ID, IBAN, or customer record ever leaves your machine. The business owner remains the sole Data Controller under EU GDPR and Swiss FADP (nLPD), eliminating third-party data breach risks.',
          highlights: [
            'Single-file ACID transactional SQLite database',
            'Zero telemetry calls, analytics, or background tracking',
            '1-Click AES encrypted ZIP backups to USB or local NAS',
          ],
        },
        {
          id: 'dual_market',
          tag: 'Cross-Border Native',
          title: 'Dual-Market Foundation: Italy & Switzerland',
          desc: 'Unlike generic billing tools retrofitted with rough translations, Fattura Facile was engineered from day one to comply natively with the strict tax standards on both sides of the Italian-Swiss border.',
          highlights: [
            'Italy 🇮🇹: Certified FatturaPA v1.2 XML for SDI, PEC/Recipient Code, and virtual duty stamp',
            'Switzerland 🇨🇭: Official SIX standard QR-Bill slips with Swiss cross, QR-IBAN, and federal VAT rates',
            'Native multi-currency support for EUR and CHF',
          ],
        },
        {
          id: 'clean_arch',
          tag: 'Engineering Excellence',
          title: 'Clean Architecture & Native C# .NET',
          desc: 'We rejected bloated web wrappers that consume gigabytes of RAM. Fattura Facile is crafted in native C# .NET using CQRS and SOLID principles, delivering instant responsiveness even on older workshop laptops.',
          highlights: [
            'Strict separation across Domain, Application, Infrastructure, and UI layers',
            'Continuous quality gates powered by SonarQube and JetBrains Qodana',
            'Optional Self-Hosted Docker edition for multi-user teams',
          ],
        },
      ],
    },
    ethics: {
      badge: '3. Open-Source & Social Ethics',
      heading: 'A Digital Commons for Tradespeople, Students & Local Communities',
      lead: 'Fattura Facile is not a VC-backed startup chasing recurring revenue—it is an open civic and technological initiative built alongside practitioners and educators.',
      cards: [
        {
          id: 'free_forever',
          badge: 'Perpetual Commitment',
          title: '100% Free Core Desktop Software Forever',
          desc: 'Our portable desktop application will never become paywalled and will never impose artificial caps on invoices or clients. Starting a trade should carry zero digital toll.',
          linkHref: '/versioni/',
          linkLabel: 'Compare Editions →',
        },
        {
          id: 'community_modules',
          badge: 'Collaborative Model',
          title: 'Free Custom Modules Built for All (€0)',
          desc: 'When a tradesperson requests a feature needed for their daily workflow, our team develops it free of charge and releases it openly so every colleague in the community benefits.',
          linkHref: '/community-richieste/',
          linkLabel: 'Request a Free Module →',
        },
        {
          id: 'schools_social',
          badge: 'Education & Future',
          title: 'Empowering Vocational Schools & Apprentices',
          desc: 'We provide technical institutes with a real-world .NET Clean Architecture codebase to study, and equip commercial schools with a zero-cost compliant billing lab for classroom simulations.',
          linkHref: '/scuole-e-sociale/',
          linkLabel: 'Schools & Social Impact →',
        },
      ],
    },
    chronicle: {
      badge: '4. Timeline & Milestone Chronicle',
      heading: 'Our Journey & Key Milestones',
      lead: 'From the first line of code written for local tradespeople to an open cross-border ecosystem spanning Italy and Switzerland.',
      milestones: [
        {
          year: 'Milestone 01',
          phase: 'The Genesis Idea',
          title: 'Field Research Across Lombardy & Canton Ticino',
          desc: 'Born from direct conversations with electricians, plumbers, and solo freelancers frustrated by costly subscription ERPs that fail offline on job sites.',
          badge: 'Anti-ERP Vision',
        },
        {
          year: 'Milestone 02',
          phase: 'First Prototype',
          title: 'Portable C# WPF & SQLite Engine on a USB Drive',
          desc: 'Development of the zero-installation standalone core: a self-contained executable with an embedded SQLite database that launches in under a second on any Windows PC.',
          badge: '100% Offline & USB',
        },
        {
          year: 'Milestone 03',
          phase: 'Dual-Market Compliance',
          title: 'Italian FatturaPA SDI & Swiss SIX QR-Bill Integration',
          desc: 'Engineering of certified tax modules for the Italian Revenue Agency Exchange System (SDI) and the official Swiss SIX Interbank Clearing QR-Bill specification.',
          badge: 'IT & CH Compliant',
        },
        {
          year: 'Milestone 04',
          phase: 'Community & Education',
          title: 'Open-Source Launch, Schools & Regional Support Network',
          desc: 'Public release of the open-source ecosystem, launch of free educational tracks for technical and commercial schools, and creation of the verified local partner directory.',
          badge: 'Open Ecosystem',
        },
      ],
    },
    ctaBanner: {
      heading: 'Be part of the Fattura Facile story',
      subtitle:
        'Download the free portable software, explore our modules, or propose the next feature for your trade.',
      btnModules: 'Explore Modules',
      btnCommunity: 'Join the Community',
      btnDownload: 'Download Free',
    },
  },

  fr: {
    seo: {
      title: 'Notre Histoire & Vision Architecturale | Fattura Facile',
      description:
        'Découvrez l’histoire de Fattura Facile : né de la frustration face aux ERP complexes et aux abonnements SaaS pour offrir une facturation libre, hors-ligne avec SQLite en Suisse et en Italie.',
      keywords:
        'histoire fattura facile, philosophie anti-erp, logiciel facturation open source, sqlite local, qr-bill suisse six, fatturapa sdi italie, clean architecture dotnet',
    },
    eyebrow: 'Nos Racines & Notre Vision',
    heading: 'De la frustration sur les chantiers au logiciel libre pour tous',
    lead: 'Né entre la Suisse (Canton du Tessin) et l’Italie du Nord, Fattura Facile poursuit une mission claire : redonner aux artisans, TPE et indépendants un outil de facturation rapide, gratuit et dont ils sont réellement propriétaires.',
    problemTitle: 'Le Problème : Pourquoi un artisan devrait-il utiliser un ERP à 500 boutons ?',
    problemText:
      'Les installateurs sanitaires, électriciens, menuisiers et indépendants émettent en moyenne 10 à 20 factures par mois. Pourtant, le marché leur impose des progiciels conçus pour des multinationales : lents, surchargés de menus comptables complexes et liés à des abonnements mensuels sans fin.',
    philosophyTitle: 'Les Trois Piliers de Notre Architecture',
    philosophyBullets: [
      {
        title: 'SQLite Local & Zéro Télémétrie',
        desc: 'Souveraineté totale sur vos données : aucun serveur intermédiaire, aucun pistage et un contrôle physique complet sur vos archives fiscales.',
      },
      {
        title: 'Fondation Double Marché (CH & IT)',
        desc: 'Conçu dès le premier jour pour gérer nativement la QR-Facture suisse (norme SIX) ainsi que la facture électronique italienne FatturaPA SDI.',
      },
      {
        title: 'Clean Architecture & C# .NET',
        desc: 'Une ingénierie logicielle rigoureuse (SOLID, CQRS, WPF natif) au lieu d’enveloppes web lourdes et fragiles.',
      },
    ],
    timeline: [
      {
        year: 'Étape 1 • Genèse',
        title: 'L’Écoute sur le Terrain entre la Suisse et l’Italie',
        desc: 'Constat partagé avec des artisans fatigués de payer des abonnements coûteux pour quelques factures mensuelles et bloqués sur les chantiers sans connexion réseau.',
      },
      {
        year: 'Étape 2 • Prototype',
        title: 'Premier Moteur Portable C# WPF & SQLite sur Clé USB',
        desc: 'Création du premier exécutable autonome sans installation : démarrage en moins d’une seconde, aucune trace dans le registre Windows et base SQLite intégrée.',
      },
      {
        year: 'Étape 3 • Double Marché',
        title: 'Intégration Native QR-Bill SIX (CH) & FatturaPA SDI (IT)',
        desc: 'Implémentation des bulletins de versement QR suisses conformes aux directives SIX (QR-IBAN, taux TVA fédéraux) et du format XML FatturaPA pour l’Italie.',
      },
      {
        year: 'Étape 4 • Écosystème Ouvert',
        title: 'Lancement Open-Source, Écoles & Réseau de Partenaires',
        desc: 'Ouverture du code source, développement gratuit de modules sur demande pour la communauté et partenariats pédagogiques avec les écoles techniques et de commerce.',
      },
    ],
    hero: {
      eyebrow: 'Notre Histoire & Manifeste',
      headingPart1: 'De la frustration sur les chantiers au',
      headingHighlight: 'logiciel libre pour tous.',
      lead: 'Fattura Facile est né entre le Tessin et la Lombardie avec un objectif précis : libérer les artisans, les TPE et les indépendants des ERP surdimensionnés et des abonnements SaaS perpétuels.',
      badgeDualMarket: 'Né entre la Suisse 🇨🇭 et l’Italie 🇮🇹',
      badgeOpenSource: '100% Gratuit, Hors-Ligne & Open Source',
      ctaModules: 'Explorer les Modules',
      ctaCommunity: 'Rejoindre la Communauté',
      ctaDownload: 'Télécharger Gratuitement',
    },
    origin: {
      badge: '1. La Genèse & Le Constat',
      heading: 'Pourquoi payer un ERP à 500 boutons quand on émet 15 factures par mois ?',
      lead: 'Tout a commencé dans un atelier, en observant des collègues artisans perdre leurs soirées sur des portails web lents et confus simplement pour facturer leur travail.',
      problemTitle: 'La Frustration face aux Progiciels Surdimensionnés',
      problemText:
        'Un électricien, un plombier, un paysagiste ou un consultant indépendant n’a pas besoin de gérer une chaîne logistique internationale. Il a besoin de rédiger un devis clair en 60 secondes directement chez le client et de le convertir en facture officielle en un seul clic.',
      antiSaasTitle: 'Philosophie Anti-SaaS : Vos Données Ne Doivent Pas Être Prises en Otage',
      antiSaasText:
        'Ces dernières années, les logiciels de gestion sont devenus une location perpétuelle : dès que vous cessez de payer la mensualité, vous perdez l’accès à votre outil ou à votre historique clients. Nous affirmons que votre outil de travail et vos données comptables doivent vous appartenir à 100 %, sans abonnement obligatoire.',
      quote: {
        text: '« Un logiciel pour artisans devrait fonctionner comme un bon tournevis dans sa boîte à outils : prêt dès qu’on en a besoin, sans réclamer un abonnement mensuel pour serrer une vis, et opérationnel même dans un sous-sol sans réseau. »',
        author: 'L’Équipe Fondatrice Fattura Facile',
        role: 'Manifeste Architectural Helvético-Italien',
      },
      comparison: {
        erpTitle: 'Logiciels SaaS / ERP Traditionnels',
        erpPoints: [
          'Abonnements mensuels ou annuels obligatoires qui augmentent à chaque renouvellement',
          'Interfaces surchargées de centaines de fonctions inutiles pour une TPE',
          'Dépendance totale à Internet et temps de chargement lents en déplacement',
          'Fichiers clients et factures stockés sur des serveurs tiers externes',
        ],
        ffTitle: 'L’Approche Fattura Facile',
        ffPoints: [
          '0 CHF / 0 € pour toujours sur l’édition Desktop, sans limite de documents',
          'Flux ultra-rapide : devis en 1 minute, conversion en facture en 1 clic',
          '100 % Hors-ligne sur PC ou clé USB avec démarrage instantané (< 1 seconde)',
          'Base de données SQLite locale sous votre propriété physique et juridique exclusive',
        ],
      },
    },
    architecture: {
      badge: '2. Philosophie Architecturale',
      heading: 'Une Ingénierie Robuste au Service de la Simplicité',
      lead: 'Derrière une interface volontairement épurée se cache une architecture logicielle conçue selon les normes les plus strictes de souveraineté des données, de rapidité et de fiabilité.',
      pillars: [
        {
          id: 'sqlite',
          tag: 'Privacy by Design',
          title: 'SQLite Local & Zéro Télémétrie',
          desc: 'Aucune donnée fiscale, aucun IBAN ni fichier client ne quitte votre ordinateur. L’entrepreneur reste l’unique maître de ses données conformément à la nLPD suisse et au RGPD européen.',
          highlights: [
            'Fichier unique de base de données transactionnelle ACID SQLite',
            'Aucune télémétrie, aucun pistage ni collecte en arrière-plan',
            'Sauvegarde ZIP chiffrée AES en 1 clic sur clé USB ou NAS local',
          ],
        },
        {
          id: 'dual_market',
          tag: 'Natif Transfrontalier',
          title: 'Fondation Double Marché : Suisse & Italie',
          desc: 'Contrairement aux logiciels traduits à la hâte, Fattura Facile a été conçu dès l’origine pour répondre avec précision aux exigences fiscales suisses et italiennes.',
          highlights: [
            'Suisse 🇨🇭 : QR-Facture officielle (norme SIX) avec croix suisse, QR-IBAN et taux TVA fédéraux (8.1%, 2.6%, 3.8%)',
            'Italie 🇮🇹 : Génération XML FatturaPA v1.2 certifiée pour le SDI, code destinataire et timbre virtuel',
            'Gestion native multi-devises CHF et EUR',
          ],
        },
        {
          id: 'clean_arch',
          tag: 'Excellence Technique',
          title: 'Clean Architecture & C# .NET Natif',
          desc: 'Nous avons écarté les enveloppes web gourmandes en mémoire. Fattura Facile est développé en C# .NET natif selon les principes SOLID et CQRS, assurant une réactivité immédiate sur tout PC d’atelier.',
          highlights: [
            'Séparation stricte des couches Domain, Application, Infrastructure et UI',
            'Contrôle qualité continu via SonarQube et JetBrains Qodana',
            'Option Cloud Privé Docker auto-hébergé pour le travail en équipe',
          ],
        },
      ],
    },
    ethics: {
      badge: '3. Éthique Open-Source & Impact Social',
      heading: 'Un Bien Commun pour les Artisans, les Étudiants et les Régions',
      lead: 'Fattura Facile n’est pas une start-up spéculative, mais une initiative technologique et citoyenne développée avec les professionnels de terrain et les enseignants.',
      cards: [
        {
          id: 'free_forever',
          badge: 'Engagement Permanent',
          title: 'Version Desktop 100 % Gratuite pour Toujours',
          desc: 'Notre application portable ne deviendra jamais payante et n’imposera jamais de limites artificielles sur vos factures. Se lancer à son compte ne doit pas être freiné par des coûts logiciels.',
          linkHref: '/versioni/',
          linkLabel: 'Comparer les Versions →',
        },
        {
          id: 'community_modules',
          badge: 'Développement Collaboratif',
          title: 'Modules sur Mesure Développés Gratuitement (0 €)',
          desc: 'Lorsqu’un artisan nous fait part d’un besoin concret pour son métier, notre équipe développe la fonctionnalité gratuitement et la publie pour l’ensemble de la communauté.',
          linkHref: '/community-richieste/',
          linkLabel: 'Demander un Module Gratuit →',
        },
        {
          id: 'schools_social',
          badge: 'Formation & Jeunesse',
          title: 'Soutien aux Écoles Professionnelles et Apprentis',
          desc: 'Nous mettons notre code .NET à disposition des écoles d’informatique comme cas d’étude réel, et offrons aux écoles de commerce un simulateur de facturation gratuit pour les cours pratiques.',
          linkHref: '/scuole-e-sociale/',
          linkLabel: 'Programme Écoles & Social →',
        },
      ],
    },
    chronicle: {
      badge: '4. Chronologie & Étapes Clés',
      heading: 'Notre Parcours et Nos Jalons',
      lead: 'De la première ligne de code écrite pour des artisans locaux jusqu’à un écosystème ouvert entre la Suisse et l’Italie.',
      milestones: [
        {
          year: 'Jalon 01',
          phase: 'L’Idée Initiale',
          title: 'Observation sur le Terrain au Tessin et en Lombardie',
          desc: 'Naissance du projet au contact d’électriciens, installateurs et indépendants pénalisés par des ERP par abonnement trop lourds et inutilisables hors-ligne.',
          badge: 'Vision Anti-ERP',
        },
        {
          year: 'Jalon 02',
          phase: 'Premier Prototype',
          title: 'Moteur Portable C# WPF & SQLite sur Clé USB',
          desc: 'Développement du cœur autonome sans installation : un exécutable léger avec base SQLite embarquée qui s’ouvre instantanément sur n’importe quel PC Windows.',
          badge: '100% Hors-Ligne & USB',
        },
        {
          year: 'Jalon 03',
          phase: 'Conformité Binationale',
          title: 'Intégration QR-Bill SIX (CH) & FatturaPA SDI (IT)',
          desc: 'Création des moteurs fiscaux conformes aux directives bancaires suisses SIX Interbank Clearing et au Système d’Échange (SDI) de l’administration fiscale italienne.',
          badge: 'Conforme CH & IT',
        },
        {
          year: 'Jalon 04',
          phase: 'Communauté & Éducation',
          title: 'Ouverture Open-Source, Écoles & Partenaires Locaux',
          desc: 'Publication en open source, lancement des parcours pédagogiques gratuits pour les écoles professionnelles et création du réseau d’informaticiens et fiduciaires locaux.',
          badge: 'Écosystème Ouvert',
        },
      ],
    },
    ctaBanner: {
      heading: 'Prenez part à l’histoire de Fattura Facile',
      subtitle:
        'Téléchargez le logiciel gratuit, découvrez nos modules ou proposez la prochaine fonctionnalité pour votre métier.',
      btnModules: 'Explorer les Modules',
      btnCommunity: 'Rejoindre la Communauté',
      btnDownload: 'Télécharger Gratuitement',
    },
  },

  de: {
    seo: {
      title: 'Unsere Geschichte & Architektur-Vision | Fattura Facile',
      description:
        'Erfahren Sie, wie Fattura Facile entstand: aus der Frustration über überladene ERP-Systeme und SaaS-Abos hin zu einer freien, lokalen SQLite-Rechnungssoftware für die Schweiz und Italien.',
      keywords:
        'fattura facile geschichte, anti-erp philosophie, open source rechnungssoftware, lokale sqlite datenbank, schweizer qr-rechnung six, fatturapa sdi italien, clean architecture dotnet',
    },
    eyebrow: 'Unsere Wurzeln & Vision',
    heading: 'Vom Frust auf der Baustelle zur freien Software für alle',
    lead: 'Entstanden zwischen der Südschweiz (Tessin) und Norditalien verfolgt Fattura Facile eine klare Mission: Handwerkern, Kleinstunternehmen und Selbstständigen ein schnelles, kostenloses Fakturierungswerkzeug zu geben, das ihnen wirklich gehört.',
    problemTitle: 'Das Problem: Warum sollte ein Handwerker ein ERP mit 500 Schaltflächen nutzen?',
    problemText:
      'Sanitärinstallateure, Elektriker, Schreiner und Freiberufler stellen im Schnitt 10 bis 20 Rechnungen pro Monat aus. Dennoch drängt ihnen der Markt überdimensionierte ERP-Pakete auf – langsam, voller unverständlicher Buchhaltungsmenüs und an endlose Monatsabonnements gekoppelt.',
    philosophyTitle: 'Die Drei Säulen Unserer Architektur',
    philosophyBullets: [
      {
        title: 'Lokales SQLite & Null Telemetrie',
        desc: 'Volle Datensouveränität: keine Zwischenserver, kein Tracking und hundertprozentige physische Kontrolle über Ihre Geschäftsdaten.',
      },
      {
        title: 'Dual-Market-Fundament (CH & IT)',
        desc: 'Von Tag eins an nativ für die Schweizer QR-Rechnung (SIX-Standard) sowie die italienische E-Rechnung FatturaPA SDI entwickelt.',
      },
      {
        title: 'Clean Architecture & C# .NET',
        desc: 'Solide Softwaretechnik (SOLID, CQRS, natives WPF) statt speicherhungriger und träger Web-Wrapper.',
      },
    ],
    timeline: [
      {
        year: 'Phase 1 • Ursprung',
        title: 'Praxiserfahrung zwischen der Schweiz und Italien',
        desc: 'Direkter Austausch mit Handwerkern, die es leid waren, teure Jahresabos für wenige Rechnungen zu bezahlen und auf Baustellen ohne Internet blockiert zu sein.',
      },
      {
        year: 'Phase 2 • Prototyp',
        title: 'Erste Portable C# WPF & SQLite-Engine auf USB-Stick',
        desc: 'Entwicklung der ersten installationsfreien Standalone-Version: Start in unter einer Sekunde, keine Einträge in der Windows-Registry und eingebettete SQLite-Datenbank.',
      },
      {
        year: 'Phase 3 • Dual-Market',
        title: 'Native Integration von Swiss QR-Bill SIX & FatturaPA SDI',
        desc: 'Umsetzung der offiziellen Schweizer QR-Zahlteile nach SIX-Vorgaben (QR-IBAN, eidgenössische MWST-Sätze) und des XML-Standards FatturaPA für Italien.',
      },
      {
        year: 'Phase 4 • Offenes Ökosystem',
        title: 'Open-Source-Start, Schulen & Lokales Partnernetzwerk',
        desc: 'Veröffentlichung des Quellcodes, Start der kostenlosen Modulentwicklung auf Zuruf der Community sowie Bildungspartnerschaften mit Berufsfachschulen und Handelsmittelschulen.',
      },
    ],
    hero: {
      eyebrow: 'Unsere Geschichte & Manifest',
      headingPart1: 'Vom Frust auf der Baustelle zur',
      headingHighlight: 'freien Software für alle.',
      lead: 'Fattura Facile entstand zwischen dem Kanton Tessin und der Lombardei mit einem klaren Ziel: Handwerker, Kleinstbetriebe und Selbstständige von aufgeblähten ERP-Systemen und endlosen SaaS-Abogebühren zu befreien.',
      badgeDualMarket: 'Entstanden zwischen der Schweiz 🇨🇭 und Italien 🇮🇹',
      badgeOpenSource: '100 % Kostenlos, Offline & Open Source',
      ctaModules: 'Module Entdecken',
      ctaCommunity: 'Community Beitreten',
      ctaDownload: 'Kostenlos Herunterladen',
    },
    origin: {
      badge: '1. Ursprung & Problemstellung',
      heading: 'Warum für ein 500-Button-ERP zahlen, wenn man 15 Rechnungen im Monat schreibt?',
      lead: 'Alles begann an einer Werkbank – als wir sahen, wie befreundete Handwerker spätabends mit langsamen, überkomplizierten Webportalen kämpften, nur um ihre geleistete Arbeit abzurechnen.',
      problemTitle: 'Die Frustration über Aufgeblähte Unternehmenssoftware',
      problemText:
        'Ein Elektriker, Heizungsinstallateur, Gärtner oder freier Berater muss keine globale Lieferkette steuern. Er muss noch direkt beim Kunden auf der Baustelle in 60 Sekunden eine saubere Offerte erstellen und diese nach Auftragsabschluss mit einem einzigen Klick in eine rechtskonforme Rechnung umwandeln.',
      antiSaasTitle: 'Anti-SaaS-Philosophie: Ihre Daten Dürfen Keine Geisel Sein',
      antiSaasText:
        'In den letzten Jahren ist Bürosoftware für Kleinbetriebe zur Dauer-Mietfalle geworden: Wer das monatliche Abo kündigt, verliert den Zugriff auf sein Werkzeug oder seine eigene Kundenhistorie. Wir sind überzeugt, dass Ihr Arbeitswerkzeug und Ihre Buchhaltungsdaten zu 100 % Ihnen gehören müssen – ohne Ablaufdatum und ohne Cloud-Zwang.',
      quote: {
        text: '„Eine Rechnungssoftware für Handwerker sollte wie ein guter Schraubenzieher im Werkzeugkasten funktionieren: sofort griffbereit, ohne monatliche Abogebühr für jede Umdrehung und selbst im tiefsten Keller ohne Mobilfunknetz zuverlässig einsatzbereit.“',
        author: 'Gründerteam Fattura Facile',
        role: 'Schweizerisch-Italienisches Architektur-Manifest',
      },
      comparison: {
        erpTitle: 'Klassische SaaS-Lösungen / Groß-ERPs',
        erpPoints: [
          'Verpflichtende Monats- oder Jahresabos mit regelmäßigen Preiserhöhungen',
          'Überladene Masken mit hunderten Funktionen, die Kleinbetriebe nie benötigen',
          'Vollständige Internetabhängigkeit und langsame Ladezeiten unterwegs',
          'Kundenstamm und sensible Rechnungsdaten liegen auf fremden Drittservern',
        ],
        ffTitle: 'Der Fattura-Facile-Weg',
        ffPoints: [
          '0 CHF / 0 € dauerhaft in der Desktop-Version, ohne Beleg- oder Kundenlimit',
          'Schlanker Ablauf: Offerte in 1 Minute, Rechnung per 1-Klick-Umwandlung',
          '100 % Offline auf PC oder USB-Stick mit Blitzstart (< 1 Sekunde)',
          'Lokale SQLite-Datenbank in Ihrem alleinigen physischen und rechtlichen Eigentum',
        ],
      },
    },
    architecture: {
      badge: '2. Architektonische Grundpfeiler',
      heading: 'Solide Ingenieurskunst im Dienst der Einfachheit',
      lead: 'Hinter einer bewusst aufgeräumten Oberfläche arbeitet eine Softwarearchitektur, die höchsten Ansprüchen an Datensouveränität, Geschwindigkeit und Wartbarkeit genügt.',
      pillars: [
        {
          id: 'sqlite',
          tag: 'Privacy by Design',
          title: 'Lokales SQLite & Null Telemetrie',
          desc: 'Keine Steuernummer, keine IBAN und kein Kundendatensatz verlässt jemals Ihren Computer. Der Betriebsinhaber bleibt alleiniger Verantwortlicher gemäß Schweizer revDSG (nLPD) und EU-DSGVO.',
          highlights: [
            'Einzelne transaktionssichere ACID-SQLite-Datenbankdatei',
            'Keinerlei Telemetrie, Nutzungsanalyse oder Werbe-Tracker',
            '1-Klick AES-verschlüsseltes ZIP-Backup auf USB oder lokales NAS',
          ],
        },
        {
          id: 'dual_market',
          tag: 'Grenzüberschreitend Nativ',
          title: 'Dual-Market-Fundament: Schweiz & Italien',
          desc: 'Anders als nachträglich übersetzte Programme wurde Fattura Facile von Grund auf für die gesetzlichen Vorgaben beiderseits der schweizerisch-italienischen Grenze konzipiert.',
          highlights: [
            'Schweiz 🇨🇭: Offizielle QR-Rechnung (SIX-Standard) mit Schweizerkreuz, QR-IBAN und MWST-Sätzen (8.1 %, 2.6 %, 3.8 %)',
            'Italien 🇮🇹: Zertifizierter FatturaPA v1.2 XML-Export für SDI, Empfängercode und virtuelle Stempelsteuer',
            'Native Mehrwährungsfähigkeit für CHF und EUR',
          ],
        },
        {
          id: 'clean_arch',
          tag: 'Software-Qualität',
          title: 'Clean Architecture & Natives C# .NET',
          desc: 'Wir verzichten bewusst auf speicherhungrige Web-Wrapper. Fattura Facile ist in nativem C# .NET mit CQRS- und SOLID-Prinzipien entwickelt und läuft selbst auf älteren Werkstatt-Notebooks blitzschnell.',
          highlights: [
            'Saubere Schichtentrennung: Domain, Application, Infrastructure und UI',
            'Automatisierte Qualitätsprüfung mit SonarQube und JetBrains Qodana',
            'Optionale Self-Hosted Docker-Edition für Mehrbenutzer-Teams',
          ],
        },
      ],
    },
    ethics: {
      badge: '3. Open-Source-Ethik & Gesellschaftlicher Beitrag',
      heading: 'Ein Digitales Gemeingut für Handwerk, Bildung und Regionen',
      lead: 'Fattura Facile ist kein renditegetriebenes Start-up, sondern ein offenes Technologie- und Bildungsprojekt, das gemeinsam mit Praktikern und Lehrkräften wächst.',
      cards: [
        {
          id: 'free_forever',
          badge: 'Dauerhaftes Versprechen',
          title: 'Desktop-Kernversion 100 % Kostenlos für Immer',
          desc: 'Unsere portable Desktop-Anwendung wird niemals kostenpflichtig und wird niemals künstliche Limits für Rechnungen oder Kunden einführen. Der Start in die Selbstständigkeit muss frei von digitalen Hürden sein.',
          linkHref: '/versioni/',
          linkLabel: 'Versionen Vergleichen →',
        },
        {
          id: 'community_modules',
          badge: 'Gemeinschaftliche Entwicklung',
          title: 'Wunschmodule zum Nulltarif (0 €)',
          desc: 'Wenn ein Handwerker eine spezifische Funktion für seinen Berufsalltag benötigt, entwickelt unser Team das Modul kostenlos und stellt es in der nächsten Version allen Betrieben frei zur Verfügung.',
          linkHref: '/community-richieste/',
          linkLabel: 'Kostenloses Modul Anfragen →',
        },
        {
          id: 'schools_social',
          badge: 'Berufsbildung & Jugend',
          title: 'Verantwortung für Berufsfachschulen & Lernende',
          desc: 'Informatikschulen nutzen unsere reale .NET-Codebasis für den Praxisunterricht, während Handelsschulen mit der kostenlosen Software realistische Buchhaltungs- und QR-Rechnungssimulationen durchführen.',
          linkHref: '/scuole-e-sociale/',
          linkLabel: 'Schul- & Sozialprogramm →',
        },
      ],
    },
    chronicle: {
      badge: '4. Chronik & Meilensteine',
      heading: 'Unser Entwicklungsweg',
      lead: 'Von der ersten Codezeile für lokale Handwerksbetriebe bis zum offenen Ökosystem zwischen der Schweiz und Italien.',
      milestones: [
        {
          year: 'Meilenstein 01',
          phase: 'Die Grundidee',
          title: 'Praxisanalyse im Tessin und in der Lombardei',
          desc: 'Entstehung der Idee im direkten Gespräch mit Elektrikern, Installateuren und Selbstständigen, die unter teuren und offline unbrauchbaren Abo-ERPs litten.',
          badge: 'Anti-ERP-Vision',
        },
        {
          year: 'Meilenstein 02',
          phase: 'Erster Prototyp',
          title: 'Portable C# WPF & SQLite-Engine auf dem USB-Stick',
          desc: 'Entwicklung des installationsfreien Kernsystems: eine eigenständige Programmdatei mit integrierter SQLite-Datenbank, die auf jedem Windows-PC sofort startet.',
          badge: '100 % Offline & USB',
        },
        {
          year: 'Meilenstein 03',
          phase: 'Zweistaaten-Konformität',
          title: 'Integration von Swiss QR-Bill (SIX) & FatturaPA (SDI)',
          desc: 'Aufbau der zertifizierten Steuermodule für den Schweizer Zahlungsverkehr nach SIX-Standard sowie für das elektronische Austauschsystem SDI der italienischen Steuerbehörde.',
          badge: 'CH & IT Konform',
        },
        {
          year: 'Meilenstein 04',
          phase: 'Community & Bildung',
          title: 'Open-Source-Freigabe, Schulpartnerschaften & Regionales Netzwerk',
          desc: 'Öffnung des gesamten Projekts, Einführung kostenloser Lehrpakete für Berufs- und Handelsschulen sowie Aufbau des Verzeichnisses lokaler IT-Partner und Treuhänder.',
          badge: 'Offenes Ökosystem',
        },
      ],
    },
    ctaBanner: {
      heading: 'Werden Sie Teil der Geschichte von Fattura Facile',
      subtitle:
        'Laden Sie die kostenlose Software herunter, entdecken Sie alle Module oder schlagen Sie die nächste Funktion für Ihr Handwerk vor.',
      btnModules: 'Module Entdecken',
      btnCommunity: 'Community Beitreten',
      btnDownload: 'Kostenlos Herunterladen',
    },
  },
};
