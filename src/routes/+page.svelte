<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';

	import Favicon from '$routes/Favicon.svelte';
	import Gitops_Menu from '$routes/Gitops_Menu.svelte';
	import Page_Links from '$routes/Page_Links.svelte';
	import Contact_Info from '$routes/Contact_Info.svelte';
	import Me from '$routes/Me.svelte';
	import Project_Card from '$routes/Project_Card.svelte';
	import {projects} from '$routes/projects.js';
</script>

<svelte:head>
	<title>ryanatkn.com</title>
</svelte:head>

<section class="width_md p_md">
	<section class="box">
		<div class="panel shadow_inset_xs">
			<!-- TODO specificity so we can just add `.bg` instead of `style:background-color="var(--bg)"` -->
			<header>
				<div class="radius_50 shadow_md"><Me /></div>
				<blockquote class="bg shadow_xs ml_md mt_md">
					welcome to the homepage<br />
					of Ryan Atkinson, he's<br />
					an independent web developer<br />
					making free and open source<br />
					software for the social web
				</blockquote>
			</header>
			<p class="panel bg relative shadow_xs mt_md" style:max-width="450px">
				Hi, I'm building free and open source software and communicating about it. My main skill is
				making frontend web apps and I also do some backend and devtools programming. I enjoy trying
				to make powerful tools that are easy to use, and I'm extra interested in UIs, API design,
				and social systems.
			</p>
		</div>
	</section>
	<section class="box row flex_wrap gap_xl2">
		<Page_Links />
	</section>
	<section class="box">
		<div class="panel box shadow_inset_xs">
			<Contact_Info />
		</div>
	</section>
	<!-- TODO margin is a hack, replace with a class or generic style -->
	<section class="panel shadow_inset_xs">
		<div class="box">
			<h2 class="mb_xl2">ongoing projects</h2>
		</div>
		<div class="cards">
			{#each projects as project (project)}
				<Project_Card {project}></Project_Card>
			{/each}
		</div>
		<div class="box py_xl">
			<div class="panel p_lg bg shadow_inset_xs">
				<!-- TODO fuz .size_lg -->
				<div class="mb_lg text_align_center" style:font-size="var(--size_lg)">all repos</div>
				<Gitops_Menu />
			</div>
		</div>
	</section>
</section>
<section class="box">
	<Breadcrumb
		><div class="linkpath">
			<span class="row"
				><Favicon />
				<div class="pl_md">ryanatkn.com</div></span
			>
		</div></Breadcrumb
	>
</section>

<style>
	.width_md {
		flex: 1;
	}
	.linkpath {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.panel {
		padding: var(--space_lg);
	}
	.panel > :global(*:last-child) {
		margin-bottom: 0;
	}
	.panel :global(h2) {
		margin-top: 0;
	}

	.cards {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
		gap: var(--space_md);
	}

	header {
		display: flex;
		align-items: center;
	}

	header blockquote {
		flex: 1;
	}

	@media (max-width: 530px) {
		header {
			flex-direction: column-reverse;
		}

		header blockquote {
			margin: 0 0 var(--space_md) 0;
		}
	}
</style>
