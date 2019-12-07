<template>
    <img :src="'../static/svg/'+i+'.svg'"  :class="'ex-icon-'+size"/>
<!--  所有的静态资源都要放到static中-->
</template>
<script>
export default {
  props:{
      size:{
        type:String,
          default:'sm'
      },
      i:{
          type:String,
          require:true,
          default:'all'
      },
  },

}
</script>
<style scoped>


</style>
