import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

// console.log(process.env)
const _import = require('./_import_' + process.env.NODE_ENV)

// 404页
const NotFound = _import('notFound/index')
// 登录页
const Login = _import('login/index')
// 主页
const Home = _import('home/index')
// 菜品详情页
const DishDetail = _import('dishDetail/index')
// 购物车
const ShoppingCart = _import('shoppingCart/index')
// 店铺欢迎页
const Welcome = _import('welcome/index')
// 选择用餐人数页
const ChoosePeopleCount = _import('choosePeopleCount/index')
// 我的订单-订单列表
const OrderList = _import('orderList/index')
// 我的订单-订单详情
const OrderDetail = _import('orderDetail/index')

Vue.use(Router)

export default new Router({
  // 对于所有路由导航，让页面滚动到顶部
  // scrollBehavior: () => ({
  //   y: 0
  // }),
  routes: [{
      path: '/',
      redirect: '/welcome'
    },
    {
      path: '*',
      component: NotFound,
      name: 'notFound',
      meta: {
        pageIndex: -10
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        pageIndex: 0
      }
    },
    {
      path: '/home',
      component: Home,
      name: 'home',
      meta: {
        keepAlive: true,
        pageIndex: 1
      }
    },
    {
      path: '/shoppingCart',
      component: ShoppingCart,
      name: 'shoppingCart',
      meta: {
        pageIndex: 2
      }
    },
    {
      path: '/welcome',
      component: Welcome,
      name: 'welcome',
      meta: {
        pageIndex: -2
      }
    },
    {
      path: '/choosePeopleCount',
      component: ChoosePeopleCount,
      name: 'choosePeopleCount',
      meta: {
        pageIndex: -1
      }
    },
    {
      path: '/orderList',
      component: OrderList,
      name: 'orderList',
      meta: {
        pageIndex: 3
      }
    },
    {
      path: '/orderDetail',
      component: OrderDetail,
      name: 'orderDetail',
      meta: {
        pageIndex: 4
      }
    },
    // {
    //   path: '/dishDetail/:id',
    //   component: DishDetail,
    //   name: 'dishDetail'
    // }
  ]
})