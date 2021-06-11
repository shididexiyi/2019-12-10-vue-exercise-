import Vue from 'vue'
import VueRouter, { Route,RawLocation } from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

import App from '../App.vue'
import SM from './sm'
import home from '@/views/home.vue'
import loginComponent from '@/views/loginComponent.vue'
import NotFound from '@/views/NotFound.vue'
import 'element-ui/lib/theme-chalk/index.css';
import { ErrorHandler } from 'vue-router/types/router'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location : RawLocation ) {
  return ( originalPush.call(this, location) as any  ).catch( ( err : ErrorHandler) => err)
}
const routes = SM

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'App',
            component: App,
            redirect: {name: 'LoginPage'},
            children: [
                {
                    path: 'home',
                    name: 'Home',
                    component: home,
                    children: routes
                },
                {
                    path: 'login',
                    name: 'LoginPage',
                    component: loginComponent,
                }
            ]
        },
        {
            path: '/404',
            name: 'NotFound',
            component: NotFound,
        },
        {
            path: '*',
            redirect: {
                name: 'NotFound'
            }
        }
    ]
})





router.beforeEach((to,from,next) => {
    // console.log(to);
    // console.log(from);
    next()
})

export default router