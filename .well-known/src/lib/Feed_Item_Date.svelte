<script lang="ts">
	import type {Feed_Item} from '$lib/feed.js';
	import {format_date} from '$lib/util.js';

	export let item: Feed_Item;
</script>

{format_date(
	item.date_published || item.date_modified,
)}{#if item.date_published && item.date_modified && item.date_published !== item.date_modified},
	updated {format_date(item.date_modified)}{/if}
