<template lang="pug">
    div.theflex
        div.flexitem {{ symbol }}
            .sonitems
            .sonitems
        div.flexitem  '=>'
        div.flexitem {{ mapping }}
        //- button(@click="typeForObject") huhu
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            symbol: 1,
            mapping: 'cg'
        }
    },
    mounted(){
        // this.symbolTransform(this.symbol)
        // this.typeForAny()
        this.typeForBoolean()
        console.log(this);
    },
    beforeUpdate(){
        console.log(this.mapping);
    },
    updated(){
        console.log(this);
    },
    methods: {
        symbolTransform(index: number){
            enum Color {Red = 1,Green, Blue}//枚举类型提供的一个便利是 你可以由枚举的值得到它的名字 1=>Red
            let colorName: string = Color[index]
            console.log(colorName);
            this.mapping = colorName
        },
        typeForAny(){
            let array: any[] = [1,true,'mole']
            array[1]=100
            console.log(array);
        },
        typeForBoolean(){
            let flag: boolean = true
            if(flag) {
                console.log('it is true');
            }
        },
        typeForObject() {
            this.mapping = 'gugudan'
        }
    }
}) 
</script>

<style lang="sass" scoped>
.theflex
    display: flex
    height: 100%
    // flex-direction: row-reverse
    flex: 1
    justify-content: space-between
    .flexitem
        width: 30%
        background-color: #ddd
        &:hover
            color: red
        .sonitems
            height: 300px
            margin: 10px 10px
            border: 1px solid red
</style>