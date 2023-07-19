<script lang="ts" context="module">
	import PendingButton from '@feltjs/felt-ui/PendingButton.svelte';

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

	const host = 'mstdn.social';
	const id = '110702983310017651';
</script>

<h2>Introduction</h2>
<Replies {host} {id} let:data let:api_url let:load let:loading>
	<PendingButton pending={loading || false} on:click={() => load()}
		>load comments from {host}</PendingButton
	>
	<blockquote>fetching from <code>{api_url}</code></blockquote>
	{#if data}
		{#each data.descendants as item}
			<StatusCard {item} />
		{/each}
	{:else if loading === false}
		<div>something went wrong (TODO proper error message)</div>
	{/if}
</Replies>
