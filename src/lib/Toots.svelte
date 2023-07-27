<script lang="ts">
	import PendingButton from '@feltjs/felt-ui/PendingButton.svelte';
	import {slide} from 'svelte/transition';

	import MastodonStatusTree from '$lib/MastodonStatusTree.svelte';
	import MastodonStatusItem from '$lib/MastodonStatusItem.svelte';
	import MastodonComments from '$lib/MastodonComments.svelte';
	import {load_from_storage, set_in_storage} from '$lib/storage';
	import {scrolled} from '$lib/scrolled';

	export let host: string;
	export let id: string;

	// TODO BLOCK show a link to the original post, with the count of posts hidden (and a message if it maxed out, with a link to the blog post for discussion?)

	// TODO BLOCK chronological, nested, updated, reverse chrono

	let loaded_status_key = 1;

	const reset = () => {
		loaded_status_key++;
	};

	const SHOW_SETTINGS_KEY = 'show_settings';
	let show_settings = load_from_storage(SHOW_SETTINGS_KEY, () => false); // TODO store?
	$: set_in_storage(SHOW_SETTINGS_KEY, show_settings); // TODO optimize setting

	const toggle_settings = () => {
		show_settings = !show_settings;
	};

	const AUTOLOAD_KEY = 'autoload';
	let autoload = load_from_storage(AUTOLOAD_KEY, () => false); // TODO store?
	$: set_in_storage(AUTOLOAD_KEY, autoload); // TODO optimize setting
</script>

{#key loaded_status_key}
	<MastodonComments
		{host}
		{id}
		let:main_status
		let:main_context
		let:replies
		let:load
		let:loading
		let:load_time
	>
		<div class="panel padded_md spaced">
			<div
				class="controls"
				use:scrolled={() => {
					if (autoload) load();
				}}
			>
				<PendingButton pending={loading || false} disabled={!!main_context} on:click={() => load()}>
					<div class="icon_button_content">
						<div class="icon">🦣</div>
						{#if main_context && replies}
							<div>
								<div>
									{#if main_context.ancestors.length}
										loaded {replies.length} descendants and {main_context.ancestors.length} ancestors
									{:else}
										loaded {replies.length} comments
									{/if}
								</div>
								<div>in {load_time === undefined ? 'unknown ' : Math.round(load_time)}ms from</div>
								<code>{host}</code>
							</div>
						{:else}
							<div>
								<div>load comments from</div>
								<code>{host}</code>
							</div>
						{/if}
					</div>
				</PendingButton>
				<div class="box">
					<button
						on:click={toggle_settings}
						class="icon_button_content deselectable"
						class:selected={show_settings}
					>
						<div class="icon">⚙️</div>
						<div>
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
						title={autoload
							? 'comments will load when you scroll them into view'
							: 'comments are not loaded until you request them'}
						><input type="checkbox" bind:checked={autoload} />autoload</label
					>
					<slot name="settings" />
				</div>
			{/if}
		</div>
		{#if main_context}
			<ul class="statuses" transition:slide>
				<!-- TODO style differently or something -->
				{#each main_context.ancestors as item}
					<li>
						<MastodonStatusItem {item} />
					</li>
				{/each}
				{#if main_status}
					<div class="main_post panel">
						<div class="panel main_post_inner">
							<MastodonStatusItem item={main_status} />
						</div>
					</div>
				{/if}
				{#if main_status && replies}
					<MastodonStatusTree item={main_status} items={replies} />
				{/if}
			</ul>
		{/if}
	</MastodonComments>
{/key}

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
</style>
