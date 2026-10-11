<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import Card from '@fuzdev/fuz_ui/Card.svelte';

	const pathname = $derived(page.url.pathname);
</script>

<!-- TODO `endsWith` isn't correct -->
{#if !pathname.endsWith('/about')}
	<Card href={resolve('/about')} icon="🪶" align="end">about</Card>
{/if}
<!-- TODO this isn't correct either -->
{#if !pathname.endsWith('/blog') && !pathname.includes('/blog/')}
	<Card href={resolve('/blog')} icon="🪧" align="end">blog</Card>
{/if}
{#if !pathname.endsWith('/funding')}
	<Card href={resolve('/funding')} icon="🐚" align="end">funding</Card>
{/if}
