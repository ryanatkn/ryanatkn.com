<script lang="ts">
	import '@ryanatkn/moss/style.css';
	import '@ryanatkn/moss/theme.css';
	import '$routes/style.css';

	import Themed from '@ryanatkn/fuz/Themed.svelte';
	import type {Snippet} from 'svelte';
	import {blog_feed_context} from '@ryanatkn/fuz_blog/blog.js';

	import Header from '$routes/Header.svelte';
	import Footer from '$routes/Footer.svelte';
	import {feed} from '$routes/blog/feed.js';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	blog_feed_context.set(feed);
</script>

<svelte:head>
	<title>ryanatkn.com</title>
	<!-- TODO add JSONFeed -->
	<link rel="alternate" type="application/atom+xml" title="Atom" href={feed.atom.feed_url} />
</svelte:head>

<Themed>
	<main>
		<Header />
		<!-- TODO maybe add a flex_1 block here? -->
		{@render children()}
		<Footer />
	</main>
</Themed>

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
