<script lang="ts">
	import type {SvelteComponent} from 'svelte';

	import BlogPostHeader from '$lib/BlogPostHeader.svelte';
	import BlogPostFooter from '$lib/BlogPostFooter.svelte';
	import type {FeedItem} from '$lib/feed.js';

	export let post: FeedItem;
	export let component: typeof SvelteComponent<any>;
</script>

<svelte:head>
	<title>{post.title} - ryanatkn.com</title>
</svelte:head>

<article>
	<header class="prose width_md">
		<BlogPostHeader {post} />
	</header>
	<svelte:component this={component} />
	<hr class="width_md" />
	<BlogPostFooter {post} />
</article>
