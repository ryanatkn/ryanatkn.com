<script lang="ts">
	import {page} from '$app/stores';

	export let sections: string[];

	$: hash = $page.url.hash.substring(1);
</script>

<ul>
	{#each sections as section}
		<li><a href="#{section}" class:selected={hash === section}>{section}</a></li>
	{/each}
</ul>
