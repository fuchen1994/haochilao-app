export default {
  state: {
    pageScrollY: 0  // 记录离开当前页面滚动条的位置
  },
  mutations: {
    setPageScrollY(state, pageScrollY) { 
      state.pageScrollY = pageScrollY
    }
  },
  actions: {}
}