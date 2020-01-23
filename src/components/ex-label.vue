<template>
  <label class="ex-label" :for="forId">
    <slot></slot>
  </label>
</template>
<script>
  export default {
      props:{
          forId:{
              type:String,
              default:''
          }
      },
      data(){
          return{

          }
      }
  }

</script>
<style scoped>
  .ex-label{
    margin: 0 10px 0 0;
    font-weight: 600;
  }
</style>
