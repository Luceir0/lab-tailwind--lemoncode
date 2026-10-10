// Menú hamburguesa: abre / cierra el panel de enlaces del header
export function initNavMenu({
  nav = ".site-nav",
  toggle = "#menu-toggle",
  links = "#site-menu a",
} = {}) {
  const navEl = document.querySelector(nav);
  const toggleEl = document.querySelector(toggle);
  if (!navEl || !toggleEl) return;

  function setOpen(open) {
    navEl.dataset.open = String(open);
    toggleEl.setAttribute("aria-expanded", String(open));
  }

  toggleEl.addEventListener("click", () => {
    setOpen(toggleEl.getAttribute("aria-expanded") !== "true");
  });

  document.querySelectorAll(links).forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
}
