import{p as S,r as F}from"../chunks/BIKq3w38.js";import{r as H}from"../chunks/qy5G1Lru.js";import{a as m,t as b,d as I}from"../chunks/DrshB_96.js";import{p as T,a as z,t as h,a2 as A,a0 as $,z as v,c as a,r,a1 as M,a3 as k}from"../chunks/TY4j7H1c.js";import{d as B}from"../chunks/cIsru5lH.js";import{i as q,s as C,a as D}from"../chunks/CZFOncyl.js";import{p as E}from"../chunks/Bc58Lxxc.js";import{s as w}from"../chunks/C5Ar4Uh5.js";import{A as G}from"../chunks/3GMUMbCg.js";import{B as J}from"../chunks/DGfvC9U1.js";import{P as K,a as L}from"../chunks/BYLjFh0_.js";import{R as N}from"../chunks/CAO7ioxU.js";const Q=S(H,"https://www.ryanatkn.com/"),U=()=>Q.repos.map(o=>({slug:o.repo_name})),me=Object.freeze(Object.defineProperty({__proto__:null,entries:U},Symbol.toStringTag,{value:"Module"}));var V=b("<p>cannot find <code> </code></p>"),W=b('<div class="mb_lg"><!></div>'),X=b('<div class="repos_tree_nav svelte-12giiu4"><!></div>'),Y=b('<main class="box w_100"><div class="p_lg"><!></div> <section class="tree svelte-12giiu4"><!> <!></section> <section class="box mb_xl7 svelte-12giiu4"><!></section></main>');function Z(o,e){z(e,!0);const d=k(()=>e.repos.find(t=>t.repo_name===e.slug));var s=Y();B(t=>{h(()=>A.title=`${e.slug??""} - tree ${e.repo.package_json.glyph??""} ${e.repo.package_json.name??""}`)});var n=a(s),i=a(n);K(i,{get pkg(){return e.repo}}),r(n);var p=$(n,2),g=a(p);{var u=t=>{var c=W(),l=a(c);G(l,{status:"error",children:(x,y)=>{var f=V(),_=$(a(f)),R=a(_,!0);r(_),r(f),h(()=>w(R,e.slug)),m(x,f)},$$slots:{default:!0}}),r(c),m(t,c)};q(g,t=>{v(d)||t(u)})}var j=$(g,2);N(j,{get repos(){return e.repos},get selected_repo(){return v(d)},nav:c=>{var l=X(),x=a(l);J(x,{children:(y,f)=>{M();var _=I();h(()=>w(_,e.repo.package_json.glyph)),m(y,_)},$$slots:{default:!0}}),r(l),m(c,l)},$$slots:{nav:!0}}),r(p);var P=$(p,2),O=a(P);L(O,{}),r(P),r(s),m(o,s),T()}function ve(o,e){z(e,!0);const[d,s]=C(),n=()=>D(E,"$page",d),{repo:i,repos:p}=F.get(),g=k(()=>n().params),u=k(()=>v(g).slug);B(j=>{h(()=>A.title=`${v(u)??""} - tree ${i.package_json.glyph??""} ${i.package_json.name??""}`)}),Z(o,{repo:i,repos:p,get slug(){return v(u)}}),T(),s()}export{ve as component,me as universal};
