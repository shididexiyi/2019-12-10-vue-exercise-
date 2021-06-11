<template lang="pug">
    el-container
        el-header
            headBox
        el-container.mainBox
            el-aside(width="200px")
                asideList
            el-main
                router-view
</template>

<script lang="ts">
import Vue from 'vue'
import headBox from '@/components/headBox.vue';
import asideList from '@/components/asideList.vue';
export default Vue.extend({
    async created(){
        // console.log('created')
        // setTimeout(() => {
        //     console.log('create Symbal');
        // }, 1000)
    },
    async mounted(){
        // console.log('mounted')
        //  setTimeout(function() {
        //          console.log('mount Symbal');
        //      },1000)
    },
    data(){
        return {
        }
    },
    components: {
        headBox,
        asideList
    }
})
</script>

<style lang="sass">
.el-container
    .el-header
        padding: 0
        position: fixed
        width: 100%
        z-index: 999
    .el-container
        height: 100%
        .el-aside
            padding-top: 60px
            position: fixed
            height: 100%
            .el-menu
                height: 100%
        .el-main
            overflow: visible
            padding-top: 60px
            padding-left: 200px
</style>