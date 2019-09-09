import Vue from 'vue'
import Router from 'vue-router'

// console.log(process.env)
const _import = require('./_import_' + process.env.NODE_ENV)

// 导航
const Tabbar = _import('tabbar/index')
// 登录
const Login = _import('login/index')
const Home = _import('home/index')
// 404
const NotFound = _import('notFound/index')

Vue.use(Router)

export default new Router({
  // 对于所有路由导航，让页面滚动到顶部
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      component: Tabbar,
      children: [
        {
          path: '',
          component: Home
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})