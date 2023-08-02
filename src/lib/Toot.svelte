<script lang="ts">
	import PendingButton from '@feltjs/felt-ui/PendingButton.svelte';
	import {slide} from 'svelte/transition';
	import {createEventDispatcher} from 'svelte';

	import MastodonStatusTree from '$lib/MastodonStatusTree.svelte';
	import MastodonStatusItem from '$lib/MastodonStatusItem.svelte';
	import TootLoader from '$lib/TootLoader.svelte';
	import {load_from_storage, set_in_storage} from '$lib/storage';
	import {scrolled} from '$lib/scrolled';
	import {parse_status_context_url, to_status_url} from '$lib/mastodon';

	const dispatch = createEventDispatcher<{reset: void}>();

	export let url: string | undefined = undefined;
	export let host: string | undefined = undefined;
	export let id: string | undefined = undefined;
	// TODO BLOCK also author?

	/**
	 * Whether to fetch and display replies aka descendants in the status context.
	 */
	export let replies = false;

	/**
	 * Whether to fetch and display the ancestors in the status context.
	 */
	export let ancestors = false;

	export let show_details: boolean | undefined = undefined;

	let loaded_status_key = 1;

	export let loading: boolean | undefined = undefined;
	export let load_time: number | undefined = undefined;

	// TODO BLOCK show a link to the original post, with the count of posts hidden (and a message if it maxed out, with a link to the blog post for discussion?)

	// TODO BLOCK chronological, nested, updated, reverse chrono

	export const reset = (): void => {
		loaded_status_key++;
		dispatch('reset');
	};

	const SHOW_SETTINGS_KEY = 'show_settings';
	let show_settings = load_from_storage(SHOW_SETTINGS_KEY, () => false); // TODO store?
	$: set_in_storage(SHOW_SETTINGS_KEY, show_settings); // TODO wastefully sets on init

	const toggle_settings = () => {
		show_settings = !show_settings;
	};

	const AUTOLOAD_KEY = 'autoload';
	let autoload = load_from_storage(AUTOLOAD_KEY, () => false); // TODO store?
	$: set_in_storage(AUTOLOAD_KEY, autoload); // TODO wastefully sets on init

	const parse = (_url: string | undefined, _host: string | undefined, _id: string | undefined) => {
		if (!(_url || (_host && _id))) {
			console.error('either `url` or `host` and `id` are required by Toot.svelte');
		}
		if (url === _url && host === _host && id === _id) {
			return;
		}
		// TODO parse
		if (_url) {
			const parsed = parse_status_context_url(_url);
			if (parsed) {
				host = parsed?.host;
				id = parsed?.id;
			} else {
				throw Error(); // TODO BLOCK ?
			}
		} else {
			url = to_status_url(_host!, _id!);
		}
		console.log(`_url, _host, _id`, _url, _host, _id);
	};

	$: parse(url, host, id);

	// TODO BLOCK remove the if guard below -- what about invalid states?

	// TODO BLOCK slot? bind the let: below and export all?

	// TODO BLOCK this is a hack to branch the markup
	$: with_context = replies || ancestors;
</script>

{#if id && host}
	{#key loaded_status_key}
		<TootLoader
			{host}
			{id}
			{with_context}
			let:item
			let:context
			let:replies
			let:load
			let:loading
			bind:loading
			let:load_time
			bind:load_time
		>
			{#if with_context}
				<div class="panel padded_md spaced">
					<div
						class="controls"
						use:scrolled={() => {
							if (autoload) load();
						}}
					>
						<PendingButton pending={loading || false} disabled={!!context} on:click={() => load()}>
							<div class="icon_button_content load_replies_button_content_hack">
								<div class="icon">🦣</div>
								<div class="content">
									{#if context && replies}
										<div>loaded {replies.length + context.ancestors.length} toots from</div>
										<code>{host}</code>
									{:else}
										<div>load toots from</div>
										<code>{host}</code>
									{/if}
								</div>
							</div>
						</PendingButton>
						<div class="box">
							<button
								on:click={toggle_settings}
								class="icon_button_content deselectable"
								class:selected={show_settings}
							>
								<div class="icon">⚙️</div>
								<div class="content">
									<div>
										{#if show_settings}hide{:else}show{/if}
									</div>
									<div>settings</div>
								</div>
							</button>
						</div>
						<div class="reset">
							<button on:click={reset} disabled={loading === null}>reset</button
							>{#if load_time !== undefined}<div class="loaded_message" transition:slide>
									loaded in {Math.round(load_time)}ms
								</div>{/if}
						</div>
					</div>
					{#if show_settings}
						<div transition:slide class="settings controls panel">
							<label
								class="row"
								title={autoload
									? 'replies will load automatically when scrolled into view'
									: 'replies are not loaded until you request them'}
								><input type="checkbox" bind:checked={autoload} />autoload when scrolled into view</label
							>
							<slot name="settings" />
						</div>
					{/if}
				</div>
				{#if context}
					<ul class="statuses" transition:slide>
						{#if ancestors}
							<!-- TODO style differently or something -->
							{#each context.ancestors as ancestor}
								<li>
									<MastodonStatusItem item={ancestor} />
								</li>
							{/each}
						{/if}
						{#if item}
							<div class="main_post panel">
								<div class="panel main_post_inner">
									<MastodonStatusItem {item} />
								</div>
							</div>
						{/if}
						{#if item && replies}
							<MastodonStatusTree {item} items={replies} />
						{/if}
					</ul>
				{/if}
			{:else}
				<div class="embed_item">
					<div class="embed_item_inner">
						{#if loading !== false}
							<div transition:slide class="box padded_xl panel">
								<PendingButton pending={!!loading} on:click={load}>
									<span class="mammoth">🦣</span>
									<div>
										<div>load toot from</div>
										<code>{host}</code>
									</div>
								</PendingButton>
							</div>
						{:else if item}
							<div transition:slide class="width_full">
								<MastodonStatusItem {item} />
							</div>
						{/if}
						{#if !show_details}
							<button
								title="show item details"
								class="plain icon_button"
								style:position="absolute"
								style:right="var(--spacing_sm)"
								style:top="var(--spacing_sm)"
								style:font-size="var(--size_lg)"
								on:click={() => {
									show_details = true;
								}}>⚙️</button
							>
						{/if}
					</div>
				</div>
			{/if}
		</TootLoader>
	{/key}
{/if}

<style>
	.statuses {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: flex-start;
	}
	.controls {
		display: flex;
		flex-wrap: wrap;
		gap: var(--spacing_md);
	}
	.icon_button_content {
		display: flex;
		align-items: center;
		text-align: left;
	}
	.load_replies_button_content_hack {
		/* TODO hack */
		min-width: 240px;
	}
	.content {
		line-height: var(--line_height);
	}
	.main_post {
		padding: var(--spacing_md);
	}
	.main_post_inner {
		background-color: var(--bg);
		padding: var(--spacing_xs);
	}
	.icon {
		font-size: var(--icon_size_md);
		padding: var(--spacing_sm) var(--spacing_md) var(--spacing_sm) 0;
	}
	.reset {
		display: flex;
		align-items: center;
	}
	/* TODO hacky */
	.reset :global(button) {
		margin-bottom: 0;
	}
	.loaded_message {
		margin-left: var(--spacing_md);
	}
	.settings {
		display: flex;
		padding: var(--spacing_md);
		margin-top: var(--spacing_md);
	}
	.mammoth {
		font-size: var(--icon_size_md);
		padding: var(--spacing_sm) var(--spacing_md) var(--spacing_sm) 0;
	}
	/* TODO hacky */
	.embed_item {
		width: 100%;
		position: relative;
		background-color: var(--bg);
		border-radius: var(--border_radius_sm);
		padding: var(--spacing_xs);
		overflow: hidden;
	}
	.embed_item_inner {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
</style>
