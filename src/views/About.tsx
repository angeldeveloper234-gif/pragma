"use client";

import { motion } from "framer-motion";
import { Shield, Users, Award, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

const VALUES = [
    { icon: Shield, title: "Integridad", desc: "Actuamos bajo los más estrictos estándares éticos en cada caso." },
    { icon: Users, title: "Sinergia", desc: "Abogados y contadores trabajando en un solo frente por su seguridad." },
    { icon: Award, title: "Excelencia", desc: "No buscamos solo cumplir; buscamos superar las expectativas." },
    { icon: Target, title: "Resultados", desc: "Nuestro enfoque está orientado a la resolución estratégica." },
];

export function About() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: "#EEF1F6" }}>
            {/* ── Header ── */}
            <section className="pt-32 md:pt-40 pb-16 md:pb-20" style={{ backgroundColor: "#0F2240" }}>
                <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p
                            className="text-[11px] tracking-[0.28em] uppercase font-semibold mb-5"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)" }}
                        >
                            Nuestra Firma
                        </p>
                        <h1
                            className="font-bold text-white mb-5"
                            style={{
                                fontFamily: "'Author', sans-serif",
                                fontSize: "clamp(32px, 5vw, 52px)",
                                lineHeight: 1.1,
                            }}
                        >
                            Tradición de Excelencia,
                            <br />
                            Visión de Futuro
                        </h1>
                        <p
                            className="leading-relaxed"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "17px",
                                color: "rgba(255,255,255,0.7)",
                                maxWidth: "560px",
                            }}
                        >
                            Pragma nace de la necesidad de ofrecer una asesoría que combine la solidez
                            del derecho con la precisión de la contabilidad, creando un blindaje integral
                            para nuestros clientes.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Valores ── */}
            <section className="py-28 md:py-40" style={{ backgroundColor: "#ffffff" }}>
                <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>
                    <div className="text-center mb-16">
                        <p
                            className="text-[11px] tracking-[0.28em] uppercase font-semibold mb-3"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                        >
                            Principios
                        </p>
                        <h2
                            className="font-bold leading-tight"
                            style={{
                                fontFamily: "'Author', sans-serif",
                                fontSize: "clamp(32px, 4.5vw, 48px)",
                                color: "#1A1D26",
                            }}
                        >
                            Nuestros <span style={{ color: "#1B3564" }}>Valores</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {VALUES.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-xl bg-white text-center"
                                style={{ border: "1.5px solid #D8DFE9" }}
                            >
                                <div
                                    className="w-12 h-12 mx-auto flex items-center justify-center rounded-lg mb-6"
                                    style={{ backgroundColor: "#EEF1F6" }}
                                >
                                    <item.icon size={22} style={{ color: "#2C5494" }} />
                                </div>
                                <h3
                                    className="font-semibold mb-3"
                                    style={{
                                        fontFamily: "'Author', sans-serif",
                                        fontSize: "20px",
                                        color: "#1A1D26",
                                    }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                >
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Compromiso ── */}
            <section
                className="py-28 md:py-40 border-t"
                style={{ backgroundColor: "#F5F7FA", borderColor: "#D8DFE9" }}
            >
                <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="aspect-[4/3] rounded-xl overflow-hidden"
                            style={{ border: "1.5px solid #D8DFE9" }}
                        >
                            <img
                                src="/images/assets/nosotros-hero.png"
                                alt="Oficinas Pragma"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).src =
                                        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800";
                                }}
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p
                                className="text-[11px] tracking-[0.28em] uppercase font-semibold mb-4"
                                style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                            >
                                Presencia Local
                            </p>
                            <h2
                                className="font-bold leading-tight mb-8"
                                style={{
                                    fontFamily: "'Author', sans-serif",
                                    fontSize: "clamp(28px, 4vw, 40px)",
                                    color: "#1A1D26",
                                }}
                            >
                                Compromiso en{" "}
                                <span style={{ color: "#1B3564" }}>Puebla</span>
                            </h2>
                            <p
                                className="text-base leading-relaxed mb-6"
                                style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                            >
                                Establecidos en el corazón empresarial de Puebla, en la Torre Omega
                                del Centro Mayor, nuestra firma se ha consolidado como el aliado
                                estratégico preferido por directivos y empresarios que exigen
                                resultados impecables.
                            </p>
                            <p
                                className="text-base leading-relaxed mb-10"
                                style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                            >
                                Entendemos los desafíos locales y nacionales de la carga tributaria
                                y la complejidad jurídica, ofreciendo un puerto seguro para el
                                crecimiento y la protección patrimonial.
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center gap-3 rounded-lg text-white font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontSize: "12px",
                                    letterSpacing: "0.08em",
                                    backgroundColor: "#2C5494",
                                    padding: "14px 32px",
                                }}
                            >
                                Contactar <ArrowRight size={15} />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
