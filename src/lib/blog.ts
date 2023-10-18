import type {FeedItemData} from '$lib/feed';
import {post as p1} from '$routes/blog/1/+page.svelte';
import {post as p2} from '$routes/blog/2/+page.svelte';
import {post as p3} from '$routes/blog/3/+page.svelte';

export const posts: FeedItemData[] = [p1, p2, p3];
