// TODO @multiple rethink this, we don't want to load all components at each route
import page1 from '$routes/blog/1/+page.svelte';
import page2 from '$routes/blog/2/+page.svelte';
import page3 from '$routes/blog/3/+page.svelte';

export const blog_components = [page1, page2, page3];
