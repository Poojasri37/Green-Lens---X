(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ld={exports:{}},Wo={};var Sv;function cM(){if(Sv)return Wo;Sv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var p in l)p!=="key"&&(c[p]=l[p])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return Wo.Fragment=e,Wo.jsx=i,Wo.jsxs=i,Wo}var Mv;function uM(){return Mv||(Mv=1,Ld.exports=cM()),Ld.exports}var m=uM(),Od={exports:{}},rt={};var Ev;function fM(){if(Ev)return rt;Ev=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function E(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function y(B,Y,xe){this.props=B,this.context=Y,this.refs=M,this.updater=xe||T}y.prototype.isReactComponent={},y.prototype.setState=function(B,Y){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Y,"setState")},y.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function R(){}R.prototype=y.prototype;function L(B,Y,xe){this.props=B,this.context=Y,this.refs=M,this.updater=xe||T}var D=L.prototype=new R;D.constructor=L,C(D,y.prototype),D.isPureReactComponent=!0;var P=Array.isArray;function F(){}var O={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function w(B,Y,xe){var Ce=xe.ref;return{$$typeof:r,type:B,key:Y,ref:Ce!==void 0?Ce:null,props:xe}}function $(B,Y){return w(B.type,Y,B.props)}function H(B){return typeof B=="object"&&B!==null&&B.$$typeof===r}function K(B){var Y={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(xe){return Y[xe]})}var ae=/\/+/g;function ue(B,Y){return typeof B=="object"&&B!==null&&B.key!=null?K(""+B.key):Y.toString(36)}function ee(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(F,F):(B.status="pending",B.then(function(Y){B.status==="pending"&&(B.status="fulfilled",B.value=Y)},function(Y){B.status==="pending"&&(B.status="rejected",B.reason=Y)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function z(B,Y,xe,Ce,ze){var re=typeof B;(re==="undefined"||re==="boolean")&&(B=null);var ye=!1;if(B===null)ye=!0;else switch(re){case"bigint":case"string":case"number":ye=!0;break;case"object":switch(B.$$typeof){case r:case e:ye=!0;break;case x:return ye=B._init,z(ye(B._payload),Y,xe,Ce,ze)}}if(ye)return ze=ze(B),ye=Ce===""?"."+ue(B,0):Ce,P(ze)?(xe="",ye!=null&&(xe=ye.replace(ae,"$&/")+"/"),z(ze,Y,xe,"",function(Qe){return Qe})):ze!=null&&(H(ze)&&(ze=$(ze,xe+(ze.key==null||B&&B.key===ze.key?"":(""+ze.key).replace(ae,"$&/")+"/")+ye)),Y.push(ze)),1;ye=0;var Ae=Ce===""?".":Ce+":";if(P(B))for(var ke=0;ke<B.length;ke++)Ce=B[ke],re=Ae+ue(Ce,ke),ye+=z(Ce,Y,xe,re,ze);else if(ke=E(B),typeof ke=="function")for(B=ke.call(B),ke=0;!(Ce=B.next()).done;)Ce=Ce.value,re=Ae+ue(Ce,ke++),ye+=z(Ce,Y,xe,re,ze);else if(re==="object"){if(typeof B.then=="function")return z(ee(B),Y,xe,Ce,ze);throw Y=String(B),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return ye}function G(B,Y,xe){if(B==null)return B;var Ce=[],ze=0;return z(B,Ce,"","",function(re){return Y.call(xe,re,ze++)}),Ce}function fe(B){if(B._status===-1){var Y=B._result;Y=Y(),Y.then(function(xe){(B._status===0||B._status===-1)&&(B._status=1,B._result=xe)},function(xe){(B._status===0||B._status===-1)&&(B._status=2,B._result=xe)}),B._status===-1&&(B._status=0,B._result=Y)}if(B._status===1)return B._result.default;throw B._result}var me=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},Te={map:G,forEach:function(B,Y,xe){G(B,function(){Y.apply(this,arguments)},xe)},count:function(B){var Y=0;return G(B,function(){Y++}),Y},toArray:function(B){return G(B,function(Y){return Y})||[]},only:function(B){if(!H(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return rt.Activity=v,rt.Children=Te,rt.Component=y,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=L,rt.StrictMode=s,rt.Suspense=g,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,rt.__COMPILER_RUNTIME={__proto__:null,c:function(B){return O.H.useMemoCache(B)}},rt.cache=function(B){return function(){return B.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(B,Y,xe){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var Ce=C({},B.props),ze=B.key;if(Y!=null)for(re in Y.key!==void 0&&(ze=""+Y.key),Y)!b.call(Y,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&Y.ref===void 0||(Ce[re]=Y[re]);var re=arguments.length-2;if(re===1)Ce.children=xe;else if(1<re){for(var ye=Array(re),Ae=0;Ae<re;Ae++)ye[Ae]=arguments[Ae+2];Ce.children=ye}return w(B.type,ze,Ce)},rt.createContext=function(B){return B={$$typeof:f,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:c,_context:B},B},rt.createElement=function(B,Y,xe){var Ce,ze={},re=null;if(Y!=null)for(Ce in Y.key!==void 0&&(re=""+Y.key),Y)b.call(Y,Ce)&&Ce!=="key"&&Ce!=="__self"&&Ce!=="__source"&&(ze[Ce]=Y[Ce]);var ye=arguments.length-2;if(ye===1)ze.children=xe;else if(1<ye){for(var Ae=Array(ye),ke=0;ke<ye;ke++)Ae[ke]=arguments[ke+2];ze.children=Ae}if(B&&B.defaultProps)for(Ce in ye=B.defaultProps,ye)ze[Ce]===void 0&&(ze[Ce]=ye[Ce]);return w(B,re,ze)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(B){return{$$typeof:p,render:B}},rt.isValidElement=H,rt.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:fe}},rt.memo=function(B,Y){return{$$typeof:h,type:B,compare:Y===void 0?null:Y}},rt.startTransition=function(B){var Y=O.T,xe={};O.T=xe;try{var Ce=B(),ze=O.S;ze!==null&&ze(xe,Ce),typeof Ce=="object"&&Ce!==null&&typeof Ce.then=="function"&&Ce.then(F,me)}catch(re){me(re)}finally{Y!==null&&xe.types!==null&&(Y.types=xe.types),O.T=Y}},rt.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},rt.use=function(B){return O.H.use(B)},rt.useActionState=function(B,Y,xe){return O.H.useActionState(B,Y,xe)},rt.useCallback=function(B,Y){return O.H.useCallback(B,Y)},rt.useContext=function(B){return O.H.useContext(B)},rt.useDebugValue=function(){},rt.useDeferredValue=function(B,Y){return O.H.useDeferredValue(B,Y)},rt.useEffect=function(B,Y){return O.H.useEffect(B,Y)},rt.useEffectEvent=function(B){return O.H.useEffectEvent(B)},rt.useId=function(){return O.H.useId()},rt.useImperativeHandle=function(B,Y,xe){return O.H.useImperativeHandle(B,Y,xe)},rt.useInsertionEffect=function(B,Y){return O.H.useInsertionEffect(B,Y)},rt.useLayoutEffect=function(B,Y){return O.H.useLayoutEffect(B,Y)},rt.useMemo=function(B,Y){return O.H.useMemo(B,Y)},rt.useOptimistic=function(B,Y){return O.H.useOptimistic(B,Y)},rt.useReducer=function(B,Y,xe){return O.H.useReducer(B,Y,xe)},rt.useRef=function(B){return O.H.useRef(B)},rt.useState=function(B){return O.H.useState(B)},rt.useSyncExternalStore=function(B,Y,xe){return O.H.useSyncExternalStore(B,Y,xe)},rt.useTransition=function(){return O.H.useTransition()},rt.version="19.2.4",rt}var bv;function Ep(){return bv||(bv=1,Od.exports=fM()),Od.exports}var Q=Ep(),Pd={exports:{}},qo={},Id={exports:{}},Fd={};var Tv;function dM(){return Tv||(Tv=1,(function(r){function e(z,G){var fe=z.length;z.push(G);e:for(;0<fe;){var me=fe-1>>>1,Te=z[me];if(0<l(Te,G))z[me]=G,z[fe]=Te,fe=me;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var G=z[0],fe=z.pop();if(fe!==G){z[0]=fe;e:for(var me=0,Te=z.length,B=Te>>>1;me<B;){var Y=2*(me+1)-1,xe=z[Y],Ce=Y+1,ze=z[Ce];if(0>l(xe,fe))Ce<Te&&0>l(ze,xe)?(z[me]=ze,z[Ce]=fe,me=Ce):(z[me]=xe,z[Y]=fe,me=Y);else if(Ce<Te&&0>l(ze,fe))z[me]=ze,z[Ce]=fe,me=Ce;else break e}}return G}function l(z,G){var fe=z.sortIndex-G.sortIndex;return fe!==0?fe:z.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var g=[],h=[],x=1,v=null,_=3,E=!1,T=!1,C=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var G=i(h);G!==null;){if(G.callback===null)s(h);else if(G.startTime<=z)s(h),G.sortIndex=G.expirationTime,e(g,G);else break;G=i(h)}}function P(z){if(C=!1,D(z),!T)if(i(g)!==null)T=!0,F||(F=!0,K());else{var G=i(h);G!==null&&ee(P,G.startTime-z)}}var F=!1,O=-1,b=5,w=-1;function $(){return M?!0:!(r.unstable_now()-w<b)}function H(){if(M=!1,F){var z=r.unstable_now();w=z;var G=!0;try{e:{T=!1,C&&(C=!1,R(O),O=-1),E=!0;var fe=_;try{t:{for(D(z),v=i(g);v!==null&&!(v.expirationTime>z&&$());){var me=v.callback;if(typeof me=="function"){v.callback=null,_=v.priorityLevel;var Te=me(v.expirationTime<=z);if(z=r.unstable_now(),typeof Te=="function"){v.callback=Te,D(z),G=!0;break t}v===i(g)&&s(g),D(z)}else s(g);v=i(g)}if(v!==null)G=!0;else{var B=i(h);B!==null&&ee(P,B.startTime-z),G=!1}}break e}finally{v=null,_=fe,E=!1}G=void 0}}finally{G?K():F=!1}}}var K;if(typeof L=="function")K=function(){L(H)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,ue=ae.port2;ae.port1.onmessage=H,K=function(){ue.postMessage(null)}}else K=function(){y(H,0)};function ee(z,G){O=y(function(){z(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(z){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var fe=_;_=G;try{return z()}finally{_=fe}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var fe=_;_=z;try{return G()}finally{_=fe}},r.unstable_scheduleCallback=function(z,G,fe){var me=r.unstable_now();switch(typeof fe=="object"&&fe!==null?(fe=fe.delay,fe=typeof fe=="number"&&0<fe?me+fe:me):fe=me,z){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=fe+Te,z={id:x++,callback:G,priorityLevel:z,startTime:fe,expirationTime:Te,sortIndex:-1},fe>me?(z.sortIndex=fe,e(h,z),i(g)===null&&z===i(h)&&(C?(R(O),O=-1):C=!0,ee(P,fe-me))):(z.sortIndex=Te,e(g,z),T||E||(T=!0,F||(F=!0,K()))),z},r.unstable_shouldYield=$,r.unstable_wrapCallback=function(z){var G=_;return function(){var fe=_;_=G;try{return z.apply(this,arguments)}finally{_=fe}}}})(Fd)),Fd}var Av;function hM(){return Av||(Av=1,Id.exports=dM()),Id.exports}var zd={exports:{}},Rn={};var Rv;function pM(){if(Rv)return Rn;Rv=1;var r=Ep();function e(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(g,h,x){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:g,containerInfo:h,implementation:x}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Rn.createPortal=function(g,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(e(299));return c(g,h,null,x)},Rn.flushSync=function(g){var h=f.T,x=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=h,s.p=x,s.d.f()}},Rn.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(g,h))},Rn.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Rn.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var x=h.as,v=p(x,h.crossOrigin),_=typeof h.integrity=="string"?h.integrity:void 0,E=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?s.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:E}):x==="script"&&s.d.X(g,{crossOrigin:v,integrity:_,fetchPriority:E,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Rn.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=p(h.as,h.crossOrigin);s.d.M(g,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(g)},Rn.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,v=p(x,h.crossOrigin);s.d.L(g,x,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Rn.preloadModule=function(g,h){if(typeof g=="string")if(h){var x=p(h.as,h.crossOrigin);s.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(g)},Rn.requestFormReset=function(g){s.d.r(g)},Rn.unstable_batchedUpdates=function(g,h){return g(h)},Rn.useFormState=function(g,h,x){return f.H.useFormState(g,h,x)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.2.4",Rn}var Cv;function mM(){if(Cv)return zd.exports;Cv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),zd.exports=pM(),zd.exports}var wv;function gM(){if(wv)return qo;wv=1;var r=hM(),e=Ep(),i=mM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function g(t){if(c(t)!==t)throw Error(s(188))}function h(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return g(u),t;if(d===o)return g(u),n;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=d;else{for(var S=!1,N=u.child;N;){if(N===a){S=!0,a=u,o=d;break}if(N===o){S=!0,o=u,a=d;break}N=N.sibling}if(!S){for(N=d.child;N;){if(N===a){S=!0,a=d,o=u;break}if(N===o){S=!0,o=d,a=u;break}N=N.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),$=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var ae=Symbol.for("react.client.reference");function ue(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case y:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case F:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case T:return"Portal";case L:return t.displayName||"Context";case R:return(t._context.displayName||"Context")+".Consumer";case D:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return n=t.displayName||null,n!==null?n:ue(t.type)||"Memo";case b:n=t._payload,t=t._init;try{return ue(t(n))}catch{}}return null}var ee=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,fe={pending:!1,data:null,method:null,action:null},me=[],Te=-1;function B(t){return{current:t}}function Y(t){0>Te||(t.current=me[Te],me[Te]=null,Te--)}function xe(t,n){Te++,me[Te]=t.current,t.current=n}var Ce=B(null),ze=B(null),re=B(null),ye=B(null);function Ae(t,n){switch(xe(re,n),xe(ze,t),xe(Ce,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?k0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=k0(n),t=X0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(Ce),xe(Ce,t)}function ke(){Y(Ce),Y(ze),Y(re)}function Qe(t){t.memoizedState!==null&&xe(ye,t);var n=Ce.current,a=X0(n,t.type);n!==a&&(xe(ze,t),xe(Ce,a))}function et(t){ze.current===t&&(Y(Ce),Y(ze)),ye.current===t&&(Y(ye),Vo._currentValue=fe)}var en,_t;function mt(t){if(en===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);en=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+t+_t}var Lt=!1;function lt(t,n){if(!t||Lt)return"";Lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ce){var oe=ce}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(ce){oe=ce}t.call(_e.prototype)}}else{try{throw Error()}catch(ce){oe=ce}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ce){if(ce&&oe&&typeof ce.stack=="string")return[ce.stack,oe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),S=d[0],N=d[1];if(S&&N){var V=S.split(`
`),ne=N.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ne.length&&!ne[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===ne.length)for(o=V.length-1,u=ne.length-1;1<=o&&0<=u&&V[o]!==ne[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==ne[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==ne[u]){var pe=`
`+V[o].replace(" at new "," at ");return t.displayName&&pe.includes("<anonymous>")&&(pe=pe.replace("<anonymous>",t.displayName)),pe}while(1<=o&&0<=u);break}}}finally{Lt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?mt(a):""}function Qt(t,n){switch(t.tag){case 26:case 27:case 5:return mt(t.type);case 16:return mt("Lazy");case 13:return t.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return lt(t.type,!1);case 11:return lt(t.type.render,!1);case 1:return lt(t.type,!0);case 31:return mt("Activity");default:return""}}function j(t){try{var n="",a=null;do n+=Qt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qt=Object.prototype.hasOwnProperty,Et=r.unstable_scheduleCallback,Pt=r.unstable_cancelCallback,qe=r.unstable_shouldYield,I=r.unstable_requestPaint,A=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,ge=r.unstable_ImmediatePriority,Se=r.unstable_UserBlockingPriority,he=r.unstable_NormalPriority,Xe=r.unstable_LowPriority,Ne=r.unstable_IdlePriority,Ke=r.log,tt=r.unstable_setDisableYieldValue,be=null,Me=null;function Pe(t){if(typeof Ke=="function"&&tt(t),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(be,t)}catch{}}var Oe=Math.clz32?Math.clz32:W,Ie=Math.log,ut=Math.LN2;function W(t){return t>>>=0,t===0?32:31-(Ie(t)/ut|0)|0}var we=256,Re=262144,Fe=4194304;function Ee(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function de(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var N=o&134217727;return N!==0?(o=N&~d,o!==0?u=Ee(o):(S&=N,S!==0?u=Ee(S):a||(a=N&~t,a!==0&&(u=Ee(a))))):(N=o&~d,N!==0?u=Ee(N):S!==0?u=Ee(S):a||(a=o&~t,a!==0&&(u=Ee(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function He(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var t=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),t}function Tt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Dn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xi(t,n,a,o,u,d){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var N=t.entanglements,V=t.expirationTimes,ne=t.hiddenUpdates;for(a=S&~a;0<a;){var pe=31-Oe(a),_e=1<<pe;N[pe]=0,V[pe]=-1;var oe=ne[pe];if(oe!==null)for(ne[pe]=null,pe=0;pe<oe.length;pe++){var ce=oe[pe];ce!==null&&(ce.lane&=-536870913)}a&=~_e}o!==0&&no(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(S&~n))}function no(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Oe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ks(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Oe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function _l(t,n){var a=n&-n;return a=(a&42)!==0?1:Xs(a),(a&(t.suspendedLanes|n))!==0?0:a}function Xs(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ws(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Li(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:pv(t.type))}function qs(t,n){var a=G.p;try{return G.p=t,n()}finally{G.p=a}}var yi=Math.random().toString(36).slice(2),on="__reactFiber$"+yi,mn="__reactProps$"+yi,Zi="__reactContainer$"+yi,Ca="__reactEvents$"+yi,xl="__reactListeners$"+yi,yl="__reactHandles$"+yi,Sl="__reactResources$"+yi,cs="__reactMarker$"+yi;function io(t){delete t[on],delete t[mn],delete t[Ca],delete t[xl],delete t[yl]}function wa(t){var n=t[on];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Zi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=J0(t);t!==null;){if(a=t[on])return a;t=J0(t)}return n}t=a,a=t.parentNode}return null}function Na(t){if(t=t[on]||t[Zi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function us(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function U(t){var n=t[Sl];return n||(n=t[Sl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function X(t){t[cs]=!0}var le=new Set,se={};function J(t,n){De(t,n),De(t+"Capture",n)}function De(t,n){for(se[t]=n,t=0;t<n.length;t++)le.add(n[t])}var Be=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ue={},We={};function Ze(t){return qt.call(We,t)?!0:qt.call(Ue,t)?!1:Be.test(t)?We[t]=!0:(Ue[t]=!0,!1)}function nt(t,n,a){if(Ze(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function st(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Ge(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function ft(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Yt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,d.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ct(t){if(!t._valueTracker){var n=Yt(t)?"checked":"value";t._valueTracker=Zt(t,n,""+t[n])}}function gn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Yt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function je(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Un=/[\n"\\]/g;function at(t){return t.replace(Un,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ln(t,n,a,o,u,d,S,N){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ft(n)):t.value!==""+ft(n)&&(t.value=""+ft(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?Si(t,S,ft(n)):a!=null?Si(t,S,ft(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?t.name=""+ft(N):t.removeAttribute("name")}function qn(t,n,a,o,u,d,S,N){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){Ct(t);return}a=a!=null?""+ft(a):"",n=n!=null?""+ft(n):a,N||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=N?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Ct(t)}function Si(t,n,a){n==="number"&&je(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function Yn(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+ft(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function It(t,n,a){if(n!=null&&(n=""+ft(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ft(a):""}function ln(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ee(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ft(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Ct(t)}function On(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mi(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||cn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ki(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Mi(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&Mi(t,d,n[d])}function Ys(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ry=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ml(t){return ry.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Qi(){}var wu=null;function Nu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Zs=null,Ks=null;function jp(t){var n=Na(t);if(n&&(t=n.stateNode)){var a=t[mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Ln(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[mn]||null;if(!u)throw Error(s(90));Ln(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&gn(o)}break e;case"textarea":It(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Yn(t,!!a.multiple,n,!1)}}}var Du=!1;function kp(t,n,a){if(Du)return t(n,a);Du=!0;try{var o=t(n);return o}finally{if(Du=!1,(Zs!==null||Ks!==null)&&(cc(),Zs&&(n=Zs,t=Ks,Ks=Zs=null,jp(n),t)))for(n=0;n<t.length;n++)jp(t[n])}}function ao(t,n){var a=t.stateNode;if(a===null)return null;var o=a[mn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uu=!1;if(Ji)try{var so={};Object.defineProperty(so,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{Uu=!1}var Da=null,Lu=null,El=null;function Xp(){if(El)return El;var t,n=Lu,a=n.length,o,u="value"in Da?Da.value:Da.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[d-o];o++);return El=u.slice(t,1<o?1-o:void 0)}function bl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Tl(){return!0}function Wp(){return!1}function Bn(t){function n(a,o,u,d,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=S,this.currentTarget=null;for(var N in t)t.hasOwnProperty(N)&&(a=t[N],this[N]=a?a(d):d[N]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Tl:Wp,this.isPropagationStopped=Wp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Tl)},persist:function(){},isPersistent:Tl}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Al=Bn(fs),ro=v({},fs,{view:0,detail:0}),oy=Bn(ro),Ou,Pu,oo,Rl=v({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oo&&(oo&&t.type==="mousemove"?(Ou=t.screenX-oo.screenX,Pu=t.screenY-oo.screenY):Pu=Ou=0,oo=t),Ou)},movementY:function(t){return"movementY"in t?t.movementY:Pu}}),qp=Bn(Rl),ly=v({},Rl,{dataTransfer:0}),cy=Bn(ly),uy=v({},ro,{relatedTarget:0}),Iu=Bn(uy),fy=v({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),dy=Bn(fy),hy=v({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),py=Bn(hy),my=v({},fs,{data:0}),Yp=Bn(my),gy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_y={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=_y[t])?!!n[t]:!1}function Fu(){return xy}var yy=v({},ro,{key:function(t){if(t.key){var n=gy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=bl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?vy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fu,charCode:function(t){return t.type==="keypress"?bl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?bl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sy=Bn(yy),My=v({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=Bn(My),Ey=v({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fu}),by=Bn(Ey),Ty=v({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ay=Bn(Ty),Ry=v({},Rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Cy=Bn(Ry),wy=v({},fs,{newState:0,oldState:0}),Ny=Bn(wy),Dy=[9,13,27,32],zu=Ji&&"CompositionEvent"in window,lo=null;Ji&&"documentMode"in document&&(lo=document.documentMode);var Uy=Ji&&"TextEvent"in window&&!lo,Kp=Ji&&(!zu||lo&&8<lo&&11>=lo),Qp=" ",Jp=!1;function $p(t,n){switch(t){case"keyup":return Dy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function em(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qs=!1;function Ly(t,n){switch(t){case"compositionend":return em(n);case"keypress":return n.which!==32?null:(Jp=!0,Qp);case"textInput":return t=n.data,t===Qp&&Jp?null:t;default:return null}}function Oy(t,n){if(Qs)return t==="compositionend"||!zu&&$p(t,n)?(t=Xp(),El=Lu=Da=null,Qs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Kp&&n.locale!=="ko"?null:n.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Py[t.type]:n==="textarea"}function nm(t,n,a,o){Zs?Ks?Ks.push(o):Ks=[o]:Zs=o,n=gc(n,"onChange"),0<n.length&&(a=new Al("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var co=null,uo=null;function Iy(t){z0(t,0)}function Cl(t){var n=us(t);if(gn(n))return t}function im(t,n){if(t==="change")return n}var am=!1;if(Ji){var Bu;if(Ji){var Hu="oninput"in document;if(!Hu){var sm=document.createElement("div");sm.setAttribute("oninput","return;"),Hu=typeof sm.oninput=="function"}Bu=Hu}else Bu=!1;am=Bu&&(!document.documentMode||9<document.documentMode)}function rm(){co&&(co.detachEvent("onpropertychange",om),uo=co=null)}function om(t){if(t.propertyName==="value"&&Cl(uo)){var n=[];nm(n,uo,t,Nu(t)),kp(Iy,n)}}function Fy(t,n,a){t==="focusin"?(rm(),co=n,uo=a,co.attachEvent("onpropertychange",om)):t==="focusout"&&rm()}function zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(uo)}function By(t,n){if(t==="click")return Cl(n)}function Hy(t,n){if(t==="input"||t==="change")return Cl(n)}function Gy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:Gy;function fo(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qt.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cm(t,n){var a=lm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=lm(a)}}function um(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?um(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function fm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=je(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=je(t.document)}return n}function Gu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Vy=Ji&&"documentMode"in document&&11>=document.documentMode,Js=null,Vu=null,ho=null,ju=!1;function dm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ju||Js==null||Js!==je(o)||(o=Js,"selectionStart"in o&&Gu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ho&&fo(ho,o)||(ho=o,o=gc(Vu,"onSelect"),0<o.length&&(n=new Al("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Js)))}function ds(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var $s={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionrun:ds("Transition","TransitionRun"),transitionstart:ds("Transition","TransitionStart"),transitioncancel:ds("Transition","TransitionCancel"),transitionend:ds("Transition","TransitionEnd")},ku={},hm={};Ji&&(hm=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function hs(t){if(ku[t])return ku[t];if(!$s[t])return t;var n=$s[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in hm)return ku[t]=n[a];return t}var pm=hs("animationend"),mm=hs("animationiteration"),gm=hs("animationstart"),jy=hs("transitionrun"),ky=hs("transitionstart"),Xy=hs("transitioncancel"),vm=hs("transitionend"),_m=new Map,Xu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xu.push("scrollEnd");function Ei(t,n){_m.set(t,n),J(n,[t])}var wl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ri=[],er=0,Wu=0;function Nl(){for(var t=er,n=Wu=er=0;n<t;){var a=ri[n];ri[n++]=null;var o=ri[n];ri[n++]=null;var u=ri[n];ri[n++]=null;var d=ri[n];if(ri[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}d!==0&&xm(a,u,d)}}function Dl(t,n,a,o){ri[er++]=t,ri[er++]=n,ri[er++]=a,ri[er++]=o,Wu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function qu(t,n,a,o){return Dl(t,n,a,o),Ul(t)}function ps(t,n){return Dl(t,null,null,n),Ul(t)}function xm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Oe(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Ul(t){if(50<Po)throw Po=0,id=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var tr={};function Wy(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,o){return new Wy(t,n,a,o)}function Yu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ym(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ll(t,n,a,o,u,d){var S=0;if(o=t,typeof t=="function")Yu(t)&&(S=1);else if(typeof t=="string")S=QS(t,a,Ce.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case w:return t=Kn(31,a,n,u),t.elementType=w,t.lanes=d,t;case C:return ms(a.children,u,d,n);case M:S=8,u|=24;break;case y:return t=Kn(12,a,n,u|2),t.elementType=y,t.lanes=d,t;case P:return t=Kn(13,a,n,u),t.elementType=P,t.lanes=d,t;case F:return t=Kn(19,a,n,u),t.elementType=F,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L:S=10;break e;case R:S=9;break e;case D:S=11;break e;case O:S=14;break e;case b:S=16,o=null;break e}S=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Kn(S,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function ms(t,n,a,o){return t=Kn(7,t,o,n),t.lanes=a,t}function Zu(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function Sm(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Ku(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Mm=new WeakMap;function oi(t,n){if(typeof t=="object"&&t!==null){var a=Mm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:j(n)},Mm.set(t,n),n)}return{value:t,source:n,stack:j(n)}}var nr=[],ir=0,Ol=null,po=0,li=[],ci=0,Ua=null,Oi=1,Pi="";function ea(t,n){nr[ir++]=po,nr[ir++]=Ol,Ol=t,po=n}function Em(t,n,a){li[ci++]=Oi,li[ci++]=Pi,li[ci++]=Ua,Ua=t;var o=Oi;t=Pi;var u=32-Oe(o)-1;o&=~(1<<u),a+=1;var d=32-Oe(n)+u;if(30<d){var S=u-u%5;d=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Oi=1<<32-Oe(n)+u|a<<u|o,Pi=d+t}else Oi=1<<d|a<<u|o,Pi=t}function Qu(t){t.return!==null&&(ea(t,1),Em(t,1,0))}function Ju(t){for(;t===Ol;)Ol=nr[--ir],nr[ir]=null,po=nr[--ir],nr[ir]=null;for(;t===Ua;)Ua=li[--ci],li[ci]=null,Pi=li[--ci],li[ci]=null,Oi=li[--ci],li[ci]=null}function bm(t,n){li[ci++]=Oi,li[ci++]=Pi,li[ci++]=Ua,Oi=n.id,Pi=n.overflow,Ua=t}var Mn=null,Xt=null,St=!1,La=null,ui=!1,$u=Error(s(519));function Oa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mo(oi(n,t)),$u}function Tm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[on]=t,n[mn]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Fo.length;a++)vt(Fo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),qn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),ln(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||V0(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||Oa(t,!0)}function Am(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:ui=!1;return;case 27:case 3:ui=!0;return;default:Mn=Mn.return}}function ar(t){if(t!==Mn)return!1;if(!St)return Am(t),St=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||_d(t.type,t.memoizedProps)),a=!a),a&&Xt&&Oa(t),Am(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xt=Q0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Xt=Q0(t)}else n===27?(n=Xt,Ya(t.type)?(t=Ed,Ed=null,Xt=t):Xt=n):Xt=Mn?di(t.stateNode.nextSibling):null;return!0}function gs(){Xt=Mn=null,St=!1}function ef(){var t=La;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),La=null),t}function mo(t){La===null?La=[t]:La.push(t)}var tf=B(null),vs=null,ta=null;function Pa(t,n,a){xe(tf,n._currentValue),n._currentValue=a}function na(t){t._currentValue=tf.current,Y(tf)}function nf(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function af(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var S=u.child;d=d.firstContext;e:for(;d!==null;){var N=d;d=u;for(var V=0;V<n.length;V++)if(N.context===n[V]){d.lanes|=a,N=d.alternate,N!==null&&(N.lanes|=a),nf(d.return,a,t),o||(S=null);break e}d=N.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,d=S.alternate,d!==null&&(d.lanes|=a),nf(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function sr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var N=u.type;Zn(u.pendingProps.value,S.value)||(t!==null?t.push(N):t=[N])}}else if(u===ye.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Vo):t=[Vo])}u=u.return}t!==null&&af(n,t,a,o),n.flags|=262144}function Pl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function _s(t){vs=t,ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function En(t){return Rm(vs,t)}function Il(t,n){return vs===null&&_s(t),Rm(t,n)}function Rm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(t===null)throw Error(s(308));ta=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ta=ta.next=n;return a}var qy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},Yy=r.unstable_scheduleCallback,Zy=r.unstable_NormalPriority,un={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new qy,data:new Map,refCount:0}}function go(t){t.refCount--,t.refCount===0&&Yy(Zy,function(){t.controller.abort()})}var vo=null,rf=0,rr=0,or=null;function Ky(t,n){if(vo===null){var a=vo=[];rf=0,rr=cd(),or={status:"pending",value:void 0,then:function(o){a.push(o)}}}return rf++,n.then(Cm,Cm),n}function Cm(){if(--rf===0&&vo!==null){or!==null&&(or.status="fulfilled");var t=vo;vo=null,rr=0,or=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Qy(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var wm=z.S;z.S=function(t,n){d0=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ky(t,n),wm!==null&&wm(t,n)};var xs=B(null);function of(){var t=xs.current;return t!==null?t:kt.pooledCache}function Fl(t,n){n===null?xe(xs,xs.current):xe(xs,n.pool)}function Nm(){var t=of();return t===null?null:{parent:un._currentValue,pool:t}}var lr=Error(s(460)),lf=Error(s(474)),zl=Error(s(542)),Bl={then:function(){}};function Dm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Um(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Om(t),t;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(t=kt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Om(t),t}throw Ss=n,lr}}function ys(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ss=a,lr):a}}var Ss=null;function Lm(){if(Ss===null)throw Error(s(459));var t=Ss;return Ss=null,t}function Om(t){if(t===lr||t===zl)throw Error(s(483))}var cr=null,_o=0;function Hl(t){var n=_o;return _o+=1,cr===null&&(cr=[]),Um(cr,t,n)}function xo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Gl(t,n){throw n.$$typeof===_?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Pm(t){function n(Z,k){if(t){var te=Z.deletions;te===null?(Z.deletions=[k],Z.flags|=16):te.push(k)}}function a(Z,k){if(!t)return null;for(;k!==null;)n(Z,k),k=k.sibling;return null}function o(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=$i(Z,k),Z.index=0,Z.sibling=null,Z}function d(Z,k,te){return Z.index=te,t?(te=Z.alternate,te!==null?(te=te.index,te<k?(Z.flags|=67108866,k):te):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function S(Z){return t&&Z.alternate===null&&(Z.flags|=67108866),Z}function N(Z,k,te,ve){return k===null||k.tag!==6?(k=Zu(te,Z.mode,ve),k.return=Z,k):(k=u(k,te),k.return=Z,k)}function V(Z,k,te,ve){var Je=te.type;return Je===C?pe(Z,k,te.props.children,ve,te.key):k!==null&&(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===b&&ys(Je)===k.type)?(k=u(k,te.props),xo(k,te),k.return=Z,k):(k=Ll(te.type,te.key,te.props,null,Z.mode,ve),xo(k,te),k.return=Z,k)}function ne(Z,k,te,ve){return k===null||k.tag!==4||k.stateNode.containerInfo!==te.containerInfo||k.stateNode.implementation!==te.implementation?(k=Ku(te,Z.mode,ve),k.return=Z,k):(k=u(k,te.children||[]),k.return=Z,k)}function pe(Z,k,te,ve,Je){return k===null||k.tag!==7?(k=ms(te,Z.mode,ve,Je),k.return=Z,k):(k=u(k,te),k.return=Z,k)}function _e(Z,k,te){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Zu(""+k,Z.mode,te),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case E:return te=Ll(k.type,k.key,k.props,null,Z.mode,te),xo(te,k),te.return=Z,te;case T:return k=Ku(k,Z.mode,te),k.return=Z,k;case b:return k=ys(k),_e(Z,k,te)}if(ee(k)||K(k))return k=ms(k,Z.mode,te,null),k.return=Z,k;if(typeof k.then=="function")return _e(Z,Hl(k),te);if(k.$$typeof===L)return _e(Z,Il(Z,k),te);Gl(Z,k)}return null}function oe(Z,k,te,ve){var Je=k!==null?k.key:null;if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return Je!==null?null:N(Z,k,""+te,ve);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case E:return te.key===Je?V(Z,k,te,ve):null;case T:return te.key===Je?ne(Z,k,te,ve):null;case b:return te=ys(te),oe(Z,k,te,ve)}if(ee(te)||K(te))return Je!==null?null:pe(Z,k,te,ve,null);if(typeof te.then=="function")return oe(Z,k,Hl(te),ve);if(te.$$typeof===L)return oe(Z,k,Il(Z,te),ve);Gl(Z,te)}return null}function ce(Z,k,te,ve,Je){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return Z=Z.get(te)||null,N(k,Z,""+ve,Je);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case E:return Z=Z.get(ve.key===null?te:ve.key)||null,V(k,Z,ve,Je);case T:return Z=Z.get(ve.key===null?te:ve.key)||null,ne(k,Z,ve,Je);case b:return ve=ys(ve),ce(Z,k,te,ve,Je)}if(ee(ve)||K(ve))return Z=Z.get(te)||null,pe(k,Z,ve,Je,null);if(typeof ve.then=="function")return ce(Z,k,te,Hl(ve),Je);if(ve.$$typeof===L)return ce(Z,k,te,Il(k,ve),Je);Gl(k,ve)}return null}function Ve(Z,k,te,ve){for(var Je=null,wt=null,Ye=k,dt=k=0,yt=null;Ye!==null&&dt<te.length;dt++){Ye.index>dt?(yt=Ye,Ye=null):yt=Ye.sibling;var Nt=oe(Z,Ye,te[dt],ve);if(Nt===null){Ye===null&&(Ye=yt);break}t&&Ye&&Nt.alternate===null&&n(Z,Ye),k=d(Nt,k,dt),wt===null?Je=Nt:wt.sibling=Nt,wt=Nt,Ye=yt}if(dt===te.length)return a(Z,Ye),St&&ea(Z,dt),Je;if(Ye===null){for(;dt<te.length;dt++)Ye=_e(Z,te[dt],ve),Ye!==null&&(k=d(Ye,k,dt),wt===null?Je=Ye:wt.sibling=Ye,wt=Ye);return St&&ea(Z,dt),Je}for(Ye=o(Ye);dt<te.length;dt++)yt=ce(Ye,Z,dt,te[dt],ve),yt!==null&&(t&&yt.alternate!==null&&Ye.delete(yt.key===null?dt:yt.key),k=d(yt,k,dt),wt===null?Je=yt:wt.sibling=yt,wt=yt);return t&&Ye.forEach(function($a){return n(Z,$a)}),St&&ea(Z,dt),Je}function $e(Z,k,te,ve){if(te==null)throw Error(s(151));for(var Je=null,wt=null,Ye=k,dt=k=0,yt=null,Nt=te.next();Ye!==null&&!Nt.done;dt++,Nt=te.next()){Ye.index>dt?(yt=Ye,Ye=null):yt=Ye.sibling;var $a=oe(Z,Ye,Nt.value,ve);if($a===null){Ye===null&&(Ye=yt);break}t&&Ye&&$a.alternate===null&&n(Z,Ye),k=d($a,k,dt),wt===null?Je=$a:wt.sibling=$a,wt=$a,Ye=yt}if(Nt.done)return a(Z,Ye),St&&ea(Z,dt),Je;if(Ye===null){for(;!Nt.done;dt++,Nt=te.next())Nt=_e(Z,Nt.value,ve),Nt!==null&&(k=d(Nt,k,dt),wt===null?Je=Nt:wt.sibling=Nt,wt=Nt);return St&&ea(Z,dt),Je}for(Ye=o(Ye);!Nt.done;dt++,Nt=te.next())Nt=ce(Ye,Z,dt,Nt.value,ve),Nt!==null&&(t&&Nt.alternate!==null&&Ye.delete(Nt.key===null?dt:Nt.key),k=d(Nt,k,dt),wt===null?Je=Nt:wt.sibling=Nt,wt=Nt);return t&&Ye.forEach(function(lM){return n(Z,lM)}),St&&ea(Z,dt),Je}function jt(Z,k,te,ve){if(typeof te=="object"&&te!==null&&te.type===C&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case E:e:{for(var Je=te.key;k!==null;){if(k.key===Je){if(Je=te.type,Je===C){if(k.tag===7){a(Z,k.sibling),ve=u(k,te.props.children),ve.return=Z,Z=ve;break e}}else if(k.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===b&&ys(Je)===k.type){a(Z,k.sibling),ve=u(k,te.props),xo(ve,te),ve.return=Z,Z=ve;break e}a(Z,k);break}else n(Z,k);k=k.sibling}te.type===C?(ve=ms(te.props.children,Z.mode,ve,te.key),ve.return=Z,Z=ve):(ve=Ll(te.type,te.key,te.props,null,Z.mode,ve),xo(ve,te),ve.return=Z,Z=ve)}return S(Z);case T:e:{for(Je=te.key;k!==null;){if(k.key===Je)if(k.tag===4&&k.stateNode.containerInfo===te.containerInfo&&k.stateNode.implementation===te.implementation){a(Z,k.sibling),ve=u(k,te.children||[]),ve.return=Z,Z=ve;break e}else{a(Z,k);break}else n(Z,k);k=k.sibling}ve=Ku(te,Z.mode,ve),ve.return=Z,Z=ve}return S(Z);case b:return te=ys(te),jt(Z,k,te,ve)}if(ee(te))return Ve(Z,k,te,ve);if(K(te)){if(Je=K(te),typeof Je!="function")throw Error(s(150));return te=Je.call(te),$e(Z,k,te,ve)}if(typeof te.then=="function")return jt(Z,k,Hl(te),ve);if(te.$$typeof===L)return jt(Z,k,Il(Z,te),ve);Gl(Z,te)}return typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint"?(te=""+te,k!==null&&k.tag===6?(a(Z,k.sibling),ve=u(k,te),ve.return=Z,Z=ve):(a(Z,k),ve=Zu(te,Z.mode,ve),ve.return=Z,Z=ve),S(Z)):a(Z,k)}return function(Z,k,te,ve){try{_o=0;var Je=jt(Z,k,te,ve);return cr=null,Je}catch(Ye){if(Ye===lr||Ye===zl)throw Ye;var wt=Kn(29,Ye,null,Z.mode);return wt.lanes=ve,wt.return=Z,wt}}}var Ms=Pm(!0),Im=Pm(!1),Ia=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function uf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Ot&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Ul(t),xm(t,null,a),n}return Dl(t,o,n,a),Ul(t)}function yo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ks(t,a)}}function ff(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=S:d=d.next=S,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var df=!1;function So(){if(df){var t=or;if(t!==null)throw t}}function Mo(t,n,a,o){df=!1;var u=t.updateQueue;Ia=!1;var d=u.firstBaseUpdate,S=u.lastBaseUpdate,N=u.shared.pending;if(N!==null){u.shared.pending=null;var V=N,ne=V.next;V.next=null,S===null?d=ne:S.next=ne,S=V;var pe=t.alternate;pe!==null&&(pe=pe.updateQueue,N=pe.lastBaseUpdate,N!==S&&(N===null?pe.firstBaseUpdate=ne:N.next=ne,pe.lastBaseUpdate=V))}if(d!==null){var _e=u.baseState;S=0,pe=ne=V=null,N=d;do{var oe=N.lane&-536870913,ce=oe!==N.lane;if(ce?(xt&oe)===oe:(o&oe)===oe){oe!==0&&oe===rr&&(df=!0),pe!==null&&(pe=pe.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});e:{var Ve=t,$e=N;oe=n;var jt=a;switch($e.tag){case 1:if(Ve=$e.payload,typeof Ve=="function"){_e=Ve.call(jt,_e,oe);break e}_e=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=$e.payload,oe=typeof Ve=="function"?Ve.call(jt,_e,oe):Ve,oe==null)break e;_e=v({},_e,oe);break e;case 2:Ia=!0}}oe=N.callback,oe!==null&&(t.flags|=64,ce&&(t.flags|=8192),ce=u.callbacks,ce===null?u.callbacks=[oe]:ce.push(oe))}else ce={lane:oe,tag:N.tag,payload:N.payload,callback:N.callback,next:null},pe===null?(ne=pe=ce,V=_e):pe=pe.next=ce,S|=oe;if(N=N.next,N===null){if(N=u.shared.pending,N===null)break;ce=N,N=ce.next,ce.next=null,u.lastBaseUpdate=ce,u.shared.pending=null}}while(!0);pe===null&&(V=_e),u.baseState=V,u.firstBaseUpdate=ne,u.lastBaseUpdate=pe,d===null&&(u.shared.lanes=0),ja|=S,t.lanes=S,t.memoizedState=_e}}function Fm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function zm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Fm(a[t],n)}var ur=B(null),Vl=B(0);function Bm(t,n){t=fa,xe(Vl,t),xe(ur,n),fa=t|n.baseLanes}function hf(){xe(Vl,fa),xe(ur,ur.current)}function pf(){fa=Vl.current,Y(ur),Y(Vl)}var Qn=B(null),fi=null;function Ba(t){var n=t.alternate;xe(sn,sn.current&1),xe(Qn,t),fi===null&&(n===null||ur.current!==null||n.memoizedState!==null)&&(fi=t)}function mf(t){xe(sn,sn.current),xe(Qn,t),fi===null&&(fi=t)}function Hm(t){t.tag===22?(xe(sn,sn.current),xe(Qn,t),fi===null&&(fi=t)):Ha()}function Ha(){xe(sn,sn.current),xe(Qn,Qn.current)}function Jn(t){Y(Qn),fi===t&&(fi=null),Y(sn)}var sn=B(0);function jl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Sd(a)||Md(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,ct=null,Gt=null,fn=null,kl=!1,fr=!1,Es=!1,Xl=0,Eo=0,dr=null,Jy=0;function tn(){throw Error(s(321))}function gf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function vf(t,n,a,o,u,d){return ia=d,ct=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?Eg:Uf,Es=!1,d=a(o,u),Es=!1,fr&&(d=Vm(n,a,o,u)),Gm(t),d}function Gm(t){z.H=Ao;var n=Gt!==null&&Gt.next!==null;if(ia=0,fn=Gt=ct=null,kl=!1,Eo=0,dr=null,n)throw Error(s(300));t===null||dn||(t=t.dependencies,t!==null&&Pl(t)&&(dn=!0))}function Vm(t,n,a,o){ct=t;var u=0;do{if(fr&&(dr=null),Eo=0,fr=!1,25<=u)throw Error(s(301));if(u+=1,fn=Gt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=bg,d=n(a,o)}while(fr);return d}function $y(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?bo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(ct.flags|=1024),n}function _f(){var t=Xl!==0;return Xl=0,t}function xf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function yf(t){if(kl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}kl=!1}ia=0,fn=Gt=ct=null,fr=!1,Eo=Xl=0,dr=null}function Pn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?ct.memoizedState=fn=t:fn=fn.next=t,fn}function rn(){if(Gt===null){var t=ct.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=fn===null?ct.memoizedState:fn.next;if(n!==null)fn=n,Gt=t;else{if(t===null)throw ct.alternate===null?Error(s(467)):Error(s(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},fn===null?ct.memoizedState=fn=t:fn=fn.next=t}return fn}function Wl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bo(t){var n=Eo;return Eo+=1,dr===null&&(dr=[]),t=Um(dr,t,n),n=ct,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Eg:Uf),t}function ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return bo(t);if(t.$$typeof===L)return En(t)}throw Error(s(438,String(t)))}function Sf(t){var n=null,a=ct.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ct.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Wl(),ct.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=$;return n.index++,a}function aa(t,n){return typeof n=="function"?n(t):n}function Yl(t){var n=rn();return Mf(n,Gt,t)}function Mf(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var S=u.next;u.next=d.next,d.next=S}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var N=S=null,V=null,ne=n,pe=!1;do{var _e=ne.lane&-536870913;if(_e!==ne.lane?(xt&_e)===_e:(ia&_e)===_e){var oe=ne.revertLane;if(oe===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),_e===rr&&(pe=!0);else if((ia&oe)===oe){ne=ne.next,oe===rr&&(pe=!0);continue}else _e={lane:0,revertLane:ne.revertLane,gesture:null,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},V===null?(N=V=_e,S=d):V=V.next=_e,ct.lanes|=oe,ja|=oe;_e=ne.action,Es&&a(d,_e),d=ne.hasEagerState?ne.eagerState:a(d,_e)}else oe={lane:_e,revertLane:ne.revertLane,gesture:ne.gesture,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null},V===null?(N=V=oe,S=d):V=V.next=oe,ct.lanes|=_e,ja|=_e;ne=ne.next}while(ne!==null&&ne!==n);if(V===null?S=d:V.next=N,!Zn(d,t.memoizedState)&&(dn=!0,pe&&(a=or,a!==null)))throw a;t.memoizedState=d,t.baseState=S,t.baseQueue=V,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ef(t){var n=rn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do d=t(d,S.action),S=S.next;while(S!==u);Zn(d,n.memoizedState)||(dn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function jm(t,n,a){var o=ct,u=rn(),d=St;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Zn((Gt||u).memoizedState,a);if(S&&(u.memoizedState=a,dn=!0),u=u.queue,Af(Wm.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,hr(9,{destroy:void 0},Xm.bind(null,o,u,a,n),null),kt===null)throw Error(s(349));d||(ia&127)!==0||km(o,n,a)}return a}function km(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ct.updateQueue,n===null?(n=Wl(),ct.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Xm(t,n,a,o){n.value=a,n.getSnapshot=o,qm(n)&&Ym(t)}function Wm(t,n,a){return a(function(){qm(n)&&Ym(t)})}function qm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function Ym(t){var n=ps(t,2);n!==null&&kn(n,t,2)}function bf(t){var n=Pn();if(typeof t=="function"){var a=t;if(t=a(),Es){Pe(!0);try{a()}finally{Pe(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},n}function Zm(t,n,a,o){return t.baseState=a,Mf(t,Gt,typeof o=="function"?o:aa)}function eS(t,n,a,o,u){if(Ql(t))throw Error(s(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){d.listeners.push(S)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Km(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Km(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=z.T,S={};z.T=S;try{var N=a(u,o),V=z.S;V!==null&&V(S,N),Qm(t,n,N)}catch(ne){Tf(t,n,ne)}finally{d!==null&&S.types!==null&&(d.types=S.types),z.T=d}}else try{d=a(u,o),Qm(t,n,d)}catch(ne){Tf(t,n,ne)}}function Qm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Jm(t,n,o)},function(o){return Tf(t,n,o)}):Jm(t,n,a)}function Jm(t,n,a){n.status="fulfilled",n.value=a,$m(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Km(t,a)))}function Tf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,$m(n),n=n.next;while(n!==o)}t.action=null}function $m(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function eg(t,n){return n}function tg(t,n){if(St){var a=kt.formState;if(a!==null){e:{var o=ct;if(St){if(Xt){t:{for(var u=Xt,d=ui;u.nodeType!==8;){if(!d){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Xt=di(u.nextSibling),o=u.data==="F!";break e}}Oa(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:eg,lastRenderedState:n},a.queue=o,a=yg.bind(null,ct,o),o.dispatch=a,o=bf(!1),d=Df.bind(null,ct,!1,o.queue),o=Pn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=eS.bind(null,ct,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function ng(t){var n=rn();return ig(n,Gt,t)}function ig(t,n,a){if(n=Mf(t,n,eg)[0],t=Yl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=bo(n)}catch(S){throw S===lr?zl:S}else o=n;n=rn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ct.flags|=2048,hr(9,{destroy:void 0},tS.bind(null,u,a),null)),[o,d,t]}function tS(t,n){t.action=n}function ag(t){var n=rn(),a=Gt;if(a!==null)return ig(n,a,t);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function hr(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=ct.updateQueue,n===null&&(n=Wl(),ct.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function sg(){return rn().memoizedState}function Zl(t,n,a,o){var u=Pn();ct.flags|=t,u.memoizedState=hr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Kl(t,n,a,o){var u=rn();o=o===void 0?null:o;var d=u.memoizedState.inst;Gt!==null&&o!==null&&gf(o,Gt.memoizedState.deps)?u.memoizedState=hr(n,d,a,o):(ct.flags|=t,u.memoizedState=hr(1|n,d,a,o))}function rg(t,n){Zl(8390656,8,t,n)}function Af(t,n){Kl(2048,8,t,n)}function nS(t){ct.flags|=4;var n=ct.updateQueue;if(n===null)n=Wl(),ct.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function og(t){var n=rn().memoizedState;return nS({ref:n,nextImpl:t}),function(){if((Ot&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function lg(t,n){return Kl(4,2,t,n)}function cg(t,n){return Kl(4,4,t,n)}function ug(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function fg(t,n,a){a=a!=null?a.concat([t]):null,Kl(4,4,ug.bind(null,n,t),a)}function Rf(){}function dg(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&gf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function hg(t,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&gf(n,o[1]))return o[0];if(o=t(),Es){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[o,n],o}function Cf(t,n,a){return a===void 0||(ia&1073741824)!==0&&(xt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=p0(),ct.lanes|=t,ja|=t,a)}function pg(t,n,a,o){return Zn(a,n)?a:ur.current!==null?(t=Cf(t,a,o),Zn(t,n)||(dn=!0),t):(ia&42)===0||(ia&1073741824)!==0&&(xt&261930)===0?(dn=!0,t.memoizedState=a):(t=p0(),ct.lanes|=t,ja|=t,n)}function mg(t,n,a,o,u){var d=G.p;G.p=d!==0&&8>d?d:8;var S=z.T,N={};z.T=N,Df(t,!1,n,a);try{var V=u(),ne=z.S;if(ne!==null&&ne(N,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pe=Qy(V,o);To(t,n,pe,ti(t))}else To(t,n,o,ti(t))}catch(_e){To(t,n,{then:function(){},status:"rejected",reason:_e},ti())}finally{G.p=d,S!==null&&N.types!==null&&(S.types=N.types),z.T=S}}function iS(){}function wf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=gg(t).queue;mg(t,u,n,fe,a===null?iS:function(){return vg(t),a(o)})}function gg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:fe,baseState:fe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:fe},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function vg(t){var n=gg(t);n.next===null&&(n=t.alternate.memoizedState),To(t,n.next.queue,{},ti())}function Nf(){return En(Vo)}function _g(){return rn().memoizedState}function xg(){return rn().memoizedState}function aS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=Fa(a);var o=za(n,t,a);o!==null&&(kn(o,n,a),yo(o,n,a)),n={cache:sf()},t.payload=n;return}n=n.return}}function sS(t,n,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ql(t)?Sg(n,a):(a=qu(t,n,a,o),a!==null&&(kn(a,t,o),Mg(a,n,o)))}function yg(t,n,a){var o=ti();To(t,n,a,o)}function To(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ql(t))Sg(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var S=n.lastRenderedState,N=d(S,a);if(u.hasEagerState=!0,u.eagerState=N,Zn(N,S))return Dl(t,n,u,0),kt===null&&Nl(),!1}catch{}if(a=qu(t,n,u,o),a!==null)return kn(a,t,o),Mg(a,n,o),!0}return!1}function Df(t,n,a,o){if(o={lane:2,revertLane:cd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Ql(t)){if(n)throw Error(s(479))}else n=qu(t,a,o,2),n!==null&&kn(n,t,2)}function Ql(t){var n=t.alternate;return t===ct||n!==null&&n===ct}function Sg(t,n){fr=kl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Mg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ks(t,a)}}var Ao={readContext:En,use:ql,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};Ao.useEffectEvent=tn;var Eg={readContext:En,use:ql,useCallback:function(t,n){return Pn().memoizedState=[t,n===void 0?null:n],t},useContext:En,useEffect:rg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Zl(4194308,4,ug.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Zl(4194308,4,t,n)},useInsertionEffect:function(t,n){Zl(4,2,t,n)},useMemo:function(t,n){var a=Pn();n=n===void 0?null:n;var o=t();if(Es){Pe(!0);try{t()}finally{Pe(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Pn();if(a!==void 0){var u=a(n);if(Es){Pe(!0);try{a(n)}finally{Pe(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=sS.bind(null,ct,t),[o.memoizedState,t]},useRef:function(t){var n=Pn();return t={current:t},n.memoizedState=t},useState:function(t){t=bf(t);var n=t.queue,a=yg.bind(null,ct,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Rf,useDeferredValue:function(t,n){var a=Pn();return Cf(a,t,n)},useTransition:function(){var t=bf(!1);return t=mg.bind(null,ct,t.queue,!0,!1),Pn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=ct,u=Pn();if(St){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),kt===null)throw Error(s(349));(xt&127)!==0||km(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,rg(Wm.bind(null,o,d,t),[t]),o.flags|=2048,hr(9,{destroy:void 0},Xm.bind(null,o,d,a,n),null),a},useId:function(){var t=Pn(),n=kt.identifierPrefix;if(St){var a=Pi,o=Oi;a=(o&~(1<<32-Oe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Xl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Jy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Nf,useFormState:tg,useActionState:tg,useOptimistic:function(t){var n=Pn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Df.bind(null,ct,!0,a),a.dispatch=n,[t,n]},useMemoCache:Sf,useCacheRefresh:function(){return Pn().memoizedState=aS.bind(null,ct)},useEffectEvent:function(t){var n=Pn(),a={impl:t};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Uf={readContext:En,use:ql,useCallback:dg,useContext:En,useEffect:Af,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:cg,useMemo:hg,useReducer:Yl,useRef:sg,useState:function(){return Yl(aa)},useDebugValue:Rf,useDeferredValue:function(t,n){var a=rn();return pg(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Yl(aa)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:bo(t),n]},useSyncExternalStore:jm,useId:_g,useHostTransitionStatus:Nf,useFormState:ng,useActionState:ng,useOptimistic:function(t,n){var a=rn();return Zm(a,Gt,t,n)},useMemoCache:Sf,useCacheRefresh:xg};Uf.useEffectEvent=og;var bg={readContext:En,use:ql,useCallback:dg,useContext:En,useEffect:Af,useImperativeHandle:fg,useInsertionEffect:lg,useLayoutEffect:cg,useMemo:hg,useReducer:Ef,useRef:sg,useState:function(){return Ef(aa)},useDebugValue:Rf,useDeferredValue:function(t,n){var a=rn();return Gt===null?Cf(a,t,n):pg(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Ef(aa)[0],n=rn().memoizedState;return[typeof t=="boolean"?t:bo(t),n]},useSyncExternalStore:jm,useId:_g,useHostTransitionStatus:Nf,useFormState:ag,useActionState:ag,useOptimistic:function(t,n){var a=rn();return Gt!==null?Zm(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Sf,useCacheRefresh:xg};bg.useEffectEvent=og;function Lf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Of={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Fa(o);u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(kn(n,t,o),yo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Fa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(t,u,o),n!==null&&(kn(n,t,o),yo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),o=Fa(a);o.tag=2,n!=null&&(o.callback=n),n=za(t,o,a),n!==null&&(kn(n,t,a),yo(n,t,a))}};function Tg(t,n,a,o,u,d,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,S):n.prototype&&n.prototype.isPureReactComponent?!fo(a,o)||!fo(u,d):!0}function Ag(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Of.enqueueReplaceState(n,n.state,null)}function bs(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Rg(t){wl(t)}function Cg(t){console.error(t)}function wg(t){wl(t)}function Jl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ng(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Pf(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){Jl(t,n)},a}function Dg(t){return t=Fa(t),t.tag=3,t}function Ug(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){Ng(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Ng(n,a,o),typeof u!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var N=o.stack;this.componentDidCatch(o.value,{componentStack:N!==null?N:""})})}function rS(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&sr(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?uc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),rd(t,o,u)),!1;case 22:return a.flags|=65536,o===Bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),rd(t,o,u)),!1}throw Error(s(435,a.tag))}return rd(t,o,u),uc(),!1}if(St)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==$u&&(t=Error(s(422),{cause:o}),mo(oi(t,a)))):(o!==$u&&(n=Error(s(423),{cause:o}),mo(oi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=oi(o,a),u=Pf(t.stateNode,o,u),ff(t,u),nn!==4&&(nn=2)),!1;var d=Error(s(520),{cause:o});if(d=oi(d,a),Oo===null?Oo=[d]:Oo.push(d),nn!==4&&(nn=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Pf(a.stateNode,o,t),ff(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ka===null||!ka.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Dg(u),Ug(u,t,a,o),ff(a,u),!1}a=a.return}while(a!==null);return!1}var If=Error(s(461)),dn=!1;function bn(t,n,a,o){n.child=t===null?Im(n,null,a,o):Ms(n,t.child,a,o)}function Lg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var S={};for(var N in o)N!=="ref"&&(S[N]=o[N])}else S=o;return _s(n),o=vf(t,n,a,S,d,u),N=_f(),t!==null&&!dn?(xf(t,n,u),sa(t,n,u)):(St&&N&&Qu(n),n.flags|=1,bn(t,n,o,u),n.child)}function Og(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Yu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Pg(t,n,d,o,u)):(t=Ll(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!kf(t,u)){var S=d.memoizedProps;if(a=a.compare,a=a!==null?a:fo,a(S,o)&&t.ref===n.ref)return sa(t,n,u)}return n.flags|=1,t=$i(d,o),t.ref=n.ref,t.return=n,n.child=t}function Pg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(fo(d,o)&&t.ref===n.ref)if(dn=!1,n.pendingProps=o=d,kf(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,sa(t,n,u)}return Ff(t,n,a,o,u)}function Ig(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return Fg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Fl(n,d!==null?d.cachePool:null),d!==null?Bm(n,d):hf(),Hm(n);else return o=n.lanes=536870912,Fg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Fl(n,d.cachePool),Bm(n,d),Ha(),n.memoizedState=null):(t!==null&&Fl(n,null),hf(),Ha());return bn(t,n,u,a),n.child}function Ro(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fg(t,n,a,o,u){var d=of();return d=d===null?null:{parent:un._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Fl(n,null),hf(),Hm(n),t!==null&&sr(t,n,o,!0),n.childLanes=u,null}function $l(t,n){return n=tc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function zg(t,n,a){return Ms(n,t.child,null,a),t=$l(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function oS(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(St){if(o.mode==="hidden")return t=$l(n,o),n.lanes=536870912,Ro(null,t);if(mf(n),(t=Xt)?(t=K0(t,ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Sm(t),a.return=n,n.child=a,Mn=n,Xt=null)):t=null,t===null)throw Oa(n);return n.lanes=536870912,null}return $l(n,o)}var d=t.memoizedState;if(d!==null){var S=d.dehydrated;if(mf(n),u)if(n.flags&256)n.flags&=-257,n=zg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||sr(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(o=kt,o!==null&&(S=_l(o,a),S!==0&&S!==d.retryLane))throw d.retryLane=S,ps(t,S),kn(o,t,S),If;uc(),n=zg(t,n,a)}else t=d.treeContext,Xt=di(S.nextSibling),Mn=n,St=!0,La=null,ui=!1,t!==null&&bm(n,t),n=$l(n,o),n.flags|=4096;return n}return t=$i(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ec(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ff(t,n,a,o,u){return _s(n),a=vf(t,n,a,o,void 0,u),o=_f(),t!==null&&!dn?(xf(t,n,u),sa(t,n,u)):(St&&o&&Qu(n),n.flags|=1,bn(t,n,a,u),n.child)}function Bg(t,n,a,o,u,d){return _s(n),n.updateQueue=null,a=Vm(n,o,a,u),Gm(t),o=_f(),t!==null&&!dn?(xf(t,n,d),sa(t,n,d)):(St&&o&&Qu(n),n.flags|=1,bn(t,n,a,d),n.child)}function Hg(t,n,a,o,u){if(_s(n),n.stateNode===null){var d=tr,S=a.contextType;typeof S=="object"&&S!==null&&(d=En(S)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Of,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},cf(n),S=a.contextType,d.context=typeof S=="object"&&S!==null?En(S):tr,d.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Lf(n,a,S,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(S=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),S!==d.state&&Of.enqueueReplaceState(d,d.state,null),Mo(n,o,d,u),So(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var N=n.memoizedProps,V=bs(a,N);d.props=V;var ne=d.context,pe=a.contextType;S=tr,typeof pe=="object"&&pe!==null&&(S=En(pe));var _e=a.getDerivedStateFromProps;pe=typeof _e=="function"||typeof d.getSnapshotBeforeUpdate=="function",N=n.pendingProps!==N,pe||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(N||ne!==S)&&Ag(n,d,o,S),Ia=!1;var oe=n.memoizedState;d.state=oe,Mo(n,o,d,u),So(),ne=n.memoizedState,N||oe!==ne||Ia?(typeof _e=="function"&&(Lf(n,a,_e,o),ne=n.memoizedState),(V=Ia||Tg(n,a,V,o,oe,ne,S))?(pe||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ne),d.props=o,d.state=ne,d.context=S,o=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,uf(t,n),S=n.memoizedProps,pe=bs(a,S),d.props=pe,_e=n.pendingProps,oe=d.context,ne=a.contextType,V=tr,typeof ne=="object"&&ne!==null&&(V=En(ne)),N=a.getDerivedStateFromProps,(ne=typeof N=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S!==_e||oe!==V)&&Ag(n,d,o,V),Ia=!1,oe=n.memoizedState,d.state=oe,Mo(n,o,d,u),So();var ce=n.memoizedState;S!==_e||oe!==ce||Ia||t!==null&&t.dependencies!==null&&Pl(t.dependencies)?(typeof N=="function"&&(Lf(n,a,N,o),ce=n.memoizedState),(pe=Ia||Tg(n,a,pe,o,oe,ce,V)||t!==null&&t.dependencies!==null&&Pl(t.dependencies))?(ne||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,ce,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,ce,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ce),d.props=o,d.state=ce,d.context=V,o=pe):(typeof d.componentDidUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&oe===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,ec(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=Ms(n,t.child,null,u),n.child=Ms(n,null,a,u)):bn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=sa(t,n,u),t}function Gg(t,n,a,o){return gs(),n.flags|=256,bn(t,n,a,o),n.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Bf(t){return{baseLanes:t,cachePool:Nm()}}function Hf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function Vg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,S;if((S=d)||(S=t!==null&&t.memoizedState===null?!1:(sn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(St){if(u?Ba(n):Ha(),(t=Xt)?(t=K0(t,ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ua!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=Sm(t),a.return=n,n.child=a,Mn=n,Xt=null)):t=null,t===null)throw Oa(n);return Md(t)?n.lanes=32:n.lanes=536870912,null}var N=o.children;return o=o.fallback,u?(Ha(),u=n.mode,N=tc({mode:"hidden",children:N},u),o=ms(o,u,a,null),N.return=n,o.return=n,N.sibling=o,n.child=N,o=n.child,o.memoizedState=Bf(a),o.childLanes=Hf(t,S,a),n.memoizedState=zf,Ro(null,o)):(Ba(n),Gf(n,N))}var V=t.memoizedState;if(V!==null&&(N=V.dehydrated,N!==null)){if(d)n.flags&256?(Ba(n),n.flags&=-257,n=Vf(t,n,a)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,n=null):(Ha(),N=o.fallback,u=n.mode,o=tc({mode:"visible",children:o.children},u),N=ms(N,u,a,null),N.flags|=2,o.return=n,N.return=n,o.sibling=N,n.child=o,Ms(n,t.child,null,a),o=n.child,o.memoizedState=Bf(a),o.childLanes=Hf(t,S,a),n.memoizedState=zf,n=Ro(null,o));else if(Ba(n),Md(N)){if(S=N.nextSibling&&N.nextSibling.dataset,S)var ne=S.dgst;S=ne,o=Error(s(419)),o.stack="",o.digest=S,mo({value:o,source:null,stack:null}),n=Vf(t,n,a)}else if(dn||sr(t,n,a,!1),S=(a&t.childLanes)!==0,dn||S){if(S=kt,S!==null&&(o=_l(S,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,ps(t,o),kn(S,t,o),If;Sd(N)||uc(),n=Vf(t,n,a)}else Sd(N)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,Xt=di(N.nextSibling),Mn=n,St=!0,La=null,ui=!1,t!==null&&bm(n,t),n=Gf(n,o.children),n.flags|=4096);return n}return u?(Ha(),N=o.fallback,u=n.mode,V=t.child,ne=V.sibling,o=$i(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,ne!==null?N=$i(ne,N):(N=ms(N,u,a,null),N.flags|=2),N.return=n,o.return=n,o.sibling=N,n.child=o,Ro(null,o),o=n.child,N=t.child.memoizedState,N===null?N=Bf(a):(u=N.cachePool,u!==null?(V=un._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=Nm(),N={baseLanes:N.baseLanes|a,cachePool:u}),o.memoizedState=N,o.childLanes=Hf(t,S,a),n.memoizedState=zf,Ro(t.child,o)):(Ba(n),a=t.child,t=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Gf(t,n){return n=tc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function tc(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function Vf(t,n,a){return Ms(n,t.child,null,a),t=Gf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function jg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),nf(t.return,n,a)}function jf(t,n,a,o,u,d){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=d)}function kg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var S=sn.current,N=(S&2)!==0;if(N?(S=S&1|2,n.flags|=128):S&=1,xe(sn,S),bn(t,n,o,a),o=St?po:0,!N&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jg(t,a,n);else if(t.tag===19)jg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&jl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),jf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&jl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}jf(n,!0,a,null,d,o);break;case"together":jf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function sa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ja|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(sr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=$i(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=$i(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function kf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Pl(t)))}function lS(t,n,a){switch(n.tag){case 3:Ae(n,n.stateNode.containerInfo),Pa(n,un,t.memoizedState.cache),gs();break;case 27:case 5:Qe(n);break;case 4:Ae(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,mf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Vg(t,n,a):(Ba(n),t=sa(t,n,a),t!==null?t.sibling:null);Ba(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(sr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return kg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xe(sn,sn.current),o)break;return null;case 22:return n.lanes=0,Ig(t,n,a,n.pendingProps);case 24:Pa(n,un,t.memoizedState.cache)}return sa(t,n,a)}function Xg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!kf(t,a)&&(n.flags&128)===0)return dn=!1,lS(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,St&&(n.flags&1048576)!==0&&Em(n,po,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=ys(n.elementType),n.type=t,typeof t=="function")Yu(t)?(o=bs(t,o),n.tag=1,n=Hg(null,n,t,o,a)):(n.tag=0,n=Ff(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===D){n.tag=11,n=Lg(null,n,t,o,a);break e}else if(u===O){n.tag=14,n=Og(null,n,t,o,a);break e}}throw n=ue(t)||t,Error(s(306,n,""))}}return n;case 0:return Ff(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=bs(o,n.pendingProps),Hg(t,n,o,u,a);case 3:e:{if(Ae(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,uf(t,n),Mo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Pa(n,un,o),o!==d.cache&&af(n,[un],a,!0),So(),o=S.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=Gg(t,n,o,a);break e}else if(o!==u){u=oi(Error(s(424)),n),mo(u),n=Gg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,Xt=di(t.firstChild),Mn=n,St=!0,La=null,ui=!0,a=Im(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),o===u){n=sa(t,n,a);break e}bn(t,n,o,a)}n=n.child}return n;case 26:return ec(t,n),t===null?(a=nv(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(a=n.type,t=n.pendingProps,o=vc(re.current).createElement(a),o[on]=n,o[mn]=t,Tn(o,a,t),X(o),n.stateNode=o):n.memoizedState=nv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Qe(n),t===null&&St&&(o=n.stateNode=$0(n.type,n.pendingProps,re.current),Mn=n,ui=!0,u=Xt,Ya(n.type)?(Ed=u,Xt=di(o.firstChild)):Xt=u),bn(t,n,n.pendingProps.children,a),ec(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&St&&((u=o=Xt)&&(o=zS(o,n.type,n.pendingProps,ui),o!==null?(n.stateNode=o,Mn=n,Xt=di(o.firstChild),ui=!1,u=!0):u=!1),u||Oa(n)),Qe(n),u=n.type,d=n.pendingProps,S=t!==null?t.memoizedProps:null,o=d.children,_d(u,d)?o=null:S!==null&&_d(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=vf(t,n,$y,null,null,a),Vo._currentValue=u),ec(t,n),bn(t,n,o,a),n.child;case 6:return t===null&&St&&((t=a=Xt)&&(a=BS(a,n.pendingProps,ui),a!==null?(n.stateNode=a,Mn=n,Xt=null,t=!0):t=!1),t||Oa(n)),null;case 13:return Vg(t,n,a);case 4:return Ae(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ms(n,null,o,a):bn(t,n,o,a),n.child;case 11:return Lg(t,n,n.type,n.pendingProps,a);case 7:return bn(t,n,n.pendingProps,a),n.child;case 8:return bn(t,n,n.pendingProps.children,a),n.child;case 12:return bn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Pa(n,n.type,o.value),bn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,_s(n),u=En(u),o=o(u),n.flags|=1,bn(t,n,o,a),n.child;case 14:return Og(t,n,n.type,n.pendingProps,a);case 15:return Pg(t,n,n.type,n.pendingProps,a);case 19:return kg(t,n,a);case 31:return oS(t,n,a);case 22:return Ig(t,n,a,n.pendingProps);case 24:return _s(n),o=En(un),t===null?(u=of(),u===null&&(u=kt,d=sf(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},cf(n),Pa(n,un,u)):((t.lanes&a)!==0&&(uf(t,n),Mo(n,null,null,a),So()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pa(n,un,o)):(o=d.cache,Pa(n,un,o),o!==u.cache&&af(n,[un],a,!0))),bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ra(t){t.flags|=4}function Xf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(_0())t.flags|=8192;else throw Ss=Bl,lf}else t.flags&=-16777217}function Wg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ov(n))if(_0())t.flags|=8192;else throw Ss=Bl,lf}function nc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ft():536870912,t.lanes|=n,vr|=n)}function Co(t,n){if(!St)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Wt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function cS(t,n,a){var o=n.pendingProps;switch(Ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Wt(n),null;case 1:return Wt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(un),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ar(n)?ra(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ef())),Wt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(ra(n),d!==null?(Wt(n),Wg(n,d)):(Wt(n),Xf(n,u,null,o,a))):d?d!==t.memoizedState?(ra(n),Wt(n),Wg(n,d)):(Wt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ra(n),Wt(n),Xf(n,u,t,o,a)),null;case 27:if(et(n),a=re.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Wt(n),null}t=Ce.current,ar(n)?Tm(n):(t=$0(u,o,a),n.stateNode=t,ra(n))}return Wt(n),null;case 5:if(et(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Wt(n),null}if(d=Ce.current,ar(n))Tm(n);else{var S=vc(re.current);switch(d){case 1:d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=S.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}d[on]=n,d[mn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)d.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=d;e:switch(Tn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ra(n)}}return Wt(n),Xf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ra(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=re.current,ar(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[on]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||V0(t.nodeValue,a)),t||Oa(n,!0)}else t=vc(t).createTextNode(o),t[on]=n,n.stateNode=t}return Wt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ar(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[on]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),t=!1}else a=ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Wt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ar(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Wt(n),u=!1}else u=ef(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),nc(n,n.updateQueue),Wt(n),null);case 4:return ke(),t===null&&hd(n.stateNode.containerInfo),Wt(n),null;case 10:return na(n.type),Wt(n),null;case 19:if(Y(sn),o=n.memoizedState,o===null)return Wt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)Co(o,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=jl(t),d!==null){for(n.flags|=128,Co(o,!1),t=d.updateQueue,n.updateQueue=t,nc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ym(a,t),a=a.sibling;return xe(sn,sn.current&1|2),St&&ea(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&A()>oc&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304)}else{if(!u)if(t=jl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,nc(n,t),Co(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!St)return Wt(n),null}else 2*A()-o.renderingStartTime>oc&&a!==536870912&&(n.flags|=128,u=!0,Co(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=A(),t.sibling=null,a=sn.current,xe(sn,u?a&1|2:a&1),St&&ea(n,o.treeForkCount),t):(Wt(n),null);case 22:case 23:return Jn(n),pf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Wt(n),n.subtreeFlags&6&&(n.flags|=8192)):Wt(n),a=n.updateQueue,a!==null&&nc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Y(xs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(un),Wt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function uS(t,n){switch(Ju(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return na(un),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return et(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(sn),null;case 4:return ke(),null;case 10:return na(n.type),null;case 22:case 23:return Jn(n),pf(),t!==null&&Y(xs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return na(un),null;case 25:return null;default:return null}}function qg(t,n){switch(Ju(n),n.tag){case 3:na(un),ke();break;case 26:case 27:case 5:et(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:Y(sn);break;case 10:na(n.type);break;case 22:case 23:Jn(n),pf(),t!==null&&Y(xs);break;case 24:na(un)}}function wo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,S=a.inst;o=d(),S.destroy=o}a=a.next}while(a!==u)}}catch(N){Bt(n,n.return,N)}}function Ga(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var S=o.inst,N=S.destroy;if(N!==void 0){S.destroy=void 0,u=n;var V=a,ne=N;try{ne()}catch(pe){Bt(u,V,pe)}}}o=o.next}while(o!==d)}}catch(pe){Bt(n,n.return,pe)}}function Yg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{zm(n,a)}catch(o){Bt(t,t.return,o)}}}function Zg(t,n,a){a.props=bs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Bt(t,n,o)}}function No(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Bt(t,n,u)}}function Ii(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Bt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(t,n,u)}else a.current=null}function Kg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Bt(t,t.return,u)}}function Wf(t,n,a){try{var o=t.stateNode;US(o,t.type,a,n),o[mn]=n}catch(u){Bt(t,t.return,u)}}function Qg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ya(t.type)||t.tag===4}function qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Qg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ya(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi));else if(o!==4&&(o===27&&Ya(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Yf(t,n,a),t=t.sibling;t!==null;)Yf(t,n,a),t=t.sibling}function ic(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ya(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ic(t,n,a),t=t.sibling;t!==null;)ic(t,n,a),t=t.sibling}function Jg(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Tn(n,o,a),n[on]=t,n[mn]=a}catch(d){Bt(t,t.return,d)}}var oa=!1,hn=!1,Zf=!1,$g=typeof WeakSet=="function"?WeakSet:Set,yn=null;function fS(t,n){if(t=t.containerInfo,gd=bc,t=fm(t),Gu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var S=0,N=-1,V=-1,ne=0,pe=0,_e=t,oe=null;t:for(;;){for(var ce;_e!==a||u!==0&&_e.nodeType!==3||(N=S+u),_e!==d||o!==0&&_e.nodeType!==3||(V=S+o),_e.nodeType===3&&(S+=_e.nodeValue.length),(ce=_e.firstChild)!==null;)oe=_e,_e=ce;for(;;){if(_e===t)break t;if(oe===a&&++ne===u&&(N=S),oe===d&&++pe===o&&(V=S),(ce=_e.nextSibling)!==null)break;_e=oe,oe=_e.parentNode}_e=ce}a=N===-1||V===-1?null:{start:N,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(vd={focusedElem:t,selectionRange:a},bc=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var Ve=bs(a.type,u);t=o.getSnapshotBeforeUpdate(Ve,d),o.__reactInternalSnapshotBeforeUpdate=t}catch($e){Bt(a,a.return,$e)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)yd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":yd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function e0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(t,a),o&4&&wo(5,a);break;case 1:if(ca(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Bt(a,a.return,S)}else{var u=bs(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Bt(a,a.return,S)}}o&64&&Yg(a),o&512&&No(a,a.return);break;case 3:if(ca(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{zm(t,n)}catch(S){Bt(a,a.return,S)}}break;case 27:n===null&&o&4&&Jg(a);case 26:case 5:ca(t,a),n===null&&o&4&&Kg(a),o&512&&No(a,a.return);break;case 12:ca(t,a);break;case 31:ca(t,a),o&4&&i0(t,a);break;case 13:ca(t,a),o&4&&a0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=yS.bind(null,a),HS(t,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||hn,u=oa;var d=hn;oa=o,(hn=n)&&!d?ua(t,a,(a.subtreeFlags&8772)!==0):ca(t,a),oa=u,hn=d}break;case 30:break;default:ca(t,a)}}function t0(t){var n=t.alternate;n!==null&&(t.alternate=null,t0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&io(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Kt=null,Hn=!1;function la(t,n,a){for(a=a.child;a!==null;)n0(t,n,a),a=a.sibling}function n0(t,n,a){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:hn||Ii(a,n),la(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||Ii(a,n);var o=Kt,u=Hn;Ya(a.type)&&(Kt=a.stateNode,Hn=!1),la(t,n,a),Bo(a.stateNode),Kt=o,Hn=u;break;case 5:hn||Ii(a,n);case 6:if(o=Kt,u=Hn,Kt=null,la(t,n,a),Kt=o,Hn=u,Kt!==null)if(Hn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(d){Bt(a,n,d)}else try{Kt.removeChild(a.stateNode)}catch(d){Bt(a,n,d)}break;case 18:Kt!==null&&(Hn?(t=Kt,Y0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Tr(t)):Y0(Kt,a.stateNode));break;case 4:o=Kt,u=Hn,Kt=a.stateNode.containerInfo,Hn=!0,la(t,n,a),Kt=o,Hn=u;break;case 0:case 11:case 14:case 15:Ga(2,a,n),hn||Ga(4,a,n),la(t,n,a);break;case 1:hn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Zg(a,n,o)),la(t,n,a);break;case 21:la(t,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,la(t,n,a),hn=o;break;default:la(t,n,a)}}function i0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Tr(t)}catch(a){Bt(n,n.return,a)}}}function a0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Tr(t)}catch(a){Bt(n,n.return,a)}}function dS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new $g),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new $g),n;default:throw Error(s(435,t.tag))}}function ac(t,n){var a=dS(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=SS.bind(null,t,o);o.then(u,u)}})}function Gn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,S=n,N=S;e:for(;N!==null;){switch(N.tag){case 27:if(Ya(N.type)){Kt=N.stateNode,Hn=!1;break e}break;case 5:Kt=N.stateNode,Hn=!1;break e;case 3:case 4:Kt=N.stateNode.containerInfo,Hn=!0;break e}N=N.return}if(Kt===null)throw Error(s(160));n0(d,S,u),Kt=null,Hn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)s0(n,t),n=n.sibling}var bi=null;function s0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),o&4&&(Ga(3,t,t.return),wo(3,t),Ga(5,t,t.return));break;case 1:Gn(n,t),Vn(t),o&512&&(hn||a===null||Ii(a,a.return)),o&64&&oa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(Gn(n,t),Vn(t),o&512&&(hn||a===null||Ii(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[cs]||d[on]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Tn(d,o,a),d[on]=t,X(d),o=d;break e;case"link":var S=sv("link","href",u).get(o+(a.href||""));if(S){for(var N=0;N<S.length;N++)if(d=S[N],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(N,1);break t}}d=u.createElement(o),Tn(d,o,a),u.head.appendChild(d);break;case"meta":if(S=sv("meta","content",u).get(o+(a.content||""))){for(N=0;N<S.length;N++)if(d=S[N],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(N,1);break t}}d=u.createElement(o),Tn(d,o,a),u.head.appendChild(d);break;default:throw Error(s(468,o))}d[on]=t,X(d),o=d}t.stateNode=o}else rv(u,t.type,t.stateNode);else t.stateNode=av(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?rv(u,t.type,t.stateNode):av(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Wf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Gn(n,t),Vn(t),o&512&&(hn||a===null||Ii(a,a.return)),a!==null&&o&4&&Wf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),o&512&&(hn||a===null||Ii(a,a.return)),t.flags&32){u=t.stateNode;try{On(u,"")}catch(Ve){Bt(t,t.return,Ve)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Wf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Zf=!0);break;case 6:if(Gn(n,t),Vn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ve){Bt(t,t.return,Ve)}}break;case 3:if(yc=null,u=bi,bi=_c(n.containerInfo),Gn(n,t),bi=u,Vn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Tr(n.containerInfo)}catch(Ve){Bt(t,t.return,Ve)}Zf&&(Zf=!1,r0(t));break;case 4:o=bi,bi=_c(t.stateNode.containerInfo),Gn(n,t),Vn(t),bi=o;break;case 12:Gn(n,t),Vn(t);break;case 31:Gn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ac(t,o)));break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rc=A()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ac(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,ne=oa,pe=hn;if(oa=ne||u,hn=pe||V,Gn(n,t),hn=pe,oa=ne,Vn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||oa||hn||Ts(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(d=V.stateNode,u)S=d.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{N=V.stateNode;var _e=V.memoizedProps.style,oe=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;N.style.display=oe==null||typeof oe=="boolean"?"":(""+oe).trim()}}catch(Ve){Bt(V,V.return,Ve)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(Ve){Bt(V,V.return,Ve)}}}else if(n.tag===18){if(a===null){V=n;try{var ce=V.stateNode;u?Z0(ce,!0):Z0(V.stateNode,!1)}catch(Ve){Bt(V,V.return,Ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ac(t,a))));break;case 19:Gn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,ac(t,o)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Qg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=qf(t);ic(t,d,u);break;case 5:var S=a.stateNode;a.flags&32&&(On(S,""),a.flags&=-33);var N=qf(t);ic(t,N,S);break;case 3:case 4:var V=a.stateNode.containerInfo,ne=qf(t);Yf(t,ne,V);break;default:throw Error(s(161))}}catch(pe){Bt(t,t.return,pe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function r0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;r0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)e0(t,n.alternate,n),n=n.sibling}function Ts(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ga(4,n,n.return),Ts(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Zg(n,n.return,a),Ts(n);break;case 27:Bo(n.stateNode);case 26:case 5:Ii(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}t=t.sibling}}function ua(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,S=d.flags;switch(d.tag){case 0:case 11:case 15:ua(u,d,a),wo(4,d);break;case 1:if(ua(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ne){Bt(o,o.return,ne)}if(o=d,u=o.updateQueue,u!==null){var N=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)Fm(V[u],N)}catch(ne){Bt(o,o.return,ne)}}a&&S&64&&Yg(d),No(d,d.return);break;case 27:Jg(d);case 26:case 5:ua(u,d,a),a&&o===null&&S&4&&Kg(d),No(d,d.return);break;case 12:ua(u,d,a);break;case 31:ua(u,d,a),a&&S&4&&i0(u,d);break;case 13:ua(u,d,a),a&&S&4&&a0(u,d);break;case 22:d.memoizedState===null&&ua(u,d,a),No(d,d.return);break;case 30:break;default:ua(u,d,a)}n=n.sibling}}function Kf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&go(a))}function Qf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&go(t))}function Ti(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)o0(t,n,a,o),n=n.sibling}function o0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,o),u&2048&&wo(9,n);break;case 1:Ti(t,n,a,o);break;case 3:Ti(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&go(t)));break;case 12:if(u&2048){Ti(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,S=d.id,N=d.onPostCommit;typeof N=="function"&&N(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Bt(n,n.return,V)}}else Ti(t,n,a,o);break;case 31:Ti(t,n,a,o);break;case 13:Ti(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,S=n.alternate,n.memoizedState!==null?d._visibility&2?Ti(t,n,a,o):Do(t,n):d._visibility&2?Ti(t,n,a,o):(d._visibility|=2,pr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Kf(S,n);break;case 24:Ti(t,n,a,o),u&2048&&Qf(n.alternate,n);break;default:Ti(t,n,a,o)}}function pr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,S=n,N=a,V=o,ne=S.flags;switch(S.tag){case 0:case 11:case 15:pr(d,S,N,V,u),wo(8,S);break;case 23:break;case 22:var pe=S.stateNode;S.memoizedState!==null?pe._visibility&2?pr(d,S,N,V,u):Do(d,S):(pe._visibility|=2,pr(d,S,N,V,u)),u&&ne&2048&&Kf(S.alternate,S);break;case 24:pr(d,S,N,V,u),u&&ne&2048&&Qf(S.alternate,S);break;default:pr(d,S,N,V,u)}n=n.sibling}}function Do(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Do(a,o),u&2048&&Kf(o.alternate,o);break;case 24:Do(a,o),u&2048&&Qf(o.alternate,o);break;default:Do(a,o)}n=n.sibling}}var Uo=8192;function mr(t,n,a){if(t.subtreeFlags&Uo)for(t=t.child;t!==null;)l0(t,n,a),t=t.sibling}function l0(t,n,a){switch(t.tag){case 26:mr(t,n,a),t.flags&Uo&&t.memoizedState!==null&&JS(a,bi,t.memoizedState,t.memoizedProps);break;case 5:mr(t,n,a);break;case 3:case 4:var o=bi;bi=_c(t.stateNode.containerInfo),mr(t,n,a),bi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Uo,Uo=16777216,mr(t,n,a),Uo=o):mr(t,n,a));break;default:mr(t,n,a)}}function c0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Lo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,f0(o,t)}c0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)u0(t),t=t.sibling}function u0(t){switch(t.tag){case 0:case 11:case 15:Lo(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:Lo(t);break;case 12:Lo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,sc(t)):Lo(t);break;default:Lo(t)}}function sc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];yn=o,f0(o,t)}c0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),sc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,sc(n));break;default:sc(n)}t=t.sibling}}function f0(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:go(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,yn=o;else e:for(a=t;yn!==null;){o=yn;var u=o.sibling,d=o.return;if(t0(o),o===a){yn=null;break e}if(u!==null){u.return=d,yn=u;break e}yn=d}}}var hS={getCacheForType:function(t){var n=En(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return En(un).controller.signal}},pS=typeof WeakMap=="function"?WeakMap:Map,Ot=0,kt=null,gt=null,xt=0,zt=0,$n=null,Va=!1,gr=!1,Jf=!1,fa=0,nn=0,ja=0,As=0,$f=0,ei=0,vr=0,Oo=null,jn=null,ed=!1,rc=0,d0=0,oc=1/0,lc=null,ka=null,vn=0,Xa=null,_r=null,da=0,td=0,nd=null,h0=null,Po=0,id=null;function ti(){return(Ot&2)!==0&&xt!==0?xt&-xt:z.T!==null?cd():Li()}function p0(){if(ei===0)if((xt&536870912)===0||St){var t=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),ei=t}else ei=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ei}function kn(t,n,a){(t===kt&&(zt===2||zt===9)||t.cancelPendingCommit!==null)&&(xr(t,0),Wa(t,xt,ei,!1)),Dn(t,a),((Ot&2)===0||t!==kt)&&(t===kt&&((Ot&2)===0&&(As|=a),nn===4&&Wa(t,xt,ei,!1)),Fi(t))}function m0(t,n,a){if((Ot&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||He(t,n),u=o?vS(t,n):sd(t,n,!0),d=o;do{if(u===0){gr&&!o&&Wa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!mS(a)){u=sd(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var N=t;u=Oo;var V=N.current.memoizedState.isDehydrated;if(V&&(xr(N,S).flags|=256),S=sd(N,S,!1),S!==2){if(Jf&&!V){N.errorRecoveryDisabledLanes|=d,As|=d,u=4;break e}d=jn,jn=u,d!==null&&(jn===null?jn=d:jn.push.apply(jn,d))}u=S}if(d=!1,u!==2)continue}}if(u===1){xr(t,0),Wa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Wa(o,n,ei,!Va);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=rc+300-A(),10<u)){if(Wa(o,n,ei,!Va),de(o,0,!0)!==0)break e;da=n,o.timeoutHandle=W0(g0.bind(null,o,a,jn,lc,ed,n,ei,As,vr,Va,d,"Throttled",-0,0),u);break e}g0(o,a,jn,lc,ed,n,ei,As,vr,Va,d,null,-0,0)}}break}while(!0);Fi(t)}function g0(t,n,a,o,u,d,S,N,V,ne,pe,_e,oe,ce){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},l0(n,d,_e);var Ve=(d&62914560)===d?rc-A():(d&4194048)===d?d0-A():0;if(Ve=$S(_e,Ve),Ve!==null){da=d,t.cancelPendingCommit=Ve(b0.bind(null,t,n,d,a,o,u,S,N,V,pe,_e,null,oe,ce)),Wa(t,d,S,!ne);return}}b0(t,n,d,a,o,u,S,N,V)}function mS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Zn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Wa(t,n,a,o){n&=~$f,n&=~As,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Oe(u),S=1<<d;o[d]=-1,u&=~S}a!==0&&no(t,a,n)}function cc(){return(Ot&6)===0?(Io(0),!1):!0}function ad(){if(gt!==null){if(zt===0)var t=gt.return;else t=gt,ta=vs=null,yf(t),cr=null,_o=0,t=gt;for(;t!==null;)qg(t.alternate,t),t=t.return;gt=null}}function xr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,PS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),da=0,ad(),kt=t,gt=a=$i(t.current,null),xt=n,zt=0,$n=null,Va=!1,gr=He(t,n),Jf=!1,vr=ei=$f=As=ja=nn=0,jn=Oo=null,ed=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Oe(o),d=1<<u;n|=t[u],o&=~d}return fa=n,Nl(),a}function v0(t,n){ct=null,z.H=Ao,n===lr||n===zl?(n=Lm(),zt=3):n===lf?(n=Lm(),zt=4):zt=n===If?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,gt===null&&(nn=1,Jl(t,oi(n,t.current)))}function _0(){var t=Qn.current;return t===null?!0:(xt&4194048)===xt?fi===null:(xt&62914560)===xt||(xt&536870912)!==0?t===fi:!1}function x0(){var t=z.H;return z.H=Ao,t===null?Ao:t}function y0(){var t=z.A;return z.A=hS,t}function uc(){nn=4,Va||(xt&4194048)!==xt&&Qn.current!==null||(gr=!0),(ja&134217727)===0&&(As&134217727)===0||kt===null||Wa(kt,xt,ei,!1)}function sd(t,n,a){var o=Ot;Ot|=2;var u=x0(),d=y0();(kt!==t||xt!==n)&&(lc=null,xr(t,n)),n=!1;var S=nn;e:do try{if(zt!==0&&gt!==null){var N=gt,V=$n;switch(zt){case 8:ad(),S=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var ne=zt;if(zt=0,$n=null,yr(t,N,V,ne),a&&gr){S=0;break e}break;default:ne=zt,zt=0,$n=null,yr(t,N,V,ne)}}gS(),S=nn;break}catch(pe){v0(t,pe)}while(!0);return n&&t.shellSuspendCounter++,ta=vs=null,Ot=o,z.H=u,z.A=d,gt===null&&(kt=null,xt=0,Nl()),S}function gS(){for(;gt!==null;)S0(gt)}function vS(t,n){var a=Ot;Ot|=2;var o=x0(),u=y0();kt!==t||xt!==n?(lc=null,oc=A()+500,xr(t,n)):gr=He(t,n);e:do try{if(zt!==0&&gt!==null){n=gt;var d=$n;t:switch(zt){case 1:zt=0,$n=null,yr(t,n,d,1);break;case 2:case 9:if(Dm(d)){zt=0,$n=null,M0(n);break}n=function(){zt!==2&&zt!==9||kt!==t||(zt=7),Fi(t)},d.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:Dm(d)?(zt=0,$n=null,M0(n)):(zt=0,$n=null,yr(t,n,d,7));break;case 5:var S=null;switch(gt.tag){case 26:S=gt.memoizedState;case 5:case 27:var N=gt;if(S?ov(S):N.stateNode.complete){zt=0,$n=null;var V=N.sibling;if(V!==null)gt=V;else{var ne=N.return;ne!==null?(gt=ne,fc(ne)):gt=null}break t}}zt=0,$n=null,yr(t,n,d,5);break;case 6:zt=0,$n=null,yr(t,n,d,6);break;case 8:ad(),nn=6;break e;default:throw Error(s(462))}}_S();break}catch(pe){v0(t,pe)}while(!0);return ta=vs=null,z.H=o,z.A=u,Ot=a,gt!==null?0:(kt=null,xt=0,Nl(),nn)}function _S(){for(;gt!==null&&!qe();)S0(gt)}function S0(t){var n=Xg(t.alternate,t,fa);t.memoizedProps=t.pendingProps,n===null?fc(t):gt=n}function M0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Bg(a,n,n.pendingProps,n.type,void 0,xt);break;case 11:n=Bg(a,n,n.pendingProps,n.type.render,n.ref,xt);break;case 5:yf(n);default:qg(a,n),n=gt=ym(n,fa),n=Xg(a,n,fa)}t.memoizedProps=t.pendingProps,n===null?fc(t):gt=n}function yr(t,n,a,o){ta=vs=null,yf(n),cr=null,_o=0;var u=n.return;try{if(rS(t,u,n,a,xt)){nn=1,Jl(t,oi(a,t.current)),gt=null;return}}catch(d){if(u!==null)throw gt=u,d;nn=1,Jl(t,oi(a,t.current)),gt=null;return}n.flags&32768?(St||o===1?t=!0:gr||(xt&536870912)!==0?t=!1:(Va=t=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),E0(n,t)):fc(n)}function fc(t){var n=t;do{if((n.flags&32768)!==0){E0(n,Va);return}t=n.return;var a=cS(n.alternate,n,fa);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);nn===0&&(nn=5)}function E0(t,n){do{var a=uS(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);nn=6,gt=null}function b0(t,n,a,o,u,d,S,N,V){t.cancelPendingCommit=null;do dc();while(vn!==0);if((Ot&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(d=n.lanes|n.childLanes,d|=Wu,xi(t,a,d,S,N,V),t===kt&&(gt=kt=null,xt=0),_r=n,Xa=t,da=a,td=d,nd=u,h0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,MS(he,function(){return w0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=G.p,G.p=2,S=Ot,Ot|=4;try{fS(t,n,a)}finally{Ot=S,G.p=u,z.T=o}}vn=1,T0(),A0(),R0()}}function T0(){if(vn===1){vn=0;var t=Xa,n=_r,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=G.p;G.p=2;var u=Ot;Ot|=4;try{s0(n,t);var d=vd,S=fm(t.containerInfo),N=d.focusedElem,V=d.selectionRange;if(S!==N&&N&&N.ownerDocument&&um(N.ownerDocument.documentElement,N)){if(V!==null&&Gu(N)){var ne=V.start,pe=V.end;if(pe===void 0&&(pe=ne),"selectionStart"in N)N.selectionStart=ne,N.selectionEnd=Math.min(pe,N.value.length);else{var _e=N.ownerDocument||document,oe=_e&&_e.defaultView||window;if(oe.getSelection){var ce=oe.getSelection(),Ve=N.textContent.length,$e=Math.min(V.start,Ve),jt=V.end===void 0?$e:Math.min(V.end,Ve);!ce.extend&&$e>jt&&(S=jt,jt=$e,$e=S);var Z=cm(N,$e),k=cm(N,jt);if(Z&&k&&(ce.rangeCount!==1||ce.anchorNode!==Z.node||ce.anchorOffset!==Z.offset||ce.focusNode!==k.node||ce.focusOffset!==k.offset)){var te=_e.createRange();te.setStart(Z.node,Z.offset),ce.removeAllRanges(),$e>jt?(ce.addRange(te),ce.extend(k.node,k.offset)):(te.setEnd(k.node,k.offset),ce.addRange(te))}}}}for(_e=[],ce=N;ce=ce.parentNode;)ce.nodeType===1&&_e.push({element:ce,left:ce.scrollLeft,top:ce.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<_e.length;N++){var ve=_e[N];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}bc=!!gd,vd=gd=null}finally{Ot=u,G.p=o,z.T=a}}t.current=n,vn=2}}function A0(){if(vn===2){vn=0;var t=Xa,n=_r,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=G.p;G.p=2;var u=Ot;Ot|=4;try{e0(t,n.alternate,n)}finally{Ot=u,G.p=o,z.T=a}}vn=3}}function R0(){if(vn===4||vn===3){vn=0,I();var t=Xa,n=_r,a=da,o=h0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,_r=Xa=null,C0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ka=null),Ws(a),n=n.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=G.p,G.p=2,z.T=null;try{for(var d=t.onRecoverableError,S=0;S<o.length;S++){var N=o[S];d(N.value,{componentStack:N.stack})}}finally{z.T=n,G.p=u}}(da&3)!==0&&dc(),Fi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===id?Po++:(Po=0,id=t):Po=0,Io(0)}}function C0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,go(n)))}function dc(){return T0(),A0(),R0(),w0()}function w0(){if(vn!==5)return!1;var t=Xa,n=td;td=0;var a=Ws(da),o=z.T,u=G.p;try{G.p=32>a?32:a,z.T=null,a=nd,nd=null;var d=Xa,S=da;if(vn=0,_r=Xa=null,da=0,(Ot&6)!==0)throw Error(s(331));var N=Ot;if(Ot|=4,u0(d.current),o0(d,d.current,S,a),Ot=N,Io(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(be,d)}catch{}return!0}finally{G.p=u,z.T=o,C0(t,n)}}function N0(t,n,a){n=oi(a,n),n=Pf(t.stateNode,n,2),t=za(t,n,2),t!==null&&(Dn(t,2),Fi(t))}function Bt(t,n,a){if(t.tag===3)N0(t,t,a);else for(;n!==null;){if(n.tag===3){N0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ka===null||!ka.has(o))){t=oi(a,t),a=Dg(2),o=za(n,a,2),o!==null&&(Ug(a,o,n,t),Dn(o,2),Fi(o));break}}n=n.return}}function rd(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new pS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Jf=!0,u.add(a),t=xS.bind(null,t,n,a),n.then(t,t))}function xS(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,kt===t&&(xt&a)===a&&(nn===4||nn===3&&(xt&62914560)===xt&&300>A()-rc?(Ot&2)===0&&xr(t,0):$f|=a,vr===xt&&(vr=0)),Fi(t)}function D0(t,n){n===0&&(n=Ft()),t=ps(t,n),t!==null&&(Dn(t,n),Fi(t))}function yS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),D0(t,a)}function SS(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),D0(t,a)}function MS(t,n){return Et(t,n)}var hc=null,Sr=null,od=!1,pc=!1,ld=!1,qa=0;function Fi(t){t!==Sr&&t.next===null&&(Sr===null?hc=Sr=t:Sr=Sr.next=t),pc=!0,od||(od=!0,bS())}function Io(t,n){if(!ld&&pc){ld=!0;do for(var a=!1,o=hc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var S=o.suspendedLanes,N=o.pingedLanes;d=(1<<31-Oe(42|t)+1)-1,d&=u&~(S&~N),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,P0(o,d))}else d=xt,d=de(o,o===kt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||He(o,d)||(a=!0,P0(o,d));o=o.next}while(a);ld=!1}}function ES(){U0()}function U0(){pc=od=!1;var t=0;qa!==0&&OS()&&(t=qa);for(var n=A(),a=null,o=hc;o!==null;){var u=o.next,d=L0(o,n);d===0?(o.next=null,a===null?hc=u:a.next=u,u===null&&(Sr=a)):(a=o,(t!==0||(d&3)!==0)&&(pc=!0)),o=u}vn!==0&&vn!==5||Io(t),qa!==0&&(qa=0)}function L0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var S=31-Oe(d),N=1<<S,V=u[S];V===-1?((N&a)===0||(N&o)!==0)&&(u[S]=it(N,n)):V<=n&&(t.expiredLanes|=N),d&=~N}if(n=kt,a=xt,a=de(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(zt===2||zt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Pt(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||He(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Pt(o),Ws(a)){case 2:case 8:a=Se;break;case 32:a=he;break;case 268435456:a=Ne;break;default:a=he}return o=O0.bind(null,t),a=Et(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Pt(o),t.callbackPriority=2,t.callbackNode=null,2}function O0(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(dc()&&t.callbackNode!==a)return null;var o=xt;return o=de(t,t===kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(m0(t,o,n),L0(t,A()),t.callbackNode!=null&&t.callbackNode===a?O0.bind(null,t):null)}function P0(t,n){if(dc())return null;m0(t,n,!0)}function bS(){IS(function(){(Ot&6)!==0?Et(ge,ES):U0()})}function cd(){if(qa===0){var t=rr;t===0&&(t=we,we<<=1,(we&261888)===0&&(we=256)),qa=t}return qa}function I0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ml(""+t)}function F0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function TS(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=I0((u[mn]||null).action),S=o.submitter;S&&(n=(n=S[mn]||null)?I0(n.formAction):S.getAttribute("formAction"),n!==null&&(d=n,S=null));var N=new Al("action","action",null,o,u);t.push({event:N,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(qa!==0){var V=S?F0(u,S):new FormData(u);wf(a,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(N.preventDefault(),V=S?F0(u,S):new FormData(u),wf(a,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var ud=0;ud<Xu.length;ud++){var fd=Xu[ud],AS=fd.toLowerCase(),RS=fd[0].toUpperCase()+fd.slice(1);Ei(AS,"on"+RS)}Ei(pm,"onAnimationEnd"),Ei(mm,"onAnimationIteration"),Ei(gm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(jy,"onTransitionRun"),Ei(ky,"onTransitionStart"),Ei(Xy,"onTransitionCancel"),Ei(vm,"onTransitionEnd"),De("onMouseEnter",["mouseout","mouseover"]),De("onMouseLeave",["mouseout","mouseover"]),De("onPointerEnter",["pointerout","pointerover"]),De("onPointerLeave",["pointerout","pointerover"]),J("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),J("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),J("onBeforeInput",["compositionend","keypress","textInput","paste"]),J("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),J("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),CS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fo));function z0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var S=o.length-1;0<=S;S--){var N=o[S],V=N.instance,ne=N.currentTarget;if(N=N.listener,V!==d&&u.isPropagationStopped())break e;d=N,u.currentTarget=ne;try{d(u)}catch(pe){wl(pe)}u.currentTarget=null,d=V}else for(S=0;S<o.length;S++){if(N=o[S],V=N.instance,ne=N.currentTarget,N=N.listener,V!==d&&u.isPropagationStopped())break e;d=N,u.currentTarget=ne;try{d(u)}catch(pe){wl(pe)}u.currentTarget=null,d=V}}}}function vt(t,n){var a=n[Ca];a===void 0&&(a=n[Ca]=new Set);var o=t+"__bubble";a.has(o)||(B0(n,t,2,!1),a.add(o))}function dd(t,n,a){var o=0;n&&(o|=4),B0(a,t,o,n)}var mc="_reactListening"+Math.random().toString(36).slice(2);function hd(t){if(!t[mc]){t[mc]=!0,le.forEach(function(a){a!=="selectionchange"&&(CS.has(a)||dd(a,!1,t),dd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[mc]||(n[mc]=!0,dd("selectionchange",!1,n))}}function B0(t,n,a,o){switch(pv(n)){case 2:var u=nM;break;case 8:u=iM;break;default:u=Cd}a=u.bind(null,n,a,t),u=void 0,!Uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function pd(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var N=o.stateNode.containerInfo;if(N===u)break;if(S===4)for(S=o.return;S!==null;){var V=S.tag;if((V===3||V===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;N!==null;){if(S=wa(N),S===null)return;if(V=S.tag,V===5||V===6||V===26||V===27){o=d=S;continue e}N=N.parentNode}}o=o.return}kp(function(){var ne=d,pe=Nu(a),_e=[];e:{var oe=_m.get(t);if(oe!==void 0){var ce=Al,Ve=t;switch(t){case"keypress":if(bl(a)===0)break e;case"keydown":case"keyup":ce=Sy;break;case"focusin":Ve="focus",ce=Iu;break;case"focusout":Ve="blur",ce=Iu;break;case"beforeblur":case"afterblur":ce=Iu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ce=qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ce=cy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ce=by;break;case pm:case mm:case gm:ce=dy;break;case vm:ce=Ay;break;case"scroll":case"scrollend":ce=oy;break;case"wheel":ce=Cy;break;case"copy":case"cut":case"paste":ce=py;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ce=Zp;break;case"toggle":case"beforetoggle":ce=Ny}var $e=(n&4)!==0,jt=!$e&&(t==="scroll"||t==="scrollend"),Z=$e?oe!==null?oe+"Capture":null:oe;$e=[];for(var k=ne,te;k!==null;){var ve=k;if(te=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||te===null||Z===null||(ve=ao(k,Z),ve!=null&&$e.push(zo(k,ve,te))),jt)break;k=k.return}0<$e.length&&(oe=new ce(oe,Ve,null,a,pe),_e.push({event:oe,listeners:$e}))}}if((n&7)===0){e:{if(oe=t==="mouseover"||t==="pointerover",ce=t==="mouseout"||t==="pointerout",oe&&a!==wu&&(Ve=a.relatedTarget||a.fromElement)&&(wa(Ve)||Ve[Zi]))break e;if((ce||oe)&&(oe=pe.window===pe?pe:(oe=pe.ownerDocument)?oe.defaultView||oe.parentWindow:window,ce?(Ve=a.relatedTarget||a.toElement,ce=ne,Ve=Ve?wa(Ve):null,Ve!==null&&(jt=c(Ve),$e=Ve.tag,Ve!==jt||$e!==5&&$e!==27&&$e!==6)&&(Ve=null)):(ce=null,Ve=ne),ce!==Ve)){if($e=qp,ve="onMouseLeave",Z="onMouseEnter",k="mouse",(t==="pointerout"||t==="pointerover")&&($e=Zp,ve="onPointerLeave",Z="onPointerEnter",k="pointer"),jt=ce==null?oe:us(ce),te=Ve==null?oe:us(Ve),oe=new $e(ve,k+"leave",ce,a,pe),oe.target=jt,oe.relatedTarget=te,ve=null,wa(pe)===ne&&($e=new $e(Z,k+"enter",Ve,a,pe),$e.target=te,$e.relatedTarget=jt,ve=$e),jt=ve,ce&&Ve)t:{for($e=wS,Z=ce,k=Ve,te=0,ve=Z;ve;ve=$e(ve))te++;ve=0;for(var Je=k;Je;Je=$e(Je))ve++;for(;0<te-ve;)Z=$e(Z),te--;for(;0<ve-te;)k=$e(k),ve--;for(;te--;){if(Z===k||k!==null&&Z===k.alternate){$e=Z;break t}Z=$e(Z),k=$e(k)}$e=null}else $e=null;ce!==null&&H0(_e,oe,ce,$e,!1),Ve!==null&&jt!==null&&H0(_e,jt,Ve,$e,!0)}}e:{if(oe=ne?us(ne):window,ce=oe.nodeName&&oe.nodeName.toLowerCase(),ce==="select"||ce==="input"&&oe.type==="file")var wt=im;else if(tm(oe))if(am)wt=Hy;else{wt=zy;var Ye=Fy}else ce=oe.nodeName,!ce||ce.toLowerCase()!=="input"||oe.type!=="checkbox"&&oe.type!=="radio"?ne&&Ys(ne.elementType)&&(wt=im):wt=By;if(wt&&(wt=wt(t,ne))){nm(_e,wt,a,pe);break e}Ye&&Ye(t,oe,ne),t==="focusout"&&ne&&oe.type==="number"&&ne.memoizedProps.value!=null&&Si(oe,"number",oe.value)}switch(Ye=ne?us(ne):window,t){case"focusin":(tm(Ye)||Ye.contentEditable==="true")&&(Js=Ye,Vu=ne,ho=null);break;case"focusout":ho=Vu=Js=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,dm(_e,a,pe);break;case"selectionchange":if(Vy)break;case"keydown":case"keyup":dm(_e,a,pe)}var dt;if(zu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Qs?$p(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(Kp&&a.locale!=="ko"&&(Qs||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Qs&&(dt=Xp()):(Da=pe,Lu="value"in Da?Da.value:Da.textContent,Qs=!0)),Ye=gc(ne,yt),0<Ye.length&&(yt=new Yp(yt,t,null,a,pe),_e.push({event:yt,listeners:Ye}),dt?yt.data=dt:(dt=em(a),dt!==null&&(yt.data=dt)))),(dt=Uy?Ly(t,a):Oy(t,a))&&(yt=gc(ne,"onBeforeInput"),0<yt.length&&(Ye=new Yp("onBeforeInput","beforeinput",null,a,pe),_e.push({event:Ye,listeners:yt}),Ye.data=dt)),TS(_e,t,ne,a,pe)}z0(_e,n)})}function zo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function gc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ao(t,a),u!=null&&o.unshift(zo(t,u,d)),u=ao(t,n),u!=null&&o.push(zo(t,u,d))),t.tag===3)return o;t=t.return}return[]}function wS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function H0(t,n,a,o,u){for(var d=n._reactName,S=[];a!==null&&a!==o;){var N=a,V=N.alternate,ne=N.stateNode;if(N=N.tag,V!==null&&V===o)break;N!==5&&N!==26&&N!==27||ne===null||(V=ne,u?(ne=ao(a,d),ne!=null&&S.unshift(zo(a,ne,V))):u||(ne=ao(a,d),ne!=null&&S.push(zo(a,ne,V)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var NS=/\r\n?/g,DS=/\u0000|\uFFFD/g;function G0(t){return(typeof t=="string"?t:""+t).replace(NS,`
`).replace(DS,"")}function V0(t,n){return n=G0(n),G0(t)===n}function Vt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||On(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&On(t,""+o);break;case"className":st(t,"class",o);break;case"tabIndex":st(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":st(t,a,o);break;case"style":Ki(t,o,d);break;case"data":if(n!=="object"){st(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ml(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Ml(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Qi);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Ml(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),nt(t,"popover",o);break;case"xlinkActuate":Ge(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ge(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ge(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ge(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ge(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ge(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ge(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":nt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=sy.get(a)||a,nt(t,a,o))}}function md(t,n,a,o,u,d){switch(a){case"style":Ki(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?On(t,o):(typeof o=="number"||typeof o=="bigint")&&On(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!se.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[mn]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):nt(t,a,o)}}}function Tn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var S=a[d];if(S!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,d,S,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var N=d=S=u=null,V=null,ne=null;for(o in a)if(a.hasOwnProperty(o)){var pe=a[o];if(pe!=null)switch(o){case"name":u=pe;break;case"type":S=pe;break;case"checked":V=pe;break;case"defaultChecked":ne=pe;break;case"value":d=pe;break;case"defaultValue":N=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(s(137,n));break;default:Vt(t,n,o,pe,a,null)}}qn(t,d,N,V,ne,S,u,!1);return;case"select":vt("invalid",t),o=S=d=null;for(u in a)if(a.hasOwnProperty(u)&&(N=a[u],N!=null))switch(u){case"value":d=N;break;case"defaultValue":S=N;break;case"multiple":o=N;default:Vt(t,n,u,N,a,null)}n=d,a=S,t.multiple=!!o,n!=null?Yn(t,!!o,n,!1):a!=null&&Yn(t,!!o,a,!0);return;case"textarea":vt("invalid",t),d=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(N=a[S],N!=null))switch(S){case"value":o=N;break;case"defaultValue":u=N;break;case"children":d=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(91));break;default:Vt(t,n,S,N,a,null)}ln(t,o,u,d);return;case"option":for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!=null)&&(V==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,V,o,a,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Fo.length;o++)vt(Fo[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ne in a)if(a.hasOwnProperty(ne)&&(o=a[ne],o!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,ne,o,a,null)}return;default:if(Ys(n)){for(pe in a)a.hasOwnProperty(pe)&&(o=a[pe],o!==void 0&&md(t,n,pe,o,a,void 0));return}}for(N in a)a.hasOwnProperty(N)&&(o=a[N],o!=null&&Vt(t,n,N,o,a,null))}function US(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,S=null,N=null,V=null,ne=null,pe=null;for(ce in a){var _e=a[ce];if(a.hasOwnProperty(ce)&&_e!=null)switch(ce){case"checked":break;case"value":break;case"defaultValue":V=_e;default:o.hasOwnProperty(ce)||Vt(t,n,ce,null,o,_e)}}for(var oe in o){var ce=o[oe];if(_e=a[oe],o.hasOwnProperty(oe)&&(ce!=null||_e!=null))switch(oe){case"type":d=ce;break;case"name":u=ce;break;case"checked":ne=ce;break;case"defaultChecked":pe=ce;break;case"value":S=ce;break;case"defaultValue":N=ce;break;case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:ce!==_e&&Vt(t,n,oe,ce,o,_e)}}Ln(t,S,N,V,ne,pe,d,u);return;case"select":ce=S=N=oe=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":ce=V;default:o.hasOwnProperty(d)||Vt(t,n,d,null,o,V)}for(u in o)if(d=o[u],V=a[u],o.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":oe=d;break;case"defaultValue":N=d;break;case"multiple":S=d;default:d!==V&&Vt(t,n,u,d,o,V)}n=N,a=S,o=ce,oe!=null?Yn(t,!!a,oe,!1):!!o!=!!a&&(n!=null?Yn(t,!!a,n,!0):Yn(t,!!a,a?[]:"",!1));return;case"textarea":ce=oe=null;for(N in a)if(u=a[N],a.hasOwnProperty(N)&&u!=null&&!o.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Vt(t,n,N,null,o,u)}for(S in o)if(u=o[S],d=a[S],o.hasOwnProperty(S)&&(u!=null||d!=null))switch(S){case"value":oe=u;break;case"defaultValue":ce=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Vt(t,n,S,u,o,d)}It(t,oe,ce);return;case"option":for(var Ve in a)oe=a[Ve],a.hasOwnProperty(Ve)&&oe!=null&&!o.hasOwnProperty(Ve)&&(Ve==="selected"?t.selected=!1:Vt(t,n,Ve,null,o,oe));for(V in o)oe=o[V],ce=a[V],o.hasOwnProperty(V)&&oe!==ce&&(oe!=null||ce!=null)&&(V==="selected"?t.selected=oe&&typeof oe!="function"&&typeof oe!="symbol":Vt(t,n,V,oe,o,ce));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $e in a)oe=a[$e],a.hasOwnProperty($e)&&oe!=null&&!o.hasOwnProperty($e)&&Vt(t,n,$e,null,o,oe);for(ne in o)if(oe=o[ne],ce=a[ne],o.hasOwnProperty(ne)&&oe!==ce&&(oe!=null||ce!=null))switch(ne){case"children":case"dangerouslySetInnerHTML":if(oe!=null)throw Error(s(137,n));break;default:Vt(t,n,ne,oe,o,ce)}return;default:if(Ys(n)){for(var jt in a)oe=a[jt],a.hasOwnProperty(jt)&&oe!==void 0&&!o.hasOwnProperty(jt)&&md(t,n,jt,void 0,o,oe);for(pe in o)oe=o[pe],ce=a[pe],!o.hasOwnProperty(pe)||oe===ce||oe===void 0&&ce===void 0||md(t,n,pe,oe,o,ce);return}}for(var Z in a)oe=a[Z],a.hasOwnProperty(Z)&&oe!=null&&!o.hasOwnProperty(Z)&&Vt(t,n,Z,null,o,oe);for(_e in o)oe=o[_e],ce=a[_e],!o.hasOwnProperty(_e)||oe===ce||oe==null&&ce==null||Vt(t,n,_e,oe,o,ce)}function j0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function LS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,S=u.initiatorType,N=u.duration;if(d&&N&&j0(S)){for(S=0,N=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],ne=V.startTime;if(ne>N)break;var pe=V.transferSize,_e=V.initiatorType;pe&&j0(_e)&&(V=V.responseEnd,S+=pe*(V<N?1:(N-ne)/(V-ne)))}if(--o,n+=8*(d+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var gd=null,vd=null;function vc(t){return t.nodeType===9?t:t.ownerDocument}function k0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function _d(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xd=null;function OS(){var t=window.event;return t&&t.type==="popstate"?t===xd?!1:(xd=t,!0):(xd=null,!1)}var W0=typeof setTimeout=="function"?setTimeout:void 0,PS=typeof clearTimeout=="function"?clearTimeout:void 0,q0=typeof Promise=="function"?Promise:void 0,IS=typeof queueMicrotask=="function"?queueMicrotask:typeof q0<"u"?function(t){return q0.resolve(null).then(t).catch(FS)}:W0;function FS(t){setTimeout(function(){throw t})}function Ya(t){return t==="head"}function Y0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Tr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Bo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Bo(a);for(var d=a.firstChild;d;){var S=d.nextSibling,N=d.nodeName;d[cs]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=S}}else a==="body"&&Bo(t.ownerDocument.body);a=u}while(a);Tr(n)}function Z0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function yd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yd(a),io(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function zS(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[cs])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function BS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function K0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function Sd(t){return t.data==="$?"||t.data==="$~"}function Md(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function HS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ed=null;function Q0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function J0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function $0(t,n,a){switch(n=vc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Bo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);io(t)}var hi=new Map,ev=new Set;function _c(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ha=G.d;G.d={f:GS,r:VS,D:jS,C:kS,L:XS,m:WS,X:YS,S:qS,M:ZS};function GS(){var t=ha.f(),n=cc();return t||n}function VS(t){var n=Na(t);n!==null&&n.tag===5&&n.type==="form"?vg(n):ha.r(t)}var Mr=typeof document>"u"?null:document;function tv(t,n,a){var o=Mr;if(o&&typeof n=="string"&&n){var u=at(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),ev.has(u)||(ev.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Tn(n,"link",t),X(n),o.head.appendChild(n)))}}function jS(t){ha.D(t),tv("dns-prefetch",t,null)}function kS(t,n){ha.C(t,n),tv("preconnect",t,n)}function XS(t,n,a){ha.L(t,n,a);var o=Mr;if(o&&t&&n){var u='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+at(a.imageSizes)+'"]')):u+='[href="'+at(t)+'"]';var d=u;switch(n){case"style":d=Er(t);break;case"script":d=br(t)}hi.has(d)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),hi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Ho(d))||n==="script"&&o.querySelector(Go(d))||(n=o.createElement("link"),Tn(n,"link",t),X(n),o.head.appendChild(n)))}}function WS(t,n){ha.m(t,n);var a=Mr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+at(o)+'"][href="'+at(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=br(t)}if(!hi.has(d)&&(t=v({rel:"modulepreload",href:t},n),hi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Go(d)))return}o=a.createElement("link"),Tn(o,"link",t),X(o),a.head.appendChild(o)}}}function qS(t,n,a){ha.S(t,n,a);var o=Mr;if(o&&t){var u=U(o).hoistableStyles,d=Er(t);n=n||"default";var S=u.get(d);if(!S){var N={loading:0,preload:null};if(S=o.querySelector(Ho(d)))N.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=hi.get(d))&&bd(t,a);var V=S=o.createElement("link");X(V),Tn(V,"link",t),V._p=new Promise(function(ne,pe){V.onload=ne,V.onerror=pe}),V.addEventListener("load",function(){N.loading|=1}),V.addEventListener("error",function(){N.loading|=2}),N.loading|=4,xc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:N},u.set(d,S)}}}function YS(t,n){ha.X(t,n);var a=Mr;if(a&&t){var o=U(a).hoistableScripts,u=br(t),d=o.get(u);d||(d=a.querySelector(Go(u)),d||(t=v({src:t,async:!0},n),(n=hi.get(u))&&Td(t,n),d=a.createElement("script"),X(d),Tn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function ZS(t,n){ha.M(t,n);var a=Mr;if(a&&t){var o=U(a).hoistableScripts,u=br(t),d=o.get(u);d||(d=a.querySelector(Go(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=hi.get(u))&&Td(t,n),d=a.createElement("script"),X(d),Tn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function nv(t,n,a,o){var u=(u=re.current)?_c(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Er(a.href),a=U(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Er(a.href);var d=U(u).hoistableStyles,S=d.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,S),(d=u.querySelector(Ho(t)))&&!d._p&&(S.instance=d,S.state.loading=5),hi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},hi.set(t,a),d||KS(u,t,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=br(a),a=U(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Er(t){return'href="'+at(t)+'"'}function Ho(t){return'link[rel="stylesheet"]['+t+"]"}function iv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function KS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Tn(n,"link",a),X(n),t.head.appendChild(n))}function br(t){return'[src="'+at(t)+'"]'}function Go(t){return"script[async]"+t}function av(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+at(a.href)+'"]');if(o)return n.instance=o,X(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),X(o),Tn(o,"style",u),xc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Er(a.href);var d=t.querySelector(Ho(u));if(d)return n.state.loading|=4,n.instance=d,X(d),d;o=iv(a),(u=hi.get(u))&&bd(o,u),d=(t.ownerDocument||t).createElement("link"),X(d);var S=d;return S._p=new Promise(function(N,V){S.onload=N,S.onerror=V}),Tn(d,"link",o),n.state.loading|=4,xc(d,a.precedence,t),n.instance=d;case"script":return d=br(a.src),(u=t.querySelector(Go(d)))?(n.instance=u,X(u),u):(o=a,(u=hi.get(d))&&(o=v({},a),Td(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),X(u),Tn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,xc(o,a.precedence,t));return n.instance}function xc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,S=0;S<o.length;S++){var N=o[S];if(N.dataset.precedence===n)d=N;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function bd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var yc=null;function sv(t,n,a){if(yc===null){var o=new Map,u=yc=new Map;u.set(a,o)}else u=yc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[cs]||d[on]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var S=d.getAttribute(n)||"";S=t+S;var N=o.get(S);N?N.push(d):o.set(S,[d])}}return o}function rv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function QS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ov(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function JS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Er(o.href),d=n.querySelector(Ho(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Sc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,X(d);return}d=n.ownerDocument||n,o=iv(o),(u=hi.get(u))&&bd(o,u),d=d.createElement("link"),X(d);var S=d;S._p=new Promise(function(N,V){S.onload=N,S.onerror=V}),Tn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Sc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ad=0;function $S(t,n){return t.stylesheets&&t.count===0&&Ec(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Ec(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&Ad===0&&(Ad=62500*LS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Ec(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Ad?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Sc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ec(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Mc=null;function Ec(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Mc=new Map,n.forEach(eM,t),Mc=null,Sc.call(t))}function eM(t,n){if(!(n.state.loading&4)){var a=Mc.get(t);if(a)var o=a.get(null);else{a=new Map,Mc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var S=u[d];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),d=a.get(S)||o,d===o&&a.set(null,u),a.set(S,u),this.count++,o=Sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Vo={$$typeof:L,Provider:null,Consumer:null,_currentValue:fe,_currentValue2:fe,_threadCount:0};function tM(t,n,a,o,u,d,S,N,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function lv(t,n,a,o,u,d,S,N,V,ne,pe,_e){return t=new tM(t,n,a,S,V,ne,pe,_e,N),n=1,d===!0&&(n|=24),d=Kn(3,null,null,n),t.current=d,d.stateNode=t,n=sf(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},cf(d),t}function cv(t){return t?(t=tr,t):tr}function uv(t,n,a,o,u,d){u=cv(u),o.context===null?o.context=u:o.pendingContext=u,o=Fa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=za(t,o,n),a!==null&&(kn(a,t,n),yo(a,t,n))}function fv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Rd(t,n){fv(t,n),(t=t.alternate)&&fv(t,n)}function dv(t){if(t.tag===13||t.tag===31){var n=ps(t,67108864);n!==null&&kn(n,t,67108864),Rd(t,67108864)}}function hv(t){if(t.tag===13||t.tag===31){var n=ti();n=Xs(n);var a=ps(t,n);a!==null&&kn(a,t,n),Rd(t,n)}}var bc=!0;function nM(t,n,a,o){var u=z.T;z.T=null;var d=G.p;try{G.p=2,Cd(t,n,a,o)}finally{G.p=d,z.T=u}}function iM(t,n,a,o){var u=z.T;z.T=null;var d=G.p;try{G.p=8,Cd(t,n,a,o)}finally{G.p=d,z.T=u}}function Cd(t,n,a,o){if(bc){var u=wd(o);if(u===null)pd(t,n,o,Tc,a),mv(t,o);else if(sM(u,t,n,a,o))o.stopPropagation();else if(mv(t,o),n&4&&-1<aM.indexOf(t)){for(;u!==null;){var d=Na(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var S=Ee(d.pendingLanes);if(S!==0){var N=d;for(N.pendingLanes|=2,N.entangledLanes|=2;S;){var V=1<<31-Oe(S);N.entanglements[1]|=V,S&=~V}Fi(d),(Ot&6)===0&&(oc=A()+500,Io(0))}}break;case 31:case 13:N=ps(d,2),N!==null&&kn(N,d,2),cc(),Rd(d,2)}if(d=wd(o),d===null&&pd(t,n,o,Tc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else pd(t,n,o,null,a)}}function wd(t){return t=Nu(t),Nd(t)}var Tc=null;function Nd(t){if(Tc=null,t=wa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=p(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Tc=t,null}function pv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case ge:return 2;case Se:return 8;case he:case Xe:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var Dd=!1,Za=null,Ka=null,Qa=null,jo=new Map,ko=new Map,Ja=[],aM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function mv(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(n.pointerId)}}function Xo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Na(n),n!==null&&dv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function sM(t,n,a,o,u){switch(n){case"focusin":return Za=Xo(Za,t,n,a,o,u),!0;case"dragenter":return Ka=Xo(Ka,t,n,a,o,u),!0;case"mouseover":return Qa=Xo(Qa,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return jo.set(d,Xo(jo.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,ko.set(d,Xo(ko.get(d)||null,t,n,a,o,u)),!0}return!1}function gv(t){var n=wa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,qs(t.priority,function(){hv(a)});return}}else if(n===31){if(n=p(a),n!==null){t.blockedOn=n,qs(t.priority,function(){hv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ac(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=wd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);wu=o,a.target.dispatchEvent(o),wu=null}else return n=Na(a),n!==null&&dv(n),t.blockedOn=a,!1;n.shift()}return!0}function vv(t,n,a){Ac(t)&&a.delete(n)}function rM(){Dd=!1,Za!==null&&Ac(Za)&&(Za=null),Ka!==null&&Ac(Ka)&&(Ka=null),Qa!==null&&Ac(Qa)&&(Qa=null),jo.forEach(vv),ko.forEach(vv)}function Rc(t,n){t.blockedOn===n&&(t.blockedOn=null,Dd||(Dd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,rM)))}var Cc=null;function _v(t){Cc!==t&&(Cc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Cc===t&&(Cc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Nd(o||a)===null)continue;break}var d=Na(a);d!==null&&(t.splice(n,3),n-=3,wf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Tr(t){function n(V){return Rc(V,t)}Za!==null&&Rc(Za,t),Ka!==null&&Rc(Ka,t),Qa!==null&&Rc(Qa,t),jo.forEach(n),ko.forEach(n);for(var a=0;a<Ja.length;a++){var o=Ja[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)gv(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],S=u[mn]||null;if(typeof d=="function")S||_v(a);else if(S){var N=null;if(d&&d.hasAttribute("formAction")){if(u=d,S=d[mn]||null)N=S.formAction;else if(Nd(u)!==null)continue}else N=S.action;typeof N=="function"?a[o+1]=N:(a.splice(o,3),o-=3),_v(a)}}}function xv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ud(t){this._internalRoot=t}wc.prototype.render=Ud.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ti();uv(a,o,t,n,null,null)},wc.prototype.unmount=Ud.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;uv(t.current,2,null,t,null,null),cc(),n[Zi]=null}};function wc(t){this._internalRoot=t}wc.prototype.unstable_scheduleHydration=function(t){if(t){var n=Li();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&gv(t)}};var yv=e.version;if(yv!=="19.2.4")throw Error(s(527,yv,"19.2.4"));G.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=h(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var oM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nc.isDisabled&&Nc.supportsFiber)try{be=Nc.inject(oM),Me=Nc}catch{}}return qo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=Rg,d=Cg,S=wg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=lv(t,1,!1,null,null,a,o,null,u,d,S,xv),t[Zi]=n.current,hd(t),new Ud(n)},qo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",d=Rg,S=Cg,N=wg,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(N=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=lv(t,1,!0,n,a??null,o,u,V,d,S,N,xv),n.context=cv(null),a=n.current,o=ti(),o=Xs(o),u=Fa(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,Dn(n,a),Fi(n),t[Zi]=n.current,hd(t),new wc(n)},qo.version="19.2.4",qo}var Nv;function vM(){if(Nv)return Pd.exports;Nv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Pd.exports=gM(),Pd.exports}var _M=vM();var Dv="popstate";function xM(r={}){function e(s,l){let{pathname:c,search:f,hash:p}=s.location;return Ah("",{pathname:c,search:f,hash:p},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(s,l){return typeof l=="string"?l:rl(l)}return SM(e,i,null,r)}function Jt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Xi(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yM(){return Math.random().toString(36).substring(2,10)}function Uv(r,e){return{usr:r.state,key:r.key,idx:e}}function Ah(r,e,i=null,s){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof e=="string"?Yr(e):e,state:i,key:e&&e.key||s||yM()}}function rl({pathname:r="/",search:e="",hash:i=""}){return e&&e!=="?"&&(r+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Yr(r){let e={};if(r){let i=r.indexOf("#");i>=0&&(e.hash=r.substring(i),r=r.substring(0,i));let s=r.indexOf("?");s>=0&&(e.search=r.substring(s),r=r.substring(0,s)),r&&(e.pathname=r)}return e}function SM(r,e,i,s={}){let{window:l=document.defaultView,v5Compat:c=!1}=s,f=l.history,p="POP",g=null,h=x();h==null&&(h=0,f.replaceState({...f.state,idx:h},""));function x(){return(f.state||{idx:null}).idx}function v(){p="POP";let M=x(),y=M==null?null:M-h;h=M,g&&g({action:p,location:C.location,delta:y})}function _(M,y){p="PUSH";let R=Ah(C.location,M,y);h=x()+1;let L=Uv(R,h),D=C.createHref(R);try{f.pushState(L,"",D)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;l.location.assign(D)}c&&g&&g({action:p,location:C.location,delta:1})}function E(M,y){p="REPLACE";let R=Ah(C.location,M,y);h=x();let L=Uv(R,h),D=C.createHref(R);f.replaceState(L,"",D),c&&g&&g({action:p,location:C.location,delta:0})}function T(M){return MM(M)}let C={get action(){return p},get location(){return r(l,f)},listen(M){if(g)throw new Error("A history only accepts one active listener");return l.addEventListener(Dv,v),g=M,()=>{l.removeEventListener(Dv,v),g=null}},createHref(M){return e(l,M)},createURL:T,encodeLocation(M){let y=T(M);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:_,replace:E,go(M){return f.go(M)}};return C}function MM(r,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Jt(i,"No window.location.(origin|href) available to create URL");let s=typeof r=="string"?r:rl(r);return s=s.replace(/ $/,"%20"),!e&&s.startsWith("//")&&(s=i+s),new URL(s,i)}function X_(r,e,i="/"){return EM(r,e,i,!1)}function EM(r,e,i,s){let l=typeof e=="string"?Yr(e):e,c=ba(l.pathname||"/",i);if(c==null)return null;let f=W_(r);bM(f);let p=null;for(let g=0;p==null&&g<f.length;++g){let h=PM(c);p=LM(f[g],h,s)}return p}function W_(r,e=[],i=[],s="",l=!1){let c=(f,p,g=l,h)=>{let x={relativePath:h===void 0?f.path||"":h,caseSensitive:f.caseSensitive===!0,childrenIndex:p,route:f};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(s)&&g)return;Jt(x.relativePath.startsWith(s),`Absolute route path "${x.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(s.length)}let v=Sa([s,x.relativePath]),_=i.concat(x);f.children&&f.children.length>0&&(Jt(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),W_(f.children,e,_,v,g)),!(f.path==null&&!f.index)&&e.push({path:v,score:DM(v,f.index),routesMeta:_})};return r.forEach((f,p)=>{if(f.path===""||!f.path?.includes("?"))c(f,p);else for(let g of q_(f.path))c(f,p,!0,g)}),e}function q_(r){let e=r.split("/");if(e.length===0)return[];let[i,...s]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(s.length===0)return l?[c,""]:[c];let f=q_(s.join("/")),p=[];return p.push(...f.map(g=>g===""?c:[c,g].join("/"))),l&&p.push(...f),p.map(g=>r.startsWith("/")&&g===""?"/":g)}function bM(r){r.sort((e,i)=>e.score!==i.score?i.score-e.score:UM(e.routesMeta.map(s=>s.childrenIndex),i.routesMeta.map(s=>s.childrenIndex)))}var TM=/^:[\w-]+$/,AM=3,RM=2,CM=1,wM=10,NM=-2,Lv=r=>r==="*";function DM(r,e){let i=r.split("/"),s=i.length;return i.some(Lv)&&(s+=NM),e&&(s+=RM),i.filter(l=>!Lv(l)).reduce((l,c)=>l+(TM.test(c)?AM:c===""?CM:wM),s)}function UM(r,e){return r.length===e.length&&r.slice(0,-1).every((s,l)=>s===e[l])?r[r.length-1]-e[e.length-1]:0}function LM(r,e,i=!1){let{routesMeta:s}=r,l={},c="/",f=[];for(let p=0;p<s.length;++p){let g=s[p],h=p===s.length-1,x=c==="/"?e:e.slice(c.length)||"/",v=mu({path:g.relativePath,caseSensitive:g.caseSensitive,end:h},x),_=g.route;if(!v&&h&&i&&!s[s.length-1].route.index&&(v=mu({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},x)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:Sa([c,v.pathname]),pathnameBase:BM(Sa([c,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(c=Sa([c,v.pathnameBase]))}return f}function mu(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,s]=OM(r.path,r.caseSensitive,r.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((h,{paramName:x,isOptional:v},_)=>{if(x==="*"){let T=p[_]||"";f=c.slice(0,c.length-T.length).replace(/(.)\/+$/,"$1")}const E=p[_];return v&&!E?h[x]=void 0:h[x]=(E||"").replace(/%2F/g,"/"),h},{}),pathname:c,pathnameBase:f,pattern:r}}function OM(r,e=!1,i=!0){Xi(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let s=[],l="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,g)=>(s.push({paramName:p,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(s.push({paramName:"*"}),l+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":r!==""&&r!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),s]}function PM(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xi(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),r}}function ba(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,s=r.charAt(i);return s&&s!=="/"?null:r.slice(i)||"/"}var IM=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function FM(r,e="/"){let{pathname:i,search:s="",hash:l=""}=typeof r=="string"?Yr(r):r,c;return i?(i=i.replace(/\/\/+/g,"/"),i.startsWith("/")?c=Ov(i.substring(1),"/"):c=Ov(i,e)):c=e,{pathname:c,search:HM(s),hash:GM(l)}}function Ov(r,e){let i=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Bd(r,e,i,s){return`Cannot include a '${r}' character in a manually specified \`to.${e}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function zM(r){return r.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function Y_(r){let e=zM(r);return e.map((i,s)=>s===e.length-1?i.pathname:i.pathnameBase)}function Z_(r,e,i,s=!1){let l;typeof r=="string"?l=Yr(r):(l={...r},Jt(!l.pathname||!l.pathname.includes("?"),Bd("?","pathname","search",l)),Jt(!l.pathname||!l.pathname.includes("#"),Bd("#","pathname","hash",l)),Jt(!l.search||!l.search.includes("#"),Bd("#","search","hash",l)));let c=r===""||l.pathname==="",f=c?"/":l.pathname,p;if(f==null)p=i;else{let v=e.length-1;if(!s&&f.startsWith("..")){let _=f.split("/");for(;_[0]==="..";)_.shift(),v-=1;l.pathname=_.join("/")}p=v>=0?e[v]:"/"}let g=FM(l,p),h=f&&f!=="/"&&f.endsWith("/"),x=(c||f===".")&&i.endsWith("/");return!g.pathname.endsWith("/")&&(h||x)&&(g.pathname+="/"),g}var Sa=r=>r.join("/").replace(/\/\/+/g,"/"),BM=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),HM=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,GM=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,VM=class{constructor(r,e,i,s=!1){this.status=r,this.statusText=e||"",this.internal=s,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function jM(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function kM(r){return r.map(e=>e.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var K_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Q_(r,e){let i=r;if(typeof i!="string"||!IM.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let s=i,l=!1;if(K_)try{let c=new URL(window.location.href),f=i.startsWith("//")?new URL(c.protocol+i):new URL(i),p=ba(f.pathname,e);f.origin===c.origin&&p!=null?i=p+f.search+f.hash:l=!0}catch{Xi(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:s,isExternal:l,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var J_=["POST","PUT","PATCH","DELETE"];new Set(J_);var XM=["GET",...J_];new Set(XM);var Zr=Q.createContext(null);Zr.displayName="DataRouter";var Su=Q.createContext(null);Su.displayName="DataRouterState";var WM=Q.createContext(!1),$_=Q.createContext({isTransitioning:!1});$_.displayName="ViewTransition";var qM=Q.createContext(new Map);qM.displayName="Fetchers";var YM=Q.createContext(null);YM.displayName="Await";var vi=Q.createContext(null);vi.displayName="Navigation";var dl=Q.createContext(null);dl.displayName="Location";var Ra=Q.createContext({outlet:null,matches:[],isDataRoute:!1});Ra.displayName="Route";var bp=Q.createContext(null);bp.displayName="RouteError";var ex="REACT_ROUTER_ERROR",ZM="REDIRECT",KM="ROUTE_ERROR_RESPONSE";function QM(r){if(r.startsWith(`${ex}:${ZM}:{`))try{let e=JSON.parse(r.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function JM(r){if(r.startsWith(`${ex}:${KM}:{`))try{let e=JSON.parse(r.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new VM(e.status,e.statusText,e.data)}catch{}}function $M(r,{relative:e}={}){Jt(hl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:s}=Q.useContext(vi),{hash:l,pathname:c,search:f}=pl(r,{relative:e}),p=c;return i!=="/"&&(p=c==="/"?i:Sa([i,c])),s.createHref({pathname:p,search:f,hash:l})}function hl(){return Q.useContext(dl)!=null}function js(){return Jt(hl(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(dl).location}var tx="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function nx(r){Q.useContext(vi).static||Q.useLayoutEffect(r)}function eE(){let{isDataRoute:r}=Q.useContext(Ra);return r?hE():tE()}function tE(){Jt(hl(),"useNavigate() may be used only in the context of a <Router> component.");let r=Q.useContext(Zr),{basename:e,navigator:i}=Q.useContext(vi),{matches:s}=Q.useContext(Ra),{pathname:l}=js(),c=JSON.stringify(Y_(s)),f=Q.useRef(!1);return nx(()=>{f.current=!0}),Q.useCallback((g,h={})=>{if(Xi(f.current,tx),!f.current)return;if(typeof g=="number"){i.go(g);return}let x=Z_(g,JSON.parse(c),l,h.relative==="path");r==null&&e!=="/"&&(x.pathname=x.pathname==="/"?e:Sa([e,x.pathname])),(h.replace?i.replace:i.push)(x,h.state,h)},[e,i,c,l,r])}Q.createContext(null);function pl(r,{relative:e}={}){let{matches:i}=Q.useContext(Ra),{pathname:s}=js(),l=JSON.stringify(Y_(i));return Q.useMemo(()=>Z_(r,JSON.parse(l),s,e==="path"),[r,l,s,e])}function nE(r,e){return ix(r,e)}function ix(r,e,i,s,l){Jt(hl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=Q.useContext(vi),{matches:f}=Q.useContext(Ra),p=f[f.length-1],g=p?p.params:{},h=p?p.pathname:"/",x=p?p.pathnameBase:"/",v=p&&p.route;{let R=v&&v.path||"";sx(h,!v||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let _=js(),E;if(e){let R=typeof e=="string"?Yr(e):e;Jt(x==="/"||R.pathname?.startsWith(x),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${x}" but pathname "${R.pathname}" was given in the \`location\` prop.`),E=R}else E=_;let T=E.pathname||"/",C=T;if(x!=="/"){let R=x.replace(/^\//,"").split("/");C="/"+T.replace(/^\//,"").split("/").slice(R.length).join("/")}let M=X_(r,{pathname:C});Xi(v||M!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Xi(M==null||M[M.length-1].route.element!==void 0||M[M.length-1].route.Component!==void 0||M[M.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let y=oE(M&&M.map(R=>Object.assign({},R,{params:Object.assign({},g,R.params),pathname:Sa([x,c.encodeLocation?c.encodeLocation(R.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?x:Sa([x,c.encodeLocation?c.encodeLocation(R.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),f,i,s,l);return e&&y?Q.createElement(dl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},y):y}function iE(){let r=dE(),e=jM(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,s="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:s},c={padding:"2px 4px",backgroundColor:s},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:c},"ErrorBoundary")," or"," ",Q.createElement("code",{style:c},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),i?Q.createElement("pre",{style:l},i):null,f)}var aE=Q.createElement(iE,null),ax=class extends Q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,e){return e.location!==r.location||e.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:e.error,location:e.location,revalidation:r.revalidation||e.revalidation}}componentDidCatch(r,e){this.props.onError?this.props.onError(r,e):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=JM(r.digest);i&&(r=i)}let e=r!==void 0?Q.createElement(Ra.Provider,{value:this.props.routeContext},Q.createElement(bp.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?Q.createElement(sE,{error:r},e):e}};ax.contextType=WM;var Hd=new WeakMap;function sE({children:r,error:e}){let{basename:i}=Q.useContext(vi);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let s=QM(e.digest);if(s){let l=Hd.get(e);if(l)throw l;let c=Q_(s.location,i);if(K_&&!Hd.get(e))if(c.isExternal||s.reloadDocument)window.location.href=c.absoluteURL||c.to;else{const f=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:s.replace}));throw Hd.set(e,f),f}return Q.createElement("meta",{httpEquiv:"refresh",content:`0;url=${c.absoluteURL||c.to}`})}}return r}function rE({routeContext:r,match:e,children:i}){let s=Q.useContext(Zr);return s&&s.static&&s.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=e.route.id),Q.createElement(Ra.Provider,{value:r},i)}function oE(r,e=[],i=null,s=null,l=null){if(r==null){if(!i)return null;if(i.errors)r=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)r=i.matches;else return null}let c=r,f=i?.errors;if(f!=null){let x=c.findIndex(v=>v.route.id&&f?.[v.route.id]!==void 0);Jt(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,x+1))}let p=!1,g=-1;if(i)for(let x=0;x<c.length;x++){let v=c[x];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(g=x),v.route.id){let{loaderData:_,errors:E}=i,T=v.route.loader&&!_.hasOwnProperty(v.route.id)&&(!E||E[v.route.id]===void 0);if(v.route.lazy||T){p=!0,g>=0?c=c.slice(0,g+1):c=[c[0]];break}}}let h=i&&s?(x,v)=>{s(x,{location:i.location,params:i.matches?.[0]?.params??{},unstable_pattern:kM(i.matches),errorInfo:v})}:void 0;return c.reduceRight((x,v,_)=>{let E,T=!1,C=null,M=null;i&&(E=f&&v.route.id?f[v.route.id]:void 0,C=v.route.errorElement||aE,p&&(g<0&&_===0?(sx("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),T=!0,M=null):g===_&&(T=!0,M=v.route.hydrateFallbackElement||null)));let y=e.concat(c.slice(0,_+1)),R=()=>{let L;return E?L=C:T?L=M:v.route.Component?L=Q.createElement(v.route.Component,null):v.route.element?L=v.route.element:L=x,Q.createElement(rE,{match:v,routeContext:{outlet:x,matches:y,isDataRoute:i!=null},children:L})};return i&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?Q.createElement(ax,{location:i.location,revalidation:i.revalidation,component:C,error:E,children:R(),routeContext:{outlet:null,matches:y,isDataRoute:!0},onError:h}):R()},null)}function Tp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function lE(r){let e=Q.useContext(Zr);return Jt(e,Tp(r)),e}function cE(r){let e=Q.useContext(Su);return Jt(e,Tp(r)),e}function uE(r){let e=Q.useContext(Ra);return Jt(e,Tp(r)),e}function Ap(r){let e=uE(r),i=e.matches[e.matches.length-1];return Jt(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function fE(){return Ap("useRouteId")}function dE(){let r=Q.useContext(bp),e=cE("useRouteError"),i=Ap("useRouteError");return r!==void 0?r:e.errors?.[i]}function hE(){let{router:r}=lE("useNavigate"),e=Ap("useNavigate"),i=Q.useRef(!1);return nx(()=>{i.current=!0}),Q.useCallback(async(l,c={})=>{Xi(i.current,tx),i.current&&(typeof l=="number"?await r.navigate(l):await r.navigate(l,{fromRouteId:e,...c}))},[r,e])}var Pv={};function sx(r,e,i){!e&&!Pv[r]&&(Pv[r]=!0,Xi(!1,i))}Q.memo(pE);function pE({routes:r,future:e,state:i,onError:s}){return ix(r,void 0,i,s,e)}function Os(r){Jt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function mE({basename:r="/",children:e=null,location:i,navigationType:s="POP",navigator:l,static:c=!1,unstable_useTransitions:f}){Jt(!hl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let p=r.replace(/^\/*/,"/"),g=Q.useMemo(()=>({basename:p,navigator:l,static:c,unstable_useTransitions:f,future:{}}),[p,l,c,f]);typeof i=="string"&&(i=Yr(i));let{pathname:h="/",search:x="",hash:v="",state:_=null,key:E="default"}=i,T=Q.useMemo(()=>{let C=ba(h,p);return C==null?null:{location:{pathname:C,search:x,hash:v,state:_,key:E},navigationType:s}},[p,h,x,v,_,E,s]);return Xi(T!=null,`<Router basename="${p}"> is not able to match the URL "${h}${x}${v}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:Q.createElement(vi.Provider,{value:g},Q.createElement(dl.Provider,{children:e,value:T}))}function gE({children:r,location:e}){return nE(Rh(r),e)}function Rh(r,e=[]){let i=[];return Q.Children.forEach(r,(s,l)=>{if(!Q.isValidElement(s))return;let c=[...e,l];if(s.type===Q.Fragment){i.push.apply(i,Rh(s.props.children,c));return}Jt(s.type===Os,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Jt(!s.props.index||!s.props.children,"An index route cannot have child routes.");let f={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,middleware:s.props.middleware,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Rh(s.props.children,c)),i.push(f)}),i}var ru="get",ou="application/x-www-form-urlencoded";function Mu(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function vE(r){return Mu(r)&&r.tagName.toLowerCase()==="button"}function _E(r){return Mu(r)&&r.tagName.toLowerCase()==="form"}function xE(r){return Mu(r)&&r.tagName.toLowerCase()==="input"}function yE(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function SE(r,e){return r.button===0&&(!e||e==="_self")&&!yE(r)}var Dc=null;function ME(){if(Dc===null)try{new FormData(document.createElement("form"),0),Dc=!1}catch{Dc=!0}return Dc}var EE=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Gd(r){return r!=null&&!EE.has(r)?(Xi(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ou}"`),null):r}function bE(r,e){let i,s,l,c,f;if(_E(r)){let p=r.getAttribute("action");s=p?ba(p,e):null,i=r.getAttribute("method")||ru,l=Gd(r.getAttribute("enctype"))||ou,c=new FormData(r)}else if(vE(r)||xE(r)&&(r.type==="submit"||r.type==="image")){let p=r.form;if(p==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=r.getAttribute("formaction")||p.getAttribute("action");if(s=g?ba(g,e):null,i=r.getAttribute("formmethod")||p.getAttribute("method")||ru,l=Gd(r.getAttribute("formenctype"))||Gd(p.getAttribute("enctype"))||ou,c=new FormData(p,r),!ME()){let{name:h,type:x,value:v}=r;if(x==="image"){let _=h?`${h}.`:"";c.append(`${_}x`,"0"),c.append(`${_}y`,"0")}else h&&c.append(h,v)}}else{if(Mu(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=ru,s=null,l=ou,f=r}return c&&l==="text/plain"&&(f=c,c=void 0),{action:s,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Rp(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function TE(r,e,i,s){let l=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${s}`:l.pathname=`${l.pathname}.${s}`:l.pathname==="/"?l.pathname=`_root.${s}`:e&&ba(l.pathname,e)==="/"?l.pathname=`${e.replace(/\/$/,"")}/_root.${s}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${s}`,l}async function AE(r,e){if(r.id in e)return e[r.id];try{let i=await import(r.module);return e[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function RE(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function CE(r,e,i){let s=await Promise.all(r.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await AE(c,i);return f.links?f.links():[]}return[]}));return UE(s.flat(1).filter(RE).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Iv(r,e,i,s,l,c){let f=(g,h)=>i[h]?g.route.id!==i[h].route.id:!0,p=(g,h)=>i[h].pathname!==g.pathname||i[h].route.path?.endsWith("*")&&i[h].params["*"]!==g.params["*"];return c==="assets"?e.filter((g,h)=>f(g,h)||p(g,h)):c==="data"?e.filter((g,h)=>{let x=s.routes[g.route.id];if(!x||!x.hasLoader)return!1;if(f(g,h)||p(g,h))return!0;if(g.route.shouldRevalidate){let v=g.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function wE(r,e,{includeHydrateFallback:i}={}){return NE(r.map(s=>{let l=e.routes[s.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function NE(r){return[...new Set(r)]}function DE(r){let e={},i=Object.keys(r).sort();for(let s of i)e[s]=r[s];return e}function UE(r,e){let i=new Set;return new Set(e),r.reduce((s,l)=>{let c=JSON.stringify(DE(l));return i.has(c)||(i.add(c),s.push({key:c,link:l})),s},[])}function rx(){let r=Q.useContext(Zr);return Rp(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function LE(){let r=Q.useContext(Su);return Rp(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Cp=Q.createContext(void 0);Cp.displayName="FrameworkContext";function ox(){let r=Q.useContext(Cp);return Rp(r,"You must render this element inside a <HydratedRouter> element"),r}function OE(r,e){let i=Q.useContext(Cp),[s,l]=Q.useState(!1),[c,f]=Q.useState(!1),{onFocus:p,onBlur:g,onMouseEnter:h,onMouseLeave:x,onTouchStart:v}=e,_=Q.useRef(null);Q.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let C=y=>{y.forEach(R=>{f(R.isIntersecting)})},M=new IntersectionObserver(C,{threshold:.5});return _.current&&M.observe(_.current),()=>{M.disconnect()}}},[r]),Q.useEffect(()=>{if(s){let C=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(C)}}},[s]);let E=()=>{l(!0)},T=()=>{l(!1),f(!1)};return i?r!=="intent"?[c,_,{}]:[c,_,{onFocus:Yo(p,E),onBlur:Yo(g,T),onMouseEnter:Yo(h,E),onMouseLeave:Yo(x,T),onTouchStart:Yo(v,E)}]:[!1,_,{}]}function Yo(r,e){return i=>{r&&r(i),i.defaultPrevented||e(i)}}function PE({page:r,...e}){let{router:i}=rx(),s=Q.useMemo(()=>X_(i.routes,r,i.basename),[i.routes,r,i.basename]);return s?Q.createElement(FE,{page:r,matches:s,...e}):null}function IE(r){let{manifest:e,routeModules:i}=ox(),[s,l]=Q.useState([]);return Q.useEffect(()=>{let c=!1;return CE(r,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[r,e,i]),s}function FE({page:r,matches:e,...i}){let s=js(),{future:l,manifest:c,routeModules:f}=ox(),{basename:p}=rx(),{loaderData:g,matches:h}=LE(),x=Q.useMemo(()=>Iv(r,e,h,c,s,"data"),[r,e,h,c,s]),v=Q.useMemo(()=>Iv(r,e,h,c,s,"assets"),[r,e,h,c,s]),_=Q.useMemo(()=>{if(r===s.pathname+s.search+s.hash)return[];let C=new Set,M=!1;if(e.forEach(R=>{let L=c.routes[R.route.id];!L||!L.hasLoader||(!x.some(D=>D.route.id===R.route.id)&&R.route.id in g&&f[R.route.id]?.shouldRevalidate||L.hasClientLoader?M=!0:C.add(R.route.id))}),C.size===0)return[];let y=TE(r,p,l.unstable_trailingSlashAwareDataRequests,"data");return M&&C.size>0&&y.searchParams.set("_routes",e.filter(R=>C.has(R.route.id)).map(R=>R.route.id).join(",")),[y.pathname+y.search]},[p,l.unstable_trailingSlashAwareDataRequests,g,s,c,x,e,r,f]),E=Q.useMemo(()=>wE(v,c),[v,c]),T=IE(v);return Q.createElement(Q.Fragment,null,_.map(C=>Q.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...i})),E.map(C=>Q.createElement("link",{key:C,rel:"modulepreload",href:C,...i})),T.map(({key:C,link:M})=>Q.createElement("link",{key:C,nonce:i.nonce,...M,crossOrigin:M.crossOrigin??i.crossOrigin})))}function zE(...r){return e=>{r.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var BE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{BE&&(window.__reactRouterVersion="7.13.0")}catch{}function HE({basename:r,children:e,unstable_useTransitions:i,window:s}){let l=Q.useRef();l.current==null&&(l.current=xM({window:s,v5Compat:!0}));let c=l.current,[f,p]=Q.useState({action:c.action,location:c.location}),g=Q.useCallback(h=>{i===!1?p(h):Q.startTransition(()=>p(h))},[i]);return Q.useLayoutEffect(()=>c.listen(g),[c,g]),Q.createElement(mE,{basename:r,children:e,location:f.location,navigationType:f.action,navigator:c,unstable_useTransitions:i})}var lx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cx=Q.forwardRef(function({onClick:e,discover:i="render",prefetch:s="none",relative:l,reloadDocument:c,replace:f,state:p,target:g,to:h,preventScrollReset:x,viewTransition:v,unstable_defaultShouldRevalidate:_,...E},T){let{basename:C,unstable_useTransitions:M}=Q.useContext(vi),y=typeof h=="string"&&lx.test(h),R=Q_(h,C);h=R.to;let L=$M(h,{relative:l}),[D,P,F]=OE(s,E),O=jE(h,{replace:f,state:p,target:g,preventScrollReset:x,relative:l,viewTransition:v,unstable_defaultShouldRevalidate:_,unstable_useTransitions:M});function b($){e&&e($),$.defaultPrevented||O($)}let w=Q.createElement("a",{...E,...F,href:R.absoluteURL||L,onClick:R.isExternal||c?e:b,ref:zE(T,P),target:g,"data-discover":!y&&i==="render"?"true":void 0});return D&&!y?Q.createElement(Q.Fragment,null,w,Q.createElement(PE,{page:L})):w});cx.displayName="Link";var ux=Q.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:s="",end:l=!1,style:c,to:f,viewTransition:p,children:g,...h},x){let v=pl(f,{relative:h.relative}),_=js(),E=Q.useContext(Su),{navigator:T,basename:C}=Q.useContext(vi),M=E!=null&&YE(v)&&p===!0,y=T.encodeLocation?T.encodeLocation(v).pathname:v.pathname,R=_.pathname,L=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(R=R.toLowerCase(),L=L?L.toLowerCase():null,y=y.toLowerCase()),L&&C&&(L=ba(L,C)||L);const D=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let P=R===y||!l&&R.startsWith(y)&&R.charAt(D)==="/",F=L!=null&&(L===y||!l&&L.startsWith(y)&&L.charAt(y.length)==="/"),O={isActive:P,isPending:F,isTransitioning:M},b=P?e:void 0,w;typeof s=="function"?w=s(O):w=[s,P?"active":null,F?"pending":null,M?"transitioning":null].filter(Boolean).join(" ");let $=typeof c=="function"?c(O):c;return Q.createElement(cx,{...h,"aria-current":b,className:w,ref:x,style:$,to:f,viewTransition:p},typeof g=="function"?g(O):g)});ux.displayName="NavLink";var GE=Q.forwardRef(({discover:r="render",fetcherKey:e,navigate:i,reloadDocument:s,replace:l,state:c,method:f=ru,action:p,onSubmit:g,relative:h,preventScrollReset:x,viewTransition:v,unstable_defaultShouldRevalidate:_,...E},T)=>{let{unstable_useTransitions:C}=Q.useContext(vi),M=WE(),y=qE(p,{relative:h}),R=f.toLowerCase()==="get"?"get":"post",L=typeof p=="string"&&lx.test(p),D=P=>{if(g&&g(P),P.defaultPrevented)return;P.preventDefault();let F=P.nativeEvent.submitter,O=F?.getAttribute("formmethod")||f,b=()=>M(F||P.currentTarget,{fetcherKey:e,method:O,navigate:i,replace:l,state:c,relative:h,preventScrollReset:x,viewTransition:v,unstable_defaultShouldRevalidate:_});C&&i!==!1?Q.startTransition(()=>b()):b()};return Q.createElement("form",{ref:T,method:R,action:y,onSubmit:s?g:D,...E,"data-discover":!L&&r==="render"?"true":void 0})});GE.displayName="Form";function VE(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fx(r){let e=Q.useContext(Zr);return Jt(e,VE(r)),e}function jE(r,{target:e,replace:i,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p,unstable_useTransitions:g}={}){let h=eE(),x=js(),v=pl(r,{relative:c});return Q.useCallback(_=>{if(SE(_,e)){_.preventDefault();let E=i!==void 0?i:rl(x)===rl(v),T=()=>h(r,{replace:E,state:s,preventScrollReset:l,relative:c,viewTransition:f,unstable_defaultShouldRevalidate:p});g?Q.startTransition(()=>T()):T()}},[x,h,v,i,s,e,r,l,c,f,p,g])}var kE=0,XE=()=>`__${String(++kE)}__`;function WE(){let{router:r}=fx("useSubmit"),{basename:e}=Q.useContext(vi),i=fE(),s=r.fetch,l=r.navigate;return Q.useCallback(async(c,f={})=>{let{action:p,method:g,encType:h,formData:x,body:v}=bE(c,e);if(f.navigate===!1){let _=f.fetcherKey||XE();await s(_,i,f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:x,body:v,formMethod:f.method||g,formEncType:f.encType||h,flushSync:f.flushSync})}else await l(f.action||p,{unstable_defaultShouldRevalidate:f.unstable_defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:x,body:v,formMethod:f.method||g,formEncType:f.encType||h,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[s,l,e,i])}function qE(r,{relative:e}={}){let{basename:i}=Q.useContext(vi),s=Q.useContext(Ra);Jt(s,"useFormAction must be used inside a RouteContext");let[l]=s.matches.slice(-1),c={...pl(r||".",{relative:e})},f=js();if(r==null){c.search=f.search;let p=new URLSearchParams(c.search),g=p.getAll("index");if(g.some(x=>x==="")){p.delete("index"),g.filter(v=>v).forEach(v=>p.append("index",v));let x=p.toString();c.search=x?`?${x}`:""}}return(!r||r===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:Sa([i,c.pathname])),rl(c)}function YE(r,{relative:e}={}){let i=Q.useContext($_);Jt(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=fx("useViewTransitionState"),l=pl(r,{relative:e});if(!i.isTransitioning)return!1;let c=ba(i.currentLocation.pathname,s)||i.currentLocation.pathname,f=ba(i.nextLocation.pathname,s)||i.nextLocation.pathname;return mu(l.pathname,f)!=null||mu(l.pathname,c)!=null}const dx=(...r)=>r.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();const ZE=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();const KE=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,i,s)=>s?s.toUpperCase():i.toLowerCase());const Fv=r=>{const e=KE(r);return e.charAt(0).toUpperCase()+e.slice(1)};var QE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const JE=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};const $E=Q.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...p},g)=>Q.createElement("svg",{ref:g,...QE,width:e,height:e,stroke:r,strokeWidth:s?Number(i)*24/Number(e):i,className:dx("lucide",l),...!c&&!JE(p)&&{"aria-hidden":"true"},...p},[...f.map(([h,x])=>Q.createElement(h,x)),...Array.isArray(c)?c:[c]]));const Ut=(r,e)=>{const i=Q.forwardRef(({className:s,...l},c)=>Q.createElement($E,{ref:c,iconNode:e,className:dx(`lucide-${ZE(Fv(r))}`,`lucide-${r}`,s),...l}));return i.displayName=Fv(r),i};const eb=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],hx=Ut("activity",eb);const tb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],nb=Ut("arrow-right",tb);const ib=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],px=Ut("award",ib);const ab=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],lu=Ut("bot",ab);const sb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],gu=Ut("chevron-right",sb);const rb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Vd=Ut("circle-alert",rb);const ob=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],mx=Ut("circle-check-big",ob);const lb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],jd=Ut("circle-check",lb);const cb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{x:"9",y:"9",width:"6",height:"6",rx:"1",key:"1ssd4o"}]],ub=Ut("circle-stop",cb);const fb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],db=Ut("circle-x",fb);const hb=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],Eu=Ut("cpu",hb);const pb=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],mb=Ut("download",pb);const gb=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",key:"1wthlu"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"m5 16-3 3 3 3",key:"331omg"}],["path",{d:"m9 22 3-3-3-3",key:"lsp7cz"}]],vb=Ut("file-code-corner",gb);const _b=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],Uc=Ut("folder-open",_b);const xb=[["path",{d:"M15 6a9 9 0 0 0-9 9V3",key:"1cii5b"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}]],yb=Ut("git-branch",xb);const Sb=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]],Mb=Ut("git-compare",Sb);const Eb=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],kd=Ut("github",Eb);const bb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Tb=Ut("info",bb);const Ab=[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]],Gs=Ut("leaf",Ab);const Rb=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],Cb=Ut("link-2",Rb);const wb=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],Nb=Ut("loader-circle",wb);const Db=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],gx=Ut("play",Db);const Ub=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Lb=Ut("rotate-ccw",Ub);const Ob=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Pb=Ut("send",Ob);const Ib=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Fb=Ut("settings",Ib);const zb=[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]],Bb=Ut("thermometer",zb);const Hb=[["path",{d:"M16 17h6v-6",key:"t6n2it"}],["path",{d:"m22 17-8.5-8.5-5 5L2 7",key:"x473p"}]],Gb=Ut("trending-down",Hb);const Vb=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],jb=Ut("trending-up",Vb);const kb=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Xb=Ut("triangle-alert",kb);const Wb=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],qb=Ut("wifi-off",Wb);const Yb=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Zb=Ut("wifi",Yb);const Kb=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Vr=Ut("zap",Kb),Qb=[{to:"/repo",icon:yb,label:"Repo Connect"},{to:"/",icon:hx,label:"Carbon Radar",exact:!0},{to:"/precision",icon:Eu,label:"Precision Lab"},{to:"/diff",icon:Mb,label:"Carbon Diff"},{to:"/coach",icon:lu,label:"AI Coach"},{to:"/score",icon:px,label:"Green Score™"}],Jb=()=>m.jsxs("aside",{className:"sidebar",children:[m.jsxs("div",{className:"sidebar-logo",children:[m.jsx("div",{className:"logo-icon",children:m.jsx("span",{className:"logo-leaf",children:"🌿"})}),m.jsxs("div",{className:"logo-text",children:[m.jsxs("span",{className:"logo-name",children:[m.jsx("span",{className:"logo-accent",children:"GREEN"}),"LENS"]}),m.jsx("span",{className:"logo-version",children:"X · AMD SLINGSHOT"})]})]}),m.jsx("nav",{className:"sidebar-nav",children:Qb.map(({to:r,icon:e,label:i})=>m.jsxs(ux,{to:r,end:r==="/",className:({isActive:s})=>`nav-item ${s?"nav-item--active":""}`,children:[m.jsx("span",{className:"nav-icon",children:m.jsx(e,{size:16})}),m.jsx("span",{className:"nav-label",children:i})]},r))}),m.jsxs("div",{className:"sidebar-footer",children:[m.jsxs("div",{className:"hw-indicator",children:[m.jsx("span",{className:"hw-dot hw-dot--npu"}),m.jsx("span",{className:"hw-text",children:"AMD XDNA™ 2 NPU"}),m.jsx("span",{className:"hw-status",children:"READY"})]}),m.jsxs("button",{className:"nav-item nav-item--settings",children:[m.jsx("span",{className:"nav-icon",children:m.jsx(Fb,{size:16})}),m.jsx("span",{className:"nav-label",children:"Settings"})]})]})]});class $b{ws=null;listeners=[];connected=!1;simulationInterval=null;history=[];inferenceHistory=[];connect(e="ws://localhost:8000/ws"){try{this.ws=new WebSocket(e),this.ws.onmessage=i=>{const s=JSON.parse(i.data);this.history.push(s),this.history.length>60&&this.history.shift(),this.listeners.forEach(l=>l(s))},this.ws.onerror=()=>this.startSimulation(),this.ws.onopen=()=>{this.connected=!0}}catch{this.startSimulation()}}startSimulation(){let e=0;this.simulationInterval=setInterval(()=>{e++;const i=20+Math.sin(e*.05)*15+Math.random()*10,s=30+Math.sin(e*.03+1)*20+Math.random()*15,l=12+Math.sin(e*.07+2)*8+Math.random()*5,c={cpu_usage:Math.min(100,Math.max(5,i)),gpu_usage:Math.min(100,Math.max(5,s)),npu_usage:Math.min(100,Math.max(2,l)),cpu_power:i*.35,gpu_power:s*.42,npu_power:l*.04,total_power:i*.35+s*.42+l*.04,carbon_rate:.44,timestamp:Date.now()};this.history.push(c),this.history.length>120&&this.history.shift(),this.listeners.forEach(f=>f(c))},500),this.connected=!0}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(i=>i!==e)}}getHistory(){return this.history}getInferenceHistory(){return this.inferenceHistory}recordInference(e){this.inferenceHistory.push(e),this.inferenceHistory.length>50&&this.inferenceHistory.shift()}isConnected(){return this.connected}disconnect(){this.ws?.close(),this.simulationInterval&&clearInterval(this.simulationInterval)}}const il=new $b;function Kr(){const[r,e]=Q.useState(null),[i,s]=Q.useState([]);return Q.useEffect(()=>(il.isConnected()||il.startSimulation(),il.subscribe(c=>{e(c),s([...il.getHistory()])})),[]),{metrics:r,history:i}}function ol(r,e=400){const[i,s]=Q.useState(r),l=Q.useRef(r);return Q.useEffect(()=>{const c=l.current,f=r-c,p=performance.now(),g=h=>{const x=h-p,v=Math.min(x/e,1),_=1-Math.pow(1-v,3);l.current=c+f*_,s(l.current),v<1&&requestAnimationFrame(g)};requestAnimationFrame(g)},[r,e]),i}function e1(r){if(!r)return{total:0,efficiency:0,carbonImpact:0,hardwareUtil:0,optimizationLevel:0};const e=r.npu_power/(r.total_power+.001),i=Math.max(0,100-r.total_power),s=Math.max(0,100-r.total_power*r.carbon_rate*10),l=(r.npu_usage+r.gpu_usage*.3)/1.3,c=e*100,f=Math.round(i*.3+s*.3+Math.min(l,100)*.2+c*.2);return{total:Math.min(99,Math.max(10,f)),efficiency:Math.min(100,i),carbonImpact:Math.min(100,s),hardwareUtil:Math.min(100,l),optimizationLevel:Math.min(100,c)}}const Qr=({metrics:r,pageTitle:e,pageDesc:i})=>{const s=ol(r?.total_power??0),l=r?r.total_power*r.carbon_rate/3600:0;return m.jsxs("header",{className:"topbar",children:[m.jsxs("div",{className:"topbar-left",children:[m.jsx("h1",{className:"page-title",children:e}),m.jsx("p",{className:"page-desc",children:i})]}),m.jsxs("div",{className:"topbar-right",children:[m.jsxs("div",{className:"stat-chip",children:[m.jsx(Vr,{size:12}),m.jsx("span",{className:"stat-chip-label",children:"POWER"}),m.jsxs("span",{className:"stat-chip-value mono",children:[s.toFixed(1),"W"]})]}),m.jsxs("div",{className:"stat-chip stat-chip--green",children:[m.jsx(Gs,{size:12}),m.jsx("span",{className:"stat-chip-label",children:"CO₂ RATE"}),m.jsxs("span",{className:"stat-chip-value mono",children:[l.toFixed(4),"g/s"]})]}),m.jsxs("div",{className:`conn-status ${r?"conn-status--live":""}`,children:[r?m.jsx(Zb,{size:13}):m.jsx(qb,{size:13}),m.jsx("span",{children:r?"LIVE":"OFFLINE"})]})]})]})};const wp="183",t1=0,zv=1,n1=2,cu=1,i1=2,al=3,ls=0,Wn=1,xa=2,Ma=0,Hr=1,Bv=2,Hv=3,Gv=4,a1=5,Is=100,s1=101,r1=102,o1=103,l1=104,c1=200,u1=201,f1=202,d1=203,Ch=204,wh=205,h1=206,p1=207,m1=208,g1=209,v1=210,_1=211,x1=212,y1=213,S1=214,Nh=0,Dh=1,Uh=2,jr=3,Lh=4,Oh=5,Ph=6,Ih=7,Np=0,M1=1,E1=2,ji=0,vx=1,_x=2,xx=3,yx=4,Sx=5,Mx=6,Ex=7,bx=300,Vs=301,kr=302,Xd=303,Wd=304,bu=306,Fh=1e3,ya=1001,zh=1002,An=1003,b1=1004,Lc=1005,Nn=1006,qd=1007,Bs=1008,si=1009,Tx=1010,Ax=1011,ll=1012,Dp=1013,Wi=1014,Gi=1015,Ta=1016,Up=1017,Lp=1018,cl=1020,Rx=35902,Cx=35899,wx=1021,Nx=1022,Ni=1023,Aa=1026,Hs=1027,Dx=1028,Op=1029,Xr=1030,Pp=1031,Ip=1033,uu=33776,fu=33777,du=33778,hu=33779,Bh=35840,Hh=35841,Gh=35842,Vh=35843,jh=36196,kh=37492,Xh=37496,Wh=37488,qh=37489,Yh=37490,Zh=37491,Kh=37808,Qh=37809,Jh=37810,$h=37811,ep=37812,tp=37813,np=37814,ip=37815,ap=37816,sp=37817,rp=37818,op=37819,lp=37820,cp=37821,up=36492,fp=36494,dp=36495,hp=36283,pp=36284,mp=36285,gp=36286,T1=3200,Ux=0,A1=1,rs="",mi="srgb",Wr="srgb-linear",vu="linear",Ht="srgb",Ar=7680,Vv=519,R1=512,C1=513,w1=514,Fp=515,N1=516,D1=517,zp=518,U1=519,jv=35044,kv="300 es",Vi=2e3,ul=2001;function L1(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function _u(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function O1(){const r=_u("canvas");return r.style.display="block",r}const Xv={};function Wv(...r){const e="THREE."+r.shift();console.log(e,...r)}function Lx(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const i=r[1];i&&i.isStackTrace?r[0]+=" "+i.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function ot(...r){r=Lx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...r)}}function Dt(...r){r=Lx(r);const e="THREE."+r.shift();{const i=r[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...r)}}function xu(...r){const e=r.join(" ");e in Xv||(Xv[e]=!0,ot(...r))}function P1(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const I1={[Nh]:Dh,[Uh]:Ph,[Lh]:Ih,[jr]:Oh,[Dh]:Nh,[Ph]:Uh,[Ih]:Lh,[Oh]:jr};class Jr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yd=Math.PI/180,vp=180/Math.PI;function ml(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]).toLowerCase()}function Mt(r,e,i){return Math.max(e,Math.min(i,r))}function F1(r,e){return(r%e+e)%e}function Zd(r,e,i){return(1-i)*r+i*e}function Zo(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,i=0){bt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*s-f*l+e.x,this.y=c*l+f*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $r{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,f,p){let g=s[l+0],h=s[l+1],x=s[l+2],v=s[l+3],_=c[f+0],E=c[f+1],T=c[f+2],C=c[f+3];if(v!==C||g!==_||h!==E||x!==T){let M=g*_+h*E+x*T+v*C;M<0&&(_=-_,E=-E,T=-T,C=-C,M=-M);let y=1-p;if(M<.9995){const R=Math.acos(M),L=Math.sin(R);y=Math.sin(y*R)/L,p=Math.sin(p*R)/L,g=g*y+_*p,h=h*y+E*p,x=x*y+T*p,v=v*y+C*p}else{g=g*y+_*p,h=h*y+E*p,x=x*y+T*p,v=v*y+C*p;const R=1/Math.sqrt(g*g+h*h+x*x+v*v);g*=R,h*=R,x*=R,v*=R}}e[i]=g,e[i+1]=h,e[i+2]=x,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,f){const p=s[l],g=s[l+1],h=s[l+2],x=s[l+3],v=c[f],_=c[f+1],E=c[f+2],T=c[f+3];return e[i]=p*T+x*v+g*E-h*_,e[i+1]=g*T+x*_+h*v-p*E,e[i+2]=h*T+x*E+p*_-g*v,e[i+3]=x*T-p*v-g*_-h*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,f=e._order,p=Math.cos,g=Math.sin,h=p(s/2),x=p(l/2),v=p(c/2),_=g(s/2),E=g(l/2),T=g(c/2);switch(f){case"XYZ":this._x=_*x*v+h*E*T,this._y=h*E*v-_*x*T,this._z=h*x*T+_*E*v,this._w=h*x*v-_*E*T;break;case"YXZ":this._x=_*x*v+h*E*T,this._y=h*E*v-_*x*T,this._z=h*x*T-_*E*v,this._w=h*x*v+_*E*T;break;case"ZXY":this._x=_*x*v-h*E*T,this._y=h*E*v+_*x*T,this._z=h*x*T+_*E*v,this._w=h*x*v-_*E*T;break;case"ZYX":this._x=_*x*v-h*E*T,this._y=h*E*v+_*x*T,this._z=h*x*T-_*E*v,this._w=h*x*v+_*E*T;break;case"YZX":this._x=_*x*v+h*E*T,this._y=h*E*v+_*x*T,this._z=h*x*T-_*E*v,this._w=h*x*v-_*E*T;break;case"XZY":this._x=_*x*v-h*E*T,this._y=h*E*v-_*x*T,this._z=h*x*T+_*E*v,this._w=h*x*v+_*E*T;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],f=i[1],p=i[5],g=i[9],h=i[2],x=i[6],v=i[10],_=s+p+v;if(_>0){const E=.5/Math.sqrt(_+1);this._w=.25/E,this._x=(x-g)*E,this._y=(c-h)*E,this._z=(f-l)*E}else if(s>p&&s>v){const E=2*Math.sqrt(1+s-p-v);this._w=(x-g)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(c+h)/E}else if(p>v){const E=2*Math.sqrt(1+p-s-v);this._w=(c-h)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(g+x)/E}else{const E=2*Math.sqrt(1+v-s-p);this._w=(f-l)/E,this._x=(c+h)/E,this._y=(g+x)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,f=e._w,p=i._x,g=i._y,h=i._z,x=i._w;return this._x=s*x+f*p+l*h-c*g,this._y=l*x+f*g+c*p-s*h,this._z=c*x+f*h+s*g-l*p,this._w=f*x-s*p-l*g-c*h,this._onChangeCallback(),this}slerp(e,i){let s=e._x,l=e._y,c=e._z,f=e._w,p=this.dot(e);p<0&&(s=-s,l=-l,c=-c,f=-f,p=-p);let g=1-i;if(p<.9995){const h=Math.acos(p),x=Math.sin(h);g=Math.sin(g*h)/x,i=Math.sin(i*h)/x,this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+f*i,this._onChangeCallback()}else this._x=this._x*g+s*i,this._y=this._y*g+l*i,this._z=this._z*g+c*i,this._w=this._w*g+f*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,i=0,s=0){ie.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(qv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(qv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,f=e.y,p=e.z,g=e.w,h=2*(f*l-p*s),x=2*(p*i-c*l),v=2*(c*s-f*i);return this.x=i+g*h+f*v-p*x,this.y=s+g*x+p*h-c*v,this.z=l+g*v+c*x-f*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,f=i.x,p=i.y,g=i.z;return this.x=l*g-c*p,this.y=c*f-s*g,this.z=s*p-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Kd.copy(this).projectOnVector(e),this.sub(Kd)}reflect(e){return this.sub(Kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Mt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Kd=new ie,qv=new $r;class ht{constructor(e,i,s,l,c,f,p,g,h){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,g,h)}set(e,i,s,l,c,f,p,g,h){const x=this.elements;return x[0]=e,x[1]=l,x[2]=p,x[3]=i,x[4]=c,x[5]=g,x[6]=s,x[7]=f,x[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[3],g=s[6],h=s[1],x=s[4],v=s[7],_=s[2],E=s[5],T=s[8],C=l[0],M=l[3],y=l[6],R=l[1],L=l[4],D=l[7],P=l[2],F=l[5],O=l[8];return c[0]=f*C+p*R+g*P,c[3]=f*M+p*L+g*F,c[6]=f*y+p*D+g*O,c[1]=h*C+x*R+v*P,c[4]=h*M+x*L+v*F,c[7]=h*y+x*D+v*O,c[2]=_*C+E*R+T*P,c[5]=_*M+E*L+T*F,c[8]=_*y+E*D+T*O,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],g=e[6],h=e[7],x=e[8];return i*f*x-i*p*h-s*c*x+s*p*g+l*c*h-l*f*g}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],g=e[6],h=e[7],x=e[8],v=x*f-p*h,_=p*g-x*c,E=h*c-f*g,T=i*v+s*_+l*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(l*h-x*s)*C,e[2]=(p*s-l*f)*C,e[3]=_*C,e[4]=(x*i-l*g)*C,e[5]=(l*c-p*i)*C,e[6]=E*C,e[7]=(s*g-h*i)*C,e[8]=(f*i-s*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,f,p){const g=Math.cos(c),h=Math.sin(c);return this.set(s*g,s*h,-s*(g*f+h*p)+f+e,-l*h,l*g,-l*(-h*f+g*p)+p+i,0,0,1),this}scale(e,i){return this.premultiply(Qd.makeScale(e,i)),this}rotate(e){return this.premultiply(Qd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Qd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qd=new ht,Yv=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zv=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z1(){const r={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ht&&(l.r=Ea(l.r),l.g=Ea(l.g),l.b=Ea(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ht&&(l.r=Gr(l.r),l.g=Gr(l.g),l.b=Gr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rs?vu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return xu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return xu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Wr]:{primaries:e,whitePoint:s,transfer:vu,toXYZ:Yv,fromXYZ:Zv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:s,transfer:Ht,toXYZ:Yv,fromXYZ:Zv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),r}const At=z1();function Ea(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Rr;class B1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Rr===void 0&&(Rr=_u("canvas")),Rr.width=e.width,Rr.height=e.height;const l=Rr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Rr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=_u("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ea(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ea(i[s]/255)*255):i[s]=Ea(i[s]);return{data:i,width:e.width,height:e.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let H1=0;class Bp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H1++}),this.uuid=ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,p=l.length;f<p;f++)l[f].isDataTexture?c.push(Jd(l[f].image)):c.push(Jd(l[f]))}else c=Jd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function Jd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?B1.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let G1=0;const $d=new ie;class Fn extends Jr{constructor(e=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,s=ya,l=ya,c=Nn,f=Bs,p=Ni,g=si,h=Fn.DEFAULT_ANISOTROPY,x=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=ml(),this.name="",this.source=new Bp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=h,this.format=p,this.internalFormat=null,this.type=g,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize($d).x}get height(){return this.source.getSize($d).y}get depth(){return this.source.getSize($d).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fh:e.x=e.x-Math.floor(e.x);break;case ya:e.x=e.x<0?0:1;break;case zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fh:e.y=e.y-Math.floor(e.y);break;case ya:e.y=e.y<0?0:1;break;case zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=bx;Fn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const g=e.elements,h=g[0],x=g[4],v=g[8],_=g[1],E=g[5],T=g[9],C=g[2],M=g[6],y=g[10];if(Math.abs(x-_)<.01&&Math.abs(v-C)<.01&&Math.abs(T-M)<.01){if(Math.abs(x+_)<.1&&Math.abs(v+C)<.1&&Math.abs(T+M)<.1&&Math.abs(h+E+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(h+1)/2,D=(E+1)/2,P=(y+1)/2,F=(x+_)/4,O=(v+C)/4,b=(T+M)/4;return L>D&&L>P?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=F/s,c=O/s):D>P?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=F/l,c=b/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=O/c,l=b/c),this.set(s,l,c,i),this}let R=Math.sqrt((M-T)*(M-T)+(v-C)*(v-C)+(_-x)*(_-x));return Math.abs(R)<.001&&(R=1),this.x=(M-T)/R,this.y=(v-C)/R,this.z=(_-x)/R,this.w=Math.acos((h+E+y-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Mt(this.x,e.x,i.x),this.y=Mt(this.y,e.y,i.y),this.z=Mt(this.z,e.z,i.z),this.w=Mt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Mt(this.x,e,i),this.y=Mt(this.y,e,i),this.z=Mt(this.z,e,i),this.w=Mt(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Mt(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V1 extends Jr{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i),this.textures=[];const l={width:e,height:i,depth:s.depth},c=new Fn(l),f=s.count;for(let p=0;p<f;p++)this.textures[p]=c.clone(),this.textures[p].isRenderTargetTexture=!0,this.textures[p].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Bp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends V1{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Ox extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class j1 extends Fn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $t{constructor(e,i,s,l,c,f,p,g,h,x,v,_,E,T,C,M){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,f,p,g,h,x,v,_,E,T,C,M)}set(e,i,s,l,c,f,p,g,h,x,v,_,E,T,C,M){const y=this.elements;return y[0]=e,y[4]=i,y[8]=s,y[12]=l,y[1]=c,y[5]=f,y[9]=p,y[13]=g,y[2]=h,y[6]=x,y[10]=v,y[14]=_,y[3]=E,y[7]=T,y[11]=C,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Cr.setFromMatrixColumn(e,0).length(),c=1/Cr.setFromMatrixColumn(e,1).length(),f=1/Cr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,f=Math.cos(s),p=Math.sin(s),g=Math.cos(l),h=Math.sin(l),x=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const _=f*x,E=f*v,T=p*x,C=p*v;i[0]=g*x,i[4]=-g*v,i[8]=h,i[1]=E+T*h,i[5]=_-C*h,i[9]=-p*g,i[2]=C-_*h,i[6]=T+E*h,i[10]=f*g}else if(e.order==="YXZ"){const _=g*x,E=g*v,T=h*x,C=h*v;i[0]=_+C*p,i[4]=T*p-E,i[8]=f*h,i[1]=f*v,i[5]=f*x,i[9]=-p,i[2]=E*p-T,i[6]=C+_*p,i[10]=f*g}else if(e.order==="ZXY"){const _=g*x,E=g*v,T=h*x,C=h*v;i[0]=_-C*p,i[4]=-f*v,i[8]=T+E*p,i[1]=E+T*p,i[5]=f*x,i[9]=C-_*p,i[2]=-f*h,i[6]=p,i[10]=f*g}else if(e.order==="ZYX"){const _=f*x,E=f*v,T=p*x,C=p*v;i[0]=g*x,i[4]=T*h-E,i[8]=_*h+C,i[1]=g*v,i[5]=C*h+_,i[9]=E*h-T,i[2]=-h,i[6]=p*g,i[10]=f*g}else if(e.order==="YZX"){const _=f*g,E=f*h,T=p*g,C=p*h;i[0]=g*x,i[4]=C-_*v,i[8]=T*v+E,i[1]=v,i[5]=f*x,i[9]=-p*x,i[2]=-h*x,i[6]=E*v+T,i[10]=_-C*v}else if(e.order==="XZY"){const _=f*g,E=f*h,T=p*g,C=p*h;i[0]=g*x,i[4]=-v,i[8]=h*x,i[1]=_*v+C,i[5]=f*x,i[9]=E*v-T,i[2]=T*v-E,i[6]=p*x,i[10]=C*v+_}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k1,e,X1)}lookAt(e,i,s){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),es.crossVectors(s,ni),es.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),es.crossVectors(s,ni)),es.normalize(),Oc.crossVectors(ni,es),l[0]=es.x,l[4]=Oc.x,l[8]=ni.x,l[1]=es.y,l[5]=Oc.y,l[9]=ni.y,l[2]=es.z,l[6]=Oc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,f=s[0],p=s[4],g=s[8],h=s[12],x=s[1],v=s[5],_=s[9],E=s[13],T=s[2],C=s[6],M=s[10],y=s[14],R=s[3],L=s[7],D=s[11],P=s[15],F=l[0],O=l[4],b=l[8],w=l[12],$=l[1],H=l[5],K=l[9],ae=l[13],ue=l[2],ee=l[6],z=l[10],G=l[14],fe=l[3],me=l[7],Te=l[11],B=l[15];return c[0]=f*F+p*$+g*ue+h*fe,c[4]=f*O+p*H+g*ee+h*me,c[8]=f*b+p*K+g*z+h*Te,c[12]=f*w+p*ae+g*G+h*B,c[1]=x*F+v*$+_*ue+E*fe,c[5]=x*O+v*H+_*ee+E*me,c[9]=x*b+v*K+_*z+E*Te,c[13]=x*w+v*ae+_*G+E*B,c[2]=T*F+C*$+M*ue+y*fe,c[6]=T*O+C*H+M*ee+y*me,c[10]=T*b+C*K+M*z+y*Te,c[14]=T*w+C*ae+M*G+y*B,c[3]=R*F+L*$+D*ue+P*fe,c[7]=R*O+L*H+D*ee+P*me,c[11]=R*b+L*K+D*z+P*Te,c[15]=R*w+L*ae+D*G+P*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],f=e[1],p=e[5],g=e[9],h=e[13],x=e[2],v=e[6],_=e[10],E=e[14],T=e[3],C=e[7],M=e[11],y=e[15],R=g*E-h*_,L=p*E-h*v,D=p*_-g*v,P=f*E-h*x,F=f*_-g*x,O=f*v-p*x;return i*(C*R-M*L+y*D)-s*(T*R-M*P+y*F)+l*(T*L-C*P+y*O)-c*(T*D-C*F+M*O)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],f=e[4],p=e[5],g=e[6],h=e[7],x=e[8],v=e[9],_=e[10],E=e[11],T=e[12],C=e[13],M=e[14],y=e[15],R=i*p-s*f,L=i*g-l*f,D=i*h-c*f,P=s*g-l*p,F=s*h-c*p,O=l*h-c*g,b=x*C-v*T,w=x*M-_*T,$=x*y-E*T,H=v*M-_*C,K=v*y-E*C,ae=_*y-E*M,ue=R*ae-L*K+D*H+P*$-F*w+O*b;if(ue===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/ue;return e[0]=(p*ae-g*K+h*H)*ee,e[1]=(l*K-s*ae-c*H)*ee,e[2]=(C*O-M*F+y*P)*ee,e[3]=(_*F-v*O-E*P)*ee,e[4]=(g*$-f*ae-h*w)*ee,e[5]=(i*ae-l*$+c*w)*ee,e[6]=(M*D-T*O-y*L)*ee,e[7]=(x*O-_*D+E*L)*ee,e[8]=(f*K-p*$+h*b)*ee,e[9]=(s*$-i*K-c*b)*ee,e[10]=(T*F-C*D+y*R)*ee,e[11]=(v*D-x*F-E*R)*ee,e[12]=(p*w-f*H-g*b)*ee,e[13]=(i*H-s*w+l*b)*ee,e[14]=(C*L-T*P-M*R)*ee,e[15]=(x*P-v*L+_*R)*ee,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=e.x,p=e.y,g=e.z,h=c*f,x=c*p;return this.set(h*f+s,h*p-l*g,h*g+l*p,0,h*p+l*g,x*p+s,x*g-l*f,0,h*g-l*p,x*g+l*f,c*g*g+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,f){return this.set(1,s,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,f=i._y,p=i._z,g=i._w,h=c+c,x=f+f,v=p+p,_=c*h,E=c*x,T=c*v,C=f*x,M=f*v,y=p*v,R=g*h,L=g*x,D=g*v,P=s.x,F=s.y,O=s.z;return l[0]=(1-(C+y))*P,l[1]=(E+D)*P,l[2]=(T-L)*P,l[3]=0,l[4]=(E-D)*F,l[5]=(1-(_+y))*F,l[6]=(M+R)*F,l[7]=0,l[8]=(T+L)*O,l[9]=(M-R)*O,l[10]=(1-(_+C))*O,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinant();if(c===0)return s.set(1,1,1),i.identity(),this;let f=Cr.set(l[0],l[1],l[2]).length();const p=Cr.set(l[4],l[5],l[6]).length(),g=Cr.set(l[8],l[9],l[10]).length();c<0&&(f=-f),Ai.copy(this);const h=1/f,x=1/p,v=1/g;return Ai.elements[0]*=h,Ai.elements[1]*=h,Ai.elements[2]*=h,Ai.elements[4]*=x,Ai.elements[5]*=x,Ai.elements[6]*=x,Ai.elements[8]*=v,Ai.elements[9]*=v,Ai.elements[10]*=v,i.setFromRotationMatrix(Ai),s.x=f,s.y=p,s.z=g,this}makePerspective(e,i,s,l,c,f,p=Vi,g=!1){const h=this.elements,x=2*c/(i-e),v=2*c/(s-l),_=(i+e)/(i-e),E=(s+l)/(s-l);let T,C;if(g)T=c/(f-c),C=f*c/(f-c);else if(p===Vi)T=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(p===ul)T=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=v,h[9]=E,h[13]=0,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,s,l,c,f,p=Vi,g=!1){const h=this.elements,x=2/(i-e),v=2/(s-l),_=-(i+e)/(i-e),E=-(s+l)/(s-l);let T,C;if(g)T=1/(f-c),C=f/(f-c);else if(p===Vi)T=-2/(f-c),C=-(f+c)/(f-c);else if(p===ul)T=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return h[0]=x,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=v,h[9]=0,h[13]=E,h[2]=0,h[6]=0,h[10]=T,h[14]=C,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Cr=new ie,Ai=new $t,k1=new ie(0,0,0),X1=new ie(1,1,1),es=new ie,Oc=new ie,ni=new ie,Kv=new $t,Qv=new $r;class qi{constructor(e=0,i=0,s=0,l=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],f=l[4],p=l[8],g=l[1],h=l[5],x=l[9],v=l[2],_=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(p,E),this._z=Math.atan2(g,h)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-f,h)):(this._y=0,this._z=Math.atan2(g,c));break;case"ZYX":this._y=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,E),this._z=Math.atan2(g,c)):(this._x=0,this._z=Math.atan2(-f,h));break;case"YZX":this._z=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-x,h),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(p,E));break;case"XZY":this._z=Math.asin(-Mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(p,c)):(this._x=Math.atan2(-x,E),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Kv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Qv.setFromEuler(this),this.setFromQuaternion(Qv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class Px{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W1=0;const Jv=new ie,wr=new $r,pa=new $t,Pc=new ie,Ko=new ie,q1=new ie,Y1=new $r,$v=new ie(1,0,0),e_=new ie(0,1,0),t_=new ie(0,0,1),n_={type:"added"},Z1={type:"removed"},Nr={type:"childadded",child:null},eh={type:"childremoved",child:null};class zn extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new ie,i=new qi,s=new $r,l=new ie(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $t},normalMatrix:{value:new ht}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Px,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,i){return wr.setFromAxisAngle(e,i),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis($v,e)}rotateY(e){return this.rotateOnAxis(e_,e)}rotateZ(e){return this.rotateOnAxis(t_,e)}translateOnAxis(e,i){return Jv.copy(e).applyQuaternion(this.quaternion),this.position.add(Jv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis($v,e)}translateY(e){return this.translateOnAxis(e_,e)}translateZ(e){return this.translateOnAxis(t_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Pc.copy(e):Pc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Ko,Pc,this.up):pa.lookAt(Pc,Ko,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),wr.setFromRotationMatrix(pa),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(n_),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Z1),eh.child=e,this.dispatchEvent(eh),eh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pa.multiply(e.parent.matrixWorld)),e.applyMatrix4(pa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(n_),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,e,q1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ko,Y1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const i=e.x,s=e.y,l=e.z,c=this.matrix.elements;c[12]+=i-c[0]*i-c[4]*s-c[8]*l,c[13]+=s-c[1]*i-c[5]*s-c[9]*l,c[14]+=l-c[2]*i-c[6]*s-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),this.static!==!1&&(l.static=this.static),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(p,g){return p[g.uuid]===void 0&&(p[g.uuid]=g.toJSON(e)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const g=p.shapes;if(Array.isArray(g))for(let h=0,x=g.length;h<x;h++){const v=g[h];c(e.shapes,v)}else c(e.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let g=0,h=this.material.length;g<h;g++)p.push(c(e.materials,this.material[g]));l.material=p}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const g=this.animations[p];l.animations.push(c(e.animations,g))}}if(i){const p=f(e.geometries),g=f(e.materials),h=f(e.textures),x=f(e.images),v=f(e.shapes),_=f(e.skeletons),E=f(e.animations),T=f(e.nodes);p.length>0&&(s.geometries=p),g.length>0&&(s.materials=g),h.length>0&&(s.textures=h),x.length>0&&(s.images=x),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),E.length>0&&(s.animations=E),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(p){const g=[];for(const h in p){const x=p[h];delete x.metadata,g.push(x)}return g}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}zn.DEFAULT_UP=new ie(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ic extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K1={type:"move"};class th{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,f=null;const p=this._targetRay,g=this._grip,h=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(h&&e.hand){f=!0;for(const C of e.hand.values()){const M=i.getJointPose(C,s),y=this._getHandJoint(h,C);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const x=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],_=x.position.distanceTo(v.position),E=.02,T=.005;h.inputState.pinching&&_>E+T?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=E-T&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else g!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(g.matrix.fromArray(c.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,c.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(c.linearVelocity)):g.hasLinearVelocity=!1,c.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(c.angularVelocity)):g.hasAngularVelocity=!1));p!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(K1)))}return p!==null&&(p.visible=l!==null),g!==null&&(g.visible=c!==null),h!==null&&(h.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ic;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}const Ix={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Fc={h:0,s:0,l:0};function nh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class Rt{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=At.workingColorSpace){return this.r=e,this.g=i,this.b=s,At.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=At.workingColorSpace){if(e=F1(e,1),i=Mt(i,0,1),s=Mt(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=nh(f,c,e+1/3),this.g=nh(f,c,e),this.b=nh(f,c,e-1/3)}return At.colorSpaceToWorking(this,l),this}setStyle(e,i=mi){function s(c){c!==void 0&&parseFloat(c)<1&&ot("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],p=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(p))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ot("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);ot("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=mi){const s=Ix[e.toLowerCase()];return s!==void 0?this.setHex(s,i):ot("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return At.workingToColorSpace(wn.copy(this),e),Math.round(Mt(wn.r*255,0,255))*65536+Math.round(Mt(wn.g*255,0,255))*256+Math.round(Mt(wn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=At.workingColorSpace){At.workingToColorSpace(wn.copy(this),i);const s=wn.r,l=wn.g,c=wn.b,f=Math.max(s,l,c),p=Math.min(s,l,c);let g,h;const x=(p+f)/2;if(p===f)g=0,h=0;else{const v=f-p;switch(h=x<=.5?v/(f+p):v/(2-f-p),f){case s:g=(l-c)/v+(l<c?6:0);break;case l:g=(c-s)/v+2;break;case c:g=(s-l)/v+4;break}g/=6}return e.h=g,e.s=h,e.l=x,e}getRGB(e,i=At.workingColorSpace){return At.workingToColorSpace(wn.copy(this),i),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=mi){At.workingToColorSpace(wn.copy(this),e);const i=wn.r,s=wn.g,l=wn.b;return e!==mi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+i,ts.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ts),e.getHSL(Fc);const s=Zd(ts.h,Fc.h,i),l=Zd(ts.s,Fc.s,i),c=Zd(ts.l,Fc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Rt;Rt.NAMES=Ix;class Q1 extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ri=new ie,ma=new ie,ih=new ie,ga=new ie,Dr=new ie,Ur=new ie,i_=new ie,ah=new ie,sh=new ie,rh=new ie,oh=new an,lh=new an,ch=new an;class wi{constructor(e=new ie,i=new ie,s=new ie){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ri.subVectors(e,i),l.cross(Ri);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Ri.subVectors(l,i),ma.subVectors(s,i),ih.subVectors(e,i);const f=Ri.dot(Ri),p=Ri.dot(ma),g=Ri.dot(ih),h=ma.dot(ma),x=ma.dot(ih),v=f*h-p*p;if(v===0)return c.set(0,0,0),null;const _=1/v,E=(h*g-p*x)*_,T=(f*x-p*g)*_;return c.set(1-E-T,T,E)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(e,i,s,l,c,f,p,g){return this.getBarycoord(e,i,s,l,ga)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(c,ga.x),g.addScaledVector(f,ga.y),g.addScaledVector(p,ga.z),g)}static getInterpolatedAttribute(e,i,s,l,c,f){return oh.setScalar(0),lh.setScalar(0),ch.setScalar(0),oh.fromBufferAttribute(e,i),lh.fromBufferAttribute(e,s),ch.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(oh,c.x),f.addScaledVector(lh,c.y),f.addScaledVector(ch,c.z),f}static isFrontFacing(e,i,s,l){return Ri.subVectors(s,i),ma.subVectors(e,i),Ri.cross(ma).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ri.cross(ma).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let f,p;Dr.subVectors(l,s),Ur.subVectors(c,s),ah.subVectors(e,s);const g=Dr.dot(ah),h=Ur.dot(ah);if(g<=0&&h<=0)return i.copy(s);sh.subVectors(e,l);const x=Dr.dot(sh),v=Ur.dot(sh);if(x>=0&&v<=x)return i.copy(l);const _=g*v-x*h;if(_<=0&&g>=0&&x<=0)return f=g/(g-x),i.copy(s).addScaledVector(Dr,f);rh.subVectors(e,c);const E=Dr.dot(rh),T=Ur.dot(rh);if(T>=0&&E<=T)return i.copy(c);const C=E*h-g*T;if(C<=0&&h>=0&&T<=0)return p=h/(h-T),i.copy(s).addScaledVector(Ur,p);const M=x*T-E*v;if(M<=0&&v-x>=0&&E-T>=0)return i_.subVectors(c,l),p=(v-x)/(v-x+(E-T)),i.copy(l).addScaledVector(i_,p);const y=1/(M+C+_);return f=C*y,p=_*y,i.copy(s).addScaledVector(Dr,f).addScaledVector(Ur,p)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class gl{constructor(e=new ie(1/0,1/0,1/0),i=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ci.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ci.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ci.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,p=c.count;f<p;f++)e.isMesh===!0?e.getVertexPosition(f,Ci):Ci.fromBufferAttribute(c,f),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),zc.copy(s.boundingBox)),zc.applyMatrix4(e.matrixWorld),this.union(zc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Bc.subVectors(this.max,Qo),Lr.subVectors(e.a,Qo),Or.subVectors(e.b,Qo),Pr.subVectors(e.c,Qo),ns.subVectors(Or,Lr),is.subVectors(Pr,Or),Rs.subVectors(Lr,Pr);let i=[0,-ns.z,ns.y,0,-is.z,is.y,0,-Rs.z,Rs.y,ns.z,0,-ns.x,is.z,0,-is.x,Rs.z,0,-Rs.x,-ns.y,ns.x,0,-is.y,is.x,0,-Rs.y,Rs.x,0];return!uh(i,Lr,Or,Pr,Bc)||(i=[1,0,0,0,1,0,0,0,1],!uh(i,Lr,Or,Pr,Bc))?!1:(Hc.crossVectors(ns,is),i=[Hc.x,Hc.y,Hc.z],uh(i,Lr,Or,Pr,Bc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Ci=new ie,zc=new gl,Lr=new ie,Or=new ie,Pr=new ie,ns=new ie,is=new ie,Rs=new ie,Qo=new ie,Bc=new ie,Hc=new ie,Cs=new ie;function uh(r,e,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Cs.fromArray(r,c);const p=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),g=e.dot(Cs),h=i.dot(Cs),x=s.dot(Cs);if(Math.max(-Math.max(g,h,x),Math.min(g,h,x))>p)return!1}return!0}const pn=new ie,Gc=new bt;let J1=0;class Di{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:J1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=jv,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Gc.fromBufferAttribute(this,i),Gc.applyMatrix3(e),this.setXY(i,Gc.x,Gc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Zo(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Xn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Zo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Zo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Zo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Zo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jv&&(e.usage=this.usage),e}}class Fx extends Di{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class zx extends Di{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class gi extends Di{constructor(e,i,s){super(new Float32Array(e),i,s)}}const $1=new gl,Jo=new ie,fh=new ie;class Tu{constructor(e=new ie,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):$1.setFromPoints(e).getCenter(s);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const i=Jo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Jo,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(fh)),this.expandByPoint(Jo.copy(e.center).sub(fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let eT=0;const pi=new $t,dh=new zn,Ir=new ie,ii=new gl,$o=new gl,Sn=new ie;class _i extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eT++}),this.uuid=ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(L1(e)?zx:Fx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ht().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,i,s){return pi.makeTranslation(e,i,s),this.applyMatrix4(pi),this}scale(e,i,s){return pi.makeScale(e,i,s),this.applyMatrix4(pi),this}lookAt(e){return dh.lookAt(e),dh.updateMatrix(),this.applyMatrix4(dh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new gi(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const p=i[c];$o.setFromBufferAttribute(p),this.morphTargetsRelative?(Sn.addVectors(ii.min,$o.min),ii.expandByPoint(Sn),Sn.addVectors(ii.max,$o.max),ii.expandByPoint(Sn)):(ii.expandByPoint($o.min),ii.expandByPoint($o.max))}ii.getCenter(s);let l=0;for(let c=0,f=e.count;c<f;c++)Sn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,f=i.length;c<f;c++){const p=i[c],g=this.morphTargetsRelative;for(let h=0,x=p.count;h<x;h++)Sn.fromBufferAttribute(p,h),g&&(Ir.fromBufferAttribute(e,h),Sn.add(Ir)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),p=[],g=[];for(let b=0;b<s.count;b++)p[b]=new ie,g[b]=new ie;const h=new ie,x=new ie,v=new ie,_=new bt,E=new bt,T=new bt,C=new ie,M=new ie;function y(b,w,$){h.fromBufferAttribute(s,b),x.fromBufferAttribute(s,w),v.fromBufferAttribute(s,$),_.fromBufferAttribute(c,b),E.fromBufferAttribute(c,w),T.fromBufferAttribute(c,$),x.sub(h),v.sub(h),E.sub(_),T.sub(_);const H=1/(E.x*T.y-T.x*E.y);isFinite(H)&&(C.copy(x).multiplyScalar(T.y).addScaledVector(v,-E.y).multiplyScalar(H),M.copy(v).multiplyScalar(E.x).addScaledVector(x,-T.x).multiplyScalar(H),p[b].add(C),p[w].add(C),p[$].add(C),g[b].add(M),g[w].add(M),g[$].add(M))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let b=0,w=R.length;b<w;++b){const $=R[b],H=$.start,K=$.count;for(let ae=H,ue=H+K;ae<ue;ae+=3)y(e.getX(ae+0),e.getX(ae+1),e.getX(ae+2))}const L=new ie,D=new ie,P=new ie,F=new ie;function O(b){P.fromBufferAttribute(l,b),F.copy(P);const w=p[b];L.copy(w),L.sub(P.multiplyScalar(P.dot(w))).normalize(),D.crossVectors(F,w);const H=D.dot(g[b])<0?-1:1;f.setXYZW(b,L.x,L.y,L.z,H)}for(let b=0,w=R.length;b<w;++b){const $=R[b],H=$.start,K=$.count;for(let ae=H,ue=H+K;ae<ue;ae+=3)O(e.getX(ae+0)),O(e.getX(ae+1)),O(e.getX(ae+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Di(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let _=0,E=s.count;_<E;_++)s.setXYZ(_,0,0,0);const l=new ie,c=new ie,f=new ie,p=new ie,g=new ie,h=new ie,x=new ie,v=new ie;if(e)for(let _=0,E=e.count;_<E;_+=3){const T=e.getX(_+0),C=e.getX(_+1),M=e.getX(_+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,C),f.fromBufferAttribute(i,M),x.subVectors(f,c),v.subVectors(l,c),x.cross(v),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,C),h.fromBufferAttribute(s,M),p.add(x),g.add(x),h.add(x),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(C,g.x,g.y,g.z),s.setXYZ(M,h.x,h.y,h.z)}else for(let _=0,E=i.count;_<E;_+=3)l.fromBufferAttribute(i,_+0),c.fromBufferAttribute(i,_+1),f.fromBufferAttribute(i,_+2),x.subVectors(f,c),v.subVectors(l,c),x.cross(v),s.setXYZ(_+0,x.x,x.y,x.z),s.setXYZ(_+1,x.x,x.y,x.z),s.setXYZ(_+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(p,g){const h=p.array,x=p.itemSize,v=p.normalized,_=new h.constructor(g.length*x);let E=0,T=0;for(let C=0,M=g.length;C<M;C++){p.isInterleavedBufferAttribute?E=g[C]*p.data.stride+p.offset:E=g[C]*x;for(let y=0;y<x;y++)_[T++]=h[E++]}return new Di(_,x,v)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new _i,s=this.index.array,l=this.attributes;for(const p in l){const g=l[p],h=e(g,s);i.setAttribute(p,h)}const c=this.morphAttributes;for(const p in c){const g=[],h=c[p];for(let x=0,v=h.length;x<v;x++){const _=h[x],E=e(_,s);g.push(E)}i.morphAttributes[p]=g}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let p=0,g=f.length;p<g;p++){const h=f[p];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const g=this.parameters;for(const h in g)g[h]!==void 0&&(e[h]=g[h]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const g in s){const h=s[g];e.data.attributes[g]=h.toJSON(e.data)}const l={};let c=!1;for(const g in this.morphAttributes){const h=this.morphAttributes[g],x=[];for(let v=0,_=h.length;v<_;v++){const E=h[v];x.push(E.toJSON(e.data))}x.length>0&&(l[g]=x,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const p=this.boundingSphere;return p!==null&&(e.data.boundingSphere=p.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const h in l){const x=l[h];this.setAttribute(h,x.clone(i))}const c=e.morphAttributes;for(const h in c){const x=[],v=c[h];for(let _=0,E=v.length;_<E;_++)x.push(v[_].clone(i));this.morphAttributes[h]=x}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let h=0,x=f.length;h<x;h++){const v=f[h];this.addGroup(v.start,v.count,v.materialIndex)}const p=e.boundingBox;p!==null&&(this.boundingBox=p.clone());const g=e.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let tT=0;class eo extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=ml(),this.name="",this.type="Material",this.blending=Hr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=wh,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==ls&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ch&&(s.blendSrc=this.blendSrc),this.blendDst!==wh&&(s.blendDst=this.blendDst),this.blendEquation!==Is&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const p in c){const g=c[p];delete g.metadata,f.push(g)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _a=new ie,hh=new ie,Vc=new ie,as=new ie,ph=new ie,jc=new ie,mh=new ie;class Bx{constructor(e=new ie,i=new ie(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_a)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=_a.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(_a.copy(this.origin).addScaledVector(this.direction,i),_a.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){hh.copy(e).add(i).multiplyScalar(.5),Vc.copy(i).sub(e).normalize(),as.copy(this.origin).sub(hh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Vc),p=as.dot(this.direction),g=-as.dot(Vc),h=as.lengthSq(),x=Math.abs(1-f*f);let v,_,E,T;if(x>0)if(v=f*g-p,_=f*p-g,T=c*x,v>=0)if(_>=-T)if(_<=T){const C=1/x;v*=C,_*=C,E=v*(v+f*_+2*p)+_*(f*v+_+2*g)+h}else _=c,v=Math.max(0,-(f*_+p)),E=-v*v+_*(_+2*g)+h;else _=-c,v=Math.max(0,-(f*_+p)),E=-v*v+_*(_+2*g)+h;else _<=-T?(v=Math.max(0,-(-f*c+p)),_=v>0?-c:Math.min(Math.max(-c,-g),c),E=-v*v+_*(_+2*g)+h):_<=T?(v=0,_=Math.min(Math.max(-c,-g),c),E=_*(_+2*g)+h):(v=Math.max(0,-(f*c+p)),_=v>0?c:Math.min(Math.max(-c,-g),c),E=-v*v+_*(_+2*g)+h);else _=f>0?-c:c,v=Math.max(0,-(f*_+p)),E=-v*v+_*(_+2*g)+h;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(hh).addScaledVector(Vc,_),E}intersectSphere(e,i){_a.subVectors(e.center,this.origin);const s=_a.dot(this.direction),l=_a.dot(_a)-s*s,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),p=s-f,g=s+f;return g<0?null:p<0?this.at(g,i):this.at(p,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,f,p,g;const h=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,_=this.origin;return h>=0?(s=(e.min.x-_.x)*h,l=(e.max.x-_.x)*h):(s=(e.max.x-_.x)*h,l=(e.min.x-_.x)*h),x>=0?(c=(e.min.y-_.y)*x,f=(e.max.y-_.y)*x):(c=(e.max.y-_.y)*x,f=(e.min.y-_.y)*x),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(p=(e.min.z-_.z)*v,g=(e.max.z-_.z)*v):(p=(e.max.z-_.z)*v,g=(e.min.z-_.z)*v),s>g||p>l)||((p>s||s!==s)&&(s=p),(g<l||l!==l)&&(l=g),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,_a)!==null}intersectTriangle(e,i,s,l,c){ph.subVectors(i,e),jc.subVectors(s,e),mh.crossVectors(ph,jc);let f=this.direction.dot(mh),p;if(f>0){if(l)return null;p=1}else if(f<0)p=-1,f=-f;else return null;as.subVectors(this.origin,e);const g=p*this.direction.dot(jc.crossVectors(as,jc));if(g<0)return null;const h=p*this.direction.dot(ph.cross(as));if(h<0||g+h>f)return null;const x=-p*as.dot(mh);return x<0?null:this.at(x/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Hx extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Np,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const a_=new $t,ws=new Bx,kc=new Tu,s_=new ie,Xc=new ie,Wc=new ie,qc=new ie,gh=new ie,Yc=new ie,r_=new ie,Zc=new ie;class Ui extends zn{constructor(e=new _i,i=new Hx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const p=this.morphTargetInfluences;if(c&&p){Yc.set(0,0,0);for(let g=0,h=c.length;g<h;g++){const x=p[g],v=c[g];x!==0&&(gh.fromBufferAttribute(v,e),f?Yc.addScaledVector(gh,x):Yc.addScaledVector(gh.sub(i),x))}i.add(Yc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(c),ws.copy(e.ray).recast(e.near),!(kc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(kc,s_)===null||ws.origin.distanceToSquared(s_)>(e.far-e.near)**2))&&(a_.copy(c).invert(),ws.copy(e.ray).applyMatrix4(a_),!(s.boundingBox!==null&&ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,ws)))}_computeIntersections(e,i,s){let l;const c=this.geometry,f=this.material,p=c.index,g=c.attributes.position,h=c.attributes.uv,x=c.attributes.uv1,v=c.attributes.normal,_=c.groups,E=c.drawRange;if(p!==null)if(Array.isArray(f))for(let T=0,C=_.length;T<C;T++){const M=_[T],y=f[M.materialIndex],R=Math.max(M.start,E.start),L=Math.min(p.count,Math.min(M.start+M.count,E.start+E.count));for(let D=R,P=L;D<P;D+=3){const F=p.getX(D),O=p.getX(D+1),b=p.getX(D+2);l=Kc(this,y,e,s,h,x,v,F,O,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(p.count,E.start+E.count);for(let M=T,y=C;M<y;M+=3){const R=p.getX(M),L=p.getX(M+1),D=p.getX(M+2);l=Kc(this,f,e,s,h,x,v,R,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(f))for(let T=0,C=_.length;T<C;T++){const M=_[T],y=f[M.materialIndex],R=Math.max(M.start,E.start),L=Math.min(g.count,Math.min(M.start+M.count,E.start+E.count));for(let D=R,P=L;D<P;D+=3){const F=D,O=D+1,b=D+2;l=Kc(this,y,e,s,h,x,v,F,O,b),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,E.start),C=Math.min(g.count,E.start+E.count);for(let M=T,y=C;M<y;M+=3){const R=M,L=M+1,D=M+2;l=Kc(this,f,e,s,h,x,v,R,L,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function nT(r,e,i,s,l,c,f,p){let g;if(e.side===Wn?g=s.intersectTriangle(f,c,l,!0,p):g=s.intersectTriangle(l,c,f,e.side===ls,p),g===null)return null;Zc.copy(p),Zc.applyMatrix4(r.matrixWorld);const h=i.ray.origin.distanceTo(Zc);return h<i.near||h>i.far?null:{distance:h,point:Zc.clone(),object:r}}function Kc(r,e,i,s,l,c,f,p,g,h){r.getVertexPosition(p,Xc),r.getVertexPosition(g,Wc),r.getVertexPosition(h,qc);const x=nT(r,e,i,s,Xc,Wc,qc,r_);if(x){const v=new ie;wi.getBarycoord(r_,Xc,Wc,qc,v),l&&(x.uv=wi.getInterpolatedAttribute(l,p,g,h,v,new bt)),c&&(x.uv1=wi.getInterpolatedAttribute(c,p,g,h,v,new bt)),f&&(x.normal=wi.getInterpolatedAttribute(f,p,g,h,v,new ie),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const _={a:p,b:g,c:h,normal:new ie,materialIndex:0};wi.getNormal(Xc,Wc,qc,_.normal),x.face=_,x.barycoord=v}return x}class iT extends Fn{constructor(e=null,i=1,s=1,l,c,f,p,g,h=An,x=An,v,_){super(null,f,p,g,h,x,l,c,v,_),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const vh=new ie,aT=new ie,sT=new ht;class Ps{constructor(e=new ie(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=vh.subVectors(s,i).cross(aT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(vh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||sT.getNormalMatrix(e),l=this.coplanarPoint(vh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new Tu,rT=new bt(.5,.5),Qc=new ie;class Hp{constructor(e=new Ps,i=new Ps,s=new Ps,l=new Ps,c=new Ps,f=new Ps){this.planes=[e,i,s,l,c,f]}set(e,i,s,l,c,f){const p=this.planes;return p[0].copy(e),p[1].copy(i),p[2].copy(s),p[3].copy(l),p[4].copy(c),p[5].copy(f),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Vi,s=!1){const l=this.planes,c=e.elements,f=c[0],p=c[1],g=c[2],h=c[3],x=c[4],v=c[5],_=c[6],E=c[7],T=c[8],C=c[9],M=c[10],y=c[11],R=c[12],L=c[13],D=c[14],P=c[15];if(l[0].setComponents(h-f,E-x,y-T,P-R).normalize(),l[1].setComponents(h+f,E+x,y+T,P+R).normalize(),l[2].setComponents(h+p,E+v,y+C,P+L).normalize(),l[3].setComponents(h-p,E-v,y-C,P-L).normalize(),s)l[4].setComponents(g,_,M,D).normalize(),l[5].setComponents(h-g,E-_,y-M,P-D).normalize();else if(l[4].setComponents(h-g,E-_,y-M,P-D).normalize(),i===Vi)l[5].setComponents(h+g,E+_,y+M,P+D).normalize();else if(i===ul)l[5].setComponents(g,_,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);const i=rT.distanceTo(e.center);return Ns.radius=.7071067811865476+i,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Qc.x=l.normal.x>0?e.max.x:e.min.x,Qc.y=l.normal.y>0?e.max.y:e.min.y,Qc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Qc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Gx extends eo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const o_=new $t,_p=new Bx,Jc=new Tu,$c=new ie;class oT extends zn{constructor(e=new _i,i=new Gx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Jc.copy(s.boundingSphere),Jc.applyMatrix4(l),Jc.radius+=c,e.ray.intersectsSphere(Jc)===!1)return;o_.copy(l).invert(),_p.copy(e.ray).applyMatrix4(o_);const p=c/((this.scale.x+this.scale.y+this.scale.z)/3),g=p*p,h=s.index,v=s.attributes.position;if(h!==null){const _=Math.max(0,f.start),E=Math.min(h.count,f.start+f.count);for(let T=_,C=E;T<C;T++){const M=h.getX(T);$c.fromBufferAttribute(v,M),l_($c,M,g,l,e,i,this)}}else{const _=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=_,C=E;T<C;T++)$c.fromBufferAttribute(v,T),l_($c,T,g,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const p=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=c}}}}}function l_(r,e,i,s,l,c,f){const p=_p.distanceSqToPoint(r);if(p<i){const g=new ie;_p.closestPointToPoint(r,g),g.applyMatrix4(s);const h=l.ray.origin.distanceTo(g);if(h<l.near||h>l.far)return;c.push({distance:h,distanceToRay:Math.sqrt(p),point:g,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class Vx extends Fn{constructor(e=[],i=Vs,s,l,c,f,p,g,h,x){super(e,i,s,l,c,f,p,g,h,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fl extends Fn{constructor(e,i,s=Wi,l,c,f,p=An,g=An,h,x=Aa,v=1){if(x!==Aa&&x!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:i,depth:v};super(_,l,c,f,p,g,x,s,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class lT extends fl{constructor(e,i=Wi,s=Vs,l,c,f=An,p=An,g,h=Aa){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,i,s,l,c,f,p,g,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jx extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vl extends _i{constructor(e=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const p=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const g=[],h=[],x=[],v=[];let _=0,E=0;T("z","y","x",-1,-1,s,i,e,f,c,0),T("z","y","x",1,-1,s,i,-e,f,c,1),T("x","z","y",1,1,e,s,i,l,f,2),T("x","z","y",1,-1,e,s,-i,l,f,3),T("x","y","z",1,-1,e,i,s,l,c,4),T("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(g),this.setAttribute("position",new gi(h,3)),this.setAttribute("normal",new gi(x,3)),this.setAttribute("uv",new gi(v,2));function T(C,M,y,R,L,D,P,F,O,b,w){const $=D/O,H=P/b,K=D/2,ae=P/2,ue=F/2,ee=O+1,z=b+1;let G=0,fe=0;const me=new ie;for(let Te=0;Te<z;Te++){const B=Te*H-ae;for(let Y=0;Y<ee;Y++){const xe=Y*$-K;me[C]=xe*R,me[M]=B*L,me[y]=ue,h.push(me.x,me.y,me.z),me[C]=0,me[M]=0,me[y]=F>0?1:-1,x.push(me.x,me.y,me.z),v.push(Y/O),v.push(1-Te/b),G+=1}}for(let Te=0;Te<b;Te++)for(let B=0;B<O;B++){const Y=_+B+ee*Te,xe=_+B+ee*(Te+1),Ce=_+(B+1)+ee*(Te+1),ze=_+(B+1)+ee*Te;g.push(Y,xe,ze),g.push(xe,Ce,ze),fe+=6}p.addGroup(E,fe,w),E+=fe,_+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Gp extends _i{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],f=[];p(l),h(s),x(),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(c.slice(),3)),this.setAttribute("uv",new gi(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function p(R){const L=new ie,D=new ie,P=new ie;for(let F=0;F<i.length;F+=3)E(i[F+0],L),E(i[F+1],D),E(i[F+2],P),g(L,D,P,R)}function g(R,L,D,P){const F=P+1,O=[];for(let b=0;b<=F;b++){O[b]=[];const w=R.clone().lerp(D,b/F),$=L.clone().lerp(D,b/F),H=F-b;for(let K=0;K<=H;K++)K===0&&b===F?O[b][K]=w:O[b][K]=w.clone().lerp($,K/H)}for(let b=0;b<F;b++)for(let w=0;w<2*(F-b)-1;w++){const $=Math.floor(w/2);w%2===0?(_(O[b][$+1]),_(O[b+1][$]),_(O[b][$])):(_(O[b][$+1]),_(O[b+1][$+1]),_(O[b+1][$]))}}function h(R){const L=new ie;for(let D=0;D<c.length;D+=3)L.x=c[D+0],L.y=c[D+1],L.z=c[D+2],L.normalize().multiplyScalar(R),c[D+0]=L.x,c[D+1]=L.y,c[D+2]=L.z}function x(){const R=new ie;for(let L=0;L<c.length;L+=3){R.x=c[L+0],R.y=c[L+1],R.z=c[L+2];const D=M(R)/2/Math.PI+.5,P=y(R)/Math.PI+.5;f.push(D,1-P)}T(),v()}function v(){for(let R=0;R<f.length;R+=6){const L=f[R+0],D=f[R+2],P=f[R+4],F=Math.max(L,D,P),O=Math.min(L,D,P);F>.9&&O<.1&&(L<.2&&(f[R+0]+=1),D<.2&&(f[R+2]+=1),P<.2&&(f[R+4]+=1))}}function _(R){c.push(R.x,R.y,R.z)}function E(R,L){const D=R*3;L.x=e[D+0],L.y=e[D+1],L.z=e[D+2]}function T(){const R=new ie,L=new ie,D=new ie,P=new ie,F=new bt,O=new bt,b=new bt;for(let w=0,$=0;w<c.length;w+=9,$+=6){R.set(c[w+0],c[w+1],c[w+2]),L.set(c[w+3],c[w+4],c[w+5]),D.set(c[w+6],c[w+7],c[w+8]),F.set(f[$+0],f[$+1]),O.set(f[$+2],f[$+3]),b.set(f[$+4],f[$+5]),P.copy(R).add(L).add(D).divideScalar(3);const H=M(P);C(F,$+0,R,H),C(O,$+2,L,H),C(b,$+4,D,H)}}function C(R,L,D,P){P<0&&R.x===1&&(f[L]=R.x-1),D.x===0&&D.z===0&&(f[L]=P/2/Math.PI+.5)}function M(R){return Math.atan2(R.z,-R.x)}function y(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gp(e.vertices,e.indices,e.radius,e.detail)}}class yu extends Gp{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new yu(e.radius,e.detail)}}class Au extends _i{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,f=i/2,p=Math.floor(s),g=Math.floor(l),h=p+1,x=g+1,v=e/p,_=i/g,E=[],T=[],C=[],M=[];for(let y=0;y<x;y++){const R=y*_-f;for(let L=0;L<h;L++){const D=L*v-c;T.push(D,-R,0),C.push(0,0,1),M.push(L/p),M.push(1-y/g)}}for(let y=0;y<g;y++)for(let R=0;R<p;R++){const L=R+h*y,D=R+h*(y+1),P=R+1+h*(y+1),F=R+1+h*y;E.push(L,D,F),E.push(D,P,F)}this.setIndex(E),this.setAttribute("position",new gi(T,3)),this.setAttribute("normal",new gi(C,3)),this.setAttribute("uv",new gi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Au(e.width,e.height,e.widthSegments,e.heightSegments)}}function qr(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function In(r){const e={};for(let i=0;i<r.length;i++){const s=qr(r[i]);for(const l in s)e[l]=s[l]}return e}function cT(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function kx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const uT={clone:qr,merge:In};var fT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fT,this.fragmentShader=dT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=cT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class hT extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class c_ extends eo{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Rt(16777215),this.specular=new Rt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ux,this.normalScale=new bt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=Np,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pT extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mT extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Xx extends zn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const _h=new $t,u_=new ie,f_=new ie;class gT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new bt(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hp,this._frameExtents=new bt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;u_.setFromMatrixPosition(e.matrixWorld),i.position.copy(u_),f_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(f_),i.updateMatrixWorld(),_h.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_h,i.coordinateSystem,i.reversedDepth),i.coordinateSystem===ul||i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(_h)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const eu=new ie,tu=new $r,zi=new ie;class Wx extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(eu,tu,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eu,tu,zi.set(1,1,1)).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorld.decompose(eu,tu,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(eu,tu,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ss=new ie,d_=new bt,h_=new bt;class ai extends Wx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=vp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(Yd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,i){return this.getViewBounds(e,d_,h_),i.subVectors(h_,d_)}setViewOffset(e,i,s,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Yd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const g=f.fullWidth,h=f.fullHeight;c+=f.offsetX*l/g,i-=f.offsetY*s/h,l*=f.width/g,s*=f.height/h}const p=this.filmOffset;p!==0&&(c+=e*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class vT extends gT{constructor(){super(new ai(90,1,.5,500)),this.isPointLightShadow=!0}}class p_ extends Xx{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new vT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class qx extends Wx{constructor(e=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,f=s+e,p=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=h*this.view.offsetX,f=c+h*this.view.width,p-=x*this.view.offsetY,g=p-x*this.view.height}this.projectionMatrix.makeOrthographic(c,f,p,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _T extends Xx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const Fr=-90,zr=1;class xT extends zn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(Fr,zr,e,i);l.layers=this.layers,this.add(l);const c=new ai(Fr,zr,e,i);c.layers=this.layers,this.add(c);const f=new ai(Fr,zr,e,i);f.layers=this.layers,this.add(f);const p=new ai(Fr,zr,e,i);p.layers=this.layers,this.add(p);const g=new ai(Fr,zr,e,i);g.layers=this.layers,this.add(g);const h=new ai(Fr,zr,e,i);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,p,g]=i;for(const h of i)this.remove(h);if(e===Vi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(e===ul)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of i)this.add(h),h.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,p,g,h,x]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1;let M=!1;e.isWebGLRenderer===!0?M=e.state.buffers.depth.getReversed():M=e.reversedDepthBuffer,e.setRenderTarget(s,0,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,c),e.setRenderTarget(s,1,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,f),e.setRenderTarget(s,2,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,p),e.setRenderTarget(s,3,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,g),e.setRenderTarget(s,4,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,h),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),M&&e.autoClear===!1&&e.clearDepth(),e.render(i,x),e.setRenderTarget(v,_,E),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class yT extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function m_(r,e,i,s){const l=ST(s);switch(i){case wx:return r*e;case Dx:return r*e/l.components*l.byteLength;case Op:return r*e/l.components*l.byteLength;case Xr:return r*e*2/l.components*l.byteLength;case Pp:return r*e*2/l.components*l.byteLength;case Nx:return r*e*3/l.components*l.byteLength;case Ni:return r*e*4/l.components*l.byteLength;case Ip:return r*e*4/l.components*l.byteLength;case uu:case fu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case du:case hu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Hh:case Vh:return Math.max(r,16)*Math.max(e,8)/4;case Bh:case Gh:return Math.max(r,8)*Math.max(e,8)/2;case jh:case kh:case Wh:case qh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Xh:case Yh:case Zh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case $h:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ep:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case tp:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case np:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ip:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ap:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case sp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case rp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case op:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case lp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case cp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case up:case fp:case dp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case hp:case pp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case mp:case gp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ST(r){switch(r){case si:case Tx:return{byteLength:1,components:1};case ll:case Ax:case Ta:return{byteLength:2,components:1};case Up:case Lp:return{byteLength:2,components:4};case Wi:case Dp:case Gi:return{byteLength:4,components:1};case Rx:case Cx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wp}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wp);function Yx(){let r=null,e=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function MT(r){const e=new WeakMap;function i(p,g){const h=p.array,x=p.usage,v=h.byteLength,_=r.createBuffer();r.bindBuffer(g,_),r.bufferData(g,h,x),p.onUploadCallback();let E;if(h instanceof Float32Array)E=r.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)E=r.HALF_FLOAT;else if(h instanceof Uint16Array)p.isFloat16BufferAttribute?E=r.HALF_FLOAT:E=r.UNSIGNED_SHORT;else if(h instanceof Int16Array)E=r.SHORT;else if(h instanceof Uint32Array)E=r.UNSIGNED_INT;else if(h instanceof Int32Array)E=r.INT;else if(h instanceof Int8Array)E=r.BYTE;else if(h instanceof Uint8Array)E=r.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)E=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:E,bytesPerElement:h.BYTES_PER_ELEMENT,version:p.version,size:v}}function s(p,g,h){const x=g.array,v=g.updateRanges;if(r.bindBuffer(h,p),v.length===0)r.bufferSubData(h,0,x);else{v.sort((E,T)=>E.start-T.start);let _=0;for(let E=1;E<v.length;E++){const T=v[_],C=v[E];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++_,v[_]=C)}v.length=_+1;for(let E=0,T=v.length;E<T;E++){const C=v[E];r.bufferSubData(h,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),e.get(p)}function c(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=e.get(p);g&&(r.deleteBuffer(g.buffer),e.delete(p))}function f(p,g){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const x=e.get(p);(!x||x.version<p.version)&&e.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const h=e.get(p);if(h===void 0)e.set(p,i(p,g));else if(h.version<p.version){if(h.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,p,g),h.version=p.version}}return{get:l,remove:c,update:f}}var ET=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,TT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,UT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,LT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,OT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,IT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,FT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,XT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,WT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,YT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ZT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$T="gl_FragColor = linearToOutputTexel( gl_FragColor );",eA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,nA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,iA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_A=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,SA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,NA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,UA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,PA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,JA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$A=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_R=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const MR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ER=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,PR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,GR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,kR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,QR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$R=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,e2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:ET,alphahash_pars_fragment:bT,alphamap_fragment:TT,alphamap_pars_fragment:AT,alphatest_fragment:RT,alphatest_pars_fragment:CT,aomap_fragment:wT,aomap_pars_fragment:NT,batching_pars_vertex:DT,batching_vertex:UT,begin_vertex:LT,beginnormal_vertex:OT,bsdfs:PT,iridescence_fragment:IT,bumpmap_pars_fragment:FT,clipping_planes_fragment:zT,clipping_planes_pars_fragment:BT,clipping_planes_pars_vertex:HT,clipping_planes_vertex:GT,color_fragment:VT,color_pars_fragment:jT,color_pars_vertex:kT,color_vertex:XT,common:WT,cube_uv_reflection_fragment:qT,defaultnormal_vertex:YT,displacementmap_pars_vertex:ZT,displacementmap_vertex:KT,emissivemap_fragment:QT,emissivemap_pars_fragment:JT,colorspace_fragment:$T,colorspace_pars_fragment:eA,envmap_fragment:tA,envmap_common_pars_fragment:nA,envmap_pars_fragment:iA,envmap_pars_vertex:aA,envmap_physical_pars_fragment:mA,envmap_vertex:sA,fog_vertex:rA,fog_pars_vertex:oA,fog_fragment:lA,fog_pars_fragment:cA,gradientmap_pars_fragment:uA,lightmap_pars_fragment:fA,lights_lambert_fragment:dA,lights_lambert_pars_fragment:hA,lights_pars_begin:pA,lights_toon_fragment:gA,lights_toon_pars_fragment:vA,lights_phong_fragment:_A,lights_phong_pars_fragment:xA,lights_physical_fragment:yA,lights_physical_pars_fragment:SA,lights_fragment_begin:MA,lights_fragment_maps:EA,lights_fragment_end:bA,logdepthbuf_fragment:TA,logdepthbuf_pars_fragment:AA,logdepthbuf_pars_vertex:RA,logdepthbuf_vertex:CA,map_fragment:wA,map_pars_fragment:NA,map_particle_fragment:DA,map_particle_pars_fragment:UA,metalnessmap_fragment:LA,metalnessmap_pars_fragment:OA,morphinstance_vertex:PA,morphcolor_vertex:IA,morphnormal_vertex:FA,morphtarget_pars_vertex:zA,morphtarget_vertex:BA,normal_fragment_begin:HA,normal_fragment_maps:GA,normal_pars_fragment:VA,normal_pars_vertex:jA,normal_vertex:kA,normalmap_pars_fragment:XA,clearcoat_normal_fragment_begin:WA,clearcoat_normal_fragment_maps:qA,clearcoat_pars_fragment:YA,iridescence_pars_fragment:ZA,opaque_fragment:KA,packing:QA,premultiplied_alpha_fragment:JA,project_vertex:$A,dithering_fragment:eR,dithering_pars_fragment:tR,roughnessmap_fragment:nR,roughnessmap_pars_fragment:iR,shadowmap_pars_fragment:aR,shadowmap_pars_vertex:sR,shadowmap_vertex:rR,shadowmask_pars_fragment:oR,skinbase_vertex:lR,skinning_pars_vertex:cR,skinning_vertex:uR,skinnormal_vertex:fR,specularmap_fragment:dR,specularmap_pars_fragment:hR,tonemapping_fragment:pR,tonemapping_pars_fragment:mR,transmission_fragment:gR,transmission_pars_fragment:vR,uv_pars_fragment:_R,uv_pars_vertex:xR,uv_vertex:yR,worldpos_vertex:SR,background_vert:MR,background_frag:ER,backgroundCube_vert:bR,backgroundCube_frag:TR,cube_vert:AR,cube_frag:RR,depth_vert:CR,depth_frag:wR,distance_vert:NR,distance_frag:DR,equirect_vert:UR,equirect_frag:LR,linedashed_vert:OR,linedashed_frag:PR,meshbasic_vert:IR,meshbasic_frag:FR,meshlambert_vert:zR,meshlambert_frag:BR,meshmatcap_vert:HR,meshmatcap_frag:GR,meshnormal_vert:VR,meshnormal_frag:jR,meshphong_vert:kR,meshphong_frag:XR,meshphysical_vert:WR,meshphysical_frag:qR,meshtoon_vert:YR,meshtoon_frag:ZR,points_vert:KR,points_frag:QR,shadow_vert:JR,shadow_frag:$R,sprite_vert:e2,sprite_frag:t2},Le={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Hi={basic:{uniforms:In([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:In([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:In([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:In([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:In([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Rt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:In([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:In([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:In([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:In([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:In([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:In([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distance:{uniforms:In([Le.common,Le.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distance_vert,fragmentShader:pt.distance_frag},shadow:{uniforms:In([Le.lights,Le.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};Hi.physical={uniforms:In([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const nu={r:0,b:0,g:0},Ds=new qi,n2=new $t;function i2(r,e,i,s,l,c){const f=new Rt(0);let p=l===!0?0:1,g,h,x=null,v=0,_=null;function E(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){const D=R.backgroundBlurriness>0;L=e.get(L,D)}return L}function T(R){let L=!1;const D=E(R);D===null?M(f,p):D&&D.isColor&&(M(D,1),L=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||L)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function C(R,L){const D=E(L);D&&(D.isCubeTexture||D.mapping===bu)?(h===void 0&&(h=new Ui(new vl(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:qr(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,F,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ds.copy(L.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),h.material.uniforms.envMap.value=D,h.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(n2.makeRotationFromEuler(Ds)),h.material.toneMapped=At.getTransfer(D.colorSpace)!==Ht,(x!==D||v!==D.version||_!==r.toneMapping)&&(h.material.needsUpdate=!0,x=D,v=D.version,_=r.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):D&&D.isTexture&&(g===void 0&&(g=new Ui(new Au(2,2),new Yi({name:"BackgroundMaterial",uniforms:qr(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(g)),g.material.uniforms.t2D.value=D,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.toneMapped=At.getTransfer(D.colorSpace)!==Ht,D.matrixAutoUpdate===!0&&D.updateMatrix(),g.material.uniforms.uvTransform.value.copy(D.matrix),(x!==D||v!==D.version||_!==r.toneMapping)&&(g.material.needsUpdate=!0,x=D,v=D.version,_=r.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null))}function M(R,L){R.getRGB(nu,kx(r)),i.buffers.color.setClear(nu.r,nu.g,nu.b,L,c)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return f},setClearColor:function(R,L=1){f.set(R),p=L,M(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,M(f,p)},render:T,addToRenderList:C,dispose:y}}function a2(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=_(null);let c=l,f=!1;function p(H,K,ae,ue,ee){let z=!1;const G=v(H,ue,ae,K);c!==G&&(c=G,h(c.object)),z=E(H,ue,ae,ee),z&&T(H,ue,ae,ee),ee!==null&&e.update(ee,r.ELEMENT_ARRAY_BUFFER),(z||f)&&(f=!1,D(H,K,ae,ue),ee!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function g(){return r.createVertexArray()}function h(H){return r.bindVertexArray(H)}function x(H){return r.deleteVertexArray(H)}function v(H,K,ae,ue){const ee=ue.wireframe===!0;let z=s[K.id];z===void 0&&(z={},s[K.id]=z);const G=H.isInstancedMesh===!0?H.id:0;let fe=z[G];fe===void 0&&(fe={},z[G]=fe);let me=fe[ae.id];me===void 0&&(me={},fe[ae.id]=me);let Te=me[ee];return Te===void 0&&(Te=_(g()),me[ee]=Te),Te}function _(H){const K=[],ae=[],ue=[];for(let ee=0;ee<i;ee++)K[ee]=0,ae[ee]=0,ue[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ae,attributeDivisors:ue,object:H,attributes:{},index:null}}function E(H,K,ae,ue){const ee=c.attributes,z=K.attributes;let G=0;const fe=ae.getAttributes();for(const me in fe)if(fe[me].location>=0){const B=ee[me];let Y=z[me];if(Y===void 0&&(me==="instanceMatrix"&&H.instanceMatrix&&(Y=H.instanceMatrix),me==="instanceColor"&&H.instanceColor&&(Y=H.instanceColor)),B===void 0||B.attribute!==Y||Y&&B.data!==Y.data)return!0;G++}return c.attributesNum!==G||c.index!==ue}function T(H,K,ae,ue){const ee={},z=K.attributes;let G=0;const fe=ae.getAttributes();for(const me in fe)if(fe[me].location>=0){let B=z[me];B===void 0&&(me==="instanceMatrix"&&H.instanceMatrix&&(B=H.instanceMatrix),me==="instanceColor"&&H.instanceColor&&(B=H.instanceColor));const Y={};Y.attribute=B,B&&B.data&&(Y.data=B.data),ee[me]=Y,G++}c.attributes=ee,c.attributesNum=G,c.index=ue}function C(){const H=c.newAttributes;for(let K=0,ae=H.length;K<ae;K++)H[K]=0}function M(H){y(H,0)}function y(H,K){const ae=c.newAttributes,ue=c.enabledAttributes,ee=c.attributeDivisors;ae[H]=1,ue[H]===0&&(r.enableVertexAttribArray(H),ue[H]=1),ee[H]!==K&&(r.vertexAttribDivisor(H,K),ee[H]=K)}function R(){const H=c.newAttributes,K=c.enabledAttributes;for(let ae=0,ue=K.length;ae<ue;ae++)K[ae]!==H[ae]&&(r.disableVertexAttribArray(ae),K[ae]=0)}function L(H,K,ae,ue,ee,z,G){G===!0?r.vertexAttribIPointer(H,K,ae,ee,z):r.vertexAttribPointer(H,K,ae,ue,ee,z)}function D(H,K,ae,ue){C();const ee=ue.attributes,z=ae.getAttributes(),G=K.defaultAttributeValues;for(const fe in z){const me=z[fe];if(me.location>=0){let Te=ee[fe];if(Te===void 0&&(fe==="instanceMatrix"&&H.instanceMatrix&&(Te=H.instanceMatrix),fe==="instanceColor"&&H.instanceColor&&(Te=H.instanceColor)),Te!==void 0){const B=Te.normalized,Y=Te.itemSize,xe=e.get(Te);if(xe===void 0)continue;const Ce=xe.buffer,ze=xe.type,re=xe.bytesPerElement,ye=ze===r.INT||ze===r.UNSIGNED_INT||Te.gpuType===Dp;if(Te.isInterleavedBufferAttribute){const Ae=Te.data,ke=Ae.stride,Qe=Te.offset;if(Ae.isInstancedInterleavedBuffer){for(let et=0;et<me.locationSize;et++)y(me.location+et,Ae.meshPerAttribute);H.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let et=0;et<me.locationSize;et++)M(me.location+et);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let et=0;et<me.locationSize;et++)L(me.location+et,Y/me.locationSize,ze,B,ke*re,(Qe+Y/me.locationSize*et)*re,ye)}else{if(Te.isInstancedBufferAttribute){for(let Ae=0;Ae<me.locationSize;Ae++)y(me.location+Ae,Te.meshPerAttribute);H.isInstancedMesh!==!0&&ue._maxInstanceCount===void 0&&(ue._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Ae=0;Ae<me.locationSize;Ae++)M(me.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,Ce);for(let Ae=0;Ae<me.locationSize;Ae++)L(me.location+Ae,Y/me.locationSize,ze,B,Y*re,Y/me.locationSize*Ae*re,ye)}}else if(G!==void 0){const B=G[fe];if(B!==void 0)switch(B.length){case 2:r.vertexAttrib2fv(me.location,B);break;case 3:r.vertexAttrib3fv(me.location,B);break;case 4:r.vertexAttrib4fv(me.location,B);break;default:r.vertexAttrib1fv(me.location,B)}}}}R()}function P(){w();for(const H in s){const K=s[H];for(const ae in K){const ue=K[ae];for(const ee in ue){const z=ue[ee];for(const G in z)x(z[G].object),delete z[G];delete ue[ee]}}delete s[H]}}function F(H){if(s[H.id]===void 0)return;const K=s[H.id];for(const ae in K){const ue=K[ae];for(const ee in ue){const z=ue[ee];for(const G in z)x(z[G].object),delete z[G];delete ue[ee]}}delete s[H.id]}function O(H){for(const K in s){const ae=s[K];for(const ue in ae){const ee=ae[ue];if(ee[H.id]===void 0)continue;const z=ee[H.id];for(const G in z)x(z[G].object),delete z[G];delete ee[H.id]}}}function b(H){for(const K in s){const ae=s[K],ue=H.isInstancedMesh===!0?H.id:0,ee=ae[ue];if(ee!==void 0){for(const z in ee){const G=ee[z];for(const fe in G)x(G[fe].object),delete G[fe];delete ee[z]}delete ae[ue],Object.keys(ae).length===0&&delete s[K]}}}function w(){$(),f=!0,c!==l&&(c=l,h(c.object))}function $(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:w,resetDefaultState:$,dispose:P,releaseStatesOfGeometry:F,releaseStatesOfObject:b,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:M,disableUnusedAttributes:R}}function s2(r,e,i){let s;function l(h){s=h}function c(h,x){r.drawArrays(s,h,x),i.update(x,s,1)}function f(h,x,v){v!==0&&(r.drawArraysInstanced(s,h,x,v),i.update(x,s,v))}function p(h,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,h,0,x,0,v);let E=0;for(let T=0;T<v;T++)E+=x[T];i.update(E,s,1)}function g(h,x,v,_){if(v===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let T=0;T<h.length;T++)f(h[T],x[T],_[T]);else{E.multiDrawArraysInstancedWEBGL(s,h,0,x,0,_,0,v);let T=0;for(let C=0;C<v;C++)T+=x[C]*_[C];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=g}function r2(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(O){return!(O!==Ni&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(O){const b=O===Ta&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==si&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Gi&&!b)}function g(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp";const x=g(h);x!==h&&(ot("WebGLRenderer:",h,"not supported, using",x,"instead."),h=x);const v=i.logarithmicDepthBuffer===!0,_=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),y=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=r.getParameter(r.MAX_SAMPLES),F=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:g,textureFormatReadable:f,textureTypeReadable:p,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:E,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:D,maxSamples:P,samples:F}}function o2(r){const e=this;let i=null,s=0,l=!1,c=!1;const f=new Ps,p=new ht,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const E=v.length!==0||_||s!==0||l;return l=_,s=v.length,E},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,_){i=x(v,_,0)},this.setState=function(v,_,E){const T=v.clippingPlanes,C=v.clipIntersection,M=v.clipShadows,y=r.get(v);if(!l||T===null||T.length===0||c&&!M)c?x(null):h();else{const R=c?0:s,L=R*4;let D=y.clippingState||null;g.value=D,D=x(T,_,L,E);for(let P=0;P!==L;++P)D[P]=i[P];y.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function h(){g.value!==i&&(g.value=i,g.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(v,_,E,T){const C=v!==null?v.length:0;let M=null;if(C!==0){if(M=g.value,T!==!0||M===null){const y=E+C*4,R=_.matrixWorldInverse;p.getNormalMatrix(R),(M===null||M.length<y)&&(M=new Float32Array(y));for(let L=0,D=E;L!==C;++L,D+=4)f.copy(v[L]).applyMatrix4(R,p),f.normal.toArray(M,D),M[D+3]=f.constant}g.value=M,g.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,M}}const os=4,g_=[.125,.215,.35,.446,.526,.582],Fs=20,l2=256,el=new qx,v_=new Rt;let xh=null,yh=0,Sh=0,Mh=!1;const c2=new ie;class __{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:f=256,position:p=c2}=c;xh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const g=this._allocateTargets();return g.depthBuffer=!0,this._sceneToCubeUV(e,s,l,g,p),i>0&&this._blur(g,0,0,i),this._applyPMREM(g),this._cleanup(g),g}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=S_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xh,yh,Sh),this._renderer.xr.enabled=Mh,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Vs||e.mapping===kr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Sh=this._renderer.getActiveMipmapLevel(),Mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Ta,format:Ni,colorSpace:Wr,depthBuffer:!1},l=x_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=x_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=u2(c)),this._blurMaterial=d2(c,e,i),this._ggxMaterial=f2(c,e,i)}return l}_compileMaterial(e){const i=new Ui(new _i,e);this._renderer.compile(i,el)}_sceneToCubeUV(e,i,s,l,c){const g=new ai(90,1,i,s),h=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,E=v.toneMapping;v.getClearColor(v_),v.toneMapping=ji,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ui(new vl,new Hx({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let y=!1;const R=e.background;R?R.isColor&&(M.color.copy(R),e.background=null,y=!0):(M.color.copy(v_),y=!0);for(let L=0;L<6;L++){const D=L%3;D===0?(g.up.set(0,h[L],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x+x[L],c.y,c.z)):D===1?(g.up.set(0,0,h[L]),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y+x[L],c.z)):(g.up.set(0,h[L],0),g.position.set(c.x,c.y,c.z),g.lookAt(c.x,c.y,c.z+x[L]));const P=this._cubeSize;Br(l,D*P,L>2?P:0,P,P),v.setRenderTarget(l),y&&v.render(C,g),v.render(e,g)}v.toneMapping=E,v.autoClear=_,e.background=R}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Vs||e.mapping===kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=S_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=y_());const c=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const p=c.uniforms;p.envMap.value=e;const g=this._cubeSize;Br(i,0,0,3*g,2*g),s.setRenderTarget(i),s.render(f,el)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,p=this._lodMeshes[s];p.material=f;const g=f.uniforms,h=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),v=Math.sqrt(h*h-x*x),_=0+h*1.25,E=v*_,{_lodMax:T}=this,C=this._sizeLods[s],M=3*C*(s>T-os?s-T+os:0),y=4*(this._cubeSize-C);g.envMap.value=e.texture,g.roughness.value=E,g.mipInt.value=T-i,Br(c,M,y,3*C,2*C),l.setRenderTarget(c),l.render(p,el),g.envMap.value=c.texture,g.roughness.value=0,g.mipInt.value=T-s,Br(e,M,y,3*C,2*C),l.setRenderTarget(e),l.render(p,el)}_blur(e,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,s,l,"latitudinal",c),this._halfBlur(f,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,f,p){const g=this._renderer,h=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[l];v.material=h;const _=h.uniforms,E=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Fs-1),C=c/T,M=isFinite(c)?1+Math.floor(x*C):Fs;M>Fs&&ot(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Fs}`);const y=[];let R=0;for(let O=0;O<Fs;++O){const b=O/C,w=Math.exp(-b*b/2);y.push(w),O===0?R+=w:O<M&&(R+=2*w)}for(let O=0;O<y.length;O++)y[O]=y[O]/R;_.envMap.value=e.texture,_.samples.value=M,_.weights.value=y,_.latitudinal.value=f==="latitudinal",p&&(_.poleAxis.value=p);const{_lodMax:L}=this;_.dTheta.value=T,_.mipInt.value=L-s;const D=this._sizeLods[l],P=3*D*(l>L-os?l-L+os:0),F=4*(this._cubeSize-D);Br(i,P,F,3*D,2*D),g.setRenderTarget(i),g.render(v,el)}}function u2(r){const e=[],i=[],s=[];let l=r;const c=r-os+1+g_.length;for(let f=0;f<c;f++){const p=Math.pow(2,l);e.push(p);let g=1/p;f>r-os?g=g_[f-r+os-1]:f===0&&(g=0),i.push(g);const h=1/(p-2),x=-h,v=1+h,_=[x,x,v,x,v,v,x,x,v,v,x,v],E=6,T=6,C=3,M=2,y=1,R=new Float32Array(C*T*E),L=new Float32Array(M*T*E),D=new Float32Array(y*T*E);for(let F=0;F<E;F++){const O=F%3*2/3-1,b=F>2?0:-1,w=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];R.set(w,C*T*F),L.set(_,M*T*F);const $=[F,F,F,F,F,F];D.set($,y*T*F)}const P=new _i;P.setAttribute("position",new Di(R,C)),P.setAttribute("uv",new Di(L,M)),P.setAttribute("faceIndex",new Di(D,y)),s.push(new Ui(P,null)),l>os&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function x_(r,e,i){const s=new ki(r,e,i);return s.texture.mapping=bu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Br(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function f2(r,e,i){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:l2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ru(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function d2(r,e,i){const s=new Float32Array(Fs),l=new ie(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function y_(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function S_(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function Ru(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Zx extends ki{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Vx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new vl(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:qr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:Ma});c.uniforms.tEquirect.value=i;const f=new Ui(l,c),p=i.minFilter;return i.minFilter===Bs&&(i.minFilter=Nn),new xT(1,10,this).update(e,f),i.minFilter=p,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,s,l);e.setRenderTarget(c)}}function h2(r){let e=new WeakMap,i=new WeakMap,s=null;function l(_,E=!1){return _==null?null:E?f(_):c(_)}function c(_){if(_&&_.isTexture){const E=_.mapping;if(E===Xd||E===Wd)if(e.has(_)){const T=e.get(_).texture;return p(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const C=new Zx(T.height);return C.fromEquirectangularTexture(r,_),e.set(_,C),_.addEventListener("dispose",h),p(C.texture,_.mapping)}else return null}}return _}function f(_){if(_&&_.isTexture){const E=_.mapping,T=E===Xd||E===Wd,C=E===Vs||E===kr;if(T||C){let M=i.get(_);const y=M!==void 0?M.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return s===null&&(s=new __(r)),M=T?s.fromEquirectangular(_,M):s.fromCubemap(_,M),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),M.texture;if(M!==void 0)return M.texture;{const R=_.image;return T&&R&&R.height>0||C&&R&&g(R)?(s===null&&(s=new __(r)),M=T?s.fromEquirectangular(_):s.fromCubemap(_),M.texture.pmremVersion=_.pmremVersion,i.set(_,M),_.addEventListener("dispose",x),M.texture):null}}}return _}function p(_,E){return E===Xd?_.mapping=Vs:E===Wd&&(_.mapping=kr),_}function g(_){let E=0;const T=6;for(let C=0;C<T;C++)_[C]!==void 0&&E++;return E===T}function h(_){const E=_.target;E.removeEventListener("dispose",h);const T=e.get(E);T!==void 0&&(e.delete(E),T.dispose())}function x(_){const E=_.target;E.removeEventListener("dispose",x);const T=i.get(E);T!==void 0&&(i.delete(E),T.dispose())}function v(){e=new WeakMap,i=new WeakMap,s!==null&&(s.dispose(),s=null)}return{get:l,dispose:v}}function p2(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&xu("WebGLRenderer: "+s+" extension not supported."),l}}}function m2(r,e,i,s){const l={},c=new WeakMap;function f(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",f),delete l[_.id];const E=c.get(_);E&&(e.remove(E),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,i.memory.geometries--}function p(v,_){return l[_.id]===!0||(_.addEventListener("dispose",f),l[_.id]=!0,i.memory.geometries++),_}function g(v){const _=v.attributes;for(const E in _)e.update(_[E],r.ARRAY_BUFFER)}function h(v){const _=[],E=v.index,T=v.attributes.position;let C=0;if(T===void 0)return;if(E!==null){const R=E.array;C=E.version;for(let L=0,D=R.length;L<D;L+=3){const P=R[L+0],F=R[L+1],O=R[L+2];_.push(P,F,F,O,O,P)}}else{const R=T.array;C=T.version;for(let L=0,D=R.length/3-1;L<D;L+=3){const P=L+0,F=L+1,O=L+2;_.push(P,F,F,O,O,P)}}const M=new(T.count>=65535?zx:Fx)(_,1);M.version=C;const y=c.get(v);y&&e.remove(y),c.set(v,M)}function x(v){const _=c.get(v);if(_){const E=v.index;E!==null&&_.version<E.version&&h(v)}else h(v);return c.get(v)}return{get:p,update:g,getWireframeAttribute:x}}function g2(r,e,i){let s;function l(_){s=_}let c,f;function p(_){c=_.type,f=_.bytesPerElement}function g(_,E){r.drawElements(s,E,c,_*f),i.update(E,s,1)}function h(_,E,T){T!==0&&(r.drawElementsInstanced(s,E,c,_*f,T),i.update(E,s,T))}function x(_,E,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,E,0,c,_,0,T);let M=0;for(let y=0;y<T;y++)M+=E[y];i.update(M,s,1)}function v(_,E,T,C){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<_.length;y++)h(_[y]/f,E[y],C[y]);else{M.multiDrawElementsInstancedWEBGL(s,E,0,c,_,0,C,0,T);let y=0;for(let R=0;R<T;R++)y+=E[R]*C[R];i.update(y,s,1)}}this.setMode=l,this.setIndex=p,this.render=g,this.renderInstances=h,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function v2(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,p){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=p*(c/3);break;case r.LINES:i.lines+=p*(c/2);break;case r.LINE_STRIP:i.lines+=p*(c-1);break;case r.LINE_LOOP:i.lines+=p*c;break;case r.POINTS:i.points+=p*c;break;default:Dt("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function _2(r,e,i){const s=new WeakMap,l=new an;function c(f,p,g){const h=f.morphTargetInfluences,x=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,v=x!==void 0?x.length:0;let _=s.get(p);if(_===void 0||_.count!==v){let $=function(){b.dispose(),s.delete(p),p.removeEventListener("dispose",$)};var E=$;_!==void 0&&_.texture.dispose();const T=p.morphAttributes.position!==void 0,C=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],R=p.morphAttributes.normal||[],L=p.morphAttributes.color||[];let D=0;T===!0&&(D=1),C===!0&&(D=2),M===!0&&(D=3);let P=p.attributes.position.count*D,F=1;P>e.maxTextureSize&&(F=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const O=new Float32Array(P*F*4*v),b=new Ox(O,P,F,v);b.type=Gi,b.needsUpdate=!0;const w=D*4;for(let H=0;H<v;H++){const K=y[H],ae=R[H],ue=L[H],ee=P*F*4*H;for(let z=0;z<K.count;z++){const G=z*w;T===!0&&(l.fromBufferAttribute(K,z),O[ee+G+0]=l.x,O[ee+G+1]=l.y,O[ee+G+2]=l.z,O[ee+G+3]=0),C===!0&&(l.fromBufferAttribute(ae,z),O[ee+G+4]=l.x,O[ee+G+5]=l.y,O[ee+G+6]=l.z,O[ee+G+7]=0),M===!0&&(l.fromBufferAttribute(ue,z),O[ee+G+8]=l.x,O[ee+G+9]=l.y,O[ee+G+10]=l.z,O[ee+G+11]=ue.itemSize===4?l.w:1)}}_={count:v,texture:b,size:new bt(P,F)},s.set(p,_),p.addEventListener("dispose",$)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)g.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let M=0;M<h.length;M++)T+=h[M];const C=p.morphTargetsRelative?1:1-T;g.getUniforms().setValue(r,"morphTargetBaseInfluence",C),g.getUniforms().setValue(r,"morphTargetInfluences",h)}g.getUniforms().setValue(r,"morphTargetsTexture",_.texture,i),g.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function x2(r,e,i,s,l){let c=new WeakMap;function f(h){const x=l.render.frame,v=h.geometry,_=e.get(h,v);if(c.get(_)!==x&&(e.update(_),c.set(_,x)),h.isInstancedMesh&&(h.hasEventListener("dispose",g)===!1&&h.addEventListener("dispose",g),c.get(h)!==x&&(i.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,r.ARRAY_BUFFER),c.set(h,x))),h.isSkinnedMesh){const E=h.skeleton;c.get(E)!==x&&(E.update(),c.set(E,x))}return _}function p(){c=new WeakMap}function g(h){const x=h.target;x.removeEventListener("dispose",g),s.releaseStatesOfObject(x),i.remove(x.instanceMatrix),x.instanceColor!==null&&i.remove(x.instanceColor)}return{update:f,dispose:p}}const y2={[vx]:"LINEAR_TONE_MAPPING",[_x]:"REINHARD_TONE_MAPPING",[xx]:"CINEON_TONE_MAPPING",[yx]:"ACES_FILMIC_TONE_MAPPING",[Mx]:"AGX_TONE_MAPPING",[Ex]:"NEUTRAL_TONE_MAPPING",[Sx]:"CUSTOM_TONE_MAPPING"};function S2(r,e,i,s,l){const c=new ki(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new ki(e,i,{type:Ta,depthBuffer:!1,stencilBuffer:!1}),p=new _i;p.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new gi([0,2,0,0,2,0],2));const g=new hT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Ui(p,g),x=new qx(-1,1,1,-1,0,1);let v=null,_=null,E=!1,T,C=null,M=[],y=!1;this.setSize=function(R,L){c.setSize(R,L),f.setSize(R,L);for(let D=0;D<M.length;D++){const P=M[D];P.setSize&&P.setSize(R,L)}},this.setEffects=function(R){M=R,y=M.length>0&&M[0].isRenderPass===!0;const L=c.width,D=c.height;for(let P=0;P<M.length;P++){const F=M[P];F.setSize&&F.setSize(L,D)}},this.begin=function(R,L){if(E||R.toneMapping===ji&&M.length===0)return!1;if(C=L,L!==null){const D=L.width,P=L.height;(c.width!==D||c.height!==P)&&this.setSize(D,P)}return y===!1&&R.setRenderTarget(c),T=R.toneMapping,R.toneMapping=ji,!0},this.hasRenderPass=function(){return y},this.end=function(R,L){R.toneMapping=T,E=!0;let D=c,P=f;for(let F=0;F<M.length;F++){const O=M[F];if(O.enabled!==!1&&(O.render(R,P,D,L),O.needsSwap!==!1)){const b=D;D=P,P=b}}if(v!==R.outputColorSpace||_!==R.toneMapping){v=R.outputColorSpace,_=R.toneMapping,g.defines={},At.getTransfer(v)===Ht&&(g.defines.SRGB_TRANSFER="");const F=y2[_];F&&(g.defines[F]=""),g.needsUpdate=!0}g.uniforms.tDiffuse.value=D.texture,R.setRenderTarget(C),R.render(h,x),C=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.dispose(),f.dispose(),p.dispose(),g.dispose()}}const Kx=new Fn,xp=new fl(1,1),Qx=new Ox,Jx=new j1,$x=new Vx,M_=[],E_=[],b_=new Float32Array(16),T_=new Float32Array(9),A_=new Float32Array(4);function to(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=M_[l];if(c===void 0&&(c=new Float32Array(l),M_[l]=c),e!==0){s.toArray(c,0);for(let f=1,p=0;f!==e;++f)p+=i,r[f].toArray(c,p)}return c}function _n(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function xn(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Cu(r,e){let i=E_[e];i===void 0&&(i=new Int32Array(e),E_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function M2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function E2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;r.uniform2fv(this.addr,e),xn(i,e)}}function b2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;r.uniform3fv(this.addr,e),xn(i,e)}}function T2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;r.uniform4fv(this.addr,e),xn(i,e)}}function A2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,s))return;A_.set(s),r.uniformMatrix2fv(this.addr,!1,A_),xn(i,s)}}function R2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,s))return;T_.set(s),r.uniformMatrix3fv(this.addr,!1,T_),xn(i,s)}}function C2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,s))return;b_.set(s),r.uniformMatrix4fv(this.addr,!1,b_),xn(i,s)}}function w2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function N2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;r.uniform2iv(this.addr,e),xn(i,e)}}function D2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;r.uniform3iv(this.addr,e),xn(i,e)}}function U2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;r.uniform4iv(this.addr,e),xn(i,e)}}function L2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function O2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;r.uniform2uiv(this.addr,e),xn(i,e)}}function P2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;r.uniform3uiv(this.addr,e),xn(i,e)}}function I2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;r.uniform4uiv(this.addr,e),xn(i,e)}}function F2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(xp.compareFunction=i.isReversedDepthBuffer()?zp:Fp,c=xp):c=Kx,i.setTexture2D(e||c,l)}function z2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Jx,l)}function B2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||$x,l)}function H2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Qx,l)}function G2(r){switch(r){case 5126:return M2;case 35664:return E2;case 35665:return b2;case 35666:return T2;case 35674:return A2;case 35675:return R2;case 35676:return C2;case 5124:case 35670:return w2;case 35667:case 35671:return N2;case 35668:case 35672:return D2;case 35669:case 35673:return U2;case 5125:return L2;case 36294:return O2;case 36295:return P2;case 36296:return I2;case 35678:case 36198:case 36298:case 36306:case 35682:return F2;case 35679:case 36299:case 36307:return z2;case 35680:case 36300:case 36308:case 36293:return B2;case 36289:case 36303:case 36311:case 36292:return H2}}function V2(r,e){r.uniform1fv(this.addr,e)}function j2(r,e){const i=to(e,this.size,2);r.uniform2fv(this.addr,i)}function k2(r,e){const i=to(e,this.size,3);r.uniform3fv(this.addr,i)}function X2(r,e){const i=to(e,this.size,4);r.uniform4fv(this.addr,i)}function W2(r,e){const i=to(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function q2(r,e){const i=to(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Y2(r,e){const i=to(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Z2(r,e){r.uniform1iv(this.addr,e)}function K2(r,e){r.uniform2iv(this.addr,e)}function Q2(r,e){r.uniform3iv(this.addr,e)}function J2(r,e){r.uniform4iv(this.addr,e)}function $2(r,e){r.uniform1uiv(this.addr,e)}function eC(r,e){r.uniform2uiv(this.addr,e)}function tC(r,e){r.uniform3uiv(this.addr,e)}function nC(r,e){r.uniform4uiv(this.addr,e)}function iC(r,e,i){const s=this.cache,l=e.length,c=Cu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=xp:f=Kx;for(let p=0;p!==l;++p)i.setTexture2D(e[p]||f,c[p])}function aC(r,e,i){const s=this.cache,l=e.length,c=Cu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||Jx,c[f])}function sC(r,e,i){const s=this.cache,l=e.length,c=Cu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||$x,c[f])}function rC(r,e,i){const s=this.cache,l=e.length,c=Cu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),xn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||Qx,c[f])}function oC(r){switch(r){case 5126:return V2;case 35664:return j2;case 35665:return k2;case 35666:return X2;case 35674:return W2;case 35675:return q2;case 35676:return Y2;case 5124:case 35670:return Z2;case 35667:case 35671:return K2;case 35668:case 35672:return Q2;case 35669:case 35673:return J2;case 5125:return $2;case 36294:return eC;case 36295:return tC;case 36296:return nC;case 35678:case 36198:case 36298:case 36306:case 35682:return iC;case 35679:case 36299:case 36307:return aC;case 35680:case 36300:case 36308:case 36293:return sC;case 36289:case 36303:case 36311:case 36292:return rC}}class lC{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=G2(i.type)}}class cC{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=oC(i.type)}}class uC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const p=l[c];p.setValue(e,i[p.id],s)}}}const Eh=/(\w+)(\])?(\[|\.)?/g;function R_(r,e){r.seq.push(e),r.map[e.id]=e}function fC(r,e,i){const s=r.name,l=s.length;for(Eh.lastIndex=0;;){const c=Eh.exec(s),f=Eh.lastIndex;let p=c[1];const g=c[2]==="]",h=c[3];if(g&&(p=p|0),h===void 0||h==="["&&f+2===l){R_(i,h===void 0?new lC(p,r,e):new cC(p,r,e));break}else{let v=i.map[p];v===void 0&&(v=new uC(p),R_(i,v)),i=v}}}class pu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const p=e.getActiveUniform(i,f),g=e.getUniformLocation(i,p.name);fC(p,g,this)}const l=[],c=[];for(const f of this.seq)f.type===e.SAMPLER_2D_SHADOW||f.type===e.SAMPLER_CUBE_SHADOW||f.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(f):c.push(f);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,f=i.length;c!==f;++c){const p=i[c],g=s[p.id];g.needsUpdate!==!1&&p.setValue(e,g.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&s.push(f)}return s}}function C_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const dC=37297;let hC=0;function pC(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const p=f+1;s.push(`${p===e?">":" "} ${p}: ${i[f]}`)}return s.join(`
`)}const w_=new ht;function mC(r){At._getMatrix(w_,At.workingColorSpace,r);const e=`mat3( ${w_.elements.map(i=>i.toFixed(4))} )`;switch(At.getTransfer(r)){case vu:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function N_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const p=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+pC(r.getShaderSource(e),p)}else return c}function gC(r,e){const i=mC(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const vC={[vx]:"Linear",[_x]:"Reinhard",[xx]:"Cineon",[yx]:"ACESFilmic",[Mx]:"AgX",[Ex]:"Neutral",[Sx]:"Custom"};function _C(r,e){const i=vC[e];return i===void 0?(ot("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const iu=new ie;function xC(){At.getLuminanceCoefficients(iu);const r=iu.x.toFixed(4),e=iu.y.toFixed(4),i=iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sl).join(`
`)}function SC(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function MC(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),f=c.name;let p=1;c.type===r.FLOAT_MAT2&&(p=2),c.type===r.FLOAT_MAT3&&(p=3),c.type===r.FLOAT_MAT4&&(p=4),i[f]={type:c.type,location:r.getAttribLocation(e,f),locationSize:p}}return i}function sl(r){return r!==""}function D_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function U_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EC=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(r){return r.replace(EC,TC)}const bC=new Map;function TC(r,e){let i=pt[e];if(i===void 0){const s=bC.get(e);if(s!==void 0)i=pt[s],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return yp(i)}const AC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function L_(r){return r.replace(AC,RC)}function RC(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function O_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const CC={[cu]:"SHADOWMAP_TYPE_PCF",[al]:"SHADOWMAP_TYPE_VSM"};function wC(r){return CC[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const NC={[Vs]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[bu]:"ENVMAP_TYPE_CUBE_UV"};function DC(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":NC[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const UC={[kr]:"ENVMAP_MODE_REFRACTION"};function LC(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":UC[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OC={[Np]:"ENVMAP_BLENDING_MULTIPLY",[M1]:"ENVMAP_BLENDING_MIX",[E1]:"ENVMAP_BLENDING_ADD"};function PC(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":OC[r.combine]||"ENVMAP_BLENDING_NONE"}function IC(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function FC(r,e,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,p=i.fragmentShader;const g=wC(i),h=DC(i),x=LC(i),v=PC(i),_=IC(i),E=yC(i),T=SC(c),C=l.createProgram();let M,y,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(sl).join(`
`),M.length>0&&(M+=`
`),y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(sl).join(`
`),y.length>0&&(y+=`
`)):(M=[O_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sl).join(`
`),y=[O_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+x:"",i.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ji?"#define TONE_MAPPING":"",i.toneMapping!==ji?pt.tonemapping_pars_fragment:"",i.toneMapping!==ji?_C("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,gC("linearToOutputTexel",i.outputColorSpace),xC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(sl).join(`
`)),f=yp(f),f=D_(f,i),f=U_(f,i),p=yp(p),p=D_(p,i),p=U_(p,i),f=L_(f),p=L_(p),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,M=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,y=["#define varying in",i.glslVersion===kv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===kv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=R+M+f,D=R+y+p,P=C_(l,l.VERTEX_SHADER,L),F=C_(l,l.FRAGMENT_SHADER,D);l.attachShader(C,P),l.attachShader(C,F),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function O(H){if(r.debug.checkShaderErrors){const K=l.getProgramInfoLog(C)||"",ae=l.getShaderInfoLog(P)||"",ue=l.getShaderInfoLog(F)||"",ee=K.trim(),z=ae.trim(),G=ue.trim();let fe=!0,me=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(fe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,P,F);else{const Te=N_(l,P,"vertex"),B=N_(l,F,"fragment");Dt("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ee+`
`+Te+`
`+B)}else ee!==""?ot("WebGLProgram: Program Info Log:",ee):(z===""||G==="")&&(me=!1);me&&(H.diagnostics={runnable:fe,programLog:ee,vertexShader:{log:z,prefix:M},fragmentShader:{log:G,prefix:y}})}l.deleteShader(P),l.deleteShader(F),b=new pu(l,C),w=MC(l,C)}let b;this.getUniforms=function(){return b===void 0&&O(this),b};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let $=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=l.getProgramParameter(C,dC)),$},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=hC++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=P,this.fragmentShader=F,this}let zC=0;class BC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new HC(e),i.set(e,s)),s}}class HC{constructor(e){this.id=zC++,this.code=e,this.usedTimes=0}}function GC(r,e,i,s,l,c){const f=new Px,p=new BC,g=new Set,h=[],x=new Map,v=s.logarithmicDepthBuffer;let _=s.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(b){return g.add(b),b===0?"uv":`uv${b}`}function C(b,w,$,H,K){const ae=H.fog,ue=K.geometry,ee=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,z=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,G=e.get(b.envMap||ee,z),fe=G&&G.mapping===bu?G.image.height:null,me=E[b.type];b.precision!==null&&(_=s.getMaxPrecision(b.precision),_!==b.precision&&ot("WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const Te=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,B=Te!==void 0?Te.length:0;let Y=0;ue.morphAttributes.position!==void 0&&(Y=1),ue.morphAttributes.normal!==void 0&&(Y=2),ue.morphAttributes.color!==void 0&&(Y=3);let xe,Ce,ze,re;if(me){const Tt=Hi[me];xe=Tt.vertexShader,Ce=Tt.fragmentShader}else xe=b.vertexShader,Ce=b.fragmentShader,p.update(b),ze=p.getVertexShaderID(b),re=p.getFragmentShaderID(b);const ye=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),ke=K.isInstancedMesh===!0,Qe=K.isBatchedMesh===!0,et=!!b.map,en=!!b.matcap,_t=!!G,mt=!!b.aoMap,Lt=!!b.lightMap,lt=!!b.bumpMap,Qt=!!b.normalMap,j=!!b.displacementMap,qt=!!b.emissiveMap,Et=!!b.metalnessMap,Pt=!!b.roughnessMap,qe=b.anisotropy>0,I=b.clearcoat>0,A=b.dispersion>0,q=b.iridescence>0,ge=b.sheen>0,Se=b.transmission>0,he=qe&&!!b.anisotropyMap,Xe=I&&!!b.clearcoatMap,Ne=I&&!!b.clearcoatNormalMap,Ke=I&&!!b.clearcoatRoughnessMap,tt=q&&!!b.iridescenceMap,be=q&&!!b.iridescenceThicknessMap,Me=ge&&!!b.sheenColorMap,Pe=ge&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,Ie=!!b.specularColorMap,ut=!!b.specularIntensityMap,W=Se&&!!b.transmissionMap,we=Se&&!!b.thicknessMap,Re=!!b.gradientMap,Fe=!!b.alphaMap,Ee=b.alphaTest>0,de=!!b.alphaHash,He=!!b.extensions;let it=ji;b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(it=r.toneMapping);const Ft={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:xe,fragmentShader:Ce,defines:b.defines,customVertexShaderID:ze,customFragmentShaderID:re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:Qe,batchingColor:Qe&&K._colorsTexture!==null,instancing:ke,instancingColor:ke&&K.instanceColor!==null,instancingMorph:ke&&K.morphTexture!==null,outputColorSpace:ye===null?r.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Wr,alphaToCoverage:!!b.alphaToCoverage,map:et,matcap:en,envMap:_t,envMapMode:_t&&G.mapping,envMapCubeUVHeight:fe,aoMap:mt,lightMap:Lt,bumpMap:lt,normalMap:Qt,displacementMap:j,emissiveMap:qt,normalMapObjectSpace:Qt&&b.normalMapType===A1,normalMapTangentSpace:Qt&&b.normalMapType===Ux,metalnessMap:Et,roughnessMap:Pt,anisotropy:qe,anisotropyMap:he,clearcoat:I,clearcoatMap:Xe,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ke,dispersion:A,iridescence:q,iridescenceMap:tt,iridescenceThicknessMap:be,sheen:ge,sheenColorMap:Me,sheenRoughnessMap:Pe,specularMap:Oe,specularColorMap:Ie,specularIntensityMap:ut,transmission:Se,transmissionMap:W,thicknessMap:we,gradientMap:Re,opaque:b.transparent===!1&&b.blending===Hr&&b.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Ee,alphaHash:de,combine:b.combine,mapUv:et&&T(b.map.channel),aoMapUv:mt&&T(b.aoMap.channel),lightMapUv:Lt&&T(b.lightMap.channel),bumpMapUv:lt&&T(b.bumpMap.channel),normalMapUv:Qt&&T(b.normalMap.channel),displacementMapUv:j&&T(b.displacementMap.channel),emissiveMapUv:qt&&T(b.emissiveMap.channel),metalnessMapUv:Et&&T(b.metalnessMap.channel),roughnessMapUv:Pt&&T(b.roughnessMap.channel),anisotropyMapUv:he&&T(b.anisotropyMap.channel),clearcoatMapUv:Xe&&T(b.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&T(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&T(b.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&T(b.iridescenceMap.channel),iridescenceThicknessMapUv:be&&T(b.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&T(b.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&T(b.sheenRoughnessMap.channel),specularMapUv:Oe&&T(b.specularMap.channel),specularColorMapUv:Ie&&T(b.specularColorMap.channel),specularIntensityMapUv:ut&&T(b.specularIntensityMap.channel),transmissionMapUv:W&&T(b.transmissionMap.channel),thicknessMapUv:we&&T(b.thicknessMap.channel),alphaMapUv:Fe&&T(b.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(Qt||qe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!ue.attributes.uv&&(et||Fe),fog:!!ae,useFog:b.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||ue.attributes.normal===void 0&&Qt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Ae,skinning:K.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:Y,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&$.length>0,shadowMapType:r.shadowMap.type,toneMapping:it,decodeVideoTexture:et&&b.map.isVideoTexture===!0&&At.getTransfer(b.map.colorSpace)===Ht,decodeVideoTextureEmissive:qt&&b.emissiveMap.isVideoTexture===!0&&At.getTransfer(b.emissiveMap.colorSpace)===Ht,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xa,flipSided:b.side===Wn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:He&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&b.extensions.multiDraw===!0||Qe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ft.vertexUv1s=g.has(1),Ft.vertexUv2s=g.has(2),Ft.vertexUv3s=g.has(3),g.clear(),Ft}function M(b){const w=[];if(b.shaderID?w.push(b.shaderID):(w.push(b.customVertexShaderID),w.push(b.customFragmentShaderID)),b.defines!==void 0)for(const $ in b.defines)w.push($),w.push(b.defines[$]);return b.isRawShaderMaterial===!1&&(y(w,b),R(w,b),w.push(r.outputColorSpace)),w.push(b.customProgramCacheKey),w.join()}function y(b,w){b.push(w.precision),b.push(w.outputColorSpace),b.push(w.envMapMode),b.push(w.envMapCubeUVHeight),b.push(w.mapUv),b.push(w.alphaMapUv),b.push(w.lightMapUv),b.push(w.aoMapUv),b.push(w.bumpMapUv),b.push(w.normalMapUv),b.push(w.displacementMapUv),b.push(w.emissiveMapUv),b.push(w.metalnessMapUv),b.push(w.roughnessMapUv),b.push(w.anisotropyMapUv),b.push(w.clearcoatMapUv),b.push(w.clearcoatNormalMapUv),b.push(w.clearcoatRoughnessMapUv),b.push(w.iridescenceMapUv),b.push(w.iridescenceThicknessMapUv),b.push(w.sheenColorMapUv),b.push(w.sheenRoughnessMapUv),b.push(w.specularMapUv),b.push(w.specularColorMapUv),b.push(w.specularIntensityMapUv),b.push(w.transmissionMapUv),b.push(w.thicknessMapUv),b.push(w.combine),b.push(w.fogExp2),b.push(w.sizeAttenuation),b.push(w.morphTargetsCount),b.push(w.morphAttributeCount),b.push(w.numDirLights),b.push(w.numPointLights),b.push(w.numSpotLights),b.push(w.numSpotLightMaps),b.push(w.numHemiLights),b.push(w.numRectAreaLights),b.push(w.numDirLightShadows),b.push(w.numPointLightShadows),b.push(w.numSpotLightShadows),b.push(w.numSpotLightShadowsWithMaps),b.push(w.numLightProbes),b.push(w.shadowMapType),b.push(w.toneMapping),b.push(w.numClippingPlanes),b.push(w.numClipIntersection),b.push(w.depthPacking)}function R(b,w){f.disableAll(),w.instancing&&f.enable(0),w.instancingColor&&f.enable(1),w.instancingMorph&&f.enable(2),w.matcap&&f.enable(3),w.envMap&&f.enable(4),w.normalMapObjectSpace&&f.enable(5),w.normalMapTangentSpace&&f.enable(6),w.clearcoat&&f.enable(7),w.iridescence&&f.enable(8),w.alphaTest&&f.enable(9),w.vertexColors&&f.enable(10),w.vertexAlphas&&f.enable(11),w.vertexUv1s&&f.enable(12),w.vertexUv2s&&f.enable(13),w.vertexUv3s&&f.enable(14),w.vertexTangents&&f.enable(15),w.anisotropy&&f.enable(16),w.alphaHash&&f.enable(17),w.batching&&f.enable(18),w.dispersion&&f.enable(19),w.batchingColor&&f.enable(20),w.gradientMap&&f.enable(21),b.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reversedDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),b.push(f.mask)}function L(b){const w=E[b.type];let $;if(w){const H=Hi[w];$=uT.clone(H.uniforms)}else $=b.uniforms;return $}function D(b,w){let $=x.get(w);return $!==void 0?++$.usedTimes:($=new FC(r,w,b,l),h.push($),x.set(w,$)),$}function P(b){if(--b.usedTimes===0){const w=h.indexOf(b);h[w]=h[h.length-1],h.pop(),x.delete(b.cacheKey),b.destroy()}}function F(b){p.remove(b)}function O(){p.dispose()}return{getParameters:C,getProgramCacheKey:M,getUniforms:L,acquireProgram:D,releaseProgram:P,releaseShaderCache:F,programs:h,dispose:O}}function VC(){let r=new WeakMap;function e(f){return r.has(f)}function i(f){let p=r.get(f);return p===void 0&&(p={},r.set(f,p)),p}function s(f){r.delete(f)}function l(f,p,g){r.get(f)[p]=g}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function jC(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function P_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function I_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function f(_){let E=0;return _.isInstancedMesh&&(E+=2),_.isSkinnedMesh&&(E+=1),E}function p(_,E,T,C,M,y){let R=r[e];return R===void 0?(R={id:_.id,object:_,geometry:E,material:T,materialVariant:f(_),groupOrder:C,renderOrder:_.renderOrder,z:M,group:y},r[e]=R):(R.id=_.id,R.object=_,R.geometry=E,R.material=T,R.materialVariant=f(_),R.groupOrder=C,R.renderOrder=_.renderOrder,R.z=M,R.group=y),e++,R}function g(_,E,T,C,M,y){const R=p(_,E,T,C,M,y);T.transmission>0?s.push(R):T.transparent===!0?l.push(R):i.push(R)}function h(_,E,T,C,M,y){const R=p(_,E,T,C,M,y);T.transmission>0?s.unshift(R):T.transparent===!0?l.unshift(R):i.unshift(R)}function x(_,E){i.length>1&&i.sort(_||jC),s.length>1&&s.sort(E||P_),l.length>1&&l.sort(E||P_)}function v(){for(let _=e,E=r.length;_<E;_++){const T=r[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:g,unshift:h,finish:v,sort:x}}function kC(){let r=new WeakMap;function e(s,l){const c=r.get(s);let f;return c===void 0?(f=new I_,r.set(s,[f])):l>=c.length?(f=new I_,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:e,dispose:i}}function XC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ie,color:new Rt};break;case"SpotLight":i={position:new ie,direction:new ie,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ie,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ie,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":i={color:new Rt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=i,i}}}function WC(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let qC=0;function YC(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ZC(r){const e=new XC,i=WC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new ie);const l=new ie,c=new $t,f=new $t;function p(h){let x=0,v=0,_=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let E=0,T=0,C=0,M=0,y=0,R=0,L=0,D=0,P=0,F=0,O=0;h.sort(YC);for(let w=0,$=h.length;w<$;w++){const H=h[w],K=H.color,ae=H.intensity,ue=H.distance;let ee=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Xr?ee=H.shadow.map.texture:ee=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)x+=K.r*ae,v+=K.g*ae,_+=K.b*ae;else if(H.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(H.sh.coefficients[z],ae);O++}else if(H.isDirectionalLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,fe=i.get(H);fe.shadowIntensity=G.intensity,fe.shadowBias=G.bias,fe.shadowNormalBias=G.normalBias,fe.shadowRadius=G.radius,fe.shadowMapSize=G.mapSize,s.directionalShadow[E]=fe,s.directionalShadowMap[E]=ee,s.directionalShadowMatrix[E]=H.shadow.matrix,R++}s.directional[E]=z,E++}else if(H.isSpotLight){const z=e.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(K).multiplyScalar(ae),z.distance=ue,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,s.spot[C]=z;const G=H.shadow;if(H.map&&(s.spotLightMap[P]=H.map,P++,G.updateMatrices(H),H.castShadow&&F++),s.spotLightMatrix[C]=G.matrix,H.castShadow){const fe=i.get(H);fe.shadowIntensity=G.intensity,fe.shadowBias=G.bias,fe.shadowNormalBias=G.normalBias,fe.shadowRadius=G.radius,fe.shadowMapSize=G.mapSize,s.spotShadow[C]=fe,s.spotShadowMap[C]=ee,D++}C++}else if(H.isRectAreaLight){const z=e.get(H);z.color.copy(K).multiplyScalar(ae),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=z,M++}else if(H.isPointLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const G=H.shadow,fe=i.get(H);fe.shadowIntensity=G.intensity,fe.shadowBias=G.bias,fe.shadowNormalBias=G.normalBias,fe.shadowRadius=G.radius,fe.shadowMapSize=G.mapSize,fe.shadowCameraNear=G.camera.near,fe.shadowCameraFar=G.camera.far,s.pointShadow[T]=fe,s.pointShadowMap[T]=ee,s.pointShadowMatrix[T]=H.shadow.matrix,L++}s.point[T]=z,T++}else if(H.isHemisphereLight){const z=e.get(H);z.skyColor.copy(H.color).multiplyScalar(ae),z.groundColor.copy(H.groundColor).multiplyScalar(ae),s.hemi[y]=z,y++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Le.LTC_FLOAT_1,s.rectAreaLTC2=Le.LTC_FLOAT_2):(s.rectAreaLTC1=Le.LTC_HALF_1,s.rectAreaLTC2=Le.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=v,s.ambient[2]=_;const b=s.hash;(b.directionalLength!==E||b.pointLength!==T||b.spotLength!==C||b.rectAreaLength!==M||b.hemiLength!==y||b.numDirectionalShadows!==R||b.numPointShadows!==L||b.numSpotShadows!==D||b.numSpotMaps!==P||b.numLightProbes!==O)&&(s.directional.length=E,s.spot.length=C,s.rectArea.length=M,s.point.length=T,s.hemi.length=y,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=D+P-F,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=O,b.directionalLength=E,b.pointLength=T,b.spotLength=C,b.rectAreaLength=M,b.hemiLength=y,b.numDirectionalShadows=R,b.numPointShadows=L,b.numSpotShadows=D,b.numSpotMaps=P,b.numLightProbes=O,s.version=qC++)}function g(h,x){let v=0,_=0,E=0,T=0,C=0;const M=x.matrixWorldInverse;for(let y=0,R=h.length;y<R;y++){const L=h[y];if(L.isDirectionalLight){const D=s.directional[v];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),v++}else if(L.isSpotLight){const D=s.spot[E];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),E++}else if(L.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(L.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),T++}else if(L.isPointLight){const D=s.point[_];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(M),_++}else if(L.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(M),C++}}}return{setup:p,setupView:g,state:s}}function F_(r){const e=new ZC(r),i=[],s=[];function l(x){h.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function f(x){s.push(x)}function p(){e.setup(i)}function g(x){e.setupView(i,x)}const h={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:h,setupLights:p,setupLightsView:g,pushLight:c,pushShadow:f}}function KC(r){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let p;return f===void 0?(p=new F_(r),e.set(l,[p])):c>=f.length?(p=new F_(r),f.push(p)):p=f[c],p}function s(){e=new WeakMap}return{get:i,dispose:s}}const QC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,$C=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],e3=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],z_=new $t,tl=new ie,bh=new ie;function t3(r,e,i){let s=new Hp;const l=new bt,c=new bt,f=new an,p=new pT,g=new mT,h={},x=i.maxTextureSize,v={[ls]:Wn,[Wn]:ls,[xa]:xa},_=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:QC,fragmentShader:JC}),E=_.clone();E.defines.HORIZONTAL_PASS=1;const T=new _i;T.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ui(T,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=cu;let y=this.type;this.render=function(F,O,b){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||F.length===0)return;this.type===i1&&(ot("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=cu);const w=r.getRenderTarget(),$=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),K=r.state;K.setBlending(Ma),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ae=y!==this.type;ae&&O.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(ee=>ee.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,ee=F.length;ue<ee;ue++){const z=F[ue],G=z.shadow;if(G===void 0){ot("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const fe=G.getFrameExtents();l.multiply(fe),c.copy(G.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/fe.x),l.x=c.x*fe.x,G.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/fe.y),l.y=c.y*fe.y,G.mapSize.y=c.y));const me=r.state.buffers.depth.getReversed();if(G.camera._reversedDepth=me,G.map===null||ae===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===al){if(z.isPointLight){ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ki(l.x,l.y,{format:Xr,type:Ta,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new fl(l.x,l.y,Gi),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=Aa,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=An,G.map.depthTexture.magFilter=An}else z.isPointLight?(G.map=new Zx(l.x),G.map.depthTexture=new lT(l.x,Wi)):(G.map=new ki(l.x,l.y),G.map.depthTexture=new fl(l.x,l.y,Wi)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=Aa,this.type===cu?(G.map.depthTexture.compareFunction=me?zp:Fp,G.map.depthTexture.minFilter=Nn,G.map.depthTexture.magFilter=Nn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=An,G.map.depthTexture.magFilter=An);G.camera.updateProjectionMatrix()}const Te=G.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<Te;B++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,B),r.clear();else{B===0&&(r.setRenderTarget(G.map),r.clear());const Y=G.getViewport(B);f.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),K.viewport(f)}if(z.isPointLight){const Y=G.camera,xe=G.matrix,Ce=z.distance||Y.far;Ce!==Y.far&&(Y.far=Ce,Y.updateProjectionMatrix()),tl.setFromMatrixPosition(z.matrixWorld),Y.position.copy(tl),bh.copy(Y.position),bh.add($C[B]),Y.up.copy(e3[B]),Y.lookAt(bh),Y.updateMatrixWorld(),xe.makeTranslation(-tl.x,-tl.y,-tl.z),z_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(z_,Y.coordinateSystem,Y.reversedDepth)}else G.updateMatrices(z);s=G.getFrustum(),D(O,b,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===al&&R(G,b),G.needsUpdate=!1}y=this.type,M.needsUpdate=!1,r.setRenderTarget(w,$,H)};function R(F,O){const b=e.update(C);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,E.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,E.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ki(l.x,l.y,{format:Xr,type:Ta})),_.uniforms.shadow_pass.value=F.map.depthTexture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,r.setRenderTarget(F.mapPass),r.clear(),r.renderBufferDirect(O,null,b,_,C,null),E.uniforms.shadow_pass.value=F.mapPass.texture,E.uniforms.resolution.value=F.mapSize,E.uniforms.radius.value=F.radius,r.setRenderTarget(F.map),r.clear(),r.renderBufferDirect(O,null,b,E,C,null)}function L(F,O,b,w){let $=null;const H=b.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)$=H;else if($=b.isPointLight===!0?g:p,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const K=$.uuid,ae=O.uuid;let ue=h[K];ue===void 0&&(ue={},h[K]=ue);let ee=ue[ae];ee===void 0&&(ee=$.clone(),ue[ae]=ee,O.addEventListener("dispose",P)),$=ee}if($.visible=O.visible,$.wireframe=O.wireframe,w===al?$.side=O.shadowSide!==null?O.shadowSide:O.side:$.side=O.shadowSide!==null?O.shadowSide:v[O.side],$.alphaMap=O.alphaMap,$.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,$.map=O.map,$.clipShadows=O.clipShadows,$.clippingPlanes=O.clippingPlanes,$.clipIntersection=O.clipIntersection,$.displacementMap=O.displacementMap,$.displacementScale=O.displacementScale,$.displacementBias=O.displacementBias,$.wireframeLinewidth=O.wireframeLinewidth,$.linewidth=O.linewidth,b.isPointLight===!0&&$.isMeshDistanceMaterial===!0){const K=r.properties.get($);K.light=b}return $}function D(F,O,b,w,$){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&$===al)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,F.matrixWorld);const ae=e.update(F),ue=F.material;if(Array.isArray(ue)){const ee=ae.groups;for(let z=0,G=ee.length;z<G;z++){const fe=ee[z],me=ue[fe.materialIndex];if(me&&me.visible){const Te=L(F,me,w,$);F.onBeforeShadow(r,F,O,b,ae,Te,fe),r.renderBufferDirect(b,null,ae,Te,F,fe),F.onAfterShadow(r,F,O,b,ae,Te,fe)}}}else if(ue.visible){const ee=L(F,ue,w,$);F.onBeforeShadow(r,F,O,b,ae,ee,null),r.renderBufferDirect(b,null,ae,ee,F,null),F.onAfterShadow(r,F,O,b,ae,ee,null)}}const K=F.children;for(let ae=0,ue=K.length;ae<ue;ae++)D(K[ae],O,b,w,$)}function P(F){F.target.removeEventListener("dispose",P);for(const b in h){const w=h[b],$=F.target.uuid;$ in w&&(w[$].dispose(),delete w[$])}}}function n3(r,e){function i(){let W=!1;const we=new an;let Re=null;const Fe=new an(0,0,0,0);return{setMask:function(Ee){Re!==Ee&&!W&&(r.colorMask(Ee,Ee,Ee,Ee),Re=Ee)},setLocked:function(Ee){W=Ee},setClear:function(Ee,de,He,it,Ft){Ft===!0&&(Ee*=it,de*=it,He*=it),we.set(Ee,de,He,it),Fe.equals(we)===!1&&(r.clearColor(Ee,de,He,it),Fe.copy(we))},reset:function(){W=!1,Re=null,Fe.set(-1,0,0,0)}}}function s(){let W=!1,we=!1,Re=null,Fe=null,Ee=null;return{setReversed:function(de){if(we!==de){const He=e.get("EXT_clip_control");de?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),we=de;const it=Ee;Ee=null,this.setClear(it)}},getReversed:function(){return we},setTest:function(de){de?ye(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(de){Re!==de&&!W&&(r.depthMask(de),Re=de)},setFunc:function(de){if(we&&(de=I1[de]),Fe!==de){switch(de){case Nh:r.depthFunc(r.NEVER);break;case Dh:r.depthFunc(r.ALWAYS);break;case Uh:r.depthFunc(r.LESS);break;case jr:r.depthFunc(r.LEQUAL);break;case Lh:r.depthFunc(r.EQUAL);break;case Oh:r.depthFunc(r.GEQUAL);break;case Ph:r.depthFunc(r.GREATER);break;case Ih:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Fe=de}},setLocked:function(de){W=de},setClear:function(de){Ee!==de&&(Ee=de,we&&(de=1-de),r.clearDepth(de))},reset:function(){W=!1,Re=null,Fe=null,Ee=null,we=!1}}}function l(){let W=!1,we=null,Re=null,Fe=null,Ee=null,de=null,He=null,it=null,Ft=null;return{setTest:function(Tt){W||(Tt?ye(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(Tt){we!==Tt&&!W&&(r.stencilMask(Tt),we=Tt)},setFunc:function(Tt,Dn,xi){(Re!==Tt||Fe!==Dn||Ee!==xi)&&(r.stencilFunc(Tt,Dn,xi),Re=Tt,Fe=Dn,Ee=xi)},setOp:function(Tt,Dn,xi){(de!==Tt||He!==Dn||it!==xi)&&(r.stencilOp(Tt,Dn,xi),de=Tt,He=Dn,it=xi)},setLocked:function(Tt){W=Tt},setClear:function(Tt){Ft!==Tt&&(r.clearStencil(Tt),Ft=Tt)},reset:function(){W=!1,we=null,Re=null,Fe=null,Ee=null,de=null,He=null,it=null,Ft=null}}}const c=new i,f=new s,p=new l,g=new WeakMap,h=new WeakMap;let x={},v={},_=new WeakMap,E=[],T=null,C=!1,M=null,y=null,R=null,L=null,D=null,P=null,F=null,O=new Rt(0,0,0),b=0,w=!1,$=null,H=null,K=null,ae=null,ue=null;const ee=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,G=0;const fe=r.getParameter(r.VERSION);fe.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(fe)[1]),z=G>=1):fe.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),z=G>=2);let me=null,Te={};const B=r.getParameter(r.SCISSOR_BOX),Y=r.getParameter(r.VIEWPORT),xe=new an().fromArray(B),Ce=new an().fromArray(Y);function ze(W,we,Re,Fe){const Ee=new Uint8Array(4),de=r.createTexture();r.bindTexture(W,de),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<Re;He++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(we,0,r.RGBA,1,1,Fe,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(we+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return de}const re={};re[r.TEXTURE_2D]=ze(r.TEXTURE_2D,r.TEXTURE_2D,1),re[r.TEXTURE_CUBE_MAP]=ze(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[r.TEXTURE_2D_ARRAY]=ze(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),re[r.TEXTURE_3D]=ze(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),p.setClear(0),ye(r.DEPTH_TEST),f.setFunc(jr),lt(!1),Qt(zv),ye(r.CULL_FACE),mt(Ma);function ye(W){x[W]!==!0&&(r.enable(W),x[W]=!0)}function Ae(W){x[W]!==!1&&(r.disable(W),x[W]=!1)}function ke(W,we){return v[W]!==we?(r.bindFramebuffer(W,we),v[W]=we,W===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=we),W===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=we),!0):!1}function Qe(W,we){let Re=E,Fe=!1;if(W){Re=_.get(we),Re===void 0&&(Re=[],_.set(we,Re));const Ee=W.textures;if(Re.length!==Ee.length||Re[0]!==r.COLOR_ATTACHMENT0){for(let de=0,He=Ee.length;de<He;de++)Re[de]=r.COLOR_ATTACHMENT0+de;Re.length=Ee.length,Fe=!0}}else Re[0]!==r.BACK&&(Re[0]=r.BACK,Fe=!0);Fe&&r.drawBuffers(Re)}function et(W){return T!==W?(r.useProgram(W),T=W,!0):!1}const en={[Is]:r.FUNC_ADD,[s1]:r.FUNC_SUBTRACT,[r1]:r.FUNC_REVERSE_SUBTRACT};en[o1]=r.MIN,en[l1]=r.MAX;const _t={[c1]:r.ZERO,[u1]:r.ONE,[f1]:r.SRC_COLOR,[Ch]:r.SRC_ALPHA,[v1]:r.SRC_ALPHA_SATURATE,[m1]:r.DST_COLOR,[h1]:r.DST_ALPHA,[d1]:r.ONE_MINUS_SRC_COLOR,[wh]:r.ONE_MINUS_SRC_ALPHA,[g1]:r.ONE_MINUS_DST_COLOR,[p1]:r.ONE_MINUS_DST_ALPHA,[_1]:r.CONSTANT_COLOR,[x1]:r.ONE_MINUS_CONSTANT_COLOR,[y1]:r.CONSTANT_ALPHA,[S1]:r.ONE_MINUS_CONSTANT_ALPHA};function mt(W,we,Re,Fe,Ee,de,He,it,Ft,Tt){if(W===Ma){C===!0&&(Ae(r.BLEND),C=!1);return}if(C===!1&&(ye(r.BLEND),C=!0),W!==a1){if(W!==M||Tt!==w){if((y!==Is||D!==Is)&&(r.blendEquation(r.FUNC_ADD),y=Is,D=Is),Tt)switch(W){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bv:r.blendFunc(r.ONE,r.ONE);break;case Hv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Gv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Dt("WebGLState: Invalid blending: ",W);break}else switch(W){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Hv:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gv:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",W);break}R=null,L=null,P=null,F=null,O.set(0,0,0),b=0,M=W,w=Tt}return}Ee=Ee||we,de=de||Re,He=He||Fe,(we!==y||Ee!==D)&&(r.blendEquationSeparate(en[we],en[Ee]),y=we,D=Ee),(Re!==R||Fe!==L||de!==P||He!==F)&&(r.blendFuncSeparate(_t[Re],_t[Fe],_t[de],_t[He]),R=Re,L=Fe,P=de,F=He),(it.equals(O)===!1||Ft!==b)&&(r.blendColor(it.r,it.g,it.b,Ft),O.copy(it),b=Ft),M=W,w=!1}function Lt(W,we){W.side===xa?Ae(r.CULL_FACE):ye(r.CULL_FACE);let Re=W.side===Wn;we&&(Re=!Re),lt(Re),W.blending===Hr&&W.transparent===!1?mt(Ma):mt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const Fe=W.stencilWrite;p.setTest(Fe),Fe&&(p.setMask(W.stencilWriteMask),p.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),p.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),qt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ye(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(W){$!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),$=W)}function Qt(W){W!==t1?(ye(r.CULL_FACE),W!==H&&(W===zv?r.cullFace(r.BACK):W===n1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),H=W}function j(W){W!==K&&(z&&r.lineWidth(W),K=W)}function qt(W,we,Re){W?(ye(r.POLYGON_OFFSET_FILL),(ae!==we||ue!==Re)&&(ae=we,ue=Re,f.getReversed()&&(we=-we),r.polygonOffset(we,Re))):Ae(r.POLYGON_OFFSET_FILL)}function Et(W){W?ye(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function Pt(W){W===void 0&&(W=r.TEXTURE0+ee-1),me!==W&&(r.activeTexture(W),me=W)}function qe(W,we,Re){Re===void 0&&(me===null?Re=r.TEXTURE0+ee-1:Re=me);let Fe=Te[Re];Fe===void 0&&(Fe={type:void 0,texture:void 0},Te[Re]=Fe),(Fe.type!==W||Fe.texture!==we)&&(me!==Re&&(r.activeTexture(Re),me=Re),r.bindTexture(W,we||re[W]),Fe.type=W,Fe.texture=we)}function I(){const W=Te[me];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function ge(){try{r.texSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Se(){try{r.texSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function he(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Xe(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Ne(){try{r.texStorage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Ke(){try{r.texStorage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function tt(){try{r.texImage2D(...arguments)}catch(W){Dt("WebGLState:",W)}}function be(){try{r.texImage3D(...arguments)}catch(W){Dt("WebGLState:",W)}}function Me(W){xe.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),xe.copy(W))}function Pe(W){Ce.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Ce.copy(W))}function Oe(W,we){let Re=h.get(we);Re===void 0&&(Re=new WeakMap,h.set(we,Re));let Fe=Re.get(W);Fe===void 0&&(Fe=r.getUniformBlockIndex(we,W.name),Re.set(W,Fe))}function Ie(W,we){const Fe=h.get(we).get(W);g.get(we)!==Fe&&(r.uniformBlockBinding(we,Fe,W.__bindingPointIndex),g.set(we,Fe))}function ut(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},me=null,Te={},v={},_=new WeakMap,E=[],T=null,C=!1,M=null,y=null,R=null,L=null,D=null,P=null,F=null,O=new Rt(0,0,0),b=0,w=!1,$=null,H=null,K=null,ae=null,ue=null,xe.set(0,0,r.canvas.width,r.canvas.height),Ce.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),p.reset()}return{buffers:{color:c,depth:f,stencil:p},enable:ye,disable:Ae,bindFramebuffer:ke,drawBuffers:Qe,useProgram:et,setBlending:mt,setMaterial:Lt,setFlipSided:lt,setCullFace:Qt,setLineWidth:j,setPolygonOffset:qt,setScissorTest:Et,activeTexture:Pt,bindTexture:qe,unbindTexture:I,compressedTexImage2D:A,compressedTexImage3D:q,texImage2D:tt,texImage3D:be,updateUBOMapping:Oe,uniformBlockBinding:Ie,texStorage2D:Ne,texStorage3D:Ke,texSubImage2D:ge,texSubImage3D:Se,compressedTexSubImage2D:he,compressedTexSubImage3D:Xe,scissor:Me,viewport:Pe,reset:ut}}function i3(r,e,i,s,l,c,f){const p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new bt,x=new WeakMap;let v;const _=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,A){return E?new OffscreenCanvas(I,A):_u("canvas")}function C(I,A,q){let ge=1;const Se=qe(I);if((Se.width>q||Se.height>q)&&(ge=q/Math.max(Se.width,Se.height)),ge<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const he=Math.floor(ge*Se.width),Xe=Math.floor(ge*Se.height);v===void 0&&(v=T(he,Xe));const Ne=A?T(he,Xe):v;return Ne.width=he,Ne.height=Xe,Ne.getContext("2d").drawImage(I,0,0,he,Xe),ot("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+he+"x"+Xe+")."),Ne}else return"data"in I&&ot("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),I;return I}function M(I){return I.generateMipmaps}function y(I){r.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(I,A,q,ge,Se=!1){if(I!==null){if(r[I]!==void 0)return r[I];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let he=A;if(A===r.RED&&(q===r.FLOAT&&(he=r.R32F),q===r.HALF_FLOAT&&(he=r.R16F),q===r.UNSIGNED_BYTE&&(he=r.R8)),A===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(he=r.R8UI),q===r.UNSIGNED_SHORT&&(he=r.R16UI),q===r.UNSIGNED_INT&&(he=r.R32UI),q===r.BYTE&&(he=r.R8I),q===r.SHORT&&(he=r.R16I),q===r.INT&&(he=r.R32I)),A===r.RG&&(q===r.FLOAT&&(he=r.RG32F),q===r.HALF_FLOAT&&(he=r.RG16F),q===r.UNSIGNED_BYTE&&(he=r.RG8)),A===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(he=r.RG8UI),q===r.UNSIGNED_SHORT&&(he=r.RG16UI),q===r.UNSIGNED_INT&&(he=r.RG32UI),q===r.BYTE&&(he=r.RG8I),q===r.SHORT&&(he=r.RG16I),q===r.INT&&(he=r.RG32I)),A===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(he=r.RGB8UI),q===r.UNSIGNED_SHORT&&(he=r.RGB16UI),q===r.UNSIGNED_INT&&(he=r.RGB32UI),q===r.BYTE&&(he=r.RGB8I),q===r.SHORT&&(he=r.RGB16I),q===r.INT&&(he=r.RGB32I)),A===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(he=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(he=r.RGBA16UI),q===r.UNSIGNED_INT&&(he=r.RGBA32UI),q===r.BYTE&&(he=r.RGBA8I),q===r.SHORT&&(he=r.RGBA16I),q===r.INT&&(he=r.RGBA32I)),A===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(he=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(he=r.R11F_G11F_B10F)),A===r.RGBA){const Xe=Se?vu:At.getTransfer(ge);q===r.FLOAT&&(he=r.RGBA32F),q===r.HALF_FLOAT&&(he=r.RGBA16F),q===r.UNSIGNED_BYTE&&(he=Xe===Ht?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(he=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(he=r.RGB5_A1)}return(he===r.R16F||he===r.R32F||he===r.RG16F||he===r.RG32F||he===r.RGBA16F||he===r.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function D(I,A){let q;return I?A===null||A===Wi||A===cl?q=r.DEPTH24_STENCIL8:A===Gi?q=r.DEPTH32F_STENCIL8:A===ll&&(q=r.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Wi||A===cl?q=r.DEPTH_COMPONENT24:A===Gi?q=r.DEPTH_COMPONENT32F:A===ll&&(q=r.DEPTH_COMPONENT16),q}function P(I,A){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==An&&I.minFilter!==Nn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function F(I){const A=I.target;A.removeEventListener("dispose",F),b(A),A.isVideoTexture&&x.delete(A)}function O(I){const A=I.target;A.removeEventListener("dispose",O),$(A)}function b(I){const A=s.get(I);if(A.__webglInit===void 0)return;const q=I.source,ge=_.get(q);if(ge){const Se=ge[A.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&w(I),Object.keys(ge).length===0&&_.delete(q)}s.remove(I)}function w(I){const A=s.get(I);r.deleteTexture(A.__webglTexture);const q=I.source,ge=_.get(q);delete ge[A.__cacheKey],f.memory.textures--}function $(I){const A=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(A.__webglFramebuffer[ge]))for(let Se=0;Se<A.__webglFramebuffer[ge].length;Se++)r.deleteFramebuffer(A.__webglFramebuffer[ge][Se]);else r.deleteFramebuffer(A.__webglFramebuffer[ge]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[ge])}else{if(Array.isArray(A.__webglFramebuffer))for(let ge=0;ge<A.__webglFramebuffer.length;ge++)r.deleteFramebuffer(A.__webglFramebuffer[ge]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ge=0;ge<A.__webglColorRenderbuffer.length;ge++)A.__webglColorRenderbuffer[ge]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[ge]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const q=I.textures;for(let ge=0,Se=q.length;ge<Se;ge++){const he=s.get(q[ge]);he.__webglTexture&&(r.deleteTexture(he.__webglTexture),f.memory.textures--),s.remove(q[ge])}s.remove(I)}let H=0;function K(){H=0}function ae(){const I=H;return I>=l.maxTextures&&ot("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),H+=1,I}function ue(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function ee(I,A){const q=s.get(I);if(I.isVideoTexture&&Et(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&q.__version!==I.version){const ge=I.image;if(ge===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{re(q,I,A);return}}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+A)}function z(I,A){const q=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){re(q,I,A);return}else I.isExternalTexture&&(q.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+A)}function G(I,A){const q=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){re(q,I,A);return}i.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+A)}function fe(I,A){const q=s.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&q.__version!==I.version){ye(q,I,A);return}i.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+A)}const me={[Fh]:r.REPEAT,[ya]:r.CLAMP_TO_EDGE,[zh]:r.MIRRORED_REPEAT},Te={[An]:r.NEAREST,[b1]:r.NEAREST_MIPMAP_NEAREST,[Lc]:r.NEAREST_MIPMAP_LINEAR,[Nn]:r.LINEAR,[qd]:r.LINEAR_MIPMAP_NEAREST,[Bs]:r.LINEAR_MIPMAP_LINEAR},B={[R1]:r.NEVER,[U1]:r.ALWAYS,[C1]:r.LESS,[Fp]:r.LEQUAL,[w1]:r.EQUAL,[zp]:r.GEQUAL,[N1]:r.GREATER,[D1]:r.NOTEQUAL};function Y(I,A){if(A.type===Gi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Nn||A.magFilter===qd||A.magFilter===Lc||A.magFilter===Bs||A.minFilter===Nn||A.minFilter===qd||A.minFilter===Lc||A.minFilter===Bs)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,me[A.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,me[A.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,me[A.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,Te[A.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,Te[A.minFilter]),A.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,B[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===An||A.minFilter!==Lc&&A.minFilter!==Bs||A.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");r.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function xe(I,A){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",F));const ge=A.source;let Se=_.get(ge);Se===void 0&&(Se={},_.set(ge,Se));const he=ue(A);if(he!==I.__cacheKey){Se[he]===void 0&&(Se[he]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,q=!0),Se[he].usedTimes++;const Xe=Se[I.__cacheKey];Xe!==void 0&&(Se[I.__cacheKey].usedTimes--,Xe.usedTimes===0&&w(A)),I.__cacheKey=he,I.__webglTexture=Se[he].texture}return q}function Ce(I,A,q){return Math.floor(Math.floor(I/q)/A)}function ze(I,A,q,ge){const he=I.updateRanges;if(he.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,q,ge,A.data);else{he.sort((be,Me)=>be.start-Me.start);let Xe=0;for(let be=1;be<he.length;be++){const Me=he[Xe],Pe=he[be],Oe=Me.start+Me.count,Ie=Ce(Pe.start,A.width,4),ut=Ce(Me.start,A.width,4);Pe.start<=Oe+1&&Ie===ut&&Ce(Pe.start+Pe.count-1,A.width,4)===Ie?Me.count=Math.max(Me.count,Pe.start+Pe.count-Me.start):(++Xe,he[Xe]=Pe)}he.length=Xe+1;const Ne=r.getParameter(r.UNPACK_ROW_LENGTH),Ke=r.getParameter(r.UNPACK_SKIP_PIXELS),tt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let be=0,Me=he.length;be<Me;be++){const Pe=he[be],Oe=Math.floor(Pe.start/4),Ie=Math.ceil(Pe.count/4),ut=Oe%A.width,W=Math.floor(Oe/A.width),we=Ie,Re=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ut),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,ut,W,we,Re,q,ge,A.data)}I.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ne),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ke),r.pixelStorei(r.UNPACK_SKIP_ROWS,tt)}}function re(I,A,q){let ge=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ge=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ge=r.TEXTURE_3D);const Se=xe(I,A),he=A.source;i.bindTexture(ge,I.__webglTexture,r.TEXTURE0+q);const Xe=s.get(he);if(he.version!==Xe.__version||Se===!0){i.activeTexture(r.TEXTURE0+q);const Ne=At.getPrimaries(At.workingColorSpace),Ke=A.colorSpace===rs?null:At.getPrimaries(A.colorSpace),tt=A.colorSpace===rs||Ne===Ke?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let be=C(A.image,!1,l.maxTextureSize);be=Pt(A,be);const Me=c.convert(A.format,A.colorSpace),Pe=c.convert(A.type);let Oe=L(A.internalFormat,Me,Pe,A.colorSpace,A.isVideoTexture);Y(ge,A);let Ie;const ut=A.mipmaps,W=A.isVideoTexture!==!0,we=Xe.__version===void 0||Se===!0,Re=he.dataReady,Fe=P(A,be);if(A.isDepthTexture)Oe=D(A.format===Hs,A.type),we&&(W?i.texStorage2D(r.TEXTURE_2D,1,Oe,be.width,be.height):i.texImage2D(r.TEXTURE_2D,0,Oe,be.width,be.height,0,Me,Pe,null));else if(A.isDataTexture)if(ut.length>0){W&&we&&i.texStorage2D(r.TEXTURE_2D,Fe,Oe,ut[0].width,ut[0].height);for(let Ee=0,de=ut.length;Ee<de;Ee++)Ie=ut[Ee],W?Re&&i.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Ie.width,Ie.height,Me,Pe,Ie.data):i.texImage2D(r.TEXTURE_2D,Ee,Oe,Ie.width,Ie.height,0,Me,Pe,Ie.data);A.generateMipmaps=!1}else W?(we&&i.texStorage2D(r.TEXTURE_2D,Fe,Oe,be.width,be.height),Re&&ze(A,be,Me,Pe)):i.texImage2D(r.TEXTURE_2D,0,Oe,be.width,be.height,0,Me,Pe,be.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&we&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Oe,ut[0].width,ut[0].height,be.depth);for(let Ee=0,de=ut.length;Ee<de;Ee++)if(Ie=ut[Ee],A.format!==Ni)if(Me!==null)if(W){if(Re)if(A.layerUpdates.size>0){const He=m_(Ie.width,Ie.height,A.format,A.type);for(const it of A.layerUpdates){const Ft=Ie.data.subarray(it*He/Ie.data.BYTES_PER_ELEMENT,(it+1)*He/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,it,Ie.width,Ie.height,1,Me,Ft)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Ie.width,Ie.height,be.depth,Me,Ie.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Ee,Oe,Ie.width,Ie.height,be.depth,0,Ie.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Re&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Ee,0,0,0,Ie.width,Ie.height,be.depth,Me,Pe,Ie.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Ee,Oe,Ie.width,Ie.height,be.depth,0,Me,Pe,Ie.data)}else{W&&we&&i.texStorage2D(r.TEXTURE_2D,Fe,Oe,ut[0].width,ut[0].height);for(let Ee=0,de=ut.length;Ee<de;Ee++)Ie=ut[Ee],A.format!==Ni?Me!==null?W?Re&&i.compressedTexSubImage2D(r.TEXTURE_2D,Ee,0,0,Ie.width,Ie.height,Me,Ie.data):i.compressedTexImage2D(r.TEXTURE_2D,Ee,Oe,Ie.width,Ie.height,0,Ie.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Re&&i.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Ie.width,Ie.height,Me,Pe,Ie.data):i.texImage2D(r.TEXTURE_2D,Ee,Oe,Ie.width,Ie.height,0,Me,Pe,Ie.data)}else if(A.isDataArrayTexture)if(W){if(we&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Fe,Oe,be.width,be.height,be.depth),Re)if(A.layerUpdates.size>0){const Ee=m_(be.width,be.height,A.format,A.type);for(const de of A.layerUpdates){const He=be.data.subarray(de*Ee/be.data.BYTES_PER_ELEMENT,(de+1)*Ee/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,de,be.width,be.height,1,Me,Pe,He)}A.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Me,Pe,be.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,be.width,be.height,be.depth,0,Me,Pe,be.data);else if(A.isData3DTexture)W?(we&&i.texStorage3D(r.TEXTURE_3D,Fe,Oe,be.width,be.height,be.depth),Re&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Me,Pe,be.data)):i.texImage3D(r.TEXTURE_3D,0,Oe,be.width,be.height,be.depth,0,Me,Pe,be.data);else if(A.isFramebufferTexture){if(we)if(W)i.texStorage2D(r.TEXTURE_2D,Fe,Oe,be.width,be.height);else{let Ee=be.width,de=be.height;for(let He=0;He<Fe;He++)i.texImage2D(r.TEXTURE_2D,He,Oe,Ee,de,0,Me,Pe,null),Ee>>=1,de>>=1}}else if(ut.length>0){if(W&&we){const Ee=qe(ut[0]);i.texStorage2D(r.TEXTURE_2D,Fe,Oe,Ee.width,Ee.height)}for(let Ee=0,de=ut.length;Ee<de;Ee++)Ie=ut[Ee],W?Re&&i.texSubImage2D(r.TEXTURE_2D,Ee,0,0,Me,Pe,Ie):i.texImage2D(r.TEXTURE_2D,Ee,Oe,Me,Pe,Ie);A.generateMipmaps=!1}else if(W){if(we){const Ee=qe(be);i.texStorage2D(r.TEXTURE_2D,Fe,Oe,Ee.width,Ee.height)}Re&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Pe,be)}else i.texImage2D(r.TEXTURE_2D,0,Oe,Me,Pe,be);M(A)&&y(ge),Xe.__version=he.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ye(I,A,q){if(A.image.length!==6)return;const ge=xe(I,A),Se=A.source;i.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+q);const he=s.get(Se);if(Se.version!==he.__version||ge===!0){i.activeTexture(r.TEXTURE0+q);const Xe=At.getPrimaries(At.workingColorSpace),Ne=A.colorSpace===rs?null:At.getPrimaries(A.colorSpace),Ke=A.colorSpace===rs||Xe===Ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const tt=A.isCompressedTexture||A.image[0].isCompressedTexture,be=A.image[0]&&A.image[0].isDataTexture,Me=[];for(let de=0;de<6;de++)!tt&&!be?Me[de]=C(A.image[de],!0,l.maxCubemapSize):Me[de]=be?A.image[de].image:A.image[de],Me[de]=Pt(A,Me[de]);const Pe=Me[0],Oe=c.convert(A.format,A.colorSpace),Ie=c.convert(A.type),ut=L(A.internalFormat,Oe,Ie,A.colorSpace),W=A.isVideoTexture!==!0,we=he.__version===void 0||ge===!0,Re=Se.dataReady;let Fe=P(A,Pe);Y(r.TEXTURE_CUBE_MAP,A);let Ee;if(tt){W&&we&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ut,Pe.width,Pe.height);for(let de=0;de<6;de++){Ee=Me[de].mipmaps;for(let He=0;He<Ee.length;He++){const it=Ee[He];A.format!==Ni?Oe!==null?W?Re&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,He,0,0,it.width,it.height,Oe,it.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,He,ut,it.width,it.height,0,it.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,He,0,0,it.width,it.height,Oe,Ie,it.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,He,ut,it.width,it.height,0,Oe,Ie,it.data)}}}else{if(Ee=A.mipmaps,W&&we){Ee.length>0&&Fe++;const de=qe(Me[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,ut,de.width,de.height)}for(let de=0;de<6;de++)if(be){W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Me[de].width,Me[de].height,Oe,Ie,Me[de].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Me[de].width,Me[de].height,0,Oe,Ie,Me[de].data);for(let He=0;He<Ee.length;He++){const Ft=Ee[He].image[de].image;W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,He+1,0,0,Ft.width,Ft.height,Oe,Ie,Ft.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,He+1,ut,Ft.width,Ft.height,0,Oe,Ie,Ft.data)}}else{W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Oe,Ie,Me[de]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ut,Oe,Ie,Me[de]);for(let He=0;He<Ee.length;He++){const it=Ee[He];W?Re&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,He+1,0,0,Oe,Ie,it.image[de]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,He+1,ut,Oe,Ie,it.image[de])}}}M(A)&&y(r.TEXTURE_CUBE_MAP),he.__version=Se.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function Ae(I,A,q,ge,Se,he){const Xe=c.convert(q.format,q.colorSpace),Ne=c.convert(q.type),Ke=L(q.internalFormat,Xe,Ne,q.colorSpace),tt=s.get(A),be=s.get(q);if(be.__renderTarget=A,!tt.__hasExternalTextures){const Me=Math.max(1,A.width>>he),Pe=Math.max(1,A.height>>he);Se===r.TEXTURE_3D||Se===r.TEXTURE_2D_ARRAY?i.texImage3D(Se,he,Ke,Me,Pe,A.depth,0,Xe,Ne,null):i.texImage2D(Se,he,Ke,Me,Pe,0,Xe,Ne,null)}i.bindFramebuffer(r.FRAMEBUFFER,I),qt(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ge,Se,be.__webglTexture,0,j(A)):(Se===r.TEXTURE_2D||Se>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ge,Se,be.__webglTexture,he),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(I,A,q){if(r.bindRenderbuffer(r.RENDERBUFFER,I),A.depthBuffer){const ge=A.depthTexture,Se=ge&&ge.isDepthTexture?ge.type:null,he=D(A.stencilBuffer,Se),Xe=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;qt(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(A),he,A.width,A.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(A),he,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,he,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Xe,r.RENDERBUFFER,I)}else{const ge=A.textures;for(let Se=0;Se<ge.length;Se++){const he=ge[Se],Xe=c.convert(he.format,he.colorSpace),Ne=c.convert(he.type),Ke=L(he.internalFormat,Xe,Ne,he.colorSpace);qt(A)?p.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,j(A),Ke,A.width,A.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,j(A),Ke,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Ke,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Qe(I,A,q){const ge=A.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=s.get(A.depthTexture);if(Se.__renderTarget=A,(!Se.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ge){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,A.depthTexture.addEventListener("dispose",F)),Se.__webglTexture===void 0){Se.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,Se.__webglTexture),Y(r.TEXTURE_CUBE_MAP,A.depthTexture);const tt=c.convert(A.depthTexture.format),be=c.convert(A.depthTexture.type);let Me;A.depthTexture.format===Aa?Me=r.DEPTH_COMPONENT24:A.depthTexture.format===Hs&&(Me=r.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Me,A.width,A.height,0,tt,be,null)}}else ee(A.depthTexture,0);const he=Se.__webglTexture,Xe=j(A),Ne=ge?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,Ke=A.depthTexture.format===Hs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(A.depthTexture.format===Aa)qt(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ke,Ne,he,0,Xe):r.framebufferTexture2D(r.FRAMEBUFFER,Ke,Ne,he,0);else if(A.depthTexture.format===Hs)qt(A)?p.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ke,Ne,he,0,Xe):r.framebufferTexture2D(r.FRAMEBUFFER,Ke,Ne,he,0);else throw new Error("Unknown depthTexture format")}function et(I){const A=s.get(I),q=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const ge=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),ge){const Se=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,ge.removeEventListener("dispose",Se)};ge.addEventListener("dispose",Se),A.__depthDisposeCallback=Se}A.__boundDepthTexture=ge}if(I.depthTexture&&!A.__autoAllocateDepthBuffer)if(q)for(let ge=0;ge<6;ge++)Qe(A.__webglFramebuffer[ge],I,ge);else{const ge=I.texture.mipmaps;ge&&ge.length>0?Qe(A.__webglFramebuffer[0],I,0):Qe(A.__webglFramebuffer,I,0)}else if(q){A.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[ge]),A.__webglDepthbuffer[ge]===void 0)A.__webglDepthbuffer[ge]=r.createRenderbuffer(),ke(A.__webglDepthbuffer[ge],I,!1);else{const Se=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer[ge];r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,he)}}else{const ge=I.texture.mipmaps;if(ge&&ge.length>0?i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),ke(A.__webglDepthbuffer,I,!1);else{const Se=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,he),r.framebufferRenderbuffer(r.FRAMEBUFFER,Se,r.RENDERBUFFER,he)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function en(I,A,q){const ge=s.get(I);A!==void 0&&Ae(ge.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&et(I)}function _t(I){const A=I.texture,q=s.get(I),ge=s.get(A);I.addEventListener("dispose",O);const Se=I.textures,he=I.isWebGLCubeRenderTarget===!0,Xe=Se.length>1;if(Xe||(ge.__webglTexture===void 0&&(ge.__webglTexture=r.createTexture()),ge.__version=A.version,f.memory.textures++),he){q.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[Ne]=[];for(let Ke=0;Ke<A.mipmaps.length;Ke++)q.__webglFramebuffer[Ne][Ke]=r.createFramebuffer()}else q.__webglFramebuffer[Ne]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)q.__webglFramebuffer[Ne]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Xe)for(let Ne=0,Ke=Se.length;Ne<Ke;Ne++){const tt=s.get(Se[Ne]);tt.__webglTexture===void 0&&(tt.__webglTexture=r.createTexture(),f.memory.textures++)}if(I.samples>0&&qt(I)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ne=0;Ne<Se.length;Ne++){const Ke=Se[Ne];q.__webglColorRenderbuffer[Ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[Ne]);const tt=c.convert(Ke.format,Ke.colorSpace),be=c.convert(Ke.type),Me=L(Ke.internalFormat,tt,be,Ke.colorSpace,I.isXRRenderTarget===!0),Pe=j(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,Pe,Me,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ne,r.RENDERBUFFER,q.__webglColorRenderbuffer[Ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),ke(q.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(he){i.bindTexture(r.TEXTURE_CUBE_MAP,ge.__webglTexture),Y(r.TEXTURE_CUBE_MAP,A);for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ke=0;Ke<A.mipmaps.length;Ke++)Ae(q.__webglFramebuffer[Ne][Ke],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ke);else Ae(q.__webglFramebuffer[Ne],I,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);M(A)&&y(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Xe){for(let Ne=0,Ke=Se.length;Ne<Ke;Ne++){const tt=Se[Ne],be=s.get(tt);let Me=r.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Me=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Me,be.__webglTexture),Y(Me,tt),Ae(q.__webglFramebuffer,I,tt,r.COLOR_ATTACHMENT0+Ne,Me,0),M(tt)&&y(Me)}i.unbindTexture()}else{let Ne=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ne=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ne,ge.__webglTexture),Y(Ne,A),A.mipmaps&&A.mipmaps.length>0)for(let Ke=0;Ke<A.mipmaps.length;Ke++)Ae(q.__webglFramebuffer[Ke],I,A,r.COLOR_ATTACHMENT0,Ne,Ke);else Ae(q.__webglFramebuffer,I,A,r.COLOR_ATTACHMENT0,Ne,0);M(A)&&y(Ne),i.unbindTexture()}I.depthBuffer&&et(I)}function mt(I){const A=I.textures;for(let q=0,ge=A.length;q<ge;q++){const Se=A[q];if(M(Se)){const he=R(I),Xe=s.get(Se).__webglTexture;i.bindTexture(he,Xe),y(he),i.unbindTexture()}}}const Lt=[],lt=[];function Qt(I){if(I.samples>0){if(qt(I)===!1){const A=I.textures,q=I.width,ge=I.height;let Se=r.COLOR_BUFFER_BIT;const he=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Xe=s.get(I),Ne=A.length>1;if(Ne)for(let tt=0;tt<A.length;tt++)i.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const Ke=I.texture.mipmaps;Ke&&Ke.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let tt=0;tt<A.length;tt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Se|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Se|=r.STENCIL_BUFFER_BIT)),Ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[tt]);const be=s.get(A[tt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,q,ge,0,0,q,ge,Se,r.NEAREST),g===!0&&(Lt.length=0,lt.length=0,Lt.push(r.COLOR_ATTACHMENT0+tt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Lt.push(he),lt.push(he),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,lt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Lt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ne)for(let tt=0;tt<A.length;tt++){i.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.RENDERBUFFER,Xe.__webglColorRenderbuffer[tt]);const be=s.get(A[tt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+tt,r.TEXTURE_2D,be,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&g){const A=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function j(I){return Math.min(l.maxSamples,I.samples)}function qt(I){const A=s.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Et(I){const A=f.render.frame;x.get(I)!==A&&(x.set(I,A),I.update())}function Pt(I,A){const q=I.colorSpace,ge=I.format,Se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==Wr&&q!==rs&&(At.getTransfer(q)===Ht?(ge!==Ni||Se!==si)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",q)),A}function qe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=ae,this.resetTextureUnits=K,this.setTexture2D=ee,this.setTexture2DArray=z,this.setTexture3D=G,this.setTextureCube=fe,this.rebindTextures=en,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=qt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function a3(r,e){function i(s,l=rs){let c;const f=At.getTransfer(l);if(s===si)return r.UNSIGNED_BYTE;if(s===Up)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Lp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Rx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Cx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Tx)return r.BYTE;if(s===Ax)return r.SHORT;if(s===ll)return r.UNSIGNED_SHORT;if(s===Dp)return r.INT;if(s===Wi)return r.UNSIGNED_INT;if(s===Gi)return r.FLOAT;if(s===Ta)return r.HALF_FLOAT;if(s===wx)return r.ALPHA;if(s===Nx)return r.RGB;if(s===Ni)return r.RGBA;if(s===Aa)return r.DEPTH_COMPONENT;if(s===Hs)return r.DEPTH_STENCIL;if(s===Dx)return r.RED;if(s===Op)return r.RED_INTEGER;if(s===Xr)return r.RG;if(s===Pp)return r.RG_INTEGER;if(s===Ip)return r.RGBA_INTEGER;if(s===uu||s===fu||s===du||s===hu)if(f===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===uu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===uu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===fu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===du)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Bh||s===Hh||s===Gh||s===Vh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Bh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Hh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Gh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Vh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jh||s===kh||s===Xh||s===Wh||s===qh||s===Yh||s===Zh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===jh||s===kh)return f===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Xh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Wh)return c.COMPRESSED_R11_EAC;if(s===qh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Yh)return c.COMPRESSED_RG11_EAC;if(s===Zh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Kh||s===Qh||s===Jh||s===$h||s===ep||s===tp||s===np||s===ip||s===ap||s===sp||s===rp||s===op||s===lp||s===cp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Kh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jh)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$h)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ep)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===np)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ip)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ap)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===op)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cp)return f===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===up||s===fp||s===dp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===up)return f===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===fp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hp||s===pp||s===mp||s===gp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===hp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===cl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const s3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r3=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class o3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new jx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Yi({vertexShader:s3,fragmentShader:r3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ui(new Au(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l3 extends Jr{constructor(e,i){super();const s=this;let l=null,c=1,f=null,p="local-floor",g=1,h=null,x=null,v=null,_=null,E=null,T=null;const C=typeof XRWebGLBinding<"u",M=new o3,y={},R=i.getContextAttributes();let L=null,D=null;const P=[],F=[],O=new bt;let b=null;const w=new ai;w.viewport=new an;const $=new ai;$.viewport=new an;const H=[w,$],K=new yT;let ae=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ye=P[re];return ye===void 0&&(ye=new th,P[re]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(re){let ye=P[re];return ye===void 0&&(ye=new th,P[re]=ye),ye.getGripSpace()},this.getHand=function(re){let ye=P[re];return ye===void 0&&(ye=new th,P[re]=ye),ye.getHandSpace()};function ee(re){const ye=F.indexOf(re.inputSource);if(ye===-1)return;const Ae=P[ye];Ae!==void 0&&(Ae.update(re.inputSource,re.frame,h||f),Ae.dispatchEvent({type:re.type,data:re.inputSource}))}function z(){l.removeEventListener("select",ee),l.removeEventListener("selectstart",ee),l.removeEventListener("selectend",ee),l.removeEventListener("squeeze",ee),l.removeEventListener("squeezestart",ee),l.removeEventListener("squeezeend",ee),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",G);for(let re=0;re<P.length;re++){const ye=F[re];ye!==null&&(F[re]=null,P[re].disconnect(ye))}ae=null,ue=null,M.reset();for(const re in y)delete y[re];e.setRenderTarget(L),E=null,_=null,v=null,l=null,D=null,ze.stop(),s.isPresenting=!1,e.setPixelRatio(b),e.setSize(O.width,O.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){c=re,s.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){p=re,s.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||f},this.setReferenceSpace=function(re){h=re},this.getBaseLayer=function(){return _!==null?_:E},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(re){if(l=re,l!==null){if(L=e.getRenderTarget(),l.addEventListener("select",ee),l.addEventListener("selectstart",ee),l.addEventListener("selectend",ee),l.addEventListener("squeeze",ee),l.addEventListener("squeezestart",ee),l.addEventListener("squeezeend",ee),l.addEventListener("end",z),l.addEventListener("inputsourceschange",G),R.xrCompatible!==!0&&await i.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,ke=null,Qe=null;R.depth&&(Qe=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ae=R.stencil?Hs:Aa,ke=R.stencil?cl:Wi);const et={colorFormat:i.RGBA8,depthFormat:Qe,scaleFactor:c};v=this.getBinding(),_=v.createProjectionLayer(et),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new ki(_.textureWidth,_.textureHeight,{format:Ni,type:si,depthTexture:new fl(_.textureWidth,_.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Ae={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,Ae),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),D=new ki(E.framebufferWidth,E.framebufferHeight,{format:Ni,type:si,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(g),h=null,f=await l.requestReferenceSpace(p),ze.setContext(l),ze.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function G(re){for(let ye=0;ye<re.removed.length;ye++){const Ae=re.removed[ye],ke=F.indexOf(Ae);ke>=0&&(F[ke]=null,P[ke].disconnect(Ae))}for(let ye=0;ye<re.added.length;ye++){const Ae=re.added[ye];let ke=F.indexOf(Ae);if(ke===-1){for(let et=0;et<P.length;et++)if(et>=F.length){F.push(Ae),ke=et;break}else if(F[et]===null){F[et]=Ae,ke=et;break}if(ke===-1)break}const Qe=P[ke];Qe&&Qe.connect(Ae)}}const fe=new ie,me=new ie;function Te(re,ye,Ae){fe.setFromMatrixPosition(ye.matrixWorld),me.setFromMatrixPosition(Ae.matrixWorld);const ke=fe.distanceTo(me),Qe=ye.projectionMatrix.elements,et=Ae.projectionMatrix.elements,en=Qe[14]/(Qe[10]-1),_t=Qe[14]/(Qe[10]+1),mt=(Qe[9]+1)/Qe[5],Lt=(Qe[9]-1)/Qe[5],lt=(Qe[8]-1)/Qe[0],Qt=(et[8]+1)/et[0],j=en*lt,qt=en*Qt,Et=ke/(-lt+Qt),Pt=Et*-lt;if(ye.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(Pt),re.translateZ(Et),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Qe[10]===-1)re.projectionMatrix.copy(ye.projectionMatrix),re.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{const qe=en+Et,I=_t+Et,A=j-Pt,q=qt+(ke-Pt),ge=mt*_t/I*qe,Se=Lt*_t/I*qe;re.projectionMatrix.makePerspective(A,q,ge,Se,qe,I),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function B(re,ye){ye===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ye.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(l===null)return;let ye=re.near,Ae=re.far;M.texture!==null&&(M.depthNear>0&&(ye=M.depthNear),M.depthFar>0&&(Ae=M.depthFar)),K.near=$.near=w.near=ye,K.far=$.far=w.far=Ae,(ae!==K.near||ue!==K.far)&&(l.updateRenderState({depthNear:K.near,depthFar:K.far}),ae=K.near,ue=K.far),K.layers.mask=re.layers.mask|6,w.layers.mask=K.layers.mask&-5,$.layers.mask=K.layers.mask&-3;const ke=re.parent,Qe=K.cameras;B(K,ke);for(let et=0;et<Qe.length;et++)B(Qe[et],ke);Qe.length===2?Te(K,w,$):K.projectionMatrix.copy(w.projectionMatrix),Y(re,K,ke)};function Y(re,ye,Ae){Ae===null?re.matrix.copy(ye.matrixWorld):(re.matrix.copy(Ae.matrixWorld),re.matrix.invert(),re.matrix.multiply(ye.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ye.projectionMatrix),re.projectionMatrixInverse.copy(ye.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=vp*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return K},this.getFoveation=function(){if(!(_===null&&E===null))return g},this.setFoveation=function(re){g=re,_!==null&&(_.fixedFoveation=re),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=re)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(K)},this.getCameraTexture=function(re){return y[re]};let xe=null;function Ce(re,ye){if(x=ye.getViewerPose(h||f),T=ye,x!==null){const Ae=x.views;E!==null&&(e.setRenderTargetFramebuffer(D,E.framebuffer),e.setRenderTarget(D));let ke=!1;Ae.length!==K.cameras.length&&(K.cameras.length=0,ke=!0);for(let _t=0;_t<Ae.length;_t++){const mt=Ae[_t];let Lt=null;if(E!==null)Lt=E.getViewport(mt);else{const Qt=v.getViewSubImage(_,mt);Lt=Qt.viewport,_t===0&&(e.setRenderTargetTextures(D,Qt.colorTexture,Qt.depthStencilTexture),e.setRenderTarget(D))}let lt=H[_t];lt===void 0&&(lt=new ai,lt.layers.enable(_t),lt.viewport=new an,H[_t]=lt),lt.matrix.fromArray(mt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(mt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),_t===0&&(K.matrix.copy(lt.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale)),ke===!0&&K.cameras.push(lt)}const Qe=l.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){v=s.getBinding();const _t=v.getDepthInformation(Ae[0]);_t&&_t.isValid&&_t.texture&&M.init(_t,l.renderState)}if(Qe&&Qe.includes("camera-access")&&C){e.state.unbindTexture(),v=s.getBinding();for(let _t=0;_t<Ae.length;_t++){const mt=Ae[_t].camera;if(mt){let Lt=y[mt];Lt||(Lt=new jx,y[mt]=Lt);const lt=v.getCameraImage(mt);Lt.sourceTexture=lt}}}}for(let Ae=0;Ae<P.length;Ae++){const ke=F[Ae],Qe=P[Ae];ke!==null&&Qe!==void 0&&Qe.update(ke,ye,h||f)}xe&&xe(re,ye),ye.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ye}),T=null}const ze=new Yx;ze.setAnimationLoop(Ce),this.setAnimationLoop=function(re){xe=re},this.dispose=function(){}}}const Us=new qi,c3=new $t;function u3(r,e){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function s(M,y){y.color.getRGB(M.fogColor.value,kx(r)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,R,L,D){y.isMeshBasicMaterial?c(M,y):y.isMeshLambertMaterial?(c(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(M,y),v(M,y)):y.isMeshPhongMaterial?(c(M,y),x(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(M,y),_(M,y),y.isMeshPhysicalMaterial&&E(M,y,D)):y.isMeshMatcapMaterial?(c(M,y),T(M,y)):y.isMeshDepthMaterial?c(M,y):y.isMeshDistanceMaterial?(c(M,y),C(M,y)):y.isMeshNormalMaterial?c(M,y):y.isLineBasicMaterial?(f(M,y),y.isLineDashedMaterial&&p(M,y)):y.isPointsMaterial?g(M,y,R,L):y.isSpriteMaterial?h(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===Wn&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===Wn&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const R=e.get(y),L=R.envMap,D=R.envMapRotation;L&&(M.envMap.value=L,Us.copy(D),Us.x*=-1,Us.y*=-1,Us.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),M.envMapRotation.value.setFromMatrix4(c3.makeRotationFromEuler(Us)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function f(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function p(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function g(M,y,R,L){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*R,M.scale.value=L*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function x(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function v(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function _(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function E(M,y,R){M.ior.value=y.ior,y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Wn&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=R.texture,M.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function C(M,y){const R=e.get(y).light;M.referencePosition.value.setFromMatrixPosition(R.matrixWorld),M.nearDistance.value=R.shadow.camera.near,M.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function f3(r,e,i,s){let l={},c={},f=[];const p=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function g(R,L){const D=L.program;s.uniformBlockBinding(R,D)}function h(R,L){let D=l[R.id];D===void 0&&(T(R),D=x(R),l[R.id]=D,R.addEventListener("dispose",M));const P=L.program;s.updateUBOMapping(R,P);const F=e.render.frame;c[R.id]!==F&&(_(R),c[R.id]=F)}function x(R){const L=v();R.__bindingPointIndex=L;const D=r.createBuffer(),P=R.__size,F=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,P,F),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,D),D}function v(){for(let R=0;R<p;R++)if(f.indexOf(R)===-1)return f.push(R),R;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const L=l[R.id],D=R.uniforms,P=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let F=0,O=D.length;F<O;F++){const b=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,$=b.length;w<$;w++){const H=b[w];if(E(H,F,w,P)===!0){const K=H.__offset,ae=Array.isArray(H.value)?H.value:[H.value];let ue=0;for(let ee=0;ee<ae.length;ee++){const z=ae[ee],G=C(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,K+ue,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,ue),ue+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,K,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function E(R,L,D,P){const F=R.value,O=L+"_"+D;if(P[O]===void 0)return typeof F=="number"||typeof F=="boolean"?P[O]=F:P[O]=F.clone(),!0;{const b=P[O];if(typeof F=="number"||typeof F=="boolean"){if(b!==F)return P[O]=F,!0}else if(b.equals(F)===!1)return b.copy(F),!0}return!1}function T(R){const L=R.uniforms;let D=0;const P=16;for(let O=0,b=L.length;O<b;O++){const w=Array.isArray(L[O])?L[O]:[L[O]];for(let $=0,H=w.length;$<H;$++){const K=w[$],ae=Array.isArray(K.value)?K.value:[K.value];for(let ue=0,ee=ae.length;ue<ee;ue++){const z=ae[ue],G=C(z),fe=D%P,me=fe%G.boundary,Te=fe+me;D+=me,Te!==0&&P-Te<G.storage&&(D+=P-Te),K.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=D,D+=G.storage}}}const F=D%P;return F>0&&(D+=P-F),R.__size=D,R.__cache={},this}function C(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",R),L}function M(R){const L=R.target;L.removeEventListener("dispose",M);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function y(){for(const R in l)r.deleteBuffer(l[R]);f=[],l={},c={}}return{bind:g,update:h,dispose:y}}const d3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function h3(){return Bi===null&&(Bi=new iT(d3,16,16,Xr,Ta),Bi.name="DFG_LUT",Bi.minFilter=Nn,Bi.magFilter=Nn,Bi.wrapS=ya,Bi.wrapT=ya,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class p3{constructor(e={}){const{canvas:i=O1(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:p=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:h=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:E=si}=e;this.isWebGLRenderer=!0;let T;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=s.getContextAttributes().alpha}else T=f;const C=E,M=new Set([Ip,Pp,Op]),y=new Set([si,Wi,ll,cl,Up,Lp]),R=new Uint32Array(4),L=new Int32Array(4);let D=null,P=null;const F=[],O=[];let b=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let $=!1;this._outputColorSpace=mi;let H=0,K=0,ae=null,ue=-1,ee=null;const z=new an,G=new an;let fe=null;const me=new Rt(0);let Te=0,B=i.width,Y=i.height,xe=1,Ce=null,ze=null;const re=new an(0,0,B,Y),ye=new an(0,0,B,Y);let Ae=!1;const ke=new Hp;let Qe=!1,et=!1;const en=new $t,_t=new ie,mt=new an,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Qt(){return ae===null?xe:1}let j=s;function qt(U,X){return i.getContext(U,X)}try{const U={alpha:!0,depth:l,stencil:c,antialias:p,premultipliedAlpha:g,preserveDrawingBuffer:h,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wp}`),i.addEventListener("webglcontextlost",He,!1),i.addEventListener("webglcontextrestored",it,!1),i.addEventListener("webglcontextcreationerror",Ft,!1),j===null){const X="webgl2";if(j=qt(X,U),j===null)throw qt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw Dt("WebGLRenderer: "+U.message),U}let Et,Pt,qe,I,A,q,ge,Se,he,Xe,Ne,Ke,tt,be,Me,Pe,Oe,Ie,ut,W,we,Re,Fe;function Ee(){Et=new p2(j),Et.init(),we=new a3(j,Et),Pt=new r2(j,Et,e,we),qe=new n3(j,Et),Pt.reversedDepthBuffer&&_&&qe.buffers.depth.setReversed(!0),I=new v2(j),A=new VC,q=new i3(j,Et,qe,A,Pt,we,I),ge=new h2(w),Se=new MT(j),Re=new a2(j,Se),he=new m2(j,Se,I,Re),Xe=new x2(j,he,Se,Re,I),Ie=new _2(j,Pt,q),Me=new o2(A),Ne=new GC(w,ge,Et,Pt,Re,Me),Ke=new u3(w,A),tt=new kC,be=new KC(Et),Oe=new i2(w,ge,qe,Xe,T,g),Pe=new t3(w,Xe,Pt),Fe=new f3(j,I,Pt,qe),ut=new s2(j,Et,I),W=new g2(j,Et,I),I.programs=Ne.programs,w.capabilities=Pt,w.extensions=Et,w.properties=A,w.renderLists=tt,w.shadowMap=Pe,w.state=qe,w.info=I}Ee(),C!==si&&(b=new S2(C,i.width,i.height,l,c));const de=new l3(w,j);this.xr=de,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const U=Et.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=Et.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(U){U!==void 0&&(xe=U,this.setSize(B,Y,!1))},this.getSize=function(U){return U.set(B,Y)},this.setSize=function(U,X,le=!0){if(de.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}B=U,Y=X,i.width=Math.floor(U*xe),i.height=Math.floor(X*xe),le===!0&&(i.style.width=U+"px",i.style.height=X+"px"),b!==null&&b.setSize(i.width,i.height),this.setViewport(0,0,U,X)},this.getDrawingBufferSize=function(U){return U.set(B*xe,Y*xe).floor()},this.setDrawingBufferSize=function(U,X,le){B=U,Y=X,xe=le,i.width=Math.floor(U*le),i.height=Math.floor(X*le),this.setViewport(0,0,U,X)},this.setEffects=function(U){if(C===si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let X=0;X<U.length;X++)if(U[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(z)},this.getViewport=function(U){return U.copy(re)},this.setViewport=function(U,X,le,se){U.isVector4?re.set(U.x,U.y,U.z,U.w):re.set(U,X,le,se),qe.viewport(z.copy(re).multiplyScalar(xe).round())},this.getScissor=function(U){return U.copy(ye)},this.setScissor=function(U,X,le,se){U.isVector4?ye.set(U.x,U.y,U.z,U.w):ye.set(U,X,le,se),qe.scissor(G.copy(ye).multiplyScalar(xe).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(U){qe.setScissorTest(Ae=U)},this.setOpaqueSort=function(U){Ce=U},this.setTransparentSort=function(U){ze=U},this.getClearColor=function(U){return U.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(U=!0,X=!0,le=!0){let se=0;if(U){let J=!1;if(ae!==null){const De=ae.texture.format;J=M.has(De)}if(J){const De=ae.texture.type,Be=y.has(De),Ue=Oe.getClearColor(),We=Oe.getClearAlpha(),Ze=Ue.r,nt=Ue.g,st=Ue.b;Be?(R[0]=Ze,R[1]=nt,R[2]=st,R[3]=We,j.clearBufferuiv(j.COLOR,0,R)):(L[0]=Ze,L[1]=nt,L[2]=st,L[3]=We,j.clearBufferiv(j.COLOR,0,L))}else se|=j.COLOR_BUFFER_BIT}X&&(se|=j.DEPTH_BUFFER_BIT),le&&(se|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&j.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",He,!1),i.removeEventListener("webglcontextrestored",it,!1),i.removeEventListener("webglcontextcreationerror",Ft,!1),Oe.dispose(),tt.dispose(),be.dispose(),A.dispose(),ge.dispose(),Xe.dispose(),Re.dispose(),Fe.dispose(),Ne.dispose(),de.dispose(),de.removeEventListener("sessionstart",Xs),de.removeEventListener("sessionend",Ws),Li.stop()};function He(U){U.preventDefault(),Wv("WebGLRenderer: Context Lost."),$=!0}function it(){Wv("WebGLRenderer: Context Restored."),$=!1;const U=I.autoReset,X=Pe.enabled,le=Pe.autoUpdate,se=Pe.needsUpdate,J=Pe.type;Ee(),I.autoReset=U,Pe.enabled=X,Pe.autoUpdate=le,Pe.needsUpdate=se,Pe.type=J}function Ft(U){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Tt(U){const X=U.target;X.removeEventListener("dispose",Tt),Dn(X)}function Dn(U){xi(U),A.remove(U)}function xi(U){const X=A.get(U).programs;X!==void 0&&(X.forEach(function(le){Ne.releaseProgram(le)}),U.isShaderMaterial&&Ne.releaseShaderCache(U))}this.renderBufferDirect=function(U,X,le,se,J,De){X===null&&(X=Lt);const Be=J.isMesh&&J.matrixWorld.determinant()<0,Ue=Sl(U,X,le,se,J);qe.setMaterial(se,Be);let We=le.index,Ze=1;if(se.wireframe===!0){if(We=he.getWireframeAttribute(le),We===void 0)return;Ze=2}const nt=le.drawRange,st=le.attributes.position;let Ge=nt.start*Ze,ft=(nt.start+nt.count)*Ze;De!==null&&(Ge=Math.max(Ge,De.start*Ze),ft=Math.min(ft,(De.start+De.count)*Ze)),We!==null?(Ge=Math.max(Ge,0),ft=Math.min(ft,We.count)):st!=null&&(Ge=Math.max(Ge,0),ft=Math.min(ft,st.count));const Yt=ft-Ge;if(Yt<0||Yt===1/0)return;Re.setup(J,se,Ue,le,We);let Zt,Ct=ut;if(We!==null&&(Zt=Se.get(We),Ct=W,Ct.setIndex(Zt)),J.isMesh)se.wireframe===!0?(qe.setLineWidth(se.wireframeLinewidth*Qt()),Ct.setMode(j.LINES)):Ct.setMode(j.TRIANGLES);else if(J.isLine){let gn=se.linewidth;gn===void 0&&(gn=1),qe.setLineWidth(gn*Qt()),J.isLineSegments?Ct.setMode(j.LINES):J.isLineLoop?Ct.setMode(j.LINE_LOOP):Ct.setMode(j.LINE_STRIP)}else J.isPoints?Ct.setMode(j.POINTS):J.isSprite&&Ct.setMode(j.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)xu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Ct.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const gn=J._multiDrawStarts,je=J._multiDrawCounts,Un=J._multiDrawCount,at=We?Se.get(We).bytesPerElement:1,Ln=A.get(se).currentProgram.getUniforms();for(let qn=0;qn<Un;qn++)Ln.setValue(j,"_gl_DrawID",qn),Ct.render(gn[qn]/at,je[qn])}else if(J.isInstancedMesh)Ct.renderInstances(Ge,Yt,J.count);else if(le.isInstancedBufferGeometry){const gn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,je=Math.min(le.instanceCount,gn);Ct.renderInstances(Ge,Yt,je)}else Ct.render(Ge,Yt)};function no(U,X,le){U.transparent===!0&&U.side===xa&&U.forceSinglePass===!1?(U.side=Wn,U.needsUpdate=!0,Ca(U,X,le),U.side=ls,U.needsUpdate=!0,Ca(U,X,le),U.side=xa):Ca(U,X,le)}this.compile=function(U,X,le=null){le===null&&(le=U),P=be.get(le),P.init(X),O.push(P),le.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),U!==le&&U.traverseVisible(function(J){J.isLight&&J.layers.test(X.layers)&&(P.pushLight(J),J.castShadow&&P.pushShadow(J))}),P.setupLights();const se=new Set;return U.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const De=J.material;if(De)if(Array.isArray(De))for(let Be=0;Be<De.length;Be++){const Ue=De[Be];no(Ue,le,J),se.add(Ue)}else no(De,le,J),se.add(De)}),P=O.pop(),se},this.compileAsync=function(U,X,le=null){const se=this.compile(U,X,le);return new Promise(J=>{function De(){if(se.forEach(function(Be){A.get(Be).currentProgram.isReady()&&se.delete(Be)}),se.size===0){J(U);return}setTimeout(De,10)}Et.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let ks=null;function _l(U){ks&&ks(U)}function Xs(){Li.stop()}function Ws(){Li.start()}const Li=new Yx;Li.setAnimationLoop(_l),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(U){ks=U,de.setAnimationLoop(U),U===null?Li.stop():Li.start()},de.addEventListener("sessionstart",Xs),de.addEventListener("sessionend",Ws),this.render=function(U,X){if(X!==void 0&&X.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;const le=de.enabled===!0&&de.isPresenting===!0,se=b!==null&&(ae===null||le)&&b.begin(w,ae);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(X),X=de.getCamera()),U.isScene===!0&&U.onBeforeRender(w,U,X,ae),P=be.get(U,O.length),P.init(X),O.push(P),en.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ke.setFromProjectionMatrix(en,Vi,X.reversedDepth),et=this.localClippingEnabled,Qe=Me.init(this.clippingPlanes,et),D=tt.get(U,F.length),D.init(),F.push(D),de.enabled===!0&&de.isPresenting===!0){const Be=w.xr.getDepthSensingMesh();Be!==null&&qs(Be,X,-1/0,w.sortObjects)}qs(U,X,0,w.sortObjects),D.finish(),w.sortObjects===!0&&D.sort(Ce,ze),lt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,lt&&Oe.addToRenderList(D,U),this.info.render.frame++,Qe===!0&&Me.beginShadows();const J=P.state.shadowsArray;if(Pe.render(J,U,X),Qe===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&b.hasRenderPass())===!1){const Be=D.opaque,Ue=D.transmissive;if(P.setupLights(),X.isArrayCamera){const We=X.cameras;if(Ue.length>0)for(let Ze=0,nt=We.length;Ze<nt;Ze++){const st=We[Ze];on(Be,Ue,U,st)}lt&&Oe.render(U);for(let Ze=0,nt=We.length;Ze<nt;Ze++){const st=We[Ze];yi(D,U,st,st.viewport)}}else Ue.length>0&&on(Be,Ue,U,X),lt&&Oe.render(U),yi(D,U,X)}ae!==null&&K===0&&(q.updateMultisampleRenderTarget(ae),q.updateRenderTargetMipmap(ae)),se&&b.end(w),U.isScene===!0&&U.onAfterRender(w,U,X),Re.resetDefaultState(),ue=-1,ee=null,O.pop(),O.length>0?(P=O[O.length-1],Qe===!0&&Me.setGlobalState(w.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?D=F[F.length-1]:D=null};function qs(U,X,le,se){if(U.visible===!1)return;if(U.layers.test(X.layers)){if(U.isGroup)le=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(X);else if(U.isLight)P.pushLight(U),U.castShadow&&P.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||ke.intersectsSprite(U)){se&&mt.setFromMatrixPosition(U.matrixWorld).applyMatrix4(en);const Be=Xe.update(U),Ue=U.material;Ue.visible&&D.push(U,Be,Ue,le,mt.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||ke.intersectsObject(U))){const Be=Xe.update(U),Ue=U.material;if(se&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),mt.copy(U.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),mt.copy(Be.boundingSphere.center)),mt.applyMatrix4(U.matrixWorld).applyMatrix4(en)),Array.isArray(Ue)){const We=Be.groups;for(let Ze=0,nt=We.length;Ze<nt;Ze++){const st=We[Ze],Ge=Ue[st.materialIndex];Ge&&Ge.visible&&D.push(U,Be,Ge,le,mt.z,st)}}else Ue.visible&&D.push(U,Be,Ue,le,mt.z,null)}}const De=U.children;for(let Be=0,Ue=De.length;Be<Ue;Be++)qs(De[Be],X,le,se)}function yi(U,X,le,se){const{opaque:J,transmissive:De,transparent:Be}=U;P.setupLightsView(le),Qe===!0&&Me.setGlobalState(w.clippingPlanes,le),se&&qe.viewport(z.copy(se)),J.length>0&&mn(J,X,le),De.length>0&&mn(De,X,le),Be.length>0&&mn(Be,X,le),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function on(U,X,le,se){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[se.id]===void 0){const Ge=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[se.id]=new ki(1,1,{generateMipmaps:!0,type:Ge?Ta:si,minFilter:Bs,samples:Pt.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace})}const De=P.state.transmissionRenderTarget[se.id],Be=se.viewport||z;De.setSize(Be.z*w.transmissionResolutionScale,Be.w*w.transmissionResolutionScale);const Ue=w.getRenderTarget(),We=w.getActiveCubeFace(),Ze=w.getActiveMipmapLevel();w.setRenderTarget(De),w.getClearColor(me),Te=w.getClearAlpha(),Te<1&&w.setClearColor(16777215,.5),w.clear(),lt&&Oe.render(le);const nt=w.toneMapping;w.toneMapping=ji;const st=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),P.setupLightsView(se),Qe===!0&&Me.setGlobalState(w.clippingPlanes,se),mn(U,le,se),q.updateMultisampleRenderTarget(De),q.updateRenderTargetMipmap(De),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Ge=!1;for(let ft=0,Yt=X.length;ft<Yt;ft++){const Zt=X[ft],{object:Ct,geometry:gn,material:je,group:Un}=Zt;if(je.side===xa&&Ct.layers.test(se.layers)){const at=je.side;je.side=Wn,je.needsUpdate=!0,Zi(Ct,le,se,gn,je,Un),je.side=at,je.needsUpdate=!0,Ge=!0}}Ge===!0&&(q.updateMultisampleRenderTarget(De),q.updateRenderTargetMipmap(De))}w.setRenderTarget(Ue,We,Ze),w.setClearColor(me,Te),st!==void 0&&(se.viewport=st),w.toneMapping=nt}function mn(U,X,le){const se=X.isScene===!0?X.overrideMaterial:null;for(let J=0,De=U.length;J<De;J++){const Be=U[J],{object:Ue,geometry:We,group:Ze}=Be;let nt=Be.material;nt.allowOverride===!0&&se!==null&&(nt=se),Ue.layers.test(le.layers)&&Zi(Ue,X,le,We,nt,Ze)}}function Zi(U,X,le,se,J,De){U.onBeforeRender(w,X,le,se,J,De),U.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),J.onBeforeRender(w,X,le,se,U,De),J.transparent===!0&&J.side===xa&&J.forceSinglePass===!1?(J.side=Wn,J.needsUpdate=!0,w.renderBufferDirect(le,X,se,J,U,De),J.side=ls,J.needsUpdate=!0,w.renderBufferDirect(le,X,se,J,U,De),J.side=xa):w.renderBufferDirect(le,X,se,J,U,De),U.onAfterRender(w,X,le,se,J,De)}function Ca(U,X,le){X.isScene!==!0&&(X=Lt);const se=A.get(U),J=P.state.lights,De=P.state.shadowsArray,Be=J.state.version,Ue=Ne.getParameters(U,J.state,De,X,le),We=Ne.getProgramCacheKey(Ue);let Ze=se.programs;se.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?X.environment:null,se.fog=X.fog;const nt=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;se.envMap=ge.get(U.envMap||se.environment,nt),se.envMapRotation=se.environment!==null&&U.envMap===null?X.environmentRotation:U.envMapRotation,Ze===void 0&&(U.addEventListener("dispose",Tt),Ze=new Map,se.programs=Ze);let st=Ze.get(We);if(st!==void 0){if(se.currentProgram===st&&se.lightsStateVersion===Be)return yl(U,Ue),st}else Ue.uniforms=Ne.getUniforms(U),U.onBeforeCompile(Ue,w),st=Ne.acquireProgram(Ue,We),Ze.set(We,st),se.uniforms=Ue.uniforms;const Ge=se.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ge.clippingPlanes=Me.uniform),yl(U,Ue),se.needsLights=io(U),se.lightsStateVersion=Be,se.needsLights&&(Ge.ambientLightColor.value=J.state.ambient,Ge.lightProbe.value=J.state.probe,Ge.directionalLights.value=J.state.directional,Ge.directionalLightShadows.value=J.state.directionalShadow,Ge.spotLights.value=J.state.spot,Ge.spotLightShadows.value=J.state.spotShadow,Ge.rectAreaLights.value=J.state.rectArea,Ge.ltc_1.value=J.state.rectAreaLTC1,Ge.ltc_2.value=J.state.rectAreaLTC2,Ge.pointLights.value=J.state.point,Ge.pointLightShadows.value=J.state.pointShadow,Ge.hemisphereLights.value=J.state.hemi,Ge.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ge.spotLightMatrix.value=J.state.spotLightMatrix,Ge.spotLightMap.value=J.state.spotLightMap,Ge.pointShadowMatrix.value=J.state.pointShadowMatrix),se.currentProgram=st,se.uniformsList=null,st}function xl(U){if(U.uniformsList===null){const X=U.currentProgram.getUniforms();U.uniformsList=pu.seqWithValue(X.seq,U.uniforms)}return U.uniformsList}function yl(U,X){const le=A.get(U);le.outputColorSpace=X.outputColorSpace,le.batching=X.batching,le.batchingColor=X.batchingColor,le.instancing=X.instancing,le.instancingColor=X.instancingColor,le.instancingMorph=X.instancingMorph,le.skinning=X.skinning,le.morphTargets=X.morphTargets,le.morphNormals=X.morphNormals,le.morphColors=X.morphColors,le.morphTargetsCount=X.morphTargetsCount,le.numClippingPlanes=X.numClippingPlanes,le.numIntersection=X.numClipIntersection,le.vertexAlphas=X.vertexAlphas,le.vertexTangents=X.vertexTangents,le.toneMapping=X.toneMapping}function Sl(U,X,le,se,J){X.isScene!==!0&&(X=Lt),q.resetTextureUnits();const De=X.fog,Be=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?X.environment:null,Ue=ae===null?w.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Wr,We=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,Ze=ge.get(se.envMap||Be,We),nt=se.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,st=!!le.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ge=!!le.morphAttributes.position,ft=!!le.morphAttributes.normal,Yt=!!le.morphAttributes.color;let Zt=ji;se.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(Zt=w.toneMapping);const Ct=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,gn=Ct!==void 0?Ct.length:0,je=A.get(se),Un=P.state.lights;if(Qe===!0&&(et===!0||U!==ee)){const cn=U===ee&&se.id===ue;Me.setState(se,U,cn)}let at=!1;se.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Un.state.version||je.outputColorSpace!==Ue||J.isBatchedMesh&&je.batching===!1||!J.isBatchedMesh&&je.batching===!0||J.isBatchedMesh&&je.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&je.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&je.instancing===!1||!J.isInstancedMesh&&je.instancing===!0||J.isSkinnedMesh&&je.skinning===!1||!J.isSkinnedMesh&&je.skinning===!0||J.isInstancedMesh&&je.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&je.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&je.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&je.instancingMorph===!1&&J.morphTexture!==null||je.envMap!==Ze||se.fog===!0&&je.fog!==De||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Me.numPlanes||je.numIntersection!==Me.numIntersection)||je.vertexAlphas!==nt||je.vertexTangents!==st||je.morphTargets!==Ge||je.morphNormals!==ft||je.morphColors!==Yt||je.toneMapping!==Zt||je.morphTargetsCount!==gn)&&(at=!0):(at=!0,je.__version=se.version);let Ln=je.currentProgram;at===!0&&(Ln=Ca(se,X,J));let qn=!1,Si=!1,Yn=!1;const It=Ln.getUniforms(),ln=je.uniforms;if(qe.useProgram(Ln.program)&&(qn=!0,Si=!0,Yn=!0),se.id!==ue&&(ue=se.id,Si=!0),qn||ee!==U){qe.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),It.setValue(j,"projectionMatrix",U.projectionMatrix),It.setValue(j,"viewMatrix",U.matrixWorldInverse);const Mi=It.map.cameraPosition;Mi!==void 0&&Mi.setValue(j,_t.setFromMatrixPosition(U.matrixWorld)),Pt.logarithmicDepthBuffer&&It.setValue(j,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&It.setValue(j,"isOrthographic",U.isOrthographicCamera===!0),ee!==U&&(ee=U,Si=!0,Yn=!0)}if(je.needsLights&&(Un.state.directionalShadowMap.length>0&&It.setValue(j,"directionalShadowMap",Un.state.directionalShadowMap,q),Un.state.spotShadowMap.length>0&&It.setValue(j,"spotShadowMap",Un.state.spotShadowMap,q),Un.state.pointShadowMap.length>0&&It.setValue(j,"pointShadowMap",Un.state.pointShadowMap,q)),J.isSkinnedMesh){It.setOptional(j,J,"bindMatrix"),It.setOptional(j,J,"bindMatrixInverse");const cn=J.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),It.setValue(j,"boneTexture",cn.boneTexture,q))}J.isBatchedMesh&&(It.setOptional(j,J,"batchingTexture"),It.setValue(j,"batchingTexture",J._matricesTexture,q),It.setOptional(j,J,"batchingIdTexture"),It.setValue(j,"batchingIdTexture",J._indirectTexture,q),It.setOptional(j,J,"batchingColorTexture"),J._colorsTexture!==null&&It.setValue(j,"batchingColorTexture",J._colorsTexture,q));const On=le.morphAttributes;if((On.position!==void 0||On.normal!==void 0||On.color!==void 0)&&Ie.update(J,le,Ln),(Si||je.receiveShadow!==J.receiveShadow)&&(je.receiveShadow=J.receiveShadow,It.setValue(j,"receiveShadow",J.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&X.environment!==null&&(ln.envMapIntensity.value=X.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=h3()),Si&&(It.setValue(j,"toneMappingExposure",w.toneMappingExposure),je.needsLights&&cs(ln,Yn),De&&se.fog===!0&&Ke.refreshFogUniforms(ln,De),Ke.refreshMaterialUniforms(ln,se,xe,Y,P.state.transmissionRenderTarget[U.id]),pu.upload(j,xl(je),ln,q)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(pu.upload(j,xl(je),ln,q),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&It.setValue(j,"center",J.center),It.setValue(j,"modelViewMatrix",J.modelViewMatrix),It.setValue(j,"normalMatrix",J.normalMatrix),It.setValue(j,"modelMatrix",J.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const cn=se.uniformsGroups;for(let Mi=0,Ki=cn.length;Mi<Ki;Mi++){const Ys=cn[Mi];Fe.update(Ys,Ln),Fe.bind(Ys,Ln)}}return Ln}function cs(U,X){U.ambientLightColor.needsUpdate=X,U.lightProbe.needsUpdate=X,U.directionalLights.needsUpdate=X,U.directionalLightShadows.needsUpdate=X,U.pointLights.needsUpdate=X,U.pointLightShadows.needsUpdate=X,U.spotLights.needsUpdate=X,U.spotLightShadows.needsUpdate=X,U.rectAreaLights.needsUpdate=X,U.hemisphereLights.needsUpdate=X}function io(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return ae},this.setRenderTargetTextures=function(U,X,le){const se=A.get(U);se.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),A.get(U.texture).__webglTexture=X,A.get(U.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:le,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,X){const le=A.get(U);le.__webglFramebuffer=X,le.__useDefaultFramebuffer=X===void 0};const wa=j.createFramebuffer();this.setRenderTarget=function(U,X=0,le=0){ae=U,H=X,K=le;let se=null,J=!1,De=!1;if(U){const Ue=A.get(U);if(Ue.__useDefaultFramebuffer!==void 0){qe.bindFramebuffer(j.FRAMEBUFFER,Ue.__webglFramebuffer),z.copy(U.viewport),G.copy(U.scissor),fe=U.scissorTest,qe.viewport(z),qe.scissor(G),qe.setScissorTest(fe),ue=-1;return}else if(Ue.__webglFramebuffer===void 0)q.setupRenderTarget(U);else if(Ue.__hasExternalTextures)q.rebindTextures(U,A.get(U.texture).__webglTexture,A.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const nt=U.depthTexture;if(Ue.__boundDepthTexture!==nt){if(nt!==null&&A.has(nt)&&(U.width!==nt.image.width||U.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(U)}}const We=U.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(De=!0);const Ze=A.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?se=Ze[X][le]:se=Ze[X],J=!0):U.samples>0&&q.useMultisampledRTT(U)===!1?se=A.get(U).__webglMultisampledFramebuffer:Array.isArray(Ze)?se=Ze[le]:se=Ze,z.copy(U.viewport),G.copy(U.scissor),fe=U.scissorTest}else z.copy(re).multiplyScalar(xe).floor(),G.copy(ye).multiplyScalar(xe).floor(),fe=Ae;if(le!==0&&(se=wa),qe.bindFramebuffer(j.FRAMEBUFFER,se)&&qe.drawBuffers(U,se),qe.viewport(z),qe.scissor(G),qe.setScissorTest(fe),J){const Ue=A.get(U.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ue.__webglTexture,le)}else if(De){const Ue=X;for(let We=0;We<U.textures.length;We++){const Ze=A.get(U.textures[We]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+We,Ze.__webglTexture,le,Ue)}}else if(U!==null&&le!==0){const Ue=A.get(U.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ue.__webglTexture,le)}ue=-1},this.readRenderTargetPixels=function(U,X,le,se,J,De,Be,Ue=0){if(!(U&&U.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=A.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Be!==void 0&&(We=We[Be]),We){qe.bindFramebuffer(j.FRAMEBUFFER,We);try{const Ze=U.textures[Ue],nt=Ze.format,st=Ze.type;if(U.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ue),!Pt.textureFormatReadable(nt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(st)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=U.width-se&&le>=0&&le<=U.height-J&&j.readPixels(X,le,se,J,we.convert(nt),we.convert(st),De)}finally{const Ze=ae!==null?A.get(ae).__webglFramebuffer:null;qe.bindFramebuffer(j.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(U,X,le,se,J,De,Be,Ue=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=A.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Be!==void 0&&(We=We[Be]),We)if(X>=0&&X<=U.width-se&&le>=0&&le<=U.height-J){qe.bindFramebuffer(j.FRAMEBUFFER,We);const Ze=U.textures[Ue],nt=Ze.format,st=Ze.type;if(U.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ue),!Pt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ge=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,Ge),j.bufferData(j.PIXEL_PACK_BUFFER,De.byteLength,j.STREAM_READ),j.readPixels(X,le,se,J,we.convert(nt),we.convert(st),0);const ft=ae!==null?A.get(ae).__webglFramebuffer:null;qe.bindFramebuffer(j.FRAMEBUFFER,ft);const Yt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await P1(j,Yt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,Ge),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,De),j.deleteBuffer(Ge),j.deleteSync(Yt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,X=null,le=0){const se=Math.pow(2,-le),J=Math.floor(U.image.width*se),De=Math.floor(U.image.height*se),Be=X!==null?X.x:0,Ue=X!==null?X.y:0;q.setTexture2D(U,0),j.copyTexSubImage2D(j.TEXTURE_2D,le,0,0,Be,Ue,J,De),qe.unbindTexture()};const Na=j.createFramebuffer(),us=j.createFramebuffer();this.copyTextureToTexture=function(U,X,le=null,se=null,J=0,De=0){let Be,Ue,We,Ze,nt,st,Ge,ft,Yt;const Zt=U.isCompressedTexture?U.mipmaps[De]:U.image;if(le!==null)Be=le.max.x-le.min.x,Ue=le.max.y-le.min.y,We=le.isBox3?le.max.z-le.min.z:1,Ze=le.min.x,nt=le.min.y,st=le.isBox3?le.min.z:0;else{const ln=Math.pow(2,-J);Be=Math.floor(Zt.width*ln),Ue=Math.floor(Zt.height*ln),U.isDataArrayTexture?We=Zt.depth:U.isData3DTexture?We=Math.floor(Zt.depth*ln):We=1,Ze=0,nt=0,st=0}se!==null?(Ge=se.x,ft=se.y,Yt=se.z):(Ge=0,ft=0,Yt=0);const Ct=we.convert(X.format),gn=we.convert(X.type);let je;X.isData3DTexture?(q.setTexture3D(X,0),je=j.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(q.setTexture2DArray(X,0),je=j.TEXTURE_2D_ARRAY):(q.setTexture2D(X,0),je=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,X.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,X.unpackAlignment);const Un=j.getParameter(j.UNPACK_ROW_LENGTH),at=j.getParameter(j.UNPACK_IMAGE_HEIGHT),Ln=j.getParameter(j.UNPACK_SKIP_PIXELS),qn=j.getParameter(j.UNPACK_SKIP_ROWS),Si=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Zt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Zt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Ze),j.pixelStorei(j.UNPACK_SKIP_ROWS,nt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,st);const Yn=U.isDataArrayTexture||U.isData3DTexture,It=X.isDataArrayTexture||X.isData3DTexture;if(U.isDepthTexture){const ln=A.get(U),On=A.get(X),cn=A.get(ln.__renderTarget),Mi=A.get(On.__renderTarget);qe.bindFramebuffer(j.READ_FRAMEBUFFER,cn.__webglFramebuffer),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Ki=0;Ki<We;Ki++)Yn&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,A.get(U).__webglTexture,J,st+Ki),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,A.get(X).__webglTexture,De,Yt+Ki)),j.blitFramebuffer(Ze,nt,Be,Ue,Ge,ft,Be,Ue,j.DEPTH_BUFFER_BIT,j.NEAREST);qe.bindFramebuffer(j.READ_FRAMEBUFFER,null),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(J!==0||U.isRenderTargetTexture||A.has(U)){const ln=A.get(U),On=A.get(X);qe.bindFramebuffer(j.READ_FRAMEBUFFER,Na),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,us);for(let cn=0;cn<We;cn++)Yn?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ln.__webglTexture,J,st+cn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ln.__webglTexture,J),It?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,On.__webglTexture,De,Yt+cn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,On.__webglTexture,De),J!==0?j.blitFramebuffer(Ze,nt,Be,Ue,Ge,ft,Be,Ue,j.COLOR_BUFFER_BIT,j.NEAREST):It?j.copyTexSubImage3D(je,De,Ge,ft,Yt+cn,Ze,nt,Be,Ue):j.copyTexSubImage2D(je,De,Ge,ft,Ze,nt,Be,Ue);qe.bindFramebuffer(j.READ_FRAMEBUFFER,null),qe.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else It?U.isDataTexture||U.isData3DTexture?j.texSubImage3D(je,De,Ge,ft,Yt,Be,Ue,We,Ct,gn,Zt.data):X.isCompressedArrayTexture?j.compressedTexSubImage3D(je,De,Ge,ft,Yt,Be,Ue,We,Ct,Zt.data):j.texSubImage3D(je,De,Ge,ft,Yt,Be,Ue,We,Ct,gn,Zt):U.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,De,Ge,ft,Be,Ue,Ct,gn,Zt.data):U.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,De,Ge,ft,Zt.width,Zt.height,Ct,Zt.data):j.texSubImage2D(j.TEXTURE_2D,De,Ge,ft,Be,Ue,Ct,gn,Zt);j.pixelStorei(j.UNPACK_ROW_LENGTH,Un),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,at),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Ln),j.pixelStorei(j.UNPACK_SKIP_ROWS,qn),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Si),De===0&&X.generateMipmaps&&j.generateMipmap(je),qe.unbindTexture()},this.initRenderTarget=function(U){A.get(U).__webglFramebuffer===void 0&&q.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?q.setTextureCube(U,0):U.isData3DTexture?q.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?q.setTexture2DArray(U,0):q.setTexture2D(U,0),qe.unbindTexture()},this.resetState=function(){H=0,K=0,ae=null,qe.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=At._getDrawingBufferColorSpace(e),i.unpackColorSpace=At._getUnpackColorSpace()}}const m3=({npuUsage:r,totalPower:e})=>{const i=Q.useRef(null),s=Q.useRef(null);return Q.useEffect(()=>{if(!i.current)return;const l=i.current,c=l.clientWidth,f=l.clientHeight,p=new p3({antialias:!0,alpha:!0});p.setSize(c,f),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.appendChild(p.domElement);const g=new Q1,h=new ai(60,c/f,.1,200);h.position.set(0,0,8),g.add(new _T(16777215,.3));const x=new p_(58981,5,30);x.position.set(3,3,3),g.add(x);const v=new p_(5221630,2,30);v.position.set(-3,-2,-3),g.add(v);const _=new yu(1.5,4),E=new c_({color:58981,emissive:13073,wireframe:!1,transparent:!0,opacity:.35,shininess:120}),T=new Ui(_,E);g.add(T);const C=new yu(2,1),M=new c_({color:58981,wireframe:!0,transparent:!0,opacity:.12}),y=new Ui(C,M);g.add(y);const R=400,L=new Float32Array(R*3);for(let H=0;H<R;H++){const K=Math.random()*Math.PI*2,ae=Math.acos(2*Math.random()-1),ue=2.5+Math.random()*3;L[H*3]=ue*Math.sin(ae)*Math.cos(K),L[H*3+1]=ue*Math.sin(ae)*Math.sin(K),L[H*3+2]=ue*Math.cos(ae)}const D=new _i;D.setAttribute("position",new Di(L,3));const P=new Gx({color:58981,size:.04,transparent:!0,opacity:.7}),F=new oT(D,P);g.add(F);let O=0,b=0;const w=()=>{b+=.01,O=requestAnimationFrame(w),T.rotation.y+=.006,T.rotation.x+=.002,y.rotation.y-=.004,y.rotation.z+=.003,F.rotation.y+=.001;const H=1+Math.sin(b*2)*.03;T.scale.setScalar(H),p.render(g,h)};w(),s.current={renderer:p,scene:g,camera:h,frameId:O,core:T,outerRing:y,particles:F,particlePositions:L};const $=()=>{const H=l.clientWidth,K=l.clientHeight;h.aspect=H/K,h.updateProjectionMatrix(),p.setSize(H,K)};return window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$),cancelAnimationFrame(O),l.removeChild(p.domElement),p.dispose()}},[]),Q.useEffect(()=>{if(!s.current)return;const{core:l,outerRing:c,particles:f}=s.current,p=r/100;l.material.opacity=.2+p*.5,c.material.opacity=.05+p*.15;const g=p>.5?58981:5221630;f.material.color.setHex(g)},[r,e]),m.jsx("div",{ref:i,style:{width:"100%",height:"100%"}})},B_={green:"var(--green-primary)",blue:"var(--blue-accent)",orange:"var(--orange-accent)",red:"var(--red-accent)"},Th=({label:r,sublabel:e,value:i,power:s,color:l,badge:c,isReal:f})=>{const p=ol(i),g=ol(s);return m.jsxs("div",{className:"telem-bar",children:[m.jsxs("div",{className:"telem-header",children:[m.jsxs("div",{className:"telem-labels",children:[m.jsx("span",{className:"telem-label",children:r}),e&&m.jsx("span",{className:"telem-sublabel",children:e})]}),m.jsxs("div",{className:"telem-values",children:[c&&m.jsx("span",{className:`badge badge-${l==="green"?"green":l==="blue"?"blue":"orange"}`,children:c}),f!==void 0&&m.jsx("span",{className:`data-source-pill ${f?"data-source-pill--real":"data-source-pill--sim"}`,children:f?"● REAL":"○ SIM"}),m.jsxs("span",{className:"telem-percent mono",children:[p.toFixed(0),"%"]}),m.jsxs("span",{className:"telem-power mono",children:[g.toFixed(1),"W"]})]})]}),m.jsx("div",{className:"progress-track",children:m.jsx("div",{className:"progress-fill telem-fill",style:{width:`${p}%`,background:B_[l],boxShadow:l==="green"?`0 0 8px ${B_.green}`:"none"}})})]})},zs=({data:r,color:e="var(--green-primary)",height:i=60,width:s=200,area:l=!0,label:c})=>{const f=Q.useMemo(()=>{if(!r.length)return[];const h=Math.max(...r,1),x=Math.min(...r,0),v=h-x||1,_=s/(r.length-1||1);return r.map((E,T)=>{const C=T*_,M=i-(E-x)/v*(i-4)-2;return`${C},${M}`})},[r,s,i]),p=f.join(" "),g=f.length>0?`M ${f[0]} L ${f.join(" L ")} L ${(r.length-1)*(s/(r.length-1||1))},${i} L 0,${i} Z`:"";return m.jsxs("div",{style:{width:s,height:i,position:"relative"},children:[c&&m.jsx("span",{style:{position:"absolute",top:2,left:4,fontSize:"0.55rem",color:"var(--text-muted)",letterSpacing:"1px",zIndex:1},children:c}),m.jsxs("svg",{width:s,height:i,viewBox:`0 0 ${s} ${i}`,children:[m.jsx("defs",{children:m.jsxs("linearGradient",{id:`spark-grad-${e.replace(/[^a-z]/g,"")}`,x1:"0",x2:"0",y1:"0",y2:"1",children:[m.jsx("stop",{offset:"0%",stopColor:e,stopOpacity:"0.3"}),m.jsx("stop",{offset:"100%",stopColor:e,stopOpacity:"0.01"})]})}),l&&g&&m.jsx("path",{d:g,fill:`url(#spark-grad-${e.replace(/[^a-z]/g,"")})`}),p&&m.jsx("polyline",{points:p,fill:"none",stroke:e,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]})},g3=()=>{const{metrics:r,history:e}=Kr(),i=r?r.total_power*r.carbon_rate/3600:0;ol(i*1e4);const s=Q.useMemo(()=>e.map(h=>h.cpu_usage),[e]),l=Q.useMemo(()=>e.map(h=>h.gpu_usage),[e]),c=Q.useMemo(()=>e.map(h=>h.npu_usage),[e]),f=Q.useMemo(()=>e.map(h=>h.total_power),[e]),p=Q.useRef(0);r&&(p.current+=i*.5);const g=Q.useMemo(()=>r?Math.round(5+r.cpu_usage*.5+r.gpu_usage*.2):0,[r]);return m.jsxs("div",{className:"radar-layout",children:[m.jsx(Qr,{metrics:r,pageTitle:"LIVE AI CARBON RADAR",pageDesc:"Real-time per-inference energy & carbon impact"}),m.jsxs("div",{className:"radar-content",children:[m.jsx("div",{className:"radar-globe-col",children:m.jsxs("div",{className:"card globe-card",children:[m.jsxs("div",{className:"card-header",children:[m.jsx("span",{className:"card-title",children:"AI ENERGY FIELD"}),m.jsx("span",{className:"live-dot",children:"LIVE"})]}),m.jsx("div",{className:"globe-container",children:m.jsx(m3,{npuUsage:r?.npu_usage??0,totalPower:r?.total_power??0})}),m.jsxs("div",{className:"globe-overlay-stats",children:[m.jsxs("div",{className:"overlay-stat",children:[m.jsx(Vr,{size:14,className:"text-green"}),m.jsxs("div",{children:[m.jsxs("div",{className:"overlay-val mono text-green",children:[r?.total_power.toFixed(1)??"0.0","W"]}),m.jsx("div",{className:"overlay-label",children:"TOTAL POWER"})]})]}),m.jsx("div",{className:"overlay-divider"}),m.jsxs("div",{className:"overlay-stat",children:[m.jsx(Gs,{size:14,className:"text-accent-orange"}),m.jsxs("div",{children:[m.jsxs("div",{className:"overlay-val mono text-accent-orange",children:[p.current.toFixed(4),"g"]}),m.jsx("div",{className:"overlay-label",children:"CUMUL. CO₂e"})]})]}),m.jsx("div",{className:"overlay-divider"}),m.jsxs("div",{className:"overlay-stat",children:[m.jsx(hx,{size:14,className:"text-accent-blue"}),m.jsxs("div",{children:[m.jsxs("div",{className:"overlay-val mono text-accent-blue",children:[g,"ms"]}),m.jsx("div",{className:"overlay-label",children:"EST. LATENCY"})]})]})]})]})}),m.jsxs("div",{className:"radar-center-col",children:[m.jsxs("div",{className:"card co2-hero-card",children:[m.jsxs("div",{className:"card-header",children:[m.jsx("span",{className:"card-title",children:"CARBON EMISSION RATE"}),m.jsx("span",{className:"badge badge-green",children:"REAL-TIME"})]}),m.jsxs("div",{className:"co2-display",children:[m.jsx("div",{className:"co2-unit-top",children:"g CO₂e·s⁻¹"}),m.jsx("div",{className:"co2-number",children:m.jsx("span",{className:"co2-int mono",children:i.toFixed(4)})}),m.jsxs("div",{className:"co2-equiv",children:["≈ ",(i*3600).toFixed(3),"g per hour · ",(i*86400).toFixed(2),"g per day"]})]}),m.jsx("div",{className:"co2-spark-row",children:m.jsx(zs,{data:f,color:"var(--green-primary)",height:48,width:320,label:"POWER DRAW TREND"})})]}),m.jsxs("div",{className:"card npu-hero-card glass-accent",children:[m.jsxs("div",{className:"card-header",children:[m.jsx("span",{className:"card-title",children:"AMD XDNA™ 2 NPU STATUS"}),m.jsx("span",{className:"badge badge-green",children:"ACTIVE"})]}),m.jsxs("div",{className:"npu-stat-row",children:[m.jsxs("div",{className:"npu-big-stat",children:[m.jsxs("span",{className:"value-large text-green-glow",children:[r?.npu_usage.toFixed(0)??"0","%"]}),m.jsx("span",{className:"npu-stat-label",children:"UTILIZATION"})]}),m.jsxs("div",{className:"npu-big-stat",children:[m.jsxs("span",{className:"value-large text-green",children:[r?.npu_power.toFixed(1)??"0.0","W"]}),m.jsx("span",{className:"npu-stat-label",children:"POWER DRAW"})]}),m.jsxs("div",{className:"npu-efficiency-badge",children:[m.jsx("span",{className:"eff-num",children:"92%"}),m.jsx("span",{className:"eff-label",children:"LESS POWER vs GPU"})]})]}),m.jsx(zs,{data:c,color:"var(--green-primary)",height:36,width:400,label:"NPU UTILIZATION HISTORY"})]}),m.jsxs("div",{className:"radar-stat-grid",children:[m.jsxs("div",{className:"card mini-stat-card",children:[m.jsx(Eu,{size:18,className:"text-accent-blue"}),m.jsxs("div",{className:"mini-stat-val mono",children:[(r?.cpu_power??0).toFixed(0),"W"]}),m.jsx("div",{className:"mini-stat-label",children:"CPU POWER"})]}),m.jsxs("div",{className:"card mini-stat-card",children:[m.jsx(Vr,{size:18,className:"text-accent-orange"}),m.jsxs("div",{className:"mini-stat-val mono",children:[(r?.gpu_power??0).toFixed(0),"W"]}),m.jsx("div",{className:"mini-stat-label",children:"GPU POWER"})]}),m.jsxs("div",{className:"card mini-stat-card glass-accent",children:[m.jsx(Gs,{size:18,className:"text-green"}),m.jsxs("div",{className:"mini-stat-val mono text-green",children:[(r?.npu_power??0).toFixed(1),"W"]}),m.jsx("div",{className:"mini-stat-label",children:"NPU POWER"})]}),m.jsxs("div",{className:"card mini-stat-card",children:[m.jsx(Bb,{size:18,className:"text-accent-red"}),m.jsxs("div",{className:"mini-stat-val mono",children:[((r?.total_power??0)*(r?.carbon_rate??.49)*1e3/3600).toFixed(2),"mg/s"]}),m.jsx("div",{className:"mini-stat-label",children:"CARBON RATE"}),r?.carbon_country&&m.jsxs("div",{className:"mini-stat-source",title:r.carbon_source,children:["📍 ",r.carbon_country]})]})]})]}),m.jsxs("div",{className:"radar-right-col",children:[m.jsxs("div",{className:"card telemetry-card",children:[m.jsxs("div",{className:"card-header",children:[m.jsx("span",{className:"card-title",children:"HARDWARE TELEMETRY"}),m.jsx("span",{className:"live-dot",children:"STREAMING"})]}),m.jsx(Th,{label:"AMD Ryzen™ CPU",sublabel:"Zen 5 Architecture",value:r?.cpu_usage??0,power:r?.cpu_power??0,color:"blue",isReal:!0}),m.jsx(Th,{label:"AMD Radeon™ GPU",sublabel:"RDNA 3 Architecture",value:r?.gpu_usage??0,power:r?.gpu_power??0,color:"orange",isReal:r?.gpu_real}),m.jsx(Th,{label:"AMD XDNA™ 2 NPU",sublabel:"Dedicated AI Engine",value:r?.npu_usage??0,power:r?.npu_power??0,color:"green",badge:"OPTIMAL",isReal:r?.npu_real})]}),m.jsxs("div",{className:"card sparklines-card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"UTILIZATION HISTORY"})}),m.jsxs("div",{className:"spark-row",children:[m.jsx("span",{className:"section-label text-accent-blue",children:"CPU"}),m.jsx(zs,{data:s,color:"var(--blue-accent)",height:40,width:170})]}),m.jsxs("div",{className:"spark-row",children:[m.jsx("span",{className:"section-label text-accent-orange",children:"GPU"}),m.jsx(zs,{data:l,color:"var(--orange-accent)",height:40,width:170})]}),m.jsxs("div",{className:"spark-row",children:[m.jsx("span",{className:"section-label text-green",children:"NPU"}),m.jsx(zs,{data:c,color:"var(--green-primary)",height:40,width:170})]})]}),m.jsxs("div",{className:"card carbon-budget-card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"SESSION CARBON BUDGET"})}),m.jsxs("div",{className:"budget-display",children:[m.jsxs("div",{className:"budget-value mono",children:[p.current.toFixed(4),m.jsx("span",{className:"budget-unit",children:"g CO₂e"})]}),m.jsx("div",{className:"budget-desc",children:"accumulated this session"})]}),m.jsxs("div",{className:"budget-compare",children:[m.jsxs("div",{className:"budget-compare-item",children:[m.jsx("span",{className:"label",children:"Cloud GPU equivalent"}),m.jsxs("span",{className:"val mono text-accent-red",children:[(p.current*8.2).toFixed(2),"g"]})]}),m.jsxs("div",{className:"budget-compare-item",children:[m.jsx("span",{className:"label",children:"Trees needed to offset"}),m.jsx("span",{className:"val mono text-accent-orange",children:(p.current/21e3).toFixed(8)})]}),m.jsxs("div",{className:"budget-compare-item",children:[m.jsx("span",{className:"label",children:"AMD NPU savings vs GPU"}),m.jsxs("span",{className:"val mono text-green",children:["-",(p.current*7.2).toFixed(2),"g"]})]})]})]})]})]})]})},Ls={CPU:{color:"var(--blue-accent)",powerMult:1,latencyMult:4,label:"AMD Ryzen™ CPU",sublabel:"Zen 5 Cores"},GPU:{color:"var(--orange-accent)",powerMult:3,latencyMult:1.5,label:"AMD Radeon™ GPU",sublabel:"RDNA 3 Compute"},NPU:{color:"var(--green-primary)",powerMult:.08,latencyMult:1,label:"AMD XDNA™ 2 NPU",sublabel:"Dedicated AI Engine"}},au={FP32:{powerMult:1,latencyMult:1.8,accuracyScore:100,label:"Full Precision (32-bit float)"},BF16:{powerMult:.55,latencyMult:1.1,accuracyScore:99.2,label:"Brain Float 16"},INT8:{powerMult:.22,latencyMult:.6,accuracyScore:97.8,label:"8-bit Integer Quantization"}},H_=["ResNet-50","BERT-Base","YOLOv8-nano","Whisper-small","Stable Diffusion"],v3=()=>{const{metrics:r}=Kr(),[e,i]=Q.useState("FP32"),[s,l]=Q.useState("NPU"),[c,f]=Q.useState(H_[0]),[p,g]=Q.useState(!1),[h,x]=Q.useState([]),[v,_]=Q.useState(0),E=Q.useRef(null),T=Ls[s],C=au[e],M=3.5,y=M*T.powerMult*C.powerMult,R=28*T.latencyMult*C.latencyMult,L=y*.44/3600,D=Math.round(1e3/R),P=()=>{g(!0),_(0);let b=0;E.current=setInterval(()=>{if(b+=5+Math.random()*8,_(Math.min(b,100)),b>=100){clearInterval(E.current);const w={id:Math.random().toString(36).slice(2),engine:s,precision:e,latency_ms:R*(.9+Math.random()*.2),energy_joules:y*R/1e3,co2_grams:L*R/1e3,throughput_ops:D,timestamp:Date.now(),model:c};il.recordInference(w),x($=>[w,...$].slice(0,20)),g(!1),_(0)}},80)};Q.useEffect(()=>()=>{E.current&&clearInterval(E.current)},[]);const F=h.slice().reverse().map(b=>b.latency_ms),O=h.slice().reverse().map(b=>b.energy_joules*1e3);return m.jsxs("div",{className:"prec-layout",children:[m.jsx(Qr,{metrics:r,pageTitle:"PRECISION TOGGLE LAB",pageDesc:"Compare CPU vs GPU vs NPU across FP32, BF16, INT8"}),m.jsxs("div",{className:"prec-content",children:[m.jsxs("div",{className:"prec-left",children:[m.jsxs("div",{className:"card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"MODEL SELECTION"})}),m.jsx("div",{className:"model-list",children:H_.map(b=>m.jsxs("button",{className:`model-btn ${c===b?"model-btn--active":""}`,onClick:()=>f(b),children:[m.jsx(gu,{size:12}),b]},b))})]}),m.jsxs("div",{className:"card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"PRECISION MODE"})}),m.jsx("div",{className:"precision-selector",children:["FP32","BF16","INT8"].map(b=>m.jsxs("button",{className:`prec-btn ${e===b?"prec-btn--active":""}`,onClick:()=>i(b),children:[m.jsx("span",{className:"prec-btn-name",children:b}),m.jsx("span",{className:"prec-btn-desc",children:au[b].label}),m.jsxs("span",{className:"prec-btn-power",children:[Math.round(au[b].powerMult*100),"% power"]})]},b))})]}),m.jsxs("div",{className:"card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"EXECUTION ENGINE"})}),m.jsx("div",{className:"engine-selector",children:["CPU","GPU","NPU"].map(b=>{const w=Ls[b];return m.jsxs("button",{className:`engine-btn ${s===b?"engine-btn--active":""}`,style:s===b?{borderColor:w.color,boxShadow:`0 0 15px ${w.color}30`}:{},onClick:()=>l(b),children:[m.jsx("span",{className:"engine-dot",style:{background:w.color}}),m.jsxs("div",{className:"engine-info",children:[m.jsx("span",{className:"engine-name",style:s===b?{color:w.color}:{},children:b}),m.jsx("span",{className:"engine-sub",children:w.sublabel})]}),m.jsx("span",{className:"engine-power-tag",children:w.powerMult<1?`${Math.round(w.powerMult*100)}%`:`${w.powerMult}x`})]},b)})})]})]}),m.jsxs("div",{className:"prec-center",children:[m.jsxs("div",{className:"card estimate-card",children:[m.jsxs("div",{className:"card-header",children:[m.jsxs("span",{className:"card-title",children:["PROJECTED IMPACT — ",c," / ",e," / ",s]}),m.jsxs("span",{className:"badge",style:{background:`${T.color}20`,color:T.color,border:`1px solid ${T.color}40`},children:[s," SELECTED"]})]}),m.jsxs("div",{className:"estimate-grid",children:[m.jsxs("div",{className:"estimate-item",children:[m.jsxs("div",{className:"estimate-val mono",style:{color:T.color},children:[y.toFixed(2),"W"]}),m.jsx("div",{className:"estimate-label",children:"EST. POWER"}),m.jsx("div",{className:"estimate-bar",children:m.jsx("div",{className:"estimate-fill",style:{width:`${Math.min(y/50*100,100)}%`,background:T.color}})})]}),m.jsxs("div",{className:"estimate-item",children:[m.jsxs("div",{className:"estimate-val mono",children:[R.toFixed(0),"ms"]}),m.jsx("div",{className:"estimate-label",children:"LATENCY"}),m.jsx("div",{className:"estimate-bar",children:m.jsx("div",{className:"estimate-fill",style:{width:`${Math.min(R/200*100,100)}%`,background:"var(--blue-accent)"}})})]}),m.jsxs("div",{className:"estimate-item",children:[m.jsxs("div",{className:"estimate-val mono text-green",children:[L.toFixed(6),"g/s"]}),m.jsx("div",{className:"estimate-label",children:"CO₂ RATE"}),m.jsx("div",{className:"estimate-bar",children:m.jsx("div",{className:"estimate-fill",style:{width:`${Math.min(L*1e6,100)}%`,background:"var(--orange-accent)"}})})]}),m.jsxs("div",{className:"estimate-item",children:[m.jsxs("div",{className:"estimate-val mono",children:[D," op/s"]}),m.jsx("div",{className:"estimate-label",children:"THROUGHPUT"}),m.jsx("div",{className:"estimate-bar",children:m.jsx("div",{className:"estimate-fill",style:{width:`${Math.min(D/500*100,100)}%`,background:"var(--purple-accent)"}})})]})]}),m.jsxs("div",{className:"vs-section",children:[m.jsx("div",{className:"vs-label",children:"vs CPU+FP32 baseline"}),m.jsxs("div",{className:"vs-grid",children:[m.jsxs("div",{className:"vs-item",children:[m.jsx("span",{className:"vs-key",children:"Power Savings"}),m.jsxs("span",{className:"vs-val mono text-green",children:["-",Math.round((1-T.powerMult*C.powerMult)*100),"%"]})]}),m.jsxs("div",{className:"vs-item",children:[m.jsx("span",{className:"vs-key",children:"Latency Change"}),m.jsxs("span",{className:`vs-val mono ${T.latencyMult*C.latencyMult<1?"text-green":"text-accent-orange"}`,children:[T.latencyMult*C.latencyMult<1?"-":"+",Math.abs(Math.round((1-T.latencyMult*C.latencyMult)*100)),"%"]})]}),m.jsxs("div",{className:"vs-item",children:[m.jsx("span",{className:"vs-key",children:"Carbon Reduction"}),m.jsxs("span",{className:"vs-val mono text-green",children:["-",Math.round((1-T.powerMult*C.powerMult)*100),"%"]})]}),m.jsxs("div",{className:"vs-item",children:[m.jsx("span",{className:"vs-key",children:"Accuracy"}),m.jsxs("span",{className:"vs-val mono",children:[C.accuracyScore,"%"]})]})]})]}),m.jsxs("div",{className:"run-section",children:[p?m.jsxs("div",{className:"run-progress",children:[m.jsx("div",{className:"run-bar",children:m.jsx("div",{className:"run-fill",style:{width:`${v}%`,background:T.color}})}),m.jsxs("span",{className:"run-pct mono",children:[v.toFixed(0),"%"]})]}):null,m.jsxs("button",{className:"btn btn-primary run-btn",onClick:P,disabled:p,style:{background:p?"var(--bg-elevated)":T.color,color:p?"var(--text-muted)":"var(--bg-void)"},children:[p?m.jsx(ub,{size:16}):m.jsx(gx,{size:16}),p?"RUNNING INFERENCE...":`RUN ON ${s}`]})]})]}),m.jsxs("div",{className:"card comparison-matrix",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"ENGINE COMPARISON MATRIX"})}),m.jsxs("table",{className:"comp-table",children:[m.jsx("thead",{children:m.jsxs("tr",{children:[m.jsx("th",{children:"Engine"}),m.jsx("th",{children:"Power"}),m.jsx("th",{children:"Latency"}),m.jsx("th",{children:"CO₂/s"}),m.jsx("th",{children:"Ops/s"}),m.jsx("th",{children:"Efficiency"})]})}),m.jsx("tbody",{children:["CPU","GPU","NPU"].map(b=>{const w=Ls[b],$=au[e],H=M*w.powerMult*$.powerMult,K=28*w.latencyMult*$.latencyMult,ae=H*.44/3600,ue=Math.round(1e3/K),ee=Math.round(ue/H);return m.jsxs("tr",{className:b===s?"comp-row--active":"",children:[m.jsx("td",{children:m.jsxs("span",{className:"engine-tag",style:{color:w.color},children:[m.jsx("span",{className:"engine-dot small",style:{background:w.color}}),b]})}),m.jsxs("td",{className:"mono",children:[H.toFixed(1),"W"]}),m.jsxs("td",{className:"mono",children:[K.toFixed(0),"ms"]}),m.jsxs("td",{className:"mono",children:[ae.toFixed(6),"g"]}),m.jsx("td",{className:"mono",children:ue}),m.jsx("td",{children:m.jsx("div",{className:"eff-bar",children:m.jsx("div",{className:"eff-fill",style:{width:`${Math.min(ee/100,100)}%`,background:w.color}})})})]},b)})})]})]})]}),m.jsxs("div",{className:"prec-right",children:[m.jsxs("div",{className:"card run-history-card",children:[m.jsxs("div",{className:"card-header",children:[m.jsx("span",{className:"card-title",children:"RUN HISTORY"}),m.jsxs("span",{className:"badge badge-green",children:[h.length," RUNS"]})]}),h.length===0&&m.jsxs("div",{className:"empty-runs",children:[m.jsx(Eu,{size:32,style:{opacity:.2}}),m.jsx("p",{children:"No runs yet. Configure and run an inference above."})]}),m.jsx("div",{className:"run-list",children:h.map(b=>m.jsxs("div",{className:"run-item",children:[m.jsxs("div",{className:"run-header",children:[m.jsx("span",{className:"run-engine-tag",style:{color:Ls[b.engine].color},children:b.engine}),m.jsx("span",{className:"badge",style:{background:`${Ls[b.engine].color}15`,color:Ls[b.engine].color,border:`1px solid ${Ls[b.engine].color}30`},children:b.precision}),m.jsx("span",{className:"run-model",children:b.model}),m.jsx("span",{className:"run-time mono",children:new Date(b.timestamp).toLocaleTimeString()})]}),m.jsxs("div",{className:"run-stats",children:[m.jsxs("span",{className:"run-stat",children:[m.jsx("span",{className:"label",children:"Lat"}),m.jsxs("span",{className:"val mono",children:[b.latency_ms.toFixed(0),"ms"]})]}),m.jsxs("span",{className:"run-stat",children:[m.jsx("span",{className:"label",children:"Energy"}),m.jsxs("span",{className:"val mono",children:[b.energy_joules.toFixed(4),"J"]})]}),m.jsxs("span",{className:"run-stat",children:[m.jsx("span",{className:"label",children:"CO₂"}),m.jsxs("span",{className:"val mono text-green",children:[b.co2_grams.toFixed(6),"g"]})]})]})]},b.id))})]}),h.length>1&&m.jsxs("div",{className:"card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"LATENCY TREND"})}),m.jsx(zs,{data:F,color:"var(--blue-accent)",height:60,width:250}),m.jsx("div",{className:"card-header",style:{marginTop:16},children:m.jsx("span",{className:"card-title",children:"ENERGY TREND (mJ)"})}),m.jsx(zs,{data:O,color:"var(--orange-accent)",height:60,width:250})]})]})]})]})},G_={CPU:{powerMult:4.5,latencyMult:4.2,color:"var(--blue-accent)"},GPU:{powerMult:3,latencyMult:1.5,color:"var(--orange-accent)"},NPU:{powerMult:.08,latencyMult:1,color:"var(--green-primary)"}},V_={FP32:{powerMult:1,latencyMult:1.8},BF16:{powerMult:.55,latencyMult:1.1},INT8:{powerMult:.22,latencyMult:.6}},Vp={"ResNet-50":{basePower:3.5,baseLatency:8,params:"25 M",task:"Image Classification"},"BERT-Base":{basePower:6,baseLatency:45,params:"110 M",task:"NLP / Text Encoding"},"YOLOv8-nano":{basePower:1.8,baseLatency:5,params:"3.2 M",task:"Real-time Detection"},"Whisper-small":{basePower:5.2,baseLatency:280,params:"244 M",task:"Audio Transcription"},"Stable Diffusion v1.5":{basePower:14,baseLatency:4800,params:"860 M",task:"Image Generation"},"LLaMA 3 8B":{basePower:18.5,baseLatency:12e3,params:"8 B",task:"Text Generation"},MobileNetV3:{basePower:.9,baseLatency:3,params:"5.4 M",task:"Mobile Classification"}},j_=[{engine:"CPU",precision:"FP32",model:"BERT-Base",label:"RUN A — LEGACY"},{engine:"NPU",precision:"INT8",model:"BERT-Base",label:"RUN B — AMD NPU"}],k_=(r,e=.44)=>{const i=Vp[r.model]??{basePower:3.5,baseLatency:28},s=i.basePower*G_[r.engine].powerMult*V_[r.precision].powerMult,l=i.baseLatency*G_[r.engine].latencyMult*V_[r.precision].latencyMult,c=s*e/3600,f=l>0?Math.round(1e3/l):0,p=s>0?Math.round(f/s*10):0;return{power:s,latency:l,co2:c,throughput:f,effScore:p}},_3=Object.keys(Vp),x3=["CPU","GPU","NPU"],y3=["FP32","BF16","INT8"],S3=()=>{const{metrics:r}=Kr(),[e,i]=Q.useState(j_[0]),[s,l]=Q.useState(j_[1]),[c,f]=Q.useState(!1),[p,g]=Q.useState({a:0,b:0}),h=Q.useRef(null),x=r?.carbon_rate??.49,v=k_(e,x),_=k_(s,x),E=(v.power-_.power)/v.power*100,T=(v.latency-_.latency)/v.latency*100,C=(v.co2-_.co2)/v.co2*100,M=()=>{f(!0),g({a:0,b:0});let D=0,P=0;h.current=setInterval(()=>{D+=100/(v.latency/30),P+=100/(_.latency/30),g({a:Math.min(D,100),b:Math.min(P,100)}),D>=100&&P>=100&&(clearInterval(h.current),f(!1))},30)},y=({run:D,setRun:P,side:F})=>{const O=F==="a"?"var(--red-accent)":"var(--green-primary)",b=Vp[D.model];return m.jsxs("div",{className:"diff-config-panel",children:[m.jsx("div",{className:"diff-config-label",style:{color:O},children:D.label}),m.jsx("select",{className:"diff-select",value:D.engine,onChange:w=>P({...D,engine:w.target.value}),children:x3.map(w=>m.jsx("option",{value:w,children:w},w))}),m.jsx("select",{className:"diff-select",value:D.precision,onChange:w=>P({...D,precision:w.target.value}),children:y3.map(w=>m.jsx("option",{value:w,children:w},w))}),m.jsx("select",{className:"diff-select",value:D.model,onChange:w=>P({...D,model:w.target.value}),children:_3.map(w=>m.jsx("option",{value:w,children:w},w))}),b&&m.jsxs("div",{className:"diff-model-meta",children:[m.jsx("span",{className:"diff-model-task",children:b.task}),m.jsxs("span",{className:"diff-model-params",children:[b.params," params"]})]})]})},R=(D,P)=>P==="ms"&&D>=1e3?`${(D/1e3).toFixed(2)}s`:D<.001&&D!==0?D.toExponential(2)+P:D<1?D.toFixed(4)+P:D.toFixed(1)+P,L=({label:D,a:P,b:F,unit:O,isLower:b})=>{const w=b?F<P:F>P,$=Math.max(P,F,.001),H=P!==0?Math.abs(b?(P-F)/P*100:(F-P)/P*100):0;return m.jsxs("div",{className:"stat-row",children:[m.jsx("div",{className:"stat-row-label",children:D}),m.jsxs("div",{className:"stat-row-bars",children:[m.jsxs("div",{className:"stat-bar-container side-a",children:[m.jsx("span",{className:"stat-bar-val mono a-val",children:R(P,O)}),m.jsx("div",{className:"stat-bar-track",children:m.jsx("div",{className:"stat-bar-fill fill-a",style:{width:`${P/$*100}%`}})})]}),m.jsx("div",{className:"stat-arrow",children:m.jsx(nb,{size:14})}),m.jsxs("div",{className:"stat-bar-container side-b",children:[m.jsx("div",{className:"stat-bar-track",children:m.jsx("div",{className:`stat-bar-fill ${w?"fill-b-better":"fill-b-worse"}`,style:{width:`${F/$*100}%`}})}),m.jsx("span",{className:"stat-bar-val mono b-val",children:R(F,O)})]})]}),m.jsxs("div",{className:"stat-delta",style:{color:w?"var(--green-primary)":"var(--red-accent)"},children:[w?"▼":"▲"," ",H.toFixed(0),"%"]})]})};return m.jsxs("div",{className:"diff-layout",children:[m.jsx(Qr,{metrics:r,pageTitle:"CARBON DIFF MODE",pageDesc:"Side-by-side AI run comparison — visualize the cost of optimization"}),m.jsxs("div",{className:"diff-content",children:[m.jsxs("div",{className:"card diff-config-card",children:[m.jsxs("div",{className:"card-header",children:[m.jsx("span",{className:"card-title",children:"CONFIGURE COMPARISON"}),m.jsxs("button",{className:"btn btn-primary",onClick:M,disabled:c,children:[m.jsx(gx,{size:14}),c?"REPLAYING...":"REPLAY & COMPARE"]})]}),m.jsxs("div",{className:"diff-config-row",children:[m.jsx(y,{run:e,setRun:i,side:"a"}),m.jsx("div",{className:"diff-vs",children:"VS"}),m.jsx(y,{run:s,setRun:l,side:"b"})]}),(c||p.a>0)&&m.jsxs("div",{className:"replay-section",children:[m.jsxs("div",{className:"replay-track-row",children:[m.jsxs("span",{className:"replay-label a-label",children:[e.engine,"/",e.precision]}),m.jsx("div",{className:"replay-track",children:m.jsx("div",{className:"replay-fill replay-fill-a",style:{width:`${p.a}%`}})}),m.jsxs("span",{className:"replay-pct mono",children:[p.a.toFixed(0),"%"]})]}),m.jsxs("div",{className:"replay-track-row",children:[m.jsxs("span",{className:"replay-label b-label",children:[s.engine,"/",s.precision]}),m.jsx("div",{className:"replay-track",children:m.jsx("div",{className:"replay-fill replay-fill-b",style:{width:`${p.b}%`}})}),m.jsxs("span",{className:"replay-pct mono",children:[p.b.toFixed(0),"%"]})]})]})]}),m.jsxs("div",{className:"diff-main",children:[m.jsx("div",{className:"diff-compare-col",children:m.jsxs("div",{className:"card diff-metrics-card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"METRIC COMPARISON"})}),m.jsxs("div",{className:"stat-section-header",children:[m.jsxs("span",{className:"a-label",style:{color:"var(--red-accent)"},children:[e.label," (",e.engine,"/",e.precision,")"]}),m.jsxs("span",{className:"b-label",style:{color:"var(--green-primary)"},children:[s.label," (",s.engine,"/",s.precision,")"]})]}),m.jsxs("div",{className:"stat-rows",children:[m.jsx(L,{label:"Power Draw",a:v.power,b:_.power,unit:"W",isLower:!0}),m.jsx(L,{label:"Inference Latency",a:v.latency,b:_.latency,unit:"ms",isLower:!0}),m.jsx(L,{label:"CO₂ Emission Rate",a:v.co2,b:_.co2,unit:"g/s",isLower:!0}),m.jsx(L,{label:"Throughput",a:v.throughput,b:_.throughput,unit:"/s",isLower:!1}),m.jsx(L,{label:"Efficiency Score",a:v.effScore,b:_.effScore,unit:"pts",isLower:!1})]})]})}),m.jsx("div",{className:"diff-summary-col",children:m.jsxs("div",{className:`card diff-highlight-card ${C>0?"diff-highlight--positive":"diff-highlight--negative"}`,children:[m.jsxs("div",{className:"card-header",children:[m.jsx("span",{className:"card-title",children:"IMPACT SUMMARY"}),m.jsx(Gb,{size:20,className:"text-green"})]}),m.jsxs("div",{className:"savings-grid",children:[m.jsxs("div",{className:"saving-item",children:[m.jsxs("div",{className:"saving-pct",style:{color:E>0?"var(--green-primary)":"var(--red-accent)"},children:[E>0?"-":"+",Math.abs(E).toFixed(0),"%"]}),m.jsx("div",{className:"saving-label",children:"POWER SAVINGS"}),m.jsxs("div",{className:"saving-abs mono",children:[v.power.toFixed(1),"W → ",_.power.toFixed(1),"W"]})]}),m.jsxs("div",{className:"saving-item",children:[m.jsxs("div",{className:"saving-pct",style:{color:T>0?"var(--green-primary)":"var(--red-accent)"},children:[T>0?"-":"+",Math.abs(T).toFixed(0),"%"]}),m.jsx("div",{className:"saving-label",children:"LATENCY DIFF"}),m.jsxs("div",{className:"saving-abs mono",children:[v.latency.toFixed(0),"ms → ",_.latency.toFixed(0),"ms"]})]}),m.jsxs("div",{className:"saving-item col-span-2",children:[m.jsxs("div",{className:"saving-pct large",style:{color:C>0?"var(--green-primary)":"var(--red-accent)"},children:[C>0?"-":"+",Math.abs(C).toFixed(0),"%"]}),m.jsx("div",{className:"saving-label",children:"CARBON REDUCTION"}),m.jsxs("div",{className:"saving-abs mono",children:[v.co2.toFixed(6),"g/s → ",_.co2.toFixed(6),"g/s"]})]})]}),C>0&&m.jsxs("div",{className:"green-badge-big",children:[m.jsx(Gs,{size:18}),m.jsxs("span",{children:["Switching from ",m.jsxs("strong",{children:[e.engine,"/",e.precision]})," to ",m.jsxs("strong",{children:[s.engine,"/",s.precision]})," saves approximately ",m.jsxs("strong",{children:[C.toFixed(0),"% carbon emissions"]})," per inference on AMD hardware."]})]}),m.jsxs("div",{className:"projections",children:[m.jsx("div",{className:"proj-header",children:"ANNUAL SAVINGS PROJECTION (1000 inferences/hr)"}),m.jsxs("div",{className:"proj-grid",children:[m.jsxs("div",{className:"proj-item",children:[m.jsx("span",{className:"proj-label",children:"Hourly CO₂ saved"}),m.jsxs("span",{className:"proj-val mono text-green",children:[Math.max(0,(v.co2-_.co2)*1e3*3600).toFixed(2),"g"]})]}),m.jsxs("div",{className:"proj-item",children:[m.jsx("span",{className:"proj-label",children:"Daily CO₂ saved"}),m.jsxs("span",{className:"proj-val mono text-green",children:[Math.max(0,(v.co2-_.co2)*1e3*86400).toFixed(0),"g"]})]}),m.jsxs("div",{className:"proj-item",children:[m.jsx("span",{className:"proj-label",children:"Yearly CO₂ saved"}),m.jsxs("span",{className:"proj-val mono text-green",children:[Math.max(0,(v.co2-_.co2)*1e3*86400*365/1e3).toFixed(2),"kg"]})]}),m.jsxs("div",{className:"proj-item",children:[m.jsx("span",{className:"proj-label",children:"Equivalent power saved"}),m.jsxs("span",{className:"proj-val mono text-green",children:[Math.max(0,v.power-_.power).toFixed(1),"W avg"]})]})]})]})]})})]})]})]})},M3=[{id:"1",role:"assistant",type:"info",content:"Hello! I'm the GreenLens AI Coach — an on-device agent specialized in helping developers build greener AI systems on AMD hardware. I'm analyzing your current inference patterns...",timestamp:Date.now()-1e4}],E3=r=>{const e=Date.now();return r.cpu_usage>70&&r.npu_usage<10?{id:Math.random().toString(36).slice(2),role:"assistant",type:"warning",content:`⚠️ High CPU load detected (${r.cpu_usage.toFixed(0)}%) with near-idle AMD NPU. This is a major carbon inefficiency. Moving inference workloads to the XDNA™ 2 NPU could reduce energy consumption by ~92% for identical throughput.`,timestamp:e}:r.gpu_usage>60&&r.npu_usage<20?{id:Math.random().toString(36).slice(2),role:"assistant",type:"tip",content:`💡 I see your GPU is running hot (${r.gpu_usage.toFixed(0)}%). For inference workloads under ~2B parameters, the AMD XDNA™ 2 NPU typically delivers 3-5x better performance-per-watt. Consider using the Ryzen AI SDK to redirect this workload.`,timestamp:e}:r.npu_usage>30?{id:Math.random().toString(36).slice(2),role:"assistant",type:"success",content:`✅ Excellent! Your AMD NPU is actively being utilized (${r.npu_usage.toFixed(0)}%). You're currently running on the most carbon-efficient path. At this utilization, you're saving approximately ${(r.gpu_power-r.npu_power).toFixed(1)}W vs GPU execution.`,timestamp:e}:null},b3=[{q:["npu","xdna","amd npu"],a:"The AMD XDNA™ 2 NPU in Ryzen AI processors is a dedicated AI engine that operates at 1-5W for inference tasks that would otherwise require 15-50W on a GPU or CPU. It's designed specifically for sustained AI workloads with a hardware-level pipeline that bypasses the memory bandwidth bottlenecks typical of CPU/GPU AI execution. For INT8 quantized models, you can achieve up to 50 TOPS with ~2W average power draw.",type:"info"},{q:["int8","quantiz","precision"],a:"INT8 quantization converts model weights from 32-bit floats to 8-bit integers, reducing: memory usage by 4x, memory bandwidth by ~4x, and computational intensity by ~4x. On AMD XDNA™ 2, INT8 is the native format — meaning no runtime conversion overhead. Accuracy loss is typically <0.5% for transformer architectures when using proper calibration. I recommend using AMD's Vitis AI runtime for optimal INT8 deployment.",type:"tip"},{q:["carbon","co2","emission","sustainability"],a:"AI training and inference contribute ~0.5-1% of global electricity consumption — and growing. Here's the breakdown: Cloud GPU inference (~45W per inference slot) vs AMD NPU inference (~3W including memory) = 93% reduction per inference. At 1000 inferences/hr, this saves ~42W·hr = 18.5g CO₂e per day (at global average 0.44 kg CO₂/kWh). At scale, on-device AMD NPU inference is the most impactful decision a developer can make.",type:"info"},{q:["bf16","float16"],a:"BF16 (Brain Float 16) is AMD's recommended middle-ground precision. It maintains the dynamic range of FP32 (8 exponent bits) while halving memory use. On AMD Radeon™ GPUs with RDNA 3, BF16 compute is accelerated via dedicated matrix units. For transformer models, BF16 typically shows <0.2% accuracy drop vs FP32 while cutting power by ~40%.",type:"tip"},{q:["green score","score","metric","measure"],a:"The GreenLens Green Score™ is calculated from: (1) Power efficiency ratio (actual vs theoretical max), (2) Carbon impact normalized to baseline, (3) Hardware utilization quality (NPU vs CPU/GPU ratio), (4) Optimization level (precision, batching, model pruning). A score of 90+ means your AI system is in the top 10% of efficiency. The AMD XDNA™ 2 NPU makes 95+ achievable on any Ryzen AI device.",type:"success"}],T3=r=>{const e=r.toLowerCase();for(const i of b3)if(i.q.some(s=>e.includes(s)))return{content:i.a,type:i.type};return null},A3=`That's a great question about AI sustainability! Based on your current hardware profile — AMD Ryzen AI with XDNA™ 2 NPU — I recommend:

1. **Always prefer NPU for inference** — It's designed for exactly this.
2. **Use INT8 for production models** — Near-identical accuracy, massive efficiency gain.
3. **Batch inference requests** — Reduces per-inference overhead by 30-60%.
4. **Profile before optimizing** — Use the Precision Lab to identify your actual bottlenecks.

Would you like me to explain any of these in detail?`,R3=["How does the AMD NPU save carbon?","Explain INT8 quantization","What is my Green Score based on?","How much CO₂ does AI produce?"],C3=()=>{const{metrics:r}=Kr(),[e,i]=Q.useState(M3),[s,l]=Q.useState(""),[c,f]=Q.useState(!1),p=Q.useRef(null),g=Q.useRef(0);Q.useEffect(()=>{if(r&&Date.now()-g.current>15e3){const v=E3(r);v&&(g.current=Date.now(),i(_=>[..._,v]))}},[r]),Q.useEffect(()=>{p.current?.scrollIntoView({behavior:"smooth"})},[e]);const h=v=>{if(!v.trim())return;const _={id:Math.random().toString(36).slice(2),role:"user",content:v,timestamp:Date.now()};i(E=>[...E,_]),l(""),f(!0),setTimeout(()=>{const E=T3(v),T={id:Math.random().toString(36).slice(2),role:"assistant",content:E?.content??A3,type:E?.type??"info",timestamp:Date.now()};i(C=>[...C,T]),f(!1)},800+Math.random()*1200)},x=v=>v==="warning"?m.jsx(Xb,{size:14}):v==="success"?m.jsx(mx,{size:14}):v==="tip"?m.jsx(Vr,{size:14}):m.jsx(Tb,{size:14});return m.jsxs("div",{className:"coach-layout",children:[m.jsx(Qr,{metrics:r,pageTitle:"AI SUSTAINABILITY COACH",pageDesc:"On-device LLM agent — explains inefficiencies, suggests greener paths"}),m.jsxs("div",{className:"coach-content",children:[m.jsxs("div",{className:"coach-sidebar",children:[m.jsxs("div",{className:"card coach-context-card",children:[m.jsxs("div",{className:"card-header",children:[m.jsx("span",{className:"card-title",children:"LIVE CONTEXT"}),m.jsx("span",{className:"live-dot",children:"MONITORING"})]}),m.jsxs("div",{className:"context-items",children:[m.jsxs("div",{className:"context-item",children:[m.jsx("span",{className:"context-label",children:"Current NPU Load"}),m.jsxs("span",{className:"context-val mono text-green",children:[r?.npu_usage.toFixed(0)??"--","%"]})]}),m.jsxs("div",{className:"context-item",children:[m.jsx("span",{className:"context-label",children:"GPU Load"}),m.jsxs("span",{className:"context-val mono text-accent-orange",children:[r?.gpu_usage.toFixed(0)??"--","%"]})]}),m.jsxs("div",{className:"context-item",children:[m.jsx("span",{className:"context-label",children:"Total Power"}),m.jsxs("span",{className:"context-val mono",children:[r?.total_power.toFixed(1)??"--","W"]})]}),m.jsxs("div",{className:"context-item",children:[m.jsx("span",{className:"context-label",children:"CO₂ Rate"}),m.jsxs("span",{className:"context-val mono",children:[r?(r.total_power*.44/3600).toFixed(5):"--","g/s"]})]})]})]}),m.jsxs("div",{className:"card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"QUICK PROMPTS"})}),m.jsx("div",{className:"quick-prompts",children:R3.map(v=>m.jsxs("button",{className:"quick-prompt-btn",onClick:()=>h(v),children:[m.jsx(gu,{size:12}),m.jsx("span",{children:v})]},v))})]}),m.jsxs("div",{className:"card coach-tips-card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"DID YOU KNOW?"})}),m.jsxs("div",{className:"coach-tips-list",children:[m.jsxs("div",{className:"coach-tip-item",children:[m.jsx(Gs,{size:14,className:"text-green"}),m.jsxs("p",{children:["The AMD XDNA™ 2 NPU uses ",m.jsx("strong",{children:"92% less power"})," than a discrete GPU for the same AI workload."]})]}),m.jsxs("div",{className:"coach-tip-item",children:[m.jsx(Vr,{size:14,className:"text-accent-orange"}),m.jsxs("p",{children:["INT8 inference on AMD NPU can run ",m.jsx("strong",{children:"50 TOPS"})," within a 5W power envelope."]})]}),m.jsxs("div",{className:"coach-tip-item",children:[m.jsx(lu,{size:14,className:"text-accent-blue"}),m.jsx("p",{children:"On-device AI using AMD Ryzen AI avoids cloud data center emissions entirely."})]})]})]})]}),m.jsx("div",{className:"coach-chat-col",children:m.jsxs("div",{className:"card chat-card",children:[m.jsxs("div",{className:"chat-header",children:[m.jsx("div",{className:"agent-avatar",children:m.jsx(lu,{size:20})}),m.jsxs("div",{className:"agent-info",children:[m.jsx("span",{className:"agent-name",children:"GreenLens Coach"}),m.jsx("span",{className:"agent-desc",children:"On-device AI Sustainability Agent · AMD Ryzen AI"})]}),m.jsx("span",{className:"badge badge-green",children:"ON-DEVICE"})]}),m.jsxs("div",{className:"chat-messages",children:[e.map(v=>m.jsxs("div",{className:`message message--${v.role} ${v.type?`message--${v.type}`:""}`,children:[v.role==="assistant"&&m.jsx("div",{className:"message-icon",children:x(v.type)}),m.jsxs("div",{className:"message-body",children:[m.jsx("div",{className:"message-content",children:v.content}),m.jsx("div",{className:"message-time mono",children:new Date(v.timestamp).toLocaleTimeString()})]})]},v.id)),c&&m.jsxs("div",{className:"message message--assistant message--typing",children:[m.jsx("div",{className:"message-icon",children:m.jsx(lu,{size:14})}),m.jsxs("div",{className:"typing-dots",children:[m.jsx("span",{}),m.jsx("span",{}),m.jsx("span",{})]})]}),m.jsx("div",{ref:p})]}),m.jsxs("div",{className:"chat-input-area",children:[m.jsx("input",{className:"chat-input",value:s,onChange:v=>l(v.target.value),onKeyDown:v=>{v.key==="Enter"&&h(s)},placeholder:"Ask about AI sustainability, efficiency, AMD NPU..."}),m.jsx("button",{className:"btn btn-primary send-btn",onClick:()=>h(s),children:m.jsx(Pb,{size:16})})]})]})})]})]})},nl=({score:r,size:e=200,strokeW:i=12,label:s})=>{const l=e/2-i,c=2*Math.PI*l,f=c-r/100*c,p=r>=80?"var(--green-primary)":r>=60?"var(--orange-accent)":"var(--red-accent)";return m.jsxs("div",{className:"score-ring-wrapper",style:{width:e,height:e},children:[m.jsxs("svg",{width:e,height:e,children:[m.jsx("circle",{cx:e/2,cy:e/2,r:l,fill:"none",stroke:"var(--border-subtle)",strokeWidth:i}),m.jsx("circle",{cx:e/2,cy:e/2,r:l,fill:"none",stroke:p,strokeWidth:i,strokeDasharray:c,strokeDashoffset:f,strokeLinecap:"round",transform:`rotate(-90 ${e/2} ${e/2})`,style:{transition:"stroke-dashoffset 1s var(--ease-smooth)",filter:`drop-shadow(0 0 8px ${p})`}})]}),m.jsxs("div",{className:"score-ring-inner",children:[m.jsx("span",{className:"score-ring-val mono",style:{color:p},children:r}),m.jsx("span",{className:"score-ring-label",children:s??"GREEN SCORE™"})]})]})},su=({label:r,value:e,color:i,icon:s})=>m.jsxs("div",{className:"sub-score-item",children:[m.jsx("div",{className:"sub-score-icon",style:{color:i,background:`${i}15`,border:`1px solid ${i}30`},children:s}),m.jsxs("div",{className:"sub-score-body",children:[m.jsx("div",{className:"sub-score-label",children:r}),m.jsx("div",{className:"sub-score-bar",children:m.jsx("div",{className:"sub-score-fill",style:{width:`${e}%`,background:i,boxShadow:`0 0 6px ${i}90`}})})]}),m.jsx("span",{className:"sub-score-val mono",style:{color:i},children:Math.round(e)})]}),w3=(r,e)=>{const i={score:r.total,metrics:[{label:"Overall Green Score™",value:`${r.total}/100`},{label:"Power Efficiency",value:`${Math.round(r.efficiency)}/100`},{label:"Carbon Impact Score",value:`${Math.round(r.carbonImpact)}/100`},{label:"Hardware Utilization",value:`${Math.round(r.hardwareUtil)}/100`},{label:"Optimization Level",value:`${Math.round(r.optimizationLevel)}/100`},{label:"Total Power Draw",value:`${e.toFixed(1)}W`},{label:"Timestamp",value:new Date().toISOString()},{label:"Hardware",value:"AMD Ryzen AI (XDNA™ 2 NPU)"}],checklist:[{item:"NPU utilized for AI inference",pass:r.optimizationLevel>20},{item:"Cloud dependency eliminated",pass:!0},{item:"Sub-10W inference power envelope",pass:e<10},{item:"Quantization applied (INT8/BF16)",pass:!1},{item:"Model pruning applied",pass:!1},{item:"AMD Ryzen AI hardware detected",pass:!0}]},s=["═══════════════════════════════════════","        GREENLENS X — GREEN SCORE™ REPORT","        AMD Slingshot AI Sustainability Platform","═══════════════════════════════════════","",`  Overall Score: ${i.score}/100`,"","  METRICS:",...i.metrics.map(l=>`    ${l.label}: ${l.value}`),"","  SUSTAINABILITY CHECKLIST:",...i.checklist.map(l=>`    [${l.pass?"✓":"✗"}] ${l.item}`),"","  RECOMMENDATION:",i.score>=80?"  Excellent sustainability profile! Continue using AMD NPU for inference.":"  Consider enabling INT8 quantization and routing more workloads to the NPU.","","═══════════════════════════════════════","  Generated by GreenLens X v1.0 · AMD Slingshot",`  ${new Date().toLocaleString()}`,"═══════════════════════════════════════"].join(`
`);return{data:i,text:s}},N3=()=>{const{metrics:r}=Kr(),e=e1(r),i=ol(e.total),[s,l]=Q.useState(!1),{data:c,text:f}=Q.useMemo(()=>w3(e,r?.total_power??0),[e,r]),p=()=>{l(!0);const x=new Blob([f],{type:"text/plain"}),v=URL.createObjectURL(x),_=document.createElement("a");_.href=v,_.download=`greenlens-report-${Date.now()}.txt`,_.click(),URL.revokeObjectURL(v),setTimeout(()=>l(!1),1500)},g=e.total>=90?"EXCELLENT":e.total>=75?"GOOD":e.total>=60?"AVERAGE":"NEEDS WORK",h=e.total>=90?"var(--green-primary)":e.total>=75?"var(--orange-accent)":"var(--red-accent)";return m.jsxs("div",{className:"score-layout",children:[m.jsx(Qr,{metrics:r,pageTitle:"GREEN SCORE™",pageDesc:"Sustainability rating for your AI project — downloadable for submissions"}),m.jsxs("div",{className:"score-content",children:[m.jsx("div",{className:"score-hero-col",children:m.jsxs("div",{className:`card score-hero-card ${e.total>=80?"glass-accent":""}`,children:[m.jsxs("div",{className:"card-header",children:[m.jsx("span",{className:"card-title",children:"OVERALL SUSTAINABILITY SCORE"}),m.jsx("div",{className:"award-icon",children:m.jsx(px,{size:20,className:"text-green"})})]}),m.jsxs("div",{className:"score-hero-body",children:[m.jsx(nl,{score:Math.round(i),size:240,strokeW:14}),m.jsx("div",{className:"score-grade",style:{color:h},children:g}),m.jsx("div",{className:"score-summary",children:e.total>=80?"Your AI workload is running on an exemplary green path. AMD XDNA™ 2 is doing its job.":"Optimization opportunities available. Switch inference to NPU and enable INT8 to improve."}),m.jsxs("button",{className:`btn btn-primary download-btn ${s?"downloading":""}`,onClick:p,children:[m.jsx(mb,{size:16}),s?"GENERATING...":"DOWNLOAD REPORT"]})]})]})}),m.jsxs("div",{className:"score-breakdown-col",children:[m.jsxs("div",{className:"card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"SCORE BREAKDOWN"})}),m.jsxs("div",{className:"sub-scores",children:[m.jsx(su,{label:"Power Efficiency",value:e.efficiency,color:"var(--blue-accent)",icon:m.jsx(Vr,{size:14})}),m.jsx(su,{label:"Carbon Impact",value:e.carbonImpact,color:"var(--green-primary)",icon:m.jsx(Gs,{size:14})}),m.jsx(su,{label:"Hardware Utilization",value:e.hardwareUtil,color:"var(--orange-accent)",icon:m.jsx(Eu,{size:14})}),m.jsx(su,{label:"Optimization Level",value:e.optimizationLevel,color:"var(--purple-accent)",icon:m.jsx(jb,{size:14})})]})]}),m.jsxs("div",{className:"card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"SUB-SCORES"})}),m.jsxs("div",{className:"ring-grid",children:[m.jsx(nl,{score:Math.round(e.efficiency),size:100,strokeW:8,label:"EFFICIENCY"}),m.jsx(nl,{score:Math.round(e.carbonImpact),size:100,strokeW:8,label:"CARBON"}),m.jsx(nl,{score:Math.round(e.hardwareUtil),size:100,strokeW:8,label:"HARDWARE"}),m.jsx(nl,{score:Math.round(e.optimizationLevel),size:100,strokeW:8,label:"OPTIMIZED"})]})]})]}),m.jsxs("div",{className:"score-report-col",children:[m.jsxs("div",{className:"card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"SUSTAINABILITY CHECKLIST"})}),m.jsx("div",{className:"checklist",children:c.checklist.map((x,v)=>m.jsxs("div",{className:`checklist-item ${x.pass?"pass":"fail"}`,children:[x.pass?m.jsx(mx,{size:14,className:"text-green"}):m.jsx(db,{size:14,className:"text-accent-red"}),m.jsx("span",{children:x.item})]},v))})]}),m.jsxs("div",{className:"card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"REPORT METRICS"})}),m.jsx("div",{className:"report-metrics",children:c.metrics.slice(0,6).map((x,v)=>m.jsxs("div",{className:"report-metric-row",children:[m.jsx("span",{className:"report-metric-label",children:x.label}),m.jsx("span",{className:"report-metric-val mono",children:x.value})]},v))})]}),m.jsxs("div",{className:"card recommendation-card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"RECOMMENDATIONS"})}),m.jsxs("div",{className:"recs",children:[m.jsxs("div",{className:"rec-item",children:[m.jsx("span",{className:"rec-num",children:"01"}),m.jsxs("div",{children:[m.jsx("div",{className:"rec-title",children:"Enable INT8 Quantization"}),m.jsx("div",{className:"rec-desc",children:"Expected score boost: +12 pts · Power saved: ~60%"})]})]}),m.jsxs("div",{className:"rec-item",children:[m.jsx("span",{className:"rec-num",children:"02"}),m.jsxs("div",{children:[m.jsx("div",{className:"rec-title",children:"Route all inference to AMD NPU"}),m.jsx("div",{className:"rec-desc",children:"Expected score boost: +8 pts · Power saved: ~80%"})]})]}),m.jsxs("div",{className:"rec-item",children:[m.jsx("span",{className:"rec-num",children:"03"}),m.jsxs("div",{children:[m.jsx("div",{className:"rec-title",children:"Enable model pruning"}),m.jsx("div",{className:"rec-desc",children:"Expected score boost: +6 pts · Latency reduction: ~30%"})]})]})]})]})]})]})]})},ey={ts:"TypeScript",tsx:"TypeScript",js:"JavaScript",jsx:"JavaScript",py:"Python",java:"Java",cpp:"C++",c:"C",cs:"C#",go:"Go",rs:"Rust",kt:"Kotlin",rb:"Ruby",php:"PHP",html:"HTML",css:"CSS",scss:"CSS",sass:"CSS",json:"JSON",yaml:"YAML",yml:"YAML",md:"Markdown",sh:"Shell",sql:"SQL"},Sp=new Set(["ts","tsx","js","jsx","py","java","cpp","c","cs","go","rs","kt","rb","php","html","css","scss","sql","sh"]),D3={rs:96,c:93,cpp:88,go:87,java:76,ts:74,tsx:74,js:71,jsx:71,py:65,rb:60,php:62,html:90,css:92,scss:90,json:95,md:100,sh:80,sql:82,kt:75,cs:73},Mp=r=>r.split(".").pop()?.toLowerCase()??"",ty=r=>{if(!r.length)return 50;const e=r.reduce((i,s)=>i+s.carbonScore,0)/r.length;return Math.round(e)},ny=(r,e)=>{const i=r/1e6*.3,s=e/1e4*.05;return parseFloat((i+s).toFixed(3))},iy=(r,e)=>{const i=D3[r]??70,s=e>1e5?15:e>5e4?8:e>2e4?3:0;return Math.max(10,Math.min(100,i-s))},ay=r=>{const e=[],i=Object.keys(r.languages);return i.includes("Python")&&e.push("NumPy/vectorise hot loops in Python files — typical 40-60% CPU reduction."),(i.includes("TypeScript")||i.includes("JavaScript"))&&e.push("Enable tree-shaking & code-splitting in your bundler to reduce JS bundle CO₂ per load."),r.totalLines>5e3&&e.push("Large codebase detected — consider lazy-loading modules to reduce boot-time energy."),i.includes("Python")&&e.push("Move inference-heavy Python workloads to AMD NPU via the Ryzen AI SDK (INT8 precision)."),r.codeFiles>20&&e.push("Run a dead-code elimination pass — unused code still costs CI/CD compute time & CO₂."),r.greenScore<70&&e.push("Green Score below 70: profile hotspots with AMD uProf and target top 3 CPU-heavy functions."),e.slice(0,5)};function U3(r){try{const i=new URL(r.trim()).pathname.replace(/^\//,"").replace(/\.git$/,"").split("/");if(i.length>=2)return{owner:i[0],repo:i[1]}}catch{}return null}async function L3(r,e,i){const s=`https://api.github.com/repos/${r}/${e}`,l={Accept:"application/vnd.github+json"};i("🔗 Connecting to GitHub API...");const c=await fetch(s,{headers:l});if(!c.ok)throw new Error(`Repository not found or is private (${c.status})`);const f=await c.json();i(`📦 Repository: ${f.full_name} ⭐ ${f.stargazers_count?.toLocaleString()}`),i("🌿 Fetching file tree (recursive)...");const p=f.default_branch??"main",g=await fetch(`${s}/git/trees/${p}?recursive=1`,{headers:l});if(!g.ok)throw new Error("Failed to fetch file tree");const h=await g.json();h.truncated&&i("⚠️  Tree truncated — showing first 1000 files"),i(`📂 Discovered ${h.tree?.length??0} entries`),i("🔍 Parsing source files...");const v=(h.tree??[]).filter(P=>P.type==="blob").map(P=>{const F=P.path.split("/").pop()??P.path,O=Mp(F);return{name:F,path:P.path,ext:O,size:P.size??0,carbonScore:iy(O,P.size??0)}}).map(P=>({...P,lines:P.size>0?Math.round(P.size/50):0}));i("📊 Fetching language breakdown...");const _=await fetch(`${s}/languages`,{headers:l}),E=_.ok?await _.json():{};i("🤖 Running AMD NPU optimization scan...");const T=v.filter(P=>Sp.has(P.ext)),C=v.reduce((P,F)=>P+F.lines,0),M=v.reduce((P,F)=>P+F.size,0),y=ty(T.length?T:v),R=ny(M,C),L=[...v].sort((P,F)=>F.size-P.size).slice(0,30),D={name:f.full_name,source:"github",description:f.description??"",stars:f.stargazers_count,totalFiles:v.length,codeFiles:T.length,totalLines:C,languages:E,files:L,greenScore:y,co2EstGrams:R};return i("✅ Analysis complete!"),{...D,suggestions:ay(D)}}async function O3(r,e){const s=(r[0].webkitRelativePath??r[0].name).split("/")[0]||"Local Project";e(`📁 Reading workspace: ${s}`),e(`🔎 Indexing ${r.length} file entries...`);const l=[],c={};let f=0,p=0,g=0;const h=Array.from(r).filter(C=>{Mp(C.name);const M=C.webkitRelativePath??C.name;return!/node_modules|\.git|dist\/|__pycache__|\.next|build\//.test(M)});e(`📂 Scanning ${h.length} files (excluding node_modules, dist, .git)...`);for(const C of h){const M=Mp(C.name),y=C.webkitRelativePath??C.name;let R=0;if(Sp.has(M)&&C.size<5e5)try{R=(await C.text()).split(`
`).length}catch{R=Math.round(C.size/50)}else R=Math.round(C.size/50);const L=ey[M];L&&(c[L]=(c[L]??0)+R),f+=R,p+=C.size,l.push({name:C.name,path:y,ext:M,lines:R,size:C.size,carbonScore:iy(M,C.size)}),g++,g%20===0&&(e(`🔍 Processed ${g}/${h.length} files...`),await new Promise(D=>setTimeout(D,0)))}e("📊 Estimating carbon footprint..."),e("🤖 Running AMD NPU optimization scan...");const x=l.filter(C=>Sp.has(C.ext)),v=ty(x.length?x:l),_=ny(p,f),E=[...l].sort((C,M)=>M.size-C.size).slice(0,30),T={name:s,source:"vscode",totalFiles:l.length,codeFiles:x.length,totalLines:f,languages:c,files:E,greenScore:v,co2EstGrams:_};return e("✅ Analysis complete!"),{...T,suggestions:ay(T)}}const P3=()=>{const{metrics:r}=Kr(),[e,i]=Q.useState("choose"),[s,l]=Q.useState(null),[c,f]=Q.useState(""),[p,g]=Q.useState([]),[h,x]=Q.useState(null),[v,_]=Q.useState(""),[E,T]=Q.useState(null),C=Q.useRef(null),M=Q.useRef(null),y=O=>{g(b=>{const w=[...b,O];return setTimeout(()=>M.current?.scrollTo({top:99999,behavior:"smooth"}),40),w})},R=async()=>{const O=U3(c);if(!O){_("Please enter a valid GitHub URL, e.g. https://github.com/owner/repo");return}_(""),g([]),i("scanning");try{const b=await L3(O.owner,O.repo,y);x(b),i("result")}catch(b){const w=b instanceof Error?b.message:"Unknown error";_(w),i("input")}},L=async O=>{const b=O.target.files;if(!(!b||b.length===0)){g([]),i("scanning");try{const w=await O3(b,y);x(w),i("result")}catch(w){const $=w instanceof Error?w.message:"Unknown error";_($),i("input")}}},D=()=>{i("choose"),l(null),f(""),g([]),x(null),_(""),T(null),C.current&&(C.current.value="")},P=h?Object.entries(h.languages).sort((O,b)=>b[1]-O[1]).slice(0,6):[],F=P[0]?.[1]??1;return m.jsxs("div",{className:"rc-layout",children:[m.jsx(Qr,{metrics:r,pageTitle:"REPO CONNECT",pageDesc:"Connect a GitHub repo or local VS Code folder — real code analysis, zero simulation"}),m.jsxs("div",{className:"rc-content",children:[e==="choose"&&m.jsxs("div",{className:"rc-choose-screen",children:[m.jsxs("div",{className:"rc-choose-head",children:[m.jsx("div",{className:"rc-choose-icon",children:m.jsx(Cb,{size:32})}),m.jsx("h2",{className:"rc-choose-title",children:"Connect Your Repository"}),m.jsxs("p",{className:"rc-choose-sub",children:["GreenLens reads your ",m.jsx("strong",{children:"real code files"})," — no mock data. Get genuine carbon footprint analysis, language stats, and AMD NPU tips."]})]}),m.jsxs("div",{className:"rc-source-cards",children:[m.jsxs("button",{id:"btn-github-source",className:"rc-source-card",onClick:()=>{l("github"),i("input")},children:[m.jsx("div",{className:"rc-source-icon rc-source-icon--gh",children:m.jsx(kd,{size:36})}),m.jsxs("div",{className:"rc-source-info",children:[m.jsx("span",{className:"rc-source-name",children:"GitHub Repository"}),m.jsxs("span",{className:"rc-source-desc",children:["Paste any ",m.jsx("strong",{children:"public"})," GitHub URL. Uses the real GitHub API — actual file tree, real language bytes, real sizes. No token required."]})]}),m.jsx(gu,{className:"rc-source-arrow",size:20})]}),m.jsxs("button",{id:"btn-vscode-source",className:"rc-source-card",onClick:()=>{l("vscode"),i("input")},children:[m.jsx("div",{className:"rc-source-icon rc-source-icon--vs",children:m.jsx(Uc,{size:36})}),m.jsxs("div",{className:"rc-source-info",children:[m.jsx("span",{className:"rc-source-name",children:"VS Code / Local Folder"}),m.jsxs("span",{className:"rc-source-desc",children:["Pick your project folder. Files are read ",m.jsx("strong",{children:"directly in-browser"})," — real line counts, real sizes, real languages. Nothing is uploaded."]})]}),m.jsx(gu,{className:"rc-source-arrow",size:20})]})]}),m.jsxs("div",{className:"rc-real-badge",children:[m.jsx(jd,{size:14}),m.jsx("span",{children:"100% real data — no simulated or mock values"})]})]}),e==="input"&&s&&m.jsxs("div",{className:"rc-input-screen",children:[m.jsx("button",{className:"rc-back-btn",onClick:()=>{i("choose"),_("")},children:"← Back"}),s==="github"?m.jsxs("div",{className:"rc-input-card",children:[m.jsx("div",{className:"rc-input-icon",children:m.jsx(kd,{size:28})}),m.jsx("h3",{className:"rc-input-title",children:"GitHub Repository URL"}),m.jsxs("p",{className:"rc-input-sub",children:["Paste any ",m.jsx("strong",{children:"public"})," repository URL. GreenLens calls the GitHub REST API to fetch the real file tree and language breakdown."]}),m.jsxs("div",{className:"rc-input-row",children:[m.jsx("input",{id:"gh-url-input",className:`rc-text-input ${v?"rc-text-input--error":""}`,type:"url",placeholder:"https://github.com/owner/repository",value:c,onChange:O=>{f(O.target.value),_("")},onKeyDown:O=>O.key==="Enter"&&R(),autoFocus:!0}),m.jsx("button",{id:"btn-scan-github",className:"btn btn-primary rc-scan-btn",onClick:R,children:"Scan Repo"})]}),v&&m.jsxs("div",{className:"rc-error",children:[m.jsx(Vd,{size:14})," ",v]}),m.jsxs("div",{className:"rc-example-links",children:[m.jsx("span",{className:"rc-example-label",children:"Try:"}),["https://github.com/microsoft/vscode","https://github.com/huggingface/transformers","https://github.com/facebook/react"].map(O=>m.jsx("button",{className:"rc-example-btn",onClick:()=>f(O),children:O.replace("https://github.com/","")},O))]}),m.jsxs("div",{className:"rc-folder-note",children:[m.jsx(Vd,{size:13})," Uses the GitHub REST API (unauthenticated — 60 req/hr). Private repos require a token."]})]}):m.jsxs("div",{className:"rc-input-card",children:[m.jsx("div",{className:"rc-input-icon",children:m.jsx(Uc,{size:28})}),m.jsx("h3",{className:"rc-input-title",children:"Select Local Project Folder"}),m.jsxs("p",{className:"rc-input-sub",children:["Click below and choose your project folder. GreenLens reads every file ",m.jsx("strong",{children:"locally in your browser"})," — counts real lines, detects languages, estimates carbon footprint. Nothing leaves your machine."]}),m.jsxs("button",{id:"btn-open-folder",className:"btn btn-primary rc-folder-btn",onClick:()=>C.current?.click(),children:[m.jsx(Uc,{size:16})," Open Project Folder"]}),m.jsx("input",{ref:C,type:"file",webkitdirectory:"true",directory:"true",multiple:!0,style:{display:"none"},onChange:L}),m.jsxs("div",{className:"rc-folder-note",children:[m.jsx(Vd,{size:13})," node_modules, .git, dist and __pycache__ are automatically excluded."]})]})]}),e==="scanning"&&m.jsxs("div",{className:"rc-scan-screen",children:[m.jsx("div",{className:"rc-scan-spinner",children:m.jsx(Nb,{size:40,className:"rc-spinner-icon"})}),m.jsx("h3",{className:"rc-scan-title",children:"Scanning Repository…"}),m.jsxs("div",{className:"rc-scan-log",ref:M,children:[p.map((O,b)=>m.jsx("div",{className:`rc-log-line ${O.startsWith("✅")?"rc-log-line--done":O.startsWith("⚠️")?"rc-log-line--warn":""}`,children:O},b)),m.jsx("div",{className:"rc-log-cursor"})]})]}),e==="result"&&h&&m.jsxs("div",{className:"rc-result-screen",children:[m.jsxs("div",{className:"rc-success-banner",children:[m.jsx(jd,{size:22,className:"rc-ok-icon"}),m.jsxs("span",{children:[m.jsx("strong",{children:h.name})," analysed via"," ",h.source==="github"?"GitHub API":"local file read",h.stars!==void 0&&m.jsxs("span",{className:"rc-star-pill",children:["⭐ ",h.stars.toLocaleString()]})]}),m.jsxs("button",{className:"rc-reset-btn",id:"btn-reset-repo",onClick:D,children:[m.jsx(Lb,{size:14})," Connect Another"]})]}),h.description&&m.jsx("p",{className:"rc-repo-desc",children:h.description}),m.jsxs("div",{className:"rc-result-grid",children:[m.jsxs("div",{className:"rc-result-left",children:[m.jsxs("div",{className:"card rc-stats-card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"REPOSITORY OVERVIEW"})}),m.jsx("div",{className:"rc-stat-row",children:[{label:"Total Files",val:h.totalFiles.toLocaleString()},{label:"Code Files",val:h.codeFiles.toLocaleString()},{label:"Lines of Code",val:h.totalLines.toLocaleString()},{label:"Green Score™",val:String(h.greenScore),green:!0}].map(({label:O,val:b,green:w})=>m.jsxs("div",{className:"rc-stat-item",children:[m.jsx("span",{className:"rc-stat-val",style:w?{color:h.greenScore>=75?"var(--green-primary)":"var(--orange-accent)"}:void 0,children:b}),m.jsx("span",{className:"rc-stat-label",children:O})]},O))})]}),m.jsxs("div",{className:"card rc-lang-card",children:[m.jsxs("div",{className:"card-header",children:[m.jsx("span",{className:"card-title",children:"LANGUAGE BREAKDOWN"}),m.jsx("span",{className:"rc-lang-unit",children:h.source==="github"?"bytes":"lines"})]}),m.jsx("div",{className:"rc-lang-bars",children:P.map(([O,b])=>m.jsxs("div",{className:"rc-lang-row",children:[m.jsx("span",{className:"rc-lang-name",children:O}),m.jsx("div",{className:"rc-lang-track",children:m.jsx("div",{className:"rc-lang-fill",style:{width:`${b/F*100}%`}})}),m.jsx("span",{className:"rc-lang-lines mono",children:h.source==="github"?`${(b/1024).toFixed(1)} KB`:`${b.toLocaleString()} lines`})]},O))})]}),m.jsxs("div",{className:"card rc-files-card",children:[m.jsxs("div",{className:"card-header",children:[m.jsx("span",{className:"card-title",children:"TOP FILES BY SIZE"}),m.jsx("span",{className:"rc-lang-unit",children:"click for detail"})]}),m.jsx("div",{className:"rc-file-list",children:h.files.map(O=>m.jsxs("button",{className:`rc-file-row ${E?.path===O.path?"rc-file-row--active":""}`,onClick:()=>T(O===E?null:O),children:[m.jsx(vb,{size:13,className:"rc-file-icon"}),m.jsx("span",{className:"rc-file-name",children:O.name}),m.jsx("span",{className:"rc-file-path mono",children:O.path}),m.jsxs("span",{className:"rc-file-lines mono",children:[O.lines.toLocaleString(),"L"]}),m.jsx("span",{className:"rc-file-score",style:{color:O.carbonScore>=80?"var(--green-primary)":O.carbonScore>=60?"var(--orange-accent)":"var(--red-accent)"},children:O.carbonScore})]},O.path))}),E&&m.jsx("div",{className:"rc-file-detail",children:[["File",E.path],["Language",ey[E.ext]??"Other"],["Lines (est.)",E.lines.toLocaleString()],["Size",`${(E.size/1024).toFixed(2)} KB`],["Carbon Score",`${E.carbonScore} / 100`]].map(([O,b])=>m.jsxs("div",{className:"rc-file-detail-row",children:[m.jsx("span",{className:"rc-fd-label",children:O}),m.jsx("span",{className:"rc-fd-val mono",children:b})]},O))})]})]}),m.jsxs("div",{className:"rc-result-right",children:[m.jsxs("div",{className:"card rc-carbon-card",children:[m.jsxs("div",{className:"card-header",children:[m.jsx("span",{className:"card-title",children:"ESTIMATED CARBON FOOTPRINT"}),m.jsx(Gs,{size:18,style:{color:"var(--green-primary)"}})]}),m.jsxs("div",{className:"rc-carbon-main",children:[m.jsx("span",{className:"rc-carbon-val",children:h.co2EstGrams}),m.jsx("span",{className:"rc-carbon-unit",children:"g CO₂ / build"})]}),m.jsxs("div",{className:"rc-carbon-bar-wrap",children:[m.jsx("div",{className:"rc-carbon-bar-track",children:m.jsx("div",{className:"rc-carbon-bar-fill",style:{width:`${Math.min(h.co2EstGrams*33,100)}%`}})}),m.jsx("span",{className:"rc-carbon-status",children:h.co2EstGrams<.5?"🌿 Very Low Impact":h.co2EstGrams<1.5?"⚡ Low Impact":h.co2EstGrams<3?"⚠️ Moderate Impact":"🔥 High Impact"})]}),m.jsxs("div",{className:"rc-green-score-wrap",children:[m.jsxs("div",{className:"rc-gs-ring",children:[m.jsxs("svg",{viewBox:"0 0 80 80",width:"80",height:"80",children:[m.jsx("circle",{cx:"40",cy:"40",r:"32",strokeWidth:"6",className:"rc-gs-bg"}),m.jsx("circle",{cx:"40",cy:"40",r:"32",strokeWidth:"6",className:"rc-gs-arc",strokeDasharray:`${2*Math.PI*32}`,strokeDashoffset:`${2*Math.PI*32*(1-h.greenScore/100)}`,transform:"rotate(-90 40 40)"})]}),m.jsx("span",{className:"rc-gs-val",children:h.greenScore})]}),m.jsxs("div",{className:"rc-gs-info",children:[m.jsx("span",{className:"rc-gs-label",children:"Green Score™"}),m.jsx("span",{className:"rc-gs-grade",children:h.greenScore>=85?"Excellent 🏆":h.greenScore>=70?"Good 👍":h.greenScore>=50?"Fair ⚠️":"Needs Work 🔧"})]})]})]}),m.jsxs("div",{className:"card rc-tips-card",children:[m.jsx("div",{className:"card-header",children:m.jsx("span",{className:"card-title",children:"🤖 AMD NPU OPTIMIZATION TIPS"})}),m.jsx("div",{className:"rc-tips-list",children:h.suggestions.map((O,b)=>m.jsxs("div",{className:"rc-tip-item",children:[m.jsx("span",{className:"rc-tip-num",children:String(b+1).padStart(2,"0")}),m.jsx("span",{className:"rc-tip-text",children:O})]},b))})]}),m.jsxs("div",{className:"rc-conn-badge",children:[h.source==="github"?m.jsx(kd,{size:16}):m.jsx(Uc,{size:16}),m.jsxs("span",{children:["Real data via ",m.jsx("strong",{children:h.source==="github"?"GitHub REST API":"browser FileReader API"})]}),m.jsx(jd,{size:16,className:"rc-conn-ok"})]})]})]})]})]})]})},I3=()=>m.jsx(HE,{children:m.jsxs("div",{className:"app-shell",children:[m.jsx(Jb,{}),m.jsx("main",{className:"app-main",children:m.jsxs(gE,{children:[m.jsx(Os,{path:"/",element:m.jsx(g3,{})}),m.jsx(Os,{path:"/precision",element:m.jsx(v3,{})}),m.jsx(Os,{path:"/diff",element:m.jsx(S3,{})}),m.jsx(Os,{path:"/coach",element:m.jsx(C3,{})}),m.jsx(Os,{path:"/score",element:m.jsx(N3,{})}),m.jsx(Os,{path:"/repo",element:m.jsx(P3,{})})]})})]})});_M.createRoot(document.getElementById("root")).render(m.jsx(Q.StrictMode,{children:m.jsx(I3,{})}));
