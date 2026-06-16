<script setup lang="ts">
import { onMounted } from 'vue'

import Header from '@/components/layout/Header.vue'
import SobreMi from '@/components/layout/SobreMi.vue'
import Estudios from '@/components/layout/Estudios.vue'
import Proyectos from '@/components/layout/Proyectos.vue'
import CompetenciaTecnica from '@/components/layout/CompetenciaTecnica.vue'
import Footer from '@/components/layout/Footer.vue'

import { usePageAnimations } from '@/composables/usePageAnimations'

onMounted(() => {
  usePageAnimations()
})
</script>

<template>
  <div class="font-body-md text-body-md antialiased custom-scrollbar">
    <!-- Header -->
    <Header />

    <main class="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-20">
      <!-- Hero / Split Layout -->
      <SobreMi />

      <!-- Section Title -->
      <div class="mt-24 mb-10 mx-1 md:mx-0">
        <h3
          class="font-label-caps text-label-caps text-text-muted uppercase tracking-[0.3em] flex items-center gap-6"
        >
          Trayectoria académica
          <div class="h-[1px] bg-surface-border flex-grow"></div>
        </h3>
      </div>

      <!-- Experience Section -->
      <Estudios />

      <!-- Projects Section Title -->
      <div class="mt-24 mb-10 mx-1 md:mx-0">
        <h3
          class="font-label-caps text-label-caps text-text-muted uppercase tracking-[0.3em] flex items-center gap-6"
        >
          Proyectos Seleccionados
          <div class="h-[1px] bg-surface-border flex-grow"></div>
        </h3>
      </div>

      <!-- Projects Section -->
      <Proyectos />

      <!-- Tools & Stack -->
      <div class="mt-24 mb-10 mx-1 md:mx-0">
        <h3
          class="font-label-caps text-label-caps text-text-muted uppercase tracking-[0.3em] flex items-center gap-6"
        >
          Competencia Técnica
          <div class="h-[1px] bg-surface-border flex-grow"></div>
        </h3>
      </div>

      <CompetenciaTecnica />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped></style>
