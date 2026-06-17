export function usePageAnimations() {
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
}
