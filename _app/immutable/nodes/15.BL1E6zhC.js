import{a as c,t as i,d as je,e as se}from"../chunks/_RlvbzGa.js";import{p as W,a as X,a0 as g,c as s,a1 as ye,r as t,t as q,z as e,a3 as k,$ as oe,a2 as we}from"../chunks/COZbaPGj.js";import{d as Pe}from"../chunks/Vj6yg7dV.js";import{f as ve,P as ze,a as De}from"../chunks/CrYozgPj.js";import{s as b}from"../chunks/ykglFUGU.js";import{p as Te,s as Ce,i as j,a as Fe}from"../chunks/DGwo49xS.js";import{e as A,i as He}from"../chunks/BF8qbg1G.js";import{a as f,c as ne}from"../chunks/r6pgjz4S.js";import{s as V}from"../chunks/PwPRnE0L.js";import{p as Ie}from"../chunks/i1i82M9Y.js";import{b as Me}from"../chunks/9wmINFcS.js";import{a as Re}from"../chunks/w3FXOXqJ.js";import{r as Ae}from"../chunks/CJ2Yt2To.js";var Be=i('<th class="svelte-1v5q9eq"> </th>'),Ee=i("<a> </a>"),Ge=i("<a><img> </a>"),Je=i("<a><!></a>"),Ke=i("<a> </a>  <!>",1),Le=i("<a> </a>"),Ne=i('<div class="row"><a><code> </code></a></div>'),Oe=i("<a> </a>"),Qe=i('<td class="svelte-1v5q9eq"><div> </div></td>'),Se=i('<a class="chip"> </a>'),Ue=i('<div class="row"><!></div>'),Ve=i('<tr class="svelte-1v5q9eq"><td class="svelte-1v5q9eq"><div class="row"><!></div></td><td class="svelte-1v5q9eq"><div class="row"><!></div></td><td class="svelte-1v5q9eq"><div class="row"><!></div></td><td class="svelte-1v5q9eq"><!></td><td class="svelte-1v5q9eq"><!></td><!><td class="svelte-1v5q9eq"><!></td></tr>'),We=i('<table><thead><tr class="svelte-1v5q9eq"><th class="svelte-1v5q9eq">tree</th><th class="svelte-1v5q9eq">homepage</th><th class="svelte-1v5q9eq">repo</th><th class="svelte-1v5q9eq">npm</th><th class="svelte-1v5q9eq">version</th><!><th class="svelte-1v5q9eq">pull requests</th></tr></thead><tbody></tbody></table>');function Xe(F,d){X(d,!0);const[w,P]=Ce(),B=()=>Fe(Ie,"$page",w),z=Te(d,"deps",19,()=>["@ryanatkn/fuz","@ryanatkn/gro"]),M=(n,o)=>{for(const l in n.package_json.dependencies)if(l===o)return n.package_json.dependencies[l];for(const l in n.package_json.devDependencies)if(l===o)return n.package_json.devDependencies[l];return null},E=k(()=>new Map(z().map(n=>{const o=d.repos.find(l=>l.package_json.name===n);return o!=null&&o.package_json?[n,o.package_json.version]:[n,null]}))),H=n=>n===null?"":n.replace(/^(\^|>=)\s*/,""),G=(n,o)=>{const l=n==null?void 0:n.find(I=>I.repo_url===o.repo_url);if(!(l!=null&&l.package_json))return null;const{pull_requests:u}=l;return u};var R=We(),J=s(R),Y=s(J),_e=g(s(Y),5);A(_e,16,z,n=>n,(n,o)=>{var l=Be(),u=s(l,!0);t(l),q(()=>b(u,o)),c(n,l)}),ye(),t(Y),t(J);var Z=g(J);A(Z,21,()=>d.repos,He,(n,o)=>{var l=Ve();const u=k(()=>{const{package_json:r,homepage_url:a}=e(o);return{package_json:r,homepage_url:a}});var I=s(l),$=s(I),le=s($);{var ce=r=>{var a=Ee(),v=s(a,!0);t(a),q(()=>{f(a,"href",`${Me??""}/tree/${e(o).repo_name??""}`),b(v,e(u).package_json.glyph??"🌳")}),c(r,a)};j(le,r=>{e(u).package_json&&r(ce)})}t($),t(I);var K=g(I),ee=s(K),ie=s(ee);{var de=r=>{var a=Ge();let v;var _=s(a),x=g(_);t(a),q(p=>{f(a,"href",e(u).homepage_url),v=ne(a,1,"row",null,v,{selected:e(u).homepage_url===B().url.href}),f(_,"src",e(o).logo_url),f(_,"alt",e(o).logo_alt),V(_,"width","16px"),V(_,"height","16px"),V(_,"margin-right","var(--space_xs)"),b(x,` ${p??""}`)},[()=>ve(e(u).homepage_url)]),c(r,a)};j(ie,r=>{e(u).homepage_url&&r(de)})}t(ee),t(K);var L=g(K),ae=s(L),ue=s(ae);{var pe=r=>{var a=Ke();const v=k(()=>e(o).check_runs),_=k(()=>{var m;return((m=e(v))==null?void 0:m.status)==="completed"}),x=k(()=>{var m;return((m=e(v))==null?void 0:m.conclusion)==="success"});var p=oe(a),y=s(p,!0);t(p);var T=g(p,2);{var D=m=>{var h=Je(),Q=s(h);{var S=C=>{var U=se("🟡");c(C,U)},be=C=>{var U=se("⚠️");c(C,U)};j(Q,C=>{e(_)?C(be,!1):C(S)})}t(h),q(()=>{f(h,"href",`${e(o).repo_url??""}/commits/main`),f(h,"title",e(_)?`CI failed: ${e(v).conclusion}`:`status: ${e(v).status}`)}),c(m,h)};j(T,m=>{e(v)&&(!e(_)||!e(x))&&m(D)})}q(()=>{f(p,"href",e(o).repo_url),b(y,e(o).repo_name)}),c(r,a)},me=r=>{var a=Le(),v=s(a,!0);t(a),q(_=>{f(a,"href",e(o).repo_url),b(v,_)},[()=>ve(e(o).repo_url)]),c(r,a)};j(ue,r=>{e(u).package_json?r(pe):r(me,!1)})}t(ae),t(L);var N=g(L),fe=s(N);{var ge=r=>{var a=Ne(),v=s(a),_=s(v),x=s(_,!0);t(_),t(v),t(a),q(()=>{f(v,"href",e(o).npm_url),b(x,e(o).name)}),c(r,a)};j(fe,r=>{e(o).npm_url&&r(ge)})}t(N);var O=g(N),he=s(O);{var qe=r=>{var a=Oe(),v=s(a,!0);t(a),q(_=>{f(a,"href",e(o).changelog_url),b(v,_)},[()=>H(e(u).package_json.version)]),c(r,a)};j(he,r=>{e(u).package_json.version!=="0.0.1"&&r(qe)})}t(O);var te=g(O);A(te,16,z,r=>r,(r,a)=>{var v=Qe();const _=k(()=>M(e(o),a)),x=k(()=>H(e(_))),p=k(()=>e(E).get(a));var y=s(v);let T;var D=s(y,!0);t(y),t(v),q(()=>{T=ne(y,1,"svelte-1v5q9eq",null,T,{latest:!!e(p)&&e(x)===e(p)}),b(D,e(x))}),c(r,v)});var re=g(te),xe=s(re);{var ke=r=>{var a=Ue();const v=k(()=>G(d.repos,e(o)));var _=s(a);{var x=p=>{var y=je(),T=oe(y);A(T,16,()=>e(v),D=>D,(D,m)=>{var h=Se(),Q=s(h);t(h),q(S=>{f(h,"href",S),f(h,"title",m.title),b(Q,`#${m.number??""}`)},[()=>Re(e(o).repo_url,m)]),c(D,h)}),c(p,y)};j(_,p=>{e(v)&&p(x)})}t(a),c(r,a)};j(xe,r=>{e(o).repo_url&&r(ke)})}t(re),t(l),c(n,l)}),t(Z),t(R),c(F,R),W(),P()}var Ye=i('<main class="box svelte-1v3x3ux"><div class="p_lg"><!></div> <section class="svelte-1v3x3ux"><div class="panel p_md"><!></div></section> <section class="box mb_xl7 svelte-1v3x3ux"><!></section></main>');function Ze(F,d){X(d,!0);var w=Ye();Pe(R=>{q(()=>we.title=`table ${d.repo.package_json.glyph??""} ${d.repo.package_json.name??""}`)});var P=s(w),B=s(P);ze(B,{get pkg(){return d.repo}}),t(P);var z=g(P,2),M=s(z),E=s(M);Xe(E,{get repos(){return d.repos}}),t(M),t(z);var H=g(z,2),G=s(H);De(G,{}),t(H),t(w),c(F,w),W()}function da(F,d){X(d,!0);const{repo:w,repos:P}=Ae.get();Ze(F,{repo:w,repos:P}),W()}export{da as component};
