<template>
  <router-view :key="$route.fullPath"></router-view>
</template>
<style scoped>

</style>
<script>

import metaSetting from "@/components/mixins/metaSet";

export default {
  mixins: [metaSetting],
  data: () => ({
    BoardRoute: ''
  }),
  watch: {
    $route: {
      handler (val) {
        this.BoardRoute = val.fullPath
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.BoardRoute === '/Board') {
        this.$router.replace('/Board/BoardList').then(() => location.reload())
      }
    })
  },
  updated () {
    // this.$nextTick(() => {
    //   if (this.BoardRoute === '/Board') {
    //     this.$router.replace('/Board/BoardList').catch(() => {})
    //   }
    // })
  }
}
</script>
