<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import Favicon from '$lib/Favicon.svelte';
	import {set_blog_components} from '$lib/blog';
	import {blog_components} from '$routes/blog/blog_components.js';

	// TODO @multiple rethink this, we don't want to load all components at each route
	set_blog_components(blog_components);
</script>

<div class="breadcrumbs">
	<Breadcrumb><Favicon /></Breadcrumb>
</div>
<div class="wrapper">
	<slot />
</div>
<div class="breadcrumbs">
	<Breadcrumb><Favicon /></Breadcrumb>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex: 1;
		padding: var(--spacing_2);
	}
	.breadcrumbs {
		margin-top: var(--spacing_3);
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
