<script lang="ts">
	import {page} from '$app/stores';
	import {goto} from '$app/navigation';
	import {browser} from '$app/environment';
	import Message from '@feltjs/felt-ui/Message.svelte';

	import BlogPost from '$lib/BlogPost.svelte';
	import {components} from '$lib/blog_components';
	import type {FeedData} from '$lib/feed';

	export let feed: FeedData;

	$: ({slug} = $page.params);
	$: rawIndex = /^\d+$/u.test(slug)
		? Number(slug)
		: feed.items.findIndex((f) => f.url.endsWith(slug));
	$: index = rawIndex === -1 || Number.isNaN(rawIndex) ? null : rawIndex;
	$: post = index === null ? null : feed.items[index];
	$: component = index === null ? null : components[index];

	// redirect from index to slug
	$: if (browser && typeof rawIndex === 'number' && post) {
		void goto(new URL(post.url).pathname, {replaceState: true});
	}
</script>

{#if post && component}
	<BlogPost {post} {component} />
{:else}
	<Message status="error">no post found, is the path correct?</Message>
{/if}
