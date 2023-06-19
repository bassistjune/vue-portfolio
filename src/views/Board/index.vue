<template>
  <div>게시판
  <!-- Header -->
    <header id="header">
      <a href="#" class="logo"><strong>Editorial</strong> by HTML5 UP</a>
      <ul class="icons">
        <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
        <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
        <li><a href="#" class="icon brands fa-snapchat-ghost"><span class="label">Snapchat</span></a></li>
        <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
        <li><a href="#" class="icon brands fa-medium-m"><span class="label">Medium</span></a></li>
      </ul>
    </header>
    <section class="sub_wrap">
      <h4>Default</h4>
      <BoardList></BoardList>
      <Pagenation></Pagenation>
    </section>
  </div>
</template>
<style scoped>

</style>
<script>
import BoardList from './Includes/BoardList'
import Pagenation from './Includes/Pagenation'

export default {
  components: {
    BoardList,
    Pagenation
  }
}
</script>
