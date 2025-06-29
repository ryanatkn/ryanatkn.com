<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import {base} from '$app/paths';

	import Page_Links from '$routes/Page_Links.svelte';
	import Contact_Info from '$routes/Contact_Info.svelte';
	import Favicon from '$routes/Favicon.svelte';
	import Me from '$routes/Me.svelte';
</script>

<div class="about">
	<header class="box">
		<h1 class="row gap_md mt_xl5 mb_xl7">
			<div class="flip_x" style:transform="scaleX(-1)">🪶</div>
			about
			<!-- TODO svelte5 remove the style:transform bc the CSS class will be ready -->
			<span>🪶</span>
		</h1>
	</header>
	<section class="width_md panel shadow_inset_xs">
		<div style:min-height="192px" style:margin-bottom="var(--space_md)">
			<div class="float_right ml_sm border_radius_50 shadow_md"><Me /></div>
			<p>
				Hi, my name is Ryan Atkinson and I'm an independent web developer. I'm trying to make
				powerful and simple tools to help people be creative and productive in social contexts. I'm
				driven by curiosity and wanting to improve our lives with technology.
			</p>
			<p>
				My work is
				<a href="https://github.com/ryanatkn">open source on GitHub</a>
				and this website's homepage lists <a href="{base}/">my ongoing projects</a>. I'm in the
				early stages of trying to get <a href="{base}/funding">funding</a> directly from my users,
				viewers, and readers. I'm also looking for low-hour consulting work, and I'm open to jobs
				where at least some hours could be sponsored on <a href="https://www.zzz.software/">Zzz</a>
				-- here's my
				<a
					href="https://docs.google.com/document/d/1Fti-__uwjazBllAqR73wrQ1lG6QO0ECBpz4n7XENP0Y/edit?usp=sharing"
					>resume</a
				>.
			</p>
			<p>
				I work on the web because for all its flaws, it's a collectively-governed sandboxed platform
				with backwards compatibility that runs everywhere, reaching more people with less friction
				than anything else. I care a lot about software quality, maintainability, performance, and
				giving power to users throughout the stack.
			</p>
		</div>
		<p>More:</p>
		<ul>
			<li>
				in 2019 I started <a href="https://github.com/ryanatkn">doing full-time open source</a>,
				publishing my code for free with permissive licenses
			</li>
			<li>
				I was initially self-taught (ty internet) and I've been working as a JS-oriented web dev
				since 2011
			</li>
			<li>
				I learned to code wanting to be a game programmer, but I fell in love with the web at my
				first job
			</li>
			<li>
				my interest in making games continues as a hobby in <a href="https://www.dealt.dev/"
					>dealt.dev</a
				>, <a href="https://www.cosmicplayground.org/">cosmicplayground.org</a>,
				<a href="https://earbetter.ryanatkn.com/">Earbetter</a>,
				<a href="https://ryanatkn.github.io/svelte-snake-sports/">Svelte Snake Sports</a>, and other
				<a href="https://github.com/ryanatkn#archives">abandonings</a> and future projects
			</li>
			<li>
				I like <a href="https://svelte.dev/">Svelte</a> and SvelteKit so much that you shouldn't trust
				my opinion on it
			</li>
		</ul>
	</section>
	<section class="box">
		<div class="panel box shadow_inset_xs">
			<Contact_Info />
		</div>
	</section>
	<section class="box gap_xl2">
		<Page_Links />
	</section>
	<section class="box">
		<Breadcrumb><Favicon /></Breadcrumb>
	</section>
</div>

<style>
	.about {
		flex: 1;
	}
	.panel {
		padding: var(--space_lg);
	}
	.panel > *:last-child {
		margin-bottom: 0;
	}
	.panel :global(h2) {
		margin-top: 0;
	}
</style>
