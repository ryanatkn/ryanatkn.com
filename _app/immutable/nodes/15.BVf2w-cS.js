import{a as l,t as d,d as ae,e as ie}from"../chunks/disclose-version.CgtHxujX.js";import{p as Q,s as g,c as r,a as S,r as t,t as c,a1 as ue,a3 as e,f as te,a4 as x,a2 as me}from"../chunks/runtime.DnzaEnqM.js";import{s as pe,a as ge,e as he}from"../chunks/store.B5uvAfq3.js";import{f as re,P as fe,a as qe}from"../chunks/Page_Header.BNLYQGl0.js";import{s as k}from"../chunks/render.C1MjUtjK.js";import{p as xe,i as b}from"../chunks/props.WzuS_LKu.js";import{e as A,i as ke}from"../chunks/each.BAtdHCWa.js";import{a as p,t as se}from"../chunks/string.b6PdxMny.js";import{s as O}from"../chunks/style.PwPRnE0L.js";import{p as be}from"../chunks/stores.Drl7lR1V.js";import{b as je}from"../chunks/entry.CT54LNzu.js";import{a as ye}from"../chunks/github_helpers.gikVqgUp.js";import{r as we}from"../chunks/repo.Dv_S18ZA.js";var Pe=d('<th class="svelte-1v5q9eq"> </th>'),De=d("<a> </a>"),Te=d('<a class="row"><img> </a>'),ze=d("<a><!></a>"),Ce=d("<a> </a>  <!>",1),Fe=d("<a> </a>"),He=d('<div class="row"><a><code> </code></a></div>'),Ie=d("<a> </a>"),Me=d('<td class="svelte-1v5q9eq"><div class="svelte-1v5q9eq"> </div></td>'),Re=d('<a class="chip"> </a>'),$e=d('<div class="row"><!></div>'),Ae=d('<tr class="svelte-1v5q9eq"><td class="svelte-1v5q9eq"><div class="row"><!></div></td><td class="svelte-1v5q9eq"><div class="row"><!></div></td><td class="svelte-1v5q9eq"><div class="row"><!></div></td><td class="svelte-1v5q9eq"><!></td><td class="svelte-1v5q9eq"><!></td><!><td class="svelte-1v5q9eq"><!></td></tr>'),Be=d('<table><thead><tr class="svelte-1v5q9eq"><th class="svelte-1v5q9eq">tree</th><th class="svelte-1v5q9eq">homepage</th><th class="svelte-1v5q9eq">repo</th><th class="svelte-1v5q9eq">npm</th><th class="svelte-1v5q9eq">version</th><!><th class="svelte-1v5q9eq">pull requests</th></tr></thead><tbody></tbody></table>');function Ee(T,i){S(i,!0);const y=pe(),w=()=>ge(be,"$page",y),z=xe(i,"deps",19,()=>["@ryanatkn/fuz","@ryanatkn/gro"]),C=(v,s)=>{for(const n in v.package_json.dependencies)if(n===s)return v.package_json.dependencies[n];for(const n in v.package_json.devDependencies)if(n===s)return v.package_json.devDependencies[n];return null},I=x(()=>new Map(z().map(v=>{const s=i.repos.find(n=>n.package_json.name===v);return s!=null&&s.package_json?[v,s.package_json.version]:[v,null]}))),M=v=>v===null?"":v.replace(/^(\^|>=)\s*/,""),R=(v,s)=>{const n=v==null?void 0:v.find(H=>H.repo_url===s.repo_url);if(!(n!=null&&n.package_json))return null;const{pull_requests:u}=n;return u};var F=Be(),$=r(F),U=r($),oe=g(r(U),5);A(oe,16,z,v=>v,(v,s)=>{var n=Pe(),u=r(n,!0);t(n),c(()=>k(u,s)),l(v,n)}),ue(),t(U),t($);var V=g($);A(V,21,()=>i.repos,ke,(v,s)=>{var n=Ae();const u=x(()=>{const{package_json:_,homepage_url:a}=e(s);return{package_json:_,homepage_url:a}});var H=r(n),W=r(H),ve=r(W);b(ve,()=>e(u).package_json,_=>{var a=De(),o=r(a,!0);t(a),c(()=>{p(a,"href",`${je??""}/tree/${e(s).repo_name??""}`),k(o,e(u).package_json.glyph??"🌳")}),l(_,a)}),t(W),t(H);var B=g(H),X=r(B),ne=r(X);b(ne,()=>e(u).homepage_url,_=>{var a=Te(),o=r(a),m=g(o);c(()=>k(m,` ${re(e(u).homepage_url)??""}`)),t(a),c(()=>{p(a,"href",e(u).homepage_url),se(a,"selected",e(u).homepage_url===w().url.href),p(o,"src",e(s).logo_url),p(o,"alt",e(s).logo_alt),O(o,"width","16px"),O(o,"height","16px"),O(o,"margin-right","var(--space_xs)")}),l(_,a)}),t(X),t(B);var E=g(B),Y=r(E),_e=r(Y);b(_e,()=>e(u).package_json,_=>{var a=Ce();const o=x(()=>e(s).check_runs),m=x(()=>{var h;return((h=e(o))==null?void 0:h.status)==="completed"}),j=x(()=>{var h;return((h=e(o))==null?void 0:h.conclusion)==="success"});var q=te(a),P=r(q,!0);t(q);var D=g(q,2);b(D,()=>e(o)&&(!e(m)||!e(j)),h=>{var f=ze(),K=r(f);b(K,()=>!e(m),L=>{var N=ae("🟡");l(L,N)},L=>{var N=ae("⚠️");l(L,N)}),t(f),c(()=>{p(f,"href",`${e(s).repo_url??""}/commits/main`),p(f,"title",e(m)?`CI failed: ${e(o).conclusion}`:`status: ${e(o).status}`)}),l(h,f)}),c(()=>{p(q,"href",e(s).repo_url),k(P,e(s).repo_name)}),l(_,a)},_=>{var a=Fe(),o=r(a,!0);c(()=>k(o,re(e(s).repo_url))),t(a),c(()=>p(a,"href",e(s).repo_url)),l(_,a)}),t(Y),t(E);var G=g(E),le=r(G);b(le,()=>e(s).npm_url,_=>{var a=He(),o=r(a),m=r(o),j=r(m,!0);t(m),t(o),t(a),c(()=>{p(o,"href",e(s).npm_url),k(j,e(s).name)}),l(_,a)}),t(G);var J=g(G),ce=r(J);b(ce,()=>e(u).package_json.version!=="0.0.1",_=>{var a=Ie(),o=r(a,!0);c(()=>k(o,M(e(u).package_json.version))),t(a),c(()=>p(a,"href",e(s).changelog_url)),l(_,a)}),t(J);var Z=g(J);A(Z,16,z,_=>_,(_,a)=>{var o=Me();const m=x(()=>C(e(s),a)),j=x(()=>M(e(m))),q=x(()=>e(I).get(a));var P=r(o),D=r(P,!0);t(P),t(o),c(()=>{se(P,"latest",!!e(q)&&e(j)===e(q)),k(D,e(j))}),l(_,o)});var ee=g(Z),de=r(ee);b(de,()=>e(s).repo_url,_=>{var a=$e();const o=x(()=>R(i.repos,e(s)));var m=r(a);b(m,()=>e(o),j=>{var q=ie(),P=te(q);A(P,16,()=>e(o),D=>D,(D,h)=>{var f=Re();c(()=>p(f,"href",ye(e(s).repo_url,h)));var K=r(f);t(f),c(()=>{p(f,"title",h.title),k(K,`#${h.number??""}`)}),l(D,f)}),l(j,q)}),t(a),l(_,a)}),t(ee),t(n),l(v,n)}),t(V),t(F),l(T,F),Q()}var Ge=d('<main class="box svelte-1v3x3ux"><div class="p_lg"><!></div> <section class="svelte-1v3x3ux"><div class="panel p_md"><!></div></section> <section class="box mb_xl7 svelte-1v3x3ux"><!></section></main>');function Je(T,i){S(i,!0);var y=Ge();he($=>{c(()=>me.title=`table ${i.repo.package_json.glyph??""} ${i.repo.package_json.name??""}`)});var w=r(y),z=r(w);fe(z,{get pkg(){return i.repo}}),t(w);var C=g(w,2),I=r(C),M=r(I);Ee(M,{get repos(){return i.repos}}),t(I),t(C);var R=g(C,2),F=r(R);qe(F,{}),t(R),t(y),l(T,y),Q()}function aa(T,i){S(i,!0);const{repo:y,repos:w}=we.get();Je(T,{repo:y,repos:w}),Q()}export{aa as component};