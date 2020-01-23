<template>
  <nav :class="['ex-nav','ex-nav-'+theme]">
    <div class="ex-nav-in">
      <slot></slot>
    </div>
  </nav>
</template>
<script>
export default {
    props:{
        theme:{
            type:String,
            default:'dark'
        }
    }
}
</script>
<style scoped>
  .ex-nav{
    min-height: 60px;
    border-bottom: 1px solid black;
  }
  .ex-nav .ex-nav-in{
    font-size: 20px;
    font-weight: 100;
    padding: 20px 20% 0 20%;
  }
  .ex-nav-dark{
    background-color: black;
  }
  .ex-nav-dark .ex-nav-in {
    color: white;
  }
  .ex-nav-light{
    background-color:white;
  }
  .ex-nav-light .ex-nav-in{
    color: black;
  }
</style>
