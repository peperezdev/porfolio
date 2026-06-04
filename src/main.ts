import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './style.css'
import { useTheme } from './composables/useTheme'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// Inicializar tema después de instalar Pinia para garantizar que la tienda esté activa.
const { initTheme, watchSystemPreference } = useTheme()
initTheme()
watchSystemPreference()


app.mount('#app')
