import {typescript} from 'svelte-preprocess-esbuild';
import adapter from '@sveltejs/adapter-static';
import {readFileSync} from 'fs';

// TODO import json directly when stable, don't want to deal with the warning for now
// import blog from './src/lib/blog.json' assert {type: 'json'};
let blog;
try {
	blog = JSON.parse(readFileSync('./src/lib/blog.json', 'utf8'));
} catch (err) {}

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: typescript(),
	compilerOptions: {immutable: true},
	kit: {
		adapter: adapter(),
		files: {assets: 'src/static'},
		alias: {$routes: 'src/routes'},
		prerender: {entries: blog?.entries},
	},
};
