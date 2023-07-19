import type {Post} from '$lib/post';

/**
 * https://docs.joinmastodon.org/entities/Context/
 *
 * https://:host/api/v1/statuses/:id/context
 */
export interface MastodonContext {
	ancestors: Post[];
	descendants: Post[];
}
