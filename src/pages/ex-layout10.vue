<template>
  <div>
    <el-switch
      v-model="value"
      active-text="按月付费"
      inactive-text="按年付费"
      active-color="#13ce66"
      inactive-color="#ff4949">

    </el-switch>
<!--    {{value}}-->
  </div>
</template>
<script>
export default {
  data(){
      return{
          value:false
      }
  }
}
</script>
<style scoped>
</style>
