<template>
<div class="div-row">
  <ex-slider-hr :type="type"></ex-slider-hr>
  <ex-slider-button :type="type" @click="handleClick" style="position: relative;top: -55px"></ex-slider-button>
</div>
</template>
<script>
export default {
    methods:{
        handleClick(e){
            console.log('clicked')
        }
    },
  props:{
    type:{
        type:String,
        default:'default'
    }
  },
  components:{
      'ex-slider-hr':exSliderHr,
      'ex-fake-radio':exFakeRadio,
      'ex-slider-button':exSliderButton
  },

}
  import exSliderHr from '@/components/ex-slider-hr'
  import exFakeRadio from '@/components/ex-fake-radio'
  import exSliderButton from '@/components/ex-slider-button'
</script>
<style scoped>
</style>
