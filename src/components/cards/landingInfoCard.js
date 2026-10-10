import { icon } from "../ui/icons.js";

// Card informativa. Variantes: "brand" (degradado) y "light" (surface-card).
// { variant, marker, badge, title, text, footerText, footerHighlight }
// marker = HTML opcional arriba (sustituye al badge)
export function landingInfoCard({
  variant = "brand",
  marker,
  badge,
  title,
  text,
  footerText,
  footerHighlight,
}) {
  const variantClass =
    variant === "light" ? "surface-card info-card--light" : "info-card--brand";

  const top = marker
    ? marker
    : badge
      ? `<span class="badge badge-sm border-0 bg-white/20 font-semibold text-white">${badge}</span>`
      : "";

  const footer = footerText
    ? `
      <div class="info-card__footer">
        <span>${footerText}</span>
        <span class="info-card__highlight">
          ${icon("shield", "size-4")}
          ${footerHighlight}
        </span>
      </div>`
    : "";

  return `
    <article class="info-card ${variantClass}">
      ${top}
      <h3 class="info-card__title">${title}</h3>
      <p class="info-card__text">${text}</p>
      ${footer}
    </article>
  `;
}
