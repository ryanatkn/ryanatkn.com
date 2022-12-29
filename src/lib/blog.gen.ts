import type {Gen} from '@feltcoop/gro';

import {feed} from '../routes/blog/feed';

/* eslint-disable no-await-in-loop */

// TODO refactor this to be reusable
// TODO should this be `blog` or a more generic `feedData`?

export const gen: Gen = async ({fs}) => {
	const items: number[] = [];

	let i = 0;
	while (true) {
		if (!(await fs.exists(`src/routes/blog/[slug]/${i}.svelte`))) {
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
				${items.map((i) => `import * as p${i} from '../routes/blog/[slug]/${i}.svelte'`).join(';\n')};
				
				// TODO maybe export these zipped together into objects? currently have to match by index

				export const posts: FeedItemData[] = [${items.map((i) => `p${i}.post`).join(', ')}];

				export const Components = [${items.map((i) => `p${i}.default`).join(', ')}];
			`,
		},
		{
			filename: './blog.json',
			content: JSON.stringify(feed),
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
