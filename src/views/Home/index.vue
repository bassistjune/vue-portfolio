<template>
  <!-- Main -->
      <div>
        <!-- Banner -->
        <section id="banner">
          <div class="content">
            <div>
              <h1>{{ mainList.Intro.title }}</h1>
              <p>{{ mainList.Intro.desc }}</p>
                <div>
                  <h3>{{ mainList.Faq.title }}</h3>
                  <dl
                    v-for="(item, idx) in mainList.Faq.list"
                    :key="idx"
                  >
                    <dt
                      :class="{ opener: item.expanded }"
                    ><a
                      @click="toggleFn(item)"
                      class="faqBtn" href="javascript:void(0)">{{ item.type }}<i class="pi-caret-up pi absolItem"></i></a></dt>
                    <dd
                      v-if="item.expanded"
                    >
                      <ul>
                        <li
                          v-for="(item2, idx2) in item.value"
                          :key="idx2"
                        >
                          {{ item2 }}
                        </li>
                      </ul>
                    </dd>
                  </dl>
                </div>
            </div>
            <p></p>
            <ul class="actions">
              <li><router-link to="/About" class="button big">프로필로 이동</router-link></li>
            </ul>
          </div>
          <span class="image object">
            <img src="../../assets/images/main_bg1.jpeg" alt="" />
          </span>
        </section>

        <!-- Section -->
        <section>

        </section>
      </div>
</template>

<style scoped>
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

          // faqItem[0].expanded = true
      })
    }
  }
}
</script>
