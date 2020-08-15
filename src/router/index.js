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
    name: 'index',
    component: () => import('@/views/index.vue'),
    meta:{ title:'访客信息录入' }
  },
  { 
    path: '/info',
    name: 'info',
    component: () => import('@/views/info.vue'),
    meta: { title: '提交信息' }
  },
  { 
    path: '/weCode',
    name: 'weCode',
    component: () => import('@/views/code.vue'),
    meta: { title: '二维码' }
  },
  { 
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: { title: '404' }
  },
]

const router = new VueRouter({
  routes
})

export default router
