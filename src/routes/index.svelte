<script lang="ts">
	import Header from '$lib/app/Header.svelte';
	import Footer from '$lib/app/Footer.svelte';
	import PersonalStatement from '$lib/app/PersonalStatement.svelte';
</script>

<main>
	<Header />
	<div class="column markup">
		<PersonalStatement />
	</div>
	<Footer />
</main>

<style>
	main {
		width: 100%;
		position: relative;
		/* TODO should these be on `.column` ? */
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
