const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

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
      if (!target) return // Si el clic es en un área vacía, ignorarlo

      // Preparamos los datos tal y como nos los pide el endpoint de clics
      const payload = {
        pageViewId: pageViewId,
        eventType: target.tagName,
        elementId: target.id || null,
        elementText:
          (target as HTMLAnchorElement).innerText?.trim() ||
          target.getAttribute('aria-label') ||
          null,
        targetUrl: target.tagName.toLowerCase() === 'a' ? (target as HTMLAnchorElement).href : null,
        metadata: {
          classes: target.className,
        },
      }

      // Usar sendBeacon garantiza que el navegador envíe el evento
      // incluso si el usuario está cerrando la pestaña o yéndose a otro enlace.
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
      navigator.sendBeacon(`${API_URL}/api/analytics/click`, blob)

      // console.log('click enviado', payload)
    })
  } catch (error) {
    console.error('Error de envio de eventos', error)
  }
}
