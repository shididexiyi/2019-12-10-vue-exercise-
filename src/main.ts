import Vue from 'vue'
import './font/font.less'
import ElementUI from 'element-ui'
import router from './router/index'
import 'element-ui/lib/theme-chalk/index.css'
// import App from '@/App'
Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
  render: h => h('router-view'),
  router
}).$mount('#app')
