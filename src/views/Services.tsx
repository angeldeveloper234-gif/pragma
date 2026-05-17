import { motion } from "framer-motion";
import { Scale, TrendingUp, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const PILLARS = [
    {
        id: "legal",
        title: "División Jurídica Integral",
        subtitle: "Blindaje legal con visión de negocio.",
        icon: Scale,
        description: "En Bañuelos Villalba & Asociados, el área legal no solo resuelve conflictos, sino que diseña estructuras que facilitan el crecimiento sostenible y la seguridad jurídica de su patrimonio.",
        areas: [
            {
                name: "Derecho Corporativo y Mercantil",
                items: ["Constitución y estructuración de sociedades", "Gobierno corporativo y actas de asamblea", "Fusiones, adquisiciones y escisiones (M&A)", "Auditoría legal (Due Diligence)"]
            },
            {
                name: "Contratos y Blindaje Operativo",
                items: ["Diseño de contratos nacionales e internacionales", "Protección de propiedad industrial e intelectual", "Cumplimiento normativo (Compliance)", "Gestión de riesgos contractuales"]
            },
            {
                name: "Derecho Laboral y Seguridad Social",
                items: ["Asesoría preventiva obrero-patronal", "Auditoría de cumplimiento NOM-035", "Estrategia para relaciones laborales de alto nivel", "Defensa en juicios laborales"]
            }
        ],
        image: "/images/assets/blindaje-corporativo.png"
    },
    {
        id: "accounting",
        title: "Estrategia Fiscal y Contable",
        subtitle: "Precisión técnica y eficiencia financiera.",
        icon: TrendingUp,
        description: "Superamos la contabilidad tradicional para convertirnos en su socio estratégico. Optimizamos sus recursos bajo el más estricto apego al marco fiscal vigente.",
        areas: [
            {
                name: "Consultoría y Planeación Fiscal",
                items: ["Estrategias de optimización tributaria", "Interpretación de miscelánea fiscal vigente", "Atención a revisiones y auditorías del SAT", "Trámites de devolución de saldos a favor"]
            },
            {
                name: "Auditoría Interna y Financiera",
                items: ["Revisión de estados financieros", "Control interno y prevención de fraudes", "Valuación de activos intangibles", "Análisis de rentabilidad operativa"]
            },
            {
                name: "Contabilidad y Nómina",
                items: ["Gestión contable mensual y anual", "Administración de nómina y contribuciones locales", "Presentación de declaraciones informativas", "Contabilidad electrónica y registros digitales"]
            }
        ],
        image: "/images/assets/estrategia-fiscal.png"
    }
];

export function Services() {
    return (
        <div className="bg-[#0d0c0a] min-h-screen">
            <main className="pt-40">
                {/* Header with Mesh */}
                <section className="relative container mx-auto px-6 mb-32 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none" 
                         style={{ backgroundImage: "radial-gradient(#c69955 1px, transparent 1px)", backgroundSize: "50px 50px" }} />
                    
                    <div className="max-w-4xl relative">
                        <span className="text-[#c69955] font-sans text-[11px] tracking-[0.5em] uppercase font-bold mb-8 block">Nuestras Disciplinas</span>
                        <h1 className="text-6xl md:text-[100px] font-display text-white leading-[1.1] mb-12">
                            Arquitectura <br />
                            <span className="italic font-light text-[#c69955]">Corporativa.</span>
                        </h1>
                        <p className="text-zinc-500 font-sans font-light text-xl max-w-2xl leading-relaxed italic border-l border-[#c69955]/20 pl-8">
                            Integramos el rigor del derecho con la agilidad de las finanzas para ofrecer una defensa de 360 grados sobre el patrimonio empresarial.
                        </p>
                    </div>
                </section>

                {/* Vertical Split Sections */}
                {PILLARS.map((pillar, idx) => (
                    <section key={pillar.id} id={pillar.id} className={`py-40 border-t border-white/5 ${idx % 2 !== 0 ? "relative" : ""}`}>
                        {idx % 2 !== 0 && <div className="absolute inset-0 bg-[#c69955]/[0.02] pointer-events-none" />}
                        <div className="container mx-auto px-6 relative z-10">
                            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-20 items-center`}>
                                <div className={`lg:col-span-12 mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10`}>
                                    <div className="max-w-2xl">
                                        <div className="flex items-center gap-4 mb-6">
                                            <pillar.icon size={24} className="text-[#c69955]" />
                                            <span className="text-[#c69955] text-[10px] font-bold tracking-[0.4em] uppercase">{pillar.subtitle}</span>
                                        </div>
                                        <h2 className="text-5xl md:text-7xl font-display text-white mb-6 uppercase tracking-tight leading-none">
                                            {pillar.title}
                                        </h2>
                                    </div>
                                    <p className="text-zinc-500 font-sans font-light text-lg max-w-xl leading-relaxed">
                                        {pillar.description}
                                    </p>
                                </div>

                                <div className={`lg:col-span-7 aspect-[16/10] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 order-2 ${idx % 2 !== 0 ? "lg:order-2" : "lg:order-1"}`}>
                                    <img src={pillar.image} alt={pillar.title} className="w-full h-full object-cover" />
                                </div>

                                <div className={`lg:col-span-5 space-y-16 order-3 ${idx % 2 !== 0 ? "lg:order-1" : "lg:order-2"}`}>
                                    {pillar.areas.map((area, aIdx) => (
                                        <div key={aIdx} className="group">
                                            <h3 className="text-white font-display text-xl mb-8 tracking-widest uppercase flex items-center gap-4">
                                                <span className="text-[#c69955] text-xs font-serif italic">0{aIdx + 1}</span>
                                                {area.name}
                                                <span className="flex-grow h-[1px] bg-white/5 group-hover:bg-[#c69955]/30 transition-colors" />
                                            </h3>
                                            <ul className="grid grid-cols-1 gap-5">
                                                {area.items.map((item, iIdx) => (
                                                    <li key={iIdx} className="flex items-start gap-4 text-zinc-500 font-sans text-base font-light hover:text-white transition-colors">
                                                        <CheckCircle2 size={16} className="text-[#c69955] mt-1 shrink-0 opacity-50" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

                {/* Final CTA */}
                <section className="py-60 bg-black relative overflow-hidden">
                   <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none" 
                         style={{ backgroundImage: "radial-gradient(#c69955 1.5px, transparent 1.5px)", backgroundSize: "30px 30px" }} />
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <span className="text-[#c69955] text-[10px] tracking-[0.5em] uppercase font-bold mb-8 block">Estrategia Boutique</span>
                        <h2 className="text-5xl md:text-8xl font-display text-white mb-16 uppercase tracking-tighter leading-none">
                            ¿Listo para blindar <br />
                            <span className="italic font-light text-[#c69955]">su futuro patrimonial?</span>
                        </h2>
                        <Link
                            href="/#contact"
                            className="inline-block border border-[#c69955] text-[#c69955] px-20 py-8 text-[11px] tracking-[0.5em] font-bold uppercase transition-all hover:bg-[#c69955] hover:text-black"
                        >
                            Agendar Análisis Privado
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
