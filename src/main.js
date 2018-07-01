import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router/RouterConfig'

import store from 'store/store'

import '@/common/global.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件
  store,
  router,
  render: h => h(App)
})
