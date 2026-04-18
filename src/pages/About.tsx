import { motion } from "framer-motion";
import { Shield, Users, Award, Target } from "lucide-react";

export function About() {
    return (
        <div className="pt-32 pb-20 bg-[#0d0c0a]">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-32">
                <div className="max-w-4xl">
                    <span className="text-[#c69955] font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">Nuestra Firma</span>
                    <h1 className="text-5xl md:text-8xl font-display text-white leading-tight mb-12">
                        Tradición de Excelencia, <br />
                        <span className="italic font-light text-[#c69955]">Visión de Futuro.</span>
                    </h1>
                    <p className="text-zinc-400 font-sans font-light text-xl md:text-2xl leading-relaxed max-w-3xl">
                        Bañuelos Villalba & Asociados S.C. nace de la necesidad de ofrecer una asesoría que combine la solidez del derecho con la precisión de la contabilidad, creando un blindaje integral para nuestros clientes.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-white/5 py-32 border-y border-white/5 mb-32">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {[
                            { icon: Shield, title: "Integridad", desc: "Actuamos bajo los más estrictos estándares éticos en cada caso." },
                            { icon: Users, title: "Sinergia", desc: "Abogados y contadores trabajando en un solo frente por su seguridad." },
                            { icon: Award, title: "Excelencia", desc: "No buscamos solo cumplir; buscamos superar las expectativas legales." },
                            { icon: Target, title: "Resultados", desc: "Nuestro enfoque está 100% orientado a la resolución estratégica." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="w-12 h-12 rounded-full border border-[#c69955]/30 flex items-center justify-center">
                                    <item.icon size={20} className="text-[#c69955]" />
                                </div>
                                <h3 className="text-xl font-display text-white uppercase tracking-widest">{item.title}</h3>
                                <p className="text-zinc-500 font-sans font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story / Founder Mention */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative aspect-[4/5] bg-zinc-900 overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200"
                            alt="Oficinas Bañuelos Villalba"
                            className="w-full h-full object-cover grayscale opacity-50"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0c0a] to-transparent" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-display text-white mb-8 uppercase tracking-widest">
                            Compromiso en <span className="text-[#c69955]">Puebla</span>
                        </h2>
                        <p className="text-zinc-400 font-sans font-light text-lg leading-relaxed space-y-6">
                            Establecidos en el corazón empresarial de Puebla, en la Torre Omega del Centro Mayor, nuestra firma se ha consolidado como el aliado estratégico preferido por directivos y empresarios que exigen resultados impecables.
                            <br /><br />
                            Entendemos los desafíos locales y nacionales de la carga tributaria y la complejidad jurídica, ofreciendo un puerto seguro para el crecimiento y la protección patrimonial.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
