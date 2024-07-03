import type {EntryGenerator} from './$types.js';
import {parse_deployments} from '@ryanatkn/fuz_gitops/deployments.js';

import deployments from '$lib/deployments.json';

// TODO fix JSON types
const parsed = parse_deployments(deployments as any, 'https://www.ryanatkn.com/');

export const entries: EntryGenerator = async () => {
	return parsed.deployments.map((d) => ({slug: d.repo_name}));
};
