<script setup lang="ts"></script>

<template>
  <section class="grid grid-cols-2 md:grid-cols-4 gap-2 mx-1 md:mx-0">
    <div class="bento-card rounded-xl p-8 flex flex-col items-center text-center">
      <span class="material-symbols-outlined text-primary text-4xl mb-4">smartphone</span>
      <p class="font-bold text-text-strong text-lg mb-1">Móvil</p>
      <p class="text-[11px] text-text-muted font-medium uppercase tracking-widest font-label-caps">
        Flutter, Dart
      </p>
    </div>
    <div class="bento-card rounded-xl p-8 flex flex-col items-center text-center">
      <span class="material-symbols-outlined text-accent-cyan text-4xl mb-4">terminal</span>
      <p class="font-bold text-text-strong text-lg mb-1">Backend</p>
      <p class="text-[11px] text-text-muted font-medium uppercase tracking-widest font-label-caps">
        Python, Node.js, TypeScript
      </p>
    </div>
    <div class="bento-card rounded-xl p-8 flex flex-col items-center text-center">
      <span class="material-symbols-outlined text-tertiary text-4xl mb-4">database</span>
      <p class="font-bold text-text-strong text-lg mb-1">Datos</p>
      <p class="text-[11px] text-text-muted font-medium uppercase tracking-widest font-label-caps">
        PostgreSQL, Redis
      </p>
    </div>
    <div class="bento-card rounded-xl p-8 flex flex-col items-center text-center">
      <span class="material-symbols-outlined text-error text-4xl mb-4">cloud_done</span>
      <p class="font-bold text-text-strong text-lg mb-1">Nube</p>
      <p class="text-[11px] text-text-muted font-medium uppercase tracking-widest font-label-caps">
        AWS, Firebase
      </p>
    </div>
  </section>
</template>

<style scoped></style>
