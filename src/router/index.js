import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../pages/home/Index.vue'
import { auth } from '../firebase'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/user/Login.vue')
  },
  {
    path: '/tasks',
    name: 'Tasks',
    component: () => import('../pages/tasks/Index.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/tasks/create',
    name: 'Create task',
    component: () => import('../pages/tasks/Create.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/notifications',
    name: 'Notificactions',
    component: () => import('../pages/notifications/Index.vue'),
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router

