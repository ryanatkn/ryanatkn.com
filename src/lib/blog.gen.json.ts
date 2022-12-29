import type {Gen} from '@feltcoop/gro';

import {feedData} from '$lib/feedData';

// TODO refactor this to be reusable
// TODO should this be `blog` or a more generic `feedData`?

export const gen: Gen = async () => {
	return [
		{
			filename: './blog.json',
			content: JSON.stringify(feedData),
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
