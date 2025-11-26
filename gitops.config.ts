import type {CreateGitopsConfig} from '@ryanatkn/fuz_gitops/gitops_config.js';

const config: CreateGitopsConfig = () => {
	return {
		repos: [
			'https://github.com/ryanatkn/zzz',
			'https://github.com/ryanatkn/moss',
			'https://github.com/ryanatkn/fuz',
			'https://github.com/ryanatkn/gro',
			'https://github.com/ryanatkn/belt',
			'https://github.com/ryanatkn/fuz_template',
			'https://github.com/ryanatkn/fuz_blog',
			'https://github.com/ryanatkn/fuz_mastodon',
			'https://github.com/ryanatkn/fuz_code',
			'https://github.com/ryanatkn/fuz_gitops',
			'https://github.com/ryanatkn/webdevladder.net',
			{
				repo_url: 'https://github.com/ryanatkn/ryanatkn.com',
				branch: 'main',
			},
		],
	};
};

export default config;
