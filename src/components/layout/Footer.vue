<script setup lang="ts">
const anyoActual = new Date().getFullYear()
</script>

<template>
  <footer class="w-full border-t border-surface-border bg-surface-base mt-24">
    <div class="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-16 text-center">
      <div class="font-headline-md text-headline-md font-bold text-text-strong mb-4 tracking-tight">
        Portafolio
      </div>
      <p class="text-sm text-text-muted mb-10 opacity-70">
        Construyendo el futuro, un píxel a la vez.
      </p>
      <div class="flex justify-center gap-12 mb-12">
        <a
          class="font-code-sm text-[10px] font-bold text-text-muted hover:text-primary transition-colors uppercase tracking-[0.2em]"
          href="https://github.com/peperezdev"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub</a
        >
        <a
          class="font-code-sm text-[10px] font-bold text-text-muted hover:text-primary transition-colors uppercase tracking-[0.2em]"
          href="https://www.linkedin.com/in/pedro-miguel-p%C3%A9rez-ib%C3%A1%C3%B1ez-43bb56204/"
          target="_blank"
          rel="noopener noreferrer"
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
</template>

<style scoped></style>
