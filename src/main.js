// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // VueRouter 불러온다.
// import store from './store';
import vueHead from 'vue-head'
// import store from './store'

// normalize.css
import './assets/css/normalize.css'

// 전역 scss
// require("./assets/css/normalize.css")

const app = createApp(App)
app.config.productionTip = false
app.use(router, vueHead)
app.mount('#app')

app.config.globalProperties.$routelist = router.options.routes
