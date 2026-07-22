<script lang="ts">
	import 'virtual:fuz.css';
	import '@fuzdev/fuz_code/theme.css';
	import './style.css';

	import ThemeRoot from '@fuzdev/fuz_ui/ThemeRoot.svelte';
	import { SiteState, site_context } from '@fuzdev/fuz_ui/site.svelte.ts';
	import type { Snippet } from 'svelte';
	import { blog_feed_context } from '@fuzdev/fuz_blog/blog.ts';
	import pkg_json from 'virtual:pkg.json';

	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import { feed } from './blog/feed.ts';

	const {
		children
	}: {
		children: Snippet;
	} = $props();

	site_context.set(new SiteState({ pkg_json }));
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
