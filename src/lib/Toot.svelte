<script lang="ts">
	import PendingButton from '@fuz.dev/fuz_library/PendingButton.svelte';
	import {slide} from 'svelte/transition';
	import {createEventDispatcher} from 'svelte';
	import {intersect} from '@fuz.dev/svelte_intersect';

	import MastodonStatusTree from '$lib/MastodonStatusTree.svelte';
	import MastodonStatusItem from '$lib/MastodonStatusItem.svelte';
	import TootLoader from '$lib/TootLoader.svelte';
	import {load_from_storage, set_in_storage} from '$lib/storage.js';
	import {parse_status_url, type MastodonCache} from '$lib/mastodon.js';
	import TootInput from '$lib/TootInput.svelte';

	const dispatch = createEventDispatcher<{reset: void}>();

	export let url: string;

	/**
	 * Whether to fetch and display replies aka descendants in the status context.
	 */
	export let replies = false;

	/**
	 * Whether to fetch and display the ancestors in the status context.
	 */
	export let ancestors = false;

	/**
	 * Optional API result cache.
	 */
	export let cache: MastodonCache | null = null;

	export let loading: boolean | undefined = undefined;
	export let load_time: number | undefined = undefined;

	let loaded_status_key = 1;

	// TODO BLOCK show a link to the original post, with the count of posts hidden (and a message if it maxed out, with a link to the blog post for discussion?)

	// TODO BLOCK chronological, nested, updated, reverse chrono

	export const reset = (): void => {
		loaded_status_key++;
		// these get bound but their values stick because they're optional, so reset them
		loading = undefined;
		load_time = undefined;
		dispatch('reset');
	};

	export let storage_key: string | undefined = undefined;

	export let initial_show_settings = false;

	// TODO refactor with storage helpers with serialize/parse as options, locallyStored?
	let show_settings_key = storage_key && 'show_settings' + storage_key;
	$: show_settings_key = storage_key && 'show_settings' + storage_key;
	export let show_settings = show_settings_key
		? load_from_storage(show_settings_key, () => initial_show_settings)
		: initial_show_settings; // TODO store?
	$: show_settings_key && set_in_storage(show_settings_key, show_settings); // TODO wastefully sets on init

	const toggle_settings = () => {
		show_settings = !show_settings;
	};

	export let autoload_key: string | undefined = 'autoload'; // TODO customizable
	export let autoload = autoload_key ? load_from_storage(autoload_key, () => false) : false; // TODO store? probably, see this comment vv
	$: autoload_key && set_in_storage(autoload_key, autoload); // TODO wastefully sets on init and across multiple `Toot` instances if bound

	$: parsed = parse_status_url(url);
	$: id = parsed?.status_id ?? null;
	$: host = parsed?.host ?? null;

	// TODO BLOCK not saving autoload state

	$: with_context = replies || ancestors;
</script>

{#if id && host}
	{#key loaded_status_key}
		<TootLoader
			{host}
			{id}
			{with_context}
			{cache}
			let:item
			let:context
			let:replies
			let:load
			let:loading
			bind:loading
			let:load_time
			bind:load_time
		>
			<div class="toot" class:replies transition:slide>
				<div class="toot_content">
					{#if ancestors && context}
						<div transition:slide>
							<!-- TODO style differently or something -->
							{#each context.ancestors as ancestor}
								<MastodonStatusItem item={ancestor} />
							{/each}
						</div>
					{/if}
					<div class="main_post panel">
						<div class="panel bg_panel">
							{#if item}
								<div transition:slide>
									<MastodonStatusItem {item} />
								</div>
							{:else}
								<div transition:slide>
									<PendingButton
										pending={loading || false}
										disabled={loading === false}
										on:click={() => load()}
									>
										<div class="icon_button_content">
											<div class="icon">🦣</div>
											<div class="button_content">
												<div>
													load toot{#if replies || ancestors}s{/if} from
												</div>
												<code class="ellipsis">{host}</code>
											</div>
										</div>
									</PendingButton>
								</div>
							{/if}
						</div>
					</div>
					{#if item && replies}
						<div transition:slide>
							<MastodonStatusTree {item} items={replies} />
						</div>
					{/if}
				</div>
				<div class="toot_controls">
					<div
						class="controls"
						use:intersect={{
							cb: (intersecting) => {
								if (intersecting && autoload) load();
							},
							count: 1,
						}}
					>
						<div class="row">
							<button
								on:click={toggle_settings}
								class="deselectable"
								class:selected={show_settings}
								style:margin-right="var(--spacing_sm)">settings</button
							>
							<div class="reset">
								<button on:click={reset} disabled={loading == null}>reset</button
								>{#if load_time !== undefined}<div class="loaded_message" transition:slide>
										loaded in {Math.round(load_time)}ms
									</div>{/if}
							</div>
						</div>
					</div>
					{#if show_settings}
						<div transition:slide class="settings controls panel">
							<form class="width_full prose">
								<TootInput {url} />
								<fieldset>
									<label
										class="row"
										title={autoload
											? 'replies will load automatically when scrolled intersect'
											: 'replies are not loaded until you request them'}
										><input type="checkbox" bind:checked={autoload} />automatically load when
										scrolled onscreen</label
									>
								</fieldset>
							</form>
							<slot name="settings" />
						</div>
					{/if}
				</div>
			</div>
		</TootLoader>
	{/key}
{/if}

<style>
	.toot {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		margin: var(--spacing_3) 0;
		gap: var(--spacing_md);
		width: 100%;
	}
	.toot.replies {
		margin-bottom: var(--spacing_md);
	}
	.toot_content {
		flex: 1;
	}
	.toot_controls {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.controls {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--spacing_md);
	}
	.icon_button_content {
		width: 100%;
		display: flex;
		align-items: center;
		text-align: left;
	}
	/* TODO messy */
	.icon_button_content .button_content {
		overflow: hidden;
	}
	.button_content {
		line-height: var(--line_height);
	}
	.main_post {
		padding: var(--spacing_md);
	}
	.toot.replies .main_post {
		margin-bottom: var(--spacing_md);
	}
	.bg_panel {
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
		margin-left: var(--spacing_sm);
	}
	.settings {
		display: flex;
		padding: var(--spacing_md);
		margin-top: var(--spacing_md);
		width: 100%;
	}
</style>
