import { motion } from 'framer-motion';
import { config } from '@/config';

export function Roadmap() {
    const { process } = config.dynamicContent;

    return (
        <section className="py-32 bg-[#0F1216] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-[#c69955] font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">Nuestro Método</span>
                    <h2 className="text-4xl md:text-6xl font-display text-white">
                        Proceso de <span className="italic font-light text-[#c69955]">Tres Pasos</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left Side: Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-12 xl:col-span-5 relative"
                    >
                        <div className="relative aspect-square max-w-[500px] mx-auto">
                            <img
                                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200"
                                alt="Escalas de Justicia"
                                className="w-full h-full object-cover grayscale brightness-75 rounded-2xl border border-white/5"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1216] via-transparent to-transparent" />

                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border border-[#c69955]/20 rounded-2xl -z-10" />
                        </div>
                    </motion.div>

                    {/* Right Side: Process Steps */}
                    <div className="lg:col-span-12 xl:col-span-7 space-y-8">
                        {process.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className="group relative flex gap-8 items-start p-8 bg-white/5 border border-white/10 hover:border-[#c69955]/30 transition-all duration-500 backdrop-blur-sm"
                            >
                                {/* Step Number Label */}
                                <div className="flex-shrink-0 w-16 h-16 rounded-full border border-[#c69955]/30 flex items-center justify-center text-xl font-display text-[#c69955] group-hover:bg-[#c69955] group-hover:text-black transition-all duration-500 shadow-xl">
                                    {step.step}
                                </div>

                                <div className="flex flex-col">
                                    <h3 className="text-2xl font-display text-white mb-3 tracking-wide group-hover:text-[#c69955] transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-zinc-400 font-sans font-light text-base leading-relaxed max-w-lg">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Connecting Line Decor */}
                                <div className="absolute top-1/2 -left-4 w-4 h-[2px] bg-[#c69955]/30 hidden xl:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[#c69955]/[0.02] -z-10 blur-3xl" />
        </section>
    );
}
