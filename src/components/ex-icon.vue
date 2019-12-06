<template>
    <img :src="'../static/svg/'+i+'.svg'"  width="20" height="20"/>
<!--  所有的静态资源都要放到static中-->
</template>
<script>
export default {
  props:{
      i:{
          type:String,
          require:true,
          default:'all'
      },
  },
  mounted(){
  }
}
</script>
<style scoped>


</style>
