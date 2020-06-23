<template lang="pug">
    el-menu(
        default-active="2"
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
            el-menu-item(index="AAA") A1-1
        el-submenu(index="2")
            template(slot="title") B
            el-menu-item(index="BBB") B1-1
        el-submenu(index="3")
            template(slot="title") C
            el-menu-item(index="CCC") C1-1
        el-submenu(index="4")
            template(slot="title") D
            el-menu-item(index="DDD") D1-1
        el-submenu(index="5")
            template(slot="title") E
            el-menu-item(index="EEE") E1-1
        el-submenu(index="6")
            template(slot="title") F
            el-menu-item(index="FFF") F1-1
        el-submenu(index="7")
            template(slot="title") G
            el-menu-item(index="GGG") G1-1

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {

        }
    },
    methods: {
        handleOpen(key:String, keyPath:String){
            console.log(key, keyPath);
        },
        handleClose(key:String, keyPath:String){
            console.log(key, keyPath);
        }
    }
})
</script>

<style lang="sass" scoped>

</style>