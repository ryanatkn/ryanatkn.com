<script lang="ts">
	import PendingButton from '@feltjs/felt-ui/PendingButton.svelte';

	import StatusCard from '$lib/StatusCard.svelte';
	import Replies from '$lib/Replies.svelte';

	export let host: string;
	export let id: string;
</script>

<Replies {host} {id} let:data let:api_url let:load let:loading>
	<PendingButton pending={loading || false} on:click={() => load()}
		>load comments from {host}</PendingButton
	>
	<aside>clicking this button^^ fetches Mastodon posts from <code>{api_url}</code></aside>
	{#if data}
		{#each data.descendants as item}
			<StatusCard {item} />
		{/each}
	{:else if loading === false}
		<div>something went wrong (TODO proper error message)</div>
	{/if}
</Replies>
