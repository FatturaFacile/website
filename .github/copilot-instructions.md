# Copilot instructions

Project: Astro 7 static website (TypeScript, pnpm).

Full cross-tool rules: `.ai/rules/project.md` (read it first).

## Essentials

- Write all code, comments, commit messages and documentation in English.
- Fix every error you meet, also outside the request.
- Never add dependencies or secrets; follow the sibling files of the area you change.
- Static, content-first pages; keep every page accessible (WCAG AA) and fast.
- Every user-facing text exists in all supported languages: `pnpm test:i18n` must pass.
- No secrets or API hosts hardcoded in source; use `.env.example` names.

## Commands

- `pnpm dev` / `pnpm build` (the build runs the i18n parity check first)
- `pnpm check` (astro check), `pnpm lint`, `pnpm format:check`, `pnpm test:i18n`
