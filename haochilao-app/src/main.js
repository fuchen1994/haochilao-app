import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$axios = axios;  //Vue实例对象继承原型的axios方法

import vant from 'vant'
import 'vant/lib/index.css'
Vue.use(vant)

import FastClick from 'fastclick'
FastClick.attach(document.body)
document.body.addEventListener('touchstart', function () {})

import './assets/fontIcon/iconfont.js'
import './assets/fontIcon/iconfont.css'

import loadmore from './utils/loadMore'
Vue.directive('loadmore', loadmore)

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
