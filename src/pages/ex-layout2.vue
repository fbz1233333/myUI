<template>
  <div>
    <ex-div-fade :show="div_show">
      <div style="background: black;width: 200px;color: white;padding: 10px;border-radius: 20px">
        this is how to change the property 'show' of the 'div_fade' can present as a fading in or fading out styles
      </div>
    </ex-div-fade>
    <ex-button @click="handleChange" type="primary">change1</ex-button>

    <!--    <ex-div-drag :baseX="700" :baseY="0" test @mouseover="over" @mouseout="out">info</ex-div-drag>-->
    <!--    <ex-div-drag test>test-div</ex-div-drag>-->
    <!--    <ex-fake-radio-drag></ex-fake-radio-drag>-->
    <ex-div-wider :show="div_show2" :width="20">
      <!--    百分比表示宽度-->
      <div style="background: black;width: 100%;color: white;padding: 10px;border-radius: 20px">
        this is how to change the property 'show' of the 'div_fade' can present as a fading in or fading out styles
      </div>
    </ex-div-wider>

    <ex-button @click="handleChange2" type="primary">change2</ex-button>
    <!--  绝对值表示高度-->

    <ex-div-higher :show="div_show3" :height="200">
      <div style="background: black;height:100%;width:200px;color: white;padding: 10px;border-radius: 20px">
        this is how to change the property 'show' of the 'div_fade' can present as a higher or less higher styles
      </div>
    </ex-div-higher>


    <br>


    <ex-button @click="handleChange3" type="primary">change3</ex-button>
    <br>

<!--    <ex-button type="info" v-show="if_show" v-if="if_if">{{info}}</ex-button>-->
<!--    <label>button_info</label><ex-input v-model="info"></ex-input>-->
<!--    <ex-button type="error" @click="change_if">change_if</ex-button>-->
<!--    <ex-button type="primary" @click="change_show">change_show</ex-button>-->

    <br>
    <ex-button  v-show="if_show" v-if="if_if" type="primary" style="background-color: black;padding: 10px" v-fade>
      black
    </ex-button>
    <ex-button type="info" @click="change_if">change_if</ex-button>
    <ex-button type="primary" @click="change_show">change_show</ex-button>
    <!--  <ex-mark-1></ex-mark-1>-->

  </div>
</template>
<script>
    export default {
        methods:{
            change_if(){
              this.if_if=!this.if_if
            },
            change_show(){
              this.if_show=!this.if_show
            },
            handleChange(){
                // console.log(this.div_show)
                this.div_show=!this.div_show
            },
            handleChange2(){
                this.div_show2=!this.div_show2
            },
            handleChange3(){
                this.div_show3=!this.div_show3
            },
        },
        components:{
            exTable,
            exDivFade,
            exDivWider,
            exDivHigher,
            exButton,
            exInput
        },
        data(){
            return{
                if_if:true,
                if_show:true,
                info:'info',
                div_show:true,
                div_show2:true,
                div_show3:true,
                tableData:[
                    {
                        id:1,
                        name:'fnz',
                        pass:'123456'
                    },
                    {
                        id: 2,
                        name:'fbz',
                        pass:'456789'
                    }
                ],
                columns:[
                    {
                        title:'ID',
                        column:'id'
                    },
                    {
                        title: '用户名',
                        column:'name'
                    }
                ],
            }
        }
    }
    import exDivFade from '@/components/ex-div-fade'
    import exDivWider from '@/components/ex-div-wider'
    import exDivHigher from '@/components/ex-div-higher'
    import exButton from '@/components/ex-button'

    import exTable from '@/components/ex-table'
    import exInput from '@/components/ex-input'

</script>
<style scoped>
</style>
