<template>
  <div class="wideFlex01">
    <a
      :class="
        $props.boardPrev === true
          ? 'disable'
          : ''"
      href="javascript:void(0);" @click="goPrev()" class="button">이전</a>
    <a href="javascript:void(0);" @click="goList()" class="button">목록으로</a>
    <a
        :class="
        $props.boardNext === true
          ? 'disable'
          : ''"
      href="javascript:void(0);" @click="goNext()" class="button">다음</a>
  </div>
</template>

<style scoped>
  .wideFlex01 {display: flex; justify-content: center;}
  .wideFlex01 > a {margin: 0 1em;}
  .disable {
    box-shadow: inset 0 0 0 2px #eeeeee !important;
    color: #eeeeee !important;
    pointer-events: none !important;
  }
</style>
<script>
export default {
  props: ['boardPrev', 'boardNext'],
  methods: {
    goList () {
      this.$emit('getList')
    },
    goPrev () {
      this.$emit('getPrev')
    },
    goNext () {
      this.$emit('getNext')
    }
  }
}
</script>
