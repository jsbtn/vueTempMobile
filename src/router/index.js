import Vue from 'vue';
import VueRouter from 'vue-router';
import { tabBars } from './tabBarRouter'

Vue.use(VueRouter);

export const routes = [
  ...tabBars,
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta:{title:'登陆',hiden:true,}
  },
  { 
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue'),
    meta: { title: '404', icon:'404',hidden:true}
  }
]

const router = new VueRouter({
  routes
})

export default router
