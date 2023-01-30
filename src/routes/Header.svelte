<script lang="ts">
	export let src = '/favicon.png';
	export let alt = 'my avatar image';
</script>

<header>
	<div class="bg">
		<img class="pixelated" {src} {alt} />
	</div>
</header>

<style>
	header {
		--img_size: 1024px;
		--header_height: 110px;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: var(--header_height);
	}
	.bg {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
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
</style>
