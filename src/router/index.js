import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import first from '@/components/first'
import second from '@/components/second'
import third from '@/components/third'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '/first',
          name: 'first',
          component: first
        },
        {
          path: '/second',
          name: 'second',
          component: second
        },
        {
          path: '/third',
          name: 'third',
          component: third
        }
      ]
    }
  ]
})
