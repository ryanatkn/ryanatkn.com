import{i as S,az as H,aA as Y,aB as q,C as w,aC as G,aD as K}from"./DtwF0843.js";import{f as F,g as J,j as Q,k as X,n as Z,l as y,m}from"./62Ts3MCk.js";function B(r){var i,f,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(i=0;i<s;i++)r[i]&&(f=B(r[i]))&&(t&&(t+=" "),t+=f)}else for(f in r)r[f]&&(t&&(t+=" "),t+=f);return t}function x(){for(var r,i,f=0,t="",s=arguments.length;f<s;f++)(r=arguments[f])&&(i=B(r))&&(t&&(t+=" "),t+=i);return t}function rr(r){return typeof r=="object"?x(r):r??""}const k=[...` 	
\r\f \v\uFEFF`];function ir(r,i,f){var t=r==null?"":""+r;if(i&&(t=t?t+" "+i:i),f){for(var s in f)if(f[s])t=t?t+" "+s:s;else if(t.length)for(var u=s.length,o=0;(o=t.indexOf(s,o))>=0;){var e=o+u;(o===0||k.includes(t[o-1]))&&(e===t.length||k.includes(t[e]))?t=(o===0?"":t.substring(0,o))+t.substring(e+1):o=e}}return t===""?null:t}function P(r,i=!1){var f=i?" !important;":";",t="";for(var s in r){var u=r[s];u!=null&&u!==""&&(t+=" "+s+": "+u+f)}return t}function M(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function fr(r,i){if(i){var f="",t,s;if(Array.isArray(i)?(t=i[0],s=i[1]):t=i,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var u=!1,o=0,e=!1,A=[];t&&A.push(...Object.keys(t).map(M)),s&&A.push(...Object.keys(s).map(M));var c=0,b=-1;const _=r.length;for(var g=0;g<_;g++){var v=r[g];if(e?v==="/"&&r[g-1]==="*"&&(e=!1):u?u===v&&(u=!1):v==="/"&&r[g+1]==="*"?e=!0:v==='"'||v==="'"?u=v:v==="("?o++:v===")"&&o--,!e&&u===!1&&o===0){if(v===":"&&b===-1)b=g;else if(v===";"||g===_-1){if(b!==-1){var O=M(r.substring(c,b).trim());if(!A.includes(O)){v!==";"&&g++;var T=r.substring(c,g).trim();f+=" "+T+";"}}c=g+1,b=-1}}}}return t&&(f+=P(t)),s&&(f+=P(s,!0)),f=f.trim(),f===""?null:f}return r==null?null:String(r)}function tr(r,i,f,t,s,u){var o=r.__className;if(S||o!==f||o===void 0){var e=ir(f,t,u);(!S||e!==r.getAttribute("class"))&&(e==null?r.removeAttribute("class"):i?r.className=e:r.setAttribute("class",e)),r.__className=f}else if(u&&s!==u)for(var A in u){var c=!!u[A];(s==null||c!==!!s[A])&&r.classList.toggle(A,c)}return u}function $(r,i={},f,t){for(var s in f){var u=f[s];i[s]!==u&&(f[s]==null?r.style.removeProperty(s):r.style.setProperty(s,u,t))}}function sr(r,i,f,t){var s=r.__style;if(S||s!==i){var u=fr(i,t);(!S||u!==r.getAttribute("style"))&&(u==null?r.removeAttribute("style"):r.style.cssText=u),r.__style=i}else t&&(Array.isArray(t)?($(r,f==null?void 0:f[0],t[0]),$(r,f==null?void 0:f[1],t[1],"important")):$(r,f,t));return t}const L=Symbol("class"),C=Symbol("style"),R=Symbol("is custom element"),U=Symbol("is html");function or(r){if(S){var i=!1,f=()=>{if(!i){if(i=!0,r.hasAttribute("value")){var t=r.value;E(r,"value",null),r.value=t}if(r.hasAttribute("checked")){var s=r.checked;E(r,"checked",null),r.checked=s}}};r.__on_r=f,K(f),m()}}function ur(r,i){i?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function E(r,i,f,t){var s=V(r);S&&(s[i]=r.getAttribute(i),i==="src"||i==="srcset"||i==="href"&&r.nodeName==="LINK")||s[i]!==(s[i]=f)&&(i==="loading"&&(r[H]=f),f==null?r.removeAttribute(i):typeof f!="string"&&W(r).includes(i)?r[i]=f:r.setAttribute(i,f))}function cr(r,i,f,t,s=!1){var u=V(r),o=u[R],e=!u[U];let A=S&&o;A&&w(!1);var c=i||{},b=r.tagName==="OPTION";for(var g in i)g in f||(f[g]=null);f.class?f.class=rr(f.class):(t||f[L])&&(f.class=null),f[C]&&(f.style??(f.style=null));var v=W(r);for(const a in f){let l=f[a];if(b&&a==="value"&&l==null){r.value=r.__value="",c[a]=l;continue}if(a==="class"){var O=r.namespaceURI==="http://www.w3.org/1999/xhtml";tr(r,O,l,t,i==null?void 0:i[L],f[L]),c[a]=l,c[L]=f[L];continue}if(a==="style"){sr(r,l,i==null?void 0:i[C],f[C]),c[a]=l,c[C]=f[C];continue}var T=c[a];if(l!==T){c[a]=l;var _=a[0]+a[1];if(_!=="$$")if(_==="on"){const h={},N="$$"+a;let n=a.slice(2);var I=y(n);if(F(n)&&(n=n.slice(0,-7),h.capture=!0),!I&&T){if(l!=null)continue;r.removeEventListener(n,c[N],h),c[N]=null}if(l!=null)if(I)r[`__${n}`]=l,Q([n]);else{let z=function(D){c[a].call(this,D)};c[N]=J(n,r,z,h)}else I&&(r[`__${n}`]=void 0)}else if(a==="style")E(r,a,l);else if(a==="autofocus")X(r,!!l);else if(!o&&(a==="__value"||a==="value"&&l!=null))r.value=r.__value=l;else if(a==="selected"&&b)ur(r,l);else{var d=a;e||(d=Z(d));var j=d==="defaultValue"||d==="defaultChecked";if(l==null&&!o&&!j)if(u[a]=null,d==="value"||d==="checked"){let h=r;const N=i===void 0;if(d==="value"){let n=h.defaultValue;h.removeAttribute(d),h.defaultValue=n,h.value=h.__value=N?n:null}else{let n=h.defaultChecked;h.removeAttribute(d),h.defaultChecked=n,h.checked=N?n:!1}}else r.removeAttribute(a);else j||v.includes(d)&&(o||typeof l!="string")?r[d]=l:typeof l!="function"&&E(r,d,l)}}}return A&&w(!0),c}function V(r){return r.__attributes??(r.__attributes={[R]:r.nodeName.includes("-"),[U]:r.namespaceURI===Y})}var p=new Map;function W(r){var i=p.get(r.nodeName);if(i)return i;p.set(r.nodeName,i=[]);for(var f,t=r,s=Element.prototype;s!==t;){f=G(t);for(var u in f)f[u].set&&i.push(u);t=q(t)}return i}const er=(r,i)=>!i||!r.startsWith(i)?r:r.substring(i.length),nr=(r,i)=>!i||!r.endsWith(i)?r:r.substring(0,r.length-i.length),gr=(r,i)=>r.endsWith(i)?r:r+i;export{L as C,C as S,sr as a,E as b,tr as c,er as d,gr as e,nr as f,rr as g,or as r,cr as s};
