<script lang="ts">
	import {base} from '$app/paths';

	// TODO rethink this, is just for repos (which also needs to be renamed because it's more like repos)
</script>

<menu class="unstyled">
	<a class="chip" href="{base}/tree">tree</a>
	<a class="chip" href="{base}/table">table</a>
	<a class="chip" href="{base}/modules">modules</a>
</menu>

<style>
	menu {
		width: 100%;
		display: flex;
		gap: var(--space_lg);
		flex-direction: column;
		align-items: center;
		font-size: var(--font_size_lg);
	}
</style>
