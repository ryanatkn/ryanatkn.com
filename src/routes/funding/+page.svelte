<script lang="ts">
	import {resolve} from '$app/paths';
	import Svg from '@fuzdev/fuz_ui/Svg.svelte';
	import {logo_github} from '@fuzdev/fuz_ui/logos.ts';
	import Card from '@fuzdev/fuz_ui/Card.svelte';
	import Breadcrumb from '@fuzdev/fuz_ui/Breadcrumb.svelte';

	import PageLinks from '$routes/PageLinks.svelte';
	import PatreonLogo from './PatreonLogo.svelte'; // TODO move to fuz
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
				I'm an independent software developer and this is an attempt to fund my work on free and
				open source software, a full-time endeavor since 2019. If you enjoy my output and want more
				of it, donate here to sustain the effort.
			</p>
			<p>
				I'm working on several projects, but the main one is Fuz, "a zippy stack for human agency",
				online at <a href="https://www.fuz.dev/">fuz.dev</a>
				and
				<a href="https://github.com/fuzdev">github.com/fuzdev</a>. It's a set of tools, libraries,
				and apps for easily building websites and powerful native systems. Fuz values user control,
				security, and interoperability, and idealizes an integrated system of a particular taste,
				centered on Rust, TypeScript, CSS, and Svelte.
			</p>
			<p>
				My plan for Fuz and its related projects is to have them stewarded by a nonprofit, either
				forming or joining one, but that's steps ahead of a community forming first.
			</p>
			<p>
				Today my attention is on these projects, parts of a stack I plan to use to make other
				websites and apps.
			</p>
			<p>
				On GitHub I'm <a href="https://github.com/ryanatkn">@ryanatkn</a> and I manage
				<a href="https://github.com/fuzdev">@fuzdev</a>, and I blog on this website and
				<a href="https://www.webdevladder.net/">webdevladder.net</a>.
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
		<Card
			href="https://www.patreon.com/ryanatkn"
			align="right"
			style="--link_color: var(--color_d_50)"
		>
			{#snippet icon()}<PatreonLogo fill="var(--color_d_50)" />{/snippet}
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
				gatekeeper optionality, and I think the software I'm building for it is shaping up nicely,
				although the scope is really big, and it'll take time to fully realize. More
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
				<a
					class="white-space:nowrap"
					href="https://www.patreon.com/ryanatkn"
					style:--link_color="var(--color_d_50)"
					><PatreonLogo size="var(--font_size_md)" fill="var(--color_d_50)" inline /> Patreon</a
				> helps me a lot for the signal it sends. Rewards are intrinsic only, no donor perks (which get
				complicated, especially socially).
			</p>
			<p>
				I hope to continue having fun building useful software, and to find users and collaborators
				around these ideas and technologies as I work in public. See the <a href={resolve('/tree')}
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
