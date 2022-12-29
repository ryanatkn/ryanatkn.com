import type {Gen} from '@feltcoop/gro';
import {toImportId} from '@feltcoop/gro/dist/paths.js';
import {resolve} from 'path';

import type {FeedItemData} from '$lib/feed';

/* eslint-disable no-await-in-loop */

export const gen: Gen = async () => {
	const posts: FeedItemData[] = [];

	let i = 0;
	while (true) {
		const path = resolve(`src/routes/blog/[slug]/${i}.svelte`);
		let mod: any;
		try {
			mod = await import(toImportId(path, true, 'system'));
			console.log(`mod`, mod);
		} catch (_err) {
			break;
		}
		const {post} = mod;
		if (!post) throw Error(`Expected post export from component module scope for ${path}`);
		posts.push(mod.post);
		i++;
	}

	return [
		{
			filename: './blog.json',
			content: `{"posts": [${posts.map((p) => JSON.stringify(p)).join(',')}]}
  `,
		},
		{
			filename: './blog.json.d.ts',
			content: `declare module '$lib/blog.json' {
        import type {FeedItemData} from '$lib/feed';
        const data: {posts: FeedItemData[]};
        export default data;
      }`,
		},
		{
			filename: './blog.ts',
			content: `
        export {default as blog} from '$lib/blog.json';

        ${posts.map((_, i) => `import C${i} from '../routes/blog/[slug]/${i}.svelte';`).join('\n')}
  
        export const Components = [${posts.map((_, i) => 'C' + i).join(', ')}];
      `,
		},
	];
};
