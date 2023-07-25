"use strict";(self["webpackChunkproject_myhome"]=self["webpackChunkproject_myhome"]||[]).push([[224],{2394:function(t,e,s){var a=s(3769);const r={name:"modalOpt",data(){return{isShowModal:!1}},components:{Modal:a.Z},mounted(){},methods:{close(){this.isShowModal=!1},callModal(t){this.isShowModal=!0,this.modalType=t}}};e.Z=r},3224:function(t,e,s){s.r(e),s.d(e,{default:function(){return C}});var a=s(6252),r=s(9963),o=s(3577);const i=t=>((0,a.dD)("data-v-426d080c"),t=t(),(0,a.Cn)(),t),d={class:"sub_wrap"},n={class:"boardViewTop"},l=i((()=>(0,a._)("h4",null,"게시물 보기",-1))),h={key:0,class:"listD"},p={action:""};function u(t,e,s,i,u,c){const b=(0,a.up)("BoardView"),m=(0,a.up)("BoardViewBtn"),w=(0,a.up)("Modal");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("section",d,[(0,a._)("div",n,[l,u.allData?((0,a.wg)(),(0,a.iD)("ul",h,[(0,a._)("li",null,[(0,a._)("button",{onClick:e[0]||(e[0]=e=>t.callModal("fix")),class:"button primary small",type:"button"},"수정")]),(0,a._)("li",null,[(0,a._)("button",{onClick:e[1]||(e[1]=e=>t.callModal("del")),class:"button small",type:"button"},"삭제")])])):(0,a.kq)("",!0)]),(0,a._)("div",null,[(0,a.Wm)(b,{boardInfo:u.allData},null,8,["boardInfo"]),(0,a.Wm)(m,{onGetList:e[2]||(e[2]=t=>c.fnGoList()),onGetPrev:e[3]||(e[3]=t=>c.fnPrev()),onGetNext:e[4]||(e[4]=t=>c.fnNext()),boardPrev:u.disablePrev,boardNext:u.disableNext},null,8,["boardPrev","boardNext"])]),t.isShowModal?((0,a.wg)(),(0,a.j4)(w,{key:0,title:u.pageTit,onClose:t.close},{body:(0,a.w5)((()=>[(0,a._)("form",p,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>u.inpPassword=t),autocomplete:"off",maxlength:"6",placeholder:"암호를 입력하세요.(4~6글자)",type:"password"},null,512),[[r.nr,u.inpPassword]])])])),footer:(0,a.w5)((()=>[(0,a._)("button",{class:(0,o.C_)([u.passwordEntered?"":"disabled","button primary"]),onClick:e[6]||(e[6]=t=>c.sendSubmit()),type:"button"},"확인",2)])),_:1},8,["title","onClose"])):(0,a.kq)("",!0)])])}s(7658);var c=s(2394);const b={class:"box textField01"},m={key:0,class:"boardImgBox"},w=["src"];function f(t,e,s,r,i,d){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("h3",null,[(0,a._)("span",null,(0,o.zw)(t.$props.boardInfo.type),1),(0,a.Uk)((0,o.zw)(t.$props.boardInfo.title),1)]),(0,a._)("p",null,(0,o.zw)(t.$props.boardInfo.author)+" | "+(0,o.zw)(t.$props.boardInfo.created_at),1),(0,a._)("div",b,[t.$props.boardInfo&&t.$props.boardInfo.file_url?((0,a.wg)(),(0,a.iD)("p",m,[(0,a._)("img",{class:"imgContent",src:`https://github.com/bassistjune/springboot-back/blob/ab44124efb07412caf6b9aa06747509671835c5e/src/main/resources/static/upload/ssg_landers.jpeg${s.boardInfo.file_url}?raw=true`,alt:"게시판 이미지"},null,8,w)])):(0,a.kq)("",!0),(0,a._)("p",null,(0,o.zw)(t.$props.boardInfo.contents),1)])])}var g={props:["boardInfo"]},_=s(3744);const v=(0,_.Z)(g,[["render",f],["__scopeId","data-v-710d7927"]]);var x=v;const y={class:"wideFlex01"};function $(t,e,s,r,i,d){return(0,a.wg)(),(0,a.iD)("div",y,[(0,a._)("a",{class:(0,o.C_)([!0===t.$props.boardPrev?"disable":"","button"]),href:"javascript:void(0);",onClick:e[0]||(e[0]=t=>d.goPrev())},"이전",2),(0,a._)("a",{href:"javascript:void(0);",onClick:e[1]||(e[1]=t=>d.goList()),class:"button"},"목록으로"),(0,a._)("a",{class:(0,o.C_)([!0===t.$props.boardNext?"disable":"","button"]),href:"javascript:void(0);",onClick:e[2]||(e[2]=t=>d.goNext())},"다음",2)])}var I={props:["boardPrev","boardNext"],methods:{goList(){this.$emit("getList")},goPrev(){this.$emit("getPrev")},goNext(){this.$emit("getNext")}}};const k=(0,_.Z)(I,[["render",$],["__scopeId","data-v-6a49bdd3"]]);var P=k,N={mixins:[c.Z],components:{BoardView:x,BoardViewBtn:P},data(){return{pageTit:"boardViews",idx:"",resAll:"",allData:"",type:"",title:"",password:"",author:"",imageUrl:"",contents:"",routeIdx:Number,created_at:"",lists:[],disablePrev:!1,disableNext:!1,inpPassword:"",allSpecial:/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,passwordEntered:!1,testItem:"",modalType:""}},created(){this.getFnList()},computed:{requestBody(){return this.$route.query},listLength(){return this.lists.length}},watch:{lists:{deep:!0,immediate:!0,handler(t){this.getFirstLast()}},$route:{handler(t){this.routeIdx=t.query.idx},deep:!0,immediate:!0},inpPassword:{handler(t){this.allSpecial.test(t)&&(alert("암호에는 특수문자를 사용할 수 없습니다."),this.inpPassword=t.substring(0,t.length-1)),this.pwEnter(t)},deep:!0,immediate:!0},password:{handler(t){},deep:!0,immediate:!0}},beforeDestroy(){this.passwordEntered=!1},mounted(){this.fnGetView(),this.getFirstLast()},methods:{getFirstLast(){Number(this.routeIdx)===this.listLength?this.disableNext=!0:this.routeIdx===Number(1)&&(this.disablePrev=!0)},async fnGetView(){try{const t=await this.$axios.get(this.$serverUrl+"board/"+this.routeIdx,{params:this.requestBody});this.resAll=t,this.allData=t.data,this.imageUrl=t.data.file_url,this.password=t.data.password,this.type=t.data.type,this.title=t.data.title,this.author=t.data.author,this.contents=t.data.contents,this.created_at=t.data.created_at,this.pwEnter(this.inpPassword)}catch(t){t.message.indexOf("Network Error")>-1&&alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.")}},async getFnList(){try{const t=await this.requestData();this.lists=t}catch(t){t.message.indexOf("Network Error")>-1&&alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.")}},requestData(){return this.$axios.get(this.$serverUrl+"board/list",{params:this.requestBody,headers:{}}).then((t=>t.data))},fnUpdate(){this.$router.push({path:"./BoardWrite",query:this.requestBody})},sendSubmit(){"fix"===this.modalType?this.fnUpdate():"del"===this.modalType&&this.fnDelete()},fnDelete(){confirm("삭제하시겠습니까?")&&this.$axios.delete(this.$serverUrl+"board/"+this.idx,{}).then((()=>{alert("삭제되었습니다."),this.getFnList()})).catch((t=>{}))},fnPrev(){this.$router.push({path:"boardView",query:{idx:""+this.routeIdx--}}).catch((()=>{}))},fnNext(){this.$router.push({path:"boardView",query:{idx:""+this.routeIdx++}}).catch((()=>{}))},fnGoList(){this.$router.push({path:"boardList"})},pwEnter(t){this.passwordEntered=this.password===this.inpPassword}}};const D=(0,_.Z)(N,[["render",u],["__scopeId","data-v-426d080c"]]);var C=D}}]);
//# sourceMappingURL=224.ef68e442.js.map