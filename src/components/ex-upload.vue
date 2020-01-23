<template>
  <div class="ex-upload-div1">
    <input type="file" style="display: none" ref="file" @change="handleChange">
    <div @click="handleClick" class="ex-upload-div">
      <slot></slot>
    </div>
<!--    {{src}}-->
<!--    <img :src="src"/>-->
    {{file.name}}
  </div>
</template>
<script>
  export default {
      data(){
        return{
            file:{},
            src:''
        }
      },
      methods:{
          handleChange(e){
              let file=e.target.files[0]
              // console.log(e)
              this.src=e.target.value
              this.file=file
              this.$emit('input',file)
          },
          handleClick(e){
              // console.log('s')
              // console.log(this.$refs.file)
              this.$refs.file.click(e)
          }
      }
  }
</script>
<style scoped>
  .ex-upload-div1{

  }
  .ex-upload-div{
    display: inline-block;
    /*padding: 5px;*/
  }
  .ex-upload-div:hover{
    cursor: pointer;
  }
</style>
