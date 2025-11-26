<script lang="ts">
	import {resolve} from '$app/paths';
	import {page} from '$app/state';
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	const {
		children,
		...rest
	}: SvelteHTMLElements['a'] & {
		children: Snippet; // required
	} = $props();

	// TODO upstream to belt?
	const pop_path = (pathname: string): string =>
		pathname.substring(0, pathname.lastIndexOf('/')) || '/';

	// TODO the `strip_start` usage is a hack to get SSR working the same as CSR,
	// `base` is `'.'` in SSR but `''` in CSR?
	const pathname = $derived(page.url.pathname);
	const at_root_path = $derived(pathname === resolve('/'));
	const href = $derived(at_root_path ? resolve('/blog') : pop_path(pathname));
</script>

<!-- eslint-disable svelte/no-navigation-without-resolve -->
<a
	{href}
	title={at_root_path ? 'Go to blog' : 'Go back home'}
	class:selected={at_root_path}
	{...rest}
>
	{@render children()}
</a>

<style>
	a {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	a:hover {
		transform: scale3d(1.01, 1.01, 1.01);
	}
	a:active {
		transform: scale3d(0.99, 0.99, 0.99);
	}
</style>
