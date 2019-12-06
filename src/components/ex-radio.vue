<template>
<div class="div-row">

    <input class="ex-radio" type="radio" :value="value" :id="'id'+value"/>
      <label :for="'id'+value" class="ex-label">{{label}}</label>
    {{value}}
</div>

</template>
<script>
export default {
  props:{
      label:{
          type:String,
          require:true,
          default:'radio-label'
      },
      value:{
          type:String,
          require:true,
          default: "radio-value"
      }

  }
}
</script>
<style scoped>
</style>
