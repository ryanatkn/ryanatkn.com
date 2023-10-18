<script lang="ts">
	import type {FeedItem} from '$lib/feed.js';
	import {formatDate} from '$lib/util';

	export let item: FeedItem;
</script>

{formatDate(
	item.date_published || item.date_modified,
)}{#if item.date_published && item.date_modified && item.date_published !== item.date_modified},
	updated {formatDate(item.date_modified)}{/if}
