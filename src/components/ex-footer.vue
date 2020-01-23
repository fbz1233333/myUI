<template>

  <nav :class="['ex-footer','ex-footer-'+theme]">
    <div class="div2">
      <slot></slot>
    </div>
  </nav>
</template>
<script>
export default {

    props:{
        theme:{
            type:String,
            default:'light'
        }
    }
}
</script>
<style scoped>
  .div2{
    width: 60%;
    margin:1% 20%;
  }
  .ex-footer{



    width: 100%;
  }
  .ex-footer-dark{
    background-color: black;
    color: white;
  }
  .ex-footer-default{
    color: white;
    background-color: #606266;
  }
  .ex-footer-light{
    color: black;
    background-color: #f0f0f0;
  }
</style>
