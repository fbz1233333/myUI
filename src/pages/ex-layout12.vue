<template>
  <div>
    <!--    <el-link type="primary" href="http://www.baidu.com">主要链接</el-link>-->
    <el-time-select
      v-model="value"
      :picker-options="{
      start:'08:30',
      step:'00:15',
      end:'18:30'
      }"
      placeholder="选择时间">
    </el-time-select>
    <el-time-picker
      v-model="value1"
      :picker-options="{
        selectableRange:'18:30:00 - 20:30:00'
      }"
      placeholder="任意时间点"
    ></el-time-picker>
    <el-time-picker
    arrow-control
    v-model="value2"
    :picker-options="{selectableRange:'18:30:00 - 20:30:00'}"
    placeholder="任意时间点"
    ></el-time-picker>
  </div>
</template>
<script>
    export default {

        data(){
            return{
                value2:new Date(2016,9,10,18,40),
                value1:new Date(2016,9,10,18,40),
                value:''
            }
        }
    }
</script>
<style scoped>
</style>
