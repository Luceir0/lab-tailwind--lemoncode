import "./style.css";
import "./theme.js";

import { features } from "./data/features.js";
import { steps } from "./data/steps.js";
import { plans } from "./data/plans.js";
import { faqs } from "./data/faqs.js";
import { members } from "./data/members.js";

import { featureCard } from "./components/featureCard.js";
import { stepCard } from "./components/stepCard.js";
import { pricingCard } from "./components/pricingCard.js";
import { faqItem } from "./components/faqItem.js";
import { memberRow } from "./components/memberRow.js";

// Pinta una lista de datos dentro de un contenedor de index.html.
// Si el contenedor todavía no existe (sección sin maquetar), no hace nada.
function render(selector, items, component) {
  const container = document.querySelector(selector);
  if (!container) return;
  container.innerHTML = items.map(component).join("");
}

render("#features-list", features, featureCard);
render("#steps-list", steps, stepCard);
render("#plans-list", plans, pricingCard);
render("#faqs-list", faqs, faqItem);
render("#members-list", members, memberRow);
