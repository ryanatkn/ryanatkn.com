<script lang="ts" context="module">
	import Toot from '$lib/TootDetail.svelte';
	import type {FeedItemData} from '$lib/feed';
	import data from '$routes/blog/[slug]/2/data.json';

	console.log(`data`, data);

	export const post: FeedItemData = {
		id: 'https://www.ryanatkn.com/blog/2',
		title: 'Blog comments with Mastodon on a static SvelteKit website',
		url: 'https://www.ryanatkn.com/blog/blog-comments-with-mastodon-on-a-static-sveltekit-website',
		date_published: '2023-07-19T21:44:17.224Z',
		date_modified: '2023-07-19T21:44:17.224Z',
		summary: 'Adding Mastodon comments to my static blog with TypeScript, Svelte, and SvelteKit.',
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
</script>

<h2>Introduction</h2>
<blockquote>https://hci.social/api/v1/statuses/110702983634003233/context</blockquote>
<div>
	{#each data.descendants as item}
		<Toot {item} />
	{/each}
</div>
