import type { SiteTranslations } from '../types';

export const de: SiteTranslations = {
  common: {
    siteName: 'FatturaFacile',
    tagline: 'Einfache Rechnungen, offline und in der Cloud',
    nav: {
      product: 'Produkt',
      whyUs: 'Warum Wir',
      featuresModules: 'Funktionen & Module',
      offlineVsCloud: 'Offline vs. Cloud',
      communitySocial: 'Community & Soziales',
      requestModulesFree: 'Module Anfordern (Kostenlos)',
      contribute: 'Mitwirken',
      schoolsSocial: 'Schulen & Bildung',
      sponsors: 'Sponsoren & Förderung',
      networkSupport: 'Netzwerk & Support',
      localSupport: 'Lokaler Support (IT/CH)',
      faq: 'FAQ',
      about: 'Über Uns',
      story: 'Unsere Geschichte',
      team: 'Team & Mitwirkende',
      privacy: 'Datenschutz & Rechtliches',
    },
    actions: {
      downloadDesktop: 'Desktop-Version Herunterladen (Kostenlos)',
      exploreCloud: 'Cloud-Version Entdecken',
      requestModule: 'Kostenloses Modul Vorschlagen',
      joinCommunity: 'Telegram-Gruppe Beitreten',
      becomePartner: 'Lokaler Partner Werden',
      contactUs: 'E-Mail Senden',
      learnMore: 'Mehr Erfahren',
      understood: 'Verstanden',
      filterAll: 'Alle',
      backToHome: 'Zurück zur Startseite',
    },
    footer: {
      description:
        'Das schlanke und unabhängige Fakturierungssystem, speziell entwickelt für Handwerker, Kleinbetriebe und Freiberufler in Italien und der Schweiz. Architektur mit lokaler SQLite-Datenbank und selbstgehosteter Cloud-Option.',
      emailLabel: 'E-Mail-Kontakt:',
      productColTitle: 'Produkt',
      legalColTitle: 'Datenschutz & Rechtliches',
      marketsColTitle: 'Regionale Märkte',
      italyMarketDesc:
        'Italien 🇮🇹: Kompatibel mit FatturaPA XML, Zahlungsnachverfolgung sowie Pauschal- und Standardsystemen.',
      swissMarketDesc:
        'Schweiz 🇨🇭: Konform mit der QR-Rechnung (SIX-Standard) und den Eidgenössischen MWST-Sätzen (Normal-, Reduziert- und Sondersatz).',
      copyright: 'Fattura Facile. Offenes Projekt ohne Abonnementgebühren.',
      telegramCommunity: 'Telegram-Community',
      githubRepo: 'GitHub-Repository',
    },
    privacyModal: {
      title: 'Datenschutzerklärung und Gesetzliche Konformität',
      subtitle: 'EU-DSGVO (Verordnung 2016/679) & Neues Schweizer Datenschutzgesetz (DSG)',
      calloutTitle: 'Architektonisches Grundprinzip:',
      calloutDesc:
        'Bei Fattura Facile ist Datenschutz keine nachträgliche bürokratische Pflicht, sondern das eigentliche Fundament unserer Softwarearchitektur.',
      section1Title: '1. Standalone Desktop-Version (Lokales SQLite)',
      section1Text: 'Wenn Sie die portable Version auf dem PC oder USB-Stick verwenden:',
      section1Bullets: [
        'Keine Datenübertragung: Rechnungsdaten, Kundenstämme, Steuernummern und Bankverbindungen verbleiben ausschliesslich in der lokalen SQLite-Datei auf Ihrem Speichermedium.',
        'Keine zwischengeschalteten Server: Wir erfassen weder Telemetriedaten, Nutzungsprofile noch statistische Auswertungen Ihrer ausgestellten Rechnungen.',
        'Vollständige Datensouveränität: Das Unternehmen agiert als alleiniger Verantwortlicher für die Datenverarbeitung. Keine Daten überschreiten Landesgrenzen, und für die lokale Nutzung ist kein Auftragsverarbeitungsvertrag (AVV) erforderlich.',
      ],
      section2Title: '2. Selbstgehostete Cloud-Version (Hosting durch den Nutzer)',
      section2Text: 'Auch beim Einsatz der vernetzten Mehrbenutzer-Edition gilt:',
      section2Bullets: [
        'Eigene Infrastruktur: Das System wird auf Ihrem privaten Server oder VPS (Docker / PostgreSQL) installiert. Das Team von Fattura Facile hat keinerlei Zugriff auf Ihre Datenbank.',
        'Direkte Compliance: Die Einhaltung von DSGVO und DSG bleibt vollständig unter Ihrer internen Kontrolle, wodurch Sicherheitsrisiken durch Drittanbieter-SaaS-Dienste ausgeschlossen sind.',
        'Direkter Kontakt: Für technische Fragen und architektonische Details steht Ihnen unser Team unter info@fatturafacile.eu zur Verfügung.',
      ],
      section3Title: '3. Betroffenenrechte',
      section3Text:
        'Gemäss den Artikeln 15–22 der EU-DSGVO und den Artikeln 25–29 des Schweizer DSG behalten natürliche Personen sämtliche Rechte auf Auskunft, Berichtigung, Datenübertragbarkeit und Löschung. Bei der Desktop-Version besitzen Sie bereits den direkten physischen Zugriff auf die Rohdatenbank.',
      closeBtn: 'Hinweis Schliessen',
    },
  },
  home: {
    seo: {
      title: 'Fattura Facile | Einfache Rechnungsstellung für Handwerker & KMU',
      description:
        'Kostenlose und offlinefähige Rechnungssoftware mit SQLite oder selbstgehosteter Cloud. Konform mit italienischer FatturaPA SDI und Schweizer QR-Rechnung SIX. Ohne Abo.',
      keywords:
        'fattura facile, rechnungssoftware handwerker, offline rechnung, usb rechnung portabel, sqlite rechnungen, elektronische rechnung sdi, qr-rechnung schweiz, rechnungsstellung tessin, dsgvo, dsg schweiz, wpf billing, kostenlose rechnungssoftware',
    },
    hero: {
      badgeGeo: 'Massgeschneidert für Italien 🇮🇹 (FatturaPA / SDI) & Schweiz 🇨🇭 (QR-Rechnung SIX)',
      badgePrivacy: 'Datenschutzkonform: EU-DSGVO & Schweizer DSG',
      titlePart1: 'Rechnungsstellung einfach, schnell und',
      titlePart2: 'unter Ihrer vollständigen Kontrolle.',
      subtitle:
        'Schluss mit überdimensionierter und langsamer ERP-Software. Erstellen Sie Offerten und Rechnungen in 30 Sekunden direkt von Ihrem PC oder USB-Stick mit lokaler SQLite-Datenbank – 100 % kostenlos und ohne monatliche Abos, oder betreiben Sie Ihre eigene private Mehrbenutzer-Cloud.',
      ctaPrimary: 'Desktop-Version Herunterladen (Kostenlos)',
      ctaSecondary: 'Cloud-Version Entdecken',
      badges: {
        zeroSubTitle: 'Kein Abonnement',
        zeroSubDesc: 'Desktop-Version für immer kostenlos',
        portableTitle: 'Portabel auf USB',
        portableDesc: 'Keine Systeminstallation erforderlich',
        offlineTitle: '100 % Offline',
        offlineDesc: 'Funktioniert ohne Internetverbindung',
        dataOwnershipTitle: 'Ihre Daten Gehören Ihnen',
        dataOwnershipDesc: 'Keine zwischengeschalteten Server',
      },
    },
    quickSummary: {
      eyebrow: 'Schlanke Softwaretechnik',
      heading: 'Ein schnelles Werkzeug, entwickelt für den praktischen Einsatz vor Ort',
      lead: 'Elektriker, Sanitärinstallateure, Bodenleger und Freiberufler stellen durchschnittlich 10 bis 20 Rechnungen im Monat aus. Sie benötigen keine komplexe Konzernlogistik, sondern ein zuverlässiges Werkzeug für pünktliche Zahlungseingänge.',
    },
  },
  perche: {
    seo: {
      title: 'Warum Fattura Facile | Unsere Philosophie',
      description:
        'Erfahren Sie mehr über unsere Philosophie gegen überladene ERPs: schlanke Software, Offerten in einer Minute, Rechnungen mit einem Klick und keine Abogebühren.',
      keywords:
        'warum fattura facile, schlanke rechnungssoftware, erp alternative, schnelle offerte handwerker, rechnungsstellung ohne abo',
    },
    eyebrow: 'Die Philosophie von Fattura Facile',
    heading: 'Kein 500-Tasten-Monster, sondern Ihr schlanker Begleiter im Arbeitsalltag',
    lead: 'Wir haben den überflüssigen Ballast herkömmlicher Unternehmenssoftware entfernt, um uns auf das Wesentliche zu konzentrieren: Bedienkomfort, strikte steuerliche Konformität und sofortige Betriebsbereitschaft.',
    pillars: [
      {
        title: 'Offerte in 1 Minute, Rechnung mit 1 Klick',
        description:
          'Erstellen Sie Kostenvoranschläge direkt auf der Baustelle. Sobald der Kunde zustimmt, wandeln Sie diese mit einem einzigen Klick unter Einhaltung der fortlaufenden Rechnungsnummer in eine offizielle Rechnung um.',
      },
      {
        title: 'Natives Dual-Market-System: Italien 🇮🇹 und Schweiz 🇨🇭',
        description:
          'Integrierte Unterstützung sowohl für FatturaPA-XML-Dateien der italienischen Steuerbehörde (SDI) als auch für den Schweizer QR-Rechnungsstandard mit SIX-Zahlteil und korrekten MWST-Sätzen.',
      },
      {
        title: 'Verschlüsseltes Portables Backup mit 1 Klick',
        description:
          'Erstellen Sie komprimierte und geschützte Schnappschüsse Ihrer Datenbank auf einem zweiten USB-Stick, einem Firmen-NAS oder einem synchronisierten Ordner. Kein Datenverlust beim Rechnerwechsel.',
      },
    ],
    antiErpHeading: 'Schluss mit monatlichen Pflichtgebühren für wenige Rechnungen',
    antiErpText:
      'Moderne SaaS-Abonnements verursachen stetig steigende Fixkosten und sperren bei Kündigung den Zugriff auf die eigenen historischen Rechnungsdaten. Bei Fattura Facile gehört das Desktop-Programm Ihnen – ohne vertragliche Bindungen und unabhängig von Serverausfällen.',
    quoteToInvoiceHeading: 'Reibungsloser Ablauf zwischen Baustelle und Werkstatt',
    quoteToInvoiceText:
      'Vergessen Sie doppelte Dateneingaben und unübersichtliche Tabellen. Dank des Adressstamms und gespeicherter Leistungspositionen erstellen Sie eine Rechnung in unter 60 Sekunden und können sich voll auf Ihr Handwerk konzentrieren.',
  },
  versioni: {
    seo: {
      title: 'Standalone Offline vs. Private Cloud | Fattura Facile',
      description:
        'Detaillierter Vergleich zwischen unserer portablen C# WPF Desktop-Version mit SQLite und der selbstgehosteten Mehrbenutzer-Cloud-Edition in Docker.',
      keywords:
        'versionen fattura facile, offline usb rechnungen sqlite, private cloud rechnung docker, wpf sqlite fakturierung',
    },
    eyebrow: 'Architektonische Freiheit',
    heading: 'Zwei Varianten, 100 % kostenlos für alle',
    lead: 'Keine Lizenzgebühren an unser Team. Arbeiten Sie vollkommen autark: lokal auf Ihrem Schreibtisch oder selbstgehostet auf Ihrer eigenen IT-Infrastruktur.',
    desktopCard: {
      tag: 'Standalone / USB',
      badge: '100 % Kostenlos',
      title: 'Fattura Facile Desktop',
      subtitle:
        'Entwickelt in nativem C#/.NET WPF mit eingebetteter, konfigurationsfreier SQLite-Datenbank.',
      features: [
        'Keine Installation: Portabler Ordner, direkt von USB-Sticks oder externen SSDs startbar.',
        'Vollständiger Datenschutz: Keine Finanzdaten verlassen Ihren Computer (Privacy by Design).',
        'Überall einsatzbereit: Auf Baustellen, im Lieferwagen oder in der Werkstatt ohne WLAN nutzbar.',
        'Sofortige Geschwindigkeit: Blitzschnelle Startzeiten und Speicherung von Datensätzen in Echtzeit.',
      ],
      limitation:
        'Ein Benutzer gleichzeitig pro Datei (technische Sperre der lokalen SQLite-Datei).',
      cta: 'ZIP-Archiv Herunterladen (Windows 10/11)',
    },
    cloudCard: {
      tag: 'Mehrbenutzer & Selbstgehostet',
      badge: 'Kostenlose Software (Hosting in eigener Regie)',
      title: 'Fattura Facile Private Cloud',
      subtitle:
        'Installieren Sie das System auf Ihrem VPS, Firmen-NAS oder lokalen Server mittels Docker.',
      features: [
        'Gleichzeitiger Mehrbenutzerzugriff: Mitarbeiter und Treuhandbüro arbeiten simultan zusammen.',
        'Keine Lizenzkosten pro Arbeitsplatz: Kein Gebührenmodell basierend auf der Rechnungsanzahl.',
        'Rechtliche Souveränität: Da Sie den Server betreiben, entfällt die Abhängigkeit von Drittdienstleistern.',
        'Einfache Datenmigration: Lokale SQLite-Dateien lassen sich direkt in die Cloud-Instanz importieren.',
      ],
      migrationNote:
        'Erfordert grundlegende IT-Kenntnisse für das Einrichten von Docker-Containern.',
      cta: 'Anleitung auf GitHub Einsehen',
    },
    comparisonTable: {
      title: 'Technische Vergleichstabelle',
      headers: ['Funktion', 'Desktop Standalone', 'Private Cloud'],
      rows: [
        {
          feature: 'Softwarelizenz',
          desktop: 'Für immer kostenlos (Open Source)',
          cloud: 'Für immer kostenlos (Open Source)',
        },
        {
          feature: 'Abonnementkosten',
          desktop: 'Keine (0 € / 0 CHF)',
          cloud: 'Keine (0 € / 0 CHF)',
        },
        {
          feature: 'Internetverbindung',
          desktop: 'Nicht erforderlich (100 % offline)',
          cloud: 'Erforderlich für Fernzugriff',
        },
        {
          feature: 'Datenbank-Engine',
          desktop: 'Lokales SQLite (auf Datenträger/USB)',
          cloud: 'PostgreSQL / SQL Server',
        },
        {
          feature: 'Gleichzeitige Benutzer',
          desktop: '1 Bediener pro Datenbankdatei',
          cloud: 'Mehrere Benutzer parallel',
        },
        {
          feature: 'Steuerkonformität',
          desktop: 'Italien (SDI) & Schweiz (QR-Rechnung)',
          cloud: 'Italien (SDI) & Schweiz (QR-Rechnung)',
        },
        {
          feature: 'Systeminstallation',
          desktop: 'Keine (portable Datei)',
          cloud: 'Docker-Container / VPS',
        },
      ],
    },
  },
  moduli: {
    seo: {
      title: 'Modulkatalog & Öffentliche Roadmap | Fattura Facile',
      description:
        'Entdecken Sie die verfügbaren Module von Fattura Facile für Italien und die Schweiz. Sehen Sie unsere Roadmap ein und schlagen Sie kostenlose Module vor.',
      keywords:
        'module fattura facile, roadmap rechnungssoftware, modul fatturapa, modul qr-rechnung, zahlungsplan kostenlos',
    },
    eyebrow: 'Modulares & Transparentes Ökosystem',
    heading: 'Einsatzbereite Module und communitygetriebene Weiterentwicklung',
    lead: 'Fattura Facile beinhaltet die wesentlichen Funktionen für den sofortigen Start und wächst mit den praxisnahen Anforderungen der Community. Jedes freigegebene Modul wird kostenlos programmiert und in die offiziellen Releases übernommen.',
    availableSectionTitle: 'Sofort Verfügbare Module',
    roadmapSectionTitle: 'Transparente Entwicklungs-Roadmap',
    roadmapStages: {
      inDevelopment: 'In Aktiver Entwicklung',
      planned: 'In Kürze Geplant',
      backlog: 'Vorschläge der Community',
    },
    requestForm: {
      badge: 'Community-Getrieben & 100 % Kostenlos',
      title: 'Benötigen Sie ein bestimmtes Modul oder eine massgeschneiderte Funktion?',
      description:
        'Erläutern Sie uns Ihre Betriebsabläufe oder die spezifischen Anforderungen Ihrer Branche. Wenn die Funktion für die Community von Nutzen ist, programmieren wir sie kostenlos für die Allgemeinheit.',
      nameLabel: 'Vor- und Nachname / Firmenname',
      emailLabel: 'Kontakt-E-Mail-Adresse',
      marketLabel: 'Zielmarkt',
      tradeLabel: 'Branche oder Beruf (z. B. Sanitär, Elektro, Bau, Treuhand)',
      detailsLabel: 'Beschreibung des Gewünschten Moduls und der Betrieblichen Aufgabenstellung',
      submitBtn: 'Kostenlosen Modulvorschlag Einreichen',
      disclaimer:
        'Unser Entwicklerteam prüft die Vorschläge direkt, um offene Spezifikationen zu erarbeiten.',
    },
  },
  team: {
    seo: {
      title: 'Team & Mitwirkende | Fattura Facile',
      description:
        'Lernen Sie die Softwarearchitekten, Entwickler und Steuerexperten hinter Fattura Facile in der Schweiz und Italien kennen.',
      keywords:
        'team fattura facile, davide nava, net open source entwickler, steuerberater schweiz italien, mitwirkende',
    },
    eyebrow: 'Offene & Gemeinnützige Initiative',
    heading: 'Die Menschen hinter dem Projekt Fattura Facile',
    lead: 'Ein Team aus IT-Ingenieuren, Steuerexperten und Dozenten, vereint durch die Überzeugung, dass alltägliche Arbeitswerkzeuge nicht hinter monatlichen Bezahlschranken eingesperrt werden dürfen.',
    regions: {
      switzerland: 'Schweiz 🇨🇭 (Kanton Tessin & Graubünden)',
      italy: 'Italien 🇮🇹 (Lombardei & Weitere Regionen)',
    },
    coreMaintainerBadge: 'Core Maintainer',
    joinCta: {
      title: 'Möchten Sie im Team mitwirken oder unterstützen?',
      description:
        'Wir freuen uns über C#/.NET-Entwickler, Astro-Frontend-Spezialisten, Steuerexperten zur Validierung der Spezifikationen sowie Übersetzer für die Landessprachen.',
      githubBtn: 'Auf GitHub Mitwirken',
      telegramBtn: 'Mit Uns auf Telegram Sprechen',
    },
  },
  scuoleSociale: {
    seo: {
      title: 'Schulen, Berufsbildung & Soziales Engagement | Fattura Facile',
      description:
        'Bildungsinitiativen für Informatik- und Wirtschaftsschulen. Echter Programmcode zum Erlernen von .NET und kostenlose Software für Übungsfirmen.',
      keywords:
        'schulen fattura facile, net berufsausbildung, uebungsfirma software kostenlos, rechnungswesen schule, soziales projekt',
    },
    hero: {
      badge: 'Bildung & Gesellschaftliche Verantwortung',
      heading: 'Wir bringen echte Unternehmenssoftware in die Schulen und die Praxis',
      lead: 'Schluss mit isolierten Übungsbeispielen. Wir stellen Berufsschulen und Fachhochschulen eine gesetzeskonforme und professionell strukturierte Plattform zur Verfügung, um die Fachkräfte von morgen praxisnah auszubilden.',
      ctaApply: 'Schulkooperation Anfragen',
      ctaGithub: 'Schulungscode Erkunden',
    },
    technicalTrack: {
      badge: 'Für Technische & Informatikschulen (Berufsschulen / FH / Hochschulen)',
      title: 'Software-Engineering an einer Realen Anwendung Erlernen',
      lead: 'Ein modernes Codebase auf Basis von Clean Code und SOLID-Prinzipien – ideal für Lehrpersonen und Lernende, die über reine Theorie hinausgehen möchten.',
      bullets: [
        {
          title: 'Clean Architecture & CQRS-Muster',
          desc: 'Praxisnahes Verständnis der Trennung von Geschäftsdomäne, Befehlen und Benutzeroberflächen in C# .NET.',
        },
        {
          title: 'Eingebettete Datenbanken & ACID-Transaktionen',
          desc: 'Vertiefung von lokalem SQLite, Indexierung, relationalen Integritäten und Schemamigrationen ohne Serverkomplexität.',
        },
        {
          title: 'CI/CD-Pipelines & Qualitätsstandards',
          desc: 'Praktische Anwendung von GitHub Actions, SonarQube-Codeanalysen, Qodana-Sicherheitsscans und automatisierten Releases.',
        },
        {
          title: 'Praktika, Projektarbeiten & Diplomarbeiten',
          desc: 'Möglichkeit für Studierende und Lernende, eigenständige Module zu entwickeln und unter eigenem Namen in die offizielle Version zu überführen.',
        },
      ],
    },
    commercialTrack: {
      badge: 'Für Wirtschaftsschulen, Kaufmännische Ausbildungen & Treuhand',
      title: 'Übungsfirmen und Buchhaltungspraxis Ohne Lizenzkosten',
      lead: 'Ein authentisches Arbeitswerkzeug, wie es von echten Betrieben genutzt wird – ohne Lizenzgebühren oder Einschränkungen bei den Arbeitsplätzen.',
      bullets: [
        {
          title: 'Erstellung von Elektronischen Rechnungen (SDI)',
          desc: 'Praktische Übungen zur Erstellung und Prüfung von FatturaPA-XML-Dateien für die italienische Steuerbehörde.',
        },
        {
          title: 'Schweizer QR-Rechnung nach SIX-Standard',
          desc: 'Ausstellung von Zahlteilen mit geprüftem QR-Code gemäss Schweizer Interbank-Standards und Berechnung der MWST-Sätze.',
        },
        {
          title: 'Klassenzimmer Ohne Softwareabos',
          desc: 'Installierbar auf allen Schulungsrechnern oder portabel auf USB-Sticks für Hausaufgaben und Projektarbeiten zu Hause.',
        },
      ],
    },
    socialMission: {
      badge: 'Inklusion & Zugänglichkeit',
      title: 'Unser Ethischer und Gesellschaftlicher Auftrag',
      description:
        'Wir sind überzeugt, dass digitale Werkzeuge und die Gründung eines Kleinstunternehmens für jeden ohne finanzielle Einstiegshürden erreichbar sein müssen.',
      points: [
        'Konkrete Unterstützung von Berufseinsteigern, Lernenden und Jungunternehmern bei der Geschäftsgründung.',
        'Überwindung digitaler Hürden für Kleinstbetriebe mit überschaubarem Budget.',
        'Absoluter Schutz der Vertraulichkeit von Rechnungs- und Finanzdaten.',
      ],
    },
    teacherContact: {
      title: 'Sind Sie Lehrperson, Fachbereichsleiter oder Schulleiter?',
      lead: 'Kontaktieren Sie uns, um Unterrichtsmaterialien, Leitfäden und praktische Aufgabenstellungen für Ihren Unterricht zu vereinbaren.',
      btnLabel: 'Lehrmaterial Anfordern',
    },
  },
  supportoLocale: {
    seo: {
      title: 'Partnernetzwerk & Regionaler Support (IT/CH) | Fattura Facile',
      description:
        'Finden Sie akkreditierte IT-Berater, Treuhänder und Techniker vor Ort für Installation, Betreuung und Schulungen in Italien und der Schweiz.',
      keywords:
        'regionaler support fattura facile, partner tessin fakturierung, rechnungssoftware hilfe lombardei, qr-rechnung sdi beratung',
    },
    eyebrow: 'Regionale Nähe',
    heading: 'Berater, Techniker und Treuhänder an Ihrer Seite vor Ort',
    lead: 'Die Software ist vollkommen kostenlos. Wenn Sie individuelle Konfigurationen vor Ort, Netzwerkeinbindungen oder Schulungen für Ihr Team benötigen, stehen Ihnen zertifizierte Fachleute in Ihrer Region zur Verfügung.',
    regions: {
      switzerland: 'Schweiz 🇨🇭 (Kanton Tessin & Graubünden)',
      italy: 'Italien 🇮🇹 (Lombardei, Piemont & Weitere Regionen)',
    },
    partnerForm: {
      badge: 'Offenes Fachnetzwerk',
      title: 'Als Regionaler Partner oder Berater Bewerben',
      lead: 'Sind Sie IT-Dienstleister, Webagentur oder Treuhandbüro? Treten Sie dem Partnerverzeichnis von Fattura Facile kostenlos bei und bieten Sie den Nutzern Ihrer Region Ihre Dienstleistungen an.',
      companyLabel: 'Firmenname oder Kanzleibezeichnung',
      contactLabel: 'Ansprechperson',
      emailLabel: 'Geschäftliche E-Mail',
      phoneLabel: 'Telefon / Mobilnummer',
      countryLabel: 'Land (Italien oder Schweiz)',
      regionLabel: 'Zuständige Region oder Kanton',
      servicesLabel:
        'Angebotene Dienstleistungen (Lokale Installation, Server/Cloud, Backup, Schulung, Steuern)',
      notesLabel: 'Kurzbeschreibung Ihrer Praxiserfahrung',
      submitBtn: 'Kostenlose Partnerbewerbung Einreichen',
    },
  },
  faq: {
    seo: {
      title: 'Häufig Gestellte Fragen (FAQ) | Fattura Facile',
      description:
        'Detaillierte Antworten zu Offline-Nutzung, SQLite-Sicherheit, FatturaPA, Schweizer QR-Rechnung, unserem Gratismodell und lokalem Support.',
      keywords:
        'faq fattura facile, haeufige fragen rechnungen, sicherheit sqlite rechnungsdaten, support fatturapa kostenlos',
    },
    eyebrow: 'Antworten & Klarheit',
    heading: 'Häufig Gestellte Fragen zu Fattura Facile',
    lead: 'Alles Wissenswerte über die Technologie, die Steuerkonformität und das offene Entwicklungsmodell des Projekts.',
    searchPlaceholder: 'Antwort suchen (z. B. USB, Backup, SDI, QR-Rechnung)...',
    categories: {
      general: 'Allgemein & Philosophie',
      technical: 'Architektur & Daten',
      compliance: 'Recht & Steuern',
      partners: 'Support & Community',
    },
    items: [
      {
        id: 'faq-usb',
        category: 'technical',
        question:
          'Wie funktioniert die Version auf dem USB-Stick? Ist sie wirklich ohne Installation nutzbar?',
        answer:
          'Ja! Laden Sie einfach das ZIP-Archiv herunter, entpacken Sie es auf einen beliebigen USB-Stick oder eine externe Festplatte und doppelklicken Sie auf die Programmdatei. Die Software nimmt keine Änderungen an der Windows-Registrierung vor und speichert alle Dokumente in der lokalen SQLite-Datenbank im selben Ordner. Schliessen Sie den Stick an einen beliebigen Windows 10- oder 11-PC an und arbeiten Sie sofort los.',
      },
      {
        id: 'faq-backup-loss',
        category: 'technical',
        question: 'Was geschieht, wenn ich den USB-Stick verliere oder mein Computer defekt ist?',
        answer:
          'Da Ihre Daten aus Datenschutzgründen ausschliesslich lokal gespeichert werden, sind regelmässige Sicherungen unerlässlich. Fattura Facile verfügt über eine 1-Klick-Funktion für «Verschlüsseltes Backup», die eine geschützte Datei erzeugt, welche Sie auf ein zweites Laufwerk, ein Firmen-NAS oder einen Cloud-Ordner kopieren können.',
      },
      {
        id: 'faq-compliance-it-ch',
        category: 'compliance',
        question:
          'Wie werden die italienische elektronische Rechnung und die Schweizer QR-Rechnung verarbeitet?',
        answer:
          'Für Italien erzeugt die Software zertifizierte FatturaPA-XML-Dateien für das SDI-System der Finanzbehörde, bereit für den Versand per PEC oder Empfängercode. Für die Schweiz erstellt sie offizielle QR-Rechnungen nach SIX-Standard mit geprüftem QR-Code und automatischer Berechnung der eidgenössischen MWST-Sätze.',
      },
      {
        id: 'faq-free-model',
        category: 'general',
        question:
          'Warum ist die Software kostenlos? Gibt es versteckte Kosten oder Rechnungsbegrenzungen?',
        answer:
          'Es gibt keine versteckten Kosten, zeitlich beschränkten Testversionen oder Begrenzungen bei der Rechnungsanzahl. Das Projekt wird von Software-Profis ehrenamtlich als Open-Source-Initiative gepflegt, um ein faires Werkzeug ohne finanzielle Hürden anzubieten.',
      },
      {
        id: 'faq-custom-requests',
        category: 'partners',
        question: 'Wie kann ich ein massgeschneidertes Modul für meine Branche anfordern?',
        answer:
          'Sie können Ihren Vorschlag über das Formular auf der Website einreichen, uns an info@fatturafacile.eu schreiben oder in unserer Telegram-Gruppe diskutieren. Wenn die Funktion praxistauglich ist, programmieren wir sie kostenlos und binden sie in die nächsten öffentlichen Releases ein.',
      },
      {
        id: 'faq-support-types',
        category: 'partners',
        question:
          'Worin liegt der Unterschied zwischen Community-Support und lokalem Support vor Ort?',
        answer:
          'Der Community-Support (über GitHub und Telegram) ist stets kostenlos und bezieht sich auf Softwarebedienung sowie Fehlerbehebungen. Der lokale Support wird von unabhängigen, akkreditierten Fachleuten (IT-Berater, Treuhänder) für Vor-Ort-Leistungen wie Netzwerkeinrichtung, Hardwareanbindung oder persönliche Mitarbeiterschulung erbracht.',
      },
    ],
  },
  sponsor: {
    seo: {
      title: 'Sponsoren & Projektförderung | Fattura Facile',
      description:
        'Unterstützen Sie die unabhängige Entwicklung von Fattura Facile. Erfahren Sie mehr über die transparente Verwendung der Mittel für Zertifikate und Infrastruktur.',
      keywords:
        'sponsor fattura facile, open source spende, windows code signing zertifikat, freie software foerdern',
    },
    eyebrow: 'Transparenz & Nachhaltigkeit',
    heading: 'Helfen Sie uns, die Software unabhängig, frei und sicher zu halten',
    lead: 'Fattura Facile verkauft keine Daten und erhebt keine Nutzungsgebühren. Spenden und Sponsorengelder decken ausschliesslich die anfallenden technischen Betriebskosten, um die Sicherheit und Stabilität des Projekts zu gewährleisten.',
    transparencyTitle: 'Vollständige Transparenz bei den Technischen Kosten',
    transparencyText:
      'Jeder über GitHub Sponsors oder Unterstützungsplattformen gesammelte Betrag fliesst direkt in dokumentierte Sachausgaben:',
    costsList: [
      {
        item: 'Code-Signing-Zertifikate (Windows Authenticode)',
        description:
          'Notwendig, um Warnmeldungen von Windows SmartScreen beim ersten Start des Programms auf den Computern der Benutzer zu verhindern.',
      },
      {
        item: 'Testinfrastruktur und CI/CD-Server',
        description:
          'Serverkapazitäten für automatische Softwaretests, SonarQube-Sicherheitsprüfungen und die automatisierte Paketierung der Installationsversionen.',
      },
      {
        item: 'Domainkosten und Dokumentationsplattformen',
        description:
          'Laufende Kosten für die offiziellen Domains (.eu, .ch) und das Hosting von Dokumentationsbereichen für Schulen und Anwender.',
      },
    ],
    tiers: {
      individualTitle: 'Einzelunterstützer',
      individualDesc:
        'Ein symbolischer Kaffee zur Wertschätzung der Entwicklungsstunden, die in das Open-Source-Projekt fliessen.',
      corporateTitle: 'Unternehmenssponsor',
      corporateDesc:
        'Einbindung Ihres Firmenlogos mit Verlinkung auf der Startseite, im Footer und im offiziellen GitHub-Repository.',
      technicalTitle: 'Technologiepartner',
      technicalDesc:
        'Direkte Bereitstellung von Serverressourcen, Konnektivität, digitalen Zertifikaten oder Softwarelizenzen für Entwickler.',
    },
    actions: {
      kofiBtn: 'Auf Ko-fi Unterstützen',
      githubSponsorsBtn: 'Sponsor auf GitHub Werden',
    },
  },
  storia: {
    seo: {
      title: 'Unsere Geschichte & Projekthintergrund | Fattura Facile',
      description:
        'Die Entstehung von Fattura Facile: Vom Arbeitsalltag der Handwerker mit schwerfälliger Software hin zu einer freien, unabhängigen Lösung ohne Abozwang.',
      keywords:
        'geschichte fattura facile, ursprung rechnungssoftware, alternative softwareabo, ethische software tessin lombardei',
    },
    eyebrow: 'Wurzeln & Vision',
    heading: 'Aus der Praxis vor Ort zur Unabhängigkeit freier Software',
    lead: 'Fattura Facile entstand nicht im Konferenzraum zur Generierung wiederkehrender Abo-Umsätze, sondern aus der direkten Beobachtung von Installateuren, Elektrikern und Handwerkern, die mit zu langsamer, überladener und teurer Software zu kämpfen hatten.',
    problemTitle: 'Das Problem Schwerfälliger ERP-Systeme',
    problemText:
      'In den vergangenen Jahren hat die Softwarebranche einen radikalen Wandel hin zu zwingenden SaaS-Abonnements vollzogen. Was für internationale Lieferketten sinnvoll sein mag, bedeutet für Kleinbetriebe und selbstständige Handwerker unverhältnismässige Kosten, unübersichtliche Menüs voller ungenutzter Buttons und die ständige Sorge, bei fehlender Internetverbindung oder Vertragsende den Zugriff auf die eigenen Rechnungen zu verlieren.',
    philosophyTitle: 'Unsere Vier Grundpfeiler',
    philosophyBullets: [
      {
        title: 'Radikale Einfachheit',
        desc: 'Ein klarer Arbeitsablauf: Kundendaten eingeben, Leistung beschreiben, Steuersatz anwenden und sofort als PDF drucken oder versenden.',
      },
      {
        title: 'Souveränität über die Eigenen Daten',
        desc: 'Die Datenbank ist eine einzelne Datei in Ihrer Hand. Keine Werbeprofile, null Telemetrie und keine Speicherung auf unüberprüften Drittservern.',
      },
      {
        title: 'Grenzüberschreitende Ausrichtung',
        desc: 'Von der ersten Codezeile an für den Grenzraum Italien-Schweiz konzipiert, mit nativer Unterstützung für italienisches SDI und Schweizer QR-Rechnungen.',
      },
      {
        title: 'Beitrag zur Allgemeinheit',
        desc: 'Quellcode und Programm bleiben kostenlos, damit auch Berufseinsteiger und junge Handwerker ohne Lizenzschulden starten können.',
      },
    ],
    timeline: [
      {
        year: '2025',
        title: 'Erste Praxiserprobung',
        desc: 'Entwicklung eines ersten portablen C#-Prototyps mit SQLite, um den Bedarf an mobiler Rechnungsstellung per USB-Stick auf Baustellen zu lösen.',
      },
      {
        year: '2026',
        title: 'Vollständige Dual-Market-Konformität',
        desc: 'Integration zertifizierter XML-Ausgaben für die italienische FatturaPA (SDI) und den Schweizer SIX-QR-Rechnungsstandard samt MWST-Sätzen.',
      },
      {
        year: '2026',
        title: 'Open-Source-Release, Astro-Portal und Schulkooperationen',
        desc: 'Veröffentlichung des GitHub-Repositorys, Start von Ausbildungsprojekten an Berufsschulen und Aufbau des regionalen Partnernetzwerks vor Ort.',
      },
    ],
  },
  privacy: {
    seo: {
      title: 'Datenschutzerklärung & Konformität (DSGVO & revDSG) | Fattura Facile',
      description:
        'Vollständige Datenschutzerklärung: Konformität mit EU-DSGVO 2016/679, Schweizer Datenschutzgesetz (revDSG) und Privacy by Design mit lokalem SQLite.',
      keywords:
        'datenschutz fattura facile, dsgvo rechnungssoftware, revdsg schweiz rechnungen, sqlite privacy by design, null telemetrie rechnungsstellung',
    },
    eyebrow: 'Rechtlicher Rahmen & Datenschutz',
    headingPart1: 'Datenschutzerklärung &',
    headingPart2: 'Gesetzliche Konformität',
    subtitle:
      'EU-Datenschutz-Grundverordnung (DSGVO 2016/679) und totalrevidiertes Schweizer Bundesgesetz über den Datenschutz (revDSG).',
    calloutTitle: 'Grundlegendes Architekturprinzip:',
    calloutText:
      'Bei Fattura Facile ist die Vertraulichkeit buchhalterischer Daten keine bürokratische Pflichtübung, sondern das architektonische Fundament der gesamten Software.',
    section1Title: '1. Eigenständige Desktop-Architektur (Lokales SQLite)',
    section1Intro:
      'Bei Verwendung der portablen Anwendung Fattura Facile Desktop (bereitgestellt als ausführbares Programm ohne Systeminstallation):',
    section1Bullets: [
      {
        title: 'Null Datenübertragung nach Aussen',
        desc: 'Alle Kundendaten, Rechnungen, Beträge, MWST-Sätze, IBAN-Bankverbindungen und Steuernummern verbleiben ausschliesslich in der lokalen SQLite-Datenbankdatei im Programmordner oder auf dem USB-Stick.',
      },
      {
        title: 'Keine Telemetrie oder Nachverfolgung',
        desc: 'Die Software enthält keinerlei Verhaltenstracker, Hintergrund-Analysen oder API-Aufrufe an Server von Fattura Facile.',
      },
      {
        title: 'Volle Datenhoheit des Verantwortlichen',
        desc: 'Der Anwender handelt als alleiniger Verantwortlicher im Sinne von Art. 4 DSGVO bzw. revDSG. Es findet kein grenzüberschreitender Datentransfer statt und es ist kein Auftragsverarbeitungsvertrag (AVV) mit Fattura Facile erforderlich.',
      },
    ],
    section2Title: '2. Self-Hosted Cloud-Edition (Kundeninfrastruktur)',
    section2Intro:
      'Bei Bereitstellung der Mehrbenutzer-Version auf einem eigenen lokalen Server oder Virtual Private Server (VPS):',
    section2Bullets: [
      {
        title: 'Direktes Eigentum an der Infrastruktur',
        desc: 'Docker-Container und relationale Datenbanken (PostgreSQL oder Microsoft SQL Server) werden auf Hardware oder Cloud-Konten betrieben, die direkt dem Kunden gehören.',
      },
      {
        title: 'Null Datenzugriff durch Entwickler',
        desc: 'Die Entwickler von Fattura Facile besitzen weder Zugangsschlüssel noch Root-Rechte oder Einsicht in die Datenbanken des Kunden.',
      },
      {
        title: 'Rechtliche Isolation',
        desc: 'Die Einhaltung technischer und organisatorischer Sicherheitsmassnahmen (Art. 32 DSGVO) sowie der Bestimmungen des Schweizer revDSG bleibt vollständig unter der IT-Kontrolle des nutzenden Unternehmens.',
      },
    ],
    section3Title: '3. Betroffenenrechte & Gesetzliche Aufbewahrungspflicht',
    section3Intro:
      'Gemäss Artikel 15–22 der EU-Verordnung 2016/679 (DSGVO) und Artikel 25–29 des Schweizer Datenschutzgesetzes (revDSG):',
    section3Bullets: [
      {
        title: 'Auskunftsrecht und Datenübertragbarkeit',
        desc: 'Da die Datenbank im offenen SQLite-Standardformat vorliegt, kann der Verantwortliche das gesamte Dokumentenarchiv jederzeit ohne proprietäre Werkzeuge auslesen oder exportieren.',
      },
      {
        title: 'Berichtigung und Löschung',
        desc: 'Jeder Kundendatensatz oder Offertenentwurf kann direkt über die Benutzeroberfläche in Echtzeit berichtigt oder gelöscht werden.',
      },
      {
        title: 'Steuerrechtliche Aufbewahrung',
        desc: 'Die gesetzeskonforme Aufbewahrung elektronischer XML-Rechnungen (SDI Italien) bzw. die zehnjährige Geschäftsbücheraufbewahrung nach Schweizer Obligationenrecht (Art. 958f OR) erfolgt über die offiziellen Kanäle oder zertifizierten Speichermedien des Betriebs.',
      },
    ],
    section4Title: '4. Kontakt und Verantwortlichkeit',
    section4Text:
      'Für Fragen zur Sicherheitsarchitektur oder für technische Verbesserungsvorschläge zum Datenschutz:',
    contactLabel: 'E-Mail:',
  },
};
