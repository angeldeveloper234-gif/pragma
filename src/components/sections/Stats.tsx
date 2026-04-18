import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Lock } from "lucide-react";

const pillars = [
    {
        title: "Experiencia Comprobada",
        desc: "Años de trayectoria respaldando a empresas y particulares con resultados tangibles.",
        icon: ShieldCheck
    },
    {
        title: "Atención Personalizada",
        desc: "Cada caso es único; diseñamos estrategias a la medida de sus necesidades.",
        icon: UserCheck
    },
    {
        title: "Confidencialidad Absoluta",
        desc: "Discreción total en el manejo de su información legal y financiera.",
        icon: Lock
    }
];

export function Stats() {
    return (
        <section id="firma" className="py-32 bg-[#0F1216]">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#c69955] font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">Nuestra Firma</span>
                        <h2 className="text-4xl md:text-5xl font-display text-white mb-10 leading-tight">
                            Visión Integral para <br />
                            <span className="italic font-light text-[#c69955]">Desafíos Complejos</span>
                        </h2>

                        <p className="text-zinc-400 font-sans font-light text-lg md:text-xl leading-relaxed mb-12">
                            Somos una firma multidisciplinaria dedicada a ofrecer soluciones de alto nivel. Entendemos que en el entorno empresarial actual, las decisiones legales y contables están profundamente entrelazadas.
                            <br /><br />
                            Por ello, nuestro equipo de especialistas trabaja en sinergia para blindar sus operaciones, mitigar riesgos y asegurar el cumplimiento normativo con los más altos estándares de ética y profesionalismo.
                        </p>
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
                                className="group p-10 bg-white/5 border border-white/5 hover:border-[#c69955]/30 transition-all duration-500 rounded-sm flex items-start gap-8"
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

                {/* Social Proof Bar */}
                <div className="mt-32 pt-20 border-t border-white/5">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-4xl md:text-5xl font-display text-white mb-2">+200</p>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c69955] font-bold">Clientes Atendidos</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <p className="text-4xl md:text-5xl font-display text-white mb-2">49</p>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c69955] font-bold">Reseñas en Google</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <p className="text-4xl md:text-5xl font-display text-white mb-2">+20</p>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c69955] font-bold">Años de Trayectoria</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <p className="text-4xl md:text-5xl font-display text-white mb-2">4.9/5</p>
                            <p className="text-[10px] uppercase tracking-[0.3em] text-[#c69955] font-bold">Calificación Media</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
