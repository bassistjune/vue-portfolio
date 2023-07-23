// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { createMetaManager } from 'vue-meta'
import { vueTyperNext } from 'vue-typer-next'
import { store } from './store'

// normalize.css
import './assets/css/normalize.css'

// Prime Icon
import 'primeicons/primeicons.css'

// import 'vue-typer-next/dist/style.css'
// 전역 사용 되는 컴포넌트
import Modal from '@/components/modalPopup/index'
// 전역 scss
// require("./assets/css/normalize.css")

const app = createApp(App)
app.config.productionTip = false
app.use(
  router,
  axios,
  vueTyperNext
)
// app.use(Vuex)
app.use(store)
app.use(createMetaManager())
app.component('Modal', Modal)
app.mount('#app')

// 글로벌 프로퍼티

app.config.globalProperties.$axios = axios
app.config.globalProperties.$serverUrl = 'https://port-0-board-back-rt92alkcdc6qo.sel4.cloudtype.app/'
// app.config.globalProperties.$serverUrl = 'https://port-0-java-springboot-rt92alkc3owhx.sel4.cloudtype.app/'

app.config.globalProperties.$routelist = router.options.routes
app.config.globalProperties.$store = store
