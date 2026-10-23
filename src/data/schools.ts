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
  type: SchoolType;
  location: SchoolLocation;
  programs: CollaborationProgram[];
  studentsInvolvedCount?: number;
  contact: SchoolContact;
  description: string;
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
    summary: "Esercitazioni di emissione fatture, SDI e QR-Bill a costo zero per l'istituto.",
  },
  internship_pcto: {
    label: 'Percorsi PCTO / Stage',
    summary: 'Esperienze formative curriculari nello sviluppo software open-source.',
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
  type: SchoolType,
  city: string,
  regionOrCanton: string,
  country: CountryCode,
  programs: CollaborationProgram[],
  studentsInvolvedCount: number,
  department: string,
  website: string,
  description: string,
];

function createEducationalInstitution([
  id,
  name,
  type,
  city,
  regionOrCanton,
  country,
  programs,
  studentsInvolvedCount,
  department,
  website,
  description,
]: SchoolSeedTuple): EducationalInstitution {
  return {
    id,
    name,
    type,
    location: { city, regionOrCanton, country },
    programs,
    studentsInvolvedCount,
    contact: {
      department,
      contactEmail: DEFAULT_SCHOOL_CONTACT_EMAIL,
      website,
    },
    description,
  };
}

const SCHOOL_SEEDS: readonly SchoolSeedTuple[] = [
  [
    'ch-cpt-trevano',
    'Centro Professionale Tecnico (CPT) Trevano',
    'Technical',
    'Lugano / Canobbio',
    'Ticino',
    'CH',
    ['real_codebase_lab', 'internship_pcto'],
    35,
    'Sezione Informatica Applicata',
    'https://cpttrevano.ti.ch',
    "Laboratori didattici per apprendisti informatici e sviluppatori di applicazioni focalizzati sull'adozione di Clean Architecture in C# e persistenza locale con SQLite.",
  ],
  [
    'ch-scc-bellinzona',
    'Scuola Cantonale di Commercio (SCC)',
    'Commercial',
    'Bellinzona',
    'Ticino',
    'CH',
    ['enterprise_simulation'],
    60,
    'Dipartimento Economia Aziendale & Pratica Commerciale',
    'https://sccbellinzona.ti.ch',
    'Utilizzo del software nelle aule di simulazione contabile per addestrare gli studenti alla compilazione di preventivi, fatture e gestione delle polizze QR-Bill standard SIX.',
  ],
  [
    'it-itis-varese',
    'ITIS Informatica & Telecomunicazioni',
    'Technical',
    'Varese',
    'Lombardia',
    'IT',
    ['real_codebase_lab', 'thesis_project'],
    45,
    'Dipartimento di Informatica & Sistemi',
    'https://itisvarese.edu.it',
    "Studio dell'architettura a livelli, implementazione di parser XML FatturaPA per l'Agenzia delle Entrate e sviluppo di pipeline CI/CD con controlli di qualità del codice SonarQube.",
  ],
  [
    'it-ite-como',
    'Istituto Tecnico Economico (ITE)',
    'Commercial',
    'Como',
    'Lombardia',
    'IT',
    ['enterprise_simulation', 'internship_pcto'],
    50,
    'Indirizzo Amministrazione, Finanza e Marketing (AFM)',
    'https://itecomo.edu.it',
    "Esercitazioni guidate di simulazione d'impresa per micro-aziende e artigiani, gestione dei regimi fiscali italiani (forfettario vs ordinario) e verifica scadenze.",
  ],
];

export const SCHOOLS_DATA: EducationalInstitution[] = SCHOOL_SEEDS.map(
  createEducationalInstitution,
);

export const schools = SCHOOLS_DATA;
