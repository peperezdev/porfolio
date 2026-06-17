# Sistema de Temas (Light/Dark)

Este proyecto incluye un sistema de temas implementado con variables CSS de Tailwind que permite cambiar entre modo claro y oscuro.

## Características

✅ **Temas personalizados** basados en los archivos de diseño
✅ **Persistencia** - El tema elegido se guarda en localStorage
✅ **Respeto de preferencias del sistema** - Detecta automáticamente el tema preferido del usuario
✅ **Transiciones suaves** - Los cambios de tema tienen transiciones CSS
✅ **Integración con Tailwind** - Todos los colores están disponibles como clases Tailwind

## Archivos Creados

### 1. **`src/styles/themes.css`**
Define todas las variables CSS personalizadas para los temas light y dark.

```css
:root,
[data-theme="light"] {
  --color-primary: #3526c9;
  --color-surface: #fcf8ff;
  /* ... más colores ... */
}

[data-theme="dark"] {
  --color-primary: #c0c1ff;
  --color-surface: #0b1326;
  /* ... más colores ... */
}
```

### 2. **`src/composables/useTheme.ts`**
Composable de Vue 3 para gestionar los temas.

```typescript
const { theme, isDark, setTheme, toggleTheme, initTheme, watchSystemPreference } = useTheme()
```

### 3. **`src/components/ThemeSwitcher.vue`**
Componente de ejemplo que muestra cómo cambiar entre temas.

### 4. **`tailwind.config.js`** (Actualizado)
Configuración de Tailwind con todos los colores mapeados a variables CSS.

## Uso

### En Componentes Vue

```vue
<template>
  <div class="bg-surface text-on-surface">
    <h1 class="text-primary">Hola Mundo</h1>
    <button 
      @click="toggleTheme"
      class="bg-primary text-on-primary"
    >
      Cambiar Tema
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'

const { theme, isDark, toggleTheme } = useTheme()
</script>
```

### Clases Tailwind Disponibles

Puedes usar cualquiera de estos colores como clases de Tailwind:

```html
<!-- Colores de Surface -->
<div class="bg-surface text-on-surface"></div>
<div class="bg-surface-container"></div>

<!-- Colores Primarios -->
<button class="bg-primary text-on-primary"></button>
<div class="bg-primary-container text-on-primary-container"></div>

<!-- Colores Secundarios -->
<div class="bg-secondary text-on-secondary"></div>

<!-- Colores Terciarios -->
<div class="bg-tertiary text-on-tertiary"></div>

<!-- Estados de Error -->
<div class="bg-error text-on-error"></div>
```

## Métodos del Composable

### `setTheme(theme: 'light' | 'dark')`
Establece el tema manualmente.

```ts
const { setTheme } = useTheme()
setTheme('dark')
```

### `toggleTheme()`
Cambia entre light y dark.

```ts
const { toggleTheme } = useTheme()
toggleTheme()
```

### `initTheme()`
Inicializa el tema al cargar la app (se llama automáticamente en main.ts).

### `watchSystemPreference()`
Escucha cambios en las preferencias del sistema operativo.

## Atributos del Tema

El tema se controla mediante el atributo `data-theme` en el elemento raíz `<html>`:

```html
<!-- Modo Claro -->
<html data-theme="light">

<!-- Modo Oscuro -->
<html data-theme="dark">
```

## Persistencia

El tema se guarda en localStorage. Si el usuario selecciona un tema, se recordará en futuras visitas.

```typescript
localStorage.getItem('theme') // 'light' o 'dark' o null
```

## Preferencias del Sistema

Si no hay tema guardado en localStorage, la app respetará las preferencias del sistema operativo:

```typescript
window.matchMedia('(prefers-color-scheme: dark)').matches
```

## Variables CSS Disponibles

### Surfaces
- `--color-surface`
- `--color-surface-container`
- `--color-surface-container-low`
- `--color-surface-container-high`
- Y más...

### Colores Semánticos
- `--color-primary` / `--color-on-primary`
- `--color-secondary` / `--color-on-secondary`
- `--color-tertiary` / `--color-on-tertiary`
- `--color-error` / `--color-on-error`

### Outlines
- `--color-outline`
- `--color-outline-variant`

## Ejemplo Completo

Usa el componente `ThemeSwitcher.vue` como referencia para implementar tu propio selector de temas.

```vue
<script setup lang="ts">
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
</script>

<template>
  <ThemeSwitcher />
</template>
```

## Fuentes de Diseño

Los temas se basan en los siguientes archivos de plantilla:
- `plantillas/synthetix_engineering_2/DESIGN_light.md` (Tema Claro)
- `plantillas/synthetix_engineering_1/DESIGN_dark.md` (Tema Oscuro)

