<template>
  <div>
    <metainfo></metainfo>
    <router-view></router-view>
  </div>
</template>

<script>
import { useMeta } from 'vue-meta'
export default {
  setup () {
    useMeta({
      title: '한준희의 홈페이지',
      meta: [
        { vmid: 'description', name: 'description', content: '한준희의 홈페이지' },
        { vmid: 'keywords', name: 'keywords', content: 'javascript, vue, html, vue.js, nuxt.js, node.js, 프론트엔드' },
      ]
    })
  },
  name: 'App',
  components: {},
  mounted () {
    const a = ''
    console.log(a)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}
</style>
