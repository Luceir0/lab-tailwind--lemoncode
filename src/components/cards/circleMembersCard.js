import { icon } from "../ui/icons.js";
import { memberRow } from "./memberRow.js";

// Card "Personas en este círculo". Recibe { members } (data/members.js).
export function circleMembersCard({ members }) {
  return `
    <article class="surface-card members-card">
      <div class="members-card__head">
        <span class="members-card__eyebrow">Explorar miembros</span>
        <button type="button" class="members-card__filter">
          ${icon("filter", "size-3.5")}
          Filtrar
        </button>
      </div>
      <h3 class="members-card__title">Personas en este círculo</h3>
      <p class="members-card__text">
        Haz clic en cualquier persona para ver únicamente las fotos donde aparece.
      </p>

      <ul class="members-card__list">
        ${members.map(memberRow).join("")}
      </ul>

      <div class="members-card__footer">
        <span>Momentos que siempre van con vosotros</span>
        <span class="members-card__private">
          ${icon("check", "size-3.5")}
          Privado
        </span>
      </div>
    </article>
  `;
}
