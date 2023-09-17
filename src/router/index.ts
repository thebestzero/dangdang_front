import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const ctgy = () => import('@/piniaviews/ctgy/index.vue')

const routes:RouteRecordRaw[] = [
  {
    name:'crgy',
    path:'/ctgy',
    component:ctgy
  },
  {
    name:'default',
    path:'/',
    component:ctgy
  }
]

const router = createRouter({
  history:createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
