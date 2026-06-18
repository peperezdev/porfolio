import { createRouter, createWebHistory } from 'vue-router'

import SinglePageView from '@/components/SinglePageView.vue'

/**
 * Definición de las rutas principales de la aplicación.
 */
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

/**
 * Instancia del enrutador de Vue.
 * Maneja la navegación de la aplicación utilizando el historial web.
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
})

/**
 * Guardia de navegación global (Global Before Guard).
 * Se ejecuta antes de cada cambio de ruta para actualizar el título de la pestaña del navegador.
 * 
 * @param to - La ruta destino a la que se navega.
 * @param from - La ruta actual de la que se navega.
 * @param next - Función de callback para continuar con la navegación.
 */
router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? `Porfolio - ${<string>to.meta.title}` : 'Mi app'
  next()
})

export default router
