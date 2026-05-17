import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <section className="py-32 bg-[#0F1216] text-white relative overflow-hidden border-t border-white/5">
            {/* Subtle glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c69955]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <ShieldCheck size={48} className="mx-auto mb-8 text-[#c69955] opacity-50" />

                    <h2 className="text-4xl md:text-6xl font-display mb-10 leading-[1.1] tracking-tighter">
                        ¿La Autoridad Fiscal Ya Actuó <span className="text-[#c69955] italic underline decoration-1 underline-offset-8">Contra Su Empresa?</span>
                    </h2>

                    <p className="text-lg md:text-xl text-zinc-400 mb-16 font-sans font-light leading-relaxed max-w-2xl mx-auto">
                        No espere a que el daño sea irreversible. Cada día sin defensa es un día que la autoridad avanza. Iniciamos su estrategia de protección en menos de 24 horas.
                    </p>

                    <div className="flex flex-col items-center gap-8">
                        <Button
                            size="lg"
                            className="h-20 px-12 bg-white text-black hover:bg-[#c69955] hover:text-white rounded-none text-sm tracking-[0.3em] uppercase font-bold transition-all duration-500 shadow-2xl"
                            onClick={() => window.location.href = '#contact'}
                        >
                            Solicitar Evaluación de Urgencia <ArrowRight className="ml-4 w-5 h-5" />
                        </Button>

                        <div className="flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Certificaciones de Élite</span>
                            <div className="h-4 w-[1px] bg-white/20"></div>
                            <div className="flex gap-4">
                                {/* Placeholders for authority logos */}
                                <div className="text-[10px] border border-white/20 px-2 py-1">ISO 9001</div>
                                <div className="text-[10px] border border-white/20 px-2 py-1">TOP FIRM 2024</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
