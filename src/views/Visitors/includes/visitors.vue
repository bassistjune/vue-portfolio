<template>
  <div
    :class="`visitor ${ visitor.done ?  'is-complete' : '' }`"
  >
    <div class="visContent">
      {{ visitor.content }}
    </div>
    <div class="btns">
      <button @click="toggleDone" type="button">{{ visitor.done ? 'Undo' : 'Done' }}</button>
      <button @click="removeVisitor" class="visDel" type="button">삭제</button>
    </div>
  </div>
</template>
<style scoped></style>
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