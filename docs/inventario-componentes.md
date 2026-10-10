# Inventario de componentes — Landing Memora

Análisis del diseño (light y dark) antes de maquetar.

**Leyenda de la columna "Cómo":**

- **CSS**: clase propia en `@layer components` (solo estilo).
- **JS**: función en `src/components/` que devuelve HTML a partir de datos en `src/data/`.
- **daisyUI**: componente de daisyUI personalizado con utilidades de Tailwind.
- **HTML**: se escribe directamente en `index.html` (aparece una sola vez).

---

## 1. Átomos (piezas pequeñas que se repiten por toda la página)

| Componente | Dónde aparece | Cómo | Notas |
|---|---|---|---|
| **Botón primario** | Header, hero, pricing (Plus), footer | daisyUI `btn btn-primary` | Con icono opcional (→, ✦) |
| **Botón secundario** | Hero ("Cómo funciona"), pricing (Gratis, Pro) | daisyUI `btn` / `btn-soft` / `btn-ghost` | Fondo `elevated`, sin color de marca |
| **Botón blanco** | CTA final | daisyUI `btn` + `bg-white text-brand-700` | Igual en los dos modos |
| **Botón icono circular** | Theme toggle, descarga (Cumple de Marta) | daisyUI `btn btn-ghost btn-circle btn-sm` | Necesita `aria-label` |
| **Eyebrow** (pill superior de sección) | Encima de cada `h2` (7 veces) | CSS `.eyebrow` | Mayúsculas, `text-2xs`, `tracking-wider`, icono pequeño opcional |
| **Badge / chip** | "342 fotos · 6 personas", "#Viajes", "-20%", "Privado", "Más popular"… | daisyUI `badge` + variantes | Varios tonos: brand, pink, mint, oscuro sobre foto |
| **Icon box** | Features, help box de FAQ, CTA | CSS `.icon-box` + `.icon-box--brand/pink/peach/mint` | Cuadrado redondeado con fondo suave |
| **Avatar** y **avatar group** | Hero (social proof), Lisboa, Miembros | daisyUI `avatar`, `avatar-group` | El último puede ser un contador "+8" |
| **Check de lista** | Features de cada plan | CSS `.check-list` | ✓ en color mint |
| **Valoración** (★★★★★) | Hero | daisyUI `rating` (solo lectura) o SVG | Color amarillo/ámbar |
| **Logo** | Header, footer | HTML (SVG + texto "memora") | Repetido 2 veces: se puede copiar |

---

## 2. Componentes compuestos

| Componente | Dónde | Cómo | Notas |
|---|---|---|---|
| **Section header** (eyebrow + h2 + p) | Funciones, Cómo funciona, Precios, Preguntas | CSS `.section-header` | Centrado. En "Recuerdos" va alineado a la izquierda: variante `.section-header--left` |
| **Surface card** | Base de casi todas las cards | CSS `.surface-card` | Ya creada en `src/styles/components.css` |
| **Feature card** | Funciones (×6) | JS `featureCard()` + `data/features.js` | icon box + h3 + p |
| **Step card** | Cómo funciona (×4) | JS `stepCard()` + `data/steps.js` | Círculo con número coloreado (brand, brand, pink, mint) |
| **Pricing card** | Precios (×3) | JS `pricingCard()` + `data/plans.js` | Plus = variante destacada (borde brand, badge "Más popular", botón primario) |
| **Toggle facturación** | Precios | daisyUI `join` o `tabs tabs-box` + JS | Cambia los precios mensual ↔ anual (-20%) |
| **FAQ item** | Preguntas (×6, en 2 columnas) | JS `faqItem()` + `data/faqs.js` con daisyUI `collapse collapse-plus` (o `<details>`) | El primero abierto por defecto |
| **Help box** | Debajo de las FAQ | HTML | icon box + texto + enlace al email |
| **Photo card (álbum)** | Mosaico: Lisboa, Mallorca, Cumple de Marta | JS `albumCard()` o HTML | Foto con badges encima, título, metadatos. Cada una tiene variaciones: mejor hacerlas a mano primero y extraer el componente después si compensa |
| **Member list** | Mosaico ("Personas en este círculo") | HTML + JS `memberRow()` | avatar + nombre + rol + chip "84 fotos" |
| **Promo card** | Mosaico ("100% Original") | HTML | Degradado brand, igual en los dos modos |
| **Social proof** | Hero | HTML | avatar group + rating + texto |
| **Newsletter** | Footer | daisyUI `join` (input + botón) | |

---

## 3. Secciones (de arriba abajo)

Cada sección lleva un `id` para los anclajes del header y del menú lateral.

| # | Sección | `id` | Layout | Componentes que usa |
|---|---|---|---|---|
| 1 | **Header** | — | `sticky top-0`, fondo glass + blur | Logo, nav, theme toggle, "Iniciar sesión", botón primario. En móvil: daisyUI `dropdown` o `drawer` |
| 2 | **Hero** | `inicio` | `grid lg:grid-cols-2` | Eyebrow, h1 (con parte en color brand), p, 2 botones, social proof. A la derecha: 2 fotos superpuestas giradas (`relative`/`absolute`, `rotate-*`) con chips y una tarjeta flotante "Viaje a Lisboa · 100%" |
| 3 | **Funciones** | `funciones` | `grid sm:grid-cols-2 lg:grid-cols-3` | Section header + 6 feature cards |
| 4 | **Recuerdos** (mosaico) | `recuerdos` | Bento: `grid lg:grid-cols-3`, Lisboa con `lg:col-span-2` | Section header a la izquierda + chip "Ordenado cronológicamente" a la derecha, 3 photo cards, member list, promo card |
| 5 | **Cómo funciona** | `como-funciona` | `grid sm:grid-cols-2 lg:grid-cols-4` | Section header + 4 step cards |
| 6 | **Precios** | `precios` | `grid lg:grid-cols-3` (Plus algo más alto) | Section header, toggle de facturación, 3 pricing cards, nota al pie |
| 7 | **Preguntas** | `preguntas` | `grid lg:grid-cols-2` | Section header, 6 FAQ items, help box |
| 8 | **CTA final** | — | Bloque centrado, `rounded-3xl`, degradado brand | Icon box, h2 blanco, p, botón blanco, nota "Sin tarjeta de crédito…" |
| 9 | **Footer** | — | `grid lg:grid-cols-4` + barra inferior | Logo + texto + redes, columnas Producto y Ayuda, newsletter, copyright + enlaces legales |

---

## 4. Componente extra: menú lateral de secciones (no aparece en las capturas)

### Qué hace

- Columna vertical de **6 iconos** en el lado derecho, **centrada verticalmente en el viewport**.
- **Aparece al hacer un poco de scroll** (cuando el hero empieza a salir de pantalla) y se queda fija mientras te mueves por la página.
- Cada icono es un **enlace a su sección**:

| Icono (sugerencia) | Sección | Enlace |
|---|---|---|
| 🏠 casa | Inicio | `#inicio` |
| ✦ estrella / cuadrícula | Funciones | `#funciones` |
| 🖼️ imagen | Recuerdos | `#recuerdos` |
| ↻ pasos / ruta | Cómo funciona | `#como-funciona` |
| 🏷️ etiqueta / € | Precios | `#precios` |
| ? interrogación | Preguntas | `#preguntas` |

### Cómo construirlo

| Parte | Técnica |
|---|---|
| Posición | `fixed right-4 top-1/2 -translate-y-1/2`. Aunque se describa como "sticky", lo correcto aquí es `fixed`: `sticky` solo funciona dentro de su contenedor padre, y este menú tiene que estar fijo respecto al viewport en toda la página |
| Contenedor | Pill vertical: `flex flex-col gap-1 rounded-full border border-outline bg-glass backdrop-blur-glass p-2 shadow-md` |
| Iconos | daisyUI `btn btn-ghost btn-circle btn-sm` con SVG |
| Etiqueta al pasar el ratón | daisyUI `tooltip tooltip-left` con `data-tip="Precios"` |
| Aparecer al hacer scroll | JS con `IntersectionObserver` sobre el hero: cuando deja de verse, se añade una clase que pasa de `opacity-0 translate-x-4 pointer-events-none` a `opacity-100 translate-x-0` |
| Icono activo (scrollspy) | JS con `IntersectionObserver` sobre cada `section[id]`: el enlace de la sección visible recibe `aria-current="true"` y se estiliza con `aria-[current=true]:bg-brand-600 aria-[current=true]:text-white` |
| Scroll suave | `scroll-smooth` en `<html>` (mejor `motion-safe:scroll-smooth` para respetar a quien tiene desactivadas las animaciones) |
| Que el header no tape el título | `scroll-mt-header` en cada sección (usa el token `--spacing-header`) |
| Móvil | Oculto en pantallas pequeñas (`hidden lg:flex`), porque taparía el contenido |
| Accesibilidad | `<nav aria-label="Secciones de la página">`, cada enlace con `aria-label` |

Esqueleto HTML orientativo:

```html
<nav
  id="section-nav"
  aria-label="Secciones de la página"
  class="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 translate-x-4 opacity-0 pointer-events-none
         transition duration-300 lg:block
         data-[visible=true]:translate-x-0 data-[visible=true]:opacity-100 data-[visible=true]:pointer-events-auto"
>
  <ul class="flex flex-col gap-1 rounded-full border border-outline bg-glass p-2 shadow-md backdrop-blur-glass">
    <li class="tooltip tooltip-left" data-tip="Inicio">
      <a href="#inicio" aria-label="Inicio"
         class="btn btn-ghost btn-circle btn-sm aria-[current=true]:bg-brand-600 aria-[current=true]:text-white">
        <!-- svg casa -->
      </a>
    </li>
    <!-- … una por sección … -->
  </ul>
</nav>
```

---

## 5. Diferencias entre light y dark

Casi todo cambia solo gracias a los tokens `--memora-*`. Hay que vigilar:

| Elemento | Light | Dark | Qué hacer |
|---|---|---|---|
| Fondo página / cards | `#f8fafc` / `#fff` | `#080f19` / `#111b27` | Automático (tokens) |
| Bordes de cards | Gris claro | Azul grisáceo | Automático |
| Icon boxes de color | Fondos pastel | Fondos pastel oscurecidos | Automático para pink, peach y mint. Para brand: `dark:bg-brand-900/40` |
| Promo card, CTA, footer | Oscuros/degradado | Iguales | Colores fijos, no tokens de superficie |
| Badges sobre fotos | Oscuros translúcidos | Iguales | Colores fijos (`bg-black/60 text-white`) |
| Icono del theme toggle | Luna | Sol | `dark:hidden` / `hidden dark:inline` |
| Texto muted | `#94a3b8` | `#64748b` | Revisar el contraste en dark |

---

## 6. Orden de trabajo propuesto

1. Átomos: `.eyebrow`, `.section-header`, `.icon-box`, botones daisyUI.
2. Header + theme toggle (para comprobar los dos modos desde el principio).
3. Hero.
4. Funciones → Cómo funciona → Precios → Preguntas (son las más "de componente").
5. CTA + footer.
6. Mosaico de recuerdos (la más compleja).
7. Menú lateral de secciones (necesita que existan todos los `id`).
8. Repaso responsive y de accesibilidad.
