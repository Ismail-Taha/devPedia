import Vue from 'vue'
import Router from 'vue-router'
import VueDemo from '@/components/VueDemo'
import Messages from '@/components/Messages'
import Activity from '@/components/Activity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: VueDemo
    },
    {
      path: '/messages',
      name: 'messages',
      component: Messages
    },
    {
      path: '/',
      name: 'activities',
      component: Activity
    }
  ]
})
