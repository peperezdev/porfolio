import { createRouter, createWebHistory } from 'vue-router'

import SinglePageView from '@/components/SinglePageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: SinglePageView,
    meta: {
      title: 'Home',
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
