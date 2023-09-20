import type {Gen} from '@feltjs/gro/gen/gen.js';
import {stripStart, stripEnd} from '@feltjs/util/string.js';
import {exists} from '@feltjs/gro/util/exists.js';

import {feed} from '../routes/blog/feed';
import type {FeedData} from '$lib/feed';

/* eslint-disable no-await-in-loop */

// TODO refactor this to be reusable (see args below)

export const gen: Gen = async () => {
	const TODO_get_from_maybe_args = 'blog'; // TODO args? process.argv? something else? see `blog.task.ts`'s `url` arg
	const path = stripStart(stripEnd(TODO_get_from_maybe_args, '/'), '/') + '/[slug]';

	const items: number[] = [];

	let i = 0;
	while (true) {
		if (!(await exists(`src/routes/${path}/${i}.svelte`))) {
			break;
		}
		items.push(i);
		i++;
	}

	return [
		{
			filename: './blog.ts',
			content: `
				import type {FeedItemData} from '$lib/feed';
				${items.map((i) => `import * as p${i} from '../routes/${path}/${i}.svelte'`).join(';\n')};
				
				// TODO maybe export these zipped together into objects? currently have to match by index

				export const posts: FeedItemData[] = [${items.map((i) => `p${i}.post`).join(', ')}];

				export const Components = [${items.map((i) => `p${i}.default`).join(', ')}];
			`,
		},
		{
			filename: './blog.json',
			// TODO `entries` isn't included in `FeedData` but we use it from the SvelteKit config
			content: JSON.stringify(feed),
		},
		{
			filename: './blog_entries.json',
			// TODO `entries` isn't included in `FeedData` but we use it from the SvelteKit config
			content: JSON.stringify({entries: toPrerenderEntries(feed)}),
		},
		{
			filename: './blog.json.d.ts',
			content: `declare module '$lib/blog.json' {
        import type {FeedData} from '$lib/feed';
        const data: FeedData;
        export default data;
      }`,
		},
	];
};

const toPrerenderEntries = (blog: FeedData): string[] => {
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
