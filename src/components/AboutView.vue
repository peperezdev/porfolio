<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <Header />
  <main class="pt-10 pb-5 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
    <!-- Hero Split Section -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center mb-xl md:mb-32">
      <div class="order-2 lg:order-1">
        <span
          class="inline-block px-3 py-1 bg-primary-fixed text-on-primary-fixed font-label-md text-label-md rounded-full mb-md"
          >WHO I AM</span
        >
        <h1
          class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-md"
        >
          Architecting Neural Interfaces &amp;
          <span class="text-primary">Scalable AI Systems.</span>
        </h1>
        <p class="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-lg">
          I bridge the gap between complex machine learning models and high-performance frontend
          architectures. With a decade of experience in systems engineering, my focus is on building
          interfaces that don't just display data, but orchestrate intelligence.
        </p>
        <div class="flex flex-wrap gap-md">
          <button
            class="px-lg py-sm bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:shadow-lg transition-all active:scale-95"
          >
            Download CV
          </button>
          <button
            class="px-lg py-sm border border-outline-variant text-on-surface font-label-md text-label-md rounded-lg hover:bg-surface-container-low transition-all"
          >
            View Github
          </button>
        </div>
      </div>
      <div
        class="order-1 lg:order-2 relative aspect-[4/3] md:aspect-square lg:aspect-auto h-full min-h-[400px] rounded-xl overflow-hidden shadow-sm border border-outline-variant"
      >
        <img
          alt="Engineer Workspace"
          class="absolute inset-0 w-full h-full object-cover"
          data-alt="A clean, professional workspace showing a high-end engineering workstation with multiple monitors displaying complex code and data visualizations. The lighting is soft and natural from a large window, creating a serene light-mode aesthetic. The desk is organized with minimalist accessories and a subtle plant, emphasizing a focused and highly technical professional environment. The overall mood is sophisticated and reliable, with a palette of whites, soft greys, and indigo accents."
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBl_6keymV9Qq7bH-ENmtr3AJ8zJ3WzwL_GYQSgGhdeerAG85dCGu39L0z-EHsJHRbE_dpibebUYfK08qCsW44jMLQebSl9MFVAbG90nKCVxPq_HiAlH9dsM5LvAMJLN3RIc7ovSC8PCSeXvbmz7JZru3aYYgqAbPGfQZEKAhxiQD0ERJ9iGlxJjqK3TBurjDafZCaSsWBF0El0vuAiPsJWBZu7h0qkJMdwmmPaXyey79rqOhgP5qMW1o2AJtJJIcL4V0Du9zSLmE"
        />
        <div class="absolute bottom-md right-md glass-panel p-md border border-white/40 rounded-lg">
          <p class="font-mono-code text-mono-code text-primary">Location: San Francisco, CA</p>
          <p class="font-label-md text-label-md text-on-surface-variant">
            Available for remote lead roles
          </p>
        </div>
      </div>
    </section>
    <!-- Bento Grid: Core Stack -->
    <section class="mb-32">
      <div class="flex flex-col md:flex-row justify-between items-end mb-lg gap-md">
        <div>
          <h2 class="font-headline-md text-headline-md text-on-surface">Core Stack</h2>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Technological foundations I rely on daily.
          </p>
        </div>
        <div class="font-label-md text-label-md text-outline">v4.2.0 Stable</div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-md">
        <!-- Large Feature Card -->
        <div
          class="md:col-span-2 lg:row-span-2 bg-surface-container-lowest border border-outline-variant rounded-xl p-lg flex flex-col justify-between"
        >
          <div>
            <span
              class="material-symbols-outlined text-primary mb-md"
              style="font-variation-settings: 'opsz' 48"
              >terminal</span
            >
            <h3 class="font-headline-sm text-headline-sm mb-sm">Fullstack Architecture</h3>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Building end-to-end systems with TypeScript, Rust, and Go. Specializing in
              high-throughput APIs and distributed state management.
            </p>
          </div>
          <div class="mt-xl flex flex-wrap gap-sm">
            <span
              class="px-sm py-1 bg-surface-container text-on-surface-variant font-mono-code text-mono-code rounded"
              >Node.js</span
            >
            <span
              class="px-sm py-1 bg-surface-container text-on-surface-variant font-mono-code text-mono-code rounded"
              >Next.js</span
            >
            <span
              class="px-sm py-1 bg-surface-container text-on-surface-variant font-mono-code text-mono-code rounded"
              >PostgreSQL</span
            >
          </div>
        </div>
        <!-- Bento Item 2 -->
        <div class="bg-surface-container-low border border-outline-variant rounded-xl p-md">
          <div class="flex items-center gap-sm mb-sm">
            <span class="material-symbols-outlined text-secondary">psychology</span>
            <h4 class="font-label-md text-label-md font-bold">ML &amp; AI</h4>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Vector databases, LLM orchestration, and PyTorch fine-tuning.
          </p>
        </div>
        <!-- Bento Item 3 -->
        <div class="bg-surface-container-low border border-outline-variant rounded-xl p-md">
          <div class="flex items-center gap-sm mb-sm">
            <span class="material-symbols-outlined text-secondary">layers</span>
            <h4 class="font-label-md text-label-md font-bold">UI Frameworks</h4>
          </div>
          <p class="font-body-md text-body-md text-on-surface-variant">
            React, Tailwind CSS, and custom Design System development.
          </p>
        </div>
        <!-- Bento Item 4 (Horizontal on desktop) -->
        <div
          class="lg:col-span-2 bg-white border border-outline-variant rounded-xl p-md flex items-center justify-between"
        >
          <div>
            <h4 class="font-label-md text-label-md font-bold text-on-surface">Cloud Native</h4>
            <p class="font-body-md text-body-md text-on-surface-variant">
              Kubernetes, Docker, AWS (Lambda/S3/EC2)
            </p>
          </div>
          <span class="material-symbols-outlined text-outline-variant" style="font-size: 40px"
            >cloud</span
          >
        </div>
      </div>
    </section>
    <!-- Methodology: Responsive Multi-Column -->
    <section class="mb-32">
      <div class="text-center mb-xl max-w-2xl mx-auto">
        <h2 class="font-headline-md text-headline-md text-on-surface mb-sm">
          Operational Methodology
        </h2>
        <p class="font-body-md text-body-md text-on-surface-variant">
          My approach to solving engineering challenges involves a strict iterative process focused
          on reliability and speed.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
        <!-- Step 1 -->
        <div
          class="relative p-lg border border-outline-variant/30 bg-surface-container-lowest rounded-xl hover:bg-white transition-colors group"
        >
          <div
            class="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold"
          >
            1
          </div>
          <h5
            class="font-headline-sm text-headline-sm mb-md group-hover:text-primary transition-colors"
          >
            Analyze &amp; Scope
          </h5>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Deconstructing business requirements into technical specifications with a focus on edge
            cases and scalability constraints.
          </p>
          <div class="mt-md border-t border-outline-variant/20 pt-md">
            <span class="font-label-md text-label-md text-secondary">KPI: Precision</span>
          </div>
        </div>
        <!-- Step 2 -->
        <div
          class="relative p-lg border border-outline-variant/30 bg-surface-container-lowest rounded-xl hover:bg-white transition-colors group"
        >
          <div
            class="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold"
          >
            2
          </div>
          <h5
            class="font-headline-sm text-headline-sm mb-md group-hover:text-primary transition-colors"
          >
            Prototype &amp; Iterate
          </h5>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Rapid creation of functional MVPs followed by data-driven iteration cycles to refine
            performance and UX flow.
          </p>
          <div class="mt-md border-t border-outline-variant/20 pt-md">
            <span class="font-label-md text-label-md text-secondary">KPI: Velocity</span>
          </div>
        </div>
        <!-- Step 3 -->
        <div
          class="relative p-lg border border-outline-variant/30 bg-surface-container-lowest rounded-xl hover:bg-white transition-colors group md:col-span-2 lg:col-span-1"
        >
          <div
            class="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold"
          >
            3
          </div>
          <h5
            class="font-headline-sm text-headline-sm mb-md group-hover:text-primary transition-colors"
          >
            Deploy &amp; Observe
          </h5>
          <p class="font-body-md text-body-md text-on-surface-variant">
            Automated deployment pipelines with rigorous observability hooks to monitor real-time
            system health and user behavior.
          </p>
          <div class="mt-md border-t border-outline-variant/20 pt-md">
            <span class="font-label-md text-label-md text-secondary">KPI: Stability</span>
          </div>
        </div>
      </div>
    </section>
    <!-- Stats Counter -->
    <section
      class="grid grid-cols-2 lg:grid-cols-4 gap-md mb-32 bg-surface-container p-xl rounded-2xl border border-outline-variant/50"
    >
      <div class="text-center">
        <div class="font-headline-lg text-headline-lg text-primary">10+</div>
        <div class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
          Years Experience
        </div>
      </div>
      <div class="text-center">
        <div class="font-headline-lg text-headline-lg text-primary">150+</div>
        <div class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
          Projects Shipped
        </div>
      </div>
      <div class="text-center">
        <div class="font-headline-lg text-headline-lg text-primary">24k</div>
        <div class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
          Github Commits
        </div>
      </div>
      <div class="text-center">
        <div class="font-headline-lg text-headline-lg text-primary">12</div>
        <div class="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
          Open Source Libs
        </div>
      </div>
    </section>
    <!-- CTA Section -->
    <section class="mb-32 bg-primary text-on-primary rounded-3xl p-xl overflow-hidden relative">
      <div class="relative z-10 max-w-xl">
        <h2 class="font-headline-lg text-headline-lg mb-md">
          Ready to build the future of AI interfaces?
        </h2>
        <p class="font-body-lg text-body-lg mb-lg opacity-90">
          I'm always looking for ambitious projects and talented teams to collaborate with. Let's
          discuss your next engineering challenge.
        </p>
        <div class="flex gap-md">
          <button
            class="px-xl py-md bg-white text-primary font-bold rounded-xl hover:bg-surface-container-lowest transition-all"
          >
            Get in Touch
          </button>
        </div>
      </div>
      <!-- Decorative Pattern -->
      <div class="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg class="w-full h-full fill-current" viewbox="0 0 100 100">
          <pattern height="10" id="grid" patternunits="userSpaceOnUse" width="10">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" stroke-width="0.5"></path>
          </pattern>
          <rect fill="url(#grid)" height="100" width="100"></rect>
        </svg>
      </div>
    </section>
  </main>
  <Footer />
</template>

<style scoped>

</style>
