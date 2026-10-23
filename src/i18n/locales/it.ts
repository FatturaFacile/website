import type { SiteTranslations } from '../types';

export const it: SiteTranslations = {
  common: {
    siteName: 'FatturaFacile',
    tagline: 'Fatture semplici, offline e cloud',
    nav: {
      product: 'Prodotto',
      whyUs: 'Perché Noi',
      featuresModules: 'Funzionalità & Moduli',
      offlineVsCloud: 'Offline vs Cloud',
      communitySocial: 'Community & Sociale',
      requestModulesFree: 'Richiedi Moduli (Gratis)',
      contribute: 'Come Collaborare',
      schoolsSocial: 'Scuole & Sociale',
      sponsors: 'Sponsor & Sostegno',
      networkSupport: 'Rete & Assistenza',
      localSupport: 'Supporto Locale (IT/CH)',
      faq: 'Domande Frequenti',
      about: 'Chi Siamo',
      story: 'La Nostra Storia',
      team: 'Team & Contributori',
      privacy: 'Privacy & Normativa',
    },
    actions: {
      downloadDesktop: 'Scarica Edizione Desktop (Gratis)',
      exploreCloud: 'Esplora Edizione Cloud',
      requestModule: 'Richiedi Modulo Gratuito',
      joinCommunity: 'Entra nel Gruppo Telegram',
      becomePartner: 'Diventa un Partner Locale',
      contactUs: 'Scrivici una Email',
      learnMore: 'Scopri di Più',
      understood: 'Ho Capito',
      filterAll: 'Tutti',
      backToHome: 'Torna alla Home',
    },
    footer: {
      description:
        'Il sistema di fatturazione leggero e indipendente, progettato specificamente per artigiani, micro-imprese e liberi professionisti in Italia e Svizzera. Architettura con database SQLite locale e opzione cloud auto-ospitata.',
      emailLabel: 'Contatto Email:',
      productColTitle: 'Prodotto',
      legalColTitle: 'Privacy & Normativa',
      marketsColTitle: 'Mercati Territoriali',
      italyMarketDesc:
        'Italia 🇮🇹: Compatibile con FatturaPA XML, tracciamento pagamenti e regimi forfettario e ordinario.',
      swissMarketDesc:
        'Svizzera 🇨🇭: Conforme a QR-Bill (standard SIX) e aliquote IVA federali (normale, ridotta, speciale).',
      copyright: 'Fattura Facile. Progetto aperto e senza costi di abbonamento.',
      telegramCommunity: 'Gruppo Telegram',
      githubRepo: 'Repository GitHub',
    },
    privacyModal: {
      title: 'Informativa sulla Privacy e Conformità Normativa',
      subtitle: 'Regolamento Generale UE (GDPR 2016/679) & Nuova LPD Svizzera (nLPA)',
      calloutTitle: 'Principio Architetturale di Base:',
      calloutDesc:
        "In Fattura Facile la privacy non è un adempimento burocratico a posteriori, ma il fondamento stesso dell'ingegneria del software.",
      section1Title: '1. Edizione Desktop Standalone (SQLite Locale)',
      section1Text: "Quando utilizzi l'edizione portatile su PC o chiavetta USB:",
      section1Bullets: [
        "Zero Trasmissione Dati: Registri di fatturazione, anagrafiche clienti, codici fiscali e conti bancari risiedono esclusivamente all'interno del file SQLite locale sul tuo supporto di memoria.",
        "Nessun Server Intermediario: Non raccogliamo telemetria, tracciamenti d'uso o dati analitici sulle fatture emesse.",
        "Sovranità Totale: L'utente aziendale agisce come unico Titolare del Trattamento. Nessun dato attraversa confini nazionali e non è necessario alcun accordo DPA esterno per l'uso locale.",
      ],
      section2Title: "2. Edizione Cloud Auto-Ospitata (Hosting gestito dall'utente)",
      section2Text: "Anche quando viene distribuita l'edizione multi-utente:",
      section2Bullets: [
        'Infrastruttura di Proprietà: Il sistema viene installato sul tuo server privato o VPS (Docker / PostgreSQL). Il team di Fattura Facile ha zero accesso al tuo database.',
        'Conformità Diretta: La conformità al GDPR e alla LPD resta interamente sotto il tuo controllo interno, escludendo rischi di data breach da terze parti fornitrici di servizi SaaS.',
        'Supporto Trasparente: Per segnalazioni e chiarimenti architetturali il contatto diretto è info@fatturafacile.eu.',
      ],
      section3Title: '3. Diritti degli Interessati',
      section3Text:
        "In accordo con gli articoli 15-22 del GDPR UE e gli articoli 25-29 della LPD svizzera, le persone fisiche conservano pieni diritti di accesso, rettifica, portabilità e cancellazione. Con l'edizione desktop mantieni già il possesso materiale e diretto dell'archivio grezzo.",
      closeBtn: 'Chiudi Informativa',
    },
  },
  home: {
    seo: {
      title: 'Fattura Facile | Fatturazione Semplice per Artigiani, PMI e Freelance',
      description:
        'Software di fatturazione gratuito e offline con SQLite o Cloud auto-ospitato. Conforme a FatturaPA SDI (Italia) e QR-Bill SIX (Svizzera). Senza abbonamento.',
      keywords:
        'fattura facile, software fatturazione artigiani, fatture offline, fattura usb portatile, sqlite fatture, fattura elettronica sdi, qr-bill svizzera, ticino fatture, gdpr, lpd svizzera, wpf billing, software fatturazione gratis',
    },
    hero: {
      badgeGeo: 'Adattato per Italia 🇮🇹 (FatturaPA / SDI) & Svizzera 🇨🇭 (QR-Bill SIX)',
      badgePrivacy: 'Conforme a Privacy UE (GDPR) e Svizzera (nLPA)',
      titlePart1: 'La fatturazione semplificata, veloce e',
      titlePart2: 'sotto il tuo completo controllo.',
      subtitle:
        'Basta con i software gestionali elefantiaci e complessi. Emetti fatture e preventivi in 30 secondi dal tuo PC o chiavetta USB con database SQLite locale, al 100% gratuito e senza canoni mensili, oppure ospita la tua istanza cloud privata per il tuo team.',
      ctaPrimary: 'Scarica Edizione Desktop (Gratis)',
      ctaSecondary: 'Esplora Edizione Cloud',
      badges: {
        zeroSubTitle: 'Zero Abbonamenti',
        zeroSubDesc: 'Versione desktop gratuita per sempre',
        portableTitle: 'Portatile su USB',
        portableDesc: 'Nessuna installazione di sistema',
        offlineTitle: '100% Offline',
        offlineDesc: 'Funziona senza connessione Internet',
        dataOwnershipTitle: 'Dati Solo Tuoi',
        dataOwnershipDesc: 'Nessun intermediario sui tuoi archivi',
      },
    },
    quickSummary: {
      eyebrow: 'Ingegneria Essenziale',
      heading: 'Uno strumento rapido costruito per chi lavora sul campo',
      lead: 'Elettricisti, idraulici, posatori, installatori e liberi professionisti emettono in media 10-20 fatture al mese. Non hanno bisogno della complessità di una multinazionale, ma di uno strumento sicuro per incassare puntualmente.',
    },
  },
  perche: {
    seo: {
      title: 'Perché Scegliere Fattura Facile | La Nostra Filosofia',
      description:
        'Scopri la filosofia contro i gestionali sovraccarichi: software leggero, preventivi in un minuto, fatture in un clic e zero vincoli di abbonamento.',
      keywords:
        'perche fattura facile, software gestionale leggero, alternativa erp costosi, preventivo rapido artigiani, fatturazione senza abbonamento',
    },
    eyebrow: 'La Filosofia di Fattura Facile',
    heading: 'Non un mostro da 500 bottoni, ma il compagno leggero di ogni giorno',
    lead: "Abbiamo eliminato l'eccesso di complessità dei gestionali aziendali tradizionali per concentrarci su ciò che serve veramente: semplicità operativa, conformità fiscale ed esecuzione istantanea.",
    pillars: [
      {
        title: 'Preventivo in 1 minuto, Fattura in 1 clic',
        description:
          'Componi le stime economiche direttamente sul posto di lavoro. Una volta confermate dal cliente, trasformale nella fattura definitiva con un solo clic mantenendo la corretta sequenza contabile.',
      },
      {
        title: 'Doppio Mercato Nativo: Italia 🇮🇹 e Svizzera 🇨🇭',
        description:
          "Supporto integrato sia per i tracciati XML di FatturaPA per l'Agenzia delle Entrate (SDI), sia per le polizze standard svizzere QR-Bill con codice di pagamento SIX e aliquote IVA aggiornate.",
      },
      {
        title: 'Backup Cifrato Portatile con 1 Clic',
        description:
          'Crea istantanee compresse e protette del tuo database su una seconda chiavetta USB, disco di rete NAS o cartella sincronizzata. I tuoi dati restano al sicuro anche cambiando computer.',
      },
    ],
    antiErpHeading: 'Basta canoni mensili obbligatori per emettere poche fatture',
    antiErpText:
      "I moderni servizi cloud ad abbonamento richiedono canoni ricorrenti crescenti, bloccando l'accesso ai tuoi stessi documenti storici in caso di mancato rinnovo. Con Fattura Facile il motore desktop è tuo, slegato da vincoli contrattuali e protetto da qualsiasi interruzione del servizio di rete.",
    quoteToInvoiceHeading: 'Flusso di lavoro immediato tra cantiere e ufficio',
    quoteToInvoiceText:
      "Dimentica doppie digitazioni o fogli di calcolo sparsi. L'archivio anagrafiche e le voci ricorrenti permettono di completare un documento contabile in meno di un minuto, lasciandoti il tempo di concentrarti sulla tua professione.",
  },
  versioni: {
    seo: {
      title: 'Offline Standalone vs Cloud Privato | Fattura Facile',
      description:
        'Confronto dettagliato tra la versione portatile su USB in C# WPF con SQLite e la versione cloud multi-utente in container Docker.',
      keywords:
        'confronto versioni fattura facile, fatture offline usb sqlite, cloud fatturazione privato docker, wpf sqlite gestionale',
    },
    eyebrow: 'Libertà di Architettura',
    heading: 'Due motori di calcolo, 100% gratuiti per tutti',
    lead: 'Nessun canone software da pagare al nostro team. Lavora in piena autonomia: in locale sulla tua scrivania oppure auto-ospitato sulla tua infrastruttura aziendale.',
    desktopCard: {
      tag: 'Standalone / USB',
      badge: '100% Gratuito',
      title: 'Fattura Facile Desktop',
      subtitle:
        'Ingegnerizzato in C#/.NET nativo (WPF) con database embedded SQLite a configurazione zero.',
      features: [
        'Zero installazione: cartella portatile avviabile da chiavetta USB o disco esterno.',
        'Privacy totale: nessun dato finanziario lascia il tuo computer (Privacy by Design).',
        'Operatività ovunque: utilizzabile in cantiere, in furgone o in officina senza Wi-Fi.',
        'Avvio istantaneo: tempi di boot immediati e salvataggio record in tempo reale.',
      ],
      limitation:
        'Singolo operatore simultaneo per singolo archivio (vincolo di lock del file SQLite locale).',
      cta: 'Scarica Archivio ZIP (Windows 10/11)',
    },
    cloudCard: {
      tag: 'Multi-Utente & Auto-Ospitato',
      badge: 'Software Gratuito (Hosting a tuo carico)',
      title: 'Fattura Facile Private Cloud',
      subtitle:
        "Distribuiscilo sul tuo server VPS, NAS d'ufficio o server locale con container Docker.",
      features: [
        'Accesso multi-utente simultaneo: collaboratori e studio contabile collegati contemporaneamente.',
        'Zero canoni di licenza per utente: nessun abbonamento calcolato sul numero di fatture.',
        'Sovranità giuridica: controllando direttamente i server, azzeri la dipendenza da terze parti.',
        "Migrazione facilitata: esporta e importa il file SQLite locale direttamente sull'istanza cloud.",
      ],
      migrationNote:
        "Richiede minime competenze sistemistiche per l'installazione del container Docker.",
      cta: 'Consulta la Guida su GitHub',
    },
    comparisonTable: {
      title: 'Matrice di Confronto Tecnico',
      headers: ['Caratteristica', 'Desktop Standalone', 'Private Cloud'],
      rows: [
        {
          feature: 'Licenza Software',
          desktop: 'Gratuita per sempre',
          cloud: 'Gratuita per sempre',
        },
        {
          feature: 'Costi di Abbonamento',
          desktop: 'Nessuno (€0 / CHF 0)',
          cloud: 'Nessuno (€0 / CHF 0)',
        },
        {
          feature: 'Connessione Internet',
          desktop: 'Non necessaria (100% offline)',
          cloud: 'Richiesta per accesso remoto',
        },
        {
          feature: 'Storage del Database',
          desktop: 'SQLite Locale (su disco o USB)',
          cloud: 'PostgreSQL / SQL Server',
        },
        {
          feature: 'Operatori Simultanei',
          desktop: '1 operatore per file',
          cloud: 'Multi-utente concorrente',
        },
        {
          feature: 'Compatibilità Fiscale',
          desktop: 'Italia (SDI) & Svizzera (QR-Bill)',
          cloud: 'Italia (SDI) & Svizzera (QR-Bill)',
        },
        {
          feature: 'Installazione di Sistema',
          desktop: 'Nessuna (eseguibile portatile)',
          cloud: 'Container Docker / VPS',
        },
      ],
    },
  },
  moduli: {
    seo: {
      title: 'Catalogo Moduli & Roadmap Pubblica | Fattura Facile',
      description:
        'Esplora i moduli disponibili di Fattura Facile per Italia e Svizzera. Consulta la roadmap trasparente e proponi nuovi moduli gratuiti.',
      keywords:
        'moduli fattura facile, roadmap software fatturazione, fatturapa modulo, qr-bill modulo, scadenziario pagamenti gratis',
    },
    eyebrow: 'Ecosistema Modulare & Trasparente',
    heading: 'Moduli pronti e sviluppo continuo guidato dalla community',
    lead: 'Fattura Facile include le funzioni essenziali per fatturare subito e cresce con le richieste reali della comunità. Qualsiasi nuovo modulo approvato viene sviluppato senza costi e distribuito a tutti nelle release ufficiali.',
    availableSectionTitle: 'Moduli Disponibili Subito',
    roadmapSectionTitle: 'Roadmap Trasparente di Sviluppo',
    roadmapStages: {
      inDevelopment: 'In Lavorazione Attiva',
      planned: 'Pianificati a Breve',
      backlog: 'Proposte della Community',
    },
    requestForm: {
      badge: 'Community-Driven & 100% Gratuito',
      title: 'Hai bisogno di un modulo mancante o di una funzione specifica?',
      description:
        'Raccontaci il flusso di lavoro della tua attività o le normative specifiche del tuo settore. Se la funzionalità è utile alla comunità, la programmeremo senza alcun costo e la integreremo nel gestionale pubblico.',
      nameLabel: 'Nome e Cognome / Ragione Sociale',
      emailLabel: 'Indirizzo Email di Contatto',
      marketLabel: 'Mercato di Riferimento',
      tradeLabel: 'Settore o Professione (es. Idraulico, Elettricista, Edilizia, Studio)',
      detailsLabel: 'Descrizione del Modulo Richiesto e Problema Operativo',
      submitBtn: 'Invia Proposta di Modulo Gratuito',
      disclaimer:
        'Rispondiamo direttamente con il team di sviluppo per definire le specifiche aperte.',
    },
  },
  team: {
    seo: {
      title: 'Il Team & I Contributori | Fattura Facile',
      description:
        'Conosci chi progetta e sviluppa Fattura Facile: architetti del software, consulenti fiscali e coordinatori tra Svizzera e Italia.',
      keywords:
        'team fattura facile, davide nava, sviluppatori net open source, consulenti fiscali svizzera italia, contributori',
    },
    eyebrow: 'Iniziativa Aperta e Senza Scopo di Lucro',
    heading: 'Le persone dietro al progetto Fattura Facile',
    lead: "Un gruppo di professionisti dell'ingegneria del software, della fiscalità e della formazione uniti dalla convinzione che gli strumenti di base per il lavoro non debbano essere ostaggio di costi ricorrenti.",
    regions: {
      switzerland: 'Svizzera 🇨🇭 (Canton Ticino & Grigioni)',
      italy: 'Italia 🇮🇹 (Lombardia & Altre Regioni)',
    },
    coreMaintainerBadge: 'Core Maintainer',
    joinCta: {
      title: 'Vuoi unirti al team o dare una mano?',
      description:
        'Cerchiamo programmatori C#/.NET, esperti di front-end Astro, consulenti fiscali per la revisione delle specifiche e traduttori per le lingue nazionali svizzere ed europee.',
      githubBtn: 'Contribuisci su GitHub',
      telegramBtn: 'Parla con Noi su Telegram',
    },
  },
  scuoleSociale: {
    seo: {
      title: 'Scuole, Formazione Didattica & Missione Sociale | Fattura Facile',
      description:
        "Progetti educativi per istituti tecnici e commerciali. Codice sorgente reale per imparare .NET e software gestionale gratuito per simulazioni d'impresa.",
      keywords:
        'scuole fattura facile, pcto informatica net, simulazione impresa commerciale gratis, software didattico fatturazione, sociale',
    },
    hero: {
      badge: 'Didattica & Impatto Sociale',
      heading: 'Portiamo il software gestionale reale nelle scuole e nel sociale',
      lead: 'Basta con esempi giocattolo e frammenti di codice decontestualizzati. Mettiamo a disposizione degli istituti una piattaforma reale, a norma di legge e con architettura professionale per formare i professionisti di domani.',
      ctaApply: 'Richiedi Collaborazione per il Tuo Istituto',
      ctaGithub: 'Esplora il Codice Didattico',
    },
    technicalTrack: {
      badge: 'Per Istituti Tecnici & Informatici (ITIS / CFP / Ingegneria)',
      title: "Imparare lo Sviluppo Software su un'Applicazione Reale",
      lead: 'Un archivio di codice moderno basato su principi Clean Code e SOLID, ideale per docenti e studenti che vogliono andare oltre la teoria.',
      bullets: [
        {
          title: 'Clean Architecture & Pattern CQRS',
          desc: 'Comprensione pratica della separazione tra dominio aziendale, comandi applicativi e interfacce utente in C# .NET.',
        },
        {
          title: 'Database Embedded & Transazioni ACID',
          desc: 'Gestione avanzata di SQLite locale, indicizzazioni, vincoli relazionali e migrazioni di schema senza complessità server.',
        },
        {
          title: 'Pipeline CI/CD e Standard di Qualità',
          desc: 'Pratica su workflow GitHub Actions con controlli rigorosi SonarQube, Qodana, analisi delle vulnerabilità e release automatizzate.',
        },
        {
          title: 'PCTO, Stage e Tesi di Diploma',
          desc: 'Possibilità per gli studenti di programmare moduli effettivi rilasciandoli pubblicamente a proprio nome nella distribuzione ufficiale.',
        },
      ],
    },
    commercialTrack: {
      badge: 'Per Istituti Economici & Commerciali (ITE / AFM / Fiduciarie)',
      title: "Simulazione d'Impresa e Pratica Contabile a Costo Zero",
      lead: 'Uno strumento operativo identico a quello impiegato dalle aziende reali sul territorio, privo di costi di licenza o limitazioni di postazione.',
      bullets: [
        {
          title: 'Emissione Reale di FatturaPA (SDI)',
          desc: "Esercitazioni pratiche sulla generazione e controllo dei tracciati XML per l'Agenzia delle Entrate italiana.",
        },
        {
          title: 'QR-Bill Svizzera Standard SIX',
          desc: 'Compilazione ed emissione di polizze con QR di pagamento conformi agli standard bancari svizzeri e calcolo IVA.',
        },
        {
          title: 'Laboratori Senza Canoni di Licenza',
          desc: "Installabile su tutte le aule informatiche dell'istituto o distribuibile su chiavette USB per compiti ed esercitazioni a casa.",
        },
      ],
    },
    socialMission: {
      badge: 'Inclusione & Accessibilità',
      title: 'La Nostra Missione Sociale ed Etica',
      description:
        "Riteniamo che le competenze digitali e la possibilità di avviare una micro-attività economica debbano essere accessibili a chiunque, senza barriere d'ingresso.",
      points: [
        'Sostegno concreto ad apprendisti, neodiplomati e giovani artigiani che aprono partita IVA.',
        'Abbattimento del divario tecnologico per le micro-imprese con budget limitati.',
        'Massima tutela della riservatezza dei dati patrimoniali e contabili delle persone.',
      ],
    },
    teacherContact: {
      title: 'Sei un docente, coordinatore o dirigente scolastico?',
      lead: 'Contattaci per concordare pacchetti didattici, linee guida e tracce per esercitazioni pratiche a supporto delle tue lezioni.',
      btnLabel: 'Richiedi Materiale Didattico',
    },
  },
  supportoLocale: {
    seo: {
      title: 'Rete Partner & Supporto Locale (IT/CH) | Fattura Facile',
      description:
        'Trova consulenti informatici, fiduciarie e tecnici di zona accreditati per installazioni, assistenza e formazione in Italia e Svizzera.',
      keywords:
        'supporto locale fattura facile, partner ticino gestionale, assistenza fatture varese como, consulenza qr-bill sdi',
    },
    eyebrow: 'Prossimità Territoriale',
    heading: 'Consulenti, tecnici e fiduciarie al tuo fianco sul territorio',
    lead: 'Il software è completamente gratuito. Se necessiti di configurazioni personalizzate sul posto, integrazioni di rete o formazione per il tuo personale, puoi fare affidamento sui professionisti accreditati della tua zona.',
    regions: {
      switzerland: 'Svizzera 🇨🇭 (Canton Ticino & Grigioni)',
      italy: 'Italia 🇮🇹 (Lombardia, Piemonte & Altre Regioni)',
    },
    partnerForm: {
      badge: 'Rete Professionale Aperta',
      title: 'Candidati come Partner o Consulente di Zona',
      lead: "Sei un tecnico informatico, un'agenzia IT o uno studio contabile? Entra gratuitamente nella directory dei partner di Fattura Facile e offri i tuoi servizi di supporto agli utenti del tuo territorio.",
      companyLabel: 'Ragione Sociale o Nome Studio',
      contactLabel: 'Persona di Riferimento',
      emailLabel: 'Email Aziendale',
      phoneLabel: 'Telefono / Cellulare',
      countryLabel: 'Nazione (Italia o Svizzera)',
      regionLabel: 'Regione o Cantone di Competenza',
      servicesLabel:
        'Servizi Offerti (Installazione locale, Server/Cloud, Backup, Formazione, Fiscale)',
      notesLabel: "Breve Presentazione dell'Esperienza sul Campo",
      submitBtn: 'Invia Candidatura Partner Gratuita',
    },
  },
  faq: {
    seo: {
      title: 'Domande Frequenti (FAQ) | Fattura Facile',
      description:
        'Risposte dettagliate su funzionamento offline, sicurezza SQLite, FatturaPA, QR-Bill svizzera, modelli gratuiti e supporto.',
      keywords:
        'faq fattura facile, domande frequenti fatturazione, sicurezza sqlite fatture, supporto gratuito fatturapa',
    },
    eyebrow: 'Risposte & Chiarezza',
    heading: 'Domande Frequenti su Fattura Facile',
    lead: "Tutto quello che c'è da sapere sulla tecnologia, sulla conformità fiscale e sul modello di sviluppo aperto del progetto.",
    searchPlaceholder: 'Cerca una risposta (es. USB, backup, SDI, QR-Bill)...',
    categories: {
      general: 'Generali & Filosofia',
      technical: 'Architettura & Dati',
      compliance: 'Normativa & Fisco',
      partners: 'Supporto & Community',
    },
    items: [
      {
        id: 'faq-usb',
        category: 'technical',
        question:
          "Come funziona l'edizione su chiavetta USB? È davvero utilizzabile senza installazione?",
        answer:
          "Sì. È sufficiente scaricare l'archivio compresso (.ZIP), estrarre il contenuto su qualsiasi chiavetta USB o disco esterno e fare doppio clic sull'eseguibile principale. Il software non modifica il registro di sistema di Windows e conserva tutti i documenti nel database SQLite contenuto nella cartella stessa.",
      },
      {
        id: 'faq-backup-loss',
        category: 'technical',
        question: 'Cosa succede se perdo la chiavetta USB o il computer si guasta?',
        answer:
          'Poiché i dati restano esclusivamente locali a tutela della riservatezza, le copie di sicurezza sono fondamentali. Fattura Facile include la funzione integrata "Crea Backup Cifrato" che genera un singolo archivio protetto da copiare su un disco esterno, NAS o archivio cloud sincronizzato.',
      },
      {
        id: 'faq-compliance-it-ch',
        category: 'compliance',
        question: 'Come vengono gestite la Fattura Elettronica italiana e la QR-Bill svizzera?',
        answer:
          "Per l'Italia l'applicazione genera file XML certificati conformi alle specifiche tecniche di FatturaPA per il Sistema di Interscambio (SDI), pronti per l'invio via PEC o codice destinatario. Per la Svizzera genera ricevute conformi agli standard SIX con codice QR di pagamento verificato e calcolo corretto delle aliquote IVA federali.",
      },
      {
        id: 'faq-free-model',
        category: 'general',
        question:
          'Come fa il software ad essere gratuito? Ci sono costi nascosti o limitazioni di fatture?',
        answer:
          "Non ci sono costi nascosti, versioni demo a tempo o limiti al numero di fatture emettibili. Il progetto nasce e viene mantenuto da professionisti del settore con spirito open-source e no-profit per offrire uno strumento etico senza barriere d'accesso.",
      },
      {
        id: 'faq-custom-requests',
        category: 'partners',
        question: 'Come posso richiedere una nuova funzionalità specifica per il mio settore?',
        answer:
          "Puoi inviare una proposta tramite l'apposito modulo sul sito, scriverci a info@fatturafacile.eu o parlarne direttamente nel gruppo Telegram. Se la funzione richiesta risponde a un bisogno concreto, la svilupperemo gratuitamente integrandola nelle versioni pubbliche successive.",
      },
      {
        id: 'faq-support-types',
        category: 'partners',
        question: "Qual è la differenza tra l'assistenza della community e il supporto locale?",
        answer:
          "L'assistenza della community (tramite forum, GitHub e Telegram) è sempre gratuita ed è focalizzata sull'uso del programma e sulla correzione di eventuali bug. Il supporto locale è fornito da professionisti indipendenti accreditati (consulenti IT, fiduciarie) per servizi personalizzati sul posto come configurazioni di rete, backup complessi o formazione del personale.",
      },
    ],
  },
  sponsor: {
    seo: {
      title: 'Sponsor & Sostegno al Progetto | Fattura Facile',
      description:
        'Sostieni lo sviluppo indipendente di Fattura Facile. Scopri la destinazione trasparente dei fondi per certificati di firma e infrastruttura.',
      keywords:
        'sponsor fattura facile, donazioni open source, certificato firma digitale windows, sostenere software libero',
    },
    eyebrow: 'Trasparenza & Sostenibilità',
    heading: 'Aiutaci a mantenere il software libero, indipendente e sicuro',
    lead: 'Fattura Facile non vende dati e non addebita canoni di utilizzo. Le donazioni e le sponsorizzazioni coprono esclusivamente i costi tecnici vivi per garantire continuità e sicurezza al progetto.',
    transparencyTitle: 'Trasparenza Totale sui Costi Tecnici',
    transparencyText:
      'Ogni contributo economico raccolto tramite GitHub Sponsors o piattaforme di donazione è destinato a specifiche spese documentabili:',
    costsList: [
      {
        item: 'Certificato di Firma Digitale del Codice (Code Signing)',
        description:
          'Necessario per evitare i messaggi di avviso di Windows SmartScreen durante il primo avvio del software sui PC degli utenti.',
      },
      {
        item: 'Infrastruttura di Test e Macchine CI/CD',
        description:
          "Server e macchine virtuali per l'esecuzione continuativa delle suite di test automatici, controlli di sicurezza SonarQube e rilasci automatizzati.",
      },
      {
        item: 'Mantenimento Domini e Risorse di Documentazione',
        description:
          'Costi di registrazione dei domini ufficiali (.eu, .ch) e gestione degli ambienti di documentazione per scuole e utenti.',
      },
    ],
    tiers: {
      individualTitle: 'Sostenitore Individuale',
      individualDesc:
        'Un caffè simbolico per supportare le ore di programmazione dedicate allo sviluppo aperto del gestionale.',
      corporateTitle: 'Azienda Sponsor',
      corporateDesc:
        'Inserimento del logo aziendale con link diretto nella home page, nel footer e nel repository ufficiale di GitHub.',
      technicalTitle: 'Partner Tecnico',
      technicalDesc:
        'Fornitura diretta di servizi infrastrutturali, connettività, certificati digitali o licenze software di sviluppo.',
    },
    actions: {
      kofiBtn: 'Offri un Supporto su Ko-fi',
      githubSponsorsBtn: 'Diventa Sponsor su GitHub',
    },
  },
  storia: {
    seo: {
      title: 'La Nostra Storia & Genesi del Progetto | Fattura Facile',
      description:
        'La nascita di Fattura Facile: dalle difficoltà degli artigiani con i gestionali complessi alla creazione di un software indipendente e no-lock-in.',
      keywords:
        'storia fattura facile, nascita software fatture, alternativa software abbonamento, software etico ticino lombardia',
    },
    eyebrow: 'Radici & Visione',
    heading: "Dall'ascolto del lavoro sul campo alla libertà del software aperto",
    lead: 'Fattura Facile non è nata in una sala riunioni per generare ricavi ricorrenti, ma osservando le difficoltà quotidiane di idraulici, elettricisti e artigiani alle prese con software troppo lenti, complessi e costosi.',
    problemTitle: 'Il Problema dei Gestionali Elefantiaci',
    problemText:
      'Negli ultimi anni il mercato del software aziendale ha imposto una transizione forzata verso modelli SaaS ad abbonamento mensile continuo. Per chi gestisce grandi magazzini o catene logistiche questo modello ha senso, ma per i lavoratori autonomi e le piccole realtà locali ha comportato costi sproporzionati, interfacce sature di pulsanti inutilizzati e la costante preoccupazione di non poter accedere ai propri dati storici in assenza di connessione o in caso di recesso.',
    philosophyTitle: 'I Quattro Pilastri Fondamentali',
    philosophyBullets: [
      {
        title: 'Semplicità Radicale',
        desc: 'Un flusso chiaro che va dritto al punto: anagrafica, descrizione del lavoro, calcolo imposte e stampa o invio in formato standard.',
      },
      {
        title: 'Sovranità del Dato Personale',
        desc: 'Il database è un singolo file sul tuo supporto. Nessuna profilazione commerciale, zero telemetria e nessun dato archiviato su server terzi non verificati.',
      },
      {
        title: 'Adattamento Transfrontaliero',
        desc: 'Progettato fin dalle prime linee di codice tenendo conto della realtà di confine tra Italia e Svizzera, con pieno supporto per SDI e QR-Bill.',
      },
      {
        title: 'Restituzione alla Comunità',
        desc: 'Il codice e il programma restano gratuiti per permettere anche a chi muove i primi passi nel mondo del lavoro di partire senza debiti operativi.',
      },
    ],
    timeline: [
      {
        year: '2025',
        title: 'La Prima Bozza sul Campo',
        desc: 'Sviluppo del primo prototipo portatile in C# con SQLite per risolvere le necessità di compilazione rapida delle fatture in mobilità su chiavetta USB.',
      },
      {
        year: '2026',
        title: 'Integrazione Transfrontaliera Completa',
        desc: 'Adozione dei moduli ufficiali per la FatturaPA elettronica italiana e lo standard di pagamento svizzero QR-Bill SIX con aliquote IVA dedicate.',
      },
      {
        year: '2026',
        title: 'Rilascio Aperto, Portale Astro e Progetto Scuole',
        desc: 'Apertura pubblica del repository su GitHub, avvio della collaborazione didattica con gli istituti professionali e lancio della rete di partner locali sul territorio.',
      },
    ],
  },
  privacy: {
    seo: {
      title: 'Informativa sulla Privacy & Conformità (GDPR & nLPD) | Fattura Facile',
      description:
        'Informativa completa sul trattamento dei dati personali: conformità GDPR UE 2016/679, nLPD Svizzera e architettura Privacy by Design con SQLite locale.',
      keywords:
        'privacy fattura facile, gdpr software fatturazione, nlpd svizzera fatture, sqlite privacy by design, zero telemetria fatturazione',
    },
    eyebrow: 'Quadro Normativo & Tutela dei Dati',
    headingPart1: 'Informativa Privacy &',
    headingPart2: 'Conformità Normativa',
    subtitle:
      'GDPR UE (Regolamento 2016/679) e nuova Legge Federale sulla Protezione dei Dati Svizzera (nLPD).',
    calloutTitle: 'Principio Ingegneristico Fondamentale:',
    calloutText:
      "In Fattura Facile, la riservatezza delle informazioni contabili non è un vincolo burocratico ma il pilastro progettuale su cui poggia l'intera architettura software.",
    section1Title: '1. Architettura Desktop Standalone (SQLite Locale)',
    section1Intro:
      "Quando si utilizza l'applicazione portabile Fattura Facile Desktop (distribuita come archivio eseguibile senza installatore di sistema):",
    section1Bullets: [
      {
        title: "Zero Trasmissione Verso l'Esterno",
        desc: "Tutti i dati anagrafici, fatture, importi, aliquote IVA, coordinate bancarie IBAN e codici fiscali risiedono esclusivamente all'interno del database SQLite salvato nella medesima cartella dell'eseguibile o sulla chiavetta USB.",
      },
      {
        title: 'Assenza di Telemetria e Tracciamento',
        desc: 'Il software non include tracker comportamentali, analytics in background o chiamate API verso server di Fattura Facile.',
      },
      {
        title: 'Sovranità del Titolare',
        desc: "L'utilizzatore del software agisce come unico ed esclusivo Titolare del Trattamento (Data Controller) ai sensi dell'Art. 4 del GDPR. Non sussiste alcun trasferimento transfrontaliero e non è necessario alcun accordo per il trattamento dei dati (DPA) con Fattura Facile.",
      },
    ],
    section2Title: '2. Edizione Cloud Self-Hosted (Infrastruttura del Cliente)',
    section2Intro:
      'Quando si sceglie di implementare la versione multi-utente su server locale o Virtual Private Server (VPS):',
    section2Bullets: [
      {
        title: 'Infrastruttura di Proprietà Diretta',
        desc: "I container Docker e i database relazionali (PostgreSQL o Microsoft SQL Server) sono installati sull'hardware o sull'abbonamento cloud di competenza diretta del cliente.",
      },
      {
        title: 'Zero Accesso ai Dati',
        desc: "Gli sviluppatori di Fattura Facile non possiedono chiavi d'accesso, credenziali di root o visibilità sui database del cliente.",
      },
      {
        title: 'Isolamento Legale',
        desc: "La conformità alle misure di sicurezza tecniche e organizzative (Art. 32 GDPR) e alle disposizioni della nLPD svizzera resta interamente sotto il controllo della governance IT dell'azienda utilizzatrice.",
      },
    ],
    section3Title: '3. Diritti degli Interessati & Conservazione Documentale',
    section3Intro:
      'In ottemperanza agli articoli 15-22 del Regolamento UE 2016/679 (GDPR) e agli articoli 25-29 della Legge federale sulla protezione dei dati (nLPD):',
    section3Bullets: [
      {
        title: 'Diritto di Accesso e Portabilità',
        desc: "Poiché il database è in formato standard SQLite, il titolare può estrarre o esportare l'intero archivio documentale in formato aperto senza dipendere da strumenti proprietari di decodifica.",
      },
      {
        title: 'Rettifica e Cancellazione',
        desc: "Ogni record di cliente o bozza di preventivo può essere cancellato o rettificato direttamente dall'interfaccia utente in tempo reale.",
      },
      {
        title: 'Conservazione Sostitutiva e Fiscale',
        desc: "La conservazione a norma delle fatture elettroniche XML trasmesse a SDI (Italia) deve avvenire tramite i canali ufficiali dell'Agenzia delle Entrate o conservatori accreditati, conformemente alle scadenze di legge decennali.",
      },
    ],
    section4Title: '4. Contatti e Responsabilità',
    section4Text:
      "Per qualsiasi domanda relativa all'architettura di sicurezza o per proporre miglioramenti tecnici alla tutela della privacy:",
    contactLabel: 'Email:',
  },
};
