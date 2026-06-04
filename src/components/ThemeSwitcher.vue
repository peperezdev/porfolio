<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { theme, isDark, toggleTheme } = useTheme()
</script>

<template>
  <div class="flex flex-col gap-4 p-6 bg-surface text-on-surface rounded-lg">
    <div class="flex items-center justify-between">
      <h2 class="text-lg font-semibold">Selector de Tema</h2>
      <button
        type="button"
        @click="toggleTheme"
        class="px-4 py-2 bg-primary text-on-primary rounded-lg hover:opacity-90 transition-opacity"
      >
        {{ isDark ? '☀️ Claro' : '🌙 Oscuro' }}
      </button>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <!-- Colores Primarios -->
      <div class="p-4 bg-primary-container text-on-primary-container rounded-lg">
        <p class="text-sm font-semibold">Primary Container</p>
      </div>

      <!-- Colores Secundarios -->
      <div class="p-4 bg-secondary-container text-on-secondary-container rounded-lg">
        <p class="text-sm font-semibold">Secondary Container</p>
      </div>

      <!-- Colores Terciarios -->
      <div class="p-4 bg-tertiary-container text-on-tertiary-container rounded-lg">
        <p class="text-sm font-semibold">Tertiary Container</p>
      </div>

      <!-- Error -->
      <div class="p-4 bg-error text-on-error rounded-lg">
        <p class="text-sm font-semibold">Error</p>
      </div>
    </div>

    <div class="p-4 bg-surface-container rounded-lg text-on-surface">
      <p class="text-sm">
        Tema actual: <span class="font-bold">{{ theme }}</span>
      </p>
    </div>
  </div>
</template>
