<template lang="pug">
    .app-container
        .login__container
            el-card
                .clearfix(slot="header")
                    el-tabs(v-model="active")
                        el-tab-pane(label="deng" name="login")
                        el-tab-pane(label="zhu" name="register")
                .loginBody
                    el-form(ref="form" :model="info")
                        el-form-item(label="用户名" prop="user")
                            el-input(v-model="info.user")
                        el-form-item(label="密码" prop="password")
                            el-input(v-model="info.password")
                        el-form-item
                            el-button(v-if="active == 'login'" @click="onSubmit") 登录
                            el-button(v-else @click="onRegister") register
                .registerBody
                    |zhu
</template>

<script lang="ts">
import Vue from 'vue'
import request from '../action/utils'
export default Vue.extend({
    data():IData {
        return {
            active: 'login',
            info: {
                user: '',
                password: ''
            }
        }
    },
    methods: {
        onSubmit(){
            request.query('http://localhost:8080/api/login','get',{username: 'ypc1231',password: '123456'})
        },
        onRegister(){

        }
    }
})

interface IData {
    active: string,
    info: Object
}
</script>
<style lang="sass" scoped>
    .app-container
        width: 100%
        height: 100%
    .login__container
        width: 550px
        margin: 0 auto
        position: relative
        top: 50%
        transform: translateY(-50%)
</style>