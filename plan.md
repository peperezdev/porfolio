"""# Plan de Desarrollo del Porfolio: Frontend AI Engineer

Este documento establece la hoja de ruta técnica y estratégica para construir un porfolio web moderno. El objetivo es posicionar un perfil profesional maduro que actúa como puente arquitectónico entre modelos complejos de Inteligencia Artificial (Backend/Data) y la experiencia del usuario (Frontend).

---

## 1. Visión y Objetivos del Proyecto

* **Rol Objetivo:** Desarrollador Frontend especializado en Integración de IA y Arquitectura de Cliente Web.
* **Tono de la Interfaz:** Profesional, minimalista, centrado en el rendimiento técnico y la claridad. Sin distracciones innecesarias.
* **Propósito:** Demostrar capacidad para orquestar asincronía, consumir APIs (REST/GraphQL), manejar estados complejos y organizar código limpio.

---

## 2. Arquitectura y Stack Tecnológico

La elección de tecnologías prioriza el rendimiento, la mantenibilidad y demuestra dominio de herramientas estándar de la industria actual.

### 2.1. Core Frontend
* **Framework:** Vue 3 (Composition API). Permite una separación lógica impecable mediante *composables*.
* **Build Tool:** Vite. Garantiza un entorno de desarrollo ultrarrápido.
* **Enrutamiento:** Vue Router (SPA - Single Page Application).
* **Gestión de Estado:** Pinia. Crucial para manejar flujos asíncronos en IA.

### 2.2. Estilos y UI
* **Framework CSS:** Tailwind CSS. Desarrollo rápido mediante clases utilitarias, manteniendo un bundle final muy ligero.
* **Iconografía:** Lucide Vue o Heroicons (versátiles y limpios).

### 2.3. Herramientas de Desarrollo y Despliegue
* **Entorno:** Windows 11 + WSL2 + JetBrains IDE (WebStorm/PhpStorm).
* **Control de Versiones:** Git + GitHub (repositorio público para mostrar los commits).
* **Hosting/Despliegue Continuo (CI/CD):** Vercel o Netlify.

---

## 3. Estructura del Proyecto (Scaffolding)

Organización orientada a dominio para mantener el código escalable:

```text
porfolio-frontend-ai/
├── public/                 # Assets estáticos (favicon, CV en PDF)
├── src/
│   ├── assets/             # Imágenes de proyectos, estilos globales
│   ├── components/         # UI reutilizable
│   │   ├── layout/         # Navbar.vue, Footer.vue
│   │   ├── ui/             # Button.vue, CardProject.vue, TechBadge.vue
│   ├── composables/        # Lógica reutilizable (ej. useScroll.js)
│   ├── router/             # Definición de rutas (index.js)
│   ├── stores/             # Estado global con Pinia (ej. uiStore.js)
│   ├── views/              # Vistas principales
│   │   ├── HomeView.vue
│   │   ├── ProjectDetailView.vue
│   │   └── AboutView.vue
│   ├── App.vue             # Componente raíz
│   └── main.js             # Punto de entrada y configuración de plugins
├── tailwind.config.js
├── vite.config.js
└── package.json