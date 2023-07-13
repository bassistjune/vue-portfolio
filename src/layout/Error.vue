<template>
  <div class="errorWrap">
    <router-view></router-view>
  </div>
</template>
<style scoped>
  .errorWrap {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>

export default {
  name: 'ErrorLayer',
  components: {
  },
  data: () => ({

  }),
  beforeMounted () {
  },
  mounted () {

  },
  methods () {}
}
</script>
