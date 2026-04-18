import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, MessageSquareText } from "lucide-react";

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
        a: "Tenemos base en Chetumal y brindamos servicios legales integrales en todo el estado de Quintana Roo y diversas zonas del país.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 bg-[#0F1216]">
            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Left Side: Text content */}
                <div className="lg:col-span-4 self-start sticky top-32">
                    <span className="text-[#c69955] font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block text-center lg:text-left">Asesoría</span>
                    <h2 className="text-4xl md:text-6xl font-display text-white mb-8 text-center lg:text-left">
                        Preguntas <br />
                        <span className="italic font-light text-[#c69955]">Frecuentes</span>
                    </h2>

                    <div className="hidden lg:flex flex-col gap-8 p-10 bg-white/5 border border-white/5 mt-12 backdrop-blur-sm">
                        <MessageSquareText size={40} className="text-[#c69955]" />
                        <p className="text-zinc-400 font-sans font-light text-sm leading-relaxed">
                            ¿Tiene una duda específica que no aparece aquí? Contacte a nuestro equipo para una respuesta directa.
                        </p>
                        <button className="text-[10px] uppercase tracking-[0.3em] text-[#c69955] font-bold border-b border-[#c69955]/30 pb-2 w-fit">
                            Consultar Ahora
                        </button>
                    </div>
                </div>

                {/* Right Side: Accordion */}
                <div className="lg:col-span-8 space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className={`border-b border-white/10 overflow-hidden transition-all duration-500 ${openIndex === i ? 'bg-white/5' : 'hover:bg-white/[0.02]'}`}>
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="flex items-center justify-between w-full p-8 text-left"
                            >
                                <span className={`text-xl md:text-2xl font-display transition-colors duration-500 ${openIndex === i ? 'text-[#c69955]' : 'text-white'}`}>
                                    {faq.q}
                                </span>
                                <div className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ${openIndex === i ? 'bg-[#c69955] border-[#c69955] rotate-45' : ''}`}>
                                    <Plus className={`w-5 h-5 transition-colors ${openIndex === i ? 'text-black' : 'text-[#c69955]'}`} />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "circOut" }}
                                    >
                                        <div className="px-8 pb-8 text-zinc-400 font-sans font-light text-lg leading-relaxed max-w-2xl">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
