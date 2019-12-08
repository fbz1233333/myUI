<template>
  <div class="div-row" ref="drag_div"
       :style="{position:'absolute',left: x+'px',top:y+'px'}"
       @mouseover="handleMouseOver"
       @mouseout="handleMouseOut"
      @click="handleClick">
    <p v-if="test">
      clicked:{{clicked}}
      hover:{{hover}}
      <!--    moveSignal:{{move_signal}}-->
      location:{{x}},{{y}}
    </p>
    <slot></slot>
  </div>
</template>
<script>
    export default {
        props:{
            xMoveDisabled:{
                type:Boolean,
                default:false
            },
            yMoveDisabled:{
                type:Boolean,
                default:false
            },
            test:{
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
            }
        },
        methods:{
            handleClick(){
              console.log('clicked')
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
                clicked:false,
                hover:false,
                x:this.baseX,
                y:this.baseY
            }

        },
        computed:{
          move_signal(){
              return this.clicked
          }
        },
        mounted(){
            // console.log(this.xMoveDisabled)
            // console.log(this.$refs.drag.clientHeight)
            // console.log(this.$refs.drag.clientWidth)

        },
    }
</script>
<style scoped>
</style>
