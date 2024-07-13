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
      meta: {
        requiresAuth: true
      },
      redirect: '/dashboard/home',
      children: [
         {
          name: 'home',
          path: '/dashboard/home',
          component:()=> import ('../views/Dashboard/home.vue')
        },
        {
          name: 'profile',
          path: '/dashboard/profile',
          component:() => import('../views/Dashboard/profile.vue')
        },
        {
          name: 'create',
          path: '/dashboard/create',
          component:() => import('../views/Dashboard/create.vue')
        }
      ]
    },
  ]
})
router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const token = localStorage.getItem('token');
    if (token) {
      return next();
    }
   return next('/Login');
  }
  next();
});

export default router
