import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import AAA from '../components/a.vue'
import BBB from '../components/b.vue'
import CCC from '../components/c.vue'
import DDD from '../components/d.vue'
import EEE from '../components/this.vue'
import FFF from '../components/identify.vue'
import GGG from '../components/enum.vue'
import App from '../App.vue'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'App',
            component: App,
            children: [
                {
                    path: '/AAA',
                    name: 'AAA',
                    component: AAA,
                },
                {
                    path: '/BBB',
                    name: 'BBB',
                    component: BBB,
                },
                {
                    path: '/CCC',
                    name: 'CCC',
                    component: CCC,
                },
                {
                    path: '/DDD',
                    name: 'DDD',
                    component: DDD,
                },
                {
                    path: '/EEE',
                    name: 'EEE',
                    component: EEE,
                },
                {
                    path: '/FFF',
                    name: 'FFF',
                    component: FFF,
                },
                {
                    path: '/GGG',
                    name: 'GGG',
                    component: GGG
                }
            ]
        }
    ]
})

