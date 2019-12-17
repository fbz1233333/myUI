import axios from 'axios'
export default {
  state:{

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
