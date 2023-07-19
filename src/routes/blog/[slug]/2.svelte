<script lang="ts" context="module">
	import type {FeedItemData} from '$lib/feed';

	export const post: FeedItemData = {
		id: 'https://www.ryanatkn.com/blog/2',
		title: 'Blog comments with Mastodon on a static website with SvelteKit',
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

<script lang="ts">
	import BlogReplies from '$lib/BlogReplies.svelte';

	const host = 'mstdn.social';
	const id = '110702983310017651';
</script>

<div>
	<div class="prose">
		<h2>Introduction</h2>
	</div>
	<BlogReplies {host} {id} />
</div>
