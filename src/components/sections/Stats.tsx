import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Lock } from "lucide-react";

const pillars = [
    {
        title: "Experiencia Práctica",
        desc: "Nuestra formación incluye experiencia en PRODECON y el TFJA, lo que nos da una visión completa del proceso de fiscalización para diseñar estrategias más efectivas.",
        icon: ShieldCheck
    },
    {
        title: "Casos de Alto Impacto",
        desc: "Hemos logrado sentencias favorables y firmes en la defensa de créditos fiscales de gran cuantía ante autoridades federales.",
        icon: UserCheck
    },
    {
        title: "Acción Inmediata",
        desc: "Gestionamos el restablecimiento de Sellos Digitales y la liberación de cuentas bancarias en el menor tiempo posible.",
        icon: Lock
    }
];

export function Stats() {
    return (
        <section id="firma" className="py-28 md:py-40" style={{ backgroundColor: "#EEF1F6" }}> {/* DI — era py-20 md:py-28 */}
            <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={{
                            hidden: {},
                            visible: { transition: { staggerChildren: 0.12 } },
                        }}
                    >
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
                            }}
                            className="text-[11px] tracking-[0.28em] uppercase font-semibold mb-5"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                        >
                            La Firma
                        </motion.p>
                        <motion.h2
                            variants={{
                                hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
                            }}
                            className="font-bold leading-tight mb-8"
                            style={{
                                fontFamily: "'Author', sans-serif",
                                fontSize: "clamp(32px, 4.5vw, 48px)", /* DI — era clamp(28px,3.5vw,40px) */
                                color: "#1A1D26",
                            }}
                        >
                            Conocimiento Profundo en<br />
                            Defensa Fiscal y Procesos<br />
                            <span style={{ color: "#1B3564" }}>de Fiscalización.</span>
                        </motion.h2>

                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 16 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                            }}
                            className="text-base leading-relaxed mb-6"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                        >
                            Nuestra trayectoria se fundamenta en la experiencia práctica acumulada en la
                            defensa fiscal de alto impacto y en un entendimiento profundo de cómo operan
                            los procesos de fiscalización en México.
                        </motion.p>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 16 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                            }}
                            className="text-base leading-relaxed mb-8"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                        >
                            Contamos con formación adquirida en instituciones como PRODECON y el
                            Tribunal Federal de Justicia Administrativa, complementada con años de
                            ejercicio riguroso en el sector privado. Esa combinación nos permite
                            anticipar escenarios y diseñar estrategias con mayor precisión.
                        </motion.p>

                        <motion.blockquote
                            variants={{
                                hidden: { opacity: 0, x: -30, scaleX: 0.95 },
                                visible: { opacity: 1, x: 0, scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } },
                            }}
                            className="pl-6 italic text-base leading-relaxed font-medium"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                color: "#1A1D26",
                                borderLeft: "4px solid #1B3564",
                                transformOrigin: "left center",
                            }}
                        >
                            "Nuestra experiencia define la estrategia; nuestra práctica
                            garantiza su ejecución precisa."
                        </motion.blockquote>
                    </motion.div>

                    {/* Right: Pillars */}
                    <div className="flex flex-col gap-4">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
                                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.55, delay: index * 0.13, ease: "easeOut" }}
                                className="flex items-start gap-6 p-6 rounded-xl bg-white transition-shadow duration-300 hover:shadow-md card-folder"
                                style={{ border: "1.5px solid #D8DFE9" }}
                            >
                                <div
                                    className="w-11 h-11 shrink-0 flex items-center justify-center rounded-lg"
                                    style={{ backgroundColor: "#EEF1F6" }}
                                >
                                    <pillar.icon size={20} style={{ color: "#2C5494" }} />
                                </div>
                                <div>
                                    <h4
                                        className="font-semibold mb-1"
                                        style={{ fontFamily: "'Author', sans-serif", fontSize: "18px", color: "#1A1D26" }}
                                    >
                                        {pillar.title}
                                    </h4>
                                    <p
                                        className="text-sm leading-relaxed"
                                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                    >
                                        {pillar.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
