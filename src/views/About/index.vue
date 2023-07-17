<template>
  <div class="sub_wrap">
    <div
      class="topInfo infoWrap"
    >
      <div class="txtWrap">
        <h2>{{ topList.txt.title }}</h2>
        <p>{{ topList.txt.intro }}</p>
        <ul class="myInfo">
          <li
            v-for="(item1, idx) in topList.txt.myInfo"
            :key="idx"
          >
            <i
              :class="item1.class"
              :style="
                item1.class === 'pi-briefcase'
                ? {'vertical-align': '1.6em'} : ''
              "
              class="icon pi"
            ></i>
            <span
              v-if="item1.value.includes('중퇴')"
            >
              {{ item1.value.substring(0, item1.value.indexOf('중퇴')) }}
              <em class="strongRed"
              >중퇴</em>
              {{ item1.value.substring(item1.value.indexOf('중퇴') + 2) }}
            </span>
            <span
                v-else
            >
              {{ item1.value }}
            </span>
          </li>
        </ul>
      </div>
      <div class="imgWrap">
        <flicking
            class="flicking_1"
            :render-only-visible="true"
            :hide-before-init="true"
            :viewport-tag="'div'"
            :camera-tag="'div'"
            :camera-class="'flicking-camera'"
            :options="{
              circular: true,
              panelsPerView: 1,
              autoplay: true,
              duration: 500,
              horizontal: true,
            }"
            :plugins="plugins"
        >
          <div
              v-for="(item, n) in topList.myImg"
              :key="n"
              :style="{'background-image': 'url(' + require('@/assets/images' + `${item.imgUrl}`) + ')'}"
              class="flicking-panel">
            <span class="__desc">
              {{ item.imgDesc }}
            </span>
          </div>
        </flicking>
        <p class="flicker descSlider"> #이미지가 자동으로 바뀝니다.#</p>
      </div>
    </div>
    <div class="midInfo infoWrap">
      <h2>Skill</h2>
      <div class="features">
        <article
          v-for="(item2, i) in midList.list"
          :key="i"
        >
          <span class="icon pi pi-custom pi-book"></span>
          <div class="content">
            <h3>{{ item2.type }}</h3>
            <p class="fw-m">{{ item2.value.toString() }}</p>
          </div>
        </article>
        <article>
          <dl>
            <dt><h3>{{ midOther.desc }}</h3></dt>
            <dd
            >
              <span
                v-for="(item3, i) in midOther.value"
                :key="i"
              >{{ item3.toString() }}<em class="styleNone">,</em> </span>
            </dd>
          </dl>
        </article>
      </div>
    </div>
    <div class="botInfo infoWrap">
      <a class="button flicker large" href="@/assets/documents/230503_FEDeveloper_HanJuneHee.docx" download target="_self">이력서 다운받기!</a>
    </div>
  </div>
</template>
<style scoped>
/* Flicking Slide */
@import '@egjs/flicking/dist/flicking.css';
@import '@egjs/flicking-plugins/dist/pagination.css';
.topInfo {display: flex; justify-content: stretch; align-items: stretch;}
.topInfo .imgWrap {width: 50%; aspect-ratio: 3/2; position: relative;}
.topInfo .txtWrap {flex: 1 1 auto;}
.topInfo .txtWrap > p {white-space: pre; font-size: 1.1em;}
.imgWrap {background-color: #3d3d3d; }
.imgWrap::v-deep .flicking_1 {
  position: relative;
  width: 100% !important;
  height: 100%;
}
.imgWrap .flicking_1::v-deep .flicking-camera {width: 100%;}
.imgWrap .flicking_1::v-deep .flicking-panel {
  text-align: center;
  display: block;
  height: 100%;
  width: 100% !important;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  /*margin: 0;*/
  /*padding: 0;*/
}
.imgWrap .flicking_1::v-deep .__desc {
  position: absolute;
  bottom: 1em;
  left: 50%;
  color: #fff;
  font-size: 1.2em;
  white-space: pre;
  text-shadow: 1px 1px 2px #000;
  transform: translateX(-50%);
}
/* Flicking Slide */

.myInfo > li {list-style: none; margin: 0 0 0.5em 0; color: #333;}
.myInfo > li > * {font-size: 1.2em;}
.myInfo > li i {display: inline-block; margin-right: 1em;}
.myInfo > li span {display: inline-block; white-space: pre;}
.strongRed {font-style: normal; font-weight: 600; color: #ff5500;}
@media screen and (max-width: 980px) {
  .topInfo {flex-direction: column}
  .topInfo > .imgWrap {width: 100%;}
  .topInfo > .txtWrap {width: 100%;}
}
span.icon.pi-custom {
  position: relative;
  -moz-flex-grow: 0;
  -ms-flex-grow: 0;
  flex-grow: 0;
  -ms-flex-shrink: 0;
  flex-shrink: 0;
  display: block;
  height: 10em;
  line-height: 10em;
  margin: 0 2em 0 0;
  text-align: center;
  width: 10em;}
span.icon.pi-custom:before {
  font-size: 2em;
  color: #c3211f;
}
.icon.pi.pi-custom:after {
  transform: rotate(45deg);
  border-radius: 0.25rem;
  border: solid 2px #c3211f;
  opacity: 0.7;
  content: '';
  display: block;
  height: 4em;
  left: 50%;
  margin: -2em 0 0 -2em;
  position: absolute;
  top: 50%;
  width: 4em;
}
.features article:nth-child(2) span.icon.pi-custom:before {
  color: #2177b4;
}
.features article:nth-child(2) span.icon.pi.pi-custom:after {
  border: solid 2px #2177b4;
}
.features article:nth-child(3) span.icon.pi-custom:before {
  color: #81b730;
}
.features article:nth-child(3) span.icon.pi.pi-custom:after {
  border: solid 2px #81b730;
}
.features article:nth-child(4) span.icon.pi-custom:before {
  color: #f8d27a;
}
.features article:nth-child(4) span.icon.pi.pi-custom:after {
  border: solid 2px #f8d27a;
}
.features article:nth-child(5) span.icon.pi-custom:before {
  color: #4959a4;
}
.features article:nth-child(5) span.icon.pi.pi-custom:after {
  border: solid 2px #4959a4;
}
.infoWrap + .infoWrap {margin-top: 2em;}
.fw-m {font-weight: 500; color: #666;}
.styleNone {font-style: normal; text-decoration: none;}
dl dd span:last-child .styleNone {display: none;}

@keyframes toggleAni {
  50% {
    opacity: 0;
  }
}

.flicker {
  animation: toggleAni 1s step-end infinite;
}
.descSlider {position: absolute; left: 1em; top: 1em; z-index: 55; font-size: 1em; color: red; font-weight: bold;}
.botInfo {padding: 2em 0; text-align: center;}
.botInfo a {margin: 0 auto;}
</style>
<script>
import metaSetting from '@/components/mixins/metaSet'
import  Flicking from '@egjs/vue3-flicking'
import { AutoPlay } from '@egjs/flicking-plugins'
import aboutList from '@/cofig/About'
export default {
  mixins: [metaSetting],
  setup () {

  },
  components: {
    Flicking: Flicking
  },
  data: () => ({
    plugins: [
      new AutoPlay({ duration: 4000, direction: 'NEXT', stopOnHover: false })
    ]
  }),
  computed: {
    topList () {
      return aboutList.top
    },
    midList () {
      return aboutList.middle
    },
    midOther () {
      return aboutList.middle.other
    }
  }
}
</script>
