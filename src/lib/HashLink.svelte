<script lang="ts">
	export let slug: string;
</script>

<div class="hash_link" id={slug}>
	<slot />
	<a class="icon_button" href="#{slug}">🔗</a>
</div>

<style>
	.hash_link {
		display: flex;
		align-items: center;
		position: relative;
	}
	a {
		--icon_size: var(--icon_size_sm);
		position: absolute;
		left: calc(var(--icon_size) * -1 - var(--spacing_1));
		opacity: 0;
		font-size: var(--size_lg);
		display: flex;
		align-items: center;
		justify-content: center;
		margin-left: var(--spacing_md);
	}
	.hash_link:hover a {
		opacity: 1;
	}
</style>
