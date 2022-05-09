<script lang="ts">
	import LinkPath from '@feltcoop/felt/ui/LinkPath.svelte';

	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import Favicon from '$lib/Favicon.svelte';
</script>

<main>
	<Header />
	<div class="blog">
		<LinkPath><Favicon /></LinkPath>
	</div>
	<div class="column markup">
		<slot />
	</div>
	<LinkPath><Favicon /></LinkPath>
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
	.blog {
		margin-top: var(--spacing_xl);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
