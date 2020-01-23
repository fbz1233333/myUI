<template>

    <div class="div1 font1">
      <ex-button theme="light">Login</ex-button>
      <ex-button @click="click2">
        Click Me
      </ex-button>
      <ex-button theme="dark">Logout</ex-button>

      <transition name="el-fade-in-linear">
        <ex-h1 v-show="show">
          君看一叶舟 出没风波里
        </ex-h1>
      </transition>

      <transition name="el-fade-in-linear">
        <ex-h1 v-show="show" style="font-size: 25px">
          江上往来人 但爱鲈鱼美
        </ex-h1>
      </transition>
      <transition name="el-fade-in-linear">
        <ex-h1 v-show="show" style="font-size: 20px">
          千山鸟飞绝 万径人踪灭
        </ex-h1>
      </transition>

      <ex-card>
        <div slot="title">
          this is the title 这是标题
        </div>
        <div slot="content">
          this is content 这是内容
        </div>
      </ex-card>
      <ex-card theme="dark" >
        <div slot="title">
          this is the title 这是标题
        </div>
        <div slot="content">
          this is content 这是内容
        </div>
      </ex-card>

      <ex-page>
        <div slot="header">
          <span>make a page by vue</span><br>
          <span style="opacity: 50%">this is header2</span>
        </div>
        <div slot="content">
          this is page content
        </div>
        <div slot="footer">
          9
        </div>
      </ex-page>



      <div class="ex-angle">

      </div>
    </div>


</template>
<script>
    import exButton from '@/components/ex-button2'
    import exPage from '@/components/ex-page'
    import exH1 from '@/components/ex-h1'
    import exCard from '@/components/ex-card'
    export default {
      components:{
          exButton,exH1,exCard,exPage
      },
        data(){
          return{
              show:false
          }
        },
        methods: {
            click2(e) {
                this.show = !this.show
            }
        },
        mounted(){
          this.show=true
        }
    }
</script>
<style>

  .div1{
    display: inline-block;

  }
  .ex-angle{
    width: 0;
    height: 0;
    right: 0;
    top: 0;
    position: absolute;
    border-top: 100px solid black;
    border-left: 100px solid transparent;
  }
  .ex-angle:hover{
    border-top: 100px dashed #606266;
  }
</style>
