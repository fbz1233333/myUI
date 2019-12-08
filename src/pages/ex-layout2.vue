<template>
<div>
  <ex-table :tableData="tableData" :columns="columns"></ex-table>

</div>
</template>
<script>
export default {
    components:{
      exTable
    },
  data(){
      return{
          tableData:[
              {
                  id:1,
                  name:'fnz',
                  pass:'123456'
              },
              {
                  id: 2,
                  name:'fbz',
                  pass:'456789'
              }
          ],
          columns:[
              {
                  title:'ID',
                  column:'id'
              },
              {
                  title: '用户名',
                  column:'name'
              }
          ],
      }
  }
}
import exTable from '@/components/ex-table'

</script>
<style scoped>
</style>
