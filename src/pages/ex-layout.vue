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

    <ex-icon i="all" size="md"></ex-icon>
    <ex-icon i="auto" size="md"></ex-icon>


    <ex-icon i="all" size="lg"></ex-icon>
    <ex-icon i="auto" size="lg"></ex-icon>
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

    <ex-input size="sm" v-model="input_text"></ex-input>
    <ex-input size="md" v-model="input_text"></ex-input>
    <ex-input size="lg" v-model="input_text"></ex-input>
    <br>
    <ex-input size="sm" v-model="input_text" disabled></ex-input>
    <ex-input size="md" v-model="input_text" disabled></ex-input>
    <ex-input size="lg" v-model="input_text" disabled></ex-input>
    <br>
    <ex-input v-model="input_text" pre-icon="all" size="sm"></ex-input>
    <ex-input v-model="input_text" pre-icon="auto" size="md"></ex-input>
    <ex-input v-model="input_text" pre-icon="all" size="lg"></ex-input>
    <br>
    <ex-input v-model="input_text" suf-icon="all" size="sm"></ex-input>
    <ex-input v-model="input_text" suf-icon="auto" size="md"></ex-input>
    <ex-input v-model="input_text" suf-icon="all" size="lg"></ex-input>
    <br>
    <ex-input v-model="input_text" pre="all" size="sm"></ex-input>
    <ex-input v-model="input_text" pre="auto" size="md"></ex-input>
    <ex-input v-model="input_text" pre="all" size="lg"></ex-input>
    <br>
    <ex-input v-model="input_text" suf="all" size="sm"></ex-input>
    <ex-input v-model="input_text" suf="auto" size="md"></ex-input>
    <ex-input v-model="input_text" suf="all" size="lg"></ex-input>
<!--    <ex-hr type="default"></ex-hr>-->
<!--    <ex-hr type="primary"></ex-hr>-->
<!--    <ex-hr type="error"></ex-hr>-->
<!--    <ex-hr type="info"></ex-hr>-->

    <ex-fake-radio ></ex-fake-radio>
    <ex-fake-radio checked></ex-fake-radio>
    <ex-fake-radio type="primary"></ex-fake-radio>
    <ex-fake-radio type="primary" checked></ex-fake-radio>
    <ex-fake-radio type="error"></ex-fake-radio>
    <ex-fake-radio type="error" checked></ex-fake-radio>
    <ex-fake-radio type="info"></ex-fake-radio>
    <ex-fake-radio type="info" checked :changeable="false"></ex-fake-radio>
<!--    被changeable=false的是不能变换的-->
    <br>
    <ex-slider type="default"></ex-slider>
<!--    <ex-slider type="error"></ex-slider>-->
<!--    <ex-slider type="primary"></ex-slider>-->
<!--    <ex-slider type="info"></ex-slider>-->
    <ex-button type="default" size="lg">右边三种drag</ex-button>
    <ex-button-drag test>drag-button</ex-button-drag><br>
    <ex-button-drag :baseX="900" :baseY="200">drag-button</ex-button-drag><br>
    <ex-button-drag :baseX="900" :baseY="250" y-move-disabled>drag-button</ex-button-drag><br>
    <ex-button-drag :baseX="800" :baseY="200" x-move-disabled>drag-button</ex-button-drag><br>

<!--    <ex-div-drag :baseX="700" :baseY="0" test @mouseover="over" @mouseout="out">info</ex-div-drag>-->
<!--    <ex-div-drag test>test-div</ex-div-drag>-->
<!--    <ex-fake-radio-drag></ex-fake-radio-drag>-->
    <br>
  </div>

</template>
<script>
    export default {
        methods:{
            over(){
                console.log('h1')
            },
            out(){
                console.log('h2')
            }
        },
        data(){
            return{
                input_text:'',

                c:false,
                city:"beijing"
            }
        },
        components:{
            'ex-button':exButton,
            'ex-button-circle':exCircleButton,
            'ex-icon':exIcon,
            'ex-link':exLink,
            'ex-radio':exRadio,
            'ex-input':exInput,
            'ex-hr':exHr,
            'ex-fake-radio':exFakeRadio,
            'ex-slider':exSlider,
            exButtonDrag,exFakeRadioDrag,exDivDrag
        }
    }
    import exButton from '@/components/ex-button'
    import exCircleButton from '@/components/ex-button-circle'
    import exIcon from '@/components/ex-icon'
    import exLink from '@/components/ex-link'
    import exRadio from '@/components/ex-radio'
    import exHr from '@/components/ex-hr'
    import exInput from '@/components/ex-input'
    import exFakeRadio from '@/components/ex-fake-radio'
    import exSlider from '@/components/ex-slider'
  import exButtonDrag from '@/components/ex-button-drag'
  import exFakeRadioDrag from '@/components/ex-fake-radio-drag'
  import exDivDrag from '@/components/ex-div-drag'
</script>
<style scoped>
</style>
