"use strict";(self["webpackChunkproject_myhome"]=self["webpackChunkproject_myhome"]||[]).push([[620],{3512:function(e,t,o){var r=o(9590);const a={computed:{routeName(){return this.$route.name}},mounted(){(0,r.jq)({title:`한준희의 홈페이지 - ${this.routeName} 페이지`,meta:[{vmid:"description",name:"description",content:`${this.routeName}Page`},{vmid:"keywords",name:"keywords",content:"javascript, vue, html, vue.js, nuxt.js, node.js, 프론트엔드"}]}),console.log("routeName",this.routeName)}};t.Z=a},8620:function(e,t,o){o.r(t),o.d(t,{default:function(){return d}});var r=o(3396);function a(e,t,o,a,n,u){const i=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(i,{key:e.$route.fullPath})}var n=o(3512),u={mixins:[n.Z],data:()=>({BoardRoute:""}),watch:{$route:{handler(e){console.log("BoardRouter",e),this.BoardRoute=e.fullPath},deep:!0,immediate:!0}},mounted(){console.log("this.BoardRoute",this.BoardRoute),this.$nextTick((()=>{"/Board"===this.BoardRoute&&this.$router.replace("/Board/BoardList").then((()=>location.reload()))}))},updated(){}},i=o(89);const s=(0,i.Z)(u,[["render",a]]);var d=s}}]);
//# sourceMappingURL=620.d689451f.js.map