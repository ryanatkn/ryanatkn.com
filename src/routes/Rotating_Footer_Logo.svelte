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
