<script setup lang="ts">
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <Header />

  <main class="min-h-screen bg-background text-on-background py-12">
    <ThemeSwitcher />
  </main>

  <Footer />
</template>

<style scoped></style>
