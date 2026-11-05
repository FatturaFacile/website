export type CountryCode = 'IT' | 'CH';
export type SchoolType = 'Technical' | 'Commercial' | 'Vocational' | 'University';
export type CollaborationProgram =
  'real_codebase_lab' | 'enterprise_simulation' | 'internship_pcto' | 'thesis_project';

export interface SchoolLocation {
  city: string;
  regionOrCanton: string;
  country: CountryCode;
}

export interface SchoolContact {
  contactEmail: string;
  website?: string;
}

export interface EducationalInstitution {
  id: string;
  name: string;
  shortName: string;
  type: SchoolType;
  location: SchoolLocation;
  programs: CollaborationProgram[];
  contact: SchoolContact;
  invitedTarget?: boolean;
}

const DEFAULT_SCHOOL_CONTACT_EMAIL = 'scuole@fatturafacile.eu';

/** Badge classes per school type; the visible labels live in the locale files. */
export const SCHOOL_TYPE_STYLES: Record<SchoolType, string> = {
  Technical:
    'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800',
  Commercial:
    'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
  Vocational:
    'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800',
  University:
    'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800',
};

type SchoolSeedTuple = readonly [
  id: string,
  name: string,
  shortName: string,
  type: SchoolType,
  city: string,
  regionOrCanton: string,
  country: CountryCode,
  programs: CollaborationProgram[],
  website: string,
];

function createEducationalInstitution([
  id,
  name,
  shortName,
  type,
  city,
  regionOrCanton,
  country,
  programs,
  website,
]: SchoolSeedTuple): EducationalInstitution {
  return {
    id,
    name,
    shortName,
    type,
    location: { city, regionOrCanton, country },
    programs,
    contact: {
      contactEmail: DEFAULT_SCHOOL_CONTACT_EMAIL,
      website,
    },
    invitedTarget: true,
  };
}

/**
 * Verified academic institutions invited for educational collaboration, internships,
 * and diploma projects in Canton Ticino and cross-border regions.
 */
const SCHOOL_SEEDS: readonly SchoolSeedTuple[] = [
  [
    'ch-cpt',
    'CPT – Centro Professionale Tecnico',
    'CPT Trevano / Bellinzona',
    'Technical',
    'Bellinzona / Canobbio',
    'Canton Ticino',
    'CH',
    ['real_codebase_lab', 'internship_pcto'],
    'https://www.cpttrevano.ti.ch',
  ],
  [
    'ch-sam',
    'SAM – Scuola d’Arti e Mestieri',
    'SAM Bellinzona',
    'Vocational',
    'Bellinzona',
    'Canton Ticino',
    'CH',
    ['real_codebase_lab', 'thesis_project'],
    'https://www.cptbellinzona.ti.ch',
  ],
  [
    'ch-supsi',
    'SUPSI – Scuola universitaria professionale della Svizzera italiana',
    'SUPSI DTI',
    'University',
    'Lugano-Viganello',
    'Canton Ticino',
    'CH',
    ['real_codebase_lab', 'thesis_project', 'internship_pcto'],
    'https://www.supsi.ch/dti',
  ],
  [
    'ch-usi',
    'USI – Università della Svizzera italiana',
    'USI Lugano',
    'University',
    'Lugano',
    'Canton Ticino',
    'CH',
    ['real_codebase_lab', 'thesis_project'],
    'https://www.inf.usi.ch',
  ],
];

export const SCHOOLS_DATA: EducationalInstitution[] = SCHOOL_SEEDS.map(
  createEducationalInstitution,
);

export const schools = SCHOOLS_DATA;
