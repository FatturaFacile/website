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
  department: string;
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
  description: string;
  invitedTarget?: boolean;
}

const DEFAULT_SCHOOL_CONTACT_EMAIL = 'scuole@fatturafacile.eu';

function createSchoolBadge(
  label: string,
  badgeClass: string,
): { label: string; badgeClass: string } {
  return { label, badgeClass };
}

export const SCHOOL_TYPE_LABELS: Record<SchoolType, { label: string; badgeClass: string }> = {
  Technical: createSchoolBadge(
    'Istituto Tecnico / Informatico',
    'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800',
  ),
  Commercial: createSchoolBadge(
    'Istituto Economico / Commerciale',
    'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
  ),
  Vocational: createSchoolBadge(
    'Centro di Formazione Professionale',
    'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800',
  ),
  University: createSchoolBadge(
    'Università / Scuola Universitaria Professionale',
    'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800',
  ),
};

export const COLLABORATION_PROGRAM_LABELS: Record<
  CollaborationProgram,
  { label: string; summary: string }
> = {
  real_codebase_lab: {
    label: 'Laboratorio Codice Reale',
    summary:
      'Didattica applicata su C# .NET, Clean Architecture, SQLite e CI/CD con standard professionali.',
  },
  enterprise_simulation: {
    label: 'Simulazione Gestionale Gratuita',
    summary: "Esercitazioni di emissione fatture, SdI e QR-Bill a costo zero per l'istituto.",
  },
  internship_pcto: {
    label: 'Percorsi Stage & PCTO',
    summary: 'Esperienze formative curriculari nello sviluppo software open source.',
  },
  thesis_project: {
    label: 'Progetti di Tesi & Diploma',
    summary:
      'Sviluppo di moduli software reali con pubblicazione a proprio nome nella release ufficiale.',
  },
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
  department: string,
  website: string,
  description: string,
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
  department,
  website,
  description,
]: SchoolSeedTuple): EducationalInstitution {
  return {
    id,
    name,
    shortName,
    type,
    location: { city, regionOrCanton, country },
    programs,
    contact: {
      department,
      contactEmail: DEFAULT_SCHOOL_CONTACT_EMAIL,
      website,
    },
    description,
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
    'Sezione Informatica Applicata & Elettronica',
    'https://www.cpttrevano.ti.ch',
    'Laboratori didattici per apprendisti informatici e sviluppatori di applicazioni: adozione di Clean Architecture in C#, SQLite embedded e test automatici.',
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
    'Settore Tecnologico & Professioni Informatiche',
    'https://www.sambellinzona.ti.ch',
    'Progetti pratici e lavori di diploma sul ciclo di vita del software gestionale, usabilità per artigiani e persistenza locale dei dati.',
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
    'Dipartimento tecnologie innovative (DTI)',
    'https://www.supsi.ch/dti',
    'Opportunità per tesi di bachelor e master, ingegneria del software desktop e architetture offline-first a supporto dell’economia locale.',
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
    'Facoltà di scienze informatiche',
    'https://www.usi.ch/it/facolta-scienze-informatiche',
    'Ricerca applicata e contributi open source su privacy by design, integrità crittografica dei backup e conformità dei formati di fatturazione.',
  ],
];

export const SCHOOLS_DATA: EducationalInstitution[] = SCHOOL_SEEDS.map(
  createEducationalInstitution,
);

export const schools = SCHOOLS_DATA;
