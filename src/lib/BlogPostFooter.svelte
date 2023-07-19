<script lang="ts">
	import type {FeedItemData} from '$lib/feed';

	export let post: FeedItemData;
</script>

<div class="blog-post-footer">
	<div class="panel prose">
		<p>
			<span> find me on Mastodon and the Fediverse:</span>
			<br />
			<a href="https://hci.social/@ryanatkn">@ryanatkn@hci.social</a> (professional)
			<br />
			<a href="https://hachyderm.io/@ryanatkn">@ryanatkn@hachyderm.io</a> (coder)
		</p>
	</div>
</div>

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
