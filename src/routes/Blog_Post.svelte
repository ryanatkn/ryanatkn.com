<script lang="ts">
	import Blog_Post_Header from '$routes/Blog_Post_Header.svelte';
	import Blog_Post_Footer from '$routes/Blog_Post_Footer.svelte';
	import {get_blog_feed, type Blog_Post_Data} from '$lib/blog.js';

	export let post: Blog_Post_Data;
	export let classes: string | undefined = undefined;

	const feed = get_blog_feed();

	const item = feed.items.find((i) => i.slug === post.slug);
</script>

<svelte:head>
	<title>{post.title} - ryanatkn.com/blog</title>
</svelte:head>

{#if item}
	<article class:width_md={true} class={classes}>
		<header>
			<Blog_Post_Header {item} />
		</header>
		<slot />
		<hr />
		<Blog_Post_Footer {item} />
	</article>
{:else}
	<div>cannot find post <code>{post.slug}</code></div>
{/if}
