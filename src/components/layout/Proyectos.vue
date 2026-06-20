<script setup lang="ts"></script>

<template>
  <section class="grid grid-cols-1 md:grid-cols-2 gap-2 mx-1 md:mx-0" id="projects">
    <!-- Project 1 -->
    <div class="bento-card rounded-xl overflow-hidden group">
      <div class="aspect-[16/10] w-full relative overflow-hidden bg-surface-base">
        <img
          alt="E-Commerce Mobile App"
          class="w-full h-full object-cover opacity-90"
          src="@/assets/img/dentis.webp"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-60"
        ></div>
      </div>
      <div class="p-8">
        <div class="flex justify-between items-start mb-4">
          <h3 class="font-headline-md text-headline-md text-text-strong">
            Dentis (Proyecto final del curso de especialización)
          </h3>
          <a
            class="material-symbols-outlined text-primary hover:scale-110 transition-transform"
            href="https://dentis.peperez.es"
            target="_blank"
            rel="noopener noreferrer"
            id="dentis_ia"
            >open_in_new</a
          >
        </div>
        <p class="text-on-surface-variant text-sm mb-2 leading-relaxed opacity-80">
          Detección de problemas dentales con IA.
        </p>
        <p class="text-on-surface-variant text-sm mb-2 leading-relaxed opacity-80">
          Desarrollado con Yolo8, FastApi, graphQL, MongoDB, Vue3, Tailwind, Daisy y Kibana.
        </p>
        <p class="text-on-surface-variant text-sm mb-8 leading-relaxed opacity-80">
          Aplicación web que permite a los dentistas subir radiografías y recibir un análisis
          automatizado de posibles problemas dentales, utilizando modelos de aprendizaje profundo
          entrenados en un conjunto de datos de imágenes dentales.
        </p>
        <div class="flex flex-wrap gap-3">
          <span
            class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 text-primary uppercase tracking-wider"
            >FastApi</span
          >
          <span
            class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 text-primary uppercase tracking-wider"
            >Vue3</span
          >
          <span
            class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 text-primary uppercase tracking-wider"
            >GraphQL</span
          >
          <span
            class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 text-primary uppercase tracking-wider"
            >Yolo8</span
          >
        </div>
      </div>
    </div>

    <!-- Project 2 -->
    <div class="bento-card rounded-xl overflow-hidden group">
      <div class="aspect-[16/10] w-full relative overflow-hidden bg-surface-base">
        <img
          alt="Automation Dashboard"
          class="w-full h-full object-cover opacity-90"
          src="@/assets/img/linkcurt.webp"
        />
        <div
          class="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-60"
        ></div>
      </div>
      <div class="p-8">
        <div class="flex justify-between items-start mb-4">
          <h3 class="font-headline-md text-headline-md text-text-strong">
            LinkCurt (Proyecto final del curso de DAW)
          </h3>
          <a
            class="material-symbols-outlined text-primary hover:scale-110 transition-transform"
            href="https://linkcurt.es"
            target="_blank"
            rel="noopener noreferrer"
            id="linkcurt"
            >open_in_new</a
          >
        </div>
        <p class="text-on-surface-variant text-sm mb-2 leading-relaxed opacity-80">
          Plataforma acortadora de enlaces.
        </p>
        <p class="text-on-surface-variant text-sm mb-2 leading-relaxed opacity-80">
          Desarrollado con Vue 3, Node.js, Express, Sequelize, MySQL, Chart.js y Docker.
        </p>
        <p class="text-on-surface-variant text-sm mb-2 leading-relaxed opacity-80">
          Aplicación web que permite a los usuarios reducir URLs largas, generar códigos QR
          asociados y analizar el rendimiento de sus enlaces mediante estadísticas visuales.
        </p>
        <p class="text-on-surface-variant text-sm mb-8 leading-relaxed opacity-80">
          Cuenta con un sistema de autenticación seguro y está completamente contenedorizada para
          facilitar su despliegue.
        </p>
        <div class="flex flex-wrap gap-3">
          <span
            class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 text-primary uppercase tracking-wider"
            >Node.js</span
          >
          <span
            class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 text-primary uppercase tracking-wider"
            >Vue3</span
          >
          <span
            class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 text-primary uppercase tracking-wider"
            >MySQL</span
          >
          <span
            class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 text-primary uppercase tracking-wider"
            >Bootstrap</span
          >
        </div>
      </div>
    </div>

    <!-- Project 3 -->
    <!--    <div class="bento-card rounded-xl overflow-hidden group">-->
    <!--      <div class="aspect-[16/10] w-full relative overflow-hidden bg-surface-base">-->
    <!--        <img-->
    <!--          alt="Automation Dashboard"-->
    <!--          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"-->
    <!--          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiMabR_l1F6KJh7KEnECHNN8Y3-5YfTnrvHXRRrrbH5msT66mtJdgahMxhI2iE9fXXmYmMMmltJLdfxr9mT7nu8YiUn6cS620HlsfZSl2MjCGn_UqXqEozLiy6FVf-f7TM5rvWwrFOwn9DBCKMbXf_VpGWnfv9NoIaO6eYJ-iAutFQUka7_xY0kRLRDoU72p1Qm_n8c-rFVbUKAFrWtU66bFi0SZNy89uPbP6c2uPDsv0gWPGdKIuVxY_ZSWuLACoo0NX5c5pRavS9"-->
    <!--        />-->
    <!--        <div-->
    <!--          class="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-60"-->
    <!--        ></div>-->
    <!--      </div>-->
    <!--      <div class="p-8">-->
    <!--        <div class="flex justify-between items-start mb-4">-->
    <!--          <h3 class="font-headline-md text-headline-md text-text-strong">Porfolio</h3>-->
    <!--          <a-->
    <!--            class="material-symbols-outlined text-primary hover:scale-110 transition-transform"-->
    <!--            href="#"-->
    <!--            >open_in_new</a-->
    <!--          >-->
    <!--        </div>-->
    <!--        <p class="text-on-surface-variant text-sm mb-8 leading-relaxed opacity-80">-->
    <!--          Un panel de control integral de visualización de datos para métricas de SaaS, que utiliza-->
    <!--          D3.js para gráficos complejos y Node.js para procesamiento de datos de alto rendimiento.-->
    <!--        </p>-->
    <!--        <div class="flex flex-wrap gap-3">-->
    <!--          <span-->
    <!--            class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 text-primary uppercase tracking-wider"-->
    <!--            >TypeScript</span-->
    <!--          >-->
    <!--          <span-->
    <!--            class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 text-primary uppercase tracking-wider"-->
    <!--            >Vue3</span-->
    <!--          >-->
    <!--          <span-->
    <!--            class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 text-primary uppercase tracking-wider"-->
    <!--            >Tailwind</span-->
    <!--          >-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </section>
</template>

<style scoped></style>
