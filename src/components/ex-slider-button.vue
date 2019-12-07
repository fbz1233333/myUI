<template>
  <div>
    <button :class="['ex-slider-button','ex-slider-button-'+type]"

            @click="handleClick"></button>
  </div>

</template>
<script>
export default {
    methods:{
        handleClick(e){
            this.$emit('click',e)
        }
    },
    props:{
        type:{
            type:String,
            default:'default',
        }
    }
}

</script>
<style scoped>
</style>
