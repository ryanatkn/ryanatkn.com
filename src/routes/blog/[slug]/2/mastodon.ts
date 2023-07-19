import type {Post} from '$lib/post';

/**
 * https://docs.joinmastodon.org/entities/Context/
 *
 * https://:domain/api/v1/statuses/:id/context
 */
export interface MastodonContext {
	ancestors: Post[];
	descendants: Post[];
}
