// Precio en euros: 0 → "0€", 6.99 → "6,99€"
export function formatPrice(value) {
  return value === 0 ? "0€" : `${value.toFixed(2).replace(".", ",")}€`;
}
