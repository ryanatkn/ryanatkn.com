<script lang="ts">
	import Rotating_Footer_Logo from '$routes/Rotating_Footer_Logo.svelte';

	export let src = '/favicon.png';
	export let alt = 'my avatar image';
</script>

<footer>
	<a title="View source" href="https://github.com/ryanatkn/ryanatkn.com"
		><Rotating_Footer_Logo {src} {alt} /></a
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
		margin-top: var(--space_xl5);
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
</style>
