"use strict";(self["webpackChunkproject_myhome"]=self["webpackChunkproject_myhome"]||[]).push([[941],{3512:function(e,t,n){var i=n(9590);const o={computed:{routeName(){return this.$route.name}},mounted(){(0,i.jq)({title:`한준희의 홈페이지 - ${this.routeName} 페이지`,meta:[{vmid:"description",name:"description",content:`${this.routeName}Page`},{vmid:"keywords",name:"keywords",content:"javascript, vue, html, vue.js, nuxt.js, node.js, 프론트엔드"}]}),console.log("routeName",this.routeName)}};t.Z=o},8405:function(e,t,n){n(7658);const i={data:()=>({limitedSecond:8,timer:void 0}),mounted(){this.timer=setInterval((()=>{if(this.limitedSecond-=1,this.limitedSecond<=0)return this.$router.push("/"),clearInterval(this.timer),!1}),1e3)},beforeDestroy(){if(this.limitedSecond=8,this.timer)return clearInterval(this.timer)},methods:{moveMain(){this.$router.push("/")}}};t.Z=i},6941:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(3396),o=n(7139);const s=e=>((0,i.dD)("data-v-838ea9fa"),e=e(),(0,i.Cn)(),e),r={class:"sub_wrap"},a={class:"etcComp"},l={class:"etcTxt"},u=s((()=>(0,i._)("h1",null,"비공개 페이지",-1))),c=s((()=>(0,i._)("dt",null,[(0,i._)("strong",null,"현 페이지는 당분간 비공개 입니다!")],-1))),d=s((()=>(0,i._)("dd",null,[(0,i.Uk)(" 해당 페이지가 현재 접속이 불가하여"),(0,i._)("br"),(0,i.Uk)(" 자동으로 이동합니다. ")],-1))),m={class:"bold"};function h(e,t,n,s,h,_){return(0,i.wg)(),(0,i.iD)("div",r,[(0,i._)("section",a,[(0,i._)("article",l,[u,(0,i._)("dl",null,[c,d,(0,i._)("dd",null,[(0,i._)("em",m,(0,o.zw)(e.limitedSecond-1),1),(0,i.Uk)("초후 메인페이지로 자동으로 이동 됩니다. ")])])]),(0,i._)("button",{onClick:t[0]||(t[0]=t=>e.moveMain()),class:"btn_toMain"},[(0,i._)("span",null,[(0,i._)("em",null,(0,o.zw)(e.limitedSecond-1),1),(0,i.Uk)("초 후 이동..")])])])])}var _=n(8405),v=n(3512),p={mixins:[v.Z,_.Z]},f=n(89);const k=(0,f.Z)(p,[["render",h],["__scopeId","data-v-838ea9fa"]]);var b=k}}]);
//# sourceMappingURL=941.ffe4311f.js.map