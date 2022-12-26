<script lang="ts">
	import BlogPost from '$lib/BlogPost.svelte';
	import {feedData} from '$lib/feedData';

	// TODO refactor this probably, maybe putting the post in context
	const post = feedData.items[0];
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<BlogPost {post} />
