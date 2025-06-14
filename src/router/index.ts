import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog/:id',
    name: 'Blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router 