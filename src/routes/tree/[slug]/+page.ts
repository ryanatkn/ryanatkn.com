import type {EntryGenerator} from './$types.js';
import {repos_parse} from '@ryanatkn/fuz_gitops/repo.svelte.js';

import {repos} from '$routes/repos.ts';

const parsed = repos_parse(repos, 'https://www.ryanatkn.com/');

export const entries: EntryGenerator = () => {
	return parsed.repos.map((d) => ({slug: d.repo_name}));
};
