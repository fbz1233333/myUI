<template>
  <div>
    <div>
      <el-radio-group v-model="reserve">
        <el-radio :label="true">倒序</el-radio>
        <el-radio :label="false">正序</el-radio>
      </el-radio-group>

      <el-timeline :reverse="reserve">
        <el-timeline-item v-for="(activity,index) in activities" :keys="index" :timestamp="activity.timestamp">
          {{activity.content}}
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>
<script>
    export default{

        data(){
            return{
                reserve:true,
                activities:[
                    {
                        content:'活动开始时间',
                        timestamp:'2018-04-15'
                    },
                    {
                        content:'通过审核',
                        timestamp: '2018-04-13'
                    },
                    {
                        content:'创建成功',
                        timestamp:'2018-04-11'
                    }
                    ]
            }
        }
    }
</script>
<style scoped>
</style>
