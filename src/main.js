// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import trans from './directives/test'

Vue.config.productionTip = false

Vue.directive(
  'test',{
    inserted(){
      console.log('this is inserted')
    },
    bind(){
      console.log('this is bind')
    },
    componentUpdated(){
      console.log('componentUpdate')
    },
    unbind() {
      console.log('unbind')
    }
  })
Vue.directive('fade',{
  inserted(el,binding,vnode){
    console.log('inserted')

    // console.log(el.style.opacity)
    // el.style['opacity']=0
    // console.log(trans)
  },
  bind(el,binding,vnode){
    console.log('bind')
    // console.log(vnode)
  },
  unbind(){
    console.log('unbind')
  },
  componentUpdated(el,binding,vnode){
    let display=el.style.display
    if (display==='none'){
      el.style.display=''
      trans.fade_out(el,9)
    }else{
      trans.fade_in(el,9)
    }
  }
})
//directive完成

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App),

})
