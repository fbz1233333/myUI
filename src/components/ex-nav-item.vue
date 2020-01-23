<template>
  <span class="ex-nav-item" @click="click1">
    <slot></slot>
  </span>
</template>
<script>
export default {
    props:{
        to:{
            type:String,
            default:'#'
        }
    },
    methods:{
        click1(e){
            // console.log('e')
            this.$router.push({
                path:this.to
            })
        }
    }
}
</script>
<style scoped>
  .ex-nav-item{
    font-family: "Comic Sans MS";
    margin: 0 2%;
    padding: 10px;
  }
  .ex-nav-item:hover{
    cursor: pointer;

    border-bottom: 5px solid black;
  }
</style>
