export default {
  state: {
    userName: sessionStorage.getItem('userName') ? sessionStorage.getItem('userName') : ''
  },
  mutations: {
    setUserInfo (state, userName) {
      if (userName !== undefined) {
        state.userName = userName
        sessionStorage.setItem('userName', userName)
      }
    }
  },
  actions: {}
}