!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueBalloons=e():o.VueBalloons=e()}(this,function(){return function(o){function e(t){if(n[t])return n[t].exports;var l=n[t]={exports:{},id:t,loaded:!1};return o[t].call(l.exports,l,l.exports,e),l.loaded=!0,l.exports}var n={};return e.m=o,e.c=n,e.p="",e(0)}([function(o,e,n){"use strict";function t(o){return o&&o.__esModule?o:{default:o}}Object.defineProperty(e,"__esModule",{value:!0});var l=n(4),a=t(l);e.default=a.default},function(o,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vue-balloons",props:["text"],data:function(){return{fly:!1}},methods:{getBallonClasses:function(o){var e=" "===o?"empty":"";return e+=" balloon-state--"+(Math.floor(9*Math.random())+1).toString()},onMouseover:function(){this.fly=!0},onMouseleave:function(){this.fly=!1}}}},function(o,e,n){e=o.exports=n(3)(),e.push([o.id,'.vue-balloons{display:inline}.vue-balloons .balloon{transition:.2s ease-in-out;display:inline-block;text-align:center}.vue-balloons .balloon.empty{width:.3em}.vue-balloons .balloon.empty:before{content:""}.vue-balloons .balloon:before{content:"\\25B4";font-size:.2em;display:none;position:absolute;bottom:0;margin-bottom:-.6em;left:50%;z-index:-1}.vue-balloons.fly .balloon{transition:1s ease-in-out;border-radius:1em 1em;width:1em;margin-right:3px;position:relative;color:#fff}.vue-balloons.fly .balloon.balloon-state--1{background-color:#ff0043;animation:balloon 2s ease-in-out infinite}.vue-balloons.fly .balloon.balloon-state--1:before{color:#ff0043}.vue-balloons.fly .balloon.balloon-state--2{background-color:#ffde00;animation:balloon 4s ease-in-out infinite}.vue-balloons.fly .balloon.balloon-state--2:before{color:#ffde00}.vue-balloons.fly .balloon.balloon-state--3{background-color:#6599ff;animation:balloon 1s ease-in-out infinite}.vue-balloons.fly .balloon.balloon-state--3:before{color:#6599ff}.vue-balloons.fly .balloon.balloon-state--4{background-color:#f90;animation:balloon 7s ease-in-out infinite}.vue-balloons.fly .balloon.balloon-state--4:before{color:#f90}.vue-balloons.fly .balloon.balloon-state--5{background-color:#903;animation:balloon 1.2s ease-in-out infinite}.vue-balloons.fly .balloon.balloon-state--5:before{color:#903}.vue-balloons.fly .balloon.balloon-state--6{background-color:#60c;animation:balloon 2.5s ease-in-out infinite}.vue-balloons.fly .balloon.balloon-state--6:before{color:#60c}.vue-balloons.fly .balloon.balloon-state--7{background-color:#36c;animation:balloon 1.8s ease-in-out infinite}.vue-balloons.fly .balloon.balloon-state--7:before{color:#36c}.vue-balloons.fly .balloon.balloon-state--8{background-color:#339;animation:balloon 2.6s ease-in-out infinite}.vue-balloons.fly .balloon.balloon-state--8:before{color:#339}.vue-balloons.fly .balloon.balloon-state--9{background-color:tomato;animation:balloon 5s ease-in-out infinite}.vue-balloons.fly .balloon.balloon-state--9:before{color:tomato}.vue-balloons.fly .balloon:before{display:block}@keyframes balloon{0%,to{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-.2em) rotate(4deg)}}',""])},function(o,e){o.exports=function(){var o=[];return o.toString=function(){for(var o=[],e=0;e<this.length;e++){var n=this[e];n[2]?o.push("@media "+n[2]+"{"+n[1]+"}"):o.push(n[1])}return o.join("")},o.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var t={},l=0;l<this.length;l++){var a=this[l][0];"number"==typeof a&&(t[a]=!0)}for(l=0;l<e.length;l++){var r=e[l];"number"==typeof r[0]&&t[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),o.push(r))}},o}},function(o,e,n){var t,l;n(7),t=n(1);var a=n(5);l=t=t||{},"object"!=typeof t.default&&"function"!=typeof t.default||(l=t=t.default),"function"==typeof l&&(l=l.options),l.render=a.render,l.staticRenderFns=a.staticRenderFns,o.exports=t},function(o,e){o.exports={render:function(){var o=this,e=o.$createElement,n=o._self._c||e;return n("div",{staticClass:"vue-balloons",class:{fly:o.fly},on:{mouseover:o.onMouseover,mouseleave:o.onMouseleave}},o._l(o.text.split(""),function(e){return n("span",{staticClass:"balloon",class:o.getBallonClasses(e)},[o._v(o._s(e))])}))},staticRenderFns:[]}},function(o,e,n){function t(o,e){for(var n=0;n<o.length;n++){var t=o[n],l=b[t.id];if(l){l.refs++;for(var a=0;a<l.parts.length;a++)l.parts[a](t.parts[a]);for(;a<t.parts.length;a++)l.parts.push(i(t.parts[a],e))}else{for(var r=[],a=0;a<t.parts.length;a++)r.push(i(t.parts[a],e));b[t.id]={id:t.id,refs:1,parts:r}}}}function l(o){for(var e=[],n={},t=0;t<o.length;t++){var l=o[t],a=l[0],r=l[1],s=l[2],i=l[3],f={css:r,media:s,sourceMap:i};n[a]?n[a].parts.push(f):e.push(n[a]={id:a,parts:[f]})}return e}function a(o,e){var n=p(),t=y[y.length-1];if("top"===o.insertAt)t?t.nextSibling?n.insertBefore(e,t.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==o.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function r(o){o.parentNode.removeChild(o);var e=y.indexOf(o);e>=0&&y.splice(e,1)}function s(o){var e=document.createElement("style");return e.type="text/css",a(o,e),e}function i(o,e){var n,t,l;if(e.singleton){var a=m++;n=v||(v=s(e)),t=f.bind(null,n,a,!1),l=f.bind(null,n,a,!0)}else n=s(e),t=u.bind(null,n),l=function(){r(n)};return t(o),function(e){if(e){if(e.css===o.css&&e.media===o.media&&e.sourceMap===o.sourceMap)return;t(o=e)}else l()}}function f(o,e,n,t){var l=n?"":t.css;if(o.styleSheet)o.styleSheet.cssText=h(e,l);else{var a=document.createTextNode(l),r=o.childNodes;r[e]&&o.removeChild(r[e]),r.length?o.insertBefore(a,r[e]):o.appendChild(a)}}function u(o,e){var n=e.css,t=e.media,l=e.sourceMap;if(t&&o.setAttribute("media",t),l&&(n+="\n/*# sourceURL="+l.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */"),o.styleSheet)o.styleSheet.cssText=n;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(n))}}var b={},c=function(o){var e;return function(){return"undefined"==typeof e&&(e=o.apply(this,arguments)),e}},d=c(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),p=c(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0,y=[];o.exports=function(o,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=l(o);return t(n,e),function(o){for(var a=[],r=0;r<n.length;r++){var s=n[r],i=b[s.id];i.refs--,a.push(i)}if(o){var f=l(o);t(f,e)}for(var r=0;r<a.length;r++){var i=a[r];if(0===i.refs){for(var u=0;u<i.parts.length;u++)i.parts[u]();delete b[i.id]}}}};var h=function(){var o=[];return function(e,n){return o[e]=n,o.filter(Boolean).join("\n")}}()},function(o,e,n){var t=n(2);"string"==typeof t&&(t=[[o.id,t,""]]);n(6)(t,{});t.locals&&(o.exports=t.locals)}])});