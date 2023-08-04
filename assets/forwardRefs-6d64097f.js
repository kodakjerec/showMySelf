import{aw as F,R as Be,ax as he,d as c,ay as z,p as y,ao as L,K as b,I as se,m as A,j as D,k as M,g as E,r as oe,l as W,az as at,t as V,u as $,aA as ot,b as v,h as re,i as Ie,a3 as X,S as Pe,F as rt,ar as ye,q as Ve,C as le,D as lt,y as Ee,x as ut,B as ue,w as ce,_ as ct,A as Le,Z as dt,aB as ft,aC as vt,aq as mt,aD as gt,s as ht,aE as yt,U as bt,a0 as Te,aF as pt,aG as be,O as Ct,n as $e,Q as St,aH as wt,aI as pe,e as xt,f as _t,aJ as kt,a as Bt}from"./index-f30b3fc0.js";const Re=["top","bottom"],It=["start","end","left","right"];function Pt(e,t){let[s,n]=e.split(" ");return n||(n=F(Re,s)?"start":F(It,s)?"top":"center"),{side:Ce(s,t),align:Ce(n,t)}}function Ce(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function gn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function hn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function yn(e){return{side:e.align,align:e.side}}function bn(e){return F(Re,e.side)?"y":"x"}class Q{constructor(t){let{x:s,y:n,width:i,height:a}=t;this.x=s,this.y=n,this.width=i,this.height=a}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function pn(e,t){return{x:{before:Math.max(0,t.left-e.left),after:Math.max(0,e.right-t.right)},y:{before:Math.max(0,t.top-e.top),after:Math.max(0,e.bottom-t.bottom)}}}function Cn(e){const t=e.getBoundingClientRect(),s=getComputedStyle(e),n=s.transform;if(n){let i,a,o,r,l;if(n.startsWith("matrix3d("))i=n.slice(9,-1).split(/, /),a=+i[0],o=+i[5],r=+i[12],l=+i[13];else if(n.startsWith("matrix("))i=n.slice(7,-1).split(/, /),a=+i[0],o=+i[3],r=+i[4],l=+i[5];else return new Q(t);const d=s.transformOrigin,f=t.x-r-(1-a)*parseFloat(d),m=t.y-l-(1-o)*parseFloat(d.slice(d.indexOf(" ")+1)),u=a?t.width/a:e.offsetWidth+1,g=o?t.height/o:e.offsetHeight+1;return new Q({x:f,y:m,width:u,height:g})}else return new Q(t)}function Sn(e,t,s){if(typeof e.animate>"u")return{finished:Promise.resolve()};let n;try{n=e.animate(t,s)}catch{return{finished:Promise.resolve()}}return typeof n.finished>"u"&&(n.finished=new Promise(i=>{n.onfinish=()=>{i(n)}})),n}const wn="cubic-bezier(0.4, 0, 0.2, 1)";function de(e){return Be(()=>{const t=[],s={};return e.value.background&&(he(e.value.background)?s.backgroundColor=e.value.background:t.push(`bg-${e.value.background}`)),e.value.text&&(he(e.value.text)?(s.color=e.value.text,s.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:s}})}function j(e,t){const s=c(()=>({text:z(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=de(s);return{textColorClasses:n,textColorStyles:i}}function Se(e,t){const s=c(()=>({background:z(e)?e.value:t?e[t]:null})),{colorClasses:n,colorStyles:i}=de(s);return{backgroundColorClasses:n,backgroundColorStyles:i}}const Vt=["x-small","small","default","large","x-large"],fe=y({size:{type:[String,Number],default:"default"}},"size");function ve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return Be(()=>{let s,n;return F(Vt,e.size)?s=`${t}--size-${e.size}`:e.size&&(n={width:b(e.size),height:b(e.size)}),{sizeClasses:s,sizeStyles:n}})}const Et=y({color:String,start:Boolean,end:Boolean,icon:se,...A(),...fe(),...D({tag:"i"}),...M()},"VIcon"),K=E()({name:"VIcon",props:Et(),setup(e,t){let{attrs:s,slots:n}=t;const i=oe(),{themeClasses:a}=W(e),{iconData:o}=at(c(()=>i.value||e.icon)),{sizeClasses:r}=ve(e),{textColorClasses:l,textColorStyles:d}=j(V(e,"color"));return $(()=>{const f=n.default?.();return f&&(i.value=f.filter(m=>m.type===ot&&m.children&&typeof m.children=="string")[0]?.children),v(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",a.value,r.value,l.value,{"v-icon--clickable":!!s.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[r.value?void 0:{fontSize:b(e.size),height:b(e.size),width:b(e.size)},d.value,e.style],role:s.onClick?"button":void 0,"aria-hidden":!s.onClick},{default:()=>[f]})}),{}}}),Lt=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Tt(e){return{dimensionStyles:c(()=>({height:b(e.height),maxHeight:b(e.maxHeight),maxWidth:b(e.maxWidth),minHeight:b(e.minHeight),minWidth:b(e.minWidth),width:b(e.width)}))}}const xn=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),_n=(e,t)=>{let{slots:s}=t;const{transition:n,disabled:i,...a}=e,{component:o=X,...r}=typeof n=="object"?n:{};return re(o,Ie(typeof n=="string"?{name:i?"":n}:r,a,{disabled:i}),s)};function $t(e,t){if(!Pe)return;const s=t.modifiers||{},n=t.value,{handler:i,options:a}=typeof n=="object"?n:{handler:n,options:{}},o=new IntersectionObserver(function(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],l=arguments.length>1?arguments[1]:void 0;const d=e._observe?.[t.instance.$.uid];if(!d)return;const f=r.some(m=>m.isIntersecting);i&&(!s.quiet||d.init)&&(!s.once||f||d.init)&&i(f,r,l),f&&s.once?Ne(e,t):d.init=!0},a);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:o},o.observe(e)}function Ne(e,t){const s=e._observe?.[t.instance.$.uid];s&&(s.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Rt={mounted:$t,unmounted:Ne},kn=Rt,Nt=[null,"default","comfortable","compact"],Oe=y({density:{type:String,default:"default",validator:e=>Nt.includes(e)}},"density");function ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{densityClasses:c(()=>`${t}--density-${e.density}`)}}const me=y({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function ge(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{roundedClasses:c(()=>{const n=z(e)?e.value:e.rounded,i=[];if(n===!0||n==="")i.push(`${t}--rounded`);else if(typeof n=="string"||n===0)for(const a of String(n).split(" "))i.push(`rounded-${a}`);return i})}}const Ot=["elevated","flat","tonal","outlined","text","plain"];function zt(e,t){return v(rt,null,[e&&v("span",{key:"overlay",class:`${t}__overlay`},null),v("span",{key:"underlay",class:`${t}__underlay`},null)])}const Ae=y({color:String,variant:{type:String,default:"elevated",validator:e=>Ot.includes(e)}},"variant");function At(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();const s=c(()=>{const{variant:a}=ye(e);return`${t}--variant-${a}`}),{colorClasses:n,colorStyles:i}=de(c(()=>{const{variant:a,color:o}=ye(e);return{[["elevated","flat"].includes(a)?"background":"text"]:o}}));return{colorClasses:n,colorStyles:i,variantClasses:s}}const De=y({border:[Boolean,Number,String]},"border");function Me(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{borderClasses:c(()=>{const n=z(e)?e.value:e.border,i=[];if(n===!0||n==="")i.push(`${t}--border`);else if(typeof n=="string"||n===0)for(const a of String(n).split(" "))i.push(`border-${a}`);return i})}}const We=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function Ge(e){return{elevationClasses:c(()=>{const s=z(e)?e.value:e.elevation,n=[];return s==null||n.push(`elevation-${s}`),n})}}const He=y({divided:Boolean,...De(),...A(),...Oe(),...We(),...me(),...D(),...M(),...Ae()},"VBtnGroup"),we=E()({name:"VBtnGroup",props:He(),setup(e,t){let{slots:s}=t;const{themeClasses:n}=W(e),{densityClasses:i}=ze(e),{borderClasses:a}=Me(e),{elevationClasses:o}=Ge(e),{roundedClasses:r}=ge(e);Ve({VBtn:{height:"auto",color:V(e,"color"),density:V(e,"density"),flat:!0,variant:V(e,"variant")}}),$(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},n.value,a.value,i.value,o.value,r.value,e.class],style:e.style},s))}}),Dt=y({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Mt=y({value:null,disabled:Boolean,selectedClass:String},"group-item");function Wt(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const n=le("useGroupItem");if(!n)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=lt();Ee(Symbol.for(`${t.description}:id`),i);const a=ut(t,null);if(!a){if(!s)return a;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${t.description}`)}const o=V(e,"value"),r=c(()=>a.disabled.value||e.disabled);a.register({id:i,value:o,disabled:r},n),ue(()=>{a.unregister(i)});const l=c(()=>a.isSelected(i)),d=c(()=>l.value&&[a.selectedClass.value,e.selectedClass]);return ce(l,f=>{n.emit("group:selected",{value:f})}),{id:i,isSelected:l,toggle:()=>a.select(i,!l.value),select:f=>a.select(i,f),selectedClass:d,value:o,disabled:r,group:a}}function Gt(e,t){let s=!1;const n=ct([]),i=Le(e,"modelValue",[],u=>u==null?[]:Fe(n,mt(u)),u=>{const g=Ft(n,u);return e.multiple?g:g[0]}),a=le("useGroup");function o(u,g){const S=u,h=Symbol.for(`${t.description}:id`),C=vt(h,a?.vnode).indexOf(g);C>-1?n.splice(C,0,S):n.push(S)}function r(u){if(s)return;l();const g=n.findIndex(S=>S.id===u);n.splice(g,1)}function l(){const u=n.find(g=>!g.disabled);u&&e.mandatory==="force"&&!i.value.length&&(i.value=[u.id])}dt(()=>{l()}),ue(()=>{s=!0});function d(u,g){const S=n.find(h=>h.id===u);if(!(g&&S?.disabled))if(e.multiple){const h=i.value.slice(),w=h.findIndex(p=>p===u),C=~w;if(g=g??!C,C&&e.mandatory&&h.length<=1||!C&&e.max!=null&&h.length+1>e.max)return;w<0&&g?h.push(u):w>=0&&!g&&h.splice(w,1),i.value=h}else{const h=i.value.includes(u);if(e.mandatory&&h)return;i.value=g??!h?[u]:[]}}function f(u){if(e.multiple,i.value.length){const g=i.value[0],S=n.findIndex(C=>C.id===g);let h=(S+u)%n.length,w=n[h];for(;w.disabled&&h!==S;)h=(h+u)%n.length,w=n[h];if(w.disabled)return;i.value=[n[h].id]}else{const g=n.find(S=>!S.disabled);g&&(i.value=[g.id])}}const m={register:o,unregister:r,selected:i,select:d,disabled:V(e,"disabled"),prev:()=>f(n.length-1),next:()=>f(1),isSelected:u=>i.value.includes(u),selectedClass:c(()=>e.selectedClass),items:c(()=>n),getItemIndex:u=>Ht(n,u)};return Ee(t,m),m}function Ht(e,t){const s=Fe(e,[t]);return s.length?e.findIndex(n=>n.id===s[0]):-1}function Fe(e,t){const s=[];return t.forEach(n=>{const i=e.find(o=>ft(n,o.value)),a=e[n];i?.value!=null?s.push(i.id):a!=null&&s.push(a.id)}),s}function Ft(e,t){const s=[];return t.forEach(n=>{const i=e.findIndex(a=>a.id===n);if(~i){const a=e[i];s.push(a.value!=null?a.value:i)}}),s}const je=Symbol.for("vuetify:v-btn-toggle"),jt=y({...He(),...Dt()},"VBtnToggle");E()({name:"VBtnToggle",props:jt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const{isSelected:n,next:i,prev:a,select:o,selected:r}=Gt(e,je);return $(()=>{const[l]=we.filterProps(e);return v(we,Ie({class:["v-btn-toggle",e.class]},l,{style:e.style}),{default:()=>[s.default?.({isSelected:n,next:i,prev:a,select:o,selected:r})]})}),{next:i,prev:a,select:o}}});const qt=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Z=E(!1)({name:"VDefaultsProvider",props:qt(),setup(e,t){let{slots:s}=t;const{defaults:n,disabled:i,reset:a,root:o,scoped:r}=gt(e);return Ve(n,{reset:a,root:o,scoped:r,disabled:i}),()=>s.default?.()}});function qe(e,t){const s=oe(),n=ht(!1);if(Pe){const i=new IntersectionObserver(a=>{e?.(a,i),n.value=!!a.find(o=>o.isIntersecting)},t);ue(()=>{i.disconnect()}),ce(s,(a,o)=>{o&&(i.unobserve(o),n.value=!1),a&&i.observe(a)},{flush:"post"})}return{intersectionRef:s,isIntersecting:n}}const Xt=y({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...A(),...fe(),...D({tag:"div"}),...M()},"VProgressCircular"),Ut=E()({name:"VProgressCircular",props:Xt(),setup(e,t){let{slots:s}=t;const n=20,i=2*Math.PI*n,a=oe(),{themeClasses:o}=W(e),{sizeClasses:r,sizeStyles:l}=ve(e),{textColorClasses:d,textColorStyles:f}=j(V(e,"color")),{textColorClasses:m,textColorStyles:u}=j(V(e,"bgColor")),{intersectionRef:g,isIntersecting:S}=qe(),{resizeRef:h,contentRect:w}=yt(),C=c(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),p=c(()=>Number(e.width)),x=c(()=>l.value?Number(e.size):w.value?w.value.width:Math.max(p.value,32)),P=c(()=>n/(1-p.value/x.value)*2),B=c(()=>p.value/x.value*P.value),R=c(()=>b((100-C.value)/100*i));return bt(()=>{g.value=a.value,h.value=a.value}),$(()=>v(e.tag,{ref:a,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":S.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},o.value,r.value,d.value,e.class],style:[l.value,f.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:C.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${P.value} ${P.value}`},[v("circle",{class:["v-progress-circular__underlay",m.value],style:u.value,fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":B.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:n,"stroke-width":B.value,"stroke-dasharray":i,"stroke-dashoffset":R.value},null)]),s.default&&v("div",{class:"v-progress-circular__content"},[s.default({value:C.value})])]})),{}}});const xe={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Xe=y({location:String},"location");function Ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=arguments.length>2?arguments[2]:void 0;const{isRtl:n}=Te();return{locationStyles:c(()=>{if(!e.location)return{};const{side:a,align:o}=Pt(e.location.split(" ").length>1?e.location:`${e.location} center`,n.value);function r(d){return s?s(d):0}const l={};return a!=="center"&&(t?l[xe[a]]=`calc(100% - ${r(a)}px)`:l[a]=0),o!=="center"?t?l[xe[o]]=`calc(100% - ${r(o)}px)`:l[o]=0:(a==="center"?l.top=l.left="50%":l[{top:"left",bottom:"left",left:"top",right:"top"}[a]]="50%",l.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[a]),l})}}const Yt=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...A(),...Xe({location:"top"}),...me(),...D(),...M()},"VProgressLinear"),Jt=E()({name:"VProgressLinear",props:Yt(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:s}=t;const n=Le(e,"modelValue"),{isRtl:i,rtlClasses:a}=Te(),{themeClasses:o}=W(e),{locationStyles:r}=Ue(e),{textColorClasses:l,textColorStyles:d}=j(e,"color"),{backgroundColorClasses:f,backgroundColorStyles:m}=Se(c(()=>e.bgColor||e.color)),{backgroundColorClasses:u,backgroundColorStyles:g}=Se(e,"color"),{roundedClasses:S}=ge(e),{intersectionRef:h,isIntersecting:w}=qe(),C=c(()=>parseInt(e.max,10)),p=c(()=>parseInt(e.height,10)),x=c(()=>parseFloat(e.bufferValue)/C.value*100),P=c(()=>parseFloat(n.value)/C.value*100),B=c(()=>i.value!==e.reverse),R=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),G=c(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function U(I){if(!h.value)return;const{left:Y,right:J,width:T}=h.value.getBoundingClientRect(),H=B.value?T-I.clientX+(J-T):I.clientX-Y;n.value=Math.round(H/T*C.value)}return $(()=>v(e.tag,{ref:h,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&w.value,"v-progress-linear--reverse":B.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},S.value,o.value,a.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?b(p.value):0,"--v-progress-linear-height":b(p.value),...r.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:P.value,onClick:e.clickable&&U},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",l.value],style:{...d.value,[B.value?"left":"right"]:b(-p.value),borderTop:`${b(p.value/2)} dotted`,opacity:G.value,top:`calc(50% - ${b(p.value/4)})`,width:b(100-x.value,"%"),"--v-progress-linear-stream-to":b(p.value*(B.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",f.value],style:[m.value,{opacity:G.value,width:b(e.stream?x.value:100,"%")}]},null),v(X,{name:R.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(I=>v("div",{key:I,class:["v-progress-linear__indeterminate",I,u.value],style:g.value},null))]):v("div",{class:["v-progress-linear__determinate",u.value],style:[g.value,{width:b(P.value,"%")}]},null)]}),s.default&&v("div",{class:"v-progress-linear__content"},[s.default({value:P.value,buffer:x.value})])]})),{}}}),Qt=y({loading:[Boolean,String]},"loader");function Kt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{loaderClasses:c(()=>({[`${t}--loading`]:e.loading}))}}function Bn(e,t){let{slots:s}=t;return v("div",{class:`${e.name}__loader`},[s.default?.({color:e.color,isActive:e.active})||v(Jt,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Zt=["static","relative","fixed","absolute","sticky"],en=y({position:{type:String,validator:e=>Zt.includes(e)}},"position");function tn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{positionClasses:c(()=>e.position?`${t}--${e.position}`:void 0)}}function In(){return le("useRouter")?.proxy?.$router}function nn(e,t){const s=pt("RouterLink"),n=c(()=>!!(e.href||e.to)),i=c(()=>n?.value||be(t,"click")||be(e,"click"));if(typeof s=="string")return{isLink:n,isClickable:i,href:V(e,"href")};const a=e.to?s.useLink(e):void 0;return{isLink:n,isClickable:i,route:a?.route,navigate:a?.navigate,isActive:a&&c(()=>e.exact?a.isExactActive?.value:a.isActive?.value),href:c(()=>e.to?a?.route.value.href:e.href)}}const sn=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ee=!1;function Pn(e,t){let s=!1,n,i;Ct&&($e(()=>{window.addEventListener("popstate",a),n=e?.beforeEach((o,r,l)=>{ee?s?t(l):l():setTimeout(()=>s?t(l):l()),ee=!0}),i=e?.afterEach(()=>{ee=!1})}),St(()=>{window.removeEventListener("popstate",a),n?.(),i?.()}));function a(o){o.state?.replaced||(s=!0,setTimeout(()=>s=!1))}}function an(e,t){ce(()=>e.isActive?.value,s=>{e.isLink.value&&s&&t&&$e(()=>{t(!0)})},{immediate:!0})}const ie=Symbol("rippleStop"),on=80;function _e(e,t){e.style.transform=t,e.style.webkitTransform=t}function ae(e){return e.constructor.name==="TouchEvent"}function Ye(e){return e.constructor.name==="KeyboardEvent"}const rn=function(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=0,i=0;if(!Ye(e)){const m=t.getBoundingClientRect(),u=ae(e)?e.touches[e.touches.length-1]:e;n=u.clientX-m.left,i=u.clientY-m.top}let a=0,o=.3;t._ripple?.circle?(o=.15,a=t.clientWidth/2,a=s.center?a:a+Math.sqrt((n-a)**2+(i-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const r=`${(t.clientWidth-a*2)/2}px`,l=`${(t.clientHeight-a*2)/2}px`,d=s.center?r:`${n-a}px`,f=s.center?l:`${i-a}px`;return{radius:a,scale:o,x:d,y:f,centerX:r,centerY:l}},q={show(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!t?._ripple?.enabled)return;const n=document.createElement("span"),i=document.createElement("span");n.appendChild(i),n.className="v-ripple__container",s.class&&(n.className+=` ${s.class}`);const{radius:a,scale:o,x:r,y:l,centerX:d,centerY:f}=rn(e,t,s),m=`${a*2}px`;i.className="v-ripple__animation",i.style.width=m,i.style.height=m,t.appendChild(n);const u=window.getComputedStyle(t);u&&u.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),_e(i,`translate(${r}, ${l}) scale3d(${o},${o},${o})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),_e(i,`translate(${d}, ${f}) scale3d(1,1,1)`)},0)},hide(e){if(!e?._ripple?.enabled)return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const s=t[t.length-1];if(s.dataset.isHiding)return;s.dataset.isHiding="true";const n=performance.now()-Number(s.dataset.activated),i=Math.max(250-n,0);setTimeout(()=>{s.classList.remove("v-ripple__animation--in"),s.classList.add("v-ripple__animation--out"),setTimeout(()=>{e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),s.parentNode?.parentNode===e&&e.removeChild(s.parentNode)},300)},i)}};function Je(e){return typeof e>"u"||!!e}function N(e){const t={},s=e.currentTarget;if(!(!s?._ripple||s._ripple.touched||e[ie])){if(e[ie]=!0,ae(e))s._ripple.touched=!0,s._ripple.isTouch=!0;else if(s._ripple.isTouch)return;if(t.center=s._ripple.centered||Ye(e),s._ripple.class&&(t.class=s._ripple.class),ae(e)){if(s._ripple.showTimerCommit)return;s._ripple.showTimerCommit=()=>{q.show(e,s,t)},s._ripple.showTimer=window.setTimeout(()=>{s?._ripple?.showTimerCommit&&(s._ripple.showTimerCommit(),s._ripple.showTimerCommit=null)},on)}else q.show(e,s,t)}}function ke(e){e[ie]=!0}function _(e){const t=e.currentTarget;if(t?._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),q.hide(t)}}function Qe(e){const t=e.currentTarget;t?._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let O=!1;function Ke(e){!O&&(e.keyCode===pe.enter||e.keyCode===pe.space)&&(O=!0,N(e))}function Ze(e){O=!1,_(e)}function et(e){O&&(O=!1,_(e))}function tt(e,t,s){const{value:n,modifiers:i}=t,a=Je(n);if(a||q.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=i.center,e._ripple.circle=i.circle,wt(n)&&n.class&&(e._ripple.class=n.class),a&&!s){if(i.stop){e.addEventListener("touchstart",ke,{passive:!0}),e.addEventListener("mousedown",ke);return}e.addEventListener("touchstart",N,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",Qe,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",N),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",Ke),e.addEventListener("keyup",Ze),e.addEventListener("blur",et),e.addEventListener("dragstart",_,{passive:!0})}else!a&&s&&nt(e)}function nt(e){e.removeEventListener("mousedown",N),e.removeEventListener("touchstart",N),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",Qe),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",Ke),e.removeEventListener("keyup",Ze),e.removeEventListener("dragstart",_),e.removeEventListener("blur",et)}function ln(e,t){tt(e,t,!1)}function un(e){delete e._ripple,nt(e)}function cn(e,t){if(t.value===t.oldValue)return;const s=Je(t.oldValue);tt(e,t,s)}const dn={mounted:ln,unmounted:un,updated:cn},fn=y({active:{type:Boolean,default:void 0},symbol:{type:null,default:je},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:se,appendIcon:se,block:Boolean,stacked:Boolean,ripple:{type:Boolean,default:!0},text:String,...De(),...A(),...Oe(),...Lt(),...We(),...Mt(),...Qt(),...Xe(),...en(),...me(),...sn(),...fe(),...D({tag:"button"}),...M(),...Ae({variant:"elevated"})},"VBtn"),Vn=E()({name:"VBtn",directives:{Ripple:dn},props:fn(),emits:{"group:selected":e=>!0},setup(e,t){let{attrs:s,slots:n}=t;const{themeClasses:i}=W(e),{borderClasses:a}=Me(e),{colorClasses:o,colorStyles:r,variantClasses:l}=At(e),{densityClasses:d}=ze(e),{dimensionStyles:f}=Tt(e),{elevationClasses:m}=Ge(e),{loaderClasses:u}=Kt(e),{locationStyles:g}=Ue(e),{positionClasses:S}=tn(e),{roundedClasses:h}=ge(e),{sizeClasses:w,sizeStyles:C}=ve(e),p=Wt(e,e.symbol,!1),x=nn(e,s),P=c(()=>e.active!==void 0?e.active:x.isLink.value?x.isActive?.value:p?.isSelected.value),B=c(()=>p?.disabled.value||e.disabled),R=c(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),G=c(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function U(I){B.value||(x.navigate?.(I),p?.toggle())}return an(x,p?.select),$(()=>{const I=x.isLink.value?"a":e.tag,Y=!!(e.prependIcon||n.prepend),J=!!(e.appendIcon||n.append),T=!!(e.icon&&e.icon!==!0),H=p?.isSelected.value&&(!x.isLink.value||x.isActive?.value)||!p||x.isActive?.value;return xt(v(I,{type:I==="a"?void 0:"button",class:["v-btn",p?.selectedClass.value,{"v-btn--active":P.value,"v-btn--block":e.block,"v-btn--disabled":B.value,"v-btn--elevated":R.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},i.value,a.value,H?o.value:void 0,d.value,m.value,u.value,S.value,h.value,w.value,l.value,e.class],style:[H?r.value:void 0,f.value,g.value,C.value,e.style],disabled:B.value||void 0,href:x.href.value,onClick:U,value:G.value},{default:()=>[zt(!0,"v-btn"),!e.icon&&Y&&v("span",{key:"prepend",class:"v-btn__prepend"},[n.prepend?v(Z,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},n.prepend):v(K,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!n.default&&T?v(K,{key:"content-icon",icon:e.icon},null):v(Z,{key:"content-defaults",disabled:!T,defaults:{VIcon:{icon:e.icon}}},{default:()=>[n.default?.()??e.text]})]),!e.icon&&J&&v("span",{key:"append",class:"v-btn__append"},[n.append?v(Z,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},n.append):v(K,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[n.loader?.()??v(Ut,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}),[[_t("ripple"),!B.value&&e.ripple,null]])}),{}}}),vn=y({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function k(e,t,s){return E()({name:e,props:vn({mode:s,origin:t}),setup(n,i){let{slots:a}=i;const o={onBeforeEnter(r){n.origin&&(r.style.transformOrigin=n.origin)},onLeave(r){if(n.leaveAbsolute){const{offsetTop:l,offsetLeft:d,offsetWidth:f,offsetHeight:m}=r;r._transitionInitialStyles={position:r.style.position,top:r.style.top,left:r.style.left,width:r.style.width,height:r.style.height},r.style.position="absolute",r.style.top=`${l}px`,r.style.left=`${d}px`,r.style.width=`${f}px`,r.style.height=`${m}px`}n.hideOnLeave&&r.style.setProperty("display","none","important")},onAfterLeave(r){if(n.leaveAbsolute&&r?._transitionInitialStyles){const{position:l,top:d,left:f,width:m,height:u}=r._transitionInitialStyles;delete r._transitionInitialStyles,r.style.position=l||"",r.style.top=d||"",r.style.left=f||"",r.style.width=m||"",r.style.height=u||""}}};return()=>{const r=n.group?kt:X;return re(r,{name:n.disabled?"":e,css:!n.disabled,...n.group?void 0:{mode:n.mode},...n.disabled?{}:o},a.default)}}})}function st(e,t){let s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return E()({name:e,props:{mode:{type:String,default:s},disabled:Boolean},setup(n,i){let{slots:a}=i;return()=>re(X,{name:n.disabled?"":e,css:!n.disabled,...n.disabled?{}:t},a.default)}})}function it(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const s=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",n=Bt(`offset-${s}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[s]:o.style[s]}},onEnter(o){const r=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const l=`${o[n]}px`;o.style[s]="0",o.offsetHeight,o.style.transition=r.transition,e&&o._parent&&o._parent.classList.add(e),requestAnimationFrame(()=>{o.style[s]=l})},onAfterEnter:a,onEnterCancelled:a,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[s]:o.style[s]},o.style.overflow="hidden",o.style[s]=`${o[n]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[s]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(o){e&&o._parent&&o._parent.classList.remove(e),a(o)}function a(o){const r=o._initialStyle[s];o.style.overflow=o._initialStyle.overflow,r!=null&&(o.style[s]=r),delete o._initialStyle}}k("fab-transition","center center","out-in");k("dialog-bottom-transition");k("dialog-top-transition");k("fade-transition");k("scale-transition");k("scroll-x-transition");k("scroll-x-reverse-transition");k("scroll-y-transition");k("scroll-y-reverse-transition");k("slide-x-transition");k("slide-x-reverse-transition");const En=k("slide-y-transition");k("slide-y-reverse-transition");const Ln=st("expand-transition",it()),Tn=st("expand-x-transition",it("",!0)),te=Symbol("Forwarded refs");function ne(e,t){let s=e;for(;s;){const n=Reflect.getOwnPropertyDescriptor(s,t);if(n)return n;s=Object.getPrototypeOf(s)}}function $n(e){for(var t=arguments.length,s=new Array(t>1?t-1:0),n=1;n<t;n++)s[n-1]=arguments[n];return e[te]=s,new Proxy(e,{get(i,a){if(Reflect.has(i,a))return Reflect.get(i,a);if(!(typeof a=="symbol"||a.startsWith("__"))){for(const o of s)if(o.value&&Reflect.has(o.value,a)){const r=Reflect.get(o.value,a);return typeof r=="function"?r.bind(o.value):r}}},has(i,a){if(Reflect.has(i,a))return!0;if(typeof a=="symbol"||a.startsWith("__"))return!1;for(const o of s)if(o.value&&Reflect.has(o.value,a))return!0;return!1},getOwnPropertyDescriptor(i,a){const o=Reflect.getOwnPropertyDescriptor(i,a);if(o)return o;if(!(typeof a=="symbol"||a.startsWith("__"))){for(const r of s){if(!r.value)continue;const l=ne(r.value,a)??("_"in r.value?ne(r.value._?.setupState,a):void 0);if(l)return l}for(const r of s){const l=r.value&&r.value[te];if(!l)continue;const d=l.slice();for(;d.length;){const f=d.shift(),m=ne(f.value,a);if(m)return m;const u=f.value&&f.value[te];u&&d.push(...u)}}}}})}export{Pt as A,gn as B,hn as C,yn as D,Q as E,bn as F,pn as G,Cn as H,kn as I,In as J,Sn as K,Pn as L,_n as M,wn as N,$n as O,Vn as P,Xe as Q,dn as R,Ue as S,En as T,Qt as U,K as V,Kt as W,Bn as X,Tn as Y,xn as a,Oe as b,me as c,fe as d,Ae as e,At as f,ze as g,ge as h,ve as i,zt as j,Dt as k,Gt as l,Lt as m,Ln as n,Se as o,We as p,Mt as q,Wt as r,Ge as s,Z as t,Tt as u,De as v,sn as w,nn as x,Me as y,j as z};
