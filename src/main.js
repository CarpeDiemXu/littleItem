import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
// 导入插件
import './plugin'


Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  // console.log(to)
  if (localStorage.getItem('isLogin')&& to.path==='/login') {
    next({path:'/home'})
  } else if (!localStorage.getItem('isLogin') && to.path !== '/login') {
    next({path:'/login'})
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
