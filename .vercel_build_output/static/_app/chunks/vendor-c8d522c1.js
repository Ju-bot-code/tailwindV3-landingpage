function h(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function z(t){return t()}function B(){return Object.create(null)}function m(t){t.forEach(z)}function I(t){return typeof t=="function"}function G(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function lt(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function J(t){return Object.keys(t).length===0}function ut(t,n,e,r){if(t){const c=T(t,n,e,r);return t[0](c)}}function T(t,n,e,r){return t[1]&&r?H(e.ctx.slice(),t[1](r(n))):e.ctx}function ft(t,n,e,r){if(t[2]&&r){const c=t[2](r(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const f=[],o=Math.max(n.dirty.length,c.length);for(let l=0;l<o;l+=1)f[l]=n.dirty[l]|c[l];return f}return n.dirty|c}return n.dirty}function st(t,n,e,r,c,f){if(c){const o=T(n,e,r,f);t.p(o,c)}}function at(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}let $=!1;function L(){$=!0}function P(){$=!1}function W(t,n,e,r){for(;t<n;){const c=t+(n-t>>1);e(c)<=r?t=c+1:n=c}return t}function K(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&i.push(a)}n=i}const e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let c=0;for(let i=0;i<n.length;i++){const u=n[i].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:W(1,c,x=>n[e[x]].claim_order,u))-1;r[i]=e[a]+1;const s=a+1;e[s]=i,c=Math.max(s,c)}const f=[],o=[];let l=n.length-1;for(let i=e[c]+1;i!=0;i=r[i-1]){for(f.push(n[i-1]);l>=i;l--)o.push(n[l]);l--}for(;l>=0;l--)o.push(n[l]);f.reverse(),o.sort((i,u)=>i.claim_order-u.claim_order);for(let i=0,u=0;i<o.length;i++){for(;u<f.length&&o[i].claim_order>=f[u].claim_order;)u++;const a=u<f.length?f[u]:null;t.insertBefore(o[i],a)}}function Q(t,n){if($){for(K(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function dt(t,n,e){$&&!e?Q(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function R(t){t.parentNode.removeChild(t)}function U(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function _t(){return j(" ")}function ht(){return j("")}function mt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function V(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function v(t,n,e,r,c=!1){X(t);const f=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(n(l)){const i=e(l);return i===void 0?t.splice(o,1):t[o]=i,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(n(l)){const i=e(l);return i===void 0?t.splice(o,1):t[o]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return r()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function Y(t,n,e,r){return v(t,c=>c.nodeName===n,c=>{const f=[];for(let o=0;o<c.attributes.length;o++){const l=c.attributes[o];e[l.name]||f.push(l.name)}f.forEach(o=>c.removeAttribute(o))},()=>r(n))}function pt(t,n,e){return Y(t,n,e,U)}function Z(t,n){return v(t,e=>e.nodeType===3,e=>{const r=""+n;if(e.data.startsWith(r)){if(e.data.length!==r.length)return e.splitText(r.length)}else e.data=r},()=>j(n),!0)}function yt(t){return Z(t," ")}function gt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let p;function y(t){p=t}function S(){if(!p)throw new Error("Function called outside component initialization");return p}function xt(t){S().$$.on_mount.push(t)}function bt(t){S().$$.after_update.push(t)}function $t(t,n){S().$$.context.set(t,n)}const g=[],O=[],w=[],D=[],tt=Promise.resolve();let A=!1;function nt(){A||(A=!0,tt.then(F))}function N(t){w.push(t)}const C=new Set;let E=0;function F(){const t=p;do{for(;E<g.length;){const n=g[E];E++,y(n),et(n.$$)}for(y(null),g.length=0,E=0;O.length;)O.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];C.has(e)||(C.add(e),e())}w.length=0}while(g.length);for(;D.length;)D.pop()();A=!1,C.clear(),y(t)}function et(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(N)}}const k=new Set;let d;function wt(){d={r:0,c:[],p:d}}function Et(){d.r||m(d.c),d=d.p}function it(t,n){t&&t.i&&(k.delete(t),t.i(n))}function kt(t,n,e,r){if(t&&t.o){if(k.has(t))return;k.add(t),d.c.push(()=>{k.delete(t),r&&(e&&t.d(1),r())}),t.o(n)}}function jt(t,n){const e={},r={},c={$$scope:1};let f=t.length;for(;f--;){const o=t[f],l=n[f];if(l){for(const i in o)i in l||(r[i]=1);for(const i in l)c[i]||(e[i]=l[i],c[i]=1);t[f]=l}else for(const i in o)c[i]=1}for(const o in r)o in e||(e[o]=void 0);return e}function St(t){return typeof t=="object"&&t!==null?t:{}}function At(t){t&&t.c()}function Nt(t,n){t&&t.l(n)}function rt(t,n,e,r){const{fragment:c,on_mount:f,on_destroy:o,after_update:l}=t.$$;c&&c.m(n,e),r||N(()=>{const i=f.map(z).filter(I);o?o.push(...i):m(i),t.$$.on_mount=[]}),l.forEach(N)}function ct(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(g.push(t),nt(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Ct(t,n,e,r,c,f,o,l=[-1]){const i=p;y(t);const u=t.$$={fragment:null,ctx:null,props:f,update:h,not_equal:c,bound:B(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(i?i.$$.context:[])),callbacks:B(),dirty:l,skip_bound:!1,root:n.target||i.$$.root};o&&o(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(s,x,...q)=>{const M=q.length?q[0]:x;return u.ctx&&c(u.ctx[s],u.ctx[s]=M)&&(!u.skip_bound&&u.bound[s]&&u.bound[s](M),a&&ot(t,s)),x}):[],u.update(),a=!0,m(u.before_update),u.fragment=r?r(u.ctx):!1,n.target){if(n.hydrate){L();const s=V(n.target);u.fragment&&u.fragment.l(s),s.forEach(R)}else u.fragment&&u.fragment.c();n.intro&&it(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),P(),F()}y(i)}class qt{$destroy(){ct(this,1),this.$destroy=h}$on(n,e){const r=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return r.push(e),()=>{const c=r.indexOf(e);c!==-1&&r.splice(c,1)}}$set(n){this.$$set&&!J(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const _=[];function Mt(t,n=h){let e;const r=new Set;function c(l){if(G(t,l)&&(t=l,e)){const i=!_.length;for(const u of r)u[1](),_.push(u,t);if(i){for(let u=0;u<_.length;u+=2)_[u][0](_[u+1]);_.length=0}}}function f(l){c(l(t))}function o(l,i=h){const u=[l,i];return r.add(u),r.size===1&&(e=n(c)||h),l(t),()=>{r.delete(u),r.size===0&&(e(),e=null)}}return{set:c,update:f,subscribe:o}}export{xt as A,H as B,Mt as C,ut as D,st as E,at as F,ft as G,Q as H,h as I,lt as J,qt as S,V as a,mt as b,pt as c,R as d,U as e,dt as f,Z as g,gt as h,Ct as i,At as j,_t as k,ht as l,Nt as m,yt as n,rt as o,jt as p,St as q,wt as r,G as s,j as t,kt as u,ct as v,Et as w,it as x,$t as y,bt as z};
