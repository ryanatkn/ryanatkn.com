import type {FeedItemData} from '$lib/feed';
import * as p0 from '../routes/blog/[slug]/0.svelte';
import * as p1 from '../routes/blog/[slug]/1.svelte';

// TODO maybe export these zipped together into objects? currently have to match by index

export const posts: FeedItemData[] = [p0.post, p1.post];

export const Components = [p0.default, p1.default];
