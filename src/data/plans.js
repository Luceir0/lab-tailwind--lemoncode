// Planes de precios (pricingCard). price en €/mes; yearly = €/mes pagando el año

// Opciones del selector de facturación (value = clave de price)
export const billingPeriods = [
  { value: "monthly", label: "Facturación mensual" },
  { value: "yearly", label: "Facturación anual" },
];

export const plans = [
  {
    name: "Gratis",
    description: "Para empezar a crear y compartir momentos clave.",
    price: { monthly: 0, yearly: 0 },
    features: [
      "5 GB de almacenamiento",
      "1 Círculo privado",
      "Hasta 5 miembros",
      "Hasta 10 álbumes",
      "Subida y descarga de fotos",
      "Etiquetado de personas",
    ],
    cta: "Empieza gratis",
    featured: false,
  },
  {
    name: "Plus",
    description: "Para familias y grupos de amigos activos.",
    price: { monthly: 6.99, yearly: 4.99 },
    features: [
      "100 GB de almacenamiento",
      "Hasta 5 Círculos",
      "Hasta 15 miembros por Círculo",
      "Álbumes ilimitados",
      "Descargas de álbumes completos en ZIP",
      "Calidad original sin compresión destructiva",
      "Búsqueda avanzada por fecha y persona",
    ],
    cta: "Elige Plus",
    featured: true,
    badge: "Más popular",
  },
  {
    name: "Pro",
    description: "Para grandes archivos y coleccionistas de fotos.",
    price: { monthly: 14.99, yearly: 12.99 },
    features: [
      "1 TB de almacenamiento",
      "Círculos ilimitados",
      "Hasta 50 miembros por Círculo",
      "Álbumes ilimitados",
      "Copias de seguridad automáticas",
      "Recuperación de fotos eliminadas (30 días)",
      "Permisos y roles avanzados",
      "Exportación completa del Círculo",
    ],
    cta: "Elige Pro",
    featured: false,
  },
];
