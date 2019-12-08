<template>

  <table class="ex-table ">
    <th class="ex-table-head" v-for="item in resultTitle">
      <td class="ex-table-head-td">{{item}}</td>
    </th>
    <tr  class="ex-table-data" v-for="item in resultData">
      <td v-for="(value,key,index) in item">{{value}}</td>
    </tr>
  </table>
</template>
<script>
export default {
    props:{
        tableData:{
            type:Array,
            required:true,
            default:[]
        },
        columns:{
            type:Array,
            required:true,
            default: []
        }
    },
    methods:{
        obj_filter(params,keys){
            // let params = { id: '关于我们', name: '新手购物', pass: '客户服务' }
            let obj={}
            //想返回一个仅包含id和name的对象
            // let keys=['id','name']
            for(let key in params){
                if (keys.includes(key)){
                    // console.log(params[key])
                    this.$set(obj,key,params[key])
                }
            }
            // console.log(obj)
            return obj
        },
        array_obj_filter(array,columns){
            let keys=[]
            for(let i=0;i<columns.length;i++){
                keys.push(columns[i].column)
            }
            // console.log(keys)
            // console.log('keys is',keys)
            let resultData=[]
            for(let i=0;i<array.length;i++){

                resultData.push(this.obj_filter(array[i],keys))

            }
            // console.log(keys)
            return resultData
        },

        array_field_filter(columns,key){
            let results=[]

            for(let i=0;i<columns.length;i++){
                // console.log(columns[i])
                results.push(columns[i][key])
            }
            // console.log(titles)
            return results
        }
    },
    computed:{
        resultData(){
            let array=this.tableData
            let columns=this.columns
            // console.log(array)
            // console.log('columns info is',columns)
            // let c=array[0].key
            // let keys=Object.keys(array[0])

            return this.array_obj_filter(array,columns)
        },
        resultTitle(){
            let columns=this.columns
            let key='title'

            return this.array_field_filter(columns,key)

        }
    },
    mounted(){
    }
}
</script>
<style scoped>
</style>
