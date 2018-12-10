import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import HelpSupport from './views/help-support.vue'
import TermsCondition from './views/terms-condition.vue'
import Experience from './views/Experience.vue'
import Basic from './views/main-step.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
          component:About
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      },
      {
        path:'/contact',
          name:'contact',
          component:Contact
      },
      {
          path: '/help-support',
          name: 'helpSupport',
          component: HelpSupport
      },
      {
          path: '/terms-condition',
          name: 'termsCondition',
          component: TermsCondition
      },
      {
          path: '/experiences',
          name: 'experiences',
          component: Experience
      },
      {
          path: '/main-form',
          name: 'basic',
          component: Basic
      },

]
})
