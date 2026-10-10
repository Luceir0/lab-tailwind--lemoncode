// Pinta una lista de datos con un componente dentro de un contenedor
export function render(selector, items, component) {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = items.map(component).join("");
}
