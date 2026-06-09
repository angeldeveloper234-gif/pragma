import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export function CTA() {
    return (
        <section
            className="py-28 md:py-40 text-white relative overflow-hidden" /* DI — era py-20 md:py-28 */
            style={{ backgroundColor: "#0F2240" }}
        >
            <div className="container mx-auto px-6 text-center relative z-10" style={{ maxWidth: "1200px" }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.13 } },
                    }}
                    className="max-w-3xl mx-auto"
                >
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.6 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 180 } },
                        }}
                    >
                        <ShieldCheck
                            size={40}
                            className="mx-auto mb-8"
                            style={{ color: "rgba(255,255,255,0.4)" }}
                        />
                    </motion.div>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
                        }}
                        className="font-bold leading-tight mb-8"
                        style={{
                            fontFamily: "'Author', sans-serif",
                            fontSize: "clamp(32px, 5vw, 52px)", /* DI — era clamp(28px,4.5vw,48px) */
                            color: "#ffffff",
                        }}
                    >
                        ¿Necesita proteger la posición<br />
                        fiscal de su empresa?
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 16 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        }}
                        className="mb-12 leading-relaxed mx-auto"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "17px",
                            color: "rgba(255,255,255,0.7)",
                            maxWidth: "520px",
                        }}
                    >
                        Evaluamos su situación y diseñamos una estrategia de defensa
                        personalizada. Iniciamos su acompañamiento en menos de 24 horas.
                    </motion.p>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20, scale: 0.9 },
                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring", stiffness: 200 } },
                        }}
                    >
                        <button
                            className="inline-flex items-center gap-3 rounded-lg text-white font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "13px",
                                letterSpacing: "0.08em",
                                backgroundColor: "#2C5494",
                                padding: "16px 40px",
                            }}
                            onClick={() => window.location.href = "#contact"}
                        >
                            Solicitar Evaluación Preliminar
                            <ArrowRight size={16} />
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
