import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/components/HomeView.vue'
import ProjectsView from '@/components/ProjectsView.vue'
import AboutView from '@/components/AboutView.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/proyectos',
    name: 'Projects',
    component: ProjectsView,
  },
  {
    path: '/sobre-mi',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/patron',
    name: 'Patron',
    component: ThemeSwitcher
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
