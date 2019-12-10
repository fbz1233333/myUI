<template>

  <div v-show="real_show"   :style="{height: height_per*height_base/100+'px',width:'20%'}">
<!--        {{height_per}}-->
      <slot></slot>
  </div>


</template>
<script>
    export default {
        props:{
            show:{
                type:Boolean,
                default:true
            },
            height:{
                type:Number,
                default: 20
            }
        },
        computed:{
            if_show(){
                return this.show
            },

        },
        watch:{
            //每当察觉到ifshow变动时 先进性fade操作 再进行编制操作
            if_show(val,oldval) {
                // console.log(this.$refs.div_wider.clientWidth)
                // console.log('if_show change')
                let _this=this
                if (val===true){
                    // console.log('wider')
                    this.real_show=!this.real_show
                    let interval=setInterval(()=>{
                        _this.height_per+=20
                        if (_this.height_per>=100) {
                            // console.log('over')
                            clearInterval(interval)
                            // return
                        }
                    },20)
                }else if (val===false){
                    // console.log('less wider')
                    let interval=setInterval(()=>{
                        // console.log(_this.height_per)
                        _this.height_per-=20
                        if (_this.height_per<=0) {
                            this.real_show=!this.real_show
                            // console.log('over')
                            clearInterval(interval)
                            // return
                        }
                    },20)
                }
            }
        },
        data(){
            //凡是data的都是仅仅赋值一次
            return{
                //限制的百分比
                height_base:this.height,
                real_show:this.show,
                height_per:this.show?100:0
            }
        },
        mounted(){
            // consol
            // console.log(this.base)
            // console.log('props传来的style',this.Style_)
            // console.log('if_show',this.if_show)
            // console.log('real_show',this.real_show)
            // console.log(this.$refs.wider_div.clientWidth) //这时候为0
        }

    }
</script>
<style scoped>
</style>
