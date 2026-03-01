(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))p(m);new MutationObserver(m=>{for(const j of m)if(j.type==="childList")for(const S of j.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&p(S)}).observe(document,{childList:!0,subtree:!0});function o(m){const j={};return m.integrity&&(j.integrity=m.integrity),m.referrerPolicy&&(j.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?j.credentials="include":m.crossOrigin==="anonymous"?j.credentials="omit":j.credentials="same-origin",j}function p(m){if(m.ep)return;m.ep=!0;const j=o(m);fetch(m.href,j)}})();function hx(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var _l={exports:{}},sn={},Al={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op;function xx(){if(op)return ne;op=1;var a=Symbol.for("react.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),S=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),W=Symbol.iterator;function J(f){return f===null||typeof f!="object"?null:(f=W&&f[W]||f["@@iterator"],typeof f=="function"?f:null)}var oe={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,U={};function V(f,b,Z){this.props=f,this.context=b,this.refs=U,this.updater=Z||oe}V.prototype.isReactComponent={},V.prototype.setState=function(f,b){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,b,"setState")},V.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function me(){}me.prototype=V.prototype;function de(f,b,Z){this.props=f,this.context=b,this.refs=U,this.updater=Z||oe}var te=de.prototype=new me;te.constructor=de,K(te,V.prototype),te.isPureReactComponent=!0;var P=Array.isArray,X=Object.prototype.hasOwnProperty,$={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function D(f,b,Z){var re,le={},ae=null,pe=null;if(b!=null)for(re in b.ref!==void 0&&(pe=b.ref),b.key!==void 0&&(ae=""+b.key),b)X.call(b,re)&&!I.hasOwnProperty(re)&&(le[re]=b[re]);var ce=arguments.length-2;if(ce===1)le.children=Z;else if(1<ce){for(var fe=Array(ce),Te=0;Te<ce;Te++)fe[Te]=arguments[Te+2];le.children=fe}if(f&&f.defaultProps)for(re in ce=f.defaultProps,ce)le[re]===void 0&&(le[re]=ce[re]);return{$$typeof:a,type:f,key:ae,ref:pe,props:le,_owner:$.current}}function ve(f,b){return{$$typeof:a,type:f.type,key:b,ref:f.ref,props:f.props,_owner:f._owner}}function Le(f){return typeof f=="object"&&f!==null&&f.$$typeof===a}function ie(f){var b={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(Z){return b[Z]})}var Ee=/\/+/g;function Se(f,b){return typeof f=="object"&&f!==null&&f.key!=null?ie(""+f.key):b.toString(36)}function qe(f,b,Z,re,le){var ae=typeof f;(ae==="undefined"||ae==="boolean")&&(f=null);var pe=!1;if(f===null)pe=!0;else switch(ae){case"string":case"number":pe=!0;break;case"object":switch(f.$$typeof){case a:case c:pe=!0}}if(pe)return pe=f,le=le(pe),f=re===""?"."+Se(pe,0):re,P(le)?(Z="",f!=null&&(Z=f.replace(Ee,"$&/")+"/"),qe(le,b,Z,"",function(Te){return Te})):le!=null&&(Le(le)&&(le=ve(le,Z+(!le.key||pe&&pe.key===le.key?"":(""+le.key).replace(Ee,"$&/")+"/")+f)),b.push(le)),1;if(pe=0,re=re===""?".":re+":",P(f))for(var ce=0;ce<f.length;ce++){ae=f[ce];var fe=re+Se(ae,ce);pe+=qe(ae,b,Z,fe,le)}else if(fe=J(f),typeof fe=="function")for(f=fe.call(f),ce=0;!(ae=f.next()).done;)ae=ae.value,fe=re+Se(ae,ce++),pe+=qe(ae,b,Z,fe,le);else if(ae==="object")throw b=String(f),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return pe}function Je(f,b,Z){if(f==null)return f;var re=[],le=0;return qe(f,re,"","",function(ae){return b.call(Z,ae,le++)}),re}function Ve(f){if(f._status===-1){var b=f._result;b=b(),b.then(function(Z){(f._status===0||f._status===-1)&&(f._status=1,f._result=Z)},function(Z){(f._status===0||f._status===-1)&&(f._status=2,f._result=Z)}),f._status===-1&&(f._status=0,f._result=b)}if(f._status===1)return f._result.default;throw f._result}var ye={current:null},z={transition:null},F={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:z,ReactCurrentOwner:$};function L(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:Je,forEach:function(f,b,Z){Je(f,function(){b.apply(this,arguments)},Z)},count:function(f){var b=0;return Je(f,function(){b++}),b},toArray:function(f){return Je(f,function(b){return b})||[]},only:function(f){if(!Le(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},ne.Component=V,ne.Fragment=o,ne.Profiler=m,ne.PureComponent=de,ne.StrictMode=p,ne.Suspense=T,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,ne.act=L,ne.cloneElement=function(f,b,Z){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var re=K({},f.props),le=f.key,ae=f.ref,pe=f._owner;if(b!=null){if(b.ref!==void 0&&(ae=b.ref,pe=$.current),b.key!==void 0&&(le=""+b.key),f.type&&f.type.defaultProps)var ce=f.type.defaultProps;for(fe in b)X.call(b,fe)&&!I.hasOwnProperty(fe)&&(re[fe]=b[fe]===void 0&&ce!==void 0?ce[fe]:b[fe])}var fe=arguments.length-2;if(fe===1)re.children=Z;else if(1<fe){ce=Array(fe);for(var Te=0;Te<fe;Te++)ce[Te]=arguments[Te+2];re.children=ce}return{$$typeof:a,type:f.type,key:le,ref:ae,props:re,_owner:pe}},ne.createContext=function(f){return f={$$typeof:S,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:j,_context:f},f.Consumer=f},ne.createElement=D,ne.createFactory=function(f){var b=D.bind(null,f);return b.type=f,b},ne.createRef=function(){return{current:null}},ne.forwardRef=function(f){return{$$typeof:E,render:f}},ne.isValidElement=Le,ne.lazy=function(f){return{$$typeof:q,_payload:{_status:-1,_result:f},_init:Ve}},ne.memo=function(f,b){return{$$typeof:Y,type:f,compare:b===void 0?null:b}},ne.startTransition=function(f){var b=z.transition;z.transition={};try{f()}finally{z.transition=b}},ne.unstable_act=L,ne.useCallback=function(f,b){return ye.current.useCallback(f,b)},ne.useContext=function(f){return ye.current.useContext(f)},ne.useDebugValue=function(){},ne.useDeferredValue=function(f){return ye.current.useDeferredValue(f)},ne.useEffect=function(f,b){return ye.current.useEffect(f,b)},ne.useId=function(){return ye.current.useId()},ne.useImperativeHandle=function(f,b,Z){return ye.current.useImperativeHandle(f,b,Z)},ne.useInsertionEffect=function(f,b){return ye.current.useInsertionEffect(f,b)},ne.useLayoutEffect=function(f,b){return ye.current.useLayoutEffect(f,b)},ne.useMemo=function(f,b){return ye.current.useMemo(f,b)},ne.useReducer=function(f,b,Z){return ye.current.useReducer(f,b,Z)},ne.useRef=function(f){return ye.current.useRef(f)},ne.useState=function(f){return ye.current.useState(f)},ne.useSyncExternalStore=function(f,b,Z){return ye.current.useSyncExternalStore(f,b,Z)},ne.useTransition=function(){return ye.current.useTransition()},ne.version="18.3.1",ne}var cp;function to(){return cp||(cp=1,Al.exports=xx()),Al.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp;function mx(){if(dp)return sn;dp=1;var a=to(),c=Symbol.for("react.element"),o=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,m=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function S(E,T,Y){var q,W={},J=null,oe=null;Y!==void 0&&(J=""+Y),T.key!==void 0&&(J=""+T.key),T.ref!==void 0&&(oe=T.ref);for(q in T)p.call(T,q)&&!j.hasOwnProperty(q)&&(W[q]=T[q]);if(E&&E.defaultProps)for(q in T=E.defaultProps,T)W[q]===void 0&&(W[q]=T[q]);return{$$typeof:c,type:E,key:J,ref:oe,props:W,_owner:m.current}}return sn.Fragment=o,sn.jsx=S,sn.jsxs=S,sn}var pp;function fx(){return pp||(pp=1,_l.exports=mx()),_l.exports}var r=fx(),wa={},Ml={exports:{}},lr={},Dl={exports:{}},Ol={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up;function gx(){return up||(up=1,(function(a){function c(z,F){var L=z.length;z.push(F);e:for(;0<L;){var f=L-1>>>1,b=z[f];if(0<m(b,F))z[f]=F,z[L]=b,L=f;else break e}}function o(z){return z.length===0?null:z[0]}function p(z){if(z.length===0)return null;var F=z[0],L=z.pop();if(L!==F){z[0]=L;e:for(var f=0,b=z.length,Z=b>>>1;f<Z;){var re=2*(f+1)-1,le=z[re],ae=re+1,pe=z[ae];if(0>m(le,L))ae<b&&0>m(pe,le)?(z[f]=pe,z[ae]=L,f=ae):(z[f]=le,z[re]=L,f=re);else if(ae<b&&0>m(pe,L))z[f]=pe,z[ae]=L,f=ae;else break e}}return F}function m(z,F){var L=z.sortIndex-F.sortIndex;return L!==0?L:z.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var j=performance;a.unstable_now=function(){return j.now()}}else{var S=Date,E=S.now();a.unstable_now=function(){return S.now()-E}}var T=[],Y=[],q=1,W=null,J=3,oe=!1,K=!1,U=!1,V=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(z){for(var F=o(Y);F!==null;){if(F.callback===null)p(Y);else if(F.startTime<=z)p(Y),F.sortIndex=F.expirationTime,c(T,F);else break;F=o(Y)}}function P(z){if(U=!1,te(z),!K)if(o(T)!==null)K=!0,Ve(X);else{var F=o(Y);F!==null&&ye(P,F.startTime-z)}}function X(z,F){K=!1,U&&(U=!1,me(D),D=-1),oe=!0;var L=J;try{for(te(F),W=o(T);W!==null&&(!(W.expirationTime>F)||z&&!ie());){var f=W.callback;if(typeof f=="function"){W.callback=null,J=W.priorityLevel;var b=f(W.expirationTime<=F);F=a.unstable_now(),typeof b=="function"?W.callback=b:W===o(T)&&p(T),te(F)}else p(T);W=o(T)}if(W!==null)var Z=!0;else{var re=o(Y);re!==null&&ye(P,re.startTime-F),Z=!1}return Z}finally{W=null,J=L,oe=!1}}var $=!1,I=null,D=-1,ve=5,Le=-1;function ie(){return!(a.unstable_now()-Le<ve)}function Ee(){if(I!==null){var z=a.unstable_now();Le=z;var F=!0;try{F=I(!0,z)}finally{F?Se():($=!1,I=null)}}else $=!1}var Se;if(typeof de=="function")Se=function(){de(Ee)};else if(typeof MessageChannel!="undefined"){var qe=new MessageChannel,Je=qe.port2;qe.port1.onmessage=Ee,Se=function(){Je.postMessage(null)}}else Se=function(){V(Ee,0)};function Ve(z){I=z,$||($=!0,Se())}function ye(z,F){D=V(function(){z(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_continueExecution=function(){K||oe||(K=!0,Ve(X))},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return J},a.unstable_getFirstCallbackNode=function(){return o(T)},a.unstable_next=function(z){switch(J){case 1:case 2:case 3:var F=3;break;default:F=J}var L=J;J=F;try{return z()}finally{J=L}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(z,F){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var L=J;J=z;try{return F()}finally{J=L}},a.unstable_scheduleCallback=function(z,F,L){var f=a.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?f+L:f):L=f,z){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=L+b,z={id:q++,callback:F,priorityLevel:z,startTime:L,expirationTime:b,sortIndex:-1},L>f?(z.sortIndex=L,c(Y,z),o(T)===null&&z===o(Y)&&(U?(me(D),D=-1):U=!0,ye(P,L-f))):(z.sortIndex=b,c(T,z),K||oe||(K=!0,Ve(X))),z},a.unstable_shouldYield=ie,a.unstable_wrapCallback=function(z){var F=J;return function(){var L=J;J=F;try{return z.apply(this,arguments)}finally{J=L}}}})(Ol)),Ol}var hp;function vx(){return hp||(hp=1,Dl.exports=gx()),Dl.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function yx(){if(xp)return lr;xp=1;var a=to(),c=vx();function o(e){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)s+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p=new Set,m={};function j(e,s){S(e,s),S(e+"Capture",s)}function S(e,s){for(m[e]=s,e=0;e<s.length;e++)p.add(s[e])}var E=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),T=Object.prototype.hasOwnProperty,Y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,q={},W={};function J(e){return T.call(W,e)?!0:T.call(q,e)?!1:Y.test(e)?W[e]=!0:(q[e]=!0,!1)}function oe(e,s,t,n){if(t!==null&&t.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return n?!1:t!==null?!t.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K(e,s,t,n){if(s===null||typeof s=="undefined"||oe(e,s,t,n))return!0;if(n)return!1;if(t!==null)switch(t.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function U(e,s,t,n,i,l,d){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=t,this.propertyName=e,this.type=s,this.sanitizeURL=l,this.removeEmptyString=d}var V={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){V[e]=new U(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var s=e[0];V[s]=new U(s,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){V[e]=new U(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){V[e]=new U(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){V[e]=new U(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){V[e]=new U(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){V[e]=new U(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){V[e]=new U(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){V[e]=new U(e,5,!1,e.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function de(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var s=e.replace(me,de);V[s]=new U(s,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var s=e.replace(me,de);V[s]=new U(s,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var s=e.replace(me,de);V[s]=new U(s,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){V[e]=new U(e,1,!1,e.toLowerCase(),null,!1,!1)}),V.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){V[e]=new U(e,1,!1,e.toLowerCase(),null,!0,!0)});function te(e,s,t,n){var i=V.hasOwnProperty(s)?V[s]:null;(i!==null?i.type!==0:n||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(K(s,t,i,n)&&(t=null),n||i===null?J(s)&&(t===null?e.removeAttribute(s):e.setAttribute(s,""+t)):i.mustUseProperty?e[i.propertyName]=t===null?i.type===3?!1:"":t:(s=i.attributeName,n=i.attributeNamespace,t===null?e.removeAttribute(s):(i=i.type,t=i===3||i===4&&t===!0?"":""+t,n?e.setAttributeNS(n,s,t):e.setAttribute(s,t))))}var P=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),$=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),Le=Symbol.for("react.provider"),ie=Symbol.for("react.context"),Ee=Symbol.for("react.forward_ref"),Se=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),Je=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),z=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var L=Object.assign,f;function b(e){if(f===void 0)try{throw Error()}catch(t){var s=t.stack.trim().match(/\n( *(at )?)/);f=s&&s[1]||""}return`
`+f+e}var Z=!1;function re(e,s){if(!e||Z)return"";Z=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(y){var n=y}Reflect.construct(e,[],s)}else{try{s.call()}catch(y){n=y}e.call(s.prototype)}else{try{throw Error()}catch(y){n=y}e()}}catch(y){if(y&&n&&typeof y.stack=="string"){for(var i=y.stack.split(`
`),l=n.stack.split(`
`),d=i.length-1,u=l.length-1;1<=d&&0<=u&&i[d]!==l[u];)u--;for(;1<=d&&0<=u;d--,u--)if(i[d]!==l[u]){if(d!==1||u!==1)do if(d--,u--,0>u||i[d]!==l[u]){var h=`
`+i[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=u);break}}}finally{Z=!1,Error.prepareStackTrace=t}return(e=e?e.displayName||e.name:"")?b(e):""}function le(e){switch(e.tag){case 5:return b(e.type);case 16:return b("Lazy");case 13:return b("Suspense");case 19:return b("SuspenseList");case 0:case 2:case 15:return e=re(e.type,!1),e;case 11:return e=re(e.type.render,!1),e;case 1:return e=re(e.type,!0),e;default:return""}}function ae(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case $:return"Portal";case ve:return"Profiler";case D:return"StrictMode";case Se:return"Suspense";case qe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ie:return(e.displayName||"Context")+".Consumer";case Le:return(e._context.displayName||"Context")+".Provider";case Ee:var s=e.render;return e=e.displayName,e||(e=s.displayName||s.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Je:return s=e.displayName||null,s!==null?s:ae(e.type)||"Memo";case Ve:s=e._payload,e=e._init;try{return ae(e(s))}catch{}}return null}function pe(e){var s=e.type;switch(e.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=s.render,e=e.displayName||e.name||"",s.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(s);case 8:return s===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ce(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fe(e){var s=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Te(e){var s=fe(e)?"checked":"value",t=Object.getOwnPropertyDescriptor(e.constructor.prototype,s),n=""+e[s];if(!e.hasOwnProperty(s)&&typeof t!="undefined"&&typeof t.get=="function"&&typeof t.set=="function"){var i=t.get,l=t.set;return Object.defineProperty(e,s,{configurable:!0,get:function(){return i.call(this)},set:function(d){n=""+d,l.call(this,d)}}),Object.defineProperty(e,s,{enumerable:t.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[s]}}}}function Gr(e){e._valueTracker||(e._valueTracker=Te(e))}function vs(e){if(!e)return!1;var s=e._valueTracker;if(!s)return!0;var t=s.getValue(),n="";return e&&(n=fe(e)?e.checked?"true":"false":e.value),e=n,e!==t?(s.setValue(e),!0):!1}function Nr(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Wa(e,s){var t=s.checked;return L({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t!=null?t:e._wrapperState.initialChecked})}function mo(e,s){var t=s.defaultValue==null?"":s.defaultValue,n=s.checked!=null?s.checked:s.defaultChecked;t=ce(s.value!=null?s.value:t),e._wrapperState={initialChecked:n,initialValue:t,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function fo(e,s){s=s.checked,s!=null&&te(e,"checked",s,!1)}function Ua(e,s){fo(e,s);var t=ce(s.value),n=s.type;if(t!=null)n==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+t):e.value!==""+t&&(e.value=""+t);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}s.hasOwnProperty("value")?$a(e,s.type,t):s.hasOwnProperty("defaultValue")&&$a(e,s.type,ce(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(e.defaultChecked=!!s.defaultChecked)}function go(e,s,t){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var n=s.type;if(!(n!=="submit"&&n!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+e._wrapperState.initialValue,t||s===e.value||(e.value=s),e.defaultValue=s}t=e.name,t!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,t!==""&&(e.name=t)}function $a(e,s,t){(s!=="number"||Nr(e.ownerDocument)!==e)&&(t==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+t&&(e.defaultValue=""+t))}var gt=Array.isArray;function Fs(e,s,t,n){if(e=e.options,s){s={};for(var i=0;i<t.length;i++)s["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=s.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&n&&(e[t].defaultSelected=!0)}else{for(t=""+ce(t),s=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}s!==null||e[i].disabled||(s=e[i])}s!==null&&(s.selected=!0)}}function Ha(e,s){if(s.dangerouslySetInnerHTML!=null)throw Error(o(91));return L({},s,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function vo(e,s){var t=s.value;if(t==null){if(t=s.children,s=s.defaultValue,t!=null){if(s!=null)throw Error(o(92));if(gt(t)){if(1<t.length)throw Error(o(93));t=t[0]}s=t}s==null&&(s=""),t=s}e._wrapperState={initialValue:ce(t)}}function yo(e,s){var t=ce(s.value),n=ce(s.defaultValue);t!=null&&(t=""+t,t!==e.value&&(e.value=t),s.defaultValue==null&&e.defaultValue!==t&&(e.defaultValue=t)),n!=null&&(e.defaultValue=""+n)}function jo(e){var s=e.textContent;s===e._wrapperState.initialValue&&s!==""&&s!==null&&(e.value=s)}function bo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qa(e,s){return e==null||e==="http://www.w3.org/1999/xhtml"?bo(s):e==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var mn,No=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(s,t,n,i){MSApp.execUnsafeLocalFunction(function(){return e(s,t,n,i)})}:e})(function(e,s){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=s;else{for(mn=mn||document.createElement("div"),mn.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=mn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;s.firstChild;)e.appendChild(s.firstChild)}});function vt(e,s){if(s){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=s;return}}e.textContent=s}var yt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gu=["Webkit","ms","Moz","O"];Object.keys(yt).forEach(function(e){gu.forEach(function(s){s=s+e.charAt(0).toUpperCase()+e.substring(1),yt[s]=yt[e]})});function wo(e,s,t){return s==null||typeof s=="boolean"||s===""?"":t||typeof s!="number"||s===0||yt.hasOwnProperty(e)&&yt[e]?(""+s).trim():s+"px"}function ko(e,s){e=e.style;for(var t in s)if(s.hasOwnProperty(t)){var n=t.indexOf("--")===0,i=wo(t,s[t],n);t==="float"&&(t="cssFloat"),n?e.setProperty(t,i):e[t]=i}}var vu=L({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(e,s){if(s){if(vu[e]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(o(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(o(61))}if(s.style!=null&&typeof s.style!="object")throw Error(o(62))}}function Va(e,s){if(e.indexOf("-")===-1)return typeof s.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ga=null;function Ya(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Bs=null,Ws=null;function So(e){if(e=Wt(e)){if(typeof Ka!="function")throw Error(o(280));var s=e.stateNode;s&&(s=On(s),Ka(e.stateNode,e.type,s))}}function Co(e){Bs?Ws?Ws.push(e):Ws=[e]:Bs=e}function To(){if(Bs){var e=Bs,s=Ws;if(Ws=Bs=null,So(e),s)for(e=0;e<s.length;e++)So(s[e])}}function zo(e,s){return e(s)}function Io(){}var Xa=!1;function Eo(e,s,t){if(Xa)return e(s,t);Xa=!0;try{return zo(e,s,t)}finally{Xa=!1,(Bs!==null||Ws!==null)&&(Io(),To())}}function jt(e,s){var t=e.stateNode;if(t===null)return null;var n=On(t);if(n===null)return null;t=n[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(o(231,s,typeof t));return t}var Ja=!1;if(E)try{var bt={};Object.defineProperty(bt,"passive",{get:function(){Ja=!0}}),window.addEventListener("test",bt,bt),window.removeEventListener("test",bt,bt)}catch{Ja=!1}function yu(e,s,t,n,i,l,d,u,h){var y=Array.prototype.slice.call(arguments,3);try{s.apply(t,y)}catch(w){this.onError(w)}}var Nt=!1,fn=null,gn=!1,Za=null,ju={onError:function(e){Nt=!0,fn=e}};function bu(e,s,t,n,i,l,d,u,h){Nt=!1,fn=null,yu.apply(ju,arguments)}function Nu(e,s,t,n,i,l,d,u,h){if(bu.apply(this,arguments),Nt){if(Nt){var y=fn;Nt=!1,fn=null}else throw Error(o(198));gn||(gn=!0,Za=y)}}function ys(e){var s=e,t=e;if(e.alternate)for(;s.return;)s=s.return;else{e=s;do s=e,(s.flags&4098)!==0&&(t=s.return),e=s.return;while(e)}return s.tag===3?t:null}function Po(e){if(e.tag===13){var s=e.memoizedState;if(s===null&&(e=e.alternate,e!==null&&(s=e.memoizedState)),s!==null)return s.dehydrated}return null}function Lo(e){if(ys(e)!==e)throw Error(o(188))}function wu(e){var s=e.alternate;if(!s){if(s=ys(e),s===null)throw Error(o(188));return s!==e?null:e}for(var t=e,n=s;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){t=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return Lo(i),e;if(l===n)return Lo(i),s;l=l.sibling}throw Error(o(188))}if(t.return!==n.return)t=i,n=l;else{for(var d=!1,u=i.child;u;){if(u===t){d=!0,t=i,n=l;break}if(u===n){d=!0,n=i,t=l;break}u=u.sibling}if(!d){for(u=l.child;u;){if(u===t){d=!0,t=l,n=i;break}if(u===n){d=!0,n=l,t=i;break}u=u.sibling}if(!d)throw Error(o(189))}}if(t.alternate!==n)throw Error(o(190))}if(t.tag!==3)throw Error(o(188));return t.stateNode.current===t?e:s}function Ro(e){return e=wu(e),e!==null?_o(e):null}function _o(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var s=_o(e);if(s!==null)return s;e=e.sibling}return null}var Ao=c.unstable_scheduleCallback,Mo=c.unstable_cancelCallback,ku=c.unstable_shouldYield,Su=c.unstable_requestPaint,Re=c.unstable_now,Cu=c.unstable_getCurrentPriorityLevel,ei=c.unstable_ImmediatePriority,Do=c.unstable_UserBlockingPriority,vn=c.unstable_NormalPriority,Tu=c.unstable_LowPriority,Oo=c.unstable_IdlePriority,yn=null,Rr=null;function zu(e){if(Rr&&typeof Rr.onCommitFiberRoot=="function")try{Rr.onCommitFiberRoot(yn,e,void 0,(e.current.flags&128)===128)}catch{}}var wr=Math.clz32?Math.clz32:Pu,Iu=Math.log,Eu=Math.LN2;function Pu(e){return e>>>=0,e===0?32:31-(Iu(e)/Eu|0)|0}var jn=64,bn=4194304;function wt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Nn(e,s){var t=e.pendingLanes;if(t===0)return 0;var n=0,i=e.suspendedLanes,l=e.pingedLanes,d=t&268435455;if(d!==0){var u=d&~i;u!==0?n=wt(u):(l&=d,l!==0&&(n=wt(l)))}else d=t&~i,d!==0?n=wt(d):l!==0&&(n=wt(l));if(n===0)return 0;if(s!==0&&s!==n&&(s&i)===0&&(i=n&-n,l=s&-s,i>=l||i===16&&(l&4194240)!==0))return s;if((n&4)!==0&&(n|=t&16),s=e.entangledLanes,s!==0)for(e=e.entanglements,s&=n;0<s;)t=31-wr(s),i=1<<t,n|=e[t],s&=~i;return n}function Lu(e,s){switch(e){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ru(e,s){for(var t=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var d=31-wr(l),u=1<<d,h=i[d];h===-1?((u&t)===0||(u&n)!==0)&&(i[d]=Lu(u,s)):h<=s&&(e.expiredLanes|=u),l&=~u}}function ri(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fo(){var e=jn;return jn<<=1,(jn&4194240)===0&&(jn=64),e}function si(e){for(var s=[],t=0;31>t;t++)s.push(e);return s}function kt(e,s,t){e.pendingLanes|=s,s!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,s=31-wr(s),e[s]=t}function _u(e,s){var t=e.pendingLanes&~s;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=s,e.mutableReadLanes&=s,e.entangledLanes&=s,s=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<t;){var i=31-wr(t),l=1<<i;s[i]=0,n[i]=-1,e[i]=-1,t&=~l}}function ti(e,s){var t=e.entangledLanes|=s;for(e=e.entanglements;t;){var n=31-wr(t),i=1<<n;i&s|e[n]&s&&(e[n]|=s),t&=~i}}var ge=0;function Bo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Wo,ni,Uo,$o,Ho,ai=!1,wn=[],Yr=null,Kr=null,Xr=null,St=new Map,Ct=new Map,Jr=[],Au="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qo(e,s){switch(e){case"focusin":case"focusout":Yr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Xr=null;break;case"pointerover":case"pointerout":St.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ct.delete(s.pointerId)}}function Tt(e,s,t,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:s,domEventName:t,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},s!==null&&(s=Wt(s),s!==null&&ni(s)),e):(e.eventSystemFlags|=n,s=e.targetContainers,i!==null&&s.indexOf(i)===-1&&s.push(i),e)}function Mu(e,s,t,n,i){switch(s){case"focusin":return Yr=Tt(Yr,e,s,t,n,i),!0;case"dragenter":return Kr=Tt(Kr,e,s,t,n,i),!0;case"mouseover":return Xr=Tt(Xr,e,s,t,n,i),!0;case"pointerover":var l=i.pointerId;return St.set(l,Tt(St.get(l)||null,e,s,t,n,i)),!0;case"gotpointercapture":return l=i.pointerId,Ct.set(l,Tt(Ct.get(l)||null,e,s,t,n,i)),!0}return!1}function qo(e){var s=js(e.target);if(s!==null){var t=ys(s);if(t!==null){if(s=t.tag,s===13){if(s=Po(t),s!==null){e.blockedOn=s,Ho(e.priority,function(){Uo(t)});return}}else if(s===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kn(e){if(e.blockedOn!==null)return!1;for(var s=e.targetContainers;0<s.length;){var t=li(e.domEventName,e.eventSystemFlags,s[0],e.nativeEvent);if(t===null){t=e.nativeEvent;var n=new t.constructor(t.type,t);Ga=n,t.target.dispatchEvent(n),Ga=null}else return s=Wt(t),s!==null&&ni(s),e.blockedOn=t,!1;s.shift()}return!0}function Vo(e,s,t){kn(e)&&t.delete(s)}function Du(){ai=!1,Yr!==null&&kn(Yr)&&(Yr=null),Kr!==null&&kn(Kr)&&(Kr=null),Xr!==null&&kn(Xr)&&(Xr=null),St.forEach(Vo),Ct.forEach(Vo)}function zt(e,s){e.blockedOn===s&&(e.blockedOn=null,ai||(ai=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Du)))}function It(e){function s(i){return zt(i,e)}if(0<wn.length){zt(wn[0],e);for(var t=1;t<wn.length;t++){var n=wn[t];n.blockedOn===e&&(n.blockedOn=null)}}for(Yr!==null&&zt(Yr,e),Kr!==null&&zt(Kr,e),Xr!==null&&zt(Xr,e),St.forEach(s),Ct.forEach(s),t=0;t<Jr.length;t++)n=Jr[t],n.blockedOn===e&&(n.blockedOn=null);for(;0<Jr.length&&(t=Jr[0],t.blockedOn===null);)qo(t),t.blockedOn===null&&Jr.shift()}var Us=P.ReactCurrentBatchConfig,Sn=!0;function Ou(e,s,t,n){var i=ge,l=Us.transition;Us.transition=null;try{ge=1,ii(e,s,t,n)}finally{ge=i,Us.transition=l}}function Fu(e,s,t,n){var i=ge,l=Us.transition;Us.transition=null;try{ge=4,ii(e,s,t,n)}finally{ge=i,Us.transition=l}}function ii(e,s,t,n){if(Sn){var i=li(e,s,t,n);if(i===null)ki(e,s,n,Cn,t),Qo(e,n);else if(Mu(i,e,s,t,n))n.stopPropagation();else if(Qo(e,n),s&4&&-1<Au.indexOf(e)){for(;i!==null;){var l=Wt(i);if(l!==null&&Wo(l),l=li(e,s,t,n),l===null&&ki(e,s,n,Cn,t),l===i)break;i=l}i!==null&&n.stopPropagation()}else ki(e,s,n,null,t)}}var Cn=null;function li(e,s,t,n){if(Cn=null,e=Ya(n),e=js(e),e!==null)if(s=ys(e),s===null)e=null;else if(t=s.tag,t===13){if(e=Po(s),e!==null)return e;e=null}else if(t===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;e=null}else s!==e&&(e=null);return Cn=e,null}function Go(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cu()){case ei:return 1;case Do:return 4;case vn:case Tu:return 16;case Oo:return 536870912;default:return 16}default:return 16}}var Zr=null,oi=null,Tn=null;function Yo(){if(Tn)return Tn;var e,s=oi,t=s.length,n,i="value"in Zr?Zr.value:Zr.textContent,l=i.length;for(e=0;e<t&&s[e]===i[e];e++);var d=t-e;for(n=1;n<=d&&s[t-n]===i[l-n];n++);return Tn=i.slice(e,1<n?1-n:void 0)}function zn(e){var s=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&s===13&&(e=13)):e=s,e===10&&(e=13),32<=e||e===13?e:0}function In(){return!0}function Ko(){return!1}function cr(e){function s(t,n,i,l,d){this._reactName=t,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=d,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(t=e[u],this[u]=t?t(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?In:Ko,this.isPropagationStopped=Ko,this}return L(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=In)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=In)},persist:function(){},isPersistent:In}),s}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ci=cr($s),Et=L({},$s,{view:0,detail:0}),Bu=cr(Et),di,pi,Pt,En=L({},Et,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pt&&(Pt&&e.type==="mousemove"?(di=e.screenX-Pt.screenX,pi=e.screenY-Pt.screenY):pi=di=0,Pt=e),di)},movementY:function(e){return"movementY"in e?e.movementY:pi}}),Xo=cr(En),Wu=L({},En,{dataTransfer:0}),Uu=cr(Wu),$u=L({},Et,{relatedTarget:0}),ui=cr($u),Hu=L({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),Qu=cr(Hu),qu=L({},$s,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vu=cr(qu),Gu=L({},$s,{data:0}),Jo=cr(Gu),Yu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ku={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ju(e){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(e):(e=Xu[e])?!!s[e]:!1}function hi(){return Ju}var Zu=L({},Et,{key:function(e){if(e.key){var s=Yu[e.key]||e.key;if(s!=="Unidentified")return s}return e.type==="keypress"?(e=zn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ku[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hi,charCode:function(e){return e.type==="keypress"?zn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),eh=cr(Zu),rh=L({},En,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zo=cr(rh),sh=L({},Et,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hi}),th=cr(sh),nh=L({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),ah=cr(nh),ih=L({},En,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lh=cr(ih),oh=[9,13,27,32],xi=E&&"CompositionEvent"in window,Lt=null;E&&"documentMode"in document&&(Lt=document.documentMode);var ch=E&&"TextEvent"in window&&!Lt,ec=E&&(!xi||Lt&&8<Lt&&11>=Lt),rc=" ",sc=!1;function tc(e,s){switch(e){case"keyup":return oh.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hs=!1;function dh(e,s){switch(e){case"compositionend":return nc(s);case"keypress":return s.which!==32?null:(sc=!0,rc);case"textInput":return e=s.data,e===rc&&sc?null:e;default:return null}}function ph(e,s){if(Hs)return e==="compositionend"||!xi&&tc(e,s)?(e=Yo(),Tn=oi=Zr=null,Hs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ec&&s.locale!=="ko"?null:s.data;default:return null}}var uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ac(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s==="input"?!!uh[e.type]:s==="textarea"}function ic(e,s,t,n){Co(n),s=An(s,"onChange"),0<s.length&&(t=new ci("onChange","change",null,t,n),e.push({event:t,listeners:s}))}var Rt=null,_t=null;function hh(e){kc(e,0)}function Pn(e){var s=Ys(e);if(vs(s))return e}function xh(e,s){if(e==="change")return s}var lc=!1;if(E){var mi;if(E){var fi="oninput"in document;if(!fi){var oc=document.createElement("div");oc.setAttribute("oninput","return;"),fi=typeof oc.oninput=="function"}mi=fi}else mi=!1;lc=mi&&(!document.documentMode||9<document.documentMode)}function cc(){Rt&&(Rt.detachEvent("onpropertychange",dc),_t=Rt=null)}function dc(e){if(e.propertyName==="value"&&Pn(_t)){var s=[];ic(s,_t,e,Ya(e)),Eo(hh,s)}}function mh(e,s,t){e==="focusin"?(cc(),Rt=s,_t=t,Rt.attachEvent("onpropertychange",dc)):e==="focusout"&&cc()}function fh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pn(_t)}function gh(e,s){if(e==="click")return Pn(s)}function vh(e,s){if(e==="input"||e==="change")return Pn(s)}function yh(e,s){return e===s&&(e!==0||1/e===1/s)||e!==e&&s!==s}var kr=typeof Object.is=="function"?Object.is:yh;function At(e,s){if(kr(e,s))return!0;if(typeof e!="object"||e===null||typeof s!="object"||s===null)return!1;var t=Object.keys(e),n=Object.keys(s);if(t.length!==n.length)return!1;for(n=0;n<t.length;n++){var i=t[n];if(!T.call(s,i)||!kr(e[i],s[i]))return!1}return!0}function pc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function uc(e,s){var t=pc(e);e=0;for(var n;t;){if(t.nodeType===3){if(n=e+t.textContent.length,e<=s&&n>=s)return{node:t,offset:s-e};e=n}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=pc(t)}}function hc(e,s){return e&&s?e===s?!0:e&&e.nodeType===3?!1:s&&s.nodeType===3?hc(e,s.parentNode):"contains"in e?e.contains(s):e.compareDocumentPosition?!!(e.compareDocumentPosition(s)&16):!1:!1}function xc(){for(var e=window,s=Nr();s instanceof e.HTMLIFrameElement;){try{var t=typeof s.contentWindow.location.href=="string"}catch{t=!1}if(t)e=s.contentWindow;else break;s=Nr(e.document)}return s}function gi(e){var s=e&&e.nodeName&&e.nodeName.toLowerCase();return s&&(s==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||s==="textarea"||e.contentEditable==="true")}function jh(e){var s=xc(),t=e.focusedElem,n=e.selectionRange;if(s!==t&&t&&t.ownerDocument&&hc(t.ownerDocument.documentElement,t)){if(n!==null&&gi(t)){if(s=n.start,e=n.end,e===void 0&&(e=s),"selectionStart"in t)t.selectionStart=s,t.selectionEnd=Math.min(e,t.value.length);else if(e=(s=t.ownerDocument||document)&&s.defaultView||window,e.getSelection){e=e.getSelection();var i=t.textContent.length,l=Math.min(n.start,i);n=n.end===void 0?l:Math.min(n.end,i),!e.extend&&l>n&&(i=n,n=l,l=i),i=uc(t,l);var d=uc(t,n);i&&d&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(s=s.createRange(),s.setStart(i.node,i.offset),e.removeAllRanges(),l>n?(e.addRange(s),e.extend(d.node,d.offset)):(s.setEnd(d.node,d.offset),e.addRange(s)))}}for(s=[],e=t;e=e.parentNode;)e.nodeType===1&&s.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<s.length;t++)e=s[t],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bh=E&&"documentMode"in document&&11>=document.documentMode,Qs=null,vi=null,Mt=null,yi=!1;function mc(e,s,t){var n=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;yi||Qs==null||Qs!==Nr(n)||(n=Qs,"selectionStart"in n&&gi(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Mt&&At(Mt,n)||(Mt=n,n=An(vi,"onSelect"),0<n.length&&(s=new ci("onSelect","select",null,s,t),e.push({event:s,listeners:n}),s.target=Qs)))}function Ln(e,s){var t={};return t[e.toLowerCase()]=s.toLowerCase(),t["Webkit"+e]="webkit"+s,t["Moz"+e]="moz"+s,t}var qs={animationend:Ln("Animation","AnimationEnd"),animationiteration:Ln("Animation","AnimationIteration"),animationstart:Ln("Animation","AnimationStart"),transitionend:Ln("Transition","TransitionEnd")},ji={},fc={};E&&(fc=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Rn(e){if(ji[e])return ji[e];if(!qs[e])return e;var s=qs[e],t;for(t in s)if(s.hasOwnProperty(t)&&t in fc)return ji[e]=s[t];return e}var gc=Rn("animationend"),vc=Rn("animationiteration"),yc=Rn("animationstart"),jc=Rn("transitionend"),bc=new Map,Nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function es(e,s){bc.set(e,s),j(s,[e])}for(var bi=0;bi<Nc.length;bi++){var Ni=Nc[bi],Nh=Ni.toLowerCase(),wh=Ni[0].toUpperCase()+Ni.slice(1);es(Nh,"on"+wh)}es(gc,"onAnimationEnd"),es(vc,"onAnimationIteration"),es(yc,"onAnimationStart"),es("dblclick","onDoubleClick"),es("focusin","onFocus"),es("focusout","onBlur"),es(jc,"onTransitionEnd"),S("onMouseEnter",["mouseout","mouseover"]),S("onMouseLeave",["mouseout","mouseover"]),S("onPointerEnter",["pointerout","pointerover"]),S("onPointerLeave",["pointerout","pointerover"]),j("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),j("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),j("onBeforeInput",["compositionend","keypress","textInput","paste"]),j("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),j("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kh=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dt));function wc(e,s,t){var n=e.type||"unknown-event";e.currentTarget=t,Nu(n,s,void 0,e),e.currentTarget=null}function kc(e,s){s=(s&4)!==0;for(var t=0;t<e.length;t++){var n=e[t],i=n.event;n=n.listeners;e:{var l=void 0;if(s)for(var d=n.length-1;0<=d;d--){var u=n[d],h=u.instance,y=u.currentTarget;if(u=u.listener,h!==l&&i.isPropagationStopped())break e;wc(i,u,y),l=h}else for(d=0;d<n.length;d++){if(u=n[d],h=u.instance,y=u.currentTarget,u=u.listener,h!==l&&i.isPropagationStopped())break e;wc(i,u,y),l=h}}}if(gn)throw e=Za,gn=!1,Za=null,e}function be(e,s){var t=s[Ei];t===void 0&&(t=s[Ei]=new Set);var n=e+"__bubble";t.has(n)||(Sc(s,e,2,!1),t.add(n))}function wi(e,s,t){var n=0;s&&(n|=4),Sc(t,e,n,s)}var _n="_reactListening"+Math.random().toString(36).slice(2);function Ot(e){if(!e[_n]){e[_n]=!0,p.forEach(function(t){t!=="selectionchange"&&(kh.has(t)||wi(t,!1,e),wi(t,!0,e))});var s=e.nodeType===9?e:e.ownerDocument;s===null||s[_n]||(s[_n]=!0,wi("selectionchange",!1,s))}}function Sc(e,s,t,n){switch(Go(s)){case 1:var i=Ou;break;case 4:i=Fu;break;default:i=ii}t=i.bind(null,s,t,e),i=void 0,!Ja||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(s,t,{capture:!0,passive:i}):e.addEventListener(s,t,!0):i!==void 0?e.addEventListener(s,t,{passive:i}):e.addEventListener(s,t,!1)}function ki(e,s,t,n,i){var l=n;if((s&1)===0&&(s&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var u=n.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(d===4)for(d=n.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;d=d.return}for(;u!==null;){if(d=js(u),d===null)return;if(h=d.tag,h===5||h===6){n=l=d;continue e}u=u.parentNode}}n=n.return}Eo(function(){var y=l,w=Ya(t),k=[];e:{var N=bc.get(e);if(N!==void 0){var R=ci,A=e;switch(e){case"keypress":if(zn(t)===0)break e;case"keydown":case"keyup":R=eh;break;case"focusin":A="focus",R=ui;break;case"focusout":A="blur",R=ui;break;case"beforeblur":case"afterblur":R=ui;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Xo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Uu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=th;break;case gc:case vc:case yc:R=Qu;break;case jc:R=ah;break;case"scroll":R=Bu;break;case"wheel":R=lh;break;case"copy":case"cut":case"paste":R=Vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Zo}var M=(s&4)!==0,_e=!M&&e==="scroll",g=M?N!==null?N+"Capture":null:N;M=[];for(var x=y,v;x!==null;){v=x;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,g!==null&&(C=jt(x,g),C!=null&&M.push(Ft(x,C,v)))),_e)break;x=x.return}0<M.length&&(N=new R(N,A,null,t,w),k.push({event:N,listeners:M}))}}if((s&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",N&&t!==Ga&&(A=t.relatedTarget||t.fromElement)&&(js(A)||A[Or]))break e;if((R||N)&&(N=w.window===w?w:(N=w.ownerDocument)?N.defaultView||N.parentWindow:window,R?(A=t.relatedTarget||t.toElement,R=y,A=A?js(A):null,A!==null&&(_e=ys(A),A!==_e||A.tag!==5&&A.tag!==6)&&(A=null)):(R=null,A=y),R!==A)){if(M=Xo,C="onMouseLeave",g="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(M=Zo,C="onPointerLeave",g="onPointerEnter",x="pointer"),_e=R==null?N:Ys(R),v=A==null?N:Ys(A),N=new M(C,x+"leave",R,t,w),N.target=_e,N.relatedTarget=v,C=null,js(w)===y&&(M=new M(g,x+"enter",A,t,w),M.target=v,M.relatedTarget=_e,C=M),_e=C,R&&A)r:{for(M=R,g=A,x=0,v=M;v;v=Vs(v))x++;for(v=0,C=g;C;C=Vs(C))v++;for(;0<x-v;)M=Vs(M),x--;for(;0<v-x;)g=Vs(g),v--;for(;x--;){if(M===g||g!==null&&M===g.alternate)break r;M=Vs(M),g=Vs(g)}M=null}else M=null;R!==null&&Cc(k,N,R,M,!1),A!==null&&_e!==null&&Cc(k,_e,A,M,!0)}}e:{if(N=y?Ys(y):window,R=N.nodeName&&N.nodeName.toLowerCase(),R==="select"||R==="input"&&N.type==="file")var O=xh;else if(ac(N))if(lc)O=vh;else{O=fh;var H=mh}else(R=N.nodeName)&&R.toLowerCase()==="input"&&(N.type==="checkbox"||N.type==="radio")&&(O=gh);if(O&&(O=O(e,y))){ic(k,O,t,w);break e}H&&H(e,N,y),e==="focusout"&&(H=N._wrapperState)&&H.controlled&&N.type==="number"&&$a(N,"number",N.value)}switch(H=y?Ys(y):window,e){case"focusin":(ac(H)||H.contentEditable==="true")&&(Qs=H,vi=y,Mt=null);break;case"focusout":Mt=vi=Qs=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,mc(k,t,w);break;case"selectionchange":if(bh)break;case"keydown":case"keyup":mc(k,t,w)}var Q;if(xi)e:{switch(e){case"compositionstart":var G="onCompositionStart";break e;case"compositionend":G="onCompositionEnd";break e;case"compositionupdate":G="onCompositionUpdate";break e}G=void 0}else Hs?tc(e,t)&&(G="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(G="onCompositionStart");G&&(ec&&t.locale!=="ko"&&(Hs||G!=="onCompositionStart"?G==="onCompositionEnd"&&Hs&&(Q=Yo()):(Zr=w,oi="value"in Zr?Zr.value:Zr.textContent,Hs=!0)),H=An(y,G),0<H.length&&(G=new Jo(G,e,null,t,w),k.push({event:G,listeners:H}),Q?G.data=Q:(Q=nc(t),Q!==null&&(G.data=Q)))),(Q=ch?dh(e,t):ph(e,t))&&(y=An(y,"onBeforeInput"),0<y.length&&(w=new Jo("onBeforeInput","beforeinput",null,t,w),k.push({event:w,listeners:y}),w.data=Q))}kc(k,s)})}function Ft(e,s,t){return{instance:e,listener:s,currentTarget:t}}function An(e,s){for(var t=s+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=jt(e,t),l!=null&&n.unshift(Ft(e,l,i)),l=jt(e,s),l!=null&&n.push(Ft(e,l,i))),e=e.return}return n}function Vs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Cc(e,s,t,n,i){for(var l=s._reactName,d=[];t!==null&&t!==n;){var u=t,h=u.alternate,y=u.stateNode;if(h!==null&&h===n)break;u.tag===5&&y!==null&&(u=y,i?(h=jt(t,l),h!=null&&d.unshift(Ft(t,h,u))):i||(h=jt(t,l),h!=null&&d.push(Ft(t,h,u)))),t=t.return}d.length!==0&&e.push({event:s,listeners:d})}var Sh=/\r\n?/g,Ch=/\u0000|\uFFFD/g;function Tc(e){return(typeof e=="string"?e:""+e).replace(Sh,`
`).replace(Ch,"")}function Mn(e,s,t){if(s=Tc(s),Tc(e)!==s&&t)throw Error(o(425))}function Dn(){}var Si=null,Ci=null;function Ti(e,s){return e==="textarea"||e==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var zi=typeof setTimeout=="function"?setTimeout:void 0,Th=typeof clearTimeout=="function"?clearTimeout:void 0,zc=typeof Promise=="function"?Promise:void 0,zh=typeof queueMicrotask=="function"?queueMicrotask:typeof zc!="undefined"?function(e){return zc.resolve(null).then(e).catch(Ih)}:zi;function Ih(e){setTimeout(function(){throw e})}function Ii(e,s){var t=s,n=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"){if(n===0){e.removeChild(i),It(s);return}n--}else t!=="$"&&t!=="$?"&&t!=="$!"||n++;t=i}while(t);It(s)}function rs(e){for(;e!=null;e=e.nextSibling){var s=e.nodeType;if(s===1||s===3)break;if(s===8){if(s=e.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return e}function Ic(e){e=e.previousSibling;for(var s=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"){if(s===0)return e;s--}else t==="/$"&&s++}e=e.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),_r="__reactFiber$"+Gs,Bt="__reactProps$"+Gs,Or="__reactContainer$"+Gs,Ei="__reactEvents$"+Gs,Eh="__reactListeners$"+Gs,Ph="__reactHandles$"+Gs;function js(e){var s=e[_r];if(s)return s;for(var t=e.parentNode;t;){if(s=t[Or]||t[_r]){if(t=s.alternate,s.child!==null||t!==null&&t.child!==null)for(e=Ic(e);e!==null;){if(t=e[_r])return t;e=Ic(e)}return s}e=t,t=e.parentNode}return null}function Wt(e){return e=e[_r]||e[Or],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ys(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function On(e){return e[Bt]||null}var Pi=[],Ks=-1;function ss(e){return{current:e}}function Ne(e){0>Ks||(e.current=Pi[Ks],Pi[Ks]=null,Ks--)}function je(e,s){Ks++,Pi[Ks]=e.current,e.current=s}var ts={},Ge=ss(ts),sr=ss(!1),bs=ts;function Xs(e,s){var t=e.type.contextTypes;if(!t)return ts;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===s)return n.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in t)i[l]=s[l];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),i}function tr(e){return e=e.childContextTypes,e!=null}function Fn(){Ne(sr),Ne(Ge)}function Ec(e,s,t){if(Ge.current!==ts)throw Error(o(168));je(Ge,s),je(sr,t)}function Pc(e,s,t){var n=e.stateNode;if(s=s.childContextTypes,typeof n.getChildContext!="function")return t;n=n.getChildContext();for(var i in n)if(!(i in s))throw Error(o(108,pe(e)||"Unknown",i));return L({},t,n)}function Bn(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ts,bs=Ge.current,je(Ge,e),je(sr,sr.current),!0}function Lc(e,s,t){var n=e.stateNode;if(!n)throw Error(o(169));t?(e=Pc(e,s,bs),n.__reactInternalMemoizedMergedChildContext=e,Ne(sr),Ne(Ge),je(Ge,e)):Ne(sr),je(sr,t)}var Fr=null,Wn=!1,Li=!1;function Rc(e){Fr===null?Fr=[e]:Fr.push(e)}function Lh(e){Wn=!0,Rc(e)}function ns(){if(!Li&&Fr!==null){Li=!0;var e=0,s=ge;try{var t=Fr;for(ge=1;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}Fr=null,Wn=!1}catch(i){throw Fr!==null&&(Fr=Fr.slice(e+1)),Ao(ei,ns),i}finally{ge=s,Li=!1}}return null}var Js=[],Zs=0,Un=null,$n=0,mr=[],fr=0,Ns=null,Br=1,Wr="";function ws(e,s){Js[Zs++]=$n,Js[Zs++]=Un,Un=e,$n=s}function _c(e,s,t){mr[fr++]=Br,mr[fr++]=Wr,mr[fr++]=Ns,Ns=e;var n=Br;e=Wr;var i=32-wr(n)-1;n&=~(1<<i),t+=1;var l=32-wr(s)+i;if(30<l){var d=i-i%5;l=(n&(1<<d)-1).toString(32),n>>=d,i-=d,Br=1<<32-wr(s)+i|t<<i|n,Wr=l+e}else Br=1<<l|t<<i|n,Wr=e}function Ri(e){e.return!==null&&(ws(e,1),_c(e,1,0))}function _i(e){for(;e===Un;)Un=Js[--Zs],Js[Zs]=null,$n=Js[--Zs],Js[Zs]=null;for(;e===Ns;)Ns=mr[--fr],mr[fr]=null,Wr=mr[--fr],mr[fr]=null,Br=mr[--fr],mr[fr]=null}var dr=null,pr=null,Ce=!1,Sr=null;function Ac(e,s){var t=jr(5,null,null,0);t.elementType="DELETED",t.stateNode=s,t.return=e,s=e.deletions,s===null?(e.deletions=[t],e.flags|=16):s.push(t)}function Mc(e,s){switch(e.tag){case 5:var t=e.type;return s=s.nodeType!==1||t.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(e.stateNode=s,dr=e,pr=rs(s.firstChild),!0):!1;case 6:return s=e.pendingProps===""||s.nodeType!==3?null:s,s!==null?(e.stateNode=s,dr=e,pr=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(t=Ns!==null?{id:Br,overflow:Wr}:null,e.memoizedState={dehydrated:s,treeContext:t,retryLane:1073741824},t=jr(18,null,null,0),t.stateNode=s,t.return=e,e.child=t,dr=e,pr=null,!0):!1;default:return!1}}function Ai(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Mi(e){if(Ce){var s=pr;if(s){var t=s;if(!Mc(e,s)){if(Ai(e))throw Error(o(418));s=rs(t.nextSibling);var n=dr;s&&Mc(e,s)?Ac(n,t):(e.flags=e.flags&-4097|2,Ce=!1,dr=e)}}else{if(Ai(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ce=!1,dr=e}}}function Dc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;dr=e}function Hn(e){if(e!==dr)return!1;if(!Ce)return Dc(e),Ce=!0,!1;var s;if((s=e.tag!==3)&&!(s=e.tag!==5)&&(s=e.type,s=s!=="head"&&s!=="body"&&!Ti(e.type,e.memoizedProps)),s&&(s=pr)){if(Ai(e))throw Oc(),Error(o(418));for(;s;)Ac(e,s),s=rs(s.nextSibling)}if(Dc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,s=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"){if(s===0){pr=rs(e.nextSibling);break e}s--}else t!=="$"&&t!=="$!"&&t!=="$?"||s++}e=e.nextSibling}pr=null}}else pr=dr?rs(e.stateNode.nextSibling):null;return!0}function Oc(){for(var e=pr;e;)e=rs(e.nextSibling)}function et(){pr=dr=null,Ce=!1}function Di(e){Sr===null?Sr=[e]:Sr.push(e)}var Rh=P.ReactCurrentBatchConfig;function Ut(e,s,t){if(e=t.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(o(309));var n=t.stateNode}if(!n)throw Error(o(147,e));var i=n,l=""+e;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===l?s.ref:(s=function(d){var u=i.refs;d===null?delete u[l]:u[l]=d},s._stringRef=l,s)}if(typeof e!="string")throw Error(o(284));if(!t._owner)throw Error(o(290,e))}return e}function Qn(e,s){throw e=Object.prototype.toString.call(s),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":e))}function Fc(e){var s=e._init;return s(e._payload)}function Bc(e){function s(g,x){if(e){var v=g.deletions;v===null?(g.deletions=[x],g.flags|=16):v.push(x)}}function t(g,x){if(!e)return null;for(;x!==null;)s(g,x),x=x.sibling;return null}function n(g,x){for(g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function i(g,x){return g=us(g,x),g.index=0,g.sibling=null,g}function l(g,x,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<x?(g.flags|=2,x):v):(g.flags|=2,x)):(g.flags|=1048576,x)}function d(g){return e&&g.alternate===null&&(g.flags|=2),g}function u(g,x,v,C){return x===null||x.tag!==6?(x=zl(v,g.mode,C),x.return=g,x):(x=i(x,v),x.return=g,x)}function h(g,x,v,C){var O=v.type;return O===I?w(g,x,v.props.children,C,v.key):x!==null&&(x.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ve&&Fc(O)===x.type)?(C=i(x,v.props),C.ref=Ut(g,x,v),C.return=g,C):(C=ma(v.type,v.key,v.props,null,g.mode,C),C.ref=Ut(g,x,v),C.return=g,C)}function y(g,x,v,C){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Il(v,g.mode,C),x.return=g,x):(x=i(x,v.children||[]),x.return=g,x)}function w(g,x,v,C,O){return x===null||x.tag!==7?(x=Ps(v,g.mode,C,O),x.return=g,x):(x=i(x,v),x.return=g,x)}function k(g,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=zl(""+x,g.mode,v),x.return=g,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case X:return v=ma(x.type,x.key,x.props,null,g.mode,v),v.ref=Ut(g,null,x),v.return=g,v;case $:return x=Il(x,g.mode,v),x.return=g,x;case Ve:var C=x._init;return k(g,C(x._payload),v)}if(gt(x)||F(x))return x=Ps(x,g.mode,v,null),x.return=g,x;Qn(g,x)}return null}function N(g,x,v,C){var O=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return O!==null?null:u(g,x,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case X:return v.key===O?h(g,x,v,C):null;case $:return v.key===O?y(g,x,v,C):null;case Ve:return O=v._init,N(g,x,O(v._payload),C)}if(gt(v)||F(v))return O!==null?null:w(g,x,v,C,null);Qn(g,v)}return null}function R(g,x,v,C,O){if(typeof C=="string"&&C!==""||typeof C=="number")return g=g.get(v)||null,u(x,g,""+C,O);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case X:return g=g.get(C.key===null?v:C.key)||null,h(x,g,C,O);case $:return g=g.get(C.key===null?v:C.key)||null,y(x,g,C,O);case Ve:var H=C._init;return R(g,x,v,H(C._payload),O)}if(gt(C)||F(C))return g=g.get(v)||null,w(x,g,C,O,null);Qn(x,C)}return null}function A(g,x,v,C){for(var O=null,H=null,Q=x,G=x=0,Ue=null;Q!==null&&G<v.length;G++){Q.index>G?(Ue=Q,Q=null):Ue=Q.sibling;var he=N(g,Q,v[G],C);if(he===null){Q===null&&(Q=Ue);break}e&&Q&&he.alternate===null&&s(g,Q),x=l(he,x,G),H===null?O=he:H.sibling=he,H=he,Q=Ue}if(G===v.length)return t(g,Q),Ce&&ws(g,G),O;if(Q===null){for(;G<v.length;G++)Q=k(g,v[G],C),Q!==null&&(x=l(Q,x,G),H===null?O=Q:H.sibling=Q,H=Q);return Ce&&ws(g,G),O}for(Q=n(g,Q);G<v.length;G++)Ue=R(Q,g,G,v[G],C),Ue!==null&&(e&&Ue.alternate!==null&&Q.delete(Ue.key===null?G:Ue.key),x=l(Ue,x,G),H===null?O=Ue:H.sibling=Ue,H=Ue);return e&&Q.forEach(function(hs){return s(g,hs)}),Ce&&ws(g,G),O}function M(g,x,v,C){var O=F(v);if(typeof O!="function")throw Error(o(150));if(v=O.call(v),v==null)throw Error(o(151));for(var H=O=null,Q=x,G=x=0,Ue=null,he=v.next();Q!==null&&!he.done;G++,he=v.next()){Q.index>G?(Ue=Q,Q=null):Ue=Q.sibling;var hs=N(g,Q,he.value,C);if(hs===null){Q===null&&(Q=Ue);break}e&&Q&&hs.alternate===null&&s(g,Q),x=l(hs,x,G),H===null?O=hs:H.sibling=hs,H=hs,Q=Ue}if(he.done)return t(g,Q),Ce&&ws(g,G),O;if(Q===null){for(;!he.done;G++,he=v.next())he=k(g,he.value,C),he!==null&&(x=l(he,x,G),H===null?O=he:H.sibling=he,H=he);return Ce&&ws(g,G),O}for(Q=n(g,Q);!he.done;G++,he=v.next())he=R(Q,g,G,he.value,C),he!==null&&(e&&he.alternate!==null&&Q.delete(he.key===null?G:he.key),x=l(he,x,G),H===null?O=he:H.sibling=he,H=he);return e&&Q.forEach(function(ux){return s(g,ux)}),Ce&&ws(g,G),O}function _e(g,x,v,C){if(typeof v=="object"&&v!==null&&v.type===I&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case X:e:{for(var O=v.key,H=x;H!==null;){if(H.key===O){if(O=v.type,O===I){if(H.tag===7){t(g,H.sibling),x=i(H,v.props.children),x.return=g,g=x;break e}}else if(H.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ve&&Fc(O)===H.type){t(g,H.sibling),x=i(H,v.props),x.ref=Ut(g,H,v),x.return=g,g=x;break e}t(g,H);break}else s(g,H);H=H.sibling}v.type===I?(x=Ps(v.props.children,g.mode,C,v.key),x.return=g,g=x):(C=ma(v.type,v.key,v.props,null,g.mode,C),C.ref=Ut(g,x,v),C.return=g,g=C)}return d(g);case $:e:{for(H=v.key;x!==null;){if(x.key===H)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){t(g,x.sibling),x=i(x,v.children||[]),x.return=g,g=x;break e}else{t(g,x);break}else s(g,x);x=x.sibling}x=Il(v,g.mode,C),x.return=g,g=x}return d(g);case Ve:return H=v._init,_e(g,x,H(v._payload),C)}if(gt(v))return A(g,x,v,C);if(F(v))return M(g,x,v,C);Qn(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(t(g,x.sibling),x=i(x,v),x.return=g,g=x):(t(g,x),x=zl(v,g.mode,C),x.return=g,g=x),d(g)):t(g,x)}return _e}var rt=Bc(!0),Wc=Bc(!1),qn=ss(null),Vn=null,st=null,Oi=null;function Fi(){Oi=st=Vn=null}function Bi(e){var s=qn.current;Ne(qn),e._currentValue=s}function Wi(e,s,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&s)!==s?(e.childLanes|=s,n!==null&&(n.childLanes|=s)):n!==null&&(n.childLanes&s)!==s&&(n.childLanes|=s),e===t)break;e=e.return}}function tt(e,s){Vn=e,Oi=st=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&s)!==0&&(nr=!0),e.firstContext=null)}function gr(e){var s=e._currentValue;if(Oi!==e)if(e={context:e,memoizedValue:s,next:null},st===null){if(Vn===null)throw Error(o(308));st=e,Vn.dependencies={lanes:0,firstContext:e}}else st=st.next=e;return s}var ks=null;function Ui(e){ks===null?ks=[e]:ks.push(e)}function Uc(e,s,t,n){var i=s.interleaved;return i===null?(t.next=t,Ui(s)):(t.next=i.next,i.next=t),s.interleaved=t,Ur(e,n)}function Ur(e,s){e.lanes|=s;var t=e.alternate;for(t!==null&&(t.lanes|=s),t=e,e=e.return;e!==null;)e.childLanes|=s,t=e.alternate,t!==null&&(t.childLanes|=s),t=e,e=e.return;return t.tag===3?t.stateNode:null}var as=!1;function $i(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $c(e,s){e=e.updateQueue,s.updateQueue===e&&(s.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $r(e,s){return{eventTime:e,lane:s,tag:0,payload:null,callback:null,next:null}}function is(e,s,t){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(ue&2)!==0){var i=n.pending;return i===null?s.next=s:(s.next=i.next,i.next=s),n.pending=s,Ur(e,t)}return i=n.interleaved,i===null?(s.next=s,Ui(n)):(s.next=i.next,i.next=s),n.interleaved=s,Ur(e,t)}function Gn(e,s,t){if(s=s.updateQueue,s!==null&&(s=s.shared,(t&4194240)!==0)){var n=s.lanes;n&=e.pendingLanes,t|=n,s.lanes=t,ti(e,t)}}function Hc(e,s){var t=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,t===n)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var d={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};l===null?i=l=d:l=l.next=d,t=t.next}while(t!==null);l===null?i=l=s:l=l.next=s}else i=l=s;t={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,effects:n.effects},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=s:e.next=s,t.lastBaseUpdate=s}function Yn(e,s,t,n){var i=e.updateQueue;as=!1;var l=i.firstBaseUpdate,d=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var h=u,y=h.next;h.next=null,d===null?l=y:d.next=y,d=h;var w=e.alternate;w!==null&&(w=w.updateQueue,u=w.lastBaseUpdate,u!==d&&(u===null?w.firstBaseUpdate=y:u.next=y,w.lastBaseUpdate=h))}if(l!==null){var k=i.baseState;d=0,w=y=h=null,u=l;do{var N=u.lane,R=u.eventTime;if((n&N)===N){w!==null&&(w=w.next={eventTime:R,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var A=e,M=u;switch(N=s,R=t,M.tag){case 1:if(A=M.payload,typeof A=="function"){k=A.call(R,k,N);break e}k=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=M.payload,N=typeof A=="function"?A.call(R,k,N):A,N==null)break e;k=L({},k,N);break e;case 2:as=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,N=i.effects,N===null?i.effects=[u]:N.push(u))}else R={eventTime:R,lane:N,tag:u.tag,payload:u.payload,callback:u.callback,next:null},w===null?(y=w=R,h=k):w=w.next=R,d|=N;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;N=u,u=N.next,N.next=null,i.lastBaseUpdate=N,i.shared.pending=null}}while(!0);if(w===null&&(h=k),i.baseState=h,i.firstBaseUpdate=y,i.lastBaseUpdate=w,s=i.shared.interleaved,s!==null){i=s;do d|=i.lane,i=i.next;while(i!==s)}else l===null&&(i.shared.lanes=0);Ts|=d,e.lanes=d,e.memoizedState=k}}function Qc(e,s,t){if(e=s.effects,s.effects=null,e!==null)for(s=0;s<e.length;s++){var n=e[s],i=n.callback;if(i!==null){if(n.callback=null,n=t,typeof i!="function")throw Error(o(191,i));i.call(n)}}}var $t={},Ar=ss($t),Ht=ss($t),Qt=ss($t);function Ss(e){if(e===$t)throw Error(o(174));return e}function Hi(e,s){switch(je(Qt,s),je(Ht,e),je(Ar,$t),e=s.nodeType,e){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Qa(null,"");break;default:e=e===8?s.parentNode:s,s=e.namespaceURI||null,e=e.tagName,s=Qa(s,e)}Ne(Ar),je(Ar,s)}function nt(){Ne(Ar),Ne(Ht),Ne(Qt)}function qc(e){Ss(Qt.current);var s=Ss(Ar.current),t=Qa(s,e.type);s!==t&&(je(Ht,e),je(Ar,t))}function Qi(e){Ht.current===e&&(Ne(Ar),Ne(Ht))}var ze=ss(0);function Kn(e){for(var s=e;s!==null;){if(s.tag===13){var t=s.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var qi=[];function Vi(){for(var e=0;e<qi.length;e++)qi[e]._workInProgressVersionPrimary=null;qi.length=0}var Xn=P.ReactCurrentDispatcher,Gi=P.ReactCurrentBatchConfig,Cs=0,Ie=null,De=null,Be=null,Jn=!1,qt=!1,Vt=0,_h=0;function Ye(){throw Error(o(321))}function Yi(e,s){if(s===null)return!1;for(var t=0;t<s.length&&t<e.length;t++)if(!kr(e[t],s[t]))return!1;return!0}function Ki(e,s,t,n,i,l){if(Cs=l,Ie=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Xn.current=e===null||e.memoizedState===null?Oh:Fh,e=t(n,i),qt){l=0;do{if(qt=!1,Vt=0,25<=l)throw Error(o(301));l+=1,Be=De=null,s.updateQueue=null,Xn.current=Bh,e=t(n,i)}while(qt)}if(Xn.current=ra,s=De!==null&&De.next!==null,Cs=0,Be=De=Ie=null,Jn=!1,s)throw Error(o(300));return e}function Xi(){var e=Vt!==0;return Vt=0,e}function Mr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ie.memoizedState=Be=e:Be=Be.next=e,Be}function vr(){if(De===null){var e=Ie.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var s=Be===null?Ie.memoizedState:Be.next;if(s!==null)Be=s,De=e;else{if(e===null)throw Error(o(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Be===null?Ie.memoizedState=Be=e:Be=Be.next=e}return Be}function Gt(e,s){return typeof s=="function"?s(e):s}function Ji(e){var s=vr(),t=s.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var n=De,i=n.baseQueue,l=t.pending;if(l!==null){if(i!==null){var d=i.next;i.next=l.next,l.next=d}n.baseQueue=i=l,t.pending=null}if(i!==null){l=i.next,n=n.baseState;var u=d=null,h=null,y=l;do{var w=y.lane;if((Cs&w)===w)h!==null&&(h=h.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),n=y.hasEagerState?y.eagerState:e(n,y.action);else{var k={lane:w,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};h===null?(u=h=k,d=n):h=h.next=k,Ie.lanes|=w,Ts|=w}y=y.next}while(y!==null&&y!==l);h===null?d=n:h.next=u,kr(n,s.memoizedState)||(nr=!0),s.memoizedState=n,s.baseState=d,s.baseQueue=h,t.lastRenderedState=n}if(e=t.interleaved,e!==null){i=e;do l=i.lane,Ie.lanes|=l,Ts|=l,i=i.next;while(i!==e)}else i===null&&(t.lanes=0);return[s.memoizedState,t.dispatch]}function Zi(e){var s=vr(),t=s.queue;if(t===null)throw Error(o(311));t.lastRenderedReducer=e;var n=t.dispatch,i=t.pending,l=s.memoizedState;if(i!==null){t.pending=null;var d=i=i.next;do l=e(l,d.action),d=d.next;while(d!==i);kr(l,s.memoizedState)||(nr=!0),s.memoizedState=l,s.baseQueue===null&&(s.baseState=l),t.lastRenderedState=l}return[l,n]}function Vc(){}function Gc(e,s){var t=Ie,n=vr(),i=s(),l=!kr(n.memoizedState,i);if(l&&(n.memoizedState=i,nr=!0),n=n.queue,el(Xc.bind(null,t,n,e),[e]),n.getSnapshot!==s||l||Be!==null&&Be.memoizedState.tag&1){if(t.flags|=2048,Yt(9,Kc.bind(null,t,n,i,s),void 0,null),We===null)throw Error(o(349));(Cs&30)!==0||Yc(t,s,i)}return i}function Yc(e,s,t){e.flags|=16384,e={getSnapshot:s,value:t},s=Ie.updateQueue,s===null?(s={lastEffect:null,stores:null},Ie.updateQueue=s,s.stores=[e]):(t=s.stores,t===null?s.stores=[e]:t.push(e))}function Kc(e,s,t,n){s.value=t,s.getSnapshot=n,Jc(s)&&Zc(e)}function Xc(e,s,t){return t(function(){Jc(s)&&Zc(e)})}function Jc(e){var s=e.getSnapshot;e=e.value;try{var t=s();return!kr(e,t)}catch{return!0}}function Zc(e){var s=Ur(e,1);s!==null&&Ir(s,e,1,-1)}function ed(e){var s=Mr();return typeof e=="function"&&(e=e()),s.memoizedState=s.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Gt,lastRenderedState:e},s.queue=e,e=e.dispatch=Dh.bind(null,Ie,e),[s.memoizedState,e]}function Yt(e,s,t,n){return e={tag:e,create:s,destroy:t,deps:n,next:null},s=Ie.updateQueue,s===null?(s={lastEffect:null,stores:null},Ie.updateQueue=s,s.lastEffect=e.next=e):(t=s.lastEffect,t===null?s.lastEffect=e.next=e:(n=t.next,t.next=e,e.next=n,s.lastEffect=e)),e}function rd(){return vr().memoizedState}function Zn(e,s,t,n){var i=Mr();Ie.flags|=e,i.memoizedState=Yt(1|s,t,void 0,n===void 0?null:n)}function ea(e,s,t,n){var i=vr();n=n===void 0?null:n;var l=void 0;if(De!==null){var d=De.memoizedState;if(l=d.destroy,n!==null&&Yi(n,d.deps)){i.memoizedState=Yt(s,t,l,n);return}}Ie.flags|=e,i.memoizedState=Yt(1|s,t,l,n)}function sd(e,s){return Zn(8390656,8,e,s)}function el(e,s){return ea(2048,8,e,s)}function td(e,s){return ea(4,2,e,s)}function nd(e,s){return ea(4,4,e,s)}function ad(e,s){if(typeof s=="function")return e=e(),s(e),function(){s(null)};if(s!=null)return e=e(),s.current=e,function(){s.current=null}}function id(e,s,t){return t=t!=null?t.concat([e]):null,ea(4,4,ad.bind(null,s,e),t)}function rl(){}function ld(e,s){var t=vr();s=s===void 0?null:s;var n=t.memoizedState;return n!==null&&s!==null&&Yi(s,n[1])?n[0]:(t.memoizedState=[e,s],e)}function od(e,s){var t=vr();s=s===void 0?null:s;var n=t.memoizedState;return n!==null&&s!==null&&Yi(s,n[1])?n[0]:(e=e(),t.memoizedState=[e,s],e)}function cd(e,s,t){return(Cs&21)===0?(e.baseState&&(e.baseState=!1,nr=!0),e.memoizedState=t):(kr(t,s)||(t=Fo(),Ie.lanes|=t,Ts|=t,e.baseState=!0),s)}function Ah(e,s){var t=ge;ge=t!==0&&4>t?t:4,e(!0);var n=Gi.transition;Gi.transition={};try{e(!1),s()}finally{ge=t,Gi.transition=n}}function dd(){return vr().memoizedState}function Mh(e,s,t){var n=ds(e);if(t={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null},pd(e))ud(s,t);else if(t=Uc(e,s,t,n),t!==null){var i=er();Ir(t,e,n,i),hd(t,s,n)}}function Dh(e,s,t){var n=ds(e),i={lane:n,action:t,hasEagerState:!1,eagerState:null,next:null};if(pd(e))ud(s,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=s.lastRenderedReducer,l!==null))try{var d=s.lastRenderedState,u=l(d,t);if(i.hasEagerState=!0,i.eagerState=u,kr(u,d)){var h=s.interleaved;h===null?(i.next=i,Ui(s)):(i.next=h.next,h.next=i),s.interleaved=i;return}}catch{}finally{}t=Uc(e,s,i,n),t!==null&&(i=er(),Ir(t,e,n,i),hd(t,s,n))}}function pd(e){var s=e.alternate;return e===Ie||s!==null&&s===Ie}function ud(e,s){qt=Jn=!0;var t=e.pending;t===null?s.next=s:(s.next=t.next,t.next=s),e.pending=s}function hd(e,s,t){if((t&4194240)!==0){var n=s.lanes;n&=e.pendingLanes,t|=n,s.lanes=t,ti(e,t)}}var ra={readContext:gr,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},Oh={readContext:gr,useCallback:function(e,s){return Mr().memoizedState=[e,s===void 0?null:s],e},useContext:gr,useEffect:sd,useImperativeHandle:function(e,s,t){return t=t!=null?t.concat([e]):null,Zn(4194308,4,ad.bind(null,s,e),t)},useLayoutEffect:function(e,s){return Zn(4194308,4,e,s)},useInsertionEffect:function(e,s){return Zn(4,2,e,s)},useMemo:function(e,s){var t=Mr();return s=s===void 0?null:s,e=e(),t.memoizedState=[e,s],e},useReducer:function(e,s,t){var n=Mr();return s=t!==void 0?t(s):s,n.memoizedState=n.baseState=s,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},n.queue=e,e=e.dispatch=Mh.bind(null,Ie,e),[n.memoizedState,e]},useRef:function(e){var s=Mr();return e={current:e},s.memoizedState=e},useState:ed,useDebugValue:rl,useDeferredValue:function(e){return Mr().memoizedState=e},useTransition:function(){var e=ed(!1),s=e[0];return e=Ah.bind(null,e[1]),Mr().memoizedState=e,[s,e]},useMutableSource:function(){},useSyncExternalStore:function(e,s,t){var n=Ie,i=Mr();if(Ce){if(t===void 0)throw Error(o(407));t=t()}else{if(t=s(),We===null)throw Error(o(349));(Cs&30)!==0||Yc(n,s,t)}i.memoizedState=t;var l={value:t,getSnapshot:s};return i.queue=l,sd(Xc.bind(null,n,l,e),[e]),n.flags|=2048,Yt(9,Kc.bind(null,n,l,t,s),void 0,null),t},useId:function(){var e=Mr(),s=We.identifierPrefix;if(Ce){var t=Wr,n=Br;t=(n&~(1<<32-wr(n)-1)).toString(32)+t,s=":"+s+"R"+t,t=Vt++,0<t&&(s+="H"+t.toString(32)),s+=":"}else t=_h++,s=":"+s+"r"+t.toString(32)+":";return e.memoizedState=s},unstable_isNewReconciler:!1},Fh={readContext:gr,useCallback:ld,useContext:gr,useEffect:el,useImperativeHandle:id,useInsertionEffect:td,useLayoutEffect:nd,useMemo:od,useReducer:Ji,useRef:rd,useState:function(){return Ji(Gt)},useDebugValue:rl,useDeferredValue:function(e){var s=vr();return cd(s,De.memoizedState,e)},useTransition:function(){var e=Ji(Gt)[0],s=vr().memoizedState;return[e,s]},useMutableSource:Vc,useSyncExternalStore:Gc,useId:dd,unstable_isNewReconciler:!1},Bh={readContext:gr,useCallback:ld,useContext:gr,useEffect:el,useImperativeHandle:id,useInsertionEffect:td,useLayoutEffect:nd,useMemo:od,useReducer:Zi,useRef:rd,useState:function(){return Zi(Gt)},useDebugValue:rl,useDeferredValue:function(e){var s=vr();return De===null?s.memoizedState=e:cd(s,De.memoizedState,e)},useTransition:function(){var e=Zi(Gt)[0],s=vr().memoizedState;return[e,s]},useMutableSource:Vc,useSyncExternalStore:Gc,useId:dd,unstable_isNewReconciler:!1};function Cr(e,s){if(e&&e.defaultProps){s=L({},s),e=e.defaultProps;for(var t in e)s[t]===void 0&&(s[t]=e[t]);return s}return s}function sl(e,s,t,n){s=e.memoizedState,t=t(n,s),t=t==null?s:L({},s,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var sa={isMounted:function(e){return(e=e._reactInternals)?ys(e)===e:!1},enqueueSetState:function(e,s,t){e=e._reactInternals;var n=er(),i=ds(e),l=$r(n,i);l.payload=s,t!=null&&(l.callback=t),s=is(e,l,i),s!==null&&(Ir(s,e,i,n),Gn(s,e,i))},enqueueReplaceState:function(e,s,t){e=e._reactInternals;var n=er(),i=ds(e),l=$r(n,i);l.tag=1,l.payload=s,t!=null&&(l.callback=t),s=is(e,l,i),s!==null&&(Ir(s,e,i,n),Gn(s,e,i))},enqueueForceUpdate:function(e,s){e=e._reactInternals;var t=er(),n=ds(e),i=$r(t,n);i.tag=2,s!=null&&(i.callback=s),s=is(e,i,n),s!==null&&(Ir(s,e,n,t),Gn(s,e,n))}};function xd(e,s,t,n,i,l,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,d):s.prototype&&s.prototype.isPureReactComponent?!At(t,n)||!At(i,l):!0}function md(e,s,t){var n=!1,i=ts,l=s.contextType;return typeof l=="object"&&l!==null?l=gr(l):(i=tr(s)?bs:Ge.current,n=s.contextTypes,l=(n=n!=null)?Xs(e,i):ts),s=new s(t,l),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=sa,e.stateNode=s,s._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),s}function fd(e,s,t,n){e=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(t,n),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(t,n),s.state!==e&&sa.enqueueReplaceState(s,s.state,null)}function tl(e,s,t,n){var i=e.stateNode;i.props=t,i.state=e.memoizedState,i.refs={},$i(e);var l=s.contextType;typeof l=="object"&&l!==null?i.context=gr(l):(l=tr(s)?bs:Ge.current,i.context=Xs(e,l)),i.state=e.memoizedState,l=s.getDerivedStateFromProps,typeof l=="function"&&(sl(e,s,l,t),i.state=e.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(s=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),s!==i.state&&sa.enqueueReplaceState(i,i.state,null),Yn(e,t,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function at(e,s){try{var t="",n=s;do t+=le(n),n=n.return;while(n);var i=t}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:s,stack:i,digest:null}}function nl(e,s,t){return{value:e,source:null,stack:t!=null?t:null,digest:s!=null?s:null}}function al(e,s){try{console.error(s.value)}catch(t){setTimeout(function(){throw t})}}var Wh=typeof WeakMap=="function"?WeakMap:Map;function gd(e,s,t){t=$r(-1,t),t.tag=3,t.payload={element:null};var n=s.value;return t.callback=function(){ca||(ca=!0,jl=n),al(e,s)},t}function vd(e,s,t){t=$r(-1,t),t.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=s.value;t.payload=function(){return n(i)},t.callback=function(){al(e,s)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(t.callback=function(){al(e,s),typeof n!="function"&&(os===null?os=new Set([this]):os.add(this));var d=s.stack;this.componentDidCatch(s.value,{componentStack:d!==null?d:""})}),t}function yd(e,s,t){var n=e.pingCache;if(n===null){n=e.pingCache=new Wh;var i=new Set;n.set(s,i)}else i=n.get(s),i===void 0&&(i=new Set,n.set(s,i));i.has(t)||(i.add(t),e=rx.bind(null,e,s,t),s.then(e,e))}function jd(e){do{var s;if((s=e.tag===13)&&(s=e.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return e;e=e.return}while(e!==null);return null}function bd(e,s,t,n,i){return(e.mode&1)===0?(e===s?e.flags|=65536:(e.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(s=$r(-1,1),s.tag=2,is(t,s,1))),t.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Uh=P.ReactCurrentOwner,nr=!1;function Ze(e,s,t,n){s.child=e===null?Wc(s,null,t,n):rt(s,e.child,t,n)}function Nd(e,s,t,n,i){t=t.render;var l=s.ref;return tt(s,i),n=Ki(e,s,t,n,l,i),t=Xi(),e!==null&&!nr?(s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~i,Hr(e,s,i)):(Ce&&t&&Ri(s),s.flags|=1,Ze(e,s,n,i),s.child)}function wd(e,s,t,n,i){if(e===null){var l=t.type;return typeof l=="function"&&!Tl(l)&&l.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(s.tag=15,s.type=l,kd(e,s,l,n,i)):(e=ma(t.type,null,n,s,s.mode,i),e.ref=s.ref,e.return=s,s.child=e)}if(l=e.child,(e.lanes&i)===0){var d=l.memoizedProps;if(t=t.compare,t=t!==null?t:At,t(d,n)&&e.ref===s.ref)return Hr(e,s,i)}return s.flags|=1,e=us(l,n),e.ref=s.ref,e.return=s,s.child=e}function kd(e,s,t,n,i){if(e!==null){var l=e.memoizedProps;if(At(l,n)&&e.ref===s.ref)if(nr=!1,s.pendingProps=n=l,(e.lanes&i)!==0)(e.flags&131072)!==0&&(nr=!0);else return s.lanes=e.lanes,Hr(e,s,i)}return il(e,s,t,n,i)}function Sd(e,s,t){var n=s.pendingProps,i=n.children,l=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},je(lt,ur),ur|=t;else{if((t&1073741824)===0)return e=l!==null?l.baseLanes|t:t,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:e,cachePool:null,transitions:null},s.updateQueue=null,je(lt,ur),ur|=e,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=l!==null?l.baseLanes:t,je(lt,ur),ur|=n}else l!==null?(n=l.baseLanes|t,s.memoizedState=null):n=t,je(lt,ur),ur|=n;return Ze(e,s,i,t),s.child}function Cd(e,s){var t=s.ref;(e===null&&t!==null||e!==null&&e.ref!==t)&&(s.flags|=512,s.flags|=2097152)}function il(e,s,t,n,i){var l=tr(t)?bs:Ge.current;return l=Xs(s,l),tt(s,i),t=Ki(e,s,t,n,l,i),n=Xi(),e!==null&&!nr?(s.updateQueue=e.updateQueue,s.flags&=-2053,e.lanes&=~i,Hr(e,s,i)):(Ce&&n&&Ri(s),s.flags|=1,Ze(e,s,t,i),s.child)}function Td(e,s,t,n,i){if(tr(t)){var l=!0;Bn(s)}else l=!1;if(tt(s,i),s.stateNode===null)na(e,s),md(s,t,n),tl(s,t,n,i),n=!0;else if(e===null){var d=s.stateNode,u=s.memoizedProps;d.props=u;var h=d.context,y=t.contextType;typeof y=="object"&&y!==null?y=gr(y):(y=tr(t)?bs:Ge.current,y=Xs(s,y));var w=t.getDerivedStateFromProps,k=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function";k||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==n||h!==y)&&fd(s,d,n,y),as=!1;var N=s.memoizedState;d.state=N,Yn(s,n,d,i),h=s.memoizedState,u!==n||N!==h||sr.current||as?(typeof w=="function"&&(sl(s,t,w,n),h=s.memoizedState),(u=as||xd(s,t,u,n,N,h,y))?(k||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(s.flags|=4194308)):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=n,s.memoizedState=h),d.props=n,d.state=h,d.context=y,n=u):(typeof d.componentDidMount=="function"&&(s.flags|=4194308),n=!1)}else{d=s.stateNode,$c(e,s),u=s.memoizedProps,y=s.type===s.elementType?u:Cr(s.type,u),d.props=y,k=s.pendingProps,N=d.context,h=t.contextType,typeof h=="object"&&h!==null?h=gr(h):(h=tr(t)?bs:Ge.current,h=Xs(s,h));var R=t.getDerivedStateFromProps;(w=typeof R=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(u!==k||N!==h)&&fd(s,d,n,h),as=!1,N=s.memoizedState,d.state=N,Yn(s,n,d,i);var A=s.memoizedState;u!==k||N!==A||sr.current||as?(typeof R=="function"&&(sl(s,t,R,n),A=s.memoizedState),(y=as||xd(s,t,y,n,N,A,h)||!1)?(w||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,A,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,A,h)),typeof d.componentDidUpdate=="function"&&(s.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(s.flags|=1024),s.memoizedProps=n,s.memoizedState=A),d.props=n,d.state=A,d.context=h,n=y):(typeof d.componentDidUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(s.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&N===e.memoizedState||(s.flags|=1024),n=!1)}return ll(e,s,t,n,l,i)}function ll(e,s,t,n,i,l){Cd(e,s);var d=(s.flags&128)!==0;if(!n&&!d)return i&&Lc(s,t,!1),Hr(e,s,l);n=s.stateNode,Uh.current=s;var u=d&&typeof t.getDerivedStateFromError!="function"?null:n.render();return s.flags|=1,e!==null&&d?(s.child=rt(s,e.child,null,l),s.child=rt(s,null,u,l)):Ze(e,s,u,l),s.memoizedState=n.state,i&&Lc(s,t,!0),s.child}function zd(e){var s=e.stateNode;s.pendingContext?Ec(e,s.pendingContext,s.pendingContext!==s.context):s.context&&Ec(e,s.context,!1),Hi(e,s.containerInfo)}function Id(e,s,t,n,i){return et(),Di(i),s.flags|=256,Ze(e,s,t,n),s.child}var ol={dehydrated:null,treeContext:null,retryLane:0};function cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ed(e,s,t){var n=s.pendingProps,i=ze.current,l=!1,d=(s.flags&128)!==0,u;if((u=d)||(u=e!==null&&e.memoizedState===null?!1:(i&2)!==0),u?(l=!0,s.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),je(ze,i&1),e===null)return Mi(s),e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((s.mode&1)===0?s.lanes=1:e.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(d=n.children,e=n.fallback,l?(n=s.mode,l=s.child,d={mode:"hidden",children:d},(n&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=d):l=fa(d,n,0,null),e=Ps(e,n,t,null),l.return=s,e.return=s,l.sibling=e,s.child=l,s.child.memoizedState=cl(t),s.memoizedState=ol,e):dl(s,d));if(i=e.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return $h(e,s,d,n,u,i,t);if(l){l=n.fallback,d=s.mode,i=e.child,u=i.sibling;var h={mode:"hidden",children:n.children};return(d&1)===0&&s.child!==i?(n=s.child,n.childLanes=0,n.pendingProps=h,s.deletions=null):(n=us(i,h),n.subtreeFlags=i.subtreeFlags&14680064),u!==null?l=us(u,l):(l=Ps(l,d,t,null),l.flags|=2),l.return=s,n.return=s,n.sibling=l,s.child=n,n=l,l=s.child,d=e.child.memoizedState,d=d===null?cl(t):{baseLanes:d.baseLanes|t,cachePool:null,transitions:d.transitions},l.memoizedState=d,l.childLanes=e.childLanes&~t,s.memoizedState=ol,n}return l=e.child,e=l.sibling,n=us(l,{mode:"visible",children:n.children}),(s.mode&1)===0&&(n.lanes=t),n.return=s,n.sibling=null,e!==null&&(t=s.deletions,t===null?(s.deletions=[e],s.flags|=16):t.push(e)),s.child=n,s.memoizedState=null,n}function dl(e,s){return s=fa({mode:"visible",children:s},e.mode,0,null),s.return=e,e.child=s}function ta(e,s,t,n){return n!==null&&Di(n),rt(s,e.child,null,t),e=dl(s,s.pendingProps.children),e.flags|=2,s.memoizedState=null,e}function $h(e,s,t,n,i,l,d){if(t)return s.flags&256?(s.flags&=-257,n=nl(Error(o(422))),ta(e,s,d,n)):s.memoizedState!==null?(s.child=e.child,s.flags|=128,null):(l=n.fallback,i=s.mode,n=fa({mode:"visible",children:n.children},i,0,null),l=Ps(l,i,d,null),l.flags|=2,n.return=s,l.return=s,n.sibling=l,s.child=n,(s.mode&1)!==0&&rt(s,e.child,null,d),s.child.memoizedState=cl(d),s.memoizedState=ol,l);if((s.mode&1)===0)return ta(e,s,d,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var u=n.dgst;return n=u,l=Error(o(419)),n=nl(l,n,void 0),ta(e,s,d,n)}if(u=(d&e.childLanes)!==0,nr||u){if(n=We,n!==null){switch(d&-d){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|d))!==0?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ur(e,i),Ir(n,e,i,-1))}return Cl(),n=nl(Error(o(421))),ta(e,s,d,n)}return i.data==="$?"?(s.flags|=128,s.child=e.child,s=sx.bind(null,e),i._reactRetry=s,null):(e=l.treeContext,pr=rs(i.nextSibling),dr=s,Ce=!0,Sr=null,e!==null&&(mr[fr++]=Br,mr[fr++]=Wr,mr[fr++]=Ns,Br=e.id,Wr=e.overflow,Ns=s),s=dl(s,n.children),s.flags|=4096,s)}function Pd(e,s,t){e.lanes|=s;var n=e.alternate;n!==null&&(n.lanes|=s),Wi(e.return,s,t)}function pl(e,s,t,n,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:n,tail:t,tailMode:i}:(l.isBackwards=s,l.rendering=null,l.renderingStartTime=0,l.last=n,l.tail=t,l.tailMode=i)}function Ld(e,s,t){var n=s.pendingProps,i=n.revealOrder,l=n.tail;if(Ze(e,s,n.children,t),n=ze.current,(n&2)!==0)n=n&1|2,s.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=s.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pd(e,t,s);else if(e.tag===19)Pd(e,t,s);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===s)break e;for(;e.sibling===null;){if(e.return===null||e.return===s)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(je(ze,n),(s.mode&1)===0)s.memoizedState=null;else switch(i){case"forwards":for(t=s.child,i=null;t!==null;)e=t.alternate,e!==null&&Kn(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=s.child,s.child=null):(i=t.sibling,t.sibling=null),pl(s,!1,i,t,l);break;case"backwards":for(t=null,i=s.child,s.child=null;i!==null;){if(e=i.alternate,e!==null&&Kn(e)===null){s.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}pl(s,!0,t,null,l);break;case"together":pl(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function na(e,s){(s.mode&1)===0&&e!==null&&(e.alternate=null,s.alternate=null,s.flags|=2)}function Hr(e,s,t){if(e!==null&&(s.dependencies=e.dependencies),Ts|=s.lanes,(t&s.childLanes)===0)return null;if(e!==null&&s.child!==e.child)throw Error(o(153));if(s.child!==null){for(e=s.child,t=us(e,e.pendingProps),s.child=t,t.return=s;e.sibling!==null;)e=e.sibling,t=t.sibling=us(e,e.pendingProps),t.return=s;t.sibling=null}return s.child}function Hh(e,s,t){switch(s.tag){case 3:zd(s),et();break;case 5:qc(s);break;case 1:tr(s.type)&&Bn(s);break;case 4:Hi(s,s.stateNode.containerInfo);break;case 10:var n=s.type._context,i=s.memoizedProps.value;je(qn,n._currentValue),n._currentValue=i;break;case 13:if(n=s.memoizedState,n!==null)return n.dehydrated!==null?(je(ze,ze.current&1),s.flags|=128,null):(t&s.child.childLanes)!==0?Ed(e,s,t):(je(ze,ze.current&1),e=Hr(e,s,t),e!==null?e.sibling:null);je(ze,ze.current&1);break;case 19:if(n=(t&s.childLanes)!==0,(e.flags&128)!==0){if(n)return Ld(e,s,t);s.flags|=128}if(i=s.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),je(ze,ze.current),n)break;return null;case 22:case 23:return s.lanes=0,Sd(e,s,t)}return Hr(e,s,t)}var Rd,ul,_d,Ad;Rd=function(e,s){for(var t=s.child;t!==null;){if(t.tag===5||t.tag===6)e.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===s)break;for(;t.sibling===null;){if(t.return===null||t.return===s)return;t=t.return}t.sibling.return=t.return,t=t.sibling}},ul=function(){},_d=function(e,s,t,n){var i=e.memoizedProps;if(i!==n){e=s.stateNode,Ss(Ar.current);var l=null;switch(t){case"input":i=Wa(e,i),n=Wa(e,n),l=[];break;case"select":i=L({},i,{value:void 0}),n=L({},n,{value:void 0}),l=[];break;case"textarea":i=Ha(e,i),n=Ha(e,n),l=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Dn)}qa(t,n);var d;t=null;for(y in i)if(!n.hasOwnProperty(y)&&i.hasOwnProperty(y)&&i[y]!=null)if(y==="style"){var u=i[y];for(d in u)u.hasOwnProperty(d)&&(t||(t={}),t[d]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(m.hasOwnProperty(y)?l||(l=[]):(l=l||[]).push(y,null));for(y in n){var h=n[y];if(u=i!=null?i[y]:void 0,n.hasOwnProperty(y)&&h!==u&&(h!=null||u!=null))if(y==="style")if(u){for(d in u)!u.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(t||(t={}),t[d]="");for(d in h)h.hasOwnProperty(d)&&u[d]!==h[d]&&(t||(t={}),t[d]=h[d])}else t||(l||(l=[]),l.push(y,t)),t=h;else y==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,u=u?u.__html:void 0,h!=null&&u!==h&&(l=l||[]).push(y,h)):y==="children"?typeof h!="string"&&typeof h!="number"||(l=l||[]).push(y,""+h):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(m.hasOwnProperty(y)?(h!=null&&y==="onScroll"&&be("scroll",e),l||u===h||(l=[])):(l=l||[]).push(y,h))}t&&(l=l||[]).push("style",t);var y=l;(s.updateQueue=y)&&(s.flags|=4)}},Ad=function(e,s,t,n){t!==n&&(s.flags|=4)};function Kt(e,s){if(!Ce)switch(e.tailMode){case"hidden":s=e.tail;for(var t=null;s!==null;)s.alternate!==null&&(t=s),s=s.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?s||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Ke(e){var s=e.alternate!==null&&e.alternate.child===e.child,t=0,n=0;if(s)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=t,s}function Qh(e,s,t){var n=s.pendingProps;switch(_i(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(s),null;case 1:return tr(s.type)&&Fn(),Ke(s),null;case 3:return n=s.stateNode,nt(),Ne(sr),Ne(Ge),Vi(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hn(s)?s.flags|=4:e===null||e.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Sr!==null&&(wl(Sr),Sr=null))),ul(e,s),Ke(s),null;case 5:Qi(s);var i=Ss(Qt.current);if(t=s.type,e!==null&&s.stateNode!=null)_d(e,s,t,n,i),e.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!n){if(s.stateNode===null)throw Error(o(166));return Ke(s),null}if(e=Ss(Ar.current),Hn(s)){n=s.stateNode,t=s.type;var l=s.memoizedProps;switch(n[_r]=s,n[Bt]=l,e=(s.mode&1)!==0,t){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(i=0;i<Dt.length;i++)be(Dt[i],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":mo(n,l),be("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!l.multiple},be("invalid",n);break;case"textarea":vo(n,l),be("invalid",n)}qa(t,l),i=null;for(var d in l)if(l.hasOwnProperty(d)){var u=l[d];d==="children"?typeof u=="string"?n.textContent!==u&&(l.suppressHydrationWarning!==!0&&Mn(n.textContent,u,e),i=["children",u]):typeof u=="number"&&n.textContent!==""+u&&(l.suppressHydrationWarning!==!0&&Mn(n.textContent,u,e),i=["children",""+u]):m.hasOwnProperty(d)&&u!=null&&d==="onScroll"&&be("scroll",n)}switch(t){case"input":Gr(n),go(n,l,!0);break;case"textarea":Gr(n),jo(n);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(n.onclick=Dn)}n=i,s.updateQueue=n,n!==null&&(s.flags|=4)}else{d=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bo(t)),e==="http://www.w3.org/1999/xhtml"?t==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(t,{is:n.is}):(e=d.createElement(t),t==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,t),e[_r]=s,e[Bt]=n,Rd(e,s,!1,!1),s.stateNode=e;e:{switch(d=Va(t,n),t){case"dialog":be("cancel",e),be("close",e),i=n;break;case"iframe":case"object":case"embed":be("load",e),i=n;break;case"video":case"audio":for(i=0;i<Dt.length;i++)be(Dt[i],e);i=n;break;case"source":be("error",e),i=n;break;case"img":case"image":case"link":be("error",e),be("load",e),i=n;break;case"details":be("toggle",e),i=n;break;case"input":mo(e,n),i=Wa(e,n),be("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=L({},n,{value:void 0}),be("invalid",e);break;case"textarea":vo(e,n),i=Ha(e,n),be("invalid",e);break;default:i=n}qa(t,i),u=i;for(l in u)if(u.hasOwnProperty(l)){var h=u[l];l==="style"?ko(e,h):l==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&No(e,h)):l==="children"?typeof h=="string"?(t!=="textarea"||h!=="")&&vt(e,h):typeof h=="number"&&vt(e,""+h):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(m.hasOwnProperty(l)?h!=null&&l==="onScroll"&&be("scroll",e):h!=null&&te(e,l,h,d))}switch(t){case"input":Gr(e),go(e,n,!1);break;case"textarea":Gr(e),jo(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ce(n.value));break;case"select":e.multiple=!!n.multiple,l=n.value,l!=null?Fs(e,!!n.multiple,l,!1):n.defaultValue!=null&&Fs(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Dn)}switch(t){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ke(s),null;case 6:if(e&&s.stateNode!=null)Ad(e,s,e.memoizedProps,n);else{if(typeof n!="string"&&s.stateNode===null)throw Error(o(166));if(t=Ss(Qt.current),Ss(Ar.current),Hn(s)){if(n=s.stateNode,t=s.memoizedProps,n[_r]=s,(l=n.nodeValue!==t)&&(e=dr,e!==null))switch(e.tag){case 3:Mn(n.nodeValue,t,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mn(n.nodeValue,t,(e.mode&1)!==0)}l&&(s.flags|=4)}else n=(t.nodeType===9?t:t.ownerDocument).createTextNode(n),n[_r]=s,s.stateNode=n}return Ke(s),null;case 13:if(Ne(ze),n=s.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ce&&pr!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Oc(),et(),s.flags|=98560,l=!1;else if(l=Hn(s),n!==null&&n.dehydrated!==null){if(e===null){if(!l)throw Error(o(318));if(l=s.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[_r]=s}else et(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ke(s),l=!1}else Sr!==null&&(wl(Sr),Sr=null),l=!0;if(!l)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=t,s):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(s.child.flags|=8192,(s.mode&1)!==0&&(e===null||(ze.current&1)!==0?Oe===0&&(Oe=3):Cl())),s.updateQueue!==null&&(s.flags|=4),Ke(s),null);case 4:return nt(),ul(e,s),e===null&&Ot(s.stateNode.containerInfo),Ke(s),null;case 10:return Bi(s.type._context),Ke(s),null;case 17:return tr(s.type)&&Fn(),Ke(s),null;case 19:if(Ne(ze),l=s.memoizedState,l===null)return Ke(s),null;if(n=(s.flags&128)!==0,d=l.rendering,d===null)if(n)Kt(l,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=s.child;e!==null;){if(d=Kn(e),d!==null){for(s.flags|=128,Kt(l,!1),n=d.updateQueue,n!==null&&(s.updateQueue=n,s.flags|=4),s.subtreeFlags=0,n=t,t=s.child;t!==null;)l=t,e=n,l.flags&=14680066,d=l.alternate,d===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=d.childLanes,l.lanes=d.lanes,l.child=d.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=d.memoizedProps,l.memoizedState=d.memoizedState,l.updateQueue=d.updateQueue,l.type=d.type,e=d.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t=t.sibling;return je(ze,ze.current&1|2),s.child}e=e.sibling}l.tail!==null&&Re()>ot&&(s.flags|=128,n=!0,Kt(l,!1),s.lanes=4194304)}else{if(!n)if(e=Kn(d),e!==null){if(s.flags|=128,n=!0,t=e.updateQueue,t!==null&&(s.updateQueue=t,s.flags|=4),Kt(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Ce)return Ke(s),null}else 2*Re()-l.renderingStartTime>ot&&t!==1073741824&&(s.flags|=128,n=!0,Kt(l,!1),s.lanes=4194304);l.isBackwards?(d.sibling=s.child,s.child=d):(t=l.last,t!==null?t.sibling=d:s.child=d,l.last=d)}return l.tail!==null?(s=l.tail,l.rendering=s,l.tail=s.sibling,l.renderingStartTime=Re(),s.sibling=null,t=ze.current,je(ze,n?t&1|2:t&1),s):(Ke(s),null);case 22:case 23:return Sl(),n=s.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(s.flags|=8192),n&&(s.mode&1)!==0?(ur&1073741824)!==0&&(Ke(s),s.subtreeFlags&6&&(s.flags|=8192)):Ke(s),null;case 24:return null;case 25:return null}throw Error(o(156,s.tag))}function qh(e,s){switch(_i(s),s.tag){case 1:return tr(s.type)&&Fn(),e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 3:return nt(),Ne(sr),Ne(Ge),Vi(),e=s.flags,(e&65536)!==0&&(e&128)===0?(s.flags=e&-65537|128,s):null;case 5:return Qi(s),null;case 13:if(Ne(ze),e=s.memoizedState,e!==null&&e.dehydrated!==null){if(s.alternate===null)throw Error(o(340));et()}return e=s.flags,e&65536?(s.flags=e&-65537|128,s):null;case 19:return Ne(ze),null;case 4:return nt(),null;case 10:return Bi(s.type._context),null;case 22:case 23:return Sl(),null;case 24:return null;default:return null}}var aa=!1,Xe=!1,Vh=typeof WeakSet=="function"?WeakSet:Set,_=null;function it(e,s){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){Pe(e,s,n)}else t.current=null}function hl(e,s,t){try{t()}catch(n){Pe(e,s,n)}}var Md=!1;function Gh(e,s){if(Si=Sn,e=xc(),gi(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var n=t.getSelection&&t.getSelection();if(n&&n.rangeCount!==0){t=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var d=0,u=-1,h=-1,y=0,w=0,k=e,N=null;r:for(;;){for(var R;k!==t||i!==0&&k.nodeType!==3||(u=d+i),k!==l||n!==0&&k.nodeType!==3||(h=d+n),k.nodeType===3&&(d+=k.nodeValue.length),(R=k.firstChild)!==null;)N=k,k=R;for(;;){if(k===e)break r;if(N===t&&++y===i&&(u=d),N===l&&++w===n&&(h=d),(R=k.nextSibling)!==null)break;k=N,N=k.parentNode}k=R}t=u===-1||h===-1?null:{start:u,end:h}}else t=null}t=t||{start:0,end:0}}else t=null;for(Ci={focusedElem:e,selectionRange:t},Sn=!1,_=s;_!==null;)if(s=_,e=s.child,(s.subtreeFlags&1028)!==0&&e!==null)e.return=s,_=e;else for(;_!==null;){s=_;try{var A=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var M=A.memoizedProps,_e=A.memoizedState,g=s.stateNode,x=g.getSnapshotBeforeUpdate(s.elementType===s.type?M:Cr(s.type,M),_e);g.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=s.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(C){Pe(s,s.return,C)}if(e=s.sibling,e!==null){e.return=s.return,_=e;break}_=s.return}return A=Md,Md=!1,A}function Xt(e,s,t){var n=s.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&hl(s,t,l)}i=i.next}while(i!==n)}}function ia(e,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var t=s=s.next;do{if((t.tag&e)===e){var n=t.create;t.destroy=n()}t=t.next}while(t!==s)}}function xl(e){var s=e.ref;if(s!==null){var t=e.stateNode;switch(e.tag){case 5:e=t;break;default:e=t}typeof s=="function"?s(e):s.current=e}}function Dd(e){var s=e.alternate;s!==null&&(e.alternate=null,Dd(s)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(s=e.stateNode,s!==null&&(delete s[_r],delete s[Bt],delete s[Ei],delete s[Eh],delete s[Ph])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Od(e){return e.tag===5||e.tag===3||e.tag===4}function Fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Od(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ml(e,s,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,s?t.nodeType===8?t.parentNode.insertBefore(e,s):t.insertBefore(e,s):(t.nodeType===8?(s=t.parentNode,s.insertBefore(e,t)):(s=t,s.appendChild(e)),t=t._reactRootContainer,t!=null||s.onclick!==null||(s.onclick=Dn));else if(n!==4&&(e=e.child,e!==null))for(ml(e,s,t),e=e.sibling;e!==null;)ml(e,s,t),e=e.sibling}function fl(e,s,t){var n=e.tag;if(n===5||n===6)e=e.stateNode,s?t.insertBefore(e,s):t.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(fl(e,s,t),e=e.sibling;e!==null;)fl(e,s,t),e=e.sibling}var $e=null,Tr=!1;function ls(e,s,t){for(t=t.child;t!==null;)Bd(e,s,t),t=t.sibling}function Bd(e,s,t){if(Rr&&typeof Rr.onCommitFiberUnmount=="function")try{Rr.onCommitFiberUnmount(yn,t)}catch{}switch(t.tag){case 5:Xe||it(t,s);case 6:var n=$e,i=Tr;$e=null,ls(e,s,t),$e=n,Tr=i,$e!==null&&(Tr?(e=$e,t=t.stateNode,e.nodeType===8?e.parentNode.removeChild(t):e.removeChild(t)):$e.removeChild(t.stateNode));break;case 18:$e!==null&&(Tr?(e=$e,t=t.stateNode,e.nodeType===8?Ii(e.parentNode,t):e.nodeType===1&&Ii(e,t),It(e)):Ii($e,t.stateNode));break;case 4:n=$e,i=Tr,$e=t.stateNode.containerInfo,Tr=!0,ls(e,s,t),$e=n,Tr=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(n=t.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var l=i,d=l.destroy;l=l.tag,d!==void 0&&((l&2)!==0||(l&4)!==0)&&hl(t,s,d),i=i.next}while(i!==n)}ls(e,s,t);break;case 1:if(!Xe&&(it(t,s),n=t.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=t.memoizedProps,n.state=t.memoizedState,n.componentWillUnmount()}catch(u){Pe(t,s,u)}ls(e,s,t);break;case 21:ls(e,s,t);break;case 22:t.mode&1?(Xe=(n=Xe)||t.memoizedState!==null,ls(e,s,t),Xe=n):ls(e,s,t);break;default:ls(e,s,t)}}function Wd(e){var s=e.updateQueue;if(s!==null){e.updateQueue=null;var t=e.stateNode;t===null&&(t=e.stateNode=new Vh),s.forEach(function(n){var i=tx.bind(null,e,n);t.has(n)||(t.add(n),n.then(i,i))})}}function zr(e,s){var t=s.deletions;if(t!==null)for(var n=0;n<t.length;n++){var i=t[n];try{var l=e,d=s,u=d;e:for(;u!==null;){switch(u.tag){case 5:$e=u.stateNode,Tr=!1;break e;case 3:$e=u.stateNode.containerInfo,Tr=!0;break e;case 4:$e=u.stateNode.containerInfo,Tr=!0;break e}u=u.return}if($e===null)throw Error(o(160));Bd(l,d,i),$e=null,Tr=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(y){Pe(i,s,y)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Ud(s,e),s=s.sibling}function Ud(e,s){var t=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(zr(s,e),Dr(e),n&4){try{Xt(3,e,e.return),ia(3,e)}catch(M){Pe(e,e.return,M)}try{Xt(5,e,e.return)}catch(M){Pe(e,e.return,M)}}break;case 1:zr(s,e),Dr(e),n&512&&t!==null&&it(t,t.return);break;case 5:if(zr(s,e),Dr(e),n&512&&t!==null&&it(t,t.return),e.flags&32){var i=e.stateNode;try{vt(i,"")}catch(M){Pe(e,e.return,M)}}if(n&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,d=t!==null?t.memoizedProps:l,u=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{u==="input"&&l.type==="radio"&&l.name!=null&&fo(i,l),Va(u,d);var y=Va(u,l);for(d=0;d<h.length;d+=2){var w=h[d],k=h[d+1];w==="style"?ko(i,k):w==="dangerouslySetInnerHTML"?No(i,k):w==="children"?vt(i,k):te(i,w,k,y)}switch(u){case"input":Ua(i,l);break;case"textarea":yo(i,l);break;case"select":var N=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var R=l.value;R!=null?Fs(i,!!l.multiple,R,!1):N!==!!l.multiple&&(l.defaultValue!=null?Fs(i,!!l.multiple,l.defaultValue,!0):Fs(i,!!l.multiple,l.multiple?[]:"",!1))}i[Bt]=l}catch(M){Pe(e,e.return,M)}}break;case 6:if(zr(s,e),Dr(e),n&4){if(e.stateNode===null)throw Error(o(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(M){Pe(e,e.return,M)}}break;case 3:if(zr(s,e),Dr(e),n&4&&t!==null&&t.memoizedState.isDehydrated)try{It(s.containerInfo)}catch(M){Pe(e,e.return,M)}break;case 4:zr(s,e),Dr(e);break;case 13:zr(s,e),Dr(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(yl=Re())),n&4&&Wd(e);break;case 22:if(w=t!==null&&t.memoizedState!==null,e.mode&1?(Xe=(y=Xe)||w,zr(s,e),Xe=y):zr(s,e),Dr(e),n&8192){if(y=e.memoizedState!==null,(e.stateNode.isHidden=y)&&!w&&(e.mode&1)!==0)for(_=e,w=e.child;w!==null;){for(k=_=w;_!==null;){switch(N=_,R=N.child,N.tag){case 0:case 11:case 14:case 15:Xt(4,N,N.return);break;case 1:it(N,N.return);var A=N.stateNode;if(typeof A.componentWillUnmount=="function"){n=N,t=N.return;try{s=n,A.props=s.memoizedProps,A.state=s.memoizedState,A.componentWillUnmount()}catch(M){Pe(n,t,M)}}break;case 5:it(N,N.return);break;case 22:if(N.memoizedState!==null){Qd(k);continue}}R!==null?(R.return=N,_=R):Qd(k)}w=w.sibling}e:for(w=null,k=e;;){if(k.tag===5){if(w===null){w=k;try{i=k.stateNode,y?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(u=k.stateNode,h=k.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,u.style.display=wo("display",d))}catch(M){Pe(e,e.return,M)}}}else if(k.tag===6){if(w===null)try{k.stateNode.nodeValue=y?"":k.memoizedProps}catch(M){Pe(e,e.return,M)}}else if((k.tag!==22&&k.tag!==23||k.memoizedState===null||k===e)&&k.child!==null){k.child.return=k,k=k.child;continue}if(k===e)break e;for(;k.sibling===null;){if(k.return===null||k.return===e)break e;w===k&&(w=null),k=k.return}w===k&&(w=null),k.sibling.return=k.return,k=k.sibling}}break;case 19:zr(s,e),Dr(e),n&4&&Wd(e);break;case 21:break;default:zr(s,e),Dr(e)}}function Dr(e){var s=e.flags;if(s&2){try{e:{for(var t=e.return;t!==null;){if(Od(t)){var n=t;break e}t=t.return}throw Error(o(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(vt(i,""),n.flags&=-33);var l=Fd(e);fl(e,l,i);break;case 3:case 4:var d=n.stateNode.containerInfo,u=Fd(e);ml(e,u,d);break;default:throw Error(o(161))}}catch(h){Pe(e,e.return,h)}e.flags&=-3}s&4096&&(e.flags&=-4097)}function Yh(e,s,t){_=e,$d(e)}function $d(e,s,t){for(var n=(e.mode&1)!==0;_!==null;){var i=_,l=i.child;if(i.tag===22&&n){var d=i.memoizedState!==null||aa;if(!d){var u=i.alternate,h=u!==null&&u.memoizedState!==null||Xe;u=aa;var y=Xe;if(aa=d,(Xe=h)&&!y)for(_=i;_!==null;)d=_,h=d.child,d.tag===22&&d.memoizedState!==null?qd(i):h!==null?(h.return=d,_=h):qd(i);for(;l!==null;)_=l,$d(l),l=l.sibling;_=i,aa=u,Xe=y}Hd(e)}else(i.subtreeFlags&8772)!==0&&l!==null?(l.return=i,_=l):Hd(e)}}function Hd(e){for(;_!==null;){var s=_;if((s.flags&8772)!==0){var t=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Xe||ia(5,s);break;case 1:var n=s.stateNode;if(s.flags&4&&!Xe)if(t===null)n.componentDidMount();else{var i=s.elementType===s.type?t.memoizedProps:Cr(s.type,t.memoizedProps);n.componentDidUpdate(i,t.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var l=s.updateQueue;l!==null&&Qc(s,l,n);break;case 3:var d=s.updateQueue;if(d!==null){if(t=null,s.child!==null)switch(s.child.tag){case 5:t=s.child.stateNode;break;case 1:t=s.child.stateNode}Qc(s,d,t)}break;case 5:var u=s.stateNode;if(t===null&&s.flags&4){t=u;var h=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&t.focus();break;case"img":h.src&&(t.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var y=s.alternate;if(y!==null){var w=y.memoizedState;if(w!==null){var k=w.dehydrated;k!==null&&It(k)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}Xe||s.flags&512&&xl(s)}catch(N){Pe(s,s.return,N)}}if(s===e){_=null;break}if(t=s.sibling,t!==null){t.return=s.return,_=t;break}_=s.return}}function Qd(e){for(;_!==null;){var s=_;if(s===e){_=null;break}var t=s.sibling;if(t!==null){t.return=s.return,_=t;break}_=s.return}}function qd(e){for(;_!==null;){var s=_;try{switch(s.tag){case 0:case 11:case 15:var t=s.return;try{ia(4,s)}catch(h){Pe(s,t,h)}break;case 1:var n=s.stateNode;if(typeof n.componentDidMount=="function"){var i=s.return;try{n.componentDidMount()}catch(h){Pe(s,i,h)}}var l=s.return;try{xl(s)}catch(h){Pe(s,l,h)}break;case 5:var d=s.return;try{xl(s)}catch(h){Pe(s,d,h)}}}catch(h){Pe(s,s.return,h)}if(s===e){_=null;break}var u=s.sibling;if(u!==null){u.return=s.return,_=u;break}_=s.return}}var Kh=Math.ceil,la=P.ReactCurrentDispatcher,gl=P.ReactCurrentOwner,yr=P.ReactCurrentBatchConfig,ue=0,We=null,Ae=null,He=0,ur=0,lt=ss(0),Oe=0,Jt=null,Ts=0,oa=0,vl=0,Zt=null,ar=null,yl=0,ot=1/0,Qr=null,ca=!1,jl=null,os=null,da=!1,cs=null,pa=0,en=0,bl=null,ua=-1,ha=0;function er(){return(ue&6)!==0?Re():ua!==-1?ua:ua=Re()}function ds(e){return(e.mode&1)===0?1:(ue&2)!==0&&He!==0?He&-He:Rh.transition!==null?(ha===0&&(ha=Fo()),ha):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Go(e.type)),e)}function Ir(e,s,t,n){if(50<en)throw en=0,bl=null,Error(o(185));kt(e,t,n),((ue&2)===0||e!==We)&&(e===We&&((ue&2)===0&&(oa|=t),Oe===4&&ps(e,He)),ir(e,n),t===1&&ue===0&&(s.mode&1)===0&&(ot=Re()+500,Wn&&ns()))}function ir(e,s){var t=e.callbackNode;Ru(e,s);var n=Nn(e,e===We?He:0);if(n===0)t!==null&&Mo(t),e.callbackNode=null,e.callbackPriority=0;else if(s=n&-n,e.callbackPriority!==s){if(t!=null&&Mo(t),s===1)e.tag===0?Lh(Gd.bind(null,e)):Rc(Gd.bind(null,e)),zh(function(){(ue&6)===0&&ns()}),t=null;else{switch(Bo(n)){case 1:t=ei;break;case 4:t=Do;break;case 16:t=vn;break;case 536870912:t=Oo;break;default:t=vn}t=sp(t,Vd.bind(null,e))}e.callbackPriority=s,e.callbackNode=t}}function Vd(e,s){if(ua=-1,ha=0,(ue&6)!==0)throw Error(o(327));var t=e.callbackNode;if(ct()&&e.callbackNode!==t)return null;var n=Nn(e,e===We?He:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||s)s=xa(e,n);else{s=n;var i=ue;ue|=2;var l=Kd();(We!==e||He!==s)&&(Qr=null,ot=Re()+500,Is(e,s));do try{Zh();break}catch(u){Yd(e,u)}while(!0);Fi(),la.current=l,ue=i,Ae!==null?s=0:(We=null,He=0,s=Oe)}if(s!==0){if(s===2&&(i=ri(e),i!==0&&(n=i,s=Nl(e,i))),s===1)throw t=Jt,Is(e,0),ps(e,n),ir(e,Re()),t;if(s===6)ps(e,n);else{if(i=e.current.alternate,(n&30)===0&&!Xh(i)&&(s=xa(e,n),s===2&&(l=ri(e),l!==0&&(n=l,s=Nl(e,l))),s===1))throw t=Jt,Is(e,0),ps(e,n),ir(e,Re()),t;switch(e.finishedWork=i,e.finishedLanes=n,s){case 0:case 1:throw Error(o(345));case 2:Es(e,ar,Qr);break;case 3:if(ps(e,n),(n&130023424)===n&&(s=yl+500-Re(),10<s)){if(Nn(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){er(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=zi(Es.bind(null,e,ar,Qr),s);break}Es(e,ar,Qr);break;case 4:if(ps(e,n),(n&4194240)===n)break;for(s=e.eventTimes,i=-1;0<n;){var d=31-wr(n);l=1<<d,d=s[d],d>i&&(i=d),n&=~l}if(n=i,n=Re()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Kh(n/1960))-n,10<n){e.timeoutHandle=zi(Es.bind(null,e,ar,Qr),n);break}Es(e,ar,Qr);break;case 5:Es(e,ar,Qr);break;default:throw Error(o(329))}}}return ir(e,Re()),e.callbackNode===t?Vd.bind(null,e):null}function Nl(e,s){var t=Zt;return e.current.memoizedState.isDehydrated&&(Is(e,s).flags|=256),e=xa(e,s),e!==2&&(s=ar,ar=t,s!==null&&wl(s)),e}function wl(e){ar===null?ar=e:ar.push.apply(ar,e)}function Xh(e){for(var s=e;;){if(s.flags&16384){var t=s.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var n=0;n<t.length;n++){var i=t[n],l=i.getSnapshot;i=i.value;try{if(!kr(l(),i))return!1}catch{return!1}}}if(t=s.child,s.subtreeFlags&16384&&t!==null)t.return=s,s=t;else{if(s===e)break;for(;s.sibling===null;){if(s.return===null||s.return===e)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ps(e,s){for(s&=~vl,s&=~oa,e.suspendedLanes|=s,e.pingedLanes&=~s,e=e.expirationTimes;0<s;){var t=31-wr(s),n=1<<t;e[t]=-1,s&=~n}}function Gd(e){if((ue&6)!==0)throw Error(o(327));ct();var s=Nn(e,0);if((s&1)===0)return ir(e,Re()),null;var t=xa(e,s);if(e.tag!==0&&t===2){var n=ri(e);n!==0&&(s=n,t=Nl(e,n))}if(t===1)throw t=Jt,Is(e,0),ps(e,s),ir(e,Re()),t;if(t===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=s,Es(e,ar,Qr),ir(e,Re()),null}function kl(e,s){var t=ue;ue|=1;try{return e(s)}finally{ue=t,ue===0&&(ot=Re()+500,Wn&&ns())}}function zs(e){cs!==null&&cs.tag===0&&(ue&6)===0&&ct();var s=ue;ue|=1;var t=yr.transition,n=ge;try{if(yr.transition=null,ge=1,e)return e()}finally{ge=n,yr.transition=t,ue=s,(ue&6)===0&&ns()}}function Sl(){ur=lt.current,Ne(lt)}function Is(e,s){e.finishedWork=null,e.finishedLanes=0;var t=e.timeoutHandle;if(t!==-1&&(e.timeoutHandle=-1,Th(t)),Ae!==null)for(t=Ae.return;t!==null;){var n=t;switch(_i(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Fn();break;case 3:nt(),Ne(sr),Ne(Ge),Vi();break;case 5:Qi(n);break;case 4:nt();break;case 13:Ne(ze);break;case 19:Ne(ze);break;case 10:Bi(n.type._context);break;case 22:case 23:Sl()}t=t.return}if(We=e,Ae=e=us(e.current,null),He=ur=s,Oe=0,Jt=null,vl=oa=Ts=0,ar=Zt=null,ks!==null){for(s=0;s<ks.length;s++)if(t=ks[s],n=t.interleaved,n!==null){t.interleaved=null;var i=n.next,l=t.pending;if(l!==null){var d=l.next;l.next=i,n.next=d}t.pending=n}ks=null}return e}function Yd(e,s){do{var t=Ae;try{if(Fi(),Xn.current=ra,Jn){for(var n=Ie.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Jn=!1}if(Cs=0,Be=De=Ie=null,qt=!1,Vt=0,gl.current=null,t===null||t.return===null){Oe=1,Jt=s,Ae=null;break}e:{var l=e,d=t.return,u=t,h=s;if(s=He,u.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var y=h,w=u,k=w.tag;if((w.mode&1)===0&&(k===0||k===11||k===15)){var N=w.alternate;N?(w.updateQueue=N.updateQueue,w.memoizedState=N.memoizedState,w.lanes=N.lanes):(w.updateQueue=null,w.memoizedState=null)}var R=jd(d);if(R!==null){R.flags&=-257,bd(R,d,u,l,s),R.mode&1&&yd(l,y,s),s=R,h=y;var A=s.updateQueue;if(A===null){var M=new Set;M.add(h),s.updateQueue=M}else A.add(h);break e}else{if((s&1)===0){yd(l,y,s),Cl();break e}h=Error(o(426))}}else if(Ce&&u.mode&1){var _e=jd(d);if(_e!==null){(_e.flags&65536)===0&&(_e.flags|=256),bd(_e,d,u,l,s),Di(at(h,u));break e}}l=h=at(h,u),Oe!==4&&(Oe=2),Zt===null?Zt=[l]:Zt.push(l),l=d;do{switch(l.tag){case 3:l.flags|=65536,s&=-s,l.lanes|=s;var g=gd(l,h,s);Hc(l,g);break e;case 1:u=h;var x=l.type,v=l.stateNode;if((l.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(os===null||!os.has(v)))){l.flags|=65536,s&=-s,l.lanes|=s;var C=vd(l,u,s);Hc(l,C);break e}}l=l.return}while(l!==null)}Jd(t)}catch(O){s=O,Ae===t&&t!==null&&(Ae=t=t.return);continue}break}while(!0)}function Kd(){var e=la.current;return la.current=ra,e===null?ra:e}function Cl(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),We===null||(Ts&268435455)===0&&(oa&268435455)===0||ps(We,He)}function xa(e,s){var t=ue;ue|=2;var n=Kd();(We!==e||He!==s)&&(Qr=null,Is(e,s));do try{Jh();break}catch(i){Yd(e,i)}while(!0);if(Fi(),ue=t,la.current=n,Ae!==null)throw Error(o(261));return We=null,He=0,Oe}function Jh(){for(;Ae!==null;)Xd(Ae)}function Zh(){for(;Ae!==null&&!ku();)Xd(Ae)}function Xd(e){var s=rp(e.alternate,e,ur);e.memoizedProps=e.pendingProps,s===null?Jd(e):Ae=s,gl.current=null}function Jd(e){var s=e;do{var t=s.alternate;if(e=s.return,(s.flags&32768)===0){if(t=Qh(t,s,ur),t!==null){Ae=t;return}}else{if(t=qh(t,s),t!==null){t.flags&=32767,Ae=t;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,Ae=null;return}}if(s=s.sibling,s!==null){Ae=s;return}Ae=s=e}while(s!==null);Oe===0&&(Oe=5)}function Es(e,s,t){var n=ge,i=yr.transition;try{yr.transition=null,ge=1,ex(e,s,t,n)}finally{yr.transition=i,ge=n}return null}function ex(e,s,t,n){do ct();while(cs!==null);if((ue&6)!==0)throw Error(o(327));t=e.finishedWork;var i=e.finishedLanes;if(t===null)return null;if(e.finishedWork=null,e.finishedLanes=0,t===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var l=t.lanes|t.childLanes;if(_u(e,l),e===We&&(Ae=We=null,He=0),(t.subtreeFlags&2064)===0&&(t.flags&2064)===0||da||(da=!0,sp(vn,function(){return ct(),null})),l=(t.flags&15990)!==0,(t.subtreeFlags&15990)!==0||l){l=yr.transition,yr.transition=null;var d=ge;ge=1;var u=ue;ue|=4,gl.current=null,Gh(e,t),Ud(t,e),jh(Ci),Sn=!!Si,Ci=Si=null,e.current=t,Yh(t),Su(),ue=u,ge=d,yr.transition=l}else e.current=t;if(da&&(da=!1,cs=e,pa=i),l=e.pendingLanes,l===0&&(os=null),zu(t.stateNode),ir(e,Re()),s!==null)for(n=e.onRecoverableError,t=0;t<s.length;t++)i=s[t],n(i.value,{componentStack:i.stack,digest:i.digest});if(ca)throw ca=!1,e=jl,jl=null,e;return(pa&1)!==0&&e.tag!==0&&ct(),l=e.pendingLanes,(l&1)!==0?e===bl?en++:(en=0,bl=e):en=0,ns(),null}function ct(){if(cs!==null){var e=Bo(pa),s=yr.transition,t=ge;try{if(yr.transition=null,ge=16>e?16:e,cs===null)var n=!1;else{if(e=cs,cs=null,pa=0,(ue&6)!==0)throw Error(o(331));var i=ue;for(ue|=4,_=e.current;_!==null;){var l=_,d=l.child;if((_.flags&16)!==0){var u=l.deletions;if(u!==null){for(var h=0;h<u.length;h++){var y=u[h];for(_=y;_!==null;){var w=_;switch(w.tag){case 0:case 11:case 15:Xt(8,w,l)}var k=w.child;if(k!==null)k.return=w,_=k;else for(;_!==null;){w=_;var N=w.sibling,R=w.return;if(Dd(w),w===y){_=null;break}if(N!==null){N.return=R,_=N;break}_=R}}}var A=l.alternate;if(A!==null){var M=A.child;if(M!==null){A.child=null;do{var _e=M.sibling;M.sibling=null,M=_e}while(M!==null)}}_=l}}if((l.subtreeFlags&2064)!==0&&d!==null)d.return=l,_=d;else e:for(;_!==null;){if(l=_,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:Xt(9,l,l.return)}var g=l.sibling;if(g!==null){g.return=l.return,_=g;break e}_=l.return}}var x=e.current;for(_=x;_!==null;){d=_;var v=d.child;if((d.subtreeFlags&2064)!==0&&v!==null)v.return=d,_=v;else e:for(d=x;_!==null;){if(u=_,(u.flags&2048)!==0)try{switch(u.tag){case 0:case 11:case 15:ia(9,u)}}catch(O){Pe(u,u.return,O)}if(u===d){_=null;break e}var C=u.sibling;if(C!==null){C.return=u.return,_=C;break e}_=u.return}}if(ue=i,ns(),Rr&&typeof Rr.onPostCommitFiberRoot=="function")try{Rr.onPostCommitFiberRoot(yn,e)}catch{}n=!0}return n}finally{ge=t,yr.transition=s}}return!1}function Zd(e,s,t){s=at(t,s),s=gd(e,s,1),e=is(e,s,1),s=er(),e!==null&&(kt(e,1,s),ir(e,s))}function Pe(e,s,t){if(e.tag===3)Zd(e,e,t);else for(;s!==null;){if(s.tag===3){Zd(s,e,t);break}else if(s.tag===1){var n=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(os===null||!os.has(n))){e=at(t,e),e=vd(s,e,1),s=is(s,e,1),e=er(),s!==null&&(kt(s,1,e),ir(s,e));break}}s=s.return}}function rx(e,s,t){var n=e.pingCache;n!==null&&n.delete(s),s=er(),e.pingedLanes|=e.suspendedLanes&t,We===e&&(He&t)===t&&(Oe===4||Oe===3&&(He&130023424)===He&&500>Re()-yl?Is(e,0):vl|=t),ir(e,s)}function ep(e,s){s===0&&((e.mode&1)===0?s=1:(s=bn,bn<<=1,(bn&130023424)===0&&(bn=4194304)));var t=er();e=Ur(e,s),e!==null&&(kt(e,s,t),ir(e,t))}function sx(e){var s=e.memoizedState,t=0;s!==null&&(t=s.retryLane),ep(e,t)}function tx(e,s){var t=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(o(314))}n!==null&&n.delete(s),ep(e,t)}var rp;rp=function(e,s,t){if(e!==null)if(e.memoizedProps!==s.pendingProps||sr.current)nr=!0;else{if((e.lanes&t)===0&&(s.flags&128)===0)return nr=!1,Hh(e,s,t);nr=(e.flags&131072)!==0}else nr=!1,Ce&&(s.flags&1048576)!==0&&_c(s,$n,s.index);switch(s.lanes=0,s.tag){case 2:var n=s.type;na(e,s),e=s.pendingProps;var i=Xs(s,Ge.current);tt(s,t),i=Ki(null,s,n,e,i,t);var l=Xi();return s.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,tr(n)?(l=!0,Bn(s)):l=!1,s.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$i(s),i.updater=sa,s.stateNode=i,i._reactInternals=s,tl(s,n,e,t),s=ll(null,s,n,!0,l,t)):(s.tag=0,Ce&&l&&Ri(s),Ze(null,s,i,t),s=s.child),s;case 16:n=s.elementType;e:{switch(na(e,s),e=s.pendingProps,i=n._init,n=i(n._payload),s.type=n,i=s.tag=ax(n),e=Cr(n,e),i){case 0:s=il(null,s,n,e,t);break e;case 1:s=Td(null,s,n,e,t);break e;case 11:s=Nd(null,s,n,e,t);break e;case 14:s=wd(null,s,n,Cr(n.type,e),t);break e}throw Error(o(306,n,""))}return s;case 0:return n=s.type,i=s.pendingProps,i=s.elementType===n?i:Cr(n,i),il(e,s,n,i,t);case 1:return n=s.type,i=s.pendingProps,i=s.elementType===n?i:Cr(n,i),Td(e,s,n,i,t);case 3:e:{if(zd(s),e===null)throw Error(o(387));n=s.pendingProps,l=s.memoizedState,i=l.element,$c(e,s),Yn(s,n,null,t);var d=s.memoizedState;if(n=d.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},s.updateQueue.baseState=l,s.memoizedState=l,s.flags&256){i=at(Error(o(423)),s),s=Id(e,s,n,t,i);break e}else if(n!==i){i=at(Error(o(424)),s),s=Id(e,s,n,t,i);break e}else for(pr=rs(s.stateNode.containerInfo.firstChild),dr=s,Ce=!0,Sr=null,t=Wc(s,null,n,t),s.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(et(),n===i){s=Hr(e,s,t);break e}Ze(e,s,n,t)}s=s.child}return s;case 5:return qc(s),e===null&&Mi(s),n=s.type,i=s.pendingProps,l=e!==null?e.memoizedProps:null,d=i.children,Ti(n,i)?d=null:l!==null&&Ti(n,l)&&(s.flags|=32),Cd(e,s),Ze(e,s,d,t),s.child;case 6:return e===null&&Mi(s),null;case 13:return Ed(e,s,t);case 4:return Hi(s,s.stateNode.containerInfo),n=s.pendingProps,e===null?s.child=rt(s,null,n,t):Ze(e,s,n,t),s.child;case 11:return n=s.type,i=s.pendingProps,i=s.elementType===n?i:Cr(n,i),Nd(e,s,n,i,t);case 7:return Ze(e,s,s.pendingProps,t),s.child;case 8:return Ze(e,s,s.pendingProps.children,t),s.child;case 12:return Ze(e,s,s.pendingProps.children,t),s.child;case 10:e:{if(n=s.type._context,i=s.pendingProps,l=s.memoizedProps,d=i.value,je(qn,n._currentValue),n._currentValue=d,l!==null)if(kr(l.value,d)){if(l.children===i.children&&!sr.current){s=Hr(e,s,t);break e}}else for(l=s.child,l!==null&&(l.return=s);l!==null;){var u=l.dependencies;if(u!==null){d=l.child;for(var h=u.firstContext;h!==null;){if(h.context===n){if(l.tag===1){h=$r(-1,t&-t),h.tag=2;var y=l.updateQueue;if(y!==null){y=y.shared;var w=y.pending;w===null?h.next=h:(h.next=w.next,w.next=h),y.pending=h}}l.lanes|=t,h=l.alternate,h!==null&&(h.lanes|=t),Wi(l.return,t,s),u.lanes|=t;break}h=h.next}}else if(l.tag===10)d=l.type===s.type?null:l.child;else if(l.tag===18){if(d=l.return,d===null)throw Error(o(341));d.lanes|=t,u=d.alternate,u!==null&&(u.lanes|=t),Wi(d,t,s),d=l.sibling}else d=l.child;if(d!==null)d.return=l;else for(d=l;d!==null;){if(d===s){d=null;break}if(l=d.sibling,l!==null){l.return=d.return,d=l;break}d=d.return}l=d}Ze(e,s,i.children,t),s=s.child}return s;case 9:return i=s.type,n=s.pendingProps.children,tt(s,t),i=gr(i),n=n(i),s.flags|=1,Ze(e,s,n,t),s.child;case 14:return n=s.type,i=Cr(n,s.pendingProps),i=Cr(n.type,i),wd(e,s,n,i,t);case 15:return kd(e,s,s.type,s.pendingProps,t);case 17:return n=s.type,i=s.pendingProps,i=s.elementType===n?i:Cr(n,i),na(e,s),s.tag=1,tr(n)?(e=!0,Bn(s)):e=!1,tt(s,t),md(s,n,i),tl(s,n,i,t),ll(null,s,n,!0,e,t);case 19:return Ld(e,s,t);case 22:return Sd(e,s,t)}throw Error(o(156,s.tag))};function sp(e,s){return Ao(e,s)}function nx(e,s,t,n){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jr(e,s,t,n){return new nx(e,s,t,n)}function Tl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ax(e){if(typeof e=="function")return Tl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ee)return 11;if(e===Je)return 14}return 2}function us(e,s){var t=e.alternate;return t===null?(t=jr(e.tag,s,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=s,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&14680064,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,s=e.dependencies,t.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t}function ma(e,s,t,n,i,l){var d=2;if(n=e,typeof e=="function")Tl(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case I:return Ps(t.children,i,l,s);case D:d=8,i|=8;break;case ve:return e=jr(12,t,s,i|2),e.elementType=ve,e.lanes=l,e;case Se:return e=jr(13,t,s,i),e.elementType=Se,e.lanes=l,e;case qe:return e=jr(19,t,s,i),e.elementType=qe,e.lanes=l,e;case ye:return fa(t,i,l,s);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:d=10;break e;case ie:d=9;break e;case Ee:d=11;break e;case Je:d=14;break e;case Ve:d=16,n=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return s=jr(d,t,s,i),s.elementType=e,s.type=n,s.lanes=l,s}function Ps(e,s,t,n){return e=jr(7,e,n,s),e.lanes=t,e}function fa(e,s,t,n){return e=jr(22,e,n,s),e.elementType=ye,e.lanes=t,e.stateNode={isHidden:!1},e}function zl(e,s,t){return e=jr(6,e,null,s),e.lanes=t,e}function Il(e,s,t){return s=jr(4,e.children!==null?e.children:[],e.key,s),s.lanes=t,s.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},s}function ix(e,s,t,n,i){this.tag=s,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=si(0),this.expirationTimes=si(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=si(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function El(e,s,t,n,i,l,d,u,h){return e=new ix(e,s,t,u,h),s===1?(s=1,l===!0&&(s|=8)):s=0,l=jr(3,null,null,s),e.current=l,l.stateNode=e,l.memoizedState={element:n,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},$i(l),e}function lx(e,s,t){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:n==null?null:""+n,children:e,containerInfo:s,implementation:t}}function tp(e){if(!e)return ts;e=e._reactInternals;e:{if(ys(e)!==e||e.tag!==1)throw Error(o(170));var s=e;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(tr(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(o(171))}if(e.tag===1){var t=e.type;if(tr(t))return Pc(e,t,s)}return s}function np(e,s,t,n,i,l,d,u,h){return e=El(t,n,!0,e,i,l,d,u,h),e.context=tp(null),t=e.current,n=er(),i=ds(t),l=$r(n,i),l.callback=s!=null?s:null,is(t,l,i),e.current.lanes=i,kt(e,i,n),ir(e,n),e}function ga(e,s,t,n){var i=s.current,l=er(),d=ds(i);return t=tp(t),s.context===null?s.context=t:s.pendingContext=t,s=$r(l,d),s.payload={element:e},n=n===void 0?null:n,n!==null&&(s.callback=n),e=is(i,s,d),e!==null&&(Ir(e,i,d,l),Gn(e,i,d)),d}function va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ap(e,s){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<s?t:s}}function Pl(e,s){ap(e,s),(e=e.alternate)&&ap(e,s)}function ox(){return null}var ip=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ll(e){this._internalRoot=e}ya.prototype.render=Ll.prototype.render=function(e){var s=this._internalRoot;if(s===null)throw Error(o(409));ga(e,s,null,null)},ya.prototype.unmount=Ll.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var s=e.containerInfo;zs(function(){ga(null,e,null,null)}),s[Or]=null}};function ya(e){this._internalRoot=e}ya.prototype.unstable_scheduleHydration=function(e){if(e){var s=$o();e={blockedOn:null,target:e,priority:s};for(var t=0;t<Jr.length&&s!==0&&s<Jr[t].priority;t++);Jr.splice(t,0,e),t===0&&qo(e)}};function Rl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ja(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function lp(){}function cx(e,s,t,n,i){if(i){if(typeof n=="function"){var l=n;n=function(){var y=va(d);l.call(y)}}var d=np(s,n,e,0,null,!1,!1,"",lp);return e._reactRootContainer=d,e[Or]=d.current,Ot(e.nodeType===8?e.parentNode:e),zs(),d}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var u=n;n=function(){var y=va(h);u.call(y)}}var h=El(e,0,!1,null,null,!1,!1,"",lp);return e._reactRootContainer=h,e[Or]=h.current,Ot(e.nodeType===8?e.parentNode:e),zs(function(){ga(s,h,t,n)}),h}function ba(e,s,t,n,i){var l=t._reactRootContainer;if(l){var d=l;if(typeof i=="function"){var u=i;i=function(){var h=va(d);u.call(h)}}ga(s,d,e,i)}else d=cx(t,s,e,i,n);return va(d)}Wo=function(e){switch(e.tag){case 3:var s=e.stateNode;if(s.current.memoizedState.isDehydrated){var t=wt(s.pendingLanes);t!==0&&(ti(s,t|1),ir(s,Re()),(ue&6)===0&&(ot=Re()+500,ns()))}break;case 13:zs(function(){var n=Ur(e,1);if(n!==null){var i=er();Ir(n,e,1,i)}}),Pl(e,1)}},ni=function(e){if(e.tag===13){var s=Ur(e,134217728);if(s!==null){var t=er();Ir(s,e,134217728,t)}Pl(e,134217728)}},Uo=function(e){if(e.tag===13){var s=ds(e),t=Ur(e,s);if(t!==null){var n=er();Ir(t,e,s,n)}Pl(e,s)}},$o=function(){return ge},Ho=function(e,s){var t=ge;try{return ge=e,s()}finally{ge=t}},Ka=function(e,s,t){switch(s){case"input":if(Ua(e,t),s=t.name,t.type==="radio"&&s!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<t.length;s++){var n=t[s];if(n!==e&&n.form===e.form){var i=On(n);if(!i)throw Error(o(90));vs(n),Ua(n,i)}}}break;case"textarea":yo(e,t);break;case"select":s=t.value,s!=null&&Fs(e,!!t.multiple,s,!1)}},zo=kl,Io=zs;var dx={usingClientEntryPoint:!1,Events:[Wt,Ys,On,Co,To,kl]},rn={findFiberByHostInstance:js,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},px={bundleType:rn.bundleType,version:rn.version,rendererPackageName:rn.rendererPackageName,rendererConfig:rn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ro(e),e===null?null:e.stateNode},findFiberByHostInstance:rn.findFiberByHostInstance||ox,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{yn=Na.inject(px),Rr=Na}catch{}}return lr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dx,lr.createPortal=function(e,s){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rl(s))throw Error(o(200));return lx(e,s,null,t)},lr.createRoot=function(e,s){if(!Rl(e))throw Error(o(299));var t=!1,n="",i=ip;return s!=null&&(s.unstable_strictMode===!0&&(t=!0),s.identifierPrefix!==void 0&&(n=s.identifierPrefix),s.onRecoverableError!==void 0&&(i=s.onRecoverableError)),s=El(e,1,!1,null,null,t,!1,n,i),e[Or]=s.current,Ot(e.nodeType===8?e.parentNode:e),new Ll(s)},lr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var s=e._reactInternals;if(s===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Ro(s),e=e===null?null:e.stateNode,e},lr.flushSync=function(e){return zs(e)},lr.hydrate=function(e,s,t){if(!ja(s))throw Error(o(200));return ba(null,e,s,!0,t)},lr.hydrateRoot=function(e,s,t){if(!Rl(e))throw Error(o(405));var n=t!=null&&t.hydratedSources||null,i=!1,l="",d=ip;if(t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),s=np(s,null,e,1,t!=null?t:null,i,!1,l,d),e[Or]=s.current,Ot(e),n)for(e=0;e<n.length;e++)t=n[e],i=t._getVersion,i=i(t._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[t,i]:s.mutableSourceEagerHydrationData.push(t,i);return new ya(s)},lr.render=function(e,s,t){if(!ja(s))throw Error(o(200));return ba(null,e,s,!1,t)},lr.unmountComponentAtNode=function(e){if(!ja(e))throw Error(o(40));return e._reactRootContainer?(zs(function(){ba(null,null,e,!1,function(){e._reactRootContainer=null,e[Or]=null})}),!0):!1},lr.unstable_batchedUpdates=kl,lr.unstable_renderSubtreeIntoContainer=function(e,s,t,n){if(!ja(t))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return ba(e,s,t,!1,n)},lr.version="18.3.1-next-f1338f8080-20240426",lr}var mp;function jx(){if(mp)return Ml.exports;mp=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(c){console.error(c)}}return a(),Ml.exports=yx(),Ml.exports}var fp;function bx(){if(fp)return wa;fp=1;var a=jx();return wa.createRoot=a.createRoot,wa.hydrateRoot=a.hydrateRoot,wa}var Nx=bx(),ee=to();const xr=hx(ee);var or=function(){return or=Object.assign||function(c){for(var o,p=1,m=arguments.length;p<m;p++){o=arguments[p];for(var j in o)Object.prototype.hasOwnProperty.call(o,j)&&(c[j]=o[j])}return c},or.apply(this,arguments)};function Ia(a,c,o){if(o||arguments.length===2)for(var p=0,m=c.length,j;p<m;p++)(j||!(p in c))&&(j||(j=Array.prototype.slice.call(c,0,p)),j[p]=c[p]);return a.concat(j||Array.prototype.slice.call(c))}var we="-ms-",an="-moz-",xe="-webkit-",Op="comm",_a="rule",no="decl",wx="@import",kx="@namespace",Fp="@keyframes",Sx="@layer",Bp=Math.abs,ao=String.fromCharCode,Vl=Object.assign;function Cx(a,c){return Fe(a,0)^45?(((c<<2^Fe(a,0))<<2^Fe(a,1))<<2^Fe(a,2))<<2^Fe(a,3):0}function Wp(a){return a.trim()}function qr(a,c){return(a=c.exec(a))?a[0]:a}function se(a,c,o){return a.replace(c,o)}function ka(a,c,o){return a.indexOf(c,o)}function Fe(a,c){return a.charCodeAt(c)|0}function Ds(a,c,o){return a.slice(c,o)}function Er(a){return a.length}function Up(a){return a.length}function tn(a,c){return c.push(a),a}function Tx(a,c){return a.map(c).join("")}function gp(a,c){return a.filter(function(o){return!qr(o,c)})}var Aa=1,pt=1,$p=0,br=0,Me=0,ft="";function Ma(a,c,o,p,m,j,S,E){return{value:a,root:c,parent:o,type:p,props:m,children:j,line:Aa,column:pt,length:S,return:"",siblings:E}}function xs(a,c){return Vl(Ma("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},c)}function dt(a){for(;a.root;)a=xs(a.root,{children:[a]});tn(a,a.siblings)}function zx(){return Me}function Ix(){return Me=br>0?Fe(ft,--br):0,pt--,Me===10&&(pt=1,Aa--),Me}function Pr(){return Me=br<$p?Fe(ft,br++):0,pt++,Me===10&&(pt=1,Aa++),Me}function ms(){return Fe(ft,br)}function Sa(){return br}function Da(a,c){return Ds(ft,a,c)}function dn(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ex(a){return Aa=pt=1,$p=Er(ft=a),br=0,[]}function Px(a){return ft="",a}function Fl(a){return Wp(Da(br-1,Gl(a===91?a+2:a===40?a+1:a)))}function Lx(a){for(;(Me=ms())&&Me<33;)Pr();return dn(a)>2||dn(Me)>3?"":" "}function Rx(a,c){for(;--c&&Pr()&&!(Me<48||Me>102||Me>57&&Me<65||Me>70&&Me<97););return Da(a,Sa()+(c<6&&ms()==32&&Pr()==32))}function Gl(a){for(;Pr();)switch(Me){case a:return br;case 34:case 39:a!==34&&a!==39&&Gl(Me);break;case 40:a===41&&Gl(a);break;case 92:Pr();break}return br}function _x(a,c){for(;Pr()&&a+Me!==57;)if(a+Me===84&&ms()===47)break;return"/*"+Da(c,br-1)+"*"+ao(a===47?a:Pr())}function Ax(a){for(;!dn(ms());)Pr();return Da(a,br)}function Mx(a){return Px(Ca("",null,null,null,[""],a=Ex(a),0,[0],a))}function Ca(a,c,o,p,m,j,S,E,T){for(var Y=0,q=0,W=S,J=0,oe=0,K=0,U=1,V=1,me=1,de=0,te="",P=m,X=j,$=p,I=te;V;)switch(K=de,de=Pr()){case 40:if(K!=108&&Fe(I,W-1)==58){ka(I+=se(Fl(de),"&","&\f"),"&\f",Bp(Y?E[Y-1]:0))!=-1&&(me=-1);break}case 34:case 39:case 91:I+=Fl(de);break;case 9:case 10:case 13:case 32:I+=Lx(K);break;case 92:I+=Rx(Sa()-1,7);continue;case 47:switch(ms()){case 42:case 47:tn(Dx(_x(Pr(),Sa()),c,o,T),T),(dn(K||1)==5||dn(ms()||1)==5)&&Er(I)&&Ds(I,-1,void 0)!==" "&&(I+=" ");break;default:I+="/"}break;case 123*U:E[Y++]=Er(I)*me;case 125*U:case 59:case 0:switch(de){case 0:case 125:V=0;case 59+q:me==-1&&(I=se(I,/\f/g,"")),oe>0&&(Er(I)-W||U===0&&K===47)&&tn(oe>32?yp(I+";",p,o,W-1,T):yp(se(I," ","")+";",p,o,W-2,T),T);break;case 59:I+=";";default:if(tn($=vp(I,c,o,Y,q,m,E,te,P=[],X=[],W,j),j),de===123)if(q===0)Ca(I,c,$,$,P,j,W,E,X);else{switch(J){case 99:if(Fe(I,3)===110)break;case 108:if(Fe(I,2)===97)break;default:q=0;case 100:case 109:case 115:}q?Ca(a,$,$,p&&tn(vp(a,$,$,0,0,m,E,te,m,P=[],W,X),X),m,X,W,E,p?P:X):Ca(I,$,$,$,[""],X,0,E,X)}}Y=q=oe=0,U=me=1,te=I="",W=S;break;case 58:W=1+Er(I),oe=K;default:if(U<1){if(de==123)--U;else if(de==125&&U++==0&&Ix()==125)continue}switch(I+=ao(de),de*U){case 38:me=q>0?1:(I+="\f",-1);break;case 44:E[Y++]=(Er(I)-1)*me,me=1;break;case 64:ms()===45&&(I+=Fl(Pr())),J=ms(),q=W=Er(te=I+=Ax(Sa())),de++;break;case 45:K===45&&Er(I)==2&&(U=0)}}return j}function vp(a,c,o,p,m,j,S,E,T,Y,q,W){for(var J=m-1,oe=m===0?j:[""],K=Up(oe),U=0,V=0,me=0;U<p;++U)for(var de=0,te=Ds(a,J+1,J=Bp(V=S[U])),P=a;de<K;++de)(P=Wp(V>0?oe[de]+" "+te:se(te,/&\f/g,oe[de])))&&(T[me++]=P);return Ma(a,c,o,m===0?_a:E,T,Y,q,W)}function Dx(a,c,o,p){return Ma(a,c,o,Op,ao(zx()),Ds(a,2,-2),0,p)}function yp(a,c,o,p,m){return Ma(a,c,o,no,Ds(a,0,p),Ds(a,p+1,-1),p,m)}function Hp(a,c,o){switch(Cx(a,c)){case 5103:return xe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return xe+a+a;case 4855:return xe+a.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+a;case 4789:return an+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return xe+a+an+a+we+a+a;case 5936:switch(Fe(a,c+11)){case 114:return xe+a+we+se(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return xe+a+we+se(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return xe+a+we+se(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return xe+a+we+a+a;case 6165:return xe+a+we+"flex-"+a+a;case 5187:return xe+a+se(a,/(\w+).+(:[^]+)/,xe+"box-$1$2"+we+"flex-$1$2")+a;case 5443:return xe+a+we+"flex-item-"+se(a,/flex-|-self/g,"")+(qr(a,/flex-|baseline/)?"":we+"grid-row-"+se(a,/flex-|-self/g,""))+a;case 4675:return xe+a+we+"flex-line-pack"+se(a,/align-content|flex-|-self/g,"")+a;case 5548:return xe+a+we+se(a,"shrink","negative")+a;case 5292:return xe+a+we+se(a,"basis","preferred-size")+a;case 6060:return xe+"box-"+se(a,"-grow","")+xe+a+we+se(a,"grow","positive")+a;case 4554:return xe+se(a,/([^-])(transform)/g,"$1"+xe+"$2")+a;case 6187:return se(se(se(a,/(zoom-|grab)/,xe+"$1"),/(image-set)/,xe+"$1"),a,"")+a;case 5495:case 3959:return se(a,/(image-set\([^]*)/,xe+"$1$`$1");case 4968:return se(se(a,/(.+:)(flex-)?(.*)/,xe+"box-pack:$3"+we+"flex-pack:$3"),/space-between/,"justify")+xe+a+a;case 4200:if(!qr(a,/flex-|baseline/))return we+"grid-column-align"+Ds(a,c)+a;break;case 2592:case 3360:return we+se(a,"template-","")+a;case 4384:case 3616:return o&&o.some(function(p,m){return c=m,qr(p.props,/grid-\w+-end/)})?~ka(a+(o=o[c].value),"span",0)?a:we+se(a,"-start","")+a+we+"grid-row-span:"+(~ka(o,"span",0)?qr(o,/\d+/):+qr(o,/\d+/)-+qr(a,/\d+/))+";":we+se(a,"-start","")+a;case 4896:case 4128:return o&&o.some(function(p){return qr(p.props,/grid-\w+-start/)})?a:we+se(se(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return se(a,/(.+)-inline(.+)/,xe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Er(a)-1-c>6)switch(Fe(a,c+1)){case 109:if(Fe(a,c+4)!==45)break;case 102:return se(a,/(.+:)(.+)-([^]+)/,"$1"+xe+"$2-$3$1"+an+(Fe(a,c+3)==108?"$3":"$2-$3"))+a;case 115:return~ka(a,"stretch",0)?Hp(se(a,"stretch","fill-available"),c,o)+a:a}break;case 5152:case 5920:return se(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(p,m,j,S,E,T,Y){return we+m+":"+j+Y+(S?we+m+"-span:"+(E?T:+T-+j)+Y:"")+a});case 4949:if(Fe(a,c+6)===121)return se(a,":",":"+xe)+a;break;case 6444:switch(Fe(a,Fe(a,14)===45?18:11)){case 120:return se(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+xe+(Fe(a,14)===45?"inline-":"")+"box$3$1"+xe+"$2$3$1"+we+"$2box$3")+a;case 100:return se(a,":",":"+we)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(a,"scroll-","scroll-snap-")+a}return a}function Ea(a,c){for(var o="",p=0;p<a.length;p++)o+=c(a[p],p,a,c)||"";return o}function Ox(a,c,o,p){switch(a.type){case Sx:if(a.children.length)break;case wx:case kx:case no:return a.return=a.return||a.value;case Op:return"";case Fp:return a.return=a.value+"{"+Ea(a.children,p)+"}";case _a:if(!Er(a.value=a.props.join(",")))return""}return Er(o=Ea(a.children,p))?a.return=a.value+"{"+o+"}":""}function Fx(a){var c=Up(a);return function(o,p,m,j){for(var S="",E=0;E<c;E++)S+=a[E](o,p,m,j)||"";return S}}function Bx(a){return function(c){c.root||(c=c.return)&&a(c)}}function Wx(a,c,o,p){if(a.length>-1&&!a.return)switch(a.type){case no:a.return=Hp(a.value,a.length,o);return;case Fp:return Ea([xs(a,{value:se(a.value,"@","@"+xe)})],p);case _a:if(a.length)return Tx(o=a.props,function(m){switch(qr(m,p=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":dt(xs(a,{props:[se(m,/:(read-\w+)/,":"+an+"$1")]})),dt(xs(a,{props:[m]})),Vl(a,{props:gp(o,p)});break;case"::placeholder":dt(xs(a,{props:[se(m,/:(plac\w+)/,":"+xe+"input-$1")]})),dt(xs(a,{props:[se(m,/:(plac\w+)/,":"+an+"$1")]})),dt(xs(a,{props:[se(m,/:(plac\w+)/,we+"input-$1")]})),dt(xs(a,{props:[m]})),Vl(a,{props:gp(o,p)});break}return""})}}var Ux={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hr={},ut=typeof process!="undefined"&&hr!==void 0&&(hr.REACT_APP_SC_ATTR||hr.SC_ATTR)||"data-styled",Qp="active",qp="data-styled-version",Oa="6.3.10",io=`/*!sc*/
`,ln=typeof window!="undefined"&&typeof document!="undefined",$x=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&hr!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&hr.REACT_APP_SC_DISABLE_SPEEDY!==""?hr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&hr.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&hr!==void 0&&hr.SC_DISABLE_SPEEDY!==void 0&&hr.SC_DISABLE_SPEEDY!==""&&hr.SC_DISABLE_SPEEDY!=="false"&&hr.SC_DISABLE_SPEEDY);function hn(a){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Ta=new Map,Pa=new Map,za=1,nn=function(a){if(Ta.has(a))return Ta.get(a);for(;Pa.has(za);)za++;var c=za++;return Ta.set(a,c),Pa.set(c,a),c},Hx=function(a,c){za=c+1,Ta.set(a,c),Pa.set(c,a)},lo=Object.freeze([]),ht=Object.freeze({});function Qx(a,c,o){return o===void 0&&(o=ht),a.theme!==o.theme&&a.theme||c||o.theme}var Vp=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),qx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Vx=/(^-|-$)/g;function jp(a){return a.replace(qx,"-").replace(Vx,"")}var Gx=/(a)(d)/gi,bp=function(a){return String.fromCharCode(a+(a>25?39:97))};function Yl(a){var c,o="";for(c=Math.abs(a);c>52;c=c/52|0)o=bp(c%52)+o;return(bp(c%52)+o).replace(Gx,"$1-$2")}var Bl,Ls=function(a,c){for(var o=c.length;o;)a=33*a^c.charCodeAt(--o);return a},Gp=function(a){return Ls(5381,a)};function Yx(a){return Yl(Gp(a)>>>0)}function Kx(a){return a.displayName||a.name||"Component"}function Wl(a){return typeof a=="string"&&!0}var Yp=typeof Symbol=="function"&&Symbol.for,Kp=Yp?Symbol.for("react.memo"):60115,Xx=Yp?Symbol.for("react.forward_ref"):60112,Jx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Zx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xp={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},em=((Bl={})[Xx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bl[Kp]=Xp,Bl);function Np(a){return("type"in(c=a)&&c.type.$$typeof)===Kp?Xp:"$$typeof"in a?em[a.$$typeof]:Jx;var c}var rm=Object.defineProperty,sm=Object.getOwnPropertyNames,wp=Object.getOwnPropertySymbols,tm=Object.getOwnPropertyDescriptor,nm=Object.getPrototypeOf,kp=Object.prototype;function Jp(a,c,o){if(typeof c!="string"){if(kp){var p=nm(c);p&&p!==kp&&Jp(a,p,o)}var m=sm(c);wp&&(m=m.concat(wp(c)));for(var j=Np(a),S=Np(c),E=0;E<m.length;++E){var T=m[E];if(!(T in Zx||o&&o[T]||S&&T in S||j&&T in j)){var Y=tm(c,T);try{rm(a,T,Y)}catch{}}}}return a}function xt(a){return typeof a=="function"}function oo(a){return typeof a=="object"&&"styledComponentId"in a}function _s(a,c){return a&&c?"".concat(a," ").concat(c):a||c||""}function Sp(a,c){return a.join("")}function pn(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Kl(a,c,o){if(o===void 0&&(o=!1),!o&&!pn(a)&&!Array.isArray(a))return c;if(Array.isArray(c))for(var p=0;p<c.length;p++)a[p]=Kl(a[p],c[p]);else if(pn(c))for(var p in c)a[p]=Kl(a[p],c[p]);return a}function co(a,c){Object.defineProperty(a,"toString",{value:c})}var am=(function(){function a(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return a.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var o=this._cIndex;if(c>this._cGroup)for(var p=this._cGroup;p<c;p++)o+=this.groupSizes[p];else for(p=this._cGroup-1;p>=c;p--)o-=this.groupSizes[p];return this._cGroup=c,this._cIndex=o,o},a.prototype.insertRules=function(c,o){if(c>=this.groupSizes.length){for(var p=this.groupSizes,m=p.length,j=m;c>=j;)if((j<<=1)<0)throw hn(16,"".concat(c));this.groupSizes=new Uint32Array(j),this.groupSizes.set(p),this.length=j;for(var S=m;S<j;S++)this.groupSizes[S]=0}for(var E=this.indexOfGroup(c+1),T=0,Y=(S=0,o.length);S<Y;S++)this.tag.insertRule(E,o[S])&&(this.groupSizes[c]++,E++,T++);T>0&&this._cGroup>c&&(this._cIndex+=T)},a.prototype.clearGroup=function(c){if(c<this.length){var o=this.groupSizes[c],p=this.indexOfGroup(c),m=p+o;this.groupSizes[c]=0;for(var j=p;j<m;j++)this.tag.deleteRule(p);o>0&&this._cGroup>c&&(this._cIndex-=o)}},a.prototype.getGroup=function(c){var o="";if(c>=this.length||this.groupSizes[c]===0)return o;for(var p=this.groupSizes[c],m=this.indexOfGroup(c),j=m+p,S=m;S<j;S++)o+=this.tag.getRule(S)+io;return o},a})(),im="style[".concat(ut,"][").concat(qp,'="').concat(Oa,'"]'),lm=new RegExp("^".concat(ut,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Cp=function(a){return typeof ShadowRoot!="undefined"&&a instanceof ShadowRoot||"host"in a&&a.nodeType===11},Xl=function(a){if(!a)return document;if(Cp(a))return a;if("getRootNode"in a){var c=a.getRootNode();if(Cp(c))return c}return document},om=function(a,c,o){for(var p,m=o.split(","),j=0,S=m.length;j<S;j++)(p=m[j])&&a.registerName(c,p)},cm=function(a,c){for(var o,p=((o=c.textContent)!==null&&o!==void 0?o:"").split(io),m=[],j=0,S=p.length;j<S;j++){var E=p[j].trim();if(E){var T=E.match(lm);if(T){var Y=0|parseInt(T[1],10),q=T[2];Y!==0&&(Hx(q,Y),om(a,q,T[3]),a.getTag().insertRules(Y,m)),m.length=0}else m.push(E)}}},Ul=function(a){for(var c=Xl(a.options.target).querySelectorAll(im),o=0,p=c.length;o<p;o++){var m=c[o];m&&m.getAttribute(ut)!==Qp&&(cm(a,m),m.parentNode&&m.parentNode.removeChild(m))}};function dm(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var Zp=function(a){var c=document.head,o=a||c,p=document.createElement("style"),m=(function(E){var T=Array.from(E.querySelectorAll("style[".concat(ut,"]")));return T[T.length-1]})(o),j=m!==void 0?m.nextSibling:null;p.setAttribute(ut,Qp),p.setAttribute(qp,Oa);var S=dm();return S&&p.setAttribute("nonce",S),o.insertBefore(p,j),p},pm=(function(){function a(c){this.element=Zp(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(o){var p;if(o.sheet)return o.sheet;for(var m=(p=o.getRootNode().styleSheets)!==null&&p!==void 0?p:document.styleSheets,j=0,S=m.length;j<S;j++){var E=m[j];if(E.ownerNode===o)return E}throw hn(17)})(this.element),this.length=0}return a.prototype.insertRule=function(c,o){try{return this.sheet.insertRule(o,c),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},a.prototype.getRule=function(c){var o=this.sheet.cssRules[c];return o&&o.cssText?o.cssText:""},a})(),um=(function(){function a(c){this.element=Zp(c),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(c,o){if(c<=this.length&&c>=0){var p=document.createTextNode(o);return this.element.insertBefore(p,this.nodes[c]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},a.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},a})(),hm=(function(){function a(c){this.rules=[],this.length=0}return a.prototype.insertRule=function(c,o){return c<=this.length&&(c===this.length?this.rules.push(o):this.rules.splice(c,0,o),this.length++,!0)},a.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},a.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},a})(),Tp=ln,xm={isServer:!ln,useCSSOMInjection:!$x},eu=(function(){function a(c,o,p){c===void 0&&(c=ht),o===void 0&&(o={});var m=this;this.options=or(or({},xm),c),this.gs=o,this.names=new Map(p),this.server=!!c.isServer,!this.server&&ln&&Tp&&(Tp=!1,Ul(this)),co(this,function(){return(function(j){for(var S=j.getTag(),E=S.length,T="",Y=function(W){var J=(function(me){return Pa.get(me)})(W);if(J===void 0)return"continue";var oe=j.names.get(J);if(oe===void 0||!oe.size)return"continue";var K=S.getGroup(W);if(K.length===0)return"continue";var U=ut+".g"+W+'[id="'+J+'"]',V="";oe.forEach(function(me){me.length>0&&(V+=me+",")}),T+=K+U+'{content:"'+V+'"}'+io},q=0;q<E;q++)Y(q);return T})(m)})}return a.registerId=function(c){return nn(c)},a.prototype.rehydrate=function(){!this.server&&ln&&Ul(this)},a.prototype.reconstructWithOptions=function(c,o){o===void 0&&(o=!0);var p=new a(or(or({},this.options),c),this.gs,o&&this.names||void 0);return!this.server&&ln&&c.target!==this.options.target&&Xl(this.options.target)!==Xl(c.target)&&Ul(p),p},a.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(o){var p=o.useCSSOMInjection,m=o.target;return o.isServer?new hm(m):p?new pm(m):new um(m)})(this.options),new am(c)));var c},a.prototype.hasNameForId=function(c,o){var p,m;return(m=(p=this.names.get(c))===null||p===void 0?void 0:p.has(o))!==null&&m!==void 0&&m},a.prototype.registerName=function(c,o){nn(c);var p=this.names.get(c);p?p.add(o):this.names.set(c,new Set([o]))},a.prototype.insertRules=function(c,o,p){this.registerName(c,o),this.getTag().insertRules(nn(c),p)},a.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},a.prototype.clearRules=function(c){this.getTag().clearGroup(nn(c)),this.clearNames(c)},a.prototype.clearTag=function(){this.tag=void 0},a})(),mm=/&/g,Vr=47,Rs=42;function zp(a){if(a.indexOf("}")===-1)return!1;for(var c=a.length,o=0,p=0,m=!1,j=0;j<c;j++){var S=a.charCodeAt(j);if(p!==0||m||S!==Vr||a.charCodeAt(j+1)!==Rs)if(m)S===Rs&&a.charCodeAt(j+1)===Vr&&(m=!1,j++);else if(S!==34&&S!==39||j!==0&&a.charCodeAt(j-1)===92){if(p===0){if(S===123)o++;else if(S===125&&--o<0)return!0}}else p===0?p=S:p===S&&(p=0);else m=!0,j++}return o!==0||p!==0}function ru(a,c){return a.map(function(o){return o.type==="rule"&&(o.value="".concat(c," ").concat(o.value),o.value=o.value.replaceAll(",",",".concat(c," ")),o.props=o.props.map(function(p){return"".concat(c," ").concat(p)})),Array.isArray(o.children)&&o.type!=="@keyframes"&&(o.children=ru(o.children,c)),o})}function fm(a){var c,o,p,m=ht,j=m.options,S=j===void 0?ht:j,E=m.plugins,T=E===void 0?lo:E,Y=function(K,U,V){return V.startsWith(o)&&V.endsWith(o)&&V.replaceAll(o,"").length>0?".".concat(c):K},q=T.slice();q.push(function(K){K.type===_a&&K.value.includes("&")&&(p||(p=new RegExp("\\".concat(o,"\\b"),"g")),K.props[0]=K.props[0].replace(mm,o).replace(p,Y))}),S.prefix&&q.push(Wx),q.push(Ox);var W=[],J=Fx(q.concat(Bx(function(K){return W.push(K)}))),oe=function(K,U,V,me){U===void 0&&(U=""),V===void 0&&(V=""),me===void 0&&(me="&"),c=me,o=U,p=void 0;var de=(function(P){if(!zp(P))return P;for(var X=P.length,$="",I=0,D=0,ve=0,Le=!1,ie=0;ie<X;ie++){var Ee=P.charCodeAt(ie);if(ve!==0||Le||Ee!==Vr||P.charCodeAt(ie+1)!==Rs)if(Le)Ee===Rs&&P.charCodeAt(ie+1)===Vr&&(Le=!1,ie++);else if(Ee!==34&&Ee!==39||ie!==0&&P.charCodeAt(ie-1)===92){if(ve===0)if(Ee===123)D++;else if(Ee===125){if(--D<0){for(var Se=ie+1;Se<X;){var qe=P.charCodeAt(Se);if(qe===59||qe===10)break;Se++}Se<X&&P.charCodeAt(Se)===59&&Se++,D=0,ie=Se-1,I=Se;continue}D===0&&($+=P.substring(I,ie+1),I=ie+1)}else Ee===59&&D===0&&($+=P.substring(I,ie+1),I=ie+1)}else ve===0?ve=Ee:ve===Ee&&(ve=0);else Le=!0,ie++}if(I<X){var Je=P.substring(I);zp(Je)||($+=Je)}return $})((function(P){if(P.indexOf("//")===-1)return P;for(var X=P.length,$=[],I=0,D=0,ve=0,Le=0;D<X;){var ie=P.charCodeAt(D);if(ie!==34&&ie!==39||D!==0&&P.charCodeAt(D-1)===92)if(ve===0)if(ie===Vr&&D+1<X&&P.charCodeAt(D+1)===Rs){for(D+=2;D+1<X&&(P.charCodeAt(D)!==Rs||P.charCodeAt(D+1)!==Vr);)D++;D+=2}else if(ie===40&&D>=3&&(32|P.charCodeAt(D-1))==108&&(32|P.charCodeAt(D-2))==114&&(32|P.charCodeAt(D-3))==117)Le=1,D++;else if(Le>0)ie===41?Le--:ie===40&&Le++,D++;else if(ie===Rs&&D+1<X&&P.charCodeAt(D+1)===Vr)D>I&&$.push(P.substring(I,D)),I=D+=2;else if(ie===Vr&&D+1<X&&P.charCodeAt(D+1)===Vr){for(D>I&&$.push(P.substring(I,D));D<X&&P.charCodeAt(D)!==10;)D++;I=D}else D++;else D++;else ve===0?ve=ie:ve===ie&&(ve=0),D++}return I===0?P:(I<X&&$.push(P.substring(I)),$.join(""))})(K)),te=Mx(V||U?"".concat(V," ").concat(U," { ").concat(de," }"):de);return S.namespace&&(te=ru(te,S.namespace)),W=[],Ea(te,J),W};return oe.hash=T.length?T.reduce(function(K,U){return U.name||hn(15),Ls(K,U.name)},5381).toString():"",oe}var gm=new eu,Jl=fm(),su=xr.createContext({shouldForwardProp:void 0,styleSheet:gm,stylis:Jl});su.Consumer;xr.createContext(void 0);function Ip(){return xr.useContext(su)}var vm=(function(){function a(c,o){var p=this;this.inject=function(m,j){j===void 0&&(j=Jl);var S=p.name+j.hash;m.hasNameForId(p.id,S)||m.insertRules(p.id,S,j(p.rules,S,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=o,co(this,function(){throw hn(12,String(p.name))})}return a.prototype.getName=function(c){return c===void 0&&(c=Jl),this.name+c.hash},a})();function ym(a,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||a in Ux||a.startsWith("--")?String(c).trim():"".concat(c,"px")}var jm=function(a){return a>="A"&&a<="Z"};function Ep(a){for(var c="",o=0;o<a.length;o++){var p=a[o];if(o===1&&p==="-"&&a[0]==="-")return a;jm(p)?c+="-"+p.toLowerCase():c+=p}return c.startsWith("ms-")?"-"+c:c}var tu=function(a){return a==null||a===!1||a===""},nu=function(a){var c=[];for(var o in a){var p=a[o];a.hasOwnProperty(o)&&!tu(p)&&(Array.isArray(p)&&p.isCss||xt(p)?c.push("".concat(Ep(o),":"),p,";"):pn(p)?c.push.apply(c,Ia(Ia(["".concat(o," {")],nu(p),!1),["}"],!1)):c.push("".concat(Ep(o),": ").concat(ym(o,p),";")))}return c};function As(a,c,o,p,m){if(m===void 0&&(m=[]),typeof a=="string")return a&&m.push(a),m;if(tu(a))return m;if(oo(a))return m.push(".".concat(a.styledComponentId)),m;if(xt(a)){if(!xt(S=a)||S.prototype&&S.prototype.isReactComponent||!c)return m.push(a),m;var j=a(c);return As(j,c,o,p,m)}var S;if(a instanceof vm)return o?(a.inject(o,p),m.push(a.getName(p))):m.push(a),m;if(pn(a)){for(var E=nu(a),T=0;T<E.length;T++)m.push(E[T]);return m}if(!Array.isArray(a))return m.push(a.toString()),m;for(T=0;T<a.length;T++)As(a[T],c,o,p,m);return m}function bm(a){for(var c=0;c<a.length;c+=1){var o=a[c];if(xt(o)&&!oo(o))return!1}return!0}var Nm=Gp(Oa),wm=(function(){function a(c,o,p){this.rules=c,this.staticRulesId="",this.isStatic=(p===void 0||p.isStatic)&&bm(c),this.componentId=o,this.baseHash=Ls(Nm,o),this.baseStyle=p,eu.registerId(o)}return a.prototype.generateAndInjectStyles=function(c,o,p){var m=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,o,p).className:"";if(this.isStatic&&!p.hash)if(this.staticRulesId&&o.hasNameForId(this.componentId,this.staticRulesId))m=_s(m,this.staticRulesId);else{var j=Sp(As(this.rules,c,o,p)),S=Yl(Ls(this.baseHash,j)>>>0);if(!o.hasNameForId(this.componentId,S)){var E=p(j,".".concat(S),void 0,this.componentId);o.insertRules(this.componentId,S,E)}m=_s(m,S),this.staticRulesId=S}else{for(var T=Ls(this.baseHash,p.hash),Y="",q=0;q<this.rules.length;q++){var W=this.rules[q];if(typeof W=="string")Y+=W;else if(W){var J=Sp(As(W,c,o,p));T=Ls(Ls(T,String(q)),J),Y+=J}}if(Y){var oe=Yl(T>>>0);if(!o.hasNameForId(this.componentId,oe)){var K=p(Y,".".concat(oe),void 0,this.componentId);o.insertRules(this.componentId,oe,K)}m=_s(m,oe)}}return{className:m,css:typeof window=="undefined"?o.getTag().getGroup(nn(this.componentId)):""}},a})(),au=xr.createContext(void 0);au.Consumer;var $l={};function km(a,c,o){var p=oo(a),m=a,j=!Wl(a),S=c.attrs,E=S===void 0?lo:S,T=c.componentId,Y=T===void 0?(function(P,X){var $=typeof P!="string"?"sc":jp(P);$l[$]=($l[$]||0)+1;var I="".concat($,"-").concat(Yx(Oa+$+$l[$]));return X?"".concat(X,"-").concat(I):I})(c.displayName,c.parentComponentId):T,q=c.displayName,W=q===void 0?(function(P){return Wl(P)?"styled.".concat(P):"Styled(".concat(Kx(P),")")})(a):q,J=c.displayName&&c.componentId?"".concat(jp(c.displayName),"-").concat(c.componentId):c.componentId||Y,oe=p&&m.attrs?m.attrs.concat(E).filter(Boolean):E,K=c.shouldForwardProp;if(p&&m.shouldForwardProp){var U=m.shouldForwardProp;if(c.shouldForwardProp){var V=c.shouldForwardProp;K=function(P,X){return U(P,X)&&V(P,X)}}else K=U}var me=new wm(o,J,p?m.componentStyle:void 0);function de(P,X){return(function($,I,D){var ve=$.attrs,Le=$.componentStyle,ie=$.defaultProps,Ee=$.foldedComponentIds,Se=$.styledComponentId,qe=$.target,Je=xr.useContext(au),Ve=Ip(),ye=$.shouldForwardProp||Ve.shouldForwardProp,z=Qx(I,Je,ie)||ht,F=(function(ae,pe,ce){for(var fe,Te=or(or({},pe),{className:void 0,theme:ce}),Gr=0;Gr<ae.length;Gr+=1){var vs=xt(fe=ae[Gr])?fe(Te):fe;for(var Nr in vs)Nr==="className"?Te.className=_s(Te.className,vs[Nr]):Nr==="style"?Te.style=or(or({},Te.style),vs[Nr]):Te[Nr]=vs[Nr]}return"className"in pe&&typeof pe.className=="string"&&(Te.className=_s(Te.className,pe.className)),Te})(ve,I,z),L=F.as||qe,f={};for(var b in F)F[b]===void 0||b[0]==="$"||b==="as"||b==="theme"&&F.theme===z||(b==="forwardedAs"?f.as=F.forwardedAs:ye&&!ye(b,L)||(f[b]=F[b]));var Z=(function(ae,pe){var ce=Ip(),fe=ae.generateAndInjectStyles(pe,ce.styleSheet,ce.stylis);return fe})(Le,F),re=Z.className,le=_s(Ee,Se);return re&&(le+=" "+re),F.className&&(le+=" "+F.className),f[Wl(L)&&!Vp.has(L)?"class":"className"]=le,D&&(f.ref=D),ee.createElement(L,f)})(te,P,X)}de.displayName=W;var te=xr.forwardRef(de);return te.attrs=oe,te.componentStyle=me,te.displayName=W,te.shouldForwardProp=K,te.foldedComponentIds=p?_s(m.foldedComponentIds,m.styledComponentId):"",te.styledComponentId=J,te.target=p?m.target:a,Object.defineProperty(te,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(P){this._foldedDefaultProps=p?(function(X){for(var $=[],I=1;I<arguments.length;I++)$[I-1]=arguments[I];for(var D=0,ve=$;D<ve.length;D++)Kl(X,ve[D],!0);return X})({},m.defaultProps,P):P}}),co(te,function(){return".".concat(te.styledComponentId)}),j&&Jp(te,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),te}function Pp(a,c){for(var o=[a[0]],p=0,m=c.length;p<m;p+=1)o.push(c[p],a[p+1]);return o}var Lp=function(a){return Object.assign(a,{isCss:!0})};function Sm(a){for(var c=[],o=1;o<arguments.length;o++)c[o-1]=arguments[o];if(xt(a)||pn(a))return Lp(As(Pp(lo,Ia([a],c,!0))));var p=a;return c.length===0&&p.length===1&&typeof p[0]=="string"?As(p):Lp(As(Pp(p,c)))}function Zl(a,c,o){if(o===void 0&&(o=ht),!c)throw hn(1,c);var p=function(m){for(var j=[],S=1;S<arguments.length;S++)j[S-1]=arguments[S];return a(c,o,Sm.apply(void 0,Ia([m],j,!1)))};return p.attrs=function(m){return Zl(a,c,or(or({},o),{attrs:Array.prototype.concat(o.attrs,m).filter(Boolean)}))},p.withConfig=function(m){return Zl(a,c,or(or({},o),m))},p}var iu=function(a){return Zl(km,a)},ke=iu;Vp.forEach(function(a){ke[a]=iu(a)});const Hl={Wrapper:ke.div`
        /* border: 1px solid #f00; */
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
    `,Header:ke.header`
        /* border: 1px solid #f00; */
        height: 60px;
        flex-shrink: 0;
    `,Main:ke.main`
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
    `},Rp={Wrapper:ke.header`
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

        position: sticky;
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
    `,Main:ke.div`
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
    `},Cm="/system-design-core-notes/images/transparentLogo.png";var lu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},_p=xr.createContext&&xr.createContext(lu),Tm=["attr","size","title"];function zm(a,c){if(a==null)return{};var o=Im(a,c),p,m;if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(a);for(m=0;m<j.length;m++)p=j[m],!(c.indexOf(p)>=0)&&Object.prototype.propertyIsEnumerable.call(a,p)&&(o[p]=a[p])}return o}function Im(a,c){if(a==null)return{};var o={};for(var p in a)if(Object.prototype.hasOwnProperty.call(a,p)){if(c.indexOf(p)>=0)continue;o[p]=a[p]}return o}function La(){return La=Object.assign?Object.assign.bind():function(a){for(var c=1;c<arguments.length;c++){var o=arguments[c];for(var p in o)Object.prototype.hasOwnProperty.call(o,p)&&(a[p]=o[p])}return a},La.apply(this,arguments)}function Ap(a,c){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);c&&(p=p.filter(function(m){return Object.getOwnPropertyDescriptor(a,m).enumerable})),o.push.apply(o,p)}return o}function Ra(a){for(var c=1;c<arguments.length;c++){var o=arguments[c]!=null?arguments[c]:{};c%2?Ap(Object(o),!0).forEach(function(p){Em(a,p,o[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):Ap(Object(o)).forEach(function(p){Object.defineProperty(a,p,Object.getOwnPropertyDescriptor(o,p))})}return a}function Em(a,c,o){return c=Pm(c),c in a?Object.defineProperty(a,c,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[c]=o,a}function Pm(a){var c=Lm(a,"string");return typeof c=="symbol"?c:c+""}function Lm(a,c){if(typeof a!="object"||!a)return a;var o=a[Symbol.toPrimitive];if(o!==void 0){var p=o.call(a,c);if(typeof p!="object")return p;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(a)}function ou(a){return a&&a.map((c,o)=>xr.createElement(c.tag,Ra({key:o},c.attr),ou(c.child)))}function B(a){return c=>xr.createElement(Rm,La({attr:Ra({},a.attr)},c),ou(a.child))}function Rm(a){var c=o=>{var{attr:p,size:m,title:j}=a,S=zm(a,Tm),E=m||o.size||"1em",T;return o.className&&(T=o.className),a.className&&(T=(T?T+" ":"")+a.className),xr.createElement("svg",La({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},o.attr,p,S,{className:T,style:Ra(Ra({color:a.color||o.color},o.style),a.style),height:E,width:E,xmlns:"http://www.w3.org/2000/svg"}),j&&xr.createElement("title",null,j),a.children)};return _p!==void 0?xr.createElement(_p.Consumer,null,o=>c(o)):c(lu)}function Ms(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(a)}function _m(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12.01",y2:"16"},child:[]}]})(a)}function cu(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function Am(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"7",y1:"17",x2:"17",y2:"7"},child:[]},{tag:"polyline",attr:{points:"7 7 17 7 17 17"},child:[]}]})(a)}function eo(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"18",y1:"20",x2:"18",y2:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12",y2:"4"},child:[]},{tag:"line",attr:{x1:"6",y1:"20",x2:"6",y2:"14"},child:[]}]})(a)}function Mm(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"},child:[]},{tag:"path",attr:{d:"M13.73 21a2 2 0 0 1-3.46 0"},child:[]}]})(a)}function Fa(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(a)}function po(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(a)}function Qe(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(a)}function du(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(a)}function Dm(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"},child:[]}]})(a)}function pu(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"},child:[]}]})(a)}function uu(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(a)}function hu(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(a)}function fs(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(a)}function Om(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"8 17 12 21 16 17"},child:[]},{tag:"line",attr:{x1:"12",y1:"12",x2:"12",y2:"21"},child:[]},{tag:"path",attr:{d:"M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"},child:[]}]})(a)}function Fm(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"},child:[]},{tag:"line",attr:{x1:"1",y1:"1",x2:"23",y2:"23"},child:[]}]})(a)}function Bm(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]}]})(a)}function Wm(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"},child:[]},{tag:"polyline",attr:{points:"14 2 14 8 20 8"},child:[]},{tag:"line",attr:{x1:"16",y1:"13",x2:"8",y2:"13"},child:[]},{tag:"line",attr:{x1:"16",y1:"17",x2:"8",y2:"17"},child:[]},{tag:"polyline",attr:{points:"10 9 9 9 8 9"},child:[]}]})(a)}function Um(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"},child:[]}]})(a)}function $m(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"},child:[]}]})(a)}function uo(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(a)}function on(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(a)}function Hm(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(a)}function Os(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(a)}function Ql(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(a)}function Qm(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"path",attr:{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function qm(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]}]})(a)}function Vm(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(a)}function rr(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(a)}function Gm(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"16",y2:"12"},child:[]}]})(a)}function ho(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"},child:[]},{tag:"path",attr:{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"},child:[]}]})(a)}function Ym(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"8",y1:"6",x2:"21",y2:"6"},child:[]},{tag:"line",attr:{x1:"8",y1:"12",x2:"21",y2:"12"},child:[]},{tag:"line",attr:{x1:"8",y1:"18",x2:"21",y2:"18"},child:[]},{tag:"line",attr:{x1:"3",y1:"6",x2:"3.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"3",y1:"12",x2:"3.01",y2:"12"},child:[]},{tag:"line",attr:{x1:"3",y1:"18",x2:"3.01",y2:"18"},child:[]}]})(a)}function ro(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(a)}function Mp(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"},child:[]}]})(a)}function Km(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(a)}function xu(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"16.5",y1:"9.4",x2:"7.5",y2:"4.21"},child:[]},{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(a)}function Xm(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]},{tag:"path",attr:{d:"M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"},child:[]}]})(a)}function Ba(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(a)}function xo(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(a)}function Jm(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(a)}function ql(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(a)}function un(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(a)}function cn(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"5",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"12",r:"3"},child:[]},{tag:"circle",attr:{cx:"18",cy:"19",r:"3"},child:[]},{tag:"line",attr:{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"},child:[]},{tag:"line",attr:{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"},child:[]}]})(a)}function Lr(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(a)}function Zm(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"9",cy:"21",r:"1"},child:[]},{tag:"circle",attr:{cx:"20",cy:"21",r:"1"},child:[]},{tag:"path",attr:{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"},child:[]}]})(a)}function xn(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(a)}function mu(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(a)}function ef(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(a)}function so(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"6"},child:[]},{tag:"circle",attr:{cx:"12",cy:"12",r:"2"},child:[]}]})(a)}function rf(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 18 13.5 8.5 8.5 13.5 1 6"},child:[]},{tag:"polyline",attr:{points:"17 18 23 18 23 12"},child:[]}]})(a)}function mt(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(a)}function fu(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(a)}function Dp(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"23 7 16 12 23 17 23 7"},child:[]},{tag:"rect",attr:{x:"1",y:"5",width:"15",height:"14",rx:"2",ry:"2"},child:[]}]})(a)}function sf(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"15",y1:"9",x2:"9",y2:"15"},child:[]},{tag:"line",attr:{x1:"9",y1:"9",x2:"15",y2:"15"},child:[]}]})(a)}function gs(a){return B({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}const tf=()=>{const[a,c]=ee.useState(!1),[o,p]=ee.useState("dark");ee.useEffect(()=>{const E=localStorage.getItem("app-theme")||"dark";p(E),E==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme")},[]),ee.useEffect(()=>{o==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem("app-theme",o)},[o]);const m=ee.useMemo(()=>o==="light"?"dark":"light",[o]),j=()=>{p(m)};return r.jsx(Rp.Wrapper,{children:r.jsxs(Rp.Main,{children:[r.jsxs("div",{className:"leftSide",children:[r.jsxs("div",{className:"logoNameWrapper",children:[r.jsxs("div",{className:"logoWrapper",children:[!a&&r.jsx("div",{className:"logoSkeleton"}),r.jsx("img",{src:Cm,alt:"system-design-core-notes",onLoad:()=>c(!0),style:{opacity:a?1:0}})]}),r.jsxs("div",{className:"nameWrapper",children:[r.jsx("div",{className:"title",children:"system-design-core-notes"}),r.jsx("div",{className:"subTitle",children:"At-a-glance system design revision"})]})]}),r.jsxs("div",{className:"miniStats","aria-label":"Quick focus areas",children:[r.jsxs("span",{className:"stat",children:[r.jsx("span",{className:"sIcon",children:r.jsx(Os,{})}),r.jsx("span",{className:"sText",children:"Scalability"})]}),r.jsxs("span",{className:"stat",children:[r.jsx("span",{className:"sIcon",children:r.jsx(hu,{})}),r.jsx("span",{className:"sText",children:"Reliability"})]}),r.jsxs("span",{className:"stat",children:[r.jsx("span",{className:"sIcon",children:r.jsx(mt,{})}),r.jsx("span",{className:"sText",children:"Tradeoffs"})]})]})]}),r.jsx("div",{className:"rightSide",children:r.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:j,"aria-label":`Switch to ${m} theme`,title:`Switch to ${m}`,children:[r.jsx("span",{className:"icon",children:o==="light"?r.jsx(Km,{}):r.jsx(ef,{})}),r.jsx("span",{className:"label",children:o==="light"?"Light":"Dark"})]})})]})})},nf={Wrapper:ke.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 15px;
        border-top: 1px solid var(--color-border);

        font-size: 12px;
        color: var(--color-text-muted);

        .right a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .right a:hover {
            color: var(--color-text-primary);
        }

        a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        a:hover {
            color: var(--color-text-primary);
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
        }
    `},af=()=>r.jsxs(nf.Wrapper,{children:[r.jsxs("div",{className:"left",children:["© ",new Date().getFullYear()," | All rights reserved"]}),r.jsxs("div",{className:"right",children:["By ",r.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]})]}),lf={Wrapper:ke.section`
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
    `},of=()=>r.jsxs(lf.Wrapper,{id:"aboutSystemDesign",children:[r.jsxs("div",{className:"top",children:[r.jsx("h2",{className:"title",children:"System Design"}),r.jsx("p",{className:"sub",children:'System design is about building software that survives real life. Not just "it works on my laptop" but "it works for 10 users, 10k users, and 10 million users". You learn how to split a product into services, store data safely, keep latency low, and handle failures without panic.'}),r.jsx("p",{className:"sub",children:"The main game is tradeoffs. You rarely get everything at once. You choose between consistency and availability, cost and performance, simplicity and flexibility. A good design explains why each choice was made and what breaks first when load increases."}),r.jsx("p",{className:"sub",children:"This page is a fast revision sheet. It focuses on the core building blocks like load balancing, caching, databases, queues, replication, sharding, and observability, with small mental models and real examples."})]}),r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"icon",children:r.jsx(Os,{})}),r.jsx("h3",{className:"h3",children:"Think in building blocks"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Clients, APIs, services"}),r.jsx("li",{children:"Databases, caches"}),r.jsx("li",{children:"Queues, background workers"}),r.jsx("li",{children:"CDN, load balancers"}),r.jsx("li",{children:"Monitoring, logs, alerts"})]}),r.jsx("p",{className:"note",children:"Most big systems are the same blocks, just arranged differently."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"icon",children:r.jsx(mt,{})}),r.jsx("h3",{className:"h3",children:"Scale is a sequence"})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Single server"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Load balancer"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Cache"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Replicas"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Sharding"})]}),r.jsx("p",{className:"note",children:"You do not start with sharding. You earn it after traffic forces it."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"icon",children:r.jsx(Lr,{})}),r.jsx("h3",{className:"h3",children:"Reliability mindset"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Failures are normal"}),r.jsx("li",{children:"Design for retries and timeouts"}),r.jsx("li",{children:"Prevent overload with rate limits"}),r.jsx("li",{children:"Use redundancy and failover"}),r.jsx("li",{children:"Measure with SLO and alerts"})]}),r.jsx("p",{className:"note",children:"If it can fail, it will. Design should reduce blast radius."})]})]})]}),cf={Wrapper:ke.section`
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
    `},df=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"foundationsSystemDesign",title:"Foundations of System Design",sub:"Requirements, scale, reliability, consistency, latency, CAP, and ACID vs BASE."}),[]);return r.jsxs(cf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Os,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Core"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xu,{})}),r.jsx("h3",{className:"h3",children:"What is System Design"})]}),r.jsx("p",{className:"p",children:"System design means planning how a software system will work end to end, so it can handle real traffic, failures, growth, and future changes. You choose the major components like API, database, cache, queue, and services, and you explain tradeoffs."}),r.jsx("p",{className:"p",children:'A good answer is not "use microservices". A good answer is "start simple, identify bottlenecks, scale step by step, and protect reliability".'}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Requirements"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"High level design"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Data model"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Scaling plan"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Tradeoffs"})]}),r.jsx("p",{className:"note",children:"You are designing for people, traffic, and failures, not only for code correctness."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(po,{})}),r.jsx("h3",{className:"h3",children:"Functional vs Non-functional requirements"})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Functional"}),r.jsxs("div",{className:"v",children:["What the system must do.",r.jsx("span",{className:"small",children:"Example: user can upload photo, search users, send messages"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Non-functional"}),r.jsxs("div",{className:"v",children:["How well it must do it, at scale.",r.jsx("span",{className:"small",children:"Example: 99.9% uptime, 200 ms latency, handle 50k requests per second"})]})]})]}),r.jsx("p",{className:"note",children:"Most design decisions come from non-functional requirements."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(mt,{})}),r.jsx("h3",{className:"h3",children:"Scalability"})]}),r.jsx("p",{className:"p",children:"Scalability means the system can handle increased load by adding resources, while still meeting performance goals."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Vertical scaling"})," - make one machine bigger (more CPU, RAM)"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Horizontal scaling"})," - add more machines and balance traffic"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Stateless services"})," scale easier because any instance can handle any request"]})]}),r.jsx("p",{className:"note",children:"Horizontal scaling is the long-term solution, but it adds complexity."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Lr,{})}),r.jsx("h3",{className:"h3",children:"Reliability vs Availability"})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Reliability"}),r.jsxs("div",{className:"v",children:["System works correctly and consistently.",r.jsx("span",{className:"small",children:"Example: no data loss, correct results, predictable behavior"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Availability"}),r.jsxs("div",{className:"v",children:["System is up and reachable when needed.",r.jsx("span",{className:"small",children:"Example: service responds even during partial failures"})]})]})]}),r.jsx("p",{className:"note",children:"A system can be available but wrong, or reliable but down. Great systems aim for both."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rr,{})}),r.jsx("h3",{className:"h3",children:"Consistency models"})]}),r.jsx("p",{className:"p",children:"Consistency answers this question: when data changes, when do other users see it. In distributed systems, data often exists in multiple places."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Strong consistency"}),r.jsxs("div",{className:"v",children:["Reads always return the latest write.",r.jsx("span",{className:"small",children:"Example: bank balance updates must be immediate"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Eventual consistency"}),r.jsxs("div",{className:"v",children:["Reads may return older data briefly, but replicas converge later.",r.jsx("span",{className:"small",children:"Example: social media like counts can lag"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Read your writes"}),r.jsxs("div",{className:"v",children:["After you update, you should see your own update on next read.",r.jsx("span",{className:"small",children:"Example: after posting a tweet, you should see it instantly"})]})]})]}),r.jsx("p",{className:"note",children:"Strong consistency is simpler mentally but harder and slower at scale."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(du,{})}),r.jsx("h3",{className:"h3",children:"Latency vs Throughput"})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Latency"}),r.jsxs("div",{className:"v",children:["Time taken for one request.",r.jsx("span",{className:"small",children:"Example: API responds in 120 ms"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Throughput"}),r.jsxs("div",{className:"v",children:["How many requests per second the system can handle.",r.jsx("span",{className:"small",children:"Example: 10k requests per second"})]})]})]}),r.jsx("p",{className:"note",children:"You can increase throughput with batching, but latency might increase."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(mu,{})}),r.jsx("h3",{className:"h3",children:"CAP theorem"})]}),r.jsx("p",{className:"p",children:"CAP says in a distributed system, when a network partition happens, you must choose between consistency and availability."}),r.jsxs("div",{className:"cap",children:[r.jsxs("div",{className:"capRow",children:[r.jsx("div",{className:"capK",children:"C"}),r.jsxs("div",{className:"capV",children:[r.jsx("b",{children:"Consistency"})," - all nodes see the same latest data"]})]}),r.jsxs("div",{className:"capRow",children:[r.jsx("div",{className:"capK",children:"A"}),r.jsxs("div",{className:"capV",children:[r.jsx("b",{children:"Availability"})," - every request gets a response"]})]}),r.jsxs("div",{className:"capRow",children:[r.jsx("div",{className:"capK",children:"P"}),r.jsxs("div",{className:"capV",children:[r.jsx("b",{children:"Partition tolerance"})," - system works despite network splits"]})]})]}),r.jsx("p",{className:"note",children:"Partition tolerance is not optional in real distributed systems. So during partition, choose C or A."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rr,{})}),r.jsx("h3",{className:"h3",children:"ACID vs BASE"})]}),r.jsx("p",{className:"p",children:"These are mental models for data correctness and behavior. ACID is commonly used with relational databases and strict transactions. BASE is common in distributed systems prioritizing availability and scale."}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"ACID"}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"A"})," - Atomicity: all or nothing transaction"]}),r.jsxs("li",{children:[r.jsx("b",{children:"C"})," - Consistency: rules and constraints stay valid"]}),r.jsxs("li",{children:[r.jsx("b",{children:"I"})," - Isolation: transactions do not interfere"]}),r.jsxs("li",{children:[r.jsx("b",{children:"D"})," - Durability: committed data is not lost"]})]}),r.jsx("div",{className:"small",children:"Use case: payments, inventory, banking"})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"BASE"}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"B"})," - Basically Available: system responds even if degraded"]}),r.jsxs("li",{children:[r.jsx("b",{children:"S"})," - Soft state: data may change while syncing"]}),r.jsxs("li",{children:[r.jsx("b",{children:"E"})," - Eventual consistency: replicas converge later"]})]}),r.jsx("div",{className:"small",children:"Use case: feeds, likes, analytics, large distributed apps"})]})]}),r.jsx("p",{className:"note",children:"Reality is mixed. Many systems use ACID where needed and BASE where acceptable."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Os,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Requirements define everything. Scale drives architecture. CAP and consistency define tradeoffs."})]})]})]})})]})},pf={Wrapper:ke.section`
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
    `},uf=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"architectureBasics",title:"Architecture Basics",sub:"Monolith, microservices, SOA, client-server, layered, event-driven, and hexagonal architecture."}),[]);return r.jsxs(pf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(rr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Core"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Fa,{})}),r.jsx("h3",{className:"h3",children:"Monolith architecture"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"monolith"})," is one codebase and one deployable unit. Most features live inside a single application process."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Good for"}),r.jsx("div",{className:"v",children:"Small to medium products, fast iteration, simple deployment, easy debugging."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Problems"}),r.jsx("div",{className:"v",children:"Harder to scale different parts independently, releases can become risky as it grows."})]})]}),r.jsx("p",{className:"note",children:"Most successful systems start as a monolith and evolve only when needed."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Os,{})}),r.jsx("h3",{className:"h3",children:"Microservices architecture"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Microservices"})," split a system into many small services. Each service owns a specific business capability and can be deployed independently."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Each service has its own code, runtime, and often its own database."}),r.jsx("li",{children:"Services talk via APIs (HTTP, gRPC) or messaging (Kafka, queues)."}),r.jsx("li",{children:"Lets teams move independently, but adds distributed system complexity."})]}),r.jsx("p",{className:"note",children:"Microservices solve team scaling and independent deploys, not just traffic scaling."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(un,{})}),r.jsx("h3",{className:"h3",children:"Service-oriented architecture - SOA"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"SOA"})," means"," ",r.jsx("b",{children:"Service-oriented architecture"}),". It also uses services, but services are usually bigger and often share infrastructure. Traditionally SOA used centralized middleware like an ESB."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"SOA style"}),r.jsx("div",{className:"v",children:"Larger services, shared data, centralized integration layer."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Microservices style"}),r.jsx("div",{className:"v",children:"Smaller services, independent deploys, decentralized integration."})]})]}),r.jsx("p",{className:"note",children:"Interview safe line: microservices can be seen as a more fine-grained evolution of SOA."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(un,{})}),r.jsx("h3",{className:"h3",children:"Client-server model"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Client-server"})," means clients request and servers respond. Client is usually browser or mobile app. Server handles business logic and storage."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Client"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"API"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Server"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Database"})]}),r.jsx("p",{className:"note",children:"Most system design diagrams start as client-server, then add cache, queue, and services."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pu,{})}),r.jsx("h3",{className:"h3",children:"Layered architecture"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Layered architecture"})," separates concerns into layers. Common layers are presentation, business logic, and data access. Each layer depends on the layer below it."]}),r.jsxs("div",{className:"layers",children:[r.jsxs("div",{className:"layer",children:[r.jsx("div",{className:"layerTag",children:"UI"}),r.jsx("div",{className:"layerText",children:"Controllers, handlers, API endpoints"})]}),r.jsxs("div",{className:"layer",children:[r.jsx("div",{className:"layerTag",children:"Business"}),r.jsx("div",{className:"layerText",children:"Use cases, rules, validations, workflows"})]}),r.jsxs("div",{className:"layer",children:[r.jsx("div",{className:"layerTag",children:"Data"}),r.jsx("div",{className:"layerText",children:"Repositories, SQL, cache, external services"})]})]}),r.jsx("p",{className:"note",children:"Layering keeps code readable. Too many layers can become slow to change."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gs,{})}),r.jsx("h3",{className:"h3",children:"Event-driven architecture"})]}),r.jsxs("p",{className:"p",children:["In ",r.jsx("b",{children:"event-driven architecture"}),", services communicate by publishing events and consuming events. Producers do not directly call consumers."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'Producer publishes an event like "orderCreated".'}),r.jsx("li",{children:'Consumers react like "sendEmail", "reserveInventory".'}),r.jsx("li",{children:"Usually uses Kafka, RabbitMQ, or cloud pub-sub."})]}),r.jsx("p",{className:"note",children:"Great for async work and loose coupling, but debugging becomes harder across services."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(qm,{})}),r.jsx("h3",{className:"h3",children:"Hexagonal architecture overview"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Hexagonal architecture"})," is also called"," ",r.jsx("b",{children:"Ports and Adapters"}),". The main idea: keep core business logic independent from external systems."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Core"}),r.jsx("div",{className:"v",children:"Business rules and use cases, no database or framework dependency."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Adapters"}),r.jsx("div",{className:"v",children:"Database adapter, HTTP adapter, message queue adapter, etc."})]})]}),r.jsx("p",{className:"note",children:"This makes testing easier and allows swapping DB or transport without rewriting business logic."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(rr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Start simple. Monolith for speed. Split when team and scaling needs force it. Layered for clarity. Event-driven for async. Hexagonal for clean core logic."})]})]})]})})]})},hf={Wrapper:ke.section`
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
    `},xf=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"scalabilityConcepts",title:"Scalability Concepts",sub:"Vertical and horizontal scaling, stateless design, load balancing, auto scaling, and bottlenecks."}),[]);return r.jsxs(hf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(mt,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Scale"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ms,{})}),r.jsx("h3",{className:"h3",children:"What scalability means"})]}),r.jsx("p",{className:"p",children:"Scalability means your system can handle more load by adding resources, while still meeting the same targets like latency, error rate, and cost. Load can mean more users, more requests per second, more data, or more background jobs."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"More users"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"More traffic"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"More data"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"More reliability pressure"})]}),r.jsx("p",{className:"note",children:"Scaling is not only adding servers. It is also removing bottlenecks and protecting the database."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Am,{})}),r.jsx("h3",{className:"h3",children:"Vertical scaling"})]}),r.jsx("p",{className:"p",children:"Vertical scaling means making one machine bigger. More CPU, more RAM, faster disk. It is the fastest upgrade and simplest mentally."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Pros"})," - simple, no distributed complexity, quick win"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Cons"})," - hard limit, expensive, single machine becomes a single point of failure"]})]}),r.jsx("p",{className:"note",children:"Great for early stages. Eventually you hit the ceiling."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(pu,{})}),r.jsx("h3",{className:"h3",children:"Horizontal scaling"})]}),r.jsx("p",{className:"p",children:"Horizontal scaling means adding more machines and distributing traffic across them. This is the real long-term scaling path."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Pros"})," - scale out, better fault tolerance, cheaper per unit"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Cons"})," - needs load balancing, introduces distributed issues"]})]}),r.jsx("p",{className:"note",children:"Horizontal scaling works best when services are stateless."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xn,{})}),r.jsx("h3",{className:"h3",children:"Stateless vs Stateful services"})]}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Stateless"}),r.jsx("p",{className:"p",children:"Server does not keep user session or long-lived data in memory. Any request can go to any instance."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Easy to scale horizontally"}),r.jsx("li",{children:"Load balancer can send traffic anywhere"}),r.jsx("li",{children:"Failures are easier to recover from"})]}),r.jsx("div",{className:"small",children:"Example: API server reads session from cookie or Redis and writes to DB"})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Stateful"}),r.jsx("p",{className:"p",children:"Server keeps important state in memory, so requests must go to the same instance."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Harder to scale, needs sticky sessions"}),r.jsx("li",{children:"Instance restart can lose state"}),r.jsx("li",{children:"Failover is more complex"})]}),r.jsx("div",{className:"small",children:"Example: in-memory session store, websocket room state only in one node"})]})]}),r.jsx("p",{className:"note",children:"Move state out of app servers into shared systems like DB, Redis, or object storage."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(mu,{})}),r.jsx("h3",{className:"h3",children:"Load balancing basics"})]}),r.jsx("p",{className:"p",children:"A load balancer spreads incoming requests across multiple servers so no single server gets overloaded. It also helps with failover by removing unhealthy instances."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Common strategies - round robin, least connections, IP hash"}),r.jsx("li",{children:"Health checks - remove instances that are failing"}),r.jsx("li",{children:"Sticky sessions - used only when service is stateful"})]}),r.jsx("p",{className:"note",children:"Load balancer is the gatekeeper for scaling and reliability."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(hu,{})}),r.jsx("h3",{className:"h3",children:"Auto scaling"})]}),r.jsx("p",{className:"p",children:"Auto scaling means adding or removing server instances automatically based on load. It helps you handle traffic spikes and reduce cost when traffic is low."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Scale out when CPU, memory, or request rate crosses a threshold"}),r.jsx("li",{children:"Scale in when load is low for some time"}),r.jsx("li",{children:"Needs good health checks and warmup time planning"})]}),r.jsx("p",{className:"note",children:"Auto scaling is not magic. If DB is the bottleneck, adding API servers will not help."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(cu,{})}),r.jsx("h3",{className:"h3",children:"Bottlenecks identification"})]}),r.jsx("p",{className:"p",children:"A bottleneck is the component that hits its limit first and slows down the whole system. If you remove the wrong thing, nothing improves."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"App servers"}),r.jsxs("div",{className:"v",children:["CPU high, memory leaks, too many threads, slow code paths.",r.jsx("span",{className:"small",children:"Fix: optimize code, add caching, scale horizontally"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Database"}),r.jsxs("div",{className:"v",children:["Slow queries, locks, missing indexes, high write load.",r.jsx("span",{className:"small",children:"Fix: indexes, query tuning, read replicas, sharding later"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Network"}),r.jsxs("div",{className:"v",children:["High latency, packet loss, too much chatty communication.",r.jsx("span",{className:"small",children:"Fix: reduce calls, batch, compress, use CDN"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"External services"}),r.jsxs("div",{className:"v",children:["Payment, email, third party APIs slowing you down.",r.jsx("span",{className:"small",children:"Fix: timeouts, retries, circuit breaker, async queues"})]})]})]}),r.jsx("p",{className:"note",children:"Rule: measure first. Fix the hottest path. Protect the database."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(mt,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Start vertical, go horizontal, stay stateless, balance traffic, auto scale carefully, and always chase the real bottleneck."})]})]})]})})]})},mf={Wrapper:ke.section`
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
    `},ff=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"loadBalancing",title:"Load Balancing",sub:"Load balancer basics, L4 vs L7, algorithms, health checks, and reverse proxy mental model."}),[]);return r.jsxs(mf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(on,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Traffic"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(un,{})}),r.jsx("h3",{className:"h3",children:"What is a load balancer"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"load balancer"})," is a traffic manager that sits in front of multiple servers and distributes incoming requests across them. This improves performance, increases availability, and makes scaling easier."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Clients"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Load balancer"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Server A"}),r.jsx("span",{className:"pill",children:"Server B"}),r.jsx("span",{className:"pill",children:"Server C"})]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Scale"})," - add more servers behind it"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Availability"})," - stop sending traffic to unhealthy servers"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Stability"})," - smooth spikes by spreading load"]})]}),r.jsx("p",{className:"note",children:"Without a load balancer, one server becomes a single point of failure and a scaling wall."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rr,{})}),r.jsx("h3",{className:"h3",children:"Layer 4 vs Layer 7 load balancing"})]}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Layer 4 - Transport level"}),r.jsx("p",{className:"p",children:"Works at TCP or UDP level. It routes connections based on IP and port, without understanding HTTP content."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Faster and simpler"}),r.jsx("li",{children:"Good for raw TCP services and high throughput"}),r.jsx("li",{children:"Does not do URL-based routing"})]}),r.jsx("div",{className:"small",children:"Example: route TCP connections to game servers or database proxies"})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Layer 7 - Application level"}),r.jsx("p",{className:"p",children:"Understands HTTP and can route based on URL path, headers, cookies, host, etc. It can also terminate TLS and do caching or compression."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Smarter routing"}),r.jsx("li",{children:'Can do path-based routing like "/api" and "/images"'}),r.jsx("li",{children:"More CPU work than L4"})]}),r.jsx("div",{className:"small",children:'Example: send "/api" to backend and "/static" to CDN origin servers'})]})]}),r.jsx("p",{className:"note",children:"Simple rule: L4 is connection routing, L7 is request routing."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xn,{})}),r.jsx("h3",{className:"h3",children:"Round robin"})]}),r.jsx("p",{className:"p",children:"Sends requests to servers one by one in a fixed rotation. If you have three servers, it goes A then B then C then A again."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Simple and common"}),r.jsx("li",{children:"Works well when servers are similar"}),r.jsx("li",{children:"Can be unfair if one server is slower"})]}),r.jsx("p",{className:"note",children:"Weighted round robin exists when servers are not equal."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ms,{})}),r.jsx("h3",{className:"h3",children:"Least connections"})]}),r.jsx("p",{className:"p",children:"Sends new requests to the server that currently has the fewest active connections. It helps when requests have different durations."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Good for long-lived connections"}),r.jsx("li",{children:"Balances uneven workloads better"}),r.jsx("li",{children:"Needs tracking of active connections"})]}),r.jsx("p",{className:"note",children:"For HTTP keep-alive, connections can stay open, so tracking matters."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ba,{})}),r.jsx("h3",{className:"h3",children:"IP hash"})]}),r.jsx("p",{className:"p",children:'Chooses a server by hashing the client IP. Same client IP tends to go to the same server. This gives "sticky" behavior without cookies.'}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Useful when server keeps session state"}),r.jsx("li",{children:"Can be uneven if some IPs generate more traffic"}),r.jsx("li",{children:"Breaks when clients are behind NAT or proxies"})]}),r.jsx("p",{className:"note",children:"Sticky sessions help short term, but long term the goal is stateless services."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Lr,{})}),r.jsx("h3",{className:"h3",children:"Health checks"})]}),r.jsx("p",{className:"p",children:"Health checks are periodic tests to decide if a server is healthy. If a server fails checks, the load balancer stops sending traffic to it."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Passive"})," - observe real traffic errors and timeouts"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Active"}),' - call a dedicated endpoint like "/health"']}),r.jsx("li",{children:"Use timeouts and thresholds to avoid flapping"})]}),r.jsx("p",{className:"note",children:"Health checks reduce downtime and prevent sending traffic into a dead box."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(on,{})}),r.jsx("h3",{className:"h3",children:"Reverse proxy concept"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"reverse proxy"})," is a server that sits in front of backend services and forwards client requests to them. The client talks to the proxy, not directly to the backend."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why use it"}),r.jsx("div",{className:"v",children:"Hide internal services, centralize TLS, caching, compression, routing, and security rules."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"How it relates"}),r.jsx("div",{className:"v",children:"Many Layer 7 load balancers are also reverse proxies. They route requests and can rewrite headers."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Example"}),r.jsx("div",{className:"v",children:"Nginx can act as reverse proxy and do load balancing across multiple app servers."})]})]}),r.jsx("p",{className:"note",children:"Forward proxy is for clients. Reverse proxy is for servers."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(on,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Load balancer spreads traffic. L4 routes connections. L7 routes HTTP requests. Health checks keep bad servers out."})]})]})]})})]})},gf={Wrapper:ke.section`
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
    `},vf=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"caching",title:"Caching",sub:"Why caching exists, cache patterns, eviction policies, Redis basics, and CDN concept."}),[]);return r.jsxs(gf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(gs,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Performance"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ms,{})}),r.jsx("h3",{className:"h3",children:"Why caching is needed"})]}),r.jsx("p",{className:"p",children:"Caching means storing a copy of data so future requests can be served faster. It reduces database load, reduces latency, and helps the system handle more traffic."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Lower latency"})," - serve from memory instead of disk or network"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Higher throughput"})," - database does fewer reads"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Cost saving"})," - fewer heavy queries and less compute"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Protects DB"})," - avoids read spikes during traffic bursts"]})]}),r.jsx("p",{className:"note",children:"Caching is powerful but introduces a new problem: stale data and invalidation."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rr,{})}),r.jsx("h3",{className:"h3",children:"Cache-aside pattern"})]}),r.jsx("p",{className:"p",children:"Cache-aside is the most common pattern. App checks cache first. If cache miss happens, app reads from DB and then fills cache."}),r.jsxs("div",{className:"flow",children:[r.jsx("div",{className:"step",children:"Read request"}),r.jsx("div",{className:"arrow",children:"-"}),r.jsx("div",{className:"step",children:"Check cache"}),r.jsx("div",{className:"arrow",children:"-"}),r.jsxs("div",{className:"step",children:["Hit - return",r.jsx("span",{className:"small",children:"fast path"})]}),r.jsx("div",{className:"arrow",children:"-"}),r.jsxs("div",{className:"step",children:["Miss - read DB",r.jsx("span",{className:"small",children:"slow path"})]}),r.jsx("div",{className:"arrow",children:"-"}),r.jsxs("div",{className:"step",children:["Put in cache",r.jsx("span",{className:"small",children:"with TTL"})]})]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Pros"})," - simple, cache only when needed"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Cons"})," - cache miss spike can hit DB hard, stale data until invalidation"]})]}),r.jsx("p",{className:"note",children:"TTL means time to live. Cached entry expires after some time."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ba,{})}),r.jsx("h3",{className:"h3",children:"Write-through"})]}),r.jsx("p",{className:"p",children:"In write-through, every write goes to cache and database together. Cache stays fresh because writes update it immediately."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Write"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Cache update"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"DB write"})]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Pros"})," - cache is consistent for reads"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Cons"})," - higher write latency, cache might store rarely used data"]})]})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fs,{})}),r.jsx("h3",{className:"h3",children:"Write-back"})]}),r.jsx("p",{className:"p",children:"In write-back, writes go to cache first. Database is updated later in background. This makes writes fast, but data loss risk increases if cache crashes before flush."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Write"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Cache only"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Async DB flush"})]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Pros"})," - very fast writes"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Cons"})," - harder correctness, needs durability strategy"]})]}),r.jsx("p",{className:"note",children:"Use carefully for systems where slight risk is acceptable or durability is handled separately."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(sf,{})}),r.jsx("h3",{className:"h3",children:"Cache eviction policies"})]}),r.jsx("p",{className:"p",children:"Cache is limited in size. When it is full, it must remove some entries. Eviction policy decides what to remove."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"LRU"}),r.jsxs("div",{className:"v",children:[r.jsx("b",{children:"LRU"})," means"," ",r.jsx("b",{children:"Least Recently Used"}),". Removes the entry that was not used recently.",r.jsx("span",{className:"small",children:"Good default for general web workloads."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"LFU"}),r.jsxs("div",{className:"v",children:[r.jsx("b",{children:"LFU"})," means"," ",r.jsx("b",{children:"Least Frequently Used"}),". Removes the entry used least often.",r.jsx("span",{className:"small",children:"Works well when a small set of keys are always hot."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"FIFO"}),r.jsxs("div",{className:"v",children:[r.jsx("b",{children:"FIFO"})," means"," ",r.jsx("b",{children:"First In First Out"}),". Removes the oldest inserted entry.",r.jsx("span",{className:"small",children:"Simple but can evict hot items by accident."})]})]})]}),r.jsx("p",{className:"note",children:"Hot key means heavily requested key. Cold key means rarely requested key."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fs,{})}),r.jsx("h3",{className:"h3",children:"Redis basics"})]}),r.jsx("p",{className:"p",children:"Redis is an in-memory data store commonly used as a cache. It is fast because it serves data from RAM, not disk."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Supports key-value and data structures like lists, sets, hashes"}),r.jsx("li",{children:"Built-in TTL support for expiring keys"}),r.jsx("li",{children:"Can be used for rate limiting, session storage, queues, locks"})]}),r.jsx("p",{className:"note",children:"Redis can be configured to persist to disk, but the usual mental model is memory first."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Dm,{})}),r.jsx("h3",{className:"h3",children:"CDN concept"})]}),r.jsx("p",{className:"p",children:"CDN means Content Delivery Network. It caches static content close to users using edge servers around the world."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Great for images, videos, CSS, JS, downloads"}),r.jsx("li",{children:"Reduces latency by serving from nearest location"}),r.jsx("li",{children:"Reduces load on origin server"})]}),r.jsx("p",{className:"note",children:"CDN is basically caching, but at global edge locations."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(gs,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Cache speeds up reads. Patterns decide correctness. Eviction decides what stays."})]})]})]})})]})},yf={Wrapper:ke.section`
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
    `},jf=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"databasesSystemDesign",title:"Databases",sub:"SQL vs NoSQL, indexing, normalization, replication, sharding, partitioning, and distributed DB basics."}),[]);return r.jsxs(yf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(fs,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Storage"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rr,{})}),r.jsx("h3",{className:"h3",children:"SQL vs NoSQL"})]}),r.jsx("p",{className:"p",children:"Choosing a database is mostly about your data shape, query patterns, and correctness needs. There is no universally best DB."}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"SQL (Relational)"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Structured schema with tables and relations"}),r.jsx("li",{children:"Strong transactions are common (ACID)"}),r.jsx("li",{children:"Great for joins, reporting, and complex queries"}),r.jsx("li",{children:"Scaling writes can be harder, but tools exist"})]}),r.jsx("div",{className:"small",children:"Example use: payments, inventory, orders, accounting"})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"NoSQL (Non-relational)"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Flexible schema, often document or key-value"}),r.jsx("li",{children:"Easy horizontal scaling is common"}),r.jsx("li",{children:"Often optimized for specific access patterns"}),r.jsx("li",{children:"Joins are limited, denormalization is common"})]}),r.jsx("div",{className:"small",children:"Example use: feeds, sessions, caching, large scale events"})]})]}),r.jsx("p",{className:"note",children:"Rule: choose SQL by default unless your scale or data shape clearly needs NoSQL."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fs,{})}),r.jsx("h3",{className:"h3",children:"Relational database basics"})]}),r.jsx("p",{className:"p",children:"A relational database stores data in tables (rows and columns). Relationships are created using keys."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Table"})," - collection of rows of same type"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Row"})," - one record (one entity instance)"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Primary key"})," - unique identifier of a row"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Foreign key"})," - references a row in another table"]})]}),r.jsx("p",{className:"note",children:"Relational design is about modeling relationships cleanly and keeping data consistent."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Jm,{})}),r.jsx("h3",{className:"h3",children:"Indexing"})]}),r.jsx("p",{className:"p",children:"An index is a data structure that speeds up reads by avoiding full table scans. Think of it like a book index."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Benefit"}),r.jsx("div",{className:"v",children:"Faster queries for indexed columns"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Cost"}),r.jsx("div",{className:"v",children:"Slower writes and extra storage because index must be updated"})]})]}),r.jsx("p",{className:"note",children:"Index the columns you filter, sort, and join on. Avoid indexing everything."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xn,{})}),r.jsx("h3",{className:"h3",children:"Normalization vs Denormalization"})]}),r.jsx("p",{className:"p",children:"These are data modeling strategies. Normalization reduces duplication. Denormalization improves read speed by duplicating data."}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Normalization"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Split data into multiple related tables"}),r.jsx("li",{children:"Reduce redundancy and anomalies"}),r.jsx("li",{children:"Writes stay clean and consistent"})]}),r.jsx("div",{className:"small",children:"Example: user table and address table instead of repeating address"})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Denormalization"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Duplicate some data to avoid joins"}),r.jsx("li",{children:"Reads become faster and simpler"}),r.jsx("li",{children:"Updates become harder because duplicates must be synced"})]}),r.jsx("div",{className:"small",children:"Example: storing userName with every post for fast feed reads"})]})]}),r.jsx("p",{className:"note",children:"Most systems start normalized, then denormalize only where performance demands it."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(uu,{})}),r.jsx("h3",{className:"h3",children:"Replication"})]}),r.jsx("p",{className:"p",children:"Replication means keeping copies of the same data on multiple nodes. It improves availability and read scalability."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Helps during failures (one node down, others serve)"}),r.jsx("li",{children:"Enables read scaling (serve reads from replicas)"}),r.jsx("li",{children:"Adds consistency challenges (replication lag)"})]}),r.jsx("p",{className:"note",children:"Replication is about copies. Sharding is about splitting. Both are different tools."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(uo,{})}),r.jsx("h3",{className:"h3",children:"Master-slave and read replicas"})]}),r.jsx("p",{className:"p",children:"Common pattern: one primary node handles writes, replicas handle reads. People also say primary-replica instead of master-slave."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Primary (writes)"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Replicas (reads)"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Async sync"})]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Read replicas"})," reduce load on primary"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Lag"})," happens because replication may be asynchronous"]}),r.jsx("li",{children:"Some reads need to hit primary for fresh data"})]}),r.jsx("p",{className:"note",children:"Great for read-heavy systems like feeds, dashboards, search views."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Os,{})}),r.jsx("h3",{className:"h3",children:"Partitioning"})]}),r.jsx("p",{className:"p",children:"Partitioning means splitting a big table into smaller parts based on a rule, but still inside the same database system."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Range partitioning"})," - split by time ranges like monthly data"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Hash partitioning"})," - split by hashing a key"]}),r.jsxs("li",{children:[r.jsx("b",{children:"List partitioning"})," - split by category values"]})]}),r.jsx("p",{className:"note",children:"Partitioning improves manageability and performance for large datasets."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(un,{})}),r.jsx("h3",{className:"h3",children:"Sharding"})]}),r.jsx("p",{className:"p",children:"Sharding means splitting data across multiple databases or nodes. Each shard holds only a portion of data. This is mainly for scaling writes and storage."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Shard key"}),r.jsxs("div",{className:"v",children:["The field used to decide which shard stores the data.",r.jsx("span",{className:"small",children:"Example: userId based sharding"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Problem"}),r.jsx("div",{className:"v",children:"Cross-shard joins and transactions become hard."})]})]}),r.jsx("p",{className:"note",children:"Sharding is powerful but expensive in complexity. Do it only when needed."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rr,{})}),r.jsx("h3",{className:"h3",children:"Distributed databases"})]}),r.jsx("p",{className:"p",children:"A distributed database stores and serves data across multiple nodes, often across multiple regions. It is built to scale and survive failures, but it introduces tradeoffs around consistency and latency."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why"}),r.jsx("div",{className:"v",children:"Scale, availability, geo-distribution, fault tolerance"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Challenges"}),r.jsx("div",{className:"v",children:"Consistency, partitions, leader election, replication lag"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Common pattern"}),r.jsx("div",{className:"v",children:"Replication for reads and availability, sharding for write scale"})]})]}),r.jsx("p",{className:"note",children:"Distributed DB design is where CAP tradeoffs become real."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(fs,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Index helps reads. Replication copies data. Partition splits inside a DB. Sharding splits across DBs."})]})]})]})})]})},bf={Wrapper:ke.section`
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
    `},Nf=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"dataStorageConcepts",title:"Data Storage Concepts",sub:"Object, blob, file, block storage, and data lake vs data warehouse."}),[]);return r.jsxs(bf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Ql,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Storage"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Fa,{})}),r.jsx("h3",{className:"h3",children:"Object storage"})]}),r.jsxs("p",{className:"p",children:["Object storage stores data as ",r.jsx("b",{children:"objects"}),". Each object has the data itself, metadata, and a unique ID. You do not access it like a normal folder drive, you access it via API."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Best for"}),r.jsx("div",{className:"v",children:"Images, videos, backups, logs, large static files"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Access"}),r.jsx("div",{className:"v",children:"HTTP API, URL-based access, often globally distributed"})]})]}),r.jsx("p",{className:"note",children:'Think "bucket of objects". Great durability, huge scale, not for random file edits.'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rr,{})}),r.jsx("h3",{className:"h3",children:"Blob storage"})]}),r.jsxs("p",{className:"p",children:["Blob storage means storing data as a"," ",r.jsx("b",{children:"binary large object"}),'. In practice, blob storage is very similar to object storage. The word "blob" is used a lot in cloud platforms.']}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Blob means a big chunk of bytes - like a file."}),r.jsx("li",{children:"You read or write the blob as a whole."}),r.jsx("li",{children:"Good for unstructured data like media and documents."})]}),r.jsx("p",{className:"note",children:"Simple mental model: object storage is a general concept, blob is a common cloud naming for it."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx($m,{})}),r.jsx("h3",{className:"h3",children:"File storage"})]}),r.jsx("p",{className:"p",children:"File storage is the classic folder and file system model. You get directories, filenames, permissions, and you can mount it like a drive."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Best for"}),r.jsx("div",{className:"v",children:"Shared folders, user home dirs, app assets that need file APIs"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Access"}),r.jsx("div",{className:"v",children:"POSIX-like file operations - read, write, rename, lock"})]})]}),r.jsx("p",{className:"note",children:"File storage is convenient, but scaling and high throughput can be harder than object storage."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ql,{})}),r.jsx("h3",{className:"h3",children:"Block storage"})]}),r.jsx("p",{className:"p",children:"Block storage provides raw storage volumes split into fixed-size blocks. A server treats it like a disk. You put your own file system on top."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Best for"}),r.jsx("div",{className:"v",children:"Databases, VM disks, low latency workloads"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Access"}),r.jsx("div",{className:"v",children:"Attached to a machine, reads and writes blocks, very fast"})]})]}),r.jsx("p",{className:"note",children:"Block storage is like a hard drive. File storage is like folders. Object storage is like a bucket."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fs,{})}),r.jsx("h3",{className:"h3",children:"Data lake vs Data warehouse"})]}),r.jsx("p",{className:"p",children:"Both are used for analytics, reporting, and large-scale data processing, but they differ in how data is stored and how strict the structure is."}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Data lake"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Stores raw data in many formats (JSON, CSV, logs, images)"}),r.jsx("li",{children:"Schema on read - structure is applied when you query"}),r.jsx("li",{children:"Cheap storage, good for ML and exploration"})]}),r.jsx("div",{className:"small",children:"Example use: store clickstream logs and process later"})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Data warehouse"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Stores cleaned, structured data (tables, models)"}),r.jsx("li",{children:"Schema on write - structure is applied before storing"}),r.jsx("li",{children:"Fast analytics queries, consistent reporting"})]}),r.jsx("div",{className:"small",children:"Example use: dashboards for finance and business reporting"})]})]}),r.jsx("div",{className:"compare",children:r.jsxs("div",{className:"capRow",children:[r.jsx("div",{className:"capK",children:r.jsx(Os,{})}),r.jsxs("div",{className:"capV",children:[r.jsx("b",{children:"Simple rule"})," - data lake is raw and flexible, warehouse is clean and optimized for reporting."]})]})}),r.jsx("p",{className:"note",children:"Many companies use both: lake for ingestion and exploration, warehouse for curated analytics."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Ql,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Object and blob are API-first. File is folders. Block is raw disk. Lake is raw data, warehouse is curated data."})]})]})]})})]})},wf={Wrapper:ke.section`
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
    `},kf=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"messagingAndQueues",title:"Messaging and Queues",sub:"Queues, async processing, brokers, Kafka, RabbitMQ, pub-sub, and event streaming."}),[]);return r.jsxs(wf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(ql,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Async"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xu,{})}),r.jsx("h3",{className:"h3",children:"Why queues are needed"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"queue"})," is a buffer between two parts of a system so they do not have to run at the same speed. It helps when incoming traffic is bursty, when tasks are slow, or when you want reliable background work."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Smooth spikes"}),r.jsxs("div",{className:"v",children:["If 10k requests arrive suddenly, queue stores tasks and workers process steadily.",r.jsx("span",{className:"small",children:"Example: image processing, video encoding, sending emails"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Decouple services"}),r.jsxs("div",{className:"v",children:["Producer does not need to know how the consumer works, just pushes a message.",r.jsx("span",{className:"small",children:'Example: order service emits "orderCreated", shipping service consumes it'})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Reliability"}),r.jsx("div",{className:"v",children:"If a consumer is down, messages can stay queued until it comes back."})]})]}),r.jsx("p",{className:"note",children:"Simple idea: queue is a shock absorber between traffic and processing."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xo,{})}),r.jsx("h3",{className:"h3",children:"Synchronous vs Asynchronous processing"})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Synchronous"}),r.jsxs("div",{className:"v",children:["Client waits until work is done.",r.jsx("span",{className:"small",children:"Example: login request must complete before response"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Asynchronous"}),r.jsxs("div",{className:"v",children:["Client gets quick response, work happens later.",r.jsx("span",{className:"small",children:'Example: "your report is being generated", then notify when ready'})]})]})]}),r.jsx("p",{className:"note",children:"Async is great for slow tasks. Sync is needed when user must see result immediately."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rr,{})}),r.jsx("h3",{className:"h3",children:"Message brokers"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"message broker"})," is software that receives messages from producers and delivers them to consumers. It handles routing, persistence, retries, and delivery guarantees."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Producer"})," sends message"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Broker"})," stores and routes message"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Consumer"})," receives and processes message"]})]}),r.jsx("p",{className:"note",children:"Broker reduces direct dependencies between services."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Xm,{})}),r.jsx("h3",{className:"h3",children:"Kafka basics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Apache Kafka"})," is a distributed event streaming platform. It is designed for high throughput, durable logs, and multiple consumers reading the same events. Think of Kafka as a big append-only log that many services can read from."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Topic"}),r.jsxs("div",{className:"v",children:["Category of events.",r.jsx("span",{className:"small",children:'Example: "payments", "userEvents", "orderEvents"'})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Partition"}),r.jsx("div",{className:"v",children:"Topic is split into partitions for parallelism and scaling. Order is guaranteed inside one partition."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Consumer group"}),r.jsx("div",{className:"v",children:"Multiple consumers share work. Each partition is consumed by one consumer in the group."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Offset"}),r.jsx("div",{className:"v",children:"Position in the log. Consumers track offsets to know what they have processed."})]})]}),r.jsx("p",{className:"note",children:"Kafka is great for event streams, analytics pipelines, and real-time data flows."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ql,{})}),r.jsx("h3",{className:"h3",children:"RabbitMQ basics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"RabbitMQ"})," is a message broker focused on reliable messaging and flexible routing. It is often used for task queues and command-style messaging between services."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Queue"}),r.jsx("div",{className:"v",children:"Messages sit in a queue until consumed."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Exchange"}),r.jsx("div",{className:"v",children:"Entry point for messages. Exchanges route messages to queues based on rules."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Ack"}),r.jsx("div",{className:"v",children:"Consumer sends acknowledgment when done. If no ack, broker can retry."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Routing"}),r.jsx("div",{className:"v",children:"Direct, topic, fanout routing patterns supported."})]})]}),r.jsx("p",{className:"note",children:"RabbitMQ is great when you want strong delivery guarantees and routing flexibility."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rr,{})}),r.jsx("h3",{className:"h3",children:"Pub-sub model"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Pub-sub"})," means publishers send messages to a topic and subscribers receive them. Publishers do not know who subscribers are."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Publisher"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Topic"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Subscribers"})]}),r.jsx("p",{className:"note",children:"Use pub-sub when many services need the same event."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(mt,{})}),r.jsx("h3",{className:"h3",children:"Event streaming"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Event streaming"}),' is continuously producing and consuming events in near real time. Events are facts like "orderPlaced" or "paymentSucceeded".']}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Events are stored as an ordered stream"}),r.jsx("li",{children:"Multiple consumers can read independently"}),r.jsx("li",{children:"Useful for analytics, monitoring, and pipelines"})]}),r.jsx("p",{className:"note",children:"Kafka is a common choice for event streaming because it behaves like a durable log."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gs,{})}),r.jsx("h3",{className:"h3",children:"Kafka vs RabbitMQ - simple selection"})]}),r.jsxs("div",{className:"twoCol",children:[r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"Kafka fits when"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"High throughput event streams"}),r.jsx("li",{children:"Many consumers reading the same history"}),r.jsx("li",{children:"Replay events by offsets"}),r.jsx("li",{children:"Analytics pipelines"})]})]}),r.jsxs("div",{className:"box",children:[r.jsx("div",{className:"boxTitle",children:"RabbitMQ fits when"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Task queues and job distribution"}),r.jsx("li",{children:"Complex routing patterns"}),r.jsx("li",{children:"Per-message acknowledgment and retries"}),r.jsx("li",{children:"Command style messaging"})]})]})]}),r.jsx("p",{className:"note",children:"Many real systems use both: RabbitMQ for tasks, Kafka for event streams."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(ql,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Queue absorbs spikes. Broker routes and persists. Kafka is a log for streams. RabbitMQ is strong for tasks."})]})]})]})})]})},Sf={Wrapper:ke.section`
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
    `},Cf=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"apiDesign",title:"API Design",sub:"REST, GraphQL, gRPC, idempotency, rate limiting, and pagination patterns."}),[]);return r.jsxs(Sf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(cn,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Interfaces"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ho,{})}),r.jsx("h3",{className:"h3",children:"REST basics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"REST"})," means"," ",r.jsx("b",{children:"Representational State Transfer"}),". It is a style for designing APIs using HTTP in a resource-first way. You model things as resources like users, orders, products, and you use HTTP methods to act on them."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Resource"}),r.jsxs("div",{className:"v",children:["A noun-like object exposed by API.",r.jsx("span",{className:"small",children:'Example: "/users", "/orders/123"'})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Common methods"}),r.jsx("div",{className:"v",children:"GET - read, POST - create, PUT - replace, PATCH - update, DELETE - remove"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Status codes"}),r.jsx("div",{className:"v",children:"200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 429 Too Many Requests, 500 Server Error"})]})]}),r.jsxs("div",{className:"code",children:[r.jsx("div",{className:"codeTitle",children:"Examples"}),r.jsx("pre",{className:"pre",children:`GET /users/42
POST /orders
PATCH /users/42
DELETE /sessions/current`})]}),r.jsx("p",{className:"note",children:"REST is simple and universal. It works great with caching, CDNs, and typical web apps."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(uo,{})}),r.jsx("h3",{className:"h3",children:"GraphQL overview"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"GraphQL"}),' is a query language for APIs. Client asks exactly what fields it needs, and server returns that shape. Usually there is a single endpoint like "/graphql".']}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:["Solves ",r.jsx("b",{children:"over-fetching"})," and"," ",r.jsx("b",{children:"under-fetching"}),".",r.jsx("span",{className:"small",children:"REST may return too much or require multiple calls."})]}),r.jsxs("li",{children:["Uses a ",r.jsx("b",{children:"schema"})," and types, good for large frontend teams."]}),r.jsx("li",{children:"Has complexity risks, needs depth limits and query cost controls."})]}),r.jsxs("div",{className:"code",children:[r.jsx("div",{className:"codeTitle",children:"Example query"}),r.jsx("pre",{className:"pre",children:`query {
  user(id: "42") {
    id
    name
    posts { id title }
  }
}`})]}),r.jsx("p",{className:"note",children:"GraphQL shines when clients need flexible shapes and many screens consume the same data."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gs,{})}),r.jsx("h3",{className:"h3",children:"gRPC basics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"gRPC"})," is a high-performance RPC framework usually used for internal service-to-service calls. It uses ",r.jsx("b",{children:"Protocol Buffers"})," ","(protobuf) for schema and binary encoding. It commonly runs over HTTP/2 and supports streaming."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Strongly typed contracts via protobuf definitions"}),r.jsx("li",{children:"Fast and efficient, good for microservices"}),r.jsx("li",{children:"Browser support is not as direct as REST, often used behind gateways"})]}),r.jsx("p",{className:"note",children:"Use REST for public APIs, gRPC for internal high-throughput service calls."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Lr,{})}),r.jsx("h3",{className:"h3",children:"Idempotency"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Idempotency"})," means doing the same request multiple times produces the same final result. This matters because clients retry requests due to timeouts or network issues."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Naturally idempotent"}),r.jsxs("div",{className:"v",children:["GET, PUT, DELETE are typically idempotent if designed properly.",r.jsx("span",{className:"small",children:"Example: PUT /users/42 sets the same data again and again."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Usually not idempotent"}),r.jsxs("div",{className:"v",children:["POST creates new things, so repeating can duplicate.",r.jsx("span",{className:"small",children:"Example: POST /orders can create two orders if retried."})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Fix for POST"}),r.jsxs("div",{className:"v",children:["Use an ",r.jsx("b",{children:"Idempotency-Key"})," header and store the result for that key.",r.jsx("span",{className:"small",children:"Common in payments and order creation."})]})]})]}),r.jsxs("div",{className:"code",children:[r.jsx("div",{className:"codeTitle",children:"Example"}),r.jsx("pre",{className:"pre",children:`POST /orders
Idempotency-Key: "b8d2-7c1a-..."

Server stores key -> orderId
Retry returns same orderId instead of creating new`})]}),r.jsx("p",{className:"note",children:"Idempotency is a safety net. It reduces double charges and duplicate records."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Lr,{})}),r.jsx("h3",{className:"h3",children:"Rate limiting"})]}),r.jsx("p",{className:"p",children:"Rate limiting controls how many requests a client can make in a time window. It protects APIs from abuse, DDoS, and accidental overload."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"What to limit"}),": per IP, per user, per API key, per route"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Common response"}),": 429 Too Many Requests"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Where"}),": API gateway, load balancer, or service layer"]})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Token bucket"}),r.jsx("div",{className:"v",children:"Tokens refill over time. Each request consumes a token."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Fixed window"}),r.jsx("div",{className:"v",children:"Count requests per time window. Simple but can spike at boundary."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Sliding window"}),r.jsx("div",{className:"v",children:"More accurate limiting over time, slightly more complex."})]})]}),r.jsx("p",{className:"note",children:"Rate limiting is also a product feature, it enables fair usage tiers."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ym,{})}),r.jsx("h3",{className:"h3",children:"Pagination strategies"})]}),r.jsx("p",{className:"p",children:"Pagination avoids returning huge lists. It keeps responses fast and prevents database overload."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Offset pagination"}),r.jsxs("div",{className:"v",children:["Uses page and limit or offset and limit.",r.jsx("span",{className:"small",children:'Example: "?page=3&limit=20"'})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Cursor pagination"}),r.jsxs("div",{className:"v",children:["Uses a cursor (last seen id or timestamp). Better for large and changing data.",r.jsx("span",{className:"small",children:'Example: "?limit=20&cursor=1700000123"'})]})]})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Offset is simple but can be slow for deep pages and can skip or duplicate when data changes."}),r.jsx("li",{children:"Cursor is stable and fast, best choice for feeds and infinite scroll."})]}),r.jsx("p",{className:"note",children:'If you expect "infinite scroll", go with cursor pagination.'})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(cn,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"REST is resources, GraphQL is flexible fields, gRPC is fast internal calls. Idempotency and rate limits protect systems. Cursor pagination scales best."})]})]})]})})]})},Tf={Wrapper:ke.section`
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
    `},zf=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"highAvailabilityFaultTolerance",title:"High Availability and Fault Tolerance",sub:"Redundancy, failover, circuit breaker, retry, backoff, and graceful degradation."}),[]);return r.jsxs(Tf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Lr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Resilience"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(uu,{})}),r.jsx("h3",{className:"h3",children:"Redundancy"})]}),r.jsx("p",{className:"p",children:"Redundancy means having multiple copies of critical components so that if one fails, another can continue serving traffic."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Multiple application servers behind a load balancer"}),r.jsx("li",{children:"Database replicas in different zones"}),r.jsx("li",{children:"Multiple network paths"})]}),r.jsx("p",{className:"note",children:"Single point of failure is the enemy. Remove it with duplication."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xo,{})}),r.jsx("h3",{className:"h3",children:"Failover"})]}),r.jsx("p",{className:"p",children:"Failover is the automatic switch from a failed component to a healthy backup. It ensures minimal downtime when something breaks."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Primary database"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Crash"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Promote replica"})]}),r.jsx("p",{className:"note",children:"Automatic failover is preferred over manual because speed matters during outages."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(gs,{})}),r.jsx("h3",{className:"h3",children:"Circuit breaker pattern"})]}),r.jsx("p",{className:"p",children:"A circuit breaker stops sending requests to a failing service to prevent cascading failures."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Closed"}),r.jsx("div",{className:"v",children:"Normal state. Requests flow normally."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Open"}),r.jsx("div",{className:"v",children:"Service is failing. Requests are blocked immediately."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Half-open"}),r.jsx("div",{className:"v",children:"Test requests are allowed to check recovery."})]})]}),r.jsx("p",{className:"note",children:"Prevents one failing service from taking down the whole system."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ba,{})}),r.jsx("h3",{className:"h3",children:"Retry pattern"})]}),r.jsx("p",{className:"p",children:"Retry means attempting the same request again if it fails temporarily. Many failures are transient, like short network glitches."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Retry on timeout"}),r.jsx("li",{children:"Retry on temporary server error"}),r.jsx("li",{children:"Avoid retry on permanent errors"})]}),r.jsx("p",{className:"note",children:"Blind retries can increase load. Combine with backoff strategy."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rf,{})}),r.jsx("h3",{className:"h3",children:"Backoff strategy"})]}),r.jsx("p",{className:"p",children:"Backoff means increasing the delay between retries to avoid overwhelming the system."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Fixed backoff"}),r.jsx("div",{className:"v",children:"Same delay each retry."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Exponential backoff"}),r.jsxs("div",{className:"v",children:["Delay increases exponentially.",r.jsx("span",{className:"small",children:"Example: 1s, 2s, 4s, 8s"})]})]})]}),r.jsx("p",{className:"note",children:"Exponential backoff with jitter reduces retry storms."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Lr,{})}),r.jsx("h3",{className:"h3",children:"Graceful degradation"})]}),r.jsx("p",{className:"p",children:"Graceful degradation means reducing features instead of failing completely when part of the system is under stress or unavailable."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Show cached data if live service is down"}),r.jsx("li",{children:"Disable recommendations but keep checkout working"}),r.jsx("li",{children:"Serve static content instead of dynamic content"})]}),r.jsx("p",{className:"note",children:"Better to offer limited service than no service at all."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Lr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Redundancy prevents failure. Circuit breaker prevents cascade. Retry with backoff prevents overload. Degrade gracefully under stress."})]})]})]})})]})},If={Wrapper:ke.section`
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
    `},Ef=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"distributedSystemsConcepts",title:"Distributed Systems Concepts",sub:"Locks, leader election, consensus, Raft, clock sync, and eventual consistency."}),[]);return r.jsxs(If.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(cn,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Core"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(cn,{})}),r.jsx("h3",{className:"h3",children:"What is a distributed system"})]}),r.jsx("p",{className:"p",children:"A distributed system is multiple machines working together as one system. It improves scale and reliability, but it introduces new problems like network delays, partial failures, duplicated messages, and data being temporarily different on different nodes."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Network is unreliable"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Nodes can fail"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Time is tricky"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Consistency costs"})]}),r.jsx("p",{className:"note",children:"Most core concepts below exist to keep the system sane under failures."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ro,{})}),r.jsx("h3",{className:"h3",children:"Distributed locks"})]}),r.jsx("p",{className:"p",children:"A distributed lock is a lock that works across machines. It ensures only one worker or service instance does a critical action at a time."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why needed"}),r.jsxs("div",{className:"v",children:["Prevent double processing when multiple instances run the same job.",r.jsx("span",{className:"small",children:"Example: only one worker should send a payment reminder for an order"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Key ideas"}),r.jsx("div",{className:"v",children:"Lock owner, TTL (time to live), safe release, and fencing tokens."})]})]}),r.jsx("p",{className:"note",children:"If a node dies while holding a lock, TTL helps release it, but TTL introduces edge cases."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fu,{})}),r.jsx("h3",{className:"h3",children:"Leader election"})]}),r.jsx("p",{className:"p",children:"Leader election chooses one node as the leader among many. The leader coordinates work, makes decisions, or serializes writes."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Without a leader, multiple nodes can make conflicting decisions."}),r.jsx("li",{children:"If leader fails, the system elects a new leader."}),r.jsx("li",{children:"Common in distributed databases, queues, and cluster managers."})]}),r.jsx("p",{className:"note",children:"Leader election is hard because nodes can disagree due to network delays."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(po,{})}),r.jsx("h3",{className:"h3",children:"Consensus basics"})]}),r.jsx("p",{className:"p",children:"Consensus means nodes agree on a single value or single sequence of decisions, even when some nodes fail. This is the backbone of consistent distributed systems."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Goal"}),r.jsx("div",{className:"v",children:'All healthy nodes agree on "what happened" and in what order.'})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why needed"}),r.jsx("div",{className:"v",children:"For leader election, distributed locks, config changes, and write ordering."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Simple mental model"}),r.jsx("div",{className:"v",children:"Majority wins. If a majority agrees, the decision is safe."})]})]}),r.jsx("p",{className:"note",children:"Consensus trades performance for correctness under failures."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(on,{})}),r.jsx("h3",{className:"h3",children:"Raft overview"})]}),r.jsx("p",{className:"p",children:"Raft is a consensus algorithm designed to be easier to understand than older algorithms. It is used to keep a replicated log consistent across multiple nodes."}),r.jsxs("div",{className:"raftGrid",children:[r.jsxs("div",{className:"raftBox",children:[r.jsx("div",{className:"rbTitle",children:"Roles"}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Leader"})," - accepts client writes and replicates to followers"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Follower"})," - receives replicated log entries"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Candidate"})," - tries to become leader during election"]})]})]}),r.jsxs("div",{className:"raftBox",children:[r.jsx("div",{className:"rbTitle",children:"How it stays safe"}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Leader sends heartbeats to show it is alive"}),r.jsx("li",{children:"Followers start election if heartbeats stop"}),r.jsx("li",{children:"Entries committed when a majority stores them"}),r.jsx("li",{children:"Log order stays consistent across the cluster"})]})]})]}),r.jsx("p",{className:"note",children:'Think of Raft as "leader based log replication with majority confirmation".'})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(du,{})}),r.jsx("h3",{className:"h3",children:"Clock synchronization problem"})]}),r.jsx("p",{className:"p",children:'In distributed systems, clocks on different machines drift. Network delays also make time comparisons unreliable. This breaks assumptions like "latest timestamp means latest event".'}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Two events can appear out of order if clocks differ."}),r.jsx("li",{children:"Ordering using timestamps can be wrong under drift."}),r.jsx("li",{children:"Many systems use logical clocks or sequence numbers for ordering."})]}),r.jsx("p",{className:"note",children:"Real lesson: do not trust wall clock time for correctness."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ba,{})}),r.jsx("h3",{className:"h3",children:"Eventual consistency"})]}),r.jsx("p",{className:"p",children:"Eventual consistency means replicas may temporarily return different values, but if updates stop, all replicas will converge to the same final value."}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Write to one node"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Replicate async"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Temporary lag"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Converge"})]}),r.jsx("p",{className:"p",children:"This improves availability and performance, but the system must handle stale reads. Many products accept this for non-critical data."}),r.jsx("p",{className:"note",children:"Use eventual consistency for feeds, counters, analytics. Avoid it for strict money logic."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(cn,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Locks and leaders prevent double work. Consensus keeps nodes aligned. Time is unreliable. Eventual consistency is a tradeoff."})]})]})]})})]})},Pf={Wrapper:ke.section`
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
    `},Lf=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"securitySystemDesign",title:"Security in System Design",sub:"Auth, OAuth, JWT, TLS, API gateway, secrets, and DDoS basics in one place."}),[]);return r.jsxs(Pf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Lr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Core"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Vm,{})}),r.jsx("h3",{className:"h3",children:"Authentication vs Authorization"})]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Authentication"}),r.jsxs("div",{className:"v",children:["Proves who you are.",r.jsx("span",{className:"small",children:"Example: login with password, OTP, Google sign-in"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Authorization"}),r.jsxs("div",{className:"v",children:["Decides what you can do after login.",r.jsx("span",{className:"small",children:"Example: admin can delete users, normal user cannot"})]})]})]}),r.jsx("p",{className:"note",children:"Simple memory: authentication is identity, authorization is permission."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ho,{})}),r.jsx("h3",{className:"h3",children:"OAuth basics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"OAuth"})," means authorization delegation. It lets an app access user data from another service without sharing the user password with the app."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:["User trusts an ",r.jsx("b",{children:"Identity Provider"})," ","(Google, GitHub)"]}),r.jsx("li",{children:"App redirects user to provider to approve permissions (scopes)"}),r.jsx("li",{children:"App receives an access token to call provider APIs"})]}),r.jsx("p",{className:"note",children:"OAuth is mainly about authorization. Login flows often use OAuth plus OpenID Connect."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ro,{})}),r.jsx("h3",{className:"h3",children:"JWT"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"JWT"})," means ",r.jsx("b",{children:"JSON Web Token"}),". It is a compact token that carries claims like user id and roles, signed by the server so clients cannot tamper it."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Structure"}),r.jsxs("div",{className:"v",children:["Header.Payload.Signature",r.jsx("span",{className:"small",children:"Payload is base64 encoded, not encrypted by default"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Good for"}),r.jsxs("div",{className:"v",children:["Stateless auth and APIs",r.jsx("span",{className:"small",children:"But handle expiration, rotation, and revocation carefully"})]})]})]}),r.jsx("p",{className:"note",children:"JWT is not a session store. Keep it short-lived, and avoid putting secrets in it."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ro,{})}),r.jsx("h3",{className:"h3",children:"TLS"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"TLS"})," means ",r.jsx("b",{children:"Transport Layer Security"}),". It encrypts data in transit between client and server. HTTPS is HTTP over TLS."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Protects against eavesdropping and tampering"}),r.jsx("li",{children:"Uses certificates to verify server identity"}),r.jsx("li",{children:"Modern systems use TLS everywhere, not only on public endpoints"})]}),r.jsx("p",{className:"note",children:"TLS protects data on the wire. You still need auth and access control for the data itself."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(un,{})}),r.jsx("h3",{className:"h3",children:"API gateway"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"API gateway"})," is a single entry point in front of backend services. It handles cross-cutting concerns so services can stay simpler."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Common jobs"}),r.jsx("div",{className:"v",children:"Authentication, rate limiting, request routing, logging, caching, and TLS termination"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why useful"}),r.jsx("div",{className:"v",children:"Central control and consistent policies across services"})]})]}),r.jsx("p",{className:"note",children:"Gateway is powerful, but do not make it a huge bottleneck. Keep it scalable."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Fm,{})}),r.jsx("h3",{className:"h3",children:"Secrets management"})]}),r.jsx("p",{className:"p",children:"Secrets are sensitive values like API keys, database passwords, signing keys, and tokens. You want to store and access them safely."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Never hardcode secrets in code or commit to git"}),r.jsx("li",{children:"Use environment variables or a secrets manager"}),r.jsx("li",{children:"Rotate keys regularly and restrict access"})]}),r.jsx("p",{className:"note",children:"Principle: least privilege. Give each service only the secrets it needs."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(_m,{})}),r.jsx("h3",{className:"h3",children:"DDoS mitigation"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"DDoS"})," means"," ",r.jsx("b",{children:"Distributed Denial of Service"}),". Attackers try to overload your system using huge traffic from many sources."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Use CDN and edge protection to absorb traffic"}),r.jsx("li",{children:"Rate limit requests and block abusive IP ranges"}),r.jsx("li",{children:"Use WAF (Web Application Firewall) rules for common attacks"}),r.jsx("li",{children:"Separate critical services and protect origins"})]}),r.jsx("p",{className:"note",children:"Goal is to reduce blast radius and keep core APIs alive under load."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Lr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Use TLS everywhere. Authenticate identity, authorize actions. Keep secrets out of code. Put a gateway and rate limiting in front. Assume attackers will try."})]})]})]})})]})},Rf={Wrapper:ke.section`
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
    `},_f=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"monitoringObservability",title:"Monitoring and Observability",sub:"Logs, metrics, traces, APM, alerting, and the SLA, SLO, SLI trio."}),[]);return r.jsxs(Rf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Ms,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Ops"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Bm,{})}),r.jsx("h3",{className:"h3",children:"What is monitoring and what is observability"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Monitoring"})," tells you"," ",r.jsx("b",{children:"something is wrong"}),'. It answers "is the system healthy right now" using dashboards, charts, and alerts.']}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Observability"})," helps you explain"," ",r.jsx("b",{children:"why it is wrong"}),'. It answers "what happened inside the system" using logs, metrics, and traces with enough context to debug unknown issues.']}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Detect"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Understand"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Fix"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Prevent"})]}),r.jsx("p",{className:"note",children:"Most teams start with monitoring. Observability is what saves you during weird incidents."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Wm,{})}),r.jsx("h3",{className:"h3",children:"Logging"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Logs"})," are timestamped events. They tell you what happened at a specific moment, usually as text or JSON."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Good logs include"}),r.jsx("div",{className:"v",children:"request id, user id, service name, endpoint, latency, error stack"})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Types"}),r.jsx("div",{className:"v",children:"info, warn, error, debug (debug should be limited in production)"})]})]}),r.jsx("p",{className:"note",children:"Log volume can explode at scale, so structure logs and sample where needed."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(eo,{})}),r.jsx("h3",{className:"h3",children:"Metrics"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Metrics"})," are numeric measurements over time. They are perfect for dashboards and alerts because they are cheap and compact."]}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Traffic"})," - requests per second (RPS)"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Errors"})," - error rate, 4xx or 5xx"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Latency"})," - p50, p95, p99 response times"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Saturation"})," - CPU, memory, queue depth"]})]}),r.jsx("p",{className:"note",children:"Common mindset: use metrics to detect, logs and traces to explain."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(on,{})}),r.jsx("h3",{className:"h3",children:"Tracing"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Tracing"})," shows the full path of a request as it travels across services. It helps you find the slow step and the failing dependency."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Trace"}),r.jsx("div",{className:"v",children:"The full journey of one request."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Span"}),r.jsx("div",{className:"v",children:"One step in the trace, like DB call or HTTP call."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Trace id"}),r.jsx("div",{className:"v",children:"Unique id to correlate logs across services."})]})]}),r.jsx("p",{className:"note",children:"Tracing is gold in microservices because one request might touch 10 services."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ms,{})}),r.jsx("h3",{className:"h3",children:"APM"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"APM"})," means"," ",r.jsx("b",{children:"Application Performance Monitoring"}),". It is a tooling layer that combines metrics, traces, and sometimes profiling to show health, latency, error hotspots, and slow database queries."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Shows service maps and dependency graphs"}),r.jsx("li",{children:"Highlights slow endpoints and top errors"}),r.jsx("li",{children:"Often supports distributed tracing out of the box"})]}),r.jsx("p",{className:"note",children:"APM is the dashboard that turns raw signals into action."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Mm,{})}),r.jsx("h3",{className:"h3",children:"Alerting"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Alerts"})," notify humans when the system is unhealthy. Good alerts are actionable and tied to user impact."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Bad alert"}),r.jsx("div",{className:"v",children:'"CPU is 70%" without context, causes noise.'})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Good alert"}),r.jsx("div",{className:"v",children:'"p95 latency above 600 ms for 10 minutes on checkout API".'})]})]}),r.jsx("p",{className:"note",children:"Too many alerts leads to alert fatigue and missed real incidents."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(so,{})}),r.jsx("h3",{className:"h3",children:"SLAs, SLOs, SLIs"})]}),r.jsx("p",{className:"p",children:'These three are the standard language of reliability. They help define what "good service" means and how you measure it.'}),r.jsxs("div",{className:"trio",children:[r.jsxs("div",{className:"trioItem",children:[r.jsxs("div",{className:"tTop",children:[r.jsx("span",{className:"tIcon",children:r.jsx(Lr,{})}),r.jsx("div",{className:"tTitle",children:"SLA"})]}),r.jsxs("div",{className:"tSub",children:[r.jsx("b",{children:"SLA"})," is"," ",r.jsx("b",{children:"Service Level Agreement"}),". A promise to customers, often with penalties.",r.jsx("span",{className:"small",children:"Example: 99.9% uptime per month"})]})]}),r.jsxs("div",{className:"trioItem",children:[r.jsxs("div",{className:"tTop",children:[r.jsx("span",{className:"tIcon",children:r.jsx(so,{})}),r.jsx("div",{className:"tTitle",children:"SLO"})]}),r.jsxs("div",{className:"tSub",children:[r.jsx("b",{children:"SLO"})," is"," ",r.jsx("b",{children:"Service Level Objective"}),". Internal target that teams aim to maintain.",r.jsx("span",{className:"small",children:"Example: 99.95% successful requests"})]})]}),r.jsxs("div",{className:"trioItem",children:[r.jsxs("div",{className:"tTop",children:[r.jsx("span",{className:"tIcon",children:r.jsx(eo,{})}),r.jsx("div",{className:"tTitle",children:"SLI"})]}),r.jsxs("div",{className:"tSub",children:[r.jsx("b",{children:"SLI"})," is"," ",r.jsx("b",{children:"Service Level Indicator"}),". The measurement used to evaluate SLO.",r.jsx("span",{className:"small",children:"Example: error rate, latency, availability"})]})]})]}),r.jsx("p",{className:"note",children:"SLI is the metric. SLO is the target. SLA is the customer-facing commitment."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(Ms,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Metrics detect, logs explain, traces connect. SLA is external promise, SLO is internal target, SLI is the measurement."})]})]})]})})]})},Af={Wrapper:ke.section`
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
    `},Mf=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"performanceOptimization",title:"Performance Optimization",sub:"Connection pooling, compression, lazy loading, indexing, and batch processing."}),[]);return r.jsxs(Af.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(gs,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Speed"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Gm,{})}),r.jsx("h3",{className:"h3",children:"Connection pooling"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"connection pool"})," keeps a set of database connections open and reuses them across requests. It avoids the cost of opening and closing connections for every request."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Request"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Borrow connection"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Query"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Return connection"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Helps reduce latency under load because connection setup is expensive."}),r.jsx("li",{children:"Prevents DB overload by limiting max concurrent connections."}),r.jsx("li",{children:"Needs correct sizing. Too small causes queueing, too large can crush the DB."})]}),r.jsx("p",{className:"note",children:"If every service instance opens too many connections, the DB dies first."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Fa,{})}),r.jsx("h3",{className:"h3",children:"Compression"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Compression"})," reduces payload size sent over the network. Smaller payload usually means faster transfer and better throughput, but it costs CPU to compress and decompress."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Where"}),r.jsx("div",{className:"v",children:"HTTP responses, assets, logs, backups, message payloads."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Tradeoff"}),r.jsx("div",{className:"v",children:"Less bandwidth vs more CPU usage."})]})]}),r.jsx("p",{className:"note",children:"Use compression for large text payloads like JSON, HTML, CSS."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Om,{})}),r.jsx("h3",{className:"h3",children:"Lazy loading"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Lazy loading"})," means loading resources only when they are actually needed. This improves initial load time and reduces unnecessary work."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Frontend: load screens, images, and chunks only when user navigates."}),r.jsx("li",{children:"Backend: load heavy data only when requested, not on every request."}),r.jsx("li",{children:"Storage: fetch large blobs only when user opens them."})]}),r.jsx("p",{className:"note",children:"Goal is faster first response and smoother user experience."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fs,{})}),r.jsx("h3",{className:"h3",children:"Database indexing optimization"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"index"})," is a data structure that helps the database find rows faster. It trades extra storage and write cost for faster reads."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Good for"}),r.jsx("div",{className:"v",children:"Columns used in WHERE, JOIN, ORDER BY, GROUP BY."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Bad for"}),r.jsx("div",{className:"v",children:"Tables with heavy writes if you create too many indexes."})]})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Use indexes for common query filters and joins."}),r.jsx("li",{children:"Avoid indexing everything, writes become slow."}),r.jsx("li",{children:"Check query plan and slow query logs to decide."})]}),r.jsx("p",{className:"note",children:"Index is the most common fix for slow reads, but it has a write cost."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rr,{})}),r.jsx("h3",{className:"h3",children:"Batch processing"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Batch processing"})," means processing many items together instead of one by one. It reduces overhead like network calls, DB round trips, and per-request setup costs."]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"1000 events"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Queue"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Worker"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Write in batches"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Common in analytics, emails, notifications, and logs ingestion."}),r.jsx("li",{children:"Improves throughput by reducing overhead."}),r.jsx("li",{children:"Tradeoff: higher latency for a single item because it waits for the batch."})]}),r.jsx("p",{className:"note",children:"When throughput matters more than immediate response, batching is a cheat code."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(gs,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Reduce overhead first. Reuse connections, send less data, load only what you need, index smartly, batch heavy work."})]})]})]})})]})},Df={Wrapper:ke.section`
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
    `},Of=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"designPatternsSystemDesign",title:"Design Patterns in System Design",sub:"API Gateway, Sidecar, Saga, CQRS, Event Sourcing, and Strangler pattern."}),[]);return r.jsxs(Df.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(rr,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Architecture"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Um,{})}),r.jsx("h3",{className:"h3",children:"API Gateway pattern"})]}),r.jsxs("p",{className:"p",children:["An ",r.jsx("b",{children:"API Gateway"})," is a single entry point for clients. Instead of calling many services directly, the client calls the gateway, and the gateway routes requests to the right backend services."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why"}),r.jsx("div",{className:"v",children:"Simplifies client, hides internal services, centralizes auth and rate limiting."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Common features"}),r.jsx("div",{className:"v",children:"Authentication, authorization, routing, rate limiting, request validation, caching, response aggregation."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Tradeoff"}),r.jsx("div",{className:"v",children:"Can become a bottleneck or single point of failure if not scaled properly."})]})]}),r.jsx("p",{className:"note",children:"Example: mobile app hits one gateway endpoint, gateway calls user service and feed service."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Fa,{})}),r.jsx("h3",{className:"h3",children:"Sidecar pattern"})]}),r.jsxs("p",{className:"p",children:["A ",r.jsx("b",{children:"sidecar"})," is a helper component running next to your service instance. Your app talks to the sidecar locally, and sidecar handles cross-cutting concerns."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Common sidecar jobs: TLS, retries, circuit breaker, service discovery, metrics, logging."}),r.jsx("li",{children:"Each service instance gets its own sidecar instance."})]}),r.jsx("p",{className:"note",children:"Example: service mesh where Envoy runs as sidecar for every service."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xn,{})}),r.jsx("h3",{className:"h3",children:"Saga pattern"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"Saga"})," is used for distributed transactions across multiple services. Instead of one big database transaction, you do a sequence of local transactions, and if something fails, you run"," ",r.jsx("b",{children:"compensating actions"})," to undo work."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Problem it solves"}),r.jsx("div",{className:"v",children:"Multi-service workflows like order - payment - inventory - shipping."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Two styles"}),r.jsxs("div",{className:"v",children:[r.jsx("b",{children:"Choreography"})," (events) and"," ",r.jsx("b",{children:"Orchestration"})," (central coordinator)."]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Tradeoff"}),r.jsx("div",{className:"v",children:"More complexity. Needs idempotency, retries, and careful failure handling."})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Order created"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Payment charged"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Inventory reserved"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Ship order"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"If fail - compensate"})]}),r.jsx("p",{className:"note",children:"Compensation example: if shipping fails, release inventory and refund payment."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(uo,{})}),r.jsx("h3",{className:"h3",children:"CQRS"})]}),r.jsxs("p",{className:"p",children:[r.jsx("b",{children:"CQRS"})," means"," ",r.jsx("b",{children:"Command Query Responsibility Segregation"}),". It separates write operations (commands) from read operations (queries)."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Command side"}),r.jsx("div",{className:"v",children:"Handles writes, validates rules, updates state."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Query side"}),r.jsx("div",{className:"v",children:"Optimized for reads, can use separate read models or databases."})]})]}),r.jsx("p",{className:"note",children:"Useful when reads are heavy and need different schema than writes."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xo,{})}),r.jsx("h3",{className:"h3",children:"Event sourcing"})]}),r.jsxs("p",{className:"p",children:["In ",r.jsx("b",{children:"event sourcing"}),", you store changes as a sequence of events, not just the latest state. Current state is built by replaying events."]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:'Event examples: "OrderPlaced", "PaymentCaptured", "ItemShipped"'}),r.jsx("li",{children:"State is derived by replaying the event log."}),r.jsx("li",{children:"Great for audit trails and debugging."})]}),r.jsx("p",{className:"note",children:"Tradeoff: needs careful event versioning and replay performance planning."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(rr,{})}),r.jsx("h3",{className:"h3",children:"Strangler pattern"})]}),r.jsxs("p",{className:"p",children:["The ",r.jsx("b",{children:"strangler pattern"})," helps migrate a legacy system gradually. You do not rewrite everything at once. You build new services around the old system, route specific functionality to the new system, and slowly replace old parts."]}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Why"}),r.jsx("div",{className:"v",children:"Reduces risk. Allows gradual migration without a big-bang rewrite."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"How it looks"}),r.jsx("div",{className:"v",children:"A routing layer sends some routes to new code and the rest to legacy."})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Best use"}),r.jsx("div",{className:"v",children:"Large monolith migration to services or new architecture."})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Legacy app"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Add new service for feature A"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Route A to new"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Repeat for features"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Legacy shrinks"})]}),r.jsx("p",{className:"note",children:"This approach keeps the system live while you modernize it."})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(rr,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Gateway - one entry point. Sidecar - helper next to service. Saga - distributed workflow. CQRS - split reads and writes. Event sourcing - store events. Strangler - migrate safely."})]})]})]})})]})},Ff={Wrapper:ke.section`
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
    `},Bf=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"realWorldDesignExamples",title:"Real-world Design Examples",sub:"URL shortener, Twitter, WhatsApp, YouTube, Netflix, E-commerce, Chat system."}),[]);return r.jsxs(Ff.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(Hm,{})}),r.jsxs("div",{className:"text",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsx("div",{className:"inner",children:r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(ho,{})}),r.jsx("h3",{className:"h3",children:"Design URL Shortener"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Convert long URL into short unique ID"}),r.jsx("li",{children:"Store mapping in database"}),r.jsx("li",{children:"Redirect using HTTP 301 or 302"}),r.jsx("li",{children:"Handle high read traffic with caching"}),r.jsx("li",{children:"Generate IDs using base62 or hash"})]}),r.jsx("p",{className:"note",children:"Major challenge is ID generation and handling billions of redirects efficiently."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fu,{})}),r.jsx("h3",{className:"h3",children:"Design Twitter"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Post tweets and follow users"}),r.jsx("li",{children:"Generate home timeline"}),r.jsx("li",{children:"Use fan-out on write or fan-out on read"}),r.jsx("li",{children:"Store tweets in distributed database"}),r.jsx("li",{children:"Use cache for timelines"})]}),r.jsx("p",{className:"note",children:"Timeline generation is the core complexity."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Mp,{})}),r.jsx("h3",{className:"h3",children:"Design WhatsApp"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Real-time messaging using WebSocket"}),r.jsx("li",{children:"Store messages reliably"}),r.jsx("li",{children:"Deliver messages with acknowledgment"}),r.jsx("li",{children:"Support groups and media sharing"}),r.jsx("li",{children:"Handle online and offline states"})]}),r.jsx("p",{className:"note",children:"Low latency and message ordering are critical."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Dp,{})}),r.jsx("h3",{className:"h3",children:"Design YouTube"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Upload and store large video files"}),r.jsx("li",{children:"Transcode into multiple resolutions"}),r.jsx("li",{children:"Use CDN for global delivery"}),r.jsx("li",{children:"Store metadata in database"}),r.jsx("li",{children:"Recommendation system integration"})]}),r.jsx("p",{className:"note",children:"Video storage and bandwidth are the main scaling challenges."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Dp,{})}),r.jsx("h3",{className:"h3",children:"Design Netflix"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Stream content globally"}),r.jsx("li",{children:"Use CDN and edge caching"}),r.jsx("li",{children:"Adaptive bitrate streaming"}),r.jsx("li",{children:"Microservices for user and content management"}),r.jsx("li",{children:"Personalized recommendations"})]}),r.jsx("p",{className:"note",children:"Availability and global distribution are key."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Zm,{})}),r.jsx("h3",{className:"h3",children:"Design E-commerce System"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Product catalog and search"}),r.jsx("li",{children:"Shopping cart and checkout"}),r.jsx("li",{children:"Payment processing with ACID transactions"}),r.jsx("li",{children:"Inventory management"}),r.jsx("li",{children:"Order tracking and notifications"})]}),r.jsx("p",{className:"note",children:"Consistency is critical for payments and inventory."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Mp,{})}),r.jsx("h3",{className:"h3",children:"Design Chat System"})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Real-time messaging using persistent connection"}),r.jsx("li",{children:"Message queue for scaling"}),r.jsx("li",{children:"Store chat history in distributed database"}),r.jsx("li",{children:"Presence and typing indicators"}),r.jsx("li",{children:"Horizontal scaling with stateless servers"})]}),r.jsx("p",{className:"note",children:"Chat is a combination of low latency, reliability, and scale."})]})]})})})]})},Wf={Wrapper:ke.section`
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
    `},Uf=()=>{const[a,c]=ee.useState(!1),o=ee.useMemo(()=>({id:"interviewStrategy",title:"Interview Strategy",sub:"How to drive the interview: clarify, estimate, model traffic and storage, find bottlenecks, explain tradeoffs."}),[]);return r.jsxs(Wf.Wrapper,{id:o.id,children:[r.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>c(p=>!p),"aria-expanded":a,"aria-controls":`${o.id}-content`,children:[r.jsxs("div",{className:"left",children:[r.jsx("span",{className:"icon",children:r.jsx(so,{})}),r.jsxs("div",{className:"text",children:[r.jsxs("div",{className:"titleRow",children:[r.jsx("h2",{className:"title",children:o.title}),r.jsx("span",{className:"badge",children:"Must know"})]}),r.jsx("p",{className:"sub",children:o.sub})]})]}),r.jsx("span",{className:"chev",children:r.jsx(Qe,{})})]}),r.jsx("div",{id:`${o.id}-content`,className:`content ${a?"show":""}`,children:r.jsxs("div",{className:"inner",children:[r.jsxs("div",{className:"grid",children:[r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Qm,{})}),r.jsx("h3",{className:"h3",children:"Clarifying requirements"})]}),r.jsx("p",{className:"p",children:"Start by clarifying what we are building. Many candidates jump into architecture too fast. The best move is to lock scope first, then design."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Functional"}),r.jsxs("div",{className:"v",children:["What features are in scope.",r.jsx("span",{className:"small",children:"Example: login, create post, like, comment, follow"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Non-functional"}),r.jsxs("div",{className:"v",children:["Scale, latency, availability, consistency, cost.",r.jsx("span",{className:"small",children:"Example: 99.9% uptime, global users, 200 ms p95 API"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Constraints"}),r.jsxs("div",{className:"v",children:["Region, budget, compliance, rollout timeline.",r.jsx("span",{className:"small",children:"Example: must store data in India region, must support mobile first"})]})]})]}),r.jsxs("div",{className:"mini",children:[r.jsx("span",{className:"pill",children:"Scope"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Users"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"Core flows"}),r.jsx("span",{className:"dash",children:"-"}),r.jsx("span",{className:"pill",children:"SLO targets"})]}),r.jsx("p",{className:"note",children:"If requirements are unclear, your design will be random. Spend 1 to 2 minutes here."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(eo,{})}),r.jsx("h3",{className:"h3",children:"Estimation techniques"})]}),r.jsx("p",{className:"p",children:"Estimation is not about perfect numbers. It is about order of magnitude so you can pick correct architecture decisions."}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Use simple assumptions and round numbers."}),r.jsx("li",{children:"Prefer p95 or average, not best case."}),r.jsx("li",{children:"Keep units consistent - requests per second, bytes, seconds, days."}),r.jsx("li",{children:"Write your assumptions in the design so they are visible."})]}),r.jsx("p",{className:"note",children:"Interviewers care about your reasoning path more than the final number."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(Ms,{})}),r.jsx("h3",{className:"h3",children:"Traffic calculation"})]}),r.jsx("p",{className:"p",children:"Traffic means how many requests hit the system and how spiky it is. Always estimate peak load, not only daily average."}),r.jsxs("div",{className:"formula",children:[r.jsx("div",{className:"fTitle",children:"Basic formula"}),r.jsxs("div",{className:"fRow",children:[r.jsx("span",{className:"mono",children:"RPS"}),r.jsx("span",{className:"eq",children:"="}),r.jsx("span",{className:"mono",children:"requests per day"}),r.jsx("span",{className:"eq",children:"/"}),r.jsx("span",{className:"mono",children:"86400"})]}),r.jsx("div",{className:"small",children:"Peak RPS can be 2x to 10x average depending on product."})]}),r.jsxs("ul",{className:"list",children:[r.jsx("li",{children:"Estimate active users per day."}),r.jsx("li",{children:"Estimate actions per user per day."}),r.jsx("li",{children:"Convert to average RPS, then apply peak multiplier."})]}),r.jsx("p",{className:"note",children:"This drives load balancer, autoscaling, cache sizing, and database capacity."})]}),r.jsxs("div",{className:"card span12",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(fs,{})}),r.jsx("h3",{className:"h3",children:"Storage estimation"})]}),r.jsx("p",{className:"p",children:"Storage estimation tells you database type, sharding needs, backups, and cost. Separate hot data (frequent) from cold data (rare)."}),r.jsxs("div",{className:"kvs",children:[r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Row size estimate"}),r.jsxs("div",{className:"v",children:["Approx bytes per record.",r.jsx("span",{className:"small",children:"Example: user record 1 KB, post record 2 KB, message record 500 B"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Records per day"}),r.jsxs("div",{className:"v",children:["New records created daily.",r.jsx("span",{className:"small",children:"Example: 5 million messages per day"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Total per day"}),r.jsxs("div",{className:"v",children:[r.jsx("span",{className:"mono",children:"sizePerRecord * recordsPerDay"}),r.jsx("span",{className:"small",children:"Example: 500 B * 5M = 2.5 GB per day"})]})]}),r.jsxs("div",{className:"kv",children:[r.jsx("div",{className:"k",children:"Retention"}),r.jsxs("div",{className:"v",children:["How long data is kept.",r.jsx("span",{className:"small",children:"Example: keep messages 2 years, logs 30 days"})]})]})]}),r.jsx("p",{className:"note",children:"Add overhead for indexes, replication, backups. A quick safe factor is 2x to 4x."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(cu,{})}),r.jsx("h3",{className:"h3",children:"Bottleneck identification"})]}),r.jsx("p",{className:"p",children:"Bottleneck is the first component that breaks as load grows. Find it early and design around it."}),r.jsxs("ul",{className:"list",children:[r.jsxs("li",{children:[r.jsx("b",{children:"Database"})," - slow queries, hot partitions, lock contention"]}),r.jsxs("li",{children:[r.jsx("b",{children:"Network"})," - bandwidth limits, high latency to a region"]}),r.jsxs("li",{children:[r.jsx("b",{children:"CPU"})," - heavy serialization, encryption, image processing"]}),r.jsxs("li",{children:[r.jsx("b",{children:"External dependencies"})," - third-party APIs and rate limits"]})]}),r.jsx("p",{className:"note",children:"Fixes are usually cache, async queue, batching, sharding, or precompute."})]}),r.jsxs("div",{className:"card",children:[r.jsxs("div",{className:"cardTop",children:[r.jsx("span",{className:"cIcon",children:r.jsx(xn,{})}),r.jsx("h3",{className:"h3",children:"Tradeoff explanation"})]}),r.jsx("p",{className:"p",children:"Tradeoffs are the real scoring area. State the options, choose one, and explain why. Mention what you gain and what you lose."}),r.jsxs("div",{className:"trade",children:[r.jsxs("div",{className:"tRow",children:[r.jsx("div",{className:"tK",children:"Consistency"}),r.jsx("div",{className:"tV",children:"Strong consistency gives correctness but can increase latency and reduce availability."})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{className:"tK",children:"Cost"}),r.jsx("div",{className:"tV",children:"More replicas and regions increase reliability but cost more."})]}),r.jsxs("div",{className:"tRow",children:[r.jsx("div",{className:"tK",children:"Simplicity"}),r.jsx("div",{className:"tV",children:"Monolith is simpler early. Microservices help later but add ops complexity."})]})]}),r.jsx("p",{className:"note",children:'Best pattern: "Now - next - later". Start simple, then evolve when scale forces it.'})]})]}),r.jsxs("div",{className:"bottomNote",children:[r.jsx("div",{className:"bnIcon",children:r.jsx(po,{})}),r.jsxs("div",{className:"bnText",children:[r.jsx("div",{className:"bnTitle",children:"Quick memory"}),r.jsx("div",{className:"bnSub",children:"Clarify first, estimate second, design third, then explain bottlenecks and tradeoffs clearly."})]})]})]})})]})},$f=()=>r.jsxs(Hl.Wrapper,{children:[r.jsx(Hl.Header,{children:r.jsx(tf,{})}),r.jsxs(Hl.Main,{children:[r.jsxs("div",{className:"contentWrapper",children:[r.jsx(of,{}),r.jsx(df,{}),r.jsx(uf,{}),r.jsx(xf,{}),r.jsx(ff,{}),r.jsx(vf,{}),r.jsx(jf,{}),r.jsx(Nf,{}),r.jsx(kf,{}),r.jsx(Cf,{}),r.jsx(zf,{}),r.jsx(Ef,{}),r.jsx(Lf,{}),r.jsx(_f,{}),r.jsx(Mf,{}),r.jsx(Of,{}),r.jsx(Bf,{}),r.jsx(Uf,{})]}),r.jsx("div",{className:"footerWrapper",children:r.jsx(af,{})})]})]});Nx.createRoot(document.getElementById("root")).render(r.jsx(r.Fragment,{children:r.jsx($f,{})}));
