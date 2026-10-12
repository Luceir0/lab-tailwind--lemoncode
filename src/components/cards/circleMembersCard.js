import { icon } from "../ui/icons.js";
import { memberRow } from "./memberRow.js";

// Card "Personas en este círculo". Recibe { members } (data/members.js).
export function circleMembersCard({ members }) {
  return `
    <article class="surface-card flex flex-col rounded-2xl">
      <div class="flex items-center justify-between gap-2">
        <span class="text-2xs font-semibold tracking-wider text-fg-muted uppercase">Explorar miembros</span>
        <button
          type="button"
          class="inline-flex items-center gap-1 rounded-md px-1.5 py-1 text-xs font-medium text-brand-600 transition-colors hover:bg-brand-50 focus-visible:bg-brand-50 dark:text-brand-300 dark:hover:bg-brand-900/40 dark:focus-visible:bg-brand-900/40"
        >
          ${icon("filter", "size-3.5")}
          Filtrar
        </button>
      </div>
      <h3 class="mt-3 text-lg font-bold">Personas en este círculo</h3>
      <p class="mt-1 text-xs text-fg-muted">
        Haz clic en cualquier persona para ver únicamente las fotos donde aparece.
      </p>

      <ul class="mt-4 mb-6 flex flex-col gap-2">
        ${members.map(memberRow).join("")}
      </ul>

      <div class="mt-auto flex items-center justify-between gap-2 border-t border-outline pt-4 text-xs text-fg-muted">
        <span>Momentos que siempre van con vosotros</span>
        <span class="inline-flex items-center gap-1 font-semibold text-accent-mint-strong dark:text-accent-mint">
          ${icon("check", "size-3.5")}
          Privado
        </span>
      </div>
    </article>
  `;
}
