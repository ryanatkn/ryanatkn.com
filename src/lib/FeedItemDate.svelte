<script lang="ts">
	import type {FeedItemData} from '$lib/feed';
	import {formatDate} from '$lib/util';

	export let item: FeedItemData;
</script>

<span>{formatDate(item.date_published || item.date_modified)}</span
>{#if item.date_published && item.date_modified && item.date_published !== item.date_modified}<span
		>updated {formatDate(item.date_modified)}</span
	>{/if}
