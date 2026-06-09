import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

const team = [
    {
        name: "Lic. Roberto Villalba",
        role: "Socio Fundador · Litigio Estratégico",
        description: "Con más de 15 años de experiencia en defensa fiscal y litigio contencioso administrativo de alta cuantía. Especialista en la formulación de estrategias procesales complejas frente al SAT y autoridades federales, logrando resoluciones históricas en anulación de créditos fiscales.",
        image: "/images/team/partner-1.webp"
    },
    {
        name: "Dra. Elena Cárdenas",
        role: "Socia Directora · Compliance Corporativo",
        description: "Doctora en Derecho Fiscal. Su práctica se centra en el blindaje preventivo y la estructuración corporativa. Ha asesorado a más de 50 grupos empresariales en la prevención de riesgos y regularización patrimonial, garantizando operaciones sólidas y libres de contingencias.",
        image: "/images/team/partner-2.webp"
    }
];

function PhotoPlaceholder() {
    return (
        <div
            className="w-full h-full flex flex-col items-center justify-center gap-3"
            style={{ backgroundColor: "#EEF1F6" }}
        >
            <UserRound
                size={52}
                strokeWidth={1.2}
                style={{ color: "#B0BBC9" }}
            />
            <span
                className="text-[10px] uppercase tracking-[0.2em] font-semibold"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "#B0BBC9" }}
            >
                Insertar imagen
            </span>
        </div>
    );
}

export function Team() {
    return (
        <section id="equipo" className="py-28 md:py-40 border-t" style={{ backgroundColor: "#ffffff", borderColor: "#D8DFE9" }}>
            <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>

                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                    className="text-center mb-14"
                >
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
                        }}
                        className="text-[11px] tracking-[0.28em] uppercase font-semibold mb-3"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                    >
                        El Equipo
                    </motion.p>
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
                            visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7 } },
                        }}
                        className="font-bold leading-tight mb-4"
                        style={{
                            fontFamily: "'Author', sans-serif",
                            fontSize: "clamp(32px, 4.5vw, 48px)",
                            color: "#1A1D26",
                        }}
                    >
                        Nuestro <span style={{ color: "#1B3564" }}>Equipo</span>
                    </motion.h2>
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 12 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                        }}
                        className="text-base leading-relaxed mx-auto"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            color: "#4A5568",
                            maxWidth: "520px",
                        }}
                    >
                        Conozca a los socios que lideran cada caso con rigor
                        y acompañamiento personalizado.
                    </motion.p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(6px)" }}
                            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                            className="group flex flex-col rounded-xl overflow-hidden bg-white"
                            style={{ border: "1.5px solid #D8DFE9" }}
                        >
                            {/* Photo — aspect-[3/2] más corto que el anterior aspect-[4/3] */}
                            <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/2" }}>
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover opacity-95 group-hover:scale-105 transition-all duration-700"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = "none";
                                        const placeholder = (e.target as HTMLImageElement).nextElementSibling as HTMLElement;
                                        if (placeholder) placeholder.style.display = "flex";
                                    }}
                                />
                                {/* Placeholder visible si la imagen falla */}
                                <div className="absolute inset-0 hidden">
                                    <PhotoPlaceholder />
                                </div>
                                {/* Hover overlay */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                                    style={{ backgroundColor: "#1B3564" }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col">
                                <h3
                                    className="font-bold mb-1"
                                    style={{ fontFamily: "'Author', sans-serif", fontSize: "22px", color: "#1A1D26" }}
                                >
                                    {member.name}
                                </h3>
                                <p
                                    className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-5"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                                >
                                    {member.role}
                                </p>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                >
                                    {member.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
