# Claude Code Instructions

@AGENTS.md

## Execution Discipline

- Read and follow all architectural guidelines and quality standards in `AGENTS.md`.
- Prior to completing any modification, run all quality gates:
  - `npm run test:i18n` (i18n parity check)
  - `npm run lint` (ESLint analysis)
  - `npm run check` (Astro & TypeScript verification)
  - `npm run format:check` (Prettier validation)
- Keep all work confined to isolated feature branches or git worktrees.
- Use Conventional Commits for all commit messages.
