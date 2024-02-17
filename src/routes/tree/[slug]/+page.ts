import type {EntryGenerator} from './$types';
import {parse_deployments} from '@ryanatkn/fuz_gitops/deployments.js';

import deployments from '$lib/deployments.json';

const parsed = parse_deployments(deployments, 'https://www.ryanatkn.com/');

export const entries: EntryGenerator = async () => {
	return parsed.deployments.map((d) => ({slug: d.repo_name}));
};
