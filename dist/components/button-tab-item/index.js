!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxButtonTabItem=t():e.vuxButtonTabItem=t()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(4)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2);t["default"]={mixins:[i.childMixin],computed:{classes:function(){return{"vux-button-group-current":this.index===this.$parent.index,"no-border-right":this.shouldRemoveBorder}},style:function(){if(this.$parent.height)return{height:this.$parent.height+"px",lineHeight:this.$parent.height+"px"}}},data:function(){return{shouldRemoveBorder:!1}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={ready:function(){this.updateIndex()},methods:{updateIndex:function(){if(this.$children){this.number=this.$children.length;for(var e=this.$children,t=0;t<e.length;t++)e[t].index=t,e[t].selected&&(this.index=t)}}},props:{index:{type:Number,"default":0}},watch:{index:function(e,t){this.$children[t].selected=!1,this.$children[e].selected=!0}},data:function(){return{number:this.$children.length}}},i={props:{selected:{type:Boolean,"default":!1}},ready:function(){this.$parent.updateIndex()},beforeDestroy:function(){var e=this.$parent;this.$nextTick(function(){e.updateIndex()})},methods:{onItemClick:function(){this.selected=!0,this.$parent.index=this.index,this.$emit("on-item-click")}},watch:{selected:function(e){e&&(this.$parent.index=this.index)}},data:function(){return{index:-1}}};t.parentMixin=n,t.childMixin=i},function(e,t){e.exports=" <a class=vux-button-tab-item :class=classes href=javascript: :style=style @click=onItemClick> <slot></slot> </a> "},function(e,t,n){var i,o;i=n(1),o=n(3),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=o)}])});