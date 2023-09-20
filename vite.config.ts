import type {UserConfig} from 'vite';
import {sveltekit} from '@sveltejs/kit/vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	ssr: {noExternal: ['@feltjs/felt-ui']}, // TODO was using this instead of `optimizeDeps` but needed to switch, see that comment
};

export default config;
