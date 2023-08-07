import {sveltekit} from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	ssr: {noExternal: ['@feltjs/felt-ui']}, // TODO was using this instead of `optimizeDeps` but needed to switch, see that comment
};

export default config;
