<template>
  <!-- Header -->
  <header id="header">
    <div class="headerInner">
      <div class="headerLogo">
        <LogoSvg></LogoSvg>
      </div>
      <vueTyperNext
        data="안녕하세요.🔈 한준희 입니다!"
        class="headerTyping"
        :typeSpeed="80"
        cursorChar="_"
      >
      </vueTyperNext>
      <ul class="icons headerIcons">
        <li><a href="#"><i class="icon pi pi-youtube"><span>유튜브 바로가기</span></i></a></li>
        <li><a href="#"><i class="icon pi pi-instagram"><span>인스타그램 바로가기</span></i></a></li>
        <li><a href="#"><i class="icon pi pi-github"><span>깃허브 바로가기</span></i></a></li>
      </ul>
    </div>
  </header>
</template>
<style scoped>
  .headerLogo {width: 4em; height: max-content; margin-right: 2em;}
  .headerInner {display: flex; align-items: flex-end;}
  .headerInner .headerTit {flex: 1 1 auto; display: flex;}
  .headerInner::v-deep .headerTyping {font-size: 2em; text-overflow: ellipsis; white-space: nowrap; overflow: hidden; line-height:1.1; height: max-content;}
  .headerIcons {height: max-content; margin-left: auto;}
  @media screen and (max-width: 1200px) {
    .headerInner::v-deep .headerTyping {font-size: 1.6em;}
  }
  @media screen and (max-width: 780px) {
    .headerInner::v-deep .headerTyping {font-size: 1.3em; height: fit-content;}
  }
</style>
<script>
import LogoSvg from '../Logo/index'
import { vueTyperNext } from 'vue-typer-next'
export default {
  name: 'CommonHeader',
  components: {
    LogoSvg,
    vueTyperNext
  }
}
</script>
