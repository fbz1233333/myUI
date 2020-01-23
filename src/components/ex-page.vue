<template>
  <el-container class="ex-page">

<!--    <el-aside width="3%" class="ex-aside ex-aside-left" @click.native="pre">-->
<!--      <span><</span>-->
<!--    </el-aside>-->
    <el-container width="94%">
      <div class="ex-page-center">
        <div class="ex-page-header">
          <slot name="header"></slot>
        </div>
        <hr>
        <div class="ex-page-content">
          <slot name="content"></slot>
        </div>
        <div class="ex-page-footer">
          <span class="ex-page-p1">
            <slot name="footer">
            </slot>
          </span>

        </div>
      </div>


    </el-container>
<!--    <el-aside width="3%" class="ex-aside ex-aside-right" @click.native="next">-->
<!--      <span>></span>-->

<!--    </el-aside>-->
  </el-container>
</template>
<script>
  export default {
      methods:{
          pre(){
              console.log('pre')
          },
          next(){
              console.log('next')
          }
      }
  }
</script>
<style scoped>
  .ex-aside{
    margin-top: 20%;
    margin-bottom: 20%;
    /*padding: 50% 0;*/
    padding: 40% 0;
    color: white;
    background-color: white;
    display: inline-block;
    font-size: 30px;
  }
  .ex-aside-left{
    position: relative;
    left: -22px;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    /*margin: 10px 0px;*/
  }
  .ex-aside-right{

    position: relative;
    left: 22px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .el-aside:hover{
    background-color: black;
    color: white;
  }
  .ex-page{
    margin: 5px;
    border: black 1px solid;
    border-radius: 10px;
    width: 700px;
    height: 920px;
  }
  .ex-page-center{
    margin: 20px 10px;
    width: 100%;
  }
  .ex-page-content{
    margin: 10px 1px;
    height: 93%;
    /*background-color: black;*/
    font-weight: 100;
    font-size: 15px;
    letter-spacing: 1px;
    /*background-color: black;*/
  }

  .ex-page-footer{
    /*background-color: black;*/
    /*width: 100%;*/
    /*margin-bottom: 10px;*/
    opacity: 50%;
    font-size: 10px;
  }
  .ex-page-header{
    font-size: 12px;
    font-weight: 100;
    letter-spacing: 1px;
  }
  .ex-page-p1{
    text-align: center;
  }
</style>
