<script lang="ts">
	import BlogPostHeader from '$lib/BlogPostHeader.svelte';
	import type {FeedItemData} from '$lib/feed';

	// TODO BLOCK
	/*

should we just name the files the slug?
We could compile the svelte with `accessors: true` and read an `export const meta` property (data?)
But what about the order?

*/

	// TODO extract

	// TODO import dynamically
	export let post: FeedItemData;

	$: console.log(`post`, post);
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<BlogPostHeader {post} />
TODO import body
