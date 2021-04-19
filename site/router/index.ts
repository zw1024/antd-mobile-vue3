import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

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
      { path: 'nav',  component: () => import('../components/nav.vue') },
      { path: 'button',  component: () => import('../../components/button/demo/index.vue') },
      { path: 'about', component: About }
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
