<script lang="ts">
	export let src: string = '/favicon.png';
</script>

<footer>
	<a title="View source" href="https://github.com/ryanatkn/ryanatkn.com"
		><img class="pixelated" {src} /></a
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
	img {
		width: 1600px;
		height: 1600px;
		min-width: 1600px;
	}
</style>
