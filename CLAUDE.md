# ryanatkn.com

Personal site (`@ryanatkn/ryanatkn.com`) — a SvelteKit app.

## Project & repo data

- `gitops.config.ts` — repos tracked by fuz_gitops, fetched into the large
  generated `src/routes/repos.json` (don't hand-edit the JSON).
- `src/routes/projects.gen.ts` — curated homepage project list (merges
  metadata from `repos.json`). Edit here, then `gro gen` to regenerate
  `src/routes/projects.ts`.
