import {vitePreprocess} from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: [vitePreprocess()],
	compilerOptions: {runes: true},
	// TODO ideally this would use the default but it conflicts with ctrl+shift+c in Chrome,
	// but it's strange to me that I'm resetting it to what the Mac default is
	vitePlugin: {inspector: {toggleKeyCombo: 'meta-shift'}}, // docs: https://github.com/sveltejs/vite-plugin-svelte/blob/main/docs/inspector.md
	kit: {
		adapter: adapter(),
		paths: {relative: false}, // use root-absolute paths: https://kit.svelte.dev/docs/configuration#paths
		alias: {$routes: 'src/routes', $fixtures: 'src/fixtures'},
		csp: {
			directives: {
				// TODO improve the CSP, is unsafe - https://github.com/ryanatkn/ryanatkn.com/pull/12
				// 'default-src': ['self'],
				// 'script-src': ['self'],
				'connect-src': ['self', 'https://hci.social/'],
				'style-src': ['self', 'unsafe-inline'], // support Svelte transitions - https://kit.svelte.dev/docs/configuration#csp
				'img-src': [
					'self',
					'unsafe-inline',
					'https://*.ryanatkn.com/',
					'https://*.spiderspace.org/',
					'https://*.webdevladder.net/',
					'https://*.fuz.dev/',
					'https://*.cosmicplayground.org/',
					'https://ryanatkn.github.io/',
					'https://hci.social/',
					'https://storage.googleapis.com/hci-social-storage/',
				],
			},
		},
	},
};
