<template>
  <div>
    <div class="block">
      <!--    <span class="demonstration">默认click触发子菜单</span>-->
      <el-cascader
        :show-all-levels="false"
        size="medium"
        v-model="value"
        :options="options"
        @change="handleChange">

      </el-cascader>
    </div>
  </div>

</template>
<script>
    export default {

        data(){
            return{
                value:[],
                options:[
                    {
                        value:'zhinan',
                        label:'指南',
                        children:[{
                            value:'shejiyuanze',
                            label:'设计原则',
                            children:[{
                                value:'yizhi',
                                label:'一致'
                            },{
                                value:'fankui',
                                label: '反馈'
                            },{
                                value:'xiaolv',
                                label:'效率'
                            }]
                        },{
                            label:'2nd',
                            value:'info',
                            children: [{
                                label:'in',
                                value:'inf'
                            },{
                                label:'ii',
                                value:'ss'
                            }]
                        }]
                    }
                ]
            }
        },
        methods:{
            handleChange(value){
                console.log(value)
            }
        }
    }
</script>
<style scoped>
</style>
