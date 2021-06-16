<template lang="pug">
    el-menu(
        :default-active="defaultActive"
        :default-openeds.sync="defaultOpen"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        unique-opened=true
        router=true
    ) 
        el-submenu(index="1")
            template(slot="title") A
            el-menu-item(index="/home/AAA") A1-1
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
            defaultActive: '/AAA',
            defaultOpen: [],
        }
    },
    methods: {
        handleOpen(key:String, keyPath:String){
            console.log(key, keyPath);
        },
        handleClose(key:String, keyPath:String){
            console.log(key, keyPath);
        },
    }
})
</script>

<style lang="sass" scoped>
    
</style>