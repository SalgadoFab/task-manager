import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/home/Index.vue')
  },
  {
    path: '/tasks',
    name: 'task',
    component: () => import('../pages/tasks/Index.vue')
  },
  {
    path: '/tasks/create',
    name: 'create task',
    component: () => import('../pages/tasks/Create.vue')
  },
  {
    path: '/notifications',
    name: 'notificactions',
    component: () => import('../pages/notifications/Index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
