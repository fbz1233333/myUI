<template>
<div>
  <el-button>{{info}}</el-button>
  <el-button type="success">{{info}}</el-button>
  <el-button type="warning">{{info}}</el-button>
  <el-button type="primary">{{info}}</el-button>

  <el-button icon="el-icon-search" circle ></el-button>

  <el-button type="primary" icon="el-icon-edit"></el-button>
  <el-button type="primary" icon="el-icon-search">搜索</el-button>
  <el-button type="primary">上传<i class="el-icon-upload el-icon-right"></i></el-button>
  <el-button type="primary" loading>加载中</el-button>
  <br>
  <br>
<!--  <br>-->
  <div>
    <el-radio v-model="r1" label="1" border>备选项1</el-radio>
    <el-radio v-model="r1" label="2" border>备选项2</el-radio>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="r2" size="small">
      <el-radio label="1" border>备选项1</el-radio>
      <el-radio label="2" border>备选项2</el-radio>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="r2" size="mini" disabled>
      <el-radio label="1" border>备选项1</el-radio>
      <el-radio label="2" border>备选项2</el-radio>
    </el-radio-group>
  </div>
  <br>
  <el-checkbox-group v-model="c3">
    <el-checkbox label="复选框A"></el-checkbox>
    <el-checkbox label="复选框B"></el-checkbox>
    <el-checkbox label="复选框C"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>

  <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
  <div></div>
  <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
  </el-checkbox-group>
</div>
</template>
<script>
    const cityOptions = ['上海', '北京', '广州', '深圳'];

    export default {

    data(){
        return{
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true,

            r1:'',
            r2:'',
            c3:['选中且禁用','复选框A'],
            info:'default'
        }
    },
        methods: {
            handleCheckAllChange(val) {
                this.checkedCities = val ? cityOptions : [];
                this.isIndeterminate = false;
            },
            handleCheckedCitiesChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount === this.cities.length;
                this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
            }
        }
}
</script>
<style scoped>
</style>
