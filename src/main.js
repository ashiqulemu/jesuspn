require('./bootstrap')

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import subHeader from './components/layout/subHeader.vue'
import Slick from 'vue-slick'

Vue.config.productionTip = false
Vue.component('sub-header', subHeader)
Vue.component('slick', Slick)

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
