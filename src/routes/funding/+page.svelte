<script lang="ts">
	import {base} from '$app/paths';
	import Svg from '@ryanatkn/fuz/Svg.svelte';
	import {github_logo} from '@ryanatkn/fuz/logos.js';
	import Card from '@ryanatkn/fuz/Card.svelte';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';

	import Page_Links from '$routes/Page_Links.svelte';
	import Patreon_Logo from '$routes/funding/Patreon_Logo.svelte'; // TODO move to fuz
	import Favicon from '$routes/Favicon.svelte';
</script>

<div class="width_md flex_1">
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
	<section class="panel p_sm shadow_md w_100">
		<div class="panel bg p_xl shadow_xs">
			<div class="float_right icon_size_lg">🪶</div>
			<p>
				Hi thank you for reading. I'm an independent software developer and this is an attempt to
				fund my work on free and open source software. If you enjoy my output and want more of it, a
				donation of any amount is helpful in two ways, 1) because money buys me time, and 2) because
				it's a strong signal that boosts my case for getting more funding, from both users like you
				and maybe grants or a job that sponsors some of my open source work.
			</p>
			<p>
				In 2011 I began my first job as a professional web developer focusing on JS, and many years
				later I'm still enjoying it. I program both as a profession and hobby, and I love the web
				for its global accessibility, high capability, backwards compatibility, and gatekeeper
				optionality. In 2019 I started publishing most of my code as I wrote it, and set out to
				produce high quality and reusable software with TypeScript and Svelte, working full-time in
				public and continuing today. More <a href="{base}/about">about me</a>.
			</p>
			<p>
				My goal is to make the best software possible, and I believe sustaining this requires
				aligning ownership and incentives. To me this means it must be unburdened by investors and
				profit-seeking, and ultimately be community-owned and controlled like through a nonprofit.
				Since 2019 I've put my money where my mouth is, spending my savings to build an open source
				web software stack (it was self-directed time and I'll admit to having fun, but I think the
				results speak to productivity too). The foundations feel right, and I can dream about the
				stack succeeding to where I'm irrelevant.
			</p>
			<p>
				I like my independence and I think it serves the software well, but my current situation is
				not ideal. Having many smaller sponsors would free me from the influence of large sponsors,
				but I miss working on a team, having organizational support, and receiving a paycheck. Maybe
				collaborating with volunteers doing open source will satisfy, I don't know. I'm following
				multiple paths including grant funding, and I'm open to joining an organization that wants
				to see <a href="https://www.zzz.software/">Zzz</a>
				succeed as a noncommercial and independent software project. Right now I'm not looking for full-time
				work unless it's related to Zzz (for example I can build tools and websites with it (<small
					><em>with ai!! tell ur boss</em></small
				>)). Here's
				<a
					href="https://docs.google.com/document/d/1Fti-__uwjazBllAqR73wrQ1lG6QO0ECBpz4n7XENP0Y/edit?usp=sharing"
					>my resume</a
				>.
			</p>
		</div>
	</section>
	<section class="box row flex_wrap gap_md">
		<div class="display_contents" style:--link_color="var(--color_b_5)">
			<!-- TODO hacky with max-width -->
			<Card href="https://github.com/sponsors/ryanatkn" attrs={{style: 'max-width: 100%'}}>
				{#snippet icon()}<Svg
						data={github_logo}
						fill="var(--color_b_5)"
						size="var(--space_xl7, 64px)"
					/>{/snippet}
				GitHub Sponsors
			</Card>
		</div>
		<Card href="https://www.patreon.com/ryanatkn" align="right">
			{#snippet icon()}<Patreon_Logo fill="var(--color_a_5)" />{/snippet}
			Patreon
		</Card>
	</section>
	<section class="panel p_sm shadow_md w_100">
		<div class="panel bg p_xl shadow_xs">
			<p>
				Today my attention is on these projects, and I plan to make end-user-facing websites and
				apps with them:
			</p>
			<ul>
				<li>
					<a href="https://www.zzz.software/">Zzz</a> - fullstack toolkit for adaptive web environments
				</li>
				<li>
					<a href="https://moss.ryanatkn.com/">Moss</a> - CSS framework and design system
				</li>
				<li><a href="https://www.fuz.dev/">Fuz</a> - Svelte UI library</li>
				<li>
					<a href="https://gro.ryanatkn.com/">Gro</a> - task runner and toolkit extending SvelteKit
				</li>
				<li>
					more on my <a href="https://github.com/ryanatkn">GitHub profile</a> and
					<a href="https://www.ryanatkn.com/tree">here</a> on my website
				</li>
			</ul>
			<p>
				I'm communicating about my projects and process with <a href="https://www.webdevladder.net/"
					>webdevladder.net</a
				>. I shared more plans in the blog post
				<a href="https://www.webdevladder.net/blog/introducing-webdevladder"
					>"Introducing Webdevladder"</a
				>.
			</p>
			<p>
				I've been lucky to be able to live off savings for the last 6 years, but I need a funding
				plan to sustain these projects. My runway currently extends through 2026.
			</p>
			<p>
				To help me produce software, videos, and blog posts, you can support me on
				<!-- TODO after upgrading Fuz use `inline` instead of the classes -->
				<a
					class="white_space_nowrap"
					href="https://github.com/sponsors/ryanatkn"
					style:--link_color="var(--color_b_5)"
					><Svg data={github_logo} size="var(--font_size_md)" fill="var(--color_b_5)" inline /> GitHub
					Sponsors</a
				>
				or
				<a class="white_space_nowrap" href="https://www.patreon.com/ryanatkn"
					><Patreon_Logo size="var(--font_size_md)" fill="var(--color_a_5)" inline /> Patreon</a
				>. Supporting me at any level grants you access to supporters-only social websites I build
				on camera (none yet, maybe late 2025). Supporting me through GitHub instead of Patreon
				grants access to a repo with supporters-only discussions.
			</p>
			<p>
				I hope to continue having fun building useful software, and to collaborate more with people
				around these ideas and technologies.
			</p>
		</div>
	</section>
	<section class="box gap_xl2">
		<Page_Links />
	</section>
	<section class="box">
		<Breadcrumb><Favicon /></Breadcrumb>
	</section>
</div>
