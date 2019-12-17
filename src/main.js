// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import trans from './directives/test'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import store1 from './store/store'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
  modules:{
    store1
  }
})
Vue.use(ElementUI)
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
  // inserted(el,binding,vnode){
  //   console.log('inserted')
  // },
  // bind(el,binding,vnode){
  //   console.log('bind')
  // },
  // unbind(el,binding,vnode){
  //   // console.log('unbind')
  //   // console.log(el)
  // },
  componentUpdated(el,binding,vnode){
    let display=el.style.display
    let timer=binding.value
    // console.log(timer)
    if(timer===undefined){
      timer=10
    }
   if (display==='none'){
      //实际上应该是有一瞬间component是显示的，但是太短了
      trans.fade_out(el,timer)
    }else{
      trans.fade_in(el,timer)
    }
  }
})

Vue.directive('wide',{
  componentUpdated(el,binding,vnode){
    let timer=binding.value
    trans.wider(el,timer)
  },
  inserted(el,binding,vnode){
    // console.log(el)
  }
})

Vue.directive('high',{
  componentUpdated(el,binding,vnode){
    let timer=binding.value
    trans.higher(el,timer)
  },
  inserted(el,binding,vnode){
    // console.log(el)
  }
})

Vue.directive('drag',{
  inserted(el,binding,vnode){
    el.onmousedown=e=>{
      el.onmousemove=(e)=>{
        trans.move(el,e)
      }
      // el.onwheel
    }
    el.onwheel=e=>{
      // trans.move(el,e)
      trans.move(el,e)
    }
    el.onmouseup=e=>{
      // el.onmousedown=null
      el.onmousemove=null
    }

  }
})
//directive完成

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,store,
  render:h=>h(App),

})
