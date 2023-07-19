<script lang="ts">
	import type {Post} from '$lib/post';

	export let item: Post;

	const debug = false;
</script>

<div class="post_detail">
	<header>
		<img class="icon" src={item.account.avatar_static} alt="avatar for {item.account.username}" />
		<div class="names">
			<a href={item.account.url} class="name">
				{item.account.display_name}
			</a>
			<small
				title="{item.account.followers_count} followers, following {item.account.following_count}"
				>{item.account.acct}</small
			>
		</div>
	</header>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<div class="content">{@html item.content}</div>
</div>
{#if debug}
	<pre class="json">
	{JSON.stringify(item, null, 2)}
</pre>
{/if}

<style>
	.post_detail {
		display: flex;
		flex-direction: column;
		background-color: var(--panel_bg, var(--fg_1));
		border-radius: var(--border_radius_sm);
		padding: var(--spacing_md);
	}
	header {
		display: flex;
		align-items: center;
		margin-bottom: var(--spacing_sm);
	}
	.icon {
		width: var(--icon_size_sm);
	}
	.names {
		display: flex;
		flex-direction: column;
		padding: 0 var(--spacing_md);
	}
	.name {
		font-size: var(--font_size_lg);
	}
	.names small {
		font-weight: 600;
	}
	.json {
		width: var(--width_sm);
		overflow: auto;
	}
</style>
