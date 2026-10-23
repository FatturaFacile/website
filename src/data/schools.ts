export type CountryCode = 'IT' | 'CH';
export type SchoolType = 'Technical' | 'Commercial' | 'Vocational' | 'University';
export type CollaborationProgram =
  | 'real_codebase_lab' // Studio e sviluppo su codice reale .NET/Clean Architecture
  | 'enterprise_simulation' // Esercitazioni pratiche di fatturazione e contabilità per studenti
  | 'internship_pcto' // Percorsi per le competenze trasversali e orientamento / Stage
  | 'thesis_project'; // Tesi di laurea o progetti finali di diploma open-source

export interface SchoolLocation {
  city: string;
  regionOrCanton: string; // es. "Ticino", "Lombardia", "Piemonte"
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

export const SCHOOL_TYPE_LABELS: Record<SchoolType, { label: string; badgeClass: string }> = {
  Technical: {
    label: 'Istituto Tecnico / Informatico',
    badgeClass:
      'bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800',
  },
  Commercial: {
    label: 'Istituto Economico / Commerciale',
    badgeClass:
      'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800',
  },
  Vocational: {
    label: 'Centro di Formazione Professionale',
    badgeClass:
      'bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800',
  },
  University: {
    label: 'Università / Scuola Universitaria Professionale',
    badgeClass:
      'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800',
  },
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

export const SCHOOLS_DATA: EducationalInstitution[] = [
  // --- Svizzera 🇨🇭 (Ticino) ---
  {
    id: 'ch-cpt-trevano',
    name: 'Centro Professionale Tecnico (CPT) Trevano',
    type: 'Technical',
    location: {
      city: 'Lugano / Canobbio',
      regionOrCanton: 'Ticino',
      country: 'CH',
    },
    programs: ['real_codebase_lab', 'internship_pcto'],
    studentsInvolvedCount: 35,
    contact: {
      department: 'Sezione Informatica Applicata',
      contactEmail: 'scuole@fatturafacile.eu',
      website: 'https://cpttrevano.ti.ch',
    },
    description:
      "Laboratori didattici per apprendisti informatici e sviluppatori di applicazioni focalizzati sull'adozione di Clean Architecture in C# e persistenza locale con SQLite.",
  },
  {
    id: 'ch-scc-bellinzona',
    name: 'Scuola Cantonale di Commercio (SCC)',
    type: 'Commercial',
    location: {
      city: 'Bellinzona',
      regionOrCanton: 'Ticino',
      country: 'CH',
    },
    programs: ['enterprise_simulation'],
    studentsInvolvedCount: 60,
    contact: {
      department: 'Dipartimento Economia Aziendale & Pratica Commerciale',
      contactEmail: 'scuole@fatturafacile.eu',
      website: 'https://sccbellinzona.ti.ch',
    },
    description:
      'Utilizzo del software nelle aule di simulazione contabile per addestrare gli studenti alla compilazione di preventivi, fatture e gestione delle polizze QR-Bill standard SIX.',
  },

  // --- Italia 🇮🇹 (Lombardia) ---
  {
    id: 'it-itis-varese',
    name: 'ITIS Informatica & Telecomunicazioni',
    type: 'Technical',
    location: {
      city: 'Varese',
      regionOrCanton: 'Lombardia',
      country: 'IT',
    },
    programs: ['real_codebase_lab', 'thesis_project'],
    studentsInvolvedCount: 45,
    contact: {
      department: 'Dipartimento di Informatica & Sistemi',
      contactEmail: 'scuole@fatturafacile.eu',
      website: 'https://itisvarese.edu.it',
    },
    description:
      "Studio dell'architettura a livelli, implementazione di parser XML FatturaPA per l'Agenzia delle Entrate e sviluppo di pipeline CI/CD con controlli di qualità del codice SonarQube.",
  },
  {
    id: 'it-ite-como',
    name: 'Istituto Tecnico Economico (ITE)',
    type: 'Commercial',
    location: {
      city: 'Como',
      regionOrCanton: 'Lombardia',
      country: 'IT',
    },
    programs: ['enterprise_simulation', 'internship_pcto'],
    studentsInvolvedCount: 50,
    contact: {
      department: 'Indirizzo Amministrazione, Finanza e Marketing (AFM)',
      contactEmail: 'scuole@fatturafacile.eu',
      website: 'https://itecomo.edu.it',
    },
    description:
      "Esercitazioni guidate di simulazione d'impresa per micro-aziende e artigiani, gestione dei regimi fiscali italiani (forfettario vs ordinario) e verifica scadenze.",
  },
];

export const schools = SCHOOLS_DATA;
