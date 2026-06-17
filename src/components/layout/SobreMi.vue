<script setup lang="ts"></script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-24 mx-1 md:mx-0" id="about">
    <!-- Left Side: Content -->
    <section class="md:col-span-7">
<!--      <div class="flex items-center gap-3 mb-6">-->
<!--        <span class="flex h-2 w-2 rounded-full bg-accent-cyan status-pulse"></span>-->
<!--        <span class="font-label-caps text-[10px] text-accent-cyan tracking-widest"-->
<!--          >DISPONIBLE PARA OPORTUNIDADES</span-->
<!--        >-->
<!--      </div>-->
      <h1 class="font-headline-xl text-headline-xl text-text-strong mb-6 leading-tight">
        Desarrollador Web Full-Stack especializado en IA y Big Data
      </h1>
      <p
        class="text-on-surface-variant font-body-lg text-body-lg max-w-xl mb-10 leading-relaxed opacity-90"
      >
        Soy Pedro Pérez, un desarrollador de software apasionado y dedicado a la creación de
        aplicaciones web y arquitecturas escalables. Me especializo en diseñar UI/UX modernas con
        Vue y Node.js, uniendo el diseño creativo y la excelencia técnica.
      </p>
      <div class="flex flex-wrap gap-6 items-center">
        <a
          class="px-8 py-3.5 bg-primary text-on-primary rounded-xl font-bold flex items-center gap-3 hover:shadow-[0_0_30px_rgba(192,193,255,0.3)] transition-all"
          href="mailto:porfolio@peperez.es"
        >
          Escríbeme
          <span class="material-symbols-outlined text-sm">mail</span>
        </a>
        <div class="flex items-center gap-6">
          <a
            class="text-on-surface-variant hover:text-primary transition-colors"
            href="https://github.com/peperezdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="material-symbols-outlined text-2xl">code</span>
          </a>
          <a
            class="text-on-surface-variant hover:text-primary transition-colors"
            href="https://www.linkedin.com/in/pedro-miguel-p%C3%A9rez-ib%C3%A1%C3%B1ez-43bb56204/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="material-symbols-outlined text-2xl">person</span>
          </a>
        </div>
      </div>
    </section>

    <!-- Right Side: Profile Card -->
    <section class="md:col-span-5">
      <div
        class="bento-card rounded-xl p-10 flex flex-col items-center justify-center text-center border-outline-variant/10"
      >
        <div
          class="w-40 h-40 rounded-full overflow-hidden mb-8 border border-primary/10 p-1.5 bg-surface-card"
        >
          <img
            alt="Pedro Pérez - Profile"
            class="w-full h-full object-cover rounded-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa_YuYv0zg4OxVJufypdzArDbsTxSUttn5RcAboS3MiieBKco5kQzJ1DIQtC439K_pgq603pAKlq8gBMD4Q3ni5E6MAsDDli5HUgpHN3BiZ7s-T3tNmZzevMpASUv89u5iT7q6b1PpuuFxfjiovVcFzSwmssR58MM3UdtSbU3Ba2yqdZ2cZXilM834AwqYUsHxv3BRl2ruNKuIciTRSxc4ZoZH4xsruXcqKA6zYUuEbO7icnZ2kvv2MNoZg8vdRK48BrcymZo5Bza9"
          />
        </div>
        <h2 class="font-headline-md text-headline-md text-text-strong mb-2">Pedro Pérez</h2>
        <p class="text-primary font-code-sm uppercase tracking-[0.2em] text-[10px] mb-2">
          Técnico Superior en Desarrollo de Aplicaciones WEB.
        </p>
        <p class="text-primary font-code-sm uppercase tracking-[0.2em] text-[10px] mb-4">
          Especializado en IA y Big Data
        </p>

        <!--            <p class="text-on-surface-variant text-sm mb-8">Argelia (UTC+1)</p>-->
        <!-- Statistics Grid -->
        <!--            <div class="grid grid-cols-2 gap-4 w-full">-->
        <!--              <div class="px-6 py-4 rounded-xl bg-surface-base border border-surface-border">-->
        <!--                <span class="block font-bold text-xl text-text-strong">2+</span>-->
        <!--                <span-->
        <!--                  class="text-[10px] uppercase tracking-widest text-text-muted font-bold font-label-caps"-->
        <!--                  >Años de Exp.</span-->
        <!--                >-->
        <!--              </div>-->
        <!--              <div class="px-6 py-4 rounded-xl bg-surface-base border border-surface-border">-->
        <!--                <span class="block font-bold text-xl text-text-strong">15+</span>-->
        <!--                <span-->
        <!--                  class="text-[10px] uppercase tracking-widest text-text-muted font-bold font-label-caps"-->
        <!--                  >Proyectos</span-->
        <!--                >-->
        <!--              </div>-->
        <!--            </div>-->
      </div>
    </section>
  </div>
</template>

<style scoped></style>
