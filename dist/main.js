(()=>{var e={637:(e,n,t)=>{"use strict";function o(){console.log("generating contact elements...")}t.r(n),t.d(n,{generateContactElements:()=>o}),console.log("contact.js is running")},666:(e,n,t)=>{"use strict";function o(){console.log("generating home elements...")}t.r(n),t.d(n,{generateHomeElements:()=>o}),console.log("home.js is running")},83:(e,n,t)=>{"use strict";function o(){console.log("generating menu elements...")}t.r(n),t.d(n,{generateMenuElements:()=>o}),console.log("menu.js is running")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var l=n[o]={exports:{}};return e[o](l,l.exports,t),l.exports}t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{const e=t(666),n=t(83),o=t(637);function r(){console.log("-------"),console.log("clearing the elemnts in content..."),document.getElementById("content").innerHTML=""}console.log("index.js is running..."),e.generateHomeElements(),document.getElementById("home-li").addEventListener("pointerdown",(()=>{r(),e.generateHomeElements()})),document.getElementById("menu-li").addEventListener("pointerdown",(()=>{r(),n.generateMenuElements()})),document.getElementById("contact-li").addEventListener("pointerdown",(()=>{r(),o.generateContactElements()}))})()})();