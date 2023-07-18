<template>
  <div class="sub_wrap ">
    <h3>Work</h3>
    <div class="ccard-list-wrap">
      <div
        v-for="(item, i) in lists"
        :key="i"
        class="ccard-cover">
        <div class="ccard-item" tabindex="0">
          <div class="card-front">
            <div>
              <div
                  :style="{'background-image': 'url(' + require('@/assets/images/' + `${item.front.imgUrl}`) + ')'}"
                  class="card-img">
              </div>
              <p>{{ item.front.tit }}</p>
            </div>
          </div>
          <div class="card-back">
            <div class="card-back-cont">
              <div class="card-detail">
                <dl>
                  <dt>{{ item.back.bTit }}</dt>
                  <dd>
                    <ul class="list-dot">
                      <li>
                        <p class="tit">
                          {{ item.back.bListTit }}
                        </p>
                        <p
                          class="desc">
                          <span
                              v-for="(item, i) in item.back.bListDesc"
                              :key="i"
                          >{{ item }}<em>,</em>&nbsp;</span></p>
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
              <div class="btn-wrap">
                <a
                  :href="item.back.btnUrl" target="_blank" type="button" class="button">{{ item.back.btn }}</a>
                <a
                  v-if="item.back.btnUrl2 && item.back.btnUrl2.length"
                    :href="item.back.btnUrl2" target="_blank" type="button" class="button">{{ item.back.btn }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ccard-list-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 3em;
}
.ccard-cover {
  width: auto;
  flex: calc(33.33% - 2em) 0;
  height: auto;
  aspect-ratio: 8/7;
}
.ccard-item {
  position: relative;
  width: 100%;
  height: 100%;

  transform-style: preserve-3d;
  transition: 0.5s 0.1s;
  -webkit-transition: 0.5s 0.1s;
  -moz-transition: 0.5s 0.1s;
  -ms-transition: 0.5s 0.1s;
  -o-transition: 0.5s 0.1s;
  cursor: pointer;
}

/* hover and focus-within states */
.ccard-cover:hover .ccard-item,
.ccard-cover:focus .ccard-item {
  transform: rotateY(180deg);
}
.ccard-item .card-front,
.ccard-item .card-back {
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: stretch;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  -ms-border-radius: 16px;
  -o-border-radius: 16px;
}
.ccard-item .card-front {
  box-shadow: 0 0 20px #00000016;
  transform: rotateY(0deg);
  -webkit-transform: rotateY(0deg);
  -moz-transform: rotateY(0deg);
  -ms-transform: rotateY(0deg);
  -o-transform: rotateY(0deg);
  z-index: 2;
}
.ccard-item .card-front > div {width: 100%; display: flex; flex-direction: column; justify-content: flex-start}
.ccard-item .card-front .card-img {

  width: 100%;
  flex: 1 1 auto;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
}
.ccard-item .card-front p {
  margin: auto 0 0 0;
  padding: 1em;
  font-weight: 600;
  color: #333;
  font-size: 18px;
  background-color: #e6e6e6;
  letter-spacing: -0.03em;
  line-height: 26px;
  text-align: center;

}
.ccard-item .card-back {
  box-shadow: 0 0 20px #00000016;
  transform: rotateY(180deg);
  -webkit-transform: rotateY(180deg);
  -moz-transform: rotateY(180deg);
  -ms-transform: rotateY(180deg);
  -o-transform: rotateY(180deg);
  z-index: 1;
}
.ccard-item .card-back-cont {
  width: 100%;
  flex: 1 1 auto;
}
.ccard-item .card-back .card-detail {
  width: 100%;
  height: calc(100% - 3em);
  padding: 1.5em 2em;
  box-sizing: border-box;
}
.ccard-item .card-back p {margin: 0 0 0;}
.ccard-item .card-back .card-detail dt {
  font-weight: 700;
  font-size: 1.6em;
  margin: 0 0 0.2em 0;
  letter-spacing: -0.03em;
  line-height: 1.25;
  color: #333;
}
.ccard-item .card-back .card-detail dd {
  /*padding-top: 0.4em;*/
  margin-left: 0;
}
.ccard-item .card-back .card-detail dd li {
  margin-top: 0.5em;
}
.ccard-item .card-back .card-detail dd li .tit {
  font-weight: 500;
  font-size: 1em;
  letter-spacing: -0.03em;
  line-height: 1.6;
  color: #000;
}
.ccard-item .card-back .card-detail dd li .desc {
  margin-top: 0.2em;
  font-weight: 300;
  letter-spacing: -0.03em;
  line-height: 1.6;
  font-size: 0.8em;
  color: #666;
}
.ccard-item .card-back .btn-wrap {
  display: flex;
  margin-top: auto;
  height: 3em;
}
.ccard-item .card-back .btn-wrap a {
  height: 100%;
  width: 100%;
  border-radius: 0 0 16px 16px;
}
.ccard-item .card-back .btn-wrap a + a {
  margin-left: 0;
}
.ccard-item .card-back .btn-wrap a + a {
  margin-left: 0;
}
.ccard-item .card-back .btn-wrap a:first-child:nth-last-child(1) {
  border-radius: 0 0 16px 16px;
}
.ccard-item .card-back .btn-wrap a:first-child:nth-last-child(2) {
  border-radius: 0 0 0 16px;
}
.ccard-item .card-back .btn-wrap a:first-child:nth-last-child(2) ~ a:last-child {
  border-radius: 0 0 16px 0;
}
.previewPage {overflow-x: hidden; box-sizing: border-box;}

@media screen and (max-width: 1460px) {
  .ccard-cover {
    flex: calc(50% - 1.5em) 0;
  }
  .ccard-item .card-front p {font-size: 16px;}
}
@media screen and (max-width: 1024px) {
  .ccard-item .card-front p {font-size: 14px;}
}
@media screen and (max-width: 960px) {
  .ccard-cover {
    flex: 100% 0;
    aspect-ratio: 4/3;
  }
  .ccard-item .card-front p {font-size: 1em;}
}
.desc > span {display: inline-block; word-spacing: 0.3em; color: #666; font-weight: 500;}
.desc > span:last-child > em {display: none;}
.desc > span > em {font-style: normal;}
</style>
<script>
import metaSetting from '@/components/mixins/metaSet'
import works from '@/cofig/WorkList'
export default {
  mixins: [metaSetting],
  computed: {
    lists () {
      return works
    }
  }
}
</script>
