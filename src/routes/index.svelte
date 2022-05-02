<script lang="ts">
	import LinkPath from '@feltcoop/felt/ui/LinkPath.svelte';
	import {page} from '$app/stores';

	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
	import PersonalStatement from '$lib/PersonalStatement.svelte';
</script>

<main>
	<Header />
	<div class="column markup">
		<PersonalStatement />
	</div>
	<LinkPath path={$page.url.pathname} selectedPath={$page.url.pathname}>ryanatkn.com🥬</LinkPath>
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
	}
</style>
