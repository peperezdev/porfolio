<script setup lang="ts">
import { ref, watch } from 'vue'

import { useRoute } from 'vue-router'

import { useTheme } from '@/composables/useTheme'

const { theme, isDark, toggleTheme } = useTheme()

const isMenuOpen = ref(false)

const route = useRoute()

function closeMenu() {
  isMenuOpen.value = false
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  },
)
</script>

<template>
  <!-- TopNavBar -->
  <header class="mb-15 block">
    <nav
      class="bg-surface-container-lowest/80 dark:bg-surface-container-lowest/80 fixed top-0 w-full z-50 backdrop-blur-xl border-b border-outline-variant/30 flat no shadows"
    >
      <div
        class="flex justify-between items-center h-16 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto"
      >
        <div
          class="font-label-caps text-label-caps font-bold text-on-surface tracking-widest uppercase"
        >
          <router-link :to="{ name: 'Home' }">
            <svg
              width="60"
              height="60"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="200" height="200" rx="40" fill="#0c0f0f" />
              <path
                d="M60 140V60H110C126.569 60 140 73.4315 140 90C140 106.569 126.569 120 110 120H80"
                stroke="#2e5bff"
                stroke-width="12"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M80 140L80 120" stroke="#2e5bff" stroke-width="12" stroke-linecap="round" />
              <circle cx="140" cy="140" r="10" fill="#2e5bff" />
              <path
                d="M160 60L145 75M160 60L175 75"
                stroke="#38393a"
                stroke-width="8"
                stroke-linecap="round"
              />
            </svg>
          </router-link>
        </div>

        <div class="hidden md:flex space-x-8">
          <router-link
            :to="{ name: 'Home' }"
            class="text-on-surface-variant hover:text-on-surface transition-colors duration-200 hover:bg-surface-container-high/50 transition-all duration-150 px-3 py-2 rounded-DEFAULT"
            >Inicio</router-link
          >
          <router-link
            :to="{ name: 'Projects' }"
            class="text-on-surface-variant hover:text-on-surface transition-colors duration-200 hover:bg-surface-container-high/50 transition-all duration-150 px-3 py-2 rounded-DEFAULT"
            >Proyectos</router-link
          >
          <router-link
            :to="{ name: 'About' }"
            class="text-inverse-primary relative after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-inverse-primary after:rounded-full hover:bg-surface-container-high/50 transition-all duration-150 px-3 py-2 rounded-DEFAULT"
            >Sobre mí</router-link
          >
          <router-link
            :to="{ name: 'Patron' }"
            class="text-on-surface-variant hover:text-on-surface transition-colors duration-200 hover:bg-surface-container-high/50 transition-all duration-150 px-3 py-2 rounded-DEFAULT"
            >Patrón</router-link
          >
        </div>
        <div class="flex-1 flex justify-center md:hidden">
          <button
            type="button"
            class="btn btn-ghost btn-circle"
            :aria-expanded="isMenuOpen"
            aria-label="Abrir menú"
            @click="isMenuOpen = !isMenuOpen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          v-if="isMenuOpen"
          class="absolute left-0 flex flex-col text-center top-full w-full border-b border-[var(--color-outline-variant)] bg-[var(--color-inverse-surface)] text-[var(--color-inverse-on-surface)] backdrop-blur-xl px-4 py-4 shadow-md md:hidden"
        >
          <nav class="flex flex-col gap-2">
            <router-link
              :to="{ name: 'Home' }"
              class="text-[var(--color-inverse-on-surface)] hover:opacity-70 transition-opacity duration-200 px-3 py-2 rounded-DEFAULT"
              @click="closeMenu"
              >Inicio</router-link
            >
            <router-link
              :to="{ name: 'Projects' }"
              class="text-[var(--color-inverse-on-surface)] hover:opacity-70 transition-opacity duration-200 px-3 py-2 rounded-DEFAULT"
              @click="closeMenu"
              >Proyectos</router-link
            >
            <router-link
              :to="{ name: 'About' }"
              class="text-[var(--color-inverse-on-surface)] hover:opacity-70 transition-opacity duration-200 px-3 py-2 rounded-DEFAULT"
              @click="closeMenu"
              >Sobre mí</router-link
            >
            <router-link
              :to="{ name: 'Patron' }"
              class="text-[var(--color-inverse-on-surface)] hover:opacity-70 transition-opacity duration-200 px-3 py-2 rounded-DEFAULT"
              @click="closeMenu"
              >Patrón</router-link
            >
          </nav>
        </div>
        <div class="flex items-center space-x-4">
          <button
            type="button"
            @click="toggleTheme"
            class="px-4 py-2 bg-primary text-on-primary rounded-lg hover:opacity-90 transition-opacity"
          >
            {{ isDark ? '☀️' : '🌙' }}
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped></style>
