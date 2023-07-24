declare module '$routes/blog/[slug]/2/data.json' {
	import type {MastodonContext} from '$lib/mastodon';
	const data: MastodonContext;
	export default data;
}
