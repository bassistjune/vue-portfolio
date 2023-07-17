<template>
  <div>
    <ol class="image-list grid-view">
      <li
          v-for="(item, idx) in phLists"
          :key="idx"
      >
        <div @click="
          zoomData(item)
        ">
          <p
            class="bgImg"
            :style="{'background-image': 'url(' + require('@/assets/images/phLists/' + item.imgUrl) + ')'}"
          ></p>
          <ol class="itemArticle">
            <li>{{ item.imgTitle }}</li>
            <li>{{ item.imgSub }}</li>
          </ol>
        </div>
      </li>
    </ol>
    <Modal
        v-if="isShowModal"
        :title="pageTit"
        @close="close"
    >
      <template #body>
        <div>
          <p
            :style="{'background-image': 'url(' + require('@/assets/images/phLists/' + sendData.imgUrl) + ')'}"
            class="PopBg"
          ></p>
          <dl>
            <dt>{{ sendData.imgTitle }}</dt>
            <dd>{{ sendData.imgSub }}</dd>
          </dl>
        </div>
      </template>
      <template #footer>
      </template>
    </Modal>
  </div>
</template>
<style scoped>
ol, dl {list-style: none; padding-left: 0;}

dl > dt, dl > dd, ol > li {padding: 0; margin-right: 0; margin-left: 0;}
ol > li > div:hover {
  webkit-transition: all .3s ease;
  transition: all .3s ease;
  -webkit-transform: translateY(-5px);
  transform: translateY(-5px);
  -ms-transform: translateY(-5px);
  box-shadow: 4px 7px 25px 5px;
}
p.bgImg {margin: 0;}
.bgImg, .PopBg {
  display: block;
  width: 100%;
  aspect-ratio: 3/2;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;
}
.grid-view .itemArticle {margin: 0; padding: 1em 1em 2em 1em;}
.grid-view .itemArticle li + li {margin-top: 1em;}
.list-view .itemArticle {margin: 0; padding: 0 1em 0 1em;}
/* IMAGE LIST
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.image-list {margin-bottom: 3rem;}
.image-list > li > div {background: var(--lightBg); color: var(--darkblack); border-radius: 12px;
  box-shadow: 2px 5px 30px 0 rgba(0,0,0,.2); overflow: hidden;}
.image-list > li ol > li:first-child{font-weight: bold; font-size: 1.15rem;}
.image-list > li ol > li:last-child{font-size: 0.5rem;}

/* GRID VIEW
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.grid-view {display: grid; grid-gap: 2rem; grid-template-columns: repeat(auto-fit, minmax(var(--minRangeValue), 1fr));}

/* LIST VIEW
–––––––––––––––––––––––––––––––––––––––––––––––––– */
.list-view li+li {margin-top: 0.5rem;}
.list-view li > div {display: grid; grid-gap: 1.5rem; grid-template-columns: 150px 1fr; align-items: center;}
</style>
<script>
import ModalOption from '@/components/mixins/modalOpt'
export default {
  props: ['phLists'],
  mixins: [ModalOption],
  data: () => ({
    sendData: {},
    pageTit: '포토게시판'
  }),
  computed: {},
  watch: {
    sendData: {
      handler (val) {
        console.log('watch_val', val)
      },
      deep: true
    }
  },
  methods: {
    zoomData (event) {
      this.sendData = event
      console.log('this.sendData', this.sendData)
      this.callModal()
    }
  }
}
</script>
