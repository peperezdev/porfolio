import { defineStore } from 'pinia'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'theme'
let systemPreferenceListenerBound = false

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark'
}

function applyThemeToDocument(theme: Theme) {
  if (typeof document === 'undefined') return

  const root = document.documentElement

  root.setAttribute('data-theme', theme)
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
}

export const useThemeStore = defineStore('theme', {
  state: () => ({
    theme: 'light' as Theme,
  }),

  getters: {
    isDark: (state) => state.theme === 'dark',
  },

  actions: {
    setTheme(newTheme: Theme) {
      this.theme = newTheme
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(THEME_STORAGE_KEY, newTheme)
      }
      applyThemeToDocument(newTheme)
    },

    toggleTheme() {
      this.setTheme(this.theme === 'light' ? 'dark' : 'light')
    },

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


