<template>
<button :class="'ex-link ex-link-'+type" @click="handleHref(href)">
  <slot></slot>
</button>
</template>
<script>
export default {
    methods:{
        handleHref(href){
            window.location.href=href
            // console.log(href)
            // this.$router.push({path:href})
        }


    },
    props: {
        type: {
            type: String,
            default: 'default'
        },
        href: {
            type: String,
            default: '#'
        }
    }
}
</script>
<style scoped lang="less">

</style>
