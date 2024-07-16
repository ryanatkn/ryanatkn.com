import type {EntryGenerator} from './$types.js';
import {parse_repos} from '@ryanatkn/fuz_gitops/repo.js';

import {repos} from '$routes/repos.js';

const parsed = parse_repos(repos, 'https://www.ryanatkn.com/');

export const entries: EntryGenerator = () => {
	return parsed.repos.map((d) => ({slug: d.repo_name}));
};
