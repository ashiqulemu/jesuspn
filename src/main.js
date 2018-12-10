require('bootstrap')
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import subHeader from './components/layout/subHeader.vue'
import basicTop from './components/basic/basic-top.vue'

Vue.config.productionTip = false
Vue.component('sub-header', subHeader)
Vue.component('basic-top', basicTop)

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
