<script lang="ts">
	import '@feltjs/felt-ui/style.css';
	import '$lib/style.css';

	import Themed from '@feltjs/felt-ui/Themed.svelte';

	import Header from '$routes/Header.svelte';
	import Footer from '$routes/Footer.svelte';
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

<Themed>
	<main>
		<Header />
		<slot />
		<Footer />
	</main>
</Themed>

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
