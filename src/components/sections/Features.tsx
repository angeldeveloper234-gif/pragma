import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { config } from "@/config";

export function Features() {
    const { recentCases } = (config.dynamicContent as any);

    return (
        <section id="cases" className="py-32 bg-[#0d0c0a]">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <span className="text-[#c69955] font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">Resultados Recientes</span>
                        <h2 className="text-4xl md:text-5xl font-display text-white leading-tight">
                            Casos de Éxito con <br />
                            <span className="italic font-light text-[#c69955]">Resultados Probados</span>
                        </h2>
                    </div>

                    <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center cursor-pointer hover:border-[#c69955] hover:text-[#c69955] text-white transition-all">
                            <ChevronLeft size={20} />
                        </div>
                        <div className="w-12 h-12 rounded-full border border-[#c69955] flex items-center justify-center cursor-pointer bg-[#c69955] text-black hover:brightness-110 transition-all shadow-[0_10px_30px_-5px_rgba(212,175,55,0.3)]">
                            <ChevronRight size={20} />
                        </div>
                    </div>
                </div>

                {/* Cases Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {recentCases?.map((item: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group relative flex flex-col bg-[#111111] border border-white/5 overflow-hidden hover:border-[#c69955]/30 transition-colors"
                        >
                            {/* Decorative Line */}
                            <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#c69955] group-hover:h-full transition-all duration-700 z-20" />

                            {/* Image Header */}
                            <div className="aspect-[21/9] overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale opacity-40 group-hover:opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-90" />
                                <div className="absolute bottom-6 left-8 right-8">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className={`text-[8px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 ${item.area === 'LEGAL' ? 'bg-[#c69955] text-black' : 'bg-white text-black'}`}>
                                            {item.area}
                                        </span>
                                        {item.tags?.map((tag: string) => (
                                            <span key={tag} className="text-[8px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 bg-white/5 text-zinc-300 border border-white/10 backdrop-blur-md">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-display text-white leading-tight uppercase tracking-wide group-hover:text-[#c69955] transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-10 flex flex-col flex-grow">
                                <div className="mb-8">
                                    <p className="text-zinc-500 font-sans font-light leading-relaxed italic text-sm md:text-base">
                                        "{item.summary}"
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-8 text-[11px] font-sans border-t border-white/5 pt-8 mt-auto">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-1 h-1 bg-[#c69955] rounded-full" />
                                            <span className="text-[#c69955] font-bold tracking-[0.2em] uppercase">Contexto Crítico</span>
                                        </div>
                                        <p className="text-zinc-400 font-light leading-relaxed pl-4 border-l border-white/5">{item.context}</p>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-1 h-1 bg-[#c69955] rounded-full" />
                                            <span className="text-white font-bold tracking-[0.2em] uppercase">Impacto Final</span>
                                        </div>
                                        <p className="text-[#c69955] font-medium leading-relaxed pl-4 border-l border-[#c69955]/20">{item.result}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer Action */}
                            <div className="px-8 pb-8 pt-4 flex items-center justify-between border-t border-white/[0.02]">
                                <span className="text-zinc-700 text-[9px] font-bold tracking-[0.4em] uppercase">{item.category}</span>
                                <div className="flex items-center gap-2 text-[#c69955] text-[9px] tracking-[0.3em] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                    Explorar Estrategia <Plus size={14} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
