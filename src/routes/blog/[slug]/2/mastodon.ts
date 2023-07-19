import type {Toot} from '$lib/toot';

export interface MastodonContext {
	ancestors: Toot[];
	descendants: Toot[];
}
