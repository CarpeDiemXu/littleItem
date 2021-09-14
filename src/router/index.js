import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
// import HomeMain from '../views/home/HomeMain.vue'
import Home from '../views/Home.vue'
import Vip from '../views/Vip.vue'
import Explore from '../views/Explore.vue'
import Waiting from '../views/Waiting.vue'
import Follow from '../views/home/components/Follow.vue'
import Hot from '../views/home/components/Hot.vue'
import Zvideo from '../views/home/components/Zvideo.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    redirect: '/follow'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/follow',
        name: 'follow',
        component: Follow
      },
      {
        // 第一种、第三种
        path: '/hot',
        // 第二种
        // path: '/hot/:list',
        name: 'hot',
        component: Hot
      },
      {
        path: '/zvideo',
        name: 'zvideo',
        component: Zvideo
      },
    ]
  },
  {
    path: '/vip',
    name: 'Vip',
    component: Vip
  },
  {
    path: '/explore',
    name: 'explore',
    component: Explore
  },
  {
    path: '/question/waiting',
    name: 'waiting',
    component: Waiting
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
