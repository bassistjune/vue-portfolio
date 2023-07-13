<template>
  <router-view :key="$route.fullPath"></router-view>
</template>
<style scoped>

</style>
<script>

export default {
  data: () => ({
    BoardRoute: ''
  }),
  watch: {
    $route: {
      handler (val) {
        console.log('BoardRouter', val)
        this.BoardRoute = val.fullPath
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
    console.log('this.BoardRoute', this.BoardRoute)
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
