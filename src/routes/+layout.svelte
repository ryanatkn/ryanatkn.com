<script lang="ts">
	import '@ryanatkn/fuz/style.css';
	import '@ryanatkn/fuz/theme.css';
	import '$routes/style.css';

	import Themed from '@ryanatkn/fuz/Themed.svelte';

	import Header from '$routes/Header.svelte';
	import Footer from '$routes/Footer.svelte';
	import {feed} from '$routes/blog/feed.js';
	import {set_blog_feed} from '$lib/blog.js';

	set_blog_feed(feed);
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
		<slot />
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
