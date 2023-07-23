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
              item && item.class.includes('__addr') ? typeOfAddr()
                : item && item.class.includes('__birth') ? typeOfBirth()
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
        <div
          v-if="isShowModal && modalIsAddr"
          id="map"></div>
        <div
          v-if="isShowModal && modalIsBirth"
        >
          <input
              type="text"
              v-model="currentDateFormatted" class="diffBD" readonly>
          <p class="diffMessage">* {{ birthdayMessage }}</p>
          <calendar></calendar>
        </div>
      </template>
      <template #footer>
        <button
          v-if="isShowModal && modalIsAddr"
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
  .diffMessage {font-weight: bold; color: #000; margin: 0.2em;}

</style>
<script>
import ModalOption from '@/components/mixins/modalOpt'
import naverMaps from '@/components/mixins/naverMap'
import calendar from '@/components/calendar/index'
import infoData from '@/cofig/infomation'
export default {
  mixins: [ModalOption, naverMaps],
  components: { calendar },
  data: () => ({
    pageTit: '한준희 - contact',
    modalIsAddr: false,
    modalIsBirth: false
  }),
  computed: {
    infoList () {
      return infoData.infoList
    },
    currentDateFormatted() {
      const currentDate = new Date()
      const year = currentDate.getFullYear()
      const month = String(currentDate.getMonth() + 1).padStart(2, '0') // 월에 0을 추가하여 두 자리로 만듭니다
      const day = String(currentDate.getDate()).padStart(2, '0') // 일에 0을 추가하여 두 자리로 만듭니다
      return '현재날짜 : ' + `${year}년 ${month}월 ${day}일`
    },
    remainingDays() {
      const targetDate = new Date(new Date().getFullYear(), 6, 26) // 7월 26일을 가리키는 날짜를 만듭니다
      const currentDate = new Date()
      const difference = targetDate.getTime() - currentDate.getTime() // 밀리초 단위로 두 날짜 사이의 차이를 계산합니다
      const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24)) // 차이를 날짜로 변환합니다
      return daysDifference
    },
    birthdayMessage() {
      if (this.remainingDays > 0) {
        return `올해 생일이 ${this.remainingDays}일 남았습니다.`
      } else if (this.remainingDays === 0) {
        return '올해 생일입니다!'
      } else {
        return `올해 생일이 ${Math.abs(this.remainingDays)}일 지났습니다.`
      }
    }
  },
  mounted () {
  },
  methods: {
    toNaverSite () {
      // window.location.href = 'https://naver.me/5pN21zKp'
      window.open('https://naver.me/5pN21zKp')
    },
    typeOfBirth () {
      this.modalIsAddr = false
      this.modalIsBirth = true
      this.callModal()
    },
    typeOfAddr () {
      this.modalIsBirth = false
      this.modalIsAddr = true
      this.callModal()
    }
  }
}
</script>
