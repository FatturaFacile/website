export type CountryCode = 'IT' | 'CH';

export type TeamDomain =
  | 'core_architecture' // .NET / C# / Clean Architecture / SQLite
  | 'cloud_devops' // Docker / CI/CD / GitHub Actions / Linux
  | 'swiss_compliance' // QR-Bill SIX standard / IVA Svizzera / nLPA
  | 'italian_compliance' // FatturaPA / Sistema di Interscambio (SDI) / GDPR
  | 'web_frontend' // Astro / Tailwind CSS / TypeScript
  | 'docs_translation' // Documentazione / Localizzazione (IT, EN, FR, DE)
  | 'community_advocacy'; // Relazioni con scuole, studenti e community open-source

export interface TeamMemberLocation {
  city: string;
  regionOrCanton: string; // es. "Ticino", "Lombardia"
  country: CountryCode;
}

export interface TeamSocialLinks {
  github?: string;
  linkedin?: string;
  telegram?: string;
  email?: string;
  website?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  isCoreMaintainer: boolean;
  location: TeamMemberLocation;
  domains: TeamDomain[];
  bio: string;
  avatarUrl?: string; // fallback su iniziali se assente
  social: TeamSocialLinks;
}

// Mappatura delle etichette dei domini per filtri e badge UI
export const TEAM_DOMAIN_LABELS: Record<TeamDomain, { label: string; badgeClass: string }> = {
  core_architecture: {
    label: '.NET & Architettura Core',
    badgeClass:
      'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800',
  },
  cloud_devops: {
    label: 'Cloud & DevOps',
    badgeClass:
      'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  },
  swiss_compliance: {
    label: 'Fisco Svizzero (QR-Bill)',
    badgeClass:
      'bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800',
  },
  italian_compliance: {
    label: 'Fisco Italia (SDI / FatturaPA)',
    badgeClass:
      'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  },
  web_frontend: {
    label: 'Web & Portale Astro',
    badgeClass:
      'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  },
  docs_translation: {
    label: 'Traduzioni & Localizzazione',
    badgeClass:
      'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  },
  community_advocacy: {
    label: 'Scuole & Community Sociale',
    badgeClass:
      'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
  },
};

export const TEAM_MEMBERS: TeamMember[] = [
  // --- Svizzera 🇨🇭 (Ticino) ---
  {
    id: 'core-ch-01',
    name: 'Davide Nava',
    role: 'Lead Software Architect & Founder',
    isCoreMaintainer: true,
    location: {
      city: 'Caslano',
      regionOrCanton: 'Ticino',
      country: 'CH',
    },
    domains: ['core_architecture', 'cloud_devops', 'swiss_compliance', 'italian_compliance'],
    bio: 'Software Architect con oltre 20 anni di esperienza in .NET, Clean Architecture e CQRS. Ha ideato FatturaFacile per offrire ad artigiani e PMI uno strumento veloce, senza canoni e con sovranità totale sui dati.',
    avatarUrl: '/img/team/davide-nava.jpg',
    social: {
      github: 'https://github.com/DavideNava',
      website: 'https://navasoft.ch',
      email: 'info@fatturafacile.eu',
    },
  },
  {
    id: 'ch-mentor-01',
    name: 'Stefan Meyer',
    role: 'Swiss Regulatory & FADP Advisor',
    isCoreMaintainer: false,
    location: {
      city: 'Lugano',
      regionOrCanton: 'Ticino',
      country: 'CH',
    },
    domains: ['swiss_compliance', 'docs_translation'],
    bio: 'Consulente aziendale specializzato negli standard di pagamento SIX Interbank Clearing, gestione multi-valuta (CHF/EUR) e adeguamento alla nuova legge federale sulla protezione dei dati (nLPA).',
    social: {
      email: 'stefan.meyer@example.ch',
    },
  },

  // --- Italia 🇮🇹 (Lombardia & Altre Regioni) ---
  {
    id: 'it-core-01',
    name: 'Marco Bellini',
    role: 'Senior .NET Engineer & SDI Specialist',
    isCoreMaintainer: true,
    location: {
      city: 'Varese',
      regionOrCanton: 'Lombardia',
      country: 'IT',
    },
    domains: ['core_architecture', 'italian_compliance'],
    bio: "Ingegnere del software specializzato in parser XML FatturaPA, firma digitale e integrazioni con il Sistema di Interscambio dell'Agenzia delle Entrate per regimi forfettari e ordinari.",
    social: {
      github: 'https://github.com/FatturaFacile',
      telegram: 'https://t.me/+sRauQINBDFQ5NjU0',
      email: 'marco.bellini@example.it',
    },
  },
  {
    id: 'it-edu-01',
    name: 'Chiara Riva',
    role: 'Community & Academic Coordinator',
    isCoreMaintainer: false,
    location: {
      city: 'Como',
      regionOrCanton: 'Lombardia',
      country: 'IT',
    },
    domains: ['community_advocacy', 'web_frontend'],
    bio: "Docente di informatica e divulgatrice open-source. Coordina i progetti pilota con gli istituti tecnici e commerciali per l'adozione di FatturaFacile nei laboratori didattici.",
    social: {
      github: 'https://github.com/FatturaFacile',
      email: 'scuole@fatturafacile.eu',
    },
  },
];
