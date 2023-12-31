import { LmgUtil } from './utils/imgUtil'
import { createApp } from 'vue'
import router from '@/router'
import store from '@/vueXstore'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'

import App from './App.vue'
console.log('环境变量:', import.meta.env.VITE_username)
console.log('环境变量:', import.meta.env.VITE_age)
LmgUtil.storageLmgList()
createApp(App).use(store).use(router).use(createPinia()).use(ElementPlus,{size:'small'}).mount('#app')
