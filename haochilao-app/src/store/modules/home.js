export default {
  state: {
    pageScrollY: 0, // 记录离开当前页面滚动条的位置
    leftActiveLabel: ''
  },
  mutations: {
    setPageScrollY(state, pageScrollY) {
      state.pageScrollY = pageScrollY;
    },
    setLeftActiveLabel(state, value) {
      state.leftActiveLabel = value;
    }
  },
  actions: {}
}