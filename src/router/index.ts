import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const ctgy = () => import('@/views/ctgy/index.vue')
const book = () => import('@/views/book/index.vue')

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
  },
  {
    name:'book',
    path:'/book',
    component:book
  },
  {
    name:'shopcartlist',
    path:'/shopcartlist',
    component: () => import('@/views/shopcartlist/index.vue')
  },
  {
    name:'search',
    path:'/search',
    component: () => import('@/views/search/index.vue')
  },
]

const router = createRouter({
  history:createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
