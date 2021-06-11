import Vue from 'vue'
import './font/font.less'
import ElementUI from 'element-ui'
import router from './router/index'
import query from './action/utils'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/element-ui/index.css'
// import App from '@/App'
Vue.config.productionTip = false
Vue.use(ElementUI)
// Object.defineProperty(Vue.prototype, 'query', {value: query});
new Vue({
  render: h => h('router-view'),
  router,
}).$mount('#app')
