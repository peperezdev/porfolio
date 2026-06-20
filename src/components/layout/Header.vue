<script setup lang="ts">
import cvUrl from '@/assets/pdf/Curriculum_Pedro_Perez.pdf'

const descargarCV = (): void => {
  const link = document.createElement('a')
  link.href = cvUrl
  link.download = 'Curriculum_Pedro_Perez.pdf'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full bg-surface-base/80 backdrop-blur-xl border-b border-surface-border/50 z-50"
  >
    <div
      class="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center"
    >
      <div class="font-headline-md text-headline-md font-bold tracking-tight text-text-strong">
        Porfolio
      </div>
      <nav class="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
        <a
          class="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs font-bold tracking-widest uppercase font-label-caps"
          href="#about"
          id="sobre_mi"
          >Sobre mí</a
        >
        <a
          class="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs font-bold tracking-widest uppercase font-label-caps"
          href="#experience"
          id="experiencia"
          >Experiencia</a
        >
        <a
          class="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs font-bold tracking-widest uppercase font-label-caps"
          href="#projects"
          id="proyectos"
          >Proyectos</a
        >
<!--      </nav>-->
<!--      <nav class="flex items-center gap-6">-->
        <button
          @click="descargarCV"
          class="bg-primary text-on-primary px-6 py-2 rounded-full font-bold hover:opacity-90 transition-opacity text-sm"
          id="curriculumButton"
        >
          Currículum
        </button>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
