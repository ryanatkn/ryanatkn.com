<script lang="ts">
	import LinkPath from '@feltcoop/felt/ui/LinkPath.svelte';
	import {page} from '$app/stores';
</script>

<div class="blog">
	<p>
		<LinkPath path={$page.url.pathname + '/0'} selectedPath={$page.url.pathname}>🥬</LinkPath>
	</p>
	<h2><a href="/blog/0">What we're doing @feltcoop</a> <small>2022 May 1</small></h2>
</div>

<style>
	.blog {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	p {
		font-size: var(--font_size_xl3);
	}
	h2 {
		margin-top: 0;
	}
</style>
