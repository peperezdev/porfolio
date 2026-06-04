<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { theme, isDark, toggleTheme } = useTheme()
</script>

<template>
  <!-- TopNavBar -->
  <header>
    <nav
      class="bg-surface-container-lowest/80 dark:bg-surface-container-lowest/80 fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/30 flat no shadows"
    >
      <div
        class="flex justify-evenly items-center h-16 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto"
      >
        <div
          class="font-label-caps text-label-caps font-bold text-on-surface tracking-widest uppercase"
        >
          Pedro Pérez Porfolio
        </div>
        <div class="hidden md:flex space-x-8">
          <a
            class="text-on-surface-variant hover:text-on-surface transition-colors duration-200 hover:bg-surface-container-high/50 transition-all duration-150 px-3 py-2 rounded-DEFAULT"
            href="#"
            >Home</a
          >
          <a
            class="text-on-surface-variant hover:text-on-surface transition-colors duration-200 hover:bg-surface-container-high/50 transition-all duration-150 px-3 py-2 rounded-DEFAULT"
            href="#"
            >Projects</a
          >
          <a
            class="text-inverse-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-inverse-primary after:rounded-full hover:bg-surface-container-high/50 transition-all duration-150 px-3 py-2 rounded-DEFAULT"
            href="#"
            >About Me</a
          >
        </div>
        <div class="flex items-center space-x-4">
          <button
            type="button"
            @click="toggleTheme"
            class="px-4 py-2 bg-primary text-on-primary rounded-lg hover:opacity-90 transition-opacity"
          >
            {{ isDark ? '☀️ Claro' : '🌙 Oscuro' }}
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
