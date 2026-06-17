# Sistema de Analítica Custom para porfolio.peperez.es

Este documento consolida todo el análisis y la estrategia técnica para implementar un sistema propio de registro de visitas e interacciones, manteniendo el control total de los datos.

---

## 1. Stack Tecnológico y Justificación

* **Base de Datos: PostgreSQL**
    * *¿Por qué?* Ofrece el tipo de datos nativo `JSONB`. Esto es clave para rastrear interacciones, ya que el payload de un clic puede variar mucho (un enlace tiene `href`, un botón tiene un `id` o ciertas clases CSS). PostgreSQL te permite estructurar lo fijo (IP, navegador) y ser flexible con los metadatos sin alterar el esquema relacional.
* **Backend: Node.js**
    * *¿Por qué?* Destaca en operaciones de I/O no bloqueantes, el escenario exacto de un endpoint de analíticas que recibe muchas peticiones asíncronas concurrentes. Además, si tu porfolio está desarrollado con tecnologías web como Vue 3, te permite mantener un stack uniforme en JavaScript/TypeScript, gestionando eficientemente el proyecto en el backend con `pnpm`.
* **Despliegue: Docker y Docker Compose**
    * *¿Por qué?* Permite encapsular tanto la API en Node.js como la base de datos PostgreSQL, facilitando su autoalojamiento en entornos controlados como un NAS Synology de tu propio lab.

---

## 2. Modelo de Datos (Esquema SQL)

Se utilizan dos tablas para separar la sesión general de las acciones específicas.

```sql
-- Tabla principal: Sesiones y visitas a la página
CREATE TABLE IF NOT EXISTS page_views (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    visitor_hash VARCHAR(64) NOT NULL, -- Hash de IP + UserAgent para privacidad
    country VARCHAR(100),
    os VARCHAR(50),
    browser VARCHAR(50),
    referrer TEXT,
    viewed_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabla secundaria: Interacciones (Clics)
CREATE TABLE IF NOT EXISTS interactions (
    id SERIAL PRIMARY KEY,
    page_view_id UUID REFERENCES page_views(id) ON DELETE CASCADE,
    element_type VARCHAR(10) NOT NULL,  -- 'button', 'a'
    element_id VARCHAR(100),
    element_text TEXT,
    target_url TEXT,
    metadata JSONB,                     -- Para cualquier otro dato extra
    clicked_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Índices de optimización
CREATE INDEX idx_page_views_date ON page_views(viewed_at);
CREATE INDEX idx_interactions_view_id ON interactions(page_view_id);
```

---

## 3. Arquitectura del Backend (Node.js)

El servidor tendrá dos responsabilidades clave: procesar los endpoints y enriquecer los datos sin depender del cliente.

**Inicialización del proyecto:**
```bash
pnpm init
pnpm add express pg cors geoip-lite ua-parser-js
```

**Lógica de Enriquecimiento (Servidor):**
1.  **IP y País:** El frontend no debe enviar la IP. El backend la captura mediante `req.headers['x-forwarded-for']` o `req.socket.remoteAddress`. Esta IP se cruza con una base de datos local (como *GeoLite2* o usando el paquete *geoip-lite*) para obtener el país sin enviar datos a terceros.
2.  **Sistema Operativo y Navegador:** Se extraen analizando la cabecera HTTP `User-Agent` usando `ua-parser-js`.
3.  **Privacidad:** La IP no se guarda en texto plano, se aplica una función Hash (ej. SHA-256 combinando IP y fecha del día) para identificar un usuario único durante el día sin retener información personal sensible.

**Endpoints:**
* `POST /api/analytics/visit`: Retorna un UUID (`page_view_id`) al frontend.
* `POST /api/analytics/click`: Recibe el `page_view_id` y el payload de la interacción para guardarlo en la tabla `interactions`.

---

## 4. Captura de Datos en el Frontend

Para no sobrecargar el DOM ni afectar el rendimiento del porfolio (especialmente importante en single-page applications hechas en Vue 3), se utiliza **Delegación de Eventos**.

```javascript
// 1. Registrar la visita inicial al cargar la web
async function registerVisit() {
    const response = await fetch('[https://api.peperez.es/api/analytics/visit](https://api.peperez.es/api/analytics/visit)', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ referrer: document.referrer })
    });
    const data = await response.json();
    sessionStorage.setItem('page_view_id', data.id);
}

// Ejecutar al montar la app
registerVisit();

// 2. Interceptar todos los clics globales de forma eficiente
document.addEventListener('click', (event) => {
    // Buscar si el objetivo o sus contenedores son un enlace o botón
    const target = event.target.closest('a, button');
    
    if (!target) return; // Ignorar clics en áreas vacías

    const payload = {
        page_view_id: sessionStorage.getItem('page_view_id'),
        element_type: target.tagName.toLowerCase(),
        element_id: target.id || null,
        element_text: target.innerText.trim() || target.getAttribute('aria-label'),
        target_url: target.tagName.toLowerCase() === 'a' ? target.href : null,
        metadata: {
            classes: target.className
        }
    };

    // Usar sendBeacon garantiza que el navegador envíe el evento 
    // incluso si el usuario está cerrando la pestaña o navegando a otra URL.
    const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
    navigator.sendBeacon('[https://api.peperez.es/api/analytics/click](https://api.peperez.es/api/analytics/click)', blob);
});
```

Este enfoque te asegura una infraestructura ligera, fácilmente contenida y desplegable mediante Docker, utilizando tus herramientas preferidas de desarrollo.