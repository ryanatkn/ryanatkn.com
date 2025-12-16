import type {CreateGitopsConfig} from '@fuzdev/fuz_gitops/gitops_config.js';

const config: CreateGitopsConfig = () => {
	return {
		repos: [
			'https://github.com/fuzdev/zzz',
			'https://github.com/fuzdev/fuz_css',
			'https://github.com/fuzdev/fuz_ui',
			'https://github.com/ryanatkn/gro',
			'https://github.com/fuzdev/fuz_util',
			'https://github.com/fuzdev/fuz_template',
			'https://github.com/fuzdev/fuz_blog',
			'https://github.com/fuzdev/fuz_mastodon',
			'https://github.com/fuzdev/fuz_code',
			'https://github.com/fuzdev/fuz_gitops',
			'https://github.com/ryanatkn/webdevladder.net',
			{
				repo_url: 'https://github.com/ryanatkn/ryanatkn.com',
				branch: 'main',
			},
		],
	};
};

export default config;
