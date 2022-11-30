<script lang="ts">
	import type {FeedItemData} from '$lib/feed';
	import FeedItemDate from '$lib/FeedItemDate.svelte';

	export let post: FeedItemData;
</script>

<h1>{post.title}</h1>
<p>
	<FeedItemDate item={post} />
</p>
