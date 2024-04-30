import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 
    {
      path: '/',
      name: 'hero',
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
      name: 'Dashboard',
      path: '/dashboard',
      component:()=> import('../views/Dashboard/Dashboard.vue'),
      redirect: '/home',
      children: [
         {
          name: 'home',
          path: '/home',
          component:()=> import ('../views/Dashboard/home.vue')
        },
        {
          name: 'profile',
          path: '/profile',
          component:() => import('../views/Dashboard/profile.vue')
        },
        {
          name: 'create',
          path: '/create',
          component:() => import('../views/Dashboard/create.vue')
        }
      ]
    },
  ]
})

export default router
