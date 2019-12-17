import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import exlayout from '@/pages/ex-layout18'
import exlayout2 from '@/pages/ex-layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/i2",
      name: 'exlayout2',
      meta:{
        title:'i2标题'
      },
      component: exlayout2
    },
    {
      path: '/',
      name: 'index',
      component: exlayout
    }
  ]
})
