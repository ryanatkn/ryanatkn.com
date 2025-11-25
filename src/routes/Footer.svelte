<script lang="ts">
	import RotatingFooterLogo from '$routes/RotatingFooterLogo.svelte';
	import PrimaryLink from '$routes/PrimaryLink.svelte';
	import {LOGO_ALT, LOGO_SRC} from '$routes/project.ts';

	interface Props {
		src?: string;
		alt?: string;
	}

	const {src = LOGO_SRC, alt = LOGO_ALT}: Props = $props();
</script>

<footer>
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
