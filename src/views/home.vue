<template lang="pug">
    el-container
        el-header
            headBox
        el-container.mainBox
            el-aside(:class="{'el-aside-width': !showornot}" width="200px")
                asideList
            i(class="el-icon-s-fold icon-color" @click="toggleAside") 
            el-main(:class="{'el-main-aside-padding': !showornot}")
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
            
            showornot: true
        }
    },
    methods: {
        toggleAside(){
            this.showornot=!this.showornot
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

        .el-aside-width
            transform: translate(-200px,0)
            transition: width .8s ease
            width: 200px


        .icon-color
            color: red
            position: absolute
            left: 184px
            top: 50%
        .icon-color:hover
            cursor: pointer


        
        .el-main
            overflow: visible
            padding-top: 60px
        .el-main-aside-padding
            // transform: translate(-200px,0)
            transition: padding-left .8s
            padding-left: 0px
</style>