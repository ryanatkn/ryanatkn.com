<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';

	interface Props {
		size?: string;
		fill?: string;
		label?: string;
		inline?: boolean;
		attrs?: SvelteHTMLElements['svg'] | undefined;
	}

	const {
		size = 'var(--space_xl7, 64px)',
		fill = 'var(--text_color, #000)',
		label = 'Patreon icon',
		inline = false,
		attrs,
	}: Props = $props();

	// TODO maybe create a `Svg` or similar component that makes all of this cleaner, even defaulting the viewBox
</script>

<svg
	viewBox="0 0 1080 1080"
	{...attrs}
	aria-label={label}
	style:width={size}
	style:height={size}
	class:inline
>
	<path
		{fill}
		d="M1033.05,324.45c-0.19-137.9-107.59-250.92-233.6-291.7c-156.48-50.64-362.86-43.3-512.28,
		27.2 C106.07,145.41,49.18,332.61,47.06,519.31c-1.74,153.5,13.58,557.79,241.62,560.67c169.44,
		2.15,194.67-216.18,273.07-321.33 c55.78-74.81,127.6-95.94,216.01-117.82C929.71,603.22,1033.27,
		483.3,1033.05,324.45z"
	/>
</svg>

<style>
	.inline {
		display: inline-block;
		vertical-align: middle;
	}
</style>
