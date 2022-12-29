<script lang="ts">
	import BlogPostHeader from '$lib/BlogPostHeader.svelte';
	import type {FeedItemData} from '$lib/feed';
	import type {SvelteComponent} from 'svelte';

	export let post: FeedItemData;
	export let Component: typeof SvelteComponent;
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<BlogPostHeader {post} />
<svelte:component this={Component} />
