<template>
  <div  style="padding: 200px" class="box">
    <div class="top">
      <el-tooltip class="item" effect="dark" content="Top left 提示文字" placement="top-start">
        <el-button>上左</el-button>
      </el-tooltip>
      <el-tooltip class="item" content="Top 上中" placement="top">
        <el-button>上中</el-button>
      </el-tooltip>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style>
  .box {
    width: 400px;

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }
  }
</style>
