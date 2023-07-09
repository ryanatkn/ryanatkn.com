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
		// TODO is very messy and error prone, didn't used to need to enumerate the paths like this (blog.entries used to be enough before an upgrade)
		prerender: blog
			? {entries: ['/', '/about', '/blog', '/influences'].concat(blog.entries)}
			: undefined,
	},
};
