<div align="center">

# FatturaFacile — Official Showcase & Documentation (`fatturafacile.eu`)

### Official Institutional Showcase & Multi-Language Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Website](https://img.shields.io/badge/Website-fatturafacile.eu-emerald)](https://fatturafacile.eu)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](src/CONTRIBUTING.md)
[![GitHub Pages](https://github.com/FatturaFacile/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/FatturaFacile/website/actions/workflows/deploy.yml)

The official public showcase, documentation, and institutional landing page ([fatturafacile.eu](https://fatturafacile.eu)) for the **FatturaFacile** open-source invoicing ecosystem — designed for tradespeople, freelancers, and small-to-medium businesses across **Italy** (FatturaPA / SDI) and **Switzerland** (SIX QR-Bill).

[Overview](#-overview) • [Ecosystem Architecture](#-ecosystem--architecture) • [Tech Stack](#-tech-stack) • [Repository Structure](#-repository-structure) • [Local Development & Testing](#-local-development--testing) • [Deployment Pipeline](#-deployment-pipeline) • [Contributing](#-contributing) • [License](#-license)

</div>

---

## 🌐 Overview

This repository contains the source code for **[fatturafacile.eu](https://fatturafacile.eu)**. It articulates the philosophy, high-level architecture, compliance guarantees (EU GDPR & Swiss FADP/nLPD), and distribution channels for the **FatturaFacile** ecosystem.

### Key Highlights

- **Zero-Build Static Architecture:** Ultra-fast page loading and high Lighthouse scores with zero build step overhead.
- **Client-Side Internationalization (`EN`, `IT`, `FR`, `DE`):** Zero-dependency reactive i18n engine (`src/js/translations.js` + `src/js/main.js`) with persistent language selection and real-time attribute updates.
- **Adaptive Dark / Light Theme:** First-class color scheme support reflecting OS preferences (`prefers-color-scheme`) with manual toggle persistence and vector brand adaptation.
- **SEO & Compliance Ready:** Complete Open Graph, Twitter Cards, Schema.org (`SoftwareApplication` JSON-LD), canonical links, `robots.txt`, and `sitemap.xml`.
- **Interactive Legal Modal:** Built-in EU GDPR (EU 2016/679) and Swiss nLPA/FADP data protection overview accessible directly from the interface.

---

## 🏛 Ecosystem & Architecture

The **FatturaFacile** suite is designed as a decoupled, multi-tier ecosystem adhering to **Clean Architecture**, **CQRS (Command Query Responsibility Segregation)**, and **SOLID** principles:

```mermaid
flowchart TD
    subgraph Clients["Presentation & Client Layer"]
        Website["Official Website (fatturafacile.eu)<br/><i>HTML5 / Tailwind CSS / Vanilla JS</i>"]
        Desktop["Desktop App<br/><i>.NET 8/9 / C# / WPF / Modern UI</i>"]
        WebPlatform["Web Cloud Platform<br/><i>Laravel 11+ / Filament / Livewire</i>"]
        MobileApp["Mobile Companion<br/><i>Flutter / Dart (iOS & Android)</i>"]
    end

    subgraph CorePatterns["Architectural Core Principles"]
        CleanArch["Clean Architecture<br/><i>Domain &bull; Application Use Cases &bull; Infrastructure</i>"]
        CQRS["CQRS Pattern<br/><i>Separated Command and Query Pipelines</i>"]
        Contracts["Decoupled Contracts & DTOs<br/><i>FatturaPA XML &bull; Swiss QR-Bill (SIX)</i>"]
    end

    subgraph Data["Data & Persistence Layer"]
        LocalDB["Local-First SQLite<br/><i>Portable USB / Zero-Server</i>"]
        CloudDB["Relational Databases<br/><i>PostgreSQL / MySQL</i>"]
    end

    Website -.->|Showcases & Links| Clients
    Desktop --> CleanArch
    WebPlatform --> CleanArch
    MobileApp --> CleanArch
    CleanArch --> CQRS
    CQRS --> Contracts
    Desktop --> LocalDB
    WebPlatform --> CloudDB
```

### Sibling Repositories

| Component            | Repository                                                          | Stack / Technology              | Purpose                                                                                              |
| :------------------- | :------------------------------------------------------------------ | :------------------------------ | :--------------------------------------------------------------------------------------------------- |
| **Official Website** | [`FatturaFacile/website`](https://github.com/FatturaFacile/website) | HTML5, Tailwind CSS, Vanilla JS | Public showcase, landing page, and documentation hub ([fatturafacile.eu](https://fatturafacile.eu)). |
| **Desktop Client**   | [`FatturaFacile/desktop`](https://github.com/FatturaFacile/desktop) | .NET 8/9, C#, WPF, SQLite       | High-performance native Windows client with local-first, offline-first USB execution.                |
| **Web Platform**     | [`FatturaFacile/web`](https://github.com/FatturaFacile/web)         | Laravel 11+, Filament, Livewire | Multi-user self-hosted cloud platform with admin portals, APIs, and team billing.                    |
| **Mobile Companion** | [`FatturaFacile/mobile`](https://github.com/FatturaFacile/mobile)   | Flutter, Dart                   | iOS & Android companion for field invoicing, quick estimates, and receipt capture.                   |
| **Brand Assets**     | [`FatturaFacile/assets`](https://github.com/FatturaFacile/assets)   | SVG, Figma, Design Tokens       | Official vector logos, typography guidelines, and digital media kits.                                |

---

## 🛠 Tech Stack

| Layer                   | Technology                    | Description                                                                                                     |
| :---------------------- | :---------------------------- | :-------------------------------------------------------------------------------------------------------------- |
| **Markup**              | **HTML5 Semantic**            | Accessible (`ARIA`), SEO-optimized single-page layout (`src/index.html`).                                       |
| **Styling**             | **Tailwind CSS (CDN) + CSS3** | Utility-first responsive design, dark mode class switching, custom scrollbars (`src/css/style.css`).            |
| **Client Scripting**    | **Vanilla JavaScript (ES6+)** | Lightweight state management for theme, i18n, FAQ accordions, and modals (`src/js/main.js`).                    |
| **Localization**        | **JavaScript Dictionary**     | Typed client dictionary for English, Italian, French, and German (`src/js/translations.js`).                    |
| **Assets & Media**      | **SVG & WebManifest**         | Responsive vector graphics (`src/img/`) and multi-platform progressive app favicons (`src/img/favicon/`).       |
| **Continuous Delivery** | **GitHub Actions**            | Automated validation and deployment pipeline targeting **GitHub Pages** (`.github/workflows/deploy.yml`). |

---

## 📁 Repository Structure

```text
website/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Pages deployment (main → fatturafacile.eu)
├── src/                            # Web root directory deployed to production
│   ├── index.html                  # Main application markup & SEO entry point
│   ├── robots.txt                  # Search crawler directives
│   ├── sitemap.xml                 # Search engine XML index
│   ├── CHANGELOG.md                # Project changelog (Keep a Changelog format)
│   ├── CODE_OF_CONDUCT.md          # Contributor Covenant v2.1 code of conduct
│   ├── CONTRIBUTING.md             # Contributor & translation guidelines
│   ├── css/
│   │   └── style.css               # Utility overlays, transitions, and scrollbar styles
│   ├── js/
│   │   ├── main.js                 # Theme controller, i18n engine, accordion, and modal handlers
│   │   └── translations.js         # Multi-language dictionary (EN, IT, FR, DE)
│   └── img/
│       ├── fattura_facile.svg                      # Primary brand vector logo
│       ├── fattura_facile_logo.svg                 # Open Graph and metadata vector logo
│       ├── fattura_facile_logo_trasparente.svg     # Transparent background vector logo
│       ├── fattura_facile_favicon.svg              # Vector favicon
│       ├── fattura_facile_favicon_trasparente.svg  # Transparent vector favicon
│       ├── logo-email.png                          # Raster signature logo
│       └── favicon/                                # Multi-resolution app favicons & manifest
│           ├── android-chrome-192x192.png
│           ├── android-chrome-512x512.png
│           ├── apple-touch-icon.png
│           ├── favicon-16x16.png
│           ├── favicon-32x32.png
│           ├── favicon-43x44.png
│           ├── favicon.ico
│           └── site.webmanifest
├── LICENSE                         # MIT License
└── README.md                       # Repository documentation
```

---

## 🚀 Local Development & Testing

The site is an [Astro](https://astro.build) project (sources in `src/`, static output in `dist/`).

### 1. Clone the Repository

```bash
git clone https://github.com/FatturaFacile/website.git
cd website
```

### 2. Run Local Development Server

#### Option A — Node.js (22 or later)

```bash
npm ci
npm run dev        # http://localhost:4321
```

Other checks: `npm run lint`, `npm run format:check`, `npm run check` (types), `npm run test:i18n` (translation parity)
and `npm run build` (writes `dist/`; `npm run preview` serves it).

#### Option B — Docker (only Docker needed, no Node on your machine)

```bash
docker run --rm -p 4321:4321 -v "$PWD":/app -w /app node:22-alpine \
  sh -c "npm ci --no-audit --no-fund && npm run dev -- --host 0.0.0.0"
```

Navigate to [http://localhost:4321](http://localhost:4321). The first start installs the dependencies into `node_modules/`
(git-ignored), so it takes a minute.

### 3. Verification & Testing Checklist

- [ ] **Cross-Language Validation:** Toggle between `EN`, `IT`, `FR`, and `DE` in the top bar to verify all keys render cleanly without falling back to raw keys.
- [ ] **Dark / Light Mode:** Switch themes via the sun/moon button and verify high-contrast readability across all cards and typography.
- [ ] **Modal Verification:** Click the **GDPR & Privacy Guarantee** badge in the footer to ensure the modal opens, locks background scroll, and closes cleanly via `Escape` or the button.
- [ ] **Responsive Breakpoints:** Verify navigation layout on mobile (`<640px`), tablet (`768px`), and desktop (`1024px+`).

---

## ☁️ Deployment Pipeline

Pull Request against `main` → review → merge → **production** on GitHub Pages
(`.github/workflows/deploy.yml`, also runnable via `workflow_dispatch`).

- **Artifact Path:** the Astro build in `./dist`.
- **Custom Domain:** Configured for [fatturafacile.eu](https://fatturafacile.eu) with automatic SSL provisioning.

---

## 🤝 Contributing

We welcome community feedback, translations, accessibility improvements, and documentation fixes! Please review:

- [Contributing Guidelines](src/CONTRIBUTING.md)
- [Code of Conduct](src/CODE_OF_CONDUCT.md)
- [Changelog](src/CHANGELOG.md)

---

## 📄 License

Distributed under the **[MIT License](LICENSE)**. Copyright &copy; 2026 **FatturaFacile**.
