// Temas de color: data-theme en <html>, guardado en localStorage
// El selector es un <details> con radios: el HTML no cambia, solo el atributo
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

export function initTheme(themeIds, pickerSelector = "#theme-picker") {
  const root = document.documentElement;
  const picker = document.querySelector(pickerSelector);
  const radios = picker?.querySelectorAll('input[name="theme"]') ?? [];

  function applyTheme(theme) {
    root.dataset.theme = theme;
    radios.forEach((radio) => {
      radio.checked = radio.value === theme;
    });
  }

  // Tema guardado (si sigue existiendo) o, si no, la preferencia del sistema
  const saved = getSavedTheme();
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(themeIds.includes(saved) ? saved : prefersDark ? "dark" : "light");

  if (!picker) return;

  picker.addEventListener("change", (event) => {
    applyTheme(event.target.value);
    saveTheme(event.target.value);
  });

  // Cerrar el desplegable al hacer clic fuera o con Escape
  document.addEventListener("click", (event) => {
    if (!picker.contains(event.target)) picker.open = false;
  });

  picker.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !picker.open) return;
    picker.open = false;
    picker.querySelector("summary")?.focus();
  });
}
