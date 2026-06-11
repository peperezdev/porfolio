<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
    <Header />

    <main class="pt-10 pb-25">
        <!-- IA Dental - Large Feature -->
        <div class="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
            <div
                class="bg-surface-container-lowest border border-outline-variant/60 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300 h-full flex flex-col"
            >
                <div class="relative h-64 md:h-96 overflow-hidden">
                    <img
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        data-alt="A sophisticated medical software interface for dental specialists, displayed on a high-definition monitor. The UI features detailed 3D dental scans, patient data charts, and clinical scheduling tools. The design is clean and airy with high-contrast light mode styling, utilizing a professional color scheme of clinical white, soft cerulean, and indigo accents. The overall mood is sterile, reliable, and technologically advanced for a healthcare environment."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYOP8xdsBqnG15qvRacSW9hbTRTYQwMWC5SkaZ9Ab1CVarjBwlu83rjl4oSuUQvwK3CDCITG1H97PPV0ozTBWwQVOUa4PqB8XJexd-bqEc-KArorFkilweb1JTfULRiVG9CuqFkECxGB64UvMR-GJXC06KjOgMWITsU0LylxbUlwGCBMiY9LlXPKhPkc1F1joJazanHm9-PAR8WU6-u0sjvRSh8NT4yULCfVYGPeG6L7KGzcc8aSRjsvH5u0qEcc_M5hvS59n-6gI"
                    />
                    <div class="absolute top-4 left-4 flex gap-2">
                        <span
                            class="px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-full font-label-md text-label-md text-on-surface"
                            >Aplicación Web</span
                        >
                        <span
                            class="px-3 py-1 bg-primary/90 backdrop-blur shadow-sm rounded-full font-label-md text-label-md text-on-white text-white"
                            >Destacado</span
                        >
                    </div>
                </div>
                <div class="p-8">
                    <h3 class="font-headline-md text-headline-md text-on-surface mb-2">
                        IA Dental
                    </h3>
                    <p class="font-body-md text-body-md text-on-surface-variant mb-6 max-w-2xl">
                        Un sistema integral de gestión clínica para consultas dentales
                        especializadas. Diseñado con un enfoque en visualización de datos de alta
                        densidad y gráficos rápidos de pacientes.
                    </p>
                    <div class="flex flex-wrap gap-2 mb-8">
                        <span
                            class="font-mono-code text-mono-code bg-surface-container text-on-surface-variant px-3 py-1 rounded"
                            >React</span
                        >
                        <span
                            class="font-mono-code text-mono-code bg-surface-container text-on-surface-variant px-3 py-1 rounded"
                            >TypeScript</span
                        >
                        <span
                            class="font-mono-code text-mono-code bg-surface-container text-on-surface-variant px-3 py-1 rounded"
                            >D3.js</span
                        >
                    </div>
                    <button
                        class="font-label-md text-label-md text-primary flex items-center gap-2"
                    >
                        CASO DE ESTUDIO
                        <span class="material-symbols-outlined text-[16px]">open_in_new</span>
                    </button>
                </div>
            </div>
        </div>
    </main>

    <Footer />
</template>

<style scoped></style>
