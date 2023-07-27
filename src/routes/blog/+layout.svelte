<script lang="ts">
	import Breadcrumbs from '@feltjs/felt-ui/Breadcrumbs.svelte';
	import {page} from '$app/stores';

	import {feed} from '$routes/blog/feed';
	import Favicon from '$lib/Favicon.svelte';
	import Blog from '$lib/Blog.svelte';

	$: ({
		url: {pathname},
	} = $page);

	// TODO hacky
	$: is_blog_post = !pathname.endsWith('/blog');
</script>

<div class="breadcrumbs">
	<Breadcrumbs><Favicon /></Breadcrumbs>
</div>
<div class="wrapper">
	{#if is_blog_post}
		<Blog {feed} />
	{/if}
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
