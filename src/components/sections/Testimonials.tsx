import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { config } from "@/config";

export function Testimonials() {
    const { testimonials } = config;

    // Split testimonials for two rows
    const half = Math.ceil(testimonials.length / 2);
    const firstRow = [...testimonials.slice(0, half), ...testimonials.slice(0, half)];
    const secondRow = [...testimonials.slice(half), ...testimonials.slice(half)];

    return (
        <section id="testimonials" className="py-16 md:py-32 bg-[#0d0c0a] overflow-hidden">
            <div className="container mx-auto px-6 mb-12 md:mb-20 text-center">
                <div className="max-w-3xl mx-auto flex flex-col items-center">
                    <div className="flex flex-col items-center gap-4 mb-8 bg-white/5 border border-white/10 px-6 py-4 rounded-2xl backdrop-blur-md w-full sm:w-auto">
                        <div className="flex items-center gap-3">
                            <img src="/images/icons8-google-96.svg" className="w-6 h-6" alt="Google" />
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#c69955] text-[#c69955]" />)}
                            </div>
                        </div>
                        <span className="text-white font-sans text-[10px] tracking-[0.2em] uppercase font-bold text-center">
                            5 Estrellas de media en Google · +42 reseñas
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display text-white mb-6 uppercase tracking-tight">
                        Voces de <span className="italic font-light text-[#c69955]">Excelencia</span>
                    </h2>
                    <p className="text-zinc-500 font-sans font-light text-lg">
                        Nuestra reputación se construye con la satisfacción y el éxito de quienes confían en nosotros.
                    </p>
                </div>
            </div>

            {/* Ticker Row 1 (Moving Left) */}
            <div className="relative flex overflow-hidden mb-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    animate={{ x: [0, -1920] }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-8 whitespace-normal px-4"
                >
                    {firstRow.map((item: any, i: number) => (
                        <ReviewCard key={i} item={item} />
                    ))}
                </motion.div>
            </div>

            {/* Ticker Row 2 (Moving Right) */}
            <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                <motion.div
                    animate={{ x: [-1920, 0] }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex gap-8 whitespace-normal px-4"
                >
                    {secondRow.map((item: any, i: number) => (
                        <ReviewCard key={i} item={item} />
                    ))}
                </motion.div>
            </div>

            {/* Final Social Proof Bar */}
            <div className="container mx-auto px-6 mt-12 md:mt-20">
                <div className="text-center">
                    <div className="inline-flex flex-col items-center gap-4 p-6 sm:p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm w-full sm:w-auto">
                        <p className="text-white font-display text-xl sm:text-2xl">
                            5.0/5 <span className="text-[#c69955]">Excelencia Total</span>
                        </p>
                        <p className="text-zinc-500 text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.4em] text-center">
                            Basado en +42 reseñas en Google Map y +200 clientes satisfechos
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ReviewCard({ item }: { item: any }) {
    return (
        <div className="bg-[#141414] border border-white/5 p-6 sm:p-10 hover:border-[#c69955]/30 transition-all duration-500 group relative flex flex-col w-[280px] sm:w-[400px] flex-shrink-0">
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                    <Star key={index} size={14} className="fill-[#c69955] text-[#c69955]" />
                ))}
            </div>

            <p className="text-zinc-300 font-sans font-light leading-relaxed mb-6 sm:mb-10 flex-1 italic text-sm">
                "{item.text}"
            </p>

            <div className="flex items-center gap-4 pt-4 sm:pt-8 border-t border-white/5 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-[#c69955]/30">
                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <div>
                    <p className="text-white font-display text-sm font-bold tracking-wider uppercase mb-0.5">
                        {item.name}
                    </p>
                    <p className="text-[#c69955] text-[9px] uppercase tracking-widest font-bold flex items-center gap-2">
                        <img src="/images/icons8-google-96.svg" className="w-4 h-4" alt="Google Maps" />
                        {item.role}
                    </p>
                </div>
            </div>
            <Quote size={40} className="absolute bottom-10 right-10 opacity-5 text-white" />
        </div>
    );
}
