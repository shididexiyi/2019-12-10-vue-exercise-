<template lang="pug">
//- common(:btnSize="size" :propslist="myList")
//-     template(v-slot:success)
//-         p {{ btnTextSuccess }}
//-     template(v-slot:fail)
//-         p {{ btnTextFail }}
//-     template(v-slot:list="user")
//-         div
//-             ul
//-                 li(v-for="item in user.team" :key="item") {{ item }}
.sm__container
    .sm__top
        Tab(:tabList="smTabList", @clickHandler="routerpush")
    .sm__main
        router-view
</template>

<script lang="ts">
// import Vue from 'vue'
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";
import common from "@/components/common/common.vue";
import Tab from "@/components/common/tab.vue";
@Component({
    components: {
        common,
        Tab,
    },
})
export default class Home extends Vue {
    smTabList = [
        {
            title: "2015",
            name: "updown",
        },
        // {
        //     title: "2016",
        //     name: "ahyear",
        // },
        // {
        //     title: "2017",
        //     name: "hotpink",
        // },
    ];
    btnTextSuccess = "EXID";
    btnTextFail = "AOA";
    size = "medium";
    myList = ["1", "2", "3"];
    nameInfo = null;

    private mounted(): void {
        let v = {
            greeting: "objs",
        };
    }

    public routerpush(toPath: string): void {
        this['$router'].push({
            name: toPath,
        })
    }
}
interface IData {
    smTabList: Array<Object>;
    btnTextSuccess: String;
    btnTextFail: String;
    size: String;
    myList: Array<String>;
    nameInfo: toRouter | null;
}

interface toRouter {
    name: string;
    query?: Object;
    params?: Object;
}


</script>

<style lang="sass" scoped>
</style>