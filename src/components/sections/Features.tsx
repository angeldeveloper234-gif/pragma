import { motion } from "framer-motion";
import { AlertCircle, ArrowRight, ShieldAlert, Unlock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Features() {
    return (
        <section id="urgencia" className="py-16 md:py-32 bg-[#c69955]/10 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0d0c0a] via-transparent to-[#0d0c0a] pointer-events-none" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-16 gap-4">
                    <div className="flex items-center gap-2 bg-[#c69955]/10 border border-[#c69955]/20 px-4 py-2 rounded-full text-[#e3b873] mb-4">
                        <AlertCircle size={16} />
                        <span className="font-sans text-[10px] tracking-[0.4em] uppercase font-bold">Acción Inmediata</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-white leading-tight">
                        ¿Sellos Cancelados? <br />
                        ¿Cuentas Congeladas? <br />
                        <span className="italic font-light text-[#c69955]">Actuamos Ahora.</span>
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#111111] border border-white/5 p-6 sm:p-10 hover:border-[#c69955]/30 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <ShieldAlert size={100} className="text-[#c69955]" />
                        </div>
                        <div className="w-16 h-16 bg-[#c69955]/10 border border-[#c69955]/20 flex items-center justify-center mb-8 rounded-full">
                            <ShieldAlert size={28} className="text-[#e3b873]" />
                        </div>
                        <h3 className="text-2xl font-display text-white mb-4">Restablecimiento de Sellos Digitales</h3>
                        <p className="text-zinc-400 font-sans font-light leading-relaxed">
                            Sin Certificado de Sello Digital no puede facturar. No facturar es no operar. Activamos las acciones legales necesarias para reactivar sus CSD y restaurar la continuidad de su negocio.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="bg-[#111111] border border-white/5 p-6 sm:p-10 hover:border-[#c69955]/30 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Unlock size={100} className="text-[#c69955]" />
                        </div>
                        <div className="w-16 h-16 bg-[#c69955]/10 border border-[#c69955]/20 flex items-center justify-center mb-8 rounded-full">
                            <Unlock size={28} className="text-[#e3b873]" />
                        </div>
                        <h3 className="text-2xl font-display text-white mb-4">Liberación de Cuentas Bancarias</h3>
                        <p className="text-zinc-400 font-sans font-light leading-relaxed">
                            La inmovilización de fondos paraliza su operación. Combatimos las medidas cautelares de la autoridad con estrategia jurídica precisa para liberar sus recursos.
                        </p>
                    </motion.div>
                </div>

                <div className="flex justify-center w-full">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto bg-gradient-to-r from-[#e3b873] to-[#c69955] text-black hover:opacity-90 rounded-none px-6 sm:px-12 h-14 sm:h-16 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-[0_15px_40px_-10px_rgba(198,153,85,0.4)] flex justify-center items-center"
                        onClick={() => window.location.href = '#contact'}
                    >
                        Necesito Protección Inmediata
                        <ArrowRight className="ml-3 w-4 h-4 shrink-0" />
                    </Button>
                </div>
            </div>
        </section>
    );
}
