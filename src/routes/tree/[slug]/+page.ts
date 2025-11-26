import type {EntryGenerator} from './$types.js';
import {Repo, repos_parse} from '@ryanatkn/fuz_gitops/repo.svelte.js';

import {repos_json} from '$routes/repos.ts';

const parsed = repos_parse(repos_json.map((r) => new Repo(r)), 'https://www.ryanatkn.com/');

export const entries: EntryGenerator = () => {
	return parsed.repos.map((d) => ({slug: d.library.repo_name}));
};
