import { icon } from "./icons.js";

// Elemento de acordeón (<details> + collapse de daisyUI)
// { title, content, open, name } — mismo name = solo uno abierto a la vez
export function accordionItem({ title, content, open = false, name }) {
  return `
    <details
      class="collapse accordion group rounded-2xl"
      ${name ? `name="${name}"` : ""}
      ${open ? "open" : ""}
    >
      <summary class="collapse-title flex items-center justify-between gap-4 p-5 font-semibold sm:px-6">
        <span>${title}</span>
        <span class="accordion__icon" aria-hidden="true">
          ${icon("chevronDown", "size-4")}
        </span>
      </summary>
      <div class="collapse-content accordion__content px-5 sm:px-6">
        <p class="pt-4">${content}</p>
      </div>
    </details>
  `;
}
