import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// console.log(process.env)
const _import = require('./_import_' + process.env.NODE_ENV)

// 登录页
const Login = _import('login/index')
// 主页
const Home = _import('home/index')
// 菜品详情页
const dishDetail = _import('dishDetail/index')
// 404页
const NotFound = _import('notFound/index')

Vue.use(Router)

const scrollBehavior = function (to, from, savedPosition) {
  if (savedPosition) {
    // savedPosition is only available for popstate navigations.
    return savedPosition
  } else {
    // const position = {}

    console.log('路由中的 to', to)

    if (to.path == '/home') {
      console.log('路由中的store.state.homePageScrollY', store.state.homePageScrollY)

      return position.selector = '.page_content'

      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve({ x: 0, y: store.state.homePageScrollY })
      //   }, 500)
      // })
    }

      // return new Promise(resolve => {
       
      //   position.x = 0
      //   position.y = store.state.homePageScrollY
      // }

    // scroll to anchor by returning the selector
    // if (to.hash) {
    //   position.selector = to.hash

    //   // specify offset of the element
    //   if (to.hash === '#anchor2') {
    //     position.offset = { y: 100 }
    //   }

    //   // bypass #1number check
    //   if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
    //     return position
    //   }

    //   // if the returned position is falsy or an empty object,
    //   // will retain current scroll position.
    //   return false
    // }

    // return new Promise(resolve => {
    //   // check if any matched route config has meta that requires scrolling to top
    //   if (to.matched.some(m => m.meta.scrollToTop)) {
    //     // coords will be used if no selector is provided,
    //     // or if the selector didn't match any element.
    //     position.x = 0
    //     position.y = 0
    //   } else {
    //     position.y = store.state.homePageScrollY
    //   }

    //   // wait for the out transition to complete (if necessary)
    //   this.app.$root.$once('triggerScroll', () => {
    //     // if the resolved position is falsy or an empty object,
    //     // will retain current scroll position.
    //     resolve(position)
    //   })
    // })
  }
}

export default new Router({
  // 对于所有路由导航，让页面滚动到顶部
  // scrollBehavior: () => ({
  //   y: 0
  // }),
  // mode: 'history',
  // base: __dirname,
  // scrollBehavior,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      component: NotFound,
      name: 'notFound'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      name: 'home',
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/dishDetail/:id',
      component: dishDetail,
      name: 'dishDetail'
    }
    
  ]
})