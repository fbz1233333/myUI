<template>
<div v-show="real_show"  :style="{width: width_per+'%'}">
<!--    {{width_per}}-->
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
        width:{
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
                    _this.width_per+=2
                    if (_this.width_per>=this.width_base) {
                        // console.log('over')
                        clearInterval(interval)
                        // return
                    }
                },20)
            }else if (val===false){
                // console.log('less wider')
                let interval=setInterval(()=>{
                    // console.log(_this.width_per)
                    _this.width_per-=2
                    if (_this.width_per<=0) {
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
            width_base:this.width,
            real_show:this.show,
            width_per:this.show?this.width:0
        }
    },
    mounted(){
        // console.log('real_show',this.real_show)
        // console.log(this.$refs.wider_div.clientWidth) //这时候为0
    }

}
</script>
<style scoped>
</style>
