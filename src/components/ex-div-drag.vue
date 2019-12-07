<template>
<div class="div-row" ref="drag_div"
     :style="{position:'absolute',left: x+'px',top:y+'px'}"
     @mouseover="handleMouseOver"
     @mouseout="handleMouseOut">

  <p v-if="test">
    clicked:{{clicked}}
    hover:{{hover}}
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
            clicked:false,
            hover:false,
            x:this.baseX,
            y:this.baseY
        }

    },
    mounted(){
        // console.log(this.xMoveDisabled)
        // console.log(this.$refs.drag.clientHeight)
        // console.log(this.$refs.drag.clientWidth)
        let width=this.$refs.drag_div.clientWidth
        let height=this.$refs.drag_div.clientHeight
        this.$refs.drag_div.onmousedown=(e)=>{
            this.clicked=true
        }

        this.$refs.drag_div.onmousemove=(e)=>{
            // console.log(e.clientX)
            // console.log(e.clientY)
            if (this.clicked && this.hover){
                if (!this.xMoveDisabled)this.x=e.clientX-width/2;
                if (!this.yMoveDisabled)this.y=e.clientY-height/2;
            }
        }
        this.$refs.drag_div.onmouseup=(e)=>{
            this.clicked=false
        }
    },
}
</script>
<style scoped>
</style>
