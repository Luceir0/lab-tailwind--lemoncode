import { accordionItem } from "../ui/accordionItem.js";

// Pregunta frecuente (acordeón). Recibe un elemento de data/faqs.js.
export function faqItem({ question, answer, open = false }) {
  return accordionItem({ title: question, content: answer, open, name: "faq" });
}
