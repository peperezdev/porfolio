<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'

const { theme, isDark, toggleTheme } = useTheme()
</script>

<template>

  <Header />

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

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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

    <!-- Tipografía -->
    <div class="mt-4 pt-4 border-t border-outline-variant">
      <h2 class="text-headline-md text-center font-headline font-semibold mb-4 text-primary">
        Tipografía
      </h2>

      <div class="flex flex-col md:flex-row md:justify-evenly gap-10 md:gap-3">
        <!-- Encabezados -->
        <div>
          <p class="text-label-md font-mono text-outline mb-2">
            Familia: Headline (Geist) / Tamaños de Encabezado
          </p>
          <div class="flex flex-col gap-2">
            <h1 class="font-headline text-headline-xl font-bold">Headline Extra Large</h1>
            <h2 class="font-headline text-headline-lg font-semibold">Headline Large</h2>
            <h3 class="font-headline text-headline-md font-medium">Headline Medium</h3>
            <h4 class="font-headline text-headline-sm font-regular">Headline Small</h4>
          </div>
        </div>

        <!-- Cuerpo -->
        <div>
          <p class="text-label-md font-mono text-outline mb-2">
            Familia: Body (Inter) / Tamaños de Cuerpo
          </p>
          <div class="flex flex-col gap-2">
            <p class="font-body text-body-lg">
              Body Large: El diseño es el embajador silencioso de tu marca.
            </p>
            <p class="font-body text-body-md">
              Body Medium: El diseño es el embajador silencioso de tu marca.
            </p>
            <p class="font-body text-label-md">
              Label Medium: Texto de etiqueta pequeña y utilitaria.
            </p>
          </div>
        </div>

        <!-- Código -->
        <div>
          <p class="text-label-md font-mono text-outline mb-2">
            Familia: Mono (JetBrains) / Código
          </p>
          <div class="p-4 bg-surface-container-high rounded-md">
            <code class="font-mono text-mono-code text-on-surface"
              >const design = "embajador silencioso";</code
            >
          </div>
        </div>
      </div>
    </div>

    <div class="p-4 bg-surface-container text-center rounded-lg text-on-surface mt-4">
      <p class="text-sm">
        Tema actual: <span class="font-bold">{{ theme }}</span>
      </p>
    </div>
  </div>

  <Footer />
</template>
