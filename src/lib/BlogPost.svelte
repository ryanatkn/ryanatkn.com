<script lang="ts">
	import type {SvelteComponent} from 'svelte';

	import BlogPostHeader from '$lib/BlogPostHeader.svelte';
	import BlogPostFooter from '$lib/BlogPostFooter.svelte';
	import type {FeedItemData} from '$lib/feed';

	export let post: FeedItemData;
	export let component: typeof SvelteComponent<any>;
</script>

<svelte:head>
	<title>{post.title} - ryanatkn.com</title>
</svelte:head>

<header class="prose width_md">
	<BlogPostHeader {post} />
</header>
<svelte:component this={component} />
<hr class="width_md" />
<BlogPostFooter {post} />
