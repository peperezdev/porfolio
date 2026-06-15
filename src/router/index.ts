import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/components/HomeView.vue'
import ProjectsView from '@/components/ProjectsView.vue'
import AboutView from '@/components/AboutView.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import ProjectView from '@/components/projectView.vue'
import SinglePageView from '@/components/SinglePageView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Inicio',
    },
  },
  {
    path: '/proyectos',
    name: 'Projects',
    component: ProjectsView,
    meta: {
      title: 'Proyectos',
    },
  },
  {
    path: '/sobre-mi',
    name: 'About',
    component: AboutView,
    meta: {
      title: 'Sobre mi',
    },
  },
  {
    path: '/patron',
    name: 'Patron',
    component: ThemeSwitcher,
    meta: {
      title: 'Patron web',
    },
  },
  {
    path: '/proyecto',
    name: 'Project',
    component: ProjectView,
    meta: {
      title: 'Proyecto',
    },
  },
  {
    path: '/single-page',
    name: 'single-page',
    component: SinglePageView,
    meta: {
      title: 'single-page',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `Porfolio - ${<string>to.meta.title}` : 'Mi app'
  next()
})

export default router
