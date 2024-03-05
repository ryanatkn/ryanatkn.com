<script lang="ts">
	export let src = '/favicon.png';
	export let alt = 'my avatar image, a naturally textured flat green donut';

	// these extra images hide the asymmetries of pixelated circles
</script>

<img class="img_2 pixelated" {src} alt="" />
<img class="img_3 pixelated" {src} alt="" />
<img class="pixelated" {src} {alt} />

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
