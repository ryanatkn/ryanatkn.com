<script lang="ts">
	import Feed_Item_Date from '$lib/Feed_Item_Date.svelte';
	import type {Blog_Post_Item} from '$lib/blog.js';

	interface Props {
		item: Blog_Post_Item;
	}

	const {item}: Props = $props();
</script>

<h1>{item.title}</h1>
<p>
	<Feed_Item_Date {item} />
</p>
