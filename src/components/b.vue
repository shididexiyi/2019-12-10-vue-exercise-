<template lang="pug">
    div
        h1 接口
</template>
<script lang="ts">
import moment from 'moment'
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {

        }
    },
    mounted(){
        // let conf = {pi: 3.14}
        // let a = this.getArea(conf)
        // console.log(a);

        // let measure = this.create({line: 6})
        // console.log(measure);

        // let searchBol = this.activeFuc('book','k')
        // console.log(searchBol);

        // this.classForInterface()
        // this.checked('Bob')
        this.defaultParams('Box')
    },
    methods: {
        getArea(config: circle): {area: number} {
            let result = { area: 10 }
            if(config.r) {
                result.area = config.r
                return result
            }
            if(config.pi) {
                result.area = config.pi
                return result
            }
            return result
        },
        propertyReadOnly(a: number, b: number) : readonlyPro {
            let mid: readonlyPro = { x: a, y: b }
            console.log(mid);
            return mid
        },
        create(config: SquareConfig): {color: string; area: number} {//options bag 对参数接口之外的参数做兼容，或者使用类型断言
            if(config.line) {
                let mywidth = config.width || 0
                let mycolor = config.color || 'green'
                return { color: mycolor, area: mywidth}
            }else {
                return {color: 'red', area: 6}
            }   
        },
        activeFuc(a: string, b:string){
            let myFunc: defineFunc
            myFunc = function(src: string, orc: string): boolean {//对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配
                let result = src.search(orc)
                return result > -1
            }
            return myFunc(a,b)
        },

        checked(name: string,age?: string){//可选参数age,不传入实参age=undefined
            console.log(name);
            console.log(age);
        },
        // checked(age?: string,name: string){//可选参数不能放在必要参数前面
        //     console.log(name);
        //     console.log(age);
        // },


        defaultParams(name: string,age=12){//默认值参数，当age形参捕获到的实参为undefined时,赋值12给age。当默认值参数在必要参数前面时，要想获取默认值则需在实参部分明确赋值为undefined
            console.log(name);
            console.log(age);
        },

        
        classForInterface(){
            let devil = createClock(Devil,12,17)
            console.log(devil);
            devil.tick()
        }
    }
}) 
interface circle {//可选属性，预定义
    pi?: number,
    r?: number
}

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any
}

interface readonlyPro {
    readonly x: number;
    readonly y: number;
}

interface defineFunc {//定义函数类型
    (source: string, subString: string): boolean
    //       =^=                          =^=
    // 定义函数的参数类型（输入）     定义函数返回类型（输出）
}

interface StringArray {//可索引的类型
    [index: number]: string
}



interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface
}

interface ClockInterface {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number,minute: number): ClockInterface {
    return new ctor(hour, minute)
}

class Devil implements ClockInterface {
    constructor(h: number,m: number) { }
    tick() {
        console.log("tick tock");
    }
}
</script>