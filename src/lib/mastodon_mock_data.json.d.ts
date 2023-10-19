declare module '$lib/mastodon_mock_data.json' {
	import type {MastodonResponseData} from '$lib/mastodon.js';
	const cached: MastodonResponseData[];
	export default cached;
}
