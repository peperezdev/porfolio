<script setup lang="ts">
const anyoActual = new Date().getFullYear()
</script>

<template>
  <footer
    class="md:fixed md:bottom-0 bg-surface-container-lowest dark:bg-surface-container-lowest backdrop-blur-xl w-full py-5 md:py-5 border-t border-outline-variant/20 flat no shadows mt-auto"
  >
    <div
      class="flex flex-col md:flex-row justify-evenly items-center gap-6 md:gap-8 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto transition-all duration-200"
    >
      <div class="font-label-caps text-label-caps text-secondary uppercase tracking-widest">
        Pedro Pérez Porfolio
      </div>
      <div class="font-code-sm text-code-sm text-secondary text-center md:text-left">
        <a
          class="font-bold"
          href="https://creativecommons.org/licenses/by/4.0/deed.es"
          target="_blank"
          rel="noopener noreferrer"
          >CC-BY</a
        >
        {{ anyoActual }} Pedro Pérez
      </div>
      <div class="flex space-x-6">
        <a
          class="text-on-surface-variant hover:text-secondary hover:opacity-80 transition-opacity font-code-sm text-code-sm"
          href="https://github.com/peperezdev"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub</a
        >
        <a
          class="text-on-surface-variant hover:text-secondary hover:opacity-80 transition-opacity font-code-sm text-code-sm"
          href="#"
          >LinkedIn</a
        >
        <a
          class="text-on-surface-variant hover:text-secondary hover:opacity-80 transition-opacity font-code-sm text-code-sm"
          href="#"
          >Contact</a
        >
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
