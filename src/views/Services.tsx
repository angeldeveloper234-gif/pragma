"use client";

import { motion } from "framer-motion";
import { Shield, Gavel, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const PILLARS = [
    {
        id: "legal",
        title: "División Jurídica Integral",
        subtitle: "Blindaje legal con visión de negocio",
        icon: Shield,
        description:
            "El área legal no solo resuelve conflictos, sino que diseña estructuras que facilitan el crecimiento sostenible y la seguridad jurídica de su patrimonio.",
        areas: [
            {
                name: "Derecho Corporativo y Mercantil",
                items: [
                    "Constitución y estructuración de sociedades",
                    "Gobierno corporativo y actas de asamblea",
                    "Fusiones, adquisiciones y escisiones (M&A)",
                    "Auditoría legal (Due Diligence)",
                ],
            },
            {
                name: "Contratos y Blindaje Operativo",
                items: [
                    "Diseño de contratos nacionales e internacionales",
                    "Protección de propiedad industrial e intelectual",
                    "Cumplimiento normativo (Compliance)",
                    "Gestión de riesgos contractuales",
                ],
            },
            {
                name: "Derecho Laboral y Seguridad Social",
                items: [
                    "Asesoría preventiva obrero-patronal",
                    "Auditoría de cumplimiento NOM-035",
                    "Estrategia para relaciones laborales",
                    "Defensa en juicios laborales",
                ],
            },
        ],
    },
    {
        id: "fiscal",
        title: "Estrategia Fiscal y Contable",
        subtitle: "Precisión técnica y eficiencia financiera",
        icon: TrendingUp,
        description:
            "Superamos la contabilidad tradicional para convertirnos en su socio estratégico. Optimizamos sus recursos bajo el más estricto apego al marco fiscal vigente.",
        areas: [
            {
                name: "Consultoría y Planeación Fiscal",
                items: [
                    "Estrategias de optimización tributaria",
                    "Interpretación de miscelánea fiscal vigente",
                    "Atención a revisiones y auditorías del SAT",
                    "Trámites de devolución de saldos a favor",
                ],
            },
            {
                name: "Auditoría Interna y Financiera",
                items: [
                    "Revisión de estados financieros",
                    "Control interno y prevención de fraudes",
                    "Valuación de activos intangibles",
                    "Análisis de rentabilidad operativa",
                ],
            },
            {
                name: "Contabilidad y Nómina",
                items: [
                    "Gestión contable mensual y anual",
                    "Administración de nómina y contribuciones",
                    "Presentación de declaraciones informativas",
                    "Contabilidad electrónica y registros digitales",
                ],
            },
        ],
    },
];

export function Services() {
    return (
        <main className="min-h-screen" style={{ backgroundColor: "#EEF1F6" }}>
            {/* ── Header ── */}
            <section className="pt-32 md:pt-40 pb-16 md:pb-20" style={{ backgroundColor: "#0F2240" }}>
                <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>
                    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p
                            className="text-[11px] tracking-[0.28em] uppercase font-semibold mb-5"
                            style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)" }}
                        >
                            Especialidades
                        </p>
                        <h1
                            className="font-bold text-white mb-5"
                            style={{
                                fontFamily: "'Author', sans-serif",
                                fontSize: "clamp(32px, 5vw, 52px)",
                                lineHeight: 1.1,
                            }}
                        >
                            Nuestros Servicios
                        </h1>
                        <p
                            className="leading-relaxed"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "17px",
                                color: "rgba(255,255,255,0.7)",
                                maxWidth: "560px",
                            }}
                        >
                            Integramos el rigor del derecho con la precisión contable para ofrecer
                            una defensa integral del patrimonio empresarial.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Pilares ── */}
            {PILLARS.map((pillar, idx) => (
                <section
                    key={pillar.id}
                    id={pillar.id}
                    className="py-28 md:py-40 border-t"
                    style={{
                        backgroundColor: idx % 2 === 0 ? "#ffffff" : "#F5F7FA",
                        borderColor: "#D8DFE9",
                    }}
                >
                    <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>
                        {/* Pillar header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className="w-10 h-10 flex items-center justify-center rounded-lg"
                                    style={{ backgroundColor: "#EEF1F6" }}
                                >
                                    <pillar.icon size={20} style={{ color: "#2C5494" }} />
                                </div>
                                <p
                                    className="text-[11px] tracking-[0.28em] uppercase font-semibold"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                                >
                                    {pillar.subtitle}
                                </p>
                            </div>
                            <h2
                                className="font-bold leading-tight mb-5"
                                style={{
                                    fontFamily: "'Author', sans-serif",
                                    fontSize: "clamp(32px, 4.5vw, 48px)",
                                    color: "#1A1D26",
                                }}
                            >
                                {pillar.title}
                            </h2>
                            <p
                                className="text-base leading-relaxed"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    color: "#4A5568",
                                    maxWidth: "600px",
                                }}
                            >
                                {pillar.description}
                            </p>
                        </motion.div>

                        {/* Area cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {pillar.areas.map((area, aIdx) => (
                                <motion.div
                                    key={aIdx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: aIdx * 0.1 }}
                                    className="p-8 rounded-xl bg-white"
                                    style={{ border: "1.5px solid #D8DFE9" }}
                                >
                                    <p
                                        className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-2"
                                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                                    >
                                        0{aIdx + 1}
                                    </p>
                                    <h3
                                        className="font-semibold mb-6 leading-snug"
                                        style={{
                                            fontFamily: "'Author', sans-serif",
                                            fontSize: "20px",
                                            color: "#1A1D26",
                                        }}
                                    >
                                        {area.name}
                                    </h3>
                                    <ul className="space-y-3">
                                        {area.items.map((item, iIdx) => (
                                            <li
                                                key={iIdx}
                                                className="flex items-start gap-3 text-sm leading-relaxed"
                                                style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                            >
                                                <CheckCircle2
                                                    size={15}
                                                    className="shrink-0 mt-0.5"
                                                    style={{ color: "#2C5494" }}
                                                />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}

            {/* ── CTA ── */}
            <section className="py-28 md:py-40" style={{ backgroundColor: "#0F2240" }}>
                <div className="container mx-auto px-6 text-center" style={{ maxWidth: "1200px" }}>
                    <h2
                        className="font-bold leading-tight mb-8 text-white"
                        style={{
                            fontFamily: "'Author', sans-serif",
                            fontSize: "clamp(28px, 4vw, 44px)",
                        }}
                    >
                        ¿Necesita asesoría especializada?
                    </h2>
                    <p
                        className="mb-12 mx-auto leading-relaxed"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "17px",
                            color: "rgba(255,255,255,0.7)",
                            maxWidth: "480px",
                        }}
                    >
                        Evaluamos su situación y diseñamos una estrategia personalizada
                        para la defensa de su patrimonio.
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-flex items-center gap-3 rounded-lg text-white font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
                        style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "13px",
                            letterSpacing: "0.08em",
                            backgroundColor: "#2C5494",
                            padding: "16px 40px",
                        }}
                    >
                        Agendar Consulta
                        <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
