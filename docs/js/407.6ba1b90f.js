"use strict";(self["webpackChunkproject_myhome"]=self["webpackChunkproject_myhome"]||[]).push([[407],{2394:function(t,e,s){var o=s(3578);const a={name:"modalOpt",data(){return{isShowModal:!1}},components:{Modal:o.Z},mounted(){console.log("a")},methods:{close(){this.isShowModal=!1},callModal(t){this.isShowModal=!0,this.modalType=t}}};e.Z=a},8407:function(t,e,s){s.r(e),s.d(e,{default:function(){return q}});var o=s(6252),a=s(9963),r=s(3577);const i=t=>((0,o.dD)("data-v-2cc1b8ba"),t=t(),(0,o.Cn)(),t),l={class:"sub_wrap"},n={class:"boardViewTop"},d=i((()=>(0,o._)("h4",null,"게시물 보기",-1))),h={key:0,class:"listD"},c={action:""};function u(t,e,s,i,u,p){const b=(0,o.up)("BoardView"),g=(0,o.up)("BoardViewBtn"),w=(0,o.up)("Modal");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("section",l,[(0,o._)("div",n,[d,u.allData?((0,o.wg)(),(0,o.iD)("ul",h,[(0,o._)("li",null,[(0,o._)("button",{onClick:e[0]||(e[0]=e=>t.callModal("fix")),class:"button primary small",type:"button"},"수정")]),(0,o._)("li",null,[(0,o._)("button",{onClick:e[1]||(e[1]=e=>t.callModal("del")),class:"button small",type:"button"},"삭제")])])):(0,o.kq)("",!0)]),(0,o._)("div",null,[(0,o.Wm)(b,{boardInfo:u.allData},null,8,["boardInfo"]),(0,o.Wm)(g,{onGetList:e[2]||(e[2]=t=>p.fnGoList()),onGetPrev:e[3]||(e[3]=t=>p.fnPrev()),onGetNext:e[4]||(e[4]=t=>p.fnNext()),boardPrev:u.disablePrev,boardNext:u.disableNext},null,8,["boardPrev","boardNext"])]),t.isShowModal?((0,o.wg)(),(0,o.j4)(w,{key:0,title:u.pageTit,onClose:t.close},{body:(0,o.w5)((()=>[(0,o._)("form",c,[(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[5]||(e[5]=t=>u.inpPassword=t),autocomplete:"off",maxlength:"6",placeholder:"암호를 입력하세요.(4~6글자)",type:"password"},null,512),[[a.nr,u.inpPassword]])])])),footer:(0,o.w5)((()=>[(0,o._)("button",{class:(0,r.C_)([u.passwordEntered?"":"disabled","button primary"]),onClick:e[6]||(e[6]=t=>p.sendSubmit()),type:"button"},"확인",2)])),_:1},8,["title","onClose"])):(0,o.kq)("",!0)])])}s(7658);var p=s(2394);const b={class:"box textField01"},g={key:0,class:"boardImgBox"},w=["src"];function m(t,e,s,a,i,l){return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("h3",null,[(0,o._)("span",null,(0,r.zw)(t.$props.boardInfo.type),1),(0,o.Uk)((0,r.zw)(t.$props.boardInfo.title),1)]),(0,o._)("p",null,(0,r.zw)(t.$props.boardInfo.author)+" | "+(0,r.zw)(t.$props.boardInfo.created_at),1),(0,o._)("div",b,[t.$props.boardInfo&&t.$props.boardInfo.file_url?((0,o.wg)(),(0,o.iD)("p",g,[(0,o._)("img",{class:"imgContent",src:`http://localhost:8081/upload/${s.boardInfo.file_url}`,alt:"게시판 이미지"},null,8,w)])):(0,o.kq)("",!0),(0,o._)("p",null,(0,r.zw)(t.$props.boardInfo.contents),1)])])}var f={props:["boardInfo"]},_=s(3744);const x=(0,_.Z)(f,[["render",m],["__scopeId","data-v-61ec8674"]]);var v=x;const y={class:"wideFlex01"};function I(t,e,s,a,i,l){return(0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("a",{class:(0,r.C_)([!0===t.$props.boardPrev?"disable":"","button"]),href:"javascript:void(0);",onClick:e[0]||(e[0]=t=>l.goPrev())},"이전",2),(0,o._)("a",{href:"javascript:void(0);",onClick:e[1]||(e[1]=t=>l.goList()),class:"button"},"목록으로"),(0,o._)("a",{class:(0,r.C_)([!0===t.$props.boardNext?"disable":"","button"]),href:"javascript:void(0);",onClick:e[2]||(e[2]=t=>l.goNext())},"다음",2)])}var $={props:["boardPrev","boardNext"],methods:{goList(){this.$emit("getList")},goPrev(){this.$emit("getPrev")},goNext(){this.$emit("getNext")}}};const L=(0,_.Z)($,[["render",I],["__scopeId","data-v-6a49bdd3"]]);var N=L,P={mixins:[p.Z],components:{BoardView:v,BoardViewBtn:N},data(){return{pageTit:"boardViews",idx:"",resAll:"",allData:"",type:"",title:"",password:"",author:"",imageUrl:"",contents:"",routeIdx:Number,created_at:"",lists:[],disablePrev:!1,disableNext:!1,inpPassword:"",allSpecial:/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,passwordEntered:!1,testItem:"",modalType:""}},created(){this.getFnList()},computed:{requestBody(){return this.$route.query},listLength(){return this.lists.length}},watch:{lists:{deep:!0,immediate:!0,handler(t){console.log("listLengthOnWatch",t),this.getFirstLast()}},$route:{handler(t){console.log("route.query",t.query),this.routeIdx=t.query.idx},deep:!0,immediate:!0},inpPassword:{handler(t){console.log(t),console.log("passwordEntered",this.passwordEntered),this.allSpecial.test(t)&&(console.log("암호에 특수문자 입력됨"),alert("암호에는 특수문자를 사용할 수 없습니다."),this.inpPassword=t.substring(0,t.length-1)),this.pwEnter(t),console.log("password chk1",t,this.password),console.log("password chk2",this.inpPassword,this.password)},deep:!0,immediate:!0},password:{handler(t){console.log("password__watcher",t)},deep:!0,immediate:!0}},beforeDestroy(){this.passwordEntered=!1},mounted(){this.fnGetView(),this.getFirstLast(),console.log("this.listLength = this.lists.length_____",Number(this.lists.length)),console.log("this.lists",this.lists),console.log("this.$data",this),console.log("listLength....",this.listLength)},methods:{getFirstLast(){console.log("methodsItem",this,this.lists,this.listLength),console.log("Number(this.routeIdx),this.listLength",Number(this.routeIdx),this.listLength),Number(this.routeIdx)===this.listLength?this.disableNext=!0:this.routeIdx===Number(1)&&(this.disablePrev=!0),console.log("disablePrev, disableNext",this.disablePrev,this.disableNext)},async fnGetView(){try{const t=await this.$axios.get(this.$serverUrl+"/board/"+this.routeIdx,{params:this.requestBody});console.log("res",t),this.resAll=t,this.allData=t.data,this.imageUrl=t.data.file_url,this.password=t.data.password,this.type=t.data.type,this.title=t.data.title,this.author=t.data.author,this.contents=t.data.contents,this.created_at=t.data.created_at,console.log("res데이터 수신완료",t.data),this.pwEnter(this.inpPassword)}catch(t){t.message.indexOf("Network Error")>-1&&alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.")}},async getFnList(){try{const t=await this.requestData();this.lists=t,console.log("getFnListInfo_res",t)}catch(t){t.message.indexOf("Network Error")>-1&&alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.")}},requestData(){return this.$axios.get(this.$serverUrl+"/board/list",{params:this.requestBody,headers:{}}).then((t=>t.data))},fnUpdate(){this.$router.push({path:"./BoardWrite",query:this.requestBody})},sendSubmit(){"fix"===this.modalType?this.fnUpdate():"del"===this.modalType&&this.fnDelete()},fnDelete(){confirm("삭제하시겠습니까?")&&this.$axios.delete(this.$serverUrl+"/board/"+this.idx,{}).then((()=>{alert("삭제되었습니다."),this.getFnList()})).catch((t=>{console.log(t)}))},fnPrev(){console.log("route",this.$route.query),console.log("this.routeIdx - 1",""+this.routeIdx--),this.$router.push({path:"boardView",query:{idx:""+this.routeIdx--}}).catch((()=>{}))},fnNext(){console.log("route",this.$route.query),console.log("this.routeIdx + 1",""+this.routeIdx++),this.$router.push({path:"boardView",query:{idx:""+this.routeIdx++}}).catch((()=>{}))},fnGoList(){this.$router.push({path:"boardList"})},pwEnter(t){this.passwordEntered=this.password===this.inpPassword}}};const k=(0,_.Z)(P,[["render",u],["__scopeId","data-v-2cc1b8ba"]]);var q=k}}]);
//# sourceMappingURL=407.6ba1b90f.js.map