<template>
  <div class="div-row" >
    <button :class="['ex-button','ex-button-'+type,'ex-button-'+size]"
            :disabled="disabled"
            @click="handleClick"
            @mouseout="handleMouseOut"
            @mouseover="handleMouseOver">
      <p :class="['ex-font-'+size ,'ex-font-unselected']">
        <slot></slot>
      </p>
    </button>
<!--    {{hover}}-->
  </div>

</template>
<script>
    export default{
        //
        // updated(){
        //     console.log('this is updated')
        // },
        //一共6个 说明他们也updated了
        methods:{
            handleClick(){
              this.$emit('click')
            },
            handleMouseOver(){
                this.hover=true
                this.$emit('mouseover')
            },
            handleMouseOut(){
                this.hover=false
                this.$emit('mouseout')
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
