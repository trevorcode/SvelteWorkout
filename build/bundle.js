var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function l(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function f(){return a(" ")}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function m(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function p(t){return""===t?null:+t}function h(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $(t,n){t.value=null==n?"":n}let v;function g(t){v=t}const w=[],x=[],b=[],y=[],_=Promise.resolve();let k=!1;function C(t){b.push(t)}let z=!1;const E=new Set;function T(){if(!z){z=!0;do{for(let t=0;t<w.length;t+=1){const n=w[t];g(n),A(n.$$)}for(g(null),w.length=0;x.length;)x.pop()();for(let t=0;t<b.length;t+=1){const n=b[t];E.has(n)||(E.add(n),n())}b.length=0}while(w.length);for(;y.length;)y.pop()();k=!1,z=!1,E.clear()}}function A(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(C)}}const O=new Set;function N(t,n){t&&t.i&&(O.delete(t),t.i(n))}function j(t,n,e,o){if(t&&t.o){if(O.has(t))return;O.add(t),undefined.c.push((()=>{O.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function P(t){t&&t.c()}function W(t,e,u,c){const{fragment:i,on_mount:s,on_destroy:l,after_update:a}=t.$$;i&&i.m(e,u),c||C((()=>{const e=s.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]})),a.forEach(C)}function F(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function I(t,n){-1===t.$$.dirty[0]&&(w.push(t),k||(k=!0,_.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(n,r,u,c,i,l,a,f=[-1]){const d=v;g(n);const m=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:r.context||[]),callbacks:e(),dirty:f,skip_bound:!1,root:r.target||d.$$.root};a&&a(m.root);let p=!1;if(m.ctx=u?u(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return m.ctx&&i(m.ctx[t],m.ctx[t]=r)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](r),p&&I(n,t)),e})):[],m.update(),p=!0,o(m.before_update),m.fragment=!!c&&c(m.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);m.fragment&&m.fragment.l(t),t.forEach(s)}else m.fragment&&m.fragment.c();r.intro&&N(n.$$.fragment),W(n,r.target,r.anchor,r.customElement),T()}g(d)}class S{$destroy(){F(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(n){let e,r,u,v,g,w,x,b,y,_,k,C,z,E,T,A=n[1].toFixed(2)+"";return{c(){e=l("div"),r=l("label"),r.textContent="Workout",u=f(),v=l("input"),g=f(),w=l("div"),x=l("label"),x.textContent="Cooldown",b=f(),y=l("input"),_=f(),k=l("div"),C=l("span"),z=a(A),m(r,"for","workoutTime"),m(r,"class","svelte-1fwoehm"),m(v,"id","workoutTime"),m(v,"type","number"),m(v,"class","svelte-1fwoehm"),m(x,"for","cooldownTime"),m(x,"class","svelte-1fwoehm"),m(y,"id","cooldownTime"),m(y,"type","number"),m(y,"class","svelte-1fwoehm"),m(C,"class","timer svelte-1fwoehm"),m(k,"class","timerContainer svelte-1fwoehm")},m(t,o){i(t,e,o),c(e,r),c(e,u),c(e,v),$(v,n[0]),i(t,g,o),i(t,w,o),c(w,x),c(w,b),c(w,y),$(y,n[2]),i(t,_,o),i(t,k,o),c(k,C),c(C,z),E||(T=[d(v,"input",n[4]),d(y,"input",n[5]),d(C,"click",n[3])],E=!0)},p(t,[n]){1&n&&p(v.value)!==t[0]&&$(v,t[0]),4&n&&p(y.value)!==t[2]&&$(y,t[2]),2&n&&A!==(A=t[1].toFixed(2)+"")&&h(z,A)},i:t,o:t,d(t){t&&s(e),t&&s(g),t&&s(w),t&&s(_),t&&s(k),E=!1,o(T)}}}function B(t,n,e){const o="waiting",r="workout",u="cooldown";var c=40,i=40,s=20,l=o,a=null;var f=new Audio("/sounds/start.wav"),d=new Audio("/sounds/stop.wav");return[c,i,s,function(){if(e(1,i=c),l!=o)return clearInterval(a),a=null,void(l=o);f.play(),l=l.WORKOUT,a=setInterval((function(){e(1,i-=.05),i<=0&&(l==o||l==u?(e(1,i=c),l=r,f.play()):(e(1,i=s),l=u,d.play()))}),50)},function(){c=p(this.value),e(0,c)},function(){s=p(this.value),e(2,s)}]}class K extends S{constructor(t){super(),L(this,t,B,q,u,{})}}function M(n){let e,r,u,p,$,v,g,w,x,b,y,_,k;return{c(){e=l("h1"),r=a("Workout #"),u=a(n[0]),p=f(),$=l("div"),v=a(n[1]),g=f(),w=l("div"),x=l("button"),x.textContent="Previous",b=f(),y=l("button"),y.textContent="Next",m(e,"class","svelte-zzam8v"),m($,"class","workoutText svelte-zzam8v"),m(w,"class","nextPrevContainer svelte-zzam8v")},m(t,o){i(t,e,o),c(e,r),c(e,u),i(t,p,o),i(t,$,o),c($,v),i(t,g,o),i(t,w,o),c(w,x),c(w,b),c(w,y),_||(k=[d(x,"click",n[3]),d(y,"click",n[4])],_=!0)},p(t,[n]){1&n&&h(u,t[0]),2&n&&h(v,t[1])},i:t,o:t,d(t){t&&s(e),t&&s(p),t&&s($),t&&s(g),t&&s(w),_=!1,o(k)}}}function R(t,n,e){let o=1;var r="";function u(){fetch(`workouts/${o}.txt`).then((t=>t.text())).then((t=>{e(1,r=t)}))}u();return[o,r,u,()=>{e(0,o--,o),u()},()=>{e(0,o++,o),u()}]}class U extends S{constructor(t){super(),L(this,t,R,M,u,{})}}function D(n){let e,o,r,u,a;return o=new K({}),u=new U({}),{c(){e=l("main"),P(o.$$.fragment),r=f(),P(u.$$.fragment),m(e,"class","svelte-zglz86")},m(t,n){i(t,e,n),W(o,e,null),c(e,r),W(u,e,null),a=!0},p:t,i(t){a||(N(o.$$.fragment,t),N(u.$$.fragment,t),a=!0)},o(t){j(o.$$.fragment,t),j(u.$$.fragment,t),a=!1},d(t){t&&s(e),F(o),F(u)}}}return new class extends S{constructor(t){super(),L(this,t,null,D,u,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
