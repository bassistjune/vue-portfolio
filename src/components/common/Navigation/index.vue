<template>
  <div id="sidebar">
    <div class="inner">
      <!-- 검색 -->
      <NavSearch></NavSearch>
      <!-- 검색 -->
      <!-- 메뉴 -->
      <NavMenu></NavMenu>
      <!-- 메뉴 -->
      <!-- 연락처 -->
      <NavContact></NavContact>
      <!-- 연락처 -->
    </div>
  </div>
</template>

<style scoped></style>

<script>
import NavSearch from './Search/index'
import NavMenu from './Menu/index'
import NavContact from './Contact/index'

export default {
  name: 'CommonNavigation',
  components: {
    NavSearch,
    NavMenu,
    NavContact
  }
}
</script>
