<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th class="notMobile __alginC">번호</th>
          <th class="notMobile __alginC">제목</th>
          <th class="notMobile __alginC">작성자</th>
          <th class="notMobile __alginC">작성일</th>
          <th class="inMobile">목록</th>
        </tr>
      </thead>
      <tbody v-cloak>
        <tr
          v-for="(item) in lists"
          :key="item.id"
        >
          <td class="notMobile">{{ item.idx }}</td>
          <td class="__alginL">
            <a href="javascript:void(0)" @click="sendListIdx(`${item.idx}`)">
              <span
                class="accent"
              >{{ item.type }}</span>
              {{ item.title }}
            </a>
          </td>
          <td>{{ item.author }}</td>
          <td>{{ item.created_at.substr(0, 10) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
[v-cloak] > * {display: none;}
.notMobile {}
.table-wrapper thead th:nth-child(1) {width: 10%;}
.table-wrapper thead th:nth-child(3) {width: 10%;}
.table-wrapper thead th:nth-child(4) {width: 15%;}
.inMobile {display: none;}
@media screen and (max-width: 1280px) {}
@media screen and (max-width: 980px) {
  .table-wrapper thead th:nth-child(1) {width: 6%;}
  .table-wrapper thead th:nth-child(3) {width: 15%;}
  .table-wrapper thead th:nth-child(4) {width: 20%;}
}
@media screen and (max-width: 768px) {
  .notMobile {display: none;}
  .inMobile {display: block;}
  table {display: block;}
  table thead {display: block;}
  table tbody {display: block;}
  table tr {display: block;}
  table th, table td {display: block; text-align: left !important;}
  table td:nth-child(3) {display:inline-block; font-size: 0.6em;}
  table td:nth-child(3)::after {content: '|'; margin-left: 1.75em; display: inline-block; color: #333333;}
  table td:nth-child(4) {display:inline-block; font-size: 0.6em;}
}

  .table-wrapper thead th.__alginC {text-align: center;}
  .table-wrapper tbody td.__alginL {text-align: left;}
  .table-wrapper tbody td {text-align: center;}
  .__alginC {text-align: center;}
  .__alginL {text-align: left;}
  .accent {font-weight: bold;}
</style>
<script>

export default {
  name: 'BoardList',
  props: ['sendList'],
  data: () => ({
    lists: ''
  }),
  computed: {
  },
  watch: {
    sendList: {
      handler (val) {
        // console.log('sendList', val.slice().reverse())
        this.lists = val
      }
    }
    // $refs: {
    //   handler (val) {
    //     console.log('refs', val)
    //   },
    //   deep: true,
    //   immediate: true
    // }
  },
  mounted () {
    // this.$nextTick(() => {
    //   console.log('this.$refs.boardType', this.$refs.boardType)
    // })
  },
  methods: {
    sendListIdx (n) {
      this.$emit('sendIdx', n)
    }
  }
}
</script>
