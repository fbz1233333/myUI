<template>
<div v-show="value" v-fade="1">
  <div class="ex-modal-overlay" @click="click1" >
  </div>
  <div class="ex-modal">
    <slot></slot>
  </div>
</div>

</template>
<script>
export default {
    props:{
        value:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return{

        }
    },
    methods:{
        click1(e){
            this.$emit('input',false)
        }
    }
}
</script>
<style scoped>
  .ex-modal-overlay {
    /*display: block;*/
    z-index: 1000;
    /*visibility: hidden;*/
    position: fixed;   /* 使用绝对定位或固定定位  */
    left: 0;
    top: 0;
    width:100%;
    height:100%;
    text-align:center;
    background-color: black;
    opacity: 0.7;   /* 背景半透明 */
  }
  /* 模态框样式 */
  .ex-modal{
    position: absolute;
    top:0;
    left:0;
    width:300px;
    margin: 100px 40%;
    background-color: white;
    z-index: 2001;
    border:1px solid #000;
    padding:15px;
    /*background-color: white;*/
    /*text-align:center;*/
  }
</style>
