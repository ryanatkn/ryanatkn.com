<script lang="ts">
	export let sections: string[];
</script>

<ul>
	{#each sections as section}
		<li><a href="#{section}">{section}</a></li>
	{/each}
</ul>
