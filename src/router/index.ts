import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Convertation',
    component: () => import('@/views/ConvertationView.vue')
  },
  {
    path: '/currencies',
    name: 'Currencies',
    component: () => import('@/views/CurrenciesView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
