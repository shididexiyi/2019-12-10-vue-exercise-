<template lang="pug">
    div
        |DDD
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {

        }
    },
    mounted(){
        // this.catchSnake()
        // this.catchHorse()
        this.getReadOnly()
    },
    methods: {
        catchSnake(){
            let snake = new Snake('pop')
            console.log(snake.name);
            snake.move()
        },
        catchHorse(){
            let horse = new Horse('hop')
            console.log(horse.name);
            horse.move(99)
        },
        getReadOnly(){
            let a = new Octopus('77')
            console.log(a);
        }
    }
})

class Animal {//声明类型Animal
    name: string;
    constructor(theName: string) { this.name = theName }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name) }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters)
    }
}

class Horse extends Animal {
    constructor(name: string) {super(name)}
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters)
    }
}

class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
    }
}
</script>