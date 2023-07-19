<script lang="ts" context="module">
	import PendingAnimation from '@feltjs/felt-ui/PendingAnimation.svelte';

	import StatusCard from '$lib/StatusCard.svelte';
	import Replies from '$lib/Replies.svelte';
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

<h2>Introduction</h2>
<Replies host="mstdn.social" id="110702983310017651" let:data let:api_url>
	fetching {api_url}
	{#if data}
		{#each data.descendants as item}
			<StatusCard {item} />
		{/each}
	{:else if data === null}
		<div>something went wrong (TODO get error message)</div>
	{:else}
		<PendingAnimation />
	{/if}
</Replies>
