<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import Favicon from '$lib/Favicon.svelte';
</script>

<div class="breadcrumbs">
	<Breadcrumb><Favicon /></Breadcrumb>
</div>
<slot />
<div class="breadcrumbs">
	<Breadcrumb><Favicon /></Breadcrumb>
</div>

<style>
	.breadcrumbs {
		margin-top: var(--spacing_3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
