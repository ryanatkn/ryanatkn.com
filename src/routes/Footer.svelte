<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

	import RotatingFooterLogo from '$routes/RotatingFooterLogo.svelte';
	import PrimaryLink from '$routes/PrimaryLink.svelte';
	import {LOGO_ALT, LOGO_SRC} from '$routes/project.ts';

	const {
		src = LOGO_SRC,
		alt = LOGO_ALT,
		...rest
	}: SvelteHTMLElements['footer'] & {
		src?: string;
		alt?: string;
	} = $props();
</script>

<footer {...rest}>
	<PrimaryLink><RotatingFooterLogo {src} {alt} /></PrimaryLink>
</footer>

<style>
	footer {
		position: relative;
		display: flex;
		justify-content: center;
		width: 100%;
		height: 360px;
		overflow: hidden;
		margin-top: var(--space_xl5);
	}
</style>
