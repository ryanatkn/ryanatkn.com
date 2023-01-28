<script lang="ts">
	import type {FeedItemData} from '$lib/feed';

	export let post: FeedItemData;
</script>

<p>want to talk about this post privately with me?</p>
<p class="email">
	<a href="mailto:mail@ryanatkn.com?subject=Reply to post: {post.title}">↪ reply by email ↩</a>
</p>
<p>publicly? Mastodon & Fediverse:</p>
<p>professional: <a href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a></p>
<p>coder: <a href="https://hachyderm.io/@ryanatkn">@ryanatkn@hachyderm.io</a></p>

<style>
	p {
		text-align: center;
	}
	.email {
		font-size: var(--font_size_xl);
	}
</style>
