<template lang="pug">
    .axy__container
        el-input(v-model="input")
        el-button(@click="mapTypeTest") mapTypeTest
        el-button(@click="axiosMock") axiosMock
</template>

<script lang="ts">
import Vue from 'vue'
import request from '../../../../action/utils'
export default Vue.extend({
    name: 'axy',
    data() {
        return {
            input: ""
        }
    },
    mounted(){
    },
    methods: {
        axiosMock(){
            request.query('http://localhost:8080/api/info','get')
        },
        mapTypeTest(){
            request.query('http://localhost:8080/api/exid','get',{name: 'axy'})
            let map = new Map()
            map.set(11,3)
                .set('axy',25)
                .set('axz',34)
            // let entries = map.entries()
            // for (const key in entries) {
            //     console.log(key);
            // }
            let inp = { 'xsz': 23 }
            map.forEach((key,val) => {
                console.log(key,val);
                console.log(this);
            },inp)
        }
    },
    // beforeCreate(){
    //         console.log('axy beforeCreate');
    // },
    // created(){
    //     console.log('axy created');
    // },
    // beforeMount(){
    //     console.log('axy beforeMount');
    // },
    // mounted(){
    //     console.log('axy mounted');
    // },
    // beforeDestroy(){
    //     console.log('axy beforeDestroy');
    // },
    // destroyed(){
    //     console.log('axy destroyed');
    // },

    // beforeUpdate(){
    //     console.log('axy beforeUpdate');
    // },
    // updated(){
    //     console.log('axy updated');
    // },
    // activated(){
    //     console.log('this is activated hook');
    // },
    // deactivated(){
    //     console.log('this is deactivated hook');
    // }
})
</script>