<script lang="ts">
	import {page} from '$app/stores';

	import BlogPost from '$lib/BlogPost.svelte';
	import {feedData} from '$lib/feedData';
	import Component0 from './0.svelte';

	// TODO automate (generate?)
	const components = [Component0];

	$: index = Number($page.params.slug) || 0;
	$: post = feedData.items[index];
	$: Component = components[index];
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<BlogPost {post} {Component} />
