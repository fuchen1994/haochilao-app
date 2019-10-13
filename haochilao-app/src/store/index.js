import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

import user from './modules/user'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rootRemToPx: 0,  // 当前根节点字体大小px
    peopleCount: sessionStorage.getItem('peopleCount') ? Number(sessionStorage.getItem('peopleCount')) : 0  // 当前用餐人数
  },
  mutations: {
    setRootRemToPx (state, value) {
      state.rootRemToPx = value;
    },
    setPeopleCount(state, value) {
      state.peopleCount = value;
      sessionStorage.setItem('peopleCount', value);
    }
  },
  actions: {},
  getters,
  modules: {
    user,
    home
  }
})
