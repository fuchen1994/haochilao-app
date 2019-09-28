import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import user from './modules/user'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rootRemToPx: 0  // 当前根节点字体大小px
  },
  mutations: {
    setRootRemToPx (state, value) {
      state.rootRemToPx = value
    }
  },
  actions: {},
  getters,
  modules: {
    user,
    home
  }
})
