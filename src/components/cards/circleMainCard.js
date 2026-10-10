import { icon } from "../ui/icons.js";
import { avatarGroup } from "../ui/avatarGroup.js";

// Card de álbum de círculo: foto con badges, "Me gusta", título y avatares,
// y pie con la última subida. Recibe un elemento de data/circles.js.
// titleTag: etiqueta del título según su sitio en la página (h2, h3, p…)
export function circleMainCard({
  title,
  location,
  photos,
  people,
  tag,
  cover,
  image,
  members,
  extraMembers,
  lastUpload,
  titleTag = "h3",
}) {
  const media = image
    ? `<img src="${image}" alt="" width="800" height="600" loading="lazy" decoding="async" class="circle-card__image" />`
    : `<div class="circle-card__image ${cover}"></div>`;

  const avatars = avatarGroup(members, {
    extra: extraMembers,
    className: "circle-card__avatars -space-x-2",
    avatarClass: "border-0",
  });

  return `
    <article class="circle-card">
      <div class="circle-card__media">
        ${media}
        <div class="circle-card__overlay">
          <div class="circle-card__row items-start">
            <div class="circle-card__badges">
              <span
                class="badge badge-xs sm:badge-sm circle-card__badge border-0 bg-black/50 text-white"
                title="${photos} fotos · ${people} personas"
              >
                <span class="truncate">${photos} fotos · ${people} personas</span>
              </span>
              <span
                class="badge badge-xs sm:badge-sm circle-card__badge border-0 bg-white/50 text-black"
                title="#${tag}"
              >
                <span class="truncate">#${tag}</span>
              </span>
            </div>
            <button
              type="button"
              class="btn btn-circle btn-xs sm:btn-sm like-button border-0 bg-white shadow-sm hover:bg-white"
              aria-label="Me gusta"
              aria-pressed="true"
            >
              ${icon("heart", "")}
            </button>
          </div>

          <div class="circle-card__bottom">
            <div class="min-w-0">
              <p class="circle-card__location">
                ${icon("pin", "size-3.5 shrink-0 text-accent-pink")}
                <span class="truncate">${location}</span>
              </p>
              <${titleTag} class="circle-card__title">${title}</${titleTag}>
            </div>
            ${avatars}
          </div>
        </div>
      </div>

      <div class="circle-card__footer">
        <p class="circle-card__meta">
          ${icon("clock", "size-3.5 shrink-0")}
          <span>Última foto subida por <strong class="text-fg">${lastUpload.by}</strong> ${lastUpload.when}</span>
        </p>
      </div>
    </article>
  `;
}
