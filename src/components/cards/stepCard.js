import { landingInfoCard } from "./landingInfoCard.js";

// Paso numerado (landingInfoCard "light" con círculo numerado)
// Recibe un elemento de data/steps.js y su posición en el array.
export function stepCard({ tone, title, text }, index) {
  const marker = `<span class="step-number step-number--${tone}" aria-hidden="true">${index + 1}</span>`;

  return `
    <li>
      ${landingInfoCard({ variant: "light", marker, title, text })}
    </li>
  `;
}
