import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'HomeView',
      path: '/',
      component: HomeView,
    },
    {
      name: 'ProjectsView',
      path: '/projects',
      component: ProjectsView,
    },
  ],
})

export default router
