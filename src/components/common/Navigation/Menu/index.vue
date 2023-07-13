<template>
  <nav id="menu">
    <header class="major">
      <h2>Menu</h2>
    </header>
    <ul>
      <li
          v-for="(item, idx) in routesAll"
          :key="idx"
      >
        <router-link
            v-if="item.name == '게시판' || !item.children"
            @click.passive="clickSame(item.path)"
            :class="{ activeMenu: item.name == '게시판' && fullPath.includes(item.path) === true }"
            :to="item.path">{{ item.name }}</router-link>
        <span
            v-else
            class="opener"
            :class="{ activeMenu: fullPath.includes(item.path) === true }"
        >
            {{ item.name }}
        </span>
        <ul
            v-if="item.children || item.name == '게시판'"
        >
          <li
              v-for="(item, idx) in item.children"
              :key="idx"
          >
            <router-link
                @click.passive="clickSame(item.path)"
                :to="item.path"
            >
              {{ item.name }}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<style scoped></style>
<script>
// import routesList from '@/router'

export default {
  data: () => ({
    beforePath: '',
    nowPath: '',
    fullPath: ''
  }),
  computed: {
    thisRouter () {
      return this.$router
    },
    routeFullpath () {
      return this.$route.fullPath
    },
    routesAll () {
      return this.$routelist[0].children
    }
  },
  watch: {
    routesAll: {
      handler (val) {
        console.log('val', val)
        console.log('val.child', val[0].children)
      },
      deep: true,
      immediate: true
    },
    routeFullpath: {
      handler (val) {
        console.log('routeFullPath', val)
        this.fullPath = val
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
    console.log('currentRoute', this.thisRouter.currentRoute)
    console.log('라우터', this.$router)
    console.log('route', this.$route)
    console.log('_______routes', this.$routelist)
    console.log('routeFullPath:', this.routeFullpath)

    this.childHasActive()
  },
  methods: {
    clickSame (item) {
      console.log('GNB클릭값', item)
      // 네비게이션 메뉴 클릭 시 네비게이션 top 상단으로 이동
      const nav = document.querySelector('#sidebar > .inner')
      nav.scroll({
        top: 0,
        behavior: 'smooth'
      })
      // 클릭 된 메뉴의 path와 라우터 값이 같을 시 새로고침.
      if (item === this.fullPath) {
        this.$router.go(0)
      }
    },
    childHasActive () {}
  }
}
</script>
