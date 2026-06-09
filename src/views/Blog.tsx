"use client";

import { motion } from "framer-motion";
import { Clock, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const ALL_POSTS = [
    {
        title: "Nueva Reforma Fiscal 2026: Puntos Clave para Empresas",
        slug: "nueva-reforma-fiscal-2026",
        excerpt: "Analizamos el impacto de las nuevas disposiciones tributarias en el sector corporativo y cómo mitigar riesgos...",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800",
        category: "FISCAL",
        date: "15 Oct, 2026",
    },
    {
        title: "Protección Patrimonial en Entornos de Incertidumbre",
        slug: "proteccion-patrimonial-2026",
        excerpt: "Estrategias jurídicas sólidas para blindar los activos de su empresa y de su familia ante cambios legales...",
        image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800",
        category: "LEGAL",
        date: "02 Oct, 2026",
    },
    {
        title: "Auditorías del SAT: Cómo prepararse preventivamente",
        slug: "auditorias-sat-guia-preventiva",
        excerpt: "La importancia de mantener una contabilidad impecable y una estrategia preventiva ante las autoridades fiscales...",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800",
        category: "CONTABLE",
        date: "20 Sep, 2026",
    },
    {
        title: "Compliance Laboral: Retos para el Segundo Semestre",
        slug: "compliance-laboral-retos-2026",
        excerpt: "Nuevas normativas en materia de teletrabajo y obligaciones patronales que entrarán en vigor próximamente...",
        image: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?q=80&w=800",
        category: "LEGAL",
        date: "10 Sep, 2026",
    },
    {
        title: "Inversión Extranjera en México: Marco Jurídico",
        slug: "inversion-extranjera-mexico-2026",
        excerpt: "Un análisis detallado sobre las facilidades y restricciones para capitales foráneos en el mercado actual...",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800",
        category: "CORPORATIVO",
        date: "05 Sep, 2026",
    },
    {
        title: "Gestión de Activos Intangibles y Propiedad Intelectual",
        slug: "gestion-activos-intangibles",
        excerpt: "Cómo valuar y proteger las marcas y patentes como parte fundamental del balance contable de su empresa...",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=800",
        category: "FISCAL",
        date: "28 Ago, 2026",
    },
    {
        title: "Contratos de Outsourcing: Mitos y Realidades Legales",
        slug: "contratos-outsourcing-realidades",
        excerpt: "Entendiendo la delgada línea entre la especialización de servicios y la responsabilidad solidaria laboral...",
        image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800",
        category: "LEGAL",
        date: "20 Ago, 2026",
    },
    {
        title: "Fusiones y Adquisiciones: El Rol del Due Diligence",
        slug: "fusiones-adquisiciones-due-diligence",
        excerpt: "Por qué una revisión exhaustiva legal y fiscal es el paso más crítico antes de cualquier transacción mayor...",
        image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=800",
        category: "CORPORATIVO",
        date: "15 Ago, 2026",
    },
    {
        title: "Eficiencia Administrativa a través de la Digitalización",
        slug: "eficiencia-administrativa-digital",
        excerpt: "Cómo las herramientas de gestión interna están reduciendo costos operativos en los departamentos contables...",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
        category: "FISCAL",
        date: "10 Ago, 2026",
    },
];

const POSTS_PER_PAGE = 6;

export function Blog() {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(ALL_POSTS.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const currentPosts = ALL_POSTS.slice(startIndex, startIndex + POSTS_PER_PAGE);

    const goTo = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

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
                            Publicaciones
                        </p>
                        <h1
                            className="font-bold text-white mb-5"
                            style={{
                                fontFamily: "'Author', sans-serif",
                                fontSize: "clamp(32px, 5vw, 52px)",
                                lineHeight: 1.1,
                            }}
                        >
                            Blog
                        </h1>
                        <p
                            className="leading-relaxed"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "17px",
                                color: "rgba(255,255,255,0.7)",
                                maxWidth: "520px",
                            }}
                        >
                            Criterio profesional y análisis práctico sobre fiscalidad,
                            derecho corporativo y cumplimiento normativo.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── Featured post ── */}
            {currentPage === 1 && (
                <section className="py-16 md:py-20" style={{ backgroundColor: "#ffffff" }}>
                    <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <Link
                                href="/blog/inteligencia-corporativa-era-digital"
                                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-xl overflow-hidden"
                                style={{ border: "1.5px solid #D8DFE9" }}
                            >
                                <div className="aspect-[16/10] lg:aspect-auto overflow-hidden">
                                    <img
                                        src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=1200"
                                        alt="Destacado"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-8 md:p-12 flex flex-col justify-center bg-white">
                                    <p
                                        className="text-[10px] tracking-[0.2em] uppercase font-semibold mb-4"
                                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                                    >
                                        Destacado · Tecnología
                                    </p>
                                    <h2
                                        className="font-bold leading-tight mb-4 group-hover:text-[#2C5494] transition-colors"
                                        style={{
                                            fontFamily: "'Author', sans-serif",
                                            fontSize: "clamp(24px, 3vw, 32px)",
                                            color: "#1A1D26",
                                        }}
                                    >
                                        Inteligencia Corporativa en la Era Digital
                                    </h2>
                                    <p
                                        className="text-sm leading-relaxed mb-6"
                                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                    >
                                        La transparencia ya no es opcional, es la moneda de cambio
                                        del prestigio profesional.
                                    </p>
                                    <span
                                        className="inline-flex items-center gap-2 text-[11px] tracking-[0.15em] uppercase font-semibold"
                                        style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                                    >
                                        Leer artículo <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* ── Post grid ── */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-6" style={{ maxWidth: "1200px" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentPosts.map((post, i) => (
                            <motion.article
                                key={i + startIndex}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group flex flex-col rounded-xl overflow-hidden bg-white h-full transition-shadow duration-300 hover:shadow-md"
                                    style={{ border: "1.5px solid #D8DFE9" }}
                                >
                                    <div className="aspect-[16/10] overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span
                                                className="text-[9px] tracking-[0.2em] uppercase font-semibold"
                                                style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C5494" }}
                                            >
                                                {post.category}
                                            </span>
                                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#D8DFE9" }} />
                                            <span
                                                className="flex items-center gap-1.5 text-[9px] tracking-[0.1em] uppercase"
                                                style={{ fontFamily: "'DM Sans', sans-serif", color: "#8896AB" }}
                                            >
                                                <Clock size={10} /> {post.date}
                                            </span>
                                        </div>
                                        <h3
                                            className="font-semibold leading-snug mb-3 group-hover:text-[#2C5494] transition-colors"
                                            style={{
                                                fontFamily: "'Author', sans-serif",
                                                fontSize: "18px",
                                                color: "#1A1D26",
                                            }}
                                        >
                                            {post.title}
                                        </h3>
                                        <p
                                            className="text-sm leading-relaxed flex-1 line-clamp-3"
                                            style={{ fontFamily: "'DM Sans', sans-serif", color: "#4A5568" }}
                                        >
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div
                            className="flex items-center justify-between mt-16 pt-8 border-t"
                            style={{ borderColor: "#D8DFE9" }}
                        >
                            <button
                                onClick={() => goTo(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-semibold transition-opacity disabled:opacity-30"
                                style={{ fontFamily: "'DM Sans', sans-serif", color: "#1A1D26" }}
                            >
                                <ChevronLeft size={16} /> Anterior
                            </button>
                            <div className="flex gap-4">
                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goTo(i + 1)}
                                        className="w-8 h-8 rounded-md text-xs font-semibold transition-all"
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            backgroundColor: currentPage === i + 1 ? "#1B3564" : "transparent",
                                            color: currentPage === i + 1 ? "#ffffff" : "#4A5568",
                                        }}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => goTo(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] font-semibold transition-opacity disabled:opacity-30"
                                style={{ fontFamily: "'DM Sans', sans-serif", color: "#1A1D26" }}
                            >
                                Siguiente <ChevronRight size={16} />
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
