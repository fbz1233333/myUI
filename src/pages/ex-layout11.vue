<template>
  <div>
    <div>
      <span>默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <div>
      <span>自定义初始值</span>
      <el-slider v-model="value2"></el-slider>
    </div>
    <div>
      <span>影藏tooltip</span>
      <el-slider v-model="value3" :show-tooltip="false"></el-slider>
    </div>
    <div>
      <span>格式化tooltip</span>
      <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
    </div>
  </div>

</template>
<script>
  export default {
      methods:{
          formatTooltip(val){
              return val/100
          }
      },
      data(){
          return{
              value1:0,
              value2:0,
              value3:10,
              value4:20
          }
      }
  }
</script>
