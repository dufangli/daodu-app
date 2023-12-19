import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vantConfig from './untils/vant-config'
// import uView from "uview-ui";
import cardSlide from 'vue-card-slide'
import stack from './demo/StackBasic'
// import tantanStack from 'vue-tantan-stack'

// Vue.use(tantanStack);
Vue.use(cardSlide)
Vue.config.productionTip = false
Vue.prototype.Bus = new Vue();
Vue.use(vantConfig)

new Vue({
  router,
  stack,
  render: h => h(App)
}).$mount('#app')
