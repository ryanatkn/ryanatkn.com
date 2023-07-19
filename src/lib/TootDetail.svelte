<script lang="ts">
	import type {Toot} from '$lib/toot';

	// tOot
	export let item: Toot;

	let debug = true;
</script>

<div class="toot_detail">
	<header>
		<img class="icon" src={item.account.avatar_static} alt="avatar for {item.account.username}" />
		<div
			class="name"
			title="{item.account.followers_count} followers, following {item.account.following_count}"
		>
			{item.account.display_name}
		</div>
		<small><code>{item.account.acct}</code></small>
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
	.toot_detail {
		display: flex;
		flex-direction: column;
		background-color: var(--panel_bg, var(--fg_1));
		border-radius: var(--border_radius_sm);
		padding: var(--spacing_md);
	}
	header {
		display: flex;
		align-items: center;
		margin-bottom: var(--spacing_xs);
	}
	.icon {
		width: var(--icon_size_sm);
	}
	.name {
		font-size: var(--font_size_lg);
		padding: 0 var(--spacing_md);
	}
	.json {
		width: var(--width_sm);
		overflow: auto;
	}
</style>
