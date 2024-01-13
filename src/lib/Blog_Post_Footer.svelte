<script lang="ts">
	import type {Blog_Post_Item} from '$lib/blog.js';

	export let item: Blog_Post_Item;
	item; // TODO
</script>

<footer class="blog-post-footer">
	<div class="panel prose">
		<p>
			<span>
				find me on <a href="https://joinmastodon.org/">Mastodon</a> and
				<a href="https://wikipedia.org/wiki/ActivityPub">ActivityPub</a>:</span
			>
			<br />
			<a href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a>
		</p>
	</div>
</footer>

<style>
	.blog-post-footer {
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.panel {
		padding: var(--spacing_lg);
	}
</style>
