<template>
  <input v-model="value1" class="ex-input2" @input="input" :type="type">
</template>
<script>
  export default {
      props:{
          value:{
              type:String,
          },
          type:{
              type:String,
              default:'text'
          }
      },
      data(){
          return{
              value1:this.value
          }
      },
      methods:{
          input(){
              this.$emit('input',this.value1)
          }
      }
  }

</script>
<style scoped>
  .ex-input2{
    display: inline-block;
    margin: 5px 5px 5px 5px;
    height: 20px;
    padding: 5px 10px 5px 10px;
    border: 3px solid black;
    width: 200px;
    font-size: 17px;
    font-family: "Comic Sans MS","楷体";

  }
  .ex-input2:focus{
    /*box-shadow: 2px 2px 10px #606266;*/
    color: white;
    background-color: black;
  }
</style>
