<template lang="pug">
    .buttonGroup
        el-button(:size="btnSize")
            slot(name="success")
        el-button(:size="btnSize")
            slot(name="fail") 
        slot(name="list" :team="propslist")
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {

        }
    },
    props: {
        btnSize: {
            type: String,
            default:() => {
                return 'medium'
            }
        },
        propslist: {
            type: Array,
            default:() => {
                return []
            }
        }
    },
    mounted(){

    }
})
</script>