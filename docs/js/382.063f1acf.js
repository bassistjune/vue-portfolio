"use strict";(self["webpackChunkproject_myhome"]=self["webpackChunkproject_myhome"]||[]).push([[382],{6382:function(e,t,s){s.r(t),s.d(t,{default:function(){return J}});var a=s(6252);const n=e=>((0,a.dD)("data-v-3bbf0f42"),e=e(),(0,a.Cn)(),e),i={class:"sub_wrap"},r=n((()=>(0,a._)("h4",null,"게시판",-1))),l={class:"btBoard"};function d(e,t,s,n,d,o){const c=(0,a.up)("BoardList"),h=(0,a.up)("PageNation"),u=(0,a.up)("BoardListWriteBtn"),g=(0,a.up)("BoardSearch");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("section",i,[r,(0,a._)("div",null,[(0,a.Wm)(c,{sendList:o.paginatedData,onSendIdx:o.boardView},null,8,["sendList","onSendIdx"]),(0,a._)("div",l,[(0,a.Wm)(h,{sendPaging:o.totalPages,sendCurrent:e.currentPage,lastPage:e.onLast,onGetPage:o.fnPage},null,8,["sendPaging","sendCurrent","lastPage","onGetPage"]),(0,a.Wm)(u,{onFnWrite:o.gotoWrite},null,8,["onFnWrite"])]),(0,a.Wm)(g,{onGetSearch:o.fnSearch},null,8,["onGetSearch"])])])])}s(7658);var o=s(3577);const c=e=>((0,a.dD)("data-v-3bafef70"),e=e(),(0,a.Cn)(),e),h={class:"table-wrapper"},u=c((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{class:"notMobile __alginC"},"번호"),(0,a._)("th",{class:"notMobile __alginC"},"제목"),(0,a._)("th",{class:"notMobile __alginC"},"작성자"),(0,a._)("th",{class:"notMobile __alginC"},"작성일"),(0,a._)("th",{class:"inMobile"},"목록")])],-1))),g={class:"notMobile"},p={class:"__alginL"},_=["onClick"],m={class:"accent"};function b(e,t,s,n,i,r){return(0,a.wg)(),(0,a.iD)("div",h,[(0,a._)("table",null,[u,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.lists,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e.id},[(0,a._)("td",g,(0,o.zw)(e.idx),1),(0,a._)("td",p,[(0,a._)("a",{href:"javascript:void(0)",onClick:t=>r.sendListIdx(`${e.idx}`)},[(0,a._)("span",m,(0,o.zw)(e.type),1),(0,a.Uk)(" "+(0,o.zw)(e.title),1)],8,_)]),(0,a._)("td",null,(0,o.zw)(e.author),1),(0,a._)("td",null,(0,o.zw)(e.created_at.substr(0,10)),1)])))),128))])])])}var P={name:"BoardList",props:["sendList"],data:()=>({lists:""}),computed:{},watch:{sendList:{handler(e){this.lists=e}}},mounted(){},methods:{sendListIdx(e){this.$emit("sendIdx",e)}}},f=s(3744);const w=(0,f.Z)(P,[["render",b],["__scopeId","data-v-3bafef70"]]);var v=w;const L=e=>((0,a.dD)("data-v-00bab478"),e=e(),(0,a.Cn)(),e),C={class:"pagination"},k=L((()=>(0,a._)("span",null,"이전",-1))),y=[k],B=["onClick"],S=L((()=>(0,a._)("span",null,"다음",-1))),D=[S];function V(e,t,s,n,i,r){return(0,a.wg)(),(0,a.iD)("ul",C,[(0,a._)("li",null,[(0,a._)("button",{class:(0,o.C_)(["btnPrev btnCst",1===s.sendCurrent?"disabled":""]),onClick:t[0]||(t[0]=e=>r.sendPage("stepMin"))},y,2)]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.sendPaging,(e=>((0,a.wg)(),(0,a.iD)("li",{key:e},[(0,a._)("button",{onClick:t=>r.sendPage(e),class:(0,o.C_)([{active:s.sendCurrent===e},"page"]),type:"button"},(0,o.zw)(e),11,B)])))),128)),(0,a._)("li",null,[(0,a._)("button",{class:(0,o.C_)(["btnNext btnCst",!0===r.onLast?"disabled":""]),onClick:t[1]||(t[1]=e=>r.sendPage("stepPlus"))},D,2)])])}var W={props:["sendPaging","sendCurrent","lastPage"],name:"PageNation",data:()=>({}),computed:{paging(){return this.$props.sendPaging},onLast(){return this.lastPage}},mounted(){},methods:{sendPage(e){this.$emit("getPage",e)}}};const x=(0,f.Z)(W,[["render",V],["__scopeId","data-v-00bab478"]]);var I=x,$=s(9963);const M=e=>((0,a.dD)("data-v-ce9ade04"),e=e(),(0,a.Cn)(),e),q={class:"__relative"},z={class:"posRel"},G={method:"post",action:"#"},F=M((()=>(0,a._)("span",{class:"__hide"},"검색버튼",-1))),N=[F];function Z(e,t,s,n,i,r){return(0,a.wg)(),(0,a.iD)("div",q,[(0,a._)("div",z,[(0,a._)("form",G,[(0,a.wy)((0,a._)("input",{type:"text",name:"query","onUpdate:modelValue":t[0]||(t[0]=t=>e.searchValue=t),id:"query",class:"searchInput",placeholder:"찾는 글의 제목을 입력해주세요.",onKeypress:t[1]||(t[1]=(0,$.D2)((e=>r.clickSearch()),["enter"]))},null,544),[[$.nr,e.searchValue]]),(0,a._)("button",{ref:"btnS",onClick:t[2]||(t[2]=e=>r.clickSearch()),type:"button",class:"btnSearch __absoluteR"},N,512)])])])}var j={name:"BoardSearch",data:()=>({searchValue:"",searchVal:""}),watch:{searchValue:{handler(e){this.searchVal=e},deep:!0,immediate:!0}},mounted(){window.addEventListener("keydown",(e=>{const t=e.which||e.keyCode;13===t&&this.$nextTick((()=>{this.$refs.btnS.focus(),this.clickSearch()}))}))},methods:{clickSearch(){const e=this.searchVal;this.$emit("getSearch",e)}}};const K=(0,f.Z)(j,[["render",Z],["__scopeId","data-v-ce9ade04"]]);var R=K;const U={class:"writeBox"};function E(e,t,s,n,i,r){return(0,a.wg)(),(0,a.iD)("div",U,[(0,a._)("button",{class:"btnWrite onRight",onClick:t[0]||(t[0]=e=>r.sendWrite()),type:"button"},"글쓰기")])}var H={methods:{sendWrite(){this.$emit("fnWrite")}}};const Y=(0,f.Z)(H,[["render",E],["__scopeId","data-v-2bc171e2"]]);var O=Y,T={components:{BoardList:v,PageNation:I,BoardSearch:R,BoardListWriteBtn:O},data:()=>({requestBody:{},list:"",sliceList:[],no:"",currentPage:1,itemsPerPage:6,onLast:!1,searchValue:""}),metaInfo:{title:"페이지 타이틀"},created(){},computed:{created_at(){return this.list},totalPages(){const e=this.getFilterList();return Math.ceil(e.length/this.itemsPerPage)},filterList(){return this.sliceList.filter((e=>e.title?.toLowerCase().includes(this.searchValue.toLowerCase())))||""},paginatedData(){const e=(this.currentPage-1)*this.itemsPerPage,t=e+this.itemsPerPage;return this.filterList.slice(e,t)}},watch:{created_at:{handler(e){},deep:!0,immediate:!0},list:{handler(e){this.listLength=e.length},deep:!0,immediate:!0},sliceList:{handler(e){},deep:!0,immediate:!0},totalPages:{handler(e){},deep:!0,immediate:!0},currentPage:{handler(e){this.onLast=this.totalPages===e},deep:!0,immediate:!0},searchValue:{handler(e){},deep:!0,immediate:!0}},mounted(){this.fnGetList()},methods:{fnSearch(e){this.searchValue=e,this.getFilterList()},getFilterList(){return""===this.searchValue.trim()?this.sliceList:this.filterList},fnGetList(){this.requestBody={keyword:this.keyword,page:this.page,size:this.size},this.$axios.get(this.$serverUrl+"/board/list/",{params:this.requestBody,headers:{}}).then((e=>{this.list=e.data,this.sliceList=e.data.slice().reverse()})).catch((e=>{e.message.indexOf("Network Error")>-1&&alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.")}))},boardView(e){this.requestBody.idx=e,this.$router.push({path:"./BoardView",query:this.requestBody}).catch((()=>{}))},gotoWrite(){this.$router.push({path:"./BoardWrite"})},fnPage(e){"stepMin"===e?this.currentPage-=1:"stepPlus"===e?this.currentPage+=1:(this.currentPage=e,this.page=e)}}};const A=(0,f.Z)(T,[["render",d],["__scopeId","data-v-3bbf0f42"]]);var J=A}}]);
//# sourceMappingURL=382.063f1acf.js.map