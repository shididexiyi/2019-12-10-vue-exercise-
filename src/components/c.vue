<template lang="pug">
    div
        el-button(@click="contarctor") 构造
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {

        }
    },
    methods: {
        contarctor(){
            let example = new theMiss('i see you')
            console.log(example);
            example.mySong()
            alert(example.hisSong)
        },
    }
}) 

interface missA {
    mySong(): void
}

class theMiss implements missA {
    hisSong: string;
    constructor(msg:string){
        this.hisSong = msg
    }
    mySong(){
        console.log("after school "+this.hisSong);
    }
}
</script>