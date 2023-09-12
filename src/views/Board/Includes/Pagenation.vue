<template>
  <ul class="pagination">
    <li>
      <button
        class="btnPrev btnCst"
        :class="
          sendCurrent === 1
            ? 'disabled'
            : ''
        "
        @click="sendPage('stepMin')"
      >
        <span>이전</span>
      </button>
      </li>
    <li
        v-for="page in sendPaging"
        :key="page"
    >
      <button
          @click="sendPage(page)"
          :class="{ active: sendCurrent === page }"
          class="page"
          type="button">
        {{ page }}
      </button>
    </li>
    <li>
      <button
        class="btnNext btnCst"
        :class="
          onLast === true
            ? 'disabled'
            : ''
        "
        @click="sendPage('stepPlus')"
      >
        <span>다음</span>
      </button>
    </li>
  </ul>
</template>
<style scoped>
  .pagination {text-align: center;}
  .btnPrev:after {content:'\E96F'; font-family: 'MDL2',serif;}
  .btnNext:after {content:'\E970'; font-family: 'MDL2',serif;}
  .btnCst {
    border: none;
    box-shadow: none;
  }
  .btnCst > span {
    display:inline-block;
    text-indent: -9999px;
  }
</style>
<script>
export default {
  props: ['sendPaging', 'sendCurrent', 'lastPage'],
  name: 'PageNation',
  data: () => ({}),
  computed: {
    paging () {
      return this.$props.sendPaging
    },
    onLast () {
      return this.lastPage
    }
  },
  mounted () {
  },
  methods: {
    sendPage (e) {
      this.$emit('getPage', e)
    }
  }
}
</script>
