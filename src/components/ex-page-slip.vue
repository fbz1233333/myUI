<template>
  <div class="ex-slip" :style="{'min-width':width,'min-height':height}">
    <slot></slot>
  </div>
</template>
<script>
export default {

    props:{
        width:{
            type:String,
            default:'0px'
        },
        height:{
            type:String,
            default: '0px'
        }
    }
}
</script>
<style scoped>
  .ex-slip{
    margin: 5px;
    display: inline-block;
    border: 1px solid black;
    /*min-width: 200px;*/
  }
</style>
