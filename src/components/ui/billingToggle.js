// Selector de opciones excluyentes (radios con aspecto de tabs-box de daisyUI)
// { name, label, options: [{ value, label }] } — la primera sale marcada
export function billingToggle({ name, label, options }) {
  const inputs = options
    .map(
      ({ value, label: optionLabel }, index) => `
        <input
          type="radio"
          name="${name}"
          value="${value}"
          class="tab"
          aria-label="${optionLabel}"
          ${index === 0 ? "checked" : ""}
        />`,
    )
    .join("");

  return `
    <div class="tabs tabs-box border border-outline bg-elevated" role="radiogroup" aria-label="${label}">
      ${inputs}
    </div>
  `;
}
