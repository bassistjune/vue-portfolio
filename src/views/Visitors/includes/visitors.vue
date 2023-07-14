<template>
  <div
    :class="`visitor ${ visitor.done ?  'is-complete' : '' }`"
    class="todo"
  >
    <div class="visContent">
      {{ visitor.content }}
    </div>
    <div class="btns">
      <button @click="toggleDone" type="button">{{ visitor.done ? '취소' : '완료' }}</button>
      <button @click="removeVisitor" class="visDel" type="button">삭제</button>
    </div>
  </div>
</template>
<style scoped>
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

</style>
<script>
export default {
  props: ['visitor'],
  methods: {
    toggleDone () {
      this.$store.commit('TOGGLE_VISITOR', this.visitor)
    },
    removeVisitor () {
      this.$store.commit('REMOVE_VISITOR', this.visitor)
    }
  }
}
</script>