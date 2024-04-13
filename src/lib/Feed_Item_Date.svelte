<script lang="ts">
	import type {Feed_Item} from '$lib/feed.js';
	import {format_date} from '$lib/util.js';

	interface Props {
		item: Feed_Item;
	}

	const {item}: Props = $props();
</script>

{format_date(
	item.date_published || item.date_modified,
)}{#if item.date_published && item.date_modified && item.date_published !== item.date_modified},
	updated {format_date(item.date_modified)}{/if}
