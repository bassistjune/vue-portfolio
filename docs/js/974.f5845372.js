"use strict";(self["webpackChunkproject_myhome"]=self["webpackChunkproject_myhome"]||[]).push([[974],{3512:function(t,s,e){var o=e(5937);const i={computed:{routeName(){return this.$route.name}},mounted(){(0,o.jq)({title:`한준희의 홈페이지 - ${this.routeName} 페이지`,meta:[{vmid:"description",name:"description",content:`${this.routeName}Page`},{vmid:"keywords",name:"keywords",content:"javascript, vue, html, vue.js, nuxt.js, node.js, 프론트엔드"}]}),console.log("routeName",this.routeName)}};s.Z=i},4974:function(t,s,e){e.r(s),e.d(s,{default:function(){return O}});var o=e(6252),i=e(3577),n=e(9963);const d=t=>((0,o.dD)("data-v-e7e2d1de"),t=t(),(0,o.Cn)(),t),r={class:"sub_wrap"},a={class:"row gtr-200"},l={class:"col-6 col-12-medium"},c=d((()=>(0,o._)("h3",{class:"alignC"},"ToDo 리스트",-1))),v={class:"visitList"},u=d((()=>(0,o._)("em",{class:"sm_red"},"(샘플 제외)",-1))),m=(0,o.uE)('<div class="visitor todo" data-v-e7e2d1de><div class="visContent" data-v-e7e2d1de>ToDoList 샘플</div><div class="btns" data-v-e7e2d1de><button class="disabled" type="button" data-v-e7e2d1de>완료</button><button class="visDel disabled" type="button" data-v-e7e2d1de>삭제</button></div></div>',1),_={class:"col-6 col-12-medium"},p=d((()=>(0,o._)("h3",{class:"alignC"},"ToDo 등록",-1))),h=d((()=>(0,o._)("p",{class:"tIndent"},"d",-1))),w={class:"cRow actions"},V=d((()=>(0,o._)("li",{class:"sideItem"}," 내용 ",-1))),b={class:"bigItem"};function g(t,s,e,d,g,D){const k=(0,o.up)("Visitors");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",a,[(0,o._)("div",l,[c,(0,o._)("div",v,[(0,o._)("p",null,[(0,o.Uk)("개수: "),(0,o._)("span",null,[(0,o.Uk)((0,i.zw)(t.$store.state.visitors.length)+" ",1),u])]),m,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.$store.state.visitors,((t,s)=>((0,o.wg)(),(0,o.j4)(k,{key:s,visitor:t},null,8,["visitor"])))),128))])]),(0,o._)("div",_,[p,h,(0,o._)("ul",w,[V,(0,o._)("li",b,[(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=s=>t.newVisitor=s),placeholder:"ToDoList 내용을 작성해주세요.",onKeypress:s[1]||(s[1]=(0,n.D2)(((...t)=>D.addVisitor&&D.addVisitor(...t)),["enter"])),maxlength:"20"},null,544),[[n.nr,t.newVisitor]])])]),(0,o._)("button",{class:"button sideMarginAt",onClick:s[2]||(s[2]=(...t)=>D.addVisitor&&D.addVisitor(...t))}," 등록 ")])])])}var D=e(3512);const k={class:"visContent"},y={class:"btns"};function C(t,s,e,n,d,r){return(0,o.wg)(),(0,o.iD)("div",{class:(0,i.C_)(["visitor "+(e.visitor.done?"is-complete":""),"todo"])},[(0,o._)("div",k,(0,i.zw)(e.visitor.content),1),(0,o._)("div",y,[(0,o._)("button",{onClick:s[0]||(s[0]=(...t)=>r.toggleDone&&r.toggleDone(...t)),type:"button"},(0,i.zw)(e.visitor.done?"취소":"완료"),1),(0,o._)("button",{onClick:s[1]||(s[1]=(...t)=>r.removeVisitor&&r.removeVisitor(...t)),class:"visDel",type:"button"},"삭제")])],2)}var I={props:["visitor"],methods:{toggleDone(){this.$store.commit("TOGGLE_VISITOR",this.visitor)},removeVisitor(){this.$store.commit("REMOVE_VISITOR",this.visitor)}}},$=e(3744);const f=(0,$.Z)(I,[["render",C],["__scopeId","data-v-713b8017"]]);var j=f,T={components:{Visitors:j},mixins:[D.Z],data:()=>({newVisitor:""}),mounted(){console.log("this.$store",this.$store)},methods:{addVisitor(){console.log("this.newVisitor"),this.newVisitor&&(this.$store.commit("ADD_VISITOR",this.newVisitor),this.newVisitor="")}}};const N=(0,$.Z)(T,[["render",g],["__scopeId","data-v-e7e2d1de"]]);var O=N}}]);
//# sourceMappingURL=974.f5845372.js.map