/**
 * Composable para configurar animaciones en la página.
 * Inicializa observadores de intersección (Intersection Observer) para animar elementos al hacer scroll,
 * y configura el comportamiento de desplazamiento suave (smooth scroll) para los enlaces de navegación.
 */
export function usePageAnimations() {
  /**
   * Opciones de configuración para el IntersectionObserver.
   * `threshold: 0.1` indica que la animación se disparará cuando el 10% del elemento sea visible.
   * `rootMargin` ajusta el área de detección.
   */
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }

  /**
   * Instancia de IntersectionObserver para observar la visibilidad de los elementos en pantalla.
   * Al entrar en la vista (`isIntersecting`), intercambia las clases de Tailwind
   * para aplicar una transición de opacidad y desplazamiento.
   */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0')
        entry.target.classList.remove('opacity-0', 'translate-y-10')
      }
    })
  }, observerOptions)

  /**
   * Colección de elementos del DOM que serán animados al hacer scroll.
   * Selecciona elementos específicos como tarjetas, encabezados y párrafos.
   */
  const animatedElements = document.querySelectorAll(
    '.bento-card, section h1, section p, .grid > div',
  )
  animatedElements.forEach((el) => {
    el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700', 'ease-out')
    observer.observe(el)
  })

  /**
   * Configura el desplazamiento suave (smooth scroll) al hacer clic en los enlaces 
   * de navegación interna (`nav a`) que apuntan a un ancla (ID).
   */
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
}
