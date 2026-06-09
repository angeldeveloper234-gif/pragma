import { motion } from "framer-motion";
import { ArrowRight, Shield, Gavel, TrendingUp } from "lucide-react";
import { config } from "@/config";

const iconMap: Record<string, React.ElementType> = {
    "Shield": Shield,
    "Gavel": Gavel,
    "TrendingUp": TrendingUp,
};

export function Features() {
    const { services } = config.dynamicContent;

    return (
        <section id="servicios" className="py-28 md:py-40" style={{ backgroundColor: "#F5F7FA" }}> {/* DI — era py-20 md:py-28 */}
            <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                    className="flex flex-col items-center text-center mb-14"
                >
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
                        }}
                        className="text-[11px] tracking-[0.28em] uppercase font-semibold mb-3"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                    >
                        Especialidades
                    </motion.p>
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
                        }}
                        className="font-bold leading-tight mb-4"
                        style={{
                            fontFamily: "'Author', sans-serif",
                            fontSize: "clamp(32px, 4.5vw, 48px)", /* DI — era clamp(28px,4vw,40px) */
                            color: "#1A1D26",
                        }}
                    >
                        Soluciones en Defensa<br />y Cumplimiento Fiscal
                    </motion.h2>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 12 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        }}
                        className="max-w-lg text-base leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                    >
                        Nuestra práctica abarca las tres áreas clave de la fiscalidad empresarial.
                    </motion.p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
                    {services.map((service, index) => {
                        const IconComponent = iconMap[service.icon] || Shield;
                        return (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30, scale: 0.96, filter: "blur(6px)" }}
                                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
                                whileHover={{ y: -4, boxShadow: "0 8px 30px rgba(27,53,100,0.12)" }}
                                className="flex flex-col p-8 rounded-xl bg-white transition-all duration-300 card-folder"
                                style={{ border: "1.5px solid #D8DFE9" }}
                            >
                                {/* Icon */}
                                <div
                                    className="w-12 h-12 flex items-center justify-center rounded-lg mb-6"
                                    style={{ backgroundColor: "#EEF1F6" }}
                                >
                                    <IconComponent size={22} style={{ color: "#2C5494" }} />
                                </div>

                                <h3
                                    className="font-semibold mb-3 leading-snug"
                                    style={{
                                        fontFamily: "'Author', sans-serif",
                                        fontSize: "20px",
                                        color: "#1A1D26",
                                    }}
                                >
                                    {service.title}
                                </h3>
                                <p
                                    className="text-sm leading-relaxed flex-1"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                >
                                    {service.desc}
                                </p>

                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center"
                >
                    <button
                        className="flex items-center gap-3 rounded-lg text-white font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "12px",
                            letterSpacing: "0.08em",
                            backgroundColor: "#2C5494",
                            padding: "14px 36px",
                        }}
                        onClick={() => window.location.href = "#contact"}
                    >
                        Solicitar Asesoría Especializada
                        <ArrowRight size={15} />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
