// Clases por tono (brand | pink | peach | mint), escritas completas para que Tailwind las detecte

// Icono con fondo suave
export const iconBoxTones = {
  brand: "bg-brand-50 text-brand-600 dark:bg-brand-900/40",
  pink: "bg-accent-pink-soft text-accent-pink",
  peach: "bg-accent-peach-soft text-accent-peach",
  mint: "bg-accent-mint-soft text-accent-mint",
};

// Círculo numerado (fondos con contraste ≥ 4.5:1 para el texto blanco)
export const stepNumberTones = {
  brand: "bg-brand-600 ring-brand-600/15",
  pink: "bg-accent-pink-hover ring-accent-pink/15",
  peach: "bg-accent-peach-strong ring-accent-peach/15",
  mint: "bg-accent-mint-strong ring-accent-mint/15",
};
