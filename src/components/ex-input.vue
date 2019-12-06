<template>
  <div class="div-row">
<!--    绝对布局的要诀-->
    <ex-icon :i="preIcon" v-if="preIcon!==''"
             :class="['ex-pre-icon', 'ex-pre-icon-'+size]"></ex-icon>
    <input class="ex-input"
           :class="['ex-input-'+size,preIcon==''?'':'ex-pre-reserve-'+size,'ex-pre-reserve']"
           :disabled="disabled"
           :clearable="clearable"
           @input="input">
    <ex-icon :i="sufIcon" v-if="sufIcon!==''"
             :class="['ex-suf-icon', 'ex-suf-icon-'+size]"></ex-icon>
  </div>
</template>
<script>
export default {
  props:{
      preIcon:{
          type:String,
          default:''
      },
      sufIcon:{
          type:String,
          default:''
      },
      disabled:{
          type:Boolean,
          default:false
      },
      clearable:{
        type:Boolean,
        default:false
      },
      size:{
          type:String,
          default:'md'
      },
      type:{
          type:String,
          default:"text"
      }
  },
    methods:{
      input(e){
          this.$emit('input',e.target.value)
          // console.log('input')
      }

    },
    components:{

      exIcon
    },

}
import exIcon from '@/components/ex-icon'
</script>
<style scoped>
</style>
