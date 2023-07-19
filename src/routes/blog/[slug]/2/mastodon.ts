import type {Post} from '$lib/post';

export interface MastodonContext {
	ancestors: Post[];
	descendants: Post[];
}
