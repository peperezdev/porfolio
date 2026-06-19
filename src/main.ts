import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/styles/style.css'
import { useTheme } from './composables/useTheme'
import { initAnalytics } from './analytics'

/**
 * Instancia principal de la aplicación Vue.
 */
const app = createApp(App)

/**
 * Instancia global de Pinia para la gestión del estado.
 */
const pinia = createPinia()

app.use(pinia)
app.use(router)

/**
 * Extrae e invoca las funciones de inicialización del tema.
 * Se ejecuta después de instalar Pinia para garantizar que la tienda (store) esté activa.
 */
const { initTheme, watchSystemPreference } = useTheme()
initTheme()
watchSystemPreference()

initAnalytics()

app.mount('#app')
