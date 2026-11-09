export type CountryCode = 'IT' | 'CH';

export type TeamDomain =
  | 'core_architecture'
  | 'cloud_devops'
  | 'swiss_compliance'
  | 'italian_compliance'
  | 'web_frontend'
  | 'docs_translation'
  | 'community_advocacy'
  | 'mobile';

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

export const TEAM_DOMAIN_STYLES: Record<TeamDomain, string> = {
  core_architecture:
    'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800',
  cloud_devops:
    'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800',
  swiss_compliance:
    'bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800',
  italian_compliance:
    'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
  web_frontend:
    'bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800',
  docs_translation:
    'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800',
  community_advocacy:
    'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800',
  mobile:
    'bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800',
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
    'core-maintainer-01',
    'Davide Nava',
    'Lead Software Architect & Founder',
    true,
    'Caslano',
    'Canton Ticino',
    'CH',
    ['core_architecture', 'cloud_devops', 'swiss_compliance', 'italian_compliance'],
    'Senior Software Engineer',
    {
      linkedin: 'https://www.linkedin.com/in/davidenava85',
      github: 'https://github.com/davide-nava',
      email: 'davidenava85@gmail.com',
      telegram: 'https://t.me/@davidenava85',
    },
    '/img/team/davide-nava.jpg',
  ],
  [
    '',
    'Omar Jarid',
    'Mobile Developer',
    false,
    'Cento (Ferrara)',
    'Emilia-Romagna',
    'IT',
    ['mobile'],
    'Mobile Developer',
    {
      linkedin: 'https://www.linkedin.com/in/omarjarid',
      github: 'https://github.com/omar-jarid',
      email: 'omarjarid@proton.me',
      telegram: 'https://t.me/@Jerid616',
    },
    '/img/team/omar-jarid.jpg',
  ],
];

export const TEAM_MEMBERS: TeamMember[] = TEAM_MEMBER_SEEDS.map(createTeamMember);
