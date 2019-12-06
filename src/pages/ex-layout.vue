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

    <ex-icon i="all"></ex-icon>
    <ex-icon i="auto"></ex-icon>

    <br>

    <ex-link>default链接</ex-link>
    <ex-link type="info" href="http://www.baidu.com">info链接</ex-link>
    <ex-link type="error">error链接</ex-link>
    <ex-link type="primary">primary链接</ex-link>
    <br>

    <ex-link disabled>default链接</ex-link>
    <ex-link type="info" disabled>info链接</ex-link>
    <ex-link type="error" disabled>error链接</ex-link>
    <ex-link type="primary" disabled>primary链接</ex-link>

<!--    实际上用的还是button-->
    <br>
    <ex-radio value="label1">label1</ex-radio>
    <ex-radio value="label2">label2</ex-radio>


    <br>
    <ex-hr type="default"></ex-hr>
    <ex-hr type="primary"></ex-hr>
    <ex-hr type="error"></ex-hr>
    <ex-hr type="info"></ex-hr>
  </div>

</template>
<script>
  export default {
      components:{
          'ex-button':exButton,
          'ex-button-circle':exCircleButton,
          'ex-icon':exIcon,
          'ex-link':exLink,
          'ex-radio':exRadio,
          'ex-hr':exHr
      }
  }
  import exButton from '@/components/ex-button'
  import exCircleButton from '@/components/ex-button-circle'
  import exIcon from '@/components/ex-icon'
  import exLink from '@/components/ex-link'
  import exRadio from '@/components/ex-radio'
  import exHr from '@/components/ex-hr'
</script>
<style scoped>
</style>
