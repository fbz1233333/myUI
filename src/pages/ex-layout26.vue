<template>
  <div>
    layout26
    <router-link to="/i2/i3" tag="el-button">按钮</router-link>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item,index) in iii" :key="index" :to="item.path">
        {{item.text}}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <router-view></router-view>

  </div>
</template>
<script>
    export default {
        computed:{
            iii(){
                return this.$store.getters.getBreadCrumb
            }
        },
        watch:{
          '$route'(val,oldval){
              let matched=val.matched

              let breadcrumb=[]

              for(let i=0;i<matched.length;i++){
                  let obj={
                      text:matched[i].meta.breadcrumb,
                      path:matched[i].path
                  }
                  breadcrumb.push(obj)
              }
              this.$store.commit('setBreadCrumb',breadcrumb)
          }
        },
        mounted(){
            let matched=this.$route.matched

            let breadcrumb=[]

            for(let i=0;i<matched.length;i++){
                let obj={
                    text:matched[i].meta.breadcrumb,
                    path:matched[i].path
                }
                breadcrumb.push(obj)
            }
            this.$store.commit('setBreadCrumb',breadcrumb)
        }
    }
</script>
<style scoped>
</style>
