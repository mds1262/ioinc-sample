import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/loader'
  },
  {
    path: '/folder/:id',
    component: () => import ('@/views/FolderPage.vue')
  },

  {
    path: '/loader',
    component: () => import ('@/views/LoaderPage.vue')
  },
  {
    path: '/login',
    component: () => import ('@/views/LoginPage.vue')
  },
  {
    path: '/register',
    component: () => import ('@/views/RegisterPage.vue')
  },
  {
    path: '/home',
    component: () => import ('@/views/HomePage.vue')
  },
  {
    path: '/pickup-call',
    component: () => import ('@/views/PickupCall.vue')
  },
  {
    path: '/pickup-calls',
    component: () => import ('@/views/PickupCalls.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
