<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import {resolve, asset} from '$app/paths';

	import PageLinks from '$routes/PageLinks.svelte';
	import ContactInfo from '$routes/ContactInfo.svelte';
	import Favicon from '$routes/Favicon.svelte';
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
	<section class="width_upto_md panel shadow_inset_xs h-card">
		<a class="u-url u-uid" href="https://www.ryanatkn.com/" hidden aria-hidden="true"
			>https://www.ryanatkn.com/</a
		>
		<div style:min-height="192px" style:margin-bottom="var(--space_md)">
			<div class="float_right ml_sm border_radius_50 shadow_md">
				<img
					class="u-photo"
					src={asset('/me.png')}
					alt="me smiling on a couch while holding my sister's calico cat Caramel who's out of frame"
					style:width="var(--icon_size_xl2)"
					style:height="var(--icon_size_xl2)"
					style:min-width="var(--icon_size_xl2)"
					style:min-height="var(--icon_size_xl2)"
				/>
			</div>
			<p>
				Hi I'm <span class="p-name">Ryan Atkinson</span> and I'm an
				<span class="p-role">independent software developer</span>
				trying to make tools that extend our intent and creativity. I'm driven by curiosity and wanting
				to improve our lives with technology.
			</p>
			<p>
				My software is
				<a class="u-url" rel="me" href="https://github.com/ryanatkn">open source on GitHub</a>
				and this website's homepage lists my
				<a class="u-url" href={resolve('/')}>ongoing projects</a>. I'm seeking
				<a href={resolve('/funding')}>funding</a> to either remain independent or continue my work with
				an aligned organization.
			</p>
			<p>
				I work on the web because for all its flaws, it's our best collectively-governed platform
				with backwards compatibility that runs everywhere, reaching more people with less friction
				than anything else. I care a lot about software quality, maintainability, performance, and
				providing power to users throughout the stack.
			</p>
		</div>
		<p>More:</p>
		<ul>
			<li>using mostly Rust, TypeScript (Deno!), and Svelte</li>
			<li>
				in 2019 I started doing full-time open source, publishing <a
					href="https://github.com/ryanatkn">my code</a
				> for free with permissive licenses
			</li>
			<li>
				I was initially self-taught (ty internet ppl) and I've been working as a JS-oriented web dev
				since 2011
			</li>
			<li>
				I learned to code wanting to be a game programmer, but at my first job the web captured my
				attention
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
			<ContactInfo />
		</div>
	</section>
	<section class="box gap_xl2">
		<PageLinks />
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
