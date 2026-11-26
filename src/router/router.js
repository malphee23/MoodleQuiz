import { createRouter, createWebHistory } from 'vue-router'

import JoinPage from '@/pages/JoinPage.vue'
import StudentLobbyPage from '@/pages/StudentLobbyPage.vue'

const routes = [
  {
    path: '/',
    redirect: '/join',
  },
  {
    path: '/join',
    component: JoinPage,
  },

  {
    path: '/session/:id/lobby',
    component: StudentLobbyPage,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})

export default router
