// Cambio de facturación: muestra el importe data-monthly / data-yearly
export function initBillingToggle({
  inputs = 'input[name="billing"]',
  amounts = "[data-monthly]",
} = {}) {
  document.querySelectorAll(inputs).forEach((input) => {
    input.addEventListener("change", () => {
      document.querySelectorAll(amounts).forEach((amount) => {
        amount.textContent = amount.dataset[input.value];
      });
    });
  });
}
