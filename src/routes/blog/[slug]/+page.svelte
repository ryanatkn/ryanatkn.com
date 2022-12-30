<script lang="ts">
	import Blog from '$lib/Blog.svelte';
	import {feed} from '../feed';
</script>

<Blog {feed} />
