<template>
  <!-- Main -->
      <div>
        <!-- Banner -->
<!--        <section id="banner">-->
<!--          <div class="content">-->
<!--            <div>-->
<!--              <h1>{{ mainList.Intro.title }}</h1>-->
<!--              <p>{{ mainList.Intro.desc }}</p>-->
<!--                <div>-->
<!--                  <h3>{{ mainList.Faq.title }}</h3>-->
<!--                  <dl-->
<!--                    v-for="(item, idx) in mainList.Faq.list"-->
<!--                    :key="idx"-->
<!--                  >-->
<!--                    <dt-->
<!--                      :class="{ opener: item.expanded }"-->
<!--                    ><a-->
<!--                      @click="toggleFn(item)"-->
<!--                      class="faqBtn" href="javascript:void(0)">{{ item.type }}<i class="pi-caret-up pi absolItem"></i></a></dt>-->
<!--                    <dd-->
<!--                      v-if="item.expanded"-->
<!--                    >-->
<!--                      <ul>-->
<!--                        <li-->
<!--                          v-for="(item2, idx2) in item.value"-->
<!--                          :key="idx2"-->
<!--                        >-->
<!--                          {{ item2 }}-->
<!--                        </li>-->
<!--                      </ul>-->
<!--                    </dd>-->
<!--                  </dl>-->
<!--                </div>-->
<!--            </div>-->
<!--            <p></p>-->
<!--            <ul class="actions">-->
<!--              <li><router-link to="/About" class="button big">프로필로 이동</router-link></li>-->
<!--            </ul>-->
<!--          </div>-->
<!--          <div class="image object">-->
<!--            <div class="bgWrap">-->
<!--              <div class="rightImg" ><img src="../../assets/images/main_bg1.jpeg" alt="" /></div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </section>-->
        <!-- Section -->
        <section class="posRelative_v2" style="margin: 4rem 0;">
          <h2 class="align-center">현재 페이지 개선 작업 중입니다. *( 2024-11-05 ~ 2024-11-15 예정)</h2>
          <dl class="temp-mains">
            <dt class="main-head">개선내용</dt>
            <dd class="main-body">
              <div class="contents">
                <span class="align-center">개선 작업 예정</span>
                <ol class="customListDep1">
                  <li><span>프로젝트 구성변경</span>
                    <ol class="customListDep2">
                      <li><strong>Composition Api</strong>LifeCycle -> ref,reactive, computed등<br />composition Api에서 제공하는 반응형 기능을 통한
                        효율적인 데이터 및 상태관리
                      </li>
                      <li>Ts 사용 - Rest Api 이용 및 함수 구현 등에서<br /> type을 정의하여 예기치 못한 에러 방지
                      </li>
                      <li>백엔드 사용 - 직전 프로젝트에서 사용한 SpringBoot, MariaDB를 통하여<br />정적인 컨텐츠대신 restful api 사용으로 변경 가능성 있는 컨텐츠들을 제어
                      </li>
                      <li>Watch, WatchEffect제거 - 리소스 낭비를 줄이기 위한 반응형 값과 ref(컴포넌트등에 명명하는 값) 값 등으로 로직화.</li>
                      <li>webpack -> Vite, Vuex -> Pinia</li>
                      <li>Api, Models, Composables 등의 구조로 변경하여 보다 일관성있게 기능별로 정리 된 <br />디렉터리 구조로 변경</li>
                    </ol>
                  </li>
                  <li><span>컴포넌트 구조변경</span>
                    <ol class="customListDep2">
                      <li><strong>컴포넌트 세분화</strong> - router 기준의 'views'(단순 컴포넌트 import)와<br /> '/components/pages'로 상세 내용 분리
                      </li>
                      <li>재 사용성 개선(단순 나열된 Dom 요소들을 세분화 <br />( input, select, table, .. 등을 emit, prop, model로 통신)
                      </li>
                      <li>[item].vue, &lt;Component /&gt; 태그와 반응형 값을 통해<br />유연하고 동적인 컴포넌트 구조화
                      </li>
                    </ol>
                  </li>
                  <li><span>기능개선</span>
                    <ol class="customListDep2">
                      <li>Mixins, Vanilla.js등을 Composable, plugins 등으로 대체 </li>
                      <li>v-html 및 Dom에 직접 반영하는 형태가 아닌, 라이브러리와 공용 컴포넌트로 보안 강화.</li>
                      <li>불 필요한 Dom 접근 최소화<br />약간의 ref </li>
                    </ol>
                  </li>
                  <li><span>Css개선 </span>
                    <ol class="customListDep2">
                      <li>SCSS - 불필요한 scoped, 산재되어 있는 css -> scss로 트리화 </li>
                      <li>중복 된 값을 변수로 선언 후 사용으로 리소스 낭비 줄임</li>
                      <li>동적 클래스 바인딩을 따로 정의하여 관리</li>
                    </ol>
                  </li>
                </ol>
              <br />
              </div>
            </dd>
          </dl>
        </section>
      </div>
</template>

<style scoped>
.posRelative_v2 {
  position: relative;
  display: flex;
  flex-direction: column;
}
.temp-mains {
  position: relative;
}
.posRelative_v2 dl {
  margin: 0.375rem 0 0 0.75rem !important;
}
.main-head {
  font-size: 1.5em;
  position:relative;
  margin: 0 !important;
  padding: 0;
  width: fit-content;
  color: #111111;
}

.main-body {
  border: 0.125rem solid #ffe000;
  padding: 0.5rem;
  margin: 0;
  border-radius: 0.75rem;
  background-color: #ffffff;
  z-index: 10;

}
.main-body > div.contents {
  white-space: pre;
  font-size: 1rem;
  line-height:1.15rem;
  color: #333333;
  font-weight: 600;
}
ol {
  counter-reset: section;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    counter-increment: section;
    position: relative;
    padding-left: 1rem;
    font-size: 0.938rem;
    font-weight: 500;
    &::before {
      content: counter(section)". ";
      position: absolute;
      left: 0;
      font-weight: bold;
    }
  }
}
.customListDep1 {
  margin-top: 0.725rem;
  >li {
    & + li {
      padding-top: 0.25rem;
    }
  }
}
.customListDep2 {
  counter-reset: section;
  margin: 0.25rem 0 0 0;
  padding: 0;
  li {
    list-style: none;
    counter-increment: section;
    position: relative;
    &::before {
      content: counter(section)") ";
      position: absolute;
      left: 0;
    }
  }
}
h1 {font-size: 2.8em;}
@media screen and (max-width: 1200px) {
  h1 {
    font-size: 2.6em; } }

@media screen and (max-width: 980px) {
  h1 {
    font-size: 2.4em; } }

@media screen and (max-width: 736px) {
  h1 {
    font-size: 2.2em;
  }
}
@media screen and (max-width: 640px) {
  h1 {
    font-size: 2.0em;
  }
}
dl {margin: 0 0 1em 0;}
dl > dt:hover > a {color: #f37025; border-color: #f37025;}
dl > dt.opener > a {color: #f37025; border-color: #f37025;}
dl > dt.opener > a > i.absolItem {transform: rotate(0deg); transition: rotate 0.3s ease;}
dl > dd > ul {margin: 0 0 0 0;}
.faqBtn {display: block; border-bottom: 1px solid #119fcd; position: relative; transition: rotate 0.3s ease;}
.faqBtn > i.absolItem {content: ''; position: absolute; right: 0; transform: rotate(180deg); font-size: 1em;}

#banner .bgWrap {
  position: relative;
  height: 100%;
  background-color: transparent;
  border-radius: 1em;
}
#banner .bgWrap .rightImg {position: absolute; top: 0; left: 0; right: 0;}
@media screen and (max-width: 710px) {
  #banner .bgWrap .rightImg {position: static; max-width: 100%;}
}
#banner .bgWrap .rightImg img {max-width: 100%;}
</style>
<script>
import Mainpage from '@/cofig/Main'
export default {
  name: 'MainPage',
  data: () => ({
    mainList: Mainpage
  }),
  mounted() {
    this.toggleInit()
  },
  methods: {
    toggleFn (item) {
      item.expanded = !item.expanded
      console.log('item', item)
      console.log('toggleFn item.expanded', item.expanded)
      this.mainList.Faq.list.forEach((faqItem) => {
        if (faqItem !== item) {
          faqItem.expanded = false
        }
      })
    },
    toggleInit () {
      this.mainList.Faq.list.forEach((faqItem, idx) => {
        console.log('faqItem[0], faqItem, idx', faqItem, faqItem, idx)
        if (idx === 0) {
          console.log('1')
          faqItem.expanded = true
        }
      })
    }
  }
}
</script>
