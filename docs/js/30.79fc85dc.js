(self["webpackChunkproject_myhome"]=self["webpackChunkproject_myhome"]||[]).push([[30],{7045:function(e,t,a){var i=a(6339),l=a(3070);e.exports=function(e,t,a){return a.get&&i(a.get,t,{getter:!0}),a.set&&i(a.set,t,{setter:!0}),l.f(e,t,a)}},2062:function(e,t,a){"use strict";var i=a(9781),l=a(1702),s=a(7045),r=URLSearchParams.prototype,o=l(r.forEach);i&&!("size"in r)&&s(r,"size",{get:function(){var e=0;return o(this,(function(){e++})),e},configurable:!0,enumerable:!0})},30:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return O}});var i=a(6252),l=a(9963),s=a(3577);const r=e=>((0,i.dD)("data-v-288b8630"),e=e(),(0,i.Cn)(),e),o={class:"sub_wrap"},n={class:"mW1200"},d=r((()=>(0,i._)("h3",null,"게시판 글쓰기",-1))),h=r((()=>(0,i._)("p",{class:"colRed"},"* 모든 입력란을 기재하셔야 글이 작성됩니다.",-1))),c={class:"__row gtr-uniform"},p={class:"col-12"},m={class:"col-6 col-12-xsmall"},u={class:"col-6 col-12-xsmall"},g={class:"col-12"},_=r((()=>(0,i._)("option",{value:"",selected:"selected"},"글 종류 선택",-1))),y=r((()=>(0,i._)("option",{value:"[일반]"},"일반게시글",-1))),w=r((()=>(0,i._)("option",{value:"[유머]"},"유머게시글",-1))),v=r((()=>(0,i._)("option",{value:"[기타]"},"기타게시글",-1))),f=[_,y,w,v],b={class:"col-12"},k={class:"col-4 col-12-small"},x=r((()=>(0,i._)("label",{for:"demo-priority-low"},"이미지 파일 추가",-1))),E={class:"col-8 col-12-small"},U=r((()=>(0,i._)("label",{for:"demo-priority-normal"},"이미지 파일 추가 안함",-1))),I={class:"ImgWrap __row col-12"},V={class:"col-8 col-12-small"},N=["value"],q={class:"col-4 col-12-small"},A=r((()=>(0,i._)("label",{for:"image-file",class:"button"},"파일찾기",-1))),$={class:"col-12"},B={key:0,class:"image-preview"},C=r((()=>(0,i._)("span",null,"삭제버튼",-1))),F=[C],P={class:"col-12"},L={class:"col-12 col-12-small"},R=r((()=>(0,i._)("label",{for:"agree"},"게시물이 공유되는 것에 동의합니다.",-1))),S={class:"col-12"},z={class:"actions"};function j(e,t,a,r,_,y){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("section",o,[(0,i._)("div",n,[d,h,(0,i._)("div",c,[(0,i._)("div",p,[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>_.title=e),id:"board-tit",placeholder:"제목을 입력하세요."},null,512),[[l.nr,_.title]])]),(0,i._)("div",m,[(0,i.wy)((0,i._)("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=e=>_.author=e),id:"board-name",placeholder:"이름을 입력하세요."},null,512),[[l.nr,_.author]])]),(0,i._)("div",u,[(0,i.wy)((0,i._)("input",{type:"email","onUpdate:modelValue":t[2]||(t[2]=e=>_.email=e),id:"board-mail",placeholder:"이메일을 입력하세요."},null,512),[[l.nr,_.email]])]),(0,i._)("div",g,[(0,i.wy)((0,i._)("select",{"onUpdate:modelValue":t[3]||(t[3]=e=>_.type=e)},f,512),[[l.bM,_.type]])]),(0,i._)("div",b,[(0,i.wy)((0,i._)("input",{type:"password","onUpdate:modelValue":t[4]||(t[4]=e=>_.password=e),maxlength:"6",id:"board-pass",placeholder:"암호를 입력하세요.(4~6글자)"},null,512),[[l.nr,_.password]])]),(0,i._)("div",k,[(0,i.wy)((0,i._)("input",{type:"radio",id:"demo-priority-low",name:"demo-priority",class:"trueImg","onUpdate:modelValue":t[5]||(t[5]=e=>_.chkImg=e),value:!0},null,512),[[l.G2,_.chkImg]]),x]),(0,i._)("div",E,[(0,i.wy)((0,i._)("input",{type:"radio",id:"demo-priority-normal",name:"demo-priority",checked:"","onUpdate:modelValue":t[6]||(t[6]=e=>_.chkImg=e),value:!1},null,512),[[l.G2,_.chkImg]]),U]),(0,i.wy)((0,i._)("div",I,[(0,i._)("div",V,[(0,i._)("input",{type:"text",class:"__fileName",value:_.imgName,placeholder:"이미지명",readonly:""},null,8,N)]),(0,i._)("div",q,[(0,i._)("input",{type:"file",id:"image-file",accept:"image/*",onChange:t[7]||(t[7]=(...e)=>y.handleImageUpload&&y.handleImageUpload(...e))},null,32),A]),(0,i._)("div",$,[_.imagePreviewUrl?((0,i.wg)(),(0,i.iD)("div",B,[(0,i._)("p",{class:"previewImgBg positionR",style:(0,s.j5)(`background-image: url(${_.imagePreviewUrl})`)},[(0,i._)("button",{class:"restPreview",type:"reset",onClick:t[8]||(t[8]=(...e)=>y.resetImage&&y.resetImage(...e))},F)],4)])):(0,i.kq)("",!0)])],512),[[l.F8,_.chkImg]]),(0,i._)("div",P,[(0,i.wy)((0,i._)("textarea",{name:"demo-message","onUpdate:modelValue":t[9]||(t[9]=e=>_.contents=e),id:"demo-message",placeholder:"내용을 입력 해주세요.",rows:"6",onresize:"none"},null,512),[[l.nr,_.contents]])]),(0,i._)("div",L,[(0,i.wy)((0,i._)("input",{type:"checkbox",id:"agree",name:"agree",checked:"","onUpdate:modelValue":t[10]||(t[10]=e=>_.chkAgree=e)},null,512),[[l.e8,_.chkAgree]]),R]),(0,i._)("div",S,[(0,i._)("ul",z,[(0,i._)("li",null,[(0,i._)("button",{onClick:t[11]||(t[11]=e=>y.fnSave()),type:"submit",class:(0,s.C_)(["primary",_.titEntered&&_.authorEntered&&_.emailEntered&&_.passwordEntered&&_.typeEntered&&_.contentsEntered&&_.chkAgree?"":"disable"])},"저장",2)]),(0,i._)("li",null,[(0,i._)("button",{onClick:t[12]||(t[12]=(...e)=>y.fnList&&y.fnList(...e)),type:"reset"},"취소")])])])])])])])}a(7658),a(2062);var D={data(){return{idx:this.$route.query.idx,email:"",type:"",chkImg:!1,title:"",author:"",contents:"",imagePreviewUrl:"",imgName:"",created_at:"",password:"",emailRegex:/^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/,allSpecial:/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,notNumber:/[0-9]/g,titEntered:!1,authorEntered:!1,emailEntered:!1,typeEntered:!1,contentsEntered:!1,passwordEntered:!1,chkAgree:!1}},computed:{requestBody(){return this.$route.query}},watch:{title:{handler(e){console.log(e),this.allSpecial.test(e)&&(alert("제목에 특수문자는 입력 될 수 없습니다."),this.title=e.substring(0,e.length-1),this.titEntered=!1),e.length>2&&(this.titEntered=!0)},deep:!0,immediate:!0},author:{handler(e){console.log(e),this.allSpecial.test(e)&&(alert("이름에 특수문자는 입력 될 수 없습니다."),this.author=e.substring(0,e.length-1),this.authorEntered=!1),this.notNumber.test(e)&&(alert("작성자명에 숫자를 입력할 수 없습니다."),this.author=e.substring(0,e.length-1),this.authorEntered=!1),e.length>2&&(this.authorEntered=!0)},deep:!0,immediate:!0},password:{handler(e){this.allSpecial.test(e)&&(console.log("암호에 특수문자 입력됨"),alert("암호에는 특수문자를 사용할 수 없습니다."),this.password=e.substring(0,e.length-1),this.passwordEntered=!1),e.length>3&&(this.passwordEntered=!0)},deep:!0,immediate:!0},email:{handler(e){console.log(e),this.emailRegex.test(e)&&(this.emailEntered=!0)},deep:!0,immediate:!0},type:{handler(e){this.typeEntered=""!=e},deep:!0,immediate:!0},contents:{handler(e){e.length>3&&(this.contentsEntered=!0)},deep:!0,immediate:!0},chkAgree:{handler(e){this.chkAgree=!!e},deep:!0,immediate:!0}},mounted(){this.fnGetView()},methods:{fnGetView(){void 0!==this.idx&&this.$axios.get(this.$serverUrl+"/board/"+this.idx,{params:this.requestBody}).then((e=>{this.title=e.data.title,this.type=e.data.type,this.author=e.data.author,this.password=e.data.password,this.contents=e.data.contents,this.imgName=e.data.fileName})).catch((e=>{console.log(e)}))},fnList(){delete this.requestBody.idx,this.$router.push({path:"./BoardList",query:this.requestBody})},fnView(e){this.requestBody.idx=e,this.$router.push({path:"../Board/BoardView",query:this.requestBody})},submitForm(){},handleImageUpload(e){this.imageFile=e.target.files[0],this.imgName=e.target.files[0].name,this.imagePreviewUrl=URL.createObjectURL(this.imageFile),console.log("handleImgUp",this.imageFile,this.imgName,this.imagePreviewUrl)},resetImage(){this.imageFile=null,this.imagePreviewUrl="",this.imgName=""},fnSave(){const e=this.$serverUrl+"/board",t=new FormData;t.append("title",this.title),t.append("author",this.author),t.append("email",this.email),t.append("type",this.type),t.append("password",this.password),t.append("contents",this.contents),t.append("chkAgree",this.chkAgree),this.chkImg?t.append("file",this.imageFile):this.chkImg||t.append("file",""),void 0===this.idx?this.$axios.post(e,t,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{alert("글이 저장되었습니다."),this.fnView(e.data.idx)})).catch((e=>{e.message.indexOf("Network Error")>-1?alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요."):alert("err_2번")})):this.$axios.post(e,t,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{alert("글이 수정 되었습니다."),this.fnView(e.data.idx)})).catch((e=>{e.message.indexOf("Network Error")>-1&&alert("네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.")}))}}},G=a(3744);const Z=(0,G.Z)(D,[["render",j],["__scopeId","data-v-288b8630"]]);var O=Z}}]);
//# sourceMappingURL=30.79fc85dc.js.map