const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3002'

export async function initAnalytics() {
  try {
    // 1. Registrar la visita al entrar a la web
    const response = await fetch(`${API_URL}/api/analytics/visit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ referrer: document.referrer }),
    })

    if (!response.ok) return

    const data = await response.json()

    const pageViewId = data.id

    // Si por algún motivo falló el backend, no intentamos registrar clics
    if (!pageViewId) return

    // 2. Interceptar todos los clics a nivel global (Delegación de eventos)
    document.addEventListener('click', (event) => {
      if (!event.target) return

      // Buscar si el objetivo clickado o sus contenedores son un enlace o botón
      const target = (event.target as HTMLElement).closest('a, button')
      if (!target) return // Sí el clic es en un área vacía, ignorarlo

      // Objeto con información de posición y tamaño del elemento
      const rec = target.getBoundingClientRect()

      // Preparamos los datos tal y como nos los pide el endpoint de clics
      const payload = {
        pageViewId: pageViewId,
        eventType: target.tagName,
        elementId: target.id || null,
        elementtext: target.textContent?.trim() || target.getAttribute('aria-label') || null,
        targetUrl: target.tagName.toLowerCase() === 'a' ? (target as HTMLAnchorElement).href : null,
        metadata: {
          // Posición X e Y pero DENTRO del botón (de 0 al ancho del botón)
          clickOffsetX: Math.round(event.clientX - rec.left),
          clickOffsetY: Math.round(event.clientX - rec.top),

          // Guardamos también las dimensiones del botón por si cambian en móvil
          elementWidth: Math.round(rec.width),
          elementHeight: Math.round(rec.height),

          // Y mantenemos el tamaño de pantalla por si quieres segmentar (Móvil vs PC)
          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight,
        },
      }

      // Usar sendBeacon garantiza que el navegador envíe el evento
      // incluso si el usuario está cerrando la pestaña o yéndose a otro enlace.
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
      navigator.sendBeacon(`${API_URL}/api/analytics/click`, blob)
    })
  } catch (error) {
    console.error('Error de envio de eventos', error)
  }
}
