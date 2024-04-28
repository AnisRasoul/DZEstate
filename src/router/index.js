import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
 
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
 
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
 
    {
      path: '/property',
      name: 'property',
      component: () => import('../views/Property.vue')
    },
    {
      path: '/dashboard',
      name: 'dashobard',
      component: () => import('../views/Dashboard.vue')
    },
  ]
})

export default router
