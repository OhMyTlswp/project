!function(e){var t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={i:s,l:!1,exports:{}};return e[s].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);r(1),r(2),r(3),r(4),r(5)},function(e,t,r){},function(e,t){class r extends HTMLElement{constructor(){super()}render(){this.innerHTML='<img class="story-avatar" draggable="false" src="'+this.getAttribute("src")+'">'}connectedCallback(){this.render()}static get observedAttributes(){return["src","data-stories","data-user"]}attributeChangedCallback(e,t,r){e=e,t=t,r=r,this.render()}}customElements.define("story-preview",r)},function(e,t){class r extends HTMLElement{render(){this.innerHTML='<div class="story"><progress-bar fullness="'+this.getAttribute("fullness")+'" quantity="'+this.getAttribute("quantity")+'" story-selected="'+this.getAttribute("story-selected")+'"></progress-bar><img src="'+this.getAttribute("src")+'" draggable="false" class="story-img"></div>'}connectedCallback(){this.render()}static get observedAttributes(){return["quantity","story-selected","src","fullness"]}attributeChangedCallback(e,t,r){e=e,t=t,r=r,this.render()}}customElements.define("story-view",r)},function(e,t){class r extends HTMLElement{render(){for(var e="",t=0;t<+this.getAttribute("quantity");t++)t<+this.getAttribute("story-selected")&&(e+='<div class="progress-bar"><div class="progress full"></div></div>'),t===+this.getAttribute("story-selected")&&(e+='<div class="progress-bar"><div style="width:'+this.getAttribute("fullness")+'%" class="progress"></div></div>'),t>+this.getAttribute("story-selected")&&(e+='<div class="progress-bar"><div class="progress"></div></div>');this.innerHTML='<div class="progress-bar-wr">'+e+"</div>"}connectedCallback(){this.render()}static get observedAttributes(){return["quantity","story-selected","fullness"]}attributeChangedCallback(e,t,r){e=e,t=t,r=r,this.render()}}customElements.define("progress-bar",r)},function(e,t,r){"use strict";document.body.innerHTML='<div class="stories-avatars-wr"></div><div class="story-wr close"></div>';var s,n=document.querySelector(".stories-avatars-wr"),i=document.querySelector(".story-wr"),o=[{storyAvatar:"img/avatars/CyberDima.jpg",stories:["img/dbaner.png","img/cs.jpg","img/ds.jpg"]},{storyAvatar:"img/avatars/186452.jpg",stories:["img/Krossovki.jpg","img/186452.jpg","img/30.jpg","img/dbaner.png"]},{storyAvatar:"img/avatars/a3.jpg",stories:["img/nightCity.png","img/cyb.jpg"]}];function a(e,t){i.classList.remove("close"),i.innerHTML='<story-view src="'+e[t]+'" fullness="0" story-selected="'+t+'" quantity="'+e.length+'" stories ></story-view>'}function u(e,t){var r,n,i;s=!1;var c=0,l=0;function d(){s=!0,document.querySelector(".story-wr").innerHTML="",document.querySelector(".story-wr").classList.add("close"),c=0,l=0,clearInterval(i),document.querySelector(".story-wr").removeEventListener("mousedown",d)}function g(){0===event.button&&(r=0,n=setInterval(()=>{r+=.01},1),s=!0,event.stopPropagation())}function v(){0===event.button&&(clearInterval(n),r>.5?s=!1:(s=!1,l=100),event.stopPropagation()),document.querySelector(".story").removeEventListener("mouseup",v)}a(e,c),document.querySelector(".story-img").onload=function(){i=setInterval((function(){var r=document.querySelector(".story"),n=document.querySelector(".story-wr");if(n.addEventListener("mousedown",d),r.addEventListener("mousedown",g),n.addEventListener("mouseup",v),e.length===c)return d(),void((t+=1)<o.length&&u(o[t].stories,t));s||(l+=.1,document.querySelector("progress-bar").setAttribute("fullness",l),l>100&&(l=0,(c+=1)<e.length&&a(e,c)))}),1)}}!function(){for(var e="",t=0;t<o.length;t++){var r=o[t].storyAvatar;e+='<story-preview class="story-avatar-wr" data-user="'+t+'" data-stories="'+[o[t].stories]+'" src="'+r+'"></story-preview>'}n.innerHTML=e}(),n.addEventListener("click",(function(e){var t=e.target.closest("story-preview");t&&u(t.getAttribute("data-stories").split(","),+t.getAttribute("data-user"))}))}]);