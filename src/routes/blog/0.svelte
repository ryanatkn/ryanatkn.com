<script lang="ts">
	import LinkPath from '@feltcoop/felt/ui/LinkPath.svelte';
	import {page} from '$app/stores';
</script>

<div class="blog">
	<LinkPath path={$page.url.pathname} />
</div>

<div class="markup">
	<blockquote>
		this is an extended and more polished version of <a
			href="https://twitter.com/ryanatkn/status/1520521806091849729">this Twitter thread</a
		>
	</blockquote>
	<p>
		I've been building an open source web project with <a href="https://twitter.com/greatbaconbits"
			>@greatbaconbits</a
		>
		fulltime for a year & we <a href="https://twitter.com/feltcoop">@feltcoop</a>
		<a href="https://twitter.com/feltcoop/status/1519703424433934336" rel="noreferrer"
			>tweeted about it</a
		>
	</p>
	<p>the software:</p>
	<ul>
		<li>is currently still pre-alpha, and we hope to reach alpha this year, beta optimistically</li>
		<li>targets underserved niches</li>
	</ul>
	<blockquote>
		please note this pre-alpha software should absolutely in no circumstances be piped data that you
		don't want public
	</blockquote>
	<p>what are these underserved niches?</p>
	<ul>
		<li>small communities</li>
		<li>
			a single app with chats+forums+todos+etc that's perhaps less slick than each but far more
			powerful in 1
		</li>
		<li>
			fullstack modding, so devs and endusers have proper access and power over their UX, so we
			bridge more of the gap between programming & using
		</li>
	</ul>
	<blockquote>unfortunately, coolness is often limited by security</blockquote>
	<p>
		e.g. devs get open source where they can author and extend components, and endusers get a
		composable text language with a rich vocabulary that can be used not only to construct chat
		messages, forum and blog posts, todo items, and so on, but also construct the client's entire UI
	</p>
</div>

<style>
	.blog {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: var(--font_size_xl3);
	}
</style>
