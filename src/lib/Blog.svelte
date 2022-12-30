<script lang="ts">
	import {page} from '$app/stores';
	import {goto} from '$app/navigation';
	import {browser} from '$app/environment';
	import Message from '@feltcoop/felt/Message.svelte';

	import BlogPost from '$lib/BlogPost.svelte';
	import {Components} from '$lib/blog';
	import type {FeedData} from './feed';

	export let feed: FeedData;

	$: ({slug} = $page.params);
	$: rawIndex = /^\d+$/u.test(slug)
		? Number(slug)
		: feed.items.findIndex((f) => f.url.endsWith(slug));
	$: index = rawIndex === -1 || Number.isNaN(rawIndex) ? null : rawIndex;
	$: post = index !== null && feed.items[index];
	$: Component = index !== null && Components[index];

	// redirect from index to slug
	$: if (browser && typeof rawIndex === 'number' && post) {
		void goto(new URL(post.url).pathname, {replaceState: true});
	}
</script>

{#if post && Component}
	<BlogPost {post} {Component} />
{:else}
	<Message status="error">no post found, is the path correct?</Message>
{/if}
