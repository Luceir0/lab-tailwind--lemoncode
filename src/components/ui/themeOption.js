import { icon } from "./icons.js";

// Opción del selector de tema: radio oculto + muestra de color + nombre
// La muestra lleva data-theme, así lee las variables de su tema y no las de <html>
export function themeOption({ id, name }) {
  return `
    <label
      class="flex cursor-pointer items-center gap-3 rounded-field px-2 py-2 text-sm font-medium text-fg-secondary transition-colors
             hover:bg-elevated hover:text-fg
             has-checked:bg-brand-50 has-checked:text-brand-700
             has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-brand-500
             dark:has-checked:bg-brand-900/40 dark:has-checked:text-brand-200"
    >
      <input type="radio" name="theme" value="${id}" class="peer sr-only" />
      <span
        data-theme="${id}"
        class="grid size-6 shrink-0 place-items-center rounded-full border border-outline-strong bg-(--memora-bg-page)"
        aria-hidden="true"
      >
        <span class="size-2.5 rounded-full bg-(--memora-brand-500)"></span>
      </span>
      ${name}
      ${icon("check", "ml-auto hidden size-4 peer-checked:block")}
    </label>
  `;
}
