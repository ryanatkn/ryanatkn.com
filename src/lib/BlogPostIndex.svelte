<script lang="ts">
	import {page} from '$app/stores';

	export let sections: Array<{slug: string; name: string}>;

	$: hash = $page.url.hash.substring(1);
</script>

<ul>
	{#each sections as section (section.slug)}
		<li><a href="#{section.slug}" class:selected={hash === section.slug}>{section.name}</a></li>
	{/each}
</ul>
