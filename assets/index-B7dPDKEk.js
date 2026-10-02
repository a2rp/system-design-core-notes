(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const g of document.querySelectorAll('link[rel="modulepreload"]'))p(g);new MutationObserver(g=>{for(const j of g)if(j.type==="childList")for(const C of j.addedNodes)C.tagName==="LINK"&&C.rel==="modulepreload"&&p(C)}).observe(document,{childList:!0,subtree:!0});function o(g){const j={};return g.integrity&&(j.integrity=g.integrity),g.referrerPolicy&&(j.referrerPolicy=g.referrerPolicy),g.crossOrigin==="use-credentials"?j.credentials="include":g.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function p(g){if(g.ep)return;g.ep=!0;const j=o(g);fetch(g.href,j)}})();function ux(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var _l={exports:{}},Zt={},Al={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap;function hx(){if(ap)return se;ap=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),g=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),C=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),O=Symbol.iterator;function F(m){return m===null||typeof m!="object"?null:(m=O&&m[O]||m["@@iterator"],typeof m=="function"?m:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,Q={};function X(m,b,K){this.props=m,this.context=b,this.refs=Q,this.updater=K||G}X.prototype.isReactComponent={},X.prototype.setState=function(m,b){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,b,"setState")},X.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function he(){}he.prototype=X.prototype;function le(m,b,K){this.props=m,this.context=b,this.refs=Q,this.updater=K||G}var ae=le.prototype=new he;ae.constructor=le,ne(ae,X.prototype),ae.isPureReactComponent=!0;var ee=Array.isArray,pe=Object.prototype.hasOwnProperty,Y={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function Ee(m,b,K){var J,te={},re=null,ue=null;if(b!=null)for(J in b.ref!==void 0&&(ue=b.ref),b.key!==void 0&&(re=""+b.key),b)pe.call(b,J)&&!U.hasOwnProperty(J)&&(te[J]=b[J]);var ie=arguments.length-2;if(ie===1)te.children=K;else if(1<ie){for(var ce=Array(ie),De=0;De<ie;De++)ce[De]=arguments[De+2];te.children=ce}if(m&&m.defaultProps)for(J in ie=m.defaultProps,ie)te[J]===void 0&&(te[J]=ie[J]);return{$$typeof:a,type:m,key:re,ref:ue,props:te,_owner:Y.current}}function tr(m,b){return{$$typeof:a,type:m.type,key:b,ref:m.ref,props:m.props,_owner:m._owner}}function jr(m){return typeof m=="object"&&m!==null&&m.$$typeof===a}function Dr(m){var b={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(K){return b[K]})}var dr=/\/+/g;function qe(m,b){return typeof m=="object"&&m!==null&&m.key!=null?Dr(""+m.key):b.toString(36)}function nr(m,b,K,J,te){var re=typeof m;(re==="undefined"||re==="boolean")&&(m=null);var ue=!1;if(m===null)ue=!0;else switch(re){case"string":case"number":ue=!0;break;case"object":switch(m.$$typeof){case a:case c:ue=!0}}if(ue)return ue=m,te=te(ue),m=J===""?"."+qe(ue,0):J,ee(te)?(K="",m!=null&&(K=m.replace(dr,"$&/")+"/"),nr(te,b,K,"",function(De){return De})):te!=null&&(jr(te)&&(te=tr(te,K+(!te.key||ue&&ue.key===te.key?"":(""+te.key).replace(dr,"$&/")+"/")+m)),b.push(te)),1;if(ue=0,J=J===""?".":J+":",ee(m))for(var ie=0;ie<m.length;ie++){re=m[ie];var ce=J+qe(re,ie);ue+=nr(re,b,K,ce,te)}else if(ce=F(m),typeof ce=="function")for(m=ce.call(m),ie=0;!(re=m.next()).done;)re=re.value,ce=J+qe(re,ie++),ue+=nr(re,b,K,ce,te);else if(re==="object")throw b=String(m),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return ue}function pr(m,b,K){if(m==null)return m;var J=[],te=0;return nr(m,J,"","",function(re){return b.call(K,re,te++)}),J}function We(m){if(m._status===-1){var b=m._result;b=b(),b.then(function(K){(m._status===0||m._status===-1)&&(m._status=1,m._result=K)},function(K){(m._status===0||m._status===-1)&&(m._status=2,m._result=K)}),m._status===-1&&(m._status=0,m._result=b)}if(m._status===1)return m._result.default;throw m._result}var fe={current:null},z={transition:null},D={ReactCurrentDispatcher:fe,ReactCurrentBatchConfig:z,ReactCurrentOwner:Y};function I(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:pr,forEach:function(m,b,K){pr(m,function(){b.apply(this,arguments)},K)},count:function(m){var b=0;return pr(m,function(){b++}),b},toArray:function(m){return pr(m,function(b){return b})||[]},only:function(m){if(!jr(m))throw Error("React.Children.only expected to receive a single React element child.");return m}},se.Component=X,se.Fragment=o,se.Profiler=g,se.PureComponent=le,se.StrictMode=p,se.Suspense=T,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,se.act=I,se.cloneElement=function(m,b,K){if(m==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+m+".");var J=ne({},m.props),te=m.key,re=m.ref,ue=m._owner;if(b!=null){if(b.ref!==void 0&&(re=b.ref,ue=Y.current),b.key!==void 0&&(te=""+b.key),m.type&&m.type.defaultProps)var ie=m.type.defaultProps;for(ce in b)pe.call(b,ce)&&!U.hasOwnProperty(ce)&&(J[ce]=b[ce]===void 0&&ie!==void 0?ie[ce]:b[ce])}var ce=arguments.length-2;if(ce===1)J.children=K;else if(1<ce){ie=Array(ce);for(var De=0;De<ce;De++)ie[De]=arguments[De+2];J.children=ie}return{$$typeof:a,type:m.type,key:te,ref:re,props:J,_owner:ue}},se.createContext=function(m){return m={$$typeof:C,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},m.Provider={$$typeof:j,_context:m},m.Consumer=m},se.createElement=Ee,se.createFactory=function(m){var b=Ee.bind(null,m);return b.type=m,b},se.createRef=function(){return{current:null}},se.forwardRef=function(m){return{$$typeof:_,render:m}},se.isValidElement=jr,se.lazy=function(m){return{$$typeof:H,_payload:{_status:-1,_result:m},_init:We}},se.memo=function(m,b){return{$$typeof:q,type:m,compare:b===void 0?null:b}},se.startTransition=function(m){var b=z.transition;z.transition={};try{m()}finally{z.transition=b}},se.unstable_act=I,se.useCallback=function(m,b){return fe.current.useCallback(m,b)},se.useContext=function(m){return fe.current.useContext(m)},se.useDebugValue=function(){},se.useDeferredValue=function(m){return fe.current.useDeferredValue(m)},se.useEffect=function(m,b){return fe.current.useEffect(m,b)},se.useId=function(){return fe.current.useId()},se.useImperativeHandle=function(m,b,K){return fe.current.useImperativeHandle(m,b,K)},se.useInsertionEffect=function(m,b){return fe.current.useInsertionEffect(m,b)},se.useLayoutEffect=function(m,b){return fe.current.useLayoutEffect(m,b)},se.useMemo=function(m,b){return fe.current.useMemo(m,b)},se.useReducer=function(m,b,K){return fe.current.useReducer(m,b,K)},se.useRef=function(m){return fe.current.useRef(m)},se.useState=function(m){return fe.current.useState(m)},se.useSyncExternalStore=function(m,b,K){return fe.current.useSyncExternalStore(m,b,K)},se.useTransition=function(){return fe.current.useTransition()},se.version="18.3.1",se}var ip;function ro(){return ip||(ip=1,Al.exports=hx()),Al.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function xx(){if(lp)return Zt;lp=1;var a=ro(),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,g=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function C(_,T,q){var H,O={},F=null,G=null;q!==void 0&&(F=""+q),T.key!==void 0&&(F=""+T.key),T.ref!==void 0&&(G=T.ref);for(H in T)p.call(T,H)&&!j.hasOwnProperty(H)&&(O[H]=T[H]);if(_&&_.defaultProps)for(H in T=_.defaultProps,T)O[H]===void 0&&(O[H]=T[H]);return{$$typeof:c,type:_,key:F,ref:G,props:O,_owner:g.current}}return Zt.Fragment=o,Zt.jsx=C,Zt.jsxs=C,Zt}var op;function mx(){return op||(op=1,_l.exports=xx()),_l.exports}var r=mx(),va={},Ml={exports:{}},rr={},Dl={exports:{}},Ol={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cp;function fx(){return cp||(cp=1,(function(a){function c(z,D){var I=z.length;z.push(D);e:for(;0<I;){var m=I-1>>>1,b=z[m];if(0<g(b,D))z[m]=D,z[I]=b,I=m;else break e}}function o(z){return z.length===0?null:z[0]}function p(z){if(z.length===0)return null;var D=z[0],I=z.pop();if(I!==D){z[0]=I;e:for(var m=0,b=z.length,K=b>>>1;m<K;){var J=2*(m+1)-1,te=z[J],re=J+1,ue=z[re];if(0>g(te,I))re<b&&0>g(ue,te)?(z[m]=ue,z[re]=I,m=re):(z[m]=te,z[J]=I,m=J);else if(re<b&&0>g(ue,I))z[m]=ue,z[re]=I,m=re;else break e}}return D}function g(z,D){var I=z.sortIndex-D.sortIndex;return I!==0?I:z.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;a.unstable_now=function(){return j.now()}}else{var C=Date,_=C.now();a.unstable_now=function(){return C.now()-_}}var T=[],q=[],H=1,O=null,F=3,G=!1,ne=!1,Q=!1,X=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,le=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(z){for(var D=o(q);D!==null;){if(D.callback===null)p(q);else if(D.startTime<=z)p(q),D.sortIndex=D.expirationTime,c(T,D);else break;D=o(q)}}function ee(z){if(Q=!1,ae(z),!ne)if(o(T)!==null)ne=!0,We(pe);else{var D=o(q);D!==null&&fe(ee,D.startTime-z)}}function pe(z,D){ne=!1,Q&&(Q=!1,he(Ee),Ee=-1),G=!0;var I=F;try{for(ae(D),O=o(T);O!==null&&(!(O.expirationTime>D)||z&&!Dr());){var m=O.callback;if(typeof m=="function"){O.callback=null,F=O.priorityLevel;var b=m(O.expirationTime<=D);D=a.unstable_now(),typeof b=="function"?O.callback=b:O===o(T)&&p(T),ae(D)}else p(T);O=o(T)}if(O!==null)var K=!0;else{var J=o(q);J!==null&&fe(ee,J.startTime-D),K=!1}return K}finally{O=null,F=I,G=!1}}var Y=!1,U=null,Ee=-1,tr=5,jr=-1;function Dr(){return!(a.unstable_now()-jr<tr)}function dr(){if(U!==null){var z=a.unstable_now();jr=z;var D=!0;try{D=U(!0,z)}finally{D?qe():(Y=!1,U=null)}}else Y=!1}var qe;if(typeof le=="function")qe=function(){le(dr)};else if(typeof MessageChannel!="undefined"){var nr=new MessageChannel,pr=nr.port2;nr.port1.onmessage=dr,qe=function(){pr.postMessage(null)}}else qe=function(){X(dr,0)};function We(z){U=z,Y||(Y=!0,qe())}function fe(z,D){Ee=X(function(){z(a.unstable_now())},D)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_continueExecution=function(){ne||G||(ne=!0,We(pe))},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tr=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return F},a.unstable_getFirstCallbackNode=function(){return o(T)},a.unstable_next=function(z){switch(F){case 1:case 2:case 3:var D=3;break;default:D=F}var I=F;F=D;try{return z()}finally{F=I}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(z,D){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var I=F;F=z;try{return D()}finally{F=I}},a.unstable_scheduleCallback=function(z,D,I){var m=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?m+I:m):I=m,z){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=I+b,z={id:H++,callback:D,priorityLevel:z,startTime:I,expirationTime:b,sortIndex:-1},I>m?(z.sortIndex=I,c(q,z),o(T)===null&&z===o(q)&&(Q?(he(Ee),Ee=-1):Q=!0,fe(ee,I-m))):(z.sortIndex=b,c(T,z),ne||G||(ne=!0,We(pe))),z},a.unstable_shouldYield=Dr,a.unstable_wrapCallback=function(z){var D=F;return function(){var I=F;F=D;try{return z.apply(this,arguments)}finally{F=I}}}})(Ol)),Ol}var dp;function gx(){return dp||(dp=1,Dl.exports=fx()),Dl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pp;function vx(){if(pp)return rr;pp=1;var a=ro(),c=gx();function o(e){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)s+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,g={};function j(e,s){C(e,s),C(e+"Capture",s)}function C(e,s){for(g[e]=s,e=0;e<s.length;e++)p.add(s[e])}var _=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,H={},O={};function F(e){return T.call(O,e)?!0:T.call(H,e)?!1:q.test(e)?O[e]=!0:(H[e]=!0,!1)}function G(e,s,t,n){if(t!==null&&t.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ne(e,s,t,n){if(s===null||typeof s=="undefined"||G(e,s,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function Q(e,s,t,n,i,l,d){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=s,this.sanitizeURL=l,this.removeEmptyString=d}var X={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){X[e]=new Q(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var s=e[0];X[s]=new Q(s,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){X[e]=new Q(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){X[e]=new Q(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){X[e]=new Q(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){X[e]=new Q(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){X[e]=new Q(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){X[e]=new Q(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){X[e]=new Q(e,5,!1,e.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function le(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var s=e.replace(he,le);X[s]=new Q(s,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var s=e.replace(he,le);X[s]=new Q(s,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var s=e.replace(he,le);X[s]=new Q(s,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){X[e]=new Q(e,1,!1,e.toLowerCase(),null,!1,!1)}),X.xlinkHref=new Q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){X[e]=new Q(e,1,!1,e.toLowerCase(),null,!0,!0)});function ae(e,s,t,n){var i=X.hasOwnProperty(s)?X[s]:null;(i!==null?i.type!==0:n||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(ne(s,t,i,n)&&(t=null),n||i===null?F(s)&&(t===null?e.removeAttribute(s):e.setAttribute(s,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(s=i.attributeName,n=i.attributeNamespace,t===null?e.removeAttribute(s):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,n?e.setAttributeNS(n,s,t):e.setAttribute(s,t))))}var ee=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pe=Symbol.for("react.element"),Y=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),tr=Symbol.for("react.profiler"),jr=Symbol.for("react.provider"),Dr=Symbol.for("react.context"),dr=Symbol.for("react.forward_ref"),qe=Symbol.for("react.suspense"),nr=Symbol.for("react.suspense_list"),pr=Symbol.for("react.memo"),We=Symbol.for("react.lazy"),fe=Symbol.for("react.offscreen"),z=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,m;function b(e){if(m===void 0)try{throw Error()}catch(t){var s=t.stack.trim().match(/\n( *(at )?)/);m=s&&s[1]||""}return`
`+m+e}var K=!1;function J(e,s){if(!e||K)return"";K=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(y){var n=y}Reflect.construct(e,[],s)}else{try{s.call()}catch(y){n=y}e.call(s.prototype)}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),l=n.stack.split(`
`),d=i.length-1,u=l.length-1;1<=d&&0<=u&&i[d]!==l[u];)u--;for(;1<=d&&0<=u;d--,u--)if(i[d]!==l[u]){if(d!==1||u!==1)do if(d--,u--,0>u||i[d]!==l[u]){var h=`
`+i[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=u);break}}}finally{K=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?b(e):""}function te(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case Y:return"Portal";case tr:return"Profiler";case Ee:return"StrictMode";case qe:return"Suspense";case nr:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Dr:return(e.displayName||"Context")+".Consumer";case jr:return(e._context.displayName||"Context")+".Provider";case dr:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case pr:return s=e.displayName||null,s!==null?s:re(e.type)||"Memo";case We:s=e._payload,e=e._init;try{return re(e(s))}catch{}}return null}function ue(e){var s=e.type;switch(e.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=s.render,e=e.displayName||e.name||"",s.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(s);case 8:return s===Ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function De(e){var s=ce(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,s),n=""+e[s];if(!e.hasOwnProperty(s)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return i.call(this)},set:function(d){n=""+d,l.call(this,d)}}),Object.defineProperty(e,s,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Or(e){e._valueTracker||(e._valueTracker=De(e))}function br(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var t=s.getValue(),n="";return e&&(n=ce(e)?e.checked?"true":"false":e.value),e=n,e!==t?(s.setValue(e),!0):!1}function cn(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wa(e,s){var t=s.checked;return I({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function uo(e,s){var t=s.defaultValue==null?"":s.defaultValue,n=s.checked!=null?s.checked:s.defaultChecked;t=ie(s.value!=null?s.value:t),e._wrapperState={initialChecked:n,initialValue:t,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ho(e,s){s=s.checked,s!=null&&ae(e,"checked",s,!1)}function Ua(e,s){ho(e,s);var t=ie(s.value),n=s.type;if(t!=null)n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}s.hasOwnProperty("value")?$a(e,s.type,t):s.hasOwnProperty("defaultValue")&&$a(e,s.type,ie(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(e.defaultChecked=!!s.defaultChecked)}function xo(e,s,t){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var n=s.type;if(!(n!=="submit"&&n!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+e._wrapperState.initialValue,t||s===e.value||(e.value=s),e.defaultValue=s}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function $a(e,s,t){(s!=="number"||cn(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var xt=Array.isArray;function _s(e,s,t,n){if(e=e.options,s){s={};for(var i=0;i<t.length;i++)s["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=s.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&n&&(e[t].defaultSelected=!0)}else{for(t=""+ie(t),s=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}s!==null||e[i].disabled||(s=e[i])}s!==null&&(s.selected=!0)}}function Ha(e,s){if(s.dangerouslySetInnerHTML!=null)throw Error(o(91));return I({},s,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function mo(e,s){var t=s.value;if(t==null){if(t=s.children,s=s.defaultValue,t!=null){if(s!=null)throw Error(o(92));if(xt(t)){if(1<t.length)throw Error(o(93));t=t[0]}s=t}s==null&&(s=""),t=s}e._wrapperState={initialValue:ie(t)}}function fo(e,s){var t=ie(s.value),n=ie(s.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),s.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),n!=null&&(e.defaultValue=""+n)}function go(e){var s=e.textContent;s===e._wrapperState.initialValue&&s!==""&&s!==null&&(e.value=s)}function vo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qa(e,s){return e==null||e==="http://www.w3.org/1999/xhtml"?vo(s):e==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var dn,yo=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(s,t,n,i){MSApp.execUnsafeLocalFunction(function(){return e(s,t,n,i)})}:e})(function(e,s){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=s;else{for(dn=dn||document.createElement("div"),dn.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=dn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;s.firstChild;)e.appendChild(s.firstChild)}});function mt(e,s){if(s){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=s;return}}e.textContent=s}var ft={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fu=["Webkit","ms","Moz","O"];Object.keys(ft).forEach(function(e){fu.forEach(function(s){s=s+e.charAt(0).toUpperCase()+e.substring(1),ft[s]=ft[e]})});function jo(e,s,t){return s==null||typeof s=="boolean"||s===""?"":t||typeof s!="number"||s===0||ft.hasOwnProperty(e)&&ft[e]?(""+s).trim():s+"px"}function bo(e,s){e=e.style;for(var t in s)if(s.hasOwnProperty(t)){var n=t.indexOf("--")===0,i=jo(t,s[t],n);t==="float"&&(t="cssFloat"),n?e.setProperty(t,i):e[t]=i}}var gu=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(e,s){if(s){if(gu[e]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(o(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(o(61))}if(s.style!=null&&typeof s.style!="object")throw Error(o(62))}}function Va(e,s){if(e.indexOf("-")===-1)return typeof s.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ga=null;function Ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,As=null,Ms=null;function No(e){if(e=Ot(e)){if(typeof Ka!="function")throw Error(o(280));var s=e.stateNode;s&&(s=Rn(s),Ka(e.stateNode,e.type,s))}}function wo(e){As?Ms?Ms.push(e):Ms=[e]:As=e}function ko(){if(As){var e=As,s=Ms;if(Ms=As=null,No(e),s)for(e=0;e<s.length;e++)No(s[e])}}function So(e,s){return e(s)}function Co(){}var Xa=!1;function To(e,s,t){if(Xa)return e(s,t);Xa=!0;try{return So(e,s,t)}finally{Xa=!1,(As!==null||Ms!==null)&&(Co(),ko())}}function gt(e,s){var t=e.stateNode;if(t===null)return null;var n=Rn(t);if(n===null)return null;t=n[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(o(231,s,typeof t));return t}var Ja=!1;if(_)try{var vt={};Object.defineProperty(vt,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",vt,vt),window.removeEventListener("test",vt,vt)}catch{Ja=!1}function vu(e,s,t,n,i,l,d,u,h){var y=Array.prototype.slice.call(arguments,3);try{s.apply(t,y)}catch(w){this.onError(w)}}var yt=!1,pn=null,un=!1,Za=null,yu={onError:function(e){yt=!0,pn=e}};function ju(e,s,t,n,i,l,d,u,h){yt=!1,pn=null,vu.apply(yu,arguments)}function bu(e,s,t,n,i,l,d,u,h){if(ju.apply(this,arguments),yt){if(yt){var y=pn;yt=!1,pn=null}else throw Error(o(198));un||(un=!0,Za=y)}}function fs(e){var s=e,t=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(t=s.return),e=s.return;while(e)}return s.tag===3?t:null}function zo(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function Io(e){if(fs(e)!==e)throw Error(o(188))}function Nu(e){var s=e.alternate;if(!s){if(s=fs(e),s===null)throw Error(o(188));return s!==e?null:e}for(var t=e,n=s;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){t=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Io(i),e;if(l===n)return Io(i),s;l=l.sibling}throw Error(o(188))}if(t.return!==n.return)t=i,n=l;else{for(var d=!1,u=i.child;u;){if(u===t){d=!0,t=i,n=l;break}if(u===n){d=!0,n=i,t=l;break}u=u.sibling}if(!d){for(u=l.child;u;){if(u===t){d=!0,t=l,n=i;break}if(u===n){d=!0,n=l,t=i;break}u=u.sibling}if(!d)throw Error(o(189))}}if(t.alternate!==n)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?e:s}function Eo(e){return e=Nu(e),e!==null?Lo(e):null}function Lo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var s=Lo(e);if(s!==null)return s;e=e.sibling}return null}var Po=c.unstable_scheduleCallback,Ro=c.unstable_cancelCallback,wu=c.unstable_shouldYield,ku=c.unstable_requestPaint,Ce=c.unstable_now,Su=c.unstable_getCurrentPriorityLevel,ei=c.unstable_ImmediatePriority,_o=c.unstable_UserBlockingPriority,hn=c.unstable_NormalPriority,Cu=c.unstable_LowPriority,Ao=c.unstable_IdlePriority,xn=null,Lr=null;function Tu(e){if(Lr&&typeof Lr.onCommitFiberRoot=="function")try{Lr.onCommitFiberRoot(xn,e,void 0,(e.current.flags&128)===128)}catch{}}var Nr=Math.clz32?Math.clz32:Eu,zu=Math.log,Iu=Math.LN2;function Eu(e){return e>>>=0,e===0?32:31-(zu(e)/Iu|0)|0}var mn=64,fn=4194304;function jt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function gn(e,s){var t=e.pendingLanes;if(t===0)return 0;var n=0,i=e.suspendedLanes,l=e.pingedLanes,d=t&268435455;if(d!==0){var u=d&~i;u!==0?n=jt(u):(l&=d,l!==0&&(n=jt(l)))}else d=t&~i,d!==0?n=jt(d):l!==0&&(n=jt(l));if(n===0)return 0;if(s!==0&&s!==n&&(s&i)===0&&(i=n&-n,l=s&-s,i>=l||i===16&&(l&4194240)!==0))return s;if((n&4)!==0&&(n|=t&16),s=e.entangledLanes,s!==0)for(e=e.entanglements,s&=n;0<s;)t=31-Nr(s),i=1<<t,n|=e[t],s&=~i;return n}function Lu(e,s){switch(e){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pu(e,s){for(var t=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var d=31-Nr(l),u=1<<d,h=i[d];h===-1?((u&t)===0||(u&n)!==0)&&(i[d]=Lu(u,s)):h<=s&&(e.expiredLanes|=u),l&=~u}}function ri(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Mo(){var e=mn;return mn<<=1,(mn&4194240)===0&&(mn=64),e}function si(e){for(var s=[],t=0;31>t;t++)s.push(e);return s}function bt(e,s,t){e.pendingLanes|=s,s!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,s=31-Nr(s),e[s]=t}function Ru(e,s){var t=e.pendingLanes&~s;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=s,e.mutableReadLanes&=s,e.entangledLanes&=s,s=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-Nr(t),l=1<<i;s[i]=0,n[i]=-1,e[i]=-1,t&=~l}}function ti(e,s){var t=e.entangledLanes|=s;for(e=e.entanglements;t;){var n=31-Nr(t),i=1<<n;i&s|e[n]&s&&(e[n]|=s),t&=~i}}var me=0;function Do(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Oo,ni,Fo,Bo,Wo,ai=!1,vn=[],Gr=null,Yr=null,Kr=null,Nt=new Map,wt=new Map,Xr=[],_u="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uo(e,s){switch(e){case"focusin":case"focusout":Gr=null;break;case"dragenter":case"dragleave":Yr=null;break;case"mouseover":case"mouseout":Kr=null;break;case"pointerover":case"pointerout":Nt.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":wt.delete(s.pointerId)}}function kt(e,s,t,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:s,domEventName:t,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},s!==null&&(s=Ot(s),s!==null&&ni(s)),e):(e.eventSystemFlags|=n,s=e.targetContainers,i!==null&&s.indexOf(i)===-1&&s.push(i),e)}function Au(e,s,t,n,i){switch(s){case"focusin":return Gr=kt(Gr,e,s,t,n,i),!0;case"dragenter":return Yr=kt(Yr,e,s,t,n,i),!0;case"mouseover":return Kr=kt(Kr,e,s,t,n,i),!0;case"pointerover":var l=i.pointerId;return Nt.set(l,kt(Nt.get(l)||null,e,s,t,n,i)),!0;case"gotpointercapture":return l=i.pointerId,wt.set(l,kt(wt.get(l)||null,e,s,t,n,i)),!0}return!1}function $o(e){var s=gs(e.target);if(s!==null){var t=fs(s);if(t!==null){if(s=t.tag,s===13){if(s=zo(t),s!==null){e.blockedOn=s,Wo(e.priority,function(){Fo(t)});return}}else if(s===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yn(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var t=li(e.domEventName,e.eventSystemFlags,s[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);Ga=n,t.target.dispatchEvent(n),Ga=null}else return s=Ot(t),s!==null&&ni(s),e.blockedOn=t,!1;s.shift()}return!0}function Ho(e,s,t){yn(e)&&t.delete(s)}function Mu(){ai=!1,Gr!==null&&yn(Gr)&&(Gr=null),Yr!==null&&yn(Yr)&&(Yr=null),Kr!==null&&yn(Kr)&&(Kr=null),Nt.forEach(Ho),wt.forEach(Ho)}function St(e,s){e.blockedOn===s&&(e.blockedOn=null,ai||(ai=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Mu)))}function Ct(e){function s(i){return St(i,e)}if(0<vn.length){St(vn[0],e);for(var t=1;t<vn.length;t++){var n=vn[t];n.blockedOn===e&&(n.blockedOn=null)}}for(Gr!==null&&St(Gr,e),Yr!==null&&St(Yr,e),Kr!==null&&St(Kr,e),Nt.forEach(s),wt.forEach(s),t=0;t<Xr.length;t++)n=Xr[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<Xr.length&&(t=Xr[0],t.blockedOn===null);)$o(t),t.blockedOn===null&&Xr.shift()}var Ds=ee.ReactCurrentBatchConfig,jn=!0;function Du(e,s,t,n){var i=me,l=Ds.transition;Ds.transition=null;try{me=1,ii(e,s,t,n)}finally{me=i,Ds.transition=l}}function Ou(e,s,t,n){var i=me,l=Ds.transition;Ds.transition=null;try{me=4,ii(e,s,t,n)}finally{me=i,Ds.transition=l}}function ii(e,s,t,n){if(jn){var i=li(e,s,t,n);if(i===null)ki(e,s,n,bn,t),Uo(e,n);else if(Au(i,e,s,t,n))n.stopPropagation();else if(Uo(e,n),s&4&&-1<_u.indexOf(e)){for(;i!==null;){var l=Ot(i);if(l!==null&&Oo(l),l=li(e,s,t,n),l===null&&ki(e,s,n,bn,t),l===i)break;i=l}i!==null&&n.stopPropagation()}else ki(e,s,n,null,t)}}var bn=null;function li(e,s,t,n){if(bn=null,e=Ya(n),e=gs(e),e!==null)if(s=fs(e),s===null)e=null;else if(t=s.tag,t===13){if(e=zo(s),e!==null)return e;e=null}else if(t===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null);return bn=e,null}function Qo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Su()){case ei:return 1;case _o:return 4;case hn:case Cu:return 16;case Ao:return 536870912;default:return 16}default:return 16}}var Jr=null,oi=null,Nn=null;function qo(){if(Nn)return Nn;var e,s=oi,t=s.length,n,i="value"in Jr?Jr.value:Jr.textContent,l=i.length;for(e=0;e<t&&s[e]===i[e];e++);var d=t-e;for(n=1;n<=d&&s[t-n]===i[l-n];n++);return Nn=i.slice(e,1<n?1-n:void 0)}function wn(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function kn(){return!0}function Vo(){return!1}function ar(e){function s(t,n,i,l,d){this._reactName=t,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=d,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?kn:Vo,this.isPropagationStopped=Vo,this}return I(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=kn)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=kn)},persist:function(){},isPersistent:kn}),s}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ci=ar(Os),Tt=I({},Os,{view:0,detail:0}),Fu=ar(Tt),di,pi,zt,Sn=I({},Tt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zt&&(zt&&e.type==="mousemove"?(di=e.screenX-zt.screenX,pi=e.screenY-zt.screenY):pi=di=0,zt=e),di)},movementY:function(e){return"movementY"in e?e.movementY:pi}}),Go=ar(Sn),Bu=I({},Sn,{dataTransfer:0}),Wu=ar(Bu),Uu=I({},Tt,{relatedTarget:0}),ui=ar(Uu),$u=I({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),Hu=ar($u),Qu=I({},Os,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qu=ar(Qu),Vu=I({},Os,{data:0}),Yo=ar(Vu),Gu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xu(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Ku[e])?!!s[e]:!1}function hi(){return Xu}var Ju=I({},Tt,{key:function(e){if(e.key){var s=Gu[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=wn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hi,charCode:function(e){return e.type==="keypress"?wn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zu=ar(Ju),eh=I({},Sn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ko=ar(eh),rh=I({},Tt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hi}),sh=ar(rh),th=I({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),nh=ar(th),ah=I({},Sn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ih=ar(ah),lh=[9,13,27,32],xi=_&&"CompositionEvent"in window,It=null;_&&"documentMode"in document&&(It=document.documentMode);var oh=_&&"TextEvent"in window&&!It,Xo=_&&(!xi||It&&8<It&&11>=It),Jo=" ",Zo=!1;function ec(e,s){switch(e){case"keyup":return lh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fs=!1;function ch(e,s){switch(e){case"compositionend":return rc(s);case"keypress":return s.which!==32?null:(Zo=!0,Jo);case"textInput":return e=s.data,e===Jo&&Zo?null:e;default:return null}}function dh(e,s){if(Fs)return e==="compositionend"||!xi&&ec(e,s)?(e=qo(),Nn=oi=Jr=null,Fs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Xo&&s.locale!=="ko"?null:s.data;default:return null}}var ph={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sc(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!ph[e.type]:s==="textarea"}function tc(e,s,t,n){wo(n),s=En(s,"onChange"),0<s.length&&(t=new ci("onChange","change",null,t,n),e.push({event:t,listeners:s}))}var Et=null,Lt=null;function uh(e){bc(e,0)}function Cn(e){var s=Hs(e);if(br(s))return e}function hh(e,s){if(e==="change")return s}var nc=!1;if(_){var mi;if(_){var fi="oninput"in document;if(!fi){var ac=document.createElement("div");ac.setAttribute("oninput","return;"),fi=typeof ac.oninput=="function"}mi=fi}else mi=!1;nc=mi&&(!document.documentMode||9<document.documentMode)}function ic(){Et&&(Et.detachEvent("onpropertychange",lc),Lt=Et=null)}function lc(e){if(e.propertyName==="value"&&Cn(Lt)){var s=[];tc(s,Lt,e,Ya(e)),To(uh,s)}}function xh(e,s,t){e==="focusin"?(ic(),Et=s,Lt=t,Et.attachEvent("onpropertychange",lc)):e==="focusout"&&ic()}function mh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cn(Lt)}function fh(e,s){if(e==="click")return Cn(s)}function gh(e,s){if(e==="input"||e==="change")return Cn(s)}function vh(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var wr=typeof Object.is=="function"?Object.is:vh;function Pt(e,s){if(wr(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var t=Object.keys(e),n=Object.keys(s);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var i=t[n];if(!T.call(s,i)||!wr(e[i],s[i]))return!1}return!0}function oc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cc(e,s){var t=oc(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=s&&n>=s)return{node:t,offset:s-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=oc(t)}}function dc(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?dc(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function pc(){for(var e=window,s=cn();s instanceof e.HTMLIFrameElement;){try{var t=typeof s.contentWindow.location.href=="string"}catch{t=!1}if(t)e=s.contentWindow;else break;s=cn(e.document)}return s}function gi(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}function yh(e){var s=pc(),t=e.focusedElem,n=e.selectionRange;if(s!==t&&t&&t.ownerDocument&&dc(t.ownerDocument.documentElement,t)){if(n!==null&&gi(t)){if(s=n.start,e=n.end,e===void 0&&(e=s),"selectionStart"in t)t.selectionStart=s,t.selectionEnd=Math.min(e,t.value.length);else if(e=(s=t.ownerDocument||document)&&s.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(n.start,i);n=n.end===void 0?l:Math.min(n.end,i),!e.extend&&l>n&&(i=n,n=l,l=i),i=cc(t,l);var d=cc(t,n);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(s=s.createRange(),s.setStart(i.node,i.offset),e.removeAllRanges(),l>n?(e.addRange(s),e.extend(d.node,d.offset)):(s.setEnd(d.node,d.offset),e.addRange(s)))}}for(s=[],e=t;e=e.parentNode;)e.nodeType===1&&s.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<s.length;t++)e=s[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var jh=_&&"documentMode"in document&&11>=document.documentMode,Bs=null,vi=null,Rt=null,yi=!1;function uc(e,s,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;yi||Bs==null||Bs!==cn(n)||(n=Bs,"selectionStart"in n&&gi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Rt&&Pt(Rt,n)||(Rt=n,n=En(vi,"onSelect"),0<n.length&&(s=new ci("onSelect","select",null,s,t),e.push({event:s,listeners:n}),s.target=Bs)))}function Tn(e,s){var t={};return t[e.toLowerCase()]=s.toLowerCase(),t["Webkit"+e]="webkit"+s,t["Moz"+e]="moz"+s,t}var Ws={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},ji={},hc={};_&&(hc=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function zn(e){if(ji[e])return ji[e];if(!Ws[e])return e;var s=Ws[e],t;for(t in s)if(s.hasOwnProperty(t)&&t in hc)return ji[e]=s[t];return e}var xc=zn("animationend"),mc=zn("animationiteration"),fc=zn("animationstart"),gc=zn("transitionend"),vc=new Map,yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zr(e,s){vc.set(e,s),j(s,[e])}for(var bi=0;bi<yc.length;bi++){var Ni=yc[bi],bh=Ni.toLowerCase(),Nh=Ni[0].toUpperCase()+Ni.slice(1);Zr(bh,"on"+Nh)}Zr(xc,"onAnimationEnd"),Zr(mc,"onAnimationIteration"),Zr(fc,"onAnimationStart"),Zr("dblclick","onDoubleClick"),Zr("focusin","onFocus"),Zr("focusout","onBlur"),Zr(gc,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _t="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wh=new Set("cancel close invalid load scroll toggle".split(" ").concat(_t));function jc(e,s,t){var n=e.type||"unknown-event";e.currentTarget=t,bu(n,s,void 0,e),e.currentTarget=null}function bc(e,s){s=(s&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],i=n.event;n=n.listeners;e:{var l=void 0;if(s)for(var d=n.length-1;0<=d;d--){var u=n[d],h=u.instance,y=u.currentTarget;if(u=u.listener,h!==l&&i.isPropagationStopped())break e;jc(i,u,y),l=h}else for(d=0;d<n.length;d++){if(u=n[d],h=u.instance,y=u.currentTarget,u=u.listener,h!==l&&i.isPropagationStopped())break e;jc(i,u,y),l=h}}}if(un)throw e=Za,un=!1,Za=null,e}function ye(e,s){var t=s[Ei];t===void 0&&(t=s[Ei]=new Set);var n=e+"__bubble";t.has(n)||(Nc(s,e,2,!1),t.add(n))}function wi(e,s,t){var n=0;s&&(n|=4),Nc(t,e,n,s)}var In="_reactListening"+Math.random().toString(36).slice(2);function At(e){if(!e[In]){e[In]=!0,p.forEach(function(t){t!=="selectionchange"&&(wh.has(t)||wi(t,!1,e),wi(t,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[In]||(s[In]=!0,wi("selectionchange",!1,s))}}function Nc(e,s,t,n){switch(Qo(s)){case 1:var i=Du;break;case 4:i=Ou;break;default:i=ii}t=i.bind(null,s,t,e),i=void 0,!Ja||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(s,t,{capture:!0,passive:i}):e.addEventListener(s,t,!0):i!==void 0?e.addEventListener(s,t,{passive:i}):e.addEventListener(s,t,!1)}function ki(e,s,t,n,i){var l=n;if((s&1)===0&&(s&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var u=n.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(d===4)for(d=n.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;d=d.return}for(;u!==null;){if(d=gs(u),d===null)return;if(h=d.tag,h===5||h===6){n=l=d;continue e}u=u.parentNode}}n=n.return}To(function(){var y=l,w=Ya(t),k=[];e:{var N=vc.get(e);if(N!==void 0){var E=ci,R=e;switch(e){case"keypress":if(wn(t)===0)break e;case"keydown":case"keyup":E=Zu;break;case"focusin":R="focus",E=ui;break;case"focusout":R="blur",E=ui;break;case"beforeblur":case"afterblur":E=ui;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=Go;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=Wu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=sh;break;case xc:case mc:case fc:E=Hu;break;case gc:E=nh;break;case"scroll":E=Fu;break;case"wheel":E=ih;break;case"copy":case"cut":case"paste":E=qu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=Ko}var A=(s&4)!==0,Te=!A&&e==="scroll",f=A?N!==null?N+"Capture":null:N;A=[];for(var x=y,v;x!==null;){v=x;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,f!==null&&(S=gt(x,f),S!=null&&A.push(Mt(x,S,v)))),Te)break;x=x.return}0<A.length&&(N=new E(N,R,null,t,w),k.push({event:N,listeners:A}))}}if((s&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",E=e==="mouseout"||e==="pointerout",N&&t!==Ga&&(R=t.relatedTarget||t.fromElement)&&(gs(R)||R[Fr]))break e;if((E||N)&&(N=w.window===w?w:(N=w.ownerDocument)?N.defaultView||N.parentWindow:window,E?(R=t.relatedTarget||t.toElement,E=y,R=R?gs(R):null,R!==null&&(Te=fs(R),R!==Te||R.tag!==5&&R.tag!==6)&&(R=null)):(E=null,R=y),E!==R)){if(A=Go,S="onMouseLeave",f="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(A=Ko,S="onPointerLeave",f="onPointerEnter",x="pointer"),Te=E==null?N:Hs(E),v=R==null?N:Hs(R),N=new A(S,x+"leave",E,t,w),N.target=Te,N.relatedTarget=v,S=null,gs(w)===y&&(A=new A(f,x+"enter",R,t,w),A.target=v,A.relatedTarget=Te,S=A),Te=S,E&&R)r:{for(A=E,f=R,x=0,v=A;v;v=Us(v))x++;for(v=0,S=f;S;S=Us(S))v++;for(;0<x-v;)A=Us(A),x--;for(;0<v-x;)f=Us(f),v--;for(;x--;){if(A===f||f!==null&&A===f.alternate)break r;A=Us(A),f=Us(f)}A=null}else A=null;E!==null&&wc(k,N,E,A,!1),R!==null&&Te!==null&&wc(k,Te,R,A,!0)}}e:{if(N=y?Hs(y):window,E=N.nodeName&&N.nodeName.toLowerCase(),E==="select"||E==="input"&&N.type==="file")var M=hh;else if(sc(N))if(nc)M=gh;else{M=mh;var B=xh}else(E=N.nodeName)&&E.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(M=fh);if(M&&(M=M(e,y))){tc(k,M,t,w);break e}B&&B(e,N,y),e==="focusout"&&(B=N._wrapperState)&&B.controlled&&N.type==="number"&&$a(N,"number",N.value)}switch(B=y?Hs(y):window,e){case"focusin":(sc(B)||B.contentEditable==="true")&&(Bs=B,vi=y,Rt=null);break;case"focusout":Rt=vi=Bs=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,uc(k,t,w);break;case"selectionchange":if(jh)break;case"keydown":case"keyup":uc(k,t,w)}var W;if(xi)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Fs?ec(e,t)&&($="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&($="onCompositionStart");$&&(Xo&&t.locale!=="ko"&&(Fs||$!=="onCompositionStart"?$==="onCompositionEnd"&&Fs&&(W=qo()):(Jr=w,oi="value"in Jr?Jr.value:Jr.textContent,Fs=!0)),B=En(y,$),0<B.length&&($=new Yo($,e,null,t,w),k.push({event:$,listeners:B}),W?$.data=W:(W=rc(t),W!==null&&($.data=W)))),(W=oh?ch(e,t):dh(e,t))&&(y=En(y,"onBeforeInput"),0<y.length&&(w=new Yo("onBeforeInput","beforeinput",null,t,w),k.push({event:w,listeners:y}),w.data=W))}bc(k,s)})}function Mt(e,s,t){return{instance:e,listener:s,currentTarget:t}}function En(e,s){for(var t=s+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=gt(e,t),l!=null&&n.unshift(Mt(e,l,i)),l=gt(e,s),l!=null&&n.push(Mt(e,l,i))),e=e.return}return n}function Us(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wc(e,s,t,n,i){for(var l=s._reactName,d=[];t!==null&&t!==n;){var u=t,h=u.alternate,y=u.stateNode;if(h!==null&&h===n)break;u.tag===5&&y!==null&&(u=y,i?(h=gt(t,l),h!=null&&d.unshift(Mt(t,h,u))):i||(h=gt(t,l),h!=null&&d.push(Mt(t,h,u)))),t=t.return}d.length!==0&&e.push({event:s,listeners:d})}var kh=/\r\n?/g,Sh=/\u0000|\uFFFD/g;function kc(e){return(typeof e=="string"?e:""+e).replace(kh,`
`).replace(Sh,"")}function Ln(e,s,t){if(s=kc(s),kc(e)!==s&&t)throw Error(o(425))}function Pn(){}var Si=null,Ci=null;function Ti(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var zi=typeof setTimeout=="function"?setTimeout:void 0,Ch=typeof clearTimeout=="function"?clearTimeout:void 0,Sc=typeof Promise=="function"?Promise:void 0,Th=typeof queueMicrotask=="function"?queueMicrotask:typeof Sc!="undefined"?function(e){return Sc.resolve(null).then(e).catch(zh)}:zi;function zh(e){setTimeout(function(){throw e})}function Ii(e,s){var t=s,n=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(n===0){e.removeChild(i),Ct(s);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=i}while(t);Ct(s)}function es(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return e}function Cc(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(s===0)return e;s--}else t==="/$"&&s++}e=e.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Pr="__reactFiber$"+$s,Dt="__reactProps$"+$s,Fr="__reactContainer$"+$s,Ei="__reactEvents$"+$s,Ih="__reactListeners$"+$s,Eh="__reactHandles$"+$s;function gs(e){var s=e[Pr];if(s)return s;for(var t=e.parentNode;t;){if(s=t[Fr]||t[Pr]){if(t=s.alternate,s.child!==null||t!==null&&t.child!==null)for(e=Cc(e);e!==null;){if(t=e[Pr])return t;e=Cc(e)}return s}e=t,t=e.parentNode}return null}function Ot(e){return e=e[Pr]||e[Fr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Hs(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function Rn(e){return e[Dt]||null}var Li=[],Qs=-1;function rs(e){return{current:e}}function je(e){0>Qs||(e.current=Li[Qs],Li[Qs]=null,Qs--)}function ge(e,s){Qs++,Li[Qs]=e.current,e.current=s}var ss={},Ue=rs(ss),Ke=rs(!1),vs=ss;function qs(e,s){var t=e.type.contextTypes;if(!t)return ss;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===s)return n.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=s[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(e){return e=e.childContextTypes,e!=null}function _n(){je(Ke),je(Ue)}function Tc(e,s,t){if(Ue.current!==ss)throw Error(o(168));ge(Ue,s),ge(Ke,t)}function zc(e,s,t){var n=e.stateNode;if(s=s.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var i in n)if(!(i in s))throw Error(o(108,ue(e)||"Unknown",i));return I({},t,n)}function An(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ss,vs=Ue.current,ge(Ue,e),ge(Ke,Ke.current),!0}function Ic(e,s,t){var n=e.stateNode;if(!n)throw Error(o(169));t?(e=zc(e,s,vs),n.__reactInternalMemoizedMergedChildContext=e,je(Ke),je(Ue),ge(Ue,e)):je(Ke),ge(Ke,t)}var Br=null,Mn=!1,Pi=!1;function Ec(e){Br===null?Br=[e]:Br.push(e)}function Lh(e){Mn=!0,Ec(e)}function ts(){if(!Pi&&Br!==null){Pi=!0;var e=0,s=me;try{var t=Br;for(me=1;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}Br=null,Mn=!1}catch(i){throw Br!==null&&(Br=Br.slice(e+1)),Po(ei,ts),i}finally{me=s,Pi=!1}}return null}var Vs=[],Gs=0,Dn=null,On=0,ur=[],hr=0,ys=null,Wr=1,Ur="";function js(e,s){Vs[Gs++]=On,Vs[Gs++]=Dn,Dn=e,On=s}function Lc(e,s,t){ur[hr++]=Wr,ur[hr++]=Ur,ur[hr++]=ys,ys=e;var n=Wr;e=Ur;var i=32-Nr(n)-1;n&=~(1<<i),t+=1;var l=32-Nr(s)+i;if(30<l){var d=i-i%5;l=(n&(1<<d)-1).toString(32),n>>=d,i-=d,Wr=1<<32-Nr(s)+i|t<<i|n,Ur=l+e}else Wr=1<<l|t<<i|n,Ur=e}function Ri(e){e.return!==null&&(js(e,1),Lc(e,1,0))}function _i(e){for(;e===Dn;)Dn=Vs[--Gs],Vs[Gs]=null,On=Vs[--Gs],Vs[Gs]=null;for(;e===ys;)ys=ur[--hr],ur[hr]=null,Ur=ur[--hr],ur[hr]=null,Wr=ur[--hr],ur[hr]=null}var ir=null,lr=null,Ne=!1,kr=null;function Pc(e,s){var t=gr(5,null,null,0);t.elementType="DELETED",t.stateNode=s,t.return=e,s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)}function Rc(e,s){switch(e.tag){case 5:var t=e.type;return s=s.nodeType!==1||t.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(e.stateNode=s,ir=e,lr=es(s.firstChild),!0):!1;case 6:return s=e.pendingProps===""||s.nodeType!==3?null:s,s!==null?(e.stateNode=s,ir=e,lr=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(t=ys!==null?{id:Wr,overflow:Ur}:null,e.memoizedState={dehydrated:s,treeContext:t,retryLane:1073741824},t=gr(18,null,null,0),t.stateNode=s,t.return=e,e.child=t,ir=e,lr=null,!0):!1;default:return!1}}function Ai(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mi(e){if(Ne){var s=lr;if(s){var t=s;if(!Rc(e,s)){if(Ai(e))throw Error(o(418));s=es(t.nextSibling);var n=ir;s&&Rc(e,s)?Pc(n,t):(e.flags=e.flags&-4097|2,Ne=!1,ir=e)}}else{if(Ai(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ne=!1,ir=e}}}function _c(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ir=e}function Fn(e){if(e!==ir)return!1;if(!Ne)return _c(e),Ne=!0,!1;var s;if((s=e.tag!==3)&&!(s=e.tag!==5)&&(s=e.type,s=s!=="head"&&s!=="body"&&!Ti(e.type,e.memoizedProps)),s&&(s=lr)){if(Ai(e))throw Ac(),Error(o(418));for(;s;)Pc(e,s),s=es(s.nextSibling)}if(_c(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,s=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(s===0){lr=es(e.nextSibling);break e}s--}else t!=="$"&&t!=="$!"&&t!=="$?"||s++}e=e.nextSibling}lr=null}}else lr=ir?es(e.stateNode.nextSibling):null;return!0}function Ac(){for(var e=lr;e;)e=es(e.nextSibling)}function Ys(){lr=ir=null,Ne=!1}function Di(e){kr===null?kr=[e]:kr.push(e)}var Ph=ee.ReactCurrentBatchConfig;function Ft(e,s,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(o(309));var n=t.stateNode}if(!n)throw Error(o(147,e));var i=n,l=""+e;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===l?s.ref:(s=function(d){var u=i.refs;d===null?delete u[l]:u[l]=d},s._stringRef=l,s)}if(typeof e!="string")throw Error(o(284));if(!t._owner)throw Error(o(290,e))}return e}function Bn(e,s){throw e=Object.prototype.toString.call(s),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e))}function Mc(e){var s=e._init;return s(e._payload)}function Dc(e){function s(f,x){if(e){var v=f.deletions;v===null?(f.deletions=[x],f.flags|=16):v.push(x)}}function t(f,x){if(!e)return null;for(;x!==null;)s(f,x),x=x.sibling;return null}function n(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function i(f,x){return f=ps(f,x),f.index=0,f.sibling=null,f}function l(f,x,v){return f.index=v,e?(v=f.alternate,v!==null?(v=v.index,v<x?(f.flags|=2,x):v):(f.flags|=2,x)):(f.flags|=1048576,x)}function d(f){return e&&f.alternate===null&&(f.flags|=2),f}function u(f,x,v,S){return x===null||x.tag!==6?(x=zl(v,f.mode,S),x.return=f,x):(x=i(x,v),x.return=f,x)}function h(f,x,v,S){var M=v.type;return M===U?w(f,x,v.props.children,S,v.key):x!==null&&(x.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===We&&Mc(M)===x.type)?(S=i(x,v.props),S.ref=Ft(f,x,v),S.return=f,S):(S=da(v.type,v.key,v.props,null,f.mode,S),S.ref=Ft(f,x,v),S.return=f,S)}function y(f,x,v,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Il(v,f.mode,S),x.return=f,x):(x=i(x,v.children||[]),x.return=f,x)}function w(f,x,v,S,M){return x===null||x.tag!==7?(x=zs(v,f.mode,S,M),x.return=f,x):(x=i(x,v),x.return=f,x)}function k(f,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=zl(""+x,f.mode,v),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case pe:return v=da(x.type,x.key,x.props,null,f.mode,v),v.ref=Ft(f,null,x),v.return=f,v;case Y:return x=Il(x,f.mode,v),x.return=f,x;case We:var S=x._init;return k(f,S(x._payload),v)}if(xt(x)||D(x))return x=zs(x,f.mode,v,null),x.return=f,x;Bn(f,x)}return null}function N(f,x,v,S){var M=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return M!==null?null:u(f,x,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case pe:return v.key===M?h(f,x,v,S):null;case Y:return v.key===M?y(f,x,v,S):null;case We:return M=v._init,N(f,x,M(v._payload),S)}if(xt(v)||D(v))return M!==null?null:w(f,x,v,S,null);Bn(f,v)}return null}function E(f,x,v,S,M){if(typeof S=="string"&&S!==""||typeof S=="number")return f=f.get(v)||null,u(x,f,""+S,M);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pe:return f=f.get(S.key===null?v:S.key)||null,h(x,f,S,M);case Y:return f=f.get(S.key===null?v:S.key)||null,y(x,f,S,M);case We:var B=S._init;return E(f,x,v,B(S._payload),M)}if(xt(S)||D(S))return f=f.get(v)||null,w(x,f,S,M,null);Bn(x,S)}return null}function R(f,x,v,S){for(var M=null,B=null,W=x,$=x=0,Ae=null;W!==null&&$<v.length;$++){W.index>$?(Ae=W,W=null):Ae=W.sibling;var de=N(f,W,v[$],S);if(de===null){W===null&&(W=Ae);break}e&&W&&de.alternate===null&&s(f,W),x=l(de,x,$),B===null?M=de:B.sibling=de,B=de,W=Ae}if($===v.length)return t(f,W),Ne&&js(f,$),M;if(W===null){for(;$<v.length;$++)W=k(f,v[$],S),W!==null&&(x=l(W,x,$),B===null?M=W:B.sibling=W,B=W);return Ne&&js(f,$),M}for(W=n(f,W);$<v.length;$++)Ae=E(W,f,$,v[$],S),Ae!==null&&(e&&Ae.alternate!==null&&W.delete(Ae.key===null?$:Ae.key),x=l(Ae,x,$),B===null?M=Ae:B.sibling=Ae,B=Ae);return e&&W.forEach(function(us){return s(f,us)}),Ne&&js(f,$),M}function A(f,x,v,S){var M=D(v);if(typeof M!="function")throw Error(o(150));if(v=M.call(v),v==null)throw Error(o(151));for(var B=M=null,W=x,$=x=0,Ae=null,de=v.next();W!==null&&!de.done;$++,de=v.next()){W.index>$?(Ae=W,W=null):Ae=W.sibling;var us=N(f,W,de.value,S);if(us===null){W===null&&(W=Ae);break}e&&W&&us.alternate===null&&s(f,W),x=l(us,x,$),B===null?M=us:B.sibling=us,B=us,W=Ae}if(de.done)return t(f,W),Ne&&js(f,$),M;if(W===null){for(;!de.done;$++,de=v.next())de=k(f,de.value,S),de!==null&&(x=l(de,x,$),B===null?M=de:B.sibling=de,B=de);return Ne&&js(f,$),M}for(W=n(f,W);!de.done;$++,de=v.next())de=E(W,f,$,de.value,S),de!==null&&(e&&de.alternate!==null&&W.delete(de.key===null?$:de.key),x=l(de,x,$),B===null?M=de:B.sibling=de,B=de);return e&&W.forEach(function(px){return s(f,px)}),Ne&&js(f,$),M}function Te(f,x,v,S){if(typeof v=="object"&&v!==null&&v.type===U&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case pe:e:{for(var M=v.key,B=x;B!==null;){if(B.key===M){if(M=v.type,M===U){if(B.tag===7){t(f,B.sibling),x=i(B,v.props.children),x.return=f,f=x;break e}}else if(B.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===We&&Mc(M)===B.type){t(f,B.sibling),x=i(B,v.props),x.ref=Ft(f,B,v),x.return=f,f=x;break e}t(f,B);break}else s(f,B);B=B.sibling}v.type===U?(x=zs(v.props.children,f.mode,S,v.key),x.return=f,f=x):(S=da(v.type,v.key,v.props,null,f.mode,S),S.ref=Ft(f,x,v),S.return=f,f=S)}return d(f);case Y:e:{for(B=v.key;x!==null;){if(x.key===B)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){t(f,x.sibling),x=i(x,v.children||[]),x.return=f,f=x;break e}else{t(f,x);break}else s(f,x);x=x.sibling}x=Il(v,f.mode,S),x.return=f,f=x}return d(f);case We:return B=v._init,Te(f,x,B(v._payload),S)}if(xt(v))return R(f,x,v,S);if(D(v))return A(f,x,v,S);Bn(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(t(f,x.sibling),x=i(x,v),x.return=f,f=x):(t(f,x),x=zl(v,f.mode,S),x.return=f,f=x),d(f)):t(f,x)}return Te}var Ks=Dc(!0),Oc=Dc(!1),Wn=rs(null),Un=null,Xs=null,Oi=null;function Fi(){Oi=Xs=Un=null}function Bi(e){var s=Wn.current;je(Wn),e._currentValue=s}function Wi(e,s,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,n!==null&&(n.childLanes|=s)):n!==null&&(n.childLanes&s)!==s&&(n.childLanes|=s),e===t)break;e=e.return}}function Js(e,s){Un=e,Oi=Xs=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&s)!==0&&(Je=!0),e.firstContext=null)}function xr(e){var s=e._currentValue;if(Oi!==e)if(e={context:e,memoizedValue:s,next:null},Xs===null){if(Un===null)throw Error(o(308));Xs=e,Un.dependencies={lanes:0,firstContext:e}}else Xs=Xs.next=e;return s}var bs=null;function Ui(e){bs===null?bs=[e]:bs.push(e)}function Fc(e,s,t,n){var i=s.interleaved;return i===null?(t.next=t,Ui(s)):(t.next=i.next,i.next=t),s.interleaved=t,$r(e,n)}function $r(e,s){e.lanes|=s;var t=e.alternate;for(t!==null&&(t.lanes|=s),t=e,e=e.return;e!==null;)e.childLanes|=s,t=e.alternate,t!==null&&(t.childLanes|=s),t=e,e=e.return;return t.tag===3?t.stateNode:null}var ns=!1;function $i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bc(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Hr(e,s){return{eventTime:e,lane:s,tag:0,payload:null,callback:null,next:null}}function as(e,s,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(oe&2)!==0){var i=n.pending;return i===null?s.next=s:(s.next=i.next,i.next=s),n.pending=s,$r(e,t)}return i=n.interleaved,i===null?(s.next=s,Ui(n)):(s.next=i.next,i.next=s),n.interleaved=s,$r(e,t)}function $n(e,s,t){if(s=s.updateQueue,s!==null&&(s=s.shared,(t&4194240)!==0)){var n=s.lanes;n&=e.pendingLanes,t|=n,s.lanes=t,ti(e,t)}}function Wc(e,s){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=d:l=l.next=d,t=t.next}while(t!==null);l===null?i=l=s:l=l.next=s}else i=l=s;t={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=s:e.next=s,t.lastBaseUpdate=s}function Hn(e,s,t,n){var i=e.updateQueue;ns=!1;var l=i.firstBaseUpdate,d=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var h=u,y=h.next;h.next=null,d===null?l=y:d.next=y,d=h;var w=e.alternate;w!==null&&(w=w.updateQueue,u=w.lastBaseUpdate,u!==d&&(u===null?w.firstBaseUpdate=y:u.next=y,w.lastBaseUpdate=h))}if(l!==null){var k=i.baseState;d=0,w=y=h=null,u=l;do{var N=u.lane,E=u.eventTime;if((n&N)===N){w!==null&&(w=w.next={eventTime:E,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var R=e,A=u;switch(N=s,E=t,A.tag){case 1:if(R=A.payload,typeof R=="function"){k=R.call(E,k,N);break e}k=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=A.payload,N=typeof R=="function"?R.call(E,k,N):R,N==null)break e;k=I({},k,N);break e;case 2:ns=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,N=i.effects,N===null?i.effects=[u]:N.push(u))}else E={eventTime:E,lane:N,tag:u.tag,payload:u.payload,callback:u.callback,next:null},w===null?(y=w=E,h=k):w=w.next=E,d|=N;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;N=u,u=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);if(w===null&&(h=k),i.baseState=h,i.firstBaseUpdate=y,i.lastBaseUpdate=w,s=i.shared.interleaved,s!==null){i=s;do d|=i.lane,i=i.next;while(i!==s)}else l===null&&(i.shared.lanes=0);ks|=d,e.lanes=d,e.memoizedState=k}}function Uc(e,s,t){if(e=s.effects,s.effects=null,e!==null)for(s=0;s<e.length;s++){var n=e[s],i=n.callback;if(i!==null){if(n.callback=null,n=t,typeof i!="function")throw Error(o(191,i));i.call(n)}}}var Bt={},Rr=rs(Bt),Wt=rs(Bt),Ut=rs(Bt);function Ns(e){if(e===Bt)throw Error(o(174));return e}function Hi(e,s){switch(ge(Ut,s),ge(Wt,e),ge(Rr,Bt),e=s.nodeType,e){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Qa(null,"");break;default:e=e===8?s.parentNode:s,s=e.namespaceURI||null,e=e.tagName,s=Qa(s,e)}je(Rr),ge(Rr,s)}function Zs(){je(Rr),je(Wt),je(Ut)}function $c(e){Ns(Ut.current);var s=Ns(Rr.current),t=Qa(s,e.type);s!==t&&(ge(Wt,e),ge(Rr,t))}function Qi(e){Wt.current===e&&(je(Rr),je(Wt))}var we=rs(0);function Qn(e){for(var s=e;s!==null;){if(s.tag===13){var t=s.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var qi=[];function Vi(){for(var e=0;e<qi.length;e++)qi[e]._workInProgressVersionPrimary=null;qi.length=0}var qn=ee.ReactCurrentDispatcher,Gi=ee.ReactCurrentBatchConfig,ws=0,ke=null,Le=null,Re=null,Vn=!1,$t=!1,Ht=0,Rh=0;function $e(){throw Error(o(321))}function Yi(e,s){if(s===null)return!1;for(var t=0;t<s.length&&t<e.length;t++)if(!wr(e[t],s[t]))return!1;return!0}function Ki(e,s,t,n,i,l){if(ws=l,ke=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,qn.current=e===null||e.memoizedState===null?Dh:Oh,e=t(n,i),$t){l=0;do{if($t=!1,Ht=0,25<=l)throw Error(o(301));l+=1,Re=Le=null,s.updateQueue=null,qn.current=Fh,e=t(n,i)}while($t)}if(qn.current=Kn,s=Le!==null&&Le.next!==null,ws=0,Re=Le=ke=null,Vn=!1,s)throw Error(o(300));return e}function Xi(){var e=Ht!==0;return Ht=0,e}function _r(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ke.memoizedState=Re=e:Re=Re.next=e,Re}function mr(){if(Le===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var s=Re===null?ke.memoizedState:Re.next;if(s!==null)Re=s,Le=e;else{if(e===null)throw Error(o(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Re===null?ke.memoizedState=Re=e:Re=Re.next=e}return Re}function Qt(e,s){return typeof s=="function"?s(e):s}function Ji(e){var s=mr(),t=s.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var n=Le,i=n.baseQueue,l=t.pending;if(l!==null){if(i!==null){var d=i.next;i.next=l.next,l.next=d}n.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,n=n.baseState;var u=d=null,h=null,y=l;do{var w=y.lane;if((ws&w)===w)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),n=y.hasEagerState?y.eagerState:e(n,y.action);else{var k={lane:w,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(u=h=k,d=n):h=h.next=k,ke.lanes|=w,ks|=w}y=y.next}while(y!==null&&y!==l);h===null?d=n:h.next=u,wr(n,s.memoizedState)||(Je=!0),s.memoizedState=n,s.baseState=d,s.baseQueue=h,t.lastRenderedState=n}if(e=t.interleaved,e!==null){i=e;do l=i.lane,ke.lanes|=l,ks|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[s.memoizedState,t.dispatch]}function Zi(e){var s=mr(),t=s.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var n=t.dispatch,i=t.pending,l=s.memoizedState;if(i!==null){t.pending=null;var d=i=i.next;do l=e(l,d.action),d=d.next;while(d!==i);wr(l,s.memoizedState)||(Je=!0),s.memoizedState=l,s.baseQueue===null&&(s.baseState=l),t.lastRenderedState=l}return[l,n]}function Hc(){}function Qc(e,s){var t=ke,n=mr(),i=s(),l=!wr(n.memoizedState,i);if(l&&(n.memoizedState=i,Je=!0),n=n.queue,el(Gc.bind(null,t,n,e),[e]),n.getSnapshot!==s||l||Re!==null&&Re.memoizedState.tag&1){if(t.flags|=2048,qt(9,Vc.bind(null,t,n,i,s),void 0,null),_e===null)throw Error(o(349));(ws&30)!==0||qc(t,s,i)}return i}function qc(e,s,t){e.flags|=16384,e={getSnapshot:s,value:t},s=ke.updateQueue,s===null?(s={lastEffect:null,stores:null},ke.updateQueue=s,s.stores=[e]):(t=s.stores,t===null?s.stores=[e]:t.push(e))}function Vc(e,s,t,n){s.value=t,s.getSnapshot=n,Yc(s)&&Kc(e)}function Gc(e,s,t){return t(function(){Yc(s)&&Kc(e)})}function Yc(e){var s=e.getSnapshot;e=e.value;try{var t=s();return!wr(e,t)}catch{return!0}}function Kc(e){var s=$r(e,1);s!==null&&zr(s,e,1,-1)}function Xc(e){var s=_r();return typeof e=="function"&&(e=e()),s.memoizedState=s.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qt,lastRenderedState:e},s.queue=e,e=e.dispatch=Mh.bind(null,ke,e),[s.memoizedState,e]}function qt(e,s,t,n){return e={tag:e,create:s,destroy:t,deps:n,next:null},s=ke.updateQueue,s===null?(s={lastEffect:null,stores:null},ke.updateQueue=s,s.lastEffect=e.next=e):(t=s.lastEffect,t===null?s.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,s.lastEffect=e)),e}function Jc(){return mr().memoizedState}function Gn(e,s,t,n){var i=_r();ke.flags|=e,i.memoizedState=qt(1|s,t,void 0,n===void 0?null:n)}function Yn(e,s,t,n){var i=mr();n=n===void 0?null:n;var l=void 0;if(Le!==null){var d=Le.memoizedState;if(l=d.destroy,n!==null&&Yi(n,d.deps)){i.memoizedState=qt(s,t,l,n);return}}ke.flags|=e,i.memoizedState=qt(1|s,t,l,n)}function Zc(e,s){return Gn(8390656,8,e,s)}function el(e,s){return Yn(2048,8,e,s)}function ed(e,s){return Yn(4,2,e,s)}function rd(e,s){return Yn(4,4,e,s)}function sd(e,s){if(typeof s=="function")return e=e(),s(e),function(){s(null)};if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function td(e,s,t){return t=t!=null?t.concat([e]):null,Yn(4,4,sd.bind(null,s,e),t)}function rl(){}function nd(e,s){var t=mr();s=s===void 0?null:s;var n=t.memoizedState;return n!==null&&s!==null&&Yi(s,n[1])?n[0]:(t.memoizedState=[e,s],e)}function ad(e,s){var t=mr();s=s===void 0?null:s;var n=t.memoizedState;return n!==null&&s!==null&&Yi(s,n[1])?n[0]:(e=e(),t.memoizedState=[e,s],e)}function id(e,s,t){return(ws&21)===0?(e.baseState&&(e.baseState=!1,Je=!0),e.memoizedState=t):(wr(t,s)||(t=Mo(),ke.lanes|=t,ks|=t,e.baseState=!0),s)}function _h(e,s){var t=me;me=t!==0&&4>t?t:4,e(!0);var n=Gi.transition;Gi.transition={};try{e(!1),s()}finally{me=t,Gi.transition=n}}function ld(){return mr().memoizedState}function Ah(e,s,t){var n=cs(e);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},od(e))cd(s,t);else if(t=Fc(e,s,t,n),t!==null){var i=Ge();zr(t,e,n,i),dd(t,s,n)}}function Mh(e,s,t){var n=cs(e),i={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(od(e))cd(s,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=s.lastRenderedReducer,l!==null))try{var d=s.lastRenderedState,u=l(d,t);if(i.hasEagerState=!0,i.eagerState=u,wr(u,d)){var h=s.interleaved;h===null?(i.next=i,Ui(s)):(i.next=h.next,h.next=i),s.interleaved=i;return}}catch{}finally{}t=Fc(e,s,i,n),t!==null&&(i=Ge(),zr(t,e,n,i),dd(t,s,n))}}function od(e){var s=e.alternate;return e===ke||s!==null&&s===ke}function cd(e,s){$t=Vn=!0;var t=e.pending;t===null?s.next=s:(s.next=t.next,t.next=s),e.pending=s}function dd(e,s,t){if((t&4194240)!==0){var n=s.lanes;n&=e.pendingLanes,t|=n,s.lanes=t,ti(e,t)}}var Kn={readContext:xr,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},Dh={readContext:xr,useCallback:function(e,s){return _r().memoizedState=[e,s===void 0?null:s],e},useContext:xr,useEffect:Zc,useImperativeHandle:function(e,s,t){return t=t!=null?t.concat([e]):null,Gn(4194308,4,sd.bind(null,s,e),t)},useLayoutEffect:function(e,s){return Gn(4194308,4,e,s)},useInsertionEffect:function(e,s){return Gn(4,2,e,s)},useMemo:function(e,s){var t=_r();return s=s===void 0?null:s,e=e(),t.memoizedState=[e,s],e},useReducer:function(e,s,t){var n=_r();return s=t!==void 0?t(s):s,n.memoizedState=n.baseState=s,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},n.queue=e,e=e.dispatch=Ah.bind(null,ke,e),[n.memoizedState,e]},useRef:function(e){var s=_r();return e={current:e},s.memoizedState=e},useState:Xc,useDebugValue:rl,useDeferredValue:function(e){return _r().memoizedState=e},useTransition:function(){var e=Xc(!1),s=e[0];return e=_h.bind(null,e[1]),_r().memoizedState=e,[s,e]},useMutableSource:function(){},useSyncExternalStore:function(e,s,t){var n=ke,i=_r();if(Ne){if(t===void 0)throw Error(o(407));t=t()}else{if(t=s(),_e===null)throw Error(o(349));(ws&30)!==0||qc(n,s,t)}i.memoizedState=t;var l={value:t,getSnapshot:s};return i.queue=l,Zc(Gc.bind(null,n,l,e),[e]),n.flags|=2048,qt(9,Vc.bind(null,n,l,t,s),void 0,null),t},useId:function(){var e=_r(),s=_e.identifierPrefix;if(Ne){var t=Ur,n=Wr;t=(n&~(1<<32-Nr(n)-1)).toString(32)+t,s=":"+s+"R"+t,t=Ht++,0<t&&(s+="H"+t.toString(32)),s+=":"}else t=Rh++,s=":"+s+"r"+t.toString(32)+":";return e.memoizedState=s},unstable_isNewReconciler:!1},Oh={readContext:xr,useCallback:nd,useContext:xr,useEffect:el,useImperativeHandle:td,useInsertionEffect:ed,useLayoutEffect:rd,useMemo:ad,useReducer:Ji,useRef:Jc,useState:function(){return Ji(Qt)},useDebugValue:rl,useDeferredValue:function(e){var s=mr();return id(s,Le.memoizedState,e)},useTransition:function(){var e=Ji(Qt)[0],s=mr().memoizedState;return[e,s]},useMutableSource:Hc,useSyncExternalStore:Qc,useId:ld,unstable_isNewReconciler:!1},Fh={readContext:xr,useCallback:nd,useContext:xr,useEffect:el,useImperativeHandle:td,useInsertionEffect:ed,useLayoutEffect:rd,useMemo:ad,useReducer:Zi,useRef:Jc,useState:function(){return Zi(Qt)},useDebugValue:rl,useDeferredValue:function(e){var s=mr();return Le===null?s.memoizedState=e:id(s,Le.memoizedState,e)},useTransition:function(){var e=Zi(Qt)[0],s=mr().memoizedState;return[e,s]},useMutableSource:Hc,useSyncExternalStore:Qc,useId:ld,unstable_isNewReconciler:!1};function Sr(e,s){if(e&&e.defaultProps){s=I({},s),e=e.defaultProps;for(var t in e)s[t]===void 0&&(s[t]=e[t]);return s}return s}function sl(e,s,t,n){s=e.memoizedState,t=t(n,s),t=t==null?s:I({},s,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Xn={isMounted:function(e){return(e=e._reactInternals)?fs(e)===e:!1},enqueueSetState:function(e,s,t){e=e._reactInternals;var n=Ge(),i=cs(e),l=Hr(n,i);l.payload=s,t!=null&&(l.callback=t),s=as(e,l,i),s!==null&&(zr(s,e,i,n),$n(s,e,i))},enqueueReplaceState:function(e,s,t){e=e._reactInternals;var n=Ge(),i=cs(e),l=Hr(n,i);l.tag=1,l.payload=s,t!=null&&(l.callback=t),s=as(e,l,i),s!==null&&(zr(s,e,i,n),$n(s,e,i))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var t=Ge(),n=cs(e),i=Hr(t,n);i.tag=2,s!=null&&(i.callback=s),s=as(e,i,n),s!==null&&(zr(s,e,n,t),$n(s,e,n))}};function pd(e,s,t,n,i,l,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,d):s.prototype&&s.prototype.isPureReactComponent?!Pt(t,n)||!Pt(i,l):!0}function ud(e,s,t){var n=!1,i=ss,l=s.contextType;return typeof l=="object"&&l!==null?l=xr(l):(i=Xe(s)?vs:Ue.current,n=s.contextTypes,l=(n=n!=null)?qs(e,i):ss),s=new s(t,l),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Xn,e.stateNode=s,s._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),s}function hd(e,s,t,n){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(t,n),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(t,n),s.state!==e&&Xn.enqueueReplaceState(s,s.state,null)}function tl(e,s,t,n){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},$i(e);var l=s.contextType;typeof l=="object"&&l!==null?i.context=xr(l):(l=Xe(s)?vs:Ue.current,i.context=qs(e,l)),i.state=e.memoizedState,l=s.getDerivedStateFromProps,typeof l=="function"&&(sl(e,s,l,t),i.state=e.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&Xn.enqueueReplaceState(i,i.state,null),Hn(e,t,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function et(e,s){try{var t="",n=s;do t+=te(n),n=n.return;while(n);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:s,stack:i,digest:null}}function nl(e,s,t){return{value:e,source:null,stack:t!=null?t:null,digest:s!=null?s:null}}function al(e,s){try{console.error(s.value)}catch(t){setTimeout(function(){throw t})}}var Bh=typeof WeakMap=="function"?WeakMap:Map;function xd(e,s,t){t=Hr(-1,t),t.tag=3,t.payload={element:null};var n=s.value;return t.callback=function(){na||(na=!0,jl=n),al(e,s)},t}function md(e,s,t){t=Hr(-1,t),t.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=s.value;t.payload=function(){return n(i)},t.callback=function(){al(e,s)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){al(e,s),typeof n!="function"&&(ls===null?ls=new Set([this]):ls.add(this));var d=s.stack;this.componentDidCatch(s.value,{componentStack:d!==null?d:""})}),t}function fd(e,s,t){var n=e.pingCache;if(n===null){n=e.pingCache=new Bh;var i=new Set;n.set(s,i)}else i=n.get(s),i===void 0&&(i=new Set,n.set(s,i));i.has(t)||(i.add(t),e=ex.bind(null,e,s,t),s.then(e,e))}function gd(e){do{var s;if((s=e.tag===13)&&(s=e.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return e;e=e.return}while(e!==null);return null}function vd(e,s,t,n,i){return(e.mode&1)===0?(e===s?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(s=Hr(-1,1),s.tag=2,as(t,s,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Wh=ee.ReactCurrentOwner,Je=!1;function Ve(e,s,t,n){s.child=e===null?Oc(s,null,t,n):Ks(s,e.child,t,n)}function yd(e,s,t,n,i){t=t.render;var l=s.ref;return Js(s,i),n=Ki(e,s,t,n,l,i),t=Xi(),e!==null&&!Je?(s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~i,Qr(e,s,i)):(Ne&&t&&Ri(s),s.flags|=1,Ve(e,s,n,i),s.child)}function jd(e,s,t,n,i){if(e===null){var l=t.type;return typeof l=="function"&&!Tl(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(s.tag=15,s.type=l,bd(e,s,l,n,i)):(e=da(t.type,null,n,s,s.mode,i),e.ref=s.ref,e.return=s,s.child=e)}if(l=e.child,(e.lanes&i)===0){var d=l.memoizedProps;if(t=t.compare,t=t!==null?t:Pt,t(d,n)&&e.ref===s.ref)return Qr(e,s,i)}return s.flags|=1,e=ps(l,n),e.ref=s.ref,e.return=s,s.child=e}function bd(e,s,t,n,i){if(e!==null){var l=e.memoizedProps;if(Pt(l,n)&&e.ref===s.ref)if(Je=!1,s.pendingProps=n=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Je=!0);else return s.lanes=e.lanes,Qr(e,s,i)}return il(e,s,t,n,i)}function Nd(e,s,t){var n=s.pendingProps,i=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(st,or),or|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:e,cachePool:null,transitions:null},s.updateQueue=null,ge(st,or),or|=e,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:t,ge(st,or),or|=n}else l!==null?(n=l.baseLanes|t,s.memoizedState=null):n=t,ge(st,or),or|=n;return Ve(e,s,i,t),s.child}function wd(e,s){var t=s.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(s.flags|=512,s.flags|=2097152)}function il(e,s,t,n,i){var l=Xe(t)?vs:Ue.current;return l=qs(s,l),Js(s,i),t=Ki(e,s,t,n,l,i),n=Xi(),e!==null&&!Je?(s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~i,Qr(e,s,i)):(Ne&&n&&Ri(s),s.flags|=1,Ve(e,s,t,i),s.child)}function kd(e,s,t,n,i){if(Xe(t)){var l=!0;An(s)}else l=!1;if(Js(s,i),s.stateNode===null)Zn(e,s),ud(s,t,n),tl(s,t,n,i),n=!0;else if(e===null){var d=s.stateNode,u=s.memoizedProps;d.props=u;var h=d.context,y=t.contextType;typeof y=="object"&&y!==null?y=xr(y):(y=Xe(t)?vs:Ue.current,y=qs(s,y));var w=t.getDerivedStateFromProps,k=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function";k||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==n||h!==y)&&hd(s,d,n,y),ns=!1;var N=s.memoizedState;d.state=N,Hn(s,n,d,i),h=s.memoizedState,u!==n||N!==h||Ke.current||ns?(typeof w=="function"&&(sl(s,t,w,n),h=s.memoizedState),(u=ns||pd(s,t,u,n,N,h,y))?(k||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(s.flags|=4194308)):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=n,s.memoizedState=h),d.props=n,d.state=h,d.context=y,n=u):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),n=!1)}else{d=s.stateNode,Bc(e,s),u=s.memoizedProps,y=s.type===s.elementType?u:Sr(s.type,u),d.props=y,k=s.pendingProps,N=d.context,h=t.contextType,typeof h=="object"&&h!==null?h=xr(h):(h=Xe(t)?vs:Ue.current,h=qs(s,h));var E=t.getDerivedStateFromProps;(w=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==k||N!==h)&&hd(s,d,n,h),ns=!1,N=s.memoizedState,d.state=N,Hn(s,n,d,i);var R=s.memoizedState;u!==k||N!==R||Ke.current||ns?(typeof E=="function"&&(sl(s,t,E,n),R=s.memoizedState),(y=ns||pd(s,t,y,n,N,R,h)||!1)?(w||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,R,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,R,h)),typeof d.componentDidUpdate=="function"&&(s.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(s.flags|=1024),s.memoizedProps=n,s.memoizedState=R),d.props=n,d.state=R,d.context=h,n=y):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(s.flags|=1024),n=!1)}return ll(e,s,t,n,l,i)}function ll(e,s,t,n,i,l){wd(e,s);var d=(s.flags&128)!==0;if(!n&&!d)return i&&Ic(s,t,!1),Qr(e,s,l);n=s.stateNode,Wh.current=s;var u=d&&typeof t.getDerivedStateFromError!="function"?null:n.render();return s.flags|=1,e!==null&&d?(s.child=Ks(s,e.child,null,l),s.child=Ks(s,null,u,l)):Ve(e,s,u,l),s.memoizedState=n.state,i&&Ic(s,t,!0),s.child}function Sd(e){var s=e.stateNode;s.pendingContext?Tc(e,s.pendingContext,s.pendingContext!==s.context):s.context&&Tc(e,s.context,!1),Hi(e,s.containerInfo)}function Cd(e,s,t,n,i){return Ys(),Di(i),s.flags|=256,Ve(e,s,t,n),s.child}var ol={dehydrated:null,treeContext:null,retryLane:0};function cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Td(e,s,t){var n=s.pendingProps,i=we.current,l=!1,d=(s.flags&128)!==0,u;if((u=d)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,s.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(we,i&1),e===null)return Mi(s),e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((s.mode&1)===0?s.lanes=1:e.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(d=n.children,e=n.fallback,l?(n=s.mode,l=s.child,d={mode:"hidden",children:d},(n&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=d):l=pa(d,n,0,null),e=zs(e,n,t,null),l.return=s,e.return=s,l.sibling=e,s.child=l,s.child.memoizedState=cl(t),s.memoizedState=ol,e):dl(s,d));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return Uh(e,s,d,n,u,i,t);if(l){l=n.fallback,d=s.mode,i=e.child,u=i.sibling;var h={mode:"hidden",children:n.children};return(d&1)===0&&s.child!==i?(n=s.child,n.childLanes=0,n.pendingProps=h,s.deletions=null):(n=ps(i,h),n.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=ps(u,l):(l=zs(l,d,t,null),l.flags|=2),l.return=s,n.return=s,n.sibling=l,s.child=n,n=l,l=s.child,d=e.child.memoizedState,d=d===null?cl(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},l.memoizedState=d,l.childLanes=e.childLanes&~t,s.memoizedState=ol,n}return l=e.child,e=l.sibling,n=ps(l,{mode:"visible",children:n.children}),(s.mode&1)===0&&(n.lanes=t),n.return=s,n.sibling=null,e!==null&&(t=s.deletions,t===null?(s.deletions=[e],s.flags|=16):t.push(e)),s.child=n,s.memoizedState=null,n}function dl(e,s){return s=pa({mode:"visible",children:s},e.mode,0,null),s.return=e,e.child=s}function Jn(e,s,t,n){return n!==null&&Di(n),Ks(s,e.child,null,t),e=dl(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function Uh(e,s,t,n,i,l,d){if(t)return s.flags&256?(s.flags&=-257,n=nl(Error(o(422))),Jn(e,s,d,n)):s.memoizedState!==null?(s.child=e.child,s.flags|=128,null):(l=n.fallback,i=s.mode,n=pa({mode:"visible",children:n.children},i,0,null),l=zs(l,i,d,null),l.flags|=2,n.return=s,l.return=s,n.sibling=l,s.child=n,(s.mode&1)!==0&&Ks(s,e.child,null,d),s.child.memoizedState=cl(d),s.memoizedState=ol,l);if((s.mode&1)===0)return Jn(e,s,d,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var u=n.dgst;return n=u,l=Error(o(419)),n=nl(l,n,void 0),Jn(e,s,d,n)}if(u=(d&e.childLanes)!==0,Je||u){if(n=_e,n!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|d))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,$r(e,i),zr(n,e,i,-1))}return Cl(),n=nl(Error(o(421))),Jn(e,s,d,n)}return i.data==="$?"?(s.flags|=128,s.child=e.child,s=rx.bind(null,e),i._reactRetry=s,null):(e=l.treeContext,lr=es(i.nextSibling),ir=s,Ne=!0,kr=null,e!==null&&(ur[hr++]=Wr,ur[hr++]=Ur,ur[hr++]=ys,Wr=e.id,Ur=e.overflow,ys=s),s=dl(s,n.children),s.flags|=4096,s)}function zd(e,s,t){e.lanes|=s;var n=e.alternate;n!==null&&(n.lanes|=s),Wi(e.return,s,t)}function pl(e,s,t,n,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:i}:(l.isBackwards=s,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=t,l.tailMode=i)}function Id(e,s,t){var n=s.pendingProps,i=n.revealOrder,l=n.tail;if(Ve(e,s,n.children,t),n=we.current,(n&2)!==0)n=n&1|2,s.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zd(e,t,s);else if(e.tag===19)zd(e,t,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ge(we,n),(s.mode&1)===0)s.memoizedState=null;else switch(i){case"forwards":for(t=s.child,i=null;t!==null;)e=t.alternate,e!==null&&Qn(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=s.child,s.child=null):(i=t.sibling,t.sibling=null),pl(s,!1,i,t,l);break;case"backwards":for(t=null,i=s.child,s.child=null;i!==null;){if(e=i.alternate,e!==null&&Qn(e)===null){s.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}pl(s,!0,t,null,l);break;case"together":pl(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Zn(e,s){(s.mode&1)===0&&e!==null&&(e.alternate=null,s.alternate=null,s.flags|=2)}function Qr(e,s,t){if(e!==null&&(s.dependencies=e.dependencies),ks|=s.lanes,(t&s.childLanes)===0)return null;if(e!==null&&s.child!==e.child)throw Error(o(153));if(s.child!==null){for(e=s.child,t=ps(e,e.pendingProps),s.child=t,t.return=s;e.sibling!==null;)e=e.sibling,t=t.sibling=ps(e,e.pendingProps),t.return=s;t.sibling=null}return s.child}function $h(e,s,t){switch(s.tag){case 3:Sd(s),Ys();break;case 5:$c(s);break;case 1:Xe(s.type)&&An(s);break;case 4:Hi(s,s.stateNode.containerInfo);break;case 10:var n=s.type._context,i=s.memoizedProps.value;ge(Wn,n._currentValue),n._currentValue=i;break;case 13:if(n=s.memoizedState,n!==null)return n.dehydrated!==null?(ge(we,we.current&1),s.flags|=128,null):(t&s.child.childLanes)!==0?Td(e,s,t):(ge(we,we.current&1),e=Qr(e,s,t),e!==null?e.sibling:null);ge(we,we.current&1);break;case 19:if(n=(t&s.childLanes)!==0,(e.flags&128)!==0){if(n)return Id(e,s,t);s.flags|=128}if(i=s.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(we,we.current),n)break;return null;case 22:case 23:return s.lanes=0,Nd(e,s,t)}return Qr(e,s,t)}var Ed,ul,Ld,Pd;Ed=function(e,s){for(var t=s.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break;for(;t.sibling===null;){if(t.return===null||t.return===s)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},ul=function(){},Ld=function(e,s,t,n){var i=e.memoizedProps;if(i!==n){e=s.stateNode,Ns(Rr.current);var l=null;switch(t){case"input":i=Wa(e,i),n=Wa(e,n),l=[];break;case"select":i=I({},i,{value:void 0}),n=I({},n,{value:void 0}),l=[];break;case"textarea":i=Ha(e,i),n=Ha(e,n),l=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Pn)}qa(t,n);var d;t=null;for(y in i)if(!n.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var u=i[y];for(d in u)u.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(g.hasOwnProperty(y)?l||(l=[]):(l=l||[]).push(y,null));for(y in n){var h=n[y];if(u=i!=null?i[y]:void 0,n.hasOwnProperty(y)&&h!==u&&(h!=null||u!=null))if(y==="style")if(u){for(d in u)!u.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in h)h.hasOwnProperty(d)&&u[d]!==h[d]&&(t||(t={}),t[d]=h[d])}else t||(l||(l=[]),l.push(y,t)),t=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(l=l||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(l=l||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(g.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&ye("scroll",e),l||u===h||(l=[])):(l=l||[]).push(y,h))}t&&(l=l||[]).push("style",t);var y=l;(s.updateQueue=y)&&(s.flags|=4)}},Pd=function(e,s,t,n){t!==n&&(s.flags|=4)};function Vt(e,s){if(!Ne)switch(e.tailMode){case"hidden":s=e.tail;for(var t=null;s!==null;)s.alternate!==null&&(t=s),s=s.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function He(e){var s=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(s)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=t,s}function Hh(e,s,t){var n=s.pendingProps;switch(_i(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(s),null;case 1:return Xe(s.type)&&_n(),He(s),null;case 3:return n=s.stateNode,Zs(),je(Ke),je(Ue),Vi(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Fn(s)?s.flags|=4:e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,kr!==null&&(wl(kr),kr=null))),ul(e,s),He(s),null;case 5:Qi(s);var i=Ns(Ut.current);if(t=s.type,e!==null&&s.stateNode!=null)Ld(e,s,t,n,i),e.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!n){if(s.stateNode===null)throw Error(o(166));return He(s),null}if(e=Ns(Rr.current),Fn(s)){n=s.stateNode,t=s.type;var l=s.memoizedProps;switch(n[Pr]=s,n[Dt]=l,e=(s.mode&1)!==0,t){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(i=0;i<_t.length;i++)ye(_t[i],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":uo(n,l),ye("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},ye("invalid",n);break;case"textarea":mo(n,l),ye("invalid",n)}qa(t,l),i=null;for(var d in l)if(l.hasOwnProperty(d)){var u=l[d];d==="children"?typeof u=="string"?n.textContent!==u&&(l.suppressHydrationWarning!==!0&&Ln(n.textContent,u,e),i=["children",u]):typeof u=="number"&&n.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Ln(n.textContent,u,e),i=["children",""+u]):g.hasOwnProperty(d)&&u!=null&&d==="onScroll"&&ye("scroll",n)}switch(t){case"input":Or(n),xo(n,l,!0);break;case"textarea":Or(n),go(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=Pn)}n=i,s.updateQueue=n,n!==null&&(s.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vo(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(t,{is:n.is}):(e=d.createElement(t),t==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,t),e[Pr]=s,e[Dt]=n,Ed(e,s,!1,!1),s.stateNode=e;e:{switch(d=Va(t,n),t){case"dialog":ye("cancel",e),ye("close",e),i=n;break;case"iframe":case"object":case"embed":ye("load",e),i=n;break;case"video":case"audio":for(i=0;i<_t.length;i++)ye(_t[i],e);i=n;break;case"source":ye("error",e),i=n;break;case"img":case"image":case"link":ye("error",e),ye("load",e),i=n;break;case"details":ye("toggle",e),i=n;break;case"input":uo(e,n),i=Wa(e,n),ye("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=I({},n,{value:void 0}),ye("invalid",e);break;case"textarea":mo(e,n),i=Ha(e,n),ye("invalid",e);break;default:i=n}qa(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var h=u[l];l==="style"?bo(e,h):l==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&yo(e,h)):l==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&mt(e,h):typeof h=="number"&&mt(e,""+h):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(g.hasOwnProperty(l)?h!=null&&l==="onScroll"&&ye("scroll",e):h!=null&&ae(e,l,h,d))}switch(t){case"input":Or(e),xo(e,n,!1);break;case"textarea":Or(e),go(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ie(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?_s(e,!!n.multiple,l,!1):n.defaultValue!=null&&_s(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Pn)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return He(s),null;case 6:if(e&&s.stateNode!=null)Pd(e,s,e.memoizedProps,n);else{if(typeof n!="string"&&s.stateNode===null)throw Error(o(166));if(t=Ns(Ut.current),Ns(Rr.current),Fn(s)){if(n=s.stateNode,t=s.memoizedProps,n[Pr]=s,(l=n.nodeValue!==t)&&(e=ir,e!==null))switch(e.tag){case 3:Ln(n.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ln(n.nodeValue,t,(e.mode&1)!==0)}l&&(s.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[Pr]=s,s.stateNode=n}return He(s),null;case 13:if(je(we),n=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&lr!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Ac(),Ys(),s.flags|=98560,l=!1;else if(l=Fn(s),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(o(318));if(l=s.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[Pr]=s}else Ys(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;He(s),l=!1}else kr!==null&&(wl(kr),kr=null),l=!0;if(!l)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=t,s):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(s.child.flags|=8192,(s.mode&1)!==0&&(e===null||(we.current&1)!==0?Pe===0&&(Pe=3):Cl())),s.updateQueue!==null&&(s.flags|=4),He(s),null);case 4:return Zs(),ul(e,s),e===null&&At(s.stateNode.containerInfo),He(s),null;case 10:return Bi(s.type._context),He(s),null;case 17:return Xe(s.type)&&_n(),He(s),null;case 19:if(je(we),l=s.memoizedState,l===null)return He(s),null;if(n=(s.flags&128)!==0,d=l.rendering,d===null)if(n)Vt(l,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(d=Qn(e),d!==null){for(s.flags|=128,Vt(l,!1),n=d.updateQueue,n!==null&&(s.updateQueue=n,s.flags|=4),s.subtreeFlags=0,n=t,t=s.child;t!==null;)l=t,e=n,l.flags&=14680066,d=l.alternate,d===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=d.childLanes,l.lanes=d.lanes,l.child=d.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=d.memoizedProps,l.memoizedState=d.memoizedState,l.updateQueue=d.updateQueue,l.type=d.type,e=d.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return ge(we,we.current&1|2),s.child}e=e.sibling}l.tail!==null&&Ce()>tt&&(s.flags|=128,n=!0,Vt(l,!1),s.lanes=4194304)}else{if(!n)if(e=Qn(d),e!==null){if(s.flags|=128,n=!0,t=e.updateQueue,t!==null&&(s.updateQueue=t,s.flags|=4),Vt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ne)return He(s),null}else 2*Ce()-l.renderingStartTime>tt&&t!==1073741824&&(s.flags|=128,n=!0,Vt(l,!1),s.lanes=4194304);l.isBackwards?(d.sibling=s.child,s.child=d):(t=l.last,t!==null?t.sibling=d:s.child=d,l.last=d)}return l.tail!==null?(s=l.tail,l.rendering=s,l.tail=s.sibling,l.renderingStartTime=Ce(),s.sibling=null,t=we.current,ge(we,n?t&1|2:t&1),s):(He(s),null);case 22:case 23:return Sl(),n=s.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(s.flags|=8192),n&&(s.mode&1)!==0?(or&1073741824)!==0&&(He(s),s.subtreeFlags&6&&(s.flags|=8192)):He(s),null;case 24:return null;case 25:return null}throw Error(o(156,s.tag))}function Qh(e,s){switch(_i(s),s.tag){case 1:return Xe(s.type)&&_n(),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return Zs(),je(Ke),je(Ue),Vi(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 5:return Qi(s),null;case 13:if(je(we),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(o(340));Ys()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return je(we),null;case 4:return Zs(),null;case 10:return Bi(s.type._context),null;case 22:case 23:return Sl(),null;case 24:return null;default:return null}}var ea=!1,Qe=!1,qh=typeof WeakSet=="function"?WeakSet:Set,L=null;function rt(e,s){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Se(e,s,n)}else t.current=null}function hl(e,s,t){try{t()}catch(n){Se(e,s,n)}}var Rd=!1;function Vh(e,s){if(Si=jn,e=pc(),gi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var d=0,u=-1,h=-1,y=0,w=0,k=e,N=null;r:for(;;){for(var E;k!==t||i!==0&&k.nodeType!==3||(u=d+i),k!==l||n!==0&&k.nodeType!==3||(h=d+n),k.nodeType===3&&(d+=k.nodeValue.length),(E=k.firstChild)!==null;)N=k,k=E;for(;;){if(k===e)break r;if(N===t&&++y===i&&(u=d),N===l&&++w===n&&(h=d),(E=k.nextSibling)!==null)break;k=N,N=k.parentNode}k=E}t=u===-1||h===-1?null:{start:u,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ci={focusedElem:e,selectionRange:t},jn=!1,L=s;L!==null;)if(s=L,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,L=e;else for(;L!==null;){s=L;try{var R=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var A=R.memoizedProps,Te=R.memoizedState,f=s.stateNode,x=f.getSnapshotBeforeUpdate(s.elementType===s.type?A:Sr(s.type,A),Te);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=s.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(S){Se(s,s.return,S)}if(e=s.sibling,e!==null){e.return=s.return,L=e;break}L=s.return}return R=Rd,Rd=!1,R}function Gt(e,s,t){var n=s.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&hl(s,t,l)}i=i.next}while(i!==n)}}function ra(e,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var t=s=s.next;do{if((t.tag&e)===e){var n=t.create;t.destroy=n()}t=t.next}while(t!==s)}}function xl(e){var s=e.ref;if(s!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof s=="function"?s(e):s.current=e}}function _d(e){var s=e.alternate;s!==null&&(e.alternate=null,_d(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&(delete s[Pr],delete s[Dt],delete s[Ei],delete s[Ih],delete s[Eh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ad(e){return e.tag===5||e.tag===3||e.tag===4}function Md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ml(e,s,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,s?t.nodeType===8?t.parentNode.insertBefore(e,s):t.insertBefore(e,s):(t.nodeType===8?(s=t.parentNode,s.insertBefore(e,t)):(s=t,s.appendChild(e)),t=t._reactRootContainer,t!=null||s.onclick!==null||(s.onclick=Pn));else if(n!==4&&(e=e.child,e!==null))for(ml(e,s,t),e=e.sibling;e!==null;)ml(e,s,t),e=e.sibling}function fl(e,s,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,s?t.insertBefore(e,s):t.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(fl(e,s,t),e=e.sibling;e!==null;)fl(e,s,t),e=e.sibling}var Oe=null,Cr=!1;function is(e,s,t){for(t=t.child;t!==null;)Dd(e,s,t),t=t.sibling}function Dd(e,s,t){if(Lr&&typeof Lr.onCommitFiberUnmount=="function")try{Lr.onCommitFiberUnmount(xn,t)}catch{}switch(t.tag){case 5:Qe||rt(t,s);case 6:var n=Oe,i=Cr;Oe=null,is(e,s,t),Oe=n,Cr=i,Oe!==null&&(Cr?(e=Oe,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):Oe.removeChild(t.stateNode));break;case 18:Oe!==null&&(Cr?(e=Oe,t=t.stateNode,e.nodeType===8?Ii(e.parentNode,t):e.nodeType===1&&Ii(e,t),Ct(e)):Ii(Oe,t.stateNode));break;case 4:n=Oe,i=Cr,Oe=t.stateNode.containerInfo,Cr=!0,is(e,s,t),Oe=n,Cr=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var l=i,d=l.destroy;l=l.tag,d!==void 0&&((l&2)!==0||(l&4)!==0)&&hl(t,s,d),i=i.next}while(i!==n)}is(e,s,t);break;case 1:if(!Qe&&(rt(t,s),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(u){Se(t,s,u)}is(e,s,t);break;case 21:is(e,s,t);break;case 22:t.mode&1?(Qe=(n=Qe)||t.memoizedState!==null,is(e,s,t),Qe=n):is(e,s,t);break;default:is(e,s,t)}}function Od(e){var s=e.updateQueue;if(s!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new qh),s.forEach(function(n){var i=sx.bind(null,e,n);t.has(n)||(t.add(n),n.then(i,i))})}}function Tr(e,s){var t=s.deletions;if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];try{var l=e,d=s,u=d;e:for(;u!==null;){switch(u.tag){case 5:Oe=u.stateNode,Cr=!1;break e;case 3:Oe=u.stateNode.containerInfo,Cr=!0;break e;case 4:Oe=u.stateNode.containerInfo,Cr=!0;break e}u=u.return}if(Oe===null)throw Error(o(160));Dd(l,d,i),Oe=null,Cr=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(y){Se(i,s,y)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Fd(s,e),s=s.sibling}function Fd(e,s){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Tr(s,e),Ar(e),n&4){try{Gt(3,e,e.return),ra(3,e)}catch(A){Se(e,e.return,A)}try{Gt(5,e,e.return)}catch(A){Se(e,e.return,A)}}break;case 1:Tr(s,e),Ar(e),n&512&&t!==null&&rt(t,t.return);break;case 5:if(Tr(s,e),Ar(e),n&512&&t!==null&&rt(t,t.return),e.flags&32){var i=e.stateNode;try{mt(i,"")}catch(A){Se(e,e.return,A)}}if(n&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,d=t!==null?t.memoizedProps:l,u=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&ho(i,l),Va(u,d);var y=Va(u,l);for(d=0;d<h.length;d+=2){var w=h[d],k=h[d+1];w==="style"?bo(i,k):w==="dangerouslySetInnerHTML"?yo(i,k):w==="children"?mt(i,k):ae(i,w,k,y)}switch(u){case"input":Ua(i,l);break;case"textarea":fo(i,l);break;case"select":var N=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var E=l.value;E!=null?_s(i,!!l.multiple,E,!1):N!==!!l.multiple&&(l.defaultValue!=null?_s(i,!!l.multiple,l.defaultValue,!0):_s(i,!!l.multiple,l.multiple?[]:"",!1))}i[Dt]=l}catch(A){Se(e,e.return,A)}}break;case 6:if(Tr(s,e),Ar(e),n&4){if(e.stateNode===null)throw Error(o(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(A){Se(e,e.return,A)}}break;case 3:if(Tr(s,e),Ar(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{Ct(s.containerInfo)}catch(A){Se(e,e.return,A)}break;case 4:Tr(s,e),Ar(e);break;case 13:Tr(s,e),Ar(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(yl=Ce())),n&4&&Od(e);break;case 22:if(w=t!==null&&t.memoizedState!==null,e.mode&1?(Qe=(y=Qe)||w,Tr(s,e),Qe=y):Tr(s,e),Ar(e),n&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!w&&(e.mode&1)!==0)for(L=e,w=e.child;w!==null;){for(k=L=w;L!==null;){switch(N=L,E=N.child,N.tag){case 0:case 11:case 14:case 15:Gt(4,N,N.return);break;case 1:rt(N,N.return);var R=N.stateNode;if(typeof R.componentWillUnmount=="function"){n=N,t=N.return;try{s=n,R.props=s.memoizedProps,R.state=s.memoizedState,R.componentWillUnmount()}catch(A){Se(n,t,A)}}break;case 5:rt(N,N.return);break;case 22:if(N.memoizedState!==null){Ud(k);continue}}E!==null?(E.return=N,L=E):Ud(k)}w=w.sibling}e:for(w=null,k=e;;){if(k.tag===5){if(w===null){w=k;try{i=k.stateNode,y?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=k.stateNode,h=k.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=jo("display",d))}catch(A){Se(e,e.return,A)}}}else if(k.tag===6){if(w===null)try{k.stateNode.nodeValue=y?"":k.memoizedProps}catch(A){Se(e,e.return,A)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;w===k&&(w=null),k=k.return}w===k&&(w=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:Tr(s,e),Ar(e),n&4&&Od(e);break;case 21:break;default:Tr(s,e),Ar(e)}}function Ar(e){var s=e.flags;if(s&2){try{e:{for(var t=e.return;t!==null;){if(Ad(t)){var n=t;break e}t=t.return}throw Error(o(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(mt(i,""),n.flags&=-33);var l=Md(e);fl(e,l,i);break;case 3:case 4:var d=n.stateNode.containerInfo,u=Md(e);ml(e,u,d);break;default:throw Error(o(161))}}catch(h){Se(e,e.return,h)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Gh(e,s,t){L=e,Bd(e)}function Bd(e,s,t){for(var n=(e.mode&1)!==0;L!==null;){var i=L,l=i.child;if(i.tag===22&&n){var d=i.memoizedState!==null||ea;if(!d){var u=i.alternate,h=u!==null&&u.memoizedState!==null||Qe;u=ea;var y=Qe;if(ea=d,(Qe=h)&&!y)for(L=i;L!==null;)d=L,h=d.child,d.tag===22&&d.memoizedState!==null?$d(i):h!==null?(h.return=d,L=h):$d(i);for(;l!==null;)L=l,Bd(l),l=l.sibling;L=i,ea=u,Qe=y}Wd(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,L=l):Wd(e)}}function Wd(e){for(;L!==null;){var s=L;if((s.flags&8772)!==0){var t=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Qe||ra(5,s);break;case 1:var n=s.stateNode;if(s.flags&4&&!Qe)if(t===null)n.componentDidMount();else{var i=s.elementType===s.type?t.memoizedProps:Sr(s.type,t.memoizedProps);n.componentDidUpdate(i,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=s.updateQueue;l!==null&&Uc(s,l,n);break;case 3:var d=s.updateQueue;if(d!==null){if(t=null,s.child!==null)switch(s.child.tag){case 5:t=s.child.stateNode;break;case 1:t=s.child.stateNode}Uc(s,d,t)}break;case 5:var u=s.stateNode;if(t===null&&s.flags&4){t=u;var h=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var y=s.alternate;if(y!==null){var w=y.memoizedState;if(w!==null){var k=w.dehydrated;k!==null&&Ct(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Qe||s.flags&512&&xl(s)}catch(N){Se(s,s.return,N)}}if(s===e){L=null;break}if(t=s.sibling,t!==null){t.return=s.return,L=t;break}L=s.return}}function Ud(e){for(;L!==null;){var s=L;if(s===e){L=null;break}var t=s.sibling;if(t!==null){t.return=s.return,L=t;break}L=s.return}}function $d(e){for(;L!==null;){var s=L;try{switch(s.tag){case 0:case 11:case 15:var t=s.return;try{ra(4,s)}catch(h){Se(s,t,h)}break;case 1:var n=s.stateNode;if(typeof n.componentDidMount=="function"){var i=s.return;try{n.componentDidMount()}catch(h){Se(s,i,h)}}var l=s.return;try{xl(s)}catch(h){Se(s,l,h)}break;case 5:var d=s.return;try{xl(s)}catch(h){Se(s,d,h)}}}catch(h){Se(s,s.return,h)}if(s===e){L=null;break}var u=s.sibling;if(u!==null){u.return=s.return,L=u;break}L=s.return}}var Yh=Math.ceil,sa=ee.ReactCurrentDispatcher,gl=ee.ReactCurrentOwner,fr=ee.ReactCurrentBatchConfig,oe=0,_e=null,ze=null,Fe=0,or=0,st=rs(0),Pe=0,Yt=null,ks=0,ta=0,vl=0,Kt=null,Ze=null,yl=0,tt=1/0,qr=null,na=!1,jl=null,ls=null,aa=!1,os=null,ia=0,Xt=0,bl=null,la=-1,oa=0;function Ge(){return(oe&6)!==0?Ce():la!==-1?la:la=Ce()}function cs(e){return(e.mode&1)===0?1:(oe&2)!==0&&Fe!==0?Fe&-Fe:Ph.transition!==null?(oa===0&&(oa=Mo()),oa):(e=me,e!==0||(e=window.event,e=e===void 0?16:Qo(e.type)),e)}function zr(e,s,t,n){if(50<Xt)throw Xt=0,bl=null,Error(o(185));bt(e,t,n),((oe&2)===0||e!==_e)&&(e===_e&&((oe&2)===0&&(ta|=t),Pe===4&&ds(e,Fe)),er(e,n),t===1&&oe===0&&(s.mode&1)===0&&(tt=Ce()+500,Mn&&ts()))}function er(e,s){var t=e.callbackNode;Pu(e,s);var n=gn(e,e===_e?Fe:0);if(n===0)t!==null&&Ro(t),e.callbackNode=null,e.callbackPriority=0;else if(s=n&-n,e.callbackPriority!==s){if(t!=null&&Ro(t),s===1)e.tag===0?Lh(Qd.bind(null,e)):Ec(Qd.bind(null,e)),Th(function(){(oe&6)===0&&ts()}),t=null;else{switch(Do(n)){case 1:t=ei;break;case 4:t=_o;break;case 16:t=hn;break;case 536870912:t=Ao;break;default:t=hn}t=Zd(t,Hd.bind(null,e))}e.callbackPriority=s,e.callbackNode=t}}function Hd(e,s){if(la=-1,oa=0,(oe&6)!==0)throw Error(o(327));var t=e.callbackNode;if(nt()&&e.callbackNode!==t)return null;var n=gn(e,e===_e?Fe:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||s)s=ca(e,n);else{s=n;var i=oe;oe|=2;var l=Vd();(_e!==e||Fe!==s)&&(qr=null,tt=Ce()+500,Cs(e,s));do try{Jh();break}catch(u){qd(e,u)}while(!0);Fi(),sa.current=l,oe=i,ze!==null?s=0:(_e=null,Fe=0,s=Pe)}if(s!==0){if(s===2&&(i=ri(e),i!==0&&(n=i,s=Nl(e,i))),s===1)throw t=Yt,Cs(e,0),ds(e,n),er(e,Ce()),t;if(s===6)ds(e,n);else{if(i=e.current.alternate,(n&30)===0&&!Kh(i)&&(s=ca(e,n),s===2&&(l=ri(e),l!==0&&(n=l,s=Nl(e,l))),s===1))throw t=Yt,Cs(e,0),ds(e,n),er(e,Ce()),t;switch(e.finishedWork=i,e.finishedLanes=n,s){case 0:case 1:throw Error(o(345));case 2:Ts(e,Ze,qr);break;case 3:if(ds(e,n),(n&130023424)===n&&(s=yl+500-Ce(),10<s)){if(gn(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Ge(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zi(Ts.bind(null,e,Ze,qr),s);break}Ts(e,Ze,qr);break;case 4:if(ds(e,n),(n&4194240)===n)break;for(s=e.eventTimes,i=-1;0<n;){var d=31-Nr(n);l=1<<d,d=s[d],d>i&&(i=d),n&=~l}if(n=i,n=Ce()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Yh(n/1960))-n,10<n){e.timeoutHandle=zi(Ts.bind(null,e,Ze,qr),n);break}Ts(e,Ze,qr);break;case 5:Ts(e,Ze,qr);break;default:throw Error(o(329))}}}return er(e,Ce()),e.callbackNode===t?Hd.bind(null,e):null}function Nl(e,s){var t=Kt;return e.current.memoizedState.isDehydrated&&(Cs(e,s).flags|=256),e=ca(e,s),e!==2&&(s=Ze,Ze=t,s!==null&&wl(s)),e}function wl(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Kh(e){for(var s=e;;){if(s.flags&16384){var t=s.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var i=t[n],l=i.getSnapshot;i=i.value;try{if(!wr(l(),i))return!1}catch{return!1}}}if(t=s.child,s.subtreeFlags&16384&&t!==null)t.return=s,s=t;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ds(e,s){for(s&=~vl,s&=~ta,e.suspendedLanes|=s,e.pingedLanes&=~s,e=e.expirationTimes;0<s;){var t=31-Nr(s),n=1<<t;e[t]=-1,s&=~n}}function Qd(e){if((oe&6)!==0)throw Error(o(327));nt();var s=gn(e,0);if((s&1)===0)return er(e,Ce()),null;var t=ca(e,s);if(e.tag!==0&&t===2){var n=ri(e);n!==0&&(s=n,t=Nl(e,n))}if(t===1)throw t=Yt,Cs(e,0),ds(e,s),er(e,Ce()),t;if(t===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=s,Ts(e,Ze,qr),er(e,Ce()),null}function kl(e,s){var t=oe;oe|=1;try{return e(s)}finally{oe=t,oe===0&&(tt=Ce()+500,Mn&&ts())}}function Ss(e){os!==null&&os.tag===0&&(oe&6)===0&&nt();var s=oe;oe|=1;var t=fr.transition,n=me;try{if(fr.transition=null,me=1,e)return e()}finally{me=n,fr.transition=t,oe=s,(oe&6)===0&&ts()}}function Sl(){or=st.current,je(st)}function Cs(e,s){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Ch(t)),ze!==null)for(t=ze.return;t!==null;){var n=t;switch(_i(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&_n();break;case 3:Zs(),je(Ke),je(Ue),Vi();break;case 5:Qi(n);break;case 4:Zs();break;case 13:je(we);break;case 19:je(we);break;case 10:Bi(n.type._context);break;case 22:case 23:Sl()}t=t.return}if(_e=e,ze=e=ps(e.current,null),Fe=or=s,Pe=0,Yt=null,vl=ta=ks=0,Ze=Kt=null,bs!==null){for(s=0;s<bs.length;s++)if(t=bs[s],n=t.interleaved,n!==null){t.interleaved=null;var i=n.next,l=t.pending;if(l!==null){var d=l.next;l.next=i,n.next=d}t.pending=n}bs=null}return e}function qd(e,s){do{var t=ze;try{if(Fi(),qn.current=Kn,Vn){for(var n=ke.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Vn=!1}if(ws=0,Re=Le=ke=null,$t=!1,Ht=0,gl.current=null,t===null||t.return===null){Pe=1,Yt=s,ze=null;break}e:{var l=e,d=t.return,u=t,h=s;if(s=Fe,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,w=u,k=w.tag;if((w.mode&1)===0&&(k===0||k===11||k===15)){var N=w.alternate;N?(w.updateQueue=N.updateQueue,w.memoizedState=N.memoizedState,w.lanes=N.lanes):(w.updateQueue=null,w.memoizedState=null)}var E=gd(d);if(E!==null){E.flags&=-257,vd(E,d,u,l,s),E.mode&1&&fd(l,y,s),s=E,h=y;var R=s.updateQueue;if(R===null){var A=new Set;A.add(h),s.updateQueue=A}else R.add(h);break e}else{if((s&1)===0){fd(l,y,s),Cl();break e}h=Error(o(426))}}else if(Ne&&u.mode&1){var Te=gd(d);if(Te!==null){(Te.flags&65536)===0&&(Te.flags|=256),vd(Te,d,u,l,s),Di(et(h,u));break e}}l=h=et(h,u),Pe!==4&&(Pe=2),Kt===null?Kt=[l]:Kt.push(l),l=d;do{switch(l.tag){case 3:l.flags|=65536,s&=-s,l.lanes|=s;var f=xd(l,h,s);Wc(l,f);break e;case 1:u=h;var x=l.type,v=l.stateNode;if((l.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ls===null||!ls.has(v)))){l.flags|=65536,s&=-s,l.lanes|=s;var S=md(l,u,s);Wc(l,S);break e}}l=l.return}while(l!==null)}Yd(t)}catch(M){s=M,ze===t&&t!==null&&(ze=t=t.return);continue}break}while(!0)}function Vd(){var e=sa.current;return sa.current=Kn,e===null?Kn:e}function Cl(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),_e===null||(ks&268435455)===0&&(ta&268435455)===0||ds(_e,Fe)}function ca(e,s){var t=oe;oe|=2;var n=Vd();(_e!==e||Fe!==s)&&(qr=null,Cs(e,s));do try{Xh();break}catch(i){qd(e,i)}while(!0);if(Fi(),oe=t,sa.current=n,ze!==null)throw Error(o(261));return _e=null,Fe=0,Pe}function Xh(){for(;ze!==null;)Gd(ze)}function Jh(){for(;ze!==null&&!wu();)Gd(ze)}function Gd(e){var s=Jd(e.alternate,e,or);e.memoizedProps=e.pendingProps,s===null?Yd(e):ze=s,gl.current=null}function Yd(e){var s=e;do{var t=s.alternate;if(e=s.return,(s.flags&32768)===0){if(t=Hh(t,s,or),t!==null){ze=t;return}}else{if(t=Qh(t,s),t!==null){t.flags&=32767,ze=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,ze=null;return}}if(s=s.sibling,s!==null){ze=s;return}ze=s=e}while(s!==null);Pe===0&&(Pe=5)}function Ts(e,s,t){var n=me,i=fr.transition;try{fr.transition=null,me=1,Zh(e,s,t,n)}finally{fr.transition=i,me=n}return null}function Zh(e,s,t,n){do nt();while(os!==null);if((oe&6)!==0)throw Error(o(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(Ru(e,l),e===_e&&(ze=_e=null,Fe=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||aa||(aa=!0,Zd(hn,function(){return nt(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=fr.transition,fr.transition=null;var d=me;me=1;var u=oe;oe|=4,gl.current=null,Vh(e,t),Fd(t,e),yh(Ci),jn=!!Si,Ci=Si=null,e.current=t,Gh(t),ku(),oe=u,me=d,fr.transition=l}else e.current=t;if(aa&&(aa=!1,os=e,ia=i),l=e.pendingLanes,l===0&&(ls=null),Tu(t.stateNode),er(e,Ce()),s!==null)for(n=e.onRecoverableError,t=0;t<s.length;t++)i=s[t],n(i.value,{componentStack:i.stack,digest:i.digest});if(na)throw na=!1,e=jl,jl=null,e;return(ia&1)!==0&&e.tag!==0&&nt(),l=e.pendingLanes,(l&1)!==0?e===bl?Xt++:(Xt=0,bl=e):Xt=0,ts(),null}function nt(){if(os!==null){var e=Do(ia),s=fr.transition,t=me;try{if(fr.transition=null,me=16>e?16:e,os===null)var n=!1;else{if(e=os,os=null,ia=0,(oe&6)!==0)throw Error(o(331));var i=oe;for(oe|=4,L=e.current;L!==null;){var l=L,d=l.child;if((L.flags&16)!==0){var u=l.deletions;if(u!==null){for(var h=0;h<u.length;h++){var y=u[h];for(L=y;L!==null;){var w=L;switch(w.tag){case 0:case 11:case 15:Gt(8,w,l)}var k=w.child;if(k!==null)k.return=w,L=k;else for(;L!==null;){w=L;var N=w.sibling,E=w.return;if(_d(w),w===y){L=null;break}if(N!==null){N.return=E,L=N;break}L=E}}}var R=l.alternate;if(R!==null){var A=R.child;if(A!==null){R.child=null;do{var Te=A.sibling;A.sibling=null,A=Te}while(A!==null)}}L=l}}if((l.subtreeFlags&2064)!==0&&d!==null)d.return=l,L=d;else e:for(;L!==null;){if(l=L,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Gt(9,l,l.return)}var f=l.sibling;if(f!==null){f.return=l.return,L=f;break e}L=l.return}}var x=e.current;for(L=x;L!==null;){d=L;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,L=v;else e:for(d=x;L!==null;){if(u=L,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:ra(9,u)}}catch(M){Se(u,u.return,M)}if(u===d){L=null;break e}var S=u.sibling;if(S!==null){S.return=u.return,L=S;break e}L=u.return}}if(oe=i,ts(),Lr&&typeof Lr.onPostCommitFiberRoot=="function")try{Lr.onPostCommitFiberRoot(xn,e)}catch{}n=!0}return n}finally{me=t,fr.transition=s}}return!1}function Kd(e,s,t){s=et(t,s),s=xd(e,s,1),e=as(e,s,1),s=Ge(),e!==null&&(bt(e,1,s),er(e,s))}function Se(e,s,t){if(e.tag===3)Kd(e,e,t);else for(;s!==null;){if(s.tag===3){Kd(s,e,t);break}else if(s.tag===1){var n=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ls===null||!ls.has(n))){e=et(t,e),e=md(s,e,1),s=as(s,e,1),e=Ge(),s!==null&&(bt(s,1,e),er(s,e));break}}s=s.return}}function ex(e,s,t){var n=e.pingCache;n!==null&&n.delete(s),s=Ge(),e.pingedLanes|=e.suspendedLanes&t,_e===e&&(Fe&t)===t&&(Pe===4||Pe===3&&(Fe&130023424)===Fe&&500>Ce()-yl?Cs(e,0):vl|=t),er(e,s)}function Xd(e,s){s===0&&((e.mode&1)===0?s=1:(s=fn,fn<<=1,(fn&130023424)===0&&(fn=4194304)));var t=Ge();e=$r(e,s),e!==null&&(bt(e,s,t),er(e,t))}function rx(e){var s=e.memoizedState,t=0;s!==null&&(t=s.retryLane),Xd(e,t)}function sx(e,s){var t=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(o(314))}n!==null&&n.delete(s),Xd(e,t)}var Jd;Jd=function(e,s,t){if(e!==null)if(e.memoizedProps!==s.pendingProps||Ke.current)Je=!0;else{if((e.lanes&t)===0&&(s.flags&128)===0)return Je=!1,$h(e,s,t);Je=(e.flags&131072)!==0}else Je=!1,Ne&&(s.flags&1048576)!==0&&Lc(s,On,s.index);switch(s.lanes=0,s.tag){case 2:var n=s.type;Zn(e,s),e=s.pendingProps;var i=qs(s,Ue.current);Js(s,t),i=Ki(null,s,n,e,i,t);var l=Xi();return s.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Xe(n)?(l=!0,An(s)):l=!1,s.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$i(s),i.updater=Xn,s.stateNode=i,i._reactInternals=s,tl(s,n,e,t),s=ll(null,s,n,!0,l,t)):(s.tag=0,Ne&&l&&Ri(s),Ve(null,s,i,t),s=s.child),s;case 16:n=s.elementType;e:{switch(Zn(e,s),e=s.pendingProps,i=n._init,n=i(n._payload),s.type=n,i=s.tag=nx(n),e=Sr(n,e),i){case 0:s=il(null,s,n,e,t);break e;case 1:s=kd(null,s,n,e,t);break e;case 11:s=yd(null,s,n,e,t);break e;case 14:s=jd(null,s,n,Sr(n.type,e),t);break e}throw Error(o(306,n,""))}return s;case 0:return n=s.type,i=s.pendingProps,i=s.elementType===n?i:Sr(n,i),il(e,s,n,i,t);case 1:return n=s.type,i=s.pendingProps,i=s.elementType===n?i:Sr(n,i),kd(e,s,n,i,t);case 3:e:{if(Sd(s),e===null)throw Error(o(387));n=s.pendingProps,l=s.memoizedState,i=l.element,Bc(e,s),Hn(s,n,null,t);var d=s.memoizedState;if(n=d.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},s.updateQueue.baseState=l,s.memoizedState=l,s.flags&256){i=et(Error(o(423)),s),s=Cd(e,s,n,t,i);break e}else if(n!==i){i=et(Error(o(424)),s),s=Cd(e,s,n,t,i);break e}else for(lr=es(s.stateNode.containerInfo.firstChild),ir=s,Ne=!0,kr=null,t=Oc(s,null,n,t),s.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ys(),n===i){s=Qr(e,s,t);break e}Ve(e,s,n,t)}s=s.child}return s;case 5:return $c(s),e===null&&Mi(s),n=s.type,i=s.pendingProps,l=e!==null?e.memoizedProps:null,d=i.children,Ti(n,i)?d=null:l!==null&&Ti(n,l)&&(s.flags|=32),wd(e,s),Ve(e,s,d,t),s.child;case 6:return e===null&&Mi(s),null;case 13:return Td(e,s,t);case 4:return Hi(s,s.stateNode.containerInfo),n=s.pendingProps,e===null?s.child=Ks(s,null,n,t):Ve(e,s,n,t),s.child;case 11:return n=s.type,i=s.pendingProps,i=s.elementType===n?i:Sr(n,i),yd(e,s,n,i,t);case 7:return Ve(e,s,s.pendingProps,t),s.child;case 8:return Ve(e,s,s.pendingProps.children,t),s.child;case 12:return Ve(e,s,s.pendingProps.children,t),s.child;case 10:e:{if(n=s.type._context,i=s.pendingProps,l=s.memoizedProps,d=i.value,ge(Wn,n._currentValue),n._currentValue=d,l!==null)if(wr(l.value,d)){if(l.children===i.children&&!Ke.current){s=Qr(e,s,t);break e}}else for(l=s.child,l!==null&&(l.return=s);l!==null;){var u=l.dependencies;if(u!==null){d=l.child;for(var h=u.firstContext;h!==null;){if(h.context===n){if(l.tag===1){h=Hr(-1,t&-t),h.tag=2;var y=l.updateQueue;if(y!==null){y=y.shared;var w=y.pending;w===null?h.next=h:(h.next=w.next,w.next=h),y.pending=h}}l.lanes|=t,h=l.alternate,h!==null&&(h.lanes|=t),Wi(l.return,t,s),u.lanes|=t;break}h=h.next}}else if(l.tag===10)d=l.type===s.type?null:l.child;else if(l.tag===18){if(d=l.return,d===null)throw Error(o(341));d.lanes|=t,u=d.alternate,u!==null&&(u.lanes|=t),Wi(d,t,s),d=l.sibling}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===s){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}Ve(e,s,i.children,t),s=s.child}return s;case 9:return i=s.type,n=s.pendingProps.children,Js(s,t),i=xr(i),n=n(i),s.flags|=1,Ve(e,s,n,t),s.child;case 14:return n=s.type,i=Sr(n,s.pendingProps),i=Sr(n.type,i),jd(e,s,n,i,t);case 15:return bd(e,s,s.type,s.pendingProps,t);case 17:return n=s.type,i=s.pendingProps,i=s.elementType===n?i:Sr(n,i),Zn(e,s),s.tag=1,Xe(n)?(e=!0,An(s)):e=!1,Js(s,t),ud(s,n,i),tl(s,n,i,t),ll(null,s,n,!0,e,t);case 19:return Id(e,s,t);case 22:return Nd(e,s,t)}throw Error(o(156,s.tag))};function Zd(e,s){return Po(e,s)}function tx(e,s,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gr(e,s,t,n){return new tx(e,s,t,n)}function Tl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function nx(e){if(typeof e=="function")return Tl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dr)return 11;if(e===pr)return 14}return 2}function ps(e,s){var t=e.alternate;return t===null?(t=gr(e.tag,s,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=s,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,s=e.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function da(e,s,t,n,i,l){var d=2;if(n=e,typeof e=="function")Tl(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case U:return zs(t.children,i,l,s);case Ee:d=8,i|=8;break;case tr:return e=gr(12,t,s,i|2),e.elementType=tr,e.lanes=l,e;case qe:return e=gr(13,t,s,i),e.elementType=qe,e.lanes=l,e;case nr:return e=gr(19,t,s,i),e.elementType=nr,e.lanes=l,e;case fe:return pa(t,i,l,s);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jr:d=10;break e;case Dr:d=9;break e;case dr:d=11;break e;case pr:d=14;break e;case We:d=16,n=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return s=gr(d,t,s,i),s.elementType=e,s.type=n,s.lanes=l,s}function zs(e,s,t,n){return e=gr(7,e,n,s),e.lanes=t,e}function pa(e,s,t,n){return e=gr(22,e,n,s),e.elementType=fe,e.lanes=t,e.stateNode={isHidden:!1},e}function zl(e,s,t){return e=gr(6,e,null,s),e.lanes=t,e}function Il(e,s,t){return s=gr(4,e.children!==null?e.children:[],e.key,s),s.lanes=t,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}function ax(e,s,t,n,i){this.tag=s,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=si(0),this.expirationTimes=si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function El(e,s,t,n,i,l,d,u,h){return e=new ax(e,s,t,u,h),s===1?(s=1,l===!0&&(s|=8)):s=0,l=gr(3,null,null,s),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},$i(l),e}function ix(e,s,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Y,key:n==null?null:""+n,children:e,containerInfo:s,implementation:t}}function ep(e){if(!e)return ss;e=e._reactInternals;e:{if(fs(e)!==e||e.tag!==1)throw Error(o(170));var s=e;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Xe(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(o(171))}if(e.tag===1){var t=e.type;if(Xe(t))return zc(e,t,s)}return s}function rp(e,s,t,n,i,l,d,u,h){return e=El(t,n,!0,e,i,l,d,u,h),e.context=ep(null),t=e.current,n=Ge(),i=cs(t),l=Hr(n,i),l.callback=s!=null?s:null,as(t,l,i),e.current.lanes=i,bt(e,i,n),er(e,n),e}function ua(e,s,t,n){var i=s.current,l=Ge(),d=cs(i);return t=ep(t),s.context===null?s.context=t:s.pendingContext=t,s=Hr(l,d),s.payload={element:e},n=n===void 0?null:n,n!==null&&(s.callback=n),e=as(i,s,d),e!==null&&(zr(e,i,d,l),$n(e,i,d)),d}function ha(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function sp(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<s?t:s}}function Ll(e,s){sp(e,s),(e=e.alternate)&&sp(e,s)}function lx(){return null}var tp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pl(e){this._internalRoot=e}xa.prototype.render=Pl.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(o(409));ua(e,s,null,null)},xa.prototype.unmount=Pl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;Ss(function(){ua(null,e,null,null)}),s[Fr]=null}};function xa(e){this._internalRoot=e}xa.prototype.unstable_scheduleHydration=function(e){if(e){var s=Bo();e={blockedOn:null,target:e,priority:s};for(var t=0;t<Xr.length&&s!==0&&s<Xr[t].priority;t++);Xr.splice(t,0,e),t===0&&$o(e)}};function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ma(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function np(){}function ox(e,s,t,n,i){if(i){if(typeof n=="function"){var l=n;n=function(){var y=ha(d);l.call(y)}}var d=rp(s,n,e,0,null,!1,!1,"",np);return e._reactRootContainer=d,e[Fr]=d.current,At(e.nodeType===8?e.parentNode:e),Ss(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var u=n;n=function(){var y=ha(h);u.call(y)}}var h=El(e,0,!1,null,null,!1,!1,"",np);return e._reactRootContainer=h,e[Fr]=h.current,At(e.nodeType===8?e.parentNode:e),Ss(function(){ua(s,h,t,n)}),h}function fa(e,s,t,n,i){var l=t._reactRootContainer;if(l){var d=l;if(typeof i=="function"){var u=i;i=function(){var h=ha(d);u.call(h)}}ua(s,d,e,i)}else d=ox(t,s,e,i,n);return ha(d)}Oo=function(e){switch(e.tag){case 3:var s=e.stateNode;if(s.current.memoizedState.isDehydrated){var t=jt(s.pendingLanes);t!==0&&(ti(s,t|1),er(s,Ce()),(oe&6)===0&&(tt=Ce()+500,ts()))}break;case 13:Ss(function(){var n=$r(e,1);if(n!==null){var i=Ge();zr(n,e,1,i)}}),Ll(e,1)}},ni=function(e){if(e.tag===13){var s=$r(e,134217728);if(s!==null){var t=Ge();zr(s,e,134217728,t)}Ll(e,134217728)}},Fo=function(e){if(e.tag===13){var s=cs(e),t=$r(e,s);if(t!==null){var n=Ge();zr(t,e,s,n)}Ll(e,s)}},Bo=function(){return me},Wo=function(e,s){var t=me;try{return me=e,s()}finally{me=t}},Ka=function(e,s,t){switch(s){case"input":if(Ua(e,t),s=t.name,t.type==="radio"&&s!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<t.length;s++){var n=t[s];if(n!==e&&n.form===e.form){var i=Rn(n);if(!i)throw Error(o(90));br(n),Ua(n,i)}}}break;case"textarea":fo(e,t);break;case"select":s=t.value,s!=null&&_s(e,!!t.multiple,s,!1)}},So=kl,Co=Ss;var cx={usingClientEntryPoint:!1,Events:[Ot,Hs,Rn,wo,ko,kl]},Jt={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dx={bundleType:Jt.bundleType,version:Jt.version,rendererPackageName:Jt.rendererPackageName,rendererConfig:Jt.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Eo(e),e===null?null:e.stateNode},findFiberByHostInstance:Jt.findFiberByHostInstance||lx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ga.isDisabled&&ga.supportsFiber)try{xn=ga.inject(dx),Lr=ga}catch{}}return rr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cx,rr.createPortal=function(e,s){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rl(s))throw Error(o(200));return ix(e,s,null,t)},rr.createRoot=function(e,s){if(!Rl(e))throw Error(o(299));var t=!1,n="",i=tp;return s!=null&&(s.unstable_strictMode===!0&&(t=!0),s.identifierPrefix!==void 0&&(n=s.identifierPrefix),s.onRecoverableError!==void 0&&(i=s.onRecoverableError)),s=El(e,1,!1,null,null,t,!1,n,i),e[Fr]=s.current,At(e.nodeType===8?e.parentNode:e),new Pl(s)},rr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Eo(s),e=e===null?null:e.stateNode,e},rr.flushSync=function(e){return Ss(e)},rr.hydrate=function(e,s,t){if(!ma(s))throw Error(o(200));return fa(null,e,s,!0,t)},rr.hydrateRoot=function(e,s,t){if(!Rl(e))throw Error(o(405));var n=t!=null&&t.hydratedSources||null,i=!1,l="",d=tp;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),s=rp(s,null,e,1,t!=null?t:null,i,!1,l,d),e[Fr]=s.current,At(e),n)for(e=0;e<n.length;e++)t=n[e],i=t._getVersion,i=i(t._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[t,i]:s.mutableSourceEagerHydrationData.push(t,i);return new xa(s)},rr.render=function(e,s,t){if(!ma(s))throw Error(o(200));return fa(null,e,s,!1,t)},rr.unmountComponentAtNode=function(e){if(!ma(e))throw Error(o(40));return e._reactRootContainer?(Ss(function(){fa(null,null,e,!1,function(){e._reactRootContainer=null,e[Fr]=null})}),!0):!1},rr.unstable_batchedUpdates=kl,rr.unstable_renderSubtreeIntoContainer=function(e,s,t,n){if(!ma(t))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return fa(e,s,t,!1,n)},rr.version="18.3.1-next-f1338f8080-20240426",rr}var up;function yx(){if(up)return Ml.exports;up=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),Ml.exports=vx(),Ml.exports}var hp;function jx(){if(hp)return va;hp=1;var a=yx();return va.createRoot=a.createRoot,va.hydrateRoot=a.hydrateRoot,va}var bx=jx(),V=ro();const vr=ux(V);var Ap={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},xp=vr.createContext&&vr.createContext(Ap),Nx=["attr","size","title"];function wx(a,c){if(a==null)return{};var o=kx(a,c),p,g;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(a);for(g=0;g<j.length;g++)p=j[g],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(a,p)&&(o[p]=a[p])}return o}function kx(a,c){if(a==null)return{};var o={};for(var p in a)if(Object.prototype.hasOwnProperty.call(a,p)){if(c.indexOf(p)>=0)continue;o[p]=a[p]}return o}function Ta(){return Ta=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var p in o)Object.prototype.hasOwnProperty.call(o,p)&&(a[p]=o[p])}return a},Ta.apply(this,arguments)}function mp(a,c){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);c&&(p=p.filter(function(g){return Object.getOwnPropertyDescriptor(a,g).enumerable})),o.push.apply(o,p)}return o}function za(a){for(var c=1;c<arguments.length;c++){var o=arguments[c]!=null?arguments[c]:{};c%2?mp(Object(o),!0).forEach(function(p){Sx(a,p,o[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):mp(Object(o)).forEach(function(p){Object.defineProperty(a,p,Object.getOwnPropertyDescriptor(o,p))})}return a}function Sx(a,c,o){return c=Cx(c),c in a?Object.defineProperty(a,c,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[c]=o,a}function Cx(a){var c=Tx(a,"string");return typeof c=="symbol"?c:c+""}function Tx(a,c){if(typeof a!="object"||!a)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var p=o.call(a,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(a)}function Mp(a){return a&&a.map((c,o)=>vr.createElement(c.tag,za({key:o},c.attr),Mp(c.child)))}function P(a){return c=>vr.createElement(zx,Ta({attr:za({},a.attr)},c),Mp(a.child))}function zx(a){var c=o=>{var{attr:p,size:g,title:j}=a,C=wx(a,Nx),_=g||o.size||"1em",T;return o.className&&(T=o.className),a.className&&(T=(T?T+" ":"")+a.className),vr.createElement("svg",Ta({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,p,C,{className:T,style:za(za({color:a.color||o.color},o.style),a.style),height:_,width:_,xmlns:"http://www.w3.org/2000/svg"}),j&&vr.createElement("title",null,j),a.children)};return xp!==void 0?vr.createElement(xp.Consumer,null,o=>c(o)):c(Ap)}function Es(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(a)}function Ix(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(a)}function Dp(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function Ex(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(a)}function Lx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(a)}function Ql(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"},child:[]}]})(a)}function Px(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(a)}function Ra(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(a)}function so(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(a)}function Be(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(a)}function Op(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(a)}function Rx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"},child:[]}]})(a)}function _x(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(a)}function Ax(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(a)}function Fp(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"},child:[]}]})(a)}function Bp(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(a)}function Wp(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(a)}function xs(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(a)}function Mx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"8 17 12 21 16 17"},child:[]},{tag:"line",attr:{x1:"12",y1:"12",x2:"12",y2:"21"},child:[]},{tag:"path",attr:{d:"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"},child:[]}]})(a)}function Dx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},child:[]},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]}]})(a)}function Ox(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(a)}function Fx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(a)}function Bx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(a)}function Wx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(a)}function Ux(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(a)}function to(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(a)}function rn(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(a)}function $x(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(a)}function Up(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(a)}function Rs(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(a)}function Fl(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(a)}function fp(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function Hx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function Qx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]}]})(a)}function qx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(a)}function Ye(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(a)}function Vx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(a)}function no(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(a)}function Gx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(a)}function Yx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(a)}function ql(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(a)}function Kx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(a)}function gp(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(a)}function Xx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(a)}function $p(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(a)}function Jx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]},{tag:"path",attr:{d:"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"},child:[]}]})(a)}function _a(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(a)}function ao(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(a)}function Zx(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(a)}function Bl(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function nn(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(a)}function sn(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(a)}function Ir(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(a)}function em(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(a)}function ln(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(a)}function Hp(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(a)}function rm(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(a)}function Vl(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(a)}function sm(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 18 13.5 8.5 8.5 13.5 1 6"},child:[]},{tag:"polyline",attr:{points:"17 18 23 18 23 12"},child:[]}]})(a)}function lt(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(a)}function Qp(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(a)}function vp(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"23 7 16 12 23 17 23 7"},child:[]},{tag:"rect",attr:{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"},child:[]}]})(a)}function tm(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"},child:[]},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"},child:[]}]})(a)}function nm(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"},child:[]},{tag:"polygon",attr:{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"},child:[]}]})(a)}function ms(a){return P({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}var sr=function(){return sr=Object.assign||function(c){for(var o,p=1,g=arguments.length;p<g;p++){o=arguments[p];for(var j in o)Object.prototype.hasOwnProperty.call(o,j)&&(c[j]=o[j])}return c},sr.apply(this,arguments)};function Ia(a,c,o){if(o||arguments.length===2)for(var p=0,g=c.length,j;p<g;p++)(j||!(p in c))&&(j||(j=Array.prototype.slice.call(c,0,p)),j[p]=c[p]);return a.concat(j||Array.prototype.slice.call(c))}var be="-ms-",tn="-moz-",xe="-webkit-",qp="comm",Aa="rule",io="decl",am="@import",Vp="@keyframes",im="@layer",Gp=Math.abs,lo=String.fromCharCode,Gl=Object.assign;function lm(a,c){return Me(a,0)^45?(((c<<2^Me(a,0))<<2^Me(a,1))<<2^Me(a,2))<<2^Me(a,3):0}function Yp(a){return a.trim()}function Vr(a,c){return(a=c.exec(a))?a[0]:a}function Z(a,c,o){return a.replace(c,o)}function Na(a,c,o){return a.indexOf(c,o)}function Me(a,c){return a.charCodeAt(c)|0}function ot(a,c,o){return a.slice(c,o)}function Mr(a){return a.length}function Kp(a){return a.length}function en(a,c){return c.push(a),a}function om(a,c){return a.map(c).join("")}function yp(a,c){return a.filter(function(o){return!Vr(o,c)})}var Ma=1,ct=1,Xp=0,yr=0,Ie=0,ht="";function Da(a,c,o,p,g,j,C,_){return{value:a,root:c,parent:o,type:p,props:g,children:j,line:Ma,column:ct,length:C,return:"",siblings:_}}function hs(a,c){return Gl(Da("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},c)}function at(a){for(;a.root;)a=hs(a.root,{children:[a]});en(a,a.siblings)}function cm(){return Ie}function dm(){return Ie=yr>0?Me(ht,--yr):0,ct--,Ie===10&&(ct=1,Ma--),Ie}function Er(){return Ie=yr<Xp?Me(ht,yr++):0,ct++,Ie===10&&(ct=1,Ma++),Ie}function Ls(){return Me(ht,yr)}function wa(){return yr}function Oa(a,c){return ot(ht,a,c)}function Yl(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function pm(a){return Ma=ct=1,Xp=Mr(ht=a),yr=0,[]}function um(a){return ht="",a}function Wl(a){return Yp(Oa(yr-1,Kl(a===91?a+2:a===40?a+1:a)))}function hm(a){for(;(Ie=Ls())&&Ie<33;)Er();return Yl(a)>2||Yl(Ie)>3?"":" "}function xm(a,c){for(;--c&&Er()&&!(Ie<48||Ie>102||Ie>57&&Ie<65||Ie>70&&Ie<97););return Oa(a,wa()+(c<6&&Ls()==32&&Er()==32))}function Kl(a){for(;Er();)switch(Ie){case a:return yr;case 34:case 39:a!==34&&a!==39&&Kl(Ie);break;case 40:a===41&&Kl(a);break;case 92:Er();break}return yr}function mm(a,c){for(;Er()&&a+Ie!==57;)if(a+Ie===84&&Ls()===47)break;return"/*"+Oa(c,yr-1)+"*"+lo(a===47?a:Er())}function fm(a){for(;!Yl(Ls());)Er();return Oa(a,yr)}function gm(a){return um(ka("",null,null,null,[""],a=pm(a),0,[0],a))}function ka(a,c,o,p,g,j,C,_,T){for(var q=0,H=0,O=C,F=0,G=0,ne=0,Q=1,X=1,he=1,le=0,ae="",ee=g,pe=j,Y=p,U=ae;X;)switch(ne=le,le=Er()){case 40:if(ne!=108&&Me(U,O-1)==58){Na(U+=Z(Wl(le),"&","&\f"),"&\f",Gp(q?_[q-1]:0))!=-1&&(he=-1);break}case 34:case 39:case 91:U+=Wl(le);break;case 9:case 10:case 13:case 32:U+=hm(ne);break;case 92:U+=xm(wa()-1,7);continue;case 47:switch(Ls()){case 42:case 47:en(vm(mm(Er(),wa()),c,o,T),T);break;default:U+="/"}break;case 123*Q:_[q++]=Mr(U)*he;case 125*Q:case 59:case 0:switch(le){case 0:case 125:X=0;case 59+H:he==-1&&(U=Z(U,/\f/g,"")),G>0&&Mr(U)-O&&en(G>32?bp(U+";",p,o,O-1,T):bp(Z(U," ","")+";",p,o,O-2,T),T);break;case 59:U+=";";default:if(en(Y=jp(U,c,o,q,H,g,_,ae,ee=[],pe=[],O,j),j),le===123)if(H===0)ka(U,c,Y,Y,ee,j,O,_,pe);else switch(F===99&&Me(U,3)===110?100:F){case 100:case 108:case 109:case 115:ka(a,Y,Y,p&&en(jp(a,Y,Y,0,0,g,_,ae,g,ee=[],O,pe),pe),g,pe,O,_,p?ee:pe);break;default:ka(U,Y,Y,Y,[""],pe,0,_,pe)}}q=H=G=0,Q=he=1,ae=U="",O=C;break;case 58:O=1+Mr(U),G=ne;default:if(Q<1){if(le==123)--Q;else if(le==125&&Q++==0&&dm()==125)continue}switch(U+=lo(le),le*Q){case 38:he=H>0?1:(U+="\f",-1);break;case 44:_[q++]=(Mr(U)-1)*he,he=1;break;case 64:Ls()===45&&(U+=Wl(Er())),F=Ls(),H=O=Mr(ae=U+=fm(wa())),le++;break;case 45:ne===45&&Mr(U)==2&&(Q=0)}}return j}function jp(a,c,o,p,g,j,C,_,T,q,H,O){for(var F=g-1,G=g===0?j:[""],ne=Kp(G),Q=0,X=0,he=0;Q<p;++Q)for(var le=0,ae=ot(a,F+1,F=Gp(X=C[Q])),ee=a;le<ne;++le)(ee=Yp(X>0?G[le]+" "+ae:Z(ae,/&\f/g,G[le])))&&(T[he++]=ee);return Da(a,c,o,g===0?Aa:_,T,q,H,O)}function vm(a,c,o,p){return Da(a,c,o,qp,lo(cm()),ot(a,2,-2),0,p)}function bp(a,c,o,p,g){return Da(a,c,o,io,ot(a,0,p),ot(a,p+1,-1),p,g)}function Jp(a,c,o){switch(lm(a,c)){case 5103:return xe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return xe+a+a;case 4789:return tn+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+a+tn+a+be+a+a;case 5936:switch(Me(a,c+11)){case 114:return xe+a+be+Z(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return xe+a+be+Z(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return xe+a+be+Z(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return xe+a+be+a+a;case 6165:return xe+a+be+"flex-"+a+a;case 5187:return xe+a+Z(a,/(\w+).+(:[^]+)/,xe+"box-$1$2"+be+"flex-$1$2")+a;case 5443:return xe+a+be+"flex-item-"+Z(a,/flex-|-self/g,"")+(Vr(a,/flex-|baseline/)?"":be+"grid-row-"+Z(a,/flex-|-self/g,""))+a;case 4675:return xe+a+be+"flex-line-pack"+Z(a,/align-content|flex-|-self/g,"")+a;case 5548:return xe+a+be+Z(a,"shrink","negative")+a;case 5292:return xe+a+be+Z(a,"basis","preferred-size")+a;case 6060:return xe+"box-"+Z(a,"-grow","")+xe+a+be+Z(a,"grow","positive")+a;case 4554:return xe+Z(a,/([^-])(transform)/g,"$1"+xe+"$2")+a;case 6187:return Z(Z(Z(a,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),a,"")+a;case 5495:case 3959:return Z(a,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return Z(Z(a,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+xe+a+a;case 4200:if(!Vr(a,/flex-|baseline/))return be+"grid-column-align"+ot(a,c)+a;break;case 2592:case 3360:return be+Z(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(p,g){return c=g,Vr(p.props,/grid-\w+-end/)})?~Na(a+(o=o[c].value),"span",0)?a:be+Z(a,"-start","")+a+be+"grid-row-span:"+(~Na(o,"span",0)?Vr(o,/\d+/):+Vr(o,/\d+/)-+Vr(a,/\d+/))+";":be+Z(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(p){return Vr(p.props,/grid-\w+-start/)})?a:be+Z(Z(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return Z(a,/(.+)-inline(.+)/,xe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Mr(a)-1-c>6)switch(Me(a,c+1)){case 109:if(Me(a,c+4)!==45)break;case 102:return Z(a,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+tn+(Me(a,c+3)==108?"$3":"$2-$3"))+a;case 115:return~Na(a,"stretch",0)?Jp(Z(a,"stretch","fill-available"),c,o)+a:a}break;case 5152:case 5920:return Z(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,g,j,C,_,T,q){return be+g+":"+j+q+(C?be+g+"-span:"+(_?T:+T-+j)+q:"")+a});case 4949:if(Me(a,c+6)===121)return Z(a,":",":"+xe)+a;break;case 6444:switch(Me(a,Me(a,14)===45?18:11)){case 120:return Z(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(Me(a,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+be+"$2box$3")+a;case 100:return Z(a,":",":"+be)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Z(a,"scroll-","scroll-snap-")+a}return a}function Ea(a,c){for(var o="",p=0;p<a.length;p++)o+=c(a[p],p,a,c)||"";return o}function ym(a,c,o,p){switch(a.type){case im:if(a.children.length)break;case am:case io:return a.return=a.return||a.value;case qp:return"";case Vp:return a.return=a.value+"{"+Ea(a.children,p)+"}";case Aa:if(!Mr(a.value=a.props.join(",")))return""}return Mr(o=Ea(a.children,p))?a.return=a.value+"{"+o+"}":""}function jm(a){var c=Kp(a);return function(o,p,g,j){for(var C="",_=0;_<c;_++)C+=a[_](o,p,g,j)||"";return C}}function bm(a){return function(c){c.root||(c=c.return)&&a(c)}}function Nm(a,c,o,p){if(a.length>-1&&!a.return)switch(a.type){case io:a.return=Jp(a.value,a.length,o);return;case Vp:return Ea([hs(a,{value:Z(a.value,"@","@"+xe)})],p);case Aa:if(a.length)return om(o=a.props,function(g){switch(Vr(g,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":at(hs(a,{props:[Z(g,/:(read-\w+)/,":"+tn+"$1")]})),at(hs(a,{props:[g]})),Gl(a,{props:yp(o,p)});break;case"::placeholder":at(hs(a,{props:[Z(g,/:(plac\w+)/,":"+xe+"input-$1")]})),at(hs(a,{props:[Z(g,/:(plac\w+)/,":"+tn+"$1")]})),at(hs(a,{props:[Z(g,/:(plac\w+)/,be+"input-$1")]})),at(hs(a,{props:[g]})),Gl(a,{props:yp(o,p)});break}return""})}}var wm={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},cr={},dt=typeof process!="undefined"&&cr!==void 0&&(cr.REACT_APP_SC_ATTR||cr.SC_ATTR)||"data-styled",Zp="active",eu="data-styled-version",Fa="6.1.18",oo=`/*!sc*/
`,La=typeof window!="undefined"&&typeof document!="undefined",km=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&cr!==void 0&&cr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&cr.REACT_APP_SC_DISABLE_SPEEDY!==""?cr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&cr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&cr!==void 0&&cr.SC_DISABLE_SPEEDY!==void 0&&cr.SC_DISABLE_SPEEDY!==""&&cr.SC_DISABLE_SPEEDY!=="false"&&cr.SC_DISABLE_SPEEDY),Ba=Object.freeze([]),pt=Object.freeze({});function Sm(a,c,o){return o===void 0&&(o=pt),a.theme!==o.theme&&a.theme||c||o.theme}var ru=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Cm=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Tm=/(^-|-$)/g;function Np(a){return a.replace(Cm,"-").replace(Tm,"")}var zm=/(a)(d)/gi,ya=52,wp=function(a){return String.fromCharCode(a+(a>25?39:97))};function Xl(a){var c,o="";for(c=Math.abs(a);c>ya;c=c/ya|0)o=wp(c%ya)+o;return(wp(c%ya)+o).replace(zm,"$1-$2")}var Ul,su=5381,it=function(a,c){for(var o=c.length;o;)a=33*a^c.charCodeAt(--o);return a},tu=function(a){return it(su,a)};function Im(a){return Xl(tu(a)>>>0)}function Em(a){return a.displayName||a.name||"Component"}function $l(a){return typeof a=="string"&&!0}var nu=typeof Symbol=="function"&&Symbol.for,au=nu?Symbol.for("react.memo"):60115,Lm=nu?Symbol.for("react.forward_ref"):60112,Pm={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Rm={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},iu={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_m=((Ul={})[Lm]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ul[au]=iu,Ul);function kp(a){return("type"in(c=a)&&c.type.$$typeof)===au?iu:"$$typeof"in a?_m[a.$$typeof]:Pm;var c}var Am=Object.defineProperty,Mm=Object.getOwnPropertyNames,Sp=Object.getOwnPropertySymbols,Dm=Object.getOwnPropertyDescriptor,Om=Object.getPrototypeOf,Cp=Object.prototype;function lu(a,c,o){if(typeof c!="string"){if(Cp){var p=Om(c);p&&p!==Cp&&lu(a,p,o)}var g=Mm(c);Sp&&(g=g.concat(Sp(c)));for(var j=kp(a),C=kp(c),_=0;_<g.length;++_){var T=g[_];if(!(T in Rm||o&&o[T]||C&&T in C||j&&T in j)){var q=Dm(c,T);try{Am(a,T,q)}catch{}}}}return a}function ut(a){return typeof a=="function"}function co(a){return typeof a=="object"&&"styledComponentId"in a}function Is(a,c){return a&&c?"".concat(a," ").concat(c):a||c||""}function Tp(a,c){if(a.length===0)return"";for(var o=a[0],p=1;p<a.length;p++)o+=a[p];return o}function an(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Jl(a,c,o){if(o===void 0&&(o=!1),!o&&!an(a)&&!Array.isArray(a))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)a[p]=Jl(a[p],c[p]);else if(an(c))for(var p in c)a[p]=Jl(a[p],c[p]);return a}function po(a,c){Object.defineProperty(a,"toString",{value:c})}function on(a){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Fm=(function(){function a(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c}return a.prototype.indexOfGroup=function(c){for(var o=0,p=0;p<c;p++)o+=this.groupSizes[p];return o},a.prototype.insertRules=function(c,o){if(c>=this.groupSizes.length){for(var p=this.groupSizes,g=p.length,j=g;c>=j;)if((j<<=1)<0)throw on(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(p),this.length=j;for(var C=g;C<j;C++)this.groupSizes[C]=0}for(var _=this.indexOfGroup(c+1),T=(C=0,o.length);C<T;C++)this.tag.insertRule(_,o[C])&&(this.groupSizes[c]++,_++)},a.prototype.clearGroup=function(c){if(c<this.length){var o=this.groupSizes[c],p=this.indexOfGroup(c),g=p+o;this.groupSizes[c]=0;for(var j=p;j<g;j++)this.tag.deleteRule(p)}},a.prototype.getGroup=function(c){var o="";if(c>=this.length||this.groupSizes[c]===0)return o;for(var p=this.groupSizes[c],g=this.indexOfGroup(c),j=g+p,C=g;C<j;C++)o+="".concat(this.tag.getRule(C)).concat(oo);return o},a})(),Sa=new Map,Pa=new Map,Ca=1,ja=function(a){if(Sa.has(a))return Sa.get(a);for(;Pa.has(Ca);)Ca++;var c=Ca++;return Sa.set(a,c),Pa.set(c,a),c},Bm=function(a,c){Ca=c+1,Sa.set(a,c),Pa.set(c,a)},Wm="style[".concat(dt,"][").concat(eu,'="').concat(Fa,'"]'),Um=new RegExp("^".concat(dt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),$m=function(a,c,o){for(var p,g=o.split(","),j=0,C=g.length;j<C;j++)(p=g[j])&&a.registerName(c,p)},Hm=function(a,c){for(var o,p=((o=c.textContent)!==null&&o!==void 0?o:"").split(oo),g=[],j=0,C=p.length;j<C;j++){var _=p[j].trim();if(_){var T=_.match(Um);if(T){var q=0|parseInt(T[1],10),H=T[2];q!==0&&(Bm(H,q),$m(a,H,T[3]),a.getTag().insertRules(q,g)),g.length=0}else g.push(_)}}},zp=function(a){for(var c=document.querySelectorAll(Wm),o=0,p=c.length;o<p;o++){var g=c[o];g&&g.getAttribute(dt)!==Zp&&(Hm(a,g),g.parentNode&&g.parentNode.removeChild(g))}};function Qm(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var ou=function(a){var c=document.head,o=a||c,p=document.createElement("style"),g=(function(_){var T=Array.from(_.querySelectorAll("style[".concat(dt,"]")));return T[T.length-1]})(o),j=g!==void 0?g.nextSibling:null;p.setAttribute(dt,Zp),p.setAttribute(eu,Fa);var C=Qm();return C&&p.setAttribute("nonce",C),o.insertBefore(p,j),p},qm=(function(){function a(c){this.element=ou(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){if(o.sheet)return o.sheet;for(var p=document.styleSheets,g=0,j=p.length;g<j;g++){var C=p[g];if(C.ownerNode===o)return C}throw on(17)})(this.element),this.length=0}return a.prototype.insertRule=function(c,o){try{return this.sheet.insertRule(o,c),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},a.prototype.getRule=function(c){var o=this.sheet.cssRules[c];return o&&o.cssText?o.cssText:""},a})(),Vm=(function(){function a(c){this.element=ou(c),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(c,o){if(c<=this.length&&c>=0){var p=document.createTextNode(o);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},a.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},a})(),Gm=(function(){function a(c){this.rules=[],this.length=0}return a.prototype.insertRule=function(c,o){return c<=this.length&&(this.rules.splice(c,0,o),this.length++,!0)},a.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},a.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},a})(),Ip=La,Ym={isServer:!La,useCSSOMInjection:!km},cu=(function(){function a(c,o,p){c===void 0&&(c=pt),o===void 0&&(o={});var g=this;this.options=sr(sr({},Ym),c),this.gs=o,this.names=new Map(p),this.server=!!c.isServer,!this.server&&La&&Ip&&(Ip=!1,zp(this)),po(this,function(){return(function(j){for(var C=j.getTag(),_=C.length,T="",q=function(O){var F=(function(he){return Pa.get(he)})(O);if(F===void 0)return"continue";var G=j.names.get(F),ne=C.getGroup(O);if(G===void 0||!G.size||ne.length===0)return"continue";var Q="".concat(dt,".g").concat(O,'[id="').concat(F,'"]'),X="";G!==void 0&&G.forEach(function(he){he.length>0&&(X+="".concat(he,","))}),T+="".concat(ne).concat(Q,'{content:"').concat(X,'"}').concat(oo)},H=0;H<_;H++)q(H);return T})(g)})}return a.registerId=function(c){return ja(c)},a.prototype.rehydrate=function(){!this.server&&La&&zp(this)},a.prototype.reconstructWithOptions=function(c,o){return o===void 0&&(o=!0),new a(sr(sr({},this.options),c),this.gs,o&&this.names||void 0)},a.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(o){var p=o.useCSSOMInjection,g=o.target;return o.isServer?new Gm(g):p?new qm(g):new Vm(g)})(this.options),new Fm(c)));var c},a.prototype.hasNameForId=function(c,o){return this.names.has(c)&&this.names.get(c).has(o)},a.prototype.registerName=function(c,o){if(ja(c),this.names.has(c))this.names.get(c).add(o);else{var p=new Set;p.add(o),this.names.set(c,p)}},a.prototype.insertRules=function(c,o,p){this.registerName(c,o),this.getTag().insertRules(ja(c),p)},a.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},a.prototype.clearRules=function(c){this.getTag().clearGroup(ja(c)),this.clearNames(c)},a.prototype.clearTag=function(){this.tag=void 0},a})(),Km=/&/g,Xm=/^\s*\/\/.*$/gm;function du(a,c){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(c," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(c," ")),o.props=o.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=du(o.children,c)),o})}function Jm(a){var c,o,p,g=pt,j=g.options,C=j===void 0?pt:j,_=g.plugins,T=_===void 0?Ba:_,q=function(F,G,ne){return ne.startsWith(o)&&ne.endsWith(o)&&ne.replaceAll(o,"").length>0?".".concat(c):F},H=T.slice();H.push(function(F){F.type===Aa&&F.value.includes("&")&&(F.props[0]=F.props[0].replace(Km,o).replace(p,q))}),C.prefix&&H.push(Nm),H.push(ym);var O=function(F,G,ne,Q){G===void 0&&(G=""),ne===void 0&&(ne=""),Q===void 0&&(Q="&"),c=Q,o=G,p=new RegExp("\\".concat(o,"\\b"),"g");var X=F.replace(Xm,""),he=gm(ne||G?"".concat(ne," ").concat(G," { ").concat(X," }"):X);C.namespace&&(he=du(he,C.namespace));var le=[];return Ea(he,jm(H.concat(bm(function(ae){return le.push(ae)})))),le};return O.hash=T.length?T.reduce(function(F,G){return G.name||on(15),it(F,G.name)},su).toString():"",O}var Zm=new cu,Zl=Jm(),pu=vr.createContext({shouldForwardProp:void 0,styleSheet:Zm,stylis:Zl});pu.Consumer;vr.createContext(void 0);function Ep(){return V.useContext(pu)}var ef=(function(){function a(c,o){var p=this;this.inject=function(g,j){j===void 0&&(j=Zl);var C=p.name+j.hash;g.hasNameForId(p.id,C)||g.insertRules(p.id,C,j(p.rules,C,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=o,po(this,function(){throw on(12,String(p.name))})}return a.prototype.getName=function(c){return c===void 0&&(c=Zl),this.name+c.hash},a})(),rf=function(a){return a>="A"&&a<="Z"};function Lp(a){for(var c="",o=0;o<a.length;o++){var p=a[o];if(o===1&&p==="-"&&a[0]==="-")return a;rf(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var uu=function(a){return a==null||a===!1||a===""},hu=function(a){var c,o,p=[];for(var g in a){var j=a[g];a.hasOwnProperty(g)&&!uu(j)&&(Array.isArray(j)&&j.isCss||ut(j)?p.push("".concat(Lp(g),":"),j,";"):an(j)?p.push.apply(p,Ia(Ia(["".concat(g," {")],hu(j),!1),["}"],!1)):p.push("".concat(Lp(g),": ").concat((c=g,(o=j)==null||typeof o=="boolean"||o===""?"":typeof o!="number"||o===0||c in wm||c.startsWith("--")?String(o).trim():"".concat(o,"px")),";")))}return p};function Ps(a,c,o,p){if(uu(a))return[];if(co(a))return[".".concat(a.styledComponentId)];if(ut(a)){if(!ut(j=a)||j.prototype&&j.prototype.isReactComponent||!c)return[a];var g=a(c);return Ps(g,c,o,p)}var j;return a instanceof ef?o?(a.inject(o,p),[a.getName(p)]):[a]:an(a)?hu(a):Array.isArray(a)?Array.prototype.concat.apply(Ba,a.map(function(C){return Ps(C,c,o,p)})):[a.toString()]}function sf(a){for(var c=0;c<a.length;c+=1){var o=a[c];if(ut(o)&&!co(o))return!1}return!0}var tf=tu(Fa),nf=(function(){function a(c,o,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&sf(c),this.componentId=o,this.baseHash=it(tf,o),this.baseStyle=p,cu.registerId(o)}return a.prototype.generateAndInjectStyles=function(c,o,p){var g=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,o,p):"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))g=Is(g,this.staticRulesId);else{var j=Tp(Ps(this.rules,c,o,p)),C=Xl(it(this.baseHash,j)>>>0);if(!o.hasNameForId(this.componentId,C)){var _=p(j,".".concat(C),void 0,this.componentId);o.insertRules(this.componentId,C,_)}g=Is(g,C),this.staticRulesId=C}else{for(var T=it(this.baseHash,p.hash),q="",H=0;H<this.rules.length;H++){var O=this.rules[H];if(typeof O=="string")q+=O;else if(O){var F=Tp(Ps(O,c,o,p));T=it(T,F+H),q+=F}}if(q){var G=Xl(T>>>0);o.hasNameForId(this.componentId,G)||o.insertRules(this.componentId,G,p(q,".".concat(G),void 0,this.componentId)),g=Is(g,G)}}return g},a})(),xu=vr.createContext(void 0);xu.Consumer;var Hl={};function af(a,c,o){var p=co(a),g=a,j=!$l(a),C=c.attrs,_=C===void 0?Ba:C,T=c.componentId,q=T===void 0?(function(ee,pe){var Y=typeof ee!="string"?"sc":Np(ee);Hl[Y]=(Hl[Y]||0)+1;var U="".concat(Y,"-").concat(Im(Fa+Y+Hl[Y]));return pe?"".concat(pe,"-").concat(U):U})(c.displayName,c.parentComponentId):T,H=c.displayName,O=H===void 0?(function(ee){return $l(ee)?"styled.".concat(ee):"Styled(".concat(Em(ee),")")})(a):H,F=c.displayName&&c.componentId?"".concat(Np(c.displayName),"-").concat(c.componentId):c.componentId||q,G=p&&g.attrs?g.attrs.concat(_).filter(Boolean):_,ne=c.shouldForwardProp;if(p&&g.shouldForwardProp){var Q=g.shouldForwardProp;if(c.shouldForwardProp){var X=c.shouldForwardProp;ne=function(ee,pe){return Q(ee,pe)&&X(ee,pe)}}else ne=Q}var he=new nf(o,F,p?g.componentStyle:void 0);function le(ee,pe){return(function(Y,U,Ee){var tr=Y.attrs,jr=Y.componentStyle,Dr=Y.defaultProps,dr=Y.foldedComponentIds,qe=Y.styledComponentId,nr=Y.target,pr=vr.useContext(xu),We=Ep(),fe=Y.shouldForwardProp||We.shouldForwardProp,z=Sm(U,pr,Dr)||pt,D=(function(te,re,ue){for(var ie,ce=sr(sr({},re),{className:void 0,theme:ue}),De=0;De<te.length;De+=1){var Or=ut(ie=te[De])?ie(ce):ie;for(var br in Or)ce[br]=br==="className"?Is(ce[br],Or[br]):br==="style"?sr(sr({},ce[br]),Or[br]):Or[br]}return re.className&&(ce.className=Is(ce.className,re.className)),ce})(tr,U,z),I=D.as||nr,m={};for(var b in D)D[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&D.theme===z||(b==="forwardedAs"?m.as=D.forwardedAs:fe&&!fe(b,I)||(m[b]=D[b]));var K=(function(te,re){var ue=Ep(),ie=te.generateAndInjectStyles(re,ue.styleSheet,ue.stylis);return ie})(jr,D),J=Is(dr,qe);return K&&(J+=" "+K),D.className&&(J+=" "+D.className),m[$l(I)&&!ru.has(I)?"class":"className"]=J,Ee&&(m.ref=Ee),V.createElement(I,m)})(ae,ee,pe)}le.displayName=O;var ae=vr.forwardRef(le);return ae.attrs=G,ae.componentStyle=he,ae.displayName=O,ae.shouldForwardProp=ne,ae.foldedComponentIds=p?Is(g.foldedComponentIds,g.styledComponentId):"",ae.styledComponentId=F,ae.target=p?g.target:a,Object.defineProperty(ae,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(ee){this._foldedDefaultProps=p?(function(pe){for(var Y=[],U=1;U<arguments.length;U++)Y[U-1]=arguments[U];for(var Ee=0,tr=Y;Ee<tr.length;Ee++)Jl(pe,tr[Ee],!0);return pe})({},g.defaultProps,ee):ee}}),po(ae,function(){return".".concat(ae.styledComponentId)}),j&&lu(ae,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),ae}function Pp(a,c){for(var o=[a[0]],p=0,g=c.length;p<g;p+=1)o.push(c[p],a[p+1]);return o}var Rp=function(a){return Object.assign(a,{isCss:!0})};function lf(a){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];if(ut(a)||an(a))return Rp(Ps(Pp(Ba,Ia([a],c,!0))));var p=a;return c.length===0&&p.length===1&&typeof p[0]=="string"?Ps(p):Rp(Ps(Pp(p,c)))}function eo(a,c,o){if(o===void 0&&(o=pt),!c)throw on(1,c);var p=function(g){for(var j=[],C=1;C<arguments.length;C++)j[C-1]=arguments[C];return a(c,o,lf.apply(void 0,Ia([g],j,!1)))};return p.attrs=function(g){return eo(a,c,sr(sr({},o),{attrs:Array.prototype.concat(o.attrs,g).filter(Boolean)}))},p.withConfig=function(g){return eo(a,c,sr(sr({},o),g))},p}var mu=function(a){return eo(af,a)},ve=mu;ru.forEach(function(a){ve[a]=mu(a)});const ba={Wrapper:ve.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:ve.header`
        /* border: 1px solid #f00; */
        height: 64px;
        flex-shrink: 0;
    `,Main:ve.main`
        /* border: 1px solid #f00; */
        flex: 1;
        overflow-y: auto;
        position: relative;

        .contentWrapper {
            /* border: 1px solid #f00; */
            min-height: 100%;
            max-width: 1440px;
            margin: auto;
            display: flex;
            flex-direction: column;
            padding: 15px;

            .category {
                margin: 30px 0 15px 0;
            }
        }

        .footerWrapper {
            /* border: 1px solid #f00; */
            /* min-height: 300px; */
            flex-shrink: 0;
        }
    `,GoToTop:ve.button`
        position: fixed;
        right: 24px;
        bottom: 24px;
        z-index: 80;
        display: grid;
        place-items: center;
        width: 42px;
        height: 42px;
        border: 1px solid var(--color-border);
        border-radius: 50%;
        background: var(--color-surface-2);
        color: var(--color-text-primary);
        box-shadow: 0 12px 30px var(--color-shadow);
        cursor: pointer;
        transition: border-color 180ms ease, box-shadow 180ms ease, color 180ms ease, text-shadow 180ms ease;

        &:hover,
        &:focus-visible {
            border-color: var(--color-primary);
            color: var(--color-primary);
            box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 18%, transparent);
            text-shadow: 0 0 12px color-mix(in srgb, var(--color-primary) 65%, transparent);
        }

        &:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
        }

        svg {
            width: 17px;
            height: 17px;
        }

        @media (width < 520px) {
            right: 16px;
            bottom: 16px;
        }
    `},_p={Wrapper:ve.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;

        border-bottom: 1px solid var(--color-border);
        background: color-mix(
            in srgb,
            var(--color-bg) 86%,
            var(--color-surface)
        );

        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 50;
        height: 64px;

        box-shadow: 0 10px 30px var(--color-shadow);
        overflow: hidden;

        /* blueprint grid + diagonal beam for system design vibe */
        &::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                radial-gradient(
                    420px 160px at 15% 0%,
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                    transparent 60%
                ),
                radial-gradient(
                    420px 160px at 85% 0%,
                    color-mix(in srgb, var(--color-accent) 16%, transparent),
                    transparent 60%
                );
            background-size:
                26px 26px,
                26px 26px,
                auto,
                auto;
            opacity: 0.55;

            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.95),
                rgba(0, 0, 0, 0)
            );
        }

        &::after {
            content: "";
            position: absolute;
            top: -20px;
            left: -10%;
            width: 60%;
            height: 130%;
            pointer-events: none;
            background: linear-gradient(
                120deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 14%, transparent),
                transparent
            );
            transform: rotate(-8deg);
            opacity: 0.65;
        }
    `,Main:ve.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        position: relative;
        z-index: 1;

        .leftSide {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 14px;
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 6px;

            background:
                radial-gradient(
                    90px 70px at 20% 20%,
                    color-mix(in srgb, var(--color-primary) 16%, transparent),
                    transparent 60%
                ),
                linear-gradient(
                    180deg,
                    var(--color-surface),
                    var(--color-surface-2)
                );

            border: 1px solid var(--color-border);

            box-shadow:
                0 0 0 1px
                    color-mix(in srgb, var(--color-primary) 12%, transparent),
                0 14px 30px var(--color-shadow);

            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                transition: opacity 180ms ease;
                filter: saturate(1.06) contrast(1.03);
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background:
                    radial-gradient(
                        120px 90px at 20% 20%,
                        color-mix(
                            in srgb,
                            var(--color-primary) 22%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    radial-gradient(
                        120px 90px at 85% 80%,
                        color-mix(
                            in srgb,
                            var(--color-accent) 18%,
                            transparent
                        ),
                        transparent 62%
                    ),
                    var(--color-surface-2);
                opacity: 0.85;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 900;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .miniStats {
            display: flex;
            align-items: center;
            gap: 8px;
            flex: 0 0 auto;

            @media (width < 860px) {
                display: none;
            }
        }

        .stat {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;

            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            box-shadow: 0 10px 22px var(--color-shadow);

            color: var(--color-text-secondary);
            font-size: 12.5px;
            font-weight: 800;

            .sIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: color-mix(
                    in srgb,
                    var(--color-primary) 78%,
                    var(--color-text-primary)
                );
            }

            .sIcon svg {
                width: 14px;
                height: 14px;
            }

            .sText {
                line-height: 1;
            }
        }

        .rightSide {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 0 0 auto;
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 14px;

            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);

            box-shadow: 0 10px 22px var(--color-shadow);

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;

                color: color-mix(
                    in srgb,
                    var(--color-primary) 84%,
                    var(--color-text-primary)
                );
            }

            .label {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: linear-gradient(
                    180deg,
                    color-mix(in srgb, var(--color-surface) 92%, transparent),
                    color-mix(in srgb, var(--color-surface-2) 78%, #000)
                );
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
                box-shadow:
                    0 0 0 4px
                        color-mix(
                            in srgb,
                            var(--color-primary) 18%,
                            transparent
                        ),
                    0 10px 22px var(--color-shadow);
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},of=()=>{const[a,c]=V.useState(()=>localStorage.getItem("app-theme")||"dark");V.useEffect(()=>{document.documentElement.toggleAttribute("data-theme",a==="light"),localStorage.setItem("app-theme",a)},[a]);const o=V.useMemo(()=>a==="light"?"dark":"light",[a]);return r.jsx(_p.Wrapper,{children:r.jsxs(_p.Main,{children:[r.jsxs("div",{className:"leftSide",children:[r.jsxs("div",{className:"logoNameWrapper",children:[r.jsx("div",{className:"logoWrapper",children:r.jsx("img",{src:"/system-design-core-notes/logo.png",alt:"System design core notes"})}),r.jsxs("div",{className:"nameWrapper",children:[r.jsx("div",{className:"title",children:"system-design-core-notes"}),r.jsx("div",{className:"subTitle",children:"At-a-glance system design revision"})]})]}),r.jsxs("div",{className:"miniStats","aria-label":"Quick focus areas",children:[r.jsxs("span",{className:"stat",children:[r.jsx("span",{className:"sIcon",children:r.jsx(Rs,{})}),r.jsx("span",{className:"sText",children:"Scalability"})]}),r.jsxs("span",{className:"stat",children:[r.jsx("span",{className:"sIcon",children:r.jsx(Wp,{})}),r.jsx("span",{className:"sText",children:"Reliability"})]}),r.jsxs("span",{className:"stat",children:[r.jsx("span",{className:"sIcon",children:r.jsx(lt,{})}),r.jsx("span",{className:"sText",children:"Tradeoffs"})]})]})]}),r.jsx("div",{className:"rightSide",children:r.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:()=>c(p=>p==="light"?"dark":"light"),"aria-label":"Switch to "+o+" theme",title:"Switch to "+o,children:[r.jsx("span",{className:"icon",children:a==="light"?r.jsx(Xx,{}):r.jsx(rm,{})}),r.jsx("span",{className:"label",children:a==="light"?"Light":"Dark"})]})})]})})},cf={Wrapper:ve.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 15px;
        border-top: 1px solid var(--color-border);
        font-size: 12px;
        color: var(--color-text-muted);

        .footerCopy a {
            color: var(--color-text-secondary);
            font-weight: 700;
            transition: color 160ms ease, text-shadow 160ms ease;
        }

        .footerCopy a:hover {
            color: var(--color-text-primary);
            text-shadow: 0 0 14px
                color-mix(in srgb, var(--color-primary) 30%, transparent);
        }

        .footerLinks {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 7px;
        }

        .footerLinks a {
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
            border: 1px solid var(--color-border);
            border-radius: 9px;
            color: var(--color-text-muted);
            transition:
                border-color 160ms ease,
                color 160ms ease,
                box-shadow 160ms ease;
        }

        .footerLinks a:hover {
            color: var(--color-primary);
            border-color: var(--color-border-light);
            box-shadow: 0 0 15px
                color-mix(in srgb, var(--color-primary) 18%, transparent);
        }

        .footerLinks svg {
            width: 16px;
            height: 16px;
        }

        @media (width < 600px) {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;

            .footerLinks {
                justify-content: flex-start;
            }
        }
    `},df=[["Portfolio","https://www.ashishranjan.net/",Up],["GitHub","https://github.com/a2rp",$x],["CodePen","https://codepen.io/ash1198",_x],["LinkedIn","https://www.linkedin.com/in/aashishranjan",Gx],["Facebook","https://www.facebook.com/theash.ashish/",Fx],["YouTube","https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",nm],["Support","https://a2rp-donation-page.netlify.app/",fp],["Buy Me a Coffee","https://buymeacoffee.com/a2rp",Ax],["Patreon","https://patreon.com/a2rp",fp],["Email","mailto:ash.ranjan09@gmail.com",Kx]],pf=()=>r.jsxs(cf.Wrapper,{children:[r.jsxs("div",{className:"footerCopy",children:["Copyright © ",new Date().getFullYear()," ",r.jsx("a",{href:"https://www.ashishranjan.net/",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),r.jsx("div",{className:"footerLinks","aria-label":"Social and support links",children:df.map(([a,c,o])=>r.jsx("a",{href:c,target:"_blank",rel:"noopener noreferrer","aria-label":a,title:a,children:V.createElement(o,{"aria-hidden":!0})},a))})]}),uf={Wrapper:ve.section`
        width: 100%;
        padding: 18px 0 6px;

        .top {
            margin-bottom: 12px;
        }

        .title {
            font-size: 22px;
            letter-spacing: 0.2px;
            margin-bottom: 6px;
        }

        .sub {
            max-width: 980px;
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            margin-bottom: 10px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 4;
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        /* blueprint strip */
        .card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
        }

        .icon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 15px;
            letter-spacing: 0.2px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .note {
            margin-top: 4px;
            font-size: 12.5px;
            color: var(--color-text-muted);
            position: relative;
            z-index: 1;
            line-height: 1.6;
        }

        .list {
            display: grid;
            gap: 8px;
            position: relative;
            z-index: 1;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }
        }
    `},hf=()=>r.jsxs(uf.Wrapper,{id:"aboutSystemDesign",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"System Design"}),r.jsx("p",{className:"sub",children:'System design is about building software that survives real life. Not just "it works on my laptop" but "it works for 10 users, 10k users, and 10 million users". You learn how to split a product into services, store data safely, keep latency low, and handle failures without panic.'}),r.jsx("p",{className:"sub",children:"The main game is tradeoffs. You rarely get everything at once. You choose between consistency and availability, cost and performance, simplicity and flexibility. A good design explains why each choice was made and what breaks first when load increases."}),r.jsx("p",{className:"sub",children:"This page is a fast revision sheet. It focuses on the core building blocks like load balancing, caching, databases, queues, replication, sharding, and observability, with small mental models and real examples."})]}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"icon",children:r.jsx(Rs,{})}),r.jsx("h3",{className:"h3",children:"Think in building blocks"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Clients, APIs, services"}),r.jsx("li",{children:"Databases, caches"}),r.jsx("li",{children:"Queues, background workers"}),r.jsx("li",{children:"CDN, load balancers"}),r.jsx("li",{children:"Monitoring, logs, alerts"})]}),r.jsx("p",{className:"note",children:"Most big systems are the same blocks, just arranged differently."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"icon",children:r.jsx(lt,{})}),r.jsx("h3",{className:"h3",children:"Scale is a sequence"})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Single server"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Load balancer"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Cache"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Replicas"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Sharding"})]}),r.jsx("p",{className:"note",children:"You do not start with sharding. You earn it after traffic forces it."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"icon",children:r.jsx(Ir,{})}),r.jsx("h3",{className:"h3",children:"Reliability mindset"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Failures are normal"}),r.jsx("li",{children:"Design for retries and timeouts"}),r.jsx("li",{children:"Prevent overload with rate limits"}),r.jsx("li",{children:"Use redundancy and failover"}),r.jsx("li",{children:"Measure with SLO and alerts"})]}),r.jsx("p",{className:"note",children:"If it can fail, it will. Design should reduce blast radius."})]})]})]}),xf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 170px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .cap {
            display: grid;
            gap: 8px;
            margin-top: 10px;
        }

        .capRow {
            display: grid;
            grid-template-columns: 40px 1fr;
            gap: 10px;
            align-items: start;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .capK {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            font-weight: 1000;
            color: var(--color-text-primary);
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
        }

        .capV {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .capV b {
            color: var(--color-text-primary);
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .box {
            grid-column: span 6;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .boxTitle {
            font-weight: 1000;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            margin-bottom: 8px;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .twoCol {
                grid-template-columns: 1fr;
            }

            .box {
                grid-column: span 12;
            }
        }
    `},mf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"foundationsSystemDesign",title:"Foundations of System Design",sub:"Requirements, scale, reliability, consistency, latency, CAP, and ACID vs BASE."}),[]);return r.jsxs(xf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Rs,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Core"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx($p,{})}),r.jsx("h3",{className:"h3",children:"What is System Design"})]}),r.jsx("p",{className:"p",children:"System design means planning how a software system will work end to end, so it can handle real traffic, failures, growth, and future changes. You choose the major components like API, database, cache, queue, and services, and you explain tradeoffs."}),r.jsx("p",{className:"p",children:'A good answer is not "use microservices". A good answer is "start simple, identify bottlenecks, scale step by step, and protect reliability".'}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Requirements"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"High level design"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Data model"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Scaling plan"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Tradeoffs"})]}),r.jsx("p",{className:"note",children:"You are designing for people, traffic, and failures, not only for code correctness."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(so,{})}),r.jsx("h3",{className:"h3",children:"Functional vs Non-functional requirements"})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Functional"}),r.jsxs("div",{className:"v",children:["What the system must do.",r.jsx("span",{className:"small",children:"Example: user can upload photo, search users, send messages"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Non-functional"}),r.jsxs("div",{className:"v",children:["How well it must do it, at scale.",r.jsx("span",{className:"small",children:"Example: 99.9% uptime, 200 ms latency, handle 50k requests per second"})]})]})]}),r.jsx("p",{className:"note",children:"Most design decisions come from non-functional requirements."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(lt,{})}),r.jsx("h3",{className:"h3",children:"Scalability"})]}),r.jsx("p",{className:"p",children:"Scalability means the system can handle increased load by adding resources, while still meeting performance goals."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Vertical scaling"})," - make one machine bigger (more CPU, RAM)"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Horizontal scaling"})," - add more machines and balance traffic"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Stateless services"})," scale easier because any instance can handle any request"]})]}),r.jsx("p",{className:"note",children:"Horizontal scaling is the long-term solution, but it adds complexity."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ir,{})}),r.jsx("h3",{className:"h3",children:"Reliability vs Availability"})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Reliability"}),r.jsxs("div",{className:"v",children:["System works correctly and consistently.",r.jsx("span",{className:"small",children:"Example: no data loss, correct results, predictable behavior"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Availability"}),r.jsxs("div",{className:"v",children:["System is up and reachable when needed.",r.jsx("span",{className:"small",children:"Example: service responds even during partial failures"})]})]})]}),r.jsx("p",{className:"note",children:"A system can be available but wrong, or reliable but down. Great systems aim for both."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ye,{})}),r.jsx("h3",{className:"h3",children:"Consistency models"})]}),r.jsx("p",{className:"p",children:"Consistency answers this question: when data changes, when do other users see it. In distributed systems, data often exists in multiple places."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Strong consistency"}),r.jsxs("div",{className:"v",children:["Reads always return the latest write.",r.jsx("span",{className:"small",children:"Example: bank balance updates must be immediate"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Eventual consistency"}),r.jsxs("div",{className:"v",children:["Reads may return older data briefly, but replicas converge later.",r.jsx("span",{className:"small",children:"Example: social media like counts can lag"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Read your writes"}),r.jsxs("div",{className:"v",children:["After you update, you should see your own update on next read.",r.jsx("span",{className:"small",children:"Example: after posting a tweet, you should see it instantly"})]})]})]}),r.jsx("p",{className:"note",children:"Strong consistency is simpler mentally but harder and slower at scale."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Op,{})}),r.jsx("h3",{className:"h3",children:"Latency vs Throughput"})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Latency"}),r.jsxs("div",{className:"v",children:["Time taken for one request.",r.jsx("span",{className:"small",children:"Example: API responds in 120 ms"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Throughput"}),r.jsxs("div",{className:"v",children:["How many requests per second the system can handle.",r.jsx("span",{className:"small",children:"Example: 10k requests per second"})]})]})]}),r.jsx("p",{className:"note",children:"You can increase throughput with batching, but latency might increase."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Hp,{})}),r.jsx("h3",{className:"h3",children:"CAP theorem"})]}),r.jsx("p",{className:"p",children:"CAP says in a distributed system, when a network partition happens, you must choose between consistency and availability."}),r.jsxs("div",{className:"cap",children:[r.jsxs("div",{className:"capRow",children:[r.jsx("div",{className:"capK",children:"C"}),r.jsxs("div",{className:"capV",children:[r.jsx("b",{children:"Consistency"})," - all nodes see the same latest data"]})]}),r.jsxs("div",{className:"capRow",children:[r.jsx("div",{className:"capK",children:"A"}),r.jsxs("div",{className:"capV",children:[r.jsx("b",{children:"Availability"})," - every request gets a response"]})]}),r.jsxs("div",{className:"capRow",children:[r.jsx("div",{className:"capK",children:"P"}),r.jsxs("div",{className:"capV",children:[r.jsx("b",{children:"Partition tolerance"})," - system works despite network splits"]})]})]}),r.jsx("p",{className:"note",children:"Partition tolerance is not optional in real distributed systems. So during partition, choose C or A."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ye,{})}),r.jsx("h3",{className:"h3",children:"ACID vs BASE"})]}),r.jsx("p",{className:"p",children:"These are mental models for data correctness and behavior. ACID is commonly used with relational databases and strict transactions. BASE is common in distributed systems prioritizing availability and scale."}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"ACID"}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"A"})," - Atomicity: all or nothing transaction"]}),r.jsxs("li",{children:[r.jsx("b",{children:"C"})," - Consistency: rules and constraints stay valid"]}),r.jsxs("li",{children:[r.jsx("b",{children:"I"})," - Isolation: transactions do not interfere"]}),r.jsxs("li",{children:[r.jsx("b",{children:"D"})," - Durability: committed data is not lost"]})]}),r.jsx("div",{className:"small",children:"Use case: payments, inventory, banking"})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"BASE"}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"B"})," - Basically Available: system responds even if degraded"]}),r.jsxs("li",{children:[r.jsx("b",{children:"S"})," - Soft state: data may change while syncing"]}),r.jsxs("li",{children:[r.jsx("b",{children:"E"})," - Eventual consistency: replicas converge later"]})]}),r.jsx("div",{className:"small",children:"Use case: feeds, likes, analytics, large distributed apps"})]})]}),r.jsx("p",{className:"note",children:"Reality is mixed. Many systems use ACID where needed and BASE where acceptable."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Rs,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Requirements define everything. Scale drives architecture. CAP and consistency define tradeoffs."})]})]})]})})]})},ff={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        /* unique: blueprint "node line" */
        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background:
                radial-gradient(
                    180px 90px at 18% 30%,
                    color-mix(in srgb, var(--color-primary) 16%, transparent),
                    transparent 60%
                ),
                radial-gradient(
                    180px 90px at 82% 40%,
                    color-mix(in srgb, var(--color-accent) 14%, transparent),
                    transparent 60%
                ),
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(in srgb, var(--color-primary) 35%, transparent),
                    transparent
                );
            opacity: 0.7;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 150px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .layers {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .layer {
            display: grid;
            grid-template-columns: 90px 1fr;
            gap: 10px;
            align-items: center;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .layerTag {
            font-weight: 1000;
            color: var(--color-text-primary);
            border: 1px solid var(--color-border);
            border-radius: 999px;
            padding: 6px 10px;
            text-align: center;
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
        }

        .layerText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .layer {
                grid-template-columns: 1fr;
            }
        }
    `},gf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"architectureBasics",title:"Architecture Basics",sub:"Monolith, microservices, SOA, client-server, layered, event-driven, and hexagonal architecture."}),[]);return r.jsxs(ff.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Ye,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Core"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ra,{})}),r.jsx("h3",{className:"h3",children:"Monolith architecture"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"monolith"})," is one codebase and one deployable unit. Most features live inside a single application process."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Good for"}),r.jsx("div",{className:"v",children:"Small to medium products, fast iteration, simple deployment, easy debugging."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Problems"}),r.jsx("div",{className:"v",children:"Harder to scale different parts independently, releases can become risky as it grows."})]})]}),r.jsx("p",{className:"note",children:"Most successful systems start as a monolith and evolve only when needed."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Rs,{})}),r.jsx("h3",{className:"h3",children:"Microservices architecture"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Microservices"})," split a system into many small services. Each service owns a specific business capability and can be deployed independently."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Each service has its own code, runtime, and often its own database."}),r.jsx("li",{children:"Services talk via APIs (HTTP, gRPC) or messaging (Kafka, queues)."}),r.jsx("li",{children:"Lets teams move independently, but adds distributed system complexity."})]}),r.jsx("p",{className:"note",children:"Microservices solve team scaling and independent deploys, not just traffic scaling."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(nn,{})}),r.jsx("h3",{className:"h3",children:"Service-oriented architecture - SOA"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"SOA"})," means"," ",r.jsx("b",{children:"Service-oriented architecture"}),". It also uses services, but services are usually bigger and often share infrastructure. Traditionally SOA used centralized middleware like an ESB."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"SOA style"}),r.jsx("div",{className:"v",children:"Larger services, shared data, centralized integration layer."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Microservices style"}),r.jsx("div",{className:"v",children:"Smaller services, independent deploys, decentralized integration."})]})]}),r.jsx("p",{className:"note",children:"Interview safe line: microservices can be seen as a more fine-grained evolution of SOA."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(nn,{})}),r.jsx("h3",{className:"h3",children:"Client-server model"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Client-server"})," means clients request and servers respond. Client is usually browser or mobile app. Server handles business logic and storage."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Client"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"API"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Server"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Database"})]}),r.jsx("p",{className:"note",children:"Most system design diagrams start as client-server, then add cache, queue, and services."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Fp,{})}),r.jsx("h3",{className:"h3",children:"Layered architecture"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Layered architecture"})," separates concerns into layers. Common layers are presentation, business logic, and data access. Each layer depends on the layer below it."]}),r.jsxs("div",{className:"layers",children:[r.jsxs("div",{className:"layer",children:[r.jsx("div",{className:"layerTag",children:"UI"}),r.jsx("div",{className:"layerText",children:"Controllers, handlers, API endpoints"})]}),r.jsxs("div",{className:"layer",children:[r.jsx("div",{className:"layerTag",children:"Business"}),r.jsx("div",{className:"layerText",children:"Use cases, rules, validations, workflows"})]}),r.jsxs("div",{className:"layer",children:[r.jsx("div",{className:"layerTag",children:"Data"}),r.jsx("div",{className:"layerText",children:"Repositories, SQL, cache, external services"})]})]}),r.jsx("p",{className:"note",children:"Layering keeps code readable. Too many layers can become slow to change."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ms,{})}),r.jsx("h3",{className:"h3",children:"Event-driven architecture"})]}),r.jsxs("p",{className:"p",children:["In ",r.jsx("b",{children:"event-driven architecture"}),", services communicate by publishing events and consuming events. Producers do not directly call consumers."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'Producer publishes an event like "orderCreated".'}),r.jsx("li",{children:'Consumers react like "sendEmail", "reserveInventory".'}),r.jsx("li",{children:"Usually uses Kafka, RabbitMQ, or cloud pub-sub."})]}),r.jsx("p",{className:"note",children:"Great for async work and loose coupling, but debugging becomes harder across services."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Qx,{})}),r.jsx("h3",{className:"h3",children:"Hexagonal architecture overview"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Hexagonal architecture"})," is also called"," ",r.jsx("b",{children:"Ports and Adapters"}),". The main idea: keep core business logic independent from external systems."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Core"}),r.jsx("div",{className:"v",children:"Business rules and use cases, no database or framework dependency."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Adapters"}),r.jsx("div",{className:"v",children:"Database adapter, HTTP adapter, message queue adapter, etc."})]})]}),r.jsx("p",{className:"note",children:"This makes testing easier and allows swapping DB or transport without rewriting business logic."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Ye,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Start simple. Monolith for speed. Split when team and scaling needs force it. Layered for clarity. Event-driven for async. Hexagonal for clean core logic."})]})]})]})})]})},vf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 170px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .box {
            grid-column: span 6;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .boxTitle {
            font-weight: 1000;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            margin-bottom: 8px;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .twoCol {
                grid-template-columns: 1fr;
            }

            .box {
                grid-column: span 12;
            }
        }
    `},yf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"scalabilityConcepts",title:"Scalability Concepts",sub:"Vertical and horizontal scaling, stateless design, load balancing, auto scaling, and bottlenecks."}),[]);return r.jsxs(vf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(lt,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Scale"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Es,{})}),r.jsx("h3",{className:"h3",children:"What scalability means"})]}),r.jsx("p",{className:"p",children:"Scalability means your system can handle more load by adding resources, while still meeting the same targets like latency, error rate, and cost. Load can mean more users, more requests per second, more data, or more background jobs."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"More users"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"More traffic"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"More data"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"More reliability pressure"})]}),r.jsx("p",{className:"note",children:"Scaling is not only adding servers. It is also removing bottlenecks and protecting the database."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ex,{})}),r.jsx("h3",{className:"h3",children:"Vertical scaling"})]}),r.jsx("p",{className:"p",children:"Vertical scaling means making one machine bigger. More CPU, more RAM, faster disk. It is the fastest upgrade and simplest mentally."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Pros"})," - simple, no distributed complexity, quick win"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Cons"})," - hard limit, expensive, single machine becomes a single point of failure"]})]}),r.jsx("p",{className:"note",children:"Great for early stages. Eventually you hit the ceiling."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Fp,{})}),r.jsx("h3",{className:"h3",children:"Horizontal scaling"})]}),r.jsx("p",{className:"p",children:"Horizontal scaling means adding more machines and distributing traffic across them. This is the real long-term scaling path."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Pros"})," - scale out, better fault tolerance, cheaper per unit"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Cons"})," - needs load balancing, introduces distributed issues"]})]}),r.jsx("p",{className:"note",children:"Horizontal scaling works best when services are stateless."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ln,{})}),r.jsx("h3",{className:"h3",children:"Stateless vs Stateful services"})]}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Stateless"}),r.jsx("p",{className:"p",children:"Server does not keep user session or long-lived data in memory. Any request can go to any instance."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Easy to scale horizontally"}),r.jsx("li",{children:"Load balancer can send traffic anywhere"}),r.jsx("li",{children:"Failures are easier to recover from"})]}),r.jsx("div",{className:"small",children:"Example: API server reads session from cookie or Redis and writes to DB"})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Stateful"}),r.jsx("p",{className:"p",children:"Server keeps important state in memory, so requests must go to the same instance."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Harder to scale, needs sticky sessions"}),r.jsx("li",{children:"Instance restart can lose state"}),r.jsx("li",{children:"Failover is more complex"})]}),r.jsx("div",{className:"small",children:"Example: in-memory session store, websocket room state only in one node"})]})]}),r.jsx("p",{className:"note",children:"Move state out of app servers into shared systems like DB, Redis, or object storage."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Hp,{})}),r.jsx("h3",{className:"h3",children:"Load balancing basics"})]}),r.jsx("p",{className:"p",children:"A load balancer spreads incoming requests across multiple servers so no single server gets overloaded. It also helps with failover by removing unhealthy instances."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Common strategies - round robin, least connections, IP hash"}),r.jsx("li",{children:"Health checks - remove instances that are failing"}),r.jsx("li",{children:"Sticky sessions - used only when service is stateful"})]}),r.jsx("p",{className:"note",children:"Load balancer is the gatekeeper for scaling and reliability."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Wp,{})}),r.jsx("h3",{className:"h3",children:"Auto scaling"})]}),r.jsx("p",{className:"p",children:"Auto scaling means adding or removing server instances automatically based on load. It helps you handle traffic spikes and reduce cost when traffic is low."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Scale out when CPU, memory, or request rate crosses a threshold"}),r.jsx("li",{children:"Scale in when load is low for some time"}),r.jsx("li",{children:"Needs good health checks and warmup time planning"})]}),r.jsx("p",{className:"note",children:"Auto scaling is not magic. If DB is the bottleneck, adding API servers will not help."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Dp,{})}),r.jsx("h3",{className:"h3",children:"Bottlenecks identification"})]}),r.jsx("p",{className:"p",children:"A bottleneck is the component that hits its limit first and slows down the whole system. If you remove the wrong thing, nothing improves."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"App servers"}),r.jsxs("div",{className:"v",children:["CPU high, memory leaks, too many threads, slow code paths.",r.jsx("span",{className:"small",children:"Fix: optimize code, add caching, scale horizontally"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Database"}),r.jsxs("div",{className:"v",children:["Slow queries, locks, missing indexes, high write load.",r.jsx("span",{className:"small",children:"Fix: indexes, query tuning, read replicas, sharding later"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Network"}),r.jsxs("div",{className:"v",children:["High latency, packet loss, too much chatty communication.",r.jsx("span",{className:"small",children:"Fix: reduce calls, batch, compress, use CDN"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"External services"}),r.jsxs("div",{className:"v",children:["Payment, email, third party APIs slowing you down.",r.jsx("span",{className:"small",children:"Fix: timeouts, retries, circuit breaker, async queues"})]})]})]}),r.jsx("p",{className:"note",children:"Rule: measure first. Fix the hottest path. Protect the database."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(lt,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Start vertical, go horizontal, stay stateless, balance traffic, auto scale carefully, and always chase the real bottleneck."})]})]})]})})]})},jf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* slight blueprint grid fade */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 35%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 35%, transparent) 1px,
                    transparent 1px
                );
            background-size: 28px 28px;
            opacity: 0.1;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .box {
            grid-column: span 6;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .boxTitle {
            font-weight: 1000;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            margin-bottom: 8px;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .twoCol {
                grid-template-columns: 1fr;
            }

            .box {
                grid-column: span 12;
            }
        }
    `},bf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"loadBalancing",title:"Load Balancing",sub:"Load balancer basics, L4 vs L7, algorithms, health checks, and reverse proxy mental model."}),[]);return r.jsxs(jf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(rn,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Traffic"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(nn,{})}),r.jsx("h3",{className:"h3",children:"What is a load balancer"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"load balancer"})," is a traffic manager that sits in front of multiple servers and distributes incoming requests across them. This improves performance, increases availability, and makes scaling easier."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Clients"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Load balancer"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Server A"}),r.jsx("span",{className:"pill",children:"Server B"}),r.jsx("span",{className:"pill",children:"Server C"})]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Scale"})," - add more servers behind it"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Availability"})," - stop sending traffic to unhealthy servers"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Stability"})," - smooth spikes by spreading load"]})]}),r.jsx("p",{className:"note",children:"Without a load balancer, one server becomes a single point of failure and a scaling wall."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ye,{})}),r.jsx("h3",{className:"h3",children:"Layer 4 vs Layer 7 load balancing"})]}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Layer 4 - Transport level"}),r.jsx("p",{className:"p",children:"Works at TCP or UDP level. It routes connections based on IP and port, without understanding HTTP content."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Faster and simpler"}),r.jsx("li",{children:"Good for raw TCP services and high throughput"}),r.jsx("li",{children:"Does not do URL-based routing"})]}),r.jsx("div",{className:"small",children:"Example: route TCP connections to game servers or database proxies"})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Layer 7 - Application level"}),r.jsx("p",{className:"p",children:"Understands HTTP and can route based on URL path, headers, cookies, host, etc. It can also terminate TLS and do caching or compression."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Smarter routing"}),r.jsx("li",{children:'Can do path-based routing like "/api" and "/images"'}),r.jsx("li",{children:"More CPU work than L4"})]}),r.jsx("div",{className:"small",children:'Example: send "/api" to backend and "/static" to CDN origin servers'})]})]}),r.jsx("p",{className:"note",children:"Simple rule: L4 is connection routing, L7 is request routing."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ln,{})}),r.jsx("h3",{className:"h3",children:"Round robin"})]}),r.jsx("p",{className:"p",children:"Sends requests to servers one by one in a fixed rotation. If you have three servers, it goes A then B then C then A again."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Simple and common"}),r.jsx("li",{children:"Works well when servers are similar"}),r.jsx("li",{children:"Can be unfair if one server is slower"})]}),r.jsx("p",{className:"note",children:"Weighted round robin exists when servers are not equal."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Es,{})}),r.jsx("h3",{className:"h3",children:"Least connections"})]}),r.jsx("p",{className:"p",children:"Sends new requests to the server that currently has the fewest active connections. It helps when requests have different durations."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Good for long-lived connections"}),r.jsx("li",{children:"Balances uneven workloads better"}),r.jsx("li",{children:"Needs tracking of active connections"})]}),r.jsx("p",{className:"note",children:"For HTTP keep-alive, connections can stay open, so tracking matters."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(_a,{})}),r.jsx("h3",{className:"h3",children:"IP hash"})]}),r.jsx("p",{className:"p",children:'Chooses a server by hashing the client IP. Same client IP tends to go to the same server. This gives "sticky" behavior without cookies.'}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Useful when server keeps session state"}),r.jsx("li",{children:"Can be uneven if some IPs generate more traffic"}),r.jsx("li",{children:"Breaks when clients are behind NAT or proxies"})]}),r.jsx("p",{className:"note",children:"Sticky sessions help short term, but long term the goal is stateless services."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ir,{})}),r.jsx("h3",{className:"h3",children:"Health checks"})]}),r.jsx("p",{className:"p",children:"Health checks are periodic tests to decide if a server is healthy. If a server fails checks, the load balancer stops sending traffic to it."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Passive"})," - observe real traffic errors and timeouts"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Active"}),' - call a dedicated endpoint like "/health"']}),r.jsx("li",{children:"Use timeouts and thresholds to avoid flapping"})]}),r.jsx("p",{className:"note",children:"Health checks reduce downtime and prevent sending traffic into a dead box."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rn,{})}),r.jsx("h3",{className:"h3",children:"Reverse proxy concept"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"reverse proxy"})," is a server that sits in front of backend services and forwards client requests to them. The client talks to the proxy, not directly to the backend."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why use it"}),r.jsx("div",{className:"v",children:"Hide internal services, centralize TLS, caching, compression, routing, and security rules."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"How it relates"}),r.jsx("div",{className:"v",children:"Many Layer 7 load balancers are also reverse proxies. They route requests and can rewrite headers."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Example"}),r.jsx("div",{className:"v",children:"Nginx can act as reverse proxy and do load balancing across multiple app servers."})]})]}),r.jsx("p",{className:"note",children:"Forward proxy is for clients. Reverse proxy is for servers."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(rn,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Load balancer spreads traffic. L4 routes connections. L7 routes HTTP requests. Health checks keep bad servers out."})]})]})]})})]})},Nf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .flow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 8px;
        }

        .step {
            padding: 8px 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 80%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 900;
        }

        .arrow {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},wf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"caching",title:"Caching",sub:"Why caching exists, cache patterns, eviction policies, Redis basics, and CDN concept."}),[]);return r.jsxs(Nf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(ms,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Performance"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Es,{})}),r.jsx("h3",{className:"h3",children:"Why caching is needed"})]}),r.jsx("p",{className:"p",children:"Caching means storing a copy of data so future requests can be served faster. It reduces database load, reduces latency, and helps the system handle more traffic."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Lower latency"})," - serve from memory instead of disk or network"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Higher throughput"})," - database does fewer reads"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Cost saving"})," - fewer heavy queries and less compute"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Protects DB"})," - avoids read spikes during traffic bursts"]})]}),r.jsx("p",{className:"note",children:"Caching is powerful but introduces a new problem: stale data and invalidation."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ye,{})}),r.jsx("h3",{className:"h3",children:"Cache-aside pattern"})]}),r.jsx("p",{className:"p",children:"Cache-aside is the most common pattern. App checks cache first. If cache miss happens, app reads from DB and then fills cache."}),r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"step",children:"Read request"}),r.jsx("div",{className:"arrow",children:"-"}),r.jsx("div",{className:"step",children:"Check cache"}),r.jsx("div",{className:"arrow",children:"-"}),r.jsxs("div",{className:"step",children:["Hit - return",r.jsx("span",{className:"small",children:"fast path"})]}),r.jsx("div",{className:"arrow",children:"-"}),r.jsxs("div",{className:"step",children:["Miss - read DB",r.jsx("span",{className:"small",children:"slow path"})]}),r.jsx("div",{className:"arrow",children:"-"}),r.jsxs("div",{className:"step",children:["Put in cache",r.jsx("span",{className:"small",children:"with TTL"})]})]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Pros"})," - simple, cache only when needed"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Cons"})," - cache miss spike can hit DB hard, stale data until invalidation"]})]}),r.jsx("p",{className:"note",children:"TTL means time to live. Cached entry expires after some time."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(_a,{})}),r.jsx("h3",{className:"h3",children:"Write-through"})]}),r.jsx("p",{className:"p",children:"In write-through, every write goes to cache and database together. Cache stays fresh because writes update it immediately."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Write"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Cache update"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"DB write"})]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Pros"})," - cache is consistent for reads"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Cons"})," - higher write latency, cache might store rarely used data"]})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xs,{})}),r.jsx("h3",{className:"h3",children:"Write-back"})]}),r.jsx("p",{className:"p",children:"In write-back, writes go to cache first. Database is updated later in background. This makes writes fast, but data loss risk increases if cache crashes before flush."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Write"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Cache only"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Async DB flush"})]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Pros"})," - very fast writes"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Cons"})," - harder correctness, needs durability strategy"]})]}),r.jsx("p",{className:"note",children:"Use carefully for systems where slight risk is acceptable or durability is handled separately."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(tm,{})}),r.jsx("h3",{className:"h3",children:"Cache eviction policies"})]}),r.jsx("p",{className:"p",children:"Cache is limited in size. When it is full, it must remove some entries. Eviction policy decides what to remove."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"LRU"}),r.jsxs("div",{className:"v",children:[r.jsx("b",{children:"LRU"})," means"," ",r.jsx("b",{children:"Least Recently Used"}),". Removes the entry that was not used recently.",r.jsx("span",{className:"small",children:"Good default for general web workloads."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"LFU"}),r.jsxs("div",{className:"v",children:[r.jsx("b",{children:"LFU"})," means"," ",r.jsx("b",{children:"Least Frequently Used"}),". Removes the entry used least often.",r.jsx("span",{className:"small",children:"Works well when a small set of keys are always hot."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"FIFO"}),r.jsxs("div",{className:"v",children:[r.jsx("b",{children:"FIFO"})," means"," ",r.jsx("b",{children:"First In First Out"}),". Removes the oldest inserted entry.",r.jsx("span",{className:"small",children:"Simple but can evict hot items by accident."})]})]})]}),r.jsx("p",{className:"note",children:"Hot key means heavily requested key. Cold key means rarely requested key."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xs,{})}),r.jsx("h3",{className:"h3",children:"Redis basics"})]}),r.jsx("p",{className:"p",children:"Redis is an in-memory data store commonly used as a cache. It is fast because it serves data from RAM, not disk."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Supports key-value and data structures like lists, sets, hashes"}),r.jsx("li",{children:"Built-in TTL support for expiring keys"}),r.jsx("li",{children:"Can be used for rate limiting, session storage, queues, locks"})]}),r.jsx("p",{className:"note",children:"Redis can be configured to persist to disk, but the usual mental model is memory first."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Rx,{})}),r.jsx("h3",{className:"h3",children:"CDN concept"})]}),r.jsx("p",{className:"p",children:"CDN means Content Delivery Network. It caches static content close to users using edge servers around the world."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Great for images, videos, CSS, JS, downloads"}),r.jsx("li",{children:"Reduces latency by serving from nearest location"}),r.jsx("li",{children:"Reduces load on origin server"})]}),r.jsx("p",{className:"note",children:"CDN is basically caching, but at global edge locations."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(ms,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Cache speeds up reads. Patterns decide correctness. Eviction decides what stays."})]})]})]})})]})},kf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 170px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .box {
            grid-column: span 6;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .boxTitle {
            font-weight: 1000;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            margin-bottom: 8px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .twoCol {
                grid-template-columns: 1fr;
            }

            .box {
                grid-column: span 12;
            }
        }
    `},Sf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"databasesSystemDesign",title:"Databases",sub:"SQL vs NoSQL, indexing, normalization, replication, sharding, partitioning, and distributed DB basics."}),[]);return r.jsxs(kf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(xs,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Storage"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ye,{})}),r.jsx("h3",{className:"h3",children:"SQL vs NoSQL"})]}),r.jsx("p",{className:"p",children:"Choosing a database is mostly about your data shape, query patterns, and correctness needs. There is no universally best DB."}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"SQL (Relational)"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Structured schema with tables and relations"}),r.jsx("li",{children:"Strong transactions are common (ACID)"}),r.jsx("li",{children:"Great for joins, reporting, and complex queries"}),r.jsx("li",{children:"Scaling writes can be harder, but tools exist"})]}),r.jsx("div",{className:"small",children:"Example use: payments, inventory, orders, accounting"})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"NoSQL (Non-relational)"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Flexible schema, often document or key-value"}),r.jsx("li",{children:"Easy horizontal scaling is common"}),r.jsx("li",{children:"Often optimized for specific access patterns"}),r.jsx("li",{children:"Joins are limited, denormalization is common"})]}),r.jsx("div",{className:"small",children:"Example use: feeds, sessions, caching, large scale events"})]})]}),r.jsx("p",{className:"note",children:"Rule: choose SQL by default unless your scale or data shape clearly needs NoSQL."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xs,{})}),r.jsx("h3",{className:"h3",children:"Relational database basics"})]}),r.jsx("p",{className:"p",children:"A relational database stores data in tables (rows and columns). Relationships are created using keys."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Table"})," - collection of rows of same type"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Row"})," - one record (one entity instance)"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Primary key"})," - unique identifier of a row"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Foreign key"})," - references a row in another table"]})]}),r.jsx("p",{className:"note",children:"Relational design is about modeling relationships cleanly and keeping data consistent."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Zx,{})}),r.jsx("h3",{className:"h3",children:"Indexing"})]}),r.jsx("p",{className:"p",children:"An index is a data structure that speeds up reads by avoiding full table scans. Think of it like a book index."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Benefit"}),r.jsx("div",{className:"v",children:"Faster queries for indexed columns"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Cost"}),r.jsx("div",{className:"v",children:"Slower writes and extra storage because index must be updated"})]})]}),r.jsx("p",{className:"note",children:"Index the columns you filter, sort, and join on. Avoid indexing everything."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ln,{})}),r.jsx("h3",{className:"h3",children:"Normalization vs Denormalization"})]}),r.jsx("p",{className:"p",children:"These are data modeling strategies. Normalization reduces duplication. Denormalization improves read speed by duplicating data."}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Normalization"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Split data into multiple related tables"}),r.jsx("li",{children:"Reduce redundancy and anomalies"}),r.jsx("li",{children:"Writes stay clean and consistent"})]}),r.jsx("div",{className:"small",children:"Example: user table and address table instead of repeating address"})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Denormalization"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Duplicate some data to avoid joins"}),r.jsx("li",{children:"Reads become faster and simpler"}),r.jsx("li",{children:"Updates become harder because duplicates must be synced"})]}),r.jsx("div",{className:"small",children:"Example: storing userName with every post for fast feed reads"})]})]}),r.jsx("p",{className:"note",children:"Most systems start normalized, then denormalize only where performance demands it."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Bp,{})}),r.jsx("h3",{className:"h3",children:"Replication"})]}),r.jsx("p",{className:"p",children:"Replication means keeping copies of the same data on multiple nodes. It improves availability and read scalability."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Helps during failures (one node down, others serve)"}),r.jsx("li",{children:"Enables read scaling (serve reads from replicas)"}),r.jsx("li",{children:"Adds consistency challenges (replication lag)"})]}),r.jsx("p",{className:"note",children:"Replication is about copies. Sharding is about splitting. Both are different tools."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(to,{})}),r.jsx("h3",{className:"h3",children:"Master-slave and read replicas"})]}),r.jsx("p",{className:"p",children:"Common pattern: one primary node handles writes, replicas handle reads. People also say primary-replica instead of master-slave."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Primary (writes)"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Replicas (reads)"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Async sync"})]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Read replicas"})," reduce load on primary"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Lag"})," happens because replication may be asynchronous"]}),r.jsx("li",{children:"Some reads need to hit primary for fresh data"})]}),r.jsx("p",{className:"note",children:"Great for read-heavy systems like feeds, dashboards, search views."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Rs,{})}),r.jsx("h3",{className:"h3",children:"Partitioning"})]}),r.jsx("p",{className:"p",children:"Partitioning means splitting a big table into smaller parts based on a rule, but still inside the same database system."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Range partitioning"})," - split by time ranges like monthly data"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Hash partitioning"})," - split by hashing a key"]}),r.jsxs("li",{children:[r.jsx("b",{children:"List partitioning"})," - split by category values"]})]}),r.jsx("p",{className:"note",children:"Partitioning improves manageability and performance for large datasets."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(nn,{})}),r.jsx("h3",{className:"h3",children:"Sharding"})]}),r.jsx("p",{className:"p",children:"Sharding means splitting data across multiple databases or nodes. Each shard holds only a portion of data. This is mainly for scaling writes and storage."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Shard key"}),r.jsxs("div",{className:"v",children:["The field used to decide which shard stores the data.",r.jsx("span",{className:"small",children:"Example: userId based sharding"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Problem"}),r.jsx("div",{className:"v",children:"Cross-shard joins and transactions become hard."})]})]}),r.jsx("p",{className:"note",children:"Sharding is powerful but expensive in complexity. Do it only when needed."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ye,{})}),r.jsx("h3",{className:"h3",children:"Distributed databases"})]}),r.jsx("p",{className:"p",children:"A distributed database stores and serves data across multiple nodes, often across multiple regions. It is built to scale and survive failures, but it introduces tradeoffs around consistency and latency."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why"}),r.jsx("div",{className:"v",children:"Scale, availability, geo-distribution, fault tolerance"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Challenges"}),r.jsx("div",{className:"v",children:"Consistency, partitions, leader election, replication lag"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Common pattern"}),r.jsx("div",{className:"v",children:"Replication for reads and availability, sharding for write scale"})]})]}),r.jsx("p",{className:"note",children:"Distributed DB design is where CAP tradeoffs become real."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(xs,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Index helps reads. Replication copies data. Partition splits inside a DB. Sharding splits across DBs."})]})]})]})})]})},Cf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            margin-top: 8px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .box {
            grid-column: span 6;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .boxTitle {
            font-weight: 1000;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            margin-bottom: 8px;
        }

        .compare {
            margin-top: 12px;
        }

        .capRow {
            display: grid;
            grid-template-columns: 46px 1fr;
            gap: 10px;
            align-items: center;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .capK {
            width: 46px;
            height: 46px;
            border-radius: 16px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
        }

        .capK svg {
            width: 18px;
            height: 18px;
        }

        .capV {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .capV b {
            color: var(--color-text-primary);
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .twoCol {
                grid-template-columns: 1fr;
            }

            .box {
                grid-column: span 12;
            }
        }
    `},Tf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"dataStorageConcepts",title:"Data Storage Concepts",sub:"Object, blob, file, block storage, and data lake vs data warehouse."}),[]);return r.jsxs(Cf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Fl,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Storage"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ra,{})}),r.jsx("h3",{className:"h3",children:"Object storage"})]}),r.jsxs("p",{className:"p",children:["Object storage stores data as ",r.jsx("b",{children:"objects"}),". Each object has the data itself, metadata, and a unique ID. You do not access it like a normal folder drive, you access it via API."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Best for"}),r.jsx("div",{className:"v",children:"Images, videos, backups, logs, large static files"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Access"}),r.jsx("div",{className:"v",children:"HTTP API, URL-based access, often globally distributed"})]})]}),r.jsx("p",{className:"note",children:'Think "bucket of objects". Great durability, huge scale, not for random file edits.'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ye,{})}),r.jsx("h3",{className:"h3",children:"Blob storage"})]}),r.jsxs("p",{className:"p",children:["Blob storage means storing data as a"," ",r.jsx("b",{children:"binary large object"}),'. In practice, blob storage is very similar to object storage. The word "blob" is used a lot in cloud platforms.']}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Blob means a big chunk of bytes - like a file."}),r.jsx("li",{children:"You read or write the blob as a whole."}),r.jsx("li",{children:"Good for unstructured data like media and documents."})]}),r.jsx("p",{className:"note",children:"Simple mental model: object storage is a general concept, blob is a common cloud naming for it."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ux,{})}),r.jsx("h3",{className:"h3",children:"File storage"})]}),r.jsx("p",{className:"p",children:"File storage is the classic folder and file system model. You get directories, filenames, permissions, and you can mount it like a drive."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Best for"}),r.jsx("div",{className:"v",children:"Shared folders, user home dirs, app assets that need file APIs"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Access"}),r.jsx("div",{className:"v",children:"POSIX-like file operations - read, write, rename, lock"})]})]}),r.jsx("p",{className:"note",children:"File storage is convenient, but scaling and high throughput can be harder than object storage."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Fl,{})}),r.jsx("h3",{className:"h3",children:"Block storage"})]}),r.jsx("p",{className:"p",children:"Block storage provides raw storage volumes split into fixed-size blocks. A server treats it like a disk. You put your own file system on top."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Best for"}),r.jsx("div",{className:"v",children:"Databases, VM disks, low latency workloads"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Access"}),r.jsx("div",{className:"v",children:"Attached to a machine, reads and writes blocks, very fast"})]})]}),r.jsx("p",{className:"note",children:"Block storage is like a hard drive. File storage is like folders. Object storage is like a bucket."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xs,{})}),r.jsx("h3",{className:"h3",children:"Data lake vs Data warehouse"})]}),r.jsx("p",{className:"p",children:"Both are used for analytics, reporting, and large-scale data processing, but they differ in how data is stored and how strict the structure is."}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Data lake"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Stores raw data in many formats (JSON, CSV, logs, images)"}),r.jsx("li",{children:"Schema on read - structure is applied when you query"}),r.jsx("li",{children:"Cheap storage, good for ML and exploration"})]}),r.jsx("div",{className:"small",children:"Example use: store clickstream logs and process later"})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Data warehouse"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Stores cleaned, structured data (tables, models)"}),r.jsx("li",{children:"Schema on write - structure is applied before storing"}),r.jsx("li",{children:"Fast analytics queries, consistent reporting"})]}),r.jsx("div",{className:"small",children:"Example use: dashboards for finance and business reporting"})]})]}),r.jsx("div",{className:"compare",children:r.jsxs("div",{className:"capRow",children:[r.jsx("div",{className:"capK",children:r.jsx(Rs,{})}),r.jsxs("div",{className:"capV",children:[r.jsx("b",{children:"Simple rule"})," - data lake is raw and flexible, warehouse is clean and optimized for reporting."]})]})}),r.jsx("p",{className:"note",children:"Many companies use both: lake for ingestion and exploration, warehouse for curated analytics."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Fl,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Object and blob are API-first. File is folders. Block is raw disk. Lake is raw data, warehouse is curated data."})]})]})]})})]})},zf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        /* system design strip */
        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 170px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .box {
            grid-column: span 6;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .boxTitle {
            font-weight: 1000;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            margin-bottom: 8px;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .box {
                grid-column: span 12;
            }
        }
    `},If=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"messagingAndQueues",title:"Messaging and Queues",sub:"Queues, async processing, brokers, Kafka, RabbitMQ, pub-sub, and event streaming."}),[]);return r.jsxs(zf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Bl,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Async"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx($p,{})}),r.jsx("h3",{className:"h3",children:"Why queues are needed"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"queue"})," is a buffer between two parts of a system so they do not have to run at the same speed. It helps when incoming traffic is bursty, when tasks are slow, or when you want reliable background work."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Smooth spikes"}),r.jsxs("div",{className:"v",children:["If 10k requests arrive suddenly, queue stores tasks and workers process steadily.",r.jsx("span",{className:"small",children:"Example: image processing, video encoding, sending emails"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Decouple services"}),r.jsxs("div",{className:"v",children:["Producer does not need to know how the consumer works, just pushes a message.",r.jsx("span",{className:"small",children:'Example: order service emits "orderCreated", shipping service consumes it'})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Reliability"}),r.jsx("div",{className:"v",children:"If a consumer is down, messages can stay queued until it comes back."})]})]}),r.jsx("p",{className:"note",children:"Simple idea: queue is a shock absorber between traffic and processing."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ao,{})}),r.jsx("h3",{className:"h3",children:"Synchronous vs Asynchronous processing"})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Synchronous"}),r.jsxs("div",{className:"v",children:["Client waits until work is done.",r.jsx("span",{className:"small",children:"Example: login request must complete before response"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Asynchronous"}),r.jsxs("div",{className:"v",children:["Client gets quick response, work happens later.",r.jsx("span",{className:"small",children:'Example: "your report is being generated", then notify when ready'})]})]})]}),r.jsx("p",{className:"note",children:"Async is great for slow tasks. Sync is needed when user must see result immediately."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ye,{})}),r.jsx("h3",{className:"h3",children:"Message brokers"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"message broker"})," is software that receives messages from producers and delivers them to consumers. It handles routing, persistence, retries, and delivery guarantees."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Producer"})," sends message"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Broker"})," stores and routes message"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Consumer"})," receives and processes message"]})]}),r.jsx("p",{className:"note",children:"Broker reduces direct dependencies between services."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Jx,{})}),r.jsx("h3",{className:"h3",children:"Kafka basics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Apache Kafka"})," is a distributed event streaming platform. It is designed for high throughput, durable logs, and multiple consumers reading the same events. Think of Kafka as a big append-only log that many services can read from."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Topic"}),r.jsxs("div",{className:"v",children:["Category of events.",r.jsx("span",{className:"small",children:'Example: "payments", "userEvents", "orderEvents"'})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Partition"}),r.jsx("div",{className:"v",children:"Topic is split into partitions for parallelism and scaling. Order is guaranteed inside one partition."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Consumer group"}),r.jsx("div",{className:"v",children:"Multiple consumers share work. Each partition is consumed by one consumer in the group."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Offset"}),r.jsx("div",{className:"v",children:"Position in the log. Consumers track offsets to know what they have processed."})]})]}),r.jsx("p",{className:"note",children:"Kafka is great for event streams, analytics pipelines, and real-time data flows."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Bl,{})}),r.jsx("h3",{className:"h3",children:"RabbitMQ basics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"RabbitMQ"})," is a message broker focused on reliable messaging and flexible routing. It is often used for task queues and command-style messaging between services."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Queue"}),r.jsx("div",{className:"v",children:"Messages sit in a queue until consumed."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Exchange"}),r.jsx("div",{className:"v",children:"Entry point for messages. Exchanges route messages to queues based on rules."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Ack"}),r.jsx("div",{className:"v",children:"Consumer sends acknowledgment when done. If no ack, broker can retry."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Routing"}),r.jsx("div",{className:"v",children:"Direct, topic, fanout routing patterns supported."})]})]}),r.jsx("p",{className:"note",children:"RabbitMQ is great when you want strong delivery guarantees and routing flexibility."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ye,{})}),r.jsx("h3",{className:"h3",children:"Pub-sub model"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Pub-sub"})," means publishers send messages to a topic and subscribers receive them. Publishers do not know who subscribers are."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Publisher"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Topic"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Subscribers"})]}),r.jsx("p",{className:"note",children:"Use pub-sub when many services need the same event."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(lt,{})}),r.jsx("h3",{className:"h3",children:"Event streaming"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Event streaming"}),' is continuously producing and consuming events in near real time. Events are facts like "orderPlaced" or "paymentSucceeded".']}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Events are stored as an ordered stream"}),r.jsx("li",{children:"Multiple consumers can read independently"}),r.jsx("li",{children:"Useful for analytics, monitoring, and pipelines"})]}),r.jsx("p",{className:"note",children:"Kafka is a common choice for event streaming because it behaves like a durable log."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ms,{})}),r.jsx("h3",{className:"h3",children:"Kafka vs RabbitMQ - simple selection"})]}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Kafka fits when"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"High throughput event streams"}),r.jsx("li",{children:"Many consumers reading the same history"}),r.jsx("li",{children:"Replay events by offsets"}),r.jsx("li",{children:"Analytics pipelines"})]})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"RabbitMQ fits when"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Task queues and job distribution"}),r.jsx("li",{children:"Complex routing patterns"}),r.jsx("li",{children:"Per-message acknowledgment and retries"}),r.jsx("li",{children:"Command style messaging"})]})]})]}),r.jsx("p",{className:"note",children:"Many real systems use both: RabbitMQ for tasks, Kafka for event streams."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Bl,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Queue absorbs spikes. Broker routes and persists. Kafka is a log for streams. RabbitMQ is strong for tasks."})]})]})]})})]})},Ef={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        /* unique: API route line with nodes */
        .head::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;

            background:
                radial-gradient(
                    10px 10px at 12% 50%,
                    color-mix(in srgb, var(--color-primary) 88%, transparent),
                    transparent 60%
                ),
                radial-gradient(
                    10px 10px at 50% 50%,
                    color-mix(in srgb, var(--color-accent) 80%, transparent),
                    transparent 60%
                ),
                radial-gradient(
                    10px 10px at 88% 50%,
                    color-mix(in srgb, var(--color-primary) 80%, transparent),
                    transparent 60%
                ),
                linear-gradient(
                    90deg,
                    transparent,
                    color-mix(
                        in srgb,
                        var(--color-border-light) 65%,
                        transparent
                    ),
                    transparent
                );
            opacity: 0.65;
        }

        .head::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 170px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .code {
            margin-top: 10px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
        }

        .codeTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            font-size: 13px;
            letter-spacing: 0.2px;
        }

        .pre {
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.6;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},Lf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"apiDesign",title:"API Design",sub:"REST, GraphQL, gRPC, idempotency, rate limiting, and pagination patterns."}),[]);return r.jsxs(Ef.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(sn,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Interfaces"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(no,{})}),r.jsx("h3",{className:"h3",children:"REST basics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"REST"})," means"," ",r.jsx("b",{children:"Representational State Transfer"}),". It is a style for designing APIs using HTTP in a resource-first way. You model things as resources like users, orders, products, and you use HTTP methods to act on them."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Resource"}),r.jsxs("div",{className:"v",children:["A noun-like object exposed by API.",r.jsx("span",{className:"small",children:'Example: "/users", "/orders/123"'})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Common methods"}),r.jsx("div",{className:"v",children:"GET - read, POST - create, PUT - replace, PATCH - update, DELETE - remove"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Status codes"}),r.jsx("div",{className:"v",children:"200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests, 500 Server Error"})]})]}),r.jsxs("div",{className:"code",children:[r.jsx("div",{className:"codeTitle",children:"Examples"}),r.jsx("pre",{className:"pre",children:`GET /users/42
POST /orders
PATCH /users/42
DELETE /sessions/current`})]}),r.jsx("p",{className:"note",children:"REST is simple and universal. It works great with caching, CDNs, and typical web apps."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(to,{})}),r.jsx("h3",{className:"h3",children:"GraphQL overview"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"GraphQL"}),' is a query language for APIs. Client asks exactly what fields it needs, and server returns that shape. Usually there is a single endpoint like "/graphql".']}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:["Solves ",r.jsx("b",{children:"over-fetching"})," and"," ",r.jsx("b",{children:"under-fetching"}),".",r.jsx("span",{className:"small",children:"REST may return too much or require multiple calls."})]}),r.jsxs("li",{children:["Uses a ",r.jsx("b",{children:"schema"})," and types, good for large frontend teams."]}),r.jsx("li",{children:"Has complexity risks, needs depth limits and query cost controls."})]}),r.jsxs("div",{className:"code",children:[r.jsx("div",{className:"codeTitle",children:"Example query"}),r.jsx("pre",{className:"pre",children:`query {
  user(id: "42") {
    id
    name
    posts { id title }
  }
}`})]}),r.jsx("p",{className:"note",children:"GraphQL shines when clients need flexible shapes and many screens consume the same data."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ms,{})}),r.jsx("h3",{className:"h3",children:"gRPC basics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"gRPC"})," is a high-performance RPC framework usually used for internal service-to-service calls. It uses ",r.jsx("b",{children:"Protocol Buffers"})," ","(protobuf) for schema and binary encoding. It commonly runs over HTTP/2 and supports streaming."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Strongly typed contracts via protobuf definitions"}),r.jsx("li",{children:"Fast and efficient, good for microservices"}),r.jsx("li",{children:"Browser support is not as direct as REST, often used behind gateways"})]}),r.jsx("p",{className:"note",children:"Use REST for public APIs, gRPC for internal high-throughput service calls."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ir,{})}),r.jsx("h3",{className:"h3",children:"Idempotency"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Idempotency"})," means doing the same request multiple times produces the same final result. This matters because clients retry requests due to timeouts or network issues."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Naturally idempotent"}),r.jsxs("div",{className:"v",children:["GET, PUT, DELETE are typically idempotent if designed properly.",r.jsx("span",{className:"small",children:"Example: PUT /users/42 sets the same data again and again."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Usually not idempotent"}),r.jsxs("div",{className:"v",children:["POST creates new things, so repeating can duplicate.",r.jsx("span",{className:"small",children:"Example: POST /orders can create two orders if retried."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Fix for POST"}),r.jsxs("div",{className:"v",children:["Use an ",r.jsx("b",{children:"Idempotency-Key"})," header and store the result for that key.",r.jsx("span",{className:"small",children:"Common in payments and order creation."})]})]})]}),r.jsxs("div",{className:"code",children:[r.jsx("div",{className:"codeTitle",children:"Example"}),r.jsx("pre",{className:"pre",children:`POST /orders
Idempotency-Key: "b8d2-7c1a-..."

Server stores key -> orderId
Retry returns same orderId instead of creating new`})]}),r.jsx("p",{className:"note",children:"Idempotency is a safety net. It reduces double charges and duplicate records."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ir,{})}),r.jsx("h3",{className:"h3",children:"Rate limiting"})]}),r.jsx("p",{className:"p",children:"Rate limiting controls how many requests a client can make in a time window. It protects APIs from abuse, DDoS, and accidental overload."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"What to limit"}),": per IP, per user, per API key, per route"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Common response"}),": 429 Too Many Requests"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Where"}),": API gateway, load balancer, or service layer"]})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Token bucket"}),r.jsx("div",{className:"v",children:"Tokens refill over time. Each request consumes a token."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Fixed window"}),r.jsx("div",{className:"v",children:"Count requests per time window. Simple but can spike at boundary."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Sliding window"}),r.jsx("div",{className:"v",children:"More accurate limiting over time, slightly more complex."})]})]}),r.jsx("p",{className:"note",children:"Rate limiting is also a product feature, it enables fair usage tiers."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Yx,{})}),r.jsx("h3",{className:"h3",children:"Pagination strategies"})]}),r.jsx("p",{className:"p",children:"Pagination avoids returning huge lists. It keeps responses fast and prevents database overload."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Offset pagination"}),r.jsxs("div",{className:"v",children:["Uses page and limit or offset and limit.",r.jsx("span",{className:"small",children:'Example: "?page=3&limit=20"'})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Cursor pagination"}),r.jsxs("div",{className:"v",children:["Uses a cursor (last seen id or timestamp). Better for large and changing data.",r.jsx("span",{className:"small",children:'Example: "?limit=20&cursor=1700000123"'})]})]})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Offset is simple but can be slow for deep pages and can skip or duplicate when data changes."}),r.jsx("li",{children:"Cursor is stable and fast, best choice for feeds and infinite scroll."})]}),r.jsx("p",{className:"note",children:'If you expect "infinite scroll", go with cursor pagination.'})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(sn,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"REST is resources, GraphQL is flexible fields, gRPC is fast internal calls. Idempotency and rate limits protect systems. Cursor pagination scales best."})]})]})]})})]})},Pf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .title {
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .chev {
            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
        }

        .h3 {
            font-size: 14px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
            line-height: 1.6;
        }

        .list {
            display: grid;
            gap: 8px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 10px 0;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .kvs {
            display: grid;
            gap: 8px;
        }

        .kv {
            padding: 8px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        .v {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .small {
            display: block;
            font-size: 12px;
            color: var(--color-text-muted);
        }

        .note {
            font-size: 12.5px;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
        }

        .bnTitle {
            font-weight: 900;
            font-size: 13px;
            color: var(--color-text-primary);
        }

        .bnSub {
            font-size: 12.5px;
            color: var(--color-text-muted);
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }
        }
    `},Rf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"highAvailabilityFaultTolerance",title:"High Availability and Fault Tolerance",sub:"Redundancy, failover, circuit breaker, retry, backoff, and graceful degradation."}),[]);return r.jsxs(Pf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Ir,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Resilience"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Bp,{})}),r.jsx("h3",{className:"h3",children:"Redundancy"})]}),r.jsx("p",{className:"p",children:"Redundancy means having multiple copies of critical components so that if one fails, another can continue serving traffic."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Multiple application servers behind a load balancer"}),r.jsx("li",{children:"Database replicas in different zones"}),r.jsx("li",{children:"Multiple network paths"})]}),r.jsx("p",{className:"note",children:"Single point of failure is the enemy. Remove it with duplication."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ao,{})}),r.jsx("h3",{className:"h3",children:"Failover"})]}),r.jsx("p",{className:"p",children:"Failover is the automatic switch from a failed component to a healthy backup. It ensures minimal downtime when something breaks."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Primary database"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Crash"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Promote replica"})]}),r.jsx("p",{className:"note",children:"Automatic failover is preferred over manual because speed matters during outages."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ms,{})}),r.jsx("h3",{className:"h3",children:"Circuit breaker pattern"})]}),r.jsx("p",{className:"p",children:"A circuit breaker stops sending requests to a failing service to prevent cascading failures."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Closed"}),r.jsx("div",{className:"v",children:"Normal state. Requests flow normally."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Open"}),r.jsx("div",{className:"v",children:"Service is failing. Requests are blocked immediately."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Half-open"}),r.jsx("div",{className:"v",children:"Test requests are allowed to check recovery."})]})]}),r.jsx("p",{className:"note",children:"Prevents one failing service from taking down the whole system."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(_a,{})}),r.jsx("h3",{className:"h3",children:"Retry pattern"})]}),r.jsx("p",{className:"p",children:"Retry means attempting the same request again if it fails temporarily. Many failures are transient, like short network glitches."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Retry on timeout"}),r.jsx("li",{children:"Retry on temporary server error"}),r.jsx("li",{children:"Avoid retry on permanent errors"})]}),r.jsx("p",{className:"note",children:"Blind retries can increase load. Combine with backoff strategy."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(sm,{})}),r.jsx("h3",{className:"h3",children:"Backoff strategy"})]}),r.jsx("p",{className:"p",children:"Backoff means increasing the delay between retries to avoid overwhelming the system."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Fixed backoff"}),r.jsx("div",{className:"v",children:"Same delay each retry."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Exponential backoff"}),r.jsxs("div",{className:"v",children:["Delay increases exponentially.",r.jsx("span",{className:"small",children:"Example: 1s, 2s, 4s, 8s"})]})]})]}),r.jsx("p",{className:"note",children:"Exponential backoff with jitter reduces retry storms."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ir,{})}),r.jsx("h3",{className:"h3",children:"Graceful degradation"})]}),r.jsx("p",{className:"p",children:"Graceful degradation means reducing features instead of failing completely when part of the system is under stress or unavailable."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Show cached data if live service is down"}),r.jsx("li",{children:"Disable recommendations but keep checkout working"}),r.jsx("li",{children:"Serve static content instead of dynamic content"})]}),r.jsx("p",{className:"note",children:"Better to offer limited service than no service at all."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Ir,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Redundancy prevents failure. Circuit breaker prevents cascade. Retry with backoff prevents overload. Degrade gracefully under stress."})]})]})]})})]})},_f={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        /* blueprint strip */
        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 170px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .raftGrid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .raftBox {
            grid-column: span 6;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .rbTitle {
            font-weight: 1000;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            margin-bottom: 8px;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .raftBox {
                grid-column: span 12;
            }
        }
    `},Af=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"distributedSystemsConcepts",title:"Distributed Systems Concepts",sub:"Locks, leader election, consensus, Raft, clock sync, and eventual consistency."}),[]);return r.jsxs(_f.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(sn,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Core"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(sn,{})}),r.jsx("h3",{className:"h3",children:"What is a distributed system"})]}),r.jsx("p",{className:"p",children:"A distributed system is multiple machines working together as one system. It improves scale and reliability, but it introduces new problems like network delays, partial failures, duplicated messages, and data being temporarily different on different nodes."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Network is unreliable"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Nodes can fail"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Time is tricky"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Consistency costs"})]}),r.jsx("p",{className:"note",children:"Most core concepts below exist to keep the system sane under failures."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ql,{})}),r.jsx("h3",{className:"h3",children:"Distributed locks"})]}),r.jsx("p",{className:"p",children:"A distributed lock is a lock that works across machines. It ensures only one worker or service instance does a critical action at a time."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why needed"}),r.jsxs("div",{className:"v",children:["Prevent double processing when multiple instances run the same job.",r.jsx("span",{className:"small",children:"Example: only one worker should send a payment reminder for an order"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Key ideas"}),r.jsx("div",{className:"v",children:"Lock owner, TTL (time to live), safe release, and fencing tokens."})]})]}),r.jsx("p",{className:"note",children:"If a node dies while holding a lock, TTL helps release it, but TTL introduces edge cases."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Qp,{})}),r.jsx("h3",{className:"h3",children:"Leader election"})]}),r.jsx("p",{className:"p",children:"Leader election chooses one node as the leader among many. The leader coordinates work, makes decisions, or serializes writes."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Without a leader, multiple nodes can make conflicting decisions."}),r.jsx("li",{children:"If leader fails, the system elects a new leader."}),r.jsx("li",{children:"Common in distributed databases, queues, and cluster managers."})]}),r.jsx("p",{className:"note",children:"Leader election is hard because nodes can disagree due to network delays."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(so,{})}),r.jsx("h3",{className:"h3",children:"Consensus basics"})]}),r.jsx("p",{className:"p",children:"Consensus means nodes agree on a single value or single sequence of decisions, even when some nodes fail. This is the backbone of consistent distributed systems."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Goal"}),r.jsx("div",{className:"v",children:'All healthy nodes agree on "what happened" and in what order.'})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why needed"}),r.jsx("div",{className:"v",children:"For leader election, distributed locks, config changes, and write ordering."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Simple mental model"}),r.jsx("div",{className:"v",children:"Majority wins. If a majority agrees, the decision is safe."})]})]}),r.jsx("p",{className:"note",children:"Consensus trades performance for correctness under failures."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rn,{})}),r.jsx("h3",{className:"h3",children:"Raft overview"})]}),r.jsx("p",{className:"p",children:"Raft is a consensus algorithm designed to be easier to understand than older algorithms. It is used to keep a replicated log consistent across multiple nodes."}),r.jsxs("div",{className:"raftGrid",children:[r.jsxs("div",{className:"raftBox",children:[r.jsx("div",{className:"rbTitle",children:"Roles"}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Leader"})," - accepts client writes and replicates to followers"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Follower"})," - receives replicated log entries"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Candidate"})," - tries to become leader during election"]})]})]}),r.jsxs("div",{className:"raftBox",children:[r.jsx("div",{className:"rbTitle",children:"How it stays safe"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Leader sends heartbeats to show it is alive"}),r.jsx("li",{children:"Followers start election if heartbeats stop"}),r.jsx("li",{children:"Entries committed when a majority stores them"}),r.jsx("li",{children:"Log order stays consistent across the cluster"})]})]})]}),r.jsx("p",{className:"note",children:'Think of Raft as "leader based log replication with majority confirmation".'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Op,{})}),r.jsx("h3",{className:"h3",children:"Clock synchronization problem"})]}),r.jsx("p",{className:"p",children:'In distributed systems, clocks on different machines drift. Network delays also make time comparisons unreliable. This breaks assumptions like "latest timestamp means latest event".'}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Two events can appear out of order if clocks differ."}),r.jsx("li",{children:"Ordering using timestamps can be wrong under drift."}),r.jsx("li",{children:"Many systems use logical clocks or sequence numbers for ordering."})]}),r.jsx("p",{className:"note",children:"Real lesson: do not trust wall clock time for correctness."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(_a,{})}),r.jsx("h3",{className:"h3",children:"Eventual consistency"})]}),r.jsx("p",{className:"p",children:"Eventual consistency means replicas may temporarily return different values, but if updates stop, all replicas will converge to the same final value."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Write to one node"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Replicate async"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Temporary lag"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Converge"})]}),r.jsx("p",{className:"p",children:"This improves availability and performance, but the system must handle stale reads. Many products accept this for non-critical data."}),r.jsx("p",{className:"note",children:"Use eventual consistency for feeds, counters, analytics. Avoid it for strict money logic."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(sn,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Locks and leaders prevent double work. Consensus keeps nodes aligned. Time is unreliable. Eventual consistency is a tradeoff."})]})]})]})})]})},Mf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        /* unique security vibe - top strip + subtle warning diagonal */
        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background: repeating-linear-gradient(
                135deg,
                transparent,
                transparent 14px,
                color-mix(in srgb, var(--color-border) 38%, transparent) 14px,
                color-mix(in srgb, var(--color-border) 38%, transparent) 22px
            );
            opacity: 0.08;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.75),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 190px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},Df=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"securitySystemDesign",title:"Security in System Design",sub:"Auth, OAuth, JWT, TLS, API gateway, secrets, and DDoS basics in one place."}),[]);return r.jsxs(Mf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Ir,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Core"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(qx,{})}),r.jsx("h3",{className:"h3",children:"Authentication vs Authorization"})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Authentication"}),r.jsxs("div",{className:"v",children:["Proves who you are.",r.jsx("span",{className:"small",children:"Example: login with password, OTP, Google sign-in"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Authorization"}),r.jsxs("div",{className:"v",children:["Decides what you can do after login.",r.jsx("span",{className:"small",children:"Example: admin can delete users, normal user cannot"})]})]})]}),r.jsx("p",{className:"note",children:"Simple memory: authentication is identity, authorization is permission."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(no,{})}),r.jsx("h3",{className:"h3",children:"OAuth basics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"OAuth"})," means authorization delegation. It lets an app access user data from another service without sharing the user password with the app."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:["User trusts an ",r.jsx("b",{children:"Identity Provider"})," ","(Google, GitHub)"]}),r.jsx("li",{children:"App redirects user to provider to approve permissions (scopes)"}),r.jsx("li",{children:"App receives an access token to call provider APIs"})]}),r.jsx("p",{className:"note",children:"OAuth is mainly about authorization. Login flows often use OAuth plus OpenID Connect."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ql,{})}),r.jsx("h3",{className:"h3",children:"JWT"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"JWT"})," means ",r.jsx("b",{children:"JSON Web Token"}),". It is a compact token that carries claims like user id and roles, signed by the server so clients cannot tamper it."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Structure"}),r.jsxs("div",{className:"v",children:["Header.Payload.Signature",r.jsx("span",{className:"small",children:"Payload is base64 encoded, not encrypted by default"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Good for"}),r.jsxs("div",{className:"v",children:["Stateless auth and APIs",r.jsx("span",{className:"small",children:"But handle expiration, rotation, and revocation carefully"})]})]})]}),r.jsx("p",{className:"note",children:"JWT is not a session store. Keep it short-lived, and avoid putting secrets in it."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ql,{})}),r.jsx("h3",{className:"h3",children:"TLS"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"TLS"})," means ",r.jsx("b",{children:"Transport Layer Security"}),". It encrypts data in transit between client and server. HTTPS is HTTP over TLS."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Protects against eavesdropping and tampering"}),r.jsx("li",{children:"Uses certificates to verify server identity"}),r.jsx("li",{children:"Modern systems use TLS everywhere, not only on public endpoints"})]}),r.jsx("p",{className:"note",children:"TLS protects data on the wire. You still need auth and access control for the data itself."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(nn,{})}),r.jsx("h3",{className:"h3",children:"API gateway"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"API gateway"})," is a single entry point in front of backend services. It handles cross-cutting concerns so services can stay simpler."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Common jobs"}),r.jsx("div",{className:"v",children:"Authentication, rate limiting, request routing, logging, caching, and TLS termination"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why useful"}),r.jsx("div",{className:"v",children:"Central control and consistent policies across services"})]})]}),r.jsx("p",{className:"note",children:"Gateway is powerful, but do not make it a huge bottleneck. Keep it scalable."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Dx,{})}),r.jsx("h3",{className:"h3",children:"Secrets management"})]}),r.jsx("p",{className:"p",children:"Secrets are sensitive values like API keys, database passwords, signing keys, and tokens. You want to store and access them safely."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Never hardcode secrets in code or commit to git"}),r.jsx("li",{children:"Use environment variables or a secrets manager"}),r.jsx("li",{children:"Rotate keys regularly and restrict access"})]}),r.jsx("p",{className:"note",children:"Principle: least privilege. Give each service only the secrets it needs."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ix,{})}),r.jsx("h3",{className:"h3",children:"DDoS mitigation"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"DDoS"})," means"," ",r.jsx("b",{children:"Distributed Denial of Service"}),". Attackers try to overload your system using huge traffic from many sources."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Use CDN and edge protection to absorb traffic"}),r.jsx("li",{children:"Rate limit requests and block abusive IP ranges"}),r.jsx("li",{children:"Use WAF (Web Application Firewall) rules for common attacks"}),r.jsx("li",{children:"Separate critical services and protect origins"})]}),r.jsx("p",{className:"note",children:"Goal is to reduce blast radius and keep core APIs alive under load."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Ir,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Use TLS everywhere. Authenticate identity, authorize actions. Keep secrets out of code. Put a gateway and rate limiting in front. Assume attackers will try."})]})]})]})})]})},Of={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .trio {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .trioItem {
            grid-column: span 4;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .tTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .tIcon {
            width: 32px;
            height: 32px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
        }

        .tIcon svg {
            width: 16px;
            height: 16px;
        }

        .tTitle {
            font-weight: 1000;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .tSub {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }

            .trioItem {
                grid-column: span 12;
            }
        }
    `},Ff=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"monitoringObservability",title:"Monitoring and Observability",sub:"Logs, metrics, traces, APM, alerting, and the SLA, SLO, SLI trio."}),[]);return r.jsxs(Of.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Es,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Ops"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ox,{})}),r.jsx("h3",{className:"h3",children:"What is monitoring and what is observability"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Monitoring"})," tells you"," ",r.jsx("b",{children:"something is wrong"}),'. It answers "is the system healthy right now" using dashboards, charts, and alerts.']}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Observability"})," helps you explain"," ",r.jsx("b",{children:"why it is wrong"}),'. It answers "what happened inside the system" using logs, metrics, and traces with enough context to debug unknown issues.']}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Detect"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Understand"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Fix"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Prevent"})]}),r.jsx("p",{className:"note",children:"Most teams start with monitoring. Observability is what saves you during weird incidents."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Bx,{})}),r.jsx("h3",{className:"h3",children:"Logging"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Logs"})," are timestamped events. They tell you what happened at a specific moment, usually as text or JSON."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Good logs include"}),r.jsx("div",{className:"v",children:"request id, user id, service name, endpoint, latency, error stack"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Types"}),r.jsx("div",{className:"v",children:"info, warn, error, debug (debug should be limited in production)"})]})]}),r.jsx("p",{className:"note",children:"Log volume can explode at scale, so structure logs and sample where needed."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ql,{})}),r.jsx("h3",{className:"h3",children:"Metrics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Metrics"})," are numeric measurements over time. They are perfect for dashboards and alerts because they are cheap and compact."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Traffic"})," - requests per second (RPS)"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Errors"})," - error rate, 4xx or 5xx"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Latency"})," - p50, p95, p99 response times"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Saturation"})," - CPU, memory, queue depth"]})]}),r.jsx("p",{className:"note",children:"Common mindset: use metrics to detect, logs and traces to explain."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rn,{})}),r.jsx("h3",{className:"h3",children:"Tracing"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Tracing"})," shows the full path of a request as it travels across services. It helps you find the slow step and the failing dependency."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Trace"}),r.jsx("div",{className:"v",children:"The full journey of one request."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Span"}),r.jsx("div",{className:"v",children:"One step in the trace, like DB call or HTTP call."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Trace id"}),r.jsx("div",{className:"v",children:"Unique id to correlate logs across services."})]})]}),r.jsx("p",{className:"note",children:"Tracing is gold in microservices because one request might touch 10 services."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Es,{})}),r.jsx("h3",{className:"h3",children:"APM"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"APM"})," means"," ",r.jsx("b",{children:"Application Performance Monitoring"}),". It is a tooling layer that combines metrics, traces, and sometimes profiling to show health, latency, error hotspots, and slow database queries."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Shows service maps and dependency graphs"}),r.jsx("li",{children:"Highlights slow endpoints and top errors"}),r.jsx("li",{children:"Often supports distributed tracing out of the box"})]}),r.jsx("p",{className:"note",children:"APM is the dashboard that turns raw signals into action."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Px,{})}),r.jsx("h3",{className:"h3",children:"Alerting"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Alerts"})," notify humans when the system is unhealthy. Good alerts are actionable and tied to user impact."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Bad alert"}),r.jsx("div",{className:"v",children:'"CPU is 70%" without context, causes noise.'})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Good alert"}),r.jsx("div",{className:"v",children:'"p95 latency above 600 ms for 10 minutes on checkout API".'})]})]}),r.jsx("p",{className:"note",children:"Too many alerts leads to alert fatigue and missed real incidents."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Vl,{})}),r.jsx("h3",{className:"h3",children:"SLAs, SLOs, SLIs"})]}),r.jsx("p",{className:"p",children:'These three are the standard language of reliability. They help define what "good service" means and how you measure it.'}),r.jsxs("div",{className:"trio",children:[r.jsxs("div",{className:"trioItem",children:[r.jsxs("div",{className:"tTop",children:[r.jsx("span",{className:"tIcon",children:r.jsx(Ir,{})}),r.jsx("div",{className:"tTitle",children:"SLA"})]}),r.jsxs("div",{className:"tSub",children:[r.jsx("b",{children:"SLA"})," is"," ",r.jsx("b",{children:"Service Level Agreement"}),". A promise to customers, often with penalties.",r.jsx("span",{className:"small",children:"Example: 99.9% uptime per month"})]})]}),r.jsxs("div",{className:"trioItem",children:[r.jsxs("div",{className:"tTop",children:[r.jsx("span",{className:"tIcon",children:r.jsx(Vl,{})}),r.jsx("div",{className:"tTitle",children:"SLO"})]}),r.jsxs("div",{className:"tSub",children:[r.jsx("b",{children:"SLO"})," is"," ",r.jsx("b",{children:"Service Level Objective"}),". Internal target that teams aim to maintain.",r.jsx("span",{className:"small",children:"Example: 99.95% successful requests"})]})]}),r.jsxs("div",{className:"trioItem",children:[r.jsxs("div",{className:"tTop",children:[r.jsx("span",{className:"tIcon",children:r.jsx(Ql,{})}),r.jsx("div",{className:"tTitle",children:"SLI"})]}),r.jsxs("div",{className:"tSub",children:[r.jsx("b",{children:"SLI"})," is"," ",r.jsx("b",{children:"Service Level Indicator"}),". The measurement used to evaluate SLO.",r.jsx("span",{className:"small",children:"Example: error rate, latency, availability"})]})]})]}),r.jsx("p",{className:"note",children:"SLI is the metric. SLO is the target. SLA is the customer-facing commitment."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Es,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Metrics detect, logs explain, traces connect. SLA is external promise, SLO is internal target, SLI is the measurement."})]})]})]})})]})},Bf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},Wf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"performanceOptimization",title:"Performance Optimization",sub:"Connection pooling, compression, lazy loading, indexing, and batch processing."}),[]);return r.jsxs(Bf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(ms,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Speed"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Vx,{})}),r.jsx("h3",{className:"h3",children:"Connection pooling"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"connection pool"})," keeps a set of database connections open and reuses them across requests. It avoids the cost of opening and closing connections for every request."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Request"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Borrow connection"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Query"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Return connection"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Helps reduce latency under load because connection setup is expensive."}),r.jsx("li",{children:"Prevents DB overload by limiting max concurrent connections."}),r.jsx("li",{children:"Needs correct sizing. Too small causes queueing, too large can crush the DB."})]}),r.jsx("p",{className:"note",children:"If every service instance opens too many connections, the DB dies first."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ra,{})}),r.jsx("h3",{className:"h3",children:"Compression"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Compression"})," reduces payload size sent over the network. Smaller payload usually means faster transfer and better throughput, but it costs CPU to compress and decompress."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Where"}),r.jsx("div",{className:"v",children:"HTTP responses, assets, logs, backups, message payloads."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Tradeoff"}),r.jsx("div",{className:"v",children:"Less bandwidth vs more CPU usage."})]})]}),r.jsx("p",{className:"note",children:"Use compression for large text payloads like JSON, HTML, CSS."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Mx,{})}),r.jsx("h3",{className:"h3",children:"Lazy loading"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Lazy loading"})," means loading resources only when they are actually needed. This improves initial load time and reduces unnecessary work."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Frontend: load screens, images, and chunks only when user navigates."}),r.jsx("li",{children:"Backend: load heavy data only when requested, not on every request."}),r.jsx("li",{children:"Storage: fetch large blobs only when user opens them."})]}),r.jsx("p",{className:"note",children:"Goal is faster first response and smoother user experience."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xs,{})}),r.jsx("h3",{className:"h3",children:"Database indexing optimization"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"index"})," is a data structure that helps the database find rows faster. It trades extra storage and write cost for faster reads."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Good for"}),r.jsx("div",{className:"v",children:"Columns used in WHERE, JOIN, ORDER BY, GROUP BY."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Bad for"}),r.jsx("div",{className:"v",children:"Tables with heavy writes if you create too many indexes."})]})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Use indexes for common query filters and joins."}),r.jsx("li",{children:"Avoid indexing everything, writes become slow."}),r.jsx("li",{children:"Check query plan and slow query logs to decide."})]}),r.jsx("p",{className:"note",children:"Index is the most common fix for slow reads, but it has a write cost."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ye,{})}),r.jsx("h3",{className:"h3",children:"Batch processing"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Batch processing"})," means processing many items together instead of one by one. It reduces overhead like network calls, DB round trips, and per-request setup costs."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"1000 events"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Queue"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Worker"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Write in batches"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Common in analytics, emails, notifications, and logs ingestion."}),r.jsx("li",{children:"Improves throughput by reducing overhead."}),r.jsx("li",{children:"Tradeoff: higher latency for a single item because it waits for the batch."})]}),r.jsx("p",{className:"note",children:"When throughput matters more than immediate response, batching is a cheat code."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(ms,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Reduce overhead first. Reuse connections, send less data, load only what you need, index smartly, batch heavy work."})]})]})]})})]})},Uf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .twoCol {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},$f=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"designPatternsSystemDesign",title:"Design Patterns in System Design",sub:"API Gateway, Sidecar, Saga, CQRS, Event Sourcing, and Strangler pattern."}),[]);return r.jsxs(Uf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Ye,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Architecture"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Wx,{})}),r.jsx("h3",{className:"h3",children:"API Gateway pattern"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"API Gateway"})," is a single entry point for clients. Instead of calling many services directly, the client calls the gateway, and the gateway routes requests to the right backend services."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why"}),r.jsx("div",{className:"v",children:"Simplifies client, hides internal services, centralizes auth and rate limiting."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Common features"}),r.jsx("div",{className:"v",children:"Authentication, authorization, routing, rate limiting, request validation, caching, response aggregation."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Tradeoff"}),r.jsx("div",{className:"v",children:"Can become a bottleneck or single point of failure if not scaled properly."})]})]}),r.jsx("p",{className:"note",children:"Example: mobile app hits one gateway endpoint, gateway calls user service and feed service."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ra,{})}),r.jsx("h3",{className:"h3",children:"Sidecar pattern"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"sidecar"})," is a helper component running next to your service instance. Your app talks to the sidecar locally, and sidecar handles cross-cutting concerns."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Common sidecar jobs: TLS, retries, circuit breaker, service discovery, metrics, logging."}),r.jsx("li",{children:"Each service instance gets its own sidecar instance."})]}),r.jsx("p",{className:"note",children:"Example: service mesh where Envoy runs as sidecar for every service."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ln,{})}),r.jsx("h3",{className:"h3",children:"Saga pattern"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Saga"})," is used for distributed transactions across multiple services. Instead of one big database transaction, you do a sequence of local transactions, and if something fails, you run"," ",r.jsx("b",{children:"compensating actions"})," to undo work."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Problem it solves"}),r.jsx("div",{className:"v",children:"Multi-service workflows like order - payment - inventory - shipping."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Two styles"}),r.jsxs("div",{className:"v",children:[r.jsx("b",{children:"Choreography"})," (events) and"," ",r.jsx("b",{children:"Orchestration"})," (central coordinator)."]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Tradeoff"}),r.jsx("div",{className:"v",children:"More complexity. Needs idempotency, retries, and careful failure handling."})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Order created"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Payment charged"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Inventory reserved"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Ship order"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"If fail - compensate"})]}),r.jsx("p",{className:"note",children:"Compensation example: if shipping fails, release inventory and refund payment."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(to,{})}),r.jsx("h3",{className:"h3",children:"CQRS"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"CQRS"})," means"," ",r.jsx("b",{children:"Command Query Responsibility Segregation"}),". It separates write operations (commands) from read operations (queries)."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Command side"}),r.jsx("div",{className:"v",children:"Handles writes, validates rules, updates state."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Query side"}),r.jsx("div",{className:"v",children:"Optimized for reads, can use separate read models or databases."})]})]}),r.jsx("p",{className:"note",children:"Useful when reads are heavy and need different schema than writes."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ao,{})}),r.jsx("h3",{className:"h3",children:"Event sourcing"})]}),r.jsxs("p",{className:"p",children:["In ",r.jsx("b",{children:"event sourcing"}),", you store changes as a sequence of events, not just the latest state. Current state is built by replaying events."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'Event examples: "OrderPlaced", "PaymentCaptured", "ItemShipped"'}),r.jsx("li",{children:"State is derived by replaying the event log."}),r.jsx("li",{children:"Great for audit trails and debugging."})]}),r.jsx("p",{className:"note",children:"Tradeoff: needs careful event versioning and replay performance planning."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ye,{})}),r.jsx("h3",{className:"h3",children:"Strangler pattern"})]}),r.jsxs("p",{className:"p",children:["The ",r.jsx("b",{children:"strangler pattern"})," helps migrate a legacy system gradually. You do not rewrite everything at once. You build new services around the old system, route specific functionality to the new system, and slowly replace old parts."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why"}),r.jsx("div",{className:"v",children:"Reduces risk. Allows gradual migration without a big-bang rewrite."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"How it looks"}),r.jsx("div",{className:"v",children:"A routing layer sends some routes to new code and the rest to legacy."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Best use"}),r.jsx("div",{className:"v",children:"Large monolith migration to services or new architecture."})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Legacy app"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Add new service for feature A"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Route A to new"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Repeat for features"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Legacy shrinks"})]}),r.jsx("p",{className:"note",children:"This approach keeps the system live while you modernize it."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Ye,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Gateway - one entry point. Sidecar - helper next to service. Saga - distributed workflow. CQRS - split reads and writes. Event sourcing - store events. Strangler - migrate safely."})]})]})]})})]})},Hf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px;
            border-radius: 16px;
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);
            text-align: left;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-primary);
        }

        .title {
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .chev {
            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: var(--color-surface-2);
            color: var(--color-primary);
        }

        .h3 {
            font-size: 14px;
            color: var(--color-text-primary);
        }

        .list {
            display: grid;
            gap: 8px;
            font-size: 13.5px;
            color: var(--color-text-secondary);
        }

        .note {
            margin-top: 6px;
            font-size: 12.5px;
            color: var(--color-text-muted);
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }
        }
    `},Qf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"realWorldDesignExamples",title:"Real-world Design Examples",sub:"URL shortener, Twitter, WhatsApp, YouTube, Netflix, E-commerce, Chat system."}),[]);return r.jsxs(Hf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Up,{})}),r.jsxs("div",{className:"text",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsx("div",{className:"inner",children:r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(no,{})}),r.jsx("h3",{className:"h3",children:"Design URL Shortener"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Convert long URL into short unique ID"}),r.jsx("li",{children:"Store mapping in database"}),r.jsx("li",{children:"Redirect using HTTP 301 or 302"}),r.jsx("li",{children:"Handle high read traffic with caching"}),r.jsx("li",{children:"Generate IDs using base62 or hash"})]}),r.jsx("p",{className:"note",children:"Major challenge is ID generation and handling billions of redirects efficiently."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Qp,{})}),r.jsx("h3",{className:"h3",children:"Design Twitter"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Post tweets and follow users"}),r.jsx("li",{children:"Generate home timeline"}),r.jsx("li",{children:"Use fan-out on write or fan-out on read"}),r.jsx("li",{children:"Store tweets in distributed database"}),r.jsx("li",{children:"Use cache for timelines"})]}),r.jsx("p",{className:"note",children:"Timeline generation is the core complexity."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gp,{})}),r.jsx("h3",{className:"h3",children:"Design WhatsApp"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Real-time messaging using WebSocket"}),r.jsx("li",{children:"Store messages reliably"}),r.jsx("li",{children:"Deliver messages with acknowledgment"}),r.jsx("li",{children:"Support groups and media sharing"}),r.jsx("li",{children:"Handle online and offline states"})]}),r.jsx("p",{className:"note",children:"Low latency and message ordering are critical."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vp,{})}),r.jsx("h3",{className:"h3",children:"Design YouTube"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Upload and store large video files"}),r.jsx("li",{children:"Transcode into multiple resolutions"}),r.jsx("li",{children:"Use CDN for global delivery"}),r.jsx("li",{children:"Store metadata in database"}),r.jsx("li",{children:"Recommendation system integration"})]}),r.jsx("p",{className:"note",children:"Video storage and bandwidth are the main scaling challenges."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(vp,{})}),r.jsx("h3",{className:"h3",children:"Design Netflix"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Stream content globally"}),r.jsx("li",{children:"Use CDN and edge caching"}),r.jsx("li",{children:"Adaptive bitrate streaming"}),r.jsx("li",{children:"Microservices for user and content management"}),r.jsx("li",{children:"Personalized recommendations"})]}),r.jsx("p",{className:"note",children:"Availability and global distribution are key."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(em,{})}),r.jsx("h3",{className:"h3",children:"Design E-commerce System"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Product catalog and search"}),r.jsx("li",{children:"Shopping cart and checkout"}),r.jsx("li",{children:"Payment processing with ACID transactions"}),r.jsx("li",{children:"Inventory management"}),r.jsx("li",{children:"Order tracking and notifications"})]}),r.jsx("p",{className:"note",children:"Consistency is critical for payments and inventory."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gp,{})}),r.jsx("h3",{className:"h3",children:"Design Chat System"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Real-time messaging using persistent connection"}),r.jsx("li",{children:"Message queue for scaling"}),r.jsx("li",{children:"Store chat history in distributed database"}),r.jsx("li",{children:"Presence and typing indicators"}),r.jsx("li",{children:"Horizontal scaling with stateless servers"})]}),r.jsx("p",{className:"note",children:"Chat is a combination of low latency, reliability, and scale."})]})]})})})]})},qf={Wrapper:ve.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 88%, transparent),
                color-mix(in srgb, var(--color-accent) 70%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .small {
            display: block;
            margin-top: 6px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 170px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .formula {
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            margin: 10px 0;
        }

        .fTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 6px;
            letter-spacing: 0.2px;
        }

        .fRow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .eq {
            color: var(--color-text-muted);
            font-weight: 900;
        }

        .trade {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .tRow {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .tK {
            font-weight: 1000;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .tV {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv,
            .tRow {
                grid-template-columns: 1fr;
            }
        }
    `},Vf=()=>{const[a,c]=V.useState(!1),o=V.useMemo(()=>({id:"interviewStrategy",title:"Interview Strategy",sub:"How to drive the interview: clarify, estimate, model traffic and storage, find bottlenecks, explain tradeoffs."}),[]);return r.jsxs(qf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Vl,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Must know"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Be,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Hx,{})}),r.jsx("h3",{className:"h3",children:"Clarifying requirements"})]}),r.jsx("p",{className:"p",children:"Start by clarifying what we are building. Many candidates jump into architecture too fast. The best move is to lock scope first, then design."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Functional"}),r.jsxs("div",{className:"v",children:["What features are in scope.",r.jsx("span",{className:"small",children:"Example: login, create post, like, comment, follow"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Non-functional"}),r.jsxs("div",{className:"v",children:["Scale, latency, availability, consistency, cost.",r.jsx("span",{className:"small",children:"Example: 99.9% uptime, global users, 200 ms p95 API"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Constraints"}),r.jsxs("div",{className:"v",children:["Region, budget, compliance, rollout timeline.",r.jsx("span",{className:"small",children:"Example: must store data in India region, must support mobile first"})]})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Scope"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Users"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Core flows"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"SLO targets"})]}),r.jsx("p",{className:"note",children:"If requirements are unclear, your design will be random. Spend 1 to 2 minutes here."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ql,{})}),r.jsx("h3",{className:"h3",children:"Estimation techniques"})]}),r.jsx("p",{className:"p",children:"Estimation is not about perfect numbers. It is about order of magnitude so you can pick correct architecture decisions."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Use simple assumptions and round numbers."}),r.jsx("li",{children:"Prefer p95 or average, not best case."}),r.jsx("li",{children:"Keep units consistent - requests per second, bytes, seconds, days."}),r.jsx("li",{children:"Write your assumptions in the design so they are visible."})]}),r.jsx("p",{className:"note",children:"Interviewers care about your reasoning path more than the final number."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Es,{})}),r.jsx("h3",{className:"h3",children:"Traffic calculation"})]}),r.jsx("p",{className:"p",children:"Traffic means how many requests hit the system and how spiky it is. Always estimate peak load, not only daily average."}),r.jsxs("div",{className:"formula",children:[r.jsx("div",{className:"fTitle",children:"Basic formula"}),r.jsxs("div",{className:"fRow",children:[r.jsx("span",{className:"mono",children:"RPS"}),r.jsx("span",{className:"eq",children:"="}),r.jsx("span",{className:"mono",children:"requests per day"}),r.jsx("span",{className:"eq",children:"/"}),r.jsx("span",{className:"mono",children:"86400"})]}),r.jsx("div",{className:"small",children:"Peak RPS can be 2x to 10x average depending on product."})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Estimate active users per day."}),r.jsx("li",{children:"Estimate actions per user per day."}),r.jsx("li",{children:"Convert to average RPS, then apply peak multiplier."})]}),r.jsx("p",{className:"note",children:"This drives load balancer, autoscaling, cache sizing, and database capacity."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xs,{})}),r.jsx("h3",{className:"h3",children:"Storage estimation"})]}),r.jsx("p",{className:"p",children:"Storage estimation tells you database type, sharding needs, backups, and cost. Separate hot data (frequent) from cold data (rare)."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Row size estimate"}),r.jsxs("div",{className:"v",children:["Approx bytes per record.",r.jsx("span",{className:"small",children:"Example: user record 1 KB, post record 2 KB, message record 500 B"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Records per day"}),r.jsxs("div",{className:"v",children:["New records created daily.",r.jsx("span",{className:"small",children:"Example: 5 million messages per day"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Total per day"}),r.jsxs("div",{className:"v",children:[r.jsx("span",{className:"mono",children:"sizePerRecord * recordsPerDay"}),r.jsx("span",{className:"small",children:"Example: 500 B * 5M = 2.5 GB per day"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Retention"}),r.jsxs("div",{className:"v",children:["How long data is kept.",r.jsx("span",{className:"small",children:"Example: keep messages 2 years, logs 30 days"})]})]})]}),r.jsx("p",{className:"note",children:"Add overhead for indexes, replication, backups. A quick safe factor is 2x to 4x."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Dp,{})}),r.jsx("h3",{className:"h3",children:"Bottleneck identification"})]}),r.jsx("p",{className:"p",children:"Bottleneck is the first component that breaks as load grows. Find it early and design around it."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Database"})," - slow queries, hot partitions, lock contention"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Network"})," - bandwidth limits, high latency to a region"]}),r.jsxs("li",{children:[r.jsx("b",{children:"CPU"})," - heavy serialization, encryption, image processing"]}),r.jsxs("li",{children:[r.jsx("b",{children:"External dependencies"})," - third-party APIs and rate limits"]})]}),r.jsx("p",{className:"note",children:"Fixes are usually cache, async queue, batching, sharding, or precompute."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ln,{})}),r.jsx("h3",{className:"h3",children:"Tradeoff explanation"})]}),r.jsx("p",{className:"p",children:"Tradeoffs are the real scoring area. State the options, choose one, and explain why. Mention what you gain and what you lose."}),r.jsxs("div",{className:"trade",children:[r.jsxs("div",{className:"tRow",children:[r.jsx("div",{className:"tK",children:"Consistency"}),r.jsx("div",{className:"tV",children:"Strong consistency gives correctness but can increase latency and reduce availability."})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{className:"tK",children:"Cost"}),r.jsx("div",{className:"tV",children:"More replicas and regions increase reliability but cost more."})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{className:"tK",children:"Simplicity"}),r.jsx("div",{className:"tV",children:"Monolith is simpler early. Microservices help later but add ops complexity."})]})]}),r.jsx("p",{className:"note",children:'Best pattern: "Now - next - later". Start simple, then evolve when scale forces it.'})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(so,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Clarify first, estimate second, design third, then explain bottlenecks and tradeoffs clearly."})]})]})]})})]})},Gf=()=>{const a=V.useRef(null),[c,o]=V.useState(!1);V.useEffect(()=>{const g=a.current;if(!g)return;const j=()=>o(g.scrollTop>360);return j(),g.addEventListener("scroll",j,{passive:!0}),()=>g.removeEventListener("scroll",j)},[]);const p=()=>{var g;(g=a.current)==null||g.scrollTo({top:0,behavior:"smooth"})};return r.jsxs(ba.Wrapper,{children:[r.jsx(ba.Header,{children:r.jsx(of,{})}),r.jsxs(ba.Main,{ref:a,children:[r.jsxs("div",{className:"contentWrapper",children:[r.jsx(hf,{}),r.jsx(mf,{}),r.jsx(gf,{}),r.jsx(yf,{}),r.jsx(bf,{}),r.jsx(wf,{}),r.jsx(Sf,{}),r.jsx(Tf,{}),r.jsx(If,{}),r.jsx(Lf,{}),r.jsx(Rf,{}),r.jsx(Af,{}),r.jsx(Df,{}),r.jsx(Ff,{}),r.jsx(Wf,{}),r.jsx($f,{}),r.jsx(Qf,{}),r.jsx(Vf,{})]}),r.jsx("div",{className:"footerWrapper",children:r.jsx(pf,{})})]}),c&&r.jsx(ba.GoToTop,{type:"button",onClick:p,"aria-label":"Scroll to top",title:"Scroll to top",children:r.jsx(Lx,{"aria-hidden":"true"})})]})};bx.createRoot(document.getElementById("root")).render(r.jsx(r.Fragment,{children:r.jsx(Gf,{})}));
