import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { config } from "@/config";

export function Testimonials() {
    const { testimonials } = config;

    // Keep only reviews with substantial comments (> 60 chars)
    const bestReviews = testimonials.filter(
        (t: any) => t.text && t.text.length > 60 && !t.text.startsWith("Calificación")
    );

    // Single row: duplicate for continuous scroll
    const items = [...bestReviews, ...bestReviews];

    return (
        <section id="testimonials" className="py-28 md:py-40 overflow-hidden border-t" style={{ backgroundColor: "#EEF1F6", borderColor: "#D8DFE9" }}> {/* DI — era py-20 md:py-28 */}

            {/* Header */}
            <div className="container mx-auto px-6 mb-14 text-center" style={{ maxWidth: "1200px" }}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12 } },
                    }}
                    className="max-w-2xl mx-auto flex flex-col items-center"
                >
                    {/* Google badge */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.85, filter: "blur(4px)" },
                            visible: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.5, type: "spring", stiffness: 200 } },
                        }}
                        className="flex items-center gap-3 px-5 py-3 rounded-lg mb-8"
                        style={{
                            backgroundColor: "#ffffff",
                            border: "1.5px solid #D8DFE9",
                            display: "inline-flex",
                        }}
                    >
                        <img src="/images/icons8-google-96.svg" className="w-5 h-5" alt="Google" />
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={13} className="fill-[#FABB05] text-[#FABB05]" />
                            ))}
                        </div>
                        <span
                            className="text-[10px] tracking-[0.15em] uppercase font-semibold"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                        >
                            5.0 · +42 reseñas en Google
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
                        }}
                        className="font-bold leading-tight mb-4"
                        style={{
                            fontFamily: "'Author', sans-serif",
                            fontSize: "clamp(32px, 4.5vw, 48px)", /* DI — era clamp(28px,4vw,40px) */
                            color: "#1A1D26",
                        }}
                    >
                        Lo que dicen <span style={{ color: "#1B3564" }}>nuestros clientes</span>
                    </motion.h2>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 12 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        }}
                        className="text-base leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                    >
                        Nuestra reputación se construye con la confianza de quienes nos eligen.
                    </motion.p>
                </motion.div>
            </div>

            {/* Single row — continuous scroll */}
            <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <motion.div
                    animate={{ x: [0, -1920] }}
                    transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                    className="flex gap-6 px-4"
                >
                    {items.map((item: any, i: number) => (
                        <ReviewCard key={i} item={item} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function ReviewCard({ item }: { item: any }) {
    return (
        <div
            className="flex flex-col w-[300px] sm:w-[380px] shrink-0 p-6 sm:p-8 rounded-xl bg-white transition-shadow duration-300 hover:shadow-md relative"
            style={{ border: "1.5px solid #D8DFE9" }}
        >
            <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-[#FABB05] text-[#FABB05]" />
                ))}
            </div>

            <p
                className="text-sm leading-relaxed flex-1 italic mb-6"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
            >
                &ldquo;{item.text}&rdquo;
            </p>

            <div className="flex items-center gap-3 pt-5 mt-auto" style={{ borderTop: "1px solid #D8DFE9" }}>
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0" style={{ border: "1.5px solid #D8DFE9" }}>
                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                    <p
                        className="font-semibold text-sm tracking-wide uppercase"
                        style={{ fontFamily: "'Author', sans-serif", color: "#1A1D26" }}
                    >
                        {item.name}
                    </p>
                    <p
                        className="text-[9px] uppercase tracking-widest font-semibold flex items-center gap-1.5 mt-0.5"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                    >
                        <img src="/images/icons8-google-96.svg" className="w-3.5 h-3.5" alt="Google" />
                        {item.role}
                    </p>
                </div>
            </div>

            <Quote size={32} className="absolute bottom-6 right-6 opacity-[0.04]" style={{ color: "#1B3564" }} />
        </div>
    );
}
