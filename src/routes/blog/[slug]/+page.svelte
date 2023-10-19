<script lang="ts">
	import {page} from '$app/stores';
	import Blog from '$lib/Blog.svelte';
	import {feed} from '$routes/blog/feed.js';

	// TODO @multiple rethink this, we don't want to load all components at each route
</script>

<Blog {feed} slug={$page.params.slug} />
