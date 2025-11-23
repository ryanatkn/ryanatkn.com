<script lang="ts">
	import Rotating_Footer_Logo from '$routes/Rotating_Footer_Logo.svelte';
	import Primary_Link from '$routes/Primary_Link.svelte';
	import {LOGO_ALT, LOGO_SRC} from '$routes/project.ts';

	interface Props {
		src?: string;
		alt?: string;
	}

	const {src = LOGO_SRC, alt = LOGO_ALT}: Props = $props();
</script>

<footer>
	<Primary_Link><Rotating_Footer_Logo {src} {alt} /></Primary_Link>
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
