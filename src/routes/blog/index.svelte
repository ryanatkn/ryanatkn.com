<script lang="ts">
	import LinkPath from '@feltcoop/felt/ui/LinkPath.svelte';
	import {page} from '$app/stores';
</script>

<div class="blog">
	<LinkPath path={$page.url.pathname + '/0'} selectedPath={$page.url.pathname} />
</div>

<style>
	.blog {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: var(--font_size_xl3);
	}
</style>
