import "./styles/main.css";

import { render } from "./utils/render.js";

import { circles, featuredCircle } from "./data/circles.js";
import { faqs } from "./data/faqs.js";
import { features } from "./data/features.js";
import { originalInfo } from "./data/infoCards.js";
import { heroCommunity } from "./data/members.js";
import { billingPeriods, plans } from "./data/plans.js";
import { steps } from "./data/steps.js";

import { avatarGroup } from "./components/ui/avatarGroup.js";
import { billingToggle } from "./components/ui/billingToggle.js";
import { circleMainCard } from "./components/cards/circleMainCard.js";
import { circleMembersCard } from "./components/cards/circleMembersCard.js";
import { faqItem } from "./components/cards/faqItem.js";
import { featureCard } from "./components/cards/featureCard.js";
import { landingInfoCard } from "./components/cards/landingInfoCard.js";
import { pricingCard } from "./components/cards/pricingCard.js";
import { stepCard } from "./components/cards/stepCard.js";

import { initBackToTop } from "./scripts/backToTop.js";
import { initBillingToggle } from "./scripts/billing.js";
import { initNavMenu } from "./scripts/navMenu.js";
import { initNewsletter } from "./scripts/newsletter.js";
import { initPressToggles } from "./scripts/pressToggle.js";
import { initTheme } from "./scripts/theme.js";

// Hero
render("#hero-avatars", [heroCommunity], ({ people, extra }) =>
  avatarGroup(people, { extra, size: "w-11", className: "-space-x-4" }),
);
// Cards ilustrativas: título como <p> (no puede haber h3 justo tras el h1)
render("#hero-circles", circles, (circle) => circleMainCard({ ...circle, titleTag: "p" }));

// Funciones
render("#features-list", features, featureCard);

// Recuerdos
render("#recuerdos-featured", [featuredCircle], circleMainCard);
render("#recuerdos-members", [{ members: featuredCircle.members }], circleMembersCard);
render("#recuerdos-info", [originalInfo], landingInfoCard);

// Cómo funciona
render("#steps-list", steps, stepCard);

// Precios
render(
  "#billing-toggle",
  [{ name: "billing", label: "Periodo de facturación", options: billingPeriods }],
  billingToggle,
);
render("#plans-list", plans, pricingCard);

// Preguntas
render("#faqs-list", faqs, faqItem);

// Interacciones
initTheme();
initNavMenu();
initPressToggles(".like-button, .member-row");
initBillingToggle();
initNewsletter();
initBackToTop();
