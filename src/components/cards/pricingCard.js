import { icon } from "../ui/icons.js";
import { formatPrice } from "../../utils/format.js";

// Card de plan de precios. Variante destacada con featured: true.
// Recibe un elemento de data/plans.js. data-monthly / data-yearly
// guardan los dos importes para el selector de facturación.
export function pricingCard({
  name,
  description,
  image,
  imageAlt,
  price,
  features,
  cta,
  featured,
  badge,
}) {
  const featureItems = features
    .map(
      (feature) => `
        <li class="flex items-start gap-3">
          <span class="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent-mint-soft text-accent-mint">
            ${icon("check", "size-3")}
          </span>
          ${feature}
        </li>`,
    )
    .join("");

  const badgeHtml =
    featured && badge
      ? `<span class="badge badge-sm absolute -top-3 left-1/2 h-auto -translate-x-1/2 gap-1 rounded-full border-0 bg-brand-600 px-3 py-1 font-semibold whitespace-nowrap text-white uppercase">
          ${icon("sparkles", "size-3")}
          ${badge}
        </span>`
      : "";

  const cardClass = featured
    ? "border-2 border-brand-500 shadow-brand"
    : "border border-outline shadow-sm";

  const buttonClass = featured
    ? "btn btn-primary shadow-brand"
    : "btn border-0 bg-brand-100 text-brand-700 hover:bg-brand-200 dark:bg-brand-900/40 dark:text-brand-200 dark:hover:bg-brand-900/60";

  return `
    <article
      class="relative flex flex-col rounded-2xl bg-surface p-6 transition-[box-shadow,translate] duration-500 ease-standard hover:shadow-brand-lg motion-safe:hover:-translate-y-1 sm:p-8 ${cardClass}"
    >
      ${badgeHtml}
      <h3 class="text-2xl font-bold">${name}</h3>
      <p class="mt-2 text-sm text-fg-secondary">${description}</p>

      <img
        src="${image}"
        alt="${imageAlt}"
        width="800"
        height="400"
        loading="lazy"
        decoding="async"
        class="mt-6 aspect-2/1 w-full rounded-xl bg-elevated object-cover"
      />

      <p class="mt-4 flex items-baseline gap-2 border-b border-outline pb-4">
        <span
          class="text-5xl font-extrabold tracking-tight"
          data-monthly="${formatPrice(price.monthly)}"
          data-yearly="${formatPrice(price.yearly)}"
        >${formatPrice(price.monthly)}</span>
        <span class="text-sm text-fg-muted">/ mes</span>
      </p>

      <ul class="mt-4 mb-8 flex flex-col gap-3 text-sm text-fg-secondary">
        ${featureItems}
      </ul>

      <a href="#" class="${buttonClass} mt-auto">${cta}</a>
    </article>
  `;
}
