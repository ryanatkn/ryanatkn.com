<script lang="ts">
	import '@feltjs/felt-ui/style.css';

	import '$lib/style.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
</script>

<svelte:head>
	<title>ryanatkn.com</title>
	<link
		rel="alternate"
		type="application/atom+xml"
		title="Atom"
		href="https://www.ryanatkn.com/feed.xml"
	/>
</svelte:head>

<main>
	<Header />
	<slot />
	<Footer />
</main>

<style>
	main {
		min-height: 100%;
		width: 100%;
		position: relative;
		/* TODO should these be on `.column` ? */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
