<script setup lang="ts">
defineProps({
  title: String,
})
</script>

<template>
  <div class="mt-24 mb-10 mx-1 md:mx-0">
    <h2
      class="font-label-caps text-label-caps text-text-muted uppercase tracking-[0.3em] flex items-center gap-6"
    >
      {{title}}
<!--      <div class="h-[1px] bg-surface-border flex-grow"></div>-->
    </h2>
  </div>
</template>

<style scoped></style>
