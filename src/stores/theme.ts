import { defineStore } from 'pinia'

/**
 * Tipo que define los temas disponibles en la aplicación.
 */
export type Theme = 'light' | 'dark'

/**
 * Clave utilizada para almacenar y recuperar la preferencia de tema en localStorage.
 */
const THEME_STORAGE_KEY = 'theme'

/**
 * Bandera interna que indica si el listener de preferencias del sistema operativo ya fue inicializado.
 */
let systemPreferenceListenerBound = false

/**
 * Type Guard para verificar en tiempo de ejecución si un valor dado corresponde a un tema válido.
 * 
 * @param value - Valor a comprobar (proveniente generalmente de localStorage).
 * @returns `true` si es un tema válido ('light' o 'dark').
 */
function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark'
}

/**
 * Aplica visualmente el tema al documento HTML, manipulando atributos y clases en la etiqueta raíz (`<html>`).
 * 
 * @param theme - El tema que se aplicará ('light' o 'dark').
 */
function applyThemeToDocument(theme: Theme) {
  if (typeof document === 'undefined') return

  const root = document.documentElement

  root.setAttribute('data-theme', theme)
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
}

/**
 * Store de Pinia para gestionar el tema de la aplicación (claro/oscuro).
 */
export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'light' as Theme,
  }),

  getters: {
    /**
     * Getter que determina si el tema actual es oscuro.
     * @param state - El estado actual del store.
     * @returns `true` si el tema es 'dark'.
     */
    isDark: (state) => state.theme === 'dark',
  },

  actions: {
    /**
     * Establece un nuevo tema en el estado, lo guarda en el almacenamiento local (localStorage)
     * y lo aplica al documento HTML.
     * 
     * @param newTheme - El nuevo tema a establecer ('light' o 'dark').
     */
    setTheme(newTheme: Theme) {
      this.theme = newTheme
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(THEME_STORAGE_KEY, newTheme)
      }
      applyThemeToDocument(newTheme)
    },

    /**
     * Alterna el tema actual entre claro y oscuro.
     */
    toggleTheme() {
      this.setTheme(this.theme === 'light' ? 'dark' : 'light')
    },

    /**
     * Inicializa el tema de la aplicación al cargar.
     * Prioriza el tema guardado en localStorage; si no existe, usa la preferencia del sistema;
     * de lo contrario, se establece en 'light'.
     */
    initTheme() {
      if (typeof window === 'undefined') return

      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

      if (isTheme(savedTheme)) {
        this.theme = savedTheme
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.theme = 'dark'
      } else {
        this.theme = 'light'
      }

      applyThemeToDocument(this.theme)
    },

    /**
     * Comienza a observar los cambios en las preferencias de color del sistema operativo (claro/oscuro).
     * Actualiza el tema automáticamente si el usuario cambia sus preferencias a nivel de sistema.
     */
    watchSystemPreference() {
      if (typeof window === 'undefined' || systemPreferenceListenerBound) return

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

      const handleChange = (event: MediaQueryListEvent) => {
        if (!isTheme(localStorage.getItem(THEME_STORAGE_KEY))) {
          this.theme = event.matches ? 'dark' : 'light'
          applyThemeToDocument(this.theme)
        }
      }

      mediaQuery.addEventListener('change', handleChange)
      systemPreferenceListenerBound = true
    },
  },
})
