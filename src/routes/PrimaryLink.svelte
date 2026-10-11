<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';

	const {
		children,
		...rest
	}: SvelteHTMLElements['a'] & {
		children: Snippet; // required
	} = $props();

	// TODO upstream to fuz_util?
	const pop_path = (pathname: string): string =>
		pathname.substring(0, pathname.lastIndexOf('/')) || '/';

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
