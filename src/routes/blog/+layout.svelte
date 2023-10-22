<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import Favicon from '$lib/Favicon.svelte';
	import {set_blog_feed} from '$lib/blog.js';
	import {feed} from '$routes/blog/feed.js';

	set_blog_feed(feed);

	// TODO BLOCK redirect from the numbers or render UI to navigate to it, maybe in `BlogPost`
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
