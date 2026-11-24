import { createRouter, createWebHistory } from 'vue-router'

import JoinPage from '@/pages/JoinPage.vue'

const routes = [
  {
    path: '/join',
    component: JoinPage,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})

export default router
