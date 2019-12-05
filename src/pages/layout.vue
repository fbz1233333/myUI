<template>
  <div>

    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12"><div class="grid-content bg-purple"></div> </el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div> </el-col>
    </el-row>

    <el-link href="#">默认链接</el-link>
    <el-link href="#" type="primary">主要链接</el-link>

    <el-radio v-model="radio" label="1" disabled>备选框1</el-radio>
    <el-radio v-model="radio" label="2" disabled>备选框2</el-radio>

    <el-radio-group v-model="radio">
      <el-radio :label="3">备选项</el-radio>
      <el-radio :label="4">备选项</el-radio>
      <el-radio :label="5">备选项</el-radio>
    </el-radio-group>

    <el-radio-group v-model="radio1">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳" :disable="if1"></el-radio-button>
    </el-radio-group>
    <p style="line-height: 300%">info</p>

    <p style="min-height: 300%">info2</p>
    <!--    两种不同的方式设置行距-->

    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <el-input clearable v-model="input" placeholder="请输入内容"></el-input>
    <el-input show-password v-model="input" placeholder="请输入内容"></el-input>


    <el-input placeholder="请输入日期" suffix-icon="el-icon-date"
    v-model="input1"></el-input>
    <div style="margin: 20px;background-color: black;">
      <el-input placeholder="请输入内容"
                prefix-icon="el-icon-search" v-model="input2">
      </el-input>
    </div>
    <el-button>button</el-button>

    <div style="margin: 20px;background-color: black">
      <div style="padding: 20px;background-color: dodgerblue">
        <el-input placeholder="请输入内容"
                  prefix-icon="el-icon-search" v-model="input2">
        </el-input>
      </div>
    </div>

    <button class="test-button" >button</button>
<!--    以上就是margin与padding的区别-->
    <button class="test-button-2">button2</button>

  </div>
</template>
<script>
    export default {
        data(){
            return{
                input1:"",
                input:"",
                if1:true,
                radio:3,
                radio1:"广州"
            }
        }
    }
</script>
<style scoped>

  .el-row{
    margin-bottom: 20px;
  &:last-child{
    margin-bottom: 0;
     }
  }
  .el-col{
    border-radius: 4px;
  }
  .test-button:hover{
    background-color: #a0cfff ;color: #3a8ee6;border-radius: 4px;height: 40px;min-width: 80px;
  }
  .test-button-2:hover{
    background-color: #a0cfff ;color: #3a8ee6;border-radius: 4px;height: 40px;min-width: 80px;
    border-width: 10px;
  }
  .test-button{
    background-color: white;color: black;border-radius: 4px;height: 40px;min-width: 80px;
  }
  .test-button-2{
    background-color: white;color: black;border-radius: 4px;height: 40px;min-width: 80px;box-shadow:0 0 0 0  #e5e9f2;
    border-width: 1px;

  }

  .bg-purple-dark{
    background: #99a9bf;
  }
  .bg-purple{
    background: #d3dce6;
  }
  .bg-purple-light{
    background: #e5e9f2;
  }
  .grid-content{
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg{
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
