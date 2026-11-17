# JetBrains AI / Junie Guidelines

Refer to [AGENTS.md](../AGENTS.md) as the single source of truth for repository structure, conventions, and quality gates.

## Key Instructions

- **Architecture**: Astro 7 SSG web application with TypeScript, Tailwind CSS v4, and localized routing.
- **Verification Commands**:
  - `npm run test:i18n` — verify complete translation parity across all locales.
  - `npm run check` — Astro & TypeScript type check.
  - `npm run lint` — ESLint static analysis.
  - `npm run format:check` — Prettier style validation.
  - `npm run build` — Full static build.
- **Strict Typing**: No `any`; maintain strict TypeScript typing across all components and scripts.
