// ─────────────────────────────────────────────────────────────────────────────
//  HERO SWITCHER
//  Cambia la línea activa para elegir la variante y el Navbar se adapta solo:
//
//    VARIANTE A — Imagen full-screen con overlay oscuro  → Navbar: oscuro/transparente
//    VARIANTE B — Fondo blanco, imagen abajo recortada   → Navbar: transparente + links negros
// ─────────────────────────────────────────────────────────────────────────────

// export { HeroA as Hero } from "./HeroA"; // ← VARIANTE A
export { HeroB as Hero } from "./HeroB";    // ← VARIANTE B (activa)

// Navbar lo importa para adaptar colores
export const HERO_VARIANT: "A" | "B" = "B"; // ← debe coincidir con la línea activa arriba
