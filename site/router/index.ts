import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/nav',
    component: () => import(/* webpackChunkName: "App" */ '../page/Layout.vue'),
    meta: {
      title: '首页'
    },
    children: [
      { path: 'nav', component: () => import('../components/NavLink.vue') },
      {
        path: 'button',
        component: () => import('../../components/button/demo/index.vue')
      },
      {
        path: 'icon',
        component: () => import('../../components/icon/demo/index.vue')
      },
      {
        path: 'flex',
        component: () => import('../../components/flex/demo/index.vue')
      },
      {
        path: 'wingblank',
        component: () => import('../../components/wingblank/demo/index.vue')
      },
      {
        path: 'whitespace',
        component: () => import('../../components/whitespace/demo/index.vue')
      }
    ]
  }
]

// const routes = [
//   { path: '/', component: Home },
//   { path: '/about', component: About },
// ]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
