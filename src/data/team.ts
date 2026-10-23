export type CountryCode = 'IT' | 'CH';

export type TeamDomain =
  | 'core_architecture'
  | 'cloud_devops'
  | 'swiss_compliance'
  | 'italian_compliance'
  | 'web_frontend'
  | 'docs_translation'
  | 'community_advocacy';

export interface TeamMemberLocation {
  city: string;
  regionOrCanton: string;
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
  avatarUrl?: string;
  social: TeamSocialLinks;
}

function createDomainBadge(
  label: string,
  badgeClass: string,
): { label: string; badgeClass: string } {
  return { label, badgeClass };
}

export const TEAM_DOMAIN_LABELS: Record<TeamDomain, { label: string; badgeClass: string }> = {
  core_architecture: createDomainBadge(
    '.NET & Architettura Core',
    'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800',
  ),
  cloud_devops: createDomainBadge(
    'Cloud & DevOps',
    'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  ),
  swiss_compliance: createDomainBadge(
    'Fisco Svizzero (QR-Bill)',
    'bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800',
  ),
  italian_compliance: createDomainBadge(
    'Fisco Italia (SDI / FatturaPA)',
    'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  ),
  web_frontend: createDomainBadge(
    'Web & Portale Astro',
    'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  ),
  docs_translation: createDomainBadge(
    'Traduzioni & Localizzazione',
    'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  ),
  community_advocacy: createDomainBadge(
    'Scuole & Community Sociale',
    'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
  ),
};

type TeamMemberSeedTuple = readonly [
  id: string,
  name: string,
  role: string,
  isCoreMaintainer: boolean,
  city: string,
  regionOrCanton: string,
  country: CountryCode,
  domains: TeamDomain[],
  bio: string,
  social: TeamSocialLinks,
  avatarUrl?: string,
];

function createTeamMember([
  id,
  name,
  role,
  isCoreMaintainer,
  city,
  regionOrCanton,
  country,
  domains,
  bio,
  social,
  avatarUrl,
]: TeamMemberSeedTuple): TeamMember {
  return {
    id,
    name,
    role,
    isCoreMaintainer,
    location: { city, regionOrCanton, country },
    domains,
    bio,
    ...(avatarUrl ? { avatarUrl } : {}),
    social,
  };
}

const TEAM_MEMBER_SEEDS: readonly TeamMemberSeedTuple[] = [
  [
    'core-ch-01',
    'XXX',
    'Lead Software Architect & Founder',
    true,
    'XXX',
    'XXX',
    'CH',
    ['core_architecture', 'cloud_devops', 'swiss_compliance', 'italian_compliance'],
    'Software Architect con oltre 20 anni di esperienza in .NET, Clean Architecture e CQRS. Ha ideato FatturaFacile per offrire ad artigiani e PMI uno strumento veloce, senza canoni e con sovranità totale sui dati.',
    {
      github: 'https://github.com/XXX',
      website: 'https://XXX',
      email: 'XXX@XXX.eu',
    },
    '/img/team/xxx.jpg',
  ],
  [
    'ch-mentor-01',
    'XXX',
    'Swiss Regulatory & FADP Advisor',
    false,
    'XXX',
    'XXX',
    'CH',
    ['swiss_compliance', 'docs_translation'],
    'Consulente aziendale specializzato negli standard di pagamento SIX Interbank Clearing, gestione multi-valuta (CHF/EUR) e adeguamento alla nuova legge federale sulla protezione dei dati (nLPA).',
    {
      email: 'XXX@example.ch',
    },
  ],
  [
    'it-core-01',
    'XXX',
    'Senior .NET Engineer & SDI Specialist',
    true,
    'XXX',
    'XXX',
    'IT',
    ['core_architecture', 'italian_compliance'],
    "Ingegnere del software specializzato in parser XML FatturaPA, firma digitale e integrazioni con il Sistema di Interscambio dell'Agenzia delle Entrate per regimi forfettari e ordinari.",
    {
      github: 'https://github.com/XXX',
      telegram: 'https://t.me/XXX',
      email: 'XXX@example.it',
    },
  ],
  [
    'it-edu-01',
    'XXX',
    'Community & Academic Coordinator',
    false,
    'XXX',
    'XXX',
    'IT',
    ['community_advocacy', 'web_frontend'],
    "Docente di informatica e divulgatrice open-source. Coordina i progetti pilota con gli istituti tecnici e commerciali per l'adozione di FatturaFacile nei laboratori didattici.",
    {
      github: 'https://github.com/XXX',
      email: 'XXX@XXX.eu',
    },
  ],
];

export const TEAM_MEMBERS: TeamMember[] = TEAM_MEMBER_SEEDS.map(createTeamMember);
