<template lang="pug">
    .updown__container
        el-button-group
            el-button(v-for="(item,index) in member" :key="index" @click="chooseMember(item)") {{ item }}
        keep-alive
            //- component(:is="choose") 
            router-view 
</template>

<script lang="ts">
import Vue from 'vue'
import axy from './axy.vue'
export default Vue.extend({
    data(): IData {
        return {
            member: ['axy', 'axz'],
            choose: null,
            
        }
    },
    methods: {
        chooseMember(m:string){
            console.log(m);
            this.$router.push({
                name: m
            })
        }
    },
    components: {
        axy,
    }
})
interface IData {
    member: Array<String>,
    choose: RouterObject | null
}
interface RouterObject {
    name: String,
    params?: Object,
    query?: Object
}
</script>