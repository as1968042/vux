!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.vuxShake=e():t.vuxShake=e()}(this,function(){return function(t){function e(o){if(s[o])return s[o].exports;var i=s[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var s={};return e.m=t,e.c=s,e.p="",e(0)}([function(t,e,s){t.exports=s(4)},function(t,e,s){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(2),n=o(i);e["default"]={props:{stop:Boolean,threshold:{type:Number,"default":15},timeout:{type:Number,"default":1e3}},ready:function(){var t=this;this._shake=new n["default"]({threshold:t.threshold,timeout:t.timeout}),this._handler=function(){t.stop||t.$emit("on-shake")},window.addEventListener("shake",this._handler,!1),this._shake.start()},beforeDestroy:function(){window.removeEventListener("shake",this._handler,!1)}}},function(t,e,s){var o;!function(i,n){o=function(){return n(i,i.document)}.call(e,s,e,t),!(void 0!==o&&(t.exports=o))}("undefined"!=typeof window?window:this,function(t,e){"use strict";function s(s){if(this.hasDeviceMotion="ondevicemotion"in t,this.options={threshold:15,timeout:1e3},"object"==typeof s)for(var o in s)s.hasOwnProperty(o)&&(this.options[o]=s[o]);if(this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null,"function"==typeof e.CustomEvent)this.event=new e.CustomEvent("shake",{bubbles:!0,cancelable:!0});else{if("function"!=typeof e.createEvent)return!1;this.event=e.createEvent("Event"),this.event.initEvent("shake",!0,!0)}}return s.prototype.reset=function(){this.lastTime=new Date,this.lastX=null,this.lastY=null,this.lastZ=null},s.prototype.start=function(){this.reset(),this.hasDeviceMotion&&t.addEventListener("devicemotion",this,!1)},s.prototype.stop=function(){this.hasDeviceMotion&&t.removeEventListener("devicemotion",this,!1),this.reset()},s.prototype.devicemotion=function(e){var s,o,i=e.accelerationIncludingGravity,n=0,r=0,h=0;return null===this.lastX&&null===this.lastY&&null===this.lastZ?(this.lastX=i.x,this.lastY=i.y,void(this.lastZ=i.z)):(n=Math.abs(this.lastX-i.x),r=Math.abs(this.lastY-i.y),h=Math.abs(this.lastZ-i.z),(n>this.options.threshold&&r>this.options.threshold||n>this.options.threshold&&h>this.options.threshold||r>this.options.threshold&&h>this.options.threshold)&&(s=new Date,o=s.getTime()-this.lastTime.getTime(),o>this.options.timeout&&(t.dispatchEvent(this.event),this.lastTime=new Date)),this.lastX=i.x,this.lastY=i.y,void(this.lastZ=i.z))},s.prototype.handleEvent=function(t){if("function"==typeof this[t.type])return this[t.type](t)},s})},function(t,e){t.exports=" <div style=display:none></div> "},function(t,e,s){var o,i;o=s(1),i=s(3),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),i&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=i)}])});