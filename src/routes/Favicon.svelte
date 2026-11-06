<script lang="ts">
	import { asset } from '$app/paths';
	import type { AssetPath } from '$app/types';

	// no rest spread: Svelte's SSR adds inline `onload`/`onerror` attributes to an
	// `<img>` with a spread, which the CSP's `script-src-attr 'none'` blocks
	const {
		src = 'favicon.png'
	}: {
		src?: AssetPath;
	} = $props();
</script>

<img
	alt="textured green circle with hole"
	style:height="var(--icon_size_sm)"
	style:width="var(--icon_size_sm)"
	src={asset(src)}
/>
