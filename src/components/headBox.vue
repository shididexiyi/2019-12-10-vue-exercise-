<template lang="pug">
    .header-box
        .header-title-group
            i(class="el-icon-eleme")
            |Element-Ui
            el-link(href="/" type="info") 控制台主页
        .header-object-group
            el-menu(
                :default-active="activeIndex" 
                class="el-menu-demo" 
                mode="horizontal"
                background-color="#000000"
                text-color="#F7F7F7"
                active-text-color="#ffd04b"
            )
                el-submenu(index="1") 
                    template(slot="title") 处理中心
                    el-menu-item(index="1-1") 选项1
                    el-menu-item(index="1-2") 选项2
                    el-menu-item(index="1-3") 选项3
                el-menu-item(index="2") Demo仓库
                el-menu-item(index="3") 用户管理
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data(){
        return {
            activeIndex: "2"
        }
    }
})
</script>

<style lang="sass" scoped>
    .header-box
        background-color: #000000
        height: 100%
        display: flex
        justify-content: space-between
        .header-title-group
            line-height: 40px
            font-size: 24px
            color: #fff
            margin: 10px 0
            .el-link
                margin-left: 5px
                color: #ccc
        .header-object-group
            // line-height: 40px
            // margin: 10px 0
</style>