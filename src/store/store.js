import axios from 'axios'
import da from "element-ui/src/locale/lang/da";
export default {
  state:{
    breadcrumb:[]
  },
  getters:{
    getBreadCrumb(state){
      return state.breadcrumb
    }
  },
  mutations:{
    setBreadCrumb(state,data){
      state.breadcrumb=data
    }
  },
  actions:{
    login(context,form1){
      // console.log(form1.name)
      // console.log(form1.password)
      axios.post('app/s',{
        name:form1.name,
        password:form1.password
      }).then(r=>{
        console.log(r.data)
      }).catch(r=>{
        console.log(r.data)
      })
    }
  }
}
