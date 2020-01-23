<template>
  <el-upload
    class="upload-demo"
    ref="upload"
    action="#"
    :http-request="uploadManual"

    :limit="1"
    :on-change="handleChange"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="handleRemove"

    :on-exceed="handleExceed"
    :file-list="fileList"
    :auto-upload="false">
    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    <el-button style="margin-left: 10px;" size="small" type="success" @click="handleSubmit">上传到服务器</el-button>
    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件,且不超过500kb</div>
  </el-upload>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                loading:true,
                fileList:[]
            }
        },
        methods:{
            handleChange(){
                console.log('ch')
            },
            handleSuccess(){

                console.log('success')
                this.$message({
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
            },
            handleSubmit(){
                this.$refs.upload.submit()
            },
            uploadManual(params){
                let formData=new FormData();
                formData.append('file',params.file)
                axios.post('app/up',formData).then(res=>{
                    // console.log(res.data)
                    this.$message({
                        message:'上传成功',
                        type:'success'
                    })
                })
            },

            handleRemove(file,fileList){
                console.log('remove')
                console.log(file,fileList)
            },
            handlePreview(file) {
                console.log('preview')
                console.log('preview',file)
            },
            handleExceed(file, fileList) {
                console.log(file)
                this.$message({
                    type:'warning',
                    message:'请先将之前上传文件从列表中的删除',
                    center:true
                })
            }
        },
        created(){
            console.log(this.loading)
        },
        mounted(){
            console.log(this.loading)

            this.loading=false

        }
    }
</script>
<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
