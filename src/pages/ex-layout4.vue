<template>
  <div>
    <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
      <el-checkbox border v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>

    <el-input v-model="input" placeholder="请输入内容" type="textarea" :rows="2" :autosize="{minRows:2,maxRows:4}">
    </el-input>

    <el-input placeholder="请输入内容" v-model="input1">
      <template slot="prepend">http://www.</template>
      <template slot="append">.com</template>
    </el-input>



  </div>
</template>
<script>
const cityOptions=['上海','北京','广州','深圳']
  export default {
    data(){
        return{
            input:'',
            input1:'',
            checkedCities:['上海','北京'],
            cities:cityOptions
        }
    }
  }

</script>
<style scoped>
</style>
