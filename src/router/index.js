import Vue from 'vue';
import VueRouter from 'vue-router';
import { tabBars } from './tabBarRouter'

Vue.use(VueRouter);

/**
 * @tabBars
 * meta/title = < 标题名称 >
 * meta/active = < 选中路由 >
 */
export const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta:{ title:'登陆' }
  },
  { 
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: { title: '404' }
  }
]

const router = new VueRouter({
  routes:[...tabBars,...routes]
})

export default router
