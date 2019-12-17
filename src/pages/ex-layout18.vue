<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/i2">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>
<script>
    export default {
      watch:{
          '$route' (to, from) {
              this.$router.go(0);
          }
      }
    }
</script>
<style scoped>

</style>
