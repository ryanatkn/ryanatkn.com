# ryanatkn.com

Personal site (`@ryanatkn/ryanatkn.com`) — a SvelteKit app.

## Project & repo data

- `gitops.config.ts` — repos tracked by fuz_repos, fetched into the large
  generated `src/routes/repos.json` (don't hand-edit the JSON) by
  `gro task src/lib/gitops_sync.task.ts`. The `src/lib/gitops_*.task.ts`
  files re-export fuz_repos tasks and run by path with `gro task`.
- `src/lib/projects.gen.ts` — curated homepage project list (merges
  metadata from `repos.json`). Edit here, then `gro gen` to regenerate
  `src/lib/projects.ts`.
