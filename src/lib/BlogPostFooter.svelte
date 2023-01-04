<script lang="ts">
	import type {FeedItemData} from '$lib/feed';

	export let post: FeedItemData;
</script>

<p>Want to talk about this post privately with me?</p>
<p class="email">
	<a href="mailto:mail@ryanatkn.com?subject=Reply to post: {post.title}">↪ reply by email 📬</a>
</p>

<style>
	p {
		text-align: center;
	}
	.email {
		font-size: var(--font_size_xl);
	}
</style>
