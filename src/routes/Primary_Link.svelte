<script lang="ts">
	import {base} from '$app/paths';
	import {page} from '$app/stores';
	import {strip_start} from '@ryanatkn/belt/string.js';
	import type {Snippet} from 'svelte';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		attrs?: SvelteHTMLElements['a'];
		children: Snippet;
	}

	const {attrs, children}: Props = $props();

	// TODO upstream to belt?
	const pop_path = (pathname: string): string =>
		pathname.substring(0, pathname.lastIndexOf('/')) || '/';

	// TODO the `strip_start` usage is a hack to get SSR working the same as CSR,
	// `base` is `'.'` in SSR but `''` in CSR?
	const b = strip_start(base, '.');
	const pathname = $derived($page.url.pathname);
	const at_root_path = $derived(pathname === b + '/');
	const href = $derived(at_root_path ? `${b}/blog` : pop_path(pathname));
</script>

<a
	title={at_root_path ? 'Go to blog' : 'Go back home'}
	{href}
	class:selected={at_root_path}
	{...attrs}
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
