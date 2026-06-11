<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
    <Header />
    <main class="pt-10 pb-25 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <!-- Hero Section -->
        <header class="mb-6">
            <div
                class="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full font-label-md text-label-md mb-4"
            >
                <span class="material-symbols-outlined text-[16px]">medical_services</span>
                TRANSFORMACIÓN SANITARIA
            </div>
            <h1
                class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mb-4"
            >
                Proyecto: IA Dental Detail
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                Un sistema de gestión de clínicas dentales de alta precisión que aprovecha el
                análisis automatizado de imágenes de diagnóstico y flujos de trabajo optimizados de
                programación de pacientes para grupos dentales empresariales.
            </p>
        </header>
        <!-- Metadata Grid (Responsive Stack) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
            <div
                class="bg-surface-container-low p-md rounded-xl border border-outline-variant/30 py-1"
            >
                <p
                    class="font-label-md text-label-md text-on-surface-variant uppercase mb-2 text-center"
                >
                    Rol
                </p>
                <p class="font-body-md text-body-md font-semibold text-center">
                    Arquitecto UI/UX Principal e Ingeniero Full-Stack
                </p>
            </div>
            <div
                class="bg-surface-container-low p-md rounded-xl border border-outline-variant/30 py-1"
            >
                <p
                    class="font-label-md text-label-md text-on-surface-variant uppercase mb-2 text-center"
                >
                    Cronología
                </p>
                <p class="font-body-md text-body-md font-semibold text-center">
                    6 Meses (T1 - T2 2024)
                </p>
            </div>
            <div
                class="bg-surface-container-low p-md rounded-xl border border-outline-variant/30 py-1"
            >
                <p
                    class="font-label-md text-label-md text-on-surface-variant uppercase mb-2 text-center"
                >
                    Tecnologías
                </p>
                <div class="flex flex-col lg:flex-row items-center md:flex-wrap lg:justify-evenly gap-2">
                    <span class="px-2 py-0.5 rounded font-mono-code text-mono-code">React</span>
                    <span class="px-2 py-0.5 rounded font-mono-code text-mono-code"
                        >Python/FastAPI</span
                    >
                    <span class="px-2 py-0.5 rounded font-mono-code text-mono-code"
                        >TensorFlow</span
                    >
                </div>
            </div>
        </div>
        <!-- Main Content (Bento Grid Style) -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-3" >
            <!-- Hero Image -->
            <div
                class="md:col-span-12 h-64 md:h-96 rounded-2xl overflow-hidden relative group mb-6"
            >
                <img
                    class="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                    data-alt="A futuristic dental office interior featuring sleek, medical-grade equipment and advanced holographic diagnostic displays. The room is flooded with bright, clinical white light from recessed ceiling panels, highlighting a professional and sterilized atmosphere. The color palette is dominated by clean whites, soft grays, and deep indigo accents, maintaining a high-tech corporate modern aesthetic. The composition is wide and cinematic, emphasizing technical precision and modern healthcare innovation."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSRaSBMOrjLcRUqtZRdHvD4E0NZ8sdnUCaLSd61Bb_6ECCsvwbp3dsx6kskgcAUStIch3jiisC6SQ381VBDEEo6Z87Nmr5AlqFjmT7qi8hcGwvsa_kaPdG-rpE9TjWYJn7n3VZlIgpmS7feZW1NilIw6QTOkxJPhtEOelicOaZnCzA12jaLHoiUEX_RIHuP4Xx-iagPM376eK6_lOf4O2rjbKXJca8PJxu3k5ePcx7nCuFRws0SRsi6BGdlIwhRTVx4jdSajRZCrY"
                />
                <div
                    class="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"
                ></div>
            </div>
            <!-- Architecture (Full Width on Mobile) -->
            <div
                class="md:col-span-8 bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-lg shadow-sm p-3 mb-6 gap-3"
            >
                <div class="flex items-center gap-3 mb-6">
                    <span class="material-symbols-outlined text-primary">account_tree</span>
                    <h2 class="font-headline-sm text-headline-sm">Arquitectura del Sistema</h2>
                </div>
                <p class="font-body-md text-body-md text-on-surface-variant mb-8">
                    La arquitectura principal sigue un enfoque de micro-frontend, permitiendo que el
                    portal del paciente, el panel de proveedores y el motor de IA de diagnóstico
                    escalen independientemente.
                </p>
                <!-- Architecture Diagram Simulation -->
                <div
                    class="bg-surface-container border border-outline-variant/20 rounded-xl p-4 flex flex-col md:flex-row gap-4 items-center justify-center"
                >
                    <div
                        class="w-full md:w-1/3 p-4 bg-white rounded-lg border border-primary/20 text-center shadow-sm"
                    >
                        <p class="font-label-md text-label-md text-primary font-bold">
                            Puerta de Enlace API Edge
                        </p>
                    </div>

                    <div class="hidden md:block">
                        <div class="material-symbols-outlined text-outline-variant">
                            trending_flat
                        </div>
                    </div>
                    <div class="md:hidden">
                        <div class="material-symbols-outlined text-outline-variant rotate-90">
                            trending_flat
                        </div>
                    </div>

                    <div
                        class="w-full md:w-1/3 p-4 bg-primary text-on-primary rounded-lg text-center shadow-md"
                    >
                        <p class="font-label-md text-label-md font-bold">Motor de Inferencia ML</p>
                    </div>

                    <div class="hidden md:block">
                        <div class="material-symbols-outlined text-outline-variant">
                            trending_flat
                        </div>
                    </div>
                    <div class="md:hidden">
                        <div class="material-symbols-outlined text-outline-variant rotate-90">
                            trending_flat
                        </div>
                    </div>

                    <div
                        class="w-full md:w-1/3 p-4 bg-white rounded-lg border border-primary/20 text-center shadow-sm"
                    >
                        <p class="font-label-md text-label-md text-primary font-bold">
                            Data Lake Postgres
                        </p>
                    </div>
                </div>
            </div>
            <!-- Stats Card (Side Panel) -->
            <div
                class="md:col-span-4 bg-primary text-on-primary rounded-2xl p-3 flex flex-col justify-between mb-6"
            >
                <div>
                    <h3 class="font-headline-sm text-headline-sm mb-4">Impacto Principal</h3>
                    <div class="space-y-6">
                        <div>
                            <p class="text-3xl font-bold">45%</p>
                            <p class="font-label-md text-label-md opacity-80 uppercase">
                                Reducción en tiempo de administración
                            </p>
                        </div>
                        <div>
                            <p class="text-3xl font-bold">98.2%</p>
                            <p class="font-label-md text-label-md opacity-80 uppercase">
                                Precisión Diagnóstica
                            </p>
                        </div>
                        <div>
                            <p class="text-3xl font-bold">2.4s</p>
                            <p class="font-label-md text-label-md opacity-80 uppercase">
                                Latencia P99 para Procesamiento de Imágenes
                            </p>
                        </div>
                    </div>
                </div>
                <button
                    class="mt-8 w-full py-3 bg-white text-primary rounded-lg font-label-md text-label-md font-bold hover:bg-opacity-90 transition-all uppercase tracking-wider"
                >
                    Ver Caso de Estudio Completo
                </button>
            </div>
            <!-- Challenges (Full Width on Mobile) -->
            <div
                class="md:col-span-12 bg-surface-container-lowest border border-outline-variant/50 rounded-2xl p-3 mb-6"
            >
                <div class="flex items-center gap-3 mb-6">
                    <span class="material-symbols-outlined text-error">warning</span>
                    <h2 class="font-headline-sm text-headline-sm">Retos Técnicos</h2>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-lg">
                    <div class="space-y-4">
                        <h4 class="font-body-md text-body-md font-bold text-on-surface">
                            Procesamiento de Imágenes DICOM
                        </h4>
                        <p class="font-body-md text-body-md text-on-surface-variant">
                            Conversión de formatos de imágenes dentales patentados en texturas web
                            estándar para anotación en tiempo real conservando precisión clínica
                            submilimétrica.
                        </p>
                    </div>
                    <div class="space-y-4">
                        <h4 class="font-body-md text-body-md font-bold text-on-surface">
                            Cumplimiento HIPAA a Escala
                        </h4>
                        <p class="font-body-md text-body-md text-on-surface-variant">
                            Implementación de cifrado de conocimiento cero para PII en una
                            arquitectura distribuida con una sobrecarga mínima en los clústeres de
                            bases de datos regionales.
                        </p>
                    </div>
                </div>
            </div>
            <!-- Code Snippet Section -->
            <div
                class="md:col-span-12 bg-slate-900 rounded-2xl p-lg overflow-hidden border border-slate-800 shadow-xl p-3"
            >
                <div class="flex items-center justify-between mb-6">
                    <div class="flex items-center gap-3">
                        <span class="material-symbols-outlined text-primary-fixed">code</span>
                        <h2 class="font-headline-sm text-headline-sm text-white">
                            Lógica de Inferencia
                        </h2>
                    </div>
<!--                    <div class="flex gap-1.5">-->
<!--                        <div class="w-3 h-3 rounded-full bg-red-500/50"></div>-->
<!--                        <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>-->
<!--                        <div class="w-3 h-3 rounded-full bg-green-500/50"></div>-->
<!--                    </div>-->
                </div>
                <div class="code-container overflow-x-auto">
                    <pre
                        class="font-mono-code text-mono-code text-indigo-200/90 leading-relaxed"
                    ><code>async def analyze_xray(file_bytes: bytes, patient_id: str):
    # Normalize image for the dental CNN model
    processed_image = preprocess_dicom(file_bytes)

    # Run Inference on the GPU cluster
    with torch.no_grad():
        results = dental_model.predict(processed_image)

    # Store encrypted findings
    encrypted_blob = kms.encrypt(results.json())
    await db.findings.insert_one({
        "patient_id": patient_id,
        "payload": encrypted_blob,
        "timestamp": datetime.utcnow()
    })

    return {"status": "success", "analysis_id": results.id}</code></pre>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>

<style scoped></style>
