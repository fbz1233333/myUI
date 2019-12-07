<template>
  <div class="div-row">
    <button class="ex-button" :class="'ex-button-'+type+' ex-button-'+size "
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
                this.$emit('mouseOver')
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


        }
    }
</script>
<style scoped>
</style>
