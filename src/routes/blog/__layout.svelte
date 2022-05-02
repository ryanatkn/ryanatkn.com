<script lang="ts">
	import LinkPath from '@feltcoop/felt/ui/LinkPath.svelte';
	import {page} from '$app/stores';

	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Favicon from '$lib/Favicon.svelte';
</script>

<main>
	<Header />
	<div class="column markup">
		<slot />
	</div>
	<LinkPath path={$page.url.pathname} selectedPath={$page.url.pathname}><Favicon /></LinkPath>
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
		justify-content: flex-start;
	}
	.column {
		flex: 1;
	}
</style>
