import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import layout from '@/pages/layout'
import exlayout from '@/pages/ex-layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: exlayout
    }
  ]
})
