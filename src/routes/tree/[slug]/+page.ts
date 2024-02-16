import type {EntryGenerator} from './$types';
import {parse_package_meta} from '@ryanatkn/fuz/package_meta.js';
import maybe_deployments from '@ryanatkn/fuz/deployments.json';

const deployments = maybe_deployments
	.map(({url, package_json, src_json}) =>
		package_json && src_json ? parse_package_meta(url, package_json, src_json) : null!,
	)
	.filter(Boolean);

export const entries: EntryGenerator = async () => {
	return deployments.map((pkg) => {
		return {slug: pkg.repo_name};
	});
};
