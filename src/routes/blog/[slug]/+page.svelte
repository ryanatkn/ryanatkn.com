<script lang="ts">
	import Blog from '$lib/Blog.svelte';
	import {feed} from '$routes/blog/feed';

	// TODO load data with SvelteKit correctly so `feed.posts` is lazy-loaded and
	// doesn't include imported components for each of the blog post `+page.svelte` files
</script>

<Blog {feed} />
