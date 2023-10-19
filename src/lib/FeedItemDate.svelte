<script lang="ts">
	import type {FeedItem} from '$lib/feed.js';
	import {format_date} from '$lib/util.js';

	export let item: FeedItem;
</script>

{format_date(
	item.date_published || item.date_modified,
)}{#if item.date_published && item.date_modified && item.date_published !== item.date_modified},
	updated {format_date(item.date_modified)}{/if}
