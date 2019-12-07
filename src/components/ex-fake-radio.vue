<template>
<!--  不能指定prop的值-->
  <div class="div-row">
    <p @click="handleClick"
       :class="[checkedData ? 'ex-fake-radio-checked':'ex-fake-radio-unchecked','ex-fake-radio','ex-fake-radio-'+type]"
       :changeable="changeable"
       @mouseover="handleMouseOver"
       @mouseout="handleMouseOut"
    >
    </p>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                checkedData:this.checked
            }
        },
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
                if (this.changeable) this.checkedData=!this.checkedData
            },
            handleMouseOut(){
                this.$emit('mouseOut')
            },
            handleMouseOver(){
              this.$emit('mouseOver')
            }
        },
    }
</script>
<style scoped>

</style>
