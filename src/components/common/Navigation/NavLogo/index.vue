<template>
  <div class="notMg dpFlex2">
    <div class="navLogo">
      <LogoSvg></LogoSvg>
    </div>
    <ul class="navUtil">
      <li>
<!--        기능 개발중 -->
<!--        <a-->
<!--          class="posRelative"-->
<!--          href=""-->
<!--        >-->
<!--          <i class="pi pi-question-circle"></i>-->
<!--          <div class="tooltipT1">-->
<!--            <em>사이트 가이드 모드</em>-->
<!--            <div>-->
<!--              <input id="switchTog1" class="toggleBtn" type="checkbox">-->
<!--              <label class="toggleBg" for="switchTog1"></label>-->
<!--            </div>-->
<!--          </div>-->
<!--        </a>-->
      </li>
      <li>
        <a
          class="posRelative"
          @click="copyUrl"
          href="">
          <i class="pi pi-paperclip"></i>
          <div class="tooltipT1">
            <em>주소<br>
              복사하기
            </em>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.navLogo {max-width: 100px;}
.notMg {margin: 0 0 0 0 !important;}
.dpFlex2 {display: flex; justify-content: space-between;}
@media screen and (max-width: 980px) {
  .navLogo {max-width: 80px;}
}
@media screen and (max-width: 720px) {
  .navLogo {max-width: 60px;}
}

.navUtil {
  margin: 0; padding: 0;
  font-size: 0;
}
.navUtil > li {
  display: inline-block;
  list-style: none;
  margin: 0; padding: 0;
  font-size: 16px;
}
.navUtil > li:not(:first-child) {margin: 0 0 0 1em;}
.posRelative {position: relative;}
a, em {
  text-decoration: none;
  font-style: normal;
  border-bottom: none;
  color: #3d3d3d;
}
.navUtil > li:hover > a {color: #f37025;}
.navUtil > li:hover > a > .tooltipT1 {display: block;}
.tooltipT1 {display: none; position: absolute; left: -0.5em; top: calc(100% + 0.2em); border: 1px solid #333; border-radius: 0.2em; width: auto; padding: 0.1em 0.1em; background-color: #fff;}
.tooltipT1:before {content: ''; position: absolute; top: 0; left: 10%;}

.tooltipT1 > em {white-space: nowrap; font-size: 10px; line-height: 1.8; padding: 0 0.1em; height: auto; display: block;}

.tooltipT1 div input[type="checkbox"] {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}
.tooltipT1 div input[type="checkbox"]:checked + label {background: #119fcd;}
.tooltipT1 div input[type="checkbox"]:checked + label:after {left: calc(100% - 18px); transition: left ease-in-out 0.3s;}
.tooltipT1 > em .customSwitch {color: #d3d3d3;}
.toggleBg {width: 34px; height: 17px; border-radius: 0.5em; background: #d3d3d3; padding: 0; overflow: hidden; position: relative; z-index: 5;}
.toggleBg:after {content: ''; position: absolute; z-index: 10; width: 15px; height: 15px; border-radius: 50%; background: #fff; top: 50%; transform: translateY(-50%); left: 1px; transition: left ease-in-out 0.3s;}
.toggleBg:before {display:none;}
</style>
<script>
import LogoSvg from '@/components/common/Logo/index'
export default {
  components: { LogoSvg },
  computed: {
    thisHref() {
      if (typeof window === 'undefined') return ''
      return window.location.href
    },
  },
  methods: {
    copyUrl (e) {
      e.preventDefault()
      // const urlTag = document.querySelector('.inp-url')
      const urlTag = this.thisHref
      navigator.clipboard.writeText(urlTag.value).then(() => {
        alert('주소가 복사되었습니다.')
      })
    },
  }
}


</script>
