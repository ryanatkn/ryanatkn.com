<script lang="ts">
	import {asset} from '$app/paths';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		src?: string;
		attrs?: SvelteHTMLElements['img'];
	}

	const {src = 'favicon.png', attrs}: Props = $props();
</script>

<img
	alt="textured green circle with hole"
	style:height="var(--icon_size_sm)"
	style:width="var(--icon_size_sm)"
	src={asset(`/${src}`)}
	{...attrs}
/>
