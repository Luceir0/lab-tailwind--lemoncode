// Fila seleccionable de una persona (avatar, nombre, rol y nº de fotos)
// Recibe una persona de data/members.js.
export function memberRow({ name, role, photos, avatar }) {
  return `
    <li>
      <button type="button" class="member-row" aria-pressed="false">
        <img src="${avatar}" alt="" width="96" height="96" loading="lazy" decoding="async" class="member-row__avatar" />
        <span class="member-row__info">
          <span class="member-row__name">${name}</span>
          <span class="member-row__role">${role}</span>
        </span>
        <span class="badge badge-sm shrink-0 border-0 bg-brand-50 font-semibold text-brand-700 dark:bg-brand-900/40 dark:text-brand-200">
          ${photos} fotos
        </span>
      </button>
    </li>
  `;
}
