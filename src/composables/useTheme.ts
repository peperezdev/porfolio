import { storeToRefs } from 'pinia'

import { useThemeStore } from '@/stores/theme'

/**
 * Composable para manejar el tema de la aplicación.
 * Proporciona acceso reactivo al estado del tema y métodos para manipularlo.
 * 
 * @returns Un objeto que contiene referencias reactivas y métodos del store del tema.
 */
export function useTheme() {
  /**
   * Instancia del store de Pinia encargado de gestionar el tema.
   */
  const store = useThemeStore()

  /**
   * Referencias reactivas extraídas del store para usarse en los componentes.
   */
  const { theme, isDark } = storeToRefs(store)

  return {
    theme,
    isDark,
    setTheme: store.setTheme,
    toggleTheme: store.toggleTheme,
    initTheme: store.initTheme,
    watchSystemPreference: store.watchSystemPreference,
  }
}
