<script setup lang="ts">
import ThemeSwitcher from "@/components/ThemeSwitcher.vue";
</script>

<template>
  <main class="min-h-screen bg-background text-on-background p-6">
    <h1 class="text-3xl font-semibold mb-4">You did it!</h1>
    <p class="mb-6">
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>

    <ThemeSwitcher />
  </main>
</template>

<style scoped></style>
