<script lang="ts">
	import {random_item} from '@ryanatkn/belt/random.js';

	export let count: number;

	const width = 200;
	const height = 40;
	if (width * height !== 8000) throw Error('width * height must equal 8000');

	let canvas_el: HTMLCanvasElement | undefined;
	$: if (canvas_el) draw(canvas_el, count, width, height);

	let computed_styles;

	// TODO improve when I have supporters, radial probably, seeded?
	/**
	 * Draws a pixel for each of `total`.
	 * If the pixel is <=count, it's considered "filled".
	 */
	const draw = (el: HTMLCanvasElement, count: number, width: number, height: number) => {
		const ctx = el.getContext('2d');
		if (!ctx) return;

		computed_styles = window.getComputedStyle(document.documentElement);

		if (el.width !== width || el.height !== height) {
			el.width = width;
			el.height = height;
		} else {
			ctx.clearRect(0, 0, width, height);
		}
		const colors = [
			computed_styles.getPropertyValue('--color_a_5'),
			computed_styles.getPropertyValue('--color_b_5'),
			computed_styles.getPropertyValue('--color_d_5'),
			computed_styles.getPropertyValue('--color_e_5'),
			computed_styles.getPropertyValue('--color_f_5'),
			computed_styles.getPropertyValue('--color_g_5'),
		];
		for (let i = 0; i < count; i++) {
			const x = i % width;
			const y = Math.floor(i / width);
			ctx.fillStyle = random_item(colors);
			ctx.fillRect(x, y, 1, 1);
		}
	};
</script>

<canvas class="pixelated w_100 shadow" {width} {height} bind:this={canvas_el} />
