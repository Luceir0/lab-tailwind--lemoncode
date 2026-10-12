import { icon } from "./icons.js";

// Elemento de acordeón (<details> + collapse de daisyUI)
// { title, content, open, name } — mismo name = solo uno abierto a la vez
export function accordionItem({ title, content, open = false, name }) {
  return `
    <details
      class="collapse group rounded-2xl border border-outline bg-surface shadow-xs"
      ${name ? `name="${name}"` : ""}
      ${open ? "open" : ""}
    >
      <summary class="collapse-title flex items-center justify-between gap-4 p-5 font-semibold transition-colors hover:text-brand-600 sm:px-6">
        <span>${title}</span>
        <span
          class="grid size-7 shrink-0 place-items-center rounded-full bg-elevated text-fg-muted transition-transform duration-300 ease-standard group-open:rotate-180 motion-reduce:transition-none"
          aria-hidden="true"
        >
          ${icon("chevronDown", "size-4")}
        </span>
      </summary>
      <div class="collapse-content border-t border-outline px-5 leading-relaxed text-fg-secondary sm:px-6">
        <p class="pt-4">${content}</p>
      </div>
    </details>
  `;
}
