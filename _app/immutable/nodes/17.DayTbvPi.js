import{p as z,r as F}from"../chunks/repo.BrAMKi2z.js";import{r as H}from"../chunks/repos.Brd9Gbmo.js";import{a as m,t as h,d as I}from"../chunks/disclose-version.DfSZ8NIK.js";import{p as w,a as T,t as f,a4 as A,a2 as u,a5 as v,c as a,r,a3 as M,a6 as $}from"../chunks/runtime.BOwt3qjp.js";import{d as B}from"../chunks/svelte-head.DpQopEI3.js";import{i as q,s as C,a as D}from"../chunks/props.ExMLJz1s.js";import{p as E}from"../chunks/stores.BSNQ2ynr.js";import{s as y}from"../chunks/render.BQDFJXFu.js";import{A as G}from"../chunks/Alert.Bqoo9KhW.js";import{B as J}from"../chunks/Breadcrumb.DYjizRSm.js";import{P as K,a as L}from"../chunks/Page_Header.D-g3DWiu.js";import{R as N}from"../chunks/Repos_Tree.BPEk-94t.js";const Q=z(H,"https://www.ryanatkn.com/"),U=()=>Q.repos.map(s=>({slug:s.repo_name})),me=Object.freeze(Object.defineProperty({__proto__:null,entries:U},Symbol.toStringTag,{value:"Module"}));var V=h("<p>cannot find <code> </code></p>"),W=h('<div class="mb_lg"><!></div>'),X=h('<div class="repos_tree_nav svelte-12giiu4"><!></div>'),Y=h('<main class="box w_100"><div class="p_lg"><!></div> <section class="tree svelte-12giiu4"><!> <!></section> <section class="box mb_xl7 svelte-12giiu4"><!></section></main>');function Z(s,e){T(e,!0);const d=$(()=>e.repos.find(o=>o.repo_name===e.slug));var n=Y();B(o=>{f(()=>A.title=`${e.slug??""} - tree ${e.repo.package_json.glyph??""} ${e.repo.package_json.name??""}`)});var t=a(n),b=a(t);K(b,{get pkg(){return e.repo}}),r(t);var i=u(t,2),p=a(i);{var k=o=>{var c=W(),l=a(c);G(l,{status:"error",children:(x,P)=>{var g=V(),_=u(a(g)),S=a(_,!0);r(_),r(g),f(()=>y(S,e.slug)),m(x,g)},$$slots:{default:!0}}),r(c),m(o,c)};q(p,o=>{v(d)||o(k)})}var O=u(p,2);N(O,{get repos(){return e.repos},get selected_repo(){return v(d)},nav:c=>{var l=X(),x=a(l);J(x,{children:(P,g)=>{M();var _=I();f(()=>y(_,e.repo.package_json.glyph)),m(P,_)},$$slots:{default:!0}}),r(l),m(c,l)},$$slots:{nav:!0}}),r(i);var j=u(i,2),R=a(j);L(R,{}),r(j),r(n),m(s,n),w()}function ve(s,e){T(e,!0);const d=C(),n=()=>D(E,"$page",d),{repo:t,repos:b}=F.get(),i=$(()=>n().params),p=$(()=>v(i).slug);B(k=>{f(()=>A.title=`${v(p)??""} - tree ${t.package_json.glyph??""} ${t.package_json.name??""}`)}),Z(s,{repo:t,repos:b,get slug(){return v(p)}}),w()}export{ve as component,me as universal};