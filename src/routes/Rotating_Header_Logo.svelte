<script lang="ts">
	import {base} from '$app/paths';

	import {LOGO_ALT, LOGO_SRC} from '$routes/project.js';

	interface Props {
		src?: string;
		alt?: string;
	}

	const {src = LOGO_SRC, alt = LOGO_ALT}: Props = $props();

	// these extra images hide the asymmetries of pixelated circles
</script>

<img class="img_2 pixelated" src="{base}/{src}" alt="" />
<img class="img_3 pixelated" src="{base}/{src}" alt="" />
<img class="pixelated" src="{base}/{src}" {alt} />

<style>
	img {
		width: var(--img_size);
		height: var(--img_size);
		min-width: var(--img_size);
		position: absolute;
		bottom: 10px;
		/* TODO there's definitely a better way to do this */
		left: calc(50% - var(--img_size) / 2);
		transform-origin: center;
		animation: rotating 1260s linear infinite;
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
