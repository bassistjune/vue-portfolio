<template>
  <div>
    <section class="sub_wrap">
      <div class="mW1200">
        <h3>게시판 글쓰기</h3>
        <p class="colRed">* 모든 입력란을 기재하셔야 글이 작성됩니다.</p>
          <div class="row gtr-uniform">
            <div class="col-12">
              <input type="text" v-model="title" id="board-tit" placeholder="제목을 입력하세요.">
            </div>
            <div class="col-6 col-12-xsmall">
              <input type="text" v-model="author" id="board-name" placeholder="이름을 입력하세요.">
            </div>
            <div class="col-6 col-12-xsmall">
              <input type="email" v-model="email" id="board-mail" placeholder="이메일을 입력하세요.">
            </div>
            <!-- Break -->
            <div class="col-12">
              <select v-model="type">
                <option value="" selected="selected">글 종류 선택</option>
                <option value="[일반]">일반게시글</option>
                <option value="[유머]">유머게시글</option>
                <option value="[기타]">기타게시글</option>
              </select>
            </div>
            <div class="col-12">
              <input type="password" v-model="password" maxlength="6" id="board-pass" placeholder="암호를 입력하세요.(4~6글자)">
            </div>
            <div class="col-4 col-12-small">
              <input type="radio" id="demo-priority-low" name="demo-priority" class="trueImg" v-model="chkImg" :value="true">
              <label for="demo-priority-low">이미지 파일 추가</label>
            </div>
            <div class="col-8 col-12-small">
              <input type="radio" id="demo-priority-normal" name="demo-priority" checked="" v-model="chkImg" :value="false">
              <label for="demo-priority-normal">이미지 파일 추가 안함</label>
            </div>
            <div
                v-show="chkImg"
                class="ImgWrap row col-12">
              <div class="col-8 col-12-small">
                <input type="text" class="__fileName" :value="imgName" placeholder="이미지명" readonly>
              </div>
              <div class="col-4 col-12-small">
                <input type="file" id="image-file" accept="image/*" @change="handleImageUpload">
                <label for="image-file" class="button">파일찾기</label>
              </div>
              <div class="col-12">
                <div v-if="imagePreviewUrl" class="image-preview">
                  <p
                      class="previewImgBg positionR"
                      :style="`background-image: url(${imagePreviewUrl})`"
                  >
                    <button class="restPreview" type="reset" @click="resetImage"><span>삭제버튼</span></button>
                  </p>
                  <!--                      <img class="previewImg" :src="imagePreviewUrl" alt="Image Preview">-->
                </div>
              </div>
            </div>
            <!-- Break -->
            <div class="col-12">
              <textarea name="demo-message" v-model="contents" id="demo-message" placeholder="내용을 입력 해주세요." rows="6" onresize="none"></textarea>
            </div>
            <!-- Break -->
            <div class="col-12 col-12-small">
              <input type="checkbox" id="agree" name="agree" checked="" v-model="chkAgree">
              <label for="agree">게시물이 공유되는 것에 동의합니다.</label>
            </div>
            <div class="col-12">
              <ul class="actions">
                <li>
                  <button
                      @click="fnSave()"
                      type="submit"
                      class="primary"
                      :class="
                        !titEntered ||
                        !authorEntered ||
                        !emailEntered ||
                        !passwordEntered ||
                        !typeEntered ||
                        !contentsEntered ||
                        !chkAgree
                          ? 'disable'
                        : ''
                       "
                  >저장</button>
                </li>
                <li><button type="reset">취소</button></li>
              </ul>
            </div>
          </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.disable {
  box-shadow: inset 0 0 0 2px #eeeeee !important;
  background-color: #eeeeee;
  color: #ffffff !important;
  pointer-events: none !important;
}
.positionR {position: relative;}
.restPreview {position: absolute; right: 0.6em; top: 0.6em; font-size: 1.0em; padding: 0; line-height: 1; height: fit-content; box-shadow: none; border: none; background: none;}
.restPreview > span {display: inline-block; text-indent: -9999px;}
.restPreview::after {content: '\EF2C'; font-family: "MDL2", sans-serif;}
.mW1200 {width: 100%; margin: 0 auto; max-width: 800px;}
.colRed {color: red; font-size: 0.75em;}
.previewImg {}
.previewImgBg {background-size: contain; width: 16em; height: 9em;}
input[type="file"] {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  clip: rect(0,0,0,0);
  overflow: hidden;
  padding: 0;
}
</style>
<script>
export default {
  data () {
    return {
      idx: this.$route.query.idx,
      email: '',
      type: '',
      chkImg: false,
      title: '',
      author: '',
      contents: '',
      imagePreviewUrl: '',
      imgName: '',
      created_at: '',
      password: '',
      emailRegex: /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/,
      allSpecial: /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,
      notNumber: /[0-9]/g,
      titEntered: false,
      authorEntered: false,
      emailEntered: false,
      typeEntered: false,
      contentsEntered: false,
      passwordEntered: false,
      chkAgree: false
    }
  },
  computed: {
    requestBody () {
      return this.$route.query
    }
  },
  watch: {
    title: {
      handler (v) {
        console.log(v)
        if (this.allSpecial.test(v)) {
          console.log('제목에 특수문자 입력됨')
          alert('제목에 특수문자는 입력 될 수 없습니다.')
          this.title = v.substring(0, v.length - 1)
          this.titEntered = false
        }
        if (v.length > 2) {
          this.titEntered = true
        }
      },
      deep: true,
      immediate: true
    },
    author: {
      handler (v) {
        console.log(v)
        if (this.allSpecial.test(v)) {
          console.log('이름에 특수문자 입력됨')
          alert('이름에 특수문자는 입력 될 수 없습니다.')
          this.author = v.substring(0, v.length - 1)
          this.authorEntered = false
        }
        if (this.notNumber.test(v)) {
          console.log('작성자에 숫자입력')
          alert('작성자명에 숫자를 입력할 수 없습니다.')
          this.author = v.substring(0, v.length - 1)
          this.authorEntered = false
        }
        if (v.length > 2) {
          this.authorEntered = true
        }
      },
      deep: true,
      immediate: true
    },
    password: {
      handler (v) {
        console.log(v)
        if (this.allSpecial.test(v)) {
          console.log('암호에 특수문자 입력됨')
          alert('암호에는 특수문자를 사용할 수 없습니다.')
          this.password = v.substring(0, v.length - 1)
          this.passwordEntered = false
        }
        if (v.length > 3) {
          this.passwordEntered = true
        }
      },
      deep: true,
      immediate: true
    },
    email: {
      handler (v) {
        console.log(v)
        if (this.emailRegex.test(v)) {
          this.emailEntered = true
          return
        }
        console.log('emailEntered', this.emailEntered)
      },
      deep: true,
      immediate: true
    },
    type: {
      handler (v) {
        console.log(v)
        if (v == '') {
          this.typeEntered = false
        } else {
          this.typeEntered = true
        }
        console.log('typeEntered', this.typeEntered)
      },
      deep: true,
      immediate: true
    },
    contents: {
      handler (v) {
        if (v.length > 3) {
          this.contentsEntered = true
        }
        console.log('contents', v)
      },
      deep: true,
      immediate: true
    },
    chkAgree: {
      handler (v) {
        if (v) {
          this.chkAgree = true
        } else {
          this.chkAgree = false
        }
        console.log('this.chkAgree', this.chkAgree)
        console.log('titEntered,authorEntered,emailEntered,typeEntered,contentsEntered,chkAgree', this.titEntered, this.authorEntered, this.passwordEntered, this.emailEntered, this.typeEntered, this.contentsEntered, this.chkAgree)
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
    this.fnGetView()
    console.log('type', this.type)
    console.log('this.idx', this.idx)
  },
  methods: {
    fnGetView () {
      if (this.idx !== undefined) {
        this.$axios.get(this.$serverUrl + '/board/' + this.idx, {
          params: this.requestBody
        }).then((res) => {
          this.title = res.data.title
          this.type = res.data.type
          this.author = res.data.author
          this.password = res.data.password
          this.contents = res.data.contents
          this.imgName = res.data.fileName
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    fnList () {
      delete this.requestBody.idx
      this.$router.push({
        path: './list',
        query: this.requestBody
      })
    },
    fnView (idx) {
      this.requestBody.idx = idx
      this.$router.push({
        path: '../Board/BoardView',
        query: this.requestBody
      })
    },
    submitForm () {
      // 서버로 데이터 전송 및 게시물 저장 로직 추가
      console.log('게시물 저장')
    },
    handleImageUpload (event) {
      this.imageFile = event.target.files[0]
      this.imgName = event.target.files[0].name
      this.imagePreviewUrl = URL.createObjectURL(this.imageFile)
      console.log('handleImgUp',
        this.imageFile,
        this.imgName,
        this.imagePreviewUrl
      )
    },
    resetImage () {
      this.imageFile = null
      this.imagePreviewUrl = ''
      this.imgName = ''
    },
    fnSave () {
      const apiUrl = this.$serverUrl + '/board'
      const formData = new FormData()
      formData.append('title', this.title)
      formData.append('author', this.author)
      formData.append('email', this.email)
      formData.append('type', this.type)
      formData.append('password', this.password)
      formData.append('contents', this.contents)
      formData.append('chkAgree', this.chkAgree)
      if (this.chkImg) {
        // 이미지가 첨부되었을 경우 FormData에 이미지 파일 추가
        formData.append('file', this.imageFile)
      }
      if (this.idx === undefined) {
        // INSERT
        this.$axios.post(apiUrl, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
          .then((res) => {
            alert('글이 저장되었습니다.')
            console.log('업로드 내용', res)
            this.fnView(res.data.idx)
          }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            } else {
              alert('err_2번')
            }
          })
      } else {
        // UPDATE
        this.$axios.post(apiUrl, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
          .then((res) => {
            alert('글이 수정 되었습니다.')
            this.fnView(res.data.idx)
          }).catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
      }
    }
  }
}
</script>
