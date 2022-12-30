import {typescript} from 'svelte-preprocess-esbuild';
import adapter from '@sveltejs/adapter-static';
import {readFileSync} from 'fs';

// TODO import json directly when stable, don't want to deal with the warning for now
// import blog from './src/lib/blog.json' assert {type: 'json'};
const blog = JSON.parse(readFileSync('./src/lib/blog.json', 'utf8'));

const toPrerenderEntries = () => {
	const entries = [];
	for (let index = 0; index < blog.items.length; index++) {
		const item = blog.items[index];
		const {pathname} = new URL(item.url);
		entries.push(pathname);
		// replace the last segment with the index
		for (let i = pathname.length - 1; i >= 0; i--) {
			if (pathname[i] === '/') {
				entries.push(pathname.substring(0, i + 1) + index);
				break;
			}
		}
	}
	return entries;
};

console.log(`toPrerenderEntries()`, toPrerenderEntries());

/** @type {import('@sveltejs/kit').Config} */
export default {
	preprocess: typescript(),
	compilerOptions: {immutable: true},
	kit: {
		adapter: adapter(),
		files: {assets: 'src/static'},
		prerender: {entries: toPrerenderEntries()},
	},
};
