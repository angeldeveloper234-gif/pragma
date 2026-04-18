import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

export function Hero() {
    const { branding } = config;

    return (
        <section className="relative min-h-screen flex items-center pt-44 pb-20 overflow-hidden bg-[#0d0c0a]">
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
                        <div className="flex items-center gap-3 mb-10 bg-black/40 backdrop-blur-md border border-white/10 w-fit px-6 py-3 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            <img src="/images/icons8-google-96.svg" alt="Google" className="w-6 h-6" />
                            <div className="flex flex-col text-left">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-[#c69955] text-[#c69955]" />)}
                                </div>
                                <span className="text-white text-[10px] tracking-widest font-bold uppercase mt-1 leading-none">Excelencia en Google Maps</span>
                            </div>
                        </div>

                        {/* Title Main */}
                        <h1 className="font-display text-4xl md:text-6xl lg:text-[4.5rem] text-white leading-[1.1] tracking-tight mb-8">
                            Excelencia Legal. <br />
                            <span className="italic font-light opacity-90">Precisión Contable.</span> <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3b873] to-[#c69955]">Resultados Estratégicos.</span>
                        </h1>

                        {/* Subtítulo */}
                        <p className="text-zinc-300 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                            Firma boutique de abogados y contadores. Brindamos certeza jurídica y solidez financiera, optimizando el crecimiento de su empresa con un enfoque integral.
                        </p>

                        {/* Actions */}
                        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-[#e3b873] to-[#c69955] text-black hover:opacity-90 rounded-full px-10 h-16 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-[0_15px_40px_-10px_rgba(198,153,85,0.4)]"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Agendar Consulta Privada
                                <ArrowRight className="ml-3 w-4 h-4" />
                            </Button>
                            
                            <Button
                                variant="outline"
                                size="lg"
                                className="text-white hover:text-black hover:bg-white rounded-full px-10 h-16 text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 border border-white/20 bg-black/10 backdrop-blur-sm"
                                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                Conocer Servicios
                            </Button>
                        </div>

                        {/* Floating Testimonial Bagde */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute -bottom-10 -right-4 md:right-0 flex items-center gap-4 bg-white/[0.03] border border-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-2xl hidden md:flex"
                        >
                            <div className="flex -space-x-3">
                                {config.testimonials.slice(0, 4).map((t, i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#141414] overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                                        <img src={t.avatar} alt="Client" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-[#141414] bg-gradient-to-br from-[#e3b873] to-[#c69955] flex items-center justify-center text-[10px] font-bold text-black shadow-lg">
                                    +200
                                </div>
                            </div>
                            <div className="flex flex-col items-start leading-none gap-1.5">
                                <div className="flex gap-0.5">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-[#c69955] text-[#c69955]" />)}
                                </div>
                                <span className="text-[10px] text-white uppercase tracking-widest font-bold opacity-80">Clientes Satisfechos</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
