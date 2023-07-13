import { useMeta } from 'vue-meta'

const metaSetting = {
  computed: {
    routeName () {
      return this.$route.name
    }
  },
  mounted () {
    useMeta({
      title: '한준희의 홈페이지 - ' + `${this.routeName}` + ' 페이지',
      meta: [
        { vmid: 'description', name: 'description', content: `${this.routeName}` + 'Page' },
        { vmid: 'keywords', name: 'keywords', content: 'javascript, vue, html, vue.js, nuxt.js, node.js, 프론트엔드' }
      ]
    })
    console.log('routeName', this.routeName)
  }
}

export default metaSetting
