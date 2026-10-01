import type { GitopsConfig } from '@fuzdev/fuz_repos/gitops_config.ts';

// repos.toml registry keys; everything else about each repo comes from the registry
const config: GitopsConfig = {
	repos: [
		'fuz_template',
		'fuz_css',
		'fuz_ui',
		'gro',
		'fuz_app',
		'mdz',
		'fuz_util',
		'fuz_blog',
		'fuz_mastodon',
		'fuz_code',
		'fuz_repos',
		'svelte-docinfo',
		'tsv',
		'tsv.fuz.dev',
		'webdevladder.net',
		'zzz',
		'ryanatkn.com'
		// 'fuz.dev',
	]
};

export default config;
