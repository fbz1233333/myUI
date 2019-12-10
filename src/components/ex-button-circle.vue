<template>
  <div class="div-row">

    <button class="ex-button" :class="'ex-button-'+type">
      <slot></slot>
    </button>
  </div>


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
    }
</script>
<style scoped>

</style>
