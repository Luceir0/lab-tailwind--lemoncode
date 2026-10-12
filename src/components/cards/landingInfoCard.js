import { icon } from "../ui/icons.js";

const variants = {
  brand: {
    card: "rounded-2xl bg-linear-to-br from-brand-500 to-brand-800 p-6 text-white shadow-brand dark:from-brand-700 dark:to-brand-900",
    title: "mt-4 text-2xl font-bold",
    text: "mt-3 text-sm leading-relaxed text-white/85",
  },
  light: {
    card: "surface-card",
    title: "mt-6 text-lg font-bold",
    text: "mt-2 text-base leading-relaxed text-fg-secondary",
  },
};

// Card informativa. Variantes: "brand" (degradado) y "light" (surface-card).
// { variant, align, marker, badge, title, text, footerText, footerHighlight }
// marker = HTML opcional arriba (sustituye al badge) · align = "start" | "center"
export function landingInfoCard({
  variant = "brand",
  align = "start",
  marker,
  badge,
  title,
  text,
  footerText,
  footerHighlight,
}) {
  const styles = variants[variant];
  const alignClass = align === "center" ? "items-center text-center" : "items-start";

  const top = marker
    ? marker
    : badge
      ? `<span class="badge badge-sm border-0 bg-white/20 font-semibold text-white">${badge}</span>`
      : "";

  const footer = footerText
    ? `
      <div class="mt-auto flex w-full items-center justify-between gap-2 border-t border-white/20 pt-4 text-xs text-white/75">
        <span>${footerText}</span>
        <span class="inline-flex items-center gap-1 font-semibold text-white">
          ${icon("shield", "size-4")}
          ${footerHighlight}
        </span>
      </div>`
    : "";

  return `
    <article class="flex flex-col ${alignClass} ${styles.card}">
      ${top}
      <h3 class="${styles.title}">${title}</h3>
      <p class="${styles.text} ${footer ? "mb-8" : ""}">${text}</p>
      ${footer}
    </article>
  `;
}
