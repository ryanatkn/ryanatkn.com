<script lang="ts">
	import Breadcrumbs from '@feltjs/felt-ui/Breadcrumbs.svelte';

	import Favicon from '$lib/Favicon.svelte';
</script>

<div class="breadcrumbs">
	<Breadcrumbs><Favicon /></Breadcrumbs>
</div>
<slot />
<div class="breadcrumbs">
	<Breadcrumbs><Favicon /></Breadcrumbs>
</div>

<style>
	.breadcrumbs {
		margin-top: var(--spacing_xl3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
