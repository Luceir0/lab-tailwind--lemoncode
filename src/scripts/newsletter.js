// Formulario de newsletter (sin servidor): evita el envío, muestra un aviso
// y desactiva el formulario para no enviarlo dos veces
export function initNewsletter({
  form = "#newsletter-form",
  feedback = "#newsletter-status",
  message = "¡Gracias! Te escribiremos pronto.",
} = {}) {
  const formEl = document.querySelector(form);
  const feedbackEl = document.querySelector(feedback);
  if (!formEl || !feedbackEl) return;

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    feedbackEl.textContent = message;
    formEl.querySelectorAll("input, button").forEach((field) => {
      field.disabled = true;
    });
  });
}
