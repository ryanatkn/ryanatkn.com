import type {FeedItem} from '$lib/feed.js';
import {post as post1} from '$routes/blog/1/+page.svelte';
import {post as post2} from '$routes/blog/2/+page.svelte';
import {post as post3} from '$routes/blog/3/+page.svelte';

export const posts: FeedItem[] = [post1, post2, post3];