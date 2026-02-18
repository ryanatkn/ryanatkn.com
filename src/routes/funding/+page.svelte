<script lang="ts">
	import {resolve} from '$app/paths';
	import Svg from '@fuzdev/fuz_ui/Svg.svelte';
	import {logo_github} from '@fuzdev/fuz_ui/logos.js';
	import Card from '@fuzdev/fuz_ui/Card.svelte';
	import Breadcrumb from '@fuzdev/fuz_ui/Breadcrumb.svelte';

	import PageLinks from '$routes/PageLinks.svelte';
	import PatreonLogo from '$routes/funding/PatreonLogo.svelte'; // TODO move to fuz
	import Favicon from '$routes/Favicon.svelte';
</script>

<div class="width_atmost_md flex:1">
	<section class="box">
		<header class="box">
			<h1 class="row gap_md text-align:center mt_xl5 mb_0">
				<div>🐚</div>
				funding
				<!-- TODO svelte5 remove the style:transform bc the CSS class will be ready -->
				<div class="transform:scaleX(-1)" style:transform="scaleX(-1)">🐚</div>
			</h1>
		</header>
	</section>
	<section class="panel p_sm shadow_md width:100%">
		<div class="panel shade_00 p_xl shadow_xs">
			<div class="float:right icon_size_lg">🪶</div>
			<p>
				Hi thank you for reading. I'm an independent software developer and this is an attempt to
				fund my work on free and open source software. If you enjoy my output and want more of it,
				donations are helpful in two ways, 1) because money buys me time to develop free software,
				and 2) because it's a strong signal that boosts my case for getting more funding, from both
				users like you and maybe grants/sponsorships/fellowships to support my open source work.
			</p>
			<aside>
				Stars on GitHub are also a helpful show of appreciation 💫 <a
					href="https://github.com/fuzdev">@fuzdev</a
				>
				and <a href="https://github.com/ryanatkn">@ryanatkn</a>
			</aside>
			<p>
				I'm working on several projects, but the main one is Fuz, "a zippy stack for autonomy", see <a
					href="https://www.fuz.dev/">fuz.dev</a
				>
				and
				<a href="https://github.com/fuzdev">github.com/fuzdev</a>. It's a set of tools to build
				websites and powerful systems, and direct computers in general. It's build for user control,
				security, and interoperability, and idealizes an integrated system of a particular taste.
				(TypeScript/Svelte/Rust/Postgres/Linux)
			</p>
			<p>
				My plan for Fuz is to have it stewarded by some kind of a nonprofit, but that would require
				a community to form first, users using the software. Before LLMs I thought a community
				forming was a likely outcome, but who knows any more! (sighhh lol). I think my independence
				allows me to make software with a different set of values from the norm, which isn't a
				lucrative path but I find it going to interesting places. So I like what I'm doing and want
				noncommerical projects like Fuz to exist, but I'm still figuring out how to make it
				sustainable.
			</p>
			<p>
				Today my attention is on these projects, parts of a stack I plan to use to make other
				websites and apps:
			</p>
			<ul>
				<li>
					<a href="https://www.zzz.software/">Zzz</a> - local-first forge for power users and developers
				</li>
				<li>
					<a href="https://css.fuz.dev/">fuz_css</a> - CSS framework and design system
				</li>
				<li><a href="https://ui.fuz.dev/">fuz_ui</a> - Svelte UI library</li>
				<li>
					<a href="https://gro.ryanatkn.com/">Gro</a> - task runner and toolkit extending SvelteKit
				</li>
			</ul>
			<p>
				More on my <a href="https://github.com/ryanatkn">GitHub profile</a> and
				<a href="https://www.ryanatkn.com/tree">website</a>. I'm also communicating about my
				projects and process with <a href="https://www.webdevladder.net/">webdevladder.net</a>, and
				I shared more plans in the blog post
				<a href="https://www.webdevladder.net/blog/introducing-webdevladder"
					>"Introducing Webdevladder"</a
				>.
			</p>
		</div>
	</section>
	<section class="box row flex-wrap:wrap gap_md">
		<div class="display:contents" style:--link_color="var(--color_b_50)">
			<!-- TODO hacky with max-width -->
			<Card href="https://github.com/sponsors/ryanatkn" style="max-width: 100%">
				{#snippet icon()}<Svg
						data={logo_github}
						fill="var(--color_b_50)"
						size="var(--space_xl7, 64px)"
					/>{/snippet}
				GitHub Sponsors
			</Card>
		</div>
		<Card href="https://www.patreon.com/ryanatkn" align="right">
			{#snippet icon()}<PatreonLogo fill="var(--color_a_50)" />{/snippet}
			Patreon
		</Card>
	</section>
	<section class="panel p_sm shadow_md width:100%">
		<div class="panel shade_00 p_xl shadow_xs">
			<p>
				In 2011 I began my first job as a professional web developer focusing on JS, and many years
				later I'm still enjoying it, programming both as a profession and hobby. In 2019 I started <a
					href="https://github.com/ryanatkn?tab=overview&from=2019-12-01&to=2019-12-31"
					>publishing most of my code</a
				>
				as I wrote it, and set out to produce high quality and reusable software with TypeScript, Svelte,
				and Rust, working full-time in public and continuing today.
			</p>
			<p>
				I love the web for its global accessibility, high capability, backwards compatibility, and
				gatekeeper optionality, and the software is shaping up nicely, although the scope is really
				big and it's stretching me thin. More
				<a href={resolve('/about')}>about me</a>.
			</p>
			<p>
				Donating $1 a month on
				<!-- TODO after upgrading Fuz use `inline` instead of the classes -->
				<a
					class="white-space:nowrap"
					href="https://github.com/sponsors/ryanatkn"
					style:--link_color="var(--color_b_50)"
					><Svg data={logo_github} size="var(--font_size_md)" fill="var(--color_b_50)" inline /> GitHub
					Sponsors</a
				>
				and
				<a class="white-space:nowrap" href="https://www.patreon.com/ryanatkn"
					><PatreonLogo size="var(--font_size_md)" fill="var(--color_a_50)" inline /> Patreon</a
				> helps me a lot for the signal it sends. No rewards yet, but one possiblity is donors will get
				access to websites I build on camera, maybe in 2026.
			</p>
			<p>
				I hope to continue having fun building useful software, and to find collaborators around
				these ideas and technologies as I work in public. See the <a href={resolve('/tree')}
					>repos</a
				> for the code and discussions.
			</p>
		</div>
	</section>
	<section class="box gap_xl2">
		<PageLinks />
	</section>
	<section class="box">
		<Breadcrumb><Favicon /></Breadcrumb>
	</section>
</div>
