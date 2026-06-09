// ─── HERO VARIANTE B — Card blanca flotante, responsive
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function HeroB() {
    const sectionRef = useRef<HTMLElement>(null);
    const [imgOpacity, setImgOpacity] = useState(0.9);
    const [parallaxY, setParallaxY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionH = rect.height;
            const scrolled = Math.max(0, -rect.top);
            const progress = Math.min(1, scrolled / sectionH);
            const opacity = 0.9 - progress * 0.4;
            setImgOpacity(opacity);
            setParallaxY(scrolled * 0.35);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="w-full" style={{ backgroundColor: "#EEF1F6" }}>
            <div
                className="relative overflow-hidden bg-white mx-auto w-full hero-container"
                style={{
                    maxWidth: "1680px",
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                }}
            >
                {/* ── DESKTOP: imagen absoluta al fondo ── */}
                <motion.div
                    className="hidden md:block absolute bottom-0 left-0 z-0 w-full pointer-events-none"
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                >
                    <img
                        src="/images/city-hero-home.png"
                        alt="Edificio institucional"
                        style={{
                            width: "100%",
                            height: "auto",
                            opacity: imgOpacity,
                            filter: "grayscale(1) contrast(1.05) brightness(0.95)",
                            transform: `translateY(${parallaxY}px)`,
                            willChange: "transform",
                            display: "block",
                        }}
                    />
                </motion.div>

                {/* ── Texto ── */}
                <div
                    className="relative z-10 mx-auto px-6 md:px-14 pt-[100px] pb-6 md:pt-[160px] md:pb-0"
                    style={{ maxWidth: "1280px" }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        style={{ maxWidth: "600px" }}
                    >
                        <p
                            className="text-[11px] tracking-[0.28em] uppercase font-semibold mb-4"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                        >
                            Defensa Fiscal · Puebla, México
                        </p>

                        <h1
                            className="font-bold tracking-tight mb-5"
                            style={{
                                fontFamily: "'Author', sans-serif",
                                fontSize: "clamp(42px, 6vw, 68px)", /* DI — era clamp(32px,4.5vw,52px) */
                                fontWeight: 800, /* DI — era 700 */
                                lineHeight: 1.08,
                                color: "#1A1D26",
                            }}
                        >
                            Especialistas en<br />
                            Defensa Fiscal
                        </h1>

                        <p
                            className="mb-8"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "18px",
                                lineHeight: 1.6,
                                color: "#4A5568",
                                maxWidth: "460px",
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
                                padding: "15px 30px",
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

                {/* ── MOBILE: imagen en flujo normal debajo del texto ── */}
                <motion.div
                    className="block md:hidden mt-8"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                >
                    <img
                        src="/images/city-hero-home.png"
                        alt="Edificio institucional"
                        className="w-full h-auto"
                        style={{
                            opacity: imgOpacity,
                            filter: "grayscale(1) contrast(1.05) brightness(0.95)",
                            display: "block",
                        }}
                    />
                </motion.div>

                {/* Desktop spacer para la imagen absoluta */}
                <div className="hidden md:block" style={{ paddingBottom: "270px" }} />
            </div>
        </section>
    );
}
