<script lang="ts">
	import FeedItemDate from '$lib/FeedItemDate.svelte';
	import type {BlogPostItem} from '$lib/blog.js';

	export let item: BlogPostItem;
</script>

<h1>{item.title}</h1>
<p>
	<FeedItemDate {item} />
</p>
