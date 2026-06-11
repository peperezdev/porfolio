<script setup lang="ts">
import { useNavigation } from '@/composables/useNavigation'

const { goToProject } = useNavigation()
</script>

<template>
    <!-- LinkCurt - Sidebar Feature -->
    <div class="md:col-span-4 group">
        <div
            class="bg-surface-container-lowest border border-outline-variant/60 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 h-full flex flex-col"
        >
            <div class="relative h-64 overflow-hidden bg-surface-container-high/20">
                <div class="absolute inset-0 flex items-center justify-center p-8">
                    <div
                        class="w-full bg-white rounded-lg shadow-xl border border-outline-variant/20 p-4 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300"
                    >
                        <div class="flex items-center gap-3 mb-4">
                            <div class="w-8 h-8 rounded-full bg-primary-container"></div>
                            <div class="h-2 w-24 bg-surface-container-highest rounded"></div>
                        </div>
                        <div class="space-y-2">
                            <div class="h-2 w-full bg-surface-container rounded"></div>
                            <div class="h-2 w-4/5 bg-surface-container rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-8 flex-grow flex flex-col">
                <h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">IA Dental</h3>
                <p class="font-body-md text-body-md text-on-surface-variant mb-6">
                    Un sistema integral de gestión clínica para consultas dentales especializadas.
                    Diseñado con un enfoque en visualización de datos de alta densidad y gráficos
                    rápidos de pacientes.
                </p>
                <div class="mt-auto">
                    <div class="flex flex-wrap gap-2 mb-6">
                        <span
                            class="font-mono-code text-mono-code bg-surface-container text-on-surface-variant px-3 py-1 rounded"
                            >Next.js</span
                        >
                        <span
                            class="font-mono-code text-mono-code bg-surface-container text-on-surface-variant px-3 py-1 rounded"
                            >Redis</span
                        >
                    </div>
                    <button
                        class="font-label-md text-label-md text-primary flex items-center gap-2"
                        @click="goToProject"
                    >
                        VER PROYECTO
                        <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
