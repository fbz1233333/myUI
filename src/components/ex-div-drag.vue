<template>
  <div class="div-row" ref="drag_div"
       :style="{position:'absolute',left: showX+'px',top:showY+'px'}"
       @mouseover="handleMouseOver"
       @mouseout="handleMouseOut"
       @mousewheel="handleWheel"

       @mousemove="handleMouseMove"
       @mousedown="handleMouseDown"
       @mouseup="handleMouseUp"
       @mouseleave="handleMouseLeave"

       @click="handleClick">
<!--   {{baseX}}{{baseY}}<br>-->
<!--    {{x}}{{y}}<br>-->
<!--    {{showX}}{{showY}}-->
    <div v-show="test_on"
         class="ex-hover-tip ex-font-unselected" :style="{opacity: transparency+'%'}">
      clicked:{{clicked}}
      hover:{{hover}}
      <!--    moveSignal:{{move_signal}}-->
      location:{{x}},{{y}}
      test_on:{{test_on}}
      test_signal:{{test_signal}}
      transparent:{{transparency}}
    </div>
    <slot></slot>
    <a v-show="test_signal" @click="ii">in{{test_on}}</a>
  </div>
</template>
<script>
    export default {
        methods:{
            ii(){
                let _this=this
                if (this.transparency>=100){
                    let interval=setInterval(function () {
                            // console.log('当前透明度',_this.transparency)
                            _this.transparency-=2
                        if (_this.transparency<=0) {
                            // console.log('over')
                            _this.test_on=false
                            clearInterval(interval)
                            // return
                        }
                    },10)
                    // this.test_on=false
                }else if (this.transparency<=0){
                    _this.test_on=true
                    let interval=setInterval(function () {
                        // console.log('当前透明度',_this.transparency)
                        _this.transparency+=2
                        if (_this.transparency>=100) {
                            // console.log('over')
                            clearInterval(interval)
                            // return
                        }
                    },10)
                    // this.test_on=false
                }
                },
            handleMouseLeave(e){
                if (this.clicked) this.move(e)
            },
            handleMouseUp(e){
                this.clicked=false
                // this.move(e)
            },
            handleMouseMove(e){
                this.move(e);
            },
            handleMouseDown(e){
                this.clicked=true
            },
            handleWheel(e){
                // console.log('wheel')
                this.move(e)
            },
            handleClick(){
                // console.log('clicked')
                this.$emit('click')
            },
            handleMouseOver(){
                this.hover=true
                this.$emit('mouseover')
            },
            handleMouseOut(){
                this.hover=false
                this.$emit('mouseout')
            },
            move(e){

                let width=this.$refs.drag_div.clientWidth
                let height=this.$refs.drag_div.clientHeight
                let targetX=e.pageX-width/2

                let targetY=e.pageY-height/2
                // let location_y=this.$refs.drag_div.getBoundingClientRect().top;
                // let location_x=this.$refs.drag_div.getBoundingClientRect().left
                if(this.move_signal){
                    if (targetX>=this.min_x && targetX<this.max_x){
                        // console.log(this.max_x)
                        this.x=targetX
                    }
                    if (targetY>=this.min_y && targetY<this.max_y)
                        this.y=targetY;
                }
            }
        },
        props:{

            //x  y表示左上坐标
            //所有minx miny maxx maxy都表示左上坐标
            minX:{
                type:Number,
                // default:this.$refs.drag_div.clientWidth/2
                default:0
            },
            maxX:{
                type:Number,
                // default:9999
                // default:1000-this.$refs.drag.clientHeight/2
            },
            minY:{
                type:Number,
                default:0
                // default:this.$refs.drag_div.clientHeight/2
            },
            maxY:{
                type:Number,
                // default:1600
                // default:1600,
            },
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
                // default:1500
            },
            baseY:{
                type:Number,
                // default:0
            }
        },

        data(){

            return{

                test_on:false,
                test_signal:this.test,
                transparency:this.test_on?100:0,
                clicked:false,
                hover:false,
                x:this.baseX,
                y:this.baseY
            }

        },
        computed:{

            min_x(){
                // console.log(this.min_x)
                return this.minX
            },
            min_y(){
                return this.minY
            },
            max_y(){
                if (this.maxY===undefined){
                    return screen.height-this.$refs.drag_div.clientHeight
                }
                else{
                    return this.maxY
                }
                // console.log(this.maxY)
                // return 9999 || this.maxY
            },
            max_x(){
                // console.log(this.maxX)
                // return 9999 || this.maxX
                if (this.maxX===undefined){
                    // console.log('maxX',screen.width-this.$refs.drag_div.clientWidth)
                    return screen.width-this.$refs.drag_div.clientWidth
                }else {
                    return  this.maxX
                }
            },

            showX(){
                if (this.xMoveDisabled)
                    return this.baseX
                else
                    return this.x

            },
            showY(){
                if (this.yMoveDisabled)
                    return this.baseY
                else return this.y
            },
            move_signal(){
                return this.clicked
            }
        },
        mounted(){
            // console.log(this.xMoveDisabled)
            // console.log(this.$refs.drag.clientHeight)
            // console.log(this.$refs.drag.clientWidth)
            // let i=0
            // let j=0
            // this.$refs.drag_div.onmousedown=(e)=>{
            //     // console.log(this.$refs.drag_div.getBoundingClientRect().top)
            //     // console.log(this.$refs.drag_div.getBoundingClientRect().left)
            //
            //     this.clicked=true
            // }
            // // document.onmouseout
            // this.$refs.drag_div.onmouseleave=(e)=>{
            //     // i++
            //     // console.log('拖动太快,leave了')
            //     if (this.clicked) this.move(e)
            // }
            // this.$refs.drag_div.onmouseout=(e)=>{
            //     // j++
            //     // console.log('拖动太快,out了',j)
            //     //在out格式下 你无论离开任何子组件都会++
            // }
            // this.$refs.drag_div.onmousemove=(e)=>{
            //     // console.log(e.clientX)
            //     // console.log(e.clientY)
            //     this.move(e);
            //
            // }
            // this.$refs.drag_div.onmouseup=(e)=>{
            //     this.clicked=false
            //     // this.$refs.drag_div.removeEventListener()
            // }
            //


        },
    }
</script>
<style scoped>
</style>
