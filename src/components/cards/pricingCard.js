import { icon } from "../ui/icons.js";
import { formatPrice } from "../../utils/format.js";

// Card de plan de precios. Variante destacada con featured: true.
// Recibe un elemento de data/plans.js. data-monthly / data-yearly
// guardan los dos importes para el selector de facturación.
export function pricingCard({ name, description, price, features, cta, featured, badge }) {
  const featureItems = features
    .map(
      (feature) => `
        <li>
          <span class="pricing-card__check">${icon("check", "size-3")}</span>
          ${feature}
        </li>`,
    )
    .join("");

  const badgeHtml =
    featured && badge
      ? `<span class="badge badge-sm pricing-card__badge h-auto rounded-full border-0 bg-brand-600 px-3 py-1 font-semibold uppercase text-white">
          ${icon("sparkles", "size-3")}
          ${badge}
        </span>`
      : "";

  const buttonClass = featured
    ? "btn btn-primary shadow-brand"
    : "btn border-0 bg-brand-100 text-brand-700 hover:bg-brand-200 dark:bg-brand-900/40 dark:text-brand-200 dark:hover:bg-brand-900/60";

  return `
    <article class="pricing-card ${featured ? "pricing-card--featured" : ""}">
      ${badgeHtml}
      <h3 class="pricing-card__name">${name}</h3>
      <p class="pricing-card__description">${description}</p>

      <p class="pricing-card__price">
        <span
          class="pricing-card__amount"
          data-monthly="${formatPrice(price.monthly)}"
          data-yearly="${formatPrice(price.yearly)}"
        >${formatPrice(price.monthly)}</span>
        <span class="pricing-card__period">/ mes</span>
      </p>

      <ul class="pricing-card__features">
        ${featureItems}
      </ul>

      <a href="#" class="${buttonClass} pricing-card__cta">${cta}</a>
    </article>
  `;
}
