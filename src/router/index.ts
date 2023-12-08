import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import storage from 'good-storage';

const ctgy = () => import('@/views/ctgy/index.vue')
const book = () => import('@/views/book/index.vue')

const routes:RouteRecordRaw[] = [
  {
    name:'login',
    path:'/login',
    component:import('@/views/login/index.vue'),
    beforeEnter:(to, from, next) => {
      const token = storage.get('token')
      if (token){
        next({name:'ctgy'})
      }else {
        next()
      }
    }
  },
  {
    name:'ctgy',
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
  {
    name:'bookdetail',
    path:'/bookdetail',
    redirect:'/goods',
    component: () => import('@/views/bookdetail/index.vue'),
    children:[
      {
        name:'goods',
        path:'/goods',
        component:() => import('@/views/bookdetail/component/goods.vue')
      },
      {
        name:'evaluate',
        path:'/evaluate',
        component:() => import('@/views/bookdetail/component/evaluate/index.vue')
      }
    ]
  },
]

const router = createRouter({
  history:createWebHashHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const token = storage.get('token')
  if (token || to.name === 'login'){
    next()
  }else {
    next({name:'login'})
  }
})
export default router
