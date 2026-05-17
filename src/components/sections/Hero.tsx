import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Hero() {
    const { branding } = config;

    return (
        <section className="relative min-h-screen flex items-center pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden bg-[#0d0c0a]">
            {/* Background Image - Occupies whole HERO */}
            <div className="absolute inset-0 z-0">
                <motion.img 
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 0.35, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src="/images/hero-home.webp"
                    alt="Background"
                    className="w-full h-full object-cover mix-blend-luminosity brightness-75 sepia-[0.3]"
                />
                {/* Radial gradient for focus */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0d0c0a_100%)] z-10 opacity-80" />
                {/* Linear gradient to connect to next section */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0d0c0a]/50 to-[#0d0c0a] z-10" />
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
                <motion.img 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.03, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}
                    src={branding.logo}
                    alt="Watermark Logo"
                    className="w-[60vw] max-w-[800px] grayscale brightness-200"
                />
            </div>

            {/* Main Content Grid */}
            <div className="container mx-auto px-6 relative z-20 mt-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        {/* Rating & Proof */}
                        <div className="flex items-center justify-center gap-3 mb-10 bg-black/40 backdrop-blur-md border border-white/10 w-fit px-6 py-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <span className="text-[#c69955] text-[10px] tracking-widest font-bold uppercase leading-none">Defensa Fiscal Especializada · México</span>
                        </div>

                        {/* Title Main */}
                        <h1 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] text-white leading-[1.1] tracking-tight mb-8">
                            Su Patrimonio Bajo Ataque Fiscal. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3b873] to-[#c69955] italic font-light">Nosotros Lo Defendemos.</span>
                        </h1>

                        {/* Subtítulo */}
                        <p className="text-zinc-300 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Firma legal de alta especialidad en Defensa Fiscal y Compliance. Representamos contribuyentes ante el SAT, IMSS, INFONAVIT y autoridades financieras con un enfoque de litigio estratégico diseñado para ganar.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center w-full max-w-lg lg:max-w-none">
                            <Button
                                size="lg"
                                className="w-full lg:w-auto bg-gradient-to-r from-[#e3b873] to-[#c69955] text-black hover:opacity-90 rounded-full px-10 h-16 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-[0_15px_40px_-10px_rgba(198,153,85,0.4)]"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Solicitar Evaluación de Caso
                                <ArrowRight className="ml-3 w-4 h-4" />
                            </Button>
                            
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full lg:w-auto text-white hover:text-black hover:bg-white rounded-full px-10 h-16 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 border border-white/20 bg-black/10 backdrop-blur-sm"
                                onClick={() => document.getElementById('nosotros')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Conocer la Firma
                            </Button>
                        </div>

                        {/* Stats Hero */}
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
                            <div className="flex flex-col items-center md:items-start text-center md:text-left bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl transition-all duration-300 hover:bg-white/10">
                                <span className="text-3xl font-display text-[#c69955] mb-2">10+</span>
                                <span className="text-xs text-white/70 uppercase tracking-widest leading-relaxed">Años de Experiencia en Defensa Fiscal</span>
                            </div>
                            <div className="flex flex-col items-center md:items-start text-center md:text-left bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl transition-all duration-300 hover:bg-white/10">
                                <span className="text-xl font-display text-[#c69955] mb-2 leading-tight">SAT · IMSS · INFONAVIT</span>
                                <span className="text-xs text-white/70 uppercase tracking-widest leading-relaxed">Defensa Ante Autoridades Federales</span>
                            </div>
                            <div className="flex flex-col items-center md:items-start text-center md:text-left bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl transition-all duration-300 hover:bg-white/10">
                                <span className="text-3xl font-display text-[#c69955] mb-2">100%</span>
                                <span className="text-xs text-white/70 uppercase tracking-widest leading-relaxed">Enfoque en Litigio Fiscal Estratégico</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
