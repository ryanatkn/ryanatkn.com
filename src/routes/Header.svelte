<script lang="ts">
	import Rotating_Header_Logo from '$routes/Rotating_Header_Logo.svelte';
	import Primary_Link from '$routes/Primary_Link.svelte';
	import {LOGO_ALT, LOGO_SRC} from '$routes/project.js';

	interface Props {
		src?: string;
		alt?: string;
	}

	const {src = LOGO_SRC, alt = LOGO_ALT}: Props = $props();
</script>

<header>
	<Primary_Link>
		<Rotating_Header_Logo {src} {alt} />
	</Primary_Link>
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
