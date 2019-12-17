<template>
  <div style="border: 0 solid black;padding: 10px">

    <div v-for="i in dataColumns" class="div-row" :style="{width: 100/length +'%'}">
      <ul style="list-style-type: none" >
        <li v-for="j in i">
          {{j}}
          <hr>
        </li>
      </ul>
    </div>

<!--{{resultData }}-->
<!--    {{resultTitle}}-->
  </div>
</template>
<script>
export default {
    props:{
        data:{
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
    data(){
        return{
            length:0
        }
    },
    computed:{
        dataColumns() {
            let keys = Object.keys(this.data)
            // console.log(this.data[j].id)

            let array2=[]
            for (let k = 0; k < this.columns.length; k++) {
                let array = []
                array.push(this.columns[k].title)
                for (let i = 0; i < this.data.length; i++) {
                    array.push(this.data[i][this.columns[k].column])
                }
                // console.log(array)
                array2.push(array)
            }
            this.length=array2.length
            return array2



        }
    },

    mounted(){
    }
}
</script>
<style scoped>
  li:hover{
    background-color:#d3dce6;
  }
</style>
