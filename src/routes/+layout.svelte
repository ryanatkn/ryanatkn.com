<script lang="ts">
	import '@fuz.dev/fuz/style.css';
	import '@fuz.dev/fuz/theme.css';
	import '$routes/style.css';

	import Themed from '@fuz.dev/fuz/Themed.svelte';

	import Header from '$routes/Header.svelte';
	import Footer from '$routes/Footer.svelte';
	import {content_security_poilicy} from '$routes/security.js';
</script>

<svelte:head>
	<title>ryanatkn.com</title>
	<link
		rel="alternate"
		type="application/atom+xml"
		title="Atom"
		href="https://www.ryanatkn.com/blog/feed.xml"
	/>
	<meta http-equiv="content-security-policy" content={content_security_poilicy} />
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
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
