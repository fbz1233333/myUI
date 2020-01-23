<template>
  <div class="ex-btn-div">
    <button :class="['ex-btn','ex-btn-'+theme]" @click="click1">
      <slot></slot>
    </button>
  </div>

</template>
<script>
export default {
    methods:{
      click1(e){
          // console.log('s')
          this.$emit('click',e)
      }
    },
    props:{
        theme:{
            type:String,
            default:'default'
        }
    }
}
</script>
<style scoped>
  .ex-btn-div{
    display: inline-block;
    margin: 1px 3px;

  }
  .ex-btn{
    font-size: 15px;

    margin: 2px;
    outline: none;
    font-family: "Comic Sans MS","楷体";

    border: 1px solid black;

  }
  .ex-btn-light:hover{
    color: white;
    background-color: black;
  }
  .ex-btn-dark:hover{
    color: black;
    background-color: whitesmoke;
  }

  .ex-btn-default:hover{
    color: white;
    background-color: #606266;
  }
  .ex-btn-default{

  }
  .ex-btn-dark{
    color: white;
    background-color: black;
  }
  .ex-btn-light{
    color: black;
    background-color: white;
  }
</style>
