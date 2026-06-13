import type {CreateGitopsConfig} from '@fuzdev/fuz_gitops/gitops_config.js';

const config: CreateGitopsConfig = () => {
	return {
		repos: [
			{
				repo_url: 'https://github.com/fuzdev/zzz',
				branch: 'fuz-app',
			},
			'https://github.com/fuzdev/fuz_css',
			'https://github.com/fuzdev/fuz_ui',
			'https://github.com/fuzdev/gro',
			'https://github.com/fuzdev/fuz_util',
			// 'https://github.com/fuzdev/mdz',
			'https://github.com/fuzdev/fuz_template',
			'https://github.com/fuzdev/fuz_blog',
			'https://github.com/fuzdev/fuz_mastodon',
			'https://github.com/fuzdev/fuz_code',
			'https://github.com/fuzdev/fuz_gitops',
			'https://github.com/fuzdev/svelte-docinfo',
			'https://github.com/fuzdev/fuz_app',
			'https://github.com/fuzdev/fuz_docs',
			'https://github.com/fuzdev/tsv',
			'https://github.com/fuzdev/tsv.fuz.dev',
			'https://github.com/ryanatkn/webdevladder.net',
			'https://github.com/ryanatkn/cosmicplayground',
			{
				repo_url: 'https://github.com/ryanatkn/ryanatkn.com',
				branch: 'main',
			},
			// 'https://github.com/fuzdev/fuz.dev',
		],
	};
};

export default config;
