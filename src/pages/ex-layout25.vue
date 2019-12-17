<template>

  <el-form ref="form" :model="form1" label-width="80px">
    <el-form-item label="用户名">
      <el-input v-model="form1.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form1.password"></el-input>
    </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="log_in">登录</el-button>
  </el-form-item>
  </el-form>

</template>
<script>
export default {

    methods:{
        log_in(){
            this.$store.dispatch('login',this.form1)
        }
    },
    data(){
        return{
            form1:{
                name:'',
                password:''
            }
        }
    }
}
</script>
<style scoped>
</style>
