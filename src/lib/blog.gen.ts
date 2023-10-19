import type {Gen} from '@grogarden/gro/gen.js';
import {exists} from '@grogarden/gro/exists.js';
import { cwd } from 'node:process';
import { join } from 'node:path';

import {create_atom_feed, type Feed} from '$lib/feed.js';

/* eslint-disable no-await-in-loop */

// TODO fix this, the worst part is I'm eagerly loading all components, see `./blog_components.ts` --
// loading async is a bad UX, but I'm not sure of the best way
// to integrate with SvelteKit's routing and a good blog publishing flow -
// I like having the directories be integers, but maybe that's a lost cause

// TODO refactor this to be reusable (see args below)

export const gen: Gen = async () => {

	// TODO parameterize
	const dir = cwd();
	const blog_dirname = 'blog';
	const blog_dir = join(dir, 'src/routes', blog_dirname)
	
	const {feed} = await import(join(blog_dir, 'feed.js'));

	const items: number[] = [];

	let i = 1;
	while (true) {
		if (!(await exists(join(blog_dir, `${i}/+page.svelte`)))) {
			break;
		}
		items.push(i);
		i++;
	}

	return [
		{
			filename: '../../static/blog/feed.xml',
			content: create_atom_feed(feed),
		},
		{
			filename: '../routes/blog/posts.ts',
			content: `
				import type {FeedItem} from '$lib/feed.js';
				${items
					.map((i) => `import {post as post${i}} from '$routes/${blog_dirname}/${i}/+page.svelte'`)
					.join(';\n')};

				export const posts: FeedItem[] = [${items.map((i) => `post${i}`).join(', ')}];
			`,
		},
		{
			filename: '../routes/blog/blog_components.ts',
			content: `// TODO @multiple rethink this, we don't want to load all components at each route
				${items.map((i) => `import page${i} from '$routes/${blog_dirname}/${i}/+page.svelte'`).join(';\n')};

				export const blog_components = [${items.map((i) => `page${i}`).join(', ')}];
			`,
		},
		{
			filename: '../routes/blog/blog.json',
			// TODO `entries` isn't included in `Feed` but we use it from the SvelteKit config
			content: JSON.stringify(feed),
		},
		{
			filename: '../routes/blog/blog.json.d.ts',
			content: `declare module '$routes/blog/blog.json' {
        import type {Feed} from '$lib/feed.js';
        const data: Feed;
        export default data;
      }`,
		},
		{
			filename: '../routes/blog/blog_entries.json',
			// TODO `entries` isn't included in `Feed` but we use it from the SvelteKit config
			content: JSON.stringify({entries: to_prerender_entries(feed)}),
		},
		{
			filename: '../routes/blog/blog_entries.json.d.ts',
			content: `declare module '$routes/blog/blog_entries.json' {
				const data: {entries: string[]};
				export default data;
			}`,
		},
	];
};

const to_prerender_entries = (blog: Feed): string[] => {
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
