트<template>
  <div class="sub_wrap">
    Visitor 페이지
    <div class="row gtr-200">
      <div class="col-6 col-12-medium">
        <div class="visitList">
          {{ $store.state.visitors.length }}
          <Visitors
            v-for="(visitor, i) in $store.state.visitors"
            :key="i"
            :visitor="visitor"
          ></Visitors>
        </div>
      </div>
      <div class="col-6 col-12-medium">
        <h3 class="alignC">글 등록</h3>
        <ul class="cRow actions">
          <li class="sideItem">
            내용
          </li>
          <li class="bigItem">
            <input
              type="text"
              v-model="newVisitor"
              placeholder="방명록 내용을 작성해주세요."
              @keypress.enter="addVisitor"
            />
          </li>
        </ul>

        <button
          class="button sideMarginAt"
          @click="addVisitor"
        >
          등록
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Visitors from './includes/visitors'
export default {
  components: {Visitors},
  data: () => ({
    newVisitor: ''
  }),
  mounted() {
    console.log('this.$store', this.$store)
  },
  methods: {
    addVisitor () {
      console.log('this.newVisitor')
      if (this.newVisitor) {
        this.$store.commit('ADD_VISITOR', this.newVisitor)
        this.newVisitor = ''
      }
    }
  }
}
</script>

<style scoped>
  .cRow {justify-content: stretch; flex-wrap: nowrap;}
  .sideItem {width: auto; flex: 0.2 1 auto; display: flex; align-items: center;}
  .bigItem {width: auto; flex: 1 1 auto;}
  .sideMarginAt {display: block; margin: 0 auto;}
  .alignC {text-align: center;}
</style>
