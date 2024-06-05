/*
 * @Author: mochenglong
 * @Date: 2024-06-05 22:20:02
 * @LastEditors: mochenglong
 * @LastEditTime: 2024-06-06 02:47:15
 * @Description: file content
 */


// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import "@/styles/common.scss"

const app = createApp(App)


// //测试接口函数

// import { getCategory } from '@/apis/testAPI'
// getCategory().then(res=>{
//   console.log(res);
// })
app.use(createPinia())
app.use(router)

app.mount('#app')
