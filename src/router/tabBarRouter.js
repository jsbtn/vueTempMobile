export const tabBars = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/home.vue'),
    meta:{title: '首页',active:'/home',icon:"home"}
  },
  // {
  //   path: '/ranking',
  //   name: 'ranking',
  //   component: () => import('../views/ranking.vue'),
  //   meta:{title: '排行', active:'/ranking',icon:"ranking"}
  // },
  // {
  //   path: '/focus',
  //   name: 'focus',
  //   component: () => import('../views/focus.vue'),
  //   meta:{title: '关注', active:'/focus',icon:"focus"}
  // },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user.vue'),
    meta:{title: '我的', active:'/user',icon:"user"}
  },
]
