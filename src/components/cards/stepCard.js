import { landingInfoCard } from "./landingInfoCard.js";
import { stepNumberTones } from "../ui/tones.js";

// Paso numerado (landingInfoCard "light" con círculo numerado)
// Recibe un elemento de data/steps.js y su posición en el array.
export function stepCard({ tone, title, text }, index) {
  const marker = `
    <span
      class="grid size-10 place-items-center rounded-full text-sm font-bold text-white shadow-md ring-4 ${stepNumberTones[tone]}"
      aria-hidden="true"
    >${index + 1}</span>`;

  return `
    <li class="relative *:h-full md:flex-1">
      ${landingInfoCard({ variant: "light", align: "center", marker, title, text })}
    </li>
  `;
}
