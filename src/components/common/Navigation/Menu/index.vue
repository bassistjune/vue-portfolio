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
            v-if="!item.children"
            @click.passive="clickSame()"
            :to="item.path">{{ item.name }}</router-link>
        <span
            v-else
            class="opener"
            :class="{ activeMenu: fullPath.includes(item.path) === true }"
        >
            {{ item.name }}
        </span>
        <ul
          v-if="item.children"
        >
          <li
            v-for="(item, idx) in item.children"
            :key="idx"
          >
            <router-link
              @click.passive="clickSame()"
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
        console.log(val)
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
    clickSame () {
    },
    childHasActive () {}
  }
}
</script>
