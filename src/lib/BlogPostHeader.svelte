<script lang="ts">
	import type {FeedItemData} from '$lib/feed';
	import {formatDate} from '$lib/util';

	export let post: FeedItemData;
</script>

<h1>{post.title}</h1>
<p>
	{formatDate(
		post.date_modified,
	)}{#if post.date_published && post.date_published !== post.date_modified}
		{' '}— first published {formatDate(post.date_published)}
	{/if}
</p>
