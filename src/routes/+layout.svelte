<script lang="ts">
	import '$routes/fuz.css';
	import '@fuzdev/fuz_code/theme.css';
	import '$routes/style.css';

	import ThemeRoot from '@fuzdev/fuz_ui/ThemeRoot.svelte';
	import type {Snippet} from 'svelte';
	import {blog_feed_context} from '@fuzdev/fuz_blog/blog.js';

	import Header from '$routes/Header.svelte';
	import Footer from '$routes/Footer.svelte';
	import {feed} from '$routes/blog/feed.ts';

	const {
		children,
	}: {
		children: Snippet;
	} = $props();

	blog_feed_context.set(feed);
</script>

<svelte:head>
	<title>ryanatkn.com</title>
	<!-- TODO add JSONFeed -->
	<link rel="alternate" type="application/atom+xml" title="Atom" href={feed.atom.feed_url} />
</svelte:head>

<ThemeRoot>
	<main>
		<Header />
		<!-- TODO maybe add a flex:1 display:block here? -->
		{@render children()}
		<Footer />
	</main>
</ThemeRoot>

<style>
	main {
		min-height: 100%;
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
