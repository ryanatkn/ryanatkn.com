<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import type {Snippet} from 'svelte';

	import Favicon from '$lib/Favicon.svelte';

	interface Props {
		children: Snippet;
	}

	const {children}: Props = $props();

	// TODO redirect from the numbers or render UI to navigate to it, maybe in `Blog_Post`
</script>

<div class="breadcrumbs">
	<Breadcrumb><Favicon /></Breadcrumb>
</div>
<div class="wrapper">
	{@render children()}
</div>
<div class="breadcrumbs">
	<Breadcrumb><Favicon /></Breadcrumb>
</div>

<!-- TODO 404, needs to work with prerendering -->
<!-- <section>
	<p>
		nothing's here, sorry if this is an
		<a href="https://www.w3.org/Provider/Style/URI">uncool URI</a>
	</p>
</section> -->

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		padding: var(--space_xl2);
	}
	.breadcrumbs {
		margin-top: var(--space_xl3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
