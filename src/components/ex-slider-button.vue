<template>
  <ex-div-drag :baseX="0" y-move-disabled>
    <button :class="['ex-slider-button','ex-slider-button-'+type]"></button>
  </ex-div-drag>

</template>
<script>
export default {
    methods:{
    },
    props:{
        type:{
            type:String,
            default:'default',
        }
    },
    components:{
        exDivDrag
    }
}
import exDivDrag from '@/components/ex-div-drag'

</script>
<style scoped>
</style>
