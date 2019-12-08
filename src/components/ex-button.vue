<template>
  <div class="div-row">
    <button :class="['ex-button','ex-button-'+type,'ex-button-'+size]"
            :disabled="disabled"
            @mouseout="handleMouseOut"
            @mouseover="handleMouseOver">
      <p :class="'ex-font-'+size">
        <slot></slot>
      </p>
    </button>
<!--    {{hover}}-->
  </div>

</template>
<script>
    export default{
        methods:{
            handleMouseOver(){
                this.hover=true
                this.$emit('mouseover')
            },
            handleMouseOut(){
                this.hover=false
                this.$emit('mouseOut')
            }
        },
        data(){
            return{
                hover:false
            }
        },
        props:
            {
                disabled:{
                  type:Boolean,
                  default:false
                },
                href:{
                  type:String,
                  default:'#'
                },
                type:{
                    type:String,
                    default:'default'
                },
                size:{
                    type:String,
                    default:'sm'
                }
            },


        mounted(){
          // console.log(this.href)

        }
    }
</script>
<style scoped>
</style>
