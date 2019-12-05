<template>
  <button class="ex-button" :class="'ex-button-'+type+' ex-button-'+size ">
    <p :class="'ex-font-'+size">
      <slot></slot>
    </p>
  </button>
</template>
<script>
    export default{
        methods:{
            // handleClick(){
            //     console.log('点击了handleClick')
            // }
        },
        props:
            {
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
        }
    }
</script>
<style scoped lang="less">
@import "../css/index.less";

</style>
