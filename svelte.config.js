import {vitePreprocess} from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [vitePreprocess()],
	compilerOptions: {immutable: true},
	vitePlugin: {inspector: true}, // docs: https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md
	kit: {
		adapter: adapter(),
		alias: {$routes: 'src/routes', $fixtures: 'src/fixtures'},
		// TODO improve the CSP - https://github.com/ryanatkn/ryanatkn.com/pull/12
		csp: {
			directives: {
				// 'default-src': ['self'],
				// 'script-src': ['self'],
				'connect-src': ['self', 'https://hci.social/'],
				'style-src': [], // support Svelte transitions - https://kit.svelte.dev/docs/configuration#csp
				'img-src': [
					'self',
					'https://hci.social/',
					'https://storage.googleapis.com/hci-social-storage/',
				],
			},
		},
	},
};
