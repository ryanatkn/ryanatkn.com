<script lang="ts">
	import LinkPath from '@feltcoop/felt/ui/LinkPath.svelte';
	import {page} from '$app/stores';

	import Favicon from '$lib/Favicon.svelte';
</script>

<div class="blog">
	<div class="linkpath">
		<LinkPath path={$page.url.pathname + '/0'} selectedPath={$page.url.pathname}
			><Favicon /></LinkPath
		>
	</div>
	<h2><a href="/blog/0">What we're doing @feltcoop</a> <small>2022 May 1</small></h2>
</div>

<style>
	.blog {
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: var(--spacing_xl3) 0;
	}
	.linkpath {
		flex: 1;
		display: flex;
		justify-content: flex-end;
		padding-right: var(--spacing_xl);
	}
	h2 {
		margin: 0;
	}
</style>
