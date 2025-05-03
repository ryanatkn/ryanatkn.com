import type {Create_Gitops_Config} from '@ryanatkn/fuz_gitops/gitops_config.js';

const config: Create_Gitops_Config = () => {
	return {
		repos: [
			{
				repo_url: 'https://github.com/ryanatkn/zzz',
				branch: 'add-server',
			},
			'https://github.com/ryanatkn/moss',
			'https://github.com/ryanatkn/fuz',
			'https://github.com/ryanatkn/gro',
			// 'https://github.com/ryanatkn/grogarden.org',
			'https://github.com/ryanatkn/fuz_template',
			'https://github.com/ryanatkn/belt',
			// 'https://github.com/ryanatkn/ztack.net',
			'https://github.com/ryanatkn/fuz_blog',
			'https://github.com/ryanatkn/fuz_mastodon',
			'https://github.com/ryanatkn/fuz_code',
			'https://github.com/ryanatkn/fuz_gitops',
			// 'https://github.com/ryanatkn/spiderspace.org',
			'https://github.com/ryanatkn/earbetter',
			{
				repo_url: 'https://github.com/ryanatkn/cosmicplayground',
				branch: 'svelte5',
			},
			'https://github.com/ryanatkn/dealt',
			'https://github.com/ryanatkn/webdevladder.net',
			'https://github.com/ryanatkn/ryanatkn.com',
		],
	};
};

export default config;
