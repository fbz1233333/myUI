import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import exlayout from '@/pages/ex-layout25'
import exlayout2 from '@/pages/ex-layout18'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/i2",
      name: 'exlayout2',
      component: exlayout2
    },
    {
      path: '/',
      name: 'index',
      component: exlayout
    }
  ]
})
