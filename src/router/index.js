import HomeView from '@/components/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'HomeView',
      path: '/',
      component: HomeView,
    },
  ],
})

export default router
