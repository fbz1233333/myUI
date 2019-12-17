<template>
  <div>
    <el-select
      v-model="value"
      multiple
      filterable
      allow-create
      default-first-option
      placeholder="请选择文章标签">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
  </div>
</template>
<script>
    export default {
        data(){
            return{

                value:'',
                options:[
                    {value:'HTML',label:'HTML'},
                    {value:'CSS',label:'CSS'},
                    {value:'Javascript',label:'Javascript'},
                ]
            }
        }
    }
</script>
<style scoped>
</style>
