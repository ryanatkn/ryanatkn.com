<script lang="ts">
	import {base} from '$app/paths';
	import {page} from '$app/stores';
	import Card from '@ryanatkn/fuz/Card.svelte';

	const pathname = $derived($page.url.pathname);
</script>

<!-- TODO `endsWith` isn't correct -->
{#if !pathname.endsWith('/about')}
	<Card href="{base}/about" icon="🪶" align="right">about</Card>
{/if}
<!-- TODO this isn't correct either -->
{#if !pathname.endsWith('/blog') && !pathname.includes('/blog/')}
	<Card href="{base}/blog" icon="🪧" align="right">blog</Card>
{/if}
<!-- {#if !pathname.endsWith('/funding')}
	<Card href="{base}/funding" icon="🐚" align="right">funding</Card>
{/if} -->
