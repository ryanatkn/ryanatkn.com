<script lang="ts">
	export let src = '/favicon.png';
	export let alt = 'my avatar image';
</script>

<footer>
	<a title="View source" href="https://github.com/ryanatkn/ryanatkn.com"
		><img class="pixelated" {src} {alt} /></a
	>
</footer>

<style>
	footer {
		position: relative;
		display: flex;
		justify-content: center;
		width: 100%;
		height: 360px;
		overflow: hidden;
		margin-top: var(--spacing_xl5);
	}
	a {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	a:hover {
		transform: scale3d(1.01, 1.01, 1.01);
	}
	a:active {
		transform: scale3d(0.99, 0.99, 0.99);
	}
	img {
		width: 1600px;
		height: 1600px;
		min-width: 1600px;
	}
</style>
