import type {Gen} from '@feltjs/gro';
import {stripStart, stripEnd} from '@feltjs/util/string.js';

import {feed} from '../routes/blog/feed';
import type {FeedData} from '$lib/feed';

/* eslint-disable no-await-in-loop */

// TODO fix this, the worst part is I'm eagerly loading all components, see `./blog_components.ts` --
// loading async is a bad UX, but I'm not sure of the best way
// to integrate with SvelteKit's routing and a good blog publishing flow -
// I like having the directories be integers, but maybe that's a lost cause

// TODO refactor this to be reusable (see args below)

export const gen: Gen = async ({fs}) => {
	const TODO_get_from_maybe_args = 'blog'; // TODO args? process.argv? something else? see `blog.task.ts`'s `url` arg
	const path = stripStart(stripEnd(TODO_get_from_maybe_args, '/'), '/');

	const items: number[] = [];

	let i = 1;
	while (true) {
		if (!(await fs.exists(`src/routes/${path}/${i}/post.ts`))) {
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
				${items.map((i) => `import {post as p${i}} from '../routes/${path}/${i}/post'`).join(';\n')};

				export const posts: FeedItemData[] = [${items.map((i) => `p${i}`).join(', ')}];
			`,
		},
		{
			filename: './blog_components.ts',
			content: `
				${items.map((i) => `import s${i} from '../routes/${path}/${i}/post.svelte'`).join(';\n')};

				export const components = [${items.map((i) => `s${i}`).join(', ')}];
			`,
		},
		{
			filename: './blog.json',
			// TODO `entries` isn't included in `FeedData` but we use it from the SvelteKit config
			content: JSON.stringify({...feed, entries: toPrerenderEntries(feed)}),
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
				entries.push(pathname.substring(0, i + 1) + (1 + index));
				break;
			}
		}
	}
	return entries;
};
