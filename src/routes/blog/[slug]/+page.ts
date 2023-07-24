import {readFileSync} from 'node:fs';
import type {EntryGenerator} from './$types';

export const entries: EntryGenerator = () => {
	const blog = JSON.parse(readFileSync('./src/lib/blog.json', 'utf8'));
	console.log(`blog`, blog.entries);
	return blog.entries;
};

export const prerender = true; // TODO is this needed?
