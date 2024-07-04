import type {EntryGenerator} from './$types.js';
import {parse_deployments} from '@ryanatkn/fuz_gitops/deployments.js';

import {deployments} from '$routes/repos.ts';

// TODO fix JSON types
const parsed = parse_deployments(deployments, 'https://www.ryanatkn.com/');

export const entries: EntryGenerator = () => {
	return parsed.deployments.map((d) => ({slug: d.repo_name}));
};
