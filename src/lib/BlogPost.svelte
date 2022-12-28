<script lang="ts">
	import BlogPostHeader from '$lib/BlogPostHeader.svelte';
	import type {FeedItemData} from '$lib/feed';

	export let post: FeedItemData;

	// TODO BLOCK move this and implement correctly
	const loadPost = async (post: FeedItemData) => {
		console.log(`loading post`, post);
		const p = await post.load();
		console.log(`p`, p);
		return p;
	};

	$: loading = loadPost(post);
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<BlogPostHeader {post} />
{#await loading}
	loading
{:then mod}
	<svelte:component this={mod.default} />
{/await}
