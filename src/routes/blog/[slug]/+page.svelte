<script lang="ts">
	import Blog from '$lib/Blog.svelte';
	import {feed} from '$routes/blog/feed';
</script>

<Blog {feed} />
