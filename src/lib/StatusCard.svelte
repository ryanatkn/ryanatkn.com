<script lang="ts">
	import {format, formatDistance} from 'date-fns';
	import {slide} from 'svelte/transition';

	import type {MastodonStatus} from '$lib/mastodon';

	export let item: MastodonStatus;

	const debug = false;

	$: ({created_at, edited_at, content, account} = item);
	$: account_created = account.created_at;
	$: account_avatar = account.avatar_static;
	$: account_url = account.url;
	$: account_username = account.username;
	$: account_display_name = account.display_name;
	$: account_followers_count = account.followers_count;
	$: account_following_count = account.following_count;
	$: account_acct = account.acct;
	$: account_note = account.note;

	$: created = format(new Date(account_created), 'PPpp');
	$: created_ago = formatDistance(new Date(), new Date(created_at));
	$: edited = edited_at ? format(new Date(edited_at), 'PPpp') : null;
	$: edited_ago = edited_at ? formatDistance(new Date(), new Date(edited_at)) : null;
	$: joined = format(new Date(account_created), 'MMM yyyy');

	let show_note = false;
	const toggle_note = (): void => {
		show_note = !show_note;
	};
</script>

<div class="post_detail">
	<header>
		<button class="avatar plain icon_button" on:click={account_note ? toggle_note : undefined}
			><img class="icon" src={account_avatar} alt="avatar for {account_username}" /></button
		>
		<div class="names">
			<div>
				<a href={account_url} title={account_url} class="name">
					{account_display_name}
				</a>
			</div>
			<small title="{account_followers_count} followers, following {account_following_count}"
				>{account_acct}</small
			>
			<small title="created {created}{edited ? `, edited ${edited}` : ''}, joined {joined}"
				>{created_ago} ago{edited_ago ? `, edited ${edited_ago} ago` : ''}</small
			>
		</div>
	</header>
	{#if account_note}
		<div class="content prose" transition:slide>
			<!-- eslint-disable-next-line svelte/no-at-html-tags -->
			{@html account_note}
		</div>
	{/if}
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	<div class="content prose">{@html content}</div>
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
		width: var(--width_sm);
		margin-bottom: var(--spacing_xl3);
	}
	header {
		display: flex;
		align-items: center;
		margin-bottom: var(--spacing_sm);
	}
	.avatar {
		margin-bottom: 0;
		border-radius: 0;
	}
	.icon {
		width: var(--icon_size);
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
		font-weight: 500;
	}
	.json {
		width: var(--width_sm);
		overflow: auto;
	}
</style>
