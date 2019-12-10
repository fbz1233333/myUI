<template>
<div v-show="real_show"
     :style="{opacity: transparency+'%'}" >
  <slot></slot>
</div>
</template>
<script>
export default {
    props:{
        show:{
            type:Boolean,
            default:true
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
            // console.log('if_show change')
            let _this=this
            if (val===true){
                // console.log('fading in')
                this.real_show=!this.real_show
                let interval=setInterval(()=>{
                    _this.transparency+=2
                    if (_this.transparency>=100) {
                        // console.log('over')
                        clearInterval(interval)
                        return
                    }
                })
            }else if (val===false){
                // console.log('fading out')
                let interval=setInterval(()=>{
                    _this.transparency-=2
                    if (_this.transparency<=0) {
                        this.real_show=!this.real_show
                        // console.log('over')
                        clearInterval(interval)
                        return
                    }
                })
            }
        }
    },
    data(){
        //凡是data的都是仅仅赋值一次
        return{
            real_show:this.show,
            transparency:this.show?100:0
        }
    },
    mounted(){
        // console.log('props传来的style',this.Style_)
        // console.log('if_show',this.if_show)
        // console.log('real_show',this.real_show)
    }

}
</script>
<style scoped>
</style>
