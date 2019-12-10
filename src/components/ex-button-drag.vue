<template>

  <div class="div-row">
    <ex-div-drag :test="test" :baseX="baseX" :baseY="baseY" :xMoveDisabled="xMoveDisabled" :yMoveDisabled="yMoveDisabled">
      <ex-button>
        <slot></slot>
      </ex-button>
    </ex-div-drag>
  </div>

</template>
<script>
    export default {
        mounted(){
          // console.log(this.test)
          //   console.log(this.xMoveDisabled)
        },
        props:{
            xMoveDisabled:{
                type:Boolean,
                default:false
            },
            yMoveDisabled:{
                type:Boolean,
                default:false
            },
            baseX:{
                type:Number,
                default:1500
            },
            baseY:{
                type:Number,
                default:0
            },
            test:{
                type:Boolean,
                default:false
            }
        },
      components:{

        exDivDrag,exButton
      }
    }
    import exButton from '@/components/ex-button'
    import exDivDrag from '@/components/ex-div-drag'
</script>
<style scoped>
</style>
