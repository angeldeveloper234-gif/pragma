import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ReviewCardProps {
    name: string;
    role: string;
    text: string;
    tags?: string[];
}

export function ReviewCard({ name, role, text, tags }: ReviewCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl glass-panel group"
        >
            <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className="w-4 h-4 text-[#c69955] fill-[#c69955] group-hover:scale-110 transition-transform"
                        style={{ transitionDelay: `${i * 50}ms` }}
                    />
                ))}
            </div>

            <p className="text-lg text-zinc-300 font-sans font-light leading-relaxed mb-8">
                "{text}"
            </p>

            <div className="flex items-center justify-between mt-auto">
                <div>
                    <h4 className="text-white font-bold tracking-wide">{name}</h4>
                    <p className="text-sm text-[#c69955] font-sans uppercase tracking-widest mt-1">
                        {role}
                    </p>
                </div>
                {tags && tags.length > 0 && (
                    <div className="flex gap-2">
                        {tags.map(tag => (
                            <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-zinc-400 border border-white/10">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
