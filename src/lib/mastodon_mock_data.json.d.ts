declare module '$lib/mastodon_mock_data.json' {
	import type {MastodonContext, MastodonStatus, MastodonFavourites} from '$lib/mastodon';
	const cached: Array<{url: string; data: MastodonContext | MastodonStatus | MastodonFavourites}>;
	export default cached;
}
