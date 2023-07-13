<template>
  <div id="sidebar">
    <div class="inner">
      <!-- 로고 -->
      <NavLogo></NavLogo>
      <!-- 로고 -->
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
import NavLogo from './NavLogo/index'
import NavMenu from './Menu/index'
import NavContact from './Contact/index'

export default {
  name: 'CommonNavigation',
  components: {
    NavLogo,
    NavMenu,
    NavContact
  }
}
</script>
