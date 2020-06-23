<template lang="pug">
    div
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(): IData{
        return {
            arr: ['AOA','TYPESCRIPT','ORI']
        }
    },
    computed: {
        member: {
            get(): string | undefined { return this.arr[0]},
            set(): void { console.log(this.member); }
        }
    },
    mounted(){
        let a :GenericIdentityFn<string> = this.loggingIdentity('fffff')
        console.log(a);

        let output = this.identity("myString")
        console.log(output);
    },
    methods: {
       loggingIdentity<T>(arg: T): T{
            let num = '12'
            console.log(typeof(num));
            let r = ['AOA','TYPESCRIPT','ORI']
            console.log(typeof(r));
            (r as string[]).push("233")
            // r.push(arg)
            console.log(r)
            console.log(arg);
            return arg
       },
       identity<T>(par: T): T {
           return par
       }
    }
}) 
interface GenericIdentityFn<T> {
    
}
interface IData {
    arr: string[]
}
</script>