<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';

	import Favicon from '$routes/Favicon.svelte';
	import GitopsMenu from '$routes/GitopsMenu.svelte';
	import PageLinks from '$routes/PageLinks.svelte';
	import ContactInfo from '$routes/ContactInfo.svelte';
	import Me from '$routes/Me.svelte';
	import ProjectCard from '$routes/ProjectCard.svelte';
	import {projects} from '$routes/projects.ts';
</script>

<svelte:head>
	<title>ryanatkn.com</title>
</svelte:head>

<section class="width_upto_md flex_1 p_md">
	<section class="box">
		<div class="panel shadow_inset_xs h-card">
			<!-- TODO specificity so we can just add `.bg` instead of `style:background-color="var(--bg)"` -->
			<a class="u-url u-uid" href="https://www.ryanatkn.com/" hidden aria-hidden="true"
				>https://www.ryanatkn.com/</a
			>
			<span class="p-category" hidden aria-hidden="true">webdev</span>
			<span class="p-category" hidden aria-hidden="true">devtools</span>
			<span class="p-category" hidden aria-hidden="true">systems programming</span>
			<span class="p-category" hidden aria-hidden="true">hobby programming</span>
			<span class="p-category" hidden aria-hidden="true">foss</span>
			<span class="p-category" hidden aria-hidden="true">Rust</span>
			<span class="p-category" hidden aria-hidden="true">TypeScript</span>
			<span class="p-category" hidden aria-hidden="true">Svelte</span>
			<span class="p-category" hidden aria-hidden="true">UI</span>
			<span class="p-category" hidden aria-hidden="true">UX</span>
			<header>
				<div class="border_radius_50 shadow_md"><Me /></div>
				<blockquote class="bg shadow_xs ml_md mt_md">
					welcome to the homepage<br />
					of <span class="p-name">Ryan Atkinson</span>, he's<br />
					an <span class="p-role">independent software developer</span><br />
					making and talking about<br />
					free and open source software<br />
				</blockquote>
			</header>
			<p class="panel bg position_relative shadow_xs mt_md p-note" style:max-width="440px">
				Hi, I'm building free software and communicating about it. I enjoy trying to make powerful
				full-stack tools that are easy to use, and I like designing and implementing UIs, social
				spaces, and integrated systems.
			</p>
		</div>
	</section>
	<section class="box row flex_wrap_wrap gap_xl2">
		<PageLinks />
	</section>
	<section class="box">
		<div class="panel box shadow_inset_xs">
			<ContactInfo />
		</div>
	</section>
	<!-- TODO margin is a hack, replace with a class or generic style -->
	<section class="panel shadow_inset_xs">
		<div class="box">
			<h2 class="mb_xl2">ongoing projects</h2>
		</div>
		<div class="cards">
			{#each projects as project (project)}
				<ProjectCard {project}></ProjectCard>
			{/each}
		</div>
		<div class="box py_xl">
			<div class="panel p_lg bg shadow_inset_xs">
				<!-- TODO fuz .font_size_lg -->
				<div class="mb_lg text_align_center" style:font-size="var(--font_size_lg)">all repos</div>
				<GitopsMenu />
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
		/* TODO these two decls are a hack to get 2 items max on a line to make it not gross */
		max-width: 730px;
		margin: 0 auto;
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
