<script lang="ts">
	import BlogPostHeader from '$lib/BlogPostHeader.svelte';
	import BlogPostFooter from '$lib/BlogPostFooter.svelte';
	import type {FeedItem} from '$lib/feed.js';

	export let post: FeedItem;
	export let classes: string | undefined = undefined;
</script>

<svelte:head>
	<title>{post.title} - ryanatkn.com/blog</title>
</svelte:head>

<article class={classes}>
	<header class="prose">
		<BlogPostHeader {post} />
	</header>
	<slot />
	<hr />
	<BlogPostFooter {post} />
</article>

<style>
	article {
		width: var(--width_md);
	}
</style>
