"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(t,o){"function"==typeof define&&define.amd?define(["jquery"],function(e){return o(e,t,t.document)}):"object"===("undefined"==typeof module?"undefined":_typeof(module))&&module.exports?module.exports=o(require("jquery"),t,t.document):o(jQuery,t,t.document)}("undefined"!=typeof window?window:void 0,function(r,i,s,t){var u,l,h,f,d,p,m=[],g=[],v=[],y=[],S=0,a=0,w=1,b=!1,E=r(i),H=E.scrollTop(),M=!1,x=!1,T=!1,D=!1,I=[],L=(new Date).getTime(),c=!0,N=!1,k=0,O="onwheel"in s?"wheel":s.onmousewheel!==t?"mousewheel":"DOMMouseScroll",z={section:".section",sectionName:"section-name",interstitialSection:"",easing:"easeOutExpo",scrollSpeed:100,offset:0,scrollbars:!0,target:"html,body",standardScrollElements:!1,setHeights:!0,overflowScroll:!0,updateHash:!0,touchScroll:!0,before:function(){},after:function(){},afterResize:function(){},afterRender:function(){}};function R(){return i.innerHeight+z.offset}function j(e,t,o,n){if(a===e&&(o=!1),!0===D)return!0;if(g[e]){if(!(M=!1)===c&&(c=!1,z.afterRender()),o&&"function"==typeof z.before&&!1===z.before(e,v))return!0;if(w=1,k=e?m[e]:0,!1===c&&e<a&&!1===n&&y[e]&&(h=R(),w=parseInt(v[e].outerHeight()/h),k=parseInt(m[e])+(v[e].outerHeight()-h)),z.updateHash&&z.sectionName&&(!0!==c||0!==e))if(history.pushState)try{history.replaceState(null,null,g[e])}catch(e){i.console&&console.warn("Scrollify warning: Page must be hosted to manipulate the hash value.")}else i.location.hash=g[e];if(a=e,t)r(z.target).stop().scrollTop(k),o&&z.after(e,v);else{if(x=!0,r().velocity?r(z.target).stop().velocity("scroll",{duration:z.scrollSpeed,easing:z.easing,offset:k,mobileHA:!1}):r(z.target).stop().animate({scrollTop:k},z.scrollSpeed,z.easing),i.location.hash.length&&z.sectionName&&i.console)try{r(i.location.hash).length&&console.warn("Scrollify warning: ID matches hash value - this will cause the page to anchor.")}catch(e){}r(z.target).promise().done(function(){c=x=!1,o&&z.after(e,v)})}}}function C(r){function e(e){for(var t=0,o=r.slice(Math.max(r.length-e,1)),n=0;n<o.length;n++)t+=o[n];return Math.ceil(t/e)}var t=e(10);return e(70)<=t}function e(e){function t(e){r().velocity?r(z.target).stop().velocity("scroll",{duration:z.scrollSpeed,easing:z.easing,offset:e,mobileHA:!1}):r(z.target).stop().animate({scrollTop:e},z.scrollSpeed,z.easing)}function o(e){e&&(H=E.scrollTop());var t=z.section;y=[],z.interstitialSection.length&&(t+=","+z.interstitialSection),!1===z.scrollbars&&(z.overflowScroll=!1),h=R(),r(t).each(function(e){var t=r(this);z.setHeights?t.is(z.interstitialSection)?y[e]=!1:t.css("height","auto").outerHeight()<h||"hidden"===t.css("overflow")?(t.css({height:h}),y[e]=!1):(t.css({height:t.outerHeight()}),z.overflowScroll?y[e]=!0:y[e]=!1):t.outerHeight()<h||!1===z.overflowScroll?y[e]=!1:y[e]=!0}),e&&E.scrollTop(H)}function n(e){var o=z.section;z.interstitialSection.length&&(o+=","+z.interstitialSection),m=[],g=[],v=[],r(o).each(function(e){var t=r(this);m[e]=0<e?parseInt(t.offset().top)+z.offset:parseInt(t.offset().top),z.sectionName&&t.data(z.sectionName)?g[e]="#"+t.data(z.sectionName).toString().replace(/ /g,"-"):!1===t.is(z.interstitialSection)?g[e]="#"+(e+1):(g[e]="#",e===r(o).length-1&&1<e&&(m[e]=m[e-1]+(parseInt(r(r(o)[e-1]).outerHeight())-parseInt(r(i).height()))+parseInt(t.outerHeight()))),v[e]=t;try{r(g[e]).length&&i.console&&console.warn("Scrollify warning: Section names can't match IDs - this will cause the browser to anchor.")}catch(e){}i.location.hash===g[e]&&(S=e,b=!0)}),!0===e&&j(S,!1,!1,!1)}function a(){return!y[S]||!((H=E.scrollTop())>parseInt(m[S]))}function c(){return!y[S]||(H=E.scrollTop(),h=R(),!(H<parseInt(m[S])+(v[S].outerHeight()-h)-28))}N=!0,r.easing.easeOutExpo=function(e,t,o,n,r){return t==r?o+n:n*(1-Math.pow(2,-10*t/r))+o},d={touches:{touchstart:{y:-1,x:-1},touchmove:{y:-1,x:-1},touchend:!(f={handleMousedown:function(){if(!0===D)return!0;T=M=!1},handleMouseup:function(){if(!0===D)return!0;M=!0,T&&f.calculateNearest(!1,!0)},handleScroll:function(){if(!0===D)return!0;u&&clearTimeout(u),u=setTimeout(function(){if(!(T=!0)===M)return!1;M=!1,f.calculateNearest(!1,!0)},200)},calculateNearest:function(e,t){H=E.scrollTop();for(var o,n=1,r=m.length,i=0,s=Math.abs(m[0]-H);n<r;n++)(o=Math.abs(m[n]-H))<s&&(s=o,i=n);(c()&&S<i||a())&&j(S=i,e,t,!1)},wheelHandler:function(e){if(!0===D)return!0;if(z.standardScrollElements&&(r(e.target).is(z.standardScrollElements)||r(e.target).closest(z.standardScrollElements).length))return!0;y[S]||e.preventDefault();var t,o=(new Date).getTime();t=(e=e||i.event).originalEvent?e.originalEvent.wheelDelta||-e.originalEvent.deltaY||-e.originalEvent.detail:e.wheelDelta||-e.deltaY||-e.detail;var n=Math.max(-1,Math.min(1,t));if(149<I.length&&I.shift(),I.push(Math.abs(t)),200<o-L&&(I=[]),L=o,x)return!1;if(n<0){if(S<m.length-1&&c()){if(!C(I))return!1;e.preventDefault(),j(++S,!(x=!0),!0,!1)}}else if(0<n&&0<S&&a()){if(!C(I))return!1;e.preventDefault(),j(--S,!(x=!0),!0,!1)}},keyHandler:function(e){return!0===D||!1===s.activeElement.readOnly||(!(!z.standardScrollElements||!r(e.target).is(z.standardScrollElements)&&!r(e.target).closest(z.standardScrollElements).length)||!0!==x&&void(38==e.keyCode||33==e.keyCode?0<S&&a()&&(e.preventDefault(),j(--S,!1,!0,!1)):40!=e.keyCode&&34!=e.keyCode||S<m.length-1&&c()&&(e.preventDefault(),j(++S,!1,!0,!1))))},init:function(){z.scrollbars?(E.on("mousedown",f.handleMousedown),E.on("mouseup",f.handleMouseup),E.on("scroll",f.handleScroll)):r("body").css({overflow:"hidden"}),i.addEventListener(O,f.wheelHandler,{passive:!1}),E.on("keydown",f.keyHandler)}}),direction:"undetermined"},options:{distance:30,timeGap:800,timeStamp:(new Date).getTime()},touchHandler:function(e){if(!0===D)return!0;if(z.standardScrollElements&&(r(e.target).is(z.standardScrollElements)||r(e.target).closest(z.standardScrollElements).length))return!0;var t;if(void 0!==e&&void 0!==e.touches)switch(t=e.touches[0],e.type){case"touchstart":d.touches.touchstart.y=t.pageY,d.touches.touchmove.y=-1,d.touches.touchstart.x=t.pageX,d.touches.touchmove.x=-1,d.options.timeStamp=(new Date).getTime(),d.touches.touchend=!1;case"touchmove":d.touches.touchmove.y=t.pageY,d.touches.touchmove.x=t.pageX,d.touches.touchstart.y!==d.touches.touchmove.y&&Math.abs(d.touches.touchstart.y-d.touches.touchmove.y)>Math.abs(d.touches.touchstart.x-d.touches.touchmove.x)&&(e.preventDefault(),d.touches.direction="y",d.options.timeStamp+d.options.timeGap<(new Date).getTime()&&0==d.touches.touchend&&(d.touches.touchend=!0,-1<d.touches.touchstart.y&&Math.abs(d.touches.touchmove.y-d.touches.touchstart.y)>d.options.distance&&(d.touches.touchstart.y<d.touches.touchmove.y?d.up():d.down())));break;case"touchend":!1===d.touches[e.type]&&(d.touches[e.type]=!0,-1<d.touches.touchstart.y&&-1<d.touches.touchmove.y&&"y"===d.touches.direction&&(Math.abs(d.touches.touchmove.y-d.touches.touchstart.y)>d.options.distance&&(d.touches.touchstart.y<d.touches.touchmove.y?d.up():d.down()),d.touches.touchstart.y=-1,d.touches.touchstart.x=-1,d.touches.direction="undetermined"))}},down:function(){S<m.length&&(c()&&S<m.length-1?j(++S,!1,!0,!1):(h=R(),Math.floor(v[S].height()/h)>w?(t(parseInt(m[S])+h*w),w+=1):t(parseInt(m[S])+(v[S].outerHeight()-h))))},up:function(){0<=S&&(a()&&0<S?j(--S,!1,!0,!1):2<w?(h=R(),w-=1,t(parseInt(m[S])+h*w)):(w=1,t(parseInt(m[S]))))},init:function(){if(s.addEventListener&&z.touchScroll){var e={passive:!1};s.addEventListener("touchstart",d.touchHandler,e),s.addEventListener("touchmove",d.touchHandler,e),s.addEventListener("touchend",d.touchHandler,e)}}},p={refresh:function(e,t){clearTimeout(l),l=setTimeout(function(){o(!0),n(t,!1),e&&z.afterResize()},400)},handleUpdate:function(){p.refresh(!1,!1)},handleResize:function(){p.refresh(!0,!1)},handleOrientation:function(){p.refresh(!0,!0)}},z=r.extend(z,e),o(!1),n(!1,!0),!0===b?j(S,!1,!0,!0):setTimeout(function(){f.calculateNearest(!0,!1)},200),m.length&&(f.init(),d.init(),E.on("resize",p.handleResize),s.addEventListener&&i.addEventListener("orientationchange",p.handleOrientation,!1))}function o(e,t){for(var o=g.length;0<=o;o--)"string"==typeof e?g[o]===e&&j(S=o,t,!0,!0):o===e&&j(S=o,t,!0,!0)}return e.move=function(e){if(e===t)return!1;e.originalEvent&&(e=r(this).attr("href")),o(e,!1)},e.instantMove=function(e){if(e===t)return!1;o(e,!0)},e.next=function(){S<g.length&&j(S+=1,!1,!0,!0)},e.previous=function(){0<S&&j(S-=1,!1,!0,!0)},e.instantNext=function(){S<g.length&&j(S+=1,!0,!0,!0)},e.instantPrevious=function(){0<S&&j(S-=1,!0,!0,!0)},e.destroy=function(){if(!N)return!1;z.setHeights&&r(z.section).each(function(){r(this).css("height","auto")}),E.off("resize",p.handleResize),z.scrollbars&&(E.off("mousedown",f.handleMousedown),E.off("mouseup",f.handleMouseup),E.off("scroll",f.handleScroll)),i.removeEventListener(O,f.wheelHandler),E.off("keydown",f.keyHandler),s.addEventListener&&z.touchScroll&&(s.removeEventListener("touchstart",d.touchHandler,!1),s.removeEventListener("touchmove",d.touchHandler,!1),s.removeEventListener("touchend",d.touchHandler,!1)),m=[],g=[],v=[],y=[],N=!(c=!0)},e.update=function(){if(!N)return!1;p.handleUpdate()},e.current=function(){return v[S]},e.currentIndex=function(){return S},e.disable=function(){D=!0},e.enable=function(){D=!1,N&&f.calculateNearest(!1,!1)},e.isDisabled=function(){return D},e.setOptions=function(e){if(!N)return!1;"object"===_typeof(e)?(z=r.extend(z,e),p.handleUpdate()):i.console&&console.warn("Scrollify warning: setOptions expects an object.")},r.scrollify=e});