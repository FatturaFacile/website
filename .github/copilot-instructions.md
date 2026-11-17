# GitHub Copilot Instructions

Refer to [AGENTS.md](../AGENTS.md) for canonical project conventions, structure, and quality gates.

## Core Directives

- **Stack**: Astro 7, TypeScript (strict), Tailwind CSS v4, multi-language i18n (`it`, `en`, `fr`, `de`).
- **Templates**: Ensure Astro components adhere to `astro/no-set-html-directive` and use typed props (`Props`).
- **i18n Parity**: Any new translation key in `src/i18n/locales/it.ts` must also be present in `en.ts`, `fr.ts`, and `de.ts`.
- **Quality Gates**:
  - `npm run test:i18n` (i18n key synchronization)
  - `npm run check` (Astro type/diagnostic checks)
  - `npm run lint` (ESLint)
  - `npm run format:check` (Prettier)
