<template>

    <button class="ex-button" :class="'ex-button-'+type">
      <slot></slot>
    </button>

</template>
<script>
    export default{
        methods:{
            // handleClick(){
            //     console.log('点击了handleClick')
            // }
        },
        data(){
            return{
                r:0
            }
        },
        props:
            {
                type:{
                    type:String,
                    default:'default'
                },
            },


        mounted(){
        }
    }
</script>
<style scoped>
  @import "../css/index.less";
</style>
