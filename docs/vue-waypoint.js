!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueWaypoint=e():t.VueWaypoint=e()}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.removeObserver=e.addObserver=void 0,n(4);var r=n(1),o={},i=function(t,e){return t.forEach(function(t){return s(t,e)})},s=function(t,e){return e((0,r.mapEntry)(t))},c=function(t,e){return new window.IntersectionObserver(t,e)},u=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,r=c(function(t,n){return i(t,e)},n);return r.observe(t),r},a=function(t,e){return t.unobserve(e)};e.addObserver=u,e.removeObserver=a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return t?"in":"out"},o=function(t,e){return t.top<e.top?"top":t.left>e.left?"right":t.top>e.top?"bottom":t.left<e.left?"left":void 0},i=function(t){return t._waypointData},s=function(t,e){var n=i(t);return void 0!==n?n:e},c=function(t){var e=t.boundingClientRect,n=t.isIntersecting,i=t.target,c=s(i,e);return i._waypointData=e,{el:i,going:r(n),direction:o(e,c),_entry:t}};e.going=r,e.GOING_IN="in",e.GOING_OUT="out",e.direction=o,e.DIRECTION_TOP="top",e.DIRECTION_RIGHT="right",e.DIRECTION_BOTTOM="bottom",e.DIRECTION_LEFT="left",e.mapEntry=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=n(1),s=n(0),c={install:function(t){(0,o.default)(t),t.prototype.$addObserver=s.addObserver,t.prototype.$removeObserver=s.removeObserver,t.prototype.$waypointMap={GOING_IN:i.GOING_IN,GOING_OUT:i.GOING_OUT,DIRECTION_TOP:i.DIRECTION_TOP,DIRECTION_RIGHT:i.DIRECTION_RIGHT,DIRECTION_BOTTOM:i.DIRECTION_BOTTOM,DIRECTION_LEFT:i.DIRECTION_LEFT}},addObserver:s.addObserver,removeObserver:s.removeObserver,map:{GOING_IN:i.GOING_IN,GOING_OUT:i.GOING_OUT,DIRECTION_TOP:i.DIRECTION_TOP,DIRECTION_RIGHT:i.DIRECTION_RIGHT,DIRECTION_BOTTOM:i.DIRECTION_BOTTOM,DIRECTION_LEFT:i.DIRECTION_LEFT}};e.default=c,"undefined"!=typeof window&&window.Vue&&window.Vue.use(c)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),o=function(t){t.directive("waypoint",{inserted:function(t,e,n){var o=e.value,i=o.active,s=o.callback,c=o.options;if(i){var u=(0,r.addObserver)(t,s,c);n._waypoint=u}},updated:function(t,e,n,o){var i=e.value,s=i.active,c=i.callback,u=i.options;if(void 0!==o._waypoint&&(0,r.removeObserver)(o._waypoint,t),s){var a=(0,r.addObserver)(t,c,u);n._waypoint=a}},unbind:function(t,e,n){void 0!==n._waypoint&&(0,r.removeObserver)(n._waypoint,t)}})};e.default=o},function(t,e){!function(t,e){"use strict";function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||h(),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,r=this.intersectionRect,o=r.width*r.height;this.intersectionRatio=n?o/n:this.isIntersecting?1:0}function r(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=i(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function o(){return t.performance&&performance.now&&performance.now()}function i(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}function s(t,e,n,r){"function"==typeof t.addEventListener?t.addEventListener(e,n,r||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function c(t,e,n,r){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,r||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function u(t,e){var n=Math.max(t.top,e.top),r=Math.min(t.bottom,e.bottom),o=Math.max(t.left,e.left),i=Math.min(t.right,e.right),s=i-o,c=r-n;return s>=0&&c>=0&&{top:n,bottom:r,left:o,right:i,width:s,height:c}}function a(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):h()}function h(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function f(t,e){for(var n=e;n;){if(n==t)return!0;n=p(n)}return!1}function p(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)return void("isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}));var d=[];r.prototype.THROTTLE_TIMEOUT=100,r.prototype.POLL_INTERVAL=null,r.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},r.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},r.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},r.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},r.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},r.prototype._parseRootMargin=function(t){var e=t||"0px",n=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},r.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},r.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,c(t,"resize",this._checkForIntersections,!0),c(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},r.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():h();this._observationTargets.forEach(function(r){var i=r.element,s=a(i),c=this._rootContainsTarget(i),u=r.entry,h=t&&c&&this._computeTargetAndRootIntersection(i,e),f=r.entry=new n({time:o(),target:i,boundingClientRect:s,rootBounds:e,intersectionRect:h});u?t&&c?this._hasCrossedThreshold(u,f)&&this._queuedEntries.push(f):u&&u.isIntersecting&&this._queuedEntries.push(f):this._queuedEntries.push(f)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},r.prototype._computeTargetAndRootIntersection=function(n,r){if("none"!=t.getComputedStyle(n).display){for(var o=a(n),i=o,s=p(n),c=!1;!c;){var h=null,f=1==s.nodeType?t.getComputedStyle(s):{};if("none"==f.display)return;if(s==this.root||s==e?(c=!0,h=r):s!=e.body&&s!=e.documentElement&&"visible"!=f.overflow&&(h=a(s)),h&&!(i=u(h,i)))break;s=p(s)}return i}},r.prototype._getRootRect=function(){var t;if(this.root)t=a(this.root);else{var n=e.documentElement,r=e.body;t={top:0,left:0,right:n.clientWidth||r.clientWidth,width:n.clientWidth||r.clientWidth,bottom:n.clientHeight||r.clientHeight,height:n.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(t)},r.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},r.prototype._hasCrossedThreshold=function(t,e){var n=t&&t.isIntersecting?t.intersectionRatio||0:-1,r=e.isIntersecting?e.intersectionRatio||0:-1;if(n!==r)for(var o=0;o<this.thresholds.length;o++){var i=this.thresholds[o];if(i==n||i==r||i<n!=i<r)return!0}},r.prototype._rootIsInDom=function(){return!this.root||f(e,this.root)},r.prototype._rootContainsTarget=function(t){return f(this.root||e,t)},r.prototype._registerInstance=function(){d.indexOf(this)<0&&d.push(this)},r.prototype._unregisterInstance=function(){var t=d.indexOf(this);-1!=t&&d.splice(t,1)},t.IntersectionObserver=r,t.IntersectionObserverEntry=n}(window,document)}])});