<script setup lang="ts">
import { onMounted } from 'vue'
import Header from '@/components/layout/Header.vue'

onMounted(() => {
  // Animation on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0')
        entry.target.classList.remove('opacity-0', 'translate-y-10')
      }
    })
  }, observerOptions)

  const animatedElements = document.querySelectorAll(
    '.bento-card, section h1, section p, .grid > div',
  )
  animatedElements.forEach((el) => {
    el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out')
    observer.observe(el)
  })

  // Smooth scroll
  document.querySelectorAll('nav a').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href')
      if (!targetId || !targetId.startsWith('#')) return

      e.preventDefault()
      const element = document.querySelector(targetId)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        })
      }
    })
  })
})
</script>

<template>
  <div class="font-body-md text-body-md antialiased custom-scrollbar">

    <Header />

    <!-- Header -->
    <nav
      class="mt-20 fixed top-0 left-0 w-full bg-surface-base/80 backdrop-blur-xl border-b border-surface-border/50 z-50"
    >
      <div
        class="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-4 flex justify-between items-center"
      >
        <div class="font-headline-md text-headline-md font-bold tracking-tight text-text-strong">
          Portafolio
        </div>
        <div class="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          <a
            class="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs font-bold tracking-widest uppercase font-label-caps"
            href="#about"
            >Sobre mí</a
          >
          <a
            class="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs font-bold tracking-widest uppercase font-label-caps"
            href="#experience"
            >Experiencia</a
          >
          <a
            class="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs font-bold tracking-widest uppercase font-label-caps"
            href="#projects"
            >Proyectos</a
          >
        </div>
        <div class="flex items-center gap-6">
          <a
            class="hidden sm:flex text-on-surface-variant hover:text-primary transition-colors"
            href="tel:+213672535031"
          >
            <span class="material-symbols-outlined text-xl">call</span>
          </a>
          <button
            class="bg-primary text-on-primary px-6 py-2 rounded-full font-bold hover:opacity-90 transition-opacity text-sm"
          >
            Currículum
          </button>
        </div>
      </div>
    </nav>
    <main class="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop pt-32 pb-20">
      <!-- Hero / Split Layout -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-24" id="about">
        <!-- Left Side: Content -->
        <section class="md:col-span-7">
          <div class="flex items-center gap-3 mb-6">
            <span class="flex h-2 w-2 rounded-full bg-accent-cyan status-pulse"></span>
            <span class="font-label-caps text-[10px] text-accent-cyan tracking-widest"
              >DISPONIBLE PARA OPORTUNIDADES</span
            >
          </div>
          <h1 class="font-headline-xl text-headline-xl text-text-strong mb-6 leading-tight">
            Desarrollador Web Full-Stack &amp; <br /><span class="text-primary"
              >Entusiasta de TypeScript</span
            >
          </h1>
          <p
            class="text-on-surface-variant font-body-lg text-body-lg max-w-xl mb-10 leading-relaxed opacity-90"
          >
            Soy Aladdine, un desarrollador de software apasionado y dedicado a la creación de aplicaciones web de alto rendimiento y arquitecturas escalables. Me especializo en diseñar UI/UX modernas con React, Vue y Node.js, uniendo el diseño creativo y la excelencia técnica.
          </p>
          <div class="flex flex-wrap gap-6 items-center">
            <a
              class="px-8 py-3.5 bg-primary text-on-primary rounded-xl font-bold flex items-center gap-3 hover:shadow-[0_0_30px_rgba(192,193,255,0.3)] transition-all"
              href="mailto:aladdine.dev@gmail.com"
            >
              Escríbeme
              <span class="material-symbols-outlined text-sm">mail</span>
            </a>
            <div class="flex items-center gap-6">
              <a
                class="text-on-surface-variant hover:text-primary transition-colors"
                href="https://github.com/Aladdine-S"
                target="_blank"
              >
                <span class="material-symbols-outlined text-2xl">code</span>
              </a>
              <a class="text-on-surface-variant hover:text-primary transition-colors" href="#">
                <span class="material-symbols-outlined text-2xl">alternate_email</span>
              </a>
              <a class="text-on-surface-variant hover:text-primary transition-colors" href="#">
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
                alt="Aladdine - Profile"
                class="w-full h-full object-cover rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa_YuYv0zg4OxVJufypdzArDbsTxSUttn5RcAboS3MiieBKco5kQzJ1DIQtC439K_pgq603pAKlq8gBMD4Q3ni5E6MAsDDli5HUgpHN3BiZ7s-T3tNmZzevMpASUv89u5iT7q6b1PpuuFxfjiovVcFzSwmssR58MM3UdtSbU3Ba2yqdZ2cZXilM834AwqYUsHxv3BRl2ruNKuIciTRSxc4ZoZH4xsruXcqKA6zYUuEbO7icnZ2kvv2MNoZg8vdRK48BrcymZo5Bza9"
              />
            </div>
            <h2 class="font-headline-md text-headline-md text-text-strong mb-2">Aladdine S.</h2>
            <p class="text-primary font-code-sm uppercase tracking-[0.2em] text-[10px] mb-4">
              Ingeniero de Software
            </p>
            <p class="text-on-surface-variant text-sm mb-8">Argelia (UTC+1)</p>
            <!-- Statistics Grid -->
            <div class="grid grid-cols-2 gap-4 w-full">
              <div class="px-6 py-4 rounded-xl bg-surface-base border border-surface-border">
                <span class="block font-bold text-xl text-text-strong">2+</span>
                <span
                  class="text-[10px] uppercase tracking-widest text-text-muted font-bold font-label-caps"
                  >Años de Exp.</span
                >
              </div>
              <div class="px-6 py-4 rounded-xl bg-surface-base border border-surface-border">
                <span class="block font-bold text-xl text-text-strong">15+</span>
                <span
                  class="text-[10px] uppercase tracking-widest text-text-muted font-bold font-label-caps"
                  >Proyectos</span
                >
              </div>
            </div>
          </div>
        </section>
      </div>
      <!-- Section Title -->
      <div class="mt-24 mb-10">
        <h3
          class="font-label-caps text-label-caps text-text-muted uppercase tracking-[0.3em] flex items-center gap-6"
        >
          Trayectoria Profesional
          <div class="h-[1px] bg-surface-border flex-grow"></div>
        </h3>
      </div>
      <!-- Experience Section -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-bento-gap" id="experience">
        <div class="bento-card rounded-xl p-8 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-start mb-6">
              <div>
                <h4 class="font-headline-md text-headline-md text-text-strong">Linnovlab</h4>
                <p class="text-primary font-bold text-sm">Desarrollador Web Senior</p>
              </div>
              <span
                class="font-code-sm text-[10px] font-bold bg-primary/5 text-primary/80 px-3 py-1 rounded-full border border-primary/10 uppercase tracking-wider"
                >2023 — Presente</span
              >
            </div>
            <p class="text-on-surface-variant text-body-md leading-relaxed mb-8 opacity-80">
              Diseño de arquitecturas para plataformas SaaS escalables y aplicaciones web de alto rendimiento. Enfoque en el ecosistema React, renderizado del lado del servidor y optimización de web vitals para soluciones empresariales.
            </p>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              class="px-3 py-1 bg-surface-base rounded-full text-[10px] font-bold text-text-muted border border-surface-border uppercase tracking-wider font-label-caps"
              >React</span
            ><span
              class="px-3 py-1 bg-surface-base rounded-full text-[10px] font-bold text-text-muted border border-surface-border uppercase tracking-wider font-label-caps"
              >Next.js</span
            ><span
              class="px-3 py-1 bg-surface-base rounded-full text-[10px] font-bold text-text-muted border border-surface-border uppercase tracking-wider font-label-caps"
              >Node.js</span
            >
          </div>
        </div>
        <div class="bento-card rounded-xl p-8 flex flex-col justify-between">
          <div>
            <div class="flex justify-between items-start mb-6">
              <div>
                <h4 class="font-headline-md text-headline-md text-text-strong">
                  Ingeniero Freelance
                </h4>
                <p class="text-accent-cyan font-bold text-sm">Desarrollador Web Fullstack</p>
              </div>
              <span
                class="font-code-sm text-[10px] font-bold bg-accent-cyan/5 text-accent-cyan/80 px-3 py-1 rounded-full border border-accent-cyan/10 uppercase tracking-wider"
                >2021 — 2023</span
              >
            </div>
            <p class="text-on-surface-variant text-body-md leading-relaxed mb-8 opacity-80">
              Desarrollo de soluciones web a medida para clientes internacionales. Especializado en la creación de paneles de control responsivos, APIs RESTful con TypeScript e implementación de sistemas complejos de gestión de estado.
            </p>
          </div>
          <div class="flex flex-wrap gap-2">
            <span
              class="px-3 py-1 bg-surface-base rounded-full text-[10px] font-bold text-text-muted border border-surface-border uppercase tracking-wider font-label-caps"
              >TypeScript</span
            ><span
              class="px-3 py-1 bg-surface-base rounded-full text-[10px] font-bold text-text-muted border border-surface-border uppercase tracking-wider font-label-caps"
              >Vue.js</span
            ><span
              class="px-3 py-1 bg-surface-base rounded-full text-[10px] font-bold text-text-muted border border-surface-border uppercase tracking-wider font-label-caps"
              >GraphQL</span
            >
          </div>
        </div>
      </section>
      <!-- Projects Section Title -->
      <div class="mt-24 mb-10">
        <h3
          class="font-label-caps text-label-caps text-text-muted uppercase tracking-[0.3em] flex items-center gap-6"
        >
          Proyectos Seleccionados
          <div class="h-[1px] bg-surface-border flex-grow"></div>
        </h3>
      </div>
      <!-- Projects Section -->
      <section class="grid grid-cols-1 md:grid-cols-2 gap-bento-gap" id="projects">
        <!-- Project 1 -->
        <div class="bento-card rounded-xl overflow-hidden group">
          <div class="aspect-[16/10] w-full relative overflow-hidden bg-surface-base">
            <img
              alt="E-Commerce Mobile App"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVmPmytiQITP_1yRobQJQeVd2G7ZFGcRrTM8p_EwR_6GmKsjx2FR1ca29vSkNYOIKXNT87iTRZQimQC51gnoPo50zAx3JBkzKOX046WJ4qkY-WJ2bOEPXV9JtWPCUQsz1mrTcNUUPE9oJ0rC9fvqi8HqKmWiv3KUrEwvLqMRzwu3uNBhn5GZcyTT1geAN3ZMAtG88y33QPCi0CEDUBc07PDD3fAXe2YmcDAOf7VdvWtKQEKNoynt2Ndd4_w8XIcpAsc8tMxqaiSUsJ"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-60"
            ></div>
          </div>
          <div class="p-8">
            <div class="flex justify-between items-start mb-4">
              <h3 class="font-headline-md text-headline-md text-text-strong">Nexus E-Commerce</h3>
              <a
                class="material-symbols-outlined text-primary hover:scale-110 transition-transform"
                href="#"
                >open_in_new</a
              >
            </div>
            <p class="text-on-surface-variant text-sm mb-8 leading-relaxed opacity-80">
              Una plataforma de comercio electrónico headless desarrollada con Next.js y la API de Shopify, con un flujo de pago personalizado y gestión de inventario en tiempo real.
            </p>
            <div class="flex flex-wrap gap-3">
              <span
                class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 text-primary uppercase tracking-wider"
                >Next.js</span
              ><span
                class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-accent-cyan/20 text-accent-cyan uppercase tracking-wider"
                >Tailwind</span
              >
            </div>
          </div>
        </div>
        <!-- Project 2 -->
        <div class="bento-card rounded-xl overflow-hidden group">
          <div class="aspect-[16/10] w-full relative overflow-hidden bg-surface-base">
            <img
              alt="Automation Dashboard"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiMabR_l1F6KJh7KEnECHNN8Y3-5YfTnrvHXRRrrbH5msT66mtJdgahMxhI2iE9fXXmYmMMmltJLdfxr9mT7nu8YiUn6cS620HlsfZSl2MjCGn_UqXqEozLiy6FVf-f7TM5rvWwrFOwn9DBCKMbXf_VpGWnfv9NoIaO6eYJ-iAutFQUka7_xY0kRLRDoU72p1Qm_n8c-rFVbUKAFrWtU66bFi0SZNy89uPbP6c2uPDsv0gWPGdKIuVxY_ZSWuLACoo0NX5c5pRavS9"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-surface-card via-transparent to-transparent opacity-60"
            ></div>
          </div>
          <div class="p-8">
            <div class="flex justify-between items-start mb-4">
              <h3 class="font-headline-md text-headline-md text-text-strong">SaaS Analytics Hub</h3>
              <a
                class="material-symbols-outlined text-primary hover:scale-110 transition-transform"
                href="#"
                >open_in_new</a
              >
            </div>
            <p class="text-on-surface-variant text-sm mb-8 leading-relaxed opacity-80">
              Un panel de control integral de visualización de datos para métricas de SaaS, que utiliza D3.js para gráficos complejos y Node.js para procesamiento de datos de alto rendimiento.
            </p>
            <div class="flex flex-wrap gap-3">
              <span
                class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-primary/20 text-primary uppercase tracking-wider"
                >TypeScript</span
              ><span
                class="font-code-sm text-[10px] font-bold px-3 py-1 rounded-full border border-accent-cyan/20 text-accent-cyan uppercase tracking-wider"
                >Node.js</span
              >
            </div>
          </div>
        </div>
      </section>
      <!-- Tools & Stack -->
      <div class="mt-24 mb-10">
        <h3
          class="font-label-caps text-label-caps text-text-muted uppercase tracking-[0.3em] flex items-center gap-6"
        >
          Competencia Técnica
          <div class="h-[1px] bg-surface-border flex-grow"></div>
        </h3>
      </div>
      <section class="grid grid-cols-2 md:grid-cols-4 gap-bento-gap">
        <div class="bento-card rounded-xl p-8 flex flex-col items-center text-center">
          <span class="material-symbols-outlined text-primary text-4xl mb-4">smartphone</span>
          <p class="font-bold text-text-strong text-lg mb-1">Móvil</p>
          <p
            class="text-[11px] text-text-muted font-medium uppercase tracking-widest font-label-caps"
          >
            Flutter, Dart
          </p>
        </div>
        <div class="bento-card rounded-xl p-8 flex flex-col items-center text-center">
          <span class="material-symbols-outlined text-accent-cyan text-4xl mb-4">terminal</span>
          <p class="font-bold text-text-strong text-lg mb-1">Backend</p>
          <p
            class="text-[11px] text-text-muted font-medium uppercase tracking-widest font-label-caps"
          >
            Python, Node.js, TypeScript
          </p>
        </div>
        <div class="bento-card rounded-xl p-8 flex flex-col items-center text-center">
          <span class="material-symbols-outlined text-tertiary text-4xl mb-4">database</span>
          <p class="font-bold text-text-strong text-lg mb-1">Datos</p>
          <p
            class="text-[11px] text-text-muted font-medium uppercase tracking-widest font-label-caps"
          >
            PostgreSQL, Redis
          </p>
        </div>
        <div class="bento-card rounded-xl p-8 flex flex-col items-center text-center">
          <span class="material-symbols-outlined text-error text-4xl mb-4">cloud_done</span>
          <p class="font-bold text-text-strong text-lg mb-1">Nube</p>
          <p
            class="text-[11px] text-text-muted font-medium uppercase tracking-widest font-label-caps"
          >
            AWS, Firebase
          </p>
        </div>
      </section>
    </main>
    <!-- Footer -->
    <footer class="w-full border-t border-surface-border bg-surface-base mt-24">
      <div class="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop py-16 text-center">
        <div
          class="font-headline-md text-headline-md font-bold text-text-strong mb-4 tracking-tight"
        >
          Portafolio
        </div>
        <p class="text-sm text-text-muted mb-10 opacity-70">
          Construyendo el futuro, un píxel a la vez.
        </p>
        <div class="flex justify-center gap-12 mb-12">
          <a
            class="font-code-sm text-[10px] font-bold text-text-muted hover:text-primary transition-colors uppercase tracking-[0.2em]"
            href="https://github.com/Aladdine-S"
            >GitHub</a
          >
          <a
            class="font-code-sm text-[10px] font-bold text-text-muted hover:text-primary transition-colors uppercase tracking-[0.2em]"
            href="#"
            >LinkedIn</a
          >
          <a
            class="font-code-sm text-[10px] font-bold text-text-muted hover:text-primary transition-colors uppercase tracking-[0.2em]"
            href="#"
            >Twitter</a
          >
        </div>
        <div class="pt-8 border-t border-surface-border">
          <p class="font-code-sm text-[10px] text-text-muted uppercase tracking-widest">
            © 2024 Aladdine S. — Creado con Mentalidad de TypeScript y Node.js
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.bento-card {
  background-color: #0f172a; /* Slate-900 */
  border: 1px solid rgba(30, 41, 59, 0.5); /* Slate-800 */
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.bento-card:hover {
  border-color: rgba(192, 193, 255, 0.2);
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5);
  transform: translateY(-4px);
}
.status-pulse {
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
}
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 10px;
}

section {
  scroll-margin-top: 100px;
}
</style>
