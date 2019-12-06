<template>
  <div class="div-row">
    <b @click="handleClick"
       :class="[checked?'ex-fake-radio-checked':'ex-fake-radio','ex-fake-radio-'+type]"
       :checked="checked">
    </b>
  </div>
</template>
<script>
    export default {
        props:{
            type:{
                type:String,
                default:'default'
            },
            checked:{
                type:Boolean,
                default:false
            },
            changeable:{
                type:Boolean,
                default:true
            }

        },

        methods:{
            handleClick(){
                if (this.changeable) this.checked=!this.checked
            }
        },
    }
</script>
<style scoped>

</style>
