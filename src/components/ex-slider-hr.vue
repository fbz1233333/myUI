<template>
<div class="div-row">
  <hr class="ex-hr" :class="'ex-hr-'+type">
</div>
</template>
<script>
  export default {
      props:{
          type:{
              type:String,
              default:"default"
          }
      }
  }

</script>
<style scoped>
</style>
