import { motion } from "framer-motion";

interface RoadmapStep {
    step: string;
    title: string;
    desc: string;
}

interface RoadmapBlockProps {
    steps: RoadmapStep[];
}

export function RoadmapBlock({ steps }: RoadmapBlockProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-16">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block" />

            {steps.map((item, index) => (
                <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative p-8 glass-panel group overflow-hidden"
                >
                    <div className="absolute top-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity">
                        <span className="text-9xl font-display font-bold leading-none">{item.step}</span>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="text-[#c69955] font-mono text-sm tracking-widest">{item.step} /</span>
                            <h3 className="text-2xl font-display font-medium text-white">{item.title}</h3>
                        </div>
                        <p className="text-zinc-400 font-sans leading-relaxed">
                            {item.desc}
                        </p>
                    </div>

                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-0 h-1 bg-[#c69955] w-0 group-hover:w-full transition-all duration-500 ease-out" />
                </motion.div>
            ))}
        </div>
    );
}
