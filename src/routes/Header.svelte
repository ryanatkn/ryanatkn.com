<script lang="ts">
	import RotatingHeaderLogo from '$routes/RotatingHeaderLogo.svelte';
	import PrimaryLink from '$routes/PrimaryLink.svelte';
	import {LOGO_ALT, LOGO_SRC} from '$routes/project.ts';

	interface Props {
		src?: string;
		alt?: string;
	}

	const {src = LOGO_SRC, alt = LOGO_ALT}: Props = $props();
</script>

<header>
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
