<script lang="ts">
	import Breadcrumbs from '@feltcoop/felt/Breadcrumbs.svelte';

	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import PersonalStatement from '$lib/PersonalStatement.svelte';
	import Favicon from '$lib/Favicon.svelte';
</script>

<svelte:head>
	<title>ryanatkn.com</title>
</svelte:head>

<main>
	<Header />
	<div class="column markup padded-md">
		<PersonalStatement />
	</div>
	<Breadcrumbs
		><div class="linkpath">
			<Favicon />
			<div class="url">ryanatkn.com</div>
		</div></Breadcrumbs
	>
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
	.column {
		flex: 1;
		margin-bottom: var(--spacing_xl3);
	}
	.linkpath {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.url {
		margin-top: var(--spacing_sm);
	}
</style>
