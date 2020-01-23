import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import exlayout from '@/layout/ex-layout100'
import exlayout2 from '@/pages/ex-layout26'
import exlayout3 from '@/pages/ex-layout2'

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(Router)
export default new Router({
  routes: [
    {
      path:"/i2",
      meta:{
        title:'i2标题',
        breadcrumb:'i2标题'
      },
      component: exlayout2,
      children:[
        {
          path:'i3',
          meta:{
            title:'i3标题',
            breadcrumb:'i3标题'
          },
          name:'i3',
          component:exlayout3
        }
      ]
    },
    {
      path: '/',
      meta:{
        title: '首页'
      },
      name: 'index',
      component: exlayout
    }
  ]
})
