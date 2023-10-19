<script lang="ts">
	import Blog from '$lib/Blog.svelte';
	import {feed} from '$routes/blog/feed';

	// TODO @multiple rethink this, we don't want to load all components at each route
</script>

<Blog {feed} />
