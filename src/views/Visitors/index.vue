<template>
  <div class="sub_wrap">
    <div class="row gtr-200">
      <div class="col-6 col-12-medium">
        <h3 class="alignC">ToDo 리스트</h3>
        <div class="visitList">
          <p>개수: <span>{{ $store.state.visitors.length }} <em class="sm_red">(샘플 제외)</em></span></p>
          <div class="visitor todo">
            <div class="visContent">ToDoList 샘플</div>
            <div class="btns">
              <button class="disabled" type="button">완료</button>
              <button class="visDel disabled" type="button">삭제</button>
            </div>
          </div>
          <Visitors
            v-for="(visitor, i) in $store.state.visitors"
            :key="i"
            :visitor="visitor"
          ></Visitors>
        </div>
      </div>
      <div class="col-6 col-12-medium">
        <h3 class="alignC">ToDo 등록</h3>
        <p class="tIndent">d</p>
        <ul class="cRow actions">
          <li class="sideItem">
            내용
          </li>
          <li class="bigItem">
            <input
              type="text"
              v-model="newVisitor"
              placeholder="ToDoList 내용을 작성해주세요."
              @keypress.enter="addVisitor"
              maxlength="20"
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
import metaSetting from '@/components/mixins/metaSet'
import Visitors from './includes/visitors'
export default {
  components: { Visitors },
  mixins: [metaSetting],
  data: () => ({
    newVisitor: ''
  }),
  mounted () {
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
  .sideItem {width: auto; flex: 0.1 1 auto; display: flex; align-items: center; font-weight: 600; line-height: 1.1;}
  .bigItem {width: auto; flex: 1 1 auto;}
  .sideMarginAt {display: block; margin: 0 auto;}
  .alignC {text-align: center;}
  .visitor {overflow: hidden;}
  .tIndent {text-indent: -9999px;}
  .todo {display: flex; gap: 0.5em;}
  .todo + .todo {margin-top: 1em;}
  .visContent {
    font-weight: 600;
    background: rgba(230, 235, 237, 0.25);
    border-radius: 0.375em;
    border: solid 1px rgba(210, 215, 217, 0.75);
    color: #333;
    font-size: 1em;
    margin: 0 0 0 0;
    padding: 0.25em 0.65em;
    width: auto;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }
  .is-complete .visContent {
    text-decoration: line-through;
  }
  .btns {display: flex; gap: 0.5em;}
  .btns > button {box-shadow: none; border: 2px solid #119fcd; line-height: 100%; }

  .sm_red {font-style: normal; color: firebrick; font-size: 0.8em; }
</style>
