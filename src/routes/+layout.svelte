<script lang="ts">
	import '@fuz.dev/fuz/style.css';
	import '@fuz.dev/fuz/theme.css';
	import '$routes/style.css';

	import Themed from '@fuz.dev/fuz/Themed.svelte';
	import {dev} from '$app/environment';

	import Header from '$routes/Header.svelte';
	import Footer from '$routes/Footer.svelte';

	const content_security_poilicy = dev
		? "default-src 'unsafe-inline' 'self';"
		: "default-src 'unsafe-inline' 'self'; img-src https://*;";
</script>

<svelte:head>
	<title>ryanatkn.com</title>
	<link
		rel="alternate"
		type="application/atom+xml"
		title="Atom"
		href="https://www.ryanatkn.com/feed.xml"
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
