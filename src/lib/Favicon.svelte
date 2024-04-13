<script lang="ts">
	import {base} from '$app/paths';
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		path?: string;
		attrs?: SvelteHTMLElements['img'];
	}

	const {path = 'favicon.png', attrs}: Props = $props();
</script>

<img
	alt="textured green circle with hole"
	style:height="var(--icon_size_sm)"
	style:width="var(--icon_size_sm)"
	src="{base}/{path}"
	{...attrs}
/>
