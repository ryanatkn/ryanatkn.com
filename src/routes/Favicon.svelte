<script lang="ts">
	import {asset} from '$app/paths';
	import type {SvelteHTMLElements} from 'svelte/elements';

	const {
		src = 'favicon.png',
		...rest
	}: SvelteHTMLElements['img'] & {
		src?: string;
	} = $props();
</script>

<img
	alt="textured green circle with hole"
	style:height="var(--icon_size_sm)"
	style:width="var(--icon_size_sm)"
	src={asset(`/${src}`)}
	{...rest}
/>
