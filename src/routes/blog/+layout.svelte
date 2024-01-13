<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import Favicon from '$lib/Favicon.svelte';

	// TODO redirect from the numbers or render UI to navigate to it, maybe in `Blog_Post`
</script>

<div class="breadcrumbs">
	<Breadcrumb><Favicon /></Breadcrumb>
</div>
<div class="wrapper">
	<slot />
</div>
<div class="breadcrumbs">
	<Breadcrumb><Favicon /></Breadcrumb>
</div>

<!-- TODO 404, needs to work with prerendering -->
<!-- <section class="prose">
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
		padding: var(--spacing_2);
	}
	.breadcrumbs {
		margin-top: var(--spacing_3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
