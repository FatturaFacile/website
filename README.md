# FatturaFacile Website

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Website](https://img.shields.io/badge/Website-fatturafacile.eu-emerald)](https://fatturafacile.eu)
[![Deploy](https://github.com/FatturaFacile/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/FatturaFacile/website/actions/workflows/deploy.yml)

Source of [fatturafacile.eu](https://fatturafacile.eu), the public website of the [FatturaFacile](https://github.com/FatturaFacile/FatturaFacile) open-source ERP: product and module overview, versions, FAQ, team, community and contribution pages, in four languages.

## Overview

- **Static site** built with [Astro](https://astro.build) 7 (static output, no server runtime) and Tailwind CSS 4, written in TypeScript.
- **Languages:** Italian (default, no URL prefix), English, French and German (`/en/`, `/fr/`, `/de/`). Page slugs are translated per language (`src/i18n/routes.ts`); old Italian slugs on the other languages redirect to the translated ones.
- **Pages** (`src/pages/`): home, features, modules, versions, why FatturaFacile, FAQ, team, community, contribute, sponsors, history, schools and social, local support, privacy. The module catalogue comes from `src/data/modules.ts` (status: available, in development or planned).
- **SEO:** sitemap (`@astrojs/sitemap`), canonical and alternate language links, Open Graph, Schema.org JSON-LD, `robots.txt`.
- Dark and light theme, cookie banner and optional Google Analytics.
- A build fails when the four language files do not have the same keys (`scripts/test-i18n-parity.ts`).

## Requirements

- Node.js 22.23.4 or later (`engines` in `package.json`) and npm (this repository uses `package-lock.json`)

## Getting started

```bash
git clone -b dev https://github.com/FatturaFacile/website.git
cd website
npm ci
npm run dev        # http://localhost:4321
npm run build      # static output in dist/ (runs the i18n parity check first)
npm run preview    # serve dist/ locally
```

Without Node on your machine:

```bash
docker run --rm -p 4321:4321 -v "$PWD":/app -w /app node:22-alpine \
  sh -c "npm ci --no-audit --no-fund && npm run dev -- --host 0.0.0.0"
```

## Configuration

Copy `.env.example` to `.env` only if you need it. Variable: `PUBLIC_GA_ID` (optional, Google Analytics measurement ID; the site has a built-in default).

## Testing and linting

```bash
npm run test:i18n      # the IT, EN, FR and DE dictionaries have the same keys
npm run check          # Astro and TypeScript type check
npm run lint           # ESLint
npm run format:check   # Prettier (npm run format to fix)
npm run build          # a full build is the smoke test
```

## CI/CD and branching

- `dev` is the default branch. Open pull requests against `dev`. Production is published from `main`.
- `Deploy FatturaFacile Astro Site` (`deploy.yml`) runs on pull requests and pushes to `main`: i18n parity check, type check and build. On pushes to `main` (and manual runs) it also publishes `dist/` to GitHub Pages, served at [fatturafacile.eu](https://fatturafacile.eu) (`public/CNAME`). Changes merged into `dev` go live when `dev` is promoted to `main`.
- `Qodana` runs static analysis; `Telegram Notifications` posts repository activity to the team chat.

## Project structure

```text
src/
├── pages/          # one file per page; [lang]/ serves en, fr and de
├── components/     # Header, Footer, ModuleCard, SEO, CookieBanner, ...
├── layouts/        # BaseLayout
├── data/           # modules, team, partners, schools, links
├── i18n/           # route slugs, helpers and locales/ (it, en, fr, de)
├── utils/          # analytics, i18n helper, security helpers
└── styles/
public/             # static files: images, favicon, CNAME, robots.txt
scripts/            # test-i18n-parity.ts
astro.config.mjs    # site URL, i18n routing, sitemap, Tailwind plugin
```

## Related repositories

| Repository                                                        | Relation                                                                                            |
| :---------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------- |
| [`web-frontend`](https://github.com/FatturaFacile/web-frontend)   | The web ERP that the site presents (demo at [demo.fatturafacile.eu](https://demo.fatturafacile.eu)) |
| [`web-api`](https://github.com/FatturaFacile/web-api)             | Backend API                                                                                         |
| [`assets`](https://github.com/FatturaFacile/assets)               | Logos, fonts and brand material                                                                     |
| [`FatturaFacile`](https://github.com/FatturaFacile/FatturaFacile) | Organization overview and repository map                                                            |

## Documentation

- [CONTRIBUTING.md](CONTRIBUTING.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md), [CHANGELOG.md](CHANGELOG.md)
- Project wiki: [FatturaFacile/FatturaFacile wiki](https://github.com/FatturaFacile/FatturaFacile/wiki)

## License

[MIT](LICENSE)
