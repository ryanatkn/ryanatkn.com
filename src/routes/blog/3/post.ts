// TODO maybe revert this to Svelte module context?

import type {FeedItemData} from '$lib/feed';

export const post: FeedItemData = {
	id: 'https://www.ryanatkn.com/blog/3',
	title: 'Moderated blog comments with Mastodon on a static website with SvelteKit',
	url: 'https://www.ryanatkn.com/blog/moderated-blog-comments-with-mastodon-on-a-static-website-with-sveltekit',
	date_published: '2023-07-24T01:50:35.017Z',
	date_modified: '2023-07-24T01:50:35.017Z',
	summary:
		'Enabling moderated comments on my static blog using Mastodon with TypeScript, Svelte, and SvelteKit.',
	tags: [
		'web',
		'ActivityPub',
		'ActivityStreams',
		'Fediverse',
		'social media',
		'design',
		'technology',
		'software',
	],
};
