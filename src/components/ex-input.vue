<template>
  <div class="div-row">
    <!--    绝对布局的要诀-->


    <input class="ex-input"
           :placeholder="placeholder"
           :class="['ex-reserve','ex-input-'+size,preIcon==''&& pre==''?'':'ex-pre-reserve-'+size,'ex-pre-reserve',sufIcon==''&& suf==''?'':'ex-suf-reserve-'+size]"
           :disabled="disabled"
           :clearable="clearable"
           :value="value"
           @input="input">
    <ex-icon :i="preIcon" v-if="preIcon!==''" :size="size"
             :class="['ex-pre-icon', 'ex-pre-icon-'+size]"></ex-icon>
    <ex-icon :i="sufIcon" v-if="sufIcon!==''" :size="size"
             :class="['ex-suf-icon', 'ex-suf-icon-'+size]"></ex-icon>
    <button v-if="pre!==''" disabled :class="['ex-pre-button','ex-pre-button-'+size]">
      <ex-icon :i="pre" :class="'ex-icon-'+size"></ex-icon>
    </button>
    <button v-if="suf!==''" disabled :class="['ex-suf-button','ex-suf-button-'+size]">
      <ex-icon :i="suf" :class="'ex-icon-'+size"></ex-icon>
    </button>


  </div>
</template>
<script>
    import exButton from '@/components/ex-button'
    export default {


        props:{
            placeholder:{
                type:String,
                default:''
            },
            pre:{
                type:String,
                default:''
            },
            suf:{
                type:String,
                default:""
            },
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
            },
            value:{
                type:String,
                default:""
            }
        },
        methods:{
            input(e){
                this.$emit('input',e.target.value)
                // console.log('input')
            }

        },
        components:{
            'ex-button':exButton,

            'ex-icon':exIcon
        },

        mounted(){
            console.log(this.value)
        }
    }
    import exIcon from '@/components/ex-icon'
</script>
<style scoped>
</style>
