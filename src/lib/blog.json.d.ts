declare module '$lib/blog.json' {
	import type {FeedItemData} from '$lib/feed';
	const data: {posts: FeedItemData[]};
	export default data;
}
