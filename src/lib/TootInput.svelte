<script lang="ts">
	import Alert from '@fuz.dev/fuz_library/Alert.svelte';
	import {parse_status_url} from './mastodon';

	export let url: string;
	export let attrs: any = undefined;

	$: parsed = parse_status_url(url);
</script>

<fieldset>
	<label title="where to load the toot">
		<input bind:value={url} placeholder="> toot url" on:focus={(e) => e.currentTarget.select()} {...attrs} />
	</label>
	{#if url && !parsed}
		<Alert status="error">invalid Mastodon status url</Alert>
	{/if}
</fieldset>
