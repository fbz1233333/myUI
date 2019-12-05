<template>
  <div>
    <ex-button  type="default">default</ex-button>
    <ex-button  type="primary">primary</ex-button>
    <ex-button  type="error">error</ex-button>
    <ex-button  type="info">info</ex-button>
    <ex-button  type="default" disabled>default</ex-button>
    <ex-button  type="primary" disabled>primary</ex-button>
    <ex-button  type="error" disabled>error</ex-button>
    <ex-button  type="info" disabled>info</ex-button>
    <br>
    <ex-button  type="default" size="md">default</ex-button>
    <ex-button  type="primary" size="md">primary</ex-button>
    <ex-button  type="error" size="md">error</ex-button>
    <ex-button  type="info" size="md">info</ex-button>

    <ex-button  type="default" size="md" disabled>default</ex-button>
    <ex-button  type="primary" size="md" disabled>primary</ex-button>
    <ex-button  type="error" size="md" disabled>error</ex-button>
    <ex-button  type="info" size="md" disabled>info</ex-button>

    <br>
    <ex-button  type="default" size="lg">default</ex-button>
    <ex-button  type="primary" size="lg">primary</ex-button>
    <ex-button  type="error" size="lg">error</ex-button>
    <ex-button  type="info" size="lg">info</ex-button><br>
    <ex-button  type="default" size="lg" disabled>default</ex-button>
    <ex-button  type="primary" size="lg" disabled>primary</ex-button>
    <ex-button  type="error" size="lg" disabled>error</ex-button>
    <ex-button  type="info" size="lg" disabled>info</ex-button>

    <br>
    <ex-button-circle type="info">20</ex-button-circle>
    <ex-button-circle type="default" >99</ex-button-circle>
    <ex-button-circle type="primary" >15</ex-button-circle>
    <ex-button-circle type="error">10</ex-button-circle>

    <br>
<!--    暂时没有思路-->
  </div>

</template>
<script>
  export default {
      components:{
          'ex-button':exButton,
          'ex-button-circle':exCircleButton
      }
  }
  import exButton from '@/components/ex-button'
  import exCircleButton from '@/components/ex-button-circle'

</script>
<style scoped>
</style>
