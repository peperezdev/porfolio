# Etapa 1: Build de la aplicación
FROM node:22-alpine AS builder

# Habilitar pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json ./

# Instalar dependencias sin lockfile congelado para poder bajar los binarios de Linux
RUN pnpm install

# Copiar el resto del código
COPY . .

# Inyectar la variable de entorno en el momento de compilación
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Construir la aplicación
RUN pnpm build

# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine

# Copiar el build generado en la etapa anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar la configuración personalizada de Nginx para Vue Router
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/

# Exponer el puerto 80 (el que usa Nginx internamente)
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
