/*
 * @Author: mochenglong
 * @Date: 2024-06-05 22:20:02
 * @LastEditors: mochenglong
 * @LastEditTime: 2024-06-07 23:53:21
 * @Description: file content
 */
import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //path和component对应关系的位置
  routes: [
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/',
      component: Layout,
      children:[
        {
          path: '',
          component: Home
        },
        {
          path: '/category/:id',
          component: Category
        }
      ]
    }
  ]
})

export default router
