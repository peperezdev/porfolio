# Portfolio

Un proyecto de portfolio profesional moderno construido con tecnologías de vanguardia para garantizar un alto rendimiento y una excelente experiencia de usuario.

## 🛠 Tecnologías Principales

- **[Vue 3](https://vuejs.org/)** (Composition API & `<script setup>`)
- **[Vite](https://vitejs.dev/)** (Empaquetador y servidor de desarrollo ultrarrápido)
- **[Tailwind CSS v4](https://tailwindcss.com/)** (Framework CSS de utilidades)
- **[DaisyUI v5](https://daisyui.com/)** (Biblioteca de componentes UI para Tailwind)
- **[TypeScript](https://www.typescriptlang.org/)** (Tipado estático seguro)
- **[Pinia](https://pinia.vuejs.org/)** (Gestor de estado)
- **[Vue Router](https://router.vuejs.org/)** (Enrutamiento)

## 📦 Instalación y Configuración

El proyecto utiliza [pnpm](https://pnpm.io/) como gestor de paquetes. Asegúrate de tenerlo instalado.

```sh
# Instalar dependencias
pnpm install
```

## 🚀 Scripts de Desarrollo

### Servidor de Desarrollo (Hot-Reload)
```sh
pnpm dev
```

### Compilar y Minificar para Producción
```sh
pnpm build
```

### Comprobación de Tipos (Type-Check)
```sh
pnpm type-check
```

### Linter (ESLint & Oxlint)
```sh
pnpm lint
```

## 🎨 Sistema de Temas y Estilos

Este proyecto utiliza **Tailwind CSS v4** integrado directamente mediante el plugin de Vite (`@tailwindcss/vite`). La configuración de utilidades y plugins (como DaisyUI) se realiza de forma nativa en el CSS principal (`src/assets/styles/style.css`), aprovechando el nuevo sistema de escaneo automático de la versión 4.

El sistema de colores personalizados y variables de diseño global está definido y documentado en `src/assets/styles/themes.css`.

## ⚙️ Entorno de Desarrollo Recomendado

- [VS Code](https://code.visualstudio.com/)
- [Vue - Official Extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (Desactivar Vetur).
