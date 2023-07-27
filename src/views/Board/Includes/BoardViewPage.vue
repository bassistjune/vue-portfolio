<template>
  <div>
    <section class="sub_wrap">
      <div class="boardViewTop">
        <h4>게시물 보기</h4>
        <ul v-if="allData" class="listD">
          <li>
            <button @click="callModal('fix')" class="button primary small" type="button">수정</button>
          </li>
          <li>
            <button @click="callModal('del')" class="button small" type="button">삭제</button>
          </li>
        </ul>
      </div>
      <div>
        <BoardView :boardInfo="allData"></BoardView>
        <BoardViewBtn
            @getList="fnGoList()" @getPrev="fnPrev()" @getNext="fnNext()"
            :boardPrev="disablePrev" :boardNext="disableNext"
        ></BoardViewBtn>
      </div>
      <!-- 모달레이어 -->
      <Modal
          v-if="isShowModal"
          :title="pageTit"
          @close="close"
      >
        <template #body>
          <form action="">
            <input v-model="inpPassword" autocomplete="off" maxlength="6" placeholder="암호를 입력하세요.(4~6글자)" type="password">
          </form>
        </template>
        <template #footer>
          <button
              :class="!passwordEntered
                ? 'disabled'
                : ''
              "
              @click="sendSubmit()"
              class="button primary"
              type="button"
          >확인</button>
        </template>
      </Modal>
      <!-- 모달레이어 -->
    </section>
  </div>
</template>

<style scoped>
.boardViewTop {
  display: flex;
  align-items: center;
  margin-bottom: 1em;
}
.boardViewTop > h4 {
  margin: 0;
}
.listD {
  display: flex;
  gap: 0.2em;
  margin-left: auto;
  list-style: none;
  padding: 0;
  margin-bottom: 0;
}
</style>

<script>
import ModalOption from '@/components/mixins/modalOpt'
import BoardView from './BoardView'
import BoardViewBtn from './BoardViewBtn'

export default {
  mixins: [ModalOption],
  components: {
    BoardView,
    BoardViewBtn
  },
  data () {
    return {
      pageTit: 'boardViews',
      idx: '',
      resAll: '',
      allData: '',
      type: '',
      title: '',
      password: '',
      author: '',
      imageUrl: '',
      contents: '',
      routeIdx: Number,
      created_at: '',
      lists: [], // 변경: 배열로 초기화
      disablePrev: false,
      disableNext: false,
      inpPassword: '',
      allSpecial: /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,
      passwordEntered: false,
      testItem: '',
      modalType: ''
    }
  },
  created () {
    this.getFnList() // 변경: 리스트 데이터를 가져오는 함수 호출
  },
  computed: {
    requestBody () {
      return this.$route.query
    },
    listLength () {
      return this.lists.length
    }
  },
  watch: {
    lists: {
      deep: true,
      immediate: true,
      handler (val) {
        console.log('listLengthOnWatch', val)
        // 변경: lists에 대한 변경 감지 후 로직 수행
        this.getFirstLast()
      }
    },
    $route: {
      handler (val) {
        console.log('route.query', val.query)
        this.routeIdx = val.query.idx
      },
      deep: true,
      immediate: true
    },
    inpPassword: {
      handler (v) {
        console.log(v)
        console.log('passwordEntered', this.passwordEntered)
        if (this.allSpecial.test(v)) {
          console.log('암호에 특수문자 입력됨')
          alert('암호에는 특수문자를 사용할 수 없습니다.')
          this.inpPassword = v.substring(0, v.length - 1)
        }
        this.pwEnter(v)
        console.log('password chk1', v, this.password)
        console.log('password chk2', this.inpPassword, this.password)
      },
      deep: true,
      immediate: true
    },
    password: {
      handler (e) {
        console.log('password__watcher', e)
      },
      deep: true,
      immediate: true
    }
  },
  beforeDestroy() {
    this.passwordEntered = false
  },
  mounted () {
    this.fnGetView()
    this.getFirstLast()
    console.log('this.listLength = this.lists.length_____', Number(this.lists.length))
    console.log('this.lists', this.lists)
    console.log('this.$data', this)
    console.log('listLength....', this.listLength)
  },
  methods: {
    getFirstLast () {
      console.log('methodsItem', this, this.lists, this.listLength)
      console.log('Number(this.routeIdx),this.listLength', Number(this.routeIdx), this.listLength)
      if (Number(this.routeIdx) === this.listLength) {
        this.disableNext = true
      } else if (this.routeIdx === Number(1)) {
        this.disablePrev = true
      }
      console.log('disablePrev, disableNext', this.disablePrev, this.disableNext)
    },
    async fnGetView () {
      try {
        const res = await this.$axios.get(this.$serverUrl + '/board/' + this.routeIdx, {
          params: this.requestBody
        })
        console.log('res', res)
        this.resAll = res
        this.allData = res.data
        this.imageUrl = res.data.file_url
        this.password = res.data.password
        this.type = res.data.type
        this.title = res.data.title
        this.author = res.data.author
        this.contents = res.data.contents
        this.created_at = res.data.created_at
        console.log('res데이터 수신완료', res.data)
        this.pwEnter(this.inpPassword)
      } catch (err) {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      }
    },
    async getFnList () {
      try {
        const res = await this.requestData()
        this.lists = res
        console.log('getFnListInfo_res', res)
      } catch (err) {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      }
    },
    requestData () {
      return this.$axios.get(this.$serverUrl + '/board/list', {
        params: this.requestBody,
        headers: {}
      }).then((res) => res.data)
    },
    fnUpdate () {
      this.$router.push({
        path: './BoardWrite',
        query: this.requestBody
      })
    },
    sendSubmit () {
      if (this.modalType === 'fix') {
        this.fnUpdate()
      } else if (this.modalType === 'del') {
        this.fnDelete()
      }
    },
    fnDelete () {
      if (!confirm('삭제하시겠습니까?')) return

      this.$axios.delete(this.$serverUrl + '/board/' + this.idx, {})
        .then(() => {
          alert('삭제되었습니다.')
          this.getFnList()
        }).catch((err) => {
          console.log(err)
        })
    },
    fnPrev () {
      console.log('route', this.$route.query)
      console.log('this.routeIdx - 1', `${this.routeIdx--}`)
      this.$router.push({ path: 'boardView', query: { idx: `${this.routeIdx--}` } }).catch(() => {})
    },
    fnNext () {
      console.log('route', this.$route.query)
      console.log('this.routeIdx + 1', `${this.routeIdx++}`)
      this.$router.push({ path: 'boardView', query: { idx: `${this.routeIdx++}` } }).catch(() => {})
    },
    fnGoList () {
      this.$router.push({ path: 'boardList' })
    },
    pwEnter (v) {
      this.passwordEntered = this.password === this.inpPassword
    }
  }
}
</script>
