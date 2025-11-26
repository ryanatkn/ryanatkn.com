import type {EntryGenerator} from './$types.js';
import {repos_parse} from '@ryanatkn/fuz_gitops/repo.svelte.js';

import {repos_json} from '$routes/repos.ts';

const parsed = repos_parse(repos_json, 'https://www.ryanatkn.com/');

export const entries: EntryGenerator = () => {
	return parsed.repos.map((d) => ({slug: d.library.repo_name}));
};
