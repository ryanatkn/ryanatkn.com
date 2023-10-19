import {type SvelteComponent, getContext, setContext} from 'svelte';

// TODO @multiple rethink this, we don't want to load all components at each route

const KEY = Symbol('blog_components');

export const get_blog_components = (): Array<typeof SvelteComponent<any>> => getContext(KEY);

export const set_blog_components = (
	blog_components: Array<typeof SvelteComponent<any>>,
): Array<typeof SvelteComponent<any>> => setContext(KEY, blog_components);
