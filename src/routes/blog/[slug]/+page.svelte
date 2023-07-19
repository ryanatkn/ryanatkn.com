<script lang="ts">
	import {page} from '$app/stores';
	import {onMount} from 'svelte';

	import Blog from '$lib/Blog.svelte';
	import {fetch_post_by_url} from '$lib/mastodon';
	import {feed} from '$routes/blog/feed';

	onMount(() => {
		fetch_post_by_url($page.url.href);
	});
</script>

<Blog {feed} />
