<template lang="pug">
    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {

        }
    },
    mounted(){
        this.respond('Box',Response.Yes)
    },
    methods: {
        respond(recipient: string, message: Response): void{
            console.log(recipient);
            console.log(message);
        }
    }
})

enum FileAccess {
    // constant members
    None,
    Read   = 1 << 1,
    
}

enum Direction {
    Up,
    Down,
    Left,
    Right
}

enum Response {
    No,
    Yes = No+1,
}
</script>