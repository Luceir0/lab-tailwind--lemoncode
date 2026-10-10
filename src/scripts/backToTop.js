// Botón "Volver arriba": visible tras hacer scroll; sube y lleva el foco al inicio
export function initBackToTop({
  button = "#back-to-top",
  focusTarget = ".site-nav .logo",
  offset = 400,
} = {}) {
  const buttonEl = document.querySelector(button);
  if (!buttonEl) return;

  function update() {
    buttonEl.dataset.visible = String(window.scrollY > offset);
  }

  update();
  window.addEventListener("scroll", update, { passive: true });

  buttonEl.addEventListener("click", () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    document.querySelector(focusTarget)?.focus({ preventScroll: true });
  });
}
