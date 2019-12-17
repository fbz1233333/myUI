<template>

  <div>
    <el-select v-model="value" placeholder="请选择" clearable  collapse-tags>
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled">

        <span style="float: left">{{item.label}}</span>
        <span style="float: right;color: #d3dce6;font-size: 13px">{{item.value}}</span>
      </el-option>
    </el-select>
    {{value}}

  </div>

</template>
<script>
export default {
    data(){
        return{
            value:[],
            options:[
                {value:'选项1', label:'黄金甲'},
                {value:'选项2', label:'黄金甲'},
                {value:'选项3', label:'黄金甲'},
                {value:'选项4', label:'黄金甲'},
                {value:'选项5', label:'黄金甲'},
            ]
        }
    }

}
</script>
<style scoped>
</style>
