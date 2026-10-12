// Fila seleccionable de una persona (avatar, nombre, rol y nº de fotos)
// Recibe una persona de data/members.js.
export function memberRow({ name, role, photos, avatar }) {
  return `
    <li>
      <button
        type="button"
        class="flex w-full items-center gap-3 rounded-xl border border-outline bg-subtle p-2.5 text-left transition-colors
               hover:border-brand-200 hover:bg-brand-50/60 focus-visible:border-brand-400
               aria-pressed:border-brand-400 aria-pressed:bg-brand-50
               dark:hover:border-brand-800 dark:hover:bg-brand-900/30
               dark:aria-pressed:border-brand-600 dark:aria-pressed:bg-brand-900/40"
        aria-pressed="false"
        data-press-toggle
      >
        <img src="${avatar}" alt="" width="96" height="96" loading="lazy" decoding="async" class="size-9 shrink-0 rounded-full bg-elevated object-cover" />
        <span class="flex min-w-0 flex-1 flex-col">
          <span class="truncate text-sm font-semibold">${name}</span>
          <span class="truncate text-2xs text-fg-muted">${role}</span>
        </span>
        <span class="badge badge-sm shrink-0 border-0 bg-brand-50 font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-200">
          ${photos} fotos
        </span>
      </button>
    </li>
  `;
}
