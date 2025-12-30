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

<div class="width_upto_md flex_1">
	<section class="box">
		<header class="box">
			<h1 class="row gap_md text_align_center mt_xl5 mb_0">
				<div>🐚</div>
				funding
				<!-- TODO svelte5 remove the style:transform bc the CSS class will be ready -->
				<div class="flip_x" style:transform="scaleX(-1)">🐚</div>
			</h1>
		</header>
	</section>
	<section class="panel p_sm shadow_md width_100">
		<div class="panel bg p_xl shadow_xs">
			<div class="float_right icon_size_lg">🪶</div>
			<p>
				Hi thank you for reading. I'm an independent software developer and this is an attempt to
				fund my work on free and open source software. If you enjoy my output and want more of it, a
				donation of any amount is helpful in two ways, 1) because money buys me time to develop free
				software, and 2) because it's a strong signal that boosts my case for getting more funding,
				from both users like you and maybe grants or a job that uses or sponsors my open source
				work.
			</p>
			<p>
				I'm working on several projects, but the main one is <a href="https://www.zzz.software/"
					>Zzz</a
				>, a fullstack web toolkit focused on user power and experimentation. It can be used (still
				a work in progress) to browse and create for the web with an open-ended nice-to-use tool,
				and to build websites and apps, both for regular desktop app users and for devs with
				existing workflows. It values security and interoperability, and idealizes an integrated
				system leveraging universal JS.
			</p>
			<p>
				I want to make software with the best UX possible, and as widespread
				<a href="https://en.wikipedia.org/wiki/Enshittification">enshittification</a> suggests, I think
				that's infinitely easier to do when unburdened by investors and profit-seeking. I'm self-funded,
				so the situation is uncomplicated -- trust me or not. I'm not going to sell control over Zzz and
				its dependencies or take investment for them. The goal is software designed for our benefit that
				we can trust to serve us. If a user community forms around some projects in my stack, I think
				the best outcome is them being owned by a community-representing org like a nonprofit.
			</p>
			<p>
				I like my independence and I think it allows me to make software with a different set of
				values from the norm. I hope to make it sustainable without compromising my autonomy.
			</p>
		</div>
	</section>
	<section class="box row flex_wrap_wrap gap_md">
		<div class="display_contents" style:--link_color="var(--color_b_5)">
			<!-- TODO hacky with max-width -->
			<Card href="https://github.com/sponsors/ryanatkn" style="max-width: 100%">
				{#snippet icon()}<Svg
						data={logo_github}
						fill="var(--color_b_5)"
						size="var(--space_xl7, 64px)"
					/>{/snippet}
				GitHub Sponsors
			</Card>
		</div>
		<Card href="https://www.patreon.com/ryanatkn" align="right">
			{#snippet icon()}<PatreonLogo fill="var(--color_a_5)" />{/snippet}
			Patreon
		</Card>
	</section>
	<section class="panel p_sm shadow_md width_100">
		<div class="panel bg p_xl shadow_xs">
			<p>
				Today my attention is on these projects, parts of a stack I plan to use to make other
				websites and apps:
			</p>
			<ul>
				<li>
					<a href="https://www.zzz.software/">Zzz</a> - fullstack toolkit for adaptive web environments
				</li>
				<li>
					<a href="https://css.fuz.dev/">Fuz CSS</a> - CSS framework and design system
				</li>
				<li><a href="https://ui.fuz.dev/">Fuz UI</a> - Svelte UI library</li>
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
			<p>
				In 2011 I began my first job as a professional web developer focusing on JS, and many years
				later I'm still enjoying it. I program both as a profession and hobby, and I love the web
				for its global accessibility, high capability, backwards compatibility, and gatekeeper
				optionality. In 2019 I started publishing most of my code as I wrote it, and set out to
				produce high quality and reusable software with TypeScript and Svelte, working full-time in
				public and continuing today. More <a href={resolve('/about')}>about me</a>.
			</p>
			<p>
				Donating $1 a month on
				<!-- TODO after upgrading Fuz use `inline` instead of the classes -->
				<a
					class="white_space_nowrap"
					href="https://github.com/sponsors/ryanatkn"
					style:--link_color="var(--color_b_5)"
					><Svg data={logo_github} size="var(--font_size_md)" fill="var(--color_b_5)" inline /> GitHub
					Sponsors</a
				>
				and
				<a class="white_space_nowrap" href="https://www.patreon.com/ryanatkn"
					><PatreonLogo size="var(--font_size_md)" fill="var(--color_a_5)" inline /> Patreon</a
				> helps me a lot for the signal it sends. No rewards yet but idk.
			</p>
			<p>
				I hope to continue having fun building useful software, and to find collaborators around
				these ideas and technologies as I work in public. See the <a href={resolve('/tree')}
					>repos</a
				> for more.
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
