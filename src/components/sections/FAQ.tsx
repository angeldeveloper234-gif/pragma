import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, MessageSquareText } from "lucide-react";

const faqs = [
    {
        q: "¿Ofrecen consultas iniciales?",
        a: "Sí, ofrecemos una sesión de diagnóstico inicial para evaluar los detalles técnicos de su caso y determinar la mejor estrategia legal a seguir.",
    },
    {
        q: "¿Cómo se calculan los honorarios?",
        a: "Nuestros honorarios son transparentes y se basan en la complejidad del caso. Ofrecemos presupuestos cerrados o igualas mensuales competitivas.",
    },
    {
        q: "¿Mi información está protegida?",
        a: "La confidencialidad es la base de nuestra práctica. Seguimos protocolos estrictos de secreto profesional y protección de datos para todos nuestros clientes.",
    },
    {
        q: "¿Qué cobertura geográfica tienen?",
        a: "Tenemos base en Puebla y brindamos servicios legales integrales en todo el país, con especial presencia en los procesos federales ante SAT, IMSS e INFONAVIT.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-28 md:py-40" style={{ backgroundColor: "#ffffff" }}> {/* DI — era py-20 md:py-28 */}
            <div
                className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
                style={{ maxWidth: "1200px" }}
            >
                {/* Left */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                    className="lg:col-span-4 self-start lg:sticky top-32"
                >
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                        }}
                        className="text-[11px] tracking-[0.28em] uppercase font-semibold mb-3 text-center lg:text-left"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                    >
                        Asesoría
                    </motion.p>
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
                        }}
                        className="font-bold leading-tight mb-6 text-center lg:text-left"
                        style={{
                            fontFamily: "'Author', sans-serif",
                            fontSize: "clamp(32px, 4.5vw, 48px)", /* DI — era clamp(28px,4vw,44px) */
                            color: "#1A1D26",
                        }}
                    >
                        Preguntas<br />
                        <span style={{ color: "#1B3564" }}>Frecuentes</span>
                    </motion.h2>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20, scale: 0.96 },
                            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
                        }}
                        className="hidden lg:flex flex-col gap-6 p-8 rounded-xl mt-10"
                        style={{ backgroundColor: "#F5F7FA", border: "1.5px solid #D8DFE9" }}
                    >
                        <MessageSquareText size={32} style={{ color: "#2C5494" }} />
                        <p
                            className="text-sm leading-relaxed"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                        >
                            ¿Tiene una duda específica que no aparece aquí? Contacte a nuestro equipo para una respuesta directa.
                        </p>
                        <a
                            href="#contact"
                            className="text-[11px] uppercase tracking-[0.2em] font-semibold transition-opacity hover:opacity-70 w-fit"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                        >
                            Consultar Ahora →
                        </a>
                    </motion.div>
                </motion.div>

                {/* Accordion */}
                <div className="lg:col-span-8 space-y-3">
                    {faqs.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            /* DI — motion.div wrapper para micro-animación fade-in al scroll */
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                            >
                            <div
                                className="overflow-hidden rounded-xl transition-all duration-300"
                                style={{
                                    border: `1.5px solid ${isOpen ? "#2C5494" : "#D8DFE9"}`,
                                    backgroundColor: isOpen ? "#F5F7FA" : "#ffffff",
                                }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : i)}
                                    className="flex items-center justify-between w-full p-6 text-left gap-4"
                                >
                                    <span
                                        className="font-semibold text-lg leading-snug"
                                        style={{
                                            fontFamily: "'Author', sans-serif",
                                            color: isOpen ? "#1B3564" : "#1A1D26",
                                        }}
                                    >
                                        {faq.q}
                                    </span>
                                    <div
                                        className="w-9 h-9 shrink-0 rounded-lg flex items-center justify-center transition-all duration-300"
                                        style={{
                                            backgroundColor: isOpen ? "#1B3564" : "#EEF1F6",
                                            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                                        }}
                                    >
                                        <Plus size={16} style={{ color: isOpen ? "#ffffff" : "#2C5494" }} />
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.28, ease: "easeOut" }}
                                        >
                                            <p
                                                className="px-6 pb-6 text-base leading-relaxed"
                                                style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                            >
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
