<script lang="ts">
	import {page} from '$app/stores';

	import BlogPost from '$lib/BlogPost.svelte';
	import {feed} from '../feed';
	import {Components} from '$lib/blog';

	$: ({slug} = $page.params);
	$: rawIndex = /^\d+$/u.test(slug)
		? Number(slug)
		: feed.items.findIndex((f) => f.url.endsWith(slug));
	$: index = rawIndex === -1 || Number.isNaN(rawIndex) ? 0 : rawIndex;
	$: post = feed.items[index];
	$: Component = Components[index];
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<BlogPost {post} {Component} />
