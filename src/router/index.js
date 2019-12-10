import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import exlayout from '@/pages/ex-layout2'

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
