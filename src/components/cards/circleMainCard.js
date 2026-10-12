import { icon } from "../ui/icons.js";
import { avatarGroup } from "../ui/avatarGroup.js";

// Card de álbum de círculo: foto con badges, "Me gusta", título y avatares,
// y pie con la última subida. Recibe un elemento de data/circles.js.
// Se adapta al ancho de su contenedor (@container), no al de la ventana.
// titleTag: etiqueta del título según su sitio en la página (h2, h3, p…)
// className: clases extra según dónde se coloque
export function circleMainCard({
  title,
  location,
  photos,
  people,
  tag,
  image,
  members,
  extraMembers,
  lastUpload,
  titleTag = "h3",
  className = "",
}) {
  const avatars = avatarGroup(members, {
    extra: extraMembers,
    className: "shrink-0 self-end -space-x-2",
    avatarClass: "border-0",
  });

  return `
    <article class="@container flex flex-col overflow-hidden rounded-2xl border border-outline bg-surface text-left ${className}">
      <div class="relative">
        <img
          src="${image}"
          alt=""
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
          class="aspect-4/5 h-auto w-full bg-elevated object-cover @card:aspect-4/3 @lg:aspect-video"
        />
        <div class="absolute inset-0 flex flex-col justify-between bg-linear-to-t from-black/90 via-black/70 via-30% to-transparent to-60% p-2 @card:p-3">
          <div class="flex items-start justify-between gap-2">
            <div class="flex min-w-0 flex-col items-start gap-1">
              <span
                class="badge badge-xs max-w-full border-0 bg-black/50 font-semibold text-white sm:badge-sm"
                title="${photos} fotos · ${people} personas"
              >
                <span class="truncate">${photos} fotos · ${people} personas</span>
              </span>
              <span
                class="badge badge-xs max-w-full border-0 bg-white/50 font-semibold text-black sm:badge-sm"
                title="#${tag}"
              >
                <span class="truncate">#${tag}</span>
              </span>
            </div>
            <button
              type="button"
              class="group btn btn-circle shrink-0 border-0 bg-white shadow-sm btn-xs hover:bg-white sm:btn-sm"
              aria-label="Me gusta"
              aria-pressed="true"
              data-press-toggle
            >
              ${icon(
                "heart",
                "size-3.5 fill-transparent text-fg-muted transition-[color,fill,scale] duration-300 ease-standard group-aria-pressed:fill-current group-aria-pressed:text-heart motion-safe:group-active:scale-75 sm:size-4",
              )}
            </button>
          </div>

          <div class="flex flex-col items-start gap-3 @2xs:flex-row @2xs:items-end @2xs:justify-between">
            <div class="min-w-0">
              <p class="hidden items-center gap-1 text-xs text-white/85 @card:flex">
                ${icon("pin", "size-3.5 shrink-0 text-accent-pink")}
                <span class="truncate">${location}</span>
              </p>
              <${titleTag} class="text-sm leading-tight font-bold text-white @card:mt-0.5 @card:text-lg @lg:text-3xl">${title}</${titleTag}>
            </div>
            ${avatars}
          </div>
        </div>
      </div>

      <div class="px-3 py-2.5 @card:px-4 @card:py-3">
        <p class="flex items-start gap-1.5 text-xs text-fg-muted">
          ${icon("clock", "size-3.5 shrink-0")}
          <span>Última foto subida por <strong class="text-fg">${lastUpload.by}</strong> ${lastUpload.when}</span>
        </p>
      </div>
    </article>
  `;
}
