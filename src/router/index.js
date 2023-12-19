import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    //  meta: {
    //   keepAlive: true, //添加这个作为标志符，表明该页面需要保留状态
    // },
    component: HomeView
  },
  {
    path: '/explore',
    name: 'explore',
    component: () => import(/* webpackChunkName: "about" */ '../views/ExploreView.vue')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/MineView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/setup',
    name: 'setup',
    component: () => import(/* webpackChunkName: "about" */ '../views/SetUpView.vue')
  },
  {
    path: '/language',
    name: 'language',
    component: () => import(/* webpackChunkName: "about" */ '../views/LanguageView.vue')
  },
  {
    path: '/reply',
    name: 'reply',
    component: () => import(/* webpackChunkName: "about" */ '../views/ReplyView.vue')
  },
  {
    path: '/night',
    name: 'night',
    component: () => import(/* webpackChunkName: "about" */ '../views/NightView.vue')
  },
  {
    path: '/remind',
    name: 'remind',
    component: () => import(/* webpackChunkName: "about" */ '../views/RemindView.vue')
  },
  {
    path: '/stack',
    name: 'stack',
    component: () => import(/* webpackChunkName: "about" */ '../demo/StackBasic.vue')
  },
  {
    path: '/article/:id',
    name: 'article',
    // meta: {
    //   keepAlive: true, //添加这个作为标志符，表明该页面需要保留状态
    // },
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticleView.vue'),
    // props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
