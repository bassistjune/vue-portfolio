<template>
  <div id="wrapper">
    <div id="main">
      <div class="inner">
        <InitHeader></InitHeader>
        <router-view></router-view>
        <InitFooter></InitFooter>
      </div>
    </div>

    <Navigation></Navigation>
  </div>
</template>
<style scoped></style>
<script>
import InitHeader from '@/components/common/Header/index'
import InitFooter from '@/components/common/Footer/index'
import Navigation from '@/components/common/Navigation/index.vue'

// Ui용 제이쿼리 묶음
import basicFuncs from '@/assets/js/basicFuncs'

// 전역 layout.js
import layoutJs from '@/assets/js/layout'
// import router from "@/router";
export default {
  name: 'BasicLayer',
  components: {
    InitHeader,
    Navigation,
    InitFooter
  },
  data: () => ({
    basicFuncs,
    layoutJs
  }),
  computed: {
    thisRouter () {
      return this.$router
    }
  },
  beforeMounted () {
    this.basicFuncs.basicWrapFunc()
  },
  mounted () {
    // console.log('router', this.thisRouter)
    // const $ = this.jQuerys.jqSet
    // console.log('basicFuncs', this.basicFuncs)
    // console.log('basicFuncs.basicWrapFunc', this.basicFuncs.basicWrapFunc)
    // console.log('jQuerys', this.jQuerys.jqWrapFunc)
    // console.log('this.layoutJs.layoutFunc', this.layoutJs.layoutFunc)

    document.body.classList.remove('is-preload')
    // console.log('window.location.hostname', window.location.hostname)
    this.layoutJs.layoutFunc()
  },
  methods () {}
}
</script>
