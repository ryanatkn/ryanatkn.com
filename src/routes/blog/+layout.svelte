<script lang="ts">
	import Breadcrumbs from '@feltjs/felt-ui/Breadcrumbs.svelte';

	import Favicon from '$lib/Favicon.svelte';
</script>

<div class="breadcrumbs">
	<Breadcrumbs><Favicon /></Breadcrumbs>
</div>
<div class="width_md padded_md">
	<slot />
</div>
<div class="breadcrumbs">
	<Breadcrumbs><Favicon /></Breadcrumbs>
</div>

<style>
	.width_md {
		flex: 1;
	}
	.breadcrumbs {
		margin-top: var(--spacing_xl3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
