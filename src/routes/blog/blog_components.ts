// TODO this file shouldn't exist, change to SvelteKit load? problem is we're loading all posts at each route
import page1 from '$routes/blog/1/+page.svelte';
import page2 from '$routes/blog/2/+page.svelte';
import page3 from '$routes/blog/3/+page.svelte';

export const components = [page1, page2, page3];
