<script lang="ts">
	import type {FeedItem} from '$lib/feed.js';
	import FeedItemDate from '$lib/FeedItemDate.svelte';

	export let post: FeedItem;
</script>

<h1>{post.title}</h1>
<p>
	<FeedItemDate item={post} />
</p>
