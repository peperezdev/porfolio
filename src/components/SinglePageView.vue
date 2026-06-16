<script setup lang="ts">
import { onMounted } from 'vue'
import Header from '@/components/layout/Header.vue'
import SobreMi from '@/components/layout/SobreMi.vue'
import Estudios from '@/components/layout/Estudios.vue'
import Proyectos from '@/components/layout/Proyectos.vue'
import CompetenciaTecnica from '@/components/layout/CompetenciaTecnica.vue'

onMounted(() => {
  // Animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0')
        entry.target.classList.remove('opacity-0', 'translate-y-10')
      }
    })
  }, observerOptions)

  const animatedElements = document.querySelectorAll(
    '.bento-card, section h1, section p, .grid > div',
  )
  animatedElements.forEach((el) => {
    el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out')
    observer.observe(el)
  })

  // Smooth scroll
  document.querySelectorAll('nav a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href')
      if (!targetId || !targetId.startsWith('#')) return

      e.preventDefault()
      const element = document.querySelector(targetId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        })
      }
    })
  })
})

const anyoActual = new Date().getFullYear()
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
    <footer class="w-full border-t border-surface-border bg-surface-base mt-24">
      <div class="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-16 text-center">
        <div
          class="font-headline-md text-headline-md font-bold text-text-strong mb-4 tracking-tight"
        >
          Portafolio
        </div>
        <p class="text-sm text-text-muted mb-10 opacity-70">
          Construyendo el futuro, un píxel a la vez.
        </p>
        <div class="flex justify-center gap-12 mb-12">
          <a
            class="font-code-sm text-[10px] font-bold text-text-muted hover:text-primary transition-colors uppercase tracking-[0.2em]"
            href="https://github.com/Aladdine-S"
            >GitHub</a
          >
          <a
            class="font-code-sm text-[10px] font-bold text-text-muted hover:text-primary transition-colors uppercase tracking-[0.2em]"
            href="https://www.linkedin.com/in/pedro-miguel-p%C3%A9rez-ib%C3%A1%C3%B1ez-43bb56204/"
            >LinkedIn</a
          >
          <!--          <a-->
          <!--            class="font-code-sm text-[10px] font-bold text-text-muted hover:text-primary transition-colors uppercase tracking-[0.2em]"-->
          <!--            href="#"-->
          <!--            >Twitter</a-->
          <!--          >-->
        </div>
        <div class="pt-8 border-t border-surface-border">
          <p class="font-code-sm text-[10px] text-text-muted uppercase tracking-widest">
            © {{ anyoActual }} Pedro Pérez — Creado con Vue3, TypeScript y Tailwind
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>
