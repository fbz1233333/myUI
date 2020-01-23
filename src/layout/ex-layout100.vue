<template>

  <div class="font1 div1">
    <ex-nav theme="light">
      <ex-nav-item to="/index">Home</ex-nav-item>
      <ex-nav-item to="/index">Index</ex-nav-item>
    </ex-nav>
    <ex-nav theme="dark">
      <ex-nav-item to="/index">Home</ex-nav-item>
      <ex-nav-item to="/index">Index</ex-nav-item>
    </ex-nav>

    <ex-label forId="name">Name</ex-label><br>
    <ex-input id="name" v-model="value1" ></ex-input>
    <br>
    <ex-label forId="password">Password</ex-label><br>
    <ex-input id="password" v-model="value2" type="password"></ex-input>

    <br>

    <div class="button1">
      <ex-button class="button1" theme="dark" >Login</ex-button>
      <ex-button class="button1"  >Default</ex-button>
      <ex-button class="button1" theme="light" >Reset</ex-button>
    </div>

    <ex-href>Login_</ex-href>
    <ex-href>Default_</ex-href>
    <ex-href>Reset_</ex-href>

    <br>
    <ex-page-slip>
      永和九年 岁在葵丑

    </ex-page-slip>


    <ex-footer theme="dark">
      <p class="p1">
      email:719577252@qq.com<br>
      telephone:15251763811
    </p></ex-footer>

    <ex-button @click="show=true">open</ex-button>
    <ex-modal v-model="show">
      no pains,no gains
    </ex-modal>

    <ex-upload v-model="file">
      <ex-button theme="light">upload</ex-button>
    </ex-upload>
    <ex-button @click="handleClick2">over</ex-button>

    <ex-carousel>

    </ex-carousel>
  </div>

</template>
<script>

  import exCarousel from '@/components/ex-carousel'
  import exUpload from '@/components/ex-upload'
  import exModal from  '@/components/ex-modal'
  import exPageSlip from '@/components/ex-page-slip'
  import exHref from '@/components/ex-href'
  import exButton from '@/components/ex-button2'
  import exLabel from '@/components/ex-label'
  import exInput from '@/components/ex-input2'
  import exNavItem from '@/components/ex-nav-item'
  import exNav from '@/components/ex-nav'
export default {
      methods:{
          handleClick2(){
              console.log(this.file)
          }
      },
      mounted(){
        // alert('it is a alert')
        //   alert("<button>ss</button>")
      },
      data(){
        return{
            file:{},
            show:false,
            value1:'test',
            value2:'123456'
        }
      },
      components:{
          exNav,exNavItem,exInput,exLabel,exButton,exHref,exFooter,exPageSlip,exModal,exUpload,exCarousel
      }
}
import exFooter from '@/components/ex-footer'
</script>
<style scoped>
  .div1{
    margin-left: 20%;
    width: 60%;
    margin-right: 20%;
  }

  .button1{
    margin-top: 20px;
  }
  .p1{
    line-height: 200%;
  }
</style>
