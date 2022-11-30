<script lang="ts">
	import Breadcrumbs from '@feltcoop/felt/Breadcrumbs.svelte';

	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Favicon from '$lib/Favicon.svelte';
</script>

<main>
	<Header />
	<div class="breadcrumbs">
		<Breadcrumbs><Favicon /></Breadcrumbs>
	</div>
	<slot />
	<div class="breadcrumbs">
		<Breadcrumbs><Favicon /></Breadcrumbs>
	</div>
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
	.breadcrumbs {
		margin-top: var(--spacing_xl3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
