// ─── HERO VARIANTE A — Imagen full-screen con overlay oscuro ─────────────────
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroA() {
    return (
        <section
            className="relative flex items-center overflow-hidden"
            style={{ minHeight: "70vh" }}
        >
            {/* Background image */}
            <div className="absolute inset-0 z-0" style={{ backgroundColor: "#0F2240" }}>
                <img
                    src="/images/city-hero-home.png"
                    alt="Edificio institucional"
                    className="w-full h-full object-cover object-center"
                />
                {/* Gradient: left #0F2240 90% → right transparent */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(15,34,64,0.90) 0%, rgba(15,34,64,0.80) 38%, rgba(15,34,64,0.40) 65%, rgba(15,34,64,0.08) 100%)",
                    }}
                />
            </div>

            {/* Content — left aligned */}
            <div
                className="relative z-10 w-full container mx-auto px-8 md:px-12 py-24 md:py-32"
                style={{ maxWidth: "1200px" }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    style={{ maxWidth: "600px" }}
                >
                    <p
                        className="text-[11px] tracking-[0.28em] uppercase font-semibold mb-5"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)" }}
                    >
                        Defensa Fiscal · Puebla, México
                    </p>

                    <h1
                        className="font-bold leading-[1.05] tracking-tight mb-6 text-white"
                        style={{
                            fontFamily: "'Author', sans-serif",
                            fontSize: "clamp(42px, 6vw, 68px)", /* DI — era clamp(32px,4.5vw,52px) */
                            fontWeight: 800, /* DI — era 700 */
                        }}
                    >
                        Especialistas en<br />
                        Defensa Fiscal
                    </h1>

                    <p
                        className="mb-10"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "18px",
                            lineHeight: 1.6,
                            color: "rgba(255,255,255,0.85)",
                            maxWidth: "480px",
                        }}
                    >
                        Defensa fiscal estratégica y protección patrimonial para empresas.
                    </p>

                    <button
                        className="inline-flex items-center gap-3 rounded-lg text-white font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "14px",
                            letterSpacing: "0.04em",
                            backgroundColor: "#2C5494",
                            padding: "16px 32px",
                        }}
                        onClick={() =>
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Agenda Diagnóstico Fiscal
                        <ArrowRight size={16} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
