// TODO maybe revert this to Svelte module context?

import type {FeedItemData} from '$lib/feed';

export const post: FeedItemData = {
	id: 'https://www.ryanatkn.com/blog/3',
	title: 'Moderated blog comments on a static website with Mastodon and SvelteKit',
	url: 'https://www.ryanatkn.com/blog/moderated-blog-comments-on-a-static-website-with-mastodon-and-sveltekit',
	date_published: '2023-07-24T01:50:35.017Z',
	date_modified: '2023-07-24T01:50:35.017Z',
	summary:
		'How I implemented allowlisted comments on my static blog using Mastodon with TypeScript, Svelte, and SvelteKit.',
	tags: [
		'web',
		'blog comments',
		'Mastodon',
		'ActivityPub',
		'ActivityStreams',
		'Fediverse',
		'design',
		'technology',
		'software',
	],
};
