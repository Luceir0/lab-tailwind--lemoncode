import { icon } from "../ui/icons.js";

// Card de característica: icono, título y texto. Recibe un elemento de data/features.js.
export function featureCard({ tone, icon: iconName, title, text }) {
  return `
    <li>
      <article class="surface-card feature-card h-full">
        <span class="icon-box icon-box--${tone}">${icon(iconName)}</span>
        <h3 class="feature-card__title">${title}</h3>
        <p class="feature-card__text">${text}</p>
      </article>
    </li>
  `;
}
