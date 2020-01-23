<template>
  <div :class="['ex-card','ex-card-'+theme]">
    <div class="ex-card-title">
      <slot name="title">

      </slot>
    </div>
    <hr class="ex-card-hr">
    <div class="ex-card-content">
      <slot name="content">

      </slot>
    </div>
  </div>

</template>
<script>
export default {

    props:{
        theme:{
            type:String,
            default:'light'
        }
    }
}
</script>
<style scoped>
  .ex-card{
    font-weight: 100;
    word-spacing: 1px;
    letter-spacing: 1px;
    margin: 5px;
    border: black 1px solid;
    padding: 15px;
    border-radius: 10px;
    display: inline-block;
  }

  .ex-card-light{
    color: black;
    background-color: white;
  }

  .ex-card-dark {
    color: white;
    background-color: black;
  }

  .ex-card-title{

    font-size: 15px;
  }
  .ex-card-content{
    min-height: 200px;

  }
</style>
