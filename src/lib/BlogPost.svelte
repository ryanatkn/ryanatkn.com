<script lang="ts">
	import BlogPostHeader from '$lib/BlogPostHeader.svelte';
	import BlogPostFooter from '$lib/BlogPostFooter.svelte';
	import {get_blog_feed, type BlogPostData} from '$lib/blog.js';

	export let post: BlogPostData;
	export let classes: string | undefined = undefined;

	const feed = get_blog_feed();

	const item = feed.items.find((i) => i.slug === post.slug);
</script>

<svelte:head>
	<title>{post.title} - ryanatkn.com/blog</title>
</svelte:head>

{#if item}
	<article class={classes}>
		<header class="prose">
			<BlogPostHeader {item} />
		</header>
		<slot />
		<hr />
		<BlogPostFooter {item} />
	</article>
{:else}
	<div>cannot find post <code>{post.slug}</code></div>
{/if}

<style>
	article {
		width: var(--width_md);
	}
</style>
