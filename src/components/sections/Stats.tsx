import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Lock } from "lucide-react";

const pillars = [
    {
        title: "Origen Institucional",
        desc: "Socios formados en PRODECON y TFJA — conocemos los criterios internos de la autoridad.",
        icon: ShieldCheck
    },
    {
        title: "Casos de Alto Impacto",
        desc: "Defensa exitosa de créditos fiscales de gran cuantía con sentencias favorables firmes.",
        icon: UserCheck
    },
    {
        title: "Acción Inmediata",
        desc: "Restablecimiento de Sellos Digitales y liberación de cuentas bancarias en tiempo récord.",
        icon: Lock
    }
];

export function Stats() {
    return (
        <section id="firma" className="py-16 md:py-32 bg-[#0F1216]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#c69955] font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">Nuestra Firma</span>
                        <h2 className="text-4xl md:text-5xl font-display text-white mb-10 leading-tight">
                            Conocimiento Profundo de la Autoridad. <br />
                            <span className="italic font-light text-[#c69955]">Defensa Sin Concesiones.</span>
                        </h2>

                        <p className="text-zinc-400 font-sans font-light text-lg md:text-xl leading-relaxed mb-8">
                            Con más de 10 años de experiencia en el sector jurídico fiscal, nuestra trayectoria se fundamenta en un conocimiento profundo de cómo operan las autoridades fiscales y administrativas desde adentro.
                            <br /><br />
                            Los socios de la firma forjaron su experiencia en la Procuraduría de la Defensa del Contribuyente (PRODECON) y el Tribunal Federal de Justicia Administrativa (TFJA), complementada con una trayectoria consolidada en los despachos fiscales más exigentes del país.
                            <br /><br />
                            Esa experiencia integral nos permite gestionar casos de alto impacto económico. Hemos obtenido sentencias favorables que anulan determinaciones millonarias de la autoridad, protegiendo efectivamente el patrimonio y la viabilidad financiera de nuestros clientes.
                        </p>
                        
                        <div className="border-l-2 border-[#c69955] pl-6 mt-8">
                            <p className="text-white text-lg font-display italic">
                                "Conocemos a la autoridad porque trabajamos dentro de ella. Esa ventaja estratégica define nuestra defensa."
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Pillars Grid */}
                    <div className="grid grid-cols-1 gap-6">
                        {pillars.map((pillar, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 sm:p-10 bg-white/5 border border-white/5 hover:border-[#c69955]/30 transition-all duration-500 rounded-sm flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 sm:gap-8"
                            >
                                <div className="w-16 h-16 shrink-0 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#c69955] group-hover:border-[#c69955] transition-all duration-500 shadow-xl">
                                    <pillar.icon size={24} className="text-[#c69955] group-hover:text-black transition-colors" />
                                </div>
                                <div>
                                    <h4 className="text-white font-display text-xl mb-3 group-hover:text-[#c69955] transition-colors">{pillar.title}</h4>
                                    <p className="text-zinc-500 font-sans font-light text-sm leading-relaxed group-hover:text-zinc-400 transition-colors">
                                        {pillar.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* Social Proof Bar / Credibility Bar */}
                <div className="mt-16 pt-10 md:mt-32 md:pt-20 border-t border-white/5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-base md:text-lg font-display text-white mb-2 font-bold">Ex-funcionarios</p>
                            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#c69955]">de PRODECON y TFJA</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <p className="text-base md:text-lg font-display text-white mb-2 font-bold">Litigio</p>
                            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#c69955]">de Alta Cuantía</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p className="text-base md:text-lg font-display text-white mb-2 font-bold">Protección Patrimonial</p>
                            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#c69955]">Efectiva</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <p className="text-base md:text-lg font-display text-white mb-2 font-bold">Cobertura Federal</p>
                            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[#c69955]">y Estatal</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
