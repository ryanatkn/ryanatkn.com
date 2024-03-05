<script lang="ts">
	import {base} from '$app/paths';
	import {page} from '$app/stores';

	import Rotating_Header_Logo from '$routes/Rotating_Header_Logo.svelte';

	export let src = '/favicon.png';
	export let alt = 'my avatar image, a naturally textured flat green donut';

	$: ({pathname} = $page.url);
	$: at_root_path = pathname === base + '/';
	$: href = at_root_path ? `${base}/blog` : `${base}/`;
</script>

<header>
	<a title={at_root_path ? 'Go to blog' : 'Go to root'} {href} class:selected={at_root_path}>
		<Rotating_Header_Logo {src} {alt} />
	</a>
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
	a {
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
</style>
