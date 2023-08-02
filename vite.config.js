import {sveltekit} from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		// Ignore the default prismjs theme:
		// TODO try to avoid flashing the original Prism theme during dev
		{
			enforce: 'pre',
			load: (id) => {
				if (id.endsWith('node_modules/prismjs/themes/prism.min.css')) {
					return '';
				}
			},
		},
	],
	ssr: {noExternal: ['@feltjs/felt-ui']}, // TODO was using this instead of `optimizeDeps` but needed to switch, see that comment
};

export default config;
