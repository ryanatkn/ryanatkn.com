<script lang="ts">
	import {asset} from '$app/paths';
	import {page} from '$app/state';
	import Card from '@ryanatkn/fuz/Card.svelte';

	const pathname = $derived(page.url.pathname);
</script>

<!-- TODO `endsWith` isn't correct -->
{#if !pathname.endsWith('/about')}
	<Card href={asset('/about')} icon="🪶" align="right">about</Card>
{/if}
<!-- TODO this isn't correct either -->
{#if !pathname.endsWith('/blog') && !pathname.includes('/blog/')}
	<Card href={asset('/blog')} icon="🪧" align="right">blog</Card>
{/if}
{#if !pathname.endsWith('/funding')}
	<Card href={asset('/funding')} icon="🐚" align="right">funding</Card>
{/if}
