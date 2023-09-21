<script lang="ts">
	import Breadcrumbs from '@fuz.dev/fuz/Breadcrumbs.svelte';

	import Favicon from '$lib/Favicon.svelte';
</script>

<div class="breadcrumbs">
	<Breadcrumbs><Favicon /></Breadcrumbs>
</div>
<div class="wrapper">
	<slot />
</div>
<div class="breadcrumbs">
	<Breadcrumbs><Favicon /></Breadcrumbs>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		padding: var(--spacing_xl2);
	}
	.breadcrumbs {
		margin-top: var(--spacing_xl3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
