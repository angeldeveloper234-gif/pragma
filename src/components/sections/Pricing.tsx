import { motion } from "framer-motion";
import { Scale, TrendingUp, ArrowUpRight, Check } from "lucide-react";
import Link from "next/link";

const legalServices = [
    "Recurso de Revocación y Juicios de Nulidad Federal y Estatal.",
    "Atención a visitas domiciliarias, revisiones de gabinete y electrónicas.",
    "Impugnación de multas, créditos fiscales y responsabilidad solidaria.",
    "Juicio de Amparo contra leyes y actos de autoridades fiscales."
];

const accountingServices = [
    "Auditoría preventiva y diagnóstico proactivo de obligaciones fiscales.",
    "Preparación para nuevo Procedimiento de Fiscalización (Art. 49-bis).",
    "Gobierno Corporativo con enfoque fiscal (Libros de Actas, Socios).",
    "Cumplimiento del Art. 28 CFF para acreditar materialidad."
];

export function Pricing() {
    return (
        <section id="services" className="py-16 md:py-32 bg-[#0d0c0a] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-[#c69955] font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block text-center">Especialidad</span>
                    <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
                        Dos Ejes de Protección. <span className="italic font-light text-[#c69955]">Cobertura Total.</span>
                    </h2>
                    <p className="text-zinc-500 font-sans font-light text-lg max-w-2xl mx-auto">
                        Representación jurídica estratégica ante contingencias, y prevención inteligente para que la autoridad nunca lo tome desprevenido.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Block A: Legal */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/5 border border-white/5 p-6 sm:p-10 md:p-16 hover:border-[#c69955]/30 transition-all duration-700 group relative"
                    >
                        <div className="absolute top-0 right-0 p-6 sm:p-10 opacity-5 sm:opacity-10 group-hover:opacity-20 transition-opacity">
                            <Scale size={120} className="text-[#c69955]" />
                        </div>

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black border border-[#c69955]/30 flex items-center justify-center mb-8 sm:mb-10 shadow-2xl">
                                <Scale size={32} className="text-[#c69955]" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-display text-white mb-6 uppercase tracking-widest leading-tight">Defensa Fiscal y<br/>Facultades de Comprobación</h3>
                            <p className="text-zinc-400 font-sans font-light mb-8 sm:mb-12 leading-relaxed">
                                Representación jurídica agresiva y estratégica cuando la autoridad ya tocó su puerta. Defendemos su patrimonio con todas las herramientas legales disponibles.
                            </p>

                            <ul className="space-y-6 mb-10 md:mb-16 flex-1">
                                {legalServices.map((service, i) => (
                                    <li key={i} className="flex items-start gap-4 text-zinc-300 font-sans font-light">
                                        <div className="w-5 h-5 rounded-full border border-[#c69955]/30 flex items-center justify-center mt-1 shrink-0">
                                            <Check size={10} className="text-[#c69955]" />
                                        </div>
                                        <span className="text-sm md:text-base leading-relaxed">{service}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/servicios" className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-[#c69955] font-bold group/btn">
                                Ver Defensa Fiscal <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Block B: Fiscal/Accounting */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#141414] border border-[#c69955]/20 p-6 sm:p-10 md:p-16 hover:border-[#c69955] transition-all duration-700 group relative shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 p-6 sm:p-10 opacity-5 sm:opacity-10 group-hover:opacity-20 transition-opacity">
                            <TrendingUp size={120} className="text-[#c69955]" />
                        </div>

                        <div className="relative z-10 h-full flex flex-col">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black border border-[#c69955]/30 flex items-center justify-center mb-8 sm:mb-10 shadow-2xl">
                                <TrendingUp size={32} className="text-[#c69955]" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-display text-white mb-6 uppercase tracking-widest leading-tight">Compliance<br/>Fiscal</h3>
                            <p className="text-zinc-400 font-sans font-light mb-8 sm:mb-12 leading-relaxed">
                                Prevención inteligente para que la autoridad nunca lo tome desprevenido. Blindaje fiscal antes de que exista el problema.
                            </p>

                            <ul className="space-y-6 mb-10 md:mb-16 flex-1">
                                {accountingServices.map((service, i) => (
                                    <li key={i} className="flex items-start gap-4 text-zinc-300 font-sans font-light">
                                        <div className="w-5 h-5 rounded-full border border-[#c69955]/30 flex items-center justify-center mt-1 shrink-0">
                                            <Check size={10} className="text-[#c69955]" />
                                        </div>
                                        <span className="text-sm md:text-base leading-relaxed">{service}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/servicios" className="flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white font-bold group/btn">
                                Ver Compliance Fiscal <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform text-[#c69955]" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
