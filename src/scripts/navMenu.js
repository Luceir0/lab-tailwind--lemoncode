// Menú hamburguesa: abre / cierra el panel de enlaces del header (data-open)
export function initNavMenu({
  menu = "#site-menu",
  toggle = "#menu-toggle",
} = {}) {
  const menuEl = document.querySelector(menu);
  const toggleEl = document.querySelector(toggle);
  if (!menuEl || !toggleEl) return;

  function setOpen(open) {
    menuEl.dataset.open = String(open);
    toggleEl.setAttribute("aria-expanded", String(open));
  }

  toggleEl.addEventListener("click", () => {
    setOpen(toggleEl.getAttribute("aria-expanded") !== "true");
  });

  menuEl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
}
