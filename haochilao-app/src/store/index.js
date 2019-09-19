import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    homePageScrollY: 0  // 记录离开当前页面滚动条的位置
  },
  mutations: {
    setHomePageScrollY(state, homePageScrollY) { 
      state.homePageScrollY = homePageScrollY
    }
  },
  actions: {},
  getters,
  modules: {
    user
  }
})
