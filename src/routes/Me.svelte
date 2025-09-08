<script lang="ts">
	import {asset} from '$app/paths';
</script>

<img
	src={asset('/me.png')}
	alt="me smiling on a couch while holding my sister's calico cat Caramel who's out of frame"
/>

<style>
	img {
		width: var(--icon_size_xl2);
		height: var(--icon_size_xl2);
		min-width: var(--icon_size_xl2);
		min-height: var(--icon_size_xl2);
	}
</style>
