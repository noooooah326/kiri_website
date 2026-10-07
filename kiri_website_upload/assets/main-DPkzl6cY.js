import{s as A_}from"./supabase-Cca_yLoC.js";var Lh={exports:{}},rl={};var R_;function Dy(){if(R_)return rl;R_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var f in l)f!=="key"&&(c[f]=l[f])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:d,ref:l!==void 0?l:null,props:c}}return rl.Fragment=e,rl.jsx=i,rl.jsxs=i,rl}var w_;function Uy(){return w_||(w_=1,Lh.exports=Dy()),Lh.exports}var he=Uy(),Dh={exports:{}},ht={};var C_;function Ny(){if(C_)return ht;C_=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.iterator;function E(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,y={};function v(D,Y,k){this.props=D,this.context=Y,this.refs=y,this.updater=k||M}v.prototype.isReactComponent={},v.prototype.setState=function(D,Y){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,Y,"setState")},v.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function O(){}O.prototype=v.prototype;function w(D,Y,k){this.props=D,this.context=Y,this.refs=y,this.updater=k||M}var B=w.prototype=new O;B.constructor=w,b(B,v.prototype),B.isPureReactComponent=!0;var q=Array.isArray;function F(){}var P={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function A(D,Y,k){var X=k.ref;return{$$typeof:s,type:D,key:Y,ref:X!==void 0?X:null,props:k}}function N(D,Y){return A(D.type,Y,D.props)}function ne(D){return typeof D=="object"&&D!==null&&D.$$typeof===s}function me(D){var Y={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(k){return Y[k]})}var Ae=/\/+/g;function V(D,Y){return typeof D=="object"&&D!==null&&D.key!=null?me(""+D.key):Y.toString(36)}function te(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(F,F):(D.status="pending",D.then(function(Y){D.status==="pending"&&(D.status="fulfilled",D.value=Y)},function(Y){D.status==="pending"&&(D.status="rejected",D.reason=Y)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function z(D,Y,k,X,ve){var be=typeof D;(be==="undefined"||be==="boolean")&&(D=null);var Ce=!1;if(D===null)Ce=!0;else switch(be){case"bigint":case"string":case"number":Ce=!0;break;case"object":switch(D.$$typeof){case s:case e:Ce=!0;break;case g:return Ce=D._init,z(Ce(D._payload),Y,k,X,ve)}}if(Ce)return ve=ve(D),Ce=X===""?"."+V(D,0):X,q(ve)?(k="",Ce!=null&&(k=Ce.replace(Ae,"$&/")+"/"),z(ve,Y,k,"",function(tt){return tt})):ve!=null&&(ne(ve)&&(ve=N(ve,k+(ve.key==null||D&&D.key===ve.key?"":(""+ve.key).replace(Ae,"$&/")+"/")+Ce)),Y.push(ve)),1;Ce=0;var je=X===""?".":X+":";if(q(D))for(var ke=0;ke<D.length;ke++)X=D[ke],be=je+V(X,ke),Ce+=z(X,Y,k,be,ve);else if(ke=E(D),typeof ke=="function")for(D=ke.call(D),ke=0;!(X=D.next()).done;)X=X.value,be=je+V(X,ke++),Ce+=z(X,Y,k,be,ve);else if(be==="object"){if(typeof D.then=="function")return z(te(D),Y,k,X,ve);throw Y=String(D),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Ce}function Z(D,Y,k){if(D==null)return D;var X=[],ve=0;return z(D,X,"","",function(be){return Y.call(k,be,ve++)}),X}function J(D){if(D._status===-1){var Y=D._result;Y=Y(),Y.then(function(k){(D._status===0||D._status===-1)&&(D._status=1,D._result=k)},function(k){(D._status===0||D._status===-1)&&(D._status=2,D._result=k)}),D._status===-1&&(D._status=0,D._result=Y)}if(D._status===1)return D._result.default;throw D._result}var le=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},pe={map:Z,forEach:function(D,Y,k){Z(D,function(){Y.apply(this,arguments)},k)},count:function(D){var Y=0;return Z(D,function(){Y++}),Y},toArray:function(D){return Z(D,function(Y){return Y})||[]},only:function(D){if(!ne(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return ht.Activity=_,ht.Children=pe,ht.Component=v,ht.Fragment=i,ht.Profiler=l,ht.PureComponent=w,ht.StrictMode=r,ht.Suspense=m,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,ht.__COMPILER_RUNTIME={__proto__:null,c:function(D){return P.H.useMemoCache(D)}},ht.cache=function(D){return function(){return D.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(D,Y,k){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var X=b({},D.props),ve=D.key;if(Y!=null)for(be in Y.key!==void 0&&(ve=""+Y.key),Y)!Q.call(Y,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&Y.ref===void 0||(X[be]=Y[be]);var be=arguments.length-2;if(be===1)X.children=k;else if(1<be){for(var Ce=Array(be),je=0;je<be;je++)Ce[je]=arguments[je+2];X.children=Ce}return A(D.type,ve,X)},ht.createContext=function(D){return D={$$typeof:d,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:c,_context:D},D},ht.createElement=function(D,Y,k){var X,ve={},be=null;if(Y!=null)for(X in Y.key!==void 0&&(be=""+Y.key),Y)Q.call(Y,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ve[X]=Y[X]);var Ce=arguments.length-2;if(Ce===1)ve.children=k;else if(1<Ce){for(var je=Array(Ce),ke=0;ke<Ce;ke++)je[ke]=arguments[ke+2];ve.children=je}if(D&&D.defaultProps)for(X in Ce=D.defaultProps,Ce)ve[X]===void 0&&(ve[X]=Ce[X]);return A(D,be,ve)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(D){return{$$typeof:f,render:D}},ht.isValidElement=ne,ht.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:J}},ht.memo=function(D,Y){return{$$typeof:p,type:D,compare:Y===void 0?null:Y}},ht.startTransition=function(D){var Y=P.T,k={};P.T=k;try{var X=D(),ve=P.S;ve!==null&&ve(k,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(F,le)}catch(be){le(be)}finally{Y!==null&&k.types!==null&&(Y.types=k.types),P.T=Y}},ht.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},ht.use=function(D){return P.H.use(D)},ht.useActionState=function(D,Y,k){return P.H.useActionState(D,Y,k)},ht.useCallback=function(D,Y){return P.H.useCallback(D,Y)},ht.useContext=function(D){return P.H.useContext(D)},ht.useDebugValue=function(){},ht.useDeferredValue=function(D,Y){return P.H.useDeferredValue(D,Y)},ht.useEffect=function(D,Y){return P.H.useEffect(D,Y)},ht.useEffectEvent=function(D){return P.H.useEffectEvent(D)},ht.useId=function(){return P.H.useId()},ht.useImperativeHandle=function(D,Y,k){return P.H.useImperativeHandle(D,Y,k)},ht.useInsertionEffect=function(D,Y){return P.H.useInsertionEffect(D,Y)},ht.useLayoutEffect=function(D,Y){return P.H.useLayoutEffect(D,Y)},ht.useMemo=function(D,Y){return P.H.useMemo(D,Y)},ht.useOptimistic=function(D,Y){return P.H.useOptimistic(D,Y)},ht.useReducer=function(D,Y,k){return P.H.useReducer(D,Y,k)},ht.useRef=function(D){return P.H.useRef(D)},ht.useState=function(D){return P.H.useState(D)},ht.useSyncExternalStore=function(D,Y,k){return P.H.useSyncExternalStore(D,Y,k)},ht.useTransition=function(){return P.H.useTransition()},ht.version="19.2.7",ht}var L_;function zd(){return L_||(L_=1,Dh.exports=Ny()),Dh.exports}var Qe=zd(),Uh={exports:{}},sl={},Nh={exports:{}},Oh={};var D_;function Oy(){return D_||(D_=1,(function(s){function e(z,Z){var J=z.length;z.push(Z);e:for(;0<J;){var le=J-1>>>1,pe=z[le];if(0<l(pe,Z))z[le]=Z,z[J]=pe,J=le;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var Z=z[0],J=z.pop();if(J!==Z){z[0]=J;e:for(var le=0,pe=z.length,D=pe>>>1;le<D;){var Y=2*(le+1)-1,k=z[Y],X=Y+1,ve=z[X];if(0>l(k,J))X<pe&&0>l(ve,k)?(z[le]=ve,z[X]=J,le=X):(z[le]=k,z[Y]=J,le=Y);else if(X<pe&&0>l(ve,J))z[le]=ve,z[X]=J,le=X;else break e}}return Z}function l(z,Z){var J=z.sortIndex-Z.sortIndex;return J!==0?J:z.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var m=[],p=[],g=1,_=null,x=3,E=!1,M=!1,b=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function B(z){for(var Z=i(p);Z!==null;){if(Z.callback===null)r(p);else if(Z.startTime<=z)r(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=i(p)}}function q(z){if(b=!1,B(z),!M)if(i(m)!==null)M=!0,F||(F=!0,me());else{var Z=i(p);Z!==null&&te(q,Z.startTime-z)}}var F=!1,P=-1,Q=5,A=-1;function N(){return y?!0:!(s.unstable_now()-A<Q)}function ne(){if(y=!1,F){var z=s.unstable_now();A=z;var Z=!0;try{e:{M=!1,b&&(b=!1,O(P),P=-1),E=!0;var J=x;try{t:{for(B(z),_=i(m);_!==null&&!(_.expirationTime>z&&N());){var le=_.callback;if(typeof le=="function"){_.callback=null,x=_.priorityLevel;var pe=le(_.expirationTime<=z);if(z=s.unstable_now(),typeof pe=="function"){_.callback=pe,B(z),Z=!0;break t}_===i(m)&&r(m),B(z)}else r(m);_=i(m)}if(_!==null)Z=!0;else{var D=i(p);D!==null&&te(q,D.startTime-z),Z=!1}}break e}finally{_=null,x=J,E=!1}Z=void 0}}finally{Z?me():F=!1}}}var me;if(typeof w=="function")me=function(){w(ne)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,V=Ae.port2;Ae.port1.onmessage=ne,me=function(){V.postMessage(null)}}else me=function(){v(ne,0)};function te(z,Z){P=v(function(){z(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(z){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var J=x;x=Z;try{return z()}finally{x=J}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var J=x;x=z;try{return Z()}finally{x=J}},s.unstable_scheduleCallback=function(z,Z,J){var le=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?le+J:le):J=le,z){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=J+pe,z={id:g++,callback:Z,priorityLevel:z,startTime:J,expirationTime:pe,sortIndex:-1},J>le?(z.sortIndex=J,e(p,z),i(m)===null&&z===i(p)&&(b?(O(P),P=-1):b=!0,te(q,J-le))):(z.sortIndex=pe,e(m,z),M||E||(M=!0,F||(F=!0,me()))),z},s.unstable_shouldYield=N,s.unstable_wrapCallback=function(z){var Z=x;return function(){var J=x;x=Z;try{return z.apply(this,arguments)}finally{x=J}}}})(Oh)),Oh}var U_;function Py(){return U_||(U_=1,Nh.exports=Oy()),Nh.exports}var Ph={exports:{}},Yn={};var N_;function zy(){if(N_)return Yn;N_=1;var s=zd();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var d=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Yn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Yn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Yn.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},Yn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Yn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Yn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=f(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,E=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:x,fetchPriority:E}):g==="script"&&r.d.X(m,{crossOrigin:_,integrity:x,fetchPriority:E,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Yn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=f(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Yn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=f(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Yn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=f(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Yn.requestFormReset=function(m){r.d.r(m)},Yn.unstable_batchedUpdates=function(m,p){return m(p)},Yn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Yn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Yn.version="19.2.7",Yn}var O_;function D0(){if(O_)return Ph.exports;O_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ph.exports=zy(),Ph.exports}var P_;function Iy(){if(P_)return sl;P_=1;var s=Py(),e=zd(),i=D0();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function f(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return m(u),t;if(h===o)return m(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,T=u.child;T;){if(T===a){S=!0,a=u,o=h;break}if(T===o){S=!0,o=u,a=h;break}T=T.sibling}if(!S){for(T=h.child;T;){if(T===a){S=!0,a=h,o=u;break}if(T===o){S=!0,o=h,a=u;break}T=T.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,x=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),w=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),ne=Symbol.iterator;function me(t){return t===null||typeof t!="object"?null:(t=ne&&t[ne]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Symbol.for("react.client.reference");function V(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Ae?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case b:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case q:return"Suspense";case F:return"SuspenseList";case A:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case M:return"Portal";case w:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case B:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case P:return n=t.displayName||null,n!==null?n:V(t.type)||"Memo";case Q:n=t._payload,t=t._init;try{return V(t(n))}catch{}}return null}var te=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},le=[],pe=-1;function D(t){return{current:t}}function Y(t){0>pe||(t.current=le[pe],le[pe]=null,pe--)}function k(t,n){pe++,le[pe]=t.current,t.current=n}var X=D(null),ve=D(null),be=D(null),Ce=D(null);function je(t,n){switch(k(be,n),k(ve,t),k(X,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Zg(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Zg(n),t=Kg(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Y(X),k(X,t)}function ke(){Y(X),Y(ve),Y(be)}function tt(t){t.memoizedState!==null&&k(Ce,t);var n=X.current,a=Kg(n,t.type);n!==a&&(k(ve,t),k(X,a))}function _t(t){ve.current===t&&(Y(X),Y(ve)),Ce.current===t&&(Y(Ce),tl._currentValue=J)}var se,dn;function Oe(t){if(se===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);se=n&&n[1]||"",dn=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+se+t+dn}var ot=!1;function Le(t,n){if(!t||ot)return"";ot=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _e=function(){throw Error()};if(Object.defineProperty(_e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_e,[])}catch(ue){var ae=ue}Reflect.construct(t,[],_e)}else{try{_e.call()}catch(ue){ae=ue}t.call(_e.prototype)}}else{try{throw Error()}catch(ue){ae=ue}(_e=t())&&typeof _e.catch=="function"&&_e.catch(function(){})}}catch(ue){if(ue&&ae&&typeof ue.stack=="string")return[ue.stack,ae.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],T=h[1];if(S&&T){var I=S.split(`
`),ee=T.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ee.length&&!ee[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===ee.length)for(o=I.length-1,u=ee.length-1;1<=o&&0<=u&&I[o]!==ee[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==ee[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==ee[u]){var de=`
`+I[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=u);break}}}finally{ot=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Oe(a):""}function Ft(t,n){switch(t.tag){case 26:case 27:case 5:return Oe(t.type);case 16:return Oe("Lazy");case 13:return t.child!==n&&n!==null?Oe("Suspense Fallback"):Oe("Suspense");case 19:return Oe("SuspenseList");case 0:case 15:return Le(t.type,!1);case 11:return Le(t.type.render,!1);case 1:return Le(t.type,!0);case 31:return Oe("Activity");default:return""}}function at(t){try{var n="",a=null;do n+=Ft(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var U=Object.prototype.hasOwnProperty,R=s.unstable_scheduleCallback,ie=s.unstable_cancelCallback,Me=s.unstable_shouldYield,Ee=s.unstable_requestPaint,Se=s.unstable_now,We=s.unstable_getCurrentPriorityLevel,Ne=s.unstable_ImmediatePriority,Be=s.unstable_UserBlockingPriority,qe=s.unstable_NormalPriority,ct=s.unstable_LowPriority,ye=s.unstable_IdlePriority,Rt=s.log,dt=s.unstable_setDisableYieldValue,Je=null,Fe=null;function Ie(t){if(typeof Rt=="function"&&dt(t),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(Je,t)}catch{}}var Ke=Math.clz32?Math.clz32:ut,Ct=Math.log,Kt=Math.LN2;function ut(t){return t>>>=0,t===0?32:31-(Ct(t)/Kt|0)|0}var we=256,H=262144,De=4194304;function Ue(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function nt(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~h,o!==0?u=Ue(o):(S&=T,S!==0?u=Ue(S):a||(a=T&~t,a!==0&&(u=Ue(a))))):(T=o&~h,T!==0?u=Ue(T):S!==0?u=Ue(S):a||(a=o&~t,a!==0&&(u=Ue(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ze(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Pt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(){var t=De;return De<<=1,(De&62914560)===0&&(De=4194304),t}function Qt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function en(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function xt(t,n,a,o,u,h){var S=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,I=t.expirationTimes,ee=t.hiddenUpdates;for(a=S&~a;0<a;){var de=31-Ke(a),_e=1<<de;T[de]=0,I[de]=-1;var ae=ee[de];if(ae!==null)for(ee[de]=null,de=0;de<ae.length;de++){var ue=ae[de];ue!==null&&(ue.lane&=-536870913)}a&=~_e}o!==0&&nn(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~n))}function nn(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ke(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function Pn(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ke(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function fa(t,n){var a=n&-n;return a=(a&42)!==0?1:Ar(a),(a&(t.suspendedLanes|n))!==0?0:a}function Ar(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Hi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ha(){var t=Z.p;return t!==0?t:(t=window.event,t===void 0?32:S_(t.type))}function ea(t,n){var a=Z.p;try{return Z.p=t,n()}finally{Z.p=a}}var Qn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Qn,un="__reactProps$"+Qn,ta="__reactContainer$"+Qn,Rr="__reactEvents$"+Qn,C="__reactListeners$"+Qn,K="__reactHandles$"+Qn,oe="__reactResources$"+Qn,ce="__reactMarker$"+Qn;function re(t){delete t[cn],delete t[un],delete t[Rr],delete t[C],delete t[K]}function ze(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[ta]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=i_(t);t!==null;){if(a=t[cn])return a;t=i_(t)}return n}t=a,a=t.parentNode}return null}function He(t){if(t=t[cn]||t[ta]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function $e(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function it(t){var n=t[oe];return n||(n=t[oe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ye(t){t[ce]=!0}var lt=new Set,rt={};function Ut(t,n){an(t,n),an(t+"Capture",n)}function an(t,n){for(rt[t]=n,t=0;t<n.length;t++)lt.add(n[t])}var Xt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ni={},zt={};function pt(t){return U.call(zt,t)?!0:U.call(ni,t)?!1:Xt.test(t)?zt[t]=!0:(ni[t]=!0,!1)}function na(t,n,a){if(pt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Bt(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function vn(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Sn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ri(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ia(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Jt(t){if(!t._valueTracker){var n=Ri(t)?"checked":"value";t._valueTracker=ia(t,n,""+t[n])}}function Xn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ri(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function An(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Wn=/[\n"\\]/g;function pn(t){return t.replace(Wn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wr(t,n,a,o,u,h,S,T){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Sn(n)):t.value!==""+Sn(n)&&(t.value=""+Sn(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?aa(t,S,Sn(n)):a!=null?aa(t,S,Sn(a)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+Sn(T):t.removeAttribute("name")}function Ga(t,n,a,o,u,h,S,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Jt(t);return}a=a!=null?""+Sn(a):"",n=n!=null?""+Sn(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Jt(t)}function aa(t,n,a){n==="number"&&An(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function da(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Sn(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function _o(t,n,a){if(n!=null&&(n=""+Sn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Sn(a):""}function Cl(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(te(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Sn(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Jt(t)}function pa(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Cu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ll(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Cu.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function vo(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Ll(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Ll(t,h,n[h])}function ka(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var So=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Te=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function L(t){return Te.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function W(){}var xe=null;function Re(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ve=null,ft=null;function Et(t){var n=He(t);if(n&&(t=n.stateNode)){var a=t[un]||null;e:switch(t=n.stateNode,n.type){case"input":if(wr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+pn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[un]||null;if(!u)throw Error(r(90));wr(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Xn(o)}break e;case"textarea":_o(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&da(t,!!a.multiple,n,!1)}}}var tn=!1;function Jn(t,n,a){if(tn)return t(n,a);tn=!0;try{var o=t(n);return o}finally{if(tn=!1,(Ve!==null||ft!==null)&&(_c(),Ve&&(n=Ve,t=ft,ft=Ve=null,Et(n),t)))for(n=0;n<t.length;n++)Et(t[n])}}function Rn(t,n){var a=t.stateNode;if(a===null)return null;var o=a[un]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cr=!1;if(qn)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){Cr=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{Cr=!1}var Gi=null,Lu=null,Dl=null;function Kd(){if(Dl)return Dl;var t,n=Lu,a=n.length,o,u="value"in Gi?Gi.value:Gi.textContent,h=u.length;for(t=0;t<a&&n[t]===u[t];t++);var S=a-t;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return Dl=u.slice(t,1<o?1-o:void 0)}function Ul(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Nl(){return!0}function Qd(){return!1}function ii(t){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Nl:Qd,this.isPropagationStopped=Qd,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Nl)},persist:function(){},isPersistent:Nl}),n}var Lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=ii(Lr),xo=_({},Lr,{view:0,detail:0}),CS=ii(xo),Du,Uu,yo,Pl=_({},xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ou,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(Du=t.screenX-yo.screenX,Uu=t.screenY-yo.screenY):Uu=Du=0,yo=t),Du)},movementY:function(t){return"movementY"in t?t.movementY:Uu}}),Jd=ii(Pl),LS=_({},Pl,{dataTransfer:0}),DS=ii(LS),US=_({},xo,{relatedTarget:0}),Nu=ii(US),NS=_({},Lr,{animationName:0,elapsedTime:0,pseudoElement:0}),OS=ii(NS),PS=_({},Lr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zS=ii(PS),IS=_({},Lr,{data:0}),$d=ii(IS),BS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},HS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=HS[t])?!!n[t]:!1}function Ou(){return GS}var kS=_({},xo,{key:function(t){if(t.key){var n=BS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ou,charCode:function(t){return t.type==="keypress"?Ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),VS=ii(kS),XS=_({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ep=ii(XS),WS=_({},xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ou}),qS=ii(WS),YS=_({},Lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jS=ii(YS),ZS=_({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),KS=ii(ZS),QS=_({},Lr,{newState:0,oldState:0}),JS=ii(QS),$S=[9,13,27,32],Pu=qn&&"CompositionEvent"in window,Eo=null;qn&&"documentMode"in document&&(Eo=document.documentMode);var ex=qn&&"TextEvent"in window&&!Eo,tp=qn&&(!Pu||Eo&&8<Eo&&11>=Eo),np=" ",ip=!1;function ap(t,n){switch(t){case"keyup":return $S.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function tx(t,n){switch(t){case"compositionend":return rp(n);case"keypress":return n.which!==32?null:(ip=!0,np);case"textInput":return t=n.data,t===np&&ip?null:t;default:return null}}function nx(t,n){if(us)return t==="compositionend"||!Pu&&ap(t,n)?(t=Kd(),Dl=Lu=Gi=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tp&&n.locale!=="ko"?null:n.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ix[t.type]:n==="textarea"}function op(t,n,a,o){Ve?ft?ft.push(o):ft=[o]:Ve=o,n=Tc(n,"onChange"),0<n.length&&(a=new Ol("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var Mo=null,To=null;function ax(t){Vg(t,0)}function zl(t){var n=$e(t);if(Xn(n))return t}function lp(t,n){if(t==="change")return n}var cp=!1;if(qn){var zu;if(qn){var Iu="oninput"in document;if(!Iu){var up=document.createElement("div");up.setAttribute("oninput","return;"),Iu=typeof up.oninput=="function"}zu=Iu}else zu=!1;cp=zu&&(!document.documentMode||9<document.documentMode)}function fp(){Mo&&(Mo.detachEvent("onpropertychange",hp),To=Mo=null)}function hp(t){if(t.propertyName==="value"&&zl(To)){var n=[];op(n,To,t,Re(t)),Jn(ax,n)}}function rx(t,n,a){t==="focusin"?(fp(),Mo=n,To=a,Mo.attachEvent("onpropertychange",hp)):t==="focusout"&&fp()}function sx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(To)}function ox(t,n){if(t==="click")return zl(n)}function lx(t,n){if(t==="input"||t==="change")return zl(n)}function cx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var di=typeof Object.is=="function"?Object.is:cx;function bo(t,n){if(di(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!U.call(n,u)||!di(t[u],n[u]))return!1}return!0}function dp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pp(t,n){var a=dp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=dp(a)}}function mp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?mp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function gp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=An(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=An(t.document)}return n}function Bu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ux=qn&&"documentMode"in document&&11>=document.documentMode,fs=null,Fu=null,Ao=null,Hu=!1;function _p(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hu||fs==null||fs!==An(o)||(o=fs,"selectionStart"in o&&Bu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ao&&bo(Ao,o)||(Ao=o,o=Tc(Fu,"onSelect"),0<o.length&&(n=new Ol("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=fs)))}function Dr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var hs={animationend:Dr("Animation","AnimationEnd"),animationiteration:Dr("Animation","AnimationIteration"),animationstart:Dr("Animation","AnimationStart"),transitionrun:Dr("Transition","TransitionRun"),transitionstart:Dr("Transition","TransitionStart"),transitioncancel:Dr("Transition","TransitionCancel"),transitionend:Dr("Transition","TransitionEnd")},Gu={},vp={};qn&&(vp=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Ur(t){if(Gu[t])return Gu[t];if(!hs[t])return t;var n=hs[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in vp)return Gu[t]=n[a];return t}var Sp=Ur("animationend"),xp=Ur("animationiteration"),yp=Ur("animationstart"),fx=Ur("transitionrun"),hx=Ur("transitionstart"),dx=Ur("transitioncancel"),Ep=Ur("transitionend"),Mp=new Map,ku="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ku.push("scrollEnd");function ki(t,n){Mp.set(t,n),Ut(n,[t])}var Il=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},wi=[],ds=0,Vu=0;function Bl(){for(var t=ds,n=Vu=ds=0;n<t;){var a=wi[n];wi[n++]=null;var o=wi[n];wi[n++]=null;var u=wi[n];wi[n++]=null;var h=wi[n];if(wi[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&Tp(a,u,h)}}function Fl(t,n,a,o){wi[ds++]=t,wi[ds++]=n,wi[ds++]=a,wi[ds++]=o,Vu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Xu(t,n,a,o){return Fl(t,n,a,o),Hl(t)}function Nr(t,n){return Fl(t,null,null,n),Hl(t)}function Tp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=t.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Ke(a),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function Hl(t){if(50<jo)throw jo=0,eh=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ps={};function px(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(t,n,a,o){return new px(t,n,a,o)}function Wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ma(t,n){var a=t.alternate;return a===null?(a=pi(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function bp(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Gl(t,n,a,o,u,h){var S=0;if(o=t,typeof t=="function")Wu(t)&&(S=1);else if(typeof t=="string")S=Sy(t,a,X.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case A:return t=pi(31,a,n,u),t.elementType=A,t.lanes=h,t;case b:return Or(a.children,u,h,n);case y:S=8,u|=24;break;case v:return t=pi(12,a,n,u|2),t.elementType=v,t.lanes=h,t;case q:return t=pi(13,a,n,u),t.elementType=q,t.lanes=h,t;case F:return t=pi(19,a,n,u),t.elementType=F,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:S=10;break e;case O:S=9;break e;case B:S=11;break e;case P:S=14;break e;case Q:S=16,o=null;break e}S=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=pi(S,a,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function Or(t,n,a,o){return t=pi(7,t,o,n),t.lanes=a,t}function qu(t,n,a){return t=pi(6,t,null,n),t.lanes=a,t}function Ap(t){var n=pi(18,null,null,0);return n.stateNode=t,n}function Yu(t,n,a){return n=pi(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Rp=new WeakMap;function Ci(t,n){if(typeof t=="object"&&t!==null){var a=Rp.get(t);return a!==void 0?a:(n={value:t,source:n,stack:at(n)},Rp.set(t,n),n)}return{value:t,source:n,stack:at(n)}}var ms=[],gs=0,kl=null,Ro=0,Li=[],Di=0,Va=null,ra=1,sa="";function ga(t,n){ms[gs++]=Ro,ms[gs++]=kl,kl=t,Ro=n}function wp(t,n,a){Li[Di++]=ra,Li[Di++]=sa,Li[Di++]=Va,Va=t;var o=ra;t=sa;var u=32-Ke(o)-1;o&=~(1<<u),a+=1;var h=32-Ke(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,ra=1<<32-Ke(n)+u|a<<u|o,sa=h+t}else ra=1<<h|a<<u|o,sa=t}function ju(t){t.return!==null&&(ga(t,1),wp(t,1,0))}function Zu(t){for(;t===kl;)kl=ms[--gs],ms[gs]=null,Ro=ms[--gs],ms[gs]=null;for(;t===Va;)Va=Li[--Di],Li[Di]=null,sa=Li[--Di],Li[Di]=null,ra=Li[--Di],Li[Di]=null}function Cp(t,n){Li[Di++]=ra,Li[Di++]=sa,Li[Di++]=Va,ra=n.id,sa=n.overflow,Va=t}var zn=null,rn=null,wt=!1,Xa=null,Ui=!1,Ku=Error(r(519));function Wa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wo(Ci(n,t)),Ku}function Lp(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[un]=o,a){case"dialog":Tt("cancel",n),Tt("close",n);break;case"iframe":case"object":case"embed":Tt("load",n);break;case"video":case"audio":for(a=0;a<Ko.length;a++)Tt(Ko[a],n);break;case"source":Tt("error",n);break;case"img":case"image":case"link":Tt("error",n),Tt("load",n);break;case"details":Tt("toggle",n);break;case"input":Tt("invalid",n),Ga(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Tt("invalid",n);break;case"textarea":Tt("invalid",n),Cl(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Yg(n.textContent,a)?(o.popover!=null&&(Tt("beforetoggle",n),Tt("toggle",n)),o.onScroll!=null&&Tt("scroll",n),o.onScrollEnd!=null&&Tt("scrollend",n),o.onClick!=null&&(n.onclick=W),n=!0):n=!1,n||Wa(t,!0)}function Dp(t){for(zn=t.return;zn;)switch(zn.tag){case 5:case 31:case 13:Ui=!1;return;case 27:case 3:Ui=!0;return;default:zn=zn.return}}function _s(t){if(t!==zn)return!1;if(!wt)return Dp(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||mh(t.type,t.memoizedProps)),a=!a),a&&rn&&Wa(t),Dp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));rn=n_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));rn=n_(t)}else n===27?(n=rn,rr(t.type)?(t=xh,xh=null,rn=t):rn=n):rn=zn?Oi(t.stateNode.nextSibling):null;return!0}function Pr(){rn=zn=null,wt=!1}function Qu(){var t=Xa;return t!==null&&(oi===null?oi=t:oi.push.apply(oi,t),Xa=null),t}function wo(t){Xa===null?Xa=[t]:Xa.push(t)}var Ju=D(null),zr=null,_a=null;function qa(t,n,a){k(Ju,n._currentValue),n._currentValue=a}function va(t){t._currentValue=Ju.current,Y(Ju)}function $u(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ef(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;e:for(;h!==null;){var T=h;h=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){h.lanes|=a,T=h.alternate,T!==null&&(T.lanes|=a),$u(h.return,a,t),o||(S=null);break e}h=T.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(r(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),$u(S,a,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function vs(t,n,a,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var T=u.type;di(u.pendingProps.value,S.value)||(t!==null?t.push(T):t=[T])}}else if(u===Ce.current){if(S=u.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(tl):t=[tl])}u=u.return}t!==null&&ef(n,t,a,o),n.flags|=262144}function Vl(t){for(t=t.firstContext;t!==null;){if(!di(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ir(t){zr=t,_a=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function In(t){return Up(zr,t)}function Xl(t,n){return zr===null&&Ir(t),Up(t,n)}function Up(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},_a===null){if(t===null)throw Error(r(308));_a=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else _a=_a.next=n;return a}var mx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},gx=s.unstable_scheduleCallback,_x=s.unstable_NormalPriority,xn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function tf(){return{controller:new mx,data:new Map,refCount:0}}function Co(t){t.refCount--,t.refCount===0&&gx(_x,function(){t.controller.abort()})}var Lo=null,nf=0,Ss=0,xs=null;function vx(t,n){if(Lo===null){var a=Lo=[];nf=0,Ss=sh(),xs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return nf++,n.then(Np,Np),n}function Np(){if(--nf===0&&Lo!==null){xs!==null&&(xs.status="fulfilled");var t=Lo;Lo=null,Ss=0,xs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Sx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Op=z.S;z.S=function(t,n){_g=Se(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&vx(t,n),Op!==null&&Op(t,n)};var Br=D(null);function af(){var t=Br.current;return t!==null?t:$t.pooledCache}function Wl(t,n){n===null?k(Br,Br.current):k(Br,n.pool)}function Pp(){var t=af();return t===null?null:{parent:xn._currentValue,pool:t}}var ys=Error(r(460)),rf=Error(r(474)),ql=Error(r(542)),Yl={then:function(){}};function zp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Ip(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(W,W),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fp(t),t;default:if(typeof n.status=="string")n.then(W,W);else{if(t=$t,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fp(t),t}throw Hr=n,ys}}function Fr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Hr=a,ys):a}}var Hr=null;function Bp(){if(Hr===null)throw Error(r(459));var t=Hr;return Hr=null,t}function Fp(t){if(t===ys||t===ql)throw Error(r(483))}var Es=null,Do=0;function jl(t){var n=Do;return Do+=1,Es===null&&(Es=[]),Ip(Es,t,n)}function Uo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Zl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Hp(t){function n(j,G){if(t){var $=j.deletions;$===null?(j.deletions=[G],j.flags|=16):$.push(G)}}function a(j,G){if(!t)return null;for(;G!==null;)n(j,G),G=G.sibling;return null}function o(j){for(var G=new Map;j!==null;)j.key!==null?G.set(j.key,j):G.set(j.index,j),j=j.sibling;return G}function u(j,G){return j=ma(j,G),j.index=0,j.sibling=null,j}function h(j,G,$){return j.index=$,t?($=j.alternate,$!==null?($=$.index,$<G?(j.flags|=67108866,G):$):(j.flags|=67108866,G)):(j.flags|=1048576,G)}function S(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function T(j,G,$,ge){return G===null||G.tag!==6?(G=qu($,j.mode,ge),G.return=j,G):(G=u(G,$),G.return=j,G)}function I(j,G,$,ge){var et=$.type;return et===b?de(j,G,$.props.children,ge,$.key):G!==null&&(G.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===Q&&Fr(et)===G.type)?(G=u(G,$.props),Uo(G,$),G.return=j,G):(G=Gl($.type,$.key,$.props,null,j.mode,ge),Uo(G,$),G.return=j,G)}function ee(j,G,$,ge){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=Yu($,j.mode,ge),G.return=j,G):(G=u(G,$.children||[]),G.return=j,G)}function de(j,G,$,ge,et){return G===null||G.tag!==7?(G=Or($,j.mode,ge,et),G.return=j,G):(G=u(G,$),G.return=j,G)}function _e(j,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=qu(""+G,j.mode,$),G.return=j,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case E:return $=Gl(G.type,G.key,G.props,null,j.mode,$),Uo($,G),$.return=j,$;case M:return G=Yu(G,j.mode,$),G.return=j,G;case Q:return G=Fr(G),_e(j,G,$)}if(te(G)||me(G))return G=Or(G,j.mode,$,null),G.return=j,G;if(typeof G.then=="function")return _e(j,jl(G),$);if(G.$$typeof===w)return _e(j,Xl(j,G),$);Zl(j,G)}return null}function ae(j,G,$,ge){var et=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return et!==null?null:T(j,G,""+$,ge);if(typeof $=="object"&&$!==null){switch($.$$typeof){case E:return $.key===et?I(j,G,$,ge):null;case M:return $.key===et?ee(j,G,$,ge):null;case Q:return $=Fr($),ae(j,G,$,ge)}if(te($)||me($))return et!==null?null:de(j,G,$,ge,null);if(typeof $.then=="function")return ae(j,G,jl($),ge);if($.$$typeof===w)return ae(j,G,Xl(j,$),ge);Zl(j,$)}return null}function ue(j,G,$,ge,et){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return j=j.get($)||null,T(G,j,""+ge,et);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case E:return j=j.get(ge.key===null?$:ge.key)||null,I(G,j,ge,et);case M:return j=j.get(ge.key===null?$:ge.key)||null,ee(G,j,ge,et);case Q:return ge=Fr(ge),ue(j,G,$,ge,et)}if(te(ge)||me(ge))return j=j.get($)||null,de(G,j,ge,et,null);if(typeof ge.then=="function")return ue(j,G,$,jl(ge),et);if(ge.$$typeof===w)return ue(j,G,$,Xl(G,ge),et);Zl(G,ge)}return null}function Ge(j,G,$,ge){for(var et=null,Nt=null,Xe=G,vt=G=0,At=null;Xe!==null&&vt<$.length;vt++){Xe.index>vt?(At=Xe,Xe=null):At=Xe.sibling;var Ot=ae(j,Xe,$[vt],ge);if(Ot===null){Xe===null&&(Xe=At);break}t&&Xe&&Ot.alternate===null&&n(j,Xe),G=h(Ot,G,vt),Nt===null?et=Ot:Nt.sibling=Ot,Nt=Ot,Xe=At}if(vt===$.length)return a(j,Xe),wt&&ga(j,vt),et;if(Xe===null){for(;vt<$.length;vt++)Xe=_e(j,$[vt],ge),Xe!==null&&(G=h(Xe,G,vt),Nt===null?et=Xe:Nt.sibling=Xe,Nt=Xe);return wt&&ga(j,vt),et}for(Xe=o(Xe);vt<$.length;vt++)At=ue(Xe,j,vt,$[vt],ge),At!==null&&(t&&At.alternate!==null&&Xe.delete(At.key===null?vt:At.key),G=h(At,G,vt),Nt===null?et=At:Nt.sibling=At,Nt=At);return t&&Xe.forEach(function(ur){return n(j,ur)}),wt&&ga(j,vt),et}function st(j,G,$,ge){if($==null)throw Error(r(151));for(var et=null,Nt=null,Xe=G,vt=G=0,At=null,Ot=$.next();Xe!==null&&!Ot.done;vt++,Ot=$.next()){Xe.index>vt?(At=Xe,Xe=null):At=Xe.sibling;var ur=ae(j,Xe,Ot.value,ge);if(ur===null){Xe===null&&(Xe=At);break}t&&Xe&&ur.alternate===null&&n(j,Xe),G=h(ur,G,vt),Nt===null?et=ur:Nt.sibling=ur,Nt=ur,Xe=At}if(Ot.done)return a(j,Xe),wt&&ga(j,vt),et;if(Xe===null){for(;!Ot.done;vt++,Ot=$.next())Ot=_e(j,Ot.value,ge),Ot!==null&&(G=h(Ot,G,vt),Nt===null?et=Ot:Nt.sibling=Ot,Nt=Ot);return wt&&ga(j,vt),et}for(Xe=o(Xe);!Ot.done;vt++,Ot=$.next())Ot=ue(Xe,j,vt,Ot.value,ge),Ot!==null&&(t&&Ot.alternate!==null&&Xe.delete(Ot.key===null?vt:Ot.key),G=h(Ot,G,vt),Nt===null?et=Ot:Nt.sibling=Ot,Nt=Ot);return t&&Xe.forEach(function(Ly){return n(j,Ly)}),wt&&ga(j,vt),et}function Yt(j,G,$,ge){if(typeof $=="object"&&$!==null&&$.type===b&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case E:e:{for(var et=$.key;G!==null;){if(G.key===et){if(et=$.type,et===b){if(G.tag===7){a(j,G.sibling),ge=u(G,$.props.children),ge.return=j,j=ge;break e}}else if(G.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===Q&&Fr(et)===G.type){a(j,G.sibling),ge=u(G,$.props),Uo(ge,$),ge.return=j,j=ge;break e}a(j,G);break}else n(j,G);G=G.sibling}$.type===b?(ge=Or($.props.children,j.mode,ge,$.key),ge.return=j,j=ge):(ge=Gl($.type,$.key,$.props,null,j.mode,ge),Uo(ge,$),ge.return=j,j=ge)}return S(j);case M:e:{for(et=$.key;G!==null;){if(G.key===et)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){a(j,G.sibling),ge=u(G,$.children||[]),ge.return=j,j=ge;break e}else{a(j,G);break}else n(j,G);G=G.sibling}ge=Yu($,j.mode,ge),ge.return=j,j=ge}return S(j);case Q:return $=Fr($),Yt(j,G,$,ge)}if(te($))return Ge(j,G,$,ge);if(me($)){if(et=me($),typeof et!="function")throw Error(r(150));return $=et.call($),st(j,G,$,ge)}if(typeof $.then=="function")return Yt(j,G,jl($),ge);if($.$$typeof===w)return Yt(j,G,Xl(j,$),ge);Zl(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(a(j,G.sibling),ge=u(G,$),ge.return=j,j=ge):(a(j,G),ge=qu($,j.mode,ge),ge.return=j,j=ge),S(j)):a(j,G)}return function(j,G,$,ge){try{Do=0;var et=Yt(j,G,$,ge);return Es=null,et}catch(Xe){if(Xe===ys||Xe===ql)throw Xe;var Nt=pi(29,Xe,null,j.mode);return Nt.lanes=ge,Nt.return=j,Nt}}}var Gr=Hp(!0),Gp=Hp(!1),Ya=!1;function sf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function of(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ja(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Za(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(It&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Hl(t),Tp(t,null,a),n}return Fl(t,o,n,a),Hl(t)}function No(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Pn(t,a)}}function lf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var cf=!1;function Oo(){if(cf){var t=xs;if(t!==null)throw t}}function Po(t,n,a,o){cf=!1;var u=t.updateQueue;Ya=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,ee=I.next;I.next=null,S===null?h=ee:S.next=ee,S=I;var de=t.alternate;de!==null&&(de=de.updateQueue,T=de.lastBaseUpdate,T!==S&&(T===null?de.firstBaseUpdate=ee:T.next=ee,de.lastBaseUpdate=I))}if(h!==null){var _e=u.baseState;S=0,de=ee=I=null,T=h;do{var ae=T.lane&-536870913,ue=ae!==T.lane;if(ue?(bt&ae)===ae:(o&ae)===ae){ae!==0&&ae===Ss&&(cf=!0),de!==null&&(de=de.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var Ge=t,st=T;ae=n;var Yt=a;switch(st.tag){case 1:if(Ge=st.payload,typeof Ge=="function"){_e=Ge.call(Yt,_e,ae);break e}_e=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=st.payload,ae=typeof Ge=="function"?Ge.call(Yt,_e,ae):Ge,ae==null)break e;_e=_({},_e,ae);break e;case 2:Ya=!0}}ae=T.callback,ae!==null&&(t.flags|=64,ue&&(t.flags|=8192),ue=u.callbacks,ue===null?u.callbacks=[ae]:ue.push(ae))}else ue={lane:ae,tag:T.tag,payload:T.payload,callback:T.callback,next:null},de===null?(ee=de=ue,I=_e):de=de.next=ue,S|=ae;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ue=T,T=ue.next,ue.next=null,u.lastBaseUpdate=ue,u.shared.pending=null}}while(!0);de===null&&(I=_e),u.baseState=I,u.firstBaseUpdate=ee,u.lastBaseUpdate=de,h===null&&(u.shared.lanes=0),er|=S,t.lanes=S,t.memoizedState=_e}}function kp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Vp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)kp(a[t],n)}var Ms=D(null),Kl=D(0);function Xp(t,n){t=Ra,k(Kl,t),k(Ms,n),Ra=t|n.baseLanes}function uf(){k(Kl,Ra),k(Ms,Ms.current)}function ff(){Ra=Kl.current,Y(Ms),Y(Kl)}var mi=D(null),Ni=null;function Ka(t){var n=t.alternate;k(gn,gn.current&1),k(mi,t),Ni===null&&(n===null||Ms.current!==null||n.memoizedState!==null)&&(Ni=t)}function hf(t){k(gn,gn.current),k(mi,t),Ni===null&&(Ni=t)}function Wp(t){t.tag===22?(k(gn,gn.current),k(mi,t),Ni===null&&(Ni=t)):Qa()}function Qa(){k(gn,gn.current),k(mi,mi.current)}function gi(t){Y(mi),Ni===t&&(Ni=null),Y(gn)}var gn=D(0);function Ql(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||vh(a)||Sh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Sa=0,mt=null,Wt=null,yn=null,Jl=!1,Ts=!1,kr=!1,$l=0,zo=0,bs=null,xx=0;function fn(){throw Error(r(321))}function df(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!di(t[a],n[a]))return!1;return!0}function pf(t,n,a,o,u,h){return Sa=h,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?wm:Cf,kr=!1,h=a(o,u),kr=!1,Ts&&(h=Yp(n,a,o,u)),qp(t),h}function qp(t){z.H=Fo;var n=Wt!==null&&Wt.next!==null;if(Sa=0,yn=Wt=mt=null,Jl=!1,zo=0,bs=null,n)throw Error(r(300));t===null||En||(t=t.dependencies,t!==null&&Vl(t)&&(En=!0))}function Yp(t,n,a,o){mt=t;var u=0;do{if(Ts&&(bs=null),zo=0,Ts=!1,25<=u)throw Error(r(301));if(u+=1,yn=Wt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=Cm,h=n(a,o)}while(Ts);return h}function yx(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?Io(n):n,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(mt.flags|=1024),n}function mf(){var t=$l!==0;return $l=0,t}function gf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function _f(t){if(Jl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Jl=!1}Sa=0,yn=Wt=mt=null,Ts=!1,zo=$l=0,bs=null}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?mt.memoizedState=yn=t:yn=yn.next=t,yn}function _n(){if(Wt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var n=yn===null?mt.memoizedState:yn.next;if(n!==null)yn=n,Wt=t;else{if(t===null)throw mt.alternate===null?Error(r(467)):Error(r(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},yn===null?mt.memoizedState=yn=t:yn=yn.next=t}return yn}function ec(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(t){var n=zo;return zo+=1,bs===null&&(bs=[]),t=Ip(bs,t,n),n=mt,(yn===null?n.memoizedState:yn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?wm:Cf),t}function tc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Io(t);if(t.$$typeof===w)return In(t)}throw Error(r(438,String(t)))}function vf(t){var n=null,a=mt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ec(),mt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=N;return n.index++,a}function xa(t,n){return typeof n=="function"?n(t):n}function nc(t){var n=_n();return Sf(n,Wt,t)}function Sf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var T=S=null,I=null,ee=n,de=!1;do{var _e=ee.lane&-536870913;if(_e!==ee.lane?(bt&_e)===_e:(Sa&_e)===_e){var ae=ee.revertLane;if(ae===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),_e===Ss&&(de=!0);else if((Sa&ae)===ae){ee=ee.next,ae===Ss&&(de=!0);continue}else _e={lane:0,revertLane:ee.revertLane,gesture:null,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},I===null?(T=I=_e,S=h):I=I.next=_e,mt.lanes|=ae,er|=ae;_e=ee.action,kr&&a(h,_e),h=ee.hasEagerState?ee.eagerState:a(h,_e)}else ae={lane:_e,revertLane:ee.revertLane,gesture:ee.gesture,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null},I===null?(T=I=ae,S=h):I=I.next=ae,mt.lanes|=_e,er|=_e;ee=ee.next}while(ee!==null&&ee!==n);if(I===null?S=h:I.next=T,!di(h,t.memoizedState)&&(En=!0,de&&(a=xs,a!==null)))throw a;t.memoizedState=h,t.baseState=S,t.baseQueue=I,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function xf(t){var n=_n(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=t(h,S.action),S=S.next;while(S!==u);di(h,n.memoizedState)||(En=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function jp(t,n,a){var o=mt,u=_n(),h=wt;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!di((Wt||u).memoizedState,a);if(S&&(u.memoizedState=a,En=!0),u=u.queue,Mf(Qp.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,As(9,{destroy:void 0},Kp.bind(null,o,u,a,n),null),$t===null)throw Error(r(349));h||(Sa&127)!==0||Zp(o,n,a)}return a}function Zp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=mt.updateQueue,n===null?(n=ec(),mt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Kp(t,n,a,o){n.value=a,n.getSnapshot=o,Jp(n)&&$p(t)}function Qp(t,n,a){return a(function(){Jp(n)&&$p(t)})}function Jp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!di(t,a)}catch{return!0}}function $p(t){var n=Nr(t,2);n!==null&&li(n,t,2)}function yf(t){var n=$n();if(typeof t=="function"){var a=t;if(t=a(),kr){Ie(!0);try{a()}finally{Ie(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:t},n}function em(t,n,a,o){return t.baseState=a,Sf(t,Wt,typeof o=="function"?o:xa)}function Ex(t,n,a,o,u){if(rc(t))throw Error(r(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};z.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,tm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function tm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=z.T,S={};z.T=S;try{var T=a(u,o),I=z.S;I!==null&&I(S,T),nm(t,n,T)}catch(ee){Ef(t,n,ee)}finally{h!==null&&S.types!==null&&(h.types=S.types),z.T=h}}else try{h=a(u,o),nm(t,n,h)}catch(ee){Ef(t,n,ee)}}function nm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){im(t,n,o)},function(o){return Ef(t,n,o)}):im(t,n,a)}function im(t,n,a){n.status="fulfilled",n.value=a,am(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,tm(t,a)))}function Ef(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,am(n),n=n.next;while(n!==o)}t.action=null}function am(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function rm(t,n){return n}function sm(t,n){if(wt){var a=$t.formState;if(a!==null){e:{var o=mt;if(wt){if(rn){t:{for(var u=rn,h=Ui;u.nodeType!==8;){if(!h){u=null;break t}if(u=Oi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){rn=Oi(u.nextSibling),o=u.data==="F!";break e}}Wa(o)}o=!1}o&&(n=a[0])}}return a=$n(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rm,lastRenderedState:n},a.queue=o,a=bm.bind(null,mt,o),o.dispatch=a,o=yf(!1),h=wf.bind(null,mt,!1,o.queue),o=$n(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=Ex.bind(null,mt,u,h,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function om(t){var n=_n();return lm(n,Wt,t)}function lm(t,n,a){if(n=Sf(t,n,rm)[0],t=nc(xa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Io(n)}catch(S){throw S===ys?ql:S}else o=n;n=_n();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(mt.flags|=2048,As(9,{destroy:void 0},Mx.bind(null,u,a),null)),[o,h,t]}function Mx(t,n){t.action=n}function cm(t){var n=_n(),a=Wt;if(a!==null)return lm(n,a,t);_n(),n=n.memoizedState,a=_n();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function As(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=mt.updateQueue,n===null&&(n=ec(),mt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function um(){return _n().memoizedState}function ic(t,n,a,o){var u=$n();mt.flags|=t,u.memoizedState=As(1|n,{destroy:void 0},a,o===void 0?null:o)}function ac(t,n,a,o){var u=_n();o=o===void 0?null:o;var h=u.memoizedState.inst;Wt!==null&&o!==null&&df(o,Wt.memoizedState.deps)?u.memoizedState=As(n,h,a,o):(mt.flags|=t,u.memoizedState=As(1|n,h,a,o))}function fm(t,n){ic(8390656,8,t,n)}function Mf(t,n){ac(2048,8,t,n)}function Tx(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=ec(),mt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function hm(t){var n=_n().memoizedState;return Tx({ref:n,nextImpl:t}),function(){if((It&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function dm(t,n){return ac(4,2,t,n)}function pm(t,n){return ac(4,4,t,n)}function mm(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function gm(t,n,a){a=a!=null?a.concat([t]):null,ac(4,4,mm.bind(null,n,t),a)}function Tf(){}function _m(t,n){var a=_n();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&df(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function vm(t,n){var a=_n();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&df(n,o[1]))return o[0];if(o=t(),kr){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[o,n],o}function bf(t,n,a){return a===void 0||(Sa&1073741824)!==0&&(bt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Sg(),mt.lanes|=t,er|=t,a)}function Sm(t,n,a,o){return di(a,n)?a:Ms.current!==null?(t=bf(t,a,o),di(t,n)||(En=!0),t):(Sa&42)===0||(Sa&1073741824)!==0&&(bt&261930)===0?(En=!0,t.memoizedState=a):(t=Sg(),mt.lanes|=t,er|=t,n)}function xm(t,n,a,o,u){var h=Z.p;Z.p=h!==0&&8>h?h:8;var S=z.T,T={};z.T=T,wf(t,!1,n,a);try{var I=u(),ee=z.S;if(ee!==null&&ee(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var de=Sx(I,o);Bo(t,n,de,Si(t))}else Bo(t,n,o,Si(t))}catch(_e){Bo(t,n,{then:function(){},status:"rejected",reason:_e},Si())}finally{Z.p=h,S!==null&&T.types!==null&&(S.types=T.types),z.T=S}}function bx(){}function Af(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=ym(t).queue;xm(t,u,n,J,a===null?bx:function(){return Em(t),a(o)})}function ym(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Em(t){var n=ym(t);n.next===null&&(n=t.alternate.memoizedState),Bo(t,n.next.queue,{},Si())}function Rf(){return In(tl)}function Mm(){return _n().memoizedState}function Tm(){return _n().memoizedState}function Ax(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Si();t=ja(a);var o=Za(n,t,a);o!==null&&(li(o,n,a),No(o,n,a)),n={cache:tf()},t.payload=n;return}n=n.return}}function Rx(t,n,a){var o=Si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},rc(t)?Am(n,a):(a=Xu(t,n,a,o),a!==null&&(li(a,t,o),Rm(a,n,o)))}function bm(t,n,a){var o=Si();Bo(t,n,a,o)}function Bo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(rc(t))Am(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,T=h(S,a);if(u.hasEagerState=!0,u.eagerState=T,di(T,S))return Fl(t,n,u,0),$t===null&&Bl(),!1}catch{}if(a=Xu(t,n,u,o),a!==null)return li(a,t,o),Rm(a,n,o),!0}return!1}function wf(t,n,a,o){if(o={lane:2,revertLane:sh(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},rc(t)){if(n)throw Error(r(479))}else n=Xu(t,a,o,2),n!==null&&li(n,t,2)}function rc(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function Am(t,n){Ts=Jl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Rm(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,Pn(t,a)}}var Fo={readContext:In,use:tc,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useLayoutEffect:fn,useInsertionEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useSyncExternalStore:fn,useId:fn,useHostTransitionStatus:fn,useFormState:fn,useActionState:fn,useOptimistic:fn,useMemoCache:fn,useCacheRefresh:fn};Fo.useEffectEvent=fn;var wm={readContext:In,use:tc,useCallback:function(t,n){return $n().memoizedState=[t,n===void 0?null:n],t},useContext:In,useEffect:fm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ic(4194308,4,mm.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ic(4194308,4,t,n)},useInsertionEffect:function(t,n){ic(4,2,t,n)},useMemo:function(t,n){var a=$n();n=n===void 0?null:n;var o=t();if(kr){Ie(!0);try{t()}finally{Ie(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=$n();if(a!==void 0){var u=a(n);if(kr){Ie(!0);try{a(n)}finally{Ie(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Rx.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var n=$n();return t={current:t},n.memoizedState=t},useState:function(t){t=yf(t);var n=t.queue,a=bm.bind(null,mt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Tf,useDeferredValue:function(t,n){var a=$n();return bf(a,t,n)},useTransition:function(){var t=yf(!1);return t=xm.bind(null,mt,t.queue,!0,!1),$n().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=mt,u=$n();if(wt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),$t===null)throw Error(r(349));(bt&127)!==0||Zp(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,fm(Qp.bind(null,o,h,t),[t]),o.flags|=2048,As(9,{destroy:void 0},Kp.bind(null,o,h,a,n),null),a},useId:function(){var t=$n(),n=$t.identifierPrefix;if(wt){var a=sa,o=ra;a=(o&~(1<<32-Ke(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=$l++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=xx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Rf,useFormState:sm,useActionState:sm,useOptimistic:function(t){var n=$n();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=wf.bind(null,mt,!0,a),a.dispatch=n,[t,n]},useMemoCache:vf,useCacheRefresh:function(){return $n().memoizedState=Ax.bind(null,mt)},useEffectEvent:function(t){var n=$n(),a={impl:t};return n.memoizedState=a,function(){if((It&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Cf={readContext:In,use:tc,useCallback:_m,useContext:In,useEffect:Mf,useImperativeHandle:gm,useInsertionEffect:dm,useLayoutEffect:pm,useMemo:vm,useReducer:nc,useRef:um,useState:function(){return nc(xa)},useDebugValue:Tf,useDeferredValue:function(t,n){var a=_n();return Sm(a,Wt.memoizedState,t,n)},useTransition:function(){var t=nc(xa)[0],n=_n().memoizedState;return[typeof t=="boolean"?t:Io(t),n]},useSyncExternalStore:jp,useId:Mm,useHostTransitionStatus:Rf,useFormState:om,useActionState:om,useOptimistic:function(t,n){var a=_n();return em(a,Wt,t,n)},useMemoCache:vf,useCacheRefresh:Tm};Cf.useEffectEvent=hm;var Cm={readContext:In,use:tc,useCallback:_m,useContext:In,useEffect:Mf,useImperativeHandle:gm,useInsertionEffect:dm,useLayoutEffect:pm,useMemo:vm,useReducer:xf,useRef:um,useState:function(){return xf(xa)},useDebugValue:Tf,useDeferredValue:function(t,n){var a=_n();return Wt===null?bf(a,t,n):Sm(a,Wt.memoizedState,t,n)},useTransition:function(){var t=xf(xa)[0],n=_n().memoizedState;return[typeof t=="boolean"?t:Io(t),n]},useSyncExternalStore:jp,useId:Mm,useHostTransitionStatus:Rf,useFormState:cm,useActionState:cm,useOptimistic:function(t,n){var a=_n();return Wt!==null?em(a,Wt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:vf,useCacheRefresh:Tm};Cm.useEffectEvent=hm;function Lf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Df={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=Si(),u=ja(o);u.payload=n,a!=null&&(u.callback=a),n=Za(t,u,o),n!==null&&(li(n,t,o),No(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=Si(),u=ja(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Za(t,u,o),n!==null&&(li(n,t,o),No(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Si(),o=ja(a);o.tag=2,n!=null&&(o.callback=n),n=Za(t,o,a),n!==null&&(li(n,t,a),No(n,t,a))}};function Lm(t,n,a,o,u,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!bo(a,o)||!bo(u,h):!0}function Dm(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Df.enqueueReplaceState(n,n.state,null)}function Vr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Um(t){Il(t)}function Nm(t){console.error(t)}function Om(t){Il(t)}function sc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Pm(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Uf(t,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){sc(t,n)},a}function zm(t){return t=ja(t),t.tag=3,t}function Im(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){Pm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){Pm(n,a,o),typeof u!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function wx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&vs(n,a,u,!0),a=mi.current,a!==null){switch(a.tag){case 31:case 13:return Ni===null?vc():a.alternate===null&&hn===0&&(hn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Yl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ih(t,o,u)),!1;case 22:return a.flags|=65536,o===Yl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ih(t,o,u)),!1}throw Error(r(435,a.tag))}return ih(t,o,u),vc(),!1}if(wt)return n=mi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Ku&&(t=Error(r(422),{cause:o}),wo(Ci(t,a)))):(o!==Ku&&(n=Error(r(423),{cause:o}),wo(Ci(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=Ci(o,a),u=Uf(t.stateNode,o,u),lf(t,u),hn!==4&&(hn=2)),!1;var h=Error(r(520),{cause:o});if(h=Ci(h,a),Yo===null?Yo=[h]:Yo.push(h),hn!==4&&(hn=2),n===null)return!0;o=Ci(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Uf(a.stateNode,o,t),lf(a,t),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(tr===null||!tr.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=zm(u),Im(u,t,a,o),lf(a,u),!1}a=a.return}while(a!==null);return!1}var Nf=Error(r(461)),En=!1;function Bn(t,n,a,o){n.child=t===null?Gp(n,null,a,o):Gr(n,t.child,a,o)}function Bm(t,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var T in o)T!=="ref"&&(S[T]=o[T])}else S=o;return Ir(n),o=pf(t,n,a,S,h,u),T=mf(),t!==null&&!En?(gf(t,n,u),ya(t,n,u)):(wt&&T&&ju(n),n.flags|=1,Bn(t,n,o,u),n.child)}function Fm(t,n,a,o,u){if(t===null){var h=a.type;return typeof h=="function"&&!Wu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Hm(t,n,h,o,u)):(t=Gl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Gf(t,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(S,o)&&t.ref===n.ref)return ya(t,n,u)}return n.flags|=1,t=ma(h,o),t.ref=n.ref,t.return=n,n.child=t}function Hm(t,n,a,o,u){if(t!==null){var h=t.memoizedProps;if(bo(h,o)&&t.ref===n.ref)if(En=!1,n.pendingProps=o=h,Gf(t,u))(t.flags&131072)!==0&&(En=!0);else return n.lanes=t.lanes,ya(t,n,u)}return Of(t,n,a,o,u)}function Gm(t,n,a,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return km(t,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Wl(n,h!==null?h.cachePool:null),h!==null?Xp(n,h):uf(),Wp(n);else return o=n.lanes=536870912,km(t,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Wl(n,h.cachePool),Xp(n,h),Qa(),n.memoizedState=null):(t!==null&&Wl(n,null),uf(),Qa());return Bn(t,n,u,a),n.child}function Ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function km(t,n,a,o,u){var h=af();return h=h===null?null:{parent:xn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},t!==null&&Wl(n,null),uf(),Wp(n),t!==null&&vs(t,n,o,!0),n.childLanes=u,null}function oc(t,n){return n=cc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Vm(t,n,a){return Gr(n,t.child,null,a),t=oc(n,n.pendingProps),t.flags|=2,gi(n),n.memoizedState=null,t}function Cx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(wt){if(o.mode==="hidden")return t=oc(n,o),n.lanes=536870912,Ho(null,t);if(hf(n),(t=rn)?(t=t_(t,Ui),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:ra,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},a=Ap(t),a.return=n,n.child=a,zn=n,rn=null)):t=null,t===null)throw Wa(n);return n.lanes=536870912,null}return oc(n,o)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(hf(n),u)if(n.flags&256)n.flags&=-257,n=Vm(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(En||vs(t,n,a,!1),u=(a&t.childLanes)!==0,En||u){if(o=$t,o!==null&&(S=fa(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,Nr(t,S),li(o,t,S),Nf;vc(),n=Vm(t,n,a)}else t=h.treeContext,rn=Oi(S.nextSibling),zn=n,wt=!0,Xa=null,Ui=!1,t!==null&&Cp(n,t),n=oc(n,o),n.flags|=4096;return n}return t=ma(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function lc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Of(t,n,a,o,u){return Ir(n),a=pf(t,n,a,o,void 0,u),o=mf(),t!==null&&!En?(gf(t,n,u),ya(t,n,u)):(wt&&o&&ju(n),n.flags|=1,Bn(t,n,a,u),n.child)}function Xm(t,n,a,o,u,h){return Ir(n),n.updateQueue=null,a=Yp(n,o,a,u),qp(t),o=mf(),t!==null&&!En?(gf(t,n,h),ya(t,n,h)):(wt&&o&&ju(n),n.flags|=1,Bn(t,n,a,h),n.child)}function Wm(t,n,a,o,u){if(Ir(n),n.stateNode===null){var h=ps,S=a.contextType;typeof S=="object"&&S!==null&&(h=In(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Df,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},sf(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?In(S):ps,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Lf(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Df.enqueueReplaceState(h,h.state,null),Po(n,o,h,u),Oo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var T=n.memoizedProps,I=Vr(a,T);h.props=I;var ee=h.context,de=a.contextType;S=ps,typeof de=="object"&&de!==null&&(S=In(de));var _e=a.getDerivedStateFromProps;de=typeof _e=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,de||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||ee!==S)&&Dm(n,h,o,S),Ya=!1;var ae=n.memoizedState;h.state=ae,Po(n,o,h,u),Oo(),ee=n.memoizedState,T||ae!==ee||Ya?(typeof _e=="function"&&(Lf(n,a,_e,o),ee=n.memoizedState),(I=Ya||Lm(n,a,I,o,ae,ee,S))?(de||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ee),h.props=o,h.state=ee,h.context=S,o=I):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,of(t,n),S=n.memoizedProps,de=Vr(a,S),h.props=de,_e=n.pendingProps,ae=h.context,ee=a.contextType,I=ps,typeof ee=="object"&&ee!==null&&(I=In(ee)),T=a.getDerivedStateFromProps,(ee=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==_e||ae!==I)&&Dm(n,h,o,I),Ya=!1,ae=n.memoizedState,h.state=ae,Po(n,o,h,u),Oo();var ue=n.memoizedState;S!==_e||ae!==ue||Ya||t!==null&&t.dependencies!==null&&Vl(t.dependencies)?(typeof T=="function"&&(Lf(n,a,T,o),ue=n.memoizedState),(de=Ya||Lm(n,a,de,o,ae,ue,I)||t!==null&&t.dependencies!==null&&Vl(t.dependencies))?(ee||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ue,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ue,I)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ue),h.props=o,h.state=ue,h.context=I,o=de):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&ae===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,lc(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=Gr(n,t.child,null,u),n.child=Gr(n,null,a,u)):Bn(t,n,a,u),n.memoizedState=h.state,t=n.child):t=ya(t,n,u),t}function qm(t,n,a,o){return Pr(),n.flags|=256,Bn(t,n,a,o),n.child}var Pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zf(t){return{baseLanes:t,cachePool:Pp()}}function If(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=vi),t}function Ym(t,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(gn.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(u?Ka(n):Qa(),(t=rn)?(t=t_(t,Ui),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Va!==null?{id:ra,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},a=Ap(t),a.return=n,n.child=a,zn=n,rn=null)):t=null,t===null)throw Wa(n);return Sh(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(Qa(),u=n.mode,T=cc({mode:"hidden",children:T},u),o=Or(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=zf(a),o.childLanes=If(t,S,a),n.memoizedState=Pf,Ho(null,o)):(Ka(n),Bf(n,T))}var I=t.memoizedState;if(I!==null&&(T=I.dehydrated,T!==null)){if(h)n.flags&256?(Ka(n),n.flags&=-257,n=Ff(t,n,a)):n.memoizedState!==null?(Qa(),n.child=t.child,n.flags|=128,n=null):(Qa(),T=o.fallback,u=n.mode,o=cc({mode:"visible",children:o.children},u),T=Or(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,Gr(n,t.child,null,a),o=n.child,o.memoizedState=zf(a),o.childLanes=If(t,S,a),n.memoizedState=Pf,n=Ho(null,o));else if(Ka(n),Sh(T)){if(S=T.nextSibling&&T.nextSibling.dataset,S)var ee=S.dgst;S=ee,o=Error(r(419)),o.stack="",o.digest=S,wo({value:o,source:null,stack:null}),n=Ff(t,n,a)}else if(En||vs(t,n,a,!1),S=(a&t.childLanes)!==0,En||S){if(S=$t,S!==null&&(o=fa(S,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,Nr(t,o),li(S,t,o),Nf;vh(T)||vc(),n=Ff(t,n,a)}else vh(T)?(n.flags|=192,n.child=t.child,n=null):(t=I.treeContext,rn=Oi(T.nextSibling),zn=n,wt=!0,Xa=null,Ui=!1,t!==null&&Cp(n,t),n=Bf(n,o.children),n.flags|=4096);return n}return u?(Qa(),T=o.fallback,u=n.mode,I=t.child,ee=I.sibling,o=ma(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,ee!==null?T=ma(ee,T):(T=Or(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,Ho(null,o),o=n.child,T=t.child.memoizedState,T===null?T=zf(a):(u=T.cachePool,u!==null?(I=xn._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=Pp(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=If(t,S,a),n.memoizedState=Pf,Ho(t.child,o)):(Ka(n),a=t.child,t=a.sibling,a=ma(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=a,n.memoizedState=null,a)}function Bf(t,n){return n=cc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function cc(t,n){return t=pi(22,t,null,n),t.lanes=0,t}function Ff(t,n,a){return Gr(n,t.child,null,a),t=Bf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function jm(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),$u(t.return,n,a)}function Hf(t,n,a,o,u,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=h)}function Zm(t,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var S=gn.current,T=(S&2)!==0;if(T?(S=S&1|2,n.flags|=128):S&=1,k(gn,S),Bn(t,n,o,a),o=wt?Ro:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jm(t,a,n);else if(t.tag===19)jm(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Ql(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Hf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ql(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Hf(n,!0,a,null,h,o);break;case"together":Hf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ya(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),er|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(vs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=ma(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ma(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Gf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Vl(t)))}function Lx(t,n,a){switch(n.tag){case 3:je(n,n.stateNode.containerInfo),qa(n,xn,t.memoizedState.cache),Pr();break;case 27:case 5:tt(n);break;case 4:je(n,n.stateNode.containerInfo);break;case 10:qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,hf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ka(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Ym(t,n,a):(Ka(n),t=ya(t,n,a),t!==null?t.sibling:null);Ka(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(vs(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Zm(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),k(gn,gn.current),o)break;return null;case 22:return n.lanes=0,Gm(t,n,a,n.pendingProps);case 24:qa(n,xn,t.memoizedState.cache)}return ya(t,n,a)}function Km(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)En=!0;else{if(!Gf(t,a)&&(n.flags&128)===0)return En=!1,Lx(t,n,a);En=(t.flags&131072)!==0}else En=!1,wt&&(n.flags&1048576)!==0&&wp(n,Ro,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Fr(n.elementType),n.type=t,typeof t=="function")Wu(t)?(o=Vr(t,o),n.tag=1,n=Wm(null,n,t,o,a)):(n.tag=0,n=Of(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===B){n.tag=11,n=Bm(null,n,t,o,a);break e}else if(u===P){n.tag=14,n=Fm(null,n,t,o,a);break e}}throw n=V(t)||t,Error(r(306,n,""))}}return n;case 0:return Of(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Vr(o,n.pendingProps),Wm(t,n,o,u,a);case 3:e:{if(je(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,of(t,n),Po(n,o,null,a);var S=n.memoizedState;if(o=S.cache,qa(n,xn,o),o!==h.cache&&ef(n,[xn],a,!0),Oo(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=qm(t,n,o,a);break e}else if(o!==u){u=Ci(Error(r(424)),n),wo(u),n=qm(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,rn=Oi(t.firstChild),zn=n,wt=!0,Xa=null,Ui=!0,a=Gp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Pr(),o===u){n=ya(t,n,a);break e}Bn(t,n,o,a)}n=n.child}return n;case 26:return lc(t,n),t===null?(a=o_(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,o=bc(be.current).createElement(a),o[cn]=n,o[un]=t,Fn(o,a,t),Ye(o),n.stateNode=o):n.memoizedState=o_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&wt&&(o=n.stateNode=a_(n.type,n.pendingProps,be.current),zn=n,Ui=!0,u=rn,rr(n.type)?(xh=u,rn=Oi(o.firstChild)):rn=u),Bn(t,n,n.pendingProps.children,a),lc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((u=o=rn)&&(o=sy(o,n.type,n.pendingProps,Ui),o!==null?(n.stateNode=o,zn=n,rn=Oi(o.firstChild),Ui=!1,u=!0):u=!1),u||Wa(n)),tt(n),u=n.type,h=n.pendingProps,S=t!==null?t.memoizedProps:null,o=h.children,mh(u,h)?o=null:S!==null&&mh(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=pf(t,n,yx,null,null,a),tl._currentValue=u),lc(t,n),Bn(t,n,o,a),n.child;case 6:return t===null&&wt&&((t=a=rn)&&(a=oy(a,n.pendingProps,Ui),a!==null?(n.stateNode=a,zn=n,rn=null,t=!0):t=!1),t||Wa(n)),null;case 13:return Ym(t,n,a);case 4:return je(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Gr(n,null,o,a):Bn(t,n,o,a),n.child;case 11:return Bm(t,n,n.type,n.pendingProps,a);case 7:return Bn(t,n,n.pendingProps,a),n.child;case 8:return Bn(t,n,n.pendingProps.children,a),n.child;case 12:return Bn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,qa(n,n.type,o.value),Bn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,Ir(n),u=In(u),o=o(u),n.flags|=1,Bn(t,n,o,a),n.child;case 14:return Fm(t,n,n.type,n.pendingProps,a);case 15:return Hm(t,n,n.type,n.pendingProps,a);case 19:return Zm(t,n,a);case 31:return Cx(t,n,a);case 22:return Gm(t,n,a,n.pendingProps);case 24:return Ir(n),o=In(xn),t===null?(u=af(),u===null&&(u=$t,h=tf(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},sf(n),qa(n,xn,u)):((t.lanes&a)!==0&&(of(t,n),Po(n,null,null,a),Oo()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),qa(n,xn,o)):(o=h.cache,qa(n,xn,o),o!==u.cache&&ef(n,[xn],a,!0))),Bn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ea(t){t.flags|=4}function kf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Mg())t.flags|=8192;else throw Hr=Yl,rf}else t.flags&=-16777217}function Qm(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!h_(n))if(Mg())t.flags|=8192;else throw Hr=Yl,rf}function uc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Dt():536870912,t.lanes|=n,Ls|=n)}function Go(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function sn(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Dx(t,n,a){var o=n.pendingProps;switch(Zu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return sn(n),null;case 1:return sn(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),va(xn),ke(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(_s(n)?Ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qu())),sn(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(Ea(n),h!==null?(sn(n),Qm(n,h)):(sn(n),kf(n,u,null,o,a))):h?h!==t.memoizedState?(Ea(n),sn(n),Qm(n,h)):(sn(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ea(n),sn(n),kf(n,u,t,o,a)),null;case 27:if(_t(n),a=be.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ea(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return sn(n),null}t=X.current,_s(n)?Lp(n):(t=a_(u,o,a),n.stateNode=t,Ea(n))}return sn(n),null;case 5:if(_t(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ea(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return sn(n),null}if(h=X.current,_s(n))Lp(n);else{var S=bc(be.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}h[cn]=n,h[un]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;e:switch(Fn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ea(n)}}return sn(n),kf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=be.current,_s(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=zn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Yg(t.nodeValue,a)),t||Wa(n,!0)}else t=bc(t).createTextNode(o),t[cn]=n,n.stateNode=t}return sn(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=_s(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[cn]=n}else Pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;sn(n),t=!1}else a=Qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(gi(n),n):(gi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return sn(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=_s(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else Pr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;sn(n),u=!1}else u=Qu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(gi(n),n):(gi(n),null)}return gi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),uc(n,n.updateQueue),sn(n),null);case 4:return ke(),t===null&&uh(n.stateNode.containerInfo),sn(n),null;case 10:return va(n.type),sn(n),null;case 19:if(Y(gn),o=n.memoizedState,o===null)return sn(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Go(o,!1);else{if(hn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Ql(t),h!==null){for(n.flags|=128,Go(o,!1),t=h.updateQueue,n.updateQueue=t,uc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)bp(a,t),a=a.sibling;return k(gn,gn.current&1|2),wt&&ga(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&Se()>mc&&(n.flags|=128,u=!0,Go(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ql(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,uc(n,t),Go(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!wt)return sn(n),null}else 2*Se()-o.renderingStartTime>mc&&a!==536870912&&(n.flags|=128,u=!0,Go(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Se(),t.sibling=null,a=gn.current,k(gn,u?a&1|2:a&1),wt&&ga(n,o.treeForkCount),t):(sn(n),null);case 22:case 23:return gi(n),ff(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(sn(n),n.subtreeFlags&6&&(n.flags|=8192)):sn(n),a=n.updateQueue,a!==null&&uc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&Y(Br),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),va(xn),sn(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ux(t,n){switch(Zu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return va(xn),ke(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return _t(n),null;case 31:if(n.memoizedState!==null){if(gi(n),n.alternate===null)throw Error(r(340));Pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(gi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Pr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Y(gn),null;case 4:return ke(),null;case 10:return va(n.type),null;case 22:case 23:return gi(n),ff(),t!==null&&Y(Br),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return va(xn),null;case 25:return null;default:return null}}function Jm(t,n){switch(Zu(n),n.tag){case 3:va(xn),ke();break;case 26:case 27:case 5:_t(n);break;case 4:ke();break;case 31:n.memoizedState!==null&&gi(n);break;case 13:gi(n);break;case 19:Y(gn);break;case 10:va(n.type);break;case 22:case 23:gi(n),ff(),t!==null&&Y(Br);break;case 24:va(xn)}}function ko(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(T){Gt(n,n.return,T)}}function Ja(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var S=o.inst,T=S.destroy;if(T!==void 0){S.destroy=void 0,u=n;var I=a,ee=T;try{ee()}catch(de){Gt(u,I,de)}}}o=o.next}while(o!==h)}}catch(de){Gt(n,n.return,de)}}function $m(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Vp(n,a)}catch(o){Gt(t,t.return,o)}}}function eg(t,n,a){a.props=Vr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Gt(t,n,o)}}function Vo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Gt(t,n,u)}}function oa(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Gt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Gt(t,n,u)}else a.current=null}function tg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Gt(t,t.return,u)}}function Vf(t,n,a){try{var o=t.stateNode;ey(o,t.type,a,n),o[un]=n}catch(u){Gt(t,t.return,u)}}function ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&rr(t.type)||t.tag===4}function Xf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&rr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=W));else if(o!==4&&(o===27&&rr(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Wf(t,n,a),t=t.sibling;t!==null;)Wf(t,n,a),t=t.sibling}function fc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&rr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(fc(t,n,a),t=t.sibling;t!==null;)fc(t,n,a),t=t.sibling}function ig(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Fn(n,o,a),n[cn]=t,n[un]=a}catch(h){Gt(t,t.return,h)}}var Ma=!1,Mn=!1,qf=!1,ag=typeof WeakSet=="function"?WeakSet:Set,Un=null;function Nx(t,n){if(t=t.containerInfo,dh=Uc,t=gp(t),Bu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var S=0,T=-1,I=-1,ee=0,de=0,_e=t,ae=null;t:for(;;){for(var ue;_e!==a||u!==0&&_e.nodeType!==3||(T=S+u),_e!==h||o!==0&&_e.nodeType!==3||(I=S+o),_e.nodeType===3&&(S+=_e.nodeValue.length),(ue=_e.firstChild)!==null;)ae=_e,_e=ue;for(;;){if(_e===t)break t;if(ae===a&&++ee===u&&(T=S),ae===h&&++de===o&&(I=S),(ue=_e.nextSibling)!==null)break;_e=ae,ae=_e.parentNode}_e=ue}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(ph={focusedElem:t,selectionRange:a},Uc=!1,Un=n;Un!==null;)if(n=Un,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Un=t;else for(;Un!==null;){switch(n=Un,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Ge=Vr(a.type,u);t=o.getSnapshotBeforeUpdate(Ge,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(st){Gt(a,a.return,st)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)_h(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":_h(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Un=t;break}Un=n.return}}function rg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ba(t,a),o&4&&ko(5,a);break;case 1:if(ba(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(S){Gt(a,a.return,S)}else{var u=Vr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Gt(a,a.return,S)}}o&64&&$m(a),o&512&&Vo(a,a.return);break;case 3:if(ba(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Vp(t,n)}catch(S){Gt(a,a.return,S)}}break;case 27:n===null&&o&4&&ig(a);case 26:case 5:ba(t,a),n===null&&o&4&&tg(a),o&512&&Vo(a,a.return);break;case 12:ba(t,a);break;case 31:ba(t,a),o&4&&lg(t,a);break;case 13:ba(t,a),o&4&&cg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=kx.bind(null,a),ly(t,a))));break;case 22:if(o=a.memoizedState!==null||Ma,!o){n=n!==null&&n.memoizedState!==null||Mn,u=Ma;var h=Mn;Ma=o,(Mn=n)&&!h?Aa(t,a,(a.subtreeFlags&8772)!==0):ba(t,a),Ma=u,Mn=h}break;case 30:break;default:ba(t,a)}}function sg(t){var n=t.alternate;n!==null&&(t.alternate=null,sg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&re(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ln=null,ai=!1;function Ta(t,n,a){for(a=a.child;a!==null;)og(t,n,a),a=a.sibling}function og(t,n,a){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 26:Mn||oa(a,n),Ta(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Mn||oa(a,n);var o=ln,u=ai;rr(a.type)&&(ln=a.stateNode,ai=!1),Ta(t,n,a),Jo(a.stateNode),ln=o,ai=u;break;case 5:Mn||oa(a,n);case 6:if(o=ln,u=ai,ln=null,Ta(t,n,a),ln=o,ai=u,ln!==null)if(ai)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(a.stateNode)}catch(h){Gt(a,n,h)}else try{ln.removeChild(a.stateNode)}catch(h){Gt(a,n,h)}break;case 18:ln!==null&&(ai?(t=ln,$g(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Bs(t)):$g(ln,a.stateNode));break;case 4:o=ln,u=ai,ln=a.stateNode.containerInfo,ai=!0,Ta(t,n,a),ln=o,ai=u;break;case 0:case 11:case 14:case 15:Ja(2,a,n),Mn||Ja(4,a,n),Ta(t,n,a);break;case 1:Mn||(oa(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&eg(a,n,o)),Ta(t,n,a);break;case 21:Ta(t,n,a);break;case 22:Mn=(o=Mn)||a.memoizedState!==null,Ta(t,n,a),Mn=o;break;default:Ta(t,n,a)}}function lg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Bs(t)}catch(a){Gt(n,n.return,a)}}}function cg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Bs(t)}catch(a){Gt(n,n.return,a)}}function Ox(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new ag),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new ag),n;default:throw Error(r(435,t.tag))}}function hc(t,n){var a=Ox(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Vx.bind(null,t,o);o.then(u,u)}})}function ri(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=t,S=n,T=S;e:for(;T!==null;){switch(T.tag){case 27:if(rr(T.type)){ln=T.stateNode,ai=!1;break e}break;case 5:ln=T.stateNode,ai=!1;break e;case 3:case 4:ln=T.stateNode.containerInfo,ai=!0;break e}T=T.return}if(ln===null)throw Error(r(160));og(h,S,u),ln=null,ai=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ug(n,t),n=n.sibling}var Vi=null;function ug(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ri(n,t),si(t),o&4&&(Ja(3,t,t.return),ko(3,t),Ja(5,t,t.return));break;case 1:ri(n,t),si(t),o&512&&(Mn||a===null||oa(a,a.return)),o&64&&Ma&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Vi;if(ri(n,t),si(t),o&512&&(Mn||a===null||oa(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ce]||h[cn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Fn(h,o,a),h[cn]=t,Ye(h),o=h;break e;case"link":var S=u_("link","href",u).get(o+(a.href||""));if(S){for(var T=0;T<S.length;T++)if(h=S[T],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(T,1);break t}}h=u.createElement(o),Fn(h,o,a),u.head.appendChild(h);break;case"meta":if(S=u_("meta","content",u).get(o+(a.content||""))){for(T=0;T<S.length;T++)if(h=S[T],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(T,1);break t}}h=u.createElement(o),Fn(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[cn]=t,Ye(h),o=h}t.stateNode=o}else f_(u,t.type,t.stateNode);else t.stateNode=c_(u,o,t.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?f_(u,t.type,t.stateNode):c_(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Vf(t,t.memoizedProps,a.memoizedProps)}break;case 27:ri(n,t),si(t),o&512&&(Mn||a===null||oa(a,a.return)),a!==null&&o&4&&Vf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ri(n,t),si(t),o&512&&(Mn||a===null||oa(a,a.return)),t.flags&32){u=t.stateNode;try{pa(u,"")}catch(Ge){Gt(t,t.return,Ge)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Vf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(qf=!0);break;case 6:if(ri(n,t),si(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(Ge){Gt(t,t.return,Ge)}}break;case 3:if(wc=null,u=Vi,Vi=Ac(n.containerInfo),ri(n,t),Vi=u,si(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Bs(n.containerInfo)}catch(Ge){Gt(t,t.return,Ge)}qf&&(qf=!1,fg(t));break;case 4:o=Vi,Vi=Ac(t.stateNode.containerInfo),ri(n,t),si(t),Vi=o;break;case 12:ri(n,t),si(t);break;case 31:ri(n,t),si(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 13:ri(n,t),si(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pc=Se()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 22:u=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,ee=Ma,de=Mn;if(Ma=ee||u,Mn=de||I,ri(n,t),Mn=de,Ma=ee,si(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Ma||Mn||Xr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(h=I.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{T=I.stateNode;var _e=I.memoizedProps.style,ae=_e!=null&&_e.hasOwnProperty("display")?_e.display:null;T.style.display=ae==null||typeof ae=="boolean"?"":(""+ae).trim()}}catch(Ge){Gt(I,I.return,Ge)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Ge){Gt(I,I.return,Ge)}}}else if(n.tag===18){if(a===null){I=n;try{var ue=I.stateNode;u?e_(ue,!0):e_(I.stateNode,!1)}catch(Ge){Gt(I,I.return,Ge)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,hc(t,a))));break;case 19:ri(n,t),si(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,hc(t,o)));break;case 30:break;case 21:break;default:ri(n,t),si(t)}}function si(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(ng(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=Xf(t);fc(t,h,u);break;case 5:var S=a.stateNode;a.flags&32&&(pa(S,""),a.flags&=-33);var T=Xf(t);fc(t,T,S);break;case 3:case 4:var I=a.stateNode.containerInfo,ee=Xf(t);Wf(t,ee,I);break;default:throw Error(r(161))}}catch(de){Gt(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function fg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;fg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ba(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)rg(t,n.alternate,n),n=n.sibling}function Xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ja(4,n,n.return),Xr(n);break;case 1:oa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&eg(n,n.return,a),Xr(n);break;case 27:Jo(n.stateNode);case 26:case 5:oa(n,n.return),Xr(n);break;case 22:n.memoizedState===null&&Xr(n);break;case 30:Xr(n);break;default:Xr(n)}t=t.sibling}}function Aa(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:Aa(u,h,a),ko(4,h);break;case 1:if(Aa(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ee){Gt(o,o.return,ee)}if(o=h,u=o.updateQueue,u!==null){var T=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)kp(I[u],T)}catch(ee){Gt(o,o.return,ee)}}a&&S&64&&$m(h),Vo(h,h.return);break;case 27:ig(h);case 26:case 5:Aa(u,h,a),a&&o===null&&S&4&&tg(h),Vo(h,h.return);break;case 12:Aa(u,h,a);break;case 31:Aa(u,h,a),a&&S&4&&lg(u,h);break;case 13:Aa(u,h,a),a&&S&4&&cg(u,h);break;case 22:h.memoizedState===null&&Aa(u,h,a),Vo(h,h.return);break;case 30:break;default:Aa(u,h,a)}n=n.sibling}}function Yf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Co(a))}function jf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Co(t))}function Xi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)hg(t,n,a,o),n=n.sibling}function hg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Xi(t,n,a,o),u&2048&&ko(9,n);break;case 1:Xi(t,n,a,o);break;case 3:Xi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Co(t)));break;case 12:if(u&2048){Xi(t,n,a,o),t=n.stateNode;try{var h=n.memoizedProps,S=h.id,T=h.onPostCommit;typeof T=="function"&&T(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Gt(n,n.return,I)}}else Xi(t,n,a,o);break;case 31:Xi(t,n,a,o);break;case 13:Xi(t,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?Xi(t,n,a,o):Xo(t,n):h._visibility&2?Xi(t,n,a,o):(h._visibility|=2,Rs(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Yf(S,n);break;case 24:Xi(t,n,a,o),u&2048&&jf(n.alternate,n);break;default:Xi(t,n,a,o)}}function Rs(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,S=n,T=a,I=o,ee=S.flags;switch(S.tag){case 0:case 11:case 15:Rs(h,S,T,I,u),ko(8,S);break;case 23:break;case 22:var de=S.stateNode;S.memoizedState!==null?de._visibility&2?Rs(h,S,T,I,u):Xo(h,S):(de._visibility|=2,Rs(h,S,T,I,u)),u&&ee&2048&&Yf(S.alternate,S);break;case 24:Rs(h,S,T,I,u),u&&ee&2048&&jf(S.alternate,S);break;default:Rs(h,S,T,I,u)}n=n.sibling}}function Xo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Xo(a,o),u&2048&&Yf(o.alternate,o);break;case 24:Xo(a,o),u&2048&&jf(o.alternate,o);break;default:Xo(a,o)}n=n.sibling}}var Wo=8192;function ws(t,n,a){if(t.subtreeFlags&Wo)for(t=t.child;t!==null;)dg(t,n,a),t=t.sibling}function dg(t,n,a){switch(t.tag){case 26:ws(t,n,a),t.flags&Wo&&t.memoizedState!==null&&xy(a,Vi,t.memoizedState,t.memoizedProps);break;case 5:ws(t,n,a);break;case 3:case 4:var o=Vi;Vi=Ac(t.stateNode.containerInfo),ws(t,n,a),Vi=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Wo,Wo=16777216,ws(t,n,a),Wo=o):ws(t,n,a));break;default:ws(t,n,a)}}function pg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function qo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Un=o,gg(o,t)}pg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)mg(t),t=t.sibling}function mg(t){switch(t.tag){case 0:case 11:case 15:qo(t),t.flags&2048&&Ja(9,t,t.return);break;case 3:qo(t);break;case 12:qo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,dc(t)):qo(t);break;default:qo(t)}}function dc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Un=o,gg(o,t)}pg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ja(8,n,n.return),dc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,dc(n));break;default:dc(n)}t=t.sibling}}function gg(t,n){for(;Un!==null;){var a=Un;switch(a.tag){case 0:case 11:case 15:Ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Co(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Un=o;else e:for(a=t;Un!==null;){o=Un;var u=o.sibling,h=o.return;if(sg(o),o===a){Un=null;break e}if(u!==null){u.return=h,Un=u;break e}Un=h}}}var Px={getCacheForType:function(t){var n=In(xn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return In(xn).controller.signal}},zx=typeof WeakMap=="function"?WeakMap:Map,It=0,$t=null,Mt=null,bt=0,Ht=0,_i=null,$a=!1,Cs=!1,Zf=!1,Ra=0,hn=0,er=0,Wr=0,Kf=0,vi=0,Ls=0,Yo=null,oi=null,Qf=!1,pc=0,_g=0,mc=1/0,gc=null,tr=null,wn=0,nr=null,Ds=null,wa=0,Jf=0,$f=null,vg=null,jo=0,eh=null;function Si(){return(It&2)!==0&&bt!==0?bt&-bt:z.T!==null?sh():ha()}function Sg(){if(vi===0)if((bt&536870912)===0||wt){var t=H;H<<=1,(H&3932160)===0&&(H=262144),vi=t}else vi=536870912;return t=mi.current,t!==null&&(t.flags|=32),vi}function li(t,n,a){(t===$t&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)&&(Us(t,0),ir(t,bt,vi,!1)),en(t,a),((It&2)===0||t!==$t)&&(t===$t&&((It&2)===0&&(Wr|=a),hn===4&&ir(t,bt,vi,!1)),la(t))}function xg(t,n,a){if((It&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ze(t,n),u=o?Fx(t,n):nh(t,n,!0),h=o;do{if(u===0){Cs&&!o&&ir(t,n,0,!1);break}else{if(a=t.current.alternate,h&&!Ix(a)){u=nh(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var T=t;u=Yo;var I=T.current.memoizedState.isDehydrated;if(I&&(Us(T,S).flags|=256),S=nh(T,S,!1),S!==2){if(Zf&&!I){T.errorRecoveryDisabledLanes|=h,Wr|=h,u=4;break e}h=oi,oi=u,h!==null&&(oi===null?oi=h:oi.push.apply(oi,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){Us(t,0),ir(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ir(o,n,vi,!$a);break e;case 2:oi=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=pc+300-Se(),10<u)){if(ir(o,n,vi,!$a),nt(o,0,!0)!==0)break e;wa=n,o.timeoutHandle=Qg(yg.bind(null,o,a,oi,gc,Qf,n,vi,Wr,Ls,$a,h,"Throttled",-0,0),u);break e}yg(o,a,oi,gc,Qf,n,vi,Wr,Ls,$a,h,null,-0,0)}}break}while(!0);la(t)}function yg(t,n,a,o,u,h,S,T,I,ee,de,_e,ae,ue){if(t.timeoutHandle=-1,_e=n.subtreeFlags,_e&8192||(_e&16785408)===16785408){_e={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:W},dg(n,h,_e);var Ge=(h&62914560)===h?pc-Se():(h&4194048)===h?_g-Se():0;if(Ge=yy(_e,Ge),Ge!==null){wa=h,t.cancelPendingCommit=Ge(Cg.bind(null,t,n,h,a,o,u,S,T,I,de,_e,null,ae,ue)),ir(t,h,S,!ee);return}}Cg(t,n,h,a,o,u,S,T,I)}function Ix(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!di(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ir(t,n,a,o){n&=~Kf,n&=~Wr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Ke(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&nn(t,a,n)}function _c(){return(It&6)===0?(Zo(0),!1):!0}function th(){if(Mt!==null){if(Ht===0)var t=Mt.return;else t=Mt,_a=zr=null,_f(t),Es=null,Do=0,t=Mt;for(;t!==null;)Jm(t.alternate,t),t=t.return;Mt=null}}function Us(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,iy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),wa=0,th(),$t=t,Mt=a=ma(t.current,null),bt=n,Ht=0,_i=null,$a=!1,Cs=Ze(t,n),Zf=!1,Ls=vi=Kf=Wr=er=hn=0,oi=Yo=null,Qf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ke(o),h=1<<u;n|=t[u],o&=~h}return Ra=n,Bl(),a}function Eg(t,n){mt=null,z.H=Fo,n===ys||n===ql?(n=Bp(),Ht=3):n===rf?(n=Bp(),Ht=4):Ht=n===Nf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,_i=n,Mt===null&&(hn=1,sc(t,Ci(n,t.current)))}function Mg(){var t=mi.current;return t===null?!0:(bt&4194048)===bt?Ni===null:(bt&62914560)===bt||(bt&536870912)!==0?t===Ni:!1}function Tg(){var t=z.H;return z.H=Fo,t===null?Fo:t}function bg(){var t=z.A;return z.A=Px,t}function vc(){hn=4,$a||(bt&4194048)!==bt&&mi.current!==null||(Cs=!0),(er&134217727)===0&&(Wr&134217727)===0||$t===null||ir($t,bt,vi,!1)}function nh(t,n,a){var o=It;It|=2;var u=Tg(),h=bg();($t!==t||bt!==n)&&(gc=null,Us(t,n)),n=!1;var S=hn;e:do try{if(Ht!==0&&Mt!==null){var T=Mt,I=_i;switch(Ht){case 8:th(),S=6;break e;case 3:case 2:case 9:case 6:mi.current===null&&(n=!0);var ee=Ht;if(Ht=0,_i=null,Ns(t,T,I,ee),a&&Cs){S=0;break e}break;default:ee=Ht,Ht=0,_i=null,Ns(t,T,I,ee)}}Bx(),S=hn;break}catch(de){Eg(t,de)}while(!0);return n&&t.shellSuspendCounter++,_a=zr=null,It=o,z.H=u,z.A=h,Mt===null&&($t=null,bt=0,Bl()),S}function Bx(){for(;Mt!==null;)Ag(Mt)}function Fx(t,n){var a=It;It|=2;var o=Tg(),u=bg();$t!==t||bt!==n?(gc=null,mc=Se()+500,Us(t,n)):Cs=Ze(t,n);e:do try{if(Ht!==0&&Mt!==null){n=Mt;var h=_i;t:switch(Ht){case 1:Ht=0,_i=null,Ns(t,n,h,1);break;case 2:case 9:if(zp(h)){Ht=0,_i=null,Rg(n);break}n=function(){Ht!==2&&Ht!==9||$t!==t||(Ht=7),la(t)},h.then(n,n);break e;case 3:Ht=7;break e;case 4:Ht=5;break e;case 7:zp(h)?(Ht=0,_i=null,Rg(n)):(Ht=0,_i=null,Ns(t,n,h,7));break;case 5:var S=null;switch(Mt.tag){case 26:S=Mt.memoizedState;case 5:case 27:var T=Mt;if(S?h_(S):T.stateNode.complete){Ht=0,_i=null;var I=T.sibling;if(I!==null)Mt=I;else{var ee=T.return;ee!==null?(Mt=ee,Sc(ee)):Mt=null}break t}}Ht=0,_i=null,Ns(t,n,h,5);break;case 6:Ht=0,_i=null,Ns(t,n,h,6);break;case 8:th(),hn=6;break e;default:throw Error(r(462))}}Hx();break}catch(de){Eg(t,de)}while(!0);return _a=zr=null,z.H=o,z.A=u,It=a,Mt!==null?0:($t=null,bt=0,Bl(),hn)}function Hx(){for(;Mt!==null&&!Me();)Ag(Mt)}function Ag(t){var n=Km(t.alternate,t,Ra);t.memoizedProps=t.pendingProps,n===null?Sc(t):Mt=n}function Rg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Xm(a,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=Xm(a,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:_f(n);default:Jm(a,n),n=Mt=bp(n,Ra),n=Km(a,n,Ra)}t.memoizedProps=t.pendingProps,n===null?Sc(t):Mt=n}function Ns(t,n,a,o){_a=zr=null,_f(n),Es=null,Do=0;var u=n.return;try{if(wx(t,u,n,a,bt)){hn=1,sc(t,Ci(a,t.current)),Mt=null;return}}catch(h){if(u!==null)throw Mt=u,h;hn=1,sc(t,Ci(a,t.current)),Mt=null;return}n.flags&32768?(wt||o===1?t=!0:Cs||(bt&536870912)!==0?t=!1:($a=t=!0,(o===2||o===9||o===3||o===6)&&(o=mi.current,o!==null&&o.tag===13&&(o.flags|=16384))),wg(n,t)):Sc(n)}function Sc(t){var n=t;do{if((n.flags&32768)!==0){wg(n,$a);return}t=n.return;var a=Dx(n.alternate,n,Ra);if(a!==null){Mt=a;return}if(n=n.sibling,n!==null){Mt=n;return}Mt=n=t}while(n!==null);hn===0&&(hn=5)}function wg(t,n){do{var a=Ux(t.alternate,t);if(a!==null){a.flags&=32767,Mt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=a}while(t!==null);hn=6,Mt=null}function Cg(t,n,a,o,u,h,S,T,I){t.cancelPendingCommit=null;do xc();while(wn!==0);if((It&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=Vu,xt(t,a,h,S,T,I),t===$t&&(Mt=$t=null,bt=0),Ds=n,nr=t,wa=a,Jf=h,$f=u,vg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Xx(qe,function(){return Og(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=Z.p,Z.p=2,S=It,It|=4;try{Nx(t,n,a)}finally{It=S,Z.p=u,z.T=o}}wn=1,Lg(),Dg(),Ug()}}function Lg(){if(wn===1){wn=0;var t=nr,n=Ds,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=Z.p;Z.p=2;var u=It;It|=4;try{ug(n,t);var h=ph,S=gp(t.containerInfo),T=h.focusedElem,I=h.selectionRange;if(S!==T&&T&&T.ownerDocument&&mp(T.ownerDocument.documentElement,T)){if(I!==null&&Bu(T)){var ee=I.start,de=I.end;if(de===void 0&&(de=ee),"selectionStart"in T)T.selectionStart=ee,T.selectionEnd=Math.min(de,T.value.length);else{var _e=T.ownerDocument||document,ae=_e&&_e.defaultView||window;if(ae.getSelection){var ue=ae.getSelection(),Ge=T.textContent.length,st=Math.min(I.start,Ge),Yt=I.end===void 0?st:Math.min(I.end,Ge);!ue.extend&&st>Yt&&(S=Yt,Yt=st,st=S);var j=pp(T,st),G=pp(T,Yt);if(j&&G&&(ue.rangeCount!==1||ue.anchorNode!==j.node||ue.anchorOffset!==j.offset||ue.focusNode!==G.node||ue.focusOffset!==G.offset)){var $=_e.createRange();$.setStart(j.node,j.offset),ue.removeAllRanges(),st>Yt?(ue.addRange($),ue.extend(G.node,G.offset)):($.setEnd(G.node,G.offset),ue.addRange($))}}}}for(_e=[],ue=T;ue=ue.parentNode;)ue.nodeType===1&&_e.push({element:ue,left:ue.scrollLeft,top:ue.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_e.length;T++){var ge=_e[T];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Uc=!!dh,ph=dh=null}finally{It=u,Z.p=o,z.T=a}}t.current=n,wn=2}}function Dg(){if(wn===2){wn=0;var t=nr,n=Ds,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=Z.p;Z.p=2;var u=It;It|=4;try{rg(t,n.alternate,n)}finally{It=u,Z.p=o,z.T=a}}wn=3}}function Ug(){if(wn===4||wn===3){wn=0,Ee();var t=nr,n=Ds,a=wa,o=vg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?wn=5:(wn=0,Ds=nr=null,Ng(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(tr=null),Hi(a),n=n.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=Z.p,Z.p=2,z.T=null;try{for(var h=t.onRecoverableError,S=0;S<o.length;S++){var T=o[S];h(T.value,{componentStack:T.stack})}}finally{z.T=n,Z.p=u}}(wa&3)!==0&&xc(),la(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===eh?jo++:(jo=0,eh=t):jo=0,Zo(0)}}function Ng(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Co(n)))}function xc(){return Lg(),Dg(),Ug(),Og()}function Og(){if(wn!==5)return!1;var t=nr,n=Jf;Jf=0;var a=Hi(wa),o=z.T,u=Z.p;try{Z.p=32>a?32:a,z.T=null,a=$f,$f=null;var h=nr,S=wa;if(wn=0,Ds=nr=null,wa=0,(It&6)!==0)throw Error(r(331));var T=It;if(It|=4,mg(h.current),hg(h,h.current,S,a),It=T,Zo(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(Je,h)}catch{}return!0}finally{Z.p=u,z.T=o,Ng(t,n)}}function Pg(t,n,a){n=Ci(a,n),n=Uf(t.stateNode,n,2),t=Za(t,n,2),t!==null&&(en(t,2),la(t))}function Gt(t,n,a){if(t.tag===3)Pg(t,t,a);else for(;n!==null;){if(n.tag===3){Pg(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(tr===null||!tr.has(o))){t=Ci(a,t),a=zm(2),o=Za(n,a,2),o!==null&&(Im(a,o,n,t),en(o,2),la(o));break}}n=n.return}}function ih(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new zx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Zf=!0,u.add(a),t=Gx.bind(null,t,n,a),n.then(t,t))}function Gx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,$t===t&&(bt&a)===a&&(hn===4||hn===3&&(bt&62914560)===bt&&300>Se()-pc?(It&2)===0&&Us(t,0):Kf|=a,Ls===bt&&(Ls=0)),la(t)}function zg(t,n){n===0&&(n=Dt()),t=Nr(t,n),t!==null&&(en(t,n),la(t))}function kx(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),zg(t,a)}function Vx(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),zg(t,a)}function Xx(t,n){return R(t,n)}var yc=null,Os=null,ah=!1,Ec=!1,rh=!1,ar=0;function la(t){t!==Os&&t.next===null&&(Os===null?yc=Os=t:Os=Os.next=t),Ec=!0,ah||(ah=!0,qx())}function Zo(t,n){if(!rh&&Ec){rh=!0;do for(var a=!1,o=yc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,T=o.pingedLanes;h=(1<<31-Ke(42|t)+1)-1,h&=u&~(S&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Hg(o,h))}else h=bt,h=nt(o,o===$t?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ze(o,h)||(a=!0,Hg(o,h));o=o.next}while(a);rh=!1}}function Wx(){Ig()}function Ig(){Ec=ah=!1;var t=0;ar!==0&&ny()&&(t=ar);for(var n=Se(),a=null,o=yc;o!==null;){var u=o.next,h=Bg(o,n);h===0?(o.next=null,a===null?yc=u:a.next=u,u===null&&(Os=a)):(a=o,(t!==0||(h&3)!==0)&&(Ec=!0)),o=u}wn!==0&&wn!==5||Zo(t),ar!==0&&(ar=0)}function Bg(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-Ke(h),T=1<<S,I=u[S];I===-1?((T&a)===0||(T&o)!==0)&&(u[S]=Pt(T,n)):I<=n&&(t.expiredLanes|=T),h&=~T}if(n=$t,a=bt,a=nt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Ht===2||Ht===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&ie(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ze(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&ie(o),Hi(a)){case 2:case 8:a=Be;break;case 32:a=qe;break;case 268435456:a=ye;break;default:a=qe}return o=Fg.bind(null,t),a=R(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&ie(o),t.callbackPriority=2,t.callbackNode=null,2}function Fg(t,n){if(wn!==0&&wn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(xc()&&t.callbackNode!==a)return null;var o=bt;return o=nt(t,t===$t?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(xg(t,o,n),Bg(t,Se()),t.callbackNode!=null&&t.callbackNode===a?Fg.bind(null,t):null)}function Hg(t,n){if(xc())return null;xg(t,n,!0)}function qx(){ay(function(){(It&6)!==0?R(Ne,Wx):Ig()})}function sh(){if(ar===0){var t=Ss;t===0&&(t=we,we<<=1,(we&261888)===0&&(we=256)),ar=t}return ar}function Gg(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:L(""+t)}function kg(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Yx(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=Gg((u[un]||null).action),S=o.submitter;S&&(n=(n=S[un]||null)?Gg(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var T=new Ol("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ar!==0){var I=S?kg(u,S):new FormData(u);Af(a,{pending:!0,data:I,method:u.method,action:h},null,I)}}else typeof h=="function"&&(T.preventDefault(),I=S?kg(u,S):new FormData(u),Af(a,{pending:!0,data:I,method:u.method,action:h},h,I))},currentTarget:u}]})}}for(var oh=0;oh<ku.length;oh++){var lh=ku[oh],jx=lh.toLowerCase(),Zx=lh[0].toUpperCase()+lh.slice(1);ki(jx,"on"+Zx)}ki(Sp,"onAnimationEnd"),ki(xp,"onAnimationIteration"),ki(yp,"onAnimationStart"),ki("dblclick","onDoubleClick"),ki("focusin","onFocus"),ki("focusout","onBlur"),ki(fx,"onTransitionRun"),ki(hx,"onTransitionStart"),ki(dx,"onTransitionCancel"),ki(Ep,"onTransitionEnd"),an("onMouseEnter",["mouseout","mouseover"]),an("onMouseLeave",["mouseout","mouseover"]),an("onPointerEnter",["pointerout","pointerover"]),an("onPointerLeave",["pointerout","pointerover"]),Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function Vg(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var T=o[S],I=T.instance,ee=T.currentTarget;if(T=T.listener,I!==h&&u.isPropagationStopped())break e;h=T,u.currentTarget=ee;try{h(u)}catch(de){Il(de)}u.currentTarget=null,h=I}else for(S=0;S<o.length;S++){if(T=o[S],I=T.instance,ee=T.currentTarget,T=T.listener,I!==h&&u.isPropagationStopped())break e;h=T,u.currentTarget=ee;try{h(u)}catch(de){Il(de)}u.currentTarget=null,h=I}}}}function Tt(t,n){var a=n[Rr];a===void 0&&(a=n[Rr]=new Set);var o=t+"__bubble";a.has(o)||(Xg(n,t,2,!1),a.add(o))}function ch(t,n,a){var o=0;n&&(o|=4),Xg(a,t,o,n)}var Mc="_reactListening"+Math.random().toString(36).slice(2);function uh(t){if(!t[Mc]){t[Mc]=!0,lt.forEach(function(a){a!=="selectionchange"&&(Kx.has(a)||ch(a,!1,t),ch(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Mc]||(n[Mc]=!0,ch("selectionchange",!1,n))}}function Xg(t,n,a,o){switch(S_(n)){case 2:var u=Ty;break;case 8:u=by;break;default:u=bh}a=u.bind(null,n,a,t),u=void 0,!Cr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function fh(t,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var T=o.stateNode.containerInfo;if(T===u)break;if(S===4)for(S=o.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;T!==null;){if(S=ze(T),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){o=h=S;continue e}T=T.parentNode}}o=o.return}Jn(function(){var ee=h,de=Re(a),_e=[];e:{var ae=Mp.get(t);if(ae!==void 0){var ue=Ol,Ge=t;switch(t){case"keypress":if(Ul(a)===0)break e;case"keydown":case"keyup":ue=VS;break;case"focusin":Ge="focus",ue=Nu;break;case"focusout":Ge="blur",ue=Nu;break;case"beforeblur":case"afterblur":ue=Nu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=DS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=qS;break;case Sp:case xp:case yp:ue=OS;break;case Ep:ue=jS;break;case"scroll":case"scrollend":ue=CS;break;case"wheel":ue=KS;break;case"copy":case"cut":case"paste":ue=zS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=ep;break;case"toggle":case"beforetoggle":ue=JS}var st=(n&4)!==0,Yt=!st&&(t==="scroll"||t==="scrollend"),j=st?ae!==null?ae+"Capture":null:ae;st=[];for(var G=ee,$;G!==null;){var ge=G;if($=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||$===null||j===null||(ge=Rn(G,j),ge!=null&&st.push(Qo(G,ge,$))),Yt)break;G=G.return}0<st.length&&(ae=new ue(ae,Ge,null,a,de),_e.push({event:ae,listeners:st}))}}if((n&7)===0){e:{if(ae=t==="mouseover"||t==="pointerover",ue=t==="mouseout"||t==="pointerout",ae&&a!==xe&&(Ge=a.relatedTarget||a.fromElement)&&(ze(Ge)||Ge[ta]))break e;if((ue||ae)&&(ae=de.window===de?de:(ae=de.ownerDocument)?ae.defaultView||ae.parentWindow:window,ue?(Ge=a.relatedTarget||a.toElement,ue=ee,Ge=Ge?ze(Ge):null,Ge!==null&&(Yt=c(Ge),st=Ge.tag,Ge!==Yt||st!==5&&st!==27&&st!==6)&&(Ge=null)):(ue=null,Ge=ee),ue!==Ge)){if(st=Jd,ge="onMouseLeave",j="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(st=ep,ge="onPointerLeave",j="onPointerEnter",G="pointer"),Yt=ue==null?ae:$e(ue),$=Ge==null?ae:$e(Ge),ae=new st(ge,G+"leave",ue,a,de),ae.target=Yt,ae.relatedTarget=$,ge=null,ze(de)===ee&&(st=new st(j,G+"enter",Ge,a,de),st.target=$,st.relatedTarget=Yt,ge=st),Yt=ge,ue&&Ge)t:{for(st=Qx,j=ue,G=Ge,$=0,ge=j;ge;ge=st(ge))$++;ge=0;for(var et=G;et;et=st(et))ge++;for(;0<$-ge;)j=st(j),$--;for(;0<ge-$;)G=st(G),ge--;for(;$--;){if(j===G||G!==null&&j===G.alternate){st=j;break t}j=st(j),G=st(G)}st=null}else st=null;ue!==null&&Wg(_e,ae,ue,st,!1),Ge!==null&&Yt!==null&&Wg(_e,Yt,Ge,st,!0)}}e:{if(ae=ee?$e(ee):window,ue=ae.nodeName&&ae.nodeName.toLowerCase(),ue==="select"||ue==="input"&&ae.type==="file")var Nt=lp;else if(sp(ae))if(cp)Nt=lx;else{Nt=sx;var Xe=rx}else ue=ae.nodeName,!ue||ue.toLowerCase()!=="input"||ae.type!=="checkbox"&&ae.type!=="radio"?ee&&ka(ee.elementType)&&(Nt=lp):Nt=ox;if(Nt&&(Nt=Nt(t,ee))){op(_e,Nt,a,de);break e}Xe&&Xe(t,ae,ee),t==="focusout"&&ee&&ae.type==="number"&&ee.memoizedProps.value!=null&&aa(ae,"number",ae.value)}switch(Xe=ee?$e(ee):window,t){case"focusin":(sp(Xe)||Xe.contentEditable==="true")&&(fs=Xe,Fu=ee,Ao=null);break;case"focusout":Ao=Fu=fs=null;break;case"mousedown":Hu=!0;break;case"contextmenu":case"mouseup":case"dragend":Hu=!1,_p(_e,a,de);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":_p(_e,a,de)}var vt;if(Pu)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else us?ap(t,a)&&(At="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(At="onCompositionStart");At&&(tp&&a.locale!=="ko"&&(us||At!=="onCompositionStart"?At==="onCompositionEnd"&&us&&(vt=Kd()):(Gi=de,Lu="value"in Gi?Gi.value:Gi.textContent,us=!0)),Xe=Tc(ee,At),0<Xe.length&&(At=new $d(At,t,null,a,de),_e.push({event:At,listeners:Xe}),vt?At.data=vt:(vt=rp(a),vt!==null&&(At.data=vt)))),(vt=ex?tx(t,a):nx(t,a))&&(At=Tc(ee,"onBeforeInput"),0<At.length&&(Xe=new $d("onBeforeInput","beforeinput",null,a,de),_e.push({event:Xe,listeners:At}),Xe.data=vt)),Yx(_e,t,ee,a,de)}Vg(_e,n)})}function Qo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Tc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Rn(t,a),u!=null&&o.unshift(Qo(t,u,h)),u=Rn(t,n),u!=null&&o.push(Qo(t,u,h))),t.tag===3)return o;t=t.return}return[]}function Qx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Wg(t,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var T=a,I=T.alternate,ee=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||ee===null||(I=ee,u?(ee=Rn(a,h),ee!=null&&S.unshift(Qo(a,ee,I))):u||(ee=Rn(a,h),ee!=null&&S.push(Qo(a,ee,I)))),a=a.return}S.length!==0&&t.push({event:n,listeners:S})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function qg(t){return(typeof t=="string"?t:""+t).replace(Jx,`
`).replace($x,"")}function Yg(t,n){return n=qg(n),qg(t)===n}function qt(t,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pa(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pa(t,""+o);break;case"className":Bt(t,"class",o);break;case"tabIndex":Bt(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Bt(t,a,o);break;case"style":vo(t,o,h);break;case"data":if(n!=="object"){Bt(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=L(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&qt(t,n,"name",u.name,u,null),qt(t,n,"formEncType",u.formEncType,u,null),qt(t,n,"formMethod",u.formMethod,u,null),qt(t,n,"formTarget",u.formTarget,u,null)):(qt(t,n,"encType",u.encType,u,null),qt(t,n,"method",u.method,u,null),qt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=L(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=W);break;case"onScroll":o!=null&&Tt("scroll",t);break;case"onScrollEnd":o!=null&&Tt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=L(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Tt("beforetoggle",t),Tt("toggle",t),na(t,"popover",o);break;case"xlinkActuate":vn(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":vn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":vn(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":vn(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":vn(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":vn(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":vn(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":vn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":vn(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":na(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=So.get(a)||a,na(t,a,o))}}function hh(t,n,a,o,u,h){switch(a){case"style":vo(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?pa(t,o):(typeof o=="number"||typeof o=="bigint")&&pa(t,""+o);break;case"onScroll":o!=null&&Tt("scroll",t);break;case"onScrollEnd":o!=null&&Tt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=W);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=t[un]||null,h=h!=null?h[a]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):na(t,a,o)}}}function Fn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Tt("error",t),Tt("load",t);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qt(t,n,h,S,a,null)}}u&&qt(t,n,"srcSet",a.srcSet,a,null),o&&qt(t,n,"src",a.src,a,null);return;case"input":Tt("invalid",t);var T=h=S=u=null,I=null,ee=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":u=de;break;case"type":S=de;break;case"checked":I=de;break;case"defaultChecked":ee=de;break;case"value":h=de;break;case"defaultValue":T=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:qt(t,n,o,de,a,null)}}Ga(t,h,T,I,ee,S,u,!1);return;case"select":Tt("invalid",t),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":h=T;break;case"defaultValue":S=T;break;case"multiple":o=T;default:qt(t,n,u,T,a,null)}n=h,a=S,t.multiple=!!o,n!=null?da(t,!!o,n,!1):a!=null&&da(t,!!o,a,!0);return;case"textarea":Tt("invalid",t),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(T=a[S],T!=null))switch(S){case"value":o=T;break;case"defaultValue":u=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:qt(t,n,S,T,a,null)}Cl(t,o,u,h);return;case"option":for(I in a)a.hasOwnProperty(I)&&(o=a[I],o!=null)&&(I==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":qt(t,n,I,o,a,null));return;case"dialog":Tt("beforetoggle",t),Tt("toggle",t),Tt("cancel",t),Tt("close",t);break;case"iframe":case"object":Tt("load",t);break;case"video":case"audio":for(o=0;o<Ko.length;o++)Tt(Ko[o],t);break;case"image":Tt("error",t),Tt("load",t);break;case"details":Tt("toggle",t);break;case"embed":case"source":case"link":Tt("error",t),Tt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ee in a)if(a.hasOwnProperty(ee)&&(o=a[ee],o!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qt(t,n,ee,o,a,null)}return;default:if(ka(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&hh(t,n,de,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&qt(t,n,T,o,a,null))}function ey(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,T=null,I=null,ee=null,de=null;for(ue in a){var _e=a[ue];if(a.hasOwnProperty(ue)&&_e!=null)switch(ue){case"checked":break;case"value":break;case"defaultValue":I=_e;default:o.hasOwnProperty(ue)||qt(t,n,ue,null,o,_e)}}for(var ae in o){var ue=o[ae];if(_e=a[ae],o.hasOwnProperty(ae)&&(ue!=null||_e!=null))switch(ae){case"type":h=ue;break;case"name":u=ue;break;case"checked":ee=ue;break;case"defaultChecked":de=ue;break;case"value":S=ue;break;case"defaultValue":T=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:ue!==_e&&qt(t,n,ae,ue,o,_e)}}wr(t,S,T,I,ee,de,h,u);return;case"select":ue=S=T=ae=null;for(h in a)if(I=a[h],a.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":ue=I;default:o.hasOwnProperty(h)||qt(t,n,h,null,o,I)}for(u in o)if(h=o[u],I=a[u],o.hasOwnProperty(u)&&(h!=null||I!=null))switch(u){case"value":ae=h;break;case"defaultValue":T=h;break;case"multiple":S=h;default:h!==I&&qt(t,n,u,h,o,I)}n=T,a=S,o=ue,ae!=null?da(t,!!a,ae,!1):!!o!=!!a&&(n!=null?da(t,!!a,n,!0):da(t,!!a,a?[]:"",!1));return;case"textarea":ue=ae=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:qt(t,n,T,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":ae=u;break;case"defaultValue":ue=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&qt(t,n,S,u,o,h)}_o(t,ae,ue);return;case"option":for(var Ge in a)ae=a[Ge],a.hasOwnProperty(Ge)&&ae!=null&&!o.hasOwnProperty(Ge)&&(Ge==="selected"?t.selected=!1:qt(t,n,Ge,null,o,ae));for(I in o)ae=o[I],ue=a[I],o.hasOwnProperty(I)&&ae!==ue&&(ae!=null||ue!=null)&&(I==="selected"?t.selected=ae&&typeof ae!="function"&&typeof ae!="symbol":qt(t,n,I,ae,o,ue));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var st in a)ae=a[st],a.hasOwnProperty(st)&&ae!=null&&!o.hasOwnProperty(st)&&qt(t,n,st,null,o,ae);for(ee in o)if(ae=o[ee],ue=a[ee],o.hasOwnProperty(ee)&&ae!==ue&&(ae!=null||ue!=null))switch(ee){case"children":case"dangerouslySetInnerHTML":if(ae!=null)throw Error(r(137,n));break;default:qt(t,n,ee,ae,o,ue)}return;default:if(ka(n)){for(var Yt in a)ae=a[Yt],a.hasOwnProperty(Yt)&&ae!==void 0&&!o.hasOwnProperty(Yt)&&hh(t,n,Yt,void 0,o,ae);for(de in o)ae=o[de],ue=a[de],!o.hasOwnProperty(de)||ae===ue||ae===void 0&&ue===void 0||hh(t,n,de,ae,o,ue);return}}for(var j in a)ae=a[j],a.hasOwnProperty(j)&&ae!=null&&!o.hasOwnProperty(j)&&qt(t,n,j,null,o,ae);for(_e in o)ae=o[_e],ue=a[_e],!o.hasOwnProperty(_e)||ae===ue||ae==null&&ue==null||qt(t,n,_e,ae,o,ue)}function jg(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ty(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,S=u.initiatorType,T=u.duration;if(h&&T&&jg(S)){for(S=0,T=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],ee=I.startTime;if(ee>T)break;var de=I.transferSize,_e=I.initiatorType;de&&jg(_e)&&(I=I.responseEnd,S+=de*(I<T?1:(T-ee)/(I-ee)))}if(--o,n+=8*(h+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var dh=null,ph=null;function bc(t){return t.nodeType===9?t:t.ownerDocument}function Zg(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kg(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function mh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gh=null;function ny(){var t=window.event;return t&&t.type==="popstate"?t===gh?!1:(gh=t,!0):(gh=null,!1)}var Qg=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,Jg=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof Jg<"u"?function(t){return Jg.resolve(null).then(t).catch(ry)}:Qg;function ry(t){setTimeout(function(){throw t})}function rr(t){return t==="head"}function $g(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Bs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Jo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Jo(a);for(var h=a.firstChild;h;){var S=h.nextSibling,T=h.nodeName;h[ce]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&Jo(t.ownerDocument.body);a=u}while(a);Bs(n)}function e_(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function _h(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":_h(a),re(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function sy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ce])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=Oi(t.nextSibling),t===null)break}return null}function oy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Oi(t.nextSibling),t===null))return null;return t}function t_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Oi(t.nextSibling),t===null))return null;return t}function vh(t){return t.data==="$?"||t.data==="$~"}function Sh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function ly(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Oi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var xh=null;function n_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Oi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function i_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function a_(t,n,a){switch(n=bc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Jo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);re(t)}var Pi=new Map,r_=new Set;function Ac(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ca=Z.d;Z.d={f:cy,r:uy,D:fy,C:hy,L:dy,m:py,X:gy,S:my,M:_y};function cy(){var t=Ca.f(),n=_c();return t||n}function uy(t){var n=He(t);n!==null&&n.tag===5&&n.type==="form"?Em(n):Ca.r(t)}var Ps=typeof document>"u"?null:document;function s_(t,n,a){var o=Ps;if(o&&typeof n=="string"&&n){var u=pn(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),r_.has(u)||(r_.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Fn(n,"link",t),Ye(n),o.head.appendChild(n)))}}function fy(t){Ca.D(t),s_("dns-prefetch",t,null)}function hy(t,n){Ca.C(t,n),s_("preconnect",t,n)}function dy(t,n,a){Ca.L(t,n,a);var o=Ps;if(o&&t&&n){var u='link[rel="preload"][as="'+pn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+pn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+pn(a.imageSizes)+'"]')):u+='[href="'+pn(t)+'"]';var h=u;switch(n){case"style":h=zs(t);break;case"script":h=Is(t)}Pi.has(h)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Pi.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector($o(h))||n==="script"&&o.querySelector(el(h))||(n=o.createElement("link"),Fn(n,"link",t),Ye(n),o.head.appendChild(n)))}}function py(t,n){Ca.m(t,n);var a=Ps;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+pn(o)+'"][href="'+pn(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Is(t)}if(!Pi.has(h)&&(t=_({rel:"modulepreload",href:t},n),Pi.set(h,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(el(h)))return}o=a.createElement("link"),Fn(o,"link",t),Ye(o),a.head.appendChild(o)}}}function my(t,n,a){Ca.S(t,n,a);var o=Ps;if(o&&t){var u=it(o).hoistableStyles,h=zs(t);n=n||"default";var S=u.get(h);if(!S){var T={loading:0,preload:null};if(S=o.querySelector($o(h)))T.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Pi.get(h))&&yh(t,a);var I=S=o.createElement("link");Ye(I),Fn(I,"link",t),I._p=new Promise(function(ee,de){I.onload=ee,I.onerror=de}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Rc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:T},u.set(h,S)}}}function gy(t,n){Ca.X(t,n);var a=Ps;if(a&&t){var o=it(a).hoistableScripts,u=Is(t),h=o.get(u);h||(h=a.querySelector(el(u)),h||(t=_({src:t,async:!0},n),(n=Pi.get(u))&&Eh(t,n),h=a.createElement("script"),Ye(h),Fn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function _y(t,n){Ca.M(t,n);var a=Ps;if(a&&t){var o=it(a).hoistableScripts,u=Is(t),h=o.get(u);h||(h=a.querySelector(el(u)),h||(t=_({src:t,async:!0,type:"module"},n),(n=Pi.get(u))&&Eh(t,n),h=a.createElement("script"),Ye(h),Fn(h,"link",t),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function o_(t,n,a,o){var u=(u=be.current)?Ac(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=zs(a.href),a=it(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=zs(a.href);var h=it(u).hoistableStyles,S=h.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=u.querySelector($o(t)))&&!h._p&&(S.instance=h,S.state.loading=5),Pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Pi.set(t,a),h||vy(u,t,a,S.state))),n&&o===null)throw Error(r(528,""));return S}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Is(a),a=it(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function zs(t){return'href="'+pn(t)+'"'}function $o(t){return'link[rel="stylesheet"]['+t+"]"}function l_(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function vy(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Fn(n,"link",a),Ye(n),t.head.appendChild(n))}function Is(t){return'[src="'+pn(t)+'"]'}function el(t){return"script[async]"+t}function c_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+pn(a.href)+'"]');if(o)return n.instance=o,Ye(o),o;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Ye(o),Fn(o,"style",u),Rc(o,a.precedence,t),n.instance=o;case"stylesheet":u=zs(a.href);var h=t.querySelector($o(u));if(h)return n.state.loading|=4,n.instance=h,Ye(h),h;o=l_(a),(u=Pi.get(u))&&yh(o,u),h=(t.ownerDocument||t).createElement("link"),Ye(h);var S=h;return S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),Fn(h,"link",o),n.state.loading|=4,Rc(h,a.precedence,t),n.instance=h;case"script":return h=Is(a.src),(u=t.querySelector(el(h)))?(n.instance=u,Ye(u),u):(o=a,(u=Pi.get(h))&&(o=_({},a),Eh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ye(u),Fn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Rc(o,a.precedence,t));return n.instance}function Rc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var T=o[S];if(T.dataset.precedence===n)h=T;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function yh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Eh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var wc=null;function u_(t,n,a){if(wc===null){var o=new Map,u=wc=new Map;u.set(a,o)}else u=wc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var h=a[u];if(!(h[ce]||h[cn]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=t+S;var T=o.get(S);T?T.push(h):o.set(S,[h])}}return o}function f_(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Sy(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function h_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function xy(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=zs(o.href),h=n.querySelector($o(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Cc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=h,Ye(h);return}h=n.ownerDocument||n,o=l_(o),(u=Pi.get(u))&&yh(o,u),h=h.createElement("link"),Ye(h);var S=h;S._p=new Promise(function(T,I){S.onload=T,S.onerror=I}),Fn(h,"link",o),a.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Cc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Mh=0;function yy(t,n){return t.stylesheets&&t.count===0&&Dc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Dc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&Mh===0&&(Mh=62500*ty());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Dc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>Mh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Cc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Dc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Lc=null;function Dc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Lc=new Map,n.forEach(Ey,t),Lc=null,Cc.call(t))}function Ey(t,n){if(!(n.state.loading&4)){var a=Lc.get(t);if(a)var o=a.get(null);else{a=new Map,Lc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=Cc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var tl={$$typeof:w,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function My(t,n,a,o,u,h,S,T,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qt(0),this.hiddenUpdates=Qt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function d_(t,n,a,o,u,h,S,T,I,ee,de,_e){return t=new My(t,n,a,S,I,ee,de,_e,T),n=1,h===!0&&(n|=24),h=pi(3,null,null,n),t.current=h,h.stateNode=t,n=tf(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},sf(h),t}function p_(t){return t?(t=ps,t):ps}function m_(t,n,a,o,u,h){u=p_(u),o.context===null?o.context=u:o.pendingContext=u,o=ja(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Za(t,o,n),a!==null&&(li(a,t,n),No(a,t,n))}function g_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Th(t,n){g_(t,n),(t=t.alternate)&&g_(t,n)}function __(t){if(t.tag===13||t.tag===31){var n=Nr(t,67108864);n!==null&&li(n,t,67108864),Th(t,67108864)}}function v_(t){if(t.tag===13||t.tag===31){var n=Si();n=Ar(n);var a=Nr(t,n);a!==null&&li(a,t,n),Th(t,n)}}var Uc=!0;function Ty(t,n,a,o){var u=z.T;z.T=null;var h=Z.p;try{Z.p=2,bh(t,n,a,o)}finally{Z.p=h,z.T=u}}function by(t,n,a,o){var u=z.T;z.T=null;var h=Z.p;try{Z.p=8,bh(t,n,a,o)}finally{Z.p=h,z.T=u}}function bh(t,n,a,o){if(Uc){var u=Ah(o);if(u===null)fh(t,n,o,Nc,a),x_(t,o);else if(Ry(u,t,n,a,o))o.stopPropagation();else if(x_(t,o),n&4&&-1<Ay.indexOf(t)){for(;u!==null;){var h=He(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Ue(h.pendingLanes);if(S!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;S;){var I=1<<31-Ke(S);T.entanglements[1]|=I,S&=~I}la(h),(It&6)===0&&(mc=Se()+500,Zo(0))}}break;case 31:case 13:T=Nr(h,2),T!==null&&li(T,h,2),_c(),Th(h,2)}if(h=Ah(o),h===null&&fh(t,n,o,Nc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else fh(t,n,o,null,a)}}function Ah(t){return t=Re(t),Rh(t)}var Nc=null;function Rh(t){if(Nc=null,t=ze(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=f(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Nc=t,null}function S_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(We()){case Ne:return 2;case Be:return 8;case qe:case ct:return 32;case ye:return 268435456;default:return 32}default:return 32}}var wh=!1,sr=null,or=null,lr=null,nl=new Map,il=new Map,cr=[],Ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x_(t,n){switch(t){case"focusin":case"focusout":sr=null;break;case"dragenter":case"dragleave":or=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":nl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":il.delete(n.pointerId)}}function al(t,n,a,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=He(n),n!==null&&__(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function Ry(t,n,a,o,u){switch(n){case"focusin":return sr=al(sr,t,n,a,o,u),!0;case"dragenter":return or=al(or,t,n,a,o,u),!0;case"mouseover":return lr=al(lr,t,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return nl.set(h,al(nl.get(h)||null,t,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,il.set(h,al(il.get(h)||null,t,n,a,o,u)),!0}return!1}function y_(t){var n=ze(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,ea(t.priority,function(){v_(a)});return}}else if(n===31){if(n=f(a),n!==null){t.blockedOn=n,ea(t.priority,function(){v_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Oc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ah(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);xe=o,a.target.dispatchEvent(o),xe=null}else return n=He(a),n!==null&&__(n),t.blockedOn=a,!1;n.shift()}return!0}function E_(t,n,a){Oc(t)&&a.delete(n)}function wy(){wh=!1,sr!==null&&Oc(sr)&&(sr=null),or!==null&&Oc(or)&&(or=null),lr!==null&&Oc(lr)&&(lr=null),nl.forEach(E_),il.forEach(E_)}function Pc(t,n){t.blockedOn===n&&(t.blockedOn=null,wh||(wh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,wy)))}var zc=null;function M_(t){zc!==t&&(zc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){zc===t&&(zc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Rh(o||a)===null)continue;break}var h=He(a);h!==null&&(t.splice(n,3),n-=3,Af(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Bs(t){function n(I){return Pc(I,t)}sr!==null&&Pc(sr,t),or!==null&&Pc(or,t),lr!==null&&Pc(lr,t),nl.forEach(n),il.forEach(n);for(var a=0;a<cr.length;a++){var o=cr[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<cr.length&&(a=cr[0],a.blockedOn===null);)y_(a),a.blockedOn===null&&cr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[un]||null;if(typeof h=="function")S||M_(a);else if(S){var T=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[un]||null)T=S.formAction;else if(Rh(u)!==null)continue}else T=S.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),M_(a)}}}function T_(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ch(t){this._internalRoot=t}Ic.prototype.render=Ch.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Si();m_(a,o,t,n,null,null)},Ic.prototype.unmount=Ch.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;m_(t.current,2,null,t,null,null),_c(),n[ta]=null}};function Ic(t){this._internalRoot=t}Ic.prototype.unstable_scheduleHydration=function(t){if(t){var n=ha();t={blockedOn:null,target:t,priority:n};for(var a=0;a<cr.length&&n!==0&&n<cr[a].priority;a++);cr.splice(a,0,t),a===0&&y_(t)}};var b_=e.version;if(b_!=="19.2.7")throw Error(r(527,b_,"19.2.7"));Z.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var Cy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bc.isDisabled&&Bc.supportsFiber)try{Je=Bc.inject(Cy),Fe=Bc}catch{}}return sl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Um,h=Nm,S=Om;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=d_(t,1,!1,null,null,a,o,null,u,h,S,T_),t[ta]=n.current,uh(t),new Ch(n)},sl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",h=Um,S=Nm,T=Om,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=d_(t,1,!0,n,a??null,o,u,I,h,S,T,T_),n.context=p_(null),a=n.current,o=Si(),o=Ar(o),u=ja(o),u.callback=null,Za(a,u,o),a=o,n.current.lanes=a,en(n,a),la(n),t[ta]=n.current,uh(t),new Ic(n)},sl.version="19.2.7",sl}var z_;function By(){if(z_)return Uh.exports;z_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Uh.exports=Iy(),Uh.exports}var Fy=By();const Hy="id,title,slug,category,content,image_url,created_at,is_public,post_no",Gy=1e3;async function ky(s){if(!A_)throw new Error("Archive connection is not configured.");const e=[];let i=0;for(;;){const{data:r,error:l,count:c}=await A_.from("posts").select(Hy,{count:"exact"}).eq("is_public",!0).order("created_at",{ascending:!1}).order("id",{ascending:!1}).range(i,i+Gy-1).abortSignal(s);if(l)throw l;const d=r??[];if(e.push(...d),d.length===0||c!==null&&e.length>=c)break;i+=d.length}return e}function Vy(){const[s,e]=Qe.useState([]),[i,r]=Qe.useState(!0),[l,c]=Qe.useState(null),[d,f]=Qe.useState(0),m=Qe.useCallback(()=>f(p=>p+1),[]);return Qe.useEffect(()=>{let p=!0;const g=new AbortController,_=window.setTimeout(()=>g.abort(),2e4);return r(!0),c(null),ky(g.signal).then(x=>{p&&e(x)}).catch(()=>{p&&(e([]),c("The archive could not be loaded. Please try again."))}).finally(()=>{window.clearTimeout(_),p&&r(!1)}),()=>{p=!1,window.clearTimeout(_),g.abort()}},[d]),{posts:s,loading:i,error:l,retry:m}}const Id="160",Xy=0,I_=1,Wy=2,U0=1,qy=2,Pa=3,Tr=0,hi=1,za=2,yr=0,ro=1,B_=2,F_=3,H_=4,Yy=5,$r=100,jy=101,Zy=102,G_=103,k_=104,Ky=200,Qy=201,Jy=202,$y=203,xd=204,yd=205,eE=206,tE=207,nE=208,iE=209,aE=210,rE=211,sE=212,oE=213,lE=214,cE=0,uE=1,fE=2,du=3,hE=4,dE=5,pE=6,mE=7,N0=0,gE=1,_E=2,Er=0,vE=1,SE=2,xE=3,yE=4,EE=5,ME=6,O0=300,lo=301,co=302,Ed=303,Md=304,Mu=306,Td=1e3,Ji=1001,bd=1002,ti=1003,V_=1004,zh=1005,Bi=1006,TE=1007,xl=1008,Mr=1009,bE=1010,AE=1011,Bd=1012,P0=1013,Sr=1014,xr=1015,yl=1016,z0=1017,I0=1018,ns=1020,RE=1021,$i=1023,wE=1024,CE=1025,is=1026,uo=1027,LE=1028,B0=1029,DE=1030,F0=1031,H0=1033,Ih=33776,Bh=33777,Fh=33778,Hh=33779,X_=35840,W_=35841,q_=35842,Y_=35843,G0=36196,j_=37492,Z_=37496,K_=37808,Q_=37809,J_=37810,$_=37811,ev=37812,tv=37813,nv=37814,iv=37815,av=37816,rv=37817,sv=37818,ov=37819,lv=37820,cv=37821,Gh=36492,uv=36494,fv=36495,UE=36283,hv=36284,dv=36285,pv=36286,k0=3e3,as=3001,NE=3200,OE=3201,PE=0,zE=1,Fi="",Hn="srgb",Fa="srgb-linear",Fd="display-p3",Tu="display-p3-linear",pu="linear",on="srgb",mu="rec709",gu="p3",Fs=7680,mv=519,IE=512,BE=513,FE=514,V0=515,HE=516,GE=517,kE=518,VE=519,gv=35044,_v="300 es",Ad=1035,Ia=2e3,_u=2001;class po{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kh=Math.PI/180,Rd=180/Math.PI;function El(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jn[s&255]+jn[s>>8&255]+jn[s>>16&255]+jn[s>>24&255]+"-"+jn[e&255]+jn[e>>8&255]+"-"+jn[e>>16&15|64]+jn[e>>24&255]+"-"+jn[i&63|128]+jn[i>>8&255]+"-"+jn[i>>16&255]+jn[i>>24&255]+jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]).toLowerCase()}function fi(s,e,i){return Math.max(e,Math.min(i,s))}function XE(s,e){return(s%e+e)%e}function Vh(s,e,i){return(1-i)*s+i*e}function vv(s){return(s&s-1)===0&&s!==0}function wd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ol(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ci(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Vt{constructor(e=0,i=0){Vt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(fi(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yt{constructor(e,i,r,l,c,d,f,m,p){yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,f,m,p)}set(e,i,r,l,c,d,f,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=f,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],f=r[3],m=r[6],p=r[1],g=r[4],_=r[7],x=r[2],E=r[5],M=r[8],b=l[0],y=l[3],v=l[6],O=l[1],w=l[4],B=l[7],q=l[2],F=l[5],P=l[8];return c[0]=d*b+f*O+m*q,c[3]=d*y+f*w+m*F,c[6]=d*v+f*B+m*P,c[1]=p*b+g*O+_*q,c[4]=p*y+g*w+_*F,c[7]=p*v+g*B+_*P,c[2]=x*b+E*O+M*q,c[5]=x*y+E*w+M*F,c[8]=x*v+E*B+M*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],f=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*f*p-r*c*g+r*f*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],f=e[5],m=e[6],p=e[7],g=e[8],_=g*d-f*p,x=f*m-g*c,E=p*c-d*m,M=i*_+r*x+l*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=_*b,e[1]=(l*p-g*r)*b,e[2]=(f*r-l*d)*b,e[3]=x*b,e[4]=(g*i-l*m)*b,e[5]=(l*c-f*i)*b,e[6]=E*b,e[7]=(r*m-p*i)*b,e[8]=(d*i-r*c)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,f){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*f)+d+e,-l*p,l*m,-l*(-p*d+m*f)+f+i,0,0,1),this}scale(e,i){return this.premultiply(Xh.makeScale(e,i)),this}rotate(e){return this.premultiply(Xh.makeRotation(-e)),this}translate(e,i){return this.premultiply(Xh.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xh=new yt;function X0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function vu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function WE(){const s=vu("canvas");return s.style.display="block",s}const Sv={};function vl(s){s in Sv||(Sv[s]=!0,console.warn(s))}const xv=new yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yv=new yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fc={[Fa]:{transfer:pu,primaries:mu,toReference:s=>s,fromReference:s=>s},[Hn]:{transfer:on,primaries:mu,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Tu]:{transfer:pu,primaries:gu,toReference:s=>s.applyMatrix3(yv),fromReference:s=>s.applyMatrix3(xv)},[Fd]:{transfer:on,primaries:gu,toReference:s=>s.convertSRGBToLinear().applyMatrix3(yv),fromReference:s=>s.applyMatrix3(xv).convertLinearToSRGB()}},qE=new Set([Fa,Tu]),jt={enabled:!0,_workingColorSpace:Fa,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!qE.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,i){if(this.enabled===!1||e===i||!e||!i)return s;const r=Fc[e].toReference,l=Fc[i].fromReference;return l(r(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Fc[s].primaries},getTransfer:function(s){return s===Fi?pu:Fc[s].transfer}};function so(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Wh(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Hs;class W0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hs===void 0&&(Hs=vu("canvas")),Hs.width=e.width,Hs.height=e.height;const r=Hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Hs}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=vu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=so(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(so(i[r]/255)*255):i[r]=so(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YE=0;class q0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=El(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,f=l.length;d<f;d++)l[d].isDataTexture?c.push(qh(l[d].image)):c.push(qh(l[d]))}else c=qh(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function qh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?W0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jE=0;class bi extends po{constructor(e=bi.DEFAULT_IMAGE,i=bi.DEFAULT_MAPPING,r=Ji,l=Ji,c=Bi,d=xl,f=$i,m=Mr,p=bi.DEFAULT_ANISOTROPY,g=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=El(),this.name="",this.source=new q0(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof g=="string"?this.colorSpace=g:(vl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=g===as?Hn:Fi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Td:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Td:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return vl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Hn?as:k0}set encoding(e){vl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===as?Hn:Fi}}bi.DEFAULT_IMAGE=null;bi.DEFAULT_MAPPING=O0;bi.DEFAULT_ANISOTROPY=1;class Gn{constructor(e=0,i=0,r=0,l=1){Gn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],_=m[8],x=m[1],E=m[5],M=m[9],b=m[2],y=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(_-b)<.01&&Math.abs(M-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+b)<.1&&Math.abs(M+y)<.1&&Math.abs(p+E+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,B=(E+1)/2,q=(v+1)/2,F=(g+x)/4,P=(_+b)/4,Q=(M+y)/4;return w>B&&w>q?w<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(w),l=F/r,c=P/r):B>q?B<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(B),r=F/l,c=Q/l):q<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(q),r=P/c,l=Q/c),this.set(r,l,c,i),this}let O=Math.sqrt((y-M)*(y-M)+(_-b)*(_-b)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(y-M)/O,this.y=(_-b)/O,this.z=(x-g)/O,this.w=Math.acos((p+E+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZE extends po{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new Gn(0,0,e,i),this.scissorTest=!1,this.viewport=new Gn(0,0,e,i);const l={width:e,height:i,depth:1};r.encoding!==void 0&&(vl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===as?Hn:Fi),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new bi(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,i,r=1){(this.width!==e||this.height!==i||this.depth!==r)&&(this.width=e,this.height=i,this.depth=r,this.texture.image.width=e,this.texture.image.height=i,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new q0(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends ZE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Y0 extends bi{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class KE extends bi{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ml{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,f){let m=r[l+0],p=r[l+1],g=r[l+2],_=r[l+3];const x=c[d+0],E=c[d+1],M=c[d+2],b=c[d+3];if(f===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_;return}if(f===1){e[i+0]=x,e[i+1]=E,e[i+2]=M,e[i+3]=b;return}if(_!==b||m!==x||p!==E||g!==M){let y=1-f;const v=m*x+p*E+g*M+_*b,O=v>=0?1:-1,w=1-v*v;if(w>Number.EPSILON){const q=Math.sqrt(w),F=Math.atan2(q,v*O);y=Math.sin(y*F)/q,f=Math.sin(f*F)/q}const B=f*O;if(m=m*y+x*B,p=p*y+E*B,g=g*y+M*B,_=_*y+b*B,y===1-f){const q=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=q,p*=q,g*=q,_*=q}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,c,d){const f=r[l],m=r[l+1],p=r[l+2],g=r[l+3],_=c[d],x=c[d+1],E=c[d+2],M=c[d+3];return e[i]=f*M+g*_+m*E-p*x,e[i+1]=m*M+g*x+p*_-f*E,e[i+2]=p*M+g*E+f*x-m*_,e[i+3]=g*M-f*_-m*x-p*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,f=Math.cos,m=Math.sin,p=f(r/2),g=f(l/2),_=f(c/2),x=m(r/2),E=m(l/2),M=m(c/2);switch(d){case"XYZ":this._x=x*g*_+p*E*M,this._y=p*E*_-x*g*M,this._z=p*g*M+x*E*_,this._w=p*g*_-x*E*M;break;case"YXZ":this._x=x*g*_+p*E*M,this._y=p*E*_-x*g*M,this._z=p*g*M-x*E*_,this._w=p*g*_+x*E*M;break;case"ZXY":this._x=x*g*_-p*E*M,this._y=p*E*_+x*g*M,this._z=p*g*M+x*E*_,this._w=p*g*_-x*E*M;break;case"ZYX":this._x=x*g*_-p*E*M,this._y=p*E*_+x*g*M,this._z=p*g*M-x*E*_,this._w=p*g*_+x*E*M;break;case"YZX":this._x=x*g*_+p*E*M,this._y=p*E*_+x*g*M,this._z=p*g*M-x*E*_,this._w=p*g*_-x*E*M;break;case"XZY":this._x=x*g*_-p*E*M,this._y=p*E*_-x*g*M,this._z=p*g*M+x*E*_,this._w=p*g*_+x*E*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],f=i[5],m=i[9],p=i[2],g=i[6],_=i[10],x=r+f+_;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(g-m)*E,this._y=(c-p)*E,this._z=(d-l)*E}else if(r>f&&r>_){const E=2*Math.sqrt(1+r-f-_);this._w=(g-m)/E,this._x=.25*E,this._y=(l+d)/E,this._z=(c+p)/E}else if(f>_){const E=2*Math.sqrt(1+f-r-_);this._w=(c-p)/E,this._x=(l+d)/E,this._y=.25*E,this._z=(m+g)/E}else{const E=2*Math.sqrt(1+_-r-f);this._w=(d-l)/E,this._x=(c+p)/E,this._y=(m+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(fi(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,f=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*f+l*p-c*m,this._y=l*g+d*m+c*f-r*p,this._z=c*g+d*p+r*m-l*f,this._w=d*g-r*f-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,d=this._w;let f=d*e._w+r*e._x+l*e._y+c*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const m=1-f*f;if(m<=Number.EPSILON){const E=1-i;return this._w=E*d+i*this._w,this._x=E*r+i*this._x,this._y=E*l+i*this._y,this._z=E*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,f),_=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=d*_+this._w*x,this._x=r*_+this._x*x,this._y=l*_+this._y*x,this._z=c*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=Math.random(),i=Math.sqrt(1-e),r=Math.sqrt(e),l=2*Math.PI*Math.random(),c=2*Math.PI*Math.random();return this.set(i*Math.cos(l),r*Math.sin(c),r*Math.cos(c),i*Math.sin(l))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class fe{constructor(e=0,i=0,r=0){fe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ev.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ev.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,f=e.z,m=e.w,p=2*(d*l-f*r),g=2*(f*i-c*l),_=2*(c*r-d*i);return this.x=i+m*p+d*_-f*g,this.y=r+m*g+f*p-c*_,this.z=l+m*_+c*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,f=i.y,m=i.z;return this.x=l*m-c*f,this.y=c*d-r*m,this.z=r*f-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yh.copy(this).projectOnVector(e),this.sub(Yh)}reflect(e){return this.sub(Yh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(fi(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,i=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(i),this.y=r*Math.sin(i),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yh=new fe,Ev=new Ml;class Tl{constructor(e=new fe(1/0,1/0,1/0),i=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Wi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Wi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Wi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,Wi):Wi.fromBufferAttribute(c,d),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Hc.copy(r.boundingBox)),Hc.applyMatrix4(e.matrixWorld),this.union(Hc)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ll),Gc.subVectors(this.max,ll),Gs.subVectors(e.a,ll),ks.subVectors(e.b,ll),Vs.subVectors(e.c,ll),fr.subVectors(ks,Gs),hr.subVectors(Vs,ks),qr.subVectors(Gs,Vs);let i=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-qr.z,qr.y,fr.z,0,-fr.x,hr.z,0,-hr.x,qr.z,0,-qr.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-qr.y,qr.x,0];return!jh(i,Gs,ks,Vs,Gc)||(i=[1,0,0,0,1,0,0,0,1],!jh(i,Gs,ks,Vs,Gc))?!1:(kc.crossVectors(fr,hr),i=[kc.x,kc.y,kc.z],jh(i,Gs,ks,Vs,Gc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(La[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),La[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),La[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),La[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),La[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),La[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),La[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),La[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(La),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const La=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Wi=new fe,Hc=new Tl,Gs=new fe,ks=new fe,Vs=new fe,fr=new fe,hr=new fe,qr=new fe,ll=new fe,Gc=new fe,kc=new fe,Yr=new fe;function jh(s,e,i,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){Yr.fromArray(s,c);const f=l.x*Math.abs(Yr.x)+l.y*Math.abs(Yr.y)+l.z*Math.abs(Yr.z),m=e.dot(Yr),p=i.dot(Yr),g=r.dot(Yr);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>f)return!1}return!0}const QE=new Tl,cl=new fe,Zh=new fe;class Hd{constructor(e=new fe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):QE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cl.subVectors(e,this.center);const i=cl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(cl,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cl.copy(e.center).add(Zh)),this.expandByPoint(cl.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Da=new fe,Kh=new fe,Vc=new fe,dr=new fe,Qh=new fe,Xc=new fe,Jh=new fe;class JE{constructor(e=new fe,i=new fe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Da)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Da.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Da.copy(this.origin).addScaledVector(this.direction,i),Da.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Kh.copy(e).add(i).multiplyScalar(.5),Vc.copy(i).sub(e).normalize(),dr.copy(this.origin).sub(Kh);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Vc),f=dr.dot(this.direction),m=-dr.dot(Vc),p=dr.lengthSq(),g=Math.abs(1-d*d);let _,x,E,M;if(g>0)if(_=d*m-f,x=d*f-m,M=c*g,_>=0)if(x>=-M)if(x<=M){const b=1/g;_*=b,x*=b,E=_*(_+d*x+2*f)+x*(d*_+x+2*m)+p}else x=c,_=Math.max(0,-(d*x+f)),E=-_*_+x*(x+2*m)+p;else x=-c,_=Math.max(0,-(d*x+f)),E=-_*_+x*(x+2*m)+p;else x<=-M?(_=Math.max(0,-(-d*c+f)),x=_>0?-c:Math.min(Math.max(-c,-m),c),E=-_*_+x*(x+2*m)+p):x<=M?(_=0,x=Math.min(Math.max(-c,-m),c),E=x*(x+2*m)+p):(_=Math.max(0,-(d*c+f)),x=_>0?c:Math.min(Math.max(-c,-m),c),E=-_*_+x*(x+2*m)+p);else x=d>0?-c:c,_=Math.max(0,-(d*x+f)),E=-_*_+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Kh).addScaledVector(Vc,x),E}intersectSphere(e,i){Da.subVectors(e.center,this.origin);const r=Da.dot(this.direction),l=Da.dot(Da)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),f=r-d,m=r+d;return m<0?null:f<0?this.at(m,i):this.at(f,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,f,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),_>=0?(f=(e.min.z-x.z)*_,m=(e.max.z-x.z)*_):(f=(e.max.z-x.z)*_,m=(e.min.z-x.z)*_),r>m||f>l)||((f>r||r!==r)&&(r=f),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Da)!==null}intersectTriangle(e,i,r,l,c){Qh.subVectors(i,e),Xc.subVectors(r,e),Jh.crossVectors(Qh,Xc);let d=this.direction.dot(Jh),f;if(d>0){if(l)return null;f=1}else if(d<0)f=-1,d=-d;else return null;dr.subVectors(this.origin,e);const m=f*this.direction.dot(Xc.crossVectors(dr,Xc));if(m<0)return null;const p=f*this.direction.dot(Qh.cross(dr));if(p<0||m+p>d)return null;const g=-f*dr.dot(Jh);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vn{constructor(e,i,r,l,c,d,f,m,p,g,_,x,E,M,b,y){Vn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,f,m,p,g,_,x,E,M,b,y)}set(e,i,r,l,c,d,f,m,p,g,_,x,E,M,b,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=d,v[9]=f,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=E,v[7]=M,v[11]=b,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Xs.setFromMatrixColumn(e,0).length(),c=1/Xs.setFromMatrixColumn(e,1).length(),d=1/Xs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const x=d*g,E=d*_,M=f*g,b=f*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=E+M*p,i[5]=x-b*p,i[9]=-f*m,i[2]=b-x*p,i[6]=M+E*p,i[10]=d*m}else if(e.order==="YXZ"){const x=m*g,E=m*_,M=p*g,b=p*_;i[0]=x+b*f,i[4]=M*f-E,i[8]=d*p,i[1]=d*_,i[5]=d*g,i[9]=-f,i[2]=E*f-M,i[6]=b+x*f,i[10]=d*m}else if(e.order==="ZXY"){const x=m*g,E=m*_,M=p*g,b=p*_;i[0]=x-b*f,i[4]=-d*_,i[8]=M+E*f,i[1]=E+M*f,i[5]=d*g,i[9]=b-x*f,i[2]=-d*p,i[6]=f,i[10]=d*m}else if(e.order==="ZYX"){const x=d*g,E=d*_,M=f*g,b=f*_;i[0]=m*g,i[4]=M*p-E,i[8]=x*p+b,i[1]=m*_,i[5]=b*p+x,i[9]=E*p-M,i[2]=-p,i[6]=f*m,i[10]=d*m}else if(e.order==="YZX"){const x=d*m,E=d*p,M=f*m,b=f*p;i[0]=m*g,i[4]=b-x*_,i[8]=M*_+E,i[1]=_,i[5]=d*g,i[9]=-f*g,i[2]=-p*g,i[6]=E*_+M,i[10]=x-b*_}else if(e.order==="XZY"){const x=d*m,E=d*p,M=f*m,b=f*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=x*_+b,i[5]=d*g,i[9]=E*_-M,i[2]=M*_-E,i[6]=f*g,i[10]=b*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose($E,e,eM)}lookAt(e,i,r){const l=this.elements;return xi.subVectors(e,i),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),pr.crossVectors(r,xi),pr.lengthSq()===0&&(Math.abs(r.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),pr.crossVectors(r,xi)),pr.normalize(),Wc.crossVectors(xi,pr),l[0]=pr.x,l[4]=Wc.x,l[8]=xi.x,l[1]=pr.y,l[5]=Wc.y,l[9]=xi.y,l[2]=pr.z,l[6]=Wc.z,l[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],f=r[4],m=r[8],p=r[12],g=r[1],_=r[5],x=r[9],E=r[13],M=r[2],b=r[6],y=r[10],v=r[14],O=r[3],w=r[7],B=r[11],q=r[15],F=l[0],P=l[4],Q=l[8],A=l[12],N=l[1],ne=l[5],me=l[9],Ae=l[13],V=l[2],te=l[6],z=l[10],Z=l[14],J=l[3],le=l[7],pe=l[11],D=l[15];return c[0]=d*F+f*N+m*V+p*J,c[4]=d*P+f*ne+m*te+p*le,c[8]=d*Q+f*me+m*z+p*pe,c[12]=d*A+f*Ae+m*Z+p*D,c[1]=g*F+_*N+x*V+E*J,c[5]=g*P+_*ne+x*te+E*le,c[9]=g*Q+_*me+x*z+E*pe,c[13]=g*A+_*Ae+x*Z+E*D,c[2]=M*F+b*N+y*V+v*J,c[6]=M*P+b*ne+y*te+v*le,c[10]=M*Q+b*me+y*z+v*pe,c[14]=M*A+b*Ae+y*Z+v*D,c[3]=O*F+w*N+B*V+q*J,c[7]=O*P+w*ne+B*te+q*le,c[11]=O*Q+w*me+B*z+q*pe,c[15]=O*A+w*Ae+B*Z+q*D,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],f=e[5],m=e[9],p=e[13],g=e[2],_=e[6],x=e[10],E=e[14],M=e[3],b=e[7],y=e[11],v=e[15];return M*(+c*m*_-l*p*_-c*f*x+r*p*x+l*f*E-r*m*E)+b*(+i*m*E-i*p*x+c*d*x-l*d*E+l*p*g-c*m*g)+y*(+i*p*_-i*f*E-c*d*_+r*d*E+c*f*g-r*p*g)+v*(-l*f*g-i*m*_+i*f*x+l*d*_-r*d*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],f=e[5],m=e[6],p=e[7],g=e[8],_=e[9],x=e[10],E=e[11],M=e[12],b=e[13],y=e[14],v=e[15],O=_*y*p-b*x*p+b*m*E-f*y*E-_*m*v+f*x*v,w=M*x*p-g*y*p-M*m*E+d*y*E+g*m*v-d*x*v,B=g*b*p-M*_*p+M*f*E-d*b*E-g*f*v+d*_*v,q=M*_*m-g*b*m-M*f*x+d*b*x+g*f*y-d*_*y,F=i*O+r*w+l*B+c*q;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/F;return e[0]=O*P,e[1]=(b*x*c-_*y*c-b*l*E+r*y*E+_*l*v-r*x*v)*P,e[2]=(f*y*c-b*m*c+b*l*p-r*y*p-f*l*v+r*m*v)*P,e[3]=(_*m*c-f*x*c-_*l*p+r*x*p+f*l*E-r*m*E)*P,e[4]=w*P,e[5]=(g*y*c-M*x*c+M*l*E-i*y*E-g*l*v+i*x*v)*P,e[6]=(M*m*c-d*y*c-M*l*p+i*y*p+d*l*v-i*m*v)*P,e[7]=(d*x*c-g*m*c+g*l*p-i*x*p-d*l*E+i*m*E)*P,e[8]=B*P,e[9]=(M*_*c-g*b*c-M*r*E+i*b*E+g*r*v-i*_*v)*P,e[10]=(d*b*c-M*f*c+M*r*p-i*b*p-d*r*v+i*f*v)*P,e[11]=(g*f*c-d*_*c-g*r*p+i*_*p+d*r*E-i*f*E)*P,e[12]=q*P,e[13]=(g*b*l-M*_*l+M*r*x-i*b*x-g*r*y+i*_*y)*P,e[14]=(M*f*l-d*b*l-M*r*m+i*b*m+d*r*y-i*f*y)*P,e[15]=(d*_*l-g*f*l+g*r*m-i*_*m-d*r*x+i*f*x)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,f=e.y,m=e.z,p=c*d,g=c*f;return this.set(p*d+r,p*f-l*m,p*m+l*f,0,p*f+l*m,g*f+r,g*m-l*d,0,p*m-l*f,g*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,f=i._z,m=i._w,p=c+c,g=d+d,_=f+f,x=c*p,E=c*g,M=c*_,b=d*g,y=d*_,v=f*_,O=m*p,w=m*g,B=m*_,q=r.x,F=r.y,P=r.z;return l[0]=(1-(b+v))*q,l[1]=(E+B)*q,l[2]=(M-w)*q,l[3]=0,l[4]=(E-B)*F,l[5]=(1-(x+v))*F,l[6]=(y+O)*F,l[7]=0,l[8]=(M+w)*P,l[9]=(y-O)*P,l[10]=(1-(x+b))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=Xs.set(l[0],l[1],l[2]).length();const d=Xs.set(l[4],l[5],l[6]).length(),f=Xs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],qi.copy(this);const p=1/c,g=1/d,_=1/f;return qi.elements[0]*=p,qi.elements[1]*=p,qi.elements[2]*=p,qi.elements[4]*=g,qi.elements[5]*=g,qi.elements[6]*=g,qi.elements[8]*=_,qi.elements[9]*=_,qi.elements[10]*=_,i.setFromRotationMatrix(qi),r.x=c,r.y=d,r.z=f,this}makePerspective(e,i,r,l,c,d,f=Ia){const m=this.elements,p=2*c/(i-e),g=2*c/(r-l),_=(i+e)/(i-e),x=(r+l)/(r-l);let E,M;if(f===Ia)E=-(d+c)/(d-c),M=-2*d*c/(d-c);else if(f===_u)E=-d/(d-c),M=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=p,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=M,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,d,f=Ia){const m=this.elements,p=1/(i-e),g=1/(r-l),_=1/(d-c),x=(i+e)*p,E=(r+l)*g;let M,b;if(f===Ia)M=(d+c)*_,b=-2*_;else if(f===_u)M=c*_,b=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-E,m[2]=0,m[6]=0,m[10]=b,m[14]=-M,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Xs=new fe,qi=new Vn,$E=new fe(0,0,0),eM=new fe(1,1,1),pr=new fe,Wc=new fe,xi=new fe,Mv=new Vn,Tv=new Ml;class bu{constructor(e=0,i=0,r=0,l=bu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],f=l[8],m=l[1],p=l[5],g=l[9],_=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(fi(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-fi(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,E),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(fi(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,E),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-fi(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(fi(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(f,E));break;case"XZY":this._z=Math.asin(-fi(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Mv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Tv.setFromEuler(this),this.setFromQuaternion(Tv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bu.DEFAULT_ORDER="XYZ";class j0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tM=0;const bv=new fe,Ws=new Ml,Ua=new Vn,qc=new fe,ul=new fe,nM=new fe,iM=new Ml,Av=new fe(1,0,0),Rv=new fe(0,1,0),wv=new fe(0,0,1),aM={type:"added"},rM={type:"removed"};class Ai extends po{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=El(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ai.DEFAULT_UP.clone();const e=new fe,i=new bu,r=new Ml,l=new fe(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Vn},normalMatrix:{value:new yt}}),this.matrix=new Vn,this.matrixWorld=new Vn,this.matrixAutoUpdate=Ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ws.setFromAxisAngle(e,i),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,i){return Ws.setFromAxisAngle(e,i),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Av,e)}rotateY(e){return this.rotateOnAxis(Rv,e)}rotateZ(e){return this.rotateOnAxis(wv,e)}translateOnAxis(e,i){return bv.copy(e).applyQuaternion(this.quaternion),this.position.add(bv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Av,e)}translateY(e){return this.translateOnAxis(Rv,e)}translateZ(e){return this.translateOnAxis(wv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ua.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?qc.copy(e):qc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),ul.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ua.lookAt(ul,qc,this.up):Ua.lookAt(qc,ul,this.up),this.quaternion.setFromRotationMatrix(Ua),l&&(Ua.extractRotation(l.matrixWorld),Ws.setFromRotationMatrix(Ua),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(aM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(rM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ua),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,e,nM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ul,iM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const c=i[r];(c.matrixWorldAutoUpdate===!0||e===!0)&&c.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++){const f=l[c];f.matrixWorldAutoUpdate===!0&&f.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(e.shapes,_)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(c(e.materials,this.material[m]));l.material=f}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let f=0;f<this.children.length;f++)l.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];l.animations.push(c(e.animations,m))}}if(i){const f=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),_=d(e.shapes),x=d(e.skeletons),E=d(e.animations),M=d(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),E.length>0&&(r.animations=E),M.length>0&&(r.nodes=M)}return r.object=l,r;function d(f){const m=[];for(const p in f){const g=f[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Ai.DEFAULT_UP=new fe(0,1,0);Ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yi=new fe,Na=new fe,$h=new fe,Oa=new fe,qs=new fe,Ys=new fe,Cv=new fe,ed=new fe,td=new fe,nd=new fe;let Yc=!1;class ji{constructor(e=new fe,i=new fe,r=new fe){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Yi.subVectors(e,i),l.cross(Yi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Yi.subVectors(l,i),Na.subVectors(r,i),$h.subVectors(e,i);const d=Yi.dot(Yi),f=Yi.dot(Na),m=Yi.dot($h),p=Na.dot(Na),g=Na.dot($h),_=d*p-f*f;if(_===0)return c.set(0,0,0),null;const x=1/_,E=(p*m-f*g)*x,M=(d*g-f*m)*x;return c.set(1-E-M,M,E)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Oa)===null?!1:Oa.x>=0&&Oa.y>=0&&Oa.x+Oa.y<=1}static getUV(e,i,r,l,c,d,f,m){return Yc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yc=!0),this.getInterpolation(e,i,r,l,c,d,f,m)}static getInterpolation(e,i,r,l,c,d,f,m){return this.getBarycoord(e,i,r,l,Oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Oa.x),m.addScaledVector(d,Oa.y),m.addScaledVector(f,Oa.z),m)}static isFrontFacing(e,i,r,l){return Yi.subVectors(r,i),Na.subVectors(e,i),Yi.cross(Na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yi.subVectors(this.c,this.b),Na.subVectors(this.a,this.b),Yi.cross(Na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return ji.getBarycoord(e,this.a,this.b,this.c,i)}getUV(e,i,r,l,c){return Yc===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Yc=!0),ji.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}getInterpolation(e,i,r,l,c){return ji.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,f;qs.subVectors(l,r),Ys.subVectors(c,r),ed.subVectors(e,r);const m=qs.dot(ed),p=Ys.dot(ed);if(m<=0&&p<=0)return i.copy(r);td.subVectors(e,l);const g=qs.dot(td),_=Ys.dot(td);if(g>=0&&_<=g)return i.copy(l);const x=m*_-g*p;if(x<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(qs,d);nd.subVectors(e,c);const E=qs.dot(nd),M=Ys.dot(nd);if(M>=0&&E<=M)return i.copy(c);const b=E*p-m*M;if(b<=0&&p>=0&&M<=0)return f=p/(p-M),i.copy(r).addScaledVector(Ys,f);const y=g*M-E*_;if(y<=0&&_-g>=0&&E-M>=0)return Cv.subVectors(c,l),f=(_-g)/(_-g+(E-M)),i.copy(l).addScaledVector(Cv,f);const v=1/(y+b+x);return d=b*v,f=x*v,i.copy(r).addScaledVector(qs,d).addScaledVector(Ys,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},jc={h:0,s:0,l:0};function id(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class kt{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=jt.workingColorSpace){return this.r=e,this.g=i,this.b=r,jt.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=jt.workingColorSpace){if(e=XE(e,1),i=fi(i,0,1),r=fi(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=id(d,c,e+1/3),this.g=id(d,c,e),this.b=id(d,c,e-1/3)}return jt.toWorkingColorSpace(this,l),this}setStyle(e,i=Hn){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],f=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Hn){const r=Z0[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}copyLinearToSRGB(e){return this.r=Wh(e.r),this.g=Wh(e.g),this.b=Wh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Hn){return jt.fromWorkingColorSpace(Zn.copy(this),e),Math.round(fi(Zn.r*255,0,255))*65536+Math.round(fi(Zn.g*255,0,255))*256+Math.round(fi(Zn.b*255,0,255))}getHexString(e=Hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=jt.workingColorSpace){jt.fromWorkingColorSpace(Zn.copy(this),i);const r=Zn.r,l=Zn.g,c=Zn.b,d=Math.max(r,l,c),f=Math.min(r,l,c);let m,p;const g=(f+d)/2;if(f===d)m=0,p=0;else{const _=d-f;switch(p=g<=.5?_/(d+f):_/(2-d-f),d){case r:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-r)/_+2;break;case c:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=jt.workingColorSpace){return jt.fromWorkingColorSpace(Zn.copy(this),i),e.r=Zn.r,e.g=Zn.g,e.b=Zn.b,e}getStyle(e=Hn){jt.fromWorkingColorSpace(Zn.copy(this),e);const i=Zn.r,r=Zn.g,l=Zn.b;return e!==Hn?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+i,mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(mr),e.getHSL(jc);const r=Vh(mr.h,jc.h,i),l=Vh(mr.s,jc.s,i),c=Vh(mr.l,jc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zn=new kt;kt.NAMES=Z0;let sM=0;class Au extends po{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=El(),this.name="",this.type="Material",this.blending=ro,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=yd,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=du,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fs,this.stencilZFail=Fs,this.stencilZPass=Fs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xd&&(r.blendSrc=this.blendSrc),this.blendDst!==yd&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==du&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Fs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Fs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const f in c){const m=c[f];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class K0 extends Au{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=N0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tn=new fe,Zc=new Vt;class ua{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=gv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Zc.fromBufferAttribute(this,i),Zc.applyMatrix3(e),this.setXY(i,Zc.x,Zc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix3(e),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Tn.fromBufferAttribute(this,i),Tn.applyMatrix4(e),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Tn.fromBufferAttribute(this,i),Tn.applyNormalMatrix(e),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Tn.fromBufferAttribute(this,i),Tn.transformDirection(e),this.setXYZ(i,Tn.x,Tn.y,Tn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ol(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=ci(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ol(i,this.array)),i}setX(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ol(i,this.array)),i}setY(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ol(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ol(i,this.array)),i}setW(e,i){return this.normalized&&(i=ci(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),r=ci(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),r=ci(r,this.array),l=ci(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=ci(i,this.array),r=ci(r,this.array),l=ci(l,this.array),c=ci(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gv&&(e.usage=this.usage),e}}class Q0 extends ua{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class J0 extends ua{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class rs extends ua{constructor(e,i,r){super(new Float32Array(e),i,r)}}let oM=0;const zi=new Vn,ad=new Ai,js=new fe,yi=new Tl,fl=new Tl,Nn=new fe;class ls extends po{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=El(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X0(e)?J0:Q0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new yt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,i,r){return zi.makeTranslation(e,i,r),this.applyMatrix4(zi),this}scale(e,i,r){return zi.makeScale(e,i,r),this.applyMatrix4(zi),this}lookAt(e){return ad.lookAt(e),ad.updateMatrix(),this.applyMatrix4(ad.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(js).negate(),this.translate(js.x,js.y,js.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new rs(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];yi.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hd);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new fe,1/0);return}if(e){const r=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const f=i[c];fl.setFromBufferAttribute(f),this.morphTargetsRelative?(Nn.addVectors(yi.min,fl.min),yi.expandByPoint(Nn),Nn.addVectors(yi.max,fl.max),yi.expandByPoint(Nn)):(yi.expandByPoint(fl.min),yi.expandByPoint(fl.max))}yi.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)Nn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Nn));if(i)for(let c=0,d=i.length;c<d;c++){const f=i[c],m=this.morphTargetsRelative;for(let p=0,g=f.count;p<g;p++)Nn.fromBufferAttribute(f,p),m&&(js.fromBufferAttribute(e,p),Nn.add(js)),l=Math.max(l,r.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,l=i.position.array,c=i.normal.array,d=i.uv.array,f=l.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ua(new Float32Array(4*f),4));const m=this.getAttribute("tangent").array,p=[],g=[];for(let N=0;N<f;N++)p[N]=new fe,g[N]=new fe;const _=new fe,x=new fe,E=new fe,M=new Vt,b=new Vt,y=new Vt,v=new fe,O=new fe;function w(N,ne,me){_.fromArray(l,N*3),x.fromArray(l,ne*3),E.fromArray(l,me*3),M.fromArray(d,N*2),b.fromArray(d,ne*2),y.fromArray(d,me*2),x.sub(_),E.sub(_),b.sub(M),y.sub(M);const Ae=1/(b.x*y.y-y.x*b.y);isFinite(Ae)&&(v.copy(x).multiplyScalar(y.y).addScaledVector(E,-b.y).multiplyScalar(Ae),O.copy(E).multiplyScalar(b.x).addScaledVector(x,-y.x).multiplyScalar(Ae),p[N].add(v),p[ne].add(v),p[me].add(v),g[N].add(O),g[ne].add(O),g[me].add(O))}let B=this.groups;B.length===0&&(B=[{start:0,count:r.length}]);for(let N=0,ne=B.length;N<ne;++N){const me=B[N],Ae=me.start,V=me.count;for(let te=Ae,z=Ae+V;te<z;te+=3)w(r[te+0],r[te+1],r[te+2])}const q=new fe,F=new fe,P=new fe,Q=new fe;function A(N){P.fromArray(c,N*3),Q.copy(P);const ne=p[N];q.copy(ne),q.sub(P.multiplyScalar(P.dot(ne))).normalize(),F.crossVectors(Q,ne);const Ae=F.dot(g[N])<0?-1:1;m[N*4]=q.x,m[N*4+1]=q.y,m[N*4+2]=q.z,m[N*4+3]=Ae}for(let N=0,ne=B.length;N<ne;++N){const me=B[N],Ae=me.start,V=me.count;for(let te=Ae,z=Ae+V;te<z;te+=3)A(r[te+0]),A(r[te+1]),A(r[te+2])}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ua(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,E=r.count;x<E;x++)r.setXYZ(x,0,0,0);const l=new fe,c=new fe,d=new fe,f=new fe,m=new fe,p=new fe,g=new fe,_=new fe;if(e)for(let x=0,E=e.count;x<E;x+=3){const M=e.getX(x+0),b=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,b),d.fromBufferAttribute(i,y),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,b),p.fromBufferAttribute(r,y),f.add(g),m.add(g),p.add(g),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(b,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,c),_.subVectors(l,c),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Nn.fromBufferAttribute(e,i),Nn.normalize(),e.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(f,m){const p=f.array,g=f.itemSize,_=f.normalized,x=new p.constructor(m.length*g);let E=0,M=0;for(let b=0,y=m.length;b<y;b++){f.isInterleavedBufferAttribute?E=m[b]*f.data.stride+f.offset:E=m[b]*g;for(let v=0;v<g;v++)x[M++]=p[E++]}return new ua(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ls,r=this.index.array,l=this.attributes;for(const f in l){const m=l[f],p=e(m,r);i.setAttribute(f,p)}const c=this.morphAttributes;for(const f in c){const m=[],p=c[f];for(let g=0,_=p.length;g<_;g++){const x=p[g],E=e(x,r);m.push(E)}i.morphAttributes[f]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,m=d.length;f<m;f++){const p=d[f];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,x=p.length;_<x;_++){const E=p[_];g.push(E.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],_=c[p];for(let x=0,E=_.length;x<E;x++)g.push(_[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lv=new Vn,jr=new JE,Kc=new Hd,Dv=new fe,Zs=new fe,Ks=new fe,Qs=new fe,rd=new fe,Qc=new fe,Jc=new Vt,$c=new Vt,eu=new Vt,Uv=new fe,Nv=new fe,Ov=new fe,tu=new fe,nu=new fe;class Ba extends Ai{constructor(e=new ls,i=new K0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const f=this.morphTargetInfluences;if(c&&f){Qc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=f[m],_=c[m];g!==0&&(rd.fromBufferAttribute(_,e),d?Qc.addScaledVector(rd,g):Qc.addScaledVector(rd.sub(i),g))}i.add(Qc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Kc.copy(r.boundingSphere),Kc.applyMatrix4(c),jr.copy(e.ray).recast(e.near),!(Kc.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Kc,Dv)===null||jr.origin.distanceToSquared(Dv)>(e.far-e.near)**2))&&(Lv.copy(c).invert(),jr.copy(e.ray).applyMatrix4(Lv),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,jr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,f=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,x=c.groups,E=c.drawRange;if(f!==null)if(Array.isArray(d))for(let M=0,b=x.length;M<b;M++){const y=x[M],v=d[y.materialIndex],O=Math.max(y.start,E.start),w=Math.min(f.count,Math.min(y.start+y.count,E.start+E.count));for(let B=O,q=w;B<q;B+=3){const F=f.getX(B),P=f.getX(B+1),Q=f.getX(B+2);l=iu(this,v,e,r,p,g,_,F,P,Q),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,E.start),b=Math.min(f.count,E.start+E.count);for(let y=M,v=b;y<v;y+=3){const O=f.getX(y),w=f.getX(y+1),B=f.getX(y+2);l=iu(this,d,e,r,p,g,_,O,w,B),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let M=0,b=x.length;M<b;M++){const y=x[M],v=d[y.materialIndex],O=Math.max(y.start,E.start),w=Math.min(m.count,Math.min(y.start+y.count,E.start+E.count));for(let B=O,q=w;B<q;B+=3){const F=B,P=B+1,Q=B+2;l=iu(this,v,e,r,p,g,_,F,P,Q),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const M=Math.max(0,E.start),b=Math.min(m.count,E.start+E.count);for(let y=M,v=b;y<v;y+=3){const O=y,w=y+1,B=y+2;l=iu(this,d,e,r,p,g,_,O,w,B),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function lM(s,e,i,r,l,c,d,f){let m;if(e.side===hi?m=r.intersectTriangle(d,c,l,!0,f):m=r.intersectTriangle(l,c,d,e.side===Tr,f),m===null)return null;nu.copy(f),nu.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(nu);return p<i.near||p>i.far?null:{distance:p,point:nu.clone(),object:s}}function iu(s,e,i,r,l,c,d,f,m,p){s.getVertexPosition(f,Zs),s.getVertexPosition(m,Ks),s.getVertexPosition(p,Qs);const g=lM(s,e,i,r,Zs,Ks,Qs,tu);if(g){l&&(Jc.fromBufferAttribute(l,f),$c.fromBufferAttribute(l,m),eu.fromBufferAttribute(l,p),g.uv=ji.getInterpolation(tu,Zs,Ks,Qs,Jc,$c,eu,new Vt)),c&&(Jc.fromBufferAttribute(c,f),$c.fromBufferAttribute(c,m),eu.fromBufferAttribute(c,p),g.uv1=ji.getInterpolation(tu,Zs,Ks,Qs,Jc,$c,eu,new Vt),g.uv2=g.uv1),d&&(Uv.fromBufferAttribute(d,f),Nv.fromBufferAttribute(d,m),Ov.fromBufferAttribute(d,p),g.normal=ji.getInterpolation(tu,Zs,Ks,Qs,Uv,Nv,Ov,new fe),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:m,c:p,normal:new fe,materialIndex:0};ji.getNormal(Zs,Ks,Qs,_.normal),g.face=_}return g}class bl extends ls{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const f=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],_=[];let x=0,E=0;M("z","y","x",-1,-1,r,i,e,d,c,0),M("z","y","x",1,-1,r,i,-e,d,c,1),M("x","z","y",1,1,e,r,i,l,d,2),M("x","z","y",1,-1,e,r,-i,l,d,3),M("x","y","z",1,-1,e,i,r,l,c,4),M("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new rs(p,3)),this.setAttribute("normal",new rs(g,3)),this.setAttribute("uv",new rs(_,2));function M(b,y,v,O,w,B,q,F,P,Q,A){const N=B/P,ne=q/Q,me=B/2,Ae=q/2,V=F/2,te=P+1,z=Q+1;let Z=0,J=0;const le=new fe;for(let pe=0;pe<z;pe++){const D=pe*ne-Ae;for(let Y=0;Y<te;Y++){const k=Y*N-me;le[b]=k*O,le[y]=D*w,le[v]=V,p.push(le.x,le.y,le.z),le[b]=0,le[y]=0,le[v]=F>0?1:-1,g.push(le.x,le.y,le.z),_.push(Y/P),_.push(1-pe/Q),Z+=1}}for(let pe=0;pe<Q;pe++)for(let D=0;D<P;D++){const Y=x+D+te*pe,k=x+D+te*(pe+1),X=x+(D+1)+te*(pe+1),ve=x+(D+1)+te*pe;m.push(Y,k,ve),m.push(k,X,ve),J+=6}f.addGroup(E,J,A),E+=J,x+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function ei(s){const e={};for(let i=0;i<s.length;i++){const r=fo(s[i]);for(const l in r)e[l]=r[l]}return e}function cM(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function $0(s){return s.getRenderTarget()===null?s.outputColorSpace:jt.workingColorSpace}const uM={clone:fo,merge:ei};var fM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends Au{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fM,this.fragmentShader=hM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=cM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class eS extends Ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vn,this.projectionMatrix=new Vn,this.projectionMatrixInverse=new Vn,this.coordinateSystem=Ia}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Zi extends eS{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Rd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(kh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rd*2*Math.atan(Math.tan(kh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(kh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Js=-90,$s=1;class dM extends Ai{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Zi(Js,$s,e,i);l.layers=this.layers,this.add(l);const c=new Zi(Js,$s,e,i);c.layers=this.layers,this.add(c);const d=new Zi(Js,$s,e,i);d.layers=this.layers,this.add(d);const f=new Zi(Js,$s,e,i);f.layers=this.layers,this.add(f);const m=new Zi(Js,$s,e,i);m.layers=this.layers,this.add(m);const p=new Zi(Js,$s,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,f,m]=i;for(const p of i)this.remove(p);if(e===Ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===_u)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,m,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,f),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(_,x,E),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class tS extends bi{constructor(e,i,r,l,c,d,f,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:lo,super(e,i,r,l,c,d,f,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pM extends ss{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];i.encoding!==void 0&&(vl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===as?Hn:Fi),this.texture=new tS(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new bl(5,5,5),c=new br({name:"CubemapFromEquirect",uniforms:fo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:hi,blending:yr});c.uniforms.tEquirect.value=i;const d=new Ba(l,c),f=i.minFilter;return i.minFilter===xl&&(i.minFilter=Bi),new dM(1,10,this).update(e,d),i.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}const sd=new fe,mM=new fe,gM=new yt;class Kr{constructor(e=new fe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=sd.subVectors(r,i).cross(mM.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(sd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||gM.getNormalMatrix(e),l=this.coplanarPoint(sd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Hd,au=new fe;class nS{constructor(e=new Kr,i=new Kr,r=new Kr,l=new Kr,c=new Kr,d=new Kr){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(i),f[2].copy(r),f[3].copy(l),f[4].copy(c),f[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ia){const r=this.planes,l=e.elements,c=l[0],d=l[1],f=l[2],m=l[3],p=l[4],g=l[5],_=l[6],x=l[7],E=l[8],M=l[9],b=l[10],y=l[11],v=l[12],O=l[13],w=l[14],B=l[15];if(r[0].setComponents(m-c,x-p,y-E,B-v).normalize(),r[1].setComponents(m+c,x+p,y+E,B+v).normalize(),r[2].setComponents(m+d,x+g,y+M,B+O).normalize(),r[3].setComponents(m-d,x-g,y-M,B-O).normalize(),r[4].setComponents(m-f,x-_,y-b,B-w).normalize(),i===Ia)r[5].setComponents(m+f,x+_,y+b,B+w).normalize();else if(i===_u)r[5].setComponents(f,_,b,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(au.x=l.normal.x>0?e.max.x:e.min.x,au.y=l.normal.y>0?e.max.y:e.min.y,au.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(au)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function iS(){let s=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function _M(s,e){const i=e.isWebGL2,r=new WeakMap;function l(p,g){const _=p.array,x=p.usage,E=_.byteLength,M=s.createBuffer();s.bindBuffer(g,M),s.bufferData(g,_,x),p.onUploadCallback();let b;if(_ instanceof Float32Array)b=s.FLOAT;else if(_ instanceof Uint16Array)if(p.isFloat16BufferAttribute)if(i)b=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else b=s.UNSIGNED_SHORT;else if(_ instanceof Int16Array)b=s.SHORT;else if(_ instanceof Uint32Array)b=s.UNSIGNED_INT;else if(_ instanceof Int32Array)b=s.INT;else if(_ instanceof Int8Array)b=s.BYTE;else if(_ instanceof Uint8Array)b=s.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)b=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:M,type:b,bytesPerElement:_.BYTES_PER_ELEMENT,version:p.version,size:E}}function c(p,g,_){const x=g.array,E=g._updateRange,M=g.updateRanges;if(s.bindBuffer(_,p),E.count===-1&&M.length===0&&s.bufferSubData(_,0,x),M.length!==0){for(let b=0,y=M.length;b<y;b++){const v=M[b];i?s.bufferSubData(_,v.start*x.BYTES_PER_ELEMENT,x,v.start,v.count):s.bufferSubData(_,v.start*x.BYTES_PER_ELEMENT,x.subarray(v.start,v.start+v.count))}g.clearUpdateRanges()}E.count!==-1&&(i?s.bufferSubData(_,E.offset*x.BYTES_PER_ELEMENT,x,E.offset,E.count):s.bufferSubData(_,E.offset*x.BYTES_PER_ELEMENT,x.subarray(E.offset,E.offset+E.count)),E.count=-1),g.onUploadCallback()}function d(p){return p.isInterleavedBufferAttribute&&(p=p.data),r.get(p)}function f(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=r.get(p);g&&(s.deleteBuffer(g.buffer),r.delete(p))}function m(p,g){if(p.isGLBufferAttribute){const x=r.get(p);(!x||x.version<p.version)&&r.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}p.isInterleavedBufferAttribute&&(p=p.data);const _=r.get(p);if(_===void 0)r.set(p,l(p,g));else if(_.version<p.version){if(_.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");c(_.buffer,p,g),_.version=p.version}}return{get:d,remove:f,update:m}}class Ru extends ls{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,f=Math.floor(r),m=Math.floor(l),p=f+1,g=m+1,_=e/f,x=i/m,E=[],M=[],b=[],y=[];for(let v=0;v<g;v++){const O=v*x-d;for(let w=0;w<p;w++){const B=w*_-c;M.push(B,-O,0),b.push(0,0,1),y.push(w/f),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<f;O++){const w=O+p*v,B=O+p*(v+1),q=O+1+p*(v+1),F=O+1+p*v;E.push(w,B,F),E.push(B,q,F)}this.setIndex(E),this.setAttribute("position",new rs(M,3)),this.setAttribute("normal",new rs(b,3)),this.setAttribute("uv",new rs(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ru(e.width,e.height,e.widthSegments,e.heightSegments)}}var vM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SM=`#ifdef USE_ALPHAHASH
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
#endif`,xM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,MM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TM=`#ifdef USE_AOMAP
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
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,RM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,CM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DM=`#ifdef USE_IRIDESCENCE
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
#endif`,UM=`#ifdef USE_BUMPMAP
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
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,IM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,GM=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,kM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VM=`vec3 transformedNormal = objectNormal;
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
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jM="gl_FragColor = linearToOutputTexel( gl_FragColor );",ZM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,KM=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JM=`#ifdef USE_ENVMAP
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
#endif`,$M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eT=`#ifdef USE_ENVMAP
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
#endif`,tT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rT=`#ifdef USE_GRADIENTMAP
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
}`,sT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,oT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uT=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,fT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,hT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,_T=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vT=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,ST=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,xT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ET=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,TT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wT=`#if defined( USE_POINTS_UV )
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
#endif`,CT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,UT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,NT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,OT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,PT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,FT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HT=`#ifdef USE_NORMALMAP
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
#endif`,GT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,YT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$T=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ib=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ab=`#ifdef USE_SKINNING
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
#endif`,rb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sb=`#ifdef USE_SKINNING
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
#endif`,ob=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ub=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fb=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hb=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _b=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vb=`uniform sampler2D t2D;
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
}`,Sb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Eb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`#include <common>
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
}`,Tb=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bb=`#define DISTANCE
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
}`,Ab=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cb=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lb=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Db=`#include <common>
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
}`,Ub=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Nb=`#define LAMBERT
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
}`,Ob=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Pb=`#define MATCAP
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
}`,zb=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ib=`#define NORMAL
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
}`,Bb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fb=`#define PHONG
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
}`,Hb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Gb=`#define STANDARD
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
}`,kb=`#define STANDARD
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
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Vb=`#define TOON
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
}`,Xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Wb=`uniform float size;
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
}`,qb=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Yb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,jb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Zb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Kb=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,St={alphahash_fragment:vM,alphahash_pars_fragment:SM,alphamap_fragment:xM,alphamap_pars_fragment:yM,alphatest_fragment:EM,alphatest_pars_fragment:MM,aomap_fragment:TM,aomap_pars_fragment:bM,batching_pars_vertex:AM,batching_vertex:RM,begin_vertex:wM,beginnormal_vertex:CM,bsdfs:LM,iridescence_fragment:DM,bumpmap_pars_fragment:UM,clipping_planes_fragment:NM,clipping_planes_pars_fragment:OM,clipping_planes_pars_vertex:PM,clipping_planes_vertex:zM,color_fragment:IM,color_pars_fragment:BM,color_pars_vertex:FM,color_vertex:HM,common:GM,cube_uv_reflection_fragment:kM,defaultnormal_vertex:VM,displacementmap_pars_vertex:XM,displacementmap_vertex:WM,emissivemap_fragment:qM,emissivemap_pars_fragment:YM,colorspace_fragment:jM,colorspace_pars_fragment:ZM,envmap_fragment:KM,envmap_common_pars_fragment:QM,envmap_pars_fragment:JM,envmap_pars_vertex:$M,envmap_physical_pars_fragment:fT,envmap_vertex:eT,fog_vertex:tT,fog_pars_vertex:nT,fog_fragment:iT,fog_pars_fragment:aT,gradientmap_pars_fragment:rT,lightmap_fragment:sT,lightmap_pars_fragment:oT,lights_lambert_fragment:lT,lights_lambert_pars_fragment:cT,lights_pars_begin:uT,lights_toon_fragment:hT,lights_toon_pars_fragment:dT,lights_phong_fragment:pT,lights_phong_pars_fragment:mT,lights_physical_fragment:gT,lights_physical_pars_fragment:_T,lights_fragment_begin:vT,lights_fragment_maps:ST,lights_fragment_end:xT,logdepthbuf_fragment:yT,logdepthbuf_pars_fragment:ET,logdepthbuf_pars_vertex:MT,logdepthbuf_vertex:TT,map_fragment:bT,map_pars_fragment:AT,map_particle_fragment:RT,map_particle_pars_fragment:wT,metalnessmap_fragment:CT,metalnessmap_pars_fragment:LT,morphcolor_vertex:DT,morphnormal_vertex:UT,morphtarget_pars_vertex:NT,morphtarget_vertex:OT,normal_fragment_begin:PT,normal_fragment_maps:zT,normal_pars_fragment:IT,normal_pars_vertex:BT,normal_vertex:FT,normalmap_pars_fragment:HT,clearcoat_normal_fragment_begin:GT,clearcoat_normal_fragment_maps:kT,clearcoat_pars_fragment:VT,iridescence_pars_fragment:XT,opaque_fragment:WT,packing:qT,premultiplied_alpha_fragment:YT,project_vertex:jT,dithering_fragment:ZT,dithering_pars_fragment:KT,roughnessmap_fragment:QT,roughnessmap_pars_fragment:JT,shadowmap_pars_fragment:$T,shadowmap_pars_vertex:eb,shadowmap_vertex:tb,shadowmask_pars_fragment:nb,skinbase_vertex:ib,skinning_pars_vertex:ab,skinning_vertex:rb,skinnormal_vertex:sb,specularmap_fragment:ob,specularmap_pars_fragment:lb,tonemapping_fragment:cb,tonemapping_pars_fragment:ub,transmission_fragment:fb,transmission_pars_fragment:hb,uv_pars_fragment:db,uv_pars_vertex:pb,uv_vertex:mb,worldpos_vertex:gb,background_vert:_b,background_frag:vb,backgroundCube_vert:Sb,backgroundCube_frag:xb,cube_vert:yb,cube_frag:Eb,depth_vert:Mb,depth_frag:Tb,distanceRGBA_vert:bb,distanceRGBA_frag:Ab,equirect_vert:Rb,equirect_frag:wb,linedashed_vert:Cb,linedashed_frag:Lb,meshbasic_vert:Db,meshbasic_frag:Ub,meshlambert_vert:Nb,meshlambert_frag:Ob,meshmatcap_vert:Pb,meshmatcap_frag:zb,meshnormal_vert:Ib,meshnormal_frag:Bb,meshphong_vert:Fb,meshphong_frag:Hb,meshphysical_vert:Gb,meshphysical_frag:kb,meshtoon_vert:Vb,meshtoon_frag:Xb,points_vert:Wb,points_frag:qb,shadow_vert:Yb,shadow_frag:jb,sprite_vert:Zb,sprite_frag:Kb},Pe={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},ca={basic:{uniforms:ei([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:ei([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new kt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:ei([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:ei([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:ei([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new kt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:ei([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:ei([Pe.points,Pe.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:ei([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:ei([Pe.common,Pe.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:ei([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:ei([Pe.sprite,Pe.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:ei([Pe.common,Pe.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:ei([Pe.lights,Pe.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};ca.physical={uniforms:ei([ca.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const ru={r:0,b:0,g:0};function Qb(s,e,i,r,l,c,d){const f=new kt(0);let m=c===!0?0:1,p,g,_=null,x=0,E=null;function M(y,v){let O=!1,w=v.isScene===!0?v.background:null;w&&w.isTexture&&(w=(v.backgroundBlurriness>0?i:e).get(w)),w===null?b(f,m):w&&w.isColor&&(b(w,1),O=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?r.buffers.color.setClear(0,0,0,1,d):B==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||O)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Mu)?(g===void 0&&(g=new Ba(new bl(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:fo(ca.backgroundCube.uniforms),vertexShader:ca.backgroundCube.vertexShader,fragmentShader:ca.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(q,F,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),g.material.uniforms.envMap.value=w,g.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,g.material.toneMapped=jt.getTransfer(w.colorSpace)!==on,(_!==w||x!==w.version||E!==s.toneMapping)&&(g.material.needsUpdate=!0,_=w,x=w.version,E=s.toneMapping),g.layers.enableAll(),y.unshift(g,g.geometry,g.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new Ba(new Ru(2,2),new br({name:"BackgroundMaterial",uniforms:fo(ca.background.uniforms),vertexShader:ca.background.vertexShader,fragmentShader:ca.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,p.material.toneMapped=jt.getTransfer(w.colorSpace)!==on,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||x!==w.version||E!==s.toneMapping)&&(p.material.needsUpdate=!0,_=w,x=w.version,E=s.toneMapping),p.layers.enableAll(),y.unshift(p,p.geometry,p.material,0,0,null))}function b(y,v){y.getRGB(ru,$0(s)),r.buffers.color.setClear(ru.r,ru.g,ru.b,v,d)}return{getClearColor:function(){return f},setClearColor:function(y,v=1){f.set(y),m=v,b(f,m)},getClearAlpha:function(){return m},setClearAlpha:function(y){m=y,b(f,m)},render:M}}function Jb(s,e,i,r){const l=s.getParameter(s.MAX_VERTEX_ATTRIBS),c=r.isWebGL2?null:e.get("OES_vertex_array_object"),d=r.isWebGL2||c!==null,f={},m=y(null);let p=m,g=!1;function _(V,te,z,Z,J){let le=!1;if(d){const pe=b(Z,z,te);p!==pe&&(p=pe,E(p.object)),le=v(V,Z,z,J),le&&O(V,Z,z,J)}else{const pe=te.wireframe===!0;(p.geometry!==Z.id||p.program!==z.id||p.wireframe!==pe)&&(p.geometry=Z.id,p.program=z.id,p.wireframe=pe,le=!0)}J!==null&&i.update(J,s.ELEMENT_ARRAY_BUFFER),(le||g)&&(g=!1,Q(V,te,z,Z),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,i.get(J).buffer))}function x(){return r.isWebGL2?s.createVertexArray():c.createVertexArrayOES()}function E(V){return r.isWebGL2?s.bindVertexArray(V):c.bindVertexArrayOES(V)}function M(V){return r.isWebGL2?s.deleteVertexArray(V):c.deleteVertexArrayOES(V)}function b(V,te,z){const Z=z.wireframe===!0;let J=f[V.id];J===void 0&&(J={},f[V.id]=J);let le=J[te.id];le===void 0&&(le={},J[te.id]=le);let pe=le[Z];return pe===void 0&&(pe=y(x()),le[Z]=pe),pe}function y(V){const te=[],z=[],Z=[];for(let J=0;J<l;J++)te[J]=0,z[J]=0,Z[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:z,attributeDivisors:Z,object:V,attributes:{},index:null}}function v(V,te,z,Z){const J=p.attributes,le=te.attributes;let pe=0;const D=z.getAttributes();for(const Y in D)if(D[Y].location>=0){const X=J[Y];let ve=le[Y];if(ve===void 0&&(Y==="instanceMatrix"&&V.instanceMatrix&&(ve=V.instanceMatrix),Y==="instanceColor"&&V.instanceColor&&(ve=V.instanceColor)),X===void 0||X.attribute!==ve||ve&&X.data!==ve.data)return!0;pe++}return p.attributesNum!==pe||p.index!==Z}function O(V,te,z,Z){const J={},le=te.attributes;let pe=0;const D=z.getAttributes();for(const Y in D)if(D[Y].location>=0){let X=le[Y];X===void 0&&(Y==="instanceMatrix"&&V.instanceMatrix&&(X=V.instanceMatrix),Y==="instanceColor"&&V.instanceColor&&(X=V.instanceColor));const ve={};ve.attribute=X,X&&X.data&&(ve.data=X.data),J[Y]=ve,pe++}p.attributes=J,p.attributesNum=pe,p.index=Z}function w(){const V=p.newAttributes;for(let te=0,z=V.length;te<z;te++)V[te]=0}function B(V){q(V,0)}function q(V,te){const z=p.newAttributes,Z=p.enabledAttributes,J=p.attributeDivisors;z[V]=1,Z[V]===0&&(s.enableVertexAttribArray(V),Z[V]=1),J[V]!==te&&((r.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,te),J[V]=te)}function F(){const V=p.newAttributes,te=p.enabledAttributes;for(let z=0,Z=te.length;z<Z;z++)te[z]!==V[z]&&(s.disableVertexAttribArray(z),te[z]=0)}function P(V,te,z,Z,J,le,pe){pe===!0?s.vertexAttribIPointer(V,te,z,J,le):s.vertexAttribPointer(V,te,z,Z,J,le)}function Q(V,te,z,Z){if(r.isWebGL2===!1&&(V.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const J=Z.attributes,le=z.getAttributes(),pe=te.defaultAttributeValues;for(const D in le){const Y=le[D];if(Y.location>=0){let k=J[D];if(k===void 0&&(D==="instanceMatrix"&&V.instanceMatrix&&(k=V.instanceMatrix),D==="instanceColor"&&V.instanceColor&&(k=V.instanceColor)),k!==void 0){const X=k.normalized,ve=k.itemSize,be=i.get(k);if(be===void 0)continue;const Ce=be.buffer,je=be.type,ke=be.bytesPerElement,tt=r.isWebGL2===!0&&(je===s.INT||je===s.UNSIGNED_INT||k.gpuType===P0);if(k.isInterleavedBufferAttribute){const _t=k.data,se=_t.stride,dn=k.offset;if(_t.isInstancedInterleavedBuffer){for(let Oe=0;Oe<Y.locationSize;Oe++)q(Y.location+Oe,_t.meshPerAttribute);V.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let Oe=0;Oe<Y.locationSize;Oe++)B(Y.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let Oe=0;Oe<Y.locationSize;Oe++)P(Y.location+Oe,ve/Y.locationSize,je,X,se*ke,(dn+ve/Y.locationSize*Oe)*ke,tt)}else{if(k.isInstancedBufferAttribute){for(let _t=0;_t<Y.locationSize;_t++)q(Y.location+_t,k.meshPerAttribute);V.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let _t=0;_t<Y.locationSize;_t++)B(Y.location+_t);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let _t=0;_t<Y.locationSize;_t++)P(Y.location+_t,ve/Y.locationSize,je,X,ve*ke,ve/Y.locationSize*_t*ke,tt)}}else if(pe!==void 0){const X=pe[D];if(X!==void 0)switch(X.length){case 2:s.vertexAttrib2fv(Y.location,X);break;case 3:s.vertexAttrib3fv(Y.location,X);break;case 4:s.vertexAttrib4fv(Y.location,X);break;default:s.vertexAttrib1fv(Y.location,X)}}}}F()}function A(){me();for(const V in f){const te=f[V];for(const z in te){const Z=te[z];for(const J in Z)M(Z[J].object),delete Z[J];delete te[z]}delete f[V]}}function N(V){if(f[V.id]===void 0)return;const te=f[V.id];for(const z in te){const Z=te[z];for(const J in Z)M(Z[J].object),delete Z[J];delete te[z]}delete f[V.id]}function ne(V){for(const te in f){const z=f[te];if(z[V.id]===void 0)continue;const Z=z[V.id];for(const J in Z)M(Z[J].object),delete Z[J];delete z[V.id]}}function me(){Ae(),g=!0,p!==m&&(p=m,E(p.object))}function Ae(){m.geometry=null,m.program=null,m.wireframe=!1}return{setup:_,reset:me,resetDefaultState:Ae,dispose:A,releaseStatesOfGeometry:N,releaseStatesOfProgram:ne,initAttributes:w,enableAttribute:B,disableUnusedAttributes:F}}function $b(s,e,i,r){const l=r.isWebGL2;let c;function d(g){c=g}function f(g,_){s.drawArrays(c,g,_),i.update(_,c,1)}function m(g,_,x){if(x===0)return;let E,M;if(l)E=s,M="drawArraysInstanced";else if(E=e.get("ANGLE_instanced_arrays"),M="drawArraysInstancedANGLE",E===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}E[M](c,g,_,x),i.update(_,c,x)}function p(g,_,x){if(x===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let M=0;M<x;M++)this.render(g[M],_[M]);else{E.multiDrawArraysWEBGL(c,g,0,_,0,x);let M=0;for(let b=0;b<x;b++)M+=_[b];i.update(M,c,1)}}this.setMode=d,this.render=f,this.renderInstances=m,this.renderMultiDraw=p}function eA(s,e,i){let r;function l(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=s.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function c(P){if(P==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const d=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let f=i.precision!==void 0?i.precision:"highp";const m=c(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const p=d||e.has("WEBGL_draw_buffers"),g=i.logarithmicDepthBuffer===!0,_=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),b=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),v=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=x>0,B=d||e.has("OES_texture_float"),q=w&&B,F=d?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:d,drawBuffers:p,getMaxAnisotropy:l,getMaxPrecision:c,precision:f,logarithmicDepthBuffer:g,maxTextures:_,maxVertexTextures:x,maxTextureSize:E,maxCubemapSize:M,maxAttributes:b,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:O,vertexTextures:w,floatFragmentTextures:B,floatVertexTextures:q,maxSamples:F}}function tA(s){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Kr,f=new yt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const E=_.length!==0||x||r!==0||l;return l=x,r=_.length,E},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,x){i=g(_,x,0)},this.setState=function(_,x,E){const M=_.clippingPlanes,b=_.clipIntersection,y=_.clipShadows,v=s.get(_);if(!l||M===null||M.length===0||c&&!y)c?g(null):p();else{const O=c?0:r,w=O*4;let B=v.clippingState||null;m.value=B,B=g(M,x,w,E);for(let q=0;q!==w;++q)B[q]=i[q];v.clippingState=B,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,E,M){const b=_!==null?_.length:0;let y=null;if(b!==0){if(y=m.value,M!==!0||y===null){const v=E+b*4,O=x.matrixWorldInverse;f.getNormalMatrix(O),(y===null||y.length<v)&&(y=new Float32Array(v));for(let w=0,B=E;w!==b;++w,B+=4)d.copy(_[w]).applyMatrix4(O,f),d.normal.toArray(y,B),y[B+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}function nA(s){let e=new WeakMap;function i(d,f){return f===Ed?d.mapping=lo:f===Md&&(d.mapping=co),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Ed||f===Md)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new pM(m.height/2);return p.fromEquirectangularTexture(s,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const f=d.target;f.removeEventListener("dispose",l);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class aS extends eS{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,f-=g*this.view.offsetY,m=f-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const io=4,Pv=[.125,.215,.35,.446,.526,.582],es=20,od=new aS,zv=new kt;let ld=null,cd=0,ud=0;const Qr=(1+Math.sqrt(5))/2,eo=1/Qr,Iv=[new fe(1,1,1),new fe(-1,1,1),new fe(1,1,-1),new fe(-1,1,-1),new fe(0,Qr,eo),new fe(0,Qr,-eo),new fe(eo,0,Qr),new fe(-eo,0,Qr),new fe(Qr,eo,0),new fe(-Qr,eo,0)];class Bv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel(),this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ld,cd,ud),e.scissorTest=!1,su(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===lo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ld=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),ud=this._renderer.getActiveMipmapLevel();const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:yl,format:$i,colorSpace:Fa,depthBuffer:!1},l=Fv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fv(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iA(c)),this._blurMaterial=aA(c,e,i)}return l}_compileMaterial(e){const i=new Ba(this._lodPlanes[0],e);this._renderer.compile(i,od)}_sceneToCubeUV(e,i,r,l){const f=new Zi(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,x=g.toneMapping;g.getClearColor(zv),g.toneMapping=Er,g.autoClear=!1;const E=new K0({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1}),M=new Ba(new bl,E);let b=!1;const y=e.background;y?y.isColor&&(E.color.copy(y),e.background=null,b=!0):(E.color.copy(zv),b=!0);for(let v=0;v<6;v++){const O=v%3;O===0?(f.up.set(0,m[v],0),f.lookAt(p[v],0,0)):O===1?(f.up.set(0,0,m[v]),f.lookAt(0,p[v],0)):(f.up.set(0,m[v],0),f.lookAt(0,0,p[v]));const w=this._cubeSize;su(l,O*w,v>2?w:0,w,w),g.setRenderTarget(l),b&&g.render(M,f),g.render(e,f)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=_,e.background=y}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===lo||e.mapping===co;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hv());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new Ba(this._lodPlanes[0],c),f=c.uniforms;f.envMap.value=e;const m=this._cubeSize;su(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,od)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;for(let l=1;l<this._lodPlanes.length;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Iv[(l-1)%Iv.length];this._blur(e,l-1,l,c,d)}i.autoClear=r}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,f){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Ba(this._lodPlanes[l],p),x=p.uniforms,E=this._sizeLods[r]-1,M=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*es-1),b=c/M,y=isFinite(c)?1+Math.floor(g*b):es;y>es&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${es}`);const v=[];let O=0;for(let P=0;P<es;++P){const Q=P/b,A=Math.exp(-Q*Q/2);v.push(A),P===0?O+=A:P<y&&(O+=2*A)}for(let P=0;P<v.length;P++)v[P]=v[P]/O;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:w}=this;x.dTheta.value=M,x.mipInt.value=w-r;const B=this._sizeLods[l],q=3*B*(l>w-io?l-w+io:0),F=4*(this._cubeSize-B);su(i,q,F,3*B,2*B),m.setRenderTarget(i),m.render(_,od)}}function iA(s){const e=[],i=[],r=[];let l=s;const c=s-io+1+Pv.length;for(let d=0;d<c;d++){const f=Math.pow(2,l);i.push(f);let m=1/f;d>s-io?m=Pv[d-s+io-1]:d===0&&(m=0),r.push(m);const p=1/(f-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],E=6,M=6,b=3,y=2,v=1,O=new Float32Array(b*M*E),w=new Float32Array(y*M*E),B=new Float32Array(v*M*E);for(let F=0;F<E;F++){const P=F%3*2/3-1,Q=F>2?0:-1,A=[P,Q,0,P+2/3,Q,0,P+2/3,Q+1,0,P,Q,0,P+2/3,Q+1,0,P,Q+1,0];O.set(A,b*M*F),w.set(x,y*M*F);const N=[F,F,F,F,F,F];B.set(N,v*M*F)}const q=new ls;q.setAttribute("position",new ua(O,b)),q.setAttribute("uv",new ua(w,y)),q.setAttribute("faceIndex",new ua(B,v)),e.push(q),l>io&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function Fv(s,e,i){const r=new ss(s,e,i);return r.texture.mapping=Mu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function su(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function aA(s,e,i){const r=new Float32Array(es),l=new fe(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Gd(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Hv(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gd(),fragmentShader:`

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
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Gv(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yr,depthTest:!1,depthWrite:!1})}function Gd(){return`

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
	`}function rA(s){let e=new WeakMap,i=null;function r(f){if(f&&f.isTexture){const m=f.mapping,p=m===Ed||m===Md,g=m===lo||m===co;if(p||g)if(f.isRenderTargetTexture&&f.needsPMREMUpdate===!0){f.needsPMREMUpdate=!1;let _=e.get(f);return i===null&&(i=new Bv(s)),_=p?i.fromEquirectangular(f,_):i.fromCubemap(f,_),e.set(f,_),_.texture}else{if(e.has(f))return e.get(f).texture;{const _=f.image;if(p&&_&&_.height>0||g&&_&&l(_)){i===null&&(i=new Bv(s));const x=p?i.fromEquirectangular(f):i.fromCubemap(f);return e.set(f,x),f.addEventListener("dispose",c),x.texture}else return null}}}return f}function l(f){let m=0;const p=6;for(let g=0;g<p;g++)f[g]!==void 0&&m++;return m===p}function c(f){const m=f.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function sA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(r){r.isWebGL2?(i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance")):(i("WEBGL_depth_texture"),i("OES_texture_float"),i("OES_texture_half_float"),i("OES_texture_half_float_linear"),i("OES_standard_derivatives"),i("OES_element_index_uint"),i("OES_vertex_array_object"),i("ANGLE_instanced_arrays")),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function oA(s,e,i,r){const l={},c=new WeakMap;function d(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const M in x.attributes)e.remove(x.attributes[M]);for(const M in x.morphAttributes){const b=x.morphAttributes[M];for(let y=0,v=b.length;y<v;y++)e.remove(b[y])}x.removeEventListener("dispose",d),delete l[x.id];const E=c.get(x);E&&(e.remove(E),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function f(_,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(_){const x=_.attributes;for(const M in x)e.update(x[M],s.ARRAY_BUFFER);const E=_.morphAttributes;for(const M in E){const b=E[M];for(let y=0,v=b.length;y<v;y++)e.update(b[y],s.ARRAY_BUFFER)}}function p(_){const x=[],E=_.index,M=_.attributes.position;let b=0;if(E!==null){const O=E.array;b=E.version;for(let w=0,B=O.length;w<B;w+=3){const q=O[w+0],F=O[w+1],P=O[w+2];x.push(q,F,F,P,P,q)}}else if(M!==void 0){const O=M.array;b=M.version;for(let w=0,B=O.length/3-1;w<B;w+=3){const q=w+0,F=w+1,P=w+2;x.push(q,F,F,P,P,q)}}else return;const y=new(X0(x)?J0:Q0)(x,1);y.version=b;const v=c.get(_);v&&e.remove(v),c.set(_,y)}function g(_){const x=c.get(_);if(x){const E=_.index;E!==null&&x.version<E.version&&p(_)}else p(_);return c.get(_)}return{get:f,update:m,getWireframeAttribute:g}}function lA(s,e,i,r){const l=r.isWebGL2;let c;function d(E){c=E}let f,m;function p(E){f=E.type,m=E.bytesPerElement}function g(E,M){s.drawElements(c,M,f,E*m),i.update(M,c,1)}function _(E,M,b){if(b===0)return;let y,v;if(l)y=s,v="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[v](c,M,f,E*m,b),i.update(M,c,b)}function x(E,M,b){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<b;v++)this.render(E[v]/m,M[v]);else{y.multiDrawElementsWEBGL(c,M,0,f,E,0,b);let v=0;for(let O=0;O<b;O++)v+=M[O];i.update(v,c,1)}}this.setMode=d,this.setIndex=p,this.render=g,this.renderInstances=_,this.renderMultiDraw=x}function cA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(i.calls++,d){case s.TRIANGLES:i.triangles+=f*(c/3);break;case s.LINES:i.lines+=f*(c/2);break;case s.LINE_STRIP:i.lines+=f*(c-1);break;case s.LINE_LOOP:i.lines+=f*c;break;case s.POINTS:i.points+=f*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function uA(s,e){return s[0]-e[0]}function fA(s,e){return Math.abs(e[1])-Math.abs(s[1])}function hA(s,e,i){const r={},l=new Float32Array(8),c=new WeakMap,d=new Gn,f=[];for(let p=0;p<8;p++)f[p]=[p,0];function m(p,g,_){const x=p.morphTargetInfluences;if(e.isWebGL2===!0){const E=g.morphAttributes.position||g.morphAttributes.normal||g.morphAttributes.color,M=E!==void 0?E.length:0;let b=c.get(g);if(b===void 0||b.count!==M){let V=function(){me.dispose(),c.delete(g),g.removeEventListener("dispose",V)};b!==void 0&&b.texture.dispose();const O=g.morphAttributes.position!==void 0,w=g.morphAttributes.normal!==void 0,B=g.morphAttributes.color!==void 0,q=g.morphAttributes.position||[],F=g.morphAttributes.normal||[],P=g.morphAttributes.color||[];let Q=0;O===!0&&(Q=1),w===!0&&(Q=2),B===!0&&(Q=3);let A=g.attributes.position.count*Q,N=1;A>e.maxTextureSize&&(N=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const ne=new Float32Array(A*N*4*M),me=new Y0(ne,A,N,M);me.type=xr,me.needsUpdate=!0;const Ae=Q*4;for(let te=0;te<M;te++){const z=q[te],Z=F[te],J=P[te],le=A*N*4*te;for(let pe=0;pe<z.count;pe++){const D=pe*Ae;O===!0&&(d.fromBufferAttribute(z,pe),ne[le+D+0]=d.x,ne[le+D+1]=d.y,ne[le+D+2]=d.z,ne[le+D+3]=0),w===!0&&(d.fromBufferAttribute(Z,pe),ne[le+D+4]=d.x,ne[le+D+5]=d.y,ne[le+D+6]=d.z,ne[le+D+7]=0),B===!0&&(d.fromBufferAttribute(J,pe),ne[le+D+8]=d.x,ne[le+D+9]=d.y,ne[le+D+10]=d.z,ne[le+D+11]=J.itemSize===4?d.w:1)}}b={count:M,texture:me,size:new Vt(A,N)},c.set(g,b),g.addEventListener("dispose",V)}let y=0;for(let O=0;O<x.length;O++)y+=x[O];const v=g.morphTargetsRelative?1:1-y;_.getUniforms().setValue(s,"morphTargetBaseInfluence",v),_.getUniforms().setValue(s,"morphTargetInfluences",x),_.getUniforms().setValue(s,"morphTargetsTexture",b.texture,i),_.getUniforms().setValue(s,"morphTargetsTextureSize",b.size)}else{const E=x===void 0?0:x.length;let M=r[g.id];if(M===void 0||M.length!==E){M=[];for(let w=0;w<E;w++)M[w]=[w,0];r[g.id]=M}for(let w=0;w<E;w++){const B=M[w];B[0]=w,B[1]=x[w]}M.sort(fA);for(let w=0;w<8;w++)w<E&&M[w][1]?(f[w][0]=M[w][0],f[w][1]=M[w][1]):(f[w][0]=Number.MAX_SAFE_INTEGER,f[w][1]=0);f.sort(uA);const b=g.morphAttributes.position,y=g.morphAttributes.normal;let v=0;for(let w=0;w<8;w++){const B=f[w],q=B[0],F=B[1];q!==Number.MAX_SAFE_INTEGER&&F?(b&&g.getAttribute("morphTarget"+w)!==b[q]&&g.setAttribute("morphTarget"+w,b[q]),y&&g.getAttribute("morphNormal"+w)!==y[q]&&g.setAttribute("morphNormal"+w,y[q]),l[w]=F,v+=F):(b&&g.hasAttribute("morphTarget"+w)===!0&&g.deleteAttribute("morphTarget"+w),y&&g.hasAttribute("morphNormal"+w)===!0&&g.deleteAttribute("morphNormal"+w),l[w]=0)}const O=g.morphTargetsRelative?1:1-v;_.getUniforms().setValue(s,"morphTargetBaseInfluence",O),_.getUniforms().setValue(s,"morphTargetInfluences",l)}}return{update:m}}function dA(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,_=e.get(m,g);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return _}function d(){l=new WeakMap}function f(m){const p=m.target;p.removeEventListener("dispose",f),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}class rS extends bi{constructor(e,i,r,l,c,d,f,m,p,g){if(g=g!==void 0?g:is,g!==is&&g!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===is&&(r=Sr),r===void 0&&g===uo&&(r=ns),super(null,l,c,d,f,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=f!==void 0?f:ti,this.minFilter=m!==void 0?m:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const sS=new bi,oS=new rS(1,1);oS.compareFunction=V0;const lS=new Y0,cS=new KE,uS=new tS,kv=[],Vv=[],Xv=new Float32Array(16),Wv=new Float32Array(9),qv=new Float32Array(4);function mo(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=kv[l];if(c===void 0&&(c=new Float32Array(l),kv[l]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=i,s[d].toArray(c,f)}return c}function Ln(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function Dn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function wu(s,e){let i=Vv[e];i===void 0&&(i=new Int32Array(e),Vv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function pA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function mA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Ln(i,e))return;s.uniform2fv(this.addr,e),Dn(i,e)}}function gA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Ln(i,e))return;s.uniform3fv(this.addr,e),Dn(i,e)}}function _A(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Ln(i,e))return;s.uniform4fv(this.addr,e),Dn(i,e)}}function vA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Ln(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),Dn(i,e)}else{if(Ln(i,r))return;qv.set(r),s.uniformMatrix2fv(this.addr,!1,qv),Dn(i,r)}}function SA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Ln(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),Dn(i,e)}else{if(Ln(i,r))return;Wv.set(r),s.uniformMatrix3fv(this.addr,!1,Wv),Dn(i,r)}}function xA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(Ln(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),Dn(i,e)}else{if(Ln(i,r))return;Xv.set(r),s.uniformMatrix4fv(this.addr,!1,Xv),Dn(i,r)}}function yA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function EA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Ln(i,e))return;s.uniform2iv(this.addr,e),Dn(i,e)}}function MA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Ln(i,e))return;s.uniform3iv(this.addr,e),Dn(i,e)}}function TA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Ln(i,e))return;s.uniform4iv(this.addr,e),Dn(i,e)}}function bA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function AA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Ln(i,e))return;s.uniform2uiv(this.addr,e),Dn(i,e)}}function RA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Ln(i,e))return;s.uniform3uiv(this.addr,e),Dn(i,e)}}function wA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Ln(i,e))return;s.uniform4uiv(this.addr,e),Dn(i,e)}}function CA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);const c=this.type===s.SAMPLER_2D_SHADOW?oS:sS;i.setTexture2D(e||c,l)}function LA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||cS,l)}function DA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||uS,l)}function UA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||lS,l)}function NA(s){switch(s){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return _A;case 35674:return vA;case 35675:return SA;case 35676:return xA;case 5124:case 35670:return yA;case 35667:case 35671:return EA;case 35668:case 35672:return MA;case 35669:case 35673:return TA;case 5125:return bA;case 36294:return AA;case 36295:return RA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return CA;case 35679:case 36299:case 36307:return LA;case 35680:case 36300:case 36308:case 36293:return DA;case 36289:case 36303:case 36311:case 36292:return UA}}function OA(s,e){s.uniform1fv(this.addr,e)}function PA(s,e){const i=mo(e,this.size,2);s.uniform2fv(this.addr,i)}function zA(s,e){const i=mo(e,this.size,3);s.uniform3fv(this.addr,i)}function IA(s,e){const i=mo(e,this.size,4);s.uniform4fv(this.addr,i)}function BA(s,e){const i=mo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function FA(s,e){const i=mo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function HA(s,e){const i=mo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function GA(s,e){s.uniform1iv(this.addr,e)}function kA(s,e){s.uniform2iv(this.addr,e)}function VA(s,e){s.uniform3iv(this.addr,e)}function XA(s,e){s.uniform4iv(this.addr,e)}function WA(s,e){s.uniform1uiv(this.addr,e)}function qA(s,e){s.uniform2uiv(this.addr,e)}function YA(s,e){s.uniform3uiv(this.addr,e)}function jA(s,e){s.uniform4uiv(this.addr,e)}function ZA(s,e,i){const r=this.cache,l=e.length,c=wu(i,l);Ln(r,c)||(s.uniform1iv(this.addr,c),Dn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||sS,c[d])}function KA(s,e,i){const r=this.cache,l=e.length,c=wu(i,l);Ln(r,c)||(s.uniform1iv(this.addr,c),Dn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||cS,c[d])}function QA(s,e,i){const r=this.cache,l=e.length,c=wu(i,l);Ln(r,c)||(s.uniform1iv(this.addr,c),Dn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||uS,c[d])}function JA(s,e,i){const r=this.cache,l=e.length,c=wu(i,l);Ln(r,c)||(s.uniform1iv(this.addr,c),Dn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||lS,c[d])}function $A(s){switch(s){case 5126:return OA;case 35664:return PA;case 35665:return zA;case 35666:return IA;case 35674:return BA;case 35675:return FA;case 35676:return HA;case 5124:case 35670:return GA;case 35667:case 35671:return kA;case 35668:case 35672:return VA;case 35669:case 35673:return XA;case 5125:return WA;case 36294:return qA;case 36295:return YA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return ZA;case 35679:case 36299:case 36307:return KA;case 35680:case 36300:case 36308:case 36293:return QA;case 36289:case 36303:case 36311:case 36292:return JA}}class e1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=NA(i.type)}}class t1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=$A(i.type)}}class n1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const f=l[c];f.setValue(e,i[f.id],r)}}}const fd=/(\w+)(\])?(\[|\.)?/g;function Yv(s,e){s.seq.push(e),s.map[e.id]=e}function i1(s,e,i){const r=s.name,l=r.length;for(fd.lastIndex=0;;){const c=fd.exec(r),d=fd.lastIndex;let f=c[1];const m=c[2]==="]",p=c[3];if(m&&(f=f|0),p===void 0||p==="["&&d+2===l){Yv(i,p===void 0?new e1(f,s,e):new t1(f,s,e));break}else{let _=i.map[f];_===void 0&&(_=new n1(f),Yv(i,_)),i=_}}}class hu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);i1(c,d,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const f=i[c],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function jv(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const a1=37297;let r1=0;function s1(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${i[d]}`)}return r.join(`
`)}function o1(s){const e=jt.getPrimaries(jt.workingColorSpace),i=jt.getPrimaries(s);let r;switch(e===i?r="":e===gu&&i===mu?r="LinearDisplayP3ToLinearSRGB":e===mu&&i===gu&&(r="LinearSRGBToLinearDisplayP3"),s){case Fa:case Tu:return[r,"LinearTransferOETF"];case Hn:case Fd:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[r,"LinearTransferOETF"]}}function Zv(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=s.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+s1(s.getShaderSource(e),d)}else return l}function l1(s,e){const i=o1(e);return`vec4 ${s}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function c1(s,e){let i;switch(e){case vE:i="Linear";break;case SE:i="Reinhard";break;case xE:i="OptimizedCineon";break;case yE:i="ACESFilmic";break;case ME:i="AgX";break;case EE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function u1(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ao).join(`
`)}function f1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ao).join(`
`)}function h1(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function d1(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),i[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return i}function ao(s){return s!==""}function Kv(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qv(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(s){return s.replace(p1,g1)}const m1=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function g1(s,e){let i=St[e];if(i===void 0){const r=m1.get(e);if(r!==void 0)i=St[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Cd(i)}const _1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jv(s){return s.replace(_1,v1)}function v1(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function $v(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function S1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===U0?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===qy?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pa&&(e="SHADOWMAP_TYPE_VSM"),e}function x1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case lo:case co:e="ENVMAP_TYPE_CUBE";break;case Mu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function y1(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===co&&(e="ENVMAP_MODE_REFRACTION"),e}function E1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case N0:e="ENVMAP_BLENDING_MULTIPLY";break;case gE:e="ENVMAP_BLENDING_MIX";break;case _E:e="ENVMAP_BLENDING_ADD";break}return e}function M1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function T1(s,e,i,r){const l=s.getContext(),c=i.defines;let d=i.vertexShader,f=i.fragmentShader;const m=S1(i),p=x1(i),g=y1(i),_=E1(i),x=M1(i),E=i.isWebGL2?"":u1(i),M=f1(i),b=h1(c),y=l.createProgram();let v,O,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ao).join(`
`),v.length>0&&(v+=`
`),O=[E,"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(ao).join(`
`),O.length>0&&(O+=`
`)):(v=[$v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors&&i.isWebGL2?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0&&i.isWebGL2?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),O=[E,$v(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.logarithmicDepthBuffer&&i.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Er?"#define TONE_MAPPING":"",i.toneMapping!==Er?St.tonemapping_pars_fragment:"",i.toneMapping!==Er?c1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,l1("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ao).join(`
`)),d=Cd(d),d=Kv(d,i),d=Qv(d,i),f=Cd(f),f=Kv(f,i),f=Qv(f,i),d=Jv(d),f=Jv(f),i.isWebGL2&&i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,v=[M,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,O=["precision mediump sampler2DArray;","#define varying in",i.glslVersion===_v?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===_v?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+O);const B=w+v+d,q=w+O+f,F=jv(l,l.VERTEX_SHADER,B),P=jv(l,l.FRAGMENT_SHADER,q);l.attachShader(y,F),l.attachShader(y,P),i.index0AttributeName!==void 0?l.bindAttribLocation(y,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(y,0,"position"),l.linkProgram(y);function Q(me){if(s.debug.checkShaderErrors){const Ae=l.getProgramInfoLog(y).trim(),V=l.getShaderInfoLog(F).trim(),te=l.getShaderInfoLog(P).trim();let z=!0,Z=!0;if(l.getProgramParameter(y,l.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,y,F,P);else{const J=Zv(l,F,"vertex"),le=Zv(l,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(y,l.VALIDATE_STATUS)+`

Program Info Log: `+Ae+`
`+J+`
`+le)}else Ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Ae):(V===""||te==="")&&(Z=!1);Z&&(me.diagnostics={runnable:z,programLog:Ae,vertexShader:{log:V,prefix:v},fragmentShader:{log:te,prefix:O}})}l.deleteShader(F),l.deleteShader(P),A=new hu(l,y),N=d1(l,y)}let A;this.getUniforms=function(){return A===void 0&&Q(this),A};let N;this.getAttributes=function(){return N===void 0&&Q(this),N};let ne=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ne===!1&&(ne=l.getProgramParameter(y,a1)),ne},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(y),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=r1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=F,this.fragmentShader=P,this}let b1=0;class A1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new R1(e),i.set(e,r)),r}}class R1{constructor(e){this.id=b1++,this.code=e,this.usedTimes=0}}function w1(s,e,i,r,l,c,d){const f=new j0,m=new A1,p=[],g=l.isWebGL2,_=l.logarithmicDepthBuffer,x=l.vertexTextures;let E=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(A){return A===0?"uv":`uv${A}`}function y(A,N,ne,me,Ae){const V=me.fog,te=Ae.geometry,z=A.isMeshStandardMaterial?me.environment:null,Z=(A.isMeshStandardMaterial?i:e).get(A.envMap||z),J=Z&&Z.mapping===Mu?Z.image.height:null,le=M[A.type];A.precision!==null&&(E=l.getMaxPrecision(A.precision),E!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",E,"instead."));const pe=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,D=pe!==void 0?pe.length:0;let Y=0;te.morphAttributes.position!==void 0&&(Y=1),te.morphAttributes.normal!==void 0&&(Y=2),te.morphAttributes.color!==void 0&&(Y=3);let k,X,ve,be;if(le){const en=ca[le];k=en.vertexShader,X=en.fragmentShader}else k=A.vertexShader,X=A.fragmentShader,m.update(A),ve=m.getVertexShaderID(A),be=m.getFragmentShaderID(A);const Ce=s.getRenderTarget(),je=Ae.isInstancedMesh===!0,ke=Ae.isBatchedMesh===!0,tt=!!A.map,_t=!!A.matcap,se=!!Z,dn=!!A.aoMap,Oe=!!A.lightMap,ot=!!A.bumpMap,Le=!!A.normalMap,Ft=!!A.displacementMap,at=!!A.emissiveMap,U=!!A.metalnessMap,R=!!A.roughnessMap,ie=A.anisotropy>0,Me=A.clearcoat>0,Ee=A.iridescence>0,Se=A.sheen>0,We=A.transmission>0,Ne=ie&&!!A.anisotropyMap,Be=Me&&!!A.clearcoatMap,qe=Me&&!!A.clearcoatNormalMap,ct=Me&&!!A.clearcoatRoughnessMap,ye=Ee&&!!A.iridescenceMap,Rt=Ee&&!!A.iridescenceThicknessMap,dt=Se&&!!A.sheenColorMap,Je=Se&&!!A.sheenRoughnessMap,Fe=!!A.specularMap,Ie=!!A.specularColorMap,Ke=!!A.specularIntensityMap,Ct=We&&!!A.transmissionMap,Kt=We&&!!A.thicknessMap,ut=!!A.gradientMap,we=!!A.alphaMap,H=A.alphaTest>0,De=!!A.alphaHash,Ue=!!A.extensions,nt=!!te.attributes.uv1,Ze=!!te.attributes.uv2,Pt=!!te.attributes.uv3;let Dt=Er;return A.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Dt=s.toneMapping),{isWebGL2:g,shaderID:le,shaderType:A.type,shaderName:A.name,vertexShader:k,fragmentShader:X,defines:A.defines,customVertexShaderID:ve,customFragmentShaderID:be,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:E,batching:ke,instancing:je,instancingColor:je&&Ae.instanceColor!==null,supportsVertexTextures:x,outputColorSpace:Ce===null?s.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:Fa,map:tt,matcap:_t,envMap:se,envMapMode:se&&Z.mapping,envMapCubeUVHeight:J,aoMap:dn,lightMap:Oe,bumpMap:ot,normalMap:Le,displacementMap:x&&Ft,emissiveMap:at,normalMapObjectSpace:Le&&A.normalMapType===zE,normalMapTangentSpace:Le&&A.normalMapType===PE,metalnessMap:U,roughnessMap:R,anisotropy:ie,anisotropyMap:Ne,clearcoat:Me,clearcoatMap:Be,clearcoatNormalMap:qe,clearcoatRoughnessMap:ct,iridescence:Ee,iridescenceMap:ye,iridescenceThicknessMap:Rt,sheen:Se,sheenColorMap:dt,sheenRoughnessMap:Je,specularMap:Fe,specularColorMap:Ie,specularIntensityMap:Ke,transmission:We,transmissionMap:Ct,thicknessMap:Kt,gradientMap:ut,opaque:A.transparent===!1&&A.blending===ro,alphaMap:we,alphaTest:H,alphaHash:De,combine:A.combine,mapUv:tt&&b(A.map.channel),aoMapUv:dn&&b(A.aoMap.channel),lightMapUv:Oe&&b(A.lightMap.channel),bumpMapUv:ot&&b(A.bumpMap.channel),normalMapUv:Le&&b(A.normalMap.channel),displacementMapUv:Ft&&b(A.displacementMap.channel),emissiveMapUv:at&&b(A.emissiveMap.channel),metalnessMapUv:U&&b(A.metalnessMap.channel),roughnessMapUv:R&&b(A.roughnessMap.channel),anisotropyMapUv:Ne&&b(A.anisotropyMap.channel),clearcoatMapUv:Be&&b(A.clearcoatMap.channel),clearcoatNormalMapUv:qe&&b(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&b(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&b(A.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&b(A.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&b(A.sheenColorMap.channel),sheenRoughnessMapUv:Je&&b(A.sheenRoughnessMap.channel),specularMapUv:Fe&&b(A.specularMap.channel),specularColorMapUv:Ie&&b(A.specularColorMap.channel),specularIntensityMapUv:Ke&&b(A.specularIntensityMap.channel),transmissionMapUv:Ct&&b(A.transmissionMap.channel),thicknessMapUv:Kt&&b(A.thicknessMap.channel),alphaMapUv:we&&b(A.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Le||ie),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,vertexUv1s:nt,vertexUv2s:Ze,vertexUv3s:Pt,pointsUvs:Ae.isPoints===!0&&!!te.attributes.uv&&(tt||we),fog:!!V,useFog:A.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:Ae.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:Y,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&ne.length>0,shadowMapType:s.shadowMap.type,toneMapping:Dt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:tt&&A.map.isVideoTexture===!0&&jt.getTransfer(A.map.colorSpace)===on,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===za,flipSided:A.side===hi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionDerivatives:Ue&&A.extensions.derivatives===!0,extensionFragDepth:Ue&&A.extensions.fragDepth===!0,extensionDrawBuffers:Ue&&A.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ue&&A.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ue&&A.extensions.clipCullDistance&&r.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:g||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:g||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:g||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()}}function v(A){const N=[];if(A.shaderID?N.push(A.shaderID):(N.push(A.customVertexShaderID),N.push(A.customFragmentShaderID)),A.defines!==void 0)for(const ne in A.defines)N.push(ne),N.push(A.defines[ne]);return A.isRawShaderMaterial===!1&&(O(N,A),w(N,A),N.push(s.outputColorSpace)),N.push(A.customProgramCacheKey),N.join()}function O(A,N){A.push(N.precision),A.push(N.outputColorSpace),A.push(N.envMapMode),A.push(N.envMapCubeUVHeight),A.push(N.mapUv),A.push(N.alphaMapUv),A.push(N.lightMapUv),A.push(N.aoMapUv),A.push(N.bumpMapUv),A.push(N.normalMapUv),A.push(N.displacementMapUv),A.push(N.emissiveMapUv),A.push(N.metalnessMapUv),A.push(N.roughnessMapUv),A.push(N.anisotropyMapUv),A.push(N.clearcoatMapUv),A.push(N.clearcoatNormalMapUv),A.push(N.clearcoatRoughnessMapUv),A.push(N.iridescenceMapUv),A.push(N.iridescenceThicknessMapUv),A.push(N.sheenColorMapUv),A.push(N.sheenRoughnessMapUv),A.push(N.specularMapUv),A.push(N.specularColorMapUv),A.push(N.specularIntensityMapUv),A.push(N.transmissionMapUv),A.push(N.thicknessMapUv),A.push(N.combine),A.push(N.fogExp2),A.push(N.sizeAttenuation),A.push(N.morphTargetsCount),A.push(N.morphAttributeCount),A.push(N.numDirLights),A.push(N.numPointLights),A.push(N.numSpotLights),A.push(N.numSpotLightMaps),A.push(N.numHemiLights),A.push(N.numRectAreaLights),A.push(N.numDirLightShadows),A.push(N.numPointLightShadows),A.push(N.numSpotLightShadows),A.push(N.numSpotLightShadowsWithMaps),A.push(N.numLightProbes),A.push(N.shadowMapType),A.push(N.toneMapping),A.push(N.numClippingPlanes),A.push(N.numClipIntersection),A.push(N.depthPacking)}function w(A,N){f.disableAll(),N.isWebGL2&&f.enable(0),N.supportsVertexTextures&&f.enable(1),N.instancing&&f.enable(2),N.instancingColor&&f.enable(3),N.matcap&&f.enable(4),N.envMap&&f.enable(5),N.normalMapObjectSpace&&f.enable(6),N.normalMapTangentSpace&&f.enable(7),N.clearcoat&&f.enable(8),N.iridescence&&f.enable(9),N.alphaTest&&f.enable(10),N.vertexColors&&f.enable(11),N.vertexAlphas&&f.enable(12),N.vertexUv1s&&f.enable(13),N.vertexUv2s&&f.enable(14),N.vertexUv3s&&f.enable(15),N.vertexTangents&&f.enable(16),N.anisotropy&&f.enable(17),N.alphaHash&&f.enable(18),N.batching&&f.enable(19),A.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.skinning&&f.enable(4),N.morphTargets&&f.enable(5),N.morphNormals&&f.enable(6),N.morphColors&&f.enable(7),N.premultipliedAlpha&&f.enable(8),N.shadowMapEnabled&&f.enable(9),N.useLegacyLights&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),A.push(f.mask)}function B(A){const N=M[A.type];let ne;if(N){const me=ca[N];ne=uM.clone(me.uniforms)}else ne=A.uniforms;return ne}function q(A,N){let ne;for(let me=0,Ae=p.length;me<Ae;me++){const V=p[me];if(V.cacheKey===N){ne=V,++ne.usedTimes;break}}return ne===void 0&&(ne=new T1(s,N,A,c),p.push(ne)),ne}function F(A){if(--A.usedTimes===0){const N=p.indexOf(A);p[N]=p[p.length-1],p.pop(),A.destroy()}}function P(A){m.remove(A)}function Q(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:B,acquireProgram:q,releaseProgram:F,releaseShaderCache:P,programs:p,dispose:Q}}function C1(){let s=new WeakMap;function e(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function i(c){s.delete(c)}function r(c,d,f){s.get(c)[d]=f}function l(){s=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function L1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function e0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function t0(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(_,x,E,M,b,y){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:E,groupOrder:M,renderOrder:_.renderOrder,z:b,group:y},s[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=E,v.groupOrder=M,v.renderOrder=_.renderOrder,v.z=b,v.group=y),e++,v}function f(_,x,E,M,b,y){const v=d(_,x,E,M,b,y);E.transmission>0?r.push(v):E.transparent===!0?l.push(v):i.push(v)}function m(_,x,E,M,b,y){const v=d(_,x,E,M,b,y);E.transmission>0?r.unshift(v):E.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,x){i.length>1&&i.sort(_||L1),r.length>1&&r.sort(x||e0),l.length>1&&l.sort(x||e0)}function g(){for(let _=e,x=s.length;_<x;_++){const E=s[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:f,unshift:m,finish:g,sort:p}}function D1(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new t0,s.set(r,[d])):l>=c.length?(d=new t0,c.push(d)):d=c[l],d}function i(){s=new WeakMap}return{get:e,dispose:i}}function U1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new fe,color:new kt};break;case"SpotLight":i={position:new fe,direction:new fe,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new fe,color:new kt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new fe,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":i={color:new kt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return s[e.id]=i,i}}}function N1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let O1=0;function P1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function z1(s,e){const i=new U1,r=N1(),l={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)l.probe.push(new fe);const c=new fe,d=new Vn,f=new Vn;function m(g,_){let x=0,E=0,M=0;for(let me=0;me<9;me++)l.probe[me].set(0,0,0);let b=0,y=0,v=0,O=0,w=0,B=0,q=0,F=0,P=0,Q=0,A=0;g.sort(P1);const N=_===!0?Math.PI:1;for(let me=0,Ae=g.length;me<Ae;me++){const V=g[me],te=V.color,z=V.intensity,Z=V.distance,J=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)x+=te.r*z*N,E+=te.g*z*N,M+=te.b*z*N;else if(V.isLightProbe){for(let le=0;le<9;le++)l.probe[le].addScaledVector(V.sh.coefficients[le],z);A++}else if(V.isDirectionalLight){const le=i.get(V);if(le.color.copy(V.color).multiplyScalar(V.intensity*N),V.castShadow){const pe=V.shadow,D=r.get(V);D.shadowBias=pe.bias,D.shadowNormalBias=pe.normalBias,D.shadowRadius=pe.radius,D.shadowMapSize=pe.mapSize,l.directionalShadow[b]=D,l.directionalShadowMap[b]=J,l.directionalShadowMatrix[b]=V.shadow.matrix,B++}l.directional[b]=le,b++}else if(V.isSpotLight){const le=i.get(V);le.position.setFromMatrixPosition(V.matrixWorld),le.color.copy(te).multiplyScalar(z*N),le.distance=Z,le.coneCos=Math.cos(V.angle),le.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),le.decay=V.decay,l.spot[v]=le;const pe=V.shadow;if(V.map&&(l.spotLightMap[P]=V.map,P++,pe.updateMatrices(V),V.castShadow&&Q++),l.spotLightMatrix[v]=pe.matrix,V.castShadow){const D=r.get(V);D.shadowBias=pe.bias,D.shadowNormalBias=pe.normalBias,D.shadowRadius=pe.radius,D.shadowMapSize=pe.mapSize,l.spotShadow[v]=D,l.spotShadowMap[v]=J,F++}v++}else if(V.isRectAreaLight){const le=i.get(V);le.color.copy(te).multiplyScalar(z),le.halfWidth.set(V.width*.5,0,0),le.halfHeight.set(0,V.height*.5,0),l.rectArea[O]=le,O++}else if(V.isPointLight){const le=i.get(V);if(le.color.copy(V.color).multiplyScalar(V.intensity*N),le.distance=V.distance,le.decay=V.decay,V.castShadow){const pe=V.shadow,D=r.get(V);D.shadowBias=pe.bias,D.shadowNormalBias=pe.normalBias,D.shadowRadius=pe.radius,D.shadowMapSize=pe.mapSize,D.shadowCameraNear=pe.camera.near,D.shadowCameraFar=pe.camera.far,l.pointShadow[y]=D,l.pointShadowMap[y]=J,l.pointShadowMatrix[y]=V.shadow.matrix,q++}l.point[y]=le,y++}else if(V.isHemisphereLight){const le=i.get(V);le.skyColor.copy(V.color).multiplyScalar(z*N),le.groundColor.copy(V.groundColor).multiplyScalar(z*N),l.hemi[w]=le,w++}}O>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Pe.LTC_FLOAT_1,l.rectAreaLTC2=Pe.LTC_FLOAT_2):(l.rectAreaLTC1=Pe.LTC_HALF_1,l.rectAreaLTC2=Pe.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(l.rectAreaLTC1=Pe.LTC_FLOAT_1,l.rectAreaLTC2=Pe.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(l.rectAreaLTC1=Pe.LTC_HALF_1,l.rectAreaLTC2=Pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),l.ambient[0]=x,l.ambient[1]=E,l.ambient[2]=M;const ne=l.hash;(ne.directionalLength!==b||ne.pointLength!==y||ne.spotLength!==v||ne.rectAreaLength!==O||ne.hemiLength!==w||ne.numDirectionalShadows!==B||ne.numPointShadows!==q||ne.numSpotShadows!==F||ne.numSpotMaps!==P||ne.numLightProbes!==A)&&(l.directional.length=b,l.spot.length=v,l.rectArea.length=O,l.point.length=y,l.hemi.length=w,l.directionalShadow.length=B,l.directionalShadowMap.length=B,l.pointShadow.length=q,l.pointShadowMap.length=q,l.spotShadow.length=F,l.spotShadowMap.length=F,l.directionalShadowMatrix.length=B,l.pointShadowMatrix.length=q,l.spotLightMatrix.length=F+P-Q,l.spotLightMap.length=P,l.numSpotLightShadowsWithMaps=Q,l.numLightProbes=A,ne.directionalLength=b,ne.pointLength=y,ne.spotLength=v,ne.rectAreaLength=O,ne.hemiLength=w,ne.numDirectionalShadows=B,ne.numPointShadows=q,ne.numSpotShadows=F,ne.numSpotMaps=P,ne.numLightProbes=A,l.version=O1++)}function p(g,_){let x=0,E=0,M=0,b=0,y=0;const v=_.matrixWorldInverse;for(let O=0,w=g.length;O<w;O++){const B=g[O];if(B.isDirectionalLight){const q=l.directional[x];q.direction.setFromMatrixPosition(B.matrixWorld),c.setFromMatrixPosition(B.target.matrixWorld),q.direction.sub(c),q.direction.transformDirection(v),x++}else if(B.isSpotLight){const q=l.spot[M];q.position.setFromMatrixPosition(B.matrixWorld),q.position.applyMatrix4(v),q.direction.setFromMatrixPosition(B.matrixWorld),c.setFromMatrixPosition(B.target.matrixWorld),q.direction.sub(c),q.direction.transformDirection(v),M++}else if(B.isRectAreaLight){const q=l.rectArea[b];q.position.setFromMatrixPosition(B.matrixWorld),q.position.applyMatrix4(v),f.identity(),d.copy(B.matrixWorld),d.premultiply(v),f.extractRotation(d),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),q.halfWidth.applyMatrix4(f),q.halfHeight.applyMatrix4(f),b++}else if(B.isPointLight){const q=l.point[E];q.position.setFromMatrixPosition(B.matrixWorld),q.position.applyMatrix4(v),E++}else if(B.isHemisphereLight){const q=l.hemi[y];q.direction.setFromMatrixPosition(B.matrixWorld),q.direction.transformDirection(v),y++}}}return{setup:m,setupView:p,state:l}}function n0(s,e){const i=new z1(s,e),r=[],l=[];function c(){r.length=0,l.length=0}function d(_){r.push(_)}function f(_){l.push(_)}function m(_){i.setup(r,_)}function p(_){i.setupView(r,_)}return{init:c,state:{lightsArray:r,shadowsArray:l,lights:i},setupLights:m,setupLightsView:p,pushLight:d,pushShadow:f}}function I1(s,e){let i=new WeakMap;function r(c,d=0){const f=i.get(c);let m;return f===void 0?(m=new n0(s,e),i.set(c,[m])):d>=f.length?(m=new n0(s,e),f.push(m)):m=f[d],m}function l(){i=new WeakMap}return{get:r,dispose:l}}class B1 extends Au{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=NE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F1 extends Au{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k1(s,e,i){let r=new nS;const l=new Vt,c=new Vt,d=new Gn,f=new B1({depthPacking:OE}),m=new F1,p={},g=i.maxTextureSize,_={[Tr]:hi,[hi]:Tr,[za]:za},x=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:H1,fragmentShader:G1}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const M=new ls;M.setAttribute("position",new ua(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ba(M,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U0;let v=this.type;this.render=function(F,P,Q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const A=s.getRenderTarget(),N=s.getActiveCubeFace(),ne=s.getActiveMipmapLevel(),me=s.state;me.setBlending(yr),me.buffers.color.setClear(1,1,1,1),me.buffers.depth.setTest(!0),me.setScissorTest(!1);const Ae=v!==Pa&&this.type===Pa,V=v===Pa&&this.type!==Pa;for(let te=0,z=F.length;te<z;te++){const Z=F[te],J=Z.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;l.copy(J.mapSize);const le=J.getFrameExtents();if(l.multiply(le),c.copy(J.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/le.x),l.x=c.x*le.x,J.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/le.y),l.y=c.y*le.y,J.mapSize.y=c.y)),J.map===null||Ae===!0||V===!0){const D=this.type!==Pa?{minFilter:ti,magFilter:ti}:{};J.map!==null&&J.map.dispose(),J.map=new ss(l.x,l.y,D),J.map.texture.name=Z.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();const pe=J.getViewportCount();for(let D=0;D<pe;D++){const Y=J.getViewport(D);d.set(c.x*Y.x,c.y*Y.y,c.x*Y.z,c.y*Y.w),me.viewport(d),J.updateMatrices(Z,D),r=J.getFrustum(),B(P,Q,J.camera,Z,this.type)}J.isPointLightShadow!==!0&&this.type===Pa&&O(J,Q),J.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(A,N,ne)};function O(F,P){const Q=e.update(b);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,E.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new ss(l.x,l.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(P,null,Q,x,b,null),E.uniforms.shadow_pass.value=F.mapPass.texture,E.uniforms.resolution.value=F.mapSize,E.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(P,null,Q,E,b,null)}function w(F,P,Q,A){let N=null;const ne=Q.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(ne!==void 0)N=ne;else if(N=Q.isPointLight===!0?m:f,s.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const me=N.uuid,Ae=P.uuid;let V=p[me];V===void 0&&(V={},p[me]=V);let te=V[Ae];te===void 0&&(te=N.clone(),V[Ae]=te,P.addEventListener("dispose",q)),N=te}if(N.visible=P.visible,N.wireframe=P.wireframe,A===Pa?N.side=P.shadowSide!==null?P.shadowSide:P.side:N.side=P.shadowSide!==null?P.shadowSide:_[P.side],N.alphaMap=P.alphaMap,N.alphaTest=P.alphaTest,N.map=P.map,N.clipShadows=P.clipShadows,N.clippingPlanes=P.clippingPlanes,N.clipIntersection=P.clipIntersection,N.displacementMap=P.displacementMap,N.displacementScale=P.displacementScale,N.displacementBias=P.displacementBias,N.wireframeLinewidth=P.wireframeLinewidth,N.linewidth=P.linewidth,Q.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const me=s.properties.get(N);me.light=Q}return N}function B(F,P,Q,A,N){if(F.visible===!1)return;if(F.layers.test(P.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&N===Pa)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,F.matrixWorld);const Ae=e.update(F),V=F.material;if(Array.isArray(V)){const te=Ae.groups;for(let z=0,Z=te.length;z<Z;z++){const J=te[z],le=V[J.materialIndex];if(le&&le.visible){const pe=w(F,le,A,N);F.onBeforeShadow(s,F,P,Q,Ae,pe,J),s.renderBufferDirect(Q,null,Ae,pe,F,J),F.onAfterShadow(s,F,P,Q,Ae,pe,J)}}}else if(V.visible){const te=w(F,V,A,N);F.onBeforeShadow(s,F,P,Q,Ae,te,null),s.renderBufferDirect(Q,null,Ae,te,F,null),F.onAfterShadow(s,F,P,Q,Ae,te,null)}}const me=F.children;for(let Ae=0,V=me.length;Ae<V;Ae++)B(me[Ae],P,Q,A,N)}function q(F){F.target.removeEventListener("dispose",q);for(const Q in p){const A=p[Q],N=F.target.uuid;N in A&&(A[N].dispose(),delete A[N])}}}function V1(s,e,i){const r=i.isWebGL2;function l(){let H=!1;const De=new Gn;let Ue=null;const nt=new Gn(0,0,0,0);return{setMask:function(Ze){Ue!==Ze&&!H&&(s.colorMask(Ze,Ze,Ze,Ze),Ue=Ze)},setLocked:function(Ze){H=Ze},setClear:function(Ze,Pt,Dt,Qt,en){en===!0&&(Ze*=Qt,Pt*=Qt,Dt*=Qt),De.set(Ze,Pt,Dt,Qt),nt.equals(De)===!1&&(s.clearColor(Ze,Pt,Dt,Qt),nt.copy(De))},reset:function(){H=!1,Ue=null,nt.set(-1,0,0,0)}}}function c(){let H=!1,De=null,Ue=null,nt=null;return{setTest:function(Ze){Ze?ke(s.DEPTH_TEST):tt(s.DEPTH_TEST)},setMask:function(Ze){De!==Ze&&!H&&(s.depthMask(Ze),De=Ze)},setFunc:function(Ze){if(Ue!==Ze){switch(Ze){case cE:s.depthFunc(s.NEVER);break;case uE:s.depthFunc(s.ALWAYS);break;case fE:s.depthFunc(s.LESS);break;case du:s.depthFunc(s.LEQUAL);break;case hE:s.depthFunc(s.EQUAL);break;case dE:s.depthFunc(s.GEQUAL);break;case pE:s.depthFunc(s.GREATER);break;case mE:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ue=Ze}},setLocked:function(Ze){H=Ze},setClear:function(Ze){nt!==Ze&&(s.clearDepth(Ze),nt=Ze)},reset:function(){H=!1,De=null,Ue=null,nt=null}}}function d(){let H=!1,De=null,Ue=null,nt=null,Ze=null,Pt=null,Dt=null,Qt=null,en=null;return{setTest:function(xt){H||(xt?ke(s.STENCIL_TEST):tt(s.STENCIL_TEST))},setMask:function(xt){De!==xt&&!H&&(s.stencilMask(xt),De=xt)},setFunc:function(xt,nn,Pn){(Ue!==xt||nt!==nn||Ze!==Pn)&&(s.stencilFunc(xt,nn,Pn),Ue=xt,nt=nn,Ze=Pn)},setOp:function(xt,nn,Pn){(Pt!==xt||Dt!==nn||Qt!==Pn)&&(s.stencilOp(xt,nn,Pn),Pt=xt,Dt=nn,Qt=Pn)},setLocked:function(xt){H=xt},setClear:function(xt){en!==xt&&(s.clearStencil(xt),en=xt)},reset:function(){H=!1,De=null,Ue=null,nt=null,Ze=null,Pt=null,Dt=null,Qt=null,en=null}}}const f=new l,m=new c,p=new d,g=new WeakMap,_=new WeakMap;let x={},E={},M=new WeakMap,b=[],y=null,v=!1,O=null,w=null,B=null,q=null,F=null,P=null,Q=null,A=new kt(0,0,0),N=0,ne=!1,me=null,Ae=null,V=null,te=null,z=null;const Z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,le=0;const pe=s.getParameter(s.VERSION);pe.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(pe)[1]),J=le>=1):pe.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(pe)[1]),J=le>=2);let D=null,Y={};const k=s.getParameter(s.SCISSOR_BOX),X=s.getParameter(s.VIEWPORT),ve=new Gn().fromArray(k),be=new Gn().fromArray(X);function Ce(H,De,Ue,nt){const Ze=new Uint8Array(4),Pt=s.createTexture();s.bindTexture(H,Pt),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Dt=0;Dt<Ue;Dt++)r&&(H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY)?s.texImage3D(De,0,s.RGBA,1,1,nt,0,s.RGBA,s.UNSIGNED_BYTE,Ze):s.texImage2D(De+Dt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ze);return Pt}const je={};je[s.TEXTURE_2D]=Ce(s.TEXTURE_2D,s.TEXTURE_2D,1),je[s.TEXTURE_CUBE_MAP]=Ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(je[s.TEXTURE_2D_ARRAY]=Ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),je[s.TEXTURE_3D]=Ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),f.setClear(0,0,0,1),m.setClear(1),p.setClear(0),ke(s.DEPTH_TEST),m.setFunc(du),at(!1),U(I_),ke(s.CULL_FACE),Le(yr);function ke(H){x[H]!==!0&&(s.enable(H),x[H]=!0)}function tt(H){x[H]!==!1&&(s.disable(H),x[H]=!1)}function _t(H,De){return E[H]!==De?(s.bindFramebuffer(H,De),E[H]=De,r&&(H===s.DRAW_FRAMEBUFFER&&(E[s.FRAMEBUFFER]=De),H===s.FRAMEBUFFER&&(E[s.DRAW_FRAMEBUFFER]=De)),!0):!1}function se(H,De){let Ue=b,nt=!1;if(H)if(Ue=M.get(De),Ue===void 0&&(Ue=[],M.set(De,Ue)),H.isWebGLMultipleRenderTargets){const Ze=H.texture;if(Ue.length!==Ze.length||Ue[0]!==s.COLOR_ATTACHMENT0){for(let Pt=0,Dt=Ze.length;Pt<Dt;Pt++)Ue[Pt]=s.COLOR_ATTACHMENT0+Pt;Ue.length=Ze.length,nt=!0}}else Ue[0]!==s.COLOR_ATTACHMENT0&&(Ue[0]=s.COLOR_ATTACHMENT0,nt=!0);else Ue[0]!==s.BACK&&(Ue[0]=s.BACK,nt=!0);nt&&(i.isWebGL2?s.drawBuffers(Ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ue))}function dn(H){return y!==H?(s.useProgram(H),y=H,!0):!1}const Oe={[$r]:s.FUNC_ADD,[jy]:s.FUNC_SUBTRACT,[Zy]:s.FUNC_REVERSE_SUBTRACT};if(r)Oe[G_]=s.MIN,Oe[k_]=s.MAX;else{const H=e.get("EXT_blend_minmax");H!==null&&(Oe[G_]=H.MIN_EXT,Oe[k_]=H.MAX_EXT)}const ot={[Ky]:s.ZERO,[Qy]:s.ONE,[Jy]:s.SRC_COLOR,[xd]:s.SRC_ALPHA,[aE]:s.SRC_ALPHA_SATURATE,[nE]:s.DST_COLOR,[eE]:s.DST_ALPHA,[$y]:s.ONE_MINUS_SRC_COLOR,[yd]:s.ONE_MINUS_SRC_ALPHA,[iE]:s.ONE_MINUS_DST_COLOR,[tE]:s.ONE_MINUS_DST_ALPHA,[rE]:s.CONSTANT_COLOR,[sE]:s.ONE_MINUS_CONSTANT_COLOR,[oE]:s.CONSTANT_ALPHA,[lE]:s.ONE_MINUS_CONSTANT_ALPHA};function Le(H,De,Ue,nt,Ze,Pt,Dt,Qt,en,xt){if(H===yr){v===!0&&(tt(s.BLEND),v=!1);return}if(v===!1&&(ke(s.BLEND),v=!0),H!==Yy){if(H!==O||xt!==ne){if((w!==$r||F!==$r)&&(s.blendEquation(s.FUNC_ADD),w=$r,F=$r),xt)switch(H){case ro:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case B_:s.blendFunc(s.ONE,s.ONE);break;case F_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case H_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case ro:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case B_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case F_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case H_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}B=null,q=null,P=null,Q=null,A.set(0,0,0),N=0,O=H,ne=xt}return}Ze=Ze||De,Pt=Pt||Ue,Dt=Dt||nt,(De!==w||Ze!==F)&&(s.blendEquationSeparate(Oe[De],Oe[Ze]),w=De,F=Ze),(Ue!==B||nt!==q||Pt!==P||Dt!==Q)&&(s.blendFuncSeparate(ot[Ue],ot[nt],ot[Pt],ot[Dt]),B=Ue,q=nt,P=Pt,Q=Dt),(Qt.equals(A)===!1||en!==N)&&(s.blendColor(Qt.r,Qt.g,Qt.b,en),A.copy(Qt),N=en),O=H,ne=!1}function Ft(H,De){H.side===za?tt(s.CULL_FACE):ke(s.CULL_FACE);let Ue=H.side===hi;De&&(Ue=!Ue),at(Ue),H.blending===ro&&H.transparent===!1?Le(yr):Le(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),m.setFunc(H.depthFunc),m.setTest(H.depthTest),m.setMask(H.depthWrite),f.setMask(H.colorWrite);const nt=H.stencilWrite;p.setTest(nt),nt&&(p.setMask(H.stencilWriteMask),p.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),p.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ie(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ke(s.SAMPLE_ALPHA_TO_COVERAGE):tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(H){me!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),me=H)}function U(H){H!==Xy?(ke(s.CULL_FACE),H!==Ae&&(H===I_?s.cullFace(s.BACK):H===Wy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):tt(s.CULL_FACE),Ae=H}function R(H){H!==V&&(J&&s.lineWidth(H),V=H)}function ie(H,De,Ue){H?(ke(s.POLYGON_OFFSET_FILL),(te!==De||z!==Ue)&&(s.polygonOffset(De,Ue),te=De,z=Ue)):tt(s.POLYGON_OFFSET_FILL)}function Me(H){H?ke(s.SCISSOR_TEST):tt(s.SCISSOR_TEST)}function Ee(H){H===void 0&&(H=s.TEXTURE0+Z-1),D!==H&&(s.activeTexture(H),D=H)}function Se(H,De,Ue){Ue===void 0&&(D===null?Ue=s.TEXTURE0+Z-1:Ue=D);let nt=Y[Ue];nt===void 0&&(nt={type:void 0,texture:void 0},Y[Ue]=nt),(nt.type!==H||nt.texture!==De)&&(D!==Ue&&(s.activeTexture(Ue),D=Ue),s.bindTexture(H,De||je[H]),nt.type=H,nt.texture=De)}function We(){const H=Y[D];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ne(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Be(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ct(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Rt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Je(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Fe(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ke(H){ve.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ve.copy(H))}function Ct(H){be.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),be.copy(H))}function Kt(H,De){let Ue=_.get(De);Ue===void 0&&(Ue=new WeakMap,_.set(De,Ue));let nt=Ue.get(H);nt===void 0&&(nt=s.getUniformBlockIndex(De,H.name),Ue.set(H,nt))}function ut(H,De){const nt=_.get(De).get(H);g.get(De)!==nt&&(s.uniformBlockBinding(De,nt,H.__bindingPointIndex),g.set(De,nt))}function we(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),r===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},D=null,Y={},E={},M=new WeakMap,b=[],y=null,v=!1,O=null,w=null,B=null,q=null,F=null,P=null,Q=null,A=new kt(0,0,0),N=0,ne=!1,me=null,Ae=null,V=null,te=null,z=null,ve.set(0,0,s.canvas.width,s.canvas.height),be.set(0,0,s.canvas.width,s.canvas.height),f.reset(),m.reset(),p.reset()}return{buffers:{color:f,depth:m,stencil:p},enable:ke,disable:tt,bindFramebuffer:_t,drawBuffers:se,useProgram:dn,setBlending:Le,setMaterial:Ft,setFlipSided:at,setCullFace:U,setLineWidth:R,setPolygonOffset:ie,setScissorTest:Me,activeTexture:Ee,bindTexture:Se,unbindTexture:We,compressedTexImage2D:Ne,compressedTexImage3D:Be,texImage2D:Fe,texImage3D:Ie,updateUBOMapping:Kt,uniformBlockBinding:ut,texStorage2D:dt,texStorage3D:Je,texSubImage2D:qe,texSubImage3D:ct,compressedTexSubImage2D:ye,compressedTexSubImage3D:Rt,scissor:Ke,viewport:Ct,reset:we}}function X1(s,e,i,r,l,c,d){const f=l.isWebGL2,m=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,R){return E?new OffscreenCanvas(U,R):vu("canvas")}function b(U,R,ie,Me){let Ee=1;if((U.width>Me||U.height>Me)&&(Ee=Me/Math.max(U.width,U.height)),Ee<1||R===!0)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap){const Se=R?wd:Math.floor,We=Se(Ee*U.width),Ne=Se(Ee*U.height);_===void 0&&(_=M(We,Ne));const Be=ie?M(We,Ne):_;return Be.width=We,Be.height=Ne,Be.getContext("2d").drawImage(U,0,0,We,Ne),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+We+"x"+Ne+")."),Be}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),U;return U}function y(U){return vv(U.width)&&vv(U.height)}function v(U){return f?!1:U.wrapS!==Ji||U.wrapT!==Ji||U.minFilter!==ti&&U.minFilter!==Bi}function O(U,R){return U.generateMipmaps&&R&&U.minFilter!==ti&&U.minFilter!==Bi}function w(U){s.generateMipmap(U)}function B(U,R,ie,Me,Ee=!1){if(f===!1)return R;if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Se=R;if(R===s.RED&&(ie===s.FLOAT&&(Se=s.R32F),ie===s.HALF_FLOAT&&(Se=s.R16F),ie===s.UNSIGNED_BYTE&&(Se=s.R8)),R===s.RED_INTEGER&&(ie===s.UNSIGNED_BYTE&&(Se=s.R8UI),ie===s.UNSIGNED_SHORT&&(Se=s.R16UI),ie===s.UNSIGNED_INT&&(Se=s.R32UI),ie===s.BYTE&&(Se=s.R8I),ie===s.SHORT&&(Se=s.R16I),ie===s.INT&&(Se=s.R32I)),R===s.RG&&(ie===s.FLOAT&&(Se=s.RG32F),ie===s.HALF_FLOAT&&(Se=s.RG16F),ie===s.UNSIGNED_BYTE&&(Se=s.RG8)),R===s.RGBA){const We=Ee?pu:jt.getTransfer(Me);ie===s.FLOAT&&(Se=s.RGBA32F),ie===s.HALF_FLOAT&&(Se=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(Se=We===on?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT_4_4_4_4&&(Se=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(Se=s.RGB5_A1)}return(Se===s.R16F||Se===s.R32F||Se===s.RG16F||Se===s.RG32F||Se===s.RGBA16F||Se===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Se}function q(U,R,ie){return O(U,ie)===!0||U.isFramebufferTexture&&U.minFilter!==ti&&U.minFilter!==Bi?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function F(U){return U===ti||U===V_||U===zh?s.NEAREST:s.LINEAR}function P(U){const R=U.target;R.removeEventListener("dispose",P),A(R),R.isVideoTexture&&g.delete(R)}function Q(U){const R=U.target;R.removeEventListener("dispose",Q),ne(R)}function A(U){const R=r.get(U);if(R.__webglInit===void 0)return;const ie=U.source,Me=x.get(ie);if(Me){const Ee=Me[R.__cacheKey];Ee.usedTimes--,Ee.usedTimes===0&&N(U),Object.keys(Me).length===0&&x.delete(ie)}r.remove(U)}function N(U){const R=r.get(U);s.deleteTexture(R.__webglTexture);const ie=U.source,Me=x.get(ie);delete Me[R.__cacheKey],d.memory.textures--}function ne(U){const R=U.texture,ie=r.get(U),Me=r.get(R);if(Me.__webglTexture!==void 0&&(s.deleteTexture(Me.__webglTexture),d.memory.textures--),U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let Ee=0;Ee<6;Ee++){if(Array.isArray(ie.__webglFramebuffer[Ee]))for(let Se=0;Se<ie.__webglFramebuffer[Ee].length;Se++)s.deleteFramebuffer(ie.__webglFramebuffer[Ee][Se]);else s.deleteFramebuffer(ie.__webglFramebuffer[Ee]);ie.__webglDepthbuffer&&s.deleteRenderbuffer(ie.__webglDepthbuffer[Ee])}else{if(Array.isArray(ie.__webglFramebuffer))for(let Ee=0;Ee<ie.__webglFramebuffer.length;Ee++)s.deleteFramebuffer(ie.__webglFramebuffer[Ee]);else s.deleteFramebuffer(ie.__webglFramebuffer);if(ie.__webglDepthbuffer&&s.deleteRenderbuffer(ie.__webglDepthbuffer),ie.__webglMultisampledFramebuffer&&s.deleteFramebuffer(ie.__webglMultisampledFramebuffer),ie.__webglColorRenderbuffer)for(let Ee=0;Ee<ie.__webglColorRenderbuffer.length;Ee++)ie.__webglColorRenderbuffer[Ee]&&s.deleteRenderbuffer(ie.__webglColorRenderbuffer[Ee]);ie.__webglDepthRenderbuffer&&s.deleteRenderbuffer(ie.__webglDepthRenderbuffer)}if(U.isWebGLMultipleRenderTargets)for(let Ee=0,Se=R.length;Ee<Se;Ee++){const We=r.get(R[Ee]);We.__webglTexture&&(s.deleteTexture(We.__webglTexture),d.memory.textures--),r.remove(R[Ee])}r.remove(R),r.remove(U)}let me=0;function Ae(){me=0}function V(){const U=me;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),me+=1,U}function te(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function z(U,R){const ie=r.get(U);if(U.isVideoTexture&&Ft(U),U.isRenderTargetTexture===!1&&U.version>0&&ie.__version!==U.version){const Me=U.image;if(Me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(ie,U,R);return}}i.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+R)}function Z(U,R){const ie=r.get(U);if(U.version>0&&ie.__version!==U.version){ve(ie,U,R);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+R)}function J(U,R){const ie=r.get(U);if(U.version>0&&ie.__version!==U.version){ve(ie,U,R);return}i.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+R)}function le(U,R){const ie=r.get(U);if(U.version>0&&ie.__version!==U.version){be(ie,U,R);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+R)}const pe={[Td]:s.REPEAT,[Ji]:s.CLAMP_TO_EDGE,[bd]:s.MIRRORED_REPEAT},D={[ti]:s.NEAREST,[V_]:s.NEAREST_MIPMAP_NEAREST,[zh]:s.NEAREST_MIPMAP_LINEAR,[Bi]:s.LINEAR,[TE]:s.LINEAR_MIPMAP_NEAREST,[xl]:s.LINEAR_MIPMAP_LINEAR},Y={[IE]:s.NEVER,[VE]:s.ALWAYS,[BE]:s.LESS,[V0]:s.LEQUAL,[FE]:s.EQUAL,[kE]:s.GEQUAL,[HE]:s.GREATER,[GE]:s.NOTEQUAL};function k(U,R,ie){if(ie?(s.texParameteri(U,s.TEXTURE_WRAP_S,pe[R.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,pe[R.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,pe[R.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,D[R.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,D[R.minFilter])):(s.texParameteri(U,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(U,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(R.wrapS!==Ji||R.wrapT!==Ji)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(U,s.TEXTURE_MAG_FILTER,F(R.magFilter)),s.texParameteri(U,s.TEXTURE_MIN_FILTER,F(R.minFilter)),R.minFilter!==ti&&R.minFilter!==Bi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),R.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Y[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Me=e.get("EXT_texture_filter_anisotropic");if(R.magFilter===ti||R.minFilter!==zh&&R.minFilter!==xl||R.type===xr&&e.has("OES_texture_float_linear")===!1||f===!1&&R.type===yl&&e.has("OES_texture_half_float_linear")===!1)return;(R.anisotropy>1||r.get(R).__currentAnisotropy)&&(s.texParameterf(U,Me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy)}}function X(U,R){let ie=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",P));const Me=R.source;let Ee=x.get(Me);Ee===void 0&&(Ee={},x.set(Me,Ee));const Se=te(R);if(Se!==U.__cacheKey){Ee[Se]===void 0&&(Ee[Se]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),Ee[Se].usedTimes++;const We=Ee[U.__cacheKey];We!==void 0&&(Ee[U.__cacheKey].usedTimes--,We.usedTimes===0&&N(R)),U.__cacheKey=Se,U.__webglTexture=Ee[Se].texture}return ie}function ve(U,R,ie){let Me=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(Me=s.TEXTURE_3D);const Ee=X(U,R),Se=R.source;i.bindTexture(Me,U.__webglTexture,s.TEXTURE0+ie);const We=r.get(Se);if(Se.version!==We.__version||Ee===!0){i.activeTexture(s.TEXTURE0+ie);const Ne=jt.getPrimaries(jt.workingColorSpace),Be=R.colorSpace===Fi?null:jt.getPrimaries(R.colorSpace),qe=R.colorSpace===Fi||Ne===Be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const ct=v(R)&&y(R.image)===!1;let ye=b(R.image,ct,!1,l.maxTextureSize);ye=at(R,ye);const Rt=y(ye)||f,dt=c.convert(R.format,R.colorSpace);let Je=c.convert(R.type),Fe=B(R.internalFormat,dt,Je,R.colorSpace,R.isVideoTexture);k(Me,R,Rt);let Ie;const Ke=R.mipmaps,Ct=f&&R.isVideoTexture!==!0&&Fe!==G0,Kt=We.__version===void 0||Ee===!0,ut=q(R,ye,Rt);if(R.isDepthTexture)Fe=s.DEPTH_COMPONENT,f?R.type===xr?Fe=s.DEPTH_COMPONENT32F:R.type===Sr?Fe=s.DEPTH_COMPONENT24:R.type===ns?Fe=s.DEPTH24_STENCIL8:Fe=s.DEPTH_COMPONENT16:R.type===xr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),R.format===is&&Fe===s.DEPTH_COMPONENT&&R.type!==Bd&&R.type!==Sr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),R.type=Sr,Je=c.convert(R.type)),R.format===uo&&Fe===s.DEPTH_COMPONENT&&(Fe=s.DEPTH_STENCIL,R.type!==ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),R.type=ns,Je=c.convert(R.type))),Kt&&(Ct?i.texStorage2D(s.TEXTURE_2D,1,Fe,ye.width,ye.height):i.texImage2D(s.TEXTURE_2D,0,Fe,ye.width,ye.height,0,dt,Je,null));else if(R.isDataTexture)if(Ke.length>0&&Rt){Ct&&Kt&&i.texStorage2D(s.TEXTURE_2D,ut,Fe,Ke[0].width,Ke[0].height);for(let we=0,H=Ke.length;we<H;we++)Ie=Ke[we],Ct?i.texSubImage2D(s.TEXTURE_2D,we,0,0,Ie.width,Ie.height,dt,Je,Ie.data):i.texImage2D(s.TEXTURE_2D,we,Fe,Ie.width,Ie.height,0,dt,Je,Ie.data);R.generateMipmaps=!1}else Ct?(Kt&&i.texStorage2D(s.TEXTURE_2D,ut,Fe,ye.width,ye.height),i.texSubImage2D(s.TEXTURE_2D,0,0,0,ye.width,ye.height,dt,Je,ye.data)):i.texImage2D(s.TEXTURE_2D,0,Fe,ye.width,ye.height,0,dt,Je,ye.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ct&&Kt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Fe,Ke[0].width,Ke[0].height,ye.depth);for(let we=0,H=Ke.length;we<H;we++)Ie=Ke[we],R.format!==$i?dt!==null?Ct?i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Ie.width,Ie.height,ye.depth,dt,Ie.data,0,0):i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,we,Fe,Ie.width,Ie.height,ye.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?i.texSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Ie.width,Ie.height,ye.depth,dt,Je,Ie.data):i.texImage3D(s.TEXTURE_2D_ARRAY,we,Fe,Ie.width,Ie.height,ye.depth,0,dt,Je,Ie.data)}else{Ct&&Kt&&i.texStorage2D(s.TEXTURE_2D,ut,Fe,Ke[0].width,Ke[0].height);for(let we=0,H=Ke.length;we<H;we++)Ie=Ke[we],R.format!==$i?dt!==null?Ct?i.compressedTexSubImage2D(s.TEXTURE_2D,we,0,0,Ie.width,Ie.height,dt,Ie.data):i.compressedTexImage2D(s.TEXTURE_2D,we,Fe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ct?i.texSubImage2D(s.TEXTURE_2D,we,0,0,Ie.width,Ie.height,dt,Je,Ie.data):i.texImage2D(s.TEXTURE_2D,we,Fe,Ie.width,Ie.height,0,dt,Je,Ie.data)}else if(R.isDataArrayTexture)Ct?(Kt&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Fe,ye.width,ye.height,ye.depth),i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,dt,Je,ye.data)):i.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,ye.width,ye.height,ye.depth,0,dt,Je,ye.data);else if(R.isData3DTexture)Ct?(Kt&&i.texStorage3D(s.TEXTURE_3D,ut,Fe,ye.width,ye.height,ye.depth),i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,dt,Je,ye.data)):i.texImage3D(s.TEXTURE_3D,0,Fe,ye.width,ye.height,ye.depth,0,dt,Je,ye.data);else if(R.isFramebufferTexture){if(Kt)if(Ct)i.texStorage2D(s.TEXTURE_2D,ut,Fe,ye.width,ye.height);else{let we=ye.width,H=ye.height;for(let De=0;De<ut;De++)i.texImage2D(s.TEXTURE_2D,De,Fe,we,H,0,dt,Je,null),we>>=1,H>>=1}}else if(Ke.length>0&&Rt){Ct&&Kt&&i.texStorage2D(s.TEXTURE_2D,ut,Fe,Ke[0].width,Ke[0].height);for(let we=0,H=Ke.length;we<H;we++)Ie=Ke[we],Ct?i.texSubImage2D(s.TEXTURE_2D,we,0,0,dt,Je,Ie):i.texImage2D(s.TEXTURE_2D,we,Fe,dt,Je,Ie);R.generateMipmaps=!1}else Ct?(Kt&&i.texStorage2D(s.TEXTURE_2D,ut,Fe,ye.width,ye.height),i.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,Je,ye)):i.texImage2D(s.TEXTURE_2D,0,Fe,dt,Je,ye);O(R,Rt)&&w(Me),We.__version=Se.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function be(U,R,ie){if(R.image.length!==6)return;const Me=X(U,R),Ee=R.source;i.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ie);const Se=r.get(Ee);if(Ee.version!==Se.__version||Me===!0){i.activeTexture(s.TEXTURE0+ie);const We=jt.getPrimaries(jt.workingColorSpace),Ne=R.colorSpace===Fi?null:jt.getPrimaries(R.colorSpace),Be=R.colorSpace===Fi||We===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const qe=R.isCompressedTexture||R.image[0].isCompressedTexture,ct=R.image[0]&&R.image[0].isDataTexture,ye=[];for(let we=0;we<6;we++)!qe&&!ct?ye[we]=b(R.image[we],!1,!0,l.maxCubemapSize):ye[we]=ct?R.image[we].image:R.image[we],ye[we]=at(R,ye[we]);const Rt=ye[0],dt=y(Rt)||f,Je=c.convert(R.format,R.colorSpace),Fe=c.convert(R.type),Ie=B(R.internalFormat,Je,Fe,R.colorSpace),Ke=f&&R.isVideoTexture!==!0,Ct=Se.__version===void 0||Me===!0;let Kt=q(R,Rt,dt);k(s.TEXTURE_CUBE_MAP,R,dt);let ut;if(qe){Ke&&Ct&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Kt,Ie,Rt.width,Rt.height);for(let we=0;we<6;we++){ut=ye[we].mipmaps;for(let H=0;H<ut.length;H++){const De=ut[H];R.format!==$i?Je!==null?Ke?i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,0,0,De.width,De.height,Je,De.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,Ie,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,0,0,De.width,De.height,Je,Fe,De.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,H,Ie,De.width,De.height,0,Je,Fe,De.data)}}}else{ut=R.mipmaps,Ke&&Ct&&(ut.length>0&&Kt++,i.texStorage2D(s.TEXTURE_CUBE_MAP,Kt,Ie,ye[0].width,ye[0].height));for(let we=0;we<6;we++)if(ct){Ke?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ye[we].width,ye[we].height,Je,Fe,ye[we].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ie,ye[we].width,ye[we].height,0,Je,Fe,ye[we].data);for(let H=0;H<ut.length;H++){const Ue=ut[H].image[we].image;Ke?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,0,0,Ue.width,Ue.height,Je,Fe,Ue.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,Ie,Ue.width,Ue.height,0,Je,Fe,Ue.data)}}else{Ke?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Je,Fe,ye[we]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Ie,Je,Fe,ye[we]);for(let H=0;H<ut.length;H++){const De=ut[H];Ke?i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,0,0,Je,Fe,De.image[we]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,H+1,Ie,Je,Fe,De.image[we])}}}O(R,dt)&&w(s.TEXTURE_CUBE_MAP),Se.__version=Ee.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function Ce(U,R,ie,Me,Ee,Se){const We=c.convert(ie.format,ie.colorSpace),Ne=c.convert(ie.type),Be=B(ie.internalFormat,We,Ne,ie.colorSpace);if(!r.get(R).__hasExternalTextures){const ct=Math.max(1,R.width>>Se),ye=Math.max(1,R.height>>Se);Ee===s.TEXTURE_3D||Ee===s.TEXTURE_2D_ARRAY?i.texImage3D(Ee,Se,Be,ct,ye,R.depth,0,We,Ne,null):i.texImage2D(Ee,Se,Be,ct,ye,0,We,Ne,null)}i.bindFramebuffer(s.FRAMEBUFFER,U),Le(R)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,Ee,r.get(ie).__webglTexture,0,ot(R)):(Ee===s.TEXTURE_2D||Ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,Ee,r.get(ie).__webglTexture,Se),i.bindFramebuffer(s.FRAMEBUFFER,null)}function je(U,R,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,U),R.depthBuffer&&!R.stencilBuffer){let Me=f===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(ie||Le(R)){const Ee=R.depthTexture;Ee&&Ee.isDepthTexture&&(Ee.type===xr?Me=s.DEPTH_COMPONENT32F:Ee.type===Sr&&(Me=s.DEPTH_COMPONENT24));const Se=ot(R);Le(R)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Se,Me,R.width,R.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Se,Me,R.width,R.height)}else s.renderbufferStorage(s.RENDERBUFFER,Me,R.width,R.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,U)}else if(R.depthBuffer&&R.stencilBuffer){const Me=ot(R);ie&&Le(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,s.DEPTH24_STENCIL8,R.width,R.height):Le(R)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,s.DEPTH24_STENCIL8,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,U)}else{const Me=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let Ee=0;Ee<Me.length;Ee++){const Se=Me[Ee],We=c.convert(Se.format,Se.colorSpace),Ne=c.convert(Se.type),Be=B(Se.internalFormat,We,Ne,Se.colorSpace),qe=ot(R);ie&&Le(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,Be,R.width,R.height):Le(R)?m.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe,Be,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,Be,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ke(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),z(R.depthTexture,0);const Me=r.get(R.depthTexture).__webglTexture,Ee=ot(R);if(R.depthTexture.format===is)Le(R)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0,Ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Me,0);else if(R.depthTexture.format===uo)Le(R)?m.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0,Ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Me,0);else throw new Error("Unknown depthTexture format")}function tt(U){const R=r.get(U),ie=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");ke(R.__webglFramebuffer,U)}else if(ie){R.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)i.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[Me]),R.__webglDepthbuffer[Me]=s.createRenderbuffer(),je(R.__webglDepthbuffer[Me],U,!1)}else i.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=s.createRenderbuffer(),je(R.__webglDepthbuffer,U,!1);i.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(U,R,ie){const Me=r.get(U);R!==void 0&&Ce(Me.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ie!==void 0&&tt(U)}function se(U){const R=U.texture,ie=r.get(U),Me=r.get(R);U.addEventListener("dispose",Q),U.isWebGLMultipleRenderTargets!==!0&&(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=R.version,d.memory.textures++);const Ee=U.isWebGLCubeRenderTarget===!0,Se=U.isWebGLMultipleRenderTargets===!0,We=y(U)||f;if(Ee){ie.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(f&&R.mipmaps&&R.mipmaps.length>0){ie.__webglFramebuffer[Ne]=[];for(let Be=0;Be<R.mipmaps.length;Be++)ie.__webglFramebuffer[Ne][Be]=s.createFramebuffer()}else ie.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(f&&R.mipmaps&&R.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ne=0;Ne<R.mipmaps.length;Ne++)ie.__webglFramebuffer[Ne]=s.createFramebuffer()}else ie.__webglFramebuffer=s.createFramebuffer();if(Se)if(l.drawBuffers){const Ne=U.texture;for(let Be=0,qe=Ne.length;Be<qe;Be++){const ct=r.get(Ne[Be]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),d.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(f&&U.samples>0&&Le(U)===!1){const Ne=Se?R:[R];ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Be=0;Be<Ne.length;Be++){const qe=Ne[Be];ie.__webglColorRenderbuffer[Be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[Be]);const ct=c.convert(qe.format,qe.colorSpace),ye=c.convert(qe.type),Rt=B(qe.internalFormat,ct,ye,qe.colorSpace,U.isXRRenderTarget===!0),dt=ot(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,Rt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Be,s.RENDERBUFFER,ie.__webglColorRenderbuffer[Be])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),je(ie.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ee){i.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),k(s.TEXTURE_CUBE_MAP,R,We);for(let Ne=0;Ne<6;Ne++)if(f&&R.mipmaps&&R.mipmaps.length>0)for(let Be=0;Be<R.mipmaps.length;Be++)Ce(ie.__webglFramebuffer[Ne][Be],U,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Be);else Ce(ie.__webglFramebuffer[Ne],U,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);O(R,We)&&w(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Se){const Ne=U.texture;for(let Be=0,qe=Ne.length;Be<qe;Be++){const ct=Ne[Be],ye=r.get(ct);i.bindTexture(s.TEXTURE_2D,ye.__webglTexture),k(s.TEXTURE_2D,ct,We),Ce(ie.__webglFramebuffer,U,ct,s.COLOR_ATTACHMENT0+Be,s.TEXTURE_2D,0),O(ct,We)&&w(s.TEXTURE_2D)}i.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(f?Ne=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),i.bindTexture(Ne,Me.__webglTexture),k(Ne,R,We),f&&R.mipmaps&&R.mipmaps.length>0)for(let Be=0;Be<R.mipmaps.length;Be++)Ce(ie.__webglFramebuffer[Be],U,R,s.COLOR_ATTACHMENT0,Ne,Be);else Ce(ie.__webglFramebuffer,U,R,s.COLOR_ATTACHMENT0,Ne,0);O(R,We)&&w(Ne),i.unbindTexture()}U.depthBuffer&&tt(U)}function dn(U){const R=y(U)||f,ie=U.isWebGLMultipleRenderTargets===!0?U.texture:[U.texture];for(let Me=0,Ee=ie.length;Me<Ee;Me++){const Se=ie[Me];if(O(Se,R)){const We=U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ne=r.get(Se).__webglTexture;i.bindTexture(We,Ne),w(We),i.unbindTexture()}}}function Oe(U){if(f&&U.samples>0&&Le(U)===!1){const R=U.isWebGLMultipleRenderTargets?U.texture:[U.texture],ie=U.width,Me=U.height;let Ee=s.COLOR_BUFFER_BIT;const Se=[],We=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=r.get(U),Be=U.isWebGLMultipleRenderTargets===!0;if(Be)for(let qe=0;qe<R.length;qe++)i.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let qe=0;qe<R.length;qe++){Se.push(s.COLOR_ATTACHMENT0+qe),U.depthBuffer&&Se.push(We);const ct=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(ct===!1&&(U.depthBuffer&&(Ee|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&(Ee|=s.STENCIL_BUFFER_BIT)),Be&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[qe]),ct===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[We]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[We])),Be){const ye=r.get(R[qe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,ie,Me,0,0,ie,Me,Ee,s.NEAREST),p&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Se)}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Be)for(let qe=0;qe<R.length;qe++){i.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.RENDERBUFFER,Ne.__webglColorRenderbuffer[qe]);const ct=r.get(R[qe]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ne.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+qe,s.TEXTURE_2D,ct,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function ot(U){return Math.min(l.maxSamples,U.samples)}function Le(U){const R=r.get(U);return f&&U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ft(U){const R=d.render.frame;g.get(U)!==R&&(g.set(U,R),U.update())}function at(U,R){const ie=U.colorSpace,Me=U.format,Ee=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||U.format===Ad||ie!==Fa&&ie!==Fi&&(jt.getTransfer(ie)===on?f===!1?e.has("EXT_sRGB")===!0&&Me===$i?(U.format=Ad,U.minFilter=Bi,U.generateMipmaps=!1):R=W0.sRGBToLinear(R):(Me!==$i||Ee!==Mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),R}this.allocateTextureUnit=V,this.resetTextureUnits=Ae,this.setTexture2D=z,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=le,this.rebindTextures=_t,this.setupRenderTarget=se,this.updateRenderTargetMipmap=dn,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Le}function W1(s,e,i){const r=i.isWebGL2;function l(c,d=Fi){let f;const m=jt.getTransfer(d);if(c===Mr)return s.UNSIGNED_BYTE;if(c===z0)return s.UNSIGNED_SHORT_4_4_4_4;if(c===I0)return s.UNSIGNED_SHORT_5_5_5_1;if(c===bE)return s.BYTE;if(c===AE)return s.SHORT;if(c===Bd)return s.UNSIGNED_SHORT;if(c===P0)return s.INT;if(c===Sr)return s.UNSIGNED_INT;if(c===xr)return s.FLOAT;if(c===yl)return r?s.HALF_FLOAT:(f=e.get("OES_texture_half_float"),f!==null?f.HALF_FLOAT_OES:null);if(c===RE)return s.ALPHA;if(c===$i)return s.RGBA;if(c===wE)return s.LUMINANCE;if(c===CE)return s.LUMINANCE_ALPHA;if(c===is)return s.DEPTH_COMPONENT;if(c===uo)return s.DEPTH_STENCIL;if(c===Ad)return f=e.get("EXT_sRGB"),f!==null?f.SRGB_ALPHA_EXT:null;if(c===LE)return s.RED;if(c===B0)return s.RED_INTEGER;if(c===DE)return s.RG;if(c===F0)return s.RG_INTEGER;if(c===H0)return s.RGBA_INTEGER;if(c===Ih||c===Bh||c===Fh||c===Hh)if(m===on)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(c===Ih)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(c===Bh)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(c===Fh)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(c===Hh)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(c===Ih)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(c===Bh)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(c===Fh)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(c===Hh)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(c===X_||c===W_||c===q_||c===Y_)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(c===X_)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(c===W_)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(c===q_)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(c===Y_)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(c===G0)return f=e.get("WEBGL_compressed_texture_etc1"),f!==null?f.COMPRESSED_RGB_ETC1_WEBGL:null;if(c===j_||c===Z_)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(c===j_)return m===on?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(c===Z_)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(c===K_||c===Q_||c===J_||c===$_||c===ev||c===tv||c===nv||c===iv||c===av||c===rv||c===sv||c===ov||c===lv||c===cv)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(c===K_)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(c===Q_)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(c===J_)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(c===$_)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(c===ev)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(c===tv)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(c===nv)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(c===iv)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(c===av)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(c===rv)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(c===sv)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(c===ov)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(c===lv)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(c===cv)return m===on?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(c===Gh||c===uv||c===fv)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(c===Gh)return m===on?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(c===uv)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(c===fv)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(c===UE||c===hv||c===dv||c===pv)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(c===Gh)return f.COMPRESSED_RED_RGTC1_EXT;if(c===hv)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(c===dv)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(c===pv)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return c===ns?r?s.UNSIGNED_INT_24_8:(f=e.get("WEBGL_depth_texture"),f!==null?f.UNSIGNED_INT_24_8_WEBGL:null):s[c]!==void 0?s[c]:null}return{convert:l}}class q1 extends Zi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ou extends Ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y1={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ou,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ou,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ou,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const f=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const b of e.hand.values()){const y=i.getJointPose(b,r),v=this._getHandJoint(p,b);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),E=.02,M=.005;p.inputState.pinching&&x>E+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=E-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));f!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Y1)))}return f!==null&&(f.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new ou;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class j1 extends po{constructor(e,i){super();const r=this;let l=null,c=1,d=null,f="local-floor",m=1,p=null,g=null,_=null,x=null,E=null,M=null;const b=i.getContextAttributes();let y=null,v=null;const O=[],w=[],B=new Vt;let q=null;const F=new Zi;F.layers.enable(1),F.viewport=new Gn;const P=new Zi;P.layers.enable(2),P.viewport=new Gn;const Q=[F,P],A=new q1;A.layers.enable(1),A.layers.enable(2);let N=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let X=O[k];return X===void 0&&(X=new hd,O[k]=X),X.getTargetRaySpace()},this.getControllerGrip=function(k){let X=O[k];return X===void 0&&(X=new hd,O[k]=X),X.getGripSpace()},this.getHand=function(k){let X=O[k];return X===void 0&&(X=new hd,O[k]=X),X.getHandSpace()};function me(k){const X=w.indexOf(k.inputSource);if(X===-1)return;const ve=O[X];ve!==void 0&&(ve.update(k.inputSource,k.frame,p||d),ve.dispatchEvent({type:k.type,data:k.inputSource}))}function Ae(){l.removeEventListener("select",me),l.removeEventListener("selectstart",me),l.removeEventListener("selectend",me),l.removeEventListener("squeeze",me),l.removeEventListener("squeezestart",me),l.removeEventListener("squeezeend",me),l.removeEventListener("end",Ae),l.removeEventListener("inputsourceschange",V);for(let k=0;k<O.length;k++){const X=w[k];X!==null&&(w[k]=null,O[k].disconnect(X))}N=null,ne=null,e.setRenderTarget(y),E=null,x=null,_=null,l=null,v=null,Y.stop(),r.isPresenting=!1,e.setPixelRatio(q),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){c=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){f=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(k){p=k},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(k){if(l=k,l!==null){if(y=e.getRenderTarget(),l.addEventListener("select",me),l.addEventListener("selectstart",me),l.addEventListener("selectend",me),l.addEventListener("squeeze",me),l.addEventListener("squeezestart",me),l.addEventListener("squeezeend",me),l.addEventListener("end",Ae),l.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await i.makeXRCompatible(),q=e.getPixelRatio(),e.getSize(B),l.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:l.renderState.layers===void 0?b.antialias:!0,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,X),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),v=new ss(E.framebufferWidth,E.framebufferHeight,{format:$i,type:Mr,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil})}else{let X=null,ve=null,be=null;b.depth&&(be=b.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,X=b.stencil?uo:is,ve=b.stencil?ns:Sr);const Ce={colorFormat:i.RGBA8,depthFormat:be,scaleFactor:c};_=new XRWebGLBinding(l,i),x=_.createProjectionLayer(Ce),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),v=new ss(x.textureWidth,x.textureHeight,{format:$i,type:Mr,depthTexture:new rS(x.textureWidth,x.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0});const je=e.properties.get(v);je.__ignoreDepthValues=x.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(f),Y.setContext(l),Y.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function V(k){for(let X=0;X<k.removed.length;X++){const ve=k.removed[X],be=w.indexOf(ve);be>=0&&(w[be]=null,O[be].disconnect(ve))}for(let X=0;X<k.added.length;X++){const ve=k.added[X];let be=w.indexOf(ve);if(be===-1){for(let je=0;je<O.length;je++)if(je>=w.length){w.push(ve),be=je;break}else if(w[je]===null){w[je]=ve,be=je;break}if(be===-1)break}const Ce=O[be];Ce&&Ce.connect(ve)}}const te=new fe,z=new fe;function Z(k,X,ve){te.setFromMatrixPosition(X.matrixWorld),z.setFromMatrixPosition(ve.matrixWorld);const be=te.distanceTo(z),Ce=X.projectionMatrix.elements,je=ve.projectionMatrix.elements,ke=Ce[14]/(Ce[10]-1),tt=Ce[14]/(Ce[10]+1),_t=(Ce[9]+1)/Ce[5],se=(Ce[9]-1)/Ce[5],dn=(Ce[8]-1)/Ce[0],Oe=(je[8]+1)/je[0],ot=ke*dn,Le=ke*Oe,Ft=be/(-dn+Oe),at=Ft*-dn;X.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(at),k.translateZ(Ft),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const U=ke+Ft,R=tt+Ft,ie=ot-at,Me=Le+(be-at),Ee=_t*tt/R*U,Se=se*tt/R*U;k.projectionMatrix.makePerspective(ie,Me,Ee,Se,U,R),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function J(k,X){X===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(X.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(l===null)return;A.near=P.near=F.near=k.near,A.far=P.far=F.far=k.far,(N!==A.near||ne!==A.far)&&(l.updateRenderState({depthNear:A.near,depthFar:A.far}),N=A.near,ne=A.far);const X=k.parent,ve=A.cameras;J(A,X);for(let be=0;be<ve.length;be++)J(ve[be],X);ve.length===2?Z(A,F,P):A.projectionMatrix.copy(F.projectionMatrix),le(k,A,X)};function le(k,X,ve){ve===null?k.matrix.copy(X.matrixWorld):(k.matrix.copy(ve.matrixWorld),k.matrix.invert(),k.matrix.multiply(X.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(X.projectionMatrix),k.projectionMatrixInverse.copy(X.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Rd*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(x===null&&E===null))return m},this.setFoveation=function(k){m=k,x!==null&&(x.fixedFoveation=k),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=k)};let pe=null;function D(k,X){if(g=X.getViewerPose(p||d),M=X,g!==null){const ve=g.views;E!==null&&(e.setRenderTargetFramebuffer(v,E.framebuffer),e.setRenderTarget(v));let be=!1;ve.length!==A.cameras.length&&(A.cameras.length=0,be=!0);for(let Ce=0;Ce<ve.length;Ce++){const je=ve[Ce];let ke=null;if(E!==null)ke=E.getViewport(je);else{const _t=_.getViewSubImage(x,je);ke=_t.viewport,Ce===0&&(e.setRenderTargetTextures(v,_t.colorTexture,x.ignoreDepthValues?void 0:_t.depthStencilTexture),e.setRenderTarget(v))}let tt=Q[Ce];tt===void 0&&(tt=new Zi,tt.layers.enable(Ce),tt.viewport=new Gn,Q[Ce]=tt),tt.matrix.fromArray(je.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(je.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(ke.x,ke.y,ke.width,ke.height),Ce===0&&(A.matrix.copy(tt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),be===!0&&A.cameras.push(tt)}}for(let ve=0;ve<O.length;ve++){const be=w[ve],Ce=O[ve];be!==null&&Ce!==void 0&&Ce.update(be,X,p||d)}pe&&pe(k,X),X.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:X}),M=null}const Y=new iS;Y.setAnimationLoop(D),this.setAnimationLoop=function(k){pe=k},this.dispose=function(){}}}function Z1(s,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,$0(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,O,w,B){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),_(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&E(y,v,B)):v.isMeshMatcapMaterial?(c(y,v),M(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),b(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?m(y,v,O,w):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===hi&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===hi&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const O=e.get(v).envMap;if(O&&(y.envMap.value=O,y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap){y.lightMap.value=v.lightMap;const w=s._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=v.lightMapIntensity*w,i(v.lightMap,y.lightMapTransform)}v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,O,w){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*O,y.scale.value=w*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),e.get(v).envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function E(y,v,O){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===hi&&y.clearcoatNormalScale.value.negate())),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,v){v.matcap&&(y.matcap.value=v.matcap)}function b(y,v){const O=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function K1(s,e,i,r){let l={},c={},d=[];const f=i.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function m(O,w){const B=w.program;r.uniformBlockBinding(O,B)}function p(O,w){let B=l[O.id];B===void 0&&(M(O),B=g(O),l[O.id]=B,O.addEventListener("dispose",y));const q=w.program;r.updateUBOMapping(O,q);const F=e.render.frame;c[O.id]!==F&&(x(O),c[O.id]=F)}function g(O){const w=_();O.__bindingPointIndex=w;const B=s.createBuffer(),q=O.__size,F=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,B),s.bufferData(s.UNIFORM_BUFFER,q,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,B),B}function _(){for(let O=0;O<f;O++)if(d.indexOf(O)===-1)return d.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const w=l[O.id],B=O.uniforms,q=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let F=0,P=B.length;F<P;F++){const Q=Array.isArray(B[F])?B[F]:[B[F]];for(let A=0,N=Q.length;A<N;A++){const ne=Q[A];if(E(ne,F,A,q)===!0){const me=ne.__offset,Ae=Array.isArray(ne.value)?ne.value:[ne.value];let V=0;for(let te=0;te<Ae.length;te++){const z=Ae[te],Z=b(z);typeof z=="number"||typeof z=="boolean"?(ne.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,me+V,ne.__data)):z.isMatrix3?(ne.__data[0]=z.elements[0],ne.__data[1]=z.elements[1],ne.__data[2]=z.elements[2],ne.__data[3]=0,ne.__data[4]=z.elements[3],ne.__data[5]=z.elements[4],ne.__data[6]=z.elements[5],ne.__data[7]=0,ne.__data[8]=z.elements[6],ne.__data[9]=z.elements[7],ne.__data[10]=z.elements[8],ne.__data[11]=0):(z.toArray(ne.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,me,ne.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(O,w,B,q){const F=O.value,P=w+"_"+B;if(q[P]===void 0)return typeof F=="number"||typeof F=="boolean"?q[P]=F:q[P]=F.clone(),!0;{const Q=q[P];if(typeof F=="number"||typeof F=="boolean"){if(Q!==F)return q[P]=F,!0}else if(Q.equals(F)===!1)return Q.copy(F),!0}return!1}function M(O){const w=O.uniforms;let B=0;const q=16;for(let P=0,Q=w.length;P<Q;P++){const A=Array.isArray(w[P])?w[P]:[w[P]];for(let N=0,ne=A.length;N<ne;N++){const me=A[N],Ae=Array.isArray(me.value)?me.value:[me.value];for(let V=0,te=Ae.length;V<te;V++){const z=Ae[V],Z=b(z),J=B%q;J!==0&&q-J<Z.boundary&&(B+=q-J),me.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=B,B+=Z.storage}}}const F=B%q;return F>0&&(B+=q-F),O.__size=B,O.__cache={},this}function b(O){const w={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(w.boundary=4,w.storage=4):O.isVector2?(w.boundary=8,w.storage=8):O.isVector3||O.isColor?(w.boundary=16,w.storage=12):O.isVector4?(w.boundary=16,w.storage=16):O.isMatrix3?(w.boundary=48,w.storage=48):O.isMatrix4?(w.boundary=64,w.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),w}function y(O){const w=O.target;w.removeEventListener("dispose",y);const B=d.indexOf(w.__bindingPointIndex);d.splice(B,1),s.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function v(){for(const O in l)s.deleteBuffer(l[O]);d=[],l={},c={}}return{bind:m,update:p,dispose:v}}class fS{constructor(e={}){const{canvas:i=WE(),context:r=null,depth:l=!0,stencil:c=!0,alpha:d=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let x;r!==null?x=r.getContextAttributes().alpha:x=d;const E=new Uint32Array(4),M=new Int32Array(4);let b=null,y=null;const v=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Hn,this._useLegacyLights=!1,this.toneMapping=Er,this.toneMappingExposure=1;const w=this;let B=!1,q=0,F=0,P=null,Q=-1,A=null;const N=new Gn,ne=new Gn;let me=null;const Ae=new kt(0);let V=0,te=i.width,z=i.height,Z=1,J=null,le=null;const pe=new Gn(0,0,te,z),D=new Gn(0,0,te,z);let Y=!1;const k=new nS;let X=!1,ve=!1,be=null;const Ce=new Vn,je=new Vt,ke=new fe,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _t(){return P===null?Z:1}let se=r;function dn(C,K){for(let oe=0;oe<C.length;oe++){const ce=C[oe],re=i.getContext(ce,K);if(re!==null)return re}return null}try{const C={alpha:!0,depth:l,stencil:c,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Id}`),i.addEventListener("webglcontextlost",we,!1),i.addEventListener("webglcontextrestored",H,!1),i.addEventListener("webglcontextcreationerror",De,!1),se===null){const K=["webgl2","webgl","experimental-webgl"];if(w.isWebGL1Renderer===!0&&K.shift(),se=dn(K,C),se===null)throw dn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&se instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),se.getShaderPrecisionFormat===void 0&&(se.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Oe,ot,Le,Ft,at,U,R,ie,Me,Ee,Se,We,Ne,Be,qe,ct,ye,Rt,dt,Je,Fe,Ie,Ke,Ct;function Kt(){Oe=new sA(se),ot=new eA(se,Oe,e),Oe.init(ot),Ie=new W1(se,Oe,ot),Le=new V1(se,Oe,ot),Ft=new cA(se),at=new C1,U=new X1(se,Oe,Le,at,ot,Ie,Ft),R=new nA(w),ie=new rA(w),Me=new _M(se,ot),Ke=new Jb(se,Oe,Me,ot),Ee=new oA(se,Me,Ft,Ke),Se=new dA(se,Ee,Me,Ft),dt=new hA(se,ot,U),ct=new tA(at),We=new w1(w,R,ie,Oe,ot,Ke,ct),Ne=new Z1(w,at),Be=new D1,qe=new I1(Oe,ot),Rt=new Qb(w,R,ie,Le,Se,x,m),ye=new k1(w,Se,ot),Ct=new K1(se,Ft,ot,Le),Je=new $b(se,Oe,Ft,ot),Fe=new lA(se,Oe,Ft,ot),Ft.programs=We.programs,w.capabilities=ot,w.extensions=Oe,w.properties=at,w.renderLists=Be,w.shadowMap=ye,w.state=Le,w.info=Ft}Kt();const ut=new j1(w,se);this.xr=ut,this.getContext=function(){return se},this.getContextAttributes=function(){return se.getContextAttributes()},this.forceContextLoss=function(){const C=Oe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Oe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(C){C!==void 0&&(Z=C,this.setSize(te,z,!1))},this.getSize=function(C){return C.set(te,z)},this.setSize=function(C,K,oe=!0){if(ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=C,z=K,i.width=Math.floor(C*Z),i.height=Math.floor(K*Z),oe===!0&&(i.style.width=C+"px",i.style.height=K+"px"),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(te*Z,z*Z).floor()},this.setDrawingBufferSize=function(C,K,oe){te=C,z=K,Z=oe,i.width=Math.floor(C*oe),i.height=Math.floor(K*oe),this.setViewport(0,0,C,K)},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(pe)},this.setViewport=function(C,K,oe,ce){C.isVector4?pe.set(C.x,C.y,C.z,C.w):pe.set(C,K,oe,ce),Le.viewport(N.copy(pe).multiplyScalar(Z).floor())},this.getScissor=function(C){return C.copy(D)},this.setScissor=function(C,K,oe,ce){C.isVector4?D.set(C.x,C.y,C.z,C.w):D.set(C,K,oe,ce),Le.scissor(ne.copy(D).multiplyScalar(Z).floor())},this.getScissorTest=function(){return Y},this.setScissorTest=function(C){Le.setScissorTest(Y=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){le=C},this.getClearColor=function(C){return C.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(C=!0,K=!0,oe=!0){let ce=0;if(C){let re=!1;if(P!==null){const ze=P.texture.format;re=ze===H0||ze===F0||ze===B0}if(re){const ze=P.texture.type,He=ze===Mr||ze===Sr||ze===Bd||ze===ns||ze===z0||ze===I0,$e=Rt.getClearColor(),it=Rt.getClearAlpha(),Ye=$e.r,lt=$e.g,rt=$e.b;He?(E[0]=Ye,E[1]=lt,E[2]=rt,E[3]=it,se.clearBufferuiv(se.COLOR,0,E)):(M[0]=Ye,M[1]=lt,M[2]=rt,M[3]=it,se.clearBufferiv(se.COLOR,0,M))}else ce|=se.COLOR_BUFFER_BIT}K&&(ce|=se.DEPTH_BUFFER_BIT),oe&&(ce|=se.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",we,!1),i.removeEventListener("webglcontextrestored",H,!1),i.removeEventListener("webglcontextcreationerror",De,!1),Be.dispose(),qe.dispose(),at.dispose(),R.dispose(),ie.dispose(),Se.dispose(),Ke.dispose(),Ct.dispose(),We.dispose(),ut.dispose(),ut.removeEventListener("sessionstart",en),ut.removeEventListener("sessionend",xt),be&&(be.dispose(),be=null),nn.stop()};function we(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function H(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const C=Ft.autoReset,K=ye.enabled,oe=ye.autoUpdate,ce=ye.needsUpdate,re=ye.type;Kt(),Ft.autoReset=C,ye.enabled=K,ye.autoUpdate=oe,ye.needsUpdate=ce,ye.type=re}function De(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ue(C){const K=C.target;K.removeEventListener("dispose",Ue),nt(K)}function nt(C){Ze(C),at.remove(C)}function Ze(C){const K=at.get(C).programs;K!==void 0&&(K.forEach(function(oe){We.releaseProgram(oe)}),C.isShaderMaterial&&We.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,oe,ce,re,ze){K===null&&(K=tt);const He=re.isMesh&&re.matrixWorld.determinant()<0,$e=un(C,K,oe,ce,re);Le.setMaterial(ce,He);let it=oe.index,Ye=1;if(ce.wireframe===!0){if(it=Ee.getWireframeAttribute(oe),it===void 0)return;Ye=2}const lt=oe.drawRange,rt=oe.attributes.position;let Ut=lt.start*Ye,an=(lt.start+lt.count)*Ye;ze!==null&&(Ut=Math.max(Ut,ze.start*Ye),an=Math.min(an,(ze.start+ze.count)*Ye)),it!==null?(Ut=Math.max(Ut,0),an=Math.min(an,it.count)):rt!=null&&(Ut=Math.max(Ut,0),an=Math.min(an,rt.count));const Xt=an-Ut;if(Xt<0||Xt===1/0)return;Ke.setup(re,ce,$e,oe,it);let ni,zt=Je;if(it!==null&&(ni=Me.get(it),zt=Fe,zt.setIndex(ni)),re.isMesh)ce.wireframe===!0?(Le.setLineWidth(ce.wireframeLinewidth*_t()),zt.setMode(se.LINES)):zt.setMode(se.TRIANGLES);else if(re.isLine){let pt=ce.linewidth;pt===void 0&&(pt=1),Le.setLineWidth(pt*_t()),re.isLineSegments?zt.setMode(se.LINES):re.isLineLoop?zt.setMode(se.LINE_LOOP):zt.setMode(se.LINE_STRIP)}else re.isPoints?zt.setMode(se.POINTS):re.isSprite&&zt.setMode(se.TRIANGLES);if(re.isBatchedMesh)zt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else if(re.isInstancedMesh)zt.renderInstances(Ut,Xt,re.count);else if(oe.isInstancedBufferGeometry){const pt=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,na=Math.min(oe.instanceCount,pt);zt.renderInstances(Ut,Xt,na)}else zt.render(Ut,Xt)};function Pt(C,K,oe){C.transparent===!0&&C.side===za&&C.forceSinglePass===!1?(C.side=hi,C.needsUpdate=!0,ea(C,K,oe),C.side=Tr,C.needsUpdate=!0,ea(C,K,oe),C.side=za):ea(C,K,oe)}this.compile=function(C,K,oe=null){oe===null&&(oe=C),y=qe.get(oe),y.init(),O.push(y),oe.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),C!==oe&&C.traverseVisible(function(re){re.isLight&&re.layers.test(K.layers)&&(y.pushLight(re),re.castShadow&&y.pushShadow(re))}),y.setupLights(w._useLegacyLights);const ce=new Set;return C.traverse(function(re){const ze=re.material;if(ze)if(Array.isArray(ze))for(let He=0;He<ze.length;He++){const $e=ze[He];Pt($e,oe,re),ce.add($e)}else Pt(ze,oe,re),ce.add(ze)}),O.pop(),y=null,ce},this.compileAsync=function(C,K,oe=null){const ce=this.compile(C,K,oe);return new Promise(re=>{function ze(){if(ce.forEach(function(He){at.get(He).currentProgram.isReady()&&ce.delete(He)}),ce.size===0){re(C);return}setTimeout(ze,10)}Oe.get("KHR_parallel_shader_compile")!==null?ze():setTimeout(ze,10)})};let Dt=null;function Qt(C){Dt&&Dt(C)}function en(){nn.stop()}function xt(){nn.start()}const nn=new iS;nn.setAnimationLoop(Qt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(C){Dt=C,ut.setAnimationLoop(C),C===null?nn.stop():nn.start()},ut.addEventListener("sessionstart",en),ut.addEventListener("sessionend",xt),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ut.enabled===!0&&ut.isPresenting===!0&&(ut.cameraAutoUpdate===!0&&ut.updateCamera(K),K=ut.getCamera()),C.isScene===!0&&C.onBeforeRender(w,C,K,P),y=qe.get(C,O.length),y.init(),O.push(y),Ce.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),k.setFromProjectionMatrix(Ce),ve=this.localClippingEnabled,X=ct.init(this.clippingPlanes,ve),b=Be.get(C,v.length),b.init(),v.push(b),Pn(C,K,0,w.sortObjects),b.finish(),w.sortObjects===!0&&b.sort(J,le),this.info.render.frame++,X===!0&&ct.beginShadows();const oe=y.state.shadowsArray;if(ye.render(oe,C,K),X===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset(),Rt.render(b,C),y.setupLights(w._useLegacyLights),K.isArrayCamera){const ce=K.cameras;for(let re=0,ze=ce.length;re<ze;re++){const He=ce[re];fa(b,C,He,He.viewport)}}else fa(b,C,K);P!==null&&(U.updateMultisampleRenderTarget(P),U.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(w,C,K),Ke.resetDefaultState(),Q=-1,A=null,O.pop(),O.length>0?y=O[O.length-1]:y=null,v.pop(),v.length>0?b=v[v.length-1]:b=null};function Pn(C,K,oe,ce){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)oe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLight)y.pushLight(C),C.castShadow&&y.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||k.intersectsSprite(C)){ce&&ke.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ce);const He=Se.update(C),$e=C.material;$e.visible&&b.push(C,He,$e,oe,ke.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||k.intersectsObject(C))){const He=Se.update(C),$e=C.material;if(ce&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ke.copy(C.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),ke.copy(He.boundingSphere.center)),ke.applyMatrix4(C.matrixWorld).applyMatrix4(Ce)),Array.isArray($e)){const it=He.groups;for(let Ye=0,lt=it.length;Ye<lt;Ye++){const rt=it[Ye],Ut=$e[rt.materialIndex];Ut&&Ut.visible&&b.push(C,He,Ut,oe,ke.z,rt)}}else $e.visible&&b.push(C,He,$e,oe,ke.z,null)}}const ze=C.children;for(let He=0,$e=ze.length;He<$e;He++)Pn(ze[He],K,oe,ce)}function fa(C,K,oe,ce){const re=C.opaque,ze=C.transmissive,He=C.transparent;y.setupLightsView(oe),X===!0&&ct.setGlobalState(w.clippingPlanes,oe),ze.length>0&&Ar(re,ze,K,oe),ce&&Le.viewport(N.copy(ce)),re.length>0&&Hi(re,K,oe),ze.length>0&&Hi(ze,K,oe),He.length>0&&Hi(He,K,oe),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Ar(C,K,oe,ce){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;const ze=ot.isWebGL2;be===null&&(be=new ss(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")?yl:Mr,minFilter:xl,samples:ze?4:0})),w.getDrawingBufferSize(je),ze?be.setSize(je.x,je.y):be.setSize(wd(je.x),wd(je.y));const He=w.getRenderTarget();w.setRenderTarget(be),w.getClearColor(Ae),V=w.getClearAlpha(),V<1&&w.setClearColor(16777215,.5),w.clear();const $e=w.toneMapping;w.toneMapping=Er,Hi(C,oe,ce),U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be);let it=!1;for(let Ye=0,lt=K.length;Ye<lt;Ye++){const rt=K[Ye],Ut=rt.object,an=rt.geometry,Xt=rt.material,ni=rt.group;if(Xt.side===za&&Ut.layers.test(ce.layers)){const zt=Xt.side;Xt.side=hi,Xt.needsUpdate=!0,ha(Ut,oe,ce,an,Xt,ni),Xt.side=zt,Xt.needsUpdate=!0,it=!0}}it===!0&&(U.updateMultisampleRenderTarget(be),U.updateRenderTargetMipmap(be)),w.setRenderTarget(He),w.setClearColor(Ae,V),w.toneMapping=$e}function Hi(C,K,oe){const ce=K.isScene===!0?K.overrideMaterial:null;for(let re=0,ze=C.length;re<ze;re++){const He=C[re],$e=He.object,it=He.geometry,Ye=ce===null?He.material:ce,lt=He.group;$e.layers.test(oe.layers)&&ha($e,K,oe,it,Ye,lt)}}function ha(C,K,oe,ce,re,ze){C.onBeforeRender(w,K,oe,ce,re,ze),C.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),re.onBeforeRender(w,K,oe,ce,C,ze),re.transparent===!0&&re.side===za&&re.forceSinglePass===!1?(re.side=hi,re.needsUpdate=!0,w.renderBufferDirect(oe,K,ce,re,C,ze),re.side=Tr,re.needsUpdate=!0,w.renderBufferDirect(oe,K,ce,re,C,ze),re.side=za):w.renderBufferDirect(oe,K,ce,re,C,ze),C.onAfterRender(w,K,oe,ce,re,ze)}function ea(C,K,oe){K.isScene!==!0&&(K=tt);const ce=at.get(C),re=y.state.lights,ze=y.state.shadowsArray,He=re.state.version,$e=We.getParameters(C,re.state,ze,K,oe),it=We.getProgramCacheKey($e);let Ye=ce.programs;ce.environment=C.isMeshStandardMaterial?K.environment:null,ce.fog=K.fog,ce.envMap=(C.isMeshStandardMaterial?ie:R).get(C.envMap||ce.environment),Ye===void 0&&(C.addEventListener("dispose",Ue),Ye=new Map,ce.programs=Ye);let lt=Ye.get(it);if(lt!==void 0){if(ce.currentProgram===lt&&ce.lightsStateVersion===He)return cn(C,$e),lt}else $e.uniforms=We.getUniforms(C),C.onBuild(oe,$e,w),C.onBeforeCompile($e,w),lt=We.acquireProgram($e,it),Ye.set(it,lt),ce.uniforms=$e.uniforms;const rt=ce.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(rt.clippingPlanes=ct.uniform),cn(C,$e),ce.needsLights=Rr(C),ce.lightsStateVersion=He,ce.needsLights&&(rt.ambientLightColor.value=re.state.ambient,rt.lightProbe.value=re.state.probe,rt.directionalLights.value=re.state.directional,rt.directionalLightShadows.value=re.state.directionalShadow,rt.spotLights.value=re.state.spot,rt.spotLightShadows.value=re.state.spotShadow,rt.rectAreaLights.value=re.state.rectArea,rt.ltc_1.value=re.state.rectAreaLTC1,rt.ltc_2.value=re.state.rectAreaLTC2,rt.pointLights.value=re.state.point,rt.pointLightShadows.value=re.state.pointShadow,rt.hemisphereLights.value=re.state.hemi,rt.directionalShadowMap.value=re.state.directionalShadowMap,rt.directionalShadowMatrix.value=re.state.directionalShadowMatrix,rt.spotShadowMap.value=re.state.spotShadowMap,rt.spotLightMatrix.value=re.state.spotLightMatrix,rt.spotLightMap.value=re.state.spotLightMap,rt.pointShadowMap.value=re.state.pointShadowMap,rt.pointShadowMatrix.value=re.state.pointShadowMatrix),ce.currentProgram=lt,ce.uniformsList=null,lt}function Qn(C){if(C.uniformsList===null){const K=C.currentProgram.getUniforms();C.uniformsList=hu.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function cn(C,K){const oe=at.get(C);oe.outputColorSpace=K.outputColorSpace,oe.batching=K.batching,oe.instancing=K.instancing,oe.instancingColor=K.instancingColor,oe.skinning=K.skinning,oe.morphTargets=K.morphTargets,oe.morphNormals=K.morphNormals,oe.morphColors=K.morphColors,oe.morphTargetsCount=K.morphTargetsCount,oe.numClippingPlanes=K.numClippingPlanes,oe.numIntersection=K.numClipIntersection,oe.vertexAlphas=K.vertexAlphas,oe.vertexTangents=K.vertexTangents,oe.toneMapping=K.toneMapping}function un(C,K,oe,ce,re){K.isScene!==!0&&(K=tt),U.resetTextureUnits();const ze=K.fog,He=ce.isMeshStandardMaterial?K.environment:null,$e=P===null?w.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Fa,it=(ce.isMeshStandardMaterial?ie:R).get(ce.envMap||He),Ye=ce.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,lt=!!oe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),rt=!!oe.morphAttributes.position,Ut=!!oe.morphAttributes.normal,an=!!oe.morphAttributes.color;let Xt=Er;ce.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Xt=w.toneMapping);const ni=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,zt=ni!==void 0?ni.length:0,pt=at.get(ce),na=y.state.lights;if(X===!0&&(ve===!0||C!==A)){const Wn=C===A&&ce.id===Q;ct.setState(ce,C,Wn)}let Bt=!1;ce.version===pt.__version?(pt.needsLights&&pt.lightsStateVersion!==na.state.version||pt.outputColorSpace!==$e||re.isBatchedMesh&&pt.batching===!1||!re.isBatchedMesh&&pt.batching===!0||re.isInstancedMesh&&pt.instancing===!1||!re.isInstancedMesh&&pt.instancing===!0||re.isSkinnedMesh&&pt.skinning===!1||!re.isSkinnedMesh&&pt.skinning===!0||re.isInstancedMesh&&pt.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&pt.instancingColor===!1&&re.instanceColor!==null||pt.envMap!==it||ce.fog===!0&&pt.fog!==ze||pt.numClippingPlanes!==void 0&&(pt.numClippingPlanes!==ct.numPlanes||pt.numIntersection!==ct.numIntersection)||pt.vertexAlphas!==Ye||pt.vertexTangents!==lt||pt.morphTargets!==rt||pt.morphNormals!==Ut||pt.morphColors!==an||pt.toneMapping!==Xt||ot.isWebGL2===!0&&pt.morphTargetsCount!==zt)&&(Bt=!0):(Bt=!0,pt.__version=ce.version);let vn=pt.currentProgram;Bt===!0&&(vn=ea(ce,K,re));let Sn=!1,Ri=!1,ia=!1;const Jt=vn.getUniforms(),Xn=pt.uniforms;if(Le.useProgram(vn.program)&&(Sn=!0,Ri=!0,ia=!0),ce.id!==Q&&(Q=ce.id,Ri=!0),Sn||A!==C){Jt.setValue(se,"projectionMatrix",C.projectionMatrix),Jt.setValue(se,"viewMatrix",C.matrixWorldInverse);const Wn=Jt.map.cameraPosition;Wn!==void 0&&Wn.setValue(se,ke.setFromMatrixPosition(C.matrixWorld)),ot.logarithmicDepthBuffer&&Jt.setValue(se,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Jt.setValue(se,"isOrthographic",C.isOrthographicCamera===!0),A!==C&&(A=C,Ri=!0,ia=!0)}if(re.isSkinnedMesh){Jt.setOptional(se,re,"bindMatrix"),Jt.setOptional(se,re,"bindMatrixInverse");const Wn=re.skeleton;Wn&&(ot.floatVertexTextures?(Wn.boneTexture===null&&Wn.computeBoneTexture(),Jt.setValue(se,"boneTexture",Wn.boneTexture,U)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}re.isBatchedMesh&&(Jt.setOptional(se,re,"batchingTexture"),Jt.setValue(se,"batchingTexture",re._matricesTexture,U));const An=oe.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0&&ot.isWebGL2===!0)&&dt.update(re,oe,vn),(Ri||pt.receiveShadow!==re.receiveShadow)&&(pt.receiveShadow=re.receiveShadow,Jt.setValue(se,"receiveShadow",re.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(Xn.envMap.value=it,Xn.flipEnvMap.value=it.isCubeTexture&&it.isRenderTargetTexture===!1?-1:1),Ri&&(Jt.setValue(se,"toneMappingExposure",w.toneMappingExposure),pt.needsLights&&ta(Xn,ia),ze&&ce.fog===!0&&Ne.refreshFogUniforms(Xn,ze),Ne.refreshMaterialUniforms(Xn,ce,Z,z,be),hu.upload(se,Qn(pt),Xn,U)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(hu.upload(se,Qn(pt),Xn,U),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Jt.setValue(se,"center",re.center),Jt.setValue(se,"modelViewMatrix",re.modelViewMatrix),Jt.setValue(se,"normalMatrix",re.normalMatrix),Jt.setValue(se,"modelMatrix",re.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){const Wn=ce.uniformsGroups;for(let pn=0,wr=Wn.length;pn<wr;pn++)if(ot.isWebGL2){const Ga=Wn[pn];Ct.update(Ga,vn),Ct.bind(Ga,vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return vn}function ta(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Rr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,K,oe){at.get(C.texture).__webglTexture=K,at.get(C.depthTexture).__webglTexture=oe;const ce=at.get(C);ce.__hasExternalTextures=!0,ce.__hasExternalTextures&&(ce.__autoAllocateDepthBuffer=oe===void 0,ce.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,K){const oe=at.get(C);oe.__webglFramebuffer=K,oe.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,oe=0){P=C,q=K,F=oe;let ce=!0,re=null,ze=!1,He=!1;if(C){const it=at.get(C);it.__useDefaultFramebuffer!==void 0?(Le.bindFramebuffer(se.FRAMEBUFFER,null),ce=!1):it.__webglFramebuffer===void 0?U.setupRenderTarget(C):it.__hasExternalTextures&&U.rebindTextures(C,at.get(C.texture).__webglTexture,at.get(C.depthTexture).__webglTexture);const Ye=C.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(He=!0);const lt=at.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(lt[K])?re=lt[K][oe]:re=lt[K],ze=!0):ot.isWebGL2&&C.samples>0&&U.useMultisampledRTT(C)===!1?re=at.get(C).__webglMultisampledFramebuffer:Array.isArray(lt)?re=lt[oe]:re=lt,N.copy(C.viewport),ne.copy(C.scissor),me=C.scissorTest}else N.copy(pe).multiplyScalar(Z).floor(),ne.copy(D).multiplyScalar(Z).floor(),me=Y;if(Le.bindFramebuffer(se.FRAMEBUFFER,re)&&ot.drawBuffers&&ce&&Le.drawBuffers(C,re),Le.viewport(N),Le.scissor(ne),Le.setScissorTest(me),ze){const it=at.get(C.texture);se.framebufferTexture2D(se.FRAMEBUFFER,se.COLOR_ATTACHMENT0,se.TEXTURE_CUBE_MAP_POSITIVE_X+K,it.__webglTexture,oe)}else if(He){const it=at.get(C.texture),Ye=K||0;se.framebufferTextureLayer(se.FRAMEBUFFER,se.COLOR_ATTACHMENT0,it.__webglTexture,oe||0,Ye)}Q=-1},this.readRenderTargetPixels=function(C,K,oe,ce,re,ze,He){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=at.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&He!==void 0&&($e=$e[He]),$e){Le.bindFramebuffer(se.FRAMEBUFFER,$e);try{const it=C.texture,Ye=it.format,lt=it.type;if(Ye!==$i&&Ie.convert(Ye)!==se.getParameter(se.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const rt=lt===yl&&(Oe.has("EXT_color_buffer_half_float")||ot.isWebGL2&&Oe.has("EXT_color_buffer_float"));if(lt!==Mr&&Ie.convert(lt)!==se.getParameter(se.IMPLEMENTATION_COLOR_READ_TYPE)&&!(lt===xr&&(ot.isWebGL2||Oe.has("OES_texture_float")||Oe.has("WEBGL_color_buffer_float")))&&!rt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ce&&oe>=0&&oe<=C.height-re&&se.readPixels(K,oe,ce,re,Ie.convert(Ye),Ie.convert(lt),ze)}finally{const it=P!==null?at.get(P).__webglFramebuffer:null;Le.bindFramebuffer(se.FRAMEBUFFER,it)}}},this.copyFramebufferToTexture=function(C,K,oe=0){const ce=Math.pow(2,-oe),re=Math.floor(K.image.width*ce),ze=Math.floor(K.image.height*ce);U.setTexture2D(K,0),se.copyTexSubImage2D(se.TEXTURE_2D,oe,0,0,C.x,C.y,re,ze),Le.unbindTexture()},this.copyTextureToTexture=function(C,K,oe,ce=0){const re=K.image.width,ze=K.image.height,He=Ie.convert(oe.format),$e=Ie.convert(oe.type);U.setTexture2D(oe,0),se.pixelStorei(se.UNPACK_FLIP_Y_WEBGL,oe.flipY),se.pixelStorei(se.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),se.pixelStorei(se.UNPACK_ALIGNMENT,oe.unpackAlignment),K.isDataTexture?se.texSubImage2D(se.TEXTURE_2D,ce,C.x,C.y,re,ze,He,$e,K.image.data):K.isCompressedTexture?se.compressedTexSubImage2D(se.TEXTURE_2D,ce,C.x,C.y,K.mipmaps[0].width,K.mipmaps[0].height,He,K.mipmaps[0].data):se.texSubImage2D(se.TEXTURE_2D,ce,C.x,C.y,He,$e,K.image),ce===0&&oe.generateMipmaps&&se.generateMipmap(se.TEXTURE_2D),Le.unbindTexture()},this.copyTextureToTexture3D=function(C,K,oe,ce,re=0){if(w.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ze=C.max.x-C.min.x+1,He=C.max.y-C.min.y+1,$e=C.max.z-C.min.z+1,it=Ie.convert(ce.format),Ye=Ie.convert(ce.type);let lt;if(ce.isData3DTexture)U.setTexture3D(ce,0),lt=se.TEXTURE_3D;else if(ce.isDataArrayTexture||ce.isCompressedArrayTexture)U.setTexture2DArray(ce,0),lt=se.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}se.pixelStorei(se.UNPACK_FLIP_Y_WEBGL,ce.flipY),se.pixelStorei(se.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ce.premultiplyAlpha),se.pixelStorei(se.UNPACK_ALIGNMENT,ce.unpackAlignment);const rt=se.getParameter(se.UNPACK_ROW_LENGTH),Ut=se.getParameter(se.UNPACK_IMAGE_HEIGHT),an=se.getParameter(se.UNPACK_SKIP_PIXELS),Xt=se.getParameter(se.UNPACK_SKIP_ROWS),ni=se.getParameter(se.UNPACK_SKIP_IMAGES),zt=oe.isCompressedTexture?oe.mipmaps[re]:oe.image;se.pixelStorei(se.UNPACK_ROW_LENGTH,zt.width),se.pixelStorei(se.UNPACK_IMAGE_HEIGHT,zt.height),se.pixelStorei(se.UNPACK_SKIP_PIXELS,C.min.x),se.pixelStorei(se.UNPACK_SKIP_ROWS,C.min.y),se.pixelStorei(se.UNPACK_SKIP_IMAGES,C.min.z),oe.isDataTexture||oe.isData3DTexture?se.texSubImage3D(lt,re,K.x,K.y,K.z,ze,He,$e,it,Ye,zt.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),se.compressedTexSubImage3D(lt,re,K.x,K.y,K.z,ze,He,$e,it,zt.data)):se.texSubImage3D(lt,re,K.x,K.y,K.z,ze,He,$e,it,Ye,zt),se.pixelStorei(se.UNPACK_ROW_LENGTH,rt),se.pixelStorei(se.UNPACK_IMAGE_HEIGHT,Ut),se.pixelStorei(se.UNPACK_SKIP_PIXELS,an),se.pixelStorei(se.UNPACK_SKIP_ROWS,Xt),se.pixelStorei(se.UNPACK_SKIP_IMAGES,ni),re===0&&ce.generateMipmaps&&se.generateMipmap(lt),Le.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?U.setTextureCube(C,0):C.isData3DTexture?U.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?U.setTexture2DArray(C,0):U.setTexture2D(C,0),Le.unbindTexture()},this.resetState=function(){q=0,F=0,P=null,Le.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Fd?"display-p3":"srgb",i.unpackColorSpace=jt.workingColorSpace===Tu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Hn?as:k0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===as?Hn:Fa}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Q1 extends fS{}Q1.prototype.isWebGL1Renderer=!0;class J1 extends Ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);const $1=`
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`,eR=`
  precision mediump float;

  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uFlakeSize;
  uniform float uMinFlakeSize;
  uniform float uPixelResolution;
  uniform float uSpeed;
  uniform float uDepthFade;
  uniform float uFarPlane;
  uniform vec3 uColor;
  uniform float uBrightness;
  uniform float uGamma;
  uniform float uDensity;
  uniform float uVariant;
  uniform float uDirection;

  #define PI 3.14159265
  #define PI_OVER_6 0.5235988
  #define PI_OVER_3 1.0471976
  #define M1 1597334677U
  #define M2 3812015801U
  #define M3 3299493293U
  #define F0 2.3283064e-10

  #define hash(n) (n * (n ^ (n >> 15)))
  #define coord3(p) (uvec3(p).x * M1 ^ uvec3(p).y * M2 ^ uvec3(p).z * M3)

  const vec3 camK = vec3(0.57735027, 0.57735027, 0.57735027);
  const vec3 camI = vec3(0.70710678, 0.0, -0.70710678);
  const vec3 camJ = vec3(-0.40824829, 0.81649658, -0.40824829);
  const vec2 b1d = vec2(0.574, 0.819);

  vec3 hash3(uint n) {
    uvec3 hashed = hash(n) * uvec3(1U, 511U, 262143U);
    return vec3(hashed) * F0;
  }

  float snowflakeDist(vec2 p) {
    float r = length(p);
    float a = atan(p.y, p.x);
    a = abs(mod(a + PI_OVER_6, PI_OVER_3) - PI_OVER_6);
    vec2 q = r * vec2(cos(a), sin(a));
    float dMain = max(abs(q.y), max(-q.x, q.x - 1.0));
    float b1t = clamp(dot(q - vec2(0.4, 0.0), b1d), 0.0, 0.4);
    float dB1 = length(q - vec2(0.4, 0.0) - b1t * b1d);
    float b2t = clamp(dot(q - vec2(0.7, 0.0), b1d), 0.0, 0.25);
    float dB2 = length(q - vec2(0.7, 0.0) - b2t * b1d);
    return min(dMain, min(dB1, dB2)) * 10.0;
  }

  void main() {
    float invPixelRes = 1.0 / uPixelResolution;
    float pixelSize = max(1.0, floor(0.5 + uResolution.x * invPixelRes));
    float invPixelSize = 1.0 / pixelSize;

    vec2 fragCoord = floor(gl_FragCoord.xy * invPixelSize);
    vec2 res = uResolution * invPixelSize;
    float invResX = 1.0 / res.x;
    vec3 ray = normalize(vec3((fragCoord - res * 0.5) * invResX, 1.0));
    ray = ray.x * camI + ray.y * camJ + ray.z * camK;

    float timeSpeed = uTime * uSpeed;
    float windX = cos(uDirection) * 0.4;
    float windY = sin(uDirection) * 0.4;
    vec3 camPos = (windX * camI + windY * camJ + 0.1 * camK) * timeSpeed;
    vec3 pos = camPos;

    vec3 absRay = max(abs(ray), vec3(0.001));
    vec3 strides = 1.0 / absRay;
    vec3 raySign = step(ray, vec3(0.0));
    vec3 phase = fract(pos) * strides;
    phase = mix(strides - phase, phase, raySign);

    float rayDotCamK = dot(ray, camK);
    float invRayDotCamK = 1.0 / rayDotCamK;
    float invDepthFade = 1.0 / uDepthFade;
    float halfInvResX = 0.5 * invResX;
    vec3 timeAnim = timeSpeed * 0.1 * vec3(7.0, 8.0, 5.0);
    float t = 0.0;

    for (int i = 0; i < 128; i++) {
      if (t >= uFarPlane) break;

      vec3 fpos = floor(pos);
      uint cellCoord = coord3(fpos);
      float cellHash = hash3(cellCoord).x;

      if (cellHash < uDensity) {
        vec3 h = hash3(cellCoord);
        vec3 sinArg1 = fpos.yzx * 0.073;
        vec3 sinArg2 = fpos.zxy * 0.27;
        vec3 flakePos = 0.5 - 0.5 * cos(4.0 * sin(sinArg1) + 4.0 * sin(sinArg2) + 2.0 * h + timeAnim);
        flakePos = flakePos * 0.8 + 0.1 + fpos;
        float toIntersection = dot(flakePos - pos, camK) * invRayDotCamK;

        if (toIntersection > 0.0) {
          vec3 testPos = pos + ray * toIntersection - flakePos;
          float testX = dot(testPos, camI);
          float testY = dot(testPos, camJ);
          vec2 testUV = abs(vec2(testX, testY));

          float depth = dot(flakePos - camPos, camK);
          float flakeSize = max(uFlakeSize, uMinFlakeSize * depth * halfInvResX);
          float dist;

          if (uVariant < 0.5) {
            dist = max(testUV.x, testUV.y);
          } else if (uVariant < 1.5) {
            dist = length(testUV);
          } else {
            float invFlakeSize = 1.0 / flakeSize;
            dist = snowflakeDist(vec2(testX, testY) * invFlakeSize) * flakeSize;
          }

          if (dist < flakeSize) {
            float flakeSizeRatio = uFlakeSize / flakeSize;
            float intensity = exp2(-(t + toIntersection) * invDepthFade) *
              min(1.0, flakeSizeRatio * flakeSizeRatio) * uBrightness;
            gl_FragColor = vec4(uColor * pow(vec3(intensity), vec3(uGamma)), 1.0);
            return;
          }
        }
      }

      float nextStep = min(min(phase.x, phase.y), phase.z);
      vec3 sel = step(phase, vec3(nextStep));
      phase = phase - nextStep + strides * sel;
      t += nextStep;
      pos = mix(pos + ray * nextStep, floor(pos + ray * nextStep + 0.5), sel);
    }

    gl_FragColor = vec4(0.0);
  }
`;function tR({color:s="#E8E2D8",flakeSize:e=.01,minFlakeSize:i=1.25,pixelResolution:r=200,speed:l=.65,depthFade:c=8,farPlane:d=20,brightness:f=.55,gamma:m=.4545,density:p=.16,variant:g="square",direction:_=125,className:x="",style:E={}}){const M=Qe.useRef(null),b=Qe.useRef(0),y=Qe.useRef(!0),v=Qe.useRef(null),O=Qe.useRef(null),w=Qe.useRef(null),B=Qe.useRef(!1),q=Qe.useMemo(()=>g==="round"?1:g==="snowflake"?2:0,[g]),F=Qe.useMemo(()=>{const Q=new kt(s);return new fe(Q.r,Q.g,Q.b)},[s]),P=Qe.useCallback(()=>{w.current&&clearTimeout(w.current),w.current=window.setTimeout(()=>{const Q=M.current,A=v.current,N=O.current;if(!Q||!A||!N)return;const ne=Q.offsetWidth,me=Q.offsetHeight;A.setSize(ne,me),N.uniforms.uResolution.value.set(ne,me)},100)},[]);return Qe.useEffect(()=>{const Q=M.current;if(!Q)return;const A=new IntersectionObserver(([N])=>{y.current=N.isIntersecting},{threshold:0});return A.observe(Q),()=>A.disconnect()},[]),Qe.useEffect(()=>{const Q=window.matchMedia("(prefers-reduced-motion: reduce)"),A=()=>{B.current=Q.matches};return A(),Q.addEventListener("change",A),()=>Q.removeEventListener("change",A)},[]),Qe.useEffect(()=>{const Q=M.current;if(!Q)return;const A=new J1,N=new aS(-1,1,1,-1,0,1),ne=new fS({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});ne.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),ne.setSize(Q.offsetWidth,Q.offsetHeight),ne.setClearColor(0,0),Q.appendChild(ne.domElement),v.current=ne;const me=new br({vertexShader:$1,fragmentShader:eR,uniforms:{uTime:{value:0},uResolution:{value:new Vt(Q.offsetWidth,Q.offsetHeight)},uFlakeSize:{value:e},uMinFlakeSize:{value:i},uPixelResolution:{value:r},uSpeed:{value:l},uDepthFade:{value:c},uFarPlane:{value:d},uColor:{value:F.clone()},uBrightness:{value:f},uGamma:{value:m},uDensity:{value:p},uVariant:{value:q},uDirection:{value:_*Math.PI/180}},transparent:!0});O.current=me;const Ae=new Ru(2,2);A.add(new Ba(Ae,me)),window.addEventListener("resize",P);const V=performance.now(),te=()=>{b.current=requestAnimationFrame(te),y.current&&(me.uniforms.uTime.value=B.current?.1:(performance.now()-V)*.001,ne.render(A,N))};return te(),()=>{cancelAnimationFrame(b.current),window.removeEventListener("resize",P),w.current&&clearTimeout(w.current),Q.contains(ne.domElement)&&Q.removeChild(ne.domElement),ne.dispose(),ne.forceContextLoss(),Ae.dispose(),me.dispose(),v.current=null,O.current=null}},[f,F,p,c,_,d,e,m,P,i,r,l,q]),Qe.useEffect(()=>{const Q=O.current;Q&&(Q.uniforms.uFlakeSize.value=e,Q.uniforms.uMinFlakeSize.value=i,Q.uniforms.uPixelResolution.value=r,Q.uniforms.uSpeed.value=l,Q.uniforms.uDepthFade.value=c,Q.uniforms.uFarPlane.value=d,Q.uniforms.uBrightness.value=f,Q.uniforms.uGamma.value=m,Q.uniforms.uDensity.value=p,Q.uniforms.uVariant.value=q,Q.uniforms.uDirection.value=_*Math.PI/180,Q.uniforms.uColor.value.copy(F))},[e,i,r,l,c,d,f,m,p,q,_,F]),he.jsx("div",{ref:M,className:`pixel-snow-container ${x}`.trim(),style:E,"aria-hidden":"true"})}var Ld=D0();const ho={kiri:{number:"01",label:"kiri"},fragments:{number:"02",label:"fragments"},games:{number:"03",label:"games"},places:{number:"04",label:"places"},others:{number:"05",label:"others"}};function hS(s,e=120){if(!s)return"";const i=s.replace(/<[^>]*>/g,"").replace(/[#*_>`~-]/g,"").replace(/\s+/g," ").trim();return i.length<=e?i:`${i.slice(0,e).trim()}…`}function dS(s){return new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",year:"numeric"}).format(new Date(s))}function pS(s){return String(s).padStart(3,"0")}function i0(s,e){(e==null||e>s.length)&&(e=s.length);for(var i=0,r=Array(e);i<e;i++)r[i]=s[i];return r}function nR(s){if(Array.isArray(s))return s}function iR(s,e){var i=s==null?null:typeof Symbol<"u"&&s[Symbol.iterator]||s["@@iterator"];if(i!=null){var r,l,c,d,f=[],m=!0,p=!1;try{if(c=(i=i.call(s)).next,e!==0)for(;!(m=(r=c.call(i)).done)&&(f.push(r.value),f.length!==e);m=!0);}catch(g){p=!0,l=g}finally{try{if(!m&&i.return!=null&&(d=i.return(),Object(d)!==d))return}finally{if(p)throw l}}return f}}function aR(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function rR(s,e){return nR(s)||iR(s,e)||sR(s,e)||aR()}function sR(s,e){if(s){if(typeof s=="string")return i0(s,e);var i={}.toString.call(s).slice(8,-1);return i==="Object"&&s.constructor&&(i=s.constructor.name),i==="Map"||i==="Set"?Array.from(s):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?i0(s,e):void 0}}const mS=Object.entries,a0=Object.setPrototypeOf,oR=Object.isFrozen,lR=Object.getPrototypeOf,cR=Object.getOwnPropertyDescriptor;let Cn=Object.freeze,On=Object.seal,no=Object.create,gS=typeof Reflect<"u"&&Reflect,Dd=gS.apply,Ud=gS.construct;Cn||(Cn=function(e){return e});On||(On=function(e){return e});Dd||(Dd=function(e,i){for(var r=arguments.length,l=new Array(r>2?r-2:0),c=2;c<r;c++)l[c-2]=arguments[c];return e.apply(i,l)});Ud||(Ud=function(e){for(var i=arguments.length,r=new Array(i>1?i-1:0),l=1;l<i;l++)r[l-1]=arguments[l];return new e(...r)});const Jr=bn(Array.prototype.forEach),uR=bn(Array.prototype.lastIndexOf),r0=bn(Array.prototype.pop),hl=bn(Array.prototype.push),fR=bn(Array.prototype.splice),oo=Array.isArray,gl=bn(String.prototype.toLowerCase),dd=bn(String.prototype.toString),s0=bn(String.prototype.match),dl=bn(String.prototype.replace),o0=bn(String.prototype.indexOf),hR=bn(String.prototype.trim),dR=bn(Number.prototype.toString),pR=bn(Boolean.prototype.toString),l0=typeof BigInt>"u"?null:bn(BigInt.prototype.toString),c0=typeof Symbol>"u"?null:bn(Symbol.prototype.toString),ui=bn(Object.prototype.hasOwnProperty),pl=bn(Object.prototype.toString),Kn=bn(RegExp.prototype.test),gr=mR(TypeError);function bn(s){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var i=arguments.length,r=new Array(i>1?i-1:0),l=1;l<i;l++)r[l-1]=arguments[l];return Dd(s,e,r)}}function mR(s){return function(){for(var e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return Ud(s,i)}}function Lt(s,e){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:gl;if(a0&&a0(s,null),!oo(e))return s;let r=e.length;for(;r--;){let l=e[r];if(typeof l=="string"){const c=i(l);c!==l&&(oR(e)||(e[r]=c),l=c)}s[l]=!0}return s}function gR(s){for(let e=0;e<s.length;e++)ui(s,e)||(s[e]=null);return s}function Ti(s){const e=no(null);for(const r of mS(s)){var i=rR(r,2);const l=i[0],c=i[1];ui(s,l)&&(oo(c)?e[l]=gR(c):c&&typeof c=="object"&&c.constructor===Object?e[l]=Ti(c):e[l]=c)}return e}function _R(s){switch(typeof s){case"string":return s;case"number":return dR(s);case"boolean":return pR(s);case"bigint":return l0?l0(s):"0";case"symbol":return c0?c0(s):"Symbol()";case"undefined":return pl(s);case"function":case"object":{if(s===null)return pl(s);const e=s,i=Ii(e,"toString");if(typeof i=="function"){const r=i(e);return typeof r=="string"?r:pl(r)}return pl(s)}default:return pl(s)}}function Ii(s,e){for(;s!==null;){const r=cR(s,e);if(r){if(r.get)return bn(r.get);if(typeof r.value=="function")return bn(r.value)}s=lR(s)}function i(){return null}return i}function vR(s){try{return Kn(s,""),!0}catch{return!1}}const u0=Cn(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),pd=Cn(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),md=Cn(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),SR=Cn(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),gd=Cn(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),xR=Cn(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),f0=Cn(["#text"]),h0=Cn(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),_d=Cn(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),d0=Cn(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),lu=Cn(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),yR=On(/{{[\w\W]*|^[\w\W]*}}/g),ER=On(/<%[\w\W]*|^[\w\W]*%>/g),MR=On(/\${[\w\W]*/g),TR=On(/^data-[\-\w.\u00B7-\uFFFF]+$/),bR=On(/^aria-[\-\w]+$/),p0=On(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),AR=On(/^(?:\w+script|data):/i),RR=On(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),wR=On(/^html$/i),CR=On(/^[a-z][.\w]*(-[.\w]+)+$/i),m0=On(/<[/\w!]/g),g0=On(/<[/\w]/g),LR=On(/<\/no(script|embed|frames)/i),DR=On(/\/>/i),Ei={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},_S=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],UR=Cn(Lt({},_S)),NR=(function(){const s={};return Jr(_S,e=>{s[e]=On(new RegExp("</"+e+"(?=[\\t\\n\\f\\r />])","i"))}),Cn(s)})(),OR=function(){return typeof window>"u"?null:window},PR=function(e,i){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null;const l="data-tt-policy-suffix";i&&i.hasAttribute(l)&&(r=i.getAttribute(l));const c="dompurify"+(r?"#"+r:"");try{return e.createPolicy(c,{createHTML(d){return d},createScriptURL(d){return d}})}catch{return console.warn("TrustedTypes policy "+c+" could not be created."),null}},_0=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},_r=function(e,i,r,l){return ui(e,i)&&oo(e[i])?Lt(l.base?Ti(l.base):{},e[i],l.transform):r},vd=function(e,i,r){const l=ui(e,i)?e[i]:void 0;return l&&typeof l=="object"?Ti(l):r()};function vS(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:OR();const e=Te=>vS(Te);if(e.version="3.4.16",e.removed=[],!s||!s.document||s.document.nodeType!==Ei.document||!s.Element)return e.isSupported=!1,e;let i=s.document;const r=i,l=r.currentScript;s.DocumentFragment;const c=s.HTMLTemplateElement,d=s.Node,f=s.Element,m=s.NodeFilter;s.NamedNodeMap===void 0&&(s.NamedNodeMap||s.MozNamedAttrMap),s.HTMLFormElement;const p=s.DOMParser,g=s.trustedTypes,_=f.prototype,x=Ii(_,"cloneNode"),E=Ii(_,"remove"),M=Ii(_,"removeAttributeNode"),b=Ii(_,"nextSibling"),y=Ii(_,"childNodes"),v=Ii(_,"parentNode"),O=Ii(_,"shadowRoot"),w=Ii(_,"attributes"),B=d&&d.prototype?Ii(d.prototype,"nodeType"):null,q=d&&d.prototype?Ii(d.prototype,"nodeName"):null,F=d&&d.prototype?Ii(d.prototype,"ownerDocument"):null,P=function(L){return B?B(L):L.nodeType},Q=function(L){return q?q(L):L.nodeName};if(typeof c=="function"){const Te=i.createElement("template");Te.content&&Te.content.ownerDocument&&(i=Te.content.ownerDocument)}let A,N="",ne,me=!1,Ae=0;const V=function(){if(Ae>0)throw gr('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},te=function(L){V(),Ae++;try{return A.createHTML(L)}finally{Ae--}},z=function(L){V(),Ae++;try{return A.createScriptURL(L)}finally{Ae--}},Z=function(){return me||(ne=PR(g,l),me=!0),ne},J=i,le=J.implementation,pe=J.createNodeIterator,D=J.createDocumentFragment,Y=J.getElementsByTagName,k=r.importNode;let X=_0();e.isSupported=typeof mS=="function"&&typeof v=="function"&&le&&le.createHTMLDocument!==void 0;const ve=yR,be=ER,Ce=MR,je=TR,ke=bR,tt=AR,_t=RR,se=CR;let dn=p0,Oe=null;const ot=Lt({},[...u0,...pd,...md,...gd,...f0]);let Le=null;const Ft=Lt({},[...h0,..._d,...d0,...lu]);let at=Object.seal(no(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),U=null,R=null;const ie=Object.seal(no(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}}));let Me=!0,Ee=!0,Se=!1,We=!0,Ne=!1,Be=!0,qe=!1,ct=!1,ye=null,Rt=null,dt=!1,Je=!1,Fe=!1,Ie=!1,Ke=!0,Ct=!1;const Kt="user-content-";let ut=!0,we=!1,H={},De=null;const Ue=Lt({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]);let nt=null;const Ze=Lt({},["audio","video","img","source","image","track"]);let Pt=null;const Dt=Lt({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Qt="http://www.w3.org/1998/Math/MathML",en="http://www.w3.org/2000/svg",xt="http://www.w3.org/1999/xhtml";let nn=xt,Pn=!1,fa=null;const Ar=Lt({},[Qt,en,xt],dd),Hi=Cn(["mi","mo","mn","ms","mtext"]);let ha=Lt({},Hi);const ea=Cn(["annotation-xml"]);let Qn=Lt({},ea);const cn=Lt({},["title","style","font","a","script"]);let un=null;const ta=["application/xhtml+xml","text/html"],Rr="text/html";let C=null,K=null;const oe=i.createElement("form"),ce=function(L){return L instanceof RegExp||L instanceof Function},re=function(){let L=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(K&&K===L)return;(!L||typeof L!="object")&&(L={}),L=Ti(L),un=ta.indexOf(L.PARSER_MEDIA_TYPE)===-1?Rr:L.PARSER_MEDIA_TYPE,C=un==="application/xhtml+xml"?dd:gl,Oe=_r(L,"ALLOWED_TAGS",ot,{transform:C}),Le=_r(L,"ALLOWED_ATTR",Ft,{transform:C}),fa=_r(L,"ALLOWED_NAMESPACES",Ar,{transform:dd}),Pt=_r(L,"ADD_URI_SAFE_ATTR",Dt,{transform:C,base:Dt}),nt=_r(L,"ADD_DATA_URI_TAGS",Ze,{transform:C,base:Ze}),De=_r(L,"FORBID_CONTENTS",Ue,{transform:C}),U=_r(L,"FORBID_TAGS",Ti({}),{transform:C}),R=_r(L,"FORBID_ATTR",Ti({}),{transform:C}),H=ui(L,"USE_PROFILES")?L.USE_PROFILES&&typeof L.USE_PROFILES=="object"?Ti(L.USE_PROFILES):L.USE_PROFILES:!1,Me=L.ALLOW_ARIA_ATTR!==!1,Ee=L.ALLOW_DATA_ATTR!==!1,Se=L.ALLOW_UNKNOWN_PROTOCOLS||!1,We=L.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ne=L.SAFE_FOR_TEMPLATES||!1,Be=L.SAFE_FOR_XML!==!1,qe=L.WHOLE_DOCUMENT||!1,Je=L.RETURN_DOM||!1,Fe=L.RETURN_DOM_FRAGMENT||!1,Ie=L.RETURN_TRUSTED_TYPE||!1,dt=L.FORCE_BODY||!1,Ke=L.SANITIZE_DOM!==!1,Ct=L.SANITIZE_NAMED_PROPS||!1,ut=L.KEEP_CONTENT!==!1,we=L.IN_PLACE||!1,dn=vR(L.ALLOWED_URI_REGEXP)?L.ALLOWED_URI_REGEXP:p0,nn=typeof L.NAMESPACE=="string"?L.NAMESPACE:xt,ha=vd(L,"MATHML_TEXT_INTEGRATION_POINTS",()=>Lt({},Hi)),Qn=vd(L,"HTML_INTEGRATION_POINTS",()=>Lt({},ea));const W=vd(L,"CUSTOM_ELEMENT_HANDLING",()=>no(null));if(at=no(null),ui(W,"tagNameCheck")&&ce(W.tagNameCheck)&&(at.tagNameCheck=W.tagNameCheck),ui(W,"attributeNameCheck")&&ce(W.attributeNameCheck)&&(at.attributeNameCheck=W.attributeNameCheck),ui(W,"allowCustomizedBuiltInElements")&&typeof W.allowCustomizedBuiltInElements=="boolean"&&(at.allowCustomizedBuiltInElements=W.allowCustomizedBuiltInElements),On(at),Ne&&(Ee=!1),Fe&&(Je=!0),H&&(Oe=Lt({},f0),Le=no(null),H.html===!0&&(Lt(Oe,u0),Lt(Le,h0)),H.svg===!0&&(Lt(Oe,pd),Lt(Le,_d),Lt(Le,lu)),H.svgFilters===!0&&(Lt(Oe,md),Lt(Le,_d),Lt(Le,lu)),H.mathMl===!0&&(Lt(Oe,gd),Lt(Le,d0),Lt(Le,lu))),ie.tagCheck=null,ie.attributeCheck=null,ui(L,"ADD_TAGS")&&(typeof L.ADD_TAGS=="function"?ie.tagCheck=L.ADD_TAGS:oo(L.ADD_TAGS)&&(Oe===ot&&(Oe=Ti(Oe)),Lt(Oe,L.ADD_TAGS,C))),ui(L,"ADD_ATTR")&&(typeof L.ADD_ATTR=="function"?ie.attributeCheck=L.ADD_ATTR:oo(L.ADD_ATTR)&&(Le===Ft&&(Le=Ti(Le)),Lt(Le,L.ADD_ATTR,C))),ui(L,"ADD_FORBID_CONTENTS")&&oo(L.ADD_FORBID_CONTENTS)&&(De===Ue&&(De=Ti(De)),Lt(De,L.ADD_FORBID_CONTENTS,C)),ut&&(Oe["#text"]=!0),qe&&Lt(Oe,["html","head","body"]),Oe.table&&(Lt(Oe,["tbody"]),delete U.tbody),L.TRUSTED_TYPES_POLICY){if(typeof L.TRUSTED_TYPES_POLICY.createHTML!="function")throw gr('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof L.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw gr('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');const xe=A;A=L.TRUSTED_TYPES_POLICY;try{N=te("")}catch(Re){throw A=xe,Re}}else L.TRUSTED_TYPES_POLICY===null?(A=void 0,N=""):(A===void 0&&(A=Z()),A&&typeof N=="string"&&(N=te("")));Cn&&Cn(L),K=L},ze=Lt({},[...pd,...md,...SR]),He=Lt({},[...gd,...xR]),$e=function(L,W,xe){return W.namespaceURI===xt?L==="svg":W.namespaceURI===Qt?L==="svg"&&(xe==="annotation-xml"||ha[xe]):!!ze[L]},it=function(L,W,xe){return W.namespaceURI===xt?L==="math":W.namespaceURI===en?L==="math"&&Qn[xe]:!!He[L]},Ye=function(L,W,xe){return W.namespaceURI===en&&!Qn[xe]||W.namespaceURI===Qt&&!ha[xe]?!1:!He[L]&&(cn[L]||!ze[L])},lt=function(L){let W=v(L);(!W||!W.tagName)&&(W={namespaceURI:nn,tagName:"template"});const xe=gl(L.tagName),Re=gl(W.tagName);return fa[L.namespaceURI]?L.namespaceURI===en?$e(xe,W,Re):L.namespaceURI===Qt?it(xe,W,Re):L.namespaceURI===xt?Ye(xe,W,Re):!!(un==="application/xhtml+xml"&&fa[L.namespaceURI]):!1},rt=function(L){hl(e.removed,{element:L});try{v(L).removeChild(L)}catch{if(E(L),!v(L))throw gr("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Ut=function(L,W,xe){try{M(L,W)}catch{try{L.removeAttribute(xe)}catch{}}},an=function(L){zt(L);const W=y(L);if(W){const Re=[];Jr(W,Ve=>{hl(Re,Ve)}),Jr(Re,Ve=>{try{E(Ve)}catch{}})}const xe=w(L);if(xe)for(let Re=xe.length-1;Re>=0;--Re){const Ve=xe[Re],ft=Ve&&Ve.name;typeof ft=="string"&&Ut(L,Ve,ft)}},Xt=function(L,W,xe){if(!xe)try{xe=W.getAttributeNode(L)}catch{xe=null}hl(e.removed,{attribute:xe||null,from:W});try{xe?M(W,xe):W.removeAttribute(L)}catch{try{W.removeAttribute(L)}catch{}}if(L==="is")if(Je||Fe)try{rt(W)}catch{}else try{W.setAttribute(L,"")}catch{}},ni=function(L){const W=w(L);if(W)for(let xe=W.length-1;xe>=0;--xe){const Re=W[xe],Ve=Re&&Re.name;typeof Ve!="string"||Le[C(Ve)]||Ut(L,Re,Ve)}},zt=function(L){const W=[L];for(;W.length>0;){const xe=W.pop();P(xe)===Ei.element&&ni(xe);const Re=y(xe);if(Re)for(let Ve=Re.length-1;Ve>=0;--Ve)W.push(Re[Ve])}},pt=function(L,W){return Be?L==="patchsrc"?!0:L==="for"&&W!=="label"&&W!=="output":!1},na=function(L){if(!Be)return;const W=[L];for(;W.length>0;){const xe=W.pop(),Re=P(xe);if(Re===Ei.processingInstruction||Re===Ei.comment&&Kn(g0,xe.data)){try{E(xe)}catch{}continue}if(Re===Ei.element){const ft=xe,Et=C(Q(xe));try{ft.hasAttribute&&ft.hasAttribute("patchsrc")&&ft.removeAttribute("patchsrc"),ft.hasAttribute&&ft.hasAttribute("for")&&pt("for",Et)&&ft.removeAttribute("for")}catch{}}const Ve=y(xe);if(Ve)for(let ft=Ve.length-1;ft>=0;--ft)W.push(Ve[ft])}},Bt=function(L){let W=null,xe=null;if(dt)L="<remove></remove>"+L;else{const ft=s0(L,/^[\r\n\t ]+/);xe=ft&&ft[0]}un==="application/xhtml+xml"&&nn===xt&&(L='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+L+"</body></html>");const Re=A?te(L):L;if(nn===xt)try{W=new p().parseFromString(Re,un)}catch{}if(!W||!W.documentElement){W=le.createDocument(nn,"template",null);try{W.documentElement.innerHTML=Pn?N:Re}catch{}}const Ve=W.body||W.documentElement;return L&&xe&&Ve.insertBefore(i.createTextNode(xe),Ve.childNodes[0]||null),nn===xt?Y.call(W,qe?"html":"body")[0]:qe?W.documentElement:Ve},vn=function(L){const W=F?F(L):L.ownerDocument;return pe.call(W||L,L,m.SHOW_ELEMENT|m.SHOW_COMMENT|m.SHOW_TEXT|m.SHOW_PROCESSING_INSTRUCTION|m.SHOW_CDATA_SECTION,null)},Sn=function(L){return L=dl(L,ve," "),L=dl(L,be," "),L=dl(L,Ce," "),L},Ri=function(L){var W;L.normalize();const xe=F?F(L):L.ownerDocument,Re=pe.call(xe||L,L,m.SHOW_TEXT|m.SHOW_COMMENT|m.SHOW_CDATA_SECTION|m.SHOW_PROCESSING_INSTRUCTION,null);let Ve=Re.nextNode();for(;Ve;)Ve.data=Sn(Ve.data),Ve=Re.nextNode();const ft=(W=L.querySelectorAll)===null||W===void 0?void 0:W.call(L,"template");ft&&Jr(ft,Et=>{Jt(Et.content)&&Ri(Et.content)})},ia=function(L){const W=q?q(L):null;return typeof W!="string"||C(W)!=="form"?!1:typeof L.nodeName!="string"||typeof L.textContent!="string"||typeof L.removeChild!="function"||L.attributes!==w(L)||typeof L.removeAttribute!="function"||typeof L.removeAttributeNode!="function"||typeof L.getAttributeNode!="function"||typeof L.setAttribute!="function"||typeof L.namespaceURI!="string"||typeof L.insertBefore!="function"||typeof L.hasChildNodes!="function"||L.nodeType!==B(L)||L.childNodes!==y(L)},Jt=function(L){if(!B||typeof L!="object"||L===null)return!1;try{return B(L)===Ei.documentFragment}catch{return!1}},Xn=function(L){if(!B||typeof L!="object"||L===null)return!1;try{return typeof B(L)=="number"}catch{return!1}};function An(Te,L,W){Te.length!==0&&Jr(Te,xe=>{xe.call(e,L,W,K)})}const Wn=function(L,W){return!!(Be&&L.hasChildNodes()&&!Xn(L.firstElementChild)&&Kn(m0,L.textContent)&&Kn(m0,L.innerHTML)||Be&&L.namespaceURI===xt&&UR[W]&&(Xn(L.firstElementChild)||typeof L.textContent=="string"&&Kn(NR[W],L.textContent))||L.nodeType===Ei.processingInstruction||Be&&L.nodeType===Ei.comment&&Kn(g0,L.data))},pn=function(L,W){if(L instanceof RegExp)return Kn(L,W);if(L instanceof Function){for(var xe=arguments.length,Re=new Array(xe>2?xe-2:0),Ve=2;Ve<xe;Ve++)Re[Ve-2]=arguments[Ve];return!!L(W,...Re)}return!1},wr=function(L,W,xe){if(!U[W]&&pa(W)&&pn(at.tagNameCheck,W))return!1;if(ut&&!De[W]){const Re=v(L),Ve=y(L);if(Ve&&Re){const ft=Ve.length;for(let Et=ft-1;Et>=0;--Et){const tn=L===xe?x(Ve[Et],!0):Ve[Et];Re.insertBefore(tn,b(L))}}}return rt(L),!0},Ga=function(L,W,xe,Re){return L.length===0?W:W===xe||W===Re?Ti(W):W},aa=function(L,W){return L===W||v(L)!==null?!1:(we&&zt(L),!0)},da=function(L,W){if(An(X.beforeSanitizeElements,L,null),aa(L,W))return!0;if(ia(L))return rt(L),!0;const xe=C(Q(L));if(Oe=Ga(X.uponSanitizeElement,Oe,ot,ye),An(X.uponSanitizeElement,L,{tagName:xe,allowedTags:Oe}),aa(L,W))return!0;if(Wn(L,xe))return rt(L),!0;if(U[xe]||!(ie.tagCheck instanceof Function&&ie.tagCheck(xe))&&!Oe[xe]){const Re=wr(L,xe,W);return Re===!1&&(An(X.afterSanitizeElements,L,null),aa(L,W))?!0:Re}if(P(L)===Ei.element&&!lt(L)||(xe==="noscript"||xe==="noembed"||xe==="noframes")&&Kn(LR,L.innerHTML))return rt(L),!0;if(Ne&&L.nodeType===Ei.text){const Re=Sn(L.textContent);L.textContent!==Re&&(hl(e.removed,{element:L.cloneNode()}),L.textContent=Re)}return An(X.afterSanitizeElements,L,null),aa(L,W)},_o=function(L,W,xe){if(R[W]||pt(W,L)||Ke&&(W==="id"||W==="name")&&(xe in i||xe in oe))return!1;const Re=Le[W]||ie.attributeCheck instanceof Function&&ie.attributeCheck(W,L);return Ee&&Kn(je,W)||Me&&Kn(ke,W)?!0:Re?Pt[W]||Kn(dn,dl(xe,_t,""))||(W==="src"||W==="xlink:href"||W==="href")&&L!=="script"&&o0(xe,"data:")===0&&nt[L]||Se&&!Kn(tt,dl(xe,_t,""))?!0:!xe:pa(L)&&pn(at.tagNameCheck,L)&&pn(at.attributeNameCheck,W,L)||W==="is"&&at.allowCustomizedBuiltInElements&&pn(at.tagNameCheck,xe)},Cl=Lt({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),pa=function(L){return!Cl[gl(L)]&&Kn(se,L)},Cu=function(L,W,xe,Re){if(A&&typeof g=="object"&&typeof g.getAttributeType=="function"&&!xe)switch(g.getAttributeType(L,W)){case"TrustedHTML":return te(Re);case"TrustedScriptURL":return z(Re)}return Re},Ll=function(L,W,xe,Re){try{return xe?L.setAttributeNS(xe,W,Re):L.setAttribute(W,Re),ia(L)?(rt(L),!1):!0}catch{return Xt(W,L),!1}},vo=function(L,W){if(An(X.beforeSanitizeAttributes,L,null),aa(L,W))return;const xe=L.attributes;if(!xe||ia(L))return;Le=Ga(X.uponSanitizeAttribute,Le,Ft,Rt);const Re={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Le,forceKeepAttr:void 0};let Ve=xe.length;const ft=C(L.nodeName);for(;Ve--;){const Et=xe[Ve],tn=Et.name,Jn=Et.namespaceURI,Rn=Et.value,qn=C(tn),Cr=Rn;let mn=tn==="value"?Cr:hR(Cr),Gi=!1;if(Re.attrName=qn,Re.attrValue=mn,Re.keepAttr=!0,Re.forceKeepAttr=void 0,An(X.uponSanitizeAttribute,L,Re),mn=Re.attrValue,Ct&&(qn==="id"||qn==="name")&&o0(mn,Kt)!==0&&(Xt(tn,L,Et),mn=Kt+mn,Gi=!0),Be&&Kn(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,mn)){Xt(tn,L,Et);continue}if(qn==="attributename"&&s0(mn,"href")){Xt(tn,L,Et);continue}if(!Re.forceKeepAttr){if(!Re.keepAttr){Xt(tn,L,Et);continue}if(!We&&Kn(DR,mn)){Xt(tn,L,Et);continue}if(Ne&&(mn=Sn(mn)),!_o(ft,qn,mn)){Xt(tn,L,Et);continue}mn=Cu(ft,qn,Jn,mn),mn!==Cr&&Ll(L,tn,Jn,mn)&&Gi&&r0(e.removed)}}An(X.afterSanitizeAttributes,L,null),aa(L,W)},ka=function(L){let W=null;const xe=vn(L);for(An(X.beforeSanitizeShadowDOM,L,null);W=xe.nextNode();)if(An(X.uponSanitizeShadowNode,W,null),da(W,L),vo(W,L),Jt(W.content)&&ka(W.content),P(W)===Ei.element){const Re=O(W);Jt(Re)&&(So(Re),ka(Re))}An(X.afterSanitizeShadowDOM,L,null)},So=function(L){const W=[{node:L,shadow:null}];for(;W.length>0;){const xe=W.pop();if(xe.shadow){ka(xe.shadow);continue}const Re=xe.node,Ve=P(Re)===Ei.element,ft=y(Re);if(ft)for(let Et=ft.length-1;Et>=0;--Et)W.push({node:ft[Et],shadow:null});if(Ve){const Et=q?q(Re):null;if(typeof Et=="string"&&C(Et)==="template"){const tn=Re.content;Jt(tn)&&W.push({node:tn,shadow:null})}}if(Ve){const Et=O(Re);Jt(Et)&&W.push({node:null,shadow:Et},{node:Et,shadow:null})}}};return e.sanitize=function(Te){let L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},W=null,xe=null,Re=null,Ve=null;if(Pn=!Te,Pn&&(Te="<!-->"),typeof Te!="string"&&!Xn(Te)&&(Te=_R(Te),typeof Te!="string"))throw gr("dirty is not a string, aborting");if(!e.isSupported)return Te;ct?(Oe=ye,Le=Rt):re(L),(X.uponSanitizeElement.length>0||X.uponSanitizeAttribute.length>0)&&(Oe=Ti(Oe)),X.uponSanitizeAttribute.length>0&&(Le=Ti(Le)),e.removed=[];const ft=we&&typeof Te!="string"&&Xn(Te);if(ft){na(Te);const Jn=Q(Te);if(typeof Jn=="string"){const Rn=C(Jn);if(!Oe[Rn]||U[Rn])throw an(Te),gr("root node is forbidden and cannot be sanitized in-place")}if(ia(Te))throw an(Te),gr("root node is clobbered and cannot be sanitized in-place");try{So(Te)}catch(Rn){throw an(Te),Rn}}else if(Xn(Te))W=Bt("<!---->"),xe=W.ownerDocument.importNode(Te,!0),xe.nodeType===Ei.element&&xe.nodeName==="BODY"||xe.nodeName==="HTML"?W=xe:W.appendChild(xe),So(W);else{if(!Je&&!Ne&&!qe&&Te.indexOf("<")===-1)return A&&Ie?te(Te):Te;if(W=Bt(Te),!W)return Je?null:Ie?N:""}W&&dt&&rt(W.firstChild);const Et=ft?Te:W;try{const Jn=vn(Et);for(;Re=Jn.nextNode();)da(Re,Et),vo(Re,Et),Jt(Re.content)&&ka(Re.content)}catch(Jn){throw ft&&(an(Te),Jr(e.removed,Rn=>{Rn.element&&zt(Rn.element)})),Jn}if(ft){let Jn=!1;if(Jr(e.removed,Rn=>{Rn.element&&(Rn.element===Te&&(Jn=!0),zt(Rn.element))}),Jn)throw gr("a node selected for removal could not be safely returned; refusing to sanitize in place");return Ne&&Ri(Te),Te}if(Je){if(Ne&&Ri(W),Fe)for(Ve=D.call(W.ownerDocument);W.firstChild;)Ve.appendChild(W.firstChild);else Ve=W;return(Le.shadowroot||Le.shadowrootmode)&&(Ve=k.call(r,Ve,!0)),Ve}let tn=qe?W.outerHTML:W.innerHTML;return qe&&Oe["!doctype"]&&W.ownerDocument&&W.ownerDocument.doctype&&W.ownerDocument.doctype.name&&Kn(wR,W.ownerDocument.doctype.name)&&(tn="<!DOCTYPE "+W.ownerDocument.doctype.name+`>
`+tn),Ne&&(tn=Sn(tn)),A&&Ie?te(tn):tn},e.setConfig=function(){let Te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};re(Te),ct=!0,ye=Oe,Rt=Le},e.clearConfig=function(){K=null,ct=!1,ye=null,Rt=null,A=ne,N=""},e.isValidAttribute=function(Te,L,W){K||re({});const xe=C(Te),Re=C(L);return _o(xe,Re,W)},e.addHook=function(Te,L){typeof L=="function"&&ui(X,Te)&&hl(X[Te],L)},e.removeHook=function(Te,L){if(ui(X,Te)){if(L!==void 0){const W=uR(X[Te],L);return W===-1?void 0:fR(X[Te],W,1)[0]}return r0(X[Te])}},e.removeHooks=function(Te){ui(X,Te)&&(X[Te]=[])},e.removeAllHooks=function(){X=_0()},e}var zR=vS();function kd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var cs=kd();function SS(s){cs=s}var ts={exec:()=>null};function to(s){let e=[];return i=>{let r=Math.max(0,Math.min(3,i-1)),l=e[r];return l||(l=s(r),e[r]=l),l}}function gt(s,e=""){let i=typeof s=="string"?s:s.source,r={replace:(l,c)=>{let d=typeof c=="string"?c:c.source;return d=d.replace(kn.caret,"$1"),i=i.replace(l,d),r},getRegex:()=>new RegExp(i,e)};return r}var IR=((s="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+s)}catch{return!1}})(),kn={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:s=>new RegExp(`^( {0,3}${s})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:to(s=>new RegExp(`^ {0,${s}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:to(s=>new RegExp(`^ {0,${s}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:to(s=>new RegExp(`^ {0,${s}}(?:\`\`\`|~~~)`)),headingBeginRegex:to(s=>new RegExp(`^ {0,${s}}#`)),htmlBeginRegex:to(s=>new RegExp(`^ {0,${s}}(?:</?(?:${Rl})(?: +|$|/?>)|<(?:script|pre|style|textarea|!--))`,"i")),blockquoteBeginRegex:to(s=>new RegExp(`^ {0,${s}}>`))},BR=/^(?:[ \t]*(?:\n|$))+/,FR=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,HR=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Al=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,GR=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Vd=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,xS=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,yS=gt(xS).replace(/bull/g,Vd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),kR=gt(xS).replace(/bull/g,Vd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Xd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,VR=/^[^\n]+/,Wd=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,XR=gt(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Wd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),WR=gt(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Vd).getRegex(),Rl="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",qd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,qR=gt("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",qd).replace("tag",Rl).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),ES=s=>gt(Xd).replace("hr",Al).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",s).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rl).getRegex(),YR=ES(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),jR=ES(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),ZR=gt(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",jR).getRegex(),Yd={blockquote:ZR,code:FR,def:XR,fences:HR,heading:GR,hr:Al,html:qR,lheading:yS,list:WR,newline:BR,paragraph:YR,table:ts,text:VR},v0=gt("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Al).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rl).getRegex(),KR={...Yd,lheading:kR,table:v0,paragraph:gt(Xd).replace("hr",Al).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",v0).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Rl).getRegex()},QR={...Yd,html:gt(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",qd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ts,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:gt(Xd).replace("hr",Al).replace("heading",` *#{1,6} *[^
]`).replace("lheading",yS).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},JR=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,$R=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,MS=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,ew=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ha=/[\p{P}\p{S}]/u,go=/[\s\p{P}\p{S}]/u,wl=/[^\s\p{P}\p{S}]/u,tw=gt(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,go).getRegex(),nw=/[\p{Pi}\p{Ps}"']/u,TS=/(?!~)[\p{P}\p{S}]/u,iw=/(?!~)[\s\p{P}\p{S}]/u,aw=/(?:[^\s\p{P}\p{S}]|~)/u,rw=gt(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",IR?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),bS=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,sw=gt(bS,"u").replace(/punct/g,Ha).getRegex(),ow=gt(bS,"u").replace(/punct/g,TS).getRegex(),lw=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,cw=gt(lw,"u").replace(/openQuote/g,nw).replace(/punct/g,Ha).getRegex(),AS="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",uw=gt(AS,"gu").replace(/notPunctSpace/g,wl).replace(/punctSpace/g,go).replace(/punct/g,Ha).getRegex(),fw=gt(AS,"gu").replace(/notPunctSpace/g,aw).replace(/punctSpace/g,iw).replace(/punct/g,TS).getRegex(),hw="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",dw=gt(hw,"gu").replace(/notPunctSpace/g,wl).replace(/punctSpace/g,go).replace(/punct/g,Ha).getRegex(),pw=gt("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,wl).replace(/punctSpace/g,go).replace(/punct/g,Ha).getRegex(),mw="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",gw=gt(mw,"gu").replace(/notPunctSpace/g,wl).replace(/punctSpace/g,go).replace(/punct/g,Ha).getRegex(),_w=gt(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Ha).getRegex(),vw="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",Sw=gt(vw,"gu").replace(/notPunctSpace/g,wl).replace(/punctSpace/g,go).replace(/punct/g,Ha).getRegex(),xw=gt(/\\(punct)/,"gu").replace(/punct/g,Ha).getRegex(),yw=gt(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Ew=gt(qd).replace("(?:-->|$)","-->").getRegex(),Mw=gt("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Ew).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),RS=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,Su=gt(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",RS).getRegex(),Tw=gt(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label",Su).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),bw=gt(/^!?\[(label)\]\[(ref)\]/).replace("label",Su).replace("ref",Wd).getRegex(),Aw=gt(/^!?\[(ref)\](?:\[\])?/).replace("ref",Wd).getRegex(),S0=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,Rw=gt(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",RS).getRegex(),ww=gt("reflink|nolink(?!\\()","g").replace("reflink",gt(/^!?\[(label)\]\[(ref)\]/).replace("label",Rw).replace("ref",S0).getRegex()).replace("nolink",gt(/^!?\[(ref)\](?:\[\])?/).replace("ref",S0).getRegex()).getRegex(),x0=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Cw=/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,Lw=gt(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,Cw).getRegex(),jd={_backpedal:ts,anyPunctuation:xw,autolink:yw,blockSkip:rw,br:MS,code:$R,del:ts,delLDelim:ts,delRDelim:ts,emStrongLDelim:sw,emStrongRDelimAst:uw,emStrongRDelimUnd:pw,escape:JR,link:Tw,nolink:Aw,punctuation:tw,reflink:bw,reflinkSearch:ww,tag:Mw,text:ew,url:ts},Dw={...jd,emStrongLDelim:cw,emStrongRDelimAst:dw,emStrongRDelimUnd:gw,link:gt(/^!?\[(label)\]\((.*?)\)/).replace("label",Su).getRegex(),reflink:gt(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Su).getRegex()},Nd={...jd,emStrongRDelimAst:fw,emStrongLDelim:ow,delLDelim:_w,delRDelim:Sw,url:gt(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol",Lw).replace("protocol",x0).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:gt(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol",x0).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},Uw={...Nd,br:gt(MS).replace("{2,}","*").getRegex(),text:gt(Nd.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},cu={normal:Yd,gfm:KR,pedantic:QR},ml={normal:jd,gfm:Nd,breaks:Uw,pedantic:Dw},Nw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},y0=s=>Nw[s];function Mi(s,e){if(e){if(kn.escapeTest.test(s))return s.replace(kn.escapeReplace,y0)}else if(kn.escapeTestNoEncode.test(s))return s.replace(kn.escapeReplaceNoEncode,y0);return s}function Ow(s){return s.replace(kn.numericCharacterReference,(e,i,r)=>{let l=i===void 0?Number.parseInt(r,16):Number.parseInt(i,10);return l===0||l>1114111||l>=55296&&l<=57343?"�":String.fromCodePoint(l)})}function E0(s){try{s=encodeURI(s).replace(kn.percentDecode,"%")}catch{return null}return s}function M0(s,e){let i=s.replace(kn.findPipe,(c,d,f)=>{let m=!1,p=d;for(;--p>=0&&f[p]==="\\";)m=!m;return m?"|":" |"}),r=i.split(kn.splitPipe),l=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;l<r.length;l++)r[l]=r[l].trim().replace(kn.slashPipe,"|");return r}function vr(s,e,i){let r=s.length;if(r===0)return"";let l=0;for(;l<r&&s.charAt(r-l-1)===e;)l++;return s.slice(0,r-l)}function T0(s){let e=s.split(`
`),i=e.length-1;for(;i>=0&&kn.blankLine.test(e[i]);)i--;return e.length-i<=2?s:e.slice(0,i+1).join(`
`)}function xu(s){return s.trim().toLowerCase().toUpperCase().toLowerCase()}function b0(s,e){if(s.indexOf(e[0])===-1&&s.indexOf(e[1])===-1)return-1;let i=0;for(let r=0;r<s.length;r++)if(s[r]==="\\")r++;else if(s[r]===e[0])i++;else if(s[r]===e[1]&&(i--,i<0))return r;return i>0?-2:-1}function A0(s,e=0){let i=e,r="";for(let l of s)if(l==="	"){let c=4-i%4;r+=" ".repeat(c),i+=c}else r+=l,i++;return r}function R0(s,e,i,r,l){let c=e.href,d=e.title||null,f=s[1].replace(l.other.outputLinkReplace,"$1"),m=s[0].charAt(0)==="!";r.state.inLink=!0;let p=r.state.linkEmitted,g=r.state.inRawBlock;r.state.linkEmitted=!1;let _=r.inlineTokens(f),x=r.state.linkEmitted;if(r.state.linkEmitted=p,r.state.inLink=!1,!m){if(x){r.state.inRawBlock=g;return}r.state.linkEmitted=!0}return{type:m?"image":"link",raw:i,href:c,title:d,text:f,tokens:_}}function Pw(s,e,i){let r=s.match(i.other.indentCodeCompensation);if(r===null)return e;let l=r[1];return e.split(`
`).map(c=>{let d=c.match(i.other.beginningSpace);if(d===null)return c;let[f]=d;return c.slice(Math.min(f.length,l.length))}).join(`
`)}function w0(s,e,i,r){if(!e.includes("<"))return!1;for(let l=0;l<e.length;l++){if(e[l]==="\\"){l++;continue}if(e[l]==="`"){let f=r.inline.code.exec(e.slice(l));if(f){l+=f[0].length-1;continue}}if(e[l]!=="<")continue;let c=s.slice(i+l),d=r.inline.tag.exec(c)||r.inline.autolink.exec(c);if(d){if(d[0].length>e.length-l)return!0;l+=d[0].length-1}}return!1}var yu=class{options;rules;lexer;constructor(s){this.options=s||cs}space(s){let e=this.rules.block.newline.exec(s);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(s){let e=this.rules.block.code.exec(s);if(e){let i=this.options.pedantic?e[0]:T0(e[0]),r=i.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:i,codeBlockStyle:"indented",text:r}}}fences(s){let e=this.rules.block.fences.exec(s);if(e){let i=e[0],r=Pw(i,e[3]||"",this.rules);return{type:"code",raw:i,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(s){let e=this.rules.block.heading.exec(s);if(e){let i=e[2].trim();if(this.rules.other.endingHash.test(i)){let r=vr(i,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceTabChar.test(r))&&(i=r.trim())}return{type:"heading",raw:vr(e[0],`
`),depth:e[1].length,text:i,tokens:this.lexer.inline(i)}}}hr(s){let e=this.rules.block.hr.exec(s);if(e)return{type:"hr",raw:vr(e[0],`
`)}}blockquote(s){let e=this.rules.block.blockquote.exec(s);if(e){let i=vr(e[0],`
`).split(`
`),r="",l="",c=[];for(;i.length>0;){let d=!1,f=[],m;for(m=0;m<i.length;m++)if(this.rules.other.blockquoteStart.test(i[m]))f.push(i[m]),d=!0;else if(!d)f.push(i[m]);else break;i=i.slice(m);let p=f.join(`
`),g=p.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${p}`:p,l=l?`${l}
${g}`:g;let _=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(g,c,!0),this.lexer.state.top=_,i.length===0)break;let x=c.at(-1);if(x?.type==="code")break;if(x?.type==="blockquote"){let E=x,M=i.join(`
`),b=E.raw+`
`+M.replace(this.rules.other.blockquoteSetextReplace2,""),y=this.blockquote(b);c[c.length-1]=y;let v=b.substring(y.raw.length).replace(/^\n/,""),O=v?v.split(`
`).length:0,w=O?i.slice(0,-O):i;w.length>0&&(r=`${r}
${w.join(`
`)}`),l=l.substring(0,l.length-E.text.length)+y.text;break}else if(x?.type==="list"){let E=x,M=E.raw+`
`+i.join(`
`),b=this.list(M);c[c.length-1]=b,r=r.substring(0,r.length-x.raw.length)+b.raw,l=l.substring(0,l.length-E.raw.length)+b.raw,i=M.substring(c.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:c,text:l}}}list(s){let e=this.rules.block.list.exec(s);if(e){let i=e[1].trim(),r=i.length>1,l={type:"list",raw:"",ordered:r,start:r?+i.slice(0,-1):"",loose:!1,items:[]};i=r?`\\d{1,9}\\${i.slice(-1)}`:`\\${i}`,this.options.pedantic&&(i=r?i:"[*+-]");let c=this.rules.other.listItemRegex(i),d=!1;for(;s;){let m=!1,p="",g="";if(!(e=c.exec(s))||this.rules.block.hr.test(s))break;p=e[0],s=s.substring(p.length);let _=e[2].split(`
`,1)[0],x=e[1].length,E=this.options.pedantic?A0(_,x):_.replace(this.rules.other.leadingSpaceTab,v=>A0(v,x)),M=s.split(`
`,1)[0],b=!E.trim(),y=0;if(this.options.pedantic?(y=2,g=E.trimStart()):b?y=x+1:(y=E.search(this.rules.other.nonSpaceChar),y=y>4?1:y,g=E.slice(y),y+=x),b&&this.rules.other.blankLine.test(M)&&(p+=M+`
`,s=s.substring(M.length+1),m=!0),!m){let v=this.rules.other.nextBulletRegex(y),O=this.rules.other.hrRegex(y),w=this.rules.other.fencesBeginRegex(y),B=this.rules.other.headingBeginRegex(y),q=this.rules.other.htmlBeginRegex(y),F=this.rules.other.blockquoteBeginRegex(y);for(;s;){let P=s.split(`
`,1)[0],Q;if(M=P,this.options.pedantic?(M=M.replace(this.rules.other.listReplaceNesting,"  "),Q=M):Q=M.replace(this.rules.other.leadingSpaceTab,A=>A.replace(this.rules.other.tabCharGlobal,"    ")),w.test(M)||B.test(M)||q.test(M)||F.test(M)||v.test(M)||O.test(M))break;if(Q.search(this.rules.other.nonSpaceChar)>=y||!M.trim())g+=`
`+Q.slice(y);else{if(b||E.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||w.test(E)||B.test(E)||O.test(E))break;g+=`
`+M}b=!M.trim(),p+=P+`
`,s=s.substring(P.length+1),E=Q.slice(y)}}l.loose||(d?l.loose=!0:this.rules.other.doubleBlankLine.test(p)&&(d=!0)),l.items.push({type:"list_item",raw:p,task:!!this.options.gfm&&this.rules.other.listIsTask.test(g),loose:!1,text:g,tokens:[]}),l.raw+=p}let f=l.items.at(-1);if(f)f.raw=f.raw.trimEnd(),f.text=f.text.trimEnd();else return;l.raw=l.raw.trimEnd();for(let m of l.items)if(this.lexer.state.top=!1,m.tokens=this.lexer.blockTokens(m.text,[]),!l.loose){let p=m.tokens.filter(_=>_.type==="space"),g=p.length>0&&p.some(_=>this.rules.other.anyLine.test(_.raw));l.loose=g}for(let m of l.items){let p=m.tokens[0];if(m.task&&(p?.type==="text"||p?.type==="paragraph")){m.text=m.text.replace(this.rules.other.listReplaceTask,""),p.raw=p.raw.replace(this.rules.other.listReplaceTask,""),p.text=p.text.replace(this.rules.other.listReplaceTask,"");for(let _=this.lexer.inlineQueue.length-1;_>=0;_--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[_].src)){this.lexer.inlineQueue[_].src=this.lexer.inlineQueue[_].src.replace(this.rules.other.listReplaceTask,"");break}let g=this.rules.other.listTaskCheckbox.exec(m.raw);if(g){let _={type:"checkbox",raw:g[0]+" ",checked:g[0]!=="[ ]"};m.checked=_.checked,l.loose?m.tokens[0]&&["paragraph","text"].includes(m.tokens[0].type)&&"tokens"in m.tokens[0]&&m.tokens[0].tokens?(m.tokens[0].raw=_.raw+m.tokens[0].raw,m.tokens[0].text=_.raw+m.tokens[0].text,m.tokens[0].tokens.unshift(_)):m.tokens.unshift({type:"paragraph",raw:_.raw,text:_.raw,tokens:[_]}):m.tokens.unshift(_)}}else m.task&&(m.task=!1)}if(l.loose)for(let m of l.items){m.loose=!0;for(let p of m.tokens)p.type==="text"&&(p.type="paragraph")}return l}}html(s){let e=this.rules.block.html.exec(s);if(e){let i=T0(e[0]);return{type:"html",block:!0,raw:i,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:i}}}def(s){let e=this.rules.block.def.exec(s);if(e){if(!this.rules.other.startAngleBracket.test(e[2])&&b0(e[2],"()")!==-1)return;let i=xu(e[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",l=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:i,raw:vr(e[0],`
`),href:r,title:l}}}table(s){let e=this.rules.block.table.exec(s);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let i=M0(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),l=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],c={type:"table",raw:vr(e[0],`
`),header:[],align:[],rows:[]};if(i.length===r.length){for(let d of r)this.rules.other.tableAlignRight.test(d)?c.align.push("right"):this.rules.other.tableAlignCenter.test(d)?c.align.push("center"):this.rules.other.tableAlignLeft.test(d)?c.align.push("left"):c.align.push(null);for(let d=0;d<i.length;d++)c.header.push({text:i[d],tokens:this.lexer.inline(i[d]),header:!0,align:c.align[d]});for(let d of l)c.rows.push(M0(d,c.header.length).map((f,m)=>({text:f,tokens:this.lexer.inline(f),header:!1,align:c.align[m]})));return c}}lheading(s){let e=this.rules.block.lheading.exec(s);if(e){let i=e[1].trim();return{type:"heading",raw:vr(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:i,tokens:this.lexer.inline(i)}}}paragraph(s){let e=this.rules.block.paragraph.exec(s);if(e){let i=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:i,tokens:this.lexer.inline(i)}}}text(s){let e=this.rules.block.text.exec(s);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(s){let e=this.rules.inline.escape.exec(s);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(s){let e=this.rules.inline.tag.exec(s);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(s){if(this.lexer.state.linkParenPossible===!1)return;let e=this.rules.inline.link.exec(s);if(e){let i=e[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&w0(s,e[1],i,this.rules))return;let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let d=vr(r.slice(0,-1),"\\");if((r.length-d.length)%2===0)return}else{let d=b0(e[2],"()");if(d===-2)return;if(d>-1){let f=(e[0].indexOf("!")===0?5:4)+e[1].length+d;e[2]=e[2].substring(0,d),e[0]=e[0].substring(0,f).trim(),e[3]=""}}let l=e[2],c="";if(this.options.pedantic){let d=this.rules.other.pedanticHrefTitle.exec(l);d&&(l=d[1],c=d[3])}else c=e[3]?e[3].slice(1,-1):"";return l=l.trim(),this.rules.other.startAngleBracket.test(l)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?l=l.slice(1):l=l.slice(1,-1)),R0(e,{href:l&&l.replace(this.rules.inline.anyPunctuation,"$1"),title:c&&c.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(s,e){let i;if((i=this.rules.inline.reflink.exec(s))||(i=this.rules.inline.nolink.exec(s))){let r=i[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&w0(s,i[1],r,this.rules))return;let l=(i[2]||i[1]).replace(this.rules.other.multipleSpaceGlobal," "),c=e[xu(l)];if(!c){let d=i[0].charAt(0);return{type:"text",raw:d,text:d}}return R0(i,c,i[0],this.lexer,this.rules)}}emStrong(s,e,i=""){let r=this.rules.inline.emStrongLDelim.exec(s);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&i.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!i||this.rules.inline.punctuation.exec(i))){let l=[...r[0]].length-1,c,d,f=l,m=0,p=r[0][0],g=i===p,_=p==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(_.lastIndex=0,e=e.slice(-1*s.length+l);(r=_.exec(e))!==null;){if(c=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!c)continue;if(d=[...c].length,r[3]||r[4]){f+=d;continue}else if(r[5]||r[6]){if(l%3&&!((l+d)%3)){m+=d;continue}if(g)break}if(f-=d,f>0)continue;d=Math.min(d,d+f+m);let x=[...r[0]][0].length,E=s.slice(0,l+r.index+x+d);if(Math.min(l,d)%2){let b=E.slice(1,-1);return{type:"em",raw:E,text:b,tokens:this.lexer.inlineTokens(b)}}let M=E.slice(2,-2);return{type:"strong",raw:E,text:M,tokens:this.lexer.inlineTokens(M)}}}}codespan(s){let e=this.rules.inline.code.exec(s);if(e){let i=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(i),l=this.rules.other.startingSpaceChar.test(i)&&this.rules.other.endingSpaceChar.test(i);return r&&l&&(i=i.substring(1,i.length-1)),{type:"codespan",raw:e[0],text:i}}}br(s){let e=this.rules.inline.br.exec(s);if(e)return{type:"br",raw:e[0]}}del(s,e,i=""){let r=this.rules.inline.delLDelim.exec(s);if(r&&(!r[1]||!i||this.rules.inline.punctuation.exec(i))){let l=[...r[0]].length-1,c,d,f=l,m=this.rules.inline.delRDelim;for(m.lastIndex=0,e=e.slice(-1*s.length+l);(r=m.exec(e))!==null;){if(c=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!c||(d=[...c].length,d!==l))continue;if(r[3]||r[4]){f+=d;continue}if(f-=d,f>0)continue;d=Math.min(d,d+f);let p=[...r[0]][0].length,g=s.slice(0,l+r.index+p+d),_=g.slice(l,-l);return{type:"del",raw:g,text:_,tokens:this.lexer.inlineTokens(_)}}}}autolink(s){let e=this.rules.inline.autolink.exec(s);if(e){let i,r;return e[2]==="@"?(i=e[1],r="mailto:"+i):(i=e[1],r=i),{type:"link",raw:e[0],text:i,href:r,autolink:!0,tokens:[{type:"text",raw:i,text:i}]}}}url(s){let e;if(e=this.rules.inline.url.exec(s)){let i,r;if(e[2]==="@")i=e[0],r="mailto:"+i;else{let l;do l=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(l!==e[0]);i=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:i,href:r,autolink:!0,tokens:[{type:"text",raw:i,text:i}]}}}inlineText(s){let e=this.rules.inline.text.exec(s);if(e){let i=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:i?e[0]:Ow(e[0]),escaped:i}}}},Ki=class Od{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||cs,this.options.tokenizer=this.options.tokenizer||new yu,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let i={other:kn,block:cu.normal,inline:ml.normal};this.options.pedantic?(i.block=cu.pedantic,i.inline=ml.pedantic):this.options.gfm&&(i.block=cu.gfm,this.options.breaks?i.inline=ml.breaks:i.inline=ml.gfm),this.tokenizer.rules=i}static get rules(){return{block:cu,inline:ml}}static lex(e,i){return new Od(i).lex(e)}static lexInline(e,i){return new Od(i).inlineTokens(e)}lex(e){e=e.replace(kn.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let i=0;i<this.inlineQueue.length;i++){let r=this.inlineQueue[i];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,i=[],r=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(kn.tabCharGlobal,"    ").replace(kn.spaceLine,""));let l=1/0;for(;e;){if(e.length<l)l=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let c;if(this.options.extensions?.block?.some(f=>(c=f.call({lexer:this},e,i))?(e=e.substring(c.raw.length),i.push(c),!0):!1))continue;if(c=this.tokenizer.space(e)){e=e.substring(c.raw.length);let f=i.at(-1);c.raw.length===1&&f!==void 0?f.raw+=`
`:i.push(c);continue}if(c=this.tokenizer.code(e)){e=e.substring(c.raw.length);let f=i.at(-1);f?.type==="paragraph"||f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.text,this.inlineQueue.at(-1).src=f.text):i.push(c);continue}if(c=this.tokenizer.fences(e)){e=e.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.heading(e)){e=e.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.hr(e)){e=e.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.blockquote(e)){e=e.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.list(e)){e=e.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.html(e)){e=e.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.def(e)){e=e.substring(c.raw.length);let f=i.at(-1);f?.type==="paragraph"||f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.raw,this.inlineQueue.at(-1).src=f.text):this.tokens.links[c.tag]||(this.tokens.links[c.tag]={href:c.href,title:c.title},i.push(c));continue}if(c=this.tokenizer.table(e)){e=e.substring(c.raw.length),i.push(c);continue}if(c=this.tokenizer.lheading(e)){e=e.substring(c.raw.length),i.push(c);continue}let d=e;if(this.options.extensions?.startBlock){let f=1/0,m=e.slice(1),p;this.options.extensions.startBlock.forEach(g=>{p=g.call({lexer:this},m),typeof p=="number"&&p>=0&&(f=Math.min(f,p))}),f<1/0&&f>=0&&(d=e.substring(0,f+1))}if(this.state.top&&(c=this.tokenizer.paragraph(d))){let f=i.at(-1);r&&f?.type==="paragraph"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):i.push(c),r=d.length!==e.length,e=e.substring(c.raw.length);continue}if(c=this.tokenizer.text(e)){e=e.substring(c.raw.length);let f=i.at(-1);f?.type==="text"?(f.raw+=(f.raw.endsWith(`
`)?"":`
`)+c.raw,f.text+=`
`+c.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=f.text):i.push(c);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,i}inline(e,i=[]){return this.inlineQueue.push({src:e,tokens:i}),i}linkInText(e){if(!e.includes("["))return!1;let i=this.tokenizer.rules.inline.link;for(let r of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(i.test(r[0])&&e.charAt(r.index-1)!=="!")return!0;for(let r of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let l=r[0],c=l.lastIndexOf("[");if(!(l.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,xu(l.slice(c+1,-1))))&&!(c>1&&this.linkInText(l.slice(1,c-1))))return!0}return!1}inlineTokens(e,i=[]){this.tokenizer.lexer=this;let r=this.state.linkParenPossible;this.state.linkParenPossible=r&&e.includes(")");try{return this.#e(e,i)}finally{this.state.linkParenPossible=r}}#e(e,i){let r=e;if(this.tokens.links&&e.includes("[")){let f=this.tokenizer.rules.inline.reflinkSearch,m=p=>{let g=p.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,xu(p.slice(g+1,-1))))return p;if(g>1&&p.charAt(0)!=="!"){let _=p.slice(1,g-1);if(this.linkInText(_))return"["+_.replace(f,m)+"]["+"a".repeat(p.length-g-2)+"]"}return"["+"a".repeat(p.length-2)+"]"};r=r.replace(f,m)}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,f=>"+".repeat(f.length)),r=r.replace(this.tokenizer.rules.inline.blockSkip,(f,m,p)=>{let g=p?p.length:0;return f.slice(0,g)+"["+"a".repeat(f.length-g-2)+"]"}),r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let l=!1,c="",d=1/0;for(;e;){if(e.length<d)d=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}l||(c=""),l=!1;let f;if(this.options.extensions?.inline?.some(p=>(f=p.call({lexer:this},e,i))?(e=e.substring(f.raw.length),i.push(f),!0):!1))continue;if(f=this.tokenizer.escape(e)){e=e.substring(f.raw.length),i.push(f);continue}if(f=this.tokenizer.tag(e)){e=e.substring(f.raw.length),i.push(f);continue}if(f=this.tokenizer.link(e)){e=e.substring(f.raw.length),i.push(f);continue}if(f=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(f.raw.length);let p=i.at(-1);f.type==="text"&&p?.type==="text"?(p.raw+=f.raw,p.text+=f.text):i.push(f);continue}if(f=this.tokenizer.emStrong(e,r,c)){e=e.substring(f.raw.length),i.push(f);continue}if(f=this.tokenizer.codespan(e)){e=e.substring(f.raw.length),i.push(f);continue}if(f=this.tokenizer.br(e)){e=e.substring(f.raw.length),i.push(f);continue}if(f=this.tokenizer.del(e,r,c)){e=e.substring(f.raw.length),i.push(f);continue}if(f=this.tokenizer.autolink(e)){e=e.substring(f.raw.length),i.push(f);continue}if(!this.state.inLink&&(f=this.tokenizer.url(e))){e=e.substring(f.raw.length),i.push(f);continue}let m=e;if(this.options.extensions?.startInline){let p=1/0,g=e.slice(1),_;this.options.extensions.startInline.forEach(x=>{_=x.call({lexer:this},g),typeof _=="number"&&_>=0&&(p=Math.min(p,_))}),p<1/0&&p>=0&&(m=e.substring(0,p+1))}if(f=this.tokenizer.inlineText(m)){e=e.substring(f.raw.length),f.raw.slice(-1)!=="_"&&(c=f.raw.slice(-1)),l=!0;let p=i.at(-1);p?.type==="text"?(p.raw+=f.raw,p.text+=f.text):i.push(f);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return i}infiniteLoopError(e){let i="Infinite loop on byte: "+e;if(this.options.silent)console.error(i);else throw new Error(i)}},Eu=class{options;parser;constructor(s){this.options=s||cs}space(s){return""}code({text:s,lang:e,escaped:i}){let r=(e||"").match(kn.notSpaceStart)?.[0],l=s?s.replace(kn.endingNewline,"")+`
`:"";return r?'<pre><code class="language-'+Mi(r)+'">'+(i?l:Mi(l,!0))+`</code></pre>
`:"<pre><code>"+(i?l:Mi(l,!0))+`</code></pre>
`}blockquote({tokens:s}){return`<blockquote>
${this.parser.parse(s)}</blockquote>
`}html({text:s}){return s}def(s){return""}heading({tokens:s,depth:e}){return`<h${e}>${this.parser.parseInline(s)}</h${e}>
`}hr(s){return`<hr>
`}list(s){let e=s.ordered,i=s.start,r="";for(let d=0;d<s.items.length;d++){let f=s.items[d];r+=this.listitem(f)}let l=e?"ol":"ul",c=e&&i!==1?' start="'+i+'"':"";return"<"+l+c+`>
`+r+"</"+l+`>
`}listitem(s){return`<li>${this.parser.parse(s.tokens)}</li>
`}checkbox({checked:s}){return"<input "+(s?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:s}){return`<p>${this.parser.parseInline(s)}</p>
`}table(s){let e="",i="";for(let l=0;l<s.header.length;l++)i+=this.tablecell(s.header[l]);e+=this.tablerow({text:i});let r="";for(let l=0;l<s.rows.length;l++){let c=s.rows[l];i="";for(let d=0;d<c.length;d++)i+=this.tablecell(c[d]);r+=this.tablerow({text:i})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:s}){return`<tr>
${s}</tr>
`}tablecell(s){let e=this.parser.parseInline(s.tokens),i=s.header?"th":"td";return(s.align?`<${i} align="${s.align}">`:`<${i}>`)+e+`</${i}>
`}strong({tokens:s}){return`<strong>${this.parser.parseInline(s)}</strong>`}em({tokens:s}){return`<em>${this.parser.parseInline(s)}</em>`}codespan({text:s}){return`<code>${Mi(s,!0)}</code>`}br(s){return"<br>"}del({tokens:s}){return`<del>${this.parser.parseInline(s)}</del>`}link({href:s,title:e,text:i,tokens:r,autolink:l}){let c=l?Mi(i,!0):this.parser.parseInline(r),d=E0(s);if(d===null)return c;s=Mi(d,l);let f='<a href="'+s+'"';return e&&(f+=' title="'+Mi(e)+'"'),f+=">"+c+"</a>",f}image({href:s,title:e,text:i,tokens:r}){r&&(i=this.parser.parseInline(r,this.parser.textRenderer));let l=E0(s);if(l===null)return Mi(i);s=l;let c=`<img src="${Mi(s)}" alt="${Mi(i)}"`;return e&&(c+=` title="${Mi(e)}"`),c+=">",c}text(s){return"tokens"in s&&s.tokens?this.parser.parseInline(s.tokens):"escaped"in s&&s.escaped?s.text:Mi(s.text)}},Zd=class{strong({text:s}){return s}em({text:s}){return s}codespan({text:s}){return s}del({text:s}){return s}html({text:s}){return s}text({text:s}){return s}link({text:s}){return""+s}image({text:s}){return""+s}br(){return""}checkbox({raw:s}){return s}},Qi=class Pd{options;renderer;textRenderer;constructor(e){this.options=e||cs,this.options.renderer=this.options.renderer||new Eu,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Zd}static parse(e,i){return new Pd(i).parse(e)}static parseInline(e,i){return new Pd(i).parseInline(e)}parse(e){this.renderer.parser=this;let i="";for(let r=0;r<e.length;r++){let l=e[r];if(this.options.extensions?.renderers?.[l.type]){let d=l,f=this.options.extensions.renderers[d.type].call({parser:this},d);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(d.type)){i+=f||"";continue}}let c=l;switch(c.type){case"space":{i+=this.renderer.space(c);break}case"hr":{i+=this.renderer.hr(c);break}case"heading":{i+=this.renderer.heading(c);break}case"code":{i+=this.renderer.code(c);break}case"table":{i+=this.renderer.table(c);break}case"blockquote":{i+=this.renderer.blockquote(c);break}case"list":{i+=this.renderer.list(c);break}case"checkbox":{i+=this.renderer.checkbox(c);break}case"html":{i+=this.renderer.html(c);break}case"def":{i+=this.renderer.def(c);break}case"paragraph":{i+=this.renderer.paragraph(c);break}case"text":{i+=this.renderer.text(c);break}default:{let d='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(d),"";throw new Error(d)}}}return i}parseInline(e,i=this.renderer){this.renderer.parser=this;let r="";for(let l=0;l<e.length;l++){let c=e[l];if(this.options.extensions?.renderers?.[c.type]){let f=this.options.extensions.renderers[c.type].call({parser:this},c);if(f!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(c.type)){r+=f||"";continue}}let d=c;switch(d.type){case"escape":{r+=i.text(d);break}case"html":{r+=i.html(d);break}case"link":{r+=i.link(d);break}case"image":{r+=i.image(d);break}case"checkbox":{r+=i.checkbox(d);break}case"strong":{r+=i.strong(d);break}case"em":{r+=i.em(d);break}case"codespan":{r+=i.codespan(d);break}case"br":{r+=i.br(d);break}case"del":{r+=i.del(d);break}case"text":{r+=i.text(d);break}default:{let f='Token with "'+d.type+'" type was not found.';if(this.options.silent)return console.error(f),"";throw new Error(f)}}}return r}},_l=class{options;block;constructor(s){this.options=s||cs}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(s){return s}postprocess(s){return s}processAllTokens(s){return s}emStrongMask(s){return s}provideLexer(s=this.block){return s?Ki.lex:Ki.lexInline}provideParser(s=this.block){return s?Qi.parse:Qi.parseInline}},zw=class{defaults=kd();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Qi;Renderer=Eu;TextRenderer=Zd;Lexer=Ki;Tokenizer=yu;Hooks=_l;constructor(...s){this.use(...s)}walkTokens(s,e){let i=[];for(let r of s)switch(i=i.concat(e.call(this,r)),r.type){case"table":{let l=r;for(let c of l.header)i=i.concat(this.walkTokens(c.tokens,e));for(let c of l.rows)for(let d of c)i=i.concat(this.walkTokens(d.tokens,e));break}case"list":{let l=r;i=i.concat(this.walkTokens(l.items,e));break}default:{let l=r;this.defaults.extensions?.childTokens?.[l.type]?this.defaults.extensions.childTokens[l.type].forEach(c=>{let d=l[c].flat(1/0);i=i.concat(this.walkTokens(d,e))}):l.tokens&&(i=i.concat(this.walkTokens(l.tokens,e)))}}return i}use(...s){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return s.forEach(i=>{let r={...i};if(r.async=this.defaults.async||r.async||!1,i.extensions&&(i.extensions.forEach(l=>{if(!l.name)throw new Error("extension name required");if("renderer"in l){let c=e.renderers[l.name];c?e.renderers[l.name]=function(...d){let f=l.renderer.apply(this,d);return f===!1&&(f=c.apply(this,d)),f}:e.renderers[l.name]=l.renderer}if("tokenizer"in l){if(!l.level||l.level!=="block"&&l.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let c=e[l.level];c?c.unshift(l.tokenizer):e[l.level]=[l.tokenizer],l.start&&(l.level==="block"?e.startBlock?e.startBlock.push(l.start):e.startBlock=[l.start]:l.level==="inline"&&(e.startInline?e.startInline.push(l.start):e.startInline=[l.start]))}"childTokens"in l&&l.childTokens&&(e.childTokens[l.name]=l.childTokens)}),r.extensions=e),i.renderer){let l=this.defaults.renderer||new Eu(this.defaults);for(let c in i.renderer){if(!(c in l))throw new Error(`renderer '${c}' does not exist`);if(["options","parser"].includes(c))continue;let d=c,f=i.renderer[d],m=l[d];l[d]=(...p)=>{let g=f.apply(l,p);return g===!1&&(g=m.apply(l,p)),g||""}}r.renderer=l}if(i.tokenizer){let l=this.defaults.tokenizer||new yu(this.defaults);for(let c in i.tokenizer){if(!(c in l))throw new Error(`tokenizer '${c}' does not exist`);if(["options","rules","lexer"].includes(c))continue;let d=c,f=i.tokenizer[d],m=l[d];l[d]=(...p)=>{let g=f.apply(l,p);return g===!1&&(g=m.apply(l,p)),g}}r.tokenizer=l}if(i.hooks){let l=this.defaults.hooks||new _l;for(let c in i.hooks){if(!(c in l))throw new Error(`hook '${c}' does not exist`);if(["options","block"].includes(c))continue;let d=c,f=i.hooks[d],m=l[d];_l.passThroughHooks.has(c)?l[d]=p=>{if(this.defaults.async&&_l.passThroughHooksRespectAsync.has(c))return(async()=>{let _=await f.call(l,p);return m.call(l,_)})();let g=f.call(l,p);return m.call(l,g)}:l[d]=(...p)=>{if(this.defaults.async)return(async()=>{let _=await f.apply(l,p);return _===!1&&(_=await m.apply(l,p)),_})();let g=f.apply(l,p);return g===!1&&(g=m.apply(l,p)),g}}r.hooks=l}if(i.walkTokens){let l=this.defaults.walkTokens,c=i.walkTokens;r.walkTokens=function(d){let f=[];return f.push(c.call(this,d)),l&&(f=f.concat(l.call(this,d))),f}}this.defaults={...this.defaults,...r}}),this}setOptions(s){return this.defaults={...this.defaults,...s},this}lexer(s,e){return Ki.lex(s,e??this.defaults)}parser(s,e){return Qi.parse(s,e??this.defaults)}parseMarkdown(s){return(e,i)=>{let r={...i},l={...this.defaults,...r},c=this.onError(!!l.silent,!!l.async);if(this.defaults.async===!0&&r.async===!1)return c(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(l.hooks&&(l.hooks.options=l,l.hooks.block=s),l.async)return(async()=>{let d=l.hooks?await l.hooks.preprocess(e):e,f=await(l.hooks?await l.hooks.provideLexer(s):s?Ki.lex:Ki.lexInline)(d,l),m=l.hooks?await l.hooks.processAllTokens(f):f;l.walkTokens&&await Promise.all(this.walkTokens(m,l.walkTokens));let p=await(l.hooks?await l.hooks.provideParser(s):s?Qi.parse:Qi.parseInline)(m,l);return l.hooks?await l.hooks.postprocess(p):p})().catch(c);try{l.hooks&&(e=l.hooks.preprocess(e));let d=(l.hooks?l.hooks.provideLexer(s):s?Ki.lex:Ki.lexInline)(e,l);l.hooks&&(d=l.hooks.processAllTokens(d)),l.walkTokens&&this.walkTokens(d,l.walkTokens);let f=(l.hooks?l.hooks.provideParser(s):s?Qi.parse:Qi.parseInline)(d,l);return l.hooks&&(f=l.hooks.postprocess(f)),f}catch(d){return c(d)}}}onError(s,e){return i=>{if(i.message+=`
Please report this to https://github.com/markedjs/marked.`,s){let r="<p>An error occurred:</p><pre>"+Mi(i.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(i);throw i}}},os=new zw;function Zt(s,e){return os.parse(s,e)}Zt.options=Zt.setOptions=function(s){return os.setOptions(s),Zt.defaults=os.defaults,SS(Zt.defaults),Zt};Zt.getDefaults=kd;Zt.defaults=cs;function Iw(...s){return os.use(...s),Zt.defaults=os.defaults,SS(Zt.defaults),Zt}Zt.use=Iw;Zt.walkTokens=function(s,e){return os.walkTokens(s,e)};Zt.parseInline=os.parseInline;Zt.Parser=Qi;Zt.parser=Qi.parse;Zt.Renderer=Eu;Zt.TextRenderer=Zd;Zt.Lexer=Ki;Zt.lexer=Ki.lex;Zt.Tokenizer=yu;Zt.Hooks=_l;Zt.parse=Zt;Zt.options;Zt.setOptions;Zt.walkTokens;Zt.parseInline;Qi.parse;Ki.lex;function Bw({content:s}){const e=Qe.useMemo(()=>{const i=Zt.parse(s??"",{async:!1,breaks:!0,gfm:!0}),r=zR.sanitize(i,{ALLOWED_TAGS:["p","br","h1","h2","h3","h4","h5","h6","strong","em","b","i","u","s","del","a","img","figure","figcaption","blockquote","ul","ol","li","pre","code","hr","table","thead","tbody","tr","th","td","sup","sub","span","div"],ALLOWED_ATTR:["href","src","alt","title","colspan","rowspan","start"],ALLOW_DATA_ATTR:!1}),l=document.createElement("template");return l.innerHTML=r,l.content.querySelectorAll("a").forEach(c=>{c.target="_blank",c.rel="noopener noreferrer"}),l.content.querySelectorAll("img").forEach(c=>{c.loading="lazy",c.decoding="async"}),l.innerHTML},[s]);return he.jsx("div",{className:"article-body",dangerouslySetInnerHTML:{__html:e}})}function Fw({post:s,opener:e,position:i,onClose:r}){const l=Qe.useRef(null),c=Qe.useRef(null),d=ho[s.category];Qe.useLayoutEffect(()=>{const m=l.current;if(!m)return;const p=document.documentElement,g=document.body,_=document.querySelector(".archive-content"),x={rootOverflow:p.style.overflow,rootGutter:p.style.scrollbarGutter,scrollBehavior:p.style.scrollBehavior,bodyOverflow:g.style.overflow,listOverflow:_?.style.overflowY??""};return p.style.scrollbarGutter="stable",p.style.scrollBehavior="auto",p.style.overflow="hidden",g.style.overflow="hidden",_&&(_.style.overflowY="hidden"),m.showModal(),c.current?.focus({preventScroll:!0}),window.scrollTo({left:i.x,top:i.y,behavior:"instant"}),_&&(_.scrollTop=i.list),()=>{m.close(),p.style.overflow=x.rootOverflow,p.style.scrollbarGutter=x.rootGutter,g.style.overflow=x.bodyOverflow,_&&(_.style.overflowY=x.listOverflow,_.scrollTop=i.list),window.scrollTo({left:i.x,top:i.y,behavior:"instant"}),p.style.scrollBehavior=x.scrollBehavior,e?.isConnected&&e.focus({preventScroll:!0})}},[e,i]);function f(m){if(m.key!=="Tab")return;const p=Array.from(m.currentTarget.querySelectorAll('button:not([disabled]), a[href], [tabindex="0"]')).filter(x=>x.getClientRects().length>0),g=p[0],_=p[p.length-1];!g||!_||(m.shiftKey&&document.activeElement===g?(m.preventDefault(),_.focus()):!m.shiftKey&&document.activeElement===_&&(m.preventDefault(),g.focus()))}return Ld.createPortal(he.jsx("dialog",{ref:l,className:"article-dialog","data-fade-entry":!document.startViewTransition||void 0,"aria-labelledby":"article-reader-title","aria-modal":"true",onCancel:m=>{m.preventDefault(),r()},onClick:m=>{m.target===m.currentTarget&&r()},onKeyDown:f,onWheel:m=>m.stopPropagation(),onTouchStart:m=>m.stopPropagation(),onTouchEnd:m=>m.stopPropagation(),children:he.jsxs("article",{className:"article-reader-card",style:{viewTransitionName:"article-card"},children:[he.jsx("button",{ref:c,className:"article-close",type:"button",onClick:r,"aria-label":"Close article",children:he.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:he.jsx("path",{d:"m6 6 12 12M18 6 6 18"})})}),he.jsx("div",{className:"article-reader-scroll",tabIndex:0,"aria-label":"Article content",children:he.jsxs("div",{className:"article-reader-inner",children:[he.jsxs("div",{className:"entry-meta article-meta",children:[he.jsx("time",{dateTime:s.created_at,children:dS(s.created_at)}),he.jsxs("span",{children:[d.number," ",d.label," / ",pS(s.post_no)]})]}),he.jsx("h2",{id:"article-reader-title",className:"article-title",style:{viewTransitionName:"article-title"},children:s.title}),s.image_url&&he.jsx("img",{className:"article-cover",src:s.image_url,alt:s.title,decoding:"async",style:{viewTransitionName:"article-cover"}}),he.jsx(Bw,{content:s.content})]})})]})}),document.body)}function uu(s,e){for(const[i,r]of[[s.card,"article-card"],[s.title,"article-title"],[s.cover,"article-cover"]])i&&(i.style.viewTransitionName=e?r:"")}function Hw(){const[s,e]=Qe.useState(null),i=Qe.useRef(null),r=Qe.useRef({x:0,y:0,list:0}),l=Qe.useRef(null),c=Qe.useRef(null),d=Qe.useRef(!1),f=Qe.useRef(!1);async function m(_){c.current?.skipTransition();const x=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!document.startViewTransition||x){Ld.flushSync(_);return}document.documentElement.classList.add("article-transition");const E=document.startViewTransition(()=>{Ld.flushSync(_)});c.current=E,E.ready.catch(()=>{}),await E.finished.catch(()=>{}),c.current===E&&(c.current=null,document.documentElement.classList.remove("article-transition"))}function p(_,x){if(d.current||s)return;const E=x.closest("article");if(!E)return;d.current=!0,r.current={x:window.scrollX,y:window.scrollY,list:document.querySelector(".archive-content")?.scrollTop??0},window.scrollTo({left:r.current.x,top:r.current.y,behavior:"instant"}),i.current=x,x.focus({preventScroll:!0});const M={card:E,title:E.querySelector("[data-reader-title]"),cover:E.querySelector("[data-reader-cover]")};l.current=M,uu(M,!0),m(()=>{uu(M,!1),e(_)}).finally(()=>{f.current||(d.current=!1)})}function g(){if(!s||!l.current||f.current)return;const _=l.current;d.current=!0,f.current=!0,m(()=>{uu(_,!0),e(null)}).finally(()=>{uu(_,!1),d.current=!1,f.current=!1,l.current=null})}return{activePost:s,opener:i.current,position:r.current,openArticle:p,closeArticle:g}}const fu=[{value:"all",label:"All entries"},{value:"kiri",label:"01 kiri"},{value:"fragments",label:"02 fragments"},{value:"games",label:"03 games"},{value:"places",label:"04 places"},{value:"others",label:"05 others"}],Sd=5;function C0(s){return new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"2-digit"}).format(s)}function Gw(){const[s,e]=Qe.useState(()=>C0(new Date));return Qe.useEffect(()=>{const i=()=>e(C0(new Date));i();const r=window.setInterval(i,3e4);return()=>window.clearInterval(r)},[]),he.jsx("div",{className:"archive-weather","aria-label":`Local time: ${s}`,children:he.jsx("time",{dateTime:new Date().toISOString(),children:s})})}function wS({post:s}){const e=ho[s.category];return he.jsxs("div",{className:"entry-meta",children:[he.jsx("time",{dateTime:s.created_at,children:dS(s.created_at)}),he.jsxs("span",{children:[e.number," ",e.label," / ",pS(s.post_no)]})]})}function Sl({post:s,children:e,onOpen:i,className:r=""}){return he.jsx("button",{type:"button",className:`archive-entry-trigger ${r}`,onClick:l=>i(s,l.currentTarget),"aria-haspopup":"dialog","aria-label":`Read ${s.title}`,children:e})}function kw({selectedCategory:s,onSelect:e}){return he.jsxs("aside",{className:"archive-sidebar","aria-label":"Archive navigation",children:[he.jsx("a",{className:"archive-brand",href:"#top","aria-label":"Back to Kiri homepage",children:"kiri.pet"}),he.jsx("nav",{className:"archive-category-nav","aria-label":"Archive categories",children:Object.keys(ho).map(i=>{const r=ho[i],l=s===i;return he.jsxs("button",{className:l?"is-active":"",type:"button",onClick:()=>e(i),"aria-pressed":l,children:[he.jsx("span",{className:"nav-marker","aria-hidden":"true"}),he.jsx("span",{className:"nav-number",children:r.number}),he.jsx("span",{children:r.label})]},i)})}),he.jsxs("div",{className:"archive-sidebar-footer",children:[he.jsx(Gw,{}),he.jsxs("div",{className:"archive-socials","aria-label":"Social links",children:[he.jsx("a",{href:"https://github.com","aria-label":"GitHub",children:he.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:he.jsx("path",{d:"M12 2.75a9.25 9.25 0 0 0-2.93 18.03c.46.08.63-.2.63-.45v-1.78c-2.56.56-3.1-1.09-3.1-1.09-.42-1.06-1.02-1.34-1.02-1.34-.84-.57.06-.56.06-.56.92.07 1.41.95 1.41.95.82 1.4 2.15 1 2.68.76.08-.6.32-1 .58-1.23-2.04-.23-4.19-1.02-4.19-4.57 0-1.01.36-1.84.95-2.49-.1-.23-.41-1.17.09-2.45 0 0 .77-.25 2.54.95A8.8 8.8 0 0 1 12 7.12a8.7 8.7 0 0 1 2.31.31c1.76-1.2 2.54-.95 2.54-.95.5 1.28.18 2.22.09 2.45.59.65.95 1.48.95 2.49 0 3.56-2.16 4.33-4.21 4.56.33.29.62.85.62 1.72v2.63c0 .25.17.54.63.45A9.25 9.25 0 0 0 12 2.75Z"})})}),he.jsx("a",{href:"#archive","aria-label":"Photography archive",children:he.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:he.jsx("path",{d:"M8.4 6.25 9.55 4.5h4.9l1.15 1.75h2.65A2.75 2.75 0 0 1 21 9v7.5a2.75 2.75 0 0 1-2.75 2.75H5.75A2.75 2.75 0 0 1 3 16.5V9a2.75 2.75 0 0 1 2.75-2.75H8.4Zm3.6 9.8a3.55 3.55 0 1 0 0-7.1 3.55 3.55 0 0 0 0 7.1Z"})})}),he.jsx("a",{href:"mailto:hello@kiri.pet","aria-label":"Email",children:he.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:he.jsx("path",{d:"M3.75 5h16.5A1.75 1.75 0 0 1 22 6.75v10.5A1.75 1.75 0 0 1 20.25 19H3.75A1.75 1.75 0 0 1 2 17.25V6.75A1.75 1.75 0 0 1 3.75 5Zm.2 2 8.05 5.9L20.05 7H3.95Zm16.05 9.75V9.1l-7.56 5.54a.75.75 0 0 1-.88 0L4 9.1v7.65c0 .14.11.25.25.25h15.5a.25.25 0 0 0 .25-.25Z"})})})]})]})]})}function Vw({value:s,open:e,onOpenChange:i,onSelect:r}){const l=Qe.useRef(null),c=Qe.useRef([]),d=fu.find(m=>m.value===s)??fu[0];Qe.useEffect(()=>{if(!e)return;function m(p){l.current?.contains(p.target)||i(!1)}return document.addEventListener("mousedown",m),()=>document.removeEventListener("mousedown",m)},[e,i]);function f(m){if(!["ArrowDown","ArrowUp","Home","End"].includes(m.key))return;m.preventDefault();const p=c.current.findIndex(x=>x===document.activeElement),g=fu.length-1;let _=p;m.key==="Home"&&(_=0),m.key==="End"&&(_=g),m.key==="ArrowDown"&&(_=p<g?p+1:0),m.key==="ArrowUp"&&(_=p>0?p-1:g),c.current[_]?.focus()}return he.jsxs("div",{className:"archive-filter",ref:l,children:[he.jsxs("button",{className:"archive-filter-trigger",type:"button","aria-haspopup":"menu","aria-expanded":e,onClick:()=>i(!e),children:[he.jsx("span",{children:d.label}),he.jsx("svg",{viewBox:"0 0 12 8","aria-hidden":"true",children:he.jsx("path",{d:"m1 1 5 5 5-5"})})]}),he.jsx("div",{className:`archive-filter-menu${e?" is-open":""}`,role:"menu",onKeyDown:f,children:fu.map((m,p)=>he.jsx("button",{type:"button",role:"menuitemradio","aria-checked":s===m.value,tabIndex:e?0:-1,ref:g=>{c.current[p]=g},onClick:()=>r(m.value),children:m.label},m.value))})]})}function Xw({open:s,selectedCategory:e,onOpenChange:i,onSelect:r}){return he.jsxs(he.Fragment,{children:[he.jsxs("header",{className:"archive-mobile-header",children:[he.jsx("a",{href:"#top",children:"kiri.pet"}),he.jsx("button",{type:"button","aria-label":s?"Close archive navigation":"Open archive navigation","aria-expanded":s,onClick:()=>i(!s),children:s?he.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:he.jsx("path",{d:"M5 5l14 14M19 5 5 19"})}):he.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:he.jsx("path",{d:"M4 7h16M4 12h16M4 17h16"})})})]}),he.jsx("div",{className:`archive-mobile-menu${s?" is-open":""}`,"aria-hidden":!s,onClick:()=>i(!1),children:he.jsxs("div",{className:"archive-mobile-menu-inner",onClick:l=>l.stopPropagation(),children:[he.jsx("span",{className:"mobile-menu-label",children:"Archive index"}),Object.keys(ho).map(l=>{const c=ho[l];return he.jsxs("button",{type:"button",className:e===l?"is-active":"",onClick:()=>r(l),tabIndex:s?0:-1,children:[he.jsx("span",{children:c.number}),c.label]},l)})]})})]})}function Ww({post:s,onOpen:e}){const i=hS(s.content,180);return he.jsxs("article",{className:`featured-entry${s.image_url?"":" has-no-image"}`,children:[s.image_url&&he.jsx(Sl,{post:s,onOpen:e,className:"featured-image-link",children:he.jsx("img",{"data-reader-cover":!0,src:s.image_url,alt:s.title,decoding:"async",fetchPriority:"high"})}),he.jsxs("div",{className:"featured-copy",children:[he.jsx(wS,{post:s}),he.jsx("h2",{"data-reader-title":!0,children:he.jsx(Sl,{post:s,onOpen:e,className:"entry-title-link",children:s.title})}),i&&he.jsx("p",{children:i}),he.jsxs(Sl,{post:s,onOpen:e,className:"read-entry",children:["Read entry ",he.jsx("span",{"aria-hidden":"true",children:"→"})]})]})]})}function qw({post:s,onOpen:e}){const i=hS(s.content);return he.jsx("article",{className:`archive-row${s.image_url?"":" has-no-image"}`,children:he.jsxs("div",{className:"archive-row-link",children:[he.jsxs("div",{className:"archive-row-copy",children:[he.jsx(wS,{post:s}),he.jsx("h3",{"data-reader-title":!0,children:he.jsx(Sl,{post:s,onOpen:e,children:s.title})}),i&&he.jsx("p",{children:i})]}),s.image_url&&he.jsx(Sl,{post:s,onOpen:e,className:"archive-row-image",children:he.jsx("img",{"data-reader-cover":!0,src:s.image_url,alt:s.title,loading:"lazy",decoding:"async"})})]})})}function Yw({currentPage:s,totalPages:e,onPageChange:i}){return e<=1?null:he.jsxs("nav",{className:"archive-pagination","aria-label":"Archive pages",children:[he.jsx("button",{type:"button",onClick:()=>i(s-1),disabled:s===1,"aria-label":"Previous page",children:"←"}),Array.from({length:e},(r,l)=>l+1).map(r=>he.jsx("button",{type:"button",className:r===s?"is-current":"","aria-current":r===s?"page":void 0,onClick:()=>i(r),children:r},r)),he.jsx("button",{type:"button",onClick:()=>i(s+1),disabled:s===e,"aria-label":"Next page",children:"→"})]})}function jw(){const[s,e]=Qe.useState(!1),[i,r]=Qe.useState(0);Qe.useEffect(()=>{let d=0;const f=document.querySelector("#archive"),m=document.querySelector(".archive-content");if(!f||!m)return;const p=f,g=m;function _(){d=0;const E=Math.max(1,g.scrollHeight-g.clientHeight);e(window.scrollY>=p.offsetTop-2),r(Math.min(1,Math.max(0,g.scrollTop/E)))}function x(){d||(d=window.requestAnimationFrame(_))}return _(),g.addEventListener("scroll",x,{passive:!0}),window.addEventListener("scroll",x,{passive:!0}),window.addEventListener("resize",x),()=>{window.cancelAnimationFrame(d),g.removeEventListener("scroll",x),window.removeEventListener("scroll",x),window.removeEventListener("resize",x)}},[]);function l(d){document.querySelector(d)?.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"})}function c(){const d=document.querySelector(".archive-content"),f=document.querySelector(".archive-list");if(!d)return;const m=window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",p=f?f.getBoundingClientRect().top-d.getBoundingClientRect().top+d.scrollTop:0;if(f&&d.scrollTop<p-16){d.scrollTo({top:Math.max(0,p-16),behavior:m});return}d.scrollBy({top:Math.max(360,d.clientHeight*.68),behavior:m})}return he.jsxs("nav",{className:`archive-scroll-rail${s?" is-visible":""}`,"aria-label":"Archive scroll controls",children:[he.jsx("button",{type:"button",onClick:()=>l("#top"),"aria-label":"Return to Kiri homepage",children:"↑"}),he.jsx("span",{className:"archive-scroll-track","aria-hidden":"true",children:he.jsx("span",{style:{height:`${Math.max(8,i*100)}%`}})}),he.jsx("button",{type:"button",onClick:c,disabled:i>.98,"aria-label":"Scroll down through Archive",children:"↓"})]})}function Zw({posts:s,loading:e,error:i,retry:r}){const l=Hw(),[c,d]=Qe.useState("all"),[f,m]=Qe.useState(1),[p,g]=Qe.useState(!1),[_,x]=Qe.useState(!1),[E,M]=Qe.useState(0),b=Qe.useRef(null),y=Qe.useRef(null),v=Qe.useMemo(()=>s.filter(A=>A.is_public).sort((A,N)=>new Date(N.created_at).getTime()-new Date(A.created_at).getTime()),[s]),O=Qe.useMemo(()=>c==="all"?v:v.filter(A=>A.category===c),[v,c]),w=O[0],B=O.slice(1),q=Math.max(1,Math.ceil(B.length/Sd)),F=B.slice((f-1)*Sd,f*Sd);Qe.useEffect(()=>{function A(N){N.key==="Escape"&&(g(!1),x(!1))}return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[]),Qe.useEffect(()=>{const A=document.body.style.overflow;return _&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=A}},[_]),Qe.useLayoutEffect(()=>{y.current===null||!b.current||(b.current.scrollTop=y.current,y.current=null)},[f]);function P(A){y.current=0,M(0),d(A),m(1),g(!1),x(!1)}function Q(A){const N=Math.min(Math.max(A,1),q);N!==f&&(b.current&&(y.current=b.current.scrollTop,M(ne=>Math.max(ne,b.current?.scrollHeight??0))),m(N))}return he.jsxs("section",{className:"archive-page",id:"archive","aria-labelledby":"archive-title",children:[he.jsx(jw,{}),he.jsx(kw,{selectedCategory:c,onSelect:P}),he.jsx(Xw,{open:_,selectedCategory:c,onOpenChange:x,onSelect:P}),he.jsxs("main",{className:"archive-main",children:[he.jsxs("header",{className:"archive-heading",children:[he.jsxs("div",{children:[he.jsx("h1",{id:"archive-title",children:"Archive"}),he.jsx("p",{children:"Memories and fragments."})]}),he.jsx(Vw,{value:c,open:p,onOpenChange:g,onSelect:P})]}),he.jsx("div",{className:"archive-content",ref:b,"aria-busy":e,children:he.jsx("div",{className:"archive-content-page",style:E?{minHeight:`${E}px`}:void 0,children:e?he.jsx("div",{className:"archive-empty",role:"status",children:"Loading archive…"}):i?he.jsxs("div",{className:"archive-empty",role:"alert",children:[he.jsx("p",{children:i}),he.jsx("button",{className:"archive-retry",type:"button",onClick:r,children:"Try again"})]}):w?he.jsxs(he.Fragment,{children:[he.jsx(Ww,{post:w,onOpen:l.openArticle}),he.jsx("div",{className:"archive-list","aria-live":"polite",children:F.map(A=>he.jsx(qw,{post:A,onOpen:l.openArticle},A.id))}),he.jsxs("footer",{className:"archive-footer",children:[he.jsx(Yw,{currentPage:f,totalPages:q,onPageChange:Q}),he.jsx("span",{children:"© 2026 kiri.pet"})]})]}):he.jsx("div",{className:"archive-empty",children:"No entries in this category yet."})})},c)]}),l.activePost&&he.jsx(Fw,{post:l.activePost,opener:l.opener,position:l.position,onClose:l.closeArticle})]})}const L0=["k","i","r","i","."];function Kw(s){const e=new Date(s);return Number.isNaN(e.getTime())?"":new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)}function Qw(){const[s,e]=Qe.useState(0),i=Vy(),r=i.posts[0]?Kw(i.posts[0].created_at):"",l=r?`last note / ${r}`:"last note",c=!i.loading,d=Qe.useMemo(()=>window.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1,[]);return Qe.useEffect(()=>{const f=window.history.scrollRestoration;window.history.scrollRestoration="manual";const m=()=>window.scrollTo({top:0,left:0,behavior:"auto"}),p=window.requestAnimationFrame(m);return()=>{window.cancelAnimationFrame(p),window.history.scrollRestoration=f}},[]),Qe.useEffect(()=>{let f=!1,m=0,p=null;function g(M){f=!0,M.scrollIntoView({behavior:d?"auto":"smooth",block:"start"}),m=window.setTimeout(()=>{f=!1},d?80:720)}function _(M){if(document.querySelector(".article-dialog[open]"))return;const b=document.querySelector("#archive"),y=document.querySelector("#top"),v=document.querySelector(".archive-content"),O=window.innerHeight*.35,w=b?.offsetTop??0,B=Math.abs(window.scrollY-w)<=window.innerHeight*.24,q=(v?.scrollTop??0)<=2;!b||!y||f||(M.deltaY>6&&window.scrollY<=O?(M.preventDefault(),v?.scrollTo({top:0,behavior:"auto"}),g(b)):M.deltaY<-6&&B&&q&&(M.preventDefault(),g(y)))}function x(M){document.querySelector(".article-dialog[open]")||(p=M.touches[0]?.clientY??null)}function E(M){if(document.querySelector(".article-dialog[open]")){p=null;return}const b=document.querySelector("#archive"),y=document.querySelector("#top"),v=document.querySelector(".archive-content"),O=M.changedTouches[0]?.clientY??p,w=p===null?0:p-O,B=b?.offsetTop??0,q=window.scrollY<=window.innerHeight*.35,F=Math.abs(window.scrollY-B)<=window.innerHeight*.24,P=(v?.scrollTop??0)<=2;if(!b||!y||p===null||f){p=null;return}w>12&&q?(v?.scrollTo({top:0,behavior:"auto"}),g(b)):w<-12&&F&&P&&g(y),p=null}return window.addEventListener("wheel",_,{passive:!1}),window.addEventListener("touchstart",x,{passive:!0}),window.addEventListener("touchend",E,{passive:!0}),()=>{window.clearTimeout(m),window.removeEventListener("wheel",_),window.removeEventListener("touchstart",x),window.removeEventListener("touchend",E)}},[d]),Qe.useEffect(()=>{if(d){e(L0.length);return}const f=[680,190,280,210,760],m=[];let p=0;return f.forEach((g,_)=>{p+=g,m.push(window.setTimeout(()=>e(_+1),p))}),()=>m.forEach(window.clearTimeout)},[d]),he.jsxs(he.Fragment,{children:[he.jsx(tR,{color:"#ffffff",flakeSize:.012,minFlakeSize:1.25,pixelResolution:200,speed:1.3,density:.3,direction:125,brightness:2.5,depthFade:8,farPlane:20,gamma:.4545,variant:"square"}),he.jsxs("main",{className:"page",id:"top","aria-label":"Kiri private archive homepage",children:[he.jsx("div",{className:"corner-label",children:"est. 2026"}),he.jsxs("section",{className:"hero","aria-label":"Archive introduction",children:[he.jsx("h1",{className:"wordmark","aria-label":"kiri.",children:he.jsx("span",{className:"typewriter","aria-hidden":"true",children:L0.map((f,m)=>{const p=s>m,g=s===m;return he.jsx("span",{className:`type-slot${p?" visible":""}${g?" cursor":""}`,children:p?f:""},`${f}-${m}`)})})}),he.jsx("p",{className:"subtitle",children:"A private archive of moments"}),he.jsx("div",{className:"divider","aria-hidden":"true"})]}),he.jsx("p",{className:"microcopy",children:"a quiet place for images and memories"}),he.jsx("a",{className:"enter",href:"#archive",children:"enter the archive"}),he.jsx("div",{className:`status${c?" is-ready":""}`,"data-last-note":!0,children:l})]}),he.jsx(Zw,{...i})]})}Fy.createRoot(document.getElementById("root")).render(he.jsx(Qe.StrictMode,{children:he.jsx(Qw,{})}));
