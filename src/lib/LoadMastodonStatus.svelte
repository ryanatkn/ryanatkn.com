<script lang="ts">
	import {fetch_status, type MastodonStatus} from '$lib/mastodon';

	// TODO component name?

	export let host: string;
	export let id: string;

	/**
	 * @readonly
	 */
	export let loading: boolean | undefined = undefined;

	/**
	 * @readonly
	 */
	export let item: MastodonStatus | undefined | null = undefined;

	/**
	 * @readonly
	 */
	export let load_time: number | undefined = undefined;

	// TODO handle error messages
	const load = async (): Promise<MastodonStatus | null> => {
		loading = true;
		const load_time_start = performance.now();
		load_time = undefined;
		item = await fetch_status(host, id);
		load_time = performance.now() - load_time_start;
		loading = false;
		return item;
	};
</script>

<slot {item} {loading} {load} {load_time} />
