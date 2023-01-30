<script lang="ts">
	import Breadcrumbs from '@feltjs/felt-ui/Breadcrumbs.svelte';

	import PersonalStatement from './PersonalStatement.svelte';
	import Favicon from '$lib/Favicon.svelte';
</script>

<svelte:head>
	<title>ryanatkn.com</title>
</svelte:head>

<div class="column markup padded-md">
	<PersonalStatement />
</div>
<Breadcrumbs
	><div class="linkpath">
		<Favicon />
		<div class="url">ryanatkn.com</div>
	</div></Breadcrumbs
>

<style>
	.column {
		flex: 1;
		margin-bottom: var(--spacing_xl3);
	}
	.linkpath {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.url {
		margin-top: var(--spacing_sm);
	}
</style>
