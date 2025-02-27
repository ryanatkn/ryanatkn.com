import{a as i,t as m,e as Z,d as D}from"../chunks/_RlvbzGa.js";import{a0 as r,c as t,r as e,a as E,p as N,t as H,z as J,a3 as O,$ as L,a2 as Q,a1 as K}from"../chunks/COZbaPGj.js";import{d as V}from"../chunks/Vj6yg7dV.js";import{e as W}from"../chunks/BF8qbg1G.js";import{s as B}from"../chunks/PwPRnE0L.js";import{B as X}from"../chunks/C2galtJf.js";import{F as $}from"../chunks/C16W1mYH.js";import{a as _,e as aa,b as ea,c as ta,f as sa}from"../chunks/r6pgjz4S.js";import{b as T}from"../chunks/9wmINFcS.js";import{P as oa}from"../chunks/DfFpWFq1.js";import{M as ra,C as na}from"../chunks/kkGeInU6.js";import{s as ia}from"../chunks/ykglFUGU.js";import{i as f}from"../chunks/DGwo49xS.js";import{h as U}from"../chunks/DrJ79odq.js";import{S as la,z as ca,m as da,f as ma,a as pa,w as va}from"../chunks/Dnx-UBFp.js";var ha=m('<menu class="unstyled svelte-remv2f"><a class="chip">tree</a> <a class="chip">table</a> <a class="chip">modules</a></menu>');function ga(u){var a=ha(),c=t(a);_(c,"href",`${T??""}/tree`);var l=r(c,2);_(l,"href",`${T??""}/table`);var d=r(l,2);_(d,"href",`${T??""}/modules`),e(a),i(u,a)}var fa=m("<p><!></p>"),_a=m('<p class="flex flex_wrap gap_xs"><!></p>'),ua=m("<img>"),ba=m('<div class="icon ml_xs"><!></div>'),wa=m('<div class="project_card svelte-1ams28w"><header class="title svelte-1ams28w"><!> <!></header> <div class="flex"><div><!> <!></div> <!></div></div>');function ya(u,a){E(a,!0);const c={zzz:ca,moss:da,fuz:ma,gro:pa,"webdevladder.net":va},l=O(()=>c[a.project.name]);var d=wa(),p=t(d),b=t(p);U(b,()=>a.project.title,!1,!1);var F=r(b,2);{var q=o=>{var s=Z();H(()=>ia(s,a.project.glyph)),i(o,s)};f(F,o=>{a.project.glyph&&o(q)})}e(p);var h=r(p,2),w=t(h),g=t(w);{var S=o=>{var s=fa(),v=t(s);U(v,()=>a.project.description,!1,!1),e(s),i(o,s)};f(g,o=>{a.project.description&&o(S)})}var A=r(g,2);{var I=o=>{var s=_a(),v=t(s);U(v,()=>a.project.subtitle,!1,!1),e(s),i(o,s)};f(A,o=>{a.project.subtitle&&o(I)})}e(w);var y=r(w,2);{var M=o=>{var s=ba();B(s,"min-width","var(--icon_size_xl)"),B(s,"min-height","var(--icon_size_xl)");var v=t(s);{var P=n=>{la(n,{get data(){return J(l)}})},G=n=>{var k=D(),x=L(k);{var C=z=>{var j=ua();H((R,Y)=>{_(j,"src",`${R??""}${Y??""}`),_(j,"alt",a.project.logo_alt??`icon for ${a.project.name}`),ta(j,1,sa(a.project.logo_classes),"svelte-1ams28w"),_(j,"style",a.project.logo_style)},[()=>aa(a.project.homepage,"/"),()=>ea(a.project.logo,"/")]),i(z,j)};f(x,z=>{a.project.homepage&&z(C)},!0)}i(n,k)};f(v,n=>{J(l)?n(P):n(G,!1)})}e(s),i(o,s)};f(y,o=>{a.project.logo&&o(M)})}e(h),e(d),i(u,d),N()}const ka=[{name:"blog",title:'<a href="/blog">blog</a>',subtitle:'<a href="https://www.ryanatkn.com/blog/feed.xml" class="chip">feed.xml</a> <a href="https://github.com/ryanatkn/ryanatkn.com" class="chip">source</a>'},{name:"github",title:'<a href="https://github.com/ryanatkn">github.com/ryanatkn</a>',description:"my free and open source software"},{description:'a YouTube channel and blog for realworld webdev with <a href="https://typescriptlang.org/">TypeScript</a> and <a href="https://svelte.dev/">Svelte</a>',homepage:"https://www.webdevladder.net/",motto:"up ↗",logo:"logo.svg",logo_alt:"a spider web between two rungs of a ladder",glyph:"🪜",name:"webdevladder.net",repo:"webdevladder.net",title:'<a href="https://www.webdevladder.net/">webdevladder.net</a>',subtitle:'<a class="chip" href="https://www.youtube.com/@webdevladder">channel</a> <a class="chip" href="https://www.youtube.com/@webdevladder_vods">vods</a> <a class="chip" href="https://github.com/ryanatkn/webdevladder.net">source</a>'},{name:"zzz",repo:"@ryanatkn/zzz",title:'<a href="https://www.zzzbot.dev/">Zzz</a>',description:"bot and web toolkit",subtitle:'<a class="chip" href="https://github.com/ryanatkn/zzz">source</a>'},{description:"CSS framework and design system",homepage:"https://moss.ryanatkn.com/",motto:"magical organic stylesheets",logo:"logo.svg",logo_alt:"a fuzzy tuft of green moss",glyph:"🌿",name:"moss",repo:"@ryanatkn/moss",title:'<a href="https://moss.ryanatkn.com/">Moss</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/moss">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/moss">npm</a>'},{description:'<a href="https://svelte.dev/">Svelte</a> UI library',homepage:"https://www.fuz.dev/",motto:"friendly user zystem",logo:"logo.svg",logo_alt:"a friendly brown spider facing you",glyph:"🧶",name:"fuz",repo:"@ryanatkn/fuz",title:'<a href="https://www.fuz.dev/">Fuz</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/fuz">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/fuz">npm</a>'},{description:'task runner and toolkit extending <a href="https://kit.svelte.dev/">SvelteKit</a>',homepage:"https://gro.ryanatkn.com/",motto:"generate, run, optimize",logo:"logo.svg",logo_alt:"a pixelated green oak acorn with a glint of sun",glyph:"🌰",name:"gro",repo:"@ryanatkn/gro",title:'<a href="https://github.com/ryanatkn/gro">Gro</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/gro">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/gro">npm</a>'},{description:"utility belt for JS",homepage:"https://belt.ryanatkn.com/",motto:"ancient not extinct",logo:"logo.svg",logo_alt:"a green sauropod wearing a brown utility belt",glyph:"🦕",name:"belt",repo:"@ryanatkn/belt",title:'<a href="https://github.com/ryanatkn/belt">Belt</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/belt">source</a> <a class="chip" href="https://www.npmjs.com/package/@ryanatkn/belt">npm</a>'},{description:"hobby project for fun and learning",homepage:"https://www.cosmicplayground.org/",motto:"tools and toys for expanding minds",logo:"favicon.png",name:"cosmicplayground",repo:"@ryanatkn/cosmicplayground",title:'<a href="https://www.cosmicplayground.org">cosmicplayground.org</a>',subtitle:'<a class="chip" href="https://github.com/ryanatkn/cosmicplayground">source</a>',logo_style:"border-radius: 50%"}];var xa=m('<div class="linkpath svelte-snmxkx"><span class="row"><!> <div class="pl_md">ryanatkn.com</div></span></div>'),za=m(`<section class="width_md p_md svelte-snmxkx"><section class="box"><div class="panel shadow_inset_xs svelte-snmxkx"><header class="svelte-snmxkx"><div class="radius_50 shadow_md"><!></div> <blockquote class="bg shadow_xs ml_md mt_md svelte-snmxkx">welcome to the homepage<br> of Ryan Atkinson, he's<br> an independent web developer<br> making free and open source<br> software for the social web</blockquote></header> <p class="panel bg relative shadow_xs mt_md svelte-snmxkx">Hi, I'm building free and open source software and communicating about it. My main skill is
				making frontend web apps and I also do some backend and devtools programming. I enjoy trying
				to make powerful tools that are easy to use, and I'm extra interested in UIs, API design,
				and social systems.</p></div></section> <section class="box row flex_wrap gap_xl2"><!></section> <section class="box"><div class="panel box shadow_inset_xs svelte-snmxkx"><!></div></section> <section class="panel shadow_inset_xs svelte-snmxkx"><div class="box"><h2 class="mb_xl2">ongoing projects</h2></div> <div class="cards svelte-snmxkx"></div> <div class="box py_xl"><div class="panel p_lg bg shadow_inset_xs svelte-snmxkx"><div class="mb_lg text_align_center">all repos</div> <!></div></div></section></section> <section class="box"><!></section>`,1);function Ka(u){var a=za();V(n=>{Q.title="ryanatkn.com"});var c=L(a),l=t(c),d=t(l),p=t(d),b=t(p),F=t(b);ra(F),e(b),K(2),e(p);var q=r(p,2);B(q,"max-width","450px"),e(d),e(l);var h=r(l,2),w=t(h);oa(w,{}),e(h);var g=r(h,2),S=t(g),A=t(S);na(A),e(S),e(g);var I=r(g,2),y=r(t(I),2);W(y,20,()=>ka,n=>n,(n,k)=>{ya(n,{get project(){return k}})}),e(y);var M=r(y,2),o=t(M),s=t(o);B(s,"font-size","var(--size_lg)");var v=r(s,2);ga(v),e(o),e(M),e(I),e(c);var P=r(c,2),G=t(P);X(G,{children:(n,k)=>{var x=xa(),C=t(x),z=t(C);$(z,{}),K(2),e(C),e(x),i(n,x)},$$slots:{default:!0}}),e(P),i(u,a)}export{Ka as component};
