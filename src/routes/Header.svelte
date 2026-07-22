<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';

	import RotatingHeaderLogo from './RotatingHeaderLogo.svelte';
	import PrimaryLink from './PrimaryLink.svelte';
	import { LOGO_ALT, LOGO_SRC } from '$lib/project.ts';

	const {
		src = LOGO_SRC,
		alt = LOGO_ALT,
		...rest
	}: SvelteHTMLElements['header'] & {
		src?: string;
		alt?: string;
	} = $props();
</script>

<header {...rest}>
	<PrimaryLink>
		<RotatingHeaderLogo {src} {alt} />
	</PrimaryLink>
</header>

<style>
	header {
		--img_size: 1024px;
		--header_height: 110px;
		position: relative;
		display: flex;
		justify-content: center;
		width: 100%;
		height: var(--header_height);
		overflow: hidden;
	}
</style>
