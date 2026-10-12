import { icon } from "../ui/icons.js";
import { iconBoxTones } from "../ui/tones.js";

// Card de característica: icono, título y texto. Recibe un elemento de data/features.js.
export function featureCard({ tone, icon: iconName, title, text }) {
  return `
    <li class="w-[85%] shrink-0 snap-start sm:w-auto">
      <article class="surface-card h-full">
        <span class="grid size-10 place-items-center rounded-md ${iconBoxTones[tone]}">${icon(iconName)}</span>
        <h3 class="mt-6 text-lg font-bold">${title}</h3>
        <p class="mt-2 text-base leading-relaxed text-fg-secondary">${text}</p>
      </article>
    </li>
  `;
}
