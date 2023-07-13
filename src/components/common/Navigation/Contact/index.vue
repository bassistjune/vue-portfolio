<template>
  <div>
    <section>
      <header class="major">
        <h2>Contact</h2>
      </header>
      <p v-html="infoList.intro.split('\n').join('<br />')">
      </p>
      <ul class="contacts">
        <li
            v-for="(item, i) in infoList.contacts"
            :key="i"
        >
          <a
            :href="
              item.href && item.href.length
                ? item.href + item.val
                : 'javascript:void(0)'
            "
            @click="
              item && item.class.includes('__addr')
              ? callModal()
              : ''
            "
          >
            <i
              class="icon pi"
              :class="`${item.class}`"
            >
            </i>
            {{ item.val }}
          </a>
        </li>
      </ul>
    </section>
    <div class="navBottom">
      <p
        v-html="infoList.copyTxt.split('\n').join('<br />')"
        class="copyright">
      </p>
    </div>
    <!-- 모달레이어 -->
    <Modal
        v-if="isShowModal"
        :title="pageTit"
        @close="close"
    >
      <template #body>
        <div id="map"></div>
      </template>
      <template #footer>
        <button
            @click="toNaverSite()"
            class="button primary"
            type="button"
        >네이버에서 보기</button>
      </template>
    </Modal>
    <!-- 모달레이어 -->
  </div>
</template>
<style scoped>
  ul.contacts {padding: 0;}
  .contacts li {margin: 0 0 1.3em 0; list-style: none;}
  .contacts li a {display: flex; align-items: center; margin: 0 0 0 0; color: #7f888f; text-decoration: none; text-underline: none; border: none; pointer-events: auto; cursor: pointer; transition: all 0.3s ease-in-out;}
  .contacts li a:hover {color: #f37025; font-weight: bold; transition: all 0.3s ease-in-out;}
  .contacts li a i:before {margin-right: 0.2em;}
  /*.contacts::v-deep li.__addr {pointer-events: all;}*/
  /*.__name:before {}*/
  /*.__birth:before {}*/
  /*.__phone:before {}*/
  /*.__addr:before {}*/
  #map {width: 100%; aspect-ratio: 3/2; height: auto; max-width: 640px;}

</style>
<script>
import ModalOption from '@/components/mixins/modalOpt'
import naverMaps from '@/components/mixins/naverMap'
import infoData from '@/cofig/infomation'
export default {
  mixins: [ModalOption, naverMaps],
  data: () => ({
    pageTit: '한준희 - contact'
  }),
  computed: {
    infoList () {
      return infoData.infoList
    }
  },
  mounted () {
  },
  methods: {
    toNaverSite () {
      // window.location.href = 'https://naver.me/5pN21zKp'
      window.open('https://naver.me/5pN21zKp')
    }
  }
}
</script>
