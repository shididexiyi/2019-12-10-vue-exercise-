<template lang="pug">
    el-tabs(v-model="activeTabIndex" @tab-click="clickFunc")
        el-tab-pane(
            v-for="item in tabList" 
            :key="item.name" 
            :label="item.title" 
            :name="item.name"
        ) 
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Tab',
    data() {
        return {
            activeTabIndex: ''
        }
    },
    props: {
        tabList: {
            type: Array,
            default: () => {
                return []
            }
        },
    },
    methods: {
        clickFunc(){
            this.$emit('clickHandler',this.activeTabIndex)
        }
    },
}) 
</script>