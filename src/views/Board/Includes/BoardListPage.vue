<template>
  <div>
    <section class="sub_wrap">
      <h4>게시판</h4>
      <div>
        <BoardList :sendList="paginatedData" @sendIdx="boardView"></BoardList>

        <div class="btBoard">
          <PageNation :sendPaging="totalPages" :sendCurrent="currentPage" :lastPage="onLast" @getPage="fnPage"></PageNation>
          <BoardListWriteBtn @fnWrite="gotoWrite"></BoardListWriteBtn>
        </div>
        <BoardSearch @getSearch="fnSearch"></BoardSearch>
      </div>
    </section>
  </div>
</template>
<style scoped>
.btBoard {position: relative;}
@media screen and (max-width: 736px) {
  .btBoard {
    display: flex;
    flex-direction: column-reverse;
    gap: 1.5em;
  }
}
</style>
<script>
import BoardList from './BoardList'
import PageNation from './Pagenation'
import BoardSearch from './search'
import BoardListWriteBtn from './BoardListWriteBtn'
export default {
  components: {
    BoardList,
    PageNation,
    BoardSearch,
    BoardListWriteBtn
  },
  data: () => ({
    requestBody: {},
    list: '',
    sliceList: [],
    no: '',
    currentPage: 1,
    itemsPerPage: 6,
    onLast: false,
    searchValue: ''
  }),
  metaInfo: {
    title: '페이지 타이틀'
  },
  created () {
  },
  computed: {
    created_at () {
      return this.list
    },
    totalPages () {
      const filterList = this.getFilterList()
      return Math.ceil(filterList.length / this.itemsPerPage)
    },
    filterList () {
      return this.sliceList.filter(item => {
        return item.title?.toLowerCase().includes(this.searchValue.toLowerCase())
      }) || ''
    },
    paginatedData () {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.filterList.slice(startIndex, endIndex)
    }
  },
  watch: {
    created_at: {
      handler (val) {
        console.log('created_at', val)
      },
      deep: true,
      immediate: true
    },
    list: {
      handler (v) {
        this.listLength = v.length
      },
      deep: true,
      immediate: true
    },
    sliceList: {
      handler (e) {
        console.log('sliceList__e', e)
      },
      deep: true,
      immediate: true
    },
    totalPages: {
      handler (v) {
        console.log('totalP__watch', v)
      },
      deep: true,
      immediate: true
    },
    currentPage: {
      handler (e) {
        console.log('page___e', e)
        this.onLast = this.totalPages === e
      },
      deep: true,
      immediate: true
    },
    searchValue: {
      handler (e) {
        console.log('searchValueOnPar', e)
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
    this.fnGetList()
    console.log('this.sliceList', this.sliceList)
    console.log('totalPages', this.totalPages)
  },
  methods: {
    fnSearch (e) {
      console.log('e', e)
      this.searchValue = e
      this.getFilterList()
    },
    getFilterList () {
      if (this.searchValue.trim() === '') {
        return this.sliceList // 검색어가 비어있으면 전체 데이터를 반환합니다.
      } else {
        return this.filterList
      }
    },
    fnGetList () {
      this.requestBody = {
        keyword: this.keyword,
        page: this.page,
        size: this.size
      }

      this.$axios.get(this.$serverUrl + 'board/list/', {
        params: this.requestBody,
        headers: {}
      }).then((res) => {
        this.list = res.data
        this.sliceList = res.data.slice().reverse()
        console.log('res', res)
      }).catch((err) => {
        if (err.message.indexOf('Network Error') > -1) {
          alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
        }
      })
    },
    boardView (i) {
      console.log('i', i)
      this.requestBody.idx = i
      this.$router.push({
        path: './BoardView',
        query: this.requestBody
      }).catch(() => {})
    },
    gotoWrite () {
      this.$router.push({
        path: './BoardWrite'
      })
    },
    fnPage (page) {
      if (page === 'stepMin') {
        this.currentPage -= 1
        console.log('page -1')
      } else if (page === 'stepPlus') {
        this.currentPage += 1
        console.log('page +1')
      } else {
        this.currentPage = page
        this.page = page
      }
      console.log('page____________fnpage', page)
    }
  }
}
</script>
