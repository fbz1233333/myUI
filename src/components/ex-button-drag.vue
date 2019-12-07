<template>
  <div class="div-row">
    {{x}}{{y}}
    <ex-button :style="{position:'absolute',left: x+'px',top:y+'px'}">drag</ex-button>
  </div>
</template>
<script>
export default {
    data(){
      return{
          clicked:false,
          x:1500,
          y:0
      }
    },
  components:{
      exButton
  },
    mounted(){
        document.onmousedown=(e)=>{
            this.clicked=true
        }
      document.onmousemove=(e)=>{
          // console.log(e.clientX)
          // console.log(e.clientY)
          if (this.clicked){
              this.x=e.clientX-40;
              this.y=e.clientY-20
          }
      }
      document.onmouseup=(e)=>{
            this.clicked=false
      }
    },
}
import exButton from '@/components/ex-button'
</script>
<style scoped>
</style>
