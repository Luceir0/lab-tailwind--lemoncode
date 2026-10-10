// Modo claro / oscuro: data-theme en <html>, guardado en localStorage
const STORAGE_KEY = "memora-theme";

function getSavedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Sin almacenamiento: el tema dura hasta recargar
  }
}

export function initTheme(toggleSelector = "#theme-toggle") {
  const root = document.documentElement;
  const toggle = document.querySelector(toggleSelector);

  function applyTheme(theme) {
    root.dataset.theme = theme;
    toggle?.setAttribute("aria-pressed", String(theme === "dark"));
  }

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(getSavedTheme() ?? (prefersDark ? "dark" : "light"));

  toggle?.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    saveTheme(next);
  });
}
