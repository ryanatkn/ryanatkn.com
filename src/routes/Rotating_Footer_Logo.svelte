<script lang="ts">
	import {asset} from '$app/paths';

	import {LOGO_ALT, LOGO_SRC} from '$routes/project.js';

	interface Props {
		src?: string;
		alt?: string;
	}

	const {src = LOGO_SRC, alt = LOGO_ALT}: Props = $props();

	const path = $derived(asset(`/${src}`));

	// these extra images hide the asymmetries of pixelated circles
</script>

<img class="img_2 pixelated" src={path} alt="" />
<img class="img_3 pixelated" src={path} alt="" />
<img class="pixelated" src={path} {alt} />

<style>
	img {
		position: relative;
		top: 15px;
		width: 1600px;
		height: 1600px;
		min-width: 1600px;
		transform-origin: center;
		animation: rotating 1667s linear infinite;
	}
	.img_2 {
		position: absolute;
		opacity: 0.62;
		rotate: 55deg;
	}
	.img_3 {
		position: absolute;
		opacity: 0.62;
		rotate: -55deg;
	}
</style>
