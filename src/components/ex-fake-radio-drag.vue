<template>
<!--  不能指定prop的值-->
  <ex-fake-radio checked
    @mouseOver="handleOver"
    @mouseOut="handleOut"

  ></ex-fake-radio>
</template>
<script>
    export default {
        methods:{
            handleOver(){

            },
            handelOut(){

            }
        },
        data(){
          return{
              hover:false,
              clicked:false
          }
        },
        components:{
            exFakeRadio
        }
    }
    import exFakeRadio from '@/components/ex-fake-radio'
</script>
<style scoped>

</style>
