<template lang="pug">
    div(id="app")
        router-view
        //- el-container
        //-     el-header
        //-         headBox
        //-     el-container.mainBox
        //-         el-aside(width="200px")
        //-             asideList
        //-         el-main
        //-             router-view
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import headBox from './components/headBox.vue';
import asideList from './components/asideList.vue';
@Component({
  components: {
    headBox,
    asideList
  },
})
export default class App extends Vue {
}
</script>

<style lang="sass">
html ,body
    margin: 0 auto
    height: 100%
    #app 
        font-family: 'PS'
        -webkit-font-smoothing: antialiased
        -moz-osx-font-smoothing: grayscale
        text-align: center
        height: 100%
        .el-header
            padding: 0
            position: fixed
            width: 100%
            z-index: 999
        .el-container
            height: 100%
            .el-aside
                padding-top: 60px
                position: fixed
                height: 100%
                .el-menu
                    height: 100%
            .el-main
                overflow: visible
                padding-top: 60px
                padding-left: 200px


</style>
