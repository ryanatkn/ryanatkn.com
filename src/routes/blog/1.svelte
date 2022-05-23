<script lang="ts">
	import BlogPostHeader from '$lib/BlogPostHeader.svelte';
	import {feedData} from '$lib/feedData';

	// TODO refactor this probably, maybe putting the post in context
	const post = feedData.items[1];
</script>

<BlogPostHeader {post} />
<p>
	Giving proper credit to all of one's influences is an impossible task but why not try? Maybe these
	lists could help you discover new and interesting people & things. I am definitely forgetting
	important people and things, so this will be an evolving document.
</p>
<h3>languages that obviously influenced my thinking, roughly chronological:</h3>
<ul>
	<li>whatever <a href="https://wikipedia.org/wiki/DOS">DOS</a> is</li>
	<li>config files for games like <a href="https://wikipedia.org/wiki/INI_file">.ini</a></li>
	<li>
		<a href="https://wikipedia.org/wiki/HTML">HTML</a> (making silly things with friends in highschool)
	</li>
	<li>
		<a href="https://wikipedia.org/wiki/Lua_(programming_language)">Lua</a> and some
		<a href="https://wikipedia.org/wiki/PHP">PHP</a>-like scripting languages for games
	</li>
	<li>
		<a href="https://wikipedia.org/wiki/Microsoft_Excel">Excel</a> and
		<a href="https://wikipedia.org/wiki/Visual_Basic_for_Applications">VBA</a>
	</li>
	<li><a href="https://www.python.org/">Python</a></li>
	<li>
		<a href="https://wikipedia.org/wiki/ActionScript">Action Script 3</a> for Flash (whats flash)
	</li>
	<li><a href="https://wikipedia.org/wiki/JavaScript">JavaScript</a></li>
	<li><a href="https://wikipedia.org/wiki/CSS">CSS</a></li>
	<li>
		<a href="https://wikipedia.org/wiki/Document_Object_Model">DOM</a> templating langs like
		<a href="https://underscorejs.org/">Underscore.js</a>/<a href="https://jade-lang.com/">Jade</a>
		with <a href="https://jquery.com/">jQuery</a>/<a href="https://backbonejs.org/">Backbone</a>
	</li>
	<li><a href="https://coffeescript.org/">CoffeeScript</a></li>
	<li><a href="https://livescript.net/">LiveScript</a></li>
	<li><a href="https://wikipedia.org/wiki/Lisp_(programming_language)">Lisp</a></li>
	<li><a href="https://clojure.org/">Clojure</a></li>
	<li><a href="https://wikipedia.org/wiki/JSON">JSON</a> (post-lisp understanding)</li>
	<li><a href="https://www.haskell.org/">Haskell</a></li>
	<li><a href="https://www.rust-lang.org/">Rust</a></li>
	<li>DOM templating with <a href="https://angular.io/">Angular</a></li>
	<li><a href="https://reactjs.org/docs/introducing-jsx.html">JSX and React</a>/vdom</li>
	<li><a href="https://clojurescript.org/">ClojureScript</a></li>
	<li>
		a little <a href="https://elm-lang.org/">Elm</a> and
		<a href="https://www.purescript.org/">PureScript</a>
	</li>
	<li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
	<li><a href="https://svelte.dev/">Svelte</a></li>
</ul>
<h3>a tech/design cluster roughly chronological:</h3>
<ul>
	<li>many game designers, developers, and modders</li>
	<li><a href="https://wikipedia.org/wiki/Tim_Berners-Lee">Tim Berners-Lee</a></li>
	<li><a href="https://wikipedia.org/wiki/John_Carmack">John Carmack</a></li>
	<li><a href="https://wikipedia.org/wiki/Alan_Kay">Alan Kay</a></li>
	<li><a href="https://wikipedia.org/wiki/Bret_Victor">Bret Victor</a></li>
	<li><a href="https://wikipedia.org/wiki/Douglas_Engelbart">Douglas Engelbart</a></li>
	<li><a href="https://wikipedia.org/wiki/Seymour_Papert">Seymour Papert</a></li>
	<li><a href="https://wikipedia.org/wiki/Ted_Nelson">Ted Nelson</a></li>
	<li><a href="https://wikipedia.org/wiki/Rich_Hickey">Rich Hickey</a></li>
	<li>my coworker <a href="https://github.com/mgutz">Mario Gutierrez</a></li>
	<li><a href="https://wikipedia.org/wiki/Ryan_Dahl">Ryan Dahl</a></li>
	<li><a href="https://wikipedia.org/wiki/Jeremy_Ashkenas">Jeremy Ashkenas</a></li>
	<li><a href="https://wikipedia.org/wiki/Douglas_Crockford">Douglas Crockford</a></li>
	<li><a href="https://github.com/tj">TJ Holowaychuk</a></li>
	<li><a href="https://substack.net/">substack</a></li>
	<li><a href="https://andrewclark.io/">Andrew Clark</a></li>
	<li><a href="https://twitter.com/dan_abramov">Dan Abramov</a></li>
	<li><a href="https://github.com/lhorie">Leo Horie</a></li>
	<li><a href="https://ncase.me/">Nicky Case</a></li>
	<li><a href="https://jlongster.com/">James Long</a></li>
	<li><a href="https://twitter.com/Rich_Harris">Rich Harris</a></li>
	<li><a href="https://andymatuschak.org/">Andy Matuschak</a></li>
	<li><a href="https://twitter.com/yoshikischmitz">Yoshiki Schmitz</a></li>
	<li><a href="https://www.geoffreylitt.com/">Geoffrey Litt</a></li>
	<li><a href="https://www.galaxykate.com/">Kate Compton</a></li>
	<li><a href="https://jasonyuan.design/">Jason Yuan</a></li>
	<li><a href="https://wattenberger.com/">Amelia Wattenberger</a></li>
	<li><a href="https://tinysubversions.com/">Darius Kazemi</a></li>
	<li><a href="https://maggieappleton.com/">Maggie Appleton</a></li>
	<li><a href="https://www.swyx.io/">Shawn Wang</a></li>
	<li><a href="https://twitter.com/RyanCarniato">Ryan Carniato</a></li>
	<li><a href="https://homes.cs.washington.edu/~axz/">Amy Zhang</a></li>
	<li><a href="https://imjane.net">Jane Im</a></li>
	<li><a href="https://alexanderobenauer.com/">Alexander Obenauer</a></li>
</ul>
<h3>a cluster around my current professional work:</h3>
<ul>
	<li><a href="https://futureofcoding.org/">Future of Coding</a> community</li>
	<li><a href="https://toolsforthought.rocks/">toolsforthought.rocks</a></li>
	<li><a href="https://kit.svelte.dev/">SvelteKit</a></li>
	<li><a href="https://socialhub.activitypub.rocks/">socialhub.activitypub.rocks</a></li>
	<li>
		<a href="https://wikipedia.org/wiki/Fediverse">the fediverse</a> and
		<a href="https://wikipedia.org/wiki/Matrix_(protocol)">Matrix protocol</a>
	</li>
	<li><a href="https://metagov.org/">metagov.org</a></li>
	<li><a href="https://platform.coop/">platform.coop</a></li>
	<li><a href="https://consentful.systems/">consentful.systems</a></li>
	<li><a href="https://www.consentfultech.io/">consentfultech.io</a></li>
	<li>
		<a href="https://publicinfrastructure.org/">Initiative for Digital Public Infrastructure</a>
	</li>
	<li><a href="https://communityrule.info/">CommunityRule</a></li>
	<li><a href="https://policykit.org/">PolicyKit</a></li>
	<li><a href="https://nathanschneider.info/">Nathan Schneider</a></li>
	<li><a href="https://homes.cs.washington.edu/~axz/">Amy Zhang</a></li>
	<li><a href="https://www.joshuatan.com/">Joshua Tan</a></li>
	<li><a href="https://imjane.net">Jane Im</a></li>
	<li><a href="https://twitter.com/divyasiddarth">Divya Siddarth</a></li>
	<li><a href="https://opencollective.com/">Open Collective</a></li>
</ul>
