import { storeToRefs } from 'pinia'

import { useThemeStore } from '@/stores/theme'

export function useTheme() {
    const store = useThemeStore()
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
