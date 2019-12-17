<template>
  <div>
    <div class="ex-tooltip" v-show="show" ref="tooltip" :style="{left: x+'px',top:y+'px'}">
      <slot name="tip"></slot>
    </div>

    <div class="ex-componentTip" ref="component" @mouseover="handleOver" @mouseout="handleOut">
      <slot name="component"></slot>
    </div>
  </div>
</template>
<script>
    import trans from '../directives/test'
    export default {
        props:{
            mode:{
                type:String,
                default:'drag'
            }
        },
        data(){
            return{
                x:-1200,
                y:-1200,
                over:false,
                show:false
            }
        },
        methods:{
            handleOver(e){
                // console.log(this.pageX)
                // console.log(this.$refs.tooltip)
                // console.log(e.pageX)

                // console.log(this.width)
                // console.log(this.$refs.component.pageX)
                // console.log(this.$refs.component.pageY)
                this.show=true
                if (this.mode==='drag'){
                    this.x=e.pageX
                    this.y=e.pageY
                }else if (this.mode==='fixed'){

                    if (!this.over){
                        this.x=e.pageX
                        this.y=e.pageY
                    }
                    this.over=true
                }
            },
            handleOut(){
                // console.log(this.pageY)
                this.show=false
            }
        }
    }
</script>
<style scoped>
</style>
