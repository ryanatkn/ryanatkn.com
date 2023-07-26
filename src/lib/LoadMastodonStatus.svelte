<script lang="ts">
	import {fetch_status, type MastodonStatus} from '$lib/mastodon';

	export let host: string;
	export let id: string;

	/**
	 * @readonly
	 */
	export let loading: boolean | undefined = undefined;
	let item: MastodonStatus | undefined | null;

	// TODO handle error messages
	const load = async (): Promise<MastodonStatus | null> => {
		loading = true;
		item = await fetch_status(host, id);
		loading = false;
		return item;
	};
</script>

<slot {item} {loading} {load} />
