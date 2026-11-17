# AGENTS.md — FatturaFacile Website

Canonical guideline and operational reference for AI coding agents working on the FatturaFacile marketing website.

## Project & Stack Overview

- **Framework**: Astro 7 (`astro` v7.4.x, Static Output / SSG)
- **Runtime & Language**: Node.js `>=22.23.4`, TypeScript 6 (`astro/tsconfigs/strict`, ESM `"type": "module"`)
- **Styling**: Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/vite`)
- **i18n & Locales**: Multi-language support (`it` default, `en`, `fr`, `de`), route slugs dictionary in `src/i18n/routes.ts`, locale strings in `src/i18n/locales/`
- **Quality & Formatters**: ESLint 10 (`typescript-eslint`, `eslint-plugin-astro`), Prettier 3 (`prettier-plugin-astro`, `prettier-plugin-tailwindcss`)
- **Architecture**: Static Site Generation (SSG). Pure frontend static site; no server runtime, database, or backend ORM in this repository.

### Directory Structure

```text
├── public/                 # Static assets (images, logos, favicon, robots.txt)
├── scripts/                # Verification & maintenance scripts (e.g. test-i18n-parity.ts)
├── src/
│   ├── components/         # Reusable Astro UI components (Header, Footer, CookieBanner, SEO, etc.)
│   ├── data/               # Static dataset definitions and structures
│   ├── i18n/               # Internationalization: dictionaries, routing slugs, language helpers
│   ├── layouts/            # Page layouts (Layout.astro)
│   ├── pages/              # Astro file-based routing: default IT routes & [lang] localized routes
│   ├── styles/             # Global styles (Tailwind theme imports, global.css)
│   └── utils/              # Helper utilities (analytics, security, i18n helpers)
├── astro.config.mjs        # Astro configuration & i18n redirect rules
└── eslint.config.mjs       # Flat ESLint configuration
```

## Coding & Quality Standards

- **Strict Typing**: TypeScript in strict mode. Avoid `any`; use strongly typed props (`interface Props`) for Astro components.
- **Astro Components**:
  - Keep frontmatter scripts focused on data retrieval, props handling, and translation lookup.
  - Adhere to `astro/no-set-html-directive` (do not bypass HTML sanitization).
  - External links must use `rel="noopener noreferrer"` and target attributes securely.
- **i18n Parity**: Any added or altered translation key in `src/i18n/locales/it.ts` MUST be mirrored across `en.ts`, `fr.ts`, and `de.ts`. Always verify with `npm run test:i18n`.
- **Styling**: Use utility classes with Tailwind CSS v4. Maintain consistent responsive design (mobile-first).
- **Zero-Warning Tolerance**: Ensure all linting, formatting checks, and type validations pass cleanly without unhandled warnings or errors.

## Exact Verification & Quality Gate Commands

All commands are defined in `package.json` and must pass before finalizing tasks:

| Purpose | Command | Notes |
| :--- | :--- | :--- |
| **i18n Parity Test** | `npm run test:i18n` | Runs `scripts/test-i18n-parity.ts` (enforces key parity across all 4 locales) |
| **Type & Astro Check** | `npm run check` | Runs `astro check` |
| **Lint Check** | `npm run lint` | Runs `eslint .` across TS, JS, and Astro files |
| **Lint Autofix** | `npm run lint:fix` | Automatically fixes autofixable ESLint issues |
| **Format Check** | `npm run format:check`| Checks files with Prettier |
| **Format Fix** | `npm run format` | Applies Prettier formatting across the codebase |
| **Build (SSG)** | `npm run build` | Triggers `prebuild` (i18n parity check) + `astro build` |
| **Dev Server** | `npm run dev` | Starts local dev server at `http://localhost:4321` |

## Agent Worktree & Execution Discipline

1. Always work in isolated git worktrees or dedicated branches for non-trivial features.
2. Run `npm run test:i18n`, `npm run check`, and `npm run lint` before committing any changes.
3. Keep commits atomic and follow Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`).
