<script setup lang="ts">
import { onMounted } from 'vue'

import Header from '@/components/layout/Header.vue'
import SobreMi from '@/components/layout/SobreMi.vue'
import Estudios from '@/components/layout/Estudios.vue'
import Proyectos from '@/components/layout/Proyectos.vue'
import CompetenciaTecnica from '@/components/layout/CompetenciaTecnica.vue'
import Footer from '@/components/layout/Footer.vue'
import TituloH3 from '@/components/layout/TituloH3.vue'

import { usePageAnimations } from '@/composables/usePageAnimations'

onMounted(() => {
  usePageAnimations()
})
</script>

<template>
  <div class="font-body-md text-body-md antialiased custom-scrollbar">
    <!-- Header -->
    <Header />

    <main class="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop pt-10 pb-20">
      <!-- Hero / Split Layout -->
      <TituloH3 title="DISPONIBLE PARA OPORTUNIDADES" />

      <SobreMi />

      <!-- Section Title -->
      <TituloH3 title="Formación Académica" />

      <!-- Experience Section -->
      <Estudios />

      <!-- Projects Section Title -->
      <TituloH3 title="Proyectos seleccionadas" />

      <!-- Projects Section -->
      <Proyectos />

      <!-- Tools & Stack -->
      <TituloH3 title="Competencias técnicas" />

      <CompetenciaTecnica />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<style scoped></style>
