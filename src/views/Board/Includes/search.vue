<template>
  <div class="__relative">
    <div class="posRel">
      <form method="post" action="#">
        <input type="text" name="query" v-model="searchValue" id="query" class="searchInput" placeholder="찾는 글의 제목을 입력해주세요." @keypress.enter="clickSearch()" />
        <button ref="btnS" @click="clickSearch()" type="button" class="btnSearch __absoluteR"><span class="__hide">검색버튼</span></button>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .__relative {position: relative; padding: 60px 0 0; max-width: 600px; margin: 0 auto;}
  .posRel {position: relative;}
  .__absoluteR {position: absolute; right: 0; top:0; bottom : 0;}
  .btnSearch { font-family: "MDL2", sans-serif;border: none; box-shadow: none; }
  .btnSearch::after {content: '\E71E'; font-weight: 900; font-size: 2.1em;}
  .__hide {display: inline-block; text-indent: -9999px;}

  @media screen and (max-width: 1280px) {
    .__relative {position: relative; padding: 40px 40px;}
  }
  @media screen and (max-width: 980px) {
    .__relative {position: relative; padding: 20px 40px;}
  }
  @media screen and (max-width: 640px) {
    .__relative {position: relative; padding: 20px 25px;}
  }
</style>

<script>
export default {
  name: 'BoardSearch',
  data: () => ({
    searchValue: '',
    searchVal: ''
  }),
  watch: {
    searchValue: {
      handler (v) {
        console.log('v', v)
        this.searchVal = v
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
    window.addEventListener('keydown', (e) => {
      const key = e.which || e.keyCode
      if (key === 13) {
        this.$nextTick(() => {
          this.$refs.btnS.focus()
          this.clickSearch()
        })
      }
    })
  },
  methods: {
    clickSearch () {
      const emitVal = this.searchVal
      this.$emit('getSearch', emitVal)
      console.log('클릭됨')
    }
  }
}
</script>
