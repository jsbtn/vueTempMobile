/**
 * @tabBars
 * meta/title = < tab栏显示的菜单 >
 * meta/active = < 选中路由 >
 * meta/icon = < 你需要弄俩文件在icon文件夹下  一个叫"tab" "tab-act" 哈哈>
 * 
 */
export const tabBars = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta:{title: '首页',active:'/home',icon:"home"}
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user.vue'),
    meta:{title: '我的', active:'/user',icon:"user"}
  },
]
