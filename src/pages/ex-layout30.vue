<template>
<div>
  <ex-input v-model="xx"/> {{xx}}
  <el-menu default-active="2" mode="horizontal">
    <el-menu-item index="2">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
  </el-menu>
</div>
</template>
<script>
    export default {
        data() {
            return {
                xx:'ss',
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components:{
          exInput
        }
    }
    import exInput from '@/components/ex-input'
</script>
