<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import CardProject from '@/components/layout/projects/CardProject.vue'
</script>

<template>
    <Header />
    <main class="pt-10 pb-25">
        <!-- Hero Section -->
        <section class="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-20">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
                <div class="md:col-span-7">
                    <span
                        class="inline-block px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-md text-label-md mb-6"
                    >
                        ARQUITECTO FRONTEND E INGENIERO DE IA
                    </span>
                    <h1
                        class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-6 leading-tight"
                    >
                        Ingeniería de interfaces complejas con
                        <span class="text-primary">precisión técnica</span> y flujos de trabajo
                        impulsados por IA.
                    </h1>
                    <p class="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl">
                        Especializado en arquitecturas de dashboards de alto rendimiento, sistemas
                        de diseño e integraciones de IA fluidas para entornos de software de misión
                        crítica.
                    </p>
                    <div class="flex flex-wrap gap-4">
                        <button
                            class="px-8 py-3 bg-primary text-on-primary rounded-lg font-headline-sm text-headline-sm hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20"
                        >
                            View Work
                        </button>
                        <button
                            class="px-8 py-3 bg-surface-container-lowest border border-outline-variant text-on-surface rounded-lg font-headline-sm text-headline-sm hover:bg-surface-container-low transition-all"
                        >
                            Technical Stack
                        </button>
                    </div>
                </div>
                <div class="md:col-span-5 relative md:mt-0">
                    <div class="aspect-square rounded-xl overflow-hidden shadow-2xl">
                        <img
                            class="w-full h-full object-cover"
                            data-alt="A high-tech digital workspace featuring multiple high-resolution displays showing complex code architectures and data visualizations. The lighting is clean and bright, characteristic of a professional light-mode aesthetic. Minimalist hardware like a sleek mechanical keyboard and an industrial-grade workstation sit on a pristine white desk. The atmosphere is one of clinical precision and extreme focus, using a palette of whites, cool grays, and indigo highlights."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtey63Uu64zniuhsuPchV5Y8MFYE2JESaapbchPQEEL2V7MQDUwrwnBFDeJXWiFPXk_nRZ1QmJwb_jPfCf9-ljThIUj1gBt80GB7ooqyl-VFf0uzQ2cn100vOw44zjxxp9jWcvSve7A1NncdI7Ap3Gj1HDqPz4VoPKE7Q3-xFjlYB5KxY6CdzVc1nSLbrt_7L-zwaBmnBFcByLdzaqZa3aIWeyQSRs3EJ3Ej76uRkDn42toHyH2Vt1JVwZO-zYb6oeCl0uHib2JJ8"
                        />
                    </div>
                    <div
                        class="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant shadow-xl hidden sm:block"
                    >
                        <div class="flex items-center gap-4">
                            <div
                                class="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center"
                            >
                                <span
                                    class="material-symbols-outlined text-white"
                                    style="font-variation-settings: 'FILL' 1"
                                    >terminal</span
                                >
                            </div>
                            <div>
                                <p class="font-label-md text-label-md text-on-surface-variant">
                                    Fiabilidad Principal
                                </p>
                                <p class="font-headline-sm text-headline-sm text-on-surface">
                                    Arquitectura con 99.9% de Tiempo de Actividad
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Bento Grid Projects -->
        <section class="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto mb-6">
            <div class="flex items-center justify-between mb-12">
                <h2 class="font-headline-md text-headline-md text-on-surface">
                    Proyectos Seleccionados
                </h2>
                <div class="hidden sm:flex h-[1px] flex-grow mx-8 bg-outline-variant/30"></div>
                <button
                    class="text-primary font-label-md text-label-md flex items-center gap-2 hover:underline"
                >
                    EXPLORAR TODOS
                    <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-3 mb-6">
                <CardProject />
                <CardProject />
                <CardProject />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-3">
                <!-- Additional ProjectView Slot - Bento Style -->
                <div class="md:col-span-6 group">
                    <div
                        class="bg-surface-container-low border border-outline-variant/30 rounded-xl p-8 hover:bg-surface-container-lowest hover:border-primary/20 transition-all"
                    >
                        <div class="flex justify-between items-start mb-6">
                            <span
                                class="material-symbols-outlined text-4xl text-primary"
                                style="font-variation-settings: 'FILL' 1"
                                >dataset</span
                            >
                            <span class="font-mono-code text-mono-code text-on-surface-variant"
                                >003</span
                            >
                        </div>
                        <h3 class="font-headline-sm text-headline-sm text-on-surface mb-2">
                            DataCore Engine
                        </h3>
                        <p class="font-body-md text-body-md text-on-surface-variant">
                            Una librería de código abierto para gestionar estado reactivo en
                            aplicaciones React a escala masiva. Optimizada para actualizaciones de
                            UI sin latencia.
                        </p>
                    </div>
                </div>
                <!-- Metrics Bento Slot -->
                <div
                    class="md:col-span-6 bg-slate-900 rounded-xl p-8 text-white flex flex-col justify-center relative overflow-hidden"
                >
                    <div
                        class="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
                    ></div>
                    <div class="grid grid-cols-2 gap-8 relative z-10">
                        <div>
                            <p class="font-headline-lg text-headline-lg text-indigo-vibrant">
                                124+
                            </p>
                            <p class="font-label-md text-label-md text-slate-400">
                                PROYECTOS DESPLEGADOS
                            </p>
                        </div>
                        <div>
                            <p class="font-headline-lg text-headline-lg text-indigo-vibrant">9k+</p>
                            <p class="font-label-md text-label-md text-slate-400">
                                CANTIDAD DE COMMITS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Tech Stack Section -->
        <section class="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
            <div
                class="bg-surface-container-lowest border border-outline-variant/40 rounded-2xl p-12 text-center"
            >
                <h2
                    class="font-headline-sm text-headline-sm text-on-surface-variant mb-12 uppercase tracking-widest"
                >
                    Technological Foundation
                </h2>
                <div class="flex flex-wrap justify-center items-center gap-12 opacity-60">
                    <div
                        class="flex items-center gap-2 font-headline-md text-headline-md text-on-surface"
                    >
                        <span class="material-symbols-outlined">javascript</span> JS
                    </div>
                    <div
                        class="flex items-center gap-2 font-headline-md text-headline-md text-on-surface"
                    >
                        <span class="material-symbols-outlined">code</span> TypeScript
                    </div>
                    <div
                        class="flex items-center gap-2 font-headline-md text-headline-md text-on-surface"
                    >
                        <span class="material-symbols-outlined">layers</span> React
                    </div>
                    <div
                        class="flex items-center gap-2 font-headline-md text-headline-md text-on-surface"
                    >
                        <span class="material-symbols-outlined">storage</span> Supabase
                    </div>
                    <div
                        class="flex items-center gap-2 font-headline-md text-headline-md text-on-surface"
                    >
                        <span class="material-symbols-outlined">cloud</span> AWS
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
</template>

<style scoped></style>
